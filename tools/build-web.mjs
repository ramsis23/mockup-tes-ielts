// Copy the web app into www/ for the Android (Capacitor) build.  node tools/build-web.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'www');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out);
for (const f of ['index.html', 'favicon.png']) fs.copyFileSync(path.join(root, f), path.join(out, f));
for (const d of ['css', 'js', 'audio']) {
  fs.cpSync(path.join(root, d), path.join(out, d), { recursive: true, filter: s => !/README\.md$|[\/]preview([\/]|$)/.test(s) });
}
const size = dir => fs.readdirSync(dir, { withFileTypes: true }).reduce((n, e) => n + (e.isDirectory() ? size(path.join(dir, e.name)) : fs.statSync(path.join(dir, e.name)).size), 0);
console.log(`www/ ready (${(size(out) / 1e6).toFixed(1)} MB)`);
