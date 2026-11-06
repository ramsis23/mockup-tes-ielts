// Membuat MP3 Listening dari transkrip + ffmpeg, dengan salah satu mesin suara:
//   --engine say          suara macOS (mis. "Daniel (Enhanced)"); default di macOS
//   --engine voicestudio  VoiceStudio lokal (OmniVoice, http://127.0.0.1:3900); default di Windows/Linux
//
//   node tools/generate-audio.mjs              -> semua tes (1-10), semua part
//   node tools/generate-audio.mjs 1 3          -> hanya tes 1 dan 3
//   node tools/generate-audio.mjs 1 --part 1   -> hanya tes 1 part 1
//   --force              timpa MP3 yang sudah ada
//   --out-dir <folder>   folder hasil (default: audio), mis. audio/preview untuk mencoba dulu
//   say:          --male "Daniel (Enhanced)" --female "Serena (Premium)" --narrator "..."
//   voicestudio:  --vs-url http://127.0.0.1:3900   --steps <n> (num_step; lebih kecil = lebih cepat)
//                 --new-voices  buat ulang sampel suara tokoh (tools/voicestudio-voices/)
// Hasil: <out-dir>/listening-NN-partK.mp3 (diputar otomatis oleh aplikasi menggantikan text-to-speech).
import fs from 'node:fs';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const VALUE_FLAGS = ['--part', '--out-dir', '--engine', '--male', '--female', '--narrator', '--vs-url', '--steps'];
const flag = name => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : null; };
const force = args.includes('--force');
const onlyPart = flag('--part') ? +flag('--part') : null;
const nos = args.filter((a, i) => /^\d+$/.test(a) && !VALUE_FLAGS.includes(args[i - 1])).map(Number);
const tests = nos.length ? nos : Array.from({ length: 10 }, (_, i) => i + 1);
const engine = flag('--engine') || (process.platform === 'darwin' ? 'say' : 'voicestudio');
const outDir = path.resolve(root, flag('--out-dir') || 'audio');

const LINE_GAP = 0.45;     // jeda antar kalimat (detik)
const SAMPLE_RATE = 22050;

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'ielts-audio-'));
let seq = 0;

/* --------------------------------------------------------------- ffmpeg */
// PATH dulu, lalu variabel FFMPEG, lalu ffmpeg yang dibawa VoiceStudio (Windows).
function findFfmpeg() {
  if (process.env.FFMPEG && fs.existsSync(process.env.FFMPEG)) return process.env.FFMPEG;
  try { execFileSync('ffmpeg', ['-version'], { stdio: 'ignore' }); return 'ffmpeg'; } catch {}
  const tools = path.join(process.env.APPDATA || '', 'OmniVoice', 'media_tools');
  if (fs.existsSync(tools)) {
    for (const d of fs.readdirSync(tools).filter(d => d.startsWith('ffbin-'))) {
      const exe = path.join(tools, d, 'win32', 'ffmpeg.exe');
      if (fs.existsSync(exe)) return exe;
    }
  }
  console.error('ffmpeg tidak ditemukan. Pasang ffmpeg (mis. `winget install Gyan.FFmpeg` / `brew install ffmpeg`) atau set FFMPEG=path\\ke\\ffmpeg.exe');
  process.exit(1);
}
const FFMPEG = findFfmpeg();
const ffmpeg = a => execFileSync(FFMPEG, ['-y', '-loglevel', 'error', ...a]);

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

// Samakan format (mono, 16-bit, SAMPLE_RATE) agar bisa digabung dengan concat demuxer.
function normalizeWav(src) {
  const f = path.join(tmp, `n${seq++}.wav`);
  ffmpeg(['-i', src, '-ac', '1', '-ar', String(SAMPLE_RATE), '-c:a', 'pcm_s16le', f]);
  return f;
}

