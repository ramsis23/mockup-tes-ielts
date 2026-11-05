#!/usr/bin/env python3
"""Server lokal untuk IELTS Practice Test: file statis + API akun & progres (SQLite).

Jalankan:  python3 server.py            (port 5173)
           python3 server.py 8080       (port lain)
Database:  data/ielts.db (dibuat otomatis).
Hanya memakai pustaka standar Python.
"""
import hashlib
import hmac
import json
import os
import re
import secrets
import socket
import sqlite3
import sys
import threading
import time
from http import cookies
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import parse_qs, urlparse

# Inside a PyInstaller bundle the web files live in sys._MEIPASS.
ROOT = getattr(sys, '_MEIPASS', None) or os.path.dirname(os.path.abspath(__file__))
# The desktop app keeps the database in the user's data folder (set by desktop/launcher.py).
DB_PATH = os.environ.get('IELTS_DB_PATH') or os.path.join(ROOT, 'data', 'ielts.db')
SESSION_DAYS = 30
COOKIE = 'ielts_session'
EMAIL_RE = re.compile(r'^[^@\s]+@[^@\s]+\.[^@\s]+$')
MODULES = ('listening', 'reading', 'writing')
TYPES = ('academic', 'general')
# Never serve these over HTTP (database, server source, tooling).
BLOCKED = ('/data', '/server.py', '/.claude', '/tools', '/.git')

_lock = threading.Lock()


def log(msg):
    """Write to stderr. A windowed desktop build has no console (sys.stderr is None), so never raise."""
    try:
        if sys.stderr is not None:
            sys.stderr.write(msg + '\n')
            sys.stderr.flush()
    except Exception:
        pass


def db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute('PRAGMA foreign_keys = ON')
    return conn


def init_db():
    os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
    with db() as c:
        c.executescript('''
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          email TEXT NOT NULL UNIQUE COLLATE NOCASE,
          name TEXT NOT NULL,
          candidate_no TEXT NOT NULL UNIQUE,
          password_hash TEXT NOT NULL,
          salt TEXT NOT NULL,
          test_type TEXT NOT NULL DEFAULT 'academic',
          created_at TEXT NOT NULL DEFAULT (datetime('now'))
        );
        CREATE TABLE IF NOT EXISTS sessions (
          token TEXT PRIMARY KEY,
          user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
          expires_at INTEGER NOT NULL
        );
        CREATE TABLE IF NOT EXISTS attempts (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
          test_type TEXT NOT NULL,
          test_no INTEGER NOT NULL,
          module TEXT NOT NULL,
          status TEXT NOT NULL CHECK (status IN ('in_progress', 'submitted')),
          answers TEXT NOT NULL DEFAULT '{}',
          flags TEXT NOT NULL DEFAULT '[]',
          part INTEGER NOT NULL DEFAULT 0,
          time_left INTEGER,
          raw_score INTEGER,
          band REAL,
          started_at TEXT NOT NULL DEFAULT (datetime('now')),
          updated_at TEXT NOT NULL DEFAULT (datetime('now')),
          submitted_at TEXT
        );
        CREATE INDEX IF NOT EXISTS idx_attempts_user ON attempts(user_id, test_type, test_no, module);
        -- At most one unfinished attempt per user, test and module.
        CREATE UNIQUE INDEX IF NOT EXISTS idx_attempts_open
          ON attempts(user_id, test_type, test_no, module) WHERE status = 'in_progress';
        ''')


def hash_password(password, salt):
    return hashlib.pbkdf2_hmac('sha256', password.encode(), bytes.fromhex(salt), 200_000).hex()


def user_json(u):
    return {'id': u['id'], 'email': u['email'], 'name': u['name'],
            'candidateNo': u['candidate_no'], 'testType': u['test_type'], 'createdAt': u['created_at']}


def attempt_json(a, full=False):
    d = {'id': a['id'], 'type': a['test_type'], 'testNo': a['test_no'], 'module': a['module'],
         'status': a['status'], 'part': a['part'], 'timeLeft': a['time_left'], 'raw': a['raw_score'],
         'band': a['band'], 'startedAt': a['started_at'], 'updatedAt': a['updated_at'],
         'submittedAt': a['submitted_at']}
    if full:
        d['answers'] = json.loads(a['answers'] or '{}')
        d['flags'] = json.loads(a['flags'] or '[]')
    return d


