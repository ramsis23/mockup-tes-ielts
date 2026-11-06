(() => {
  'use strict';

  let D = null;
  // Tests 11+ are Academic-only (no General Training Reading/Writing).
  const TEST_COUNTS = { academic: 13, general: 10 };
  const TYPES = { academic: 'Academic', general: 'General Training' };
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const app = $('#app');

  const MODULES = {
    listening: { name: 'Listening', time: 'Approximately 30 minutes' },
    reading: { name: 'Reading', time: '1 hour' },
    writing: { name: 'Writing', time: '1 hour' }
  };

  const state = {
    cand: { number: '', name: '' },
    user: null,
    attempts: [],
    saveTimer: null,
    autosave: null,
    type: 'academic',
    testNo: 1,
    queue: [],
    completed: [],
    module: null,
    part: 0,
    current: null,
    answers: { listening: {}, reading: {}, writing: {} },
    flags: { listening: new Set(), reading: new Set(), writing: new Set() },
    timeLeft: 0,
    timer: null,
    timerEnd: null,
    inTest: false,
    savedRange: null,
    settings: { size: 'standard', contrast: 'bow' }
  };

  /* ---------------------------------------------------------------- utils */
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const norm = s => String(s ?? '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const pad = n => String(n).padStart(2, '0');
  const range = ([a, b]) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
  const wordCount = t => (String(t).match(/[A-Za-z0-9À-ɏ'’-]+/g) || []).length;

  function store(key, val) {
    try { localStorage.setItem('ielts-mock-' + key, JSON.stringify(val)); } catch (e) { /* ignore */ }
  }
  function load(key) {
    try { return JSON.parse(localStorage.getItem('ielts-mock-' + key)); } catch (e) { return null; }
  }

  /* -------------------------------------------------------------- settings */
  function applySettings() {
    const b = document.body;
    b.classList.remove('size-large', 'size-xlarge', 'contrast-wob', 'contrast-yob');
    if (state.settings.size !== 'standard') b.classList.add('size-' + state.settings.size);
    if (state.settings.contrast !== 'bow') b.classList.add('contrast-' + state.settings.contrast);
    store('settings', state.settings);
  }

  /* ---------------------------------------------------------------- speech */
  const Speech = {
    ok: 'speechSynthesis' in window,
    v: {}, volume: 0.8, queue: [], i: 0, active: false, keep: [], to: null,
    init() {
      if (!this.ok) return;
      const pick = () => {
        const novelty = /bad news|bahh|bells|boing|bubbles|cellos|good news|jester|organ|superstar|trinoids|whisper|wobble|zarvox|albert|junior|ralph|grandma|grandpa|eddy|flo|reed|rocko|sandy|shelley/i;
        const all = speechSynthesis.getVoices().filter(v => /^en/i.test(v.lang) && !novelty.test(v.name));
        if (!all.length) return;
        // Prefer higher-quality voices (neural/enhanced/premium) when the system has them.
        const quality = v => /natural|neural|enhanced|premium|siri/i.test(v.name) ? 2 : /google/i.test(v.name) ? 1 : 0;
        all.sort((a, b) => quality(b) - quality(a));
        const gb = all.filter(v => /en[-_]GB/i.test(v.lang));
        const pool = gb.length ? gb : all;
        const F = /female|kate|serena|stephanie|martha|libby|sonia|susan|fiona|moira|karen|samantha|tessa|hazel/i;
        const M = /\bmale|daniel|oliver|arthur|ryan|thomas|george|alex|fred|rishi|aaron/i;
        const find = (re, list) => list.find(v => re.test(v.name));
        this.v.f = find(F, pool) || find(F, all) || pool[0];
        this.v.n = find(M, pool) || pool[0];
        this.v.m = all.filter(v => v !== this.v.n).find(v => M.test(v.name)) || this.v.n;
        this.all = all;
        this.quality = quality;
        // Voices chosen on the sound-check screen override the automatic choice.
        const saved = state.settings.voices || {};
        Object.keys(saved).forEach(r => { const v = all.find(x => x.name === saved[r]); if (v) this.v[r] = v; });
      };
      pick();
      speechSynthesis.onvoiceschanged = pick;
    },
    say(text, role, cb) {
      const u = new SpeechSynthesisUtterance(text);
      const voice = this.v[role] || this.v.n;
      if (voice) { u.voice = voice; u.lang = voice.lang; } else u.lang = 'en-GB';
      u.rate = voice && this.quality && this.quality(voice) === 2 ? 1 : 0.93;
      u.pitch = role === 'f' ? 1.1 : role === 'm' ? 0.92 : 1;
      u.volume = this.volume;
      this.keep.push(u);
      let done = false;
      const fin = () => { if (!done) { done = true; cb(); } };
      u.onend = fin;
      u.onerror = fin;
      speechSynthesis.speak(u);
    },
    play(segments, onPart, onEnd) {
      this.stop();
      this.queue = segments; this.i = 0; this.active = true;
      this.onPart = onPart; this.onEnd = onEnd;
      this.next();
    },
    next() {
      if (!this.active) return;
      if (this.i >= this.queue.length) { this.active = false; if (this.onEnd) this.onEnd(); return; }
      const s = this.queue[this.i++];
      if (s.part !== undefined && this.onPart) this.onPart(s.part);
      if (s.role === 'P') this.to = setTimeout(() => this.next(), s.text * 1000);
      else if (s.role === 'FILE') this.playFile(s.text, () => this.next());
      else this.say(s.text, s.role, () => this.next());
    },
    playFile(src, cb) {
      const a = new Audio(src);
      a.volume = this.volume;
      this.el = a;
      let done = false;
      const fin = () => { if (!done) { done = true; this.el = null; cb(); } };
      a.onended = fin;
      a.onerror = fin;
      a.play().catch(fin);
    },
    setVolume(v) {
      this.volume = v;
      if (this.el) this.el.volume = v;
    },
    stop() {
      this.active = false;
      clearTimeout(this.to);
      if (this.el) { this.el.onended = this.el.onerror = null; this.el.pause(); this.el = null; }
      if (this.ok) speechSynthesis.cancel();
      this.keep = [];
    }
  };

  // Resolves to the duration (seconds) if the MP3 can be loaded, otherwise null.
  function probeAudio(src) {
    return new Promise(resolve => {
      const a = new Audio();
      const t = setTimeout(() => resolve(null), 4000);
      a.preload = 'metadata';
      a.onloadedmetadata = () => { clearTimeout(t); resolve(isFinite(a.duration) ? a.duration : 0); };
      a.onerror = () => { clearTimeout(t); resolve(null); };
      a.src = src;
    });
  }

  // Each part plays its MP3 (audio/listening-NN-partK.mp3 or part.audioFile) when available, else TTS.
  async function listeningSegments(fromPart = 0) {
    const segs = [];
    const files = await Promise.all(D.listening.parts.map((p, pi) =>
      probeAudio(p.audioFile || `audio/listening-${pad(state.testNo)}-part${pi + 1}.mp3`)
        .then(d => d === null ? null : { src: p.audioFile || `audio/listening-${pad(state.testNo)}-part${pi + 1}.mp3`, d })));
    D.listening.parts.forEach((p, pi) => {
      if (pi < fromPart) return;
      if (files[pi]) { segs.push({ role: 'FILE', text: files[pi].src, dur: files[pi].d, part: pi }); return; }
      if (!Speech.ok) return;
      p.audio.forEach(([r, t], j) => {
        const role = r === 'P' ? 'P' : r === 'N' ? 'n' : p.speakers[r];
        segs.push({ role, text: t, part: j === 0 ? pi : undefined });
      });
    });
    return segs;
  }
  function estimateSeconds(segs) {
    return Math.round(segs.reduce((s, x) => s + (x.role === 'P' ? x.text : x.role === 'FILE' ? x.dur : wordCount(x.text) / 2.4 + 0.6), 0));
  }

  /* ---------------------------------------------------------------- icons */
  const ICON = {
    clock: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    vol: '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    wifi: '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.5 16a5 5 0 0 1 7 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="19" r="1.5" fill="currentColor"/></svg>',
    bell: '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M6 17V11a6 6 0 0 1 12 0v6l2 2H4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M10 21h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    menu: '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    left: '<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    right: '<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  /* --------------------------------------------------------- simple screens */
  function brand() {
    return '<div class="brand"><span class="brand-mark">IELTS</span><span class="brand-sub">Practice&nbsp;Test</span></div>';
  }
  function candLabel() {
    return `<span class="cand">${esc(state.cand.number)} – ${esc(state.cand.name)}</span>${D ? `<span class="test-badge">${TYPES[state.type]} · Test ${state.testNo}</span>` : ''}`;
  }
  function simpleHeader(withCand) {
    const logout = state.user ? `<button class="tb-text" data-act="logout">Log out</button>` : '';
    return `<header class="topbar"><div class="tb-left">${brand()}${withCand ? candLabel() : ''}</div><div class="tb-right">${logout}<button class="icon-btn" data-act="settings" title="Settings">${ICON.menu}</button></div></header>`;
  }
  function disclaimer() {
    return '<footer class="disclaimer">Mockup latihan independen. Tidak berafiliasi dengan British Council, IDP, atau Cambridge University Press &amp; Assessment. Semua soal adalah konten orisinal.</footer>';
  }
  function render(html) {
    app.innerHTML = html;
    window.scrollTo(0, 0);
  }

  /* ------------------------------------------------------------------ api */
  // All account and progress data lives in SQLite behind server.py.
  async function api(path, opts = {}) {
    let res;
    try {
      res = await fetch(path, {
        method: opts.method || (opts.body ? 'POST' : 'GET'),
        headers: opts.body ? { 'Content-Type': 'application/json' } : undefined,
        body: opts.body ? JSON.stringify(opts.body) : undefined,
        credentials: 'same-origin'
      });
    } catch (e) {
      throw new Error('Cannot reach the server. Start it with: python3 server.py');
    }
    let data = {};
    try { data = await res.json(); } catch (e) {
      if (res.status === 404 || res.status === 501) throw new Error('The account server is not running. Start the app with: python3 server.py');
    }
    if (!res.ok) {
      const err = new Error(data.error || `Request failed (${res.status})`);
      err.status = res.status;
      if (res.status === 401 && state.user && !opts.quiet) sessionExpired();
      throw err;
    }
    return data;
  }

  function sessionExpired() {
    state.user = null;
    state.inTest = false;
    clearInterval(state.timer);
    stopAutosave();
    Speech.stop();
    modal('<h3>Session expired</h3><p>Please log in again. Your saved progress is kept.</p>', [{ label: 'Log in', primary: true, act: () => showAuth('login') }]);
  }

  function setUser(u) {
    state.user = u;
    state.cand = { number: u.candidateNo, name: u.name };
    if (u.testType && u.testType !== state.type) setType(u.testType);
  }

  async function refreshProgress() {
    const d = await api('/api/progress');
    state.attempts = d.attempts;
  }

  function showError(e) {
    modal(`<h3>Something went wrong</h3><p>${esc(e.message)}</p>`, [{ label: 'Close', primary: true }]);
  }

  /* -------------------------------------------------------------- welcome */
  function showWelcome() {
    render(`${simpleHeader(false)}
      <main class="page"><div class="card wide">
        <h1>IELTS on Computer – Practice Tests</h1>
        <p class="lead">${TEST_COUNTS.academic} complete Academic and ${TEST_COUNTS.general} General Training practice tests. The interface reproduces the computer-delivered IELTS test: the timer, the question navigator, split-screen reading, highlighting and notes, and on-screen writing with a word count.</p>
        <div class="info-grid">
          <div><h3>Listening</h3><p>4 parts · 40 questions<br>~30 minutes</p></div>
          <div><h3>Reading</h3><p>3 passages · 40 questions<br>60 minutes</p></div>
          <div><h3>Writing</h3><p>2 tasks<br>60 minutes</p></div>
        </div>
        <p class="hint">Buat akun sekali, lalu login kapan saja: jawaban tersimpan otomatis sehingga tes bisa dilanjutkan, dan semua hasil tersimpan di riwayat. Audio Listening memakai rekaman MP3 di folder <code>audio/</code> (atau text-to-speech browser). Pakai headphone. Speaking tidak termasuk karena pada tes asli dilakukan tatap muka dengan examiner.</p>
        <div class="btn-row"><button class="btn primary" id="login">Log in</button><button class="btn" id="register">Create an account</button></div>
      </div></main>${disclaimer()}`);
    $('#login').onclick = () => showAuth('login');
    $('#register').onclick = () => showAuth('register');
  }

  /* ---------------------------------------------------- login & register */
  function showAuth(mode) {
    const reg = mode === 'register';
    render(`${simpleHeader(false)}
      <main class="page"><div class="card narrow">
        <div class="type-tabs auth-tabs" role="tablist">
          <button role="tab" class="type-tab${reg ? '' : ' active'}" data-auth="login" aria-selected="${!reg}">Log in</button>
          <button role="tab" class="type-tab${reg ? ' active' : ''}" data-auth="register" aria-selected="${reg}">Create account</button>
        </div>
        <h2>${reg ? 'Create your account' : 'Log in to your account'}</h2>
        <p class="small">${reg ? 'Your email is your username. A candidate number is assigned automatically.' : 'Continue your tests and see your results.'}</p>
        <form id="authForm" novalidate>
          ${reg ? '<label class="field"><span>Full name</span><input id="fName" autocomplete="name" maxlength="60" placeholder="e.g. Ahmad Rizki"></label>' : ''}
          <label class="field"><span>Email</span><input id="fEmail" type="email" autocomplete="${reg ? 'email' : 'username'}" maxlength="120" placeholder="name@example.com"></label>
          <label class="field"><span>Password</span><input id="fPass" type="password" autocomplete="${reg ? 'new-password' : 'current-password'}" maxlength="128"></label>
          ${reg ? `<label class="field"><span>Confirm password</span><input id="fPass2" type="password" autocomplete="new-password" maxlength="128"></label>
          <fieldset class="field type-field"><span>Test type</span>
            ${Object.entries(TYPES).map(([k, l]) => `<label class="type-opt"><input type="radio" name="ttype" value="${k}" ${state.type === k ? 'checked' : ''}> ${l}</label>`).join('')}
          </fieldset>` : ''}
          <p class="form-error" id="authErr" role="alert"></p>
          <button class="btn primary" type="submit" id="authBtn">${reg ? 'Create account' : 'Log in'}</button>
        </form>
      </div></main>${disclaimer()}`);
    $$('[data-auth]').forEach(b => b.onclick = () => showAuth(b.dataset.auth));
    $(reg ? '#fName' : '#fEmail').focus();
    $('#authForm').onsubmit = async e => {
      e.preventDefault();
      const err = $('#authErr');
      const email = $('#fEmail').value.trim();
      const password = $('#fPass').value;
      err.textContent = '';
      if (reg && $('#fName').value.trim().length < 2) return void (err.textContent = 'Please enter your full name.');
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return void (err.textContent = 'Please enter a valid email address.');
      if (reg && password.length < 6) return void (err.textContent = 'Password must be at least 6 characters.');
      if (reg && password !== $('#fPass2').value) return void (err.textContent = 'The passwords do not match.');
      if (!password) return void (err.textContent = 'Please enter your password.');
      $('#authBtn').disabled = true;
      try {
        const d = reg
          ? await api('/api/register', { body: { email, password, name: $('#fName').value.trim(), testType: $('input[name=ttype]:checked').value } })
          : await api('/api/login', { body: { email, password } });
        setUser(d.user);
        const sent = await flushPending();
        if (sent) toast(`${sent} saved result${sent > 1 ? 's were' : ' was'} uploaded to your account.`);
        await refreshProgress();
        showConfirm(reg);
      } catch (ex) {
        err.textContent = ex.message;
        $('#authBtn').disabled = false;
      }
    };
  }

  function showConfirm(isNew) {
    const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    render(`${simpleHeader(true)}
      <main class="page"><div class="card narrow">
        <h2>${isNew ? 'Account created' : 'Confirm your details'}</h2>
        ${isNew ? '<p>Please note your candidate number. You log in with your email and password.</p>' : ''}
        <table class="details">
          <tr><th>Name</th><td>${esc(state.cand.name)}</td></tr>
          <tr><th>Email</th><td>${esc(state.user.email)}</td></tr>
          <tr><th>Candidate number</th><td>${esc(state.cand.number)}</td></tr>
          <tr><th>Test date</th><td>${today}</td></tr>
          <tr><th>Module</th><td>${TYPES[state.type]}</td></tr>
        </table>
        <button class="btn primary" id="ok">My details are correct</button>
        <p class="small">Not you? <a href="#" id="back">Log out</a>.</p>
      </div></main>${disclaimer()}`);
    $('#ok').onclick = showSelect;
    $('#back').onclick = e => { e.preventDefault(); logout(); };
  }

  async function logout() {
    if (state.inTest) return;
    try { await api('/api/logout', { method: 'POST', quiet: true }); } catch (e) { /* ignore */ }
    state.user = null;
    state.attempts = [];
    state.cand = { number: '', name: '' };
    D = null;
    resetProgress();
    showWelcome();
  }

  /* ------------------------------------------------- test choice & loading */
  function resetProgress() {
    state.answers = { listening: {}, reading: {}, writing: {} };
    Object.values(state.flags).forEach(f => f.clear());
    state.completed = [];
  }
  function setType(t) {
    if (t === state.type) return;
    state.type = t;
    D = null;
    resetProgress();
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = () => reject(new Error('Cannot load ' + src));
      document.head.appendChild(s);
    });
  }

  async function loadTest(no) {
    if (!IELTS.get('listening', no)) await loadScript(`js/tests/test-${pad(no)}.js`);
    const bundle = {
      listening: IELTS.get('listening', no),
      reading: IELTS.get('reading-' + state.type, no),
      writing: IELTS.get('writing-' + state.type, no)
    };
    if (!bundle.listening || !bundle.reading || !bundle.writing) throw new Error(`Test ${no} (${TYPES[state.type]}) is incomplete`);
    if (D && no === state.testNo) return;
    D = bundle;
    state.testNo = no;
    resetProgress();
  }

  // Progress is kept per test type: a Listening attempt taken under Academic does not show under General Training.
  const sameTest = (a, type, no, m) => a.testNo === no && a.module === m && a.type === type;
  function latest(type, no, m, status) {
    return state.attempts.find(a => a.status === status && sameTest(a, type, no, m)) || null;
  }
  const fmtDate = s => s ? new Date(s.replace(' ', 'T') + 'Z').toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '';
  const fmtBand = b => b == null ? '—' : Number(b).toFixed(1);

  function dashboard() {
    const sub = state.attempts.filter(a => a.status === 'submitted');
    const open = state.attempts.filter(a => a.status === 'in_progress');
    const avg = m => {
      const b = sub.filter(a => a.module === m && a.band != null).map(a => a.band);
      return b.length ? overall(b).toFixed(1) : '—';
    };
    const testsDone = new Set(sub.map(a => `${a.type}-${a.testNo}-${a.module}`)).size;
    return `<section class="dash">
      <div class="dash-stats">
        <div><b>${testsDone}</b><span>modules completed</span></div>
        <div><b>${avg('listening')}</b><span>avg Listening</span></div>
        <div><b>${avg('reading')}</b><span>avg Reading</span></div>
        <div><b>${sub.filter(a => a.module === 'writing').length}</b><span>Writing tasks done</span></div>
      </div>
      ${open.length ? `<h3>Continue where you left off</h3><div class="dash-list">${open.map(a => `
        <div class="dash-row"><span><b>${TYPES[a.type]} · Test ${a.testNo} · ${MODULES[a.module].name}</b><br><small>Saved ${fmtDate(a.updatedAt)}${a.timeLeft != null && a.module !== 'listening' ? ` · ${Math.ceil(a.timeLeft / 60)} min left` : ''}</small></span>
        <button class="btn small-btn primary" data-resume="${a.id}">Continue</button></div>`).join('')}</div>` : ''}
      ${sub.length ? `<details class="dash-history"${open.length ? '' : ' open'}><summary>Result history (${sub.length})</summary><table class="review-table">
        <thead><tr><th>Date</th><th>Test</th><th>Module</th><th>Score</th><th></th></tr></thead><tbody>
        ${sub.map(a => `<tr><td>${fmtDate(a.submittedAt)}</td><td>${TYPES[a.type]} ${a.testNo}</td><td>${MODULES[a.module].name}</td>
          <td>${a.module === 'writing' ? 'submitted' : `<b>${fmtBand(a.band)}</b> (${a.raw}/40)`}</td>
          <td><button class="btn small-btn" data-view="${a.id}">View</button></td></tr>`).join('')}
        </tbody></table></details>` : ''}
    </section>`;
  }

  async function showSelect() {
    if (state.user) {
      try { await refreshProgress(); } catch (e) { if (e.status === 401) return; showError(e); }
    }
    const tests = Array.from({ length: TEST_COUNTS[state.type] }, (_, i) => i + 1).map(n => {
      const bits = ['listening', 'reading', 'writing'].map(m => {
        const s = latest(state.type, n, m, 'submitted');
        const o = latest(state.type, n, m, 'in_progress');
        const k = m[0].toUpperCase();
        if (s) return m === 'writing' ? 'W ✓' : `${k} ${fmtBand(s.band)}`;
        return o ? `${k} …` : '';
      }).filter(Boolean).join(' · ');
      return `<button class="test-btn${D && n === state.testNo ? ' active' : ''}" data-test="${n}"><b>Test ${n}</b><span>${bits || 'Not taken'}</span></button>`;
    }).join('');
    const tag = m => {
      if (!D) return '';
      if (latest(state.type, state.testNo, m, 'in_progress')) return '<span class="tag progress">In progress</span>';
      const s = latest(state.type, state.testNo, m, 'submitted');
      return s ? `<span class="tag">Completed${m === 'writing' ? '' : ` · ${fmtBand(s.band)}`}</span>` : '';
    };
    const hasResults = D && ['listening', 'reading', 'writing'].some(m => latest(state.type, state.testNo, m, 'submitted'));
    render(`${simpleHeader(true)}
      <main class="page"><div class="card wide">
        <h2>Welcome, ${esc(state.cand.name)}</h2>
        ${state.user ? dashboard() : ''}
        <h2 class="choose-title">Choose your test</h2>
        <div class="type-tabs" role="tablist">${Object.entries(TYPES).map(([k, l]) =>
          `<button role="tab" aria-selected="${state.type === k}" class="type-tab${state.type === k ? ' active' : ''}" data-type="${k}">${l}</button>`).join('')}</div>
        <p class="small">Listening uses the same questions in both test types; Reading and Writing differ. Your progress and results are kept separately for Academic and General Training.</p>
        <div class="test-grid">${tests}</div>
        ${D ? `
        <h3 class="sel-title">${TYPES[state.type]} · Test ${state.testNo}</h3>
        <button class="btn primary big" data-full>Full test: Listening → Reading → Writing</button>
        <div class="module-list">
          ${Object.entries(MODULES).map(([k, m]) => `
            <button class="module-btn" data-mod="${k}"><b>${m.name}</b><span>${m.time}</span>${tag(k)}</button>`).join('')}
        </div>
        ${hasResults ? '<button class="btn" id="toResults">View latest results for this test</button>' : ''}` : '<p class="sel-hint">Select a test number to begin.</p>'}
      </div></main>${disclaimer()}`);
    $$('[data-type]').forEach(b => b.onclick = () => {
      setType(b.dataset.type);
      if (state.user) api('/api/me', { body: { testType: b.dataset.type } }).catch(() => {});
      showSelect();
    });
    $$('[data-test]').forEach(b => b.onclick = async () => {
      const no = +b.dataset.test;
      if (D && no === state.testNo) return;
      try { await loadTest(no); showSelect(); } catch (e) { modal(`<h3>Test not available</h3><p>${esc(e.message)}</p>`, [{ label: 'Close', primary: true }]); }
    });
    const full = $('[data-full]');
    if (full) full.onclick = () => { state.queue = ['listening', 'reading', 'writing']; nextModule(); };
    $$('[data-mod]').forEach(b => b.onclick = () => { state.queue = [b.dataset.mod]; nextModule(); });
    const r = $('#toResults');
    if (r) r.onclick = () => openResults();
    $$('[data-resume]').forEach(b => b.onclick = () => resumeAttempt(+b.dataset.resume));
    $$('[data-view]').forEach(b => b.onclick = () => viewAttempt(+b.dataset.view));
  }

  async function openTestOf(a) {
    if (a.type !== state.type) setType(a.type);
    await loadTest(a.testNo);
  }

  async function resumeAttempt(id) {
    const a = state.attempts.find(x => x.id === id);
    if (!a) return;
    try {
      await openTestOf(a);
      state.queue = [a.module];
      nextModule();
    } catch (e) { showError(e); }
  }

  async function viewAttempt(id) {
    try {
      const { attempt } = await api(`/api/attempt?id=${id}`);
      await openTestOf(attempt);
      resetProgress();
      state.answers[attempt.module] = attempt.answers;
      state.completed = [attempt.module];
      showResults({ [attempt.module]: attempt });
    } catch (e) { showError(e); }
  }

  // Latest submitted attempt of every module for the selected test.
  async function openResults() {
    try {
      resetProgress();
      const meta = {};
      for (const m of ['listening', 'reading', 'writing']) {
        const s = latest(state.type, state.testNo, m, 'submitted');
        if (!s) continue;
        const { attempt } = await api(`/api/attempt?id=${s.id}`);
        state.answers[m] = attempt.answers;
        state.completed.push(m);
        meta[m] = attempt;
      }
      showResults(meta);
    } catch (e) { showError(e); }
  }

  async function nextModule() {
    const m = state.queue.shift();
    if (!m) return openResults();
    state.resume = null;
    const proceed = () => (m === 'listening' ? showSoundCheck() : showInstructions(m));
    const open = state.user && latest(state.type, state.testNo, m, 'in_progress');
    const backup = state.user && load(backupKey(state.type, state.testNo, m));
    if (!open && !backup) return proceed();
    let saved = null;
    if (open) {
      try { saved = (await api(`/api/attempt?id=${open.id}`)).attempt; } catch (e) { return showError(e); }
    }
    // A local copy newer than the server's (saved while the server was down) wins.
    if (backup && (!saved || backup.savedAt > Date.parse(saved.updatedAt.replace(' ', 'T') + 'Z'))) {
      saved = Object.assign({}, saved || {}, { type: backup.type, testNo: backup.testNo, module: m, answers: backup.answers,
        flags: backup.flags, part: backup.part, timeLeft: backup.timeLeft, updatedAt: new Date(backup.savedAt).toISOString().replace('T', ' ').slice(0, 19) });
    }
    const answered = Object.values(saved.answers || {}).filter(v => String(v).trim()).length;
    const where = m === 'listening'
      ? `The audio will restart from the beginning of <b>Part ${saved.part + 1}</b>.`
      : `You will return to <b>Part ${saved.part + 1}</b> with <b>${Math.ceil((saved.timeLeft ?? 3600) / 60)} minutes</b> left.`;
    modal(`<h3>Continue your ${MODULES[m].name} test?</h3>
      <p>You have an unfinished attempt saved on ${fmtDate(saved.updatedAt)} with ${answered} answer${answered === 1 ? '' : 's'}.</p><p>${where}</p>`, [
      { label: 'Start again', act: async () => {
        try { await api(`/api/attempt?type=${saved.type}&testNo=${saved.testNo}&module=${m}`, { method: 'DELETE' }); await refreshProgress(); } catch (e) { return showError(e); }
        try { localStorage.removeItem('ielts-mock-' + backupKey(saved.type, saved.testNo, m)); } catch (e) { /* ignore */ }
        proceed();
      } },
      { label: 'Continue', primary: true, act: () => { state.resume = saved; proceed(); } }
    ]);
  }

  function showSoundCheck() {
    render(`${simpleHeader(true)}
      <main class="page"><div class="card narrow">
        <h2>Test sound</h2>
        <p>Put on your headphones and click on the <b>Play sound</b> button to play a sample sound.</p>
        <button class="btn" id="play">${ICON.vol}<span>Play sound</span></button>
        <label class="vol-row">Volume <input type="range" id="vol" min="0" max="1" step="0.05" value="${Speech.volume}"></label>
        ${Speech.ok ? `<div class="voice-box" id="voiceBox"></div>` : '<p class="warn-box">Browser ini tidak mendukung Web Speech (text-to-speech). Gunakan Chrome, Edge atau Safari terbaru agar audio Listening dapat diputar.</p>'}
        <p class="small">If you cannot hear the sound clearly, please tell the invigilator.</p>
        <button class="btn primary" id="cont">Continue</button>
      </div></main>${disclaimer()}`);
    $('#vol').oninput = e => { Speech.volume = +e.target.value; };
    if (Speech.ok) renderVoicePicker();
    $('#play').onclick = () => {
      if (!Speech.ok) return;
      Speech.stop();
      Speech.active = true;
      Speech.say('This is a sound test. Adjust the volume until you can hear clearly.', 'n', () => { Speech.active = false; });
    };
    $('#cont').onclick = () => { Speech.stop(); showInstructions('listening'); };
  }

  const VOICE_ROLES = { n: ['Narrator', 'Welcome to the IELTS Listening test.'], f: ['Female speaker', 'Hello, I’d like to book a table for Friday evening, please.'], m: ['Male speaker', 'Of course. How many people will be joining you?'] };

  function renderVoicePicker() {
    const box = $('#voiceBox');
    if (!box) return;
    const all = Speech.all || [];
    if (!all.length) { setTimeout(renderVoicePicker, 400); return; }
    const best = all.filter(v => Speech.quality(v) === 2).length;
    box.innerHTML = `<h3>Voices</h3>
      ${best ? `<p class="small">${best} natural-sounding voice${best > 1 ? 's' : ''} found and selected automatically.</p>`
        : '<p class="warn-box small">Hanya suara standar (terdengar seperti robot) yang tersedia di browser ini. Untuk suara natural, buka aplikasi ini di <b>Microsoft Edge</b> (suara “Natural”), atau unduh suara <b>Enhanced/Premium</b> di macOS: System Settings → Accessibility → Spoken Content → System voice → Manage Voices, lalu buka ulang browser.</p>'}
      ${Object.entries(VOICE_ROLES).map(([r, [label]]) => `
        <div class="voice-row"><label for="vs-${r}">${label}</label>
          <select id="vs-${r}" data-role="${r}">${all.map(v => `<option value="${esc(v.name)}"${Speech.v[r] === v ? ' selected' : ''}>${Speech.quality(v) === 2 ? '★ ' : ''}${esc(v.name)} (${esc(v.lang)})</option>`).join('')}</select>
          <button class="btn small-btn" data-try="${r}">Try</button></div>`).join('')}`;
    $$('select[data-role]', box).forEach(s => s.onchange = () => {
      Speech.v[s.dataset.role] = all.find(v => v.name === s.value);
      state.settings.voices = Object.assign({}, state.settings.voices, { [s.dataset.role]: s.value });
      store('settings', state.settings);
    });
    $$('[data-try]', box).forEach(b => b.onclick = () => {
      Speech.stop();
      Speech.active = true;
      Speech.say(VOICE_ROLES[b.dataset.try][1], b.dataset.try, () => { Speech.active = false; });
    });
  }

  const INSTRUCTIONS = {
    listening: {
      todo: ['Answer all the questions.', 'You can change your answers at any time during the test.'],
      info: ['There are 40 questions in this test.', 'Each question carries one mark.', 'There are four parts to the test.', 'You will hear each part once.', 'For each part of the test, there will be time for you to look at the questions and time for you to check your answers.']
    },
    reading: {
      todo: ['Answer all the questions.', 'You can change your answers at any time during the test.'],
      info: ['There are 40 questions in this test.', 'Each question carries one mark.', 'There are three parts to the test.', 'The test clock will show you when there are 10 minutes and 5 minutes remaining.']
    },
    writing: {
      todo: ['Answer both parts.', 'You can change your answers at any time during the test.'],
      info: ['There are two parts in this test.', 'Part 2 contributes twice as much as Part 1 to the writing score.', 'The test clock will show you when there are 10 minutes and 5 minutes remaining.']
    }
  };

  function showInstructions(m) {
    const ins = INSTRUCTIONS[m];
    render(`${simpleHeader(true)}
      <main class="page"><div class="card instructions">
        <h1>IELTS ${m === 'listening' ? '' : TYPES[state.type] + ' '}${MODULES[m].name}</h1>
        <p class="small">Practice Test ${state.testNo}</p>
        <p class="time">Time: ${MODULES[m].time}</p>
        <h3>INSTRUCTIONS TO CANDIDATES</h3>
        <ul>${ins.todo.map(x => `<li>${x}</li>`).join('')}</ul>
        <h3>INFORMATION FOR CANDIDATES</h3>
        <ul>${ins.info.map(x => `<li>${x}</li>`).join('')}<li>Do not close the web browser.</li></ul>
        <button class="btn primary" id="start">Start test</button>
      </div></main>${disclaimer()}`);
    $('#start').onclick = () => startTest(m);
  }

  /* ------------------------------------------------------------ test frame */
  function startTest(m) {
    const resume = state.resume;
    state.resume = null;
    state.module = m;
    state.part = 0;
    state.inTest = true;
    const data = D[m];
    if (resume) {
      state.answers[m] = Object.assign({}, resume.answers);
      state.flags[m] = new Set(resume.flags || []);
    } else {
      state.answers[m] = {};
      state.flags[m].clear();
    }
    const startPart = resume ? Math.min(resume.part || 0, data.parts.length - 1) : 0;
    state.audioPart = startPart;
    state.current = data.parts[startPart].range ? data.parts[startPart].range[0] : null;

    render(`<div class="test test-${m}">
      <header class="topbar">
        <div class="tb-left">${brand()}${candLabel()}</div>
        <div class="tb-center"><span class="timer" id="timer">${ICON.clock}<span></span></span></div>
        <div class="tb-right">
          ${m === 'listening' ? `<div class="vol-wrap"><button class="icon-btn" data-act="volume" title="Volume">${ICON.vol}</button><div class="pop" id="volPop"><input type="range" id="vol2" min="0" max="1" step="0.05" value="${Speech.volume}" aria-label="Volume"></div></div>` : ''}
          <span class="save-state" id="saveState" aria-live="polite"></span>
          <span class="icon-btn static" title="Connected">${ICON.wifi}</span>
          <button class="icon-btn" data-act="help" title="Help">${ICON.bell}</button>
          <button class="tb-text" data-act="hide">Hide</button>
          <button class="icon-btn" data-act="settings" title="Options">${ICON.menu}</button>
        </div>
      </header>
      <div class="part-header" id="partHeader"></div>
      <main class="test-body" id="testBody">${data.parts.map((p, i) => renderPart(m, p, i)).join('')}</main>
      <div class="nav-float">
        ${m !== 'writing' ? '<label class="review"><input type="checkbox" id="flagBox"> Review</label>' : ''}
        <button class="arrow" id="prevQ" aria-label="Previous">${ICON.left}</button>
        <button class="arrow" id="nextQ" aria-label="Next">${ICON.right}</button>
      </div>
      <nav class="navbar" id="navbar"></nav>
    </div>`);

    if (m === 'writing') data.parts.forEach((p, i) => { if (p.chart) $('#chart-' + i).innerHTML = renderChart(p.chart); });
    restoreAnswers(m);
    bindTest(m);
    setPart(startPart);

    if (m === 'listening') {
      startTimer(32 * 60);
      listeningSegments(startPart).then(segs => {
        if (!state.inTest || state.module !== 'listening') return;
        if (!segs.length) {
          toast('Audio tidak didukung browser ini — Listening berjalan tanpa suara.');
          return;
        }
        startTimer(estimateSeconds(segs) + 180);
        Speech.play(segs, pi => {
          state.audioPart = pi;
          if (pi !== state.part) gotoQuestion(D.listening.parts[pi].range[0]);
        }, () => {
          if (!state.inTest) return;
          startTimer(120);
          toast('You now have 2 minutes to check your answers.');
        });
      });
    } else {
      startTimer(resume && resume.timeLeft > 0 ? resume.timeLeft : 60 * 60);
    }
    startAutosave();
  }

  /* ------------------------------------------------------------ autosave */
  function attemptPayload() {
    const m = state.module;
    return { type: state.type, testNo: state.testNo, module: m, answers: state.answers[m],
      // Listening resumes from the part the audio had reached, not the part on screen.
      flags: [...state.flags[m]], part: m === 'listening' ? state.audioPart : state.part, timeLeft: state.timeLeft };
  }
  function setSaveState(t) {
    const el = $('#saveState');
    if (el) { el.textContent = t; el.classList.toggle('err', t !== 'Saved' && t !== 'Saving…'); }
  }
  /* Local safety net: the latest answers are also kept in this browser, so nothing is lost
     if the server stops during a test. They are merged back on resume and sent when it returns. */
  const backupKey = (type, no, m) => `backup-${state.user ? state.user.id : 0}-${type}-${no}-${m}`;
  function saveNow() {
    clearTimeout(state.saveTimer);
    if (!state.user || !state.inTest) return;
    const payload = attemptPayload();
    store(backupKey(payload.type, payload.testNo, payload.module), Object.assign({ savedAt: Date.now() }, payload));
    setSaveState('Saving…');
    api('/api/attempt/save', { body: payload })
      .then(() => {
        setSaveState('Saved');
        if (state.offline) { state.offline = false; toast('Connection restored. Your answers are saved.'); }
      })
      .catch(e => {
        if (e.status === 401) return;
        setSaveState('Saved on this computer');
        if (!state.offline) {
          state.offline = true;
          toast('Server not reachable. Keep going: your answers are kept on this computer and will be saved when the server is running again.');
        }
      });
  }
  function scheduleSave() {
    if (!state.user || !state.inTest) return;
    clearTimeout(state.saveTimer);
    state.saveTimer = setTimeout(saveNow, 1200);
  }
  function startAutosave() {
    stopAutosave();
    if (!state.user) return;
    // Periodic save keeps the remaining time current even when no answer changes.
    state.autosave = setInterval(saveNow, 20000);
    saveNow();
  }
  function stopAutosave() {
    clearInterval(state.autosave);
    clearTimeout(state.saveTimer);
  }

  function renderPart(m, p, i) {
    if (m === 'listening') {
      return `<section class="part-pane" data-part="${i}"><div class="single hl-area">${p.groups.map(renderGroup).join('')}</div></section>`;
    }
    if (m === 'reading') {
      return `<section class="part-pane" data-part="${i}"><div class="split">
        <div class="pane passage hl-area"><h2 class="passage-title">${p.passage.title}</h2>${p.passage.html}</div>
        <div class="divider" title="Drag to resize"><span><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div>
        <div class="pane questions hl-area">${p.groups.map(renderGroup).join('')}</div>
      </div></section>`;
    }
    return `<section class="part-pane" data-part="${i}"><div class="split">
      <div class="pane prompt hl-area">${p.prompt}${p.chart ? `<div class="chart" id="chart-${i}"></div>` : ''}</div>
      <div class="divider" title="Drag to resize"><span><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div>
      <div class="pane answer">
        <textarea class="essay" data-task="${i + 1}" spellcheck="false" autocorrect="off" autocapitalize="off" aria-label="Your answer for ${p.title}"></textarea>
        <div class="wc">Word count: <b id="wc-${i + 1}">0</b></div>
      </div>
    </div></section>`;
  }

  function renderGroup(g) {
    let body = '';
    if (g.type === 'gap') {
      body = `<div class="gap-body">${g.template.replace(/\[\[(\d+)\]\]/g, (_, n) =>
        `<input type="text" class="gap" id="q-${n}" data-q="${n}" placeholder="${n}" autocomplete="off" spellcheck="false" autocapitalize="off" aria-label="Question ${n}">`)}</div>`;
    } else if (g.type === 'mc' || g.type === 'tf') {
      const fixed = g.variant === 'yn' ? ['YES', 'NO', 'NOT GIVEN'] : ['TRUE', 'FALSE', 'NOT GIVEN'];
      body = g.questions.map(q => {
        const opts = g.type === 'tf' ? fixed.map(k => ({ k, t: '' })) : q.options;
        return `<div class="q choice" id="q-${q.n}" data-q="${q.n}">
          <div class="q-line"><span class="qnum">${q.n}</span><span class="q-text">${q.text}</span></div>
          <div class="opts">${opts.map(o => `<label class="opt"><input type="radio" name="r-${q.n}" value="${o.k}">${g.type === 'tf' ? `<span>${o.k}</span>` : `<span class="opt-key">${o.k}</span><span>${o.t}</span>`}</label>`).join('')}</div>
        </div>`;
      }).join('');
    } else if (g.type === 'match') {
      // Plan/map labelling uses bare letters, so a box listing them would only repeat each letter.
      const lettersOnly = g.options.every(o => !o.t || o.t === o.k);
      const display = g.display || (lettersOnly ? 'radio' : 'select');
      if (display === 'grid') {
        // Table: one row per question, one radio column per option letter ("click on the correct space in the table").
        body = `${lettersOnly ? '' : `<div class="opt-box">${g.boxTitle ? `<h4>${g.boxTitle}</h4>` : ''}${g.options.map(o => `<div class="opt-row"><b>${o.k}</b><span>${o.t}</span></div>`).join('')}</div>`}
        <table class="match-grid"><thead><tr><th></th>${g.options.map(o => `<th scope="col">${o.k}</th>`).join('')}</tr></thead><tbody>
        ${g.questions.map(q => `<tr class="q" id="q-${q.n}" data-q="${q.n}"><th scope="row"><span class="qnum">${q.n}</span><span class="q-text">${q.text}</span></th>
          ${g.options.map(o => `<td><label><input type="radio" name="r-${q.n}" value="${o.k}" aria-label="Question ${q.n}: ${o.k}"></label></td>`).join('')}</tr>`).join('')}
        </tbody></table>`;
      } else if (display === 'radio') {
        // One radio list per question, two columns (as in the computer-delivered test).
        body = `<div class="q-grid">${g.questions.map(q => `<div class="q choice" id="q-${q.n}" data-q="${q.n}">
          <div class="q-line"><span class="qnum">${q.n}</span><span class="q-text">${q.text}</span></div>
          <div class="opts">${g.options.map(o => `<label class="opt"><input type="radio" name="r-${q.n}" value="${o.k}"><span class="opt-key">${o.k}</span>${lettersOnly ? '' : `<span>${o.t}</span>`}</label>`).join('')}</div>
        </div>`).join('')}</div>`;
      } else {
        body = `${lettersOnly ? '' : `<div class="opt-box">${g.boxTitle ? `<h4>${g.boxTitle}</h4>` : ''}${g.options.map(o => `<div class="opt-row"><b>${o.k}</b><span>${o.t}</span></div>`).join('')}</div>`}
        ${g.questions.map(q => `<div class="q match" id="q-${q.n}" data-q="${q.n}">
          <span class="qnum">${q.n}</span><span class="q-text">${q.text}</span>
          <select data-q="${q.n}" aria-label="Question ${q.n}"><option value=""></option>${g.options.map(o => `<option value="${o.k}">${o.k}</option>`).join('')}</select>
        </div>`).join('')}`;
      }
    } else if (g.type === 'multi') {
      body = `<div class="q multi" id="q-${g.ns[0]}" data-qlist="${g.ns.join(' ')}">
        <div class="q-line"><span class="qnum">${g.ns[0]}–${g.ns[g.ns.length - 1]}</span><span class="q-text">${g.text}</span></div>
        <div class="opts">${g.options.map(o => `<label class="opt"><input type="checkbox" value="${o.k}" data-multi="${g.ns.join(' ')}"><span class="opt-key">${o.k}</span><span>${o.t}</span></label>`).join('')}</div>
      </div>`;
    }
    return `<div class="q-group">
      <h3 class="q-range">Questions ${g.from}${g.to !== g.from ? '–' + g.to : ''}</h3>
      <div class="q-instr">${g.instr}</div>
      ${g.figure ? `<figure class="q-figure">${g.figure}</figure>` : ''}
      ${body}
    </div>`;
  }

  function restoreAnswers(m) {
    const a = state.answers[m];
    $$('input.gap').forEach(i => { i.value = a[i.dataset.q] || ''; });
    $$('select[data-q]').forEach(s => { s.value = a[s.dataset.q] || ''; });
    $$('input[type=radio]').forEach(r => { r.checked = a[r.name.slice(2)] === r.value; });
    $$('input[data-multi]').forEach(c => { c.checked = c.dataset.multi.split(' ').some(n => a[n] === c.value); });
    $$('textarea.essay').forEach(t => { t.value = a[t.dataset.task] || ''; $('#wc-' + t.dataset.task).textContent = wordCount(t.value); });
  }

  function setAns(n, v) {
    state.answers[state.module][n] = v;
    renderNav();
    scheduleSave();
  }

  function isAnswered(n) {
    const v = state.answers[state.module][n];
    return v !== undefined && String(v).trim() !== '';
  }

  function findQ(n) {
    return document.getElementById('q-' + n) || $(`[data-qlist~="${n}"]`);
  }

  function partOf(n) {
    return D[state.module].parts.findIndex(p => p.range && n >= p.range[0] && n <= p.range[1]);
  }

  function setPart(i) {
    state.part = i;
    const p = D[state.module].parts[i];
    $$('.part-pane').forEach(el => el.classList.toggle('active', +el.dataset.part === i));
    $('#partHeader').innerHTML = `<p class="ph-title">${p.title}</p><p>${p.instr}</p>`;
    scheduleSave();
    if (state.module === 'writing') {
      const t = $(`.part-pane[data-part="${i}"] textarea`);
      if (t) setTimeout(() => t.focus({ preventScroll: true }), 0);
    }
    renderNav();
  }

  function gotoQuestion(n, focus = true) {
    const pi = partOf(n);
    if (pi < 0) return;
    if (pi !== state.part) setPart(pi);
    state.current = n;
    const el = findQ(n);
    if (el) {
      $$('.q-active').forEach(x => x.classList.remove('q-active'));
      el.classList.add('q-active');
      el.scrollIntoView({ block: 'center', behavior: 'smooth' });
      if (focus) {
        const f = el.matches('input,select') ? el : $('input,select', el);
        if (f) f.focus({ preventScroll: true });
      }
    }
    renderNav();
  }

  function renderNav() {
    const m = state.module;
    const nav = $('#navbar');
    if (!nav) return;
    const parts = D[m].parts.map((p, i) => {
      const active = i === state.part;
      if (m === 'writing') {
        const wc = wordCount(state.answers.writing[i + 1] || '');
        return `<div class="nav-part ${active ? 'active' : ''}"><button class="part-label" data-part="${i}">${p.title}</button>${active ? '' : `<span class="part-count">${wc} words</span>`}</div>`;
      }
      const qs = range(p.range);
      if (active) {
        return `<div class="nav-part active"><span class="part-label">${p.title}</span><div class="nav-qs">${qs.map(n =>
          `<button class="nq${isAnswered(n) ? ' answered' : ''}${n === state.current ? ' current' : ''}${state.flags[m].has(n) ? ' flagged' : ''}" data-nq="${n}" aria-label="Question ${n}">${n}</button>`).join('')}</div></div>`;
      }
      const done = qs.filter(isAnswered).length;
      return `<div class="nav-part"><button class="part-label" data-part="${i}">${p.title}</button><span class="part-count">${done} of ${qs.length}</span></div>`;
    }).join('');
    nav.innerHTML = `<div class="nav-parts">${parts}</div><button class="nav-submit" id="btnSubmit" title="Submit">${ICON.check}<span>Submit</span></button>`;
    const fb = $('#flagBox');
    if (fb) fb.checked = state.flags[m].has(state.current);
  }

  function allQuestions() {
    return D[state.module].parts.flatMap(p => p.range ? range(p.range) : []);
  }

  function bindTest(m) {
    const body = $('#testBody');

    body.addEventListener('input', e => {
      const t = e.target;
      if (t.matches('input.gap')) setAns(+t.dataset.q, t.value);
      if (t.matches('textarea.essay')) {
        state.answers.writing[t.dataset.task] = t.value;
        $('#wc-' + t.dataset.task).textContent = wordCount(t.value);
        scheduleSave();
      }
    });

    body.addEventListener('change', e => {
      const t = e.target;
      if (t.type === 'radio') setAns(+t.name.slice(2), t.value);
      else if (t.tagName === 'SELECT') setAns(+t.dataset.q, t.value);
      else if (t.type === 'checkbox' && t.dataset.multi) {
        const ns = t.dataset.multi.split(' ').map(Number);
        const box = t.closest('.multi');
        let checked = $$('input:checked', box);
        if (checked.length > ns.length) { t.checked = false; checked = $$('input:checked', box); }
        const vals = checked.map(c => c.value).sort();
        ns.forEach((n, i) => { state.answers[m][n] = vals[i] || ''; });
        renderNav();
        scheduleSave();
      }
    });

    body.addEventListener('focusin', e => {
      const el = e.target.closest('[data-qlist], .q[data-q], input.gap');
      if (!el) return;
      const n = el.dataset.qlist ? +el.dataset.qlist.split(' ')[0] : +el.dataset.q;
      if (n && n !== state.current) {
        state.current = n;
        $$('.q-active').forEach(x => x.classList.remove('q-active'));
        (el.closest('.q') || el).classList.add('q-active');
        renderNav();
      }
    });

    $('#navbar').addEventListener('click', e => {
      const nq = e.target.closest('[data-nq]');
      const pl = e.target.closest('[data-part]');
      if (nq) gotoQuestion(+nq.dataset.nq);
      else if (pl) {
        const i = +pl.dataset.part;
        if (m === 'writing') setPart(i);
        else gotoQuestion(D[m].parts[i].range[0]);
      } else if (e.target.closest('#btnSubmit')) confirmSubmit();
    });

    const step = d => {
      if (m === 'writing') {
        const i = state.part + d;
        if (i >= 0 && i < D.writing.parts.length) setPart(i);
        return;
      }
      const qs = allQuestions();
      const i = qs.indexOf(state.current) + d;
      if (i >= 0 && i < qs.length) gotoQuestion(qs[i]);
    };
    $('#prevQ').onclick = () => step(-1);
    $('#nextQ').onclick = () => step(1);

    const fb = $('#flagBox');
    if (fb) fb.onchange = () => {
      if (state.current == null) return;
      fb.checked ? state.flags[m].add(state.current) : state.flags[m].delete(state.current);
      renderNav();
      scheduleSave();
    };

    const v2 = $('#vol2');
    if (v2) v2.oninput = e => Speech.setVolume(+e.target.value);

    bindDividers();
    bindHighlight(body);
  }

  function bindDividers() {
    $$('.divider').forEach(d => {
      d.addEventListener('pointerdown', e => {
        e.preventDefault();
        const split = d.parentElement;
        const rect = split.getBoundingClientRect();
        d.setPointerCapture(e.pointerId);
        d.classList.add('dragging');
        const move = ev => {
          const pct = Math.min(80, Math.max(20, (ev.clientX - rect.left) / rect.width * 100));
          split.style.setProperty('--left', pct + '%');
        };
        const up = () => {
          d.classList.remove('dragging');
          d.removeEventListener('pointermove', move);
          d.removeEventListener('pointerup', up);
        };
        d.addEventListener('pointermove', move);
        d.addEventListener('pointerup', up);
      });
    });
  }

  /* ------------------------------------------------------ highlight & notes */
  function bindHighlight(body) {
    const menu = document.createElement('div');
    menu.className = 'ctx-menu';
    document.body.appendChild(menu);
    const hideMenu = () => { menu.style.display = 'none'; };

    body.addEventListener('contextmenu', e => {
      if (e.target.closest('textarea, input, select')) return;
      e.preventDefault();
      const area = e.target.closest('.hl-area');
      if (!area) return hideMenu();
      const sel = window.getSelection();
      const mark = e.target.closest('mark.hl');
      const items = [];
      if (sel.rangeCount && !sel.isCollapsed && area.contains(sel.getRangeAt(0).commonAncestorContainer)) {
        state.savedRange = sel.getRangeAt(0).cloneRange();
        items.push(['highlight', 'Highlight'], ['note', 'Notes']);
      } else if (mark) {
        menu._mark = mark;
        if (mark.classList.contains('note')) items.push(['editnote', 'View note']);
        items.push(['clear', 'Clear'], ['clearall', 'Clear all']);
      } else if ($('mark.hl', area)) {
        menu._area = area;
        items.push(['clearall', 'Clear all']);
      }
      if (!items.length) return hideMenu();
      menu._area = area;
      menu.innerHTML = items.map(([a, l]) => `<button data-hl="${a}">${l}</button>`).join('');
      menu.style.display = 'block';
      const x = Math.min(e.clientX, window.innerWidth - 170);
      const y = Math.min(e.clientY, window.innerHeight - 120);
      menu.style.left = x + 'px';
      menu.style.top = y + 'px';
    });

    menu.addEventListener('mousedown', e => e.preventDefault());
    menu.addEventListener('click', e => {
      const b = e.target.closest('[data-hl]');
      if (!b) return;
      const a = b.dataset.hl;
      hideMenu();
      if (a === 'highlight' && state.savedRange) { wrapRange(state.savedRange); window.getSelection().removeAllRanges(); }
      if (a === 'note' && state.savedRange) {
        const marks = wrapRange(state.savedRange, true);
        window.getSelection().removeAllRanges();
        if (marks.length) editNote(marks);
      }
      if (a === 'editnote') editNote(groupOf(menu._mark));
      if (a === 'clear') groupOf(menu._mark).forEach(unwrap);
      if (a === 'clearall') $$('mark.hl', menu._area).forEach(unwrap);
    });
    document.addEventListener('click', e => { if (!menu.contains(e.target)) hideMenu(); });
    document.addEventListener('scroll', hideMenu, true);
    body.addEventListener('click', e => {
      const n = e.target.closest('mark.note');
      if (n) editNote(groupOf(n));
    });
  }

  let hlId = 0;
  function wrapRange(rng, isNote) {
    const root = rng.commonAncestorContainer.nodeType === 1 ? rng.commonAncestorContainer : rng.commonAncestorContainer.parentNode;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) {
      const n = walker.currentNode;
      if (rng.intersectsNode(n) && n.nodeValue.trim() && !n.parentNode.closest('select, option, button, textarea, .qnum')) nodes.push(n);
    }
    const id = 'h' + (++hlId);
    const marks = [];
    nodes.forEach(n => {
      let start = n === rng.startContainer ? rng.startOffset : 0;
      let end = n === rng.endContainer ? rng.endOffset : n.length;
      if (start >= end) return;
      let t = n;
      if (start > 0) t = t.splitText(start);
      if (end - start < t.length) t.splitText(end - start);
      const m = document.createElement('mark');
      m.className = 'hl' + (isNote ? ' note' : '');
      m.dataset.hid = id;
      t.parentNode.insertBefore(m, t);
      m.appendChild(t);
      marks.push(m);
    });
    return marks;
  }
  function groupOf(mark) { return $$(`mark[data-hid="${mark.dataset.hid}"]`); }
  function unwrap(m) {
    const p = m.parentNode;
    while (m.firstChild) p.insertBefore(m.firstChild, m);
    p.removeChild(m);
    p.normalize();
  }
  function editNote(marks) {
    const cur = marks[0].dataset.note || '';
    modal(`<h3>Notes</h3><textarea id="noteText" class="note-text" placeholder="Type your note here">${esc(cur)}</textarea>`, [
      { label: 'Delete note', act: () => marks.forEach(unwrap) },
      { label: 'Save', primary: true, act: () => {
        const v = $('#noteText').value;
        marks.forEach(m => { m.dataset.note = v; m.title = v; });
      } }
    ]);
    setTimeout(() => $('#noteText').focus(), 0);
  }

  /* --------------------------------------------------------------- timer */
  function startTimer(sec) {
    clearInterval(state.timer);
    state.timerEnd = Date.now() + sec * 1000;
    state.timeLeft = sec;
    renderTimer();
    state.timer = setInterval(() => {
      const prev = state.timeLeft;
      state.timeLeft = Math.max(0, Math.round((state.timerEnd - Date.now()) / 1000));
      renderTimer();
      if (state.module !== 'listening' && prev > 600 && state.timeLeft <= 600) toast('10 minutes remaining');
      if (state.module !== 'listening' && prev > 300 && state.timeLeft <= 300) toast('5 minutes remaining');
      if (state.timeLeft <= 0) {
        clearInterval(state.timer);
        toast('Time is up. Your answers have been submitted.');
        finishModule();
      }
    }, 500);
  }
  function renderTimer() {
    const el = $('#timer span');
    if (!el) return;
    const s = state.timeLeft;
    $('#timer').classList.toggle('warn', s <= 300);
    el.textContent = s <= 300
      ? `${pad(Math.floor(s / 60))}:${pad(s % 60)} left`
      : `${Math.ceil(s / 60)} minutes left`;
  }

  function confirmSubmit() {
    const m = state.module;
    let msg = '';
    if (m === 'writing') {
      msg = D.writing.parts.map((p, i) => `${p.title}: ${wordCount(state.answers.writing[i + 1] || '')} words`).join('<br>');
    } else {
      const qs = allQuestions();
      const un = qs.filter(n => !isAnswered(n));
      msg = un.length ? `You have <b>${un.length}</b> unanswered question${un.length > 1 ? 's' : ''}.` : 'You have answered all the questions.';
      const fl = qs.filter(n => state.flags[m].has(n));
      if (fl.length) msg += `<br>Questions marked for review: ${fl.join(', ')}`;
    }
    modal(`<h3>Submit your answers?</h3><p>${msg}</p><p>Once you submit, you will not be able to change your answers.</p>`, [
      { label: 'Cancel' },
      { label: 'Submit', primary: true, act: finishModule }
    ]);
  }

  function queueSubmit(body) {
    const q = (load('pending') || []).filter(b => !(b.userId === state.user.id && b.type === body.type && b.testNo === body.testNo && b.module === body.module));
    q.push(Object.assign({ userId: state.user.id, queuedAt: Date.now() }, body));
    store('pending', q);
  }
  const isPending = body => (load('pending') || []).some(b => b.userId === state.user.id && b.type === body.type && b.testNo === body.testNo && b.module === body.module);

  // Sends submissions that could not reach the server earlier. Returns how many were sent.
  async function flushPending() {
    const q = load('pending') || [];
    if (!state.user || !q.length) return 0;
    const keep = [];
    let sent = 0;
    for (const b of q) {
      if (b.userId !== state.user.id) { keep.push(b); continue; }
      const { userId, queuedAt, ...body } = b;
      try {
        await api('/api/attempt/submit', { body });
        try { localStorage.removeItem('ielts-mock-' + backupKey(body.type, body.testNo, body.module)); } catch (e) { /* ignore */ }
        sent++;
      } catch (e) { keep.push(b); }
    }
    store('pending', keep);
    return sent;
  }

  async function finishModule() {
    if (!state.inTest) return;
    const m = state.module;
    state.inTest = false;
    clearInterval(state.timer);
    stopAutosave();
    Speech.stop();
    closeModal();
    $$('.ctx-menu').forEach(x => x.remove());
    if (!state.completed.includes(m)) state.completed.push(m);
    const sc = m === 'writing' ? null : score(m);
    const body = { type: state.type, testNo: state.testNo, module: m, answers: state.answers[m],
      flags: [...state.flags[m]], raw: sc ? sc.raw : null, band: sc ? sc.band : null };
    // Queue first, so the submission survives even if the server is down or the tab is closed.
    queueSubmit(body);
    render(`${simpleHeader(true)}<main class="page"><div class="card narrow center"><h2>Submitting…</h2></div></main>`);
    let retry = null;
    const submit = async () => {
      clearTimeout(retry);
      await flushPending();
      if (!isPending(body)) {
        closeModal();
        try { await refreshProgress(); } catch (e) { /* dashboard refreshes later */ }
        return showFinished(m);
      }
      modal(`<h3>Waiting for the server</h3>
        <p>Your ${MODULES[m].name} answers are kept safely on this computer, but the server is not reachable.</p>
        <p>Start it with <code>python3 server.py</code>. Your answers will be sent automatically as soon as it is running.</p>`,
        [{ label: 'Try again now', primary: true, act: submit }]);
      retry = setTimeout(submit, 5000);
    };
    submit();
  }

  function showFinished(m) {
    render(`${simpleHeader(true)}
      <main class="page"><div class="card narrow center">
        <h2>Test ended</h2>
        <p>Your ${MODULES[m].name} answers have been submitted and saved to your account.</p>
        ${state.queue.length ? `<p>The next part of your test is <b>${MODULES[state.queue[0]].name}</b>.</p><button class="btn primary" id="next">Continue</button>` : '<button class="btn primary" id="next">View results</button>'}
        <p><a href="#" id="menuLink">Back to dashboard</a></p>
      </div></main>${disclaimer()}`);
    $('#next').onclick = nextModule;
    $('#menuLink').onclick = e => { e.preventDefault(); state.queue = []; showSelect(); };
  }

  /* --------------------------------------------------------------- scoring */
  const BANDS = {
    listening: [[39, 9], [37, 8.5], [35, 8], [32, 7.5], [30, 7], [26, 6.5], [23, 6], [18, 5.5], [16, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [2, 2], [1, 1], [0, 0]],
    reading: [[39, 9], [37, 8.5], [35, 8], [33, 7.5], [30, 7], [27, 6.5], [23, 6], [19, 5.5], [15, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [2, 2], [1, 1], [0, 0]],
    readingGeneral: [[40, 9], [39, 8.5], [37, 8], [36, 7.5], [34, 7], [32, 6.5], [30, 6], [27, 5.5], [23, 5], [19, 4.5], [15, 4], [12, 3.5], [9, 3], [6, 2.5], [4, 2], [1, 1], [0, 0]]
  };
  const toBand = (m, raw) => BANDS[m === 'reading' && state.type === 'general' ? 'readingGeneral' : m].find(([min]) => raw >= min)[1];

  function score(m) {
    const a = state.answers[m];
    const rows = [];
    D[m].parts.forEach(p => p.groups.forEach(g => {
      if (g.type === 'gap') {
        Object.entries(g.answers).forEach(([n, alts]) => {
          rows.push({ n: +n, user: a[n] || '', key: alts[0] + (alts.length > 1 ? ` (also: ${alts.slice(1).join(', ')})` : ''), ok: alts.some(x => norm(x) === norm(a[n])) && norm(a[n]) !== '' });
        });
      } else if (g.type === 'multi') {
        const picked = g.ns.map(n => a[n]).filter(Boolean);
        const right = picked.filter((x, i) => g.answers.includes(x) && picked.indexOf(x) === i);
        g.ns.forEach((n, i) => rows.push({ n, user: a[n] || '', key: g.answers.join(' & ') + ' (any order)', ok: i < right.length }));
      } else {
        g.questions.forEach(q => rows.push({ n: q.n, user: a[q.n] || '', key: q.answer, ok: (a[q.n] || '') === q.answer }));
      }
    }));
    rows.sort((x, y) => x.n - y.n);
    const raw = rows.filter(r => r.ok).length;
    return { rows, raw, band: toBand(m, raw) };
  }

  function overall(bands) {
    const avg = bands.reduce((s, b) => s + b, 0) / bands.length;
    const f = avg - Math.floor(avg);
    return Math.floor(avg) + (f < 0.25 ? 0 : f < 0.75 ? 0.5 : 1);
  }

  function showResults(meta = {}) {
    const done = state.completed;
    const when = m => meta[m] && meta[m].submittedAt ? `<p class="small">Submitted ${fmtDate(meta[m].submittedAt)}</p>` : '';
    const cards = [];
    const sections = [];
    const bands = [];
    ['listening', 'reading'].forEach(m => {
      if (!done.includes(m)) return;
      const s = score(m);
      bands.push(s.band);
      cards.push(`<div class="score-card"><h3>${MODULES[m].name}</h3><div class="band">${s.band.toFixed(1)}</div><p>${s.raw} / 40 correct</p>${when(m)}</div>`);
      sections.push(`<details class="review-block"><summary>${MODULES[m].name} – answer review</summary>
        <table class="review-table"><thead><tr><th>Q</th><th>Your answer</th><th>Correct answer</th><th></th></tr></thead><tbody>
        ${s.rows.map(r => `<tr class="${r.ok ? 'ok' : 'bad'}"><td>${r.n}</td><td>${esc(r.user) || '<i>—</i>'}</td><td>${esc(r.key)}</td><td>${r.ok ? '✓' : '✗'}</td></tr>`).join('')}
        </tbody></table>
        ${m === 'listening' ? `<details class="transcript"><summary>Show audio transcript</summary>${D.listening.parts.map(p => `<h4>${p.title}</h4>${p.audio.filter(x => x[0] !== 'P').map(([r, t]) => `<p><b>${r === 'N' ? 'Narrator' : 'Speaker ' + r}:</b> ${esc(t)}</p>`).join('')}`).join('')}</details>` : ''}
      </details>`);
    });
    if (done.includes('writing')) {
      cards.push(`<div class="score-card"><h3>Writing</h3><div class="band small">—</div><p>Needs examiner marking</p>${when('writing')}</div>`);
      sections.push(`<details class="review-block" open><summary>Writing – your responses</summary>
        ${D.writing.parts.map((p, i) => {
          const t = state.answers.writing[i + 1] || '';
          const wc = wordCount(t);
          return `<div class="essay-review"><h4>${p.title} <span class="${wc < p.minWords ? 'under' : ''}">${wc} words${wc < p.minWords ? ` (below ${p.minWords})` : ''}</span></h4><div class="essay-text">${esc(t) || '<i>No response</i>'}</div></div>`;
        }).join('')}
        <p class="small">Writing di IELTS dinilai examiner berdasarkan 4 kriteria: Task Achievement/Response, Coherence &amp; Cohesion, Lexical Resource, dan Grammatical Range &amp; Accuracy.</p>
        <button class="btn" id="dl">Download responses (.txt)</button>
      </details>`);
    }
    render(`${simpleHeader(true)}
      <main class="page"><div class="card wide">
        <h2>Your practice results</h2>
        <p class="small">${esc(state.cand.name)} · ${esc(state.cand.number)} · ${TYPES[state.type]} · Test ${state.testNo}</p>
        <div class="score-row">${cards.join('') || '<p>No modules completed yet.</p>'}</div>
        ${bands.length === 2 ? `<p class="overall">Indicative Listening + Reading average: <b>${overall(bands).toFixed(1)}</b></p>` : ''}
        <p class="small">Band dihitung dari tabel konversi perkiraan ${TYPES[state.type]}. Hasil ini hanya indikasi latihan, bukan skor resmi.</p>
        ${sections.join('')}
        <div class="btn-row"><button class="btn primary" id="menu">Back to dashboard</button></div>
      </div></main>${disclaimer()}`);
    $('#menu').onclick = showSelect;
    const dl = $('#dl');
    if (dl) dl.onclick = () => {
      const txt = D.writing.parts.map((p, i) => `${p.title} (${wordCount(state.answers.writing[i + 1] || '')} words)\n\n${state.answers.writing[i + 1] || ''}`).join('\n\n-----\n\n');
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([txt], { type: 'text/plain' }));
      a.download = 'ielts-writing-responses.txt';
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    };
  }

  /* ---------------------------------------------------------------- charts */
  const FILLS = ['#2f5f8f', '#e0a33a', '#8a8a8a', '#5b9e5b', '#b5524a', '#7a5ca8', '#3a9aa8'];

  function renderChart(c) {
    const fn = { bar: barChart, line: lineChart, pie: pieChart, table: tableChart, process: processChart, map: mapChart }[c.type || 'bar'];
    return fn ? fn(c) : '';
  }

  function niceMax(c) {
    if (c.max) return c.max;
    const m = Math.max(...c.series.flatMap(s => s.values));
    const step = Math.pow(10, Math.floor(Math.log10(m || 1)));
    return Math.ceil(m / step) * step;
  }

  function axes(c, W, H, L, T, R, B) {
    const ch = H - T - B, max = niceMax(c);
    const ticks = 5;
    let s = `<text x="${W / 2}" y="18" text-anchor="middle" class="ch-title">${esc(c.title)}</text>`;
    for (let i = 0; i <= ticks; i++) {
      const v = max / ticks * i;
      const y = T + ch - i / ticks * ch;
      s += `<line x1="${L}" x2="${W - R}" y1="${y}" y2="${y}" class="ch-grid"/><text x="${L - 8}" y="${y + 4}" text-anchor="end" class="ch-tick">${+v.toFixed(1)}</text>`;
    }
    if (c.unit) s += `<text x="12" y="${T + ch / 2}" transform="rotate(-90 12 ${T + ch / 2})" text-anchor="middle" class="ch-tick">${esc(c.unit)}</text>`;
    s += `<line x1="${L}" x2="${W - R}" y1="${T + ch}" y2="${T + ch}" class="ch-axis"/>`;
    return { s, ch, max };
  }

  // Legend items flow left to right and wrap to a new row when the next label would not fit.
  function legend(names, W, y) {
    let x = 20, row = 0, svg = '';
    names.forEach((n, i) => {
      const w = 30 + String(n).length * 6.6;
      if (x + w > W - 10 && x > 20) { x = 20; row++; }
      const yy = y + row * 20;
      svg += `<rect x="${x}" y="${yy}" width="12" height="12" fill="${FILLS[i % FILLS.length]}"/><text x="${x + 18}" y="${yy + 10}" class="ch-tick">${esc(n)}</text>`;
      x += w;
    });
    return { svg, h: (row + 1) * 20 };
  }

  function barChart(c) {
    const W = 560, H = 320, L = 52, B = 40, T = 34, R = 12;
    const cw = W - L - R;
    const { s: base, ch, max } = axes(c, W, H, L, T, R, B);
    const groupW = cw / c.categories.length;
    const barW = Math.min(26, (groupW - 16) / c.series.length);
    const leg = legend(c.series.map(x => x.name), W, H + 8);
    let svg = `<svg viewBox="0 0 ${W} ${H + 12 + leg.h}" role="img" aria-label="${esc(c.title)}" class="bar-chart">${base}`;
    c.categories.forEach((cat, gi) => {
      const gx = L + gi * groupW + (groupW - barW * c.series.length) / 2;
      c.series.forEach((s, si) => {
        const v = s.values[gi];
        const h = v / max * ch;
        const x = gx + si * barW;
        svg += `<rect x="${x + 1}" y="${T + ch - h}" width="${barW - 2}" height="${h}" fill="${FILLS[si % FILLS.length]}"><title>${esc(s.name)} ${esc(cat)}: ${v}${esc(c.unit || '')}</title></rect>`;
        if (c.series.length * c.categories.length <= 16) svg += `<text x="${x + barW / 2}" y="${T + ch - h - 4}" text-anchor="middle" class="ch-val">${v}</text>`;
      });
      svg += `<text x="${L + gi * groupW + groupW / 2}" y="${T + ch + 20}" text-anchor="middle" class="ch-tick">${esc(cat)}</text>`;
    });
    return svg + leg.svg + '</svg>';
  }

  function lineChart(c) {
    const W = 560, H = 320, L = 52, B = 40, T = 34, R = 20;
    const cw = W - L - R;
    const { s: base, ch, max } = axes(c, W, H, L, T, R, B);
    const n = c.categories.length;
    const x = i => L + (n === 1 ? cw / 2 : i / (n - 1) * cw);
    const leg = legend(c.series.map(x => x.name), W, H + 8);
    let svg = `<svg viewBox="0 0 ${W} ${H + 12 + leg.h}" role="img" aria-label="${esc(c.title)}" class="bar-chart">${base}`;
    c.categories.forEach((cat, i) => { svg += `<text x="${x(i)}" y="${T + ch + 20}" text-anchor="middle" class="ch-tick">${esc(cat)}</text>`; });
    c.series.forEach((s, si) => {
      const col = FILLS[si % FILLS.length];
      const pts = s.values.map((v, i) => `${x(i)},${T + ch - v / max * ch}`).join(' ');
      svg += `<polyline points="${pts}" fill="none" stroke="${col}" stroke-width="2.5"/>`;
      s.values.forEach((v, i) => { svg += `<circle cx="${x(i)}" cy="${T + ch - v / max * ch}" r="3.5" fill="${col}"><title>${esc(s.name)} ${esc(c.categories[i])}: ${v}</title></circle>`; });
    });
    return svg + leg.svg + '</svg>';
  }

  function pieChart(c) {
    const r = 80, cell = 200, W = Math.max(400, cell * c.pies.length), H = 290;
    const names = [...new Set(c.pies.flatMap(p => p.slices.map(s => s.name)))];
    const leg = legend(names, W, H);
    let svg = `<svg viewBox="0 0 ${W} ${H + leg.h + 6}" role="img" aria-label="${esc(c.title)}" class="bar-chart">`;
    svg += `<text x="${W / 2}" y="18" text-anchor="middle" class="ch-title">${esc(c.title)}</text>`;
    const off = (W - cell * c.pies.length) / 2;
    c.pies.forEach((p, pi) => {
      const cx = off + cell * pi + cell / 2, cy = 140;
      const total = p.slices.reduce((s, x) => s + x.value, 0) || 1;
      let a = -Math.PI / 2;
      p.slices.forEach(sl => {
        const ang = sl.value / total * Math.PI * 2;
        const col = FILLS[names.indexOf(sl.name) % FILLS.length];
        const x1 = cx + r * Math.cos(a), y1 = cy + r * Math.sin(a);
        const x2 = cx + r * Math.cos(a + ang), y2 = cy + r * Math.sin(a + ang);
        const path = ang >= Math.PI * 2 - 1e-6
          ? `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${col}"/>`
          : `<path d="M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${ang > Math.PI ? 1 : 0} 1 ${x2},${y2} Z" fill="${col}" stroke="#fff" stroke-width="1"/>`;
        svg += path.replace('/>', `><title>${esc(sl.name)}: ${sl.value}%</title></${path.startsWith('<circle') ? 'circle' : 'path'}>`);
        const mid = a + ang / 2;
        if (sl.value >= 4) svg += `<text x="${cx + r * 0.65 * Math.cos(mid)}" y="${cy + r * 0.65 * Math.sin(mid) + 4}" text-anchor="middle" class="ch-pie">${sl.value}%</text>`;
        a += ang;
      });
      svg += `<text x="${cx}" y="${cy + r + 24}" text-anchor="middle" class="ch-title">${esc(p.label)}</text>`;
    });
    svg += leg.svg;
    return svg + '</svg>';
  }

  function tableChart(c) {
    return `<div class="ch-table"><p class="ch-table-title">${esc(c.title)}</p><table>
      <thead><tr>${c.columns.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead>
      <tbody>${c.rows.map(r => `<tr>${r.map((v, i) => i ? `<td>${esc(v)}</td>` : `<th>${esc(v)}</th>`).join('')}</tr>`).join('')}</tbody>
    </table></div>`;
  }

  function processChart(c) {
    const steps = c.steps;
    if (c.cycle) {
      const W = 560, H = 440, cx = W / 2, cy = 230, rx = 200, ry = 160, bw = 150, bh = 54;
      let svg = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(c.title)}" class="bar-chart"><defs><marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="ch-arrow"/></marker></defs>`;
      svg += `<text x="${W / 2}" y="20" text-anchor="middle" class="ch-title">${esc(c.title)}</text>`;
      const pos = steps.map((_, i) => { const a = -Math.PI / 2 + i / steps.length * Math.PI * 2; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; });
      pos.forEach(([x, y], i) => {
        const [nx, ny] = pos[(i + 1) % pos.length];
        const dx = nx - x, dy = ny - y, len = Math.hypot(dx, dy);
        const sx = x + dx / len * 62, sy = y + dy / len * 36, ex = nx - dx / len * 70, ey = ny - dy / len * 38;
        svg += `<line x1="${sx}" y1="${sy}" x2="${ex}" y2="${ey}" class="ch-link" marker-end="url(#arr)"/>`;
      });
      pos.forEach(([x, y], i) => { svg += boxText(x - bw / 2, y - bh / 2, bw, bh, `${i + 1}. ${steps[i]}`); });
      return svg + '</svg>';
    }
    const cols = steps.length > 5 ? 2 : 1;
    const bw = cols === 2 ? 240 : 360, bh = 54, gap = 26, W = 560;
    const rows = Math.ceil(steps.length / cols);
    const H = 40 + rows * (bh + gap);
    let svg = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(c.title)}" class="bar-chart"><defs><marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="ch-arrow"/></marker></defs>`;
    svg += `<text x="${W / 2}" y="20" text-anchor="middle" class="ch-title">${esc(c.title)}</text>`;
    // Snake layout: column 1 top-to-bottom, column 2 bottom-to-top.
    const pos = steps.map((_, i) => {
      const col = Math.floor(i / rows), row = col % 2 ? rows - 1 - (i % rows) : i % rows;
      const x = cols === 1 ? (W - bw) / 2 : 20 + col * (bw + 40);
      return [x, 36 + row * (bh + gap)];
    });
    pos.forEach(([x, y], i) => {
      if (i === pos.length - 1) return;
      const [nx, ny] = pos[i + 1];
      if (nx === x) {
        const down = ny > y;
        svg += `<line x1="${x + bw / 2}" y1="${down ? y + bh : y}" x2="${x + bw / 2}" y2="${down ? ny - 2 : ny + bh + 2}" class="ch-link" marker-end="url(#arr)"/>`;
      } else {
        svg += `<line x1="${x + bw}" y1="${y + bh / 2}" x2="${nx - 2}" y2="${ny + bh / 2}" class="ch-link" marker-end="url(#arr)"/>`;
      }
    });
    pos.forEach(([x, y], i) => { svg += boxText(x, y, bw, bh, `${i + 1}. ${steps[i]}`); });
    return svg + '</svg>';
  }

  function boxText(x, y, w, h, text) {
    const words = String(text).split(/\s+/), lines = [];
    const max = Math.floor(w / 7);
    let cur = '';
    words.forEach(wd => { if ((cur + ' ' + wd).trim().length > max) { lines.push(cur.trim()); cur = wd; } else cur += ' ' + wd; });
    if (cur.trim()) lines.push(cur.trim());
    const shown = lines.slice(0, 3);
    const ly = y + h / 2 - (shown.length - 1) * 7 + 4;
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" class="ch-box"/>` +
      shown.map((l, i) => `<text x="${x + w / 2}" y="${ly + i * 14}" text-anchor="middle" class="ch-tick">${esc(l)}</text>`).join('');
  }

  function mapChart(c) {
    const cell = 260, W = Math.max(300, cell * c.maps.length + 20), H = 320;
    const fill = { building: '#c9b38f', road: '#9a9a9a', water: '#8fc1e3', green: '#a6d49a', other: '#e5e5e5' };
    let svg = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(c.title)}" class="bar-chart">`;
    svg += `<text x="${W / 2}" y="18" text-anchor="middle" class="ch-title">${esc(c.title)}</text>`;
    c.maps.forEach((m, mi) => {
      const ox = 10 + mi * cell + 5, oy = 50, s = (cell - 20) / 100;
      svg += `<text x="${ox + 50 * s}" y="42" text-anchor="middle" class="ch-title">${esc(m.label)}</text>`;
      svg += `<rect x="${ox}" y="${oy}" width="${100 * s}" height="${100 * s}" fill="#f7f5ef" stroke="currentColor" class="ch-frame"/>`;
      m.features.forEach(f => {
        const x = ox + f.x * s, y = oy + f.y * s, w = f.w * s, h = f.h * s;
        svg += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill[f.kind] || fill.other}" stroke="#555" stroke-width=".6"><title>${esc(f.name)}</title></rect>`;
        const fs = Math.max(7, Math.min(10, w / Math.max(4, f.name.length) * 1.6));
        svg += `<text x="${x + w / 2}" y="${y + h / 2 + 3}" text-anchor="middle" class="ch-map" style="font-size:${fs}px">${esc(f.name)}</text>`;
      });
      svg += `<text x="${ox + 100 * s - 8}" y="${oy + 14}" text-anchor="end" class="ch-tick">N ↑</text>`;
    });
    return svg + '</svg>';
  }

  /* ------------------------------------------------------- modal & popups */
  function modal(html, buttons) {
    closeModal();
    const wrap = document.createElement('div');
    wrap.className = 'modal-wrap';
    wrap.innerHTML = `<div class="modal" role="dialog" aria-modal="true">${html}<div class="modal-btns">${buttons.map((b, i) => `<button class="btn${b.primary ? ' primary' : ''}" data-mb="${i}">${b.label}</button>`).join('')}</div></div>`;
    document.body.appendChild(wrap);
    wrap.addEventListener('click', e => {
      const b = e.target.closest('[data-mb]');
      if (!b) return;
      const def = buttons[+b.dataset.mb];
      closeModal();
      if (def.act) def.act();
    });
  }
  function closeModal() { $$('.modal-wrap').forEach(x => x.remove()); }

  function toast(text) {
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = text;
    document.body.appendChild(t);
    setTimeout(() => t.classList.add('show'), 10);
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 4500);
  }

  function showSettings() {
    const s = state.settings;
    const opt = (name, val, label) => `<label class="set-opt"><input type="radio" name="${name}" value="${val}" ${s[name] === val ? 'checked' : ''}> ${label}</label>`;
    modal(`<h3>Options</h3>
      <div class="set-group"><h4>Contrast</h4>${opt('contrast', 'bow', 'Black on white')}${opt('contrast', 'wob', 'White on black')}${opt('contrast', 'yob', 'Yellow on black')}</div>
      <div class="set-group"><h4>Text size</h4>${opt('size', 'standard', 'Standard')}${opt('size', 'large', 'Large')}${opt('size', 'xlarge', 'Extra large')}</div>`,
      [{ label: 'Close', primary: true }]);
    $$('.set-opt input').forEach(i => i.onchange = () => { state.settings[i.name] = i.value; applySettings(); });
  }

  function showHelp() {
    const m = state.module;
    const tips = {
      listening: ['Audio diputar sekali saja dan tidak dapat dijeda — sama seperti tes asli.', 'Klik nomor soal di bagian bawah untuk berpindah soal.', 'Centang <b>Review</b> untuk menandai soal yang ingin dicek ulang.'],
      reading: ['Pilih teks lalu klik kanan untuk <b>Highlight</b> atau <b>Notes</b>.', 'Klik kanan pada highlight untuk menghapusnya.', 'Seret garis pembatas tengah untuk mengubah lebar panel.'],
      writing: ['Ketik jawaban di kotak kanan; jumlah kata dihitung otomatis.', 'Pindah antara Part 1 dan Part 2 lewat navigasi di bawah.', 'Seret garis pembatas tengah untuk mengubah lebar panel.']
    }[m] || [];
    modal(`<h3>Help</h3><ul>${tips.map(t => `<li>${t}</li>`).join('')}<li>Menu ☰ untuk mengubah ukuran teks dan kontras.</li></ul>`, [{ label: 'Close', primary: true }]);
  }

  function hideScreen() {
    const ov = document.createElement('div');
    ov.className = 'hide-overlay';
    ov.innerHTML = '<div><p>Your screen is hidden. The test clock is still running.</p><button class="btn primary">Show</button></div>';
    document.body.appendChild(ov);
    $('button', ov).onclick = () => ov.remove();
  }

  document.addEventListener('click', e => {
    const b = e.target.closest('[data-act]');
    if (!b) {
      if (!e.target.closest('.vol-wrap')) $$('.pop.open').forEach(p => p.classList.remove('open'));
      return;
    }
    const a = b.dataset.act;
    if (a === 'settings') showSettings();
    if (a === 'help') showHelp();
    if (a === 'hide') hideScreen();
    if (a === 'volume') $('#volPop').classList.toggle('open');
    if (a === 'logout') logout();
  });

  window.addEventListener('beforeunload', e => {
    if (!state.inTest) return;
    // Save the latest answers even if the tab is closed; the attempt can be resumed after logging in.
    if (state.user && navigator.sendBeacon) {
      navigator.sendBeacon('/api/attempt/save', new Blob([JSON.stringify(attemptPayload())], { type: 'application/json' }));
    }
    e.preventDefault();
    e.returnValue = '';
  });

  /* ------------------------------------------------------------------ init */
  const saved = load('settings');
  if (saved) state.settings = Object.assign(state.settings, saved);
  applySettings();
  Speech.init();
  api('/api/me', { quiet: true })
    .then(async d => {
      setUser(d.user);
      const sent = await flushPending();
      if (sent) toast(`${sent} saved result${sent > 1 ? 's were' : ' was'} uploaded to your account.`);
      showSelect();
    })
    .catch(e => {
      showWelcome();
      if (e.status !== 401) showError(e);
    });
})();
