// Validasi file soal: node tools/validate.mjs [nomor...]
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ctx = { window: {} };
ctx.window = ctx;
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, 'js/registry.js'), 'utf8'), ctx);

const nos = process.argv.slice(2).map(Number).filter(Boolean);
const list = nos.length ? nos : Array.from({ length: 10 }, (_, i) => i + 1);
const errors = [];
const warn = [];

for (const no of list) {
  const file = path.join(root, `js/tests/test-${String(no).padStart(2, '0')}.js`);
  if (!fs.existsSync(file)) { errors.push(`test ${no}: file missing`); continue; }
  try { vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: file }); }
  catch (e) { errors.push(`test ${no}: syntax/runtime error: ${e.message}`); continue; }
  for (const kind of ['listening', 'reading-academic', 'reading-general', 'writing-academic', 'writing-general']) {
    const d = ctx.IELTS.get(kind, no);
    const tag = `test ${no} ${kind}`;
    if (!d) { errors.push(`${tag}: not registered`); continue; }
    if (kind.startsWith('writing')) checkWriting(d, tag, kind);
    else checkQuestions(d, tag, kind);
  }
}

function checkWriting(d, tag, kind) {
  if (!Array.isArray(d.parts) || d.parts.length !== 2) return errors.push(`${tag}: needs 2 parts`);
  d.parts.forEach((p, i) => {
    if (!p.prompt || !p.title || !p.instr || !p.minWords) errors.push(`${tag} part ${i + 1}: missing prompt/title/instr/minWords`);
  });
  const c = d.parts[0].chart;
  if (kind === 'writing-academic') {
    if (!c) return errors.push(`${tag}: Task 1 chart missing`);
    const ok = {
      bar: () => c.categories && c.series?.every(s => s.values.length === c.categories.length),
      line: () => c.categories && c.series?.every(s => s.values.length === c.categories.length),
      pie: () => c.pies?.length && c.pies.every(p => p.slices?.length),
      table: () => c.columns && c.rows?.every(r => r.length === c.columns.length),
      process: () => c.steps?.length >= 3,
      map: () => c.maps?.length && c.maps.every(m => m.features?.length)
    }[c.type];
    if (!ok) errors.push(`${tag}: unknown chart type ${c.type}`);
    else if (!ok()) errors.push(`${tag}: chart ${c.type} malformed`);
  } else {
    if (c) warn.push(`${tag}: GT Task 1 should not have a chart`);
    if (!/Dear/.test(d.parts[0].prompt)) errors.push(`${tag}: letter prompt lacks "Dear ......,"`);
  }
}

function checkQuestions(d, tag, kind) {
  const want = kind === 'listening' ? 4 : 3;
  if (!Array.isArray(d.parts) || d.parts.length !== want) return errors.push(`${tag}: needs ${want} parts`);
  const seen = [];
  d.parts.forEach((p, pi) => {
    const pt = `${tag} part ${pi + 1}`;
    if (!p.range || !p.groups?.length) return errors.push(`${pt}: missing range/groups`);
    if (p.groups[0].from !== p.range[0] || p.groups[p.groups.length - 1].to !== p.range[1]) errors.push(`${pt}: range ${p.range} does not match groups`);
    if (kind !== 'listening' && !(p.passage?.title && p.passage?.html)) errors.push(`${pt}: passage missing`);
    if (kind === 'listening') {
      if (!p.audio?.length) errors.push(`${pt}: audio missing`);
      (p.audio || []).forEach((a, ai) => {
        if (!Array.isArray(a) || a.length !== 2) return errors.push(`${pt}: audio[${ai}] malformed`);
        const [r, t] = a;
        if (r === 'P') { if (typeof t !== 'number') errors.push(`${pt}: audio[${ai}] pause must be number`); }
        else if (r === 'N') { if (typeof t !== 'string') errors.push(`${pt}: audio[${ai}] text`); }
        else if (!p.speakers?.[r]) errors.push(`${pt}: speaker ${r} not in speakers`);
        else if (!['m', 'f'].includes(p.speakers[r])) errors.push(`${pt}: speaker ${r} must be m|f`);
      });
    }
    p.groups.forEach(g => {
      const gt = `${pt} Q${g.from}-${g.to}`;
      if (!g.instr) errors.push(`${gt}: instr missing`);
      const nums = [];
      if (g.type === 'gap') {
        const ph = [...(g.template || '').matchAll(/\[\[(\d+)\]\]/g)].map(m => +m[1]);
        ph.forEach(n => { nums.push(n); if (!g.answers?.[n]?.length) errors.push(`${gt}: no answer for [[${n}]]`); });
        Object.keys(g.answers || {}).forEach(n => { if (!ph.includes(+n)) errors.push(`${gt}: answer ${n} has no [[${n}]]`); });
        if (/`|\$\{/.test(g.template)) errors.push(`${gt}: template contains backtick or \${`);
      } else if (g.type === 'mc' || g.type === 'tf' || g.type === 'match') {
        const keys = g.type === 'tf' ? (g.variant === 'yn' ? ['YES', 'NO', 'NOT GIVEN'] : ['TRUE', 'FALSE', 'NOT GIVEN']) : null;
        if (g.type === 'tf' && !['tf', 'yn'].includes(g.variant)) errors.push(`${gt}: tf variant must be tf|yn`);
        (g.questions || []).forEach(q => {
          nums.push(q.n);
          const k = keys || (g.type === 'match' ? g.options : q.options)?.map(o => o.k) || [];
          if (!k.includes(q.answer)) errors.push(`${gt}: Q${q.n} answer "${q.answer}" not in options`);
          if (!q.text) errors.push(`${gt}: Q${q.n} text missing`);
        });
      } else if (g.type === 'multi') {
        (g.ns || []).forEach(n => nums.push(n));
        const k = (g.options || []).map(o => o.k);
        if (g.answers?.length !== g.ns?.length) errors.push(`${gt}: multi answers count != ns`);
        (g.answers || []).forEach(a => { if (!k.includes(a)) errors.push(`${gt}: multi answer ${a} not in options`); });
      } else errors.push(`${gt}: unknown type ${g.type}`);
      const exp = Array.from({ length: g.to - g.from + 1 }, (_, i) => g.from + i);
      if (nums.slice().sort((a, b) => a - b).join() !== exp.join()) errors.push(`${gt}: numbers [${nums}] != ${g.from}-${g.to}`);
      seen.push(...nums);
    });
  });
  const exp = Array.from({ length: 40 }, (_, i) => i + 1).join();
  if (seen.join() !== exp) errors.push(`${tag}: numbering is not 1-40 contiguous (got ${seen.length} questions)`);
}

warn.forEach(w => console.log('warn:', w));
if (errors.length) {
  errors.forEach(e => console.log('ERROR:', e));
  console.log(`\n${errors.length} error(s)`);
  process.exit(1);
}
console.log(`OK: tests ${list.join(', ')} valid`);