class ApiError(Exception):
    def __init__(self, status, message):
        super().__init__(message)
        self.status = status
        self.message = message


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def log_message(self, fmt, *args):
        if '/api/' in (self.path or ''):
            log('%s %s' % (self.command, self.path.split('?')[0]))

    def log_error(self, fmt, *args):
        log(fmt % args)

    # ---------------------------------------------------------------- routing
    def do_GET(self):
        path = urlparse(self.path).path
        if path.startswith('/api/'):
            return self.api('GET', path)
        if any(path == b or path.startswith(b + '/') for b in BLOCKED) or path.endswith('.db'):
            return self.send_error(404)
        return super().do_GET()

    def do_POST(self):
        self.api('POST', urlparse(self.path).path)

    def do_DELETE(self):
        self.api('DELETE', urlparse(self.path).path)

    def api(self, method, path):
        try:
            route = {
                ('GET', '/api/ping'): lambda: self.json(200, {'app': 'ielts-practice'}),
                ('POST', '/api/register'): self.register,
                ('POST', '/api/login'): self.login,
                ('POST', '/api/logout'): self.logout,
                ('GET', '/api/me'): self.me,
                ('POST', '/api/me'): self.update_me,
                ('GET', '/api/progress'): self.progress,
                ('GET', '/api/attempt'): self.get_attempt,
                ('POST', '/api/attempt/save'): self.save_attempt,
                ('POST', '/api/attempt/submit'): self.submit_attempt,
                ('DELETE', '/api/attempt'): self.discard_attempt,
            }.get((method, path))
            if not route:
                raise ApiError(404, 'Not found')
            route()
        except ApiError as e:
            self.json(e.status, {'error': e.message})
        except Exception as e:  # pragma: no cover - logged for local debugging
            log('API error: %r' % e)
            self.json(500, {'error': 'Server error'})

    # ---------------------------------------------------------------- helpers
    def body(self):
        n = int(self.headers.get('Content-Length') or 0)
        if n > 2_000_000:
            raise ApiError(413, 'Request too large')
        raw = self.rfile.read(n) if n else b'{}'
        try:
            data = json.loads(raw or b'{}')
        except ValueError:
            raise ApiError(400, 'Invalid JSON')
        if not isinstance(data, dict):
            raise ApiError(400, 'Invalid JSON')
        return data

    def query(self):
        return {k: v[0] for k, v in parse_qs(urlparse(self.path).query).items()}

    def json(self, status, payload, cookie=None):
        data = json.dumps(payload).encode()
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(data)))
        self.send_header('Cache-Control', 'no-store')
        if cookie is not None:
            self.send_header('Set-Cookie', cookie)
        self.end_headers()
        self.wfile.write(data)

    def token(self):
        c = cookies.SimpleCookie(self.headers.get('Cookie') or '')
        return c[COOKIE].value if COOKIE in c else None

    def user(self, conn):
        t = self.token()
        if not t:
            raise ApiError(401, 'Not logged in')
        row = conn.execute('''SELECT u.* FROM sessions s JOIN users u ON u.id = s.user_id
                              WHERE s.token = ? AND s.expires_at > ?''', (t, int(time.time()))).fetchone()
        if not row:
            raise ApiError(401, 'Session expired')
        return row

    def start_session(self, conn, user_id):
        token = secrets.token_urlsafe(32)
        conn.execute('INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)',
                     (token, user_id, int(time.time()) + SESSION_DAYS * 86400))
        conn.execute('DELETE FROM sessions WHERE expires_at < ?', (int(time.time()),))
        return '%s=%s; Path=/; HttpOnly; SameSite=Lax; Max-Age=%d' % (COOKIE, token, SESSION_DAYS * 86400)

    @staticmethod
    def test_key(d):
        t, no, m = d.get('type'), d.get('testNo'), d.get('module')
        if t not in TYPES or m not in MODULES or not isinstance(no, int) or not 1 <= no <= 99:
            raise ApiError(400, 'Invalid test')
        return t, no, m

    # ------------------------------------------------------------------ auth
    def register(self):
        d = self.body()
        email = str(d.get('email', '')).strip().lower()
        name = str(d.get('name', '')).strip()
        password = str(d.get('password', ''))
        test_type = d.get('testType') if d.get('testType') in TYPES else 'academic'
        if not EMAIL_RE.match(email):
            raise ApiError(400, 'Please enter a valid email address.')
        if len(name) < 2:
            raise ApiError(400, 'Please enter your full name.')
        if len(password) < 6:
            raise ApiError(400, 'Password must be at least 6 characters.')
        salt = secrets.token_hex(16)
        with _lock, db() as conn:
            if conn.execute('SELECT 1 FROM users WHERE email = ?', (email,)).fetchone():
                raise ApiError(409, 'An account with this email already exists. Please log in.')
            # Candidate number: 6 digits, unique.
            while True:
                cand = str(secrets.randbelow(900000) + 100000)
                if not conn.execute('SELECT 1 FROM users WHERE candidate_no = ?', (cand,)).fetchone():
                    break
            cur = conn.execute('''INSERT INTO users (email, name, candidate_no, password_hash, salt, test_type)
                                  VALUES (?, ?, ?, ?, ?, ?)''',
                               (email, name, cand, hash_password(password, salt), salt, test_type))
            cookie = self.start_session(conn, cur.lastrowid)
            u = conn.execute('SELECT * FROM users WHERE id = ?', (cur.lastrowid,)).fetchone()
        self.json(201, {'user': user_json(u)}, cookie)

    def login(self):
        d = self.body()
        email = str(d.get('email', '')).strip().lower()
        password = str(d.get('password', ''))
        with db() as conn:
            u = conn.execute('SELECT * FROM users WHERE email = ?', (email,)).fetchone()
            if not u or not hmac.compare_digest(u['password_hash'], hash_password(password, u['salt'])):
                raise ApiError(401, 'Incorrect email or password.')
            cookie = self.start_session(conn, u['id'])
        self.json(200, {'user': user_json(u)}, cookie)

    def logout(self):
        t = self.token()
        if t:
            with db() as conn:
                conn.execute('DELETE FROM sessions WHERE token = ?', (t,))
        self.json(200, {'ok': True}, '%s=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0' % COOKIE)

    def me(self):
        with db() as conn:
            self.json(200, {'user': user_json(self.user(conn))})

    def update_me(self):
        d = self.body()
        with db() as conn:
            u = self.user(conn)
            if d.get('testType') in TYPES:
                conn.execute('UPDATE users SET test_type = ? WHERE id = ?', (d['testType'], u['id']))
            u = conn.execute('SELECT * FROM users WHERE id = ?', (u['id'],)).fetchone()
        self.json(200, {'user': user_json(u)})

    # -------------------------------------------------------------- attempts
    def progress(self):
        with db() as conn:
            u = self.user(conn)
            rows = conn.execute('''SELECT * FROM attempts WHERE user_id = ?
                                   ORDER BY COALESCE(submitted_at, updated_at) DESC''', (u['id'],)).fetchall()
        self.json(200, {'attempts': [attempt_json(r) for r in rows]})

    def get_attempt(self):
        q = self.query()
        with db() as conn:
            u = self.user(conn)
            if 'id' in q:
                row = conn.execute('SELECT * FROM attempts WHERE id = ? AND user_id = ?',
                                   (int(q['id']), u['id'])).fetchone()
            else:
                t, no, m = self.test_key({'type': q.get('type'), 'testNo': int(q.get('testNo', 0) or 0),
                                          'module': q.get('module')})
                status = q.get('status', 'in_progress')
                row = conn.execute('''SELECT * FROM attempts WHERE user_id = ? AND test_type = ? AND test_no = ?
                                      AND module = ? AND status = ? ORDER BY id DESC LIMIT 1''',
                                   (u['id'], t, no, m, status)).fetchone()
        self.json(200, {'attempt': attempt_json(row, True) if row else None})

    def save_attempt(self):
        d = self.body()
        t, no, m = self.test_key(d)
        answers = json.dumps(d.get('answers') or {})
        flags = json.dumps(d.get('flags') or [])
        part = int(d.get('part') or 0)
        time_left = d.get('timeLeft')
        time_left = int(time_left) if isinstance(time_left, (int, float)) else None
        with _lock, db() as conn:
            u = self.user(conn)
            row = conn.execute('''SELECT id FROM attempts WHERE user_id = ? AND test_type = ? AND test_no = ?
                                  AND module = ? AND status = 'in_progress' ''', (u['id'], t, no, m)).fetchone()
            if row:
                conn.execute('''UPDATE attempts SET answers = ?, flags = ?, part = ?, time_left = ?,
                                updated_at = datetime('now') WHERE id = ?''', (answers, flags, part, time_left, row['id']))
                aid = row['id']
            else:
                aid = conn.execute('''INSERT INTO attempts (user_id, test_type, test_no, module, status, answers, flags,
                                      part, time_left) VALUES (?, ?, ?, ?, 'in_progress', ?, ?, ?, ?)''',
                                   (u['id'], t, no, m, answers, flags, part, time_left)).lastrowid
        self.json(200, {'id': aid})

    def submit_attempt(self):
        d = self.body()
        t, no, m = self.test_key(d)
        answers = json.dumps(d.get('answers') or {})
        flags = json.dumps(d.get('flags') or [])
        raw = d.get('raw') if isinstance(d.get('raw'), int) else None
        band = float(d['band']) if isinstance(d.get('band'), (int, float)) else None
        with _lock, db() as conn:
            u = self.user(conn)
            row = conn.execute('''SELECT id FROM attempts WHERE user_id = ? AND test_type = ? AND test_no = ?
                                  AND module = ? AND status = 'in_progress' ''', (u['id'], t, no, m)).fetchone()
            if row:
                conn.execute('''UPDATE attempts SET status = 'submitted', answers = ?, flags = ?, raw_score = ?,
                                band = ?, time_left = NULL, updated_at = datetime('now'), submitted_at = datetime('now')
                                WHERE id = ?''', (answers, flags, raw, band, row['id']))
                aid = row['id']
            else:
                aid = conn.execute('''INSERT INTO attempts (user_id, test_type, test_no, module, status, answers, flags,
                                      raw_score, band, submitted_at) VALUES (?, ?, ?, ?, 'submitted', ?, ?, ?, ?,
                                      datetime('now'))''', (u['id'], t, no, m, answers, flags, raw, band)).lastrowid
        self.json(200, {'id': aid})

    def discard_attempt(self):
        q = self.query()
        t, no, m = self.test_key({'type': q.get('type'), 'testNo': int(q.get('testNo', 0) or 0), 'module': q.get('module')})
        with db() as conn:
            u = self.user(conn)
            conn.execute('''DELETE FROM attempts WHERE user_id = ? AND test_type = ? AND test_no = ? AND module = ?
                            AND status = 'in_progress' ''', (u['id'], t, no, m))
        self.json(200, {'ok': True})


