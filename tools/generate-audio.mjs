// Membuat MP3 Listening dari transkrip memakai suara macOS (mis. "Daniel (Enhanced)") + ffmpeg.
//   node tools/generate-audio.mjs              -> semua tes (1-10), semua part
//   node tools/generate-audio.mjs 1 3          -> hanya tes 1 dan 3
//   node tools/generate-audio.mjs 1 --part 1   -> hanya tes 1 part 1
//   --force   timpa MP3 yang sudah ada
//   --male "Daniel (Enhanced)" --female "Serena (Premium)" --narrator "..."   pilih suara manual
// Hasil: audio/listening-NN-partK.mp3 (diputar otomatis oleh aplikasi menggantikan text-to-speech).
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const flag = name => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : null; };
const force = args.includes('--force');
const onlyPart = flag('--part') ? +flag('--part') : null;
const nos = args.filter((a, i) => /^\d+$/.test(a) && !['--part'].includes(args[i - 1])).map(Number);
const tests = nos.length ? nos : Array.from({ length: 10 }, (_, i) => i + 1);

const RATE = 175;          // kata per menit
const LINE_GAP = 0.45;     // jeda antar kalimat (detik)
const SAMPLE_RATE = 22050;

/* ---------------------------------------------------------- pick voices */
const installed = execFileSync('say', ['-v', '?'], { encoding: 'utf8' })
  .split('\n').map(l => l.match(/^(.+?)\s{2,}(\w\w_\w\w)/)).filter(Boolean)
  .map(m => ({ name: m[1].trim(), lang: m[2] }))
  .filter(v => v.lang.startsWith('en_'));
const has = n => installed.some(v => v.name === n);
const firstOf = list => list.find(has);
const MALE = ['Daniel (Enhanced)', 'Oliver (Enhanced)', 'Jamie (Premium)', 'Arthur (Enhanced)', 'Daniel', 'Arthur'];
const FEMALE = ['Serena (Premium)', 'Kate (Enhanced)', 'Stephanie (Enhanced)', 'Martha (Enhanced)', 'Serena (Enhanced)', 'Karen (Enhanced)', 'Moira (Enhanced)', 'Martha', 'Kate', 'Serena', 'Karen', 'Moira', 'Samantha'];
// Voice pools per gender; speakers of the same gender in one part get different voices where possible.
const pools = {
  m: flag('--male') ? [flag('--male')] : MALE.filter(has),
  f: flag('--female') ? [flag('--female')] : FEMALE.filter(has)
};
// Narrator: a voice not used first for speakers (second male voice if there is one).
const narrator = flag('--narrator') || pools.m[1] || pools.f[1] || pools.m[0];
for (const [r, list] of Object.entries(pools)) {
  if (!list.length || !list.every(has)) { console.error(`No usable ${r === 'm' ? 'male' : 'female'} voice. Installed English voices:\n` + installed.map(x => '  ' + x.name).join('\n')); process.exit(1); }
}
if (!has(narrator)) { console.error(`Narrator voice not found: ${narrator}`); process.exit(1); }
console.log(`Voices: narrator=${narrator}, male=${pools.m.slice(0, 2).join(' / ')}, female=${pools.f.slice(0, 2).join(' / ')}`);
if (!/Enhanced|Premium/.test(pools.f[0])) console.log('  Tip: download a female Enhanced/Premium voice (e.g. "Serena (Premium)") in System Settings → Accessibility → Spoken Content for a more natural female speaker.');

function voicesForPart(part) {
  const used = { m: 0, f: 0 };
  const map = { N: narrator };
  const count = g => Object.values(part.speakers || {}).filter(x => x === g).length;
  Object.entries(part.speakers || {}).forEach(([letter, g]) => {
    const list = pools[g] || pools.m;
    // Avoid the narrator's voice unless the part needs more voices of that gender than are left.
    const usable = list.filter(v => v !== narrator);
    const pool = usable.length >= count(g) ? usable : list;
    map[letter] = pool[used[g]++ % pool.length];
  });
  return map;
}

/* ------------------------------------------------------------ load data */
const ctx = {};
ctx.window = ctx;
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, 'js/registry.js'), 'utf8'), ctx);

/* ---------------------------------------------------------------- audio */
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'ielts-audio-'));
let seq = 0;

function silenceWav(seconds) {
  const n = Math.round(seconds * SAMPLE_RATE);
  const buf = Buffer.alloc(44 + n * 2);
  buf.write('RIFF', 0); buf.writeUInt32LE(36 + n * 2, 4); buf.write('WAVE', 8);
  buf.write('fmt ', 12); buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20); buf.writeUInt16LE(1, 22);
  buf.writeUInt32LE(SAMPLE_RATE, 24); buf.writeUInt32LE(SAMPLE_RATE * 2, 28); buf.writeUInt16LE(2, 32); buf.writeUInt16LE(16, 34);
  buf.write('data', 36); buf.writeUInt32LE(n * 2, 40);
  const f = path.join(tmp, `s${seq++}.wav`);
  fs.writeFileSync(f, buf);
  return f;
}

function speechWav(text, voice) {
  const f = path.join(tmp, `v${seq++}.wav`);
  execFileSync('say', ['-v', voice, '-r', String(RATE), `--file-format=WAVE`, `--data-format=LEI16@${SAMPLE_RATE}`, '-o', f, text]);
  return f;
}

function buildPart(part, out) {
  const files = [silenceWav(0.8)];
  const v = voicesForPart(part);
  for (const [r, t] of part.audio) {
    if (r === 'P') { files.push(silenceWav(t)); continue; }
    files.push(speechWav(t, v[r] || narrator), silenceWav(LINE_GAP));
  }
  const list = path.join(tmp, `list${seq++}.txt`);
  fs.writeFileSync(list, files.map(f => `file '${f}'`).join('\n'));
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', list,
    '-ac', '1', '-c:a', 'libmp3lame', '-b:a', '64k', out]);
  files.forEach(f => fs.rmSync(f));
}

fs.mkdirSync(path.join(root, 'audio'), { recursive: true });
let made = 0;
for (const no of tests) {
  const file = path.join(root, `js/tests/test-${String(no).padStart(2, '0')}.js`);
  vm.runInContext(fs.readFileSync(file, 'utf8'), ctx);
  const L = ctx.IELTS.get('listening', no);
  L.parts.forEach((p, i) => {
    if (onlyPart && onlyPart !== i + 1) return;
    const out = path.join(root, `audio/listening-${String(no).padStart(2, '0')}-part${i + 1}.mp3`);
    if (fs.existsSync(out) && !force) { console.log(`skip  ${path.relative(root, out)} (exists, use --force)`); return; }
    const t0 = Date.now();
    buildPart(p, out);
    made++;
    console.log(`made  ${path.relative(root, out)}  (${((Date.now() - t0) / 1000).toFixed(0)}s)`);
  });
}
fs.rmSync(tmp, { recursive: true, force: true });
console.log(`Done: ${made} file(s).`);