/* ------------------------------------------------------- engine: say */
function sayEngine() {
  const RATE = 175; // kata per menit
  const installed = execFileSync('say', ['-v', '?'], { encoding: 'utf8' })
    .split('\n').map(l => l.match(/^(.+?)\s{2,}(\w\w_\w\w)/)).filter(Boolean)
    .map(m => ({ name: m[1].trim(), lang: m[2] }))
    .filter(v => v.lang.startsWith('en_'));
  const has = n => installed.some(v => v.name === n);
  const MALE = ['Daniel (Enhanced)', 'Oliver (Enhanced)', 'Jamie (Premium)', 'Arthur (Enhanced)', 'Daniel', 'Arthur'];
  const FEMALE = ['Serena (Premium)', 'Kate (Enhanced)', 'Stephanie (Enhanced)', 'Martha (Enhanced)', 'Serena (Enhanced)', 'Karen (Enhanced)', 'Moira (Enhanced)', 'Martha', 'Kate', 'Serena', 'Karen', 'Moira', 'Samantha'];
  const pools = {
    m: flag('--male') ? [flag('--male')] : MALE.filter(has),
    f: flag('--female') ? [flag('--female')] : FEMALE.filter(has)
  };
  const narrator = flag('--narrator') || pools.m[1] || pools.f[1] || pools.m[0];
  for (const [r, list] of Object.entries(pools)) {
    if (!list.length || !list.every(has)) { console.error(`No usable ${r === 'm' ? 'male' : 'female'} voice. Installed English voices:\n` + installed.map(x => '  ' + x.name).join('\n')); process.exit(1); }
  }
  if (!has(narrator)) { console.error(`Narrator voice not found: ${narrator}`); process.exit(1); }
  console.log(`Voices: narrator=${narrator}, male=${pools.m.slice(0, 2).join(' / ')}, female=${pools.f.slice(0, 2).join(' / ')}`);
  if (!/Enhanced|Premium/.test(pools.f[0])) console.log('  Tip: download a female Enhanced/Premium voice (e.g. "Serena (Premium)") in System Settings → Accessibility → Spoken Content for a more natural female speaker.');
  return {
    pools, narrator,
    async speak(text, voice) {
      const f = path.join(tmp, `v${seq++}.wav`);
      execFileSync('say', ['-v', voice, '-r', String(RATE), `--file-format=WAVE`, `--data-format=LEI16@${SAMPLE_RATE}`, '-o', f, text]);
      return f;
    }
  };
}

/* ------------------------------------------------ engine: voicestudio */
// Tiap tokoh = deskripsi suara OmniVoice (voice design) + seed tetap. Sampel suaranya dibuat sekali
// lalu dipakai sebagai referensi kloning untuk setiap kalimat, supaya suara tokoh tidak berubah-ubah.
// Token yang sah: male/female; child/teenager/young adult/middle-aged/elderly;
// very low/low/moderate/high/very high pitch; american/british/australian/canadian/indian ... accent.
const VS_VOICES = {
  narrator: { instruct: 'male, middle-aged, low pitch, british accent', seed: 1101 },
  m: [
    { instruct: 'male, young adult, moderate pitch, british accent', seed: 2101 },
    { instruct: 'male, middle-aged, moderate pitch, australian accent', seed: 2102 },
    { instruct: 'male, young adult, low pitch, canadian accent', seed: 2103 }
  ],
  f: [
    { instruct: 'female, young adult, moderate pitch, british accent', seed: 3101 },
    { instruct: 'female, middle-aged, moderate pitch, australian accent', seed: 3102 },
    { instruct: 'female, young adult, moderate pitch, american accent', seed: 3103 }
  ]
};
const VS_REF_TEXT = 'Good afternoon, and thank you for calling. I can certainly help you with that. ' +
  'Let me just check the details for you, it should only take a moment.';

