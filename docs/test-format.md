# Format file soal (test-NN.js)

Setiap nomor tes punya satu file `js/tests/test-NN.js` (NN = 01–10). File dimuat otomatis
saat kandidat memilih nomor tes. Isinya mendaftarkan konten lewat `IELTS.add(kind, no, data)`:

```js
(() => {
  const listening = { parts: [ /* 4 part */ ] };
  const readingAcademic = { parts: [ /* 3 passage */ ] };
  const readingGeneral = { parts: [ /* 3 section */ ] };
  const writingAcademic = { parts: [ /* Task 1 + Task 2 */ ] };
  const writingGeneral = { parts: [ /* Task 1 + Task 2 */ ] };

  IELTS.add('listening', 2, listening);           // dipakai Academic & General Training
  IELTS.add('reading-academic', 2, readingAcademic);
  IELTS.add('reading-general', 2, readingGeneral);
  IELTS.add('writing-academic', 2, writingAcademic);
  IELTS.add('writing-general', 2, writingGeneral);
})();
```

Contoh lengkap: `js/tests/test-01.js`. Validasi: `node tools/validate.mjs`.

## Aturan umum

- Semua konten harus **orisinal**. Jangan menyalin soal, teks, atau transkrip resmi IELTS.
- Listening dan Reading masing-masing tepat **40 soal**, bernomor **1–40 berurutan** tanpa lompatan.
- Setiap part punya `range: [from, to]` yang sama persis dengan gabungan `from`/`to` grup di dalamnya.
- String berisi HTML sederhana (`<b>`, `<p>`, `<ul>`, `<li>`, `<table>`, `<br>`). Pakai template literal
  (backtick) untuk HTML panjang; jangan memakai backtick atau `${` di dalam teks.
- Gunakan tanda kutip tipografis (`’` atau ’) atau escape `\'` untuk apostrof di string bertanda kutip tunggal.

## Part

```js
{
  title: 'Part 1',                         // Listening/Reading/Writing: 'Part 1', 'Part 2', ...
  instr: 'Listen and answer questions 1–10.',
  range: [1, 10],                          // tidak dipakai di Writing
  groups: [ ... ],                         // Listening & Reading
  // Listening saja:
  speakers: { A: 'm', B: 'f' },            // jenis suara untuk tiap pembicara: 'm' | 'f'
  audio: [ ['N', '...'], ['A', '...'], ['P', 30] ],
  audioFile: 'audio/listening-02-part1.mp3', // opsional
  // Reading saja:
  passage: { title: '...', html: '<p>...</p>' }
}
```

Instruksi part yang dipakai:

- Listening: `Listen and answer questions 1–10.`
- Reading: `You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.`
  (General Training: `... based on Section 1 below.`)

## Tipe grup soal

Semua grup punya `type`, `from`, `to`, `instr` (HTML).

### `gap` — isian (form/notes/table/sentence/summary completion)

```js
{ type: 'gap', from: 1, to: 5,
  instr: 'Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.',
  template: `<div class="notes-box"><h4>Judul</h4><ul><li>price: £[[1]]</li></ul></div>`,
  answers: { 1: ['45', 'forty-five'] } }
```

- Setiap nomor `from..to` muncul **tepat sekali** sebagai `[[n]]` di `template` dan punya kunci di `answers`.
- `answers[n]` adalah array jawaban yang diterima (pertama = jawaban utama). Pencocokan mengabaikan huruf besar/kecil,
  spasi, dan tanda baca, jadi `BN7 4QT` = `bn74qt`.
- Jawaban harus mematuhi batas kata di instruksi.
- Wadah yang tersedia: `.form-box` + `table.form-table` (form), `.notes-box` (notes), `<p class="sent">` (sentence),
  `<table class="form-table">` biasa untuk tabel.

### `mc` — pilihan ganda satu jawaban

```js
{ type: 'mc', from: 11, to: 12, instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
  questions: [
    { n: 11, text: 'Why ...?', options: [ { k: 'A', t: '...' }, { k: 'B', t: '...' }, { k: 'C', t: '...' } ], answer: 'B' }
  ] }
```

