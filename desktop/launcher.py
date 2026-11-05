"""Desktop launcher: starts the local server, opens the browser and shows a small control window.

Used as the entry point of the Windows/macOS app built with PyInstaller (see desktop/ielts.spec).
Can also be run directly:  python3 desktop/launcher.py
"""
import os
import sys
import threading
import urllib.request
import webbrowser

APP_NAME = 'IELTS Practice'
PORTS = range(5173, 5193)


def data_dir():
    if sys.platform == 'win32':
        base = os.environ.get('APPDATA') or os.path.expanduser('~')
    elif sys.platform == 'darwin':
        base = os.path.expanduser('~/Library/Application Support')
    else:
        base = os.environ.get('XDG_DATA_HOME') or os.path.expanduser('~/.local/share')
    path = os.path.join(base, APP_NAME)
    os.makedirs(path, exist_ok=True)
    return path


os.environ.setdefault('IELTS_DB_PATH', os.path.join(data_dir(), 'ielts.db'))

# A windowed build (PyInstaller console=False) has no console: sys.stdout/sys.stderr are None and
# anything written to them raises. Send output to a log file in the data folder instead.
if sys.stdout is None or sys.stderr is None:
    try:
        _log = open(os.path.join(data_dir(), 'ielts.log'), 'a', encoding='utf-8', buffering=1)
    except OSError:
        _log = open(os.devnull, 'w')
    sys.stdout = sys.stdout or _log
    sys.stderr = sys.stderr or _log
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
import server  # noqa: E402  (needs IELTS_DB_PATH set first)


def is_our_app(port):
    try:
        with urllib.request.urlopen('http://127.0.0.1:%d/api/ping' % port, timeout=1) as r:
            return b'ielts-practice' in r.read(200)
    except Exception:
        return False


def pick_port():
    """Return (port, already_running). A fixed port keeps browser settings between launches."""
    for port in PORTS:
        if not server.port_in_use(port):
            return port, False
        if is_our_app(port):
            return port, True
    raise SystemExit('No free port between %d and %d.' % (PORTS[0], PORTS[-1]))


def main():
    port, running = pick_port()
    url = 'http://localhost:%d' % port
    if running:
        webbrowser.open(url)
        return
    servers = server.start_servers(port)
    threading.Thread(target=servers[0].serve_forever, daemon=True).start()
    threading.Timer(0.6, lambda: webbrowser.open(url)).start()

    try:
        import tkinter as tk
    except ImportError:
        print('%s is running at %s. Press Ctrl+C to stop.' % (APP_NAME, url))
        try:
            threading.Event().wait()
        except KeyboardInterrupt:
            pass
        return

    root = tk.Tk()
    root.title(APP_NAME)
    root.resizable(False, False)
    frame = tk.Frame(root, padx=24, pady=20)
    frame.pack()
    tk.Label(frame, text=APP_NAME, font=('Helvetica', 16, 'bold')).pack(anchor='w')
    tk.Label(frame, text='The test is open in your web browser.\nKeep this window open while you practise.',
             justify='left').pack(anchor='w', pady=(6, 4))
    tk.Label(frame, text=url, fg='#1f6fd1').pack(anchor='w', pady=(0, 14))
    buttons = tk.Frame(frame)
    buttons.pack(fill='x')
    tk.Button(buttons, text='Open in browser', width=16, command=lambda: webbrowser.open(url)).pack(side='left')
    tk.Button(buttons, text='Quit', width=10, command=root.destroy).pack(side='right')
    root.protocol('WM_DELETE_WINDOW', root.destroy)
    root.mainloop()  # server threads are daemons, so the app exits when the window closes


if __name__ == '__main__':
    main()