async function voicestudioEngine() {
  const base = (flag('--vs-url') || process.env.VOICESTUDIO_URL || 'http://127.0.0.1:3900').replace(/\/$/, '');
  const steps = flag('--steps');
  const cacheDir = path.join(root, 'tools', 'voicestudio-voices');
  fs.mkdirSync(cacheDir, { recursive: true });
  try {
    const r = await fetch(`${base}/engines`);
    const tts = (await r.json()).tts;
    const om = tts.backends.find(b => b.id === 'omnivoice');
    if (!om?.available) throw new Error('engine omnivoice tidak tersedia');
    console.log(`VoiceStudio: ${base}, engine aktif=${tts.active}, device=${om.effective_device}`);
    if (om.effective_device === 'cpu') console.log('  Catatan: berjalan di CPU, jadi proses akan lambat.');
  } catch (e) {
    console.error(`Tidak bisa menghubungi VoiceStudio di ${base} (${e.message}). Buka aplikasi VoiceStudio dulu.`);
    process.exit(1);
  }

  async function generate(fields, refFile) {
    const form = new FormData();
    for (const [k, v] of Object.entries(fields)) if (v != null) form.append(k, String(v));
    form.append('engine', 'omnivoice');
    if (steps) form.append('num_step', steps);
    if (refFile) form.append('ref_audio', new Blob([fs.readFileSync(refFile)], { type: 'audio/wav' }), path.basename(refFile));
    // fetch() memutus setelah 5 menit menunggu header; di CPU (atau saat model pertama kali diunduh)
    // satu kalimat bisa lebih lama, jadi kirim lewat node:http tanpa batas waktu.
    const req = new Request(`${base}/generate`, { method: 'POST', body: form });
    const body = Buffer.from(await req.arrayBuffer());
    const headers = { 'content-type': req.headers.get('content-type'), 'content-length': body.length };
    for (let attempt = 1; ; attempt++) {
      const r = await new Promise((resolve, reject) => {
        const h = http.request(`${base}/generate`, { method: 'POST', headers }, res => {
          const chunks = [];
          res.on('data', c => chunks.push(c));
          res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, data: Buffer.concat(chunks) }));
          res.on('error', reject);
        });
        h.on('error', reject);
        h.end(body);
      });
      if (r.status === 200) return r.data;
      if (r.status === 403 && r.data.includes('model_licence_required')) {
        console.error('\nVoiceStudio menolak: lisensi model OmniVoice belum diterima.\n' +
          'Buka VoiceStudio → Model Catalogue, baca lisensinya (bobot model CC-BY-NC = non-komersial), lalu terima jika setuju.');
        process.exit(1);
      }
      if (r.headers['x-omnivoice-retryable'] === 'true' && attempt < 5) {
        await new Promise(res => setTimeout(res, 30000)); continue;
      }
      throw new Error(`VoiceStudio /generate ${r.status}: ${r.data.toString('utf8').slice(0, 300)}`);
    }
  }

  // Pemeriksaan otomatis: hasil ditranskrip dengan ASR bawaan VoiceStudio (Parakeet) lalu dicocokkan
  // dengan teks. Voice design kadang menghasilkan suara yang tidak bisa dipahami; hasil seperti itu
  // dibuat ulang dengan seed lain. Jika ASR tidak tersedia, pemeriksaan dilewati.
  let asrModel;
  try {
    const r = await fetch(`${base}/dictation/models`);
    asrModel = (await r.json()).models.find(m => m.installed && /parakeet/i.test(m.id))?.id;
  } catch {}
  if (!asrModel) console.log('  Catatan: model ASR (Parakeet) tidak terpasang, hasil tidak diperiksa otomatis.');
  // Angka, ejaan huruf, dan "double" tidak dinilai: ASR menulisnya sebagai digit/singkatan
  // ("oh seven seven nine four" → "07794", "K, I, M" → "K-I-M"), jadi pasti dianggap hilang.
  const NUMBER_WORDS = new Set(('oh zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen ' +
    'fifteen sixteen seventeen eighteen nineteen twenty thirty forty fifty sixty seventy eighty ninety hundred thousand ' +
    'double triple pounds pound pence percent').split(' '));
  const words = s => s.toLowerCase().replace(/[^a-z' ]+/g, ' ').split(/\s+/).filter(w => w.length > 1 && !NUMBER_WORDS.has(w));
  async function intelligibility(file, text) {
    if (!asrModel) return 1;
    const form = new FormData();
    form.append('file', new Blob([fs.readFileSync(file)], { type: 'audio/wav' }), 'check.wav');
    form.append('model', asrModel);
    form.append('response_format', 'json');
    try {
      const r = await fetch(`${base}/v1/audio/transcriptions`, { method: 'POST', body: form });
      const heard = {};
      words((await r.json()).text || '').forEach(w => heard[w] = (heard[w] || 0) + 1);
      const want = words(text);
      if (!want.length) return 1; // mis. hanya angka/ejaan huruf: tidak bisa dinilai
      return want.filter(w => heard[w] ? (heard[w]--, true) : false).length / want.length;
    } catch { return 1; }
  }
  // Coba beberapa seed, simpan hasil terbaik; berhenti begitu skornya cukup.
  async function bestOf(fields, refFile, seed, minScore, tries, out) {
    let best = { score: -1 };
    for (let k = 0; k < tries; k++) {
      const f = path.join(tmp, `try${seq++}.wav`);
      fs.writeFileSync(f, await generate({ ...fields, seed: seed + k * 7919 }, refFile));
      const score = await intelligibility(f, fields.text);
      if (score > best.score) best = { score, f };
      if (score >= minScore) break;
      console.log(`\n    ulang (terdengar ${(score * 100).toFixed(0)}%): ${fields.text.slice(0, 60)}`);
    }
    fs.copyFileSync(best.f, out);
    return best.score;
  }

  // Sampel referensi per tokoh: tools/voicestudio-voices/<seed>-<deskripsi>.wav
  const refs = {};
  async function refFor(v) {
    const f = path.join(cacheDir, `${v.seed}-${v.instruct.replace(/[^a-z]+/gi, '-')}.wav`);
    if (!refs[f]) {
      const stale = fs.existsSync(f) && !args.includes('--new-voices') && await intelligibility(f, VS_REF_TEXT) < 0.8;
      if (!fs.existsSync(f) || args.includes('--new-voices') || stale) {
        const t0 = Date.now();
        const score = await bestOf({ text: VS_REF_TEXT, instruct: v.instruct }, null, v.seed, 0.8, 6, f);
        console.log(`\n  voice ${path.relative(root, f)}  (terdengar ${(score * 100).toFixed(0)}%, ${((Date.now() - t0) / 1000).toFixed(0)}s)`);
      }
      refs[f] = createHash('sha1').update(fs.readFileSync(f)).digest('hex').slice(0, 12);
    }
    return { file: f, hash: refs[f] };
  }

  // Cache per kalimat (kunci: sampel suara + teks + steps), supaya menjalankan ulang tidak mengulang semuanya.
  const lineDir = path.join(cacheDir, 'lines');
  fs.mkdirSync(lineDir, { recursive: true });
  const key = v => `${v.seed}`;
  const byKey = Object.fromEntries([VS_VOICES.narrator, ...VS_VOICES.m, ...VS_VOICES.f].map(v => [key(v), v]));
  return {
    pools: { m: VS_VOICES.m.map(key), f: VS_VOICES.f.map(key) },
    narrator: key(VS_VOICES.narrator),
    async speak(text, voiceKey) {
      const v = byKey[voiceKey];
      const ref = await refFor(v);
      const f = path.join(lineDir, createHash('sha1').update(`${ref.hash}|${steps || ''}|${text}`).digest('hex').slice(0, 16) + '.wav');
      if (!fs.existsSync(f)) {
        const score = await bestOf({ text, ref_text: VS_REF_TEXT }, ref.file, v.seed, 0.6, 3, f);
        if (score < 0.6) console.log(`\n    PERIKSA MANUAL (terdengar ${(score * 100).toFixed(0)}%): ${text.slice(0, 80)}`);
      }
      return f;
    },
    describe: k => byKey[k].instruct
  };
}

/* ------------------------------------------------------------- voices */
const E = engine === 'say' ? sayEngine() : engine === 'voicestudio' ? await voicestudioEngine()
  : (console.error(`Engine tidak dikenal: ${engine} (pakai say atau voicestudio)`), process.exit(1));

function voicesForPart(part) {
  const used = { m: 0, f: 0 };
  const map = { N: E.narrator };
  const count = g => Object.values(part.speakers || {}).filter(x => x === g).length;
  Object.entries(part.speakers || {}).forEach(([letter, g]) => {
    const list = E.pools[g] || E.pools.m;
    // Avoid the narrator's voice unless the part needs more voices of that gender than are left.
    const usable = list.filter(v => v !== E.narrator);
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
async function buildPart(part, out) {
  const files = [silenceWav(0.8)];
  const v = voicesForPart(part);
  if (E.describe) console.log('  ' + Object.entries(v).map(([r, k]) => `${r}=${E.describe(k)}`).join(' | '));
  const speech = part.audio.filter(([r]) => r !== 'P').length;
  let done = 0;
  for (const [r, t] of part.audio) {
    if (r === 'P') { files.push(silenceWav(t)); continue; }
    const raw = await E.speak(t, v[r] || E.narrator);
    files.push(engine === 'say' ? raw : normalizeWav(raw), silenceWav(LINE_GAP));
    if (engine !== 'say') process.stdout.write(`\r  line ${++done}/${speech}`);
  }
  if (engine !== 'say') process.stdout.write('\n');
  const list = path.join(tmp, `list${seq++}.txt`);
  fs.writeFileSync(list, files.map(f => `file '${f.replace(/\\/g, '/')}'`).join('\n'));
  ffmpeg(['-f', 'concat', '-safe', '0', '-i', list, '-ac', '1', '-c:a', 'libmp3lame', '-b:a', '64k', out]);
}

fs.mkdirSync(outDir, { recursive: true });
let made = 0;
for (const no of tests) {
  const file = path.join(root, `js/tests/test-${String(no).padStart(2, '0')}.js`);
  vm.runInContext(fs.readFileSync(file, 'utf8'), ctx);
  const L = ctx.IELTS.get('listening', no);
  for (const [i, p] of L.parts.entries()) {
    if (onlyPart && onlyPart !== i + 1) continue;
    const out = path.join(outDir, `listening-${String(no).padStart(2, '0')}-part${i + 1}.mp3`);
    if (fs.existsSync(out) && !force) { console.log(`skip  ${path.relative(root, out)} (exists, use --force)`); continue; }
    const t0 = Date.now();
    console.log(`build ${path.relative(root, out)}`);
    await buildPart(p, out);
    made++;
    console.log(`made  ${path.relative(root, out)}  (${((Date.now() - t0) / 1000).toFixed(0)}s)`);
  }
}
fs.rmSync(tmp, { recursive: true, force: true });
console.log(`Done: ${made} file(s).`);