Listening biasanya A–C, Reading A–D.

### `tf` — TRUE/FALSE/NOT GIVEN atau YES/NO/NOT GIVEN

```js
{ type: 'tf', variant: 'tf', from: 1, to: 6, instr: '...',
  questions: [ { n: 1, text: '...', answer: 'TRUE' } ] }
```

`variant: 'tf'` → `TRUE` | `FALSE` | `NOT GIVEN`; `variant: 'yn'` → `YES` | `NO` | `NOT GIVEN`.

### `match` — matching (headings, information, features, sentence endings, map/plan labels)

```js
{ type: 'match', from: 14, to: 19, instr: '...', boxTitle: 'List of Headings',
  options: [ { k: 'i', t: '...' }, { k: 'ii', t: '...' } ],
  questions: [ { n: 14, text: 'Paragraph A', answer: 'ii' } ] }
```

`answer` harus salah satu `options[].k`. Sediakan opsi pengecoh (lebih banyak opsi daripada soal) kecuali
untuk "matching information" yang boleh memakai huruf paragraf A–G.

Tampilan: jika semua opsi hanya huruf (`{ k: 'A', t: 'A' }`, untuk label peta/denah), tiap soal tampil sebagai
daftar radio A–H dalam dua kolom. Jika opsi berisi teks, defaultnya kotak daftar opsi + dropdown. `display: 'radio'`
memaksa daftar radio berikut teks opsinya (gaya "26 forming questions: A – get permission …").
`display: 'grid'` menampilkan tabel: satu baris per soal, satu kolom radio per huruf ("click on the correct space
in the table"), cocok untuk matching features dan label peta/denah; opsi berteks tetap ditampilkan di kotak di atasnya.

Tests 11+ hanya Academic: daftarkan `listening`, `reading-academic`, `writing-academic` saja.

### Gambar (`figure`) — peta, denah, diagram

Grup mana pun boleh punya `figure`: string `<svg>` inline yang tampil di bawah `instr`.

```js
{ type: 'match', from: 15, to: 20, instr: 'Label the plan below.<br>Write the correct letter, <b>A–H</b>, next to Questions 15–20.',
  figure: `<svg viewBox="0 0 600 450" role="img" aria-label="Plan of ...">
    <text class="fig-title" x="300" y="28" text-anchor="middle">Judul</text>
    <rect class="box" x="113" y="73" width="24" height="24"/><text class="lbl" x="125" y="90" text-anchor="middle">A</text>
  </svg>`, ... }
```

Jangan menulis warna sendiri. Pakai kelas berikut supaya gambar ikut mode kontras (putih di atas hitam,
kuning di atas hitam):

- `fig-title`: judul.
- `lbl`: huruf tebal.
- `box`: kotak huruf 24×24 atau garis tepi.
- `line`: jalan atau dinding tebal.
- `thin`: garis tipis.
- `path`: jalan setapak putus-putus.
- `route`: rute kapal atau bus.
- `area`: bangunan atau lapangan (abu-abu).
- `water`: air.
- `green`: taman.
- `solid`: panah atau penanda.
- `halo`: teks yang melintasi garis.

Contoh lengkap: Listening Part 2 di `test-03.js`. Jangan menulis nama tempat yang ditanyakan di gambar.

### `multi` — pilih DUA (atau TIGA) huruf

```js
{ type: 'multi', from: 25, to: 26, ns: [25, 26],
  instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
  text: 'Which <b>TWO</b> things ...?',
  options: [ { k: 'A', t: '...' }, ... ],
  answers: ['B', 'C'] }
```

`ns` = semua nomor yang dicakup (`from..to`), `answers.length === ns.length`.

## Audio Listening

`audio` berisi segmen yang dibacakan berurutan oleh text-to-speech browser:

- `['N', 'teks']` narator (instruksi, "You now have 30 seconds to ...").
- `['A', 'teks']`, `['B', 'teks']`, `['C', 'teks']` pembicara; setiap huruf yang dipakai wajib ada di `part.speakers`.
- `['P', detik]` jeda (waktu membaca soal / memeriksa jawaban).

Pola tiap part: narator memperkenalkan situasi → `['P', 25–35]` → "Now listen carefully and answer questions …"
→ percakapan → (opsional jeda di tengah untuk soal berikutnya) → "That is the end of Part X. You now have 30 seconds
to check your answers." → `['P', 30]`. Part 4 diakhiri `['N', 'That is the end of the Listening test.']`.

Setiap jawaban harus benar-benar diucapkan dalam transkrip, dalam urutan nomor soal, dengan pengecoh yang wajar
(misalnya angka yang dikoreksi, pilihan yang ditolak). Ejaan nama dibaca per huruf: `'K, I, M, B, E, double L'`.

Struktur Listening:

| Part | Situasi | Soal |
|---|---|---|
| 1 | percakapan sehari-hari, 2 orang (form/notes) | 1–10 |
| 2 | monolog sosial (tur, pengumuman) | 11–20 |
| 3 | diskusi akademik 2–3 orang | 21–30 |
| 4 | kuliah/monolog akademik | 31–40 |

### MP3 sendiri (opsional)

Jika file `audio/listening-NN-partK.mp3` ada (atau `part.audioFile` diisi), file itu yang diputar untuk part
tersebut, menggantikan text-to-speech. Rekaman harus sudah berisi instruksi dan jeda sendiri.

## Reading

**Academic** — 3 passage (≈700–900 kata, makin sulit), biasanya 13 / 13 / 14 soal.
Paragraf berlabel ditulis `<p><b class="para">A</b> ...</p>`.

**General Training** — 3 section, judul part tetap `Part 1/2/3`:

| Section | Isi | Soal |
|---|---|---|
| 1 | 2–3 teks pendek sehari-hari (iklan, jadwal, pemberitahuan) | 1–14 |
| 2 | 2 teks terkait pekerjaan (kebijakan kantor, pelatihan, lowongan) | 15–27 |
| 3 | 1 teks panjang bertema umum | 28–40 |

Beberapa teks dalam satu section ditaruh di `passage.html` dengan subjudul `<h3>` dan label `<b class="para">A</b>`.

## Writing

```js
{ title: 'Part 1', instr: 'You should spend about 20 minutes on this task. Write at least 150 words.',
  minWords: 150, prompt: `<p><b>...</b></p>`, chart: { ... } }   // chart hanya Academic Task 1
{ title: 'Part 2', instr: 'You should spend about 40 minutes on this task. Write at least 250 words.',
  minWords: 250, prompt: `...<div class="essay-topic"><p><b>...</b></p></div>...` }
```

**General Training Task 1** = surat dengan 3 poin:

```html
<p>You recently ... </p>
<p>Write a letter to ... In your letter</p>
<ul><li>...</li><li>...</li><li>...</li></ul>
<p>Write at least 150 words.</p>
<p>You do <b>NOT</b> need to write any addresses.</p>
<p>Begin your letter as follows:</p><p><b>Dear ......,</b></p>
```

### Jenis grafik Academic Task 1 (`chart`)

```js
{ type: 'bar',  title, categories: ['1990','2000'], series: [{ name, values: [..] }], unit: '%', max: 60 }
{ type: 'line', title, categories: ['2000','2005','2010'], series: [{ name, values: [..] }], unit: 'million', max: 40 }
{ type: 'pie',  title, pies: [{ label: '1990', slices: [{ name: 'Coal', value: 40 }] }] }   // 1–3 pie, nilai dalam %
{ type: 'table', title, columns: ['Country', '2000', '2010'], rows: [['Japan', '12', '15']] }
{ type: 'process', title, steps: ['Step 1 ...', 'Step 2 ...'], cycle: false }               // 4–10 langkah
{ type: 'map', title, maps: [{ label: '1995', features: [
    { name: 'Car park', x: 10, y: 60, w: 30, h: 25, kind: 'building' } ] }] }               // koordinat 0–100
```

`kind` untuk peta: `building` | `road` | `water` | `green` | `other`. `max` (opsional) = batas atas sumbu.
