/* On-device replacement for server.py, used where no Python server can run (the Android app).
   Same endpoints, request bodies and JSON responses as server.py, stored in localStorage on the device.
   Active inside a native Capacitor app, or in a browser with ?local=1 (for testing). */
(() => {
  const native = !!(window.Capacitor && typeof window.Capacitor.isNativePlatform === 'function' && window.Capacitor.isNativePlatform());
  if (!native && !/[?&]local=1\b/.test(location.search)) return;

  const DB_KEY = 'ielts-local-db';
  const SESSION_KEY = 'ielts-local-session';
  const SESSION_DAYS = 30;
  const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const MODULES = ['listening', 'reading', 'writing'];
  const TYPES = ['academic', 'general'];

  class ApiError extends Error { constructor(status, message) { super(message); this.status = status; } }

  const now = () => new Date().toISOString().slice(0, 19).replace('T', ' '); // like SQLite datetime('now'), UTC
  const hex = bytes => Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
  const randHex = n => hex(crypto.getRandomValues(new Uint8Array(n)));

  function load() {
    try {
      const d = JSON.parse(localStorage.getItem(DB_KEY) || 'null');
      if (d && d.users) return d;
    } catch (e) { /* start fresh */ }
    return { users: [], sessions: {}, attempts: [], seq: { user: 0, attempt: 0 } };
  }
  function save(d) { localStorage.setItem(DB_KEY, JSON.stringify(d)); }

  async function hashPassword(password, salt) {
    const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits']);
    const salt8 = new Uint8Array(salt.match(/../g).map(h => parseInt(h, 16)));
    const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: salt8, iterations: 200000 }, key, 256);
    return hex(new Uint8Array(bits));
  }

  const userJson = u => ({ id: u.id, email: u.email, name: u.name, candidateNo: u.candidate_no, testType: u.test_type, createdAt: u.created_at });
  function attemptJson(a, full) {
    const d = {
      id: a.id, type: a.test_type, testNo: a.test_no, module: a.module, status: a.status, part: a.part,
      timeLeft: a.time_left, raw: a.raw_score, band: a.band, startedAt: a.started_at, updatedAt: a.updated_at,
      submittedAt: a.submitted_at
    };
    if (full) { d.answers = a.answers || {}; d.flags = a.flags || []; }
    return d;
  }

  function currentUser(d) {
    const t = localStorage.getItem(SESSION_KEY);
    if (!t) throw new ApiError(401, 'Not logged in');
    const s = d.sessions[t];
    const u = s && s.expires > Date.now() && d.users.find(x => x.id === s.user);
    if (!u) throw new ApiError(401, 'Session expired');
    return u;
  }
  function startSession(d, userId) {
    const token = randHex(24);
    for (const [k, s] of Object.entries(d.sessions)) if (s.expires < Date.now()) delete d.sessions[k];
    d.sessions[token] = { user: userId, expires: Date.now() + SESSION_DAYS * 86400e3 };
    localStorage.setItem(SESSION_KEY, token);
  }
  function testKey(t, no, m) {
    if (!TYPES.includes(t) || !MODULES.includes(m) || !Number.isInteger(no) || no < 1 || no > 99) throw new ApiError(400, 'Invalid test');
    return [t, no, m];
  }
  const openAttempt = (d, u, t, no, m) => d.attempts.find(a => a.user === u.id && a.test_type === t && a.test_no === no && a.module === m && a.status === 'in_progress');

  const routes = {
    'GET /api/ping': () => [200, { app: 'ielts-practice', local: true }],

    'POST /api/register': async (b, d) => {
      const email = String(b.email || '').trim().toLowerCase();
      const name = String(b.name || '').trim();
      const password = String(b.password || '');
      const testType = TYPES.includes(b.testType) ? b.testType : 'academic';
      if (!EMAIL_RE.test(email)) throw new ApiError(400, 'Please enter a valid email address.');
      if (name.length < 2) throw new ApiError(400, 'Please enter your full name.');
      if (password.length < 6) throw new ApiError(400, 'Password must be at least 6 characters.');
      if (d.users.some(u => u.email === email)) throw new ApiError(409, 'An account with this email already exists. Please log in.');
      let cand;
      do { cand = String(100000 + (crypto.getRandomValues(new Uint32Array(1))[0] % 900000)); } while (d.users.some(u => u.candidate_no === cand));
      const salt = randHex(16);
      const u = { id: ++d.seq.user, email, name, candidate_no: cand, password_hash: await hashPassword(password, salt), salt, test_type: testType, created_at: now() };
      d.users.push(u);
      startSession(d, u.id);
      return [201, { user: userJson(u) }];
    },

    'POST /api/login': async (b, d) => {
      const email = String(b.email || '').trim().toLowerCase();
      const u = d.users.find(x => x.email === email);
      if (!u || u.password_hash !== await hashPassword(String(b.password || ''), u.salt)) throw new ApiError(401, 'Incorrect email or password.');
      startSession(d, u.id);
      return [200, { user: userJson(u) }];
    },

    'POST /api/logout': (b, d) => {
      const t = localStorage.getItem(SESSION_KEY);
      if (t) delete d.sessions[t];
      localStorage.removeItem(SESSION_KEY);
      return [200, { ok: true }];
    },

    'GET /api/me': (b, d) => [200, { user: userJson(currentUser(d)) }],

    'POST /api/me': (b, d) => {
      const u = currentUser(d);
      if (TYPES.includes(b.testType)) u.test_type = b.testType;
      return [200, { user: userJson(u) }];
    },

    'GET /api/progress': (b, d) => {
      const u = currentUser(d);
      const rows = d.attempts.filter(a => a.user === u.id)
        .sort((x, y) => (y.submitted_at || y.updated_at).localeCompare(x.submitted_at || x.updated_at) || y.id - x.id);
      return [200, { attempts: rows.map(a => attemptJson(a)) }];
    },

    'GET /api/attempt': (b, d, q) => {
      const u = currentUser(d);
      let row;
      if (q.has('id')) row = d.attempts.find(a => a.id === +q.get('id') && a.user === u.id);
      else {
        const [t, no, m] = testKey(q.get('type'), parseInt(q.get('testNo'), 10) || 0, q.get('module'));
        const status = q.get('status') || 'in_progress';
        row = d.attempts.filter(a => a.user === u.id && a.test_type === t && a.test_no === no && a.module === m && a.status === status)
          .sort((x, y) => y.id - x.id)[0];
      }
      return [200, { attempt: row ? attemptJson(row, true) : null }];
    },

    'POST /api/attempt/save': (b, d) => {
      const [t, no, m] = testKey(b.type, b.testNo, b.module);
      const u = currentUser(d);
      const timeLeft = typeof b.timeLeft === 'number' ? Math.trunc(b.timeLeft) : null;
      let a = openAttempt(d, u, t, no, m);
      if (!a) {
        a = { id: ++d.seq.attempt, user: u.id, test_type: t, test_no: no, module: m, status: 'in_progress', raw_score: null, band: null, started_at: now(), submitted_at: null };
        d.attempts.push(a);
      }
      Object.assign(a, { answers: b.answers || {}, flags: b.flags || [], part: parseInt(b.part, 10) || 0, time_left: timeLeft, updated_at: now() });
      return [200, { id: a.id }];
    },

    'POST /api/attempt/submit': (b, d) => {
      const [t, no, m] = testKey(b.type, b.testNo, b.module);
      const u = currentUser(d);
      let a = openAttempt(d, u, t, no, m);
      if (!a) {
        a = { id: ++d.seq.attempt, user: u.id, test_type: t, test_no: no, module: m, part: 0, started_at: now() };
        d.attempts.push(a);
      }
      Object.assign(a, {
        status: 'submitted', answers: b.answers || {}, flags: b.flags || [],
        raw_score: Number.isInteger(b.raw) ? b.raw : null, band: typeof b.band === 'number' ? b.band : null,
        time_left: null, updated_at: now(), submitted_at: now()
      });
      return [200, { id: a.id }];
    },

    'DELETE /api/attempt': (b, d, q) => {
      const [t, no, m] = testKey(q.get('type'), parseInt(q.get('testNo'), 10) || 0, q.get('module'));
      const u = currentUser(d);
      d.attempts = d.attempts.filter(a => !(a.user === u.id && a.test_type === t && a.test_no === no && a.module === m && a.status === 'in_progress'));
      return [200, { ok: true }];
    }
  };

  window.LocalApi = {
    /** Handle an API call; resolves to { status, data } like an HTTP response. */
    async request(method, path, body) {
      const url = new URL(path, 'http://local');
      const route = routes[`${method} ${url.pathname}`];
      if (!route) return { status: 404, data: { error: 'Not found' } };
      const d = load();
      try {
        const [status, data] = await route(body || {}, d, url.searchParams);
        save(d);
        return { status, data };
      } catch (e) {
        if (e instanceof ApiError) return { status: e.status, data: { error: e.message } };
        console.error('Local API error', e);
        return { status: 500, data: { error: 'Storage error on this device.' } };
      }
    }
  };
})();