def port_in_use(port):
    """True if something already answers on localhost (IPv4 or IPv6) at this port."""
    for family, host in ((socket.AF_INET, '127.0.0.1'), (socket.AF_INET6, '::1')):
        try:
            with socket.socket(family, socket.SOCK_STREAM) as s:
                s.settimeout(0.5)
                if s.connect_ex((host, port)) == 0:
                    return True
        except OSError:
            pass
    return False


class Server(ThreadingHTTPServer):
    daemon_threads = True


class Server6(Server):
    address_family = socket.AF_INET6


def start_servers(port):
    """Create the database and start serving on localhost; the first server is not yet running."""
    init_db()
    servers = [Server(('127.0.0.1', port), Handler)]
    try:
        servers.append(Server6(('::1', port), Handler))  # serve IPv6 localhost too
    except (OSError, ValueError):
        pass
    for srv in servers[1:]:
        threading.Thread(target=srv.serve_forever, daemon=True).start()
    return servers


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 5173
    # Browsers may resolve "localhost" to IPv6 first, so another server on the same port
    # (e.g. "python3 -m http.server") would silently take the requests and the API would fail.
    if port_in_use(port):
        sys.exit('Port %d is already in use by another program (for example "python3 -m http.server %d").\n'
                 'Stop that program first (Ctrl+C in its terminal), or run: python3 server.py <other-port>' % (port, port))
    servers = start_servers(port)
    print('IELTS Practice Test running at http://localhost:%d  (database: %s)' % (port, os.path.relpath(DB_PATH, ROOT)))
    print('Keep this window open while you use the app. Press Ctrl+C to stop.')
    try:
        servers[0].serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == '__main__':
    main()
