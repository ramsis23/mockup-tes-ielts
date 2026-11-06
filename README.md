# IELTS on Computer – Practice Tests

Aplikasi simulasi tes IELTS berbasis komputer (*computer-delivered IELTS*) untuk latihan mandiri.
Tersedia **10 tes lengkap** untuk **Academic** dan **General Training**: Listening, Reading, dan
Writing, dengan tampilan dan perilaku yang meniru tes IELTS di komputer.

> Mockup latihan independen. Tidak berafiliasi dengan British Council, IDP, atau Cambridge
> University Press & Assessment. Semua soal, teks bacaan, dan transkrip audio adalah konten orisinal.
> Skor yang ditampilkan hanya perkiraan dan bukan skor resmi.

---

## Daftar isi

1. [Fitur](#fitur)
2. [Aplikasi desktop (installer Windows & Mac)](#aplikasi-desktop-installer-windows--mac)
3. [Kebutuhan sistem](#kebutuhan-sistem)
4. [Instalasi](#instalasi)
5. [Menjalankan aplikasi](#menjalankan-aplikasi)
6. [Cara memakai](#cara-memakai)
7. [Audio Listening](#audio-listening)
8. [Struktur folder](#struktur-folder)
9. [Data akun dan database](#data-akun-dan-database)
10. [Menambah atau mengubah soal](#menambah-atau-mengubah-soal)
11. [Membuat installer sendiri](#membuat-installer-sendiri)
12. [Pemecahan masalah](#pemecahan-masalah)
13. [Catatan keamanan](#catatan-keamanan)

---

## Fitur

- **Dua jenis tes**: Academic dan General Training. Listening sama untuk keduanya (seperti tes asli);
  Reading dan Writing Task 1 berbeda.
- **10 tes lengkap** per jenis: Listening (4 part, 40 soal), Reading (3 passage/section, 40 soal),
  Writing (Task 1 dan Task 2).
- **Tampilan tes komputer**: timer "minutes left", kotak judul part, navigasi nomor soal di bawah,
  tombol panah, tanda *Review*, layar Reading/Writing terbelah yang bisa digeser.
- **Highlight dan Notes**: pilih teks, klik kanan, lalu pilih *Highlight* atau *Notes*.
- **Opsi aksesibilitas**: ukuran teks dan kontras warna (menu ☰).
- **Tipe soal**: isian (form/notes/sentence completion), pilihan ganda, TRUE/FALSE/NOT GIVEN,
  YES/NO/NOT GIVEN, matching (headings, information, sentence endings), pilih dua jawaban.
- **Writing**: penghitung kata otomatis; grafik Task 1 Academic (bar, line, pie, table, process, map);
  surat Task 1 General Training.
- **Akun**: daftar dan login; progres tersimpan per jenis tes, tes yang terhenti bisa dilanjutkan,
  dan riwayat nilai tersimpan.
- **Hasil**: perkiraan band Listening dan Reading, pembahasan per soal, transkrip audio,
  dan unduhan jawaban Writing.
- **Audio**: MP3 untuk semua tes sudah tersedia; jika MP3 tidak ada, transkrip dibacakan oleh
  text-to-speech browser.

Speaking tidak disertakan karena pada tes asli dilakukan tatap muka dengan examiner.

---

## Aplikasi desktop (installer Windows & Mac)

Cara paling mudah: pasang aplikasinya, tanpa Python dan tanpa terminal.

1. Buka halaman **[Releases](https://github.com/ramsis23/mockup-tes-ielts/releases)** di GitHub.
2. Unduh file sesuai komputer Anda:

   | Komputer | File |
   |---|---|
   | Windows 10/11 | `IELTS-Practice-Setup-<versi>.exe` |
   | Mac Apple Silicon (M1/M2/M3/M4) | `IELTS-Practice-<versi>-mac-arm64.dmg` |
   | Mac Intel | `IELTS-Practice-<versi>-mac-x86_64.dmg` |

   Cek jenis Mac: menu Apple → *About This Mac*. "Chip Apple M…" = Apple Silicon, "Processor Intel" = Intel.

3. Pasang:
   - **Windows**: jalankan file `.exe`, ikuti langkahnya. Ikon *IELTS Practice* muncul di Start Menu
     (dan Desktop jika dipilih).
   - **Mac**: buka file `.dmg`, seret *IELTS Practice* ke folder **Applications**.

4. Jalankan *IELTS Practice*. Browser akan terbuka otomatis ke halaman tes, dan muncul jendela kecil
   berisi tombol **Open in browser** dan **Quit**. Biarkan jendela kecil itu terbuka selama latihan;
   klik **Quit** untuk menutup aplikasi.

### Peringatan keamanan saat pertama kali dibuka

Installer belum ditandatangani sertifikat developer berbayar, jadi sistem operasi menampilkan peringatan.
Ini normal untuk aplikasi gratis dan aman dilewati:

- **Windows** ("Windows protected your PC"): klik **More info → Run anyway**.
- **macOS** ("cannot be opened because the developer cannot be verified"): klik kanan aplikasi di
  Applications → **Open** → **Open**. Di macOS 15 ke atas: buka **System Settings → Privacy & Security**,
  gulir ke bawah, klik **Open Anyway**.
  Alternatif lewat Terminal:
  ```bash
  xattr -dr com.apple.quarantine "/Applications/IELTS Practice.app"
  ```

### Lokasi data aplikasi desktop

Akun dan riwayat nilai versi desktop disimpan terpisah dari versi `server.py`:

- **Windows**: `%APPDATA%\IELTS Practice\ielts.db`
- **macOS**: `~/Library/Application Support/IELTS Practice/ielts.db`

Menghapus (uninstall) aplikasi tidak menghapus data ini. Hapus file di atas jika ingin mengosongkan semua akun.

---

## Aplikasi Android (APK)

Setiap rilis di [Releases](https://github.com/ramsis23/mockup-tes-ielts/releases) juga berisi
`IELTS-Practice-x.y.z-android.apk`.

**Memasang APK:**

1. Unduh file APK di HP.
2. Buka file tersebut.
3. Izinkan **Install unknown apps** untuk browser atau file manager yang dipakai.

Aplikasi Android tidak memakai `server.py`. Akun, jawaban yang tersimpan, dan riwayat nilai disimpan **di HP
itu sendiri** (`js/local-api.js`, endpoint sama dengan server). Data ini tidak tersinkron dengan versi desktop,
dan hilang jika aplikasi di-uninstall atau datanya dihapus.

**Kunci tanda tangan (signing key):** agar versi baru bisa dipasang menimpa versi lama, setiap rilis harus
ditandatangani dengan kunci yang sama. Simpan keystore Anda sendiri sebagai repository secrets di GitHub
(Settings → Secrets and variables → Actions):

| Secret | Isi |
|---|---|
| `ANDROID_KEYSTORE_BASE64` | isi file `.jks` dalam base64 |
| `ANDROID_KEYSTORE_PASSWORD` | password keystore |
| `ANDROID_KEY_ALIAS` | alias kunci |
| `ANDROID_KEY_PASSWORD` | password kunci |

Tanpa secrets, APK ditandatangani dengan debug key sementara. APK itu tetap bisa dipasang, tetapi versi berikutnya
harus didahului uninstall.

**Build manual** (perlu Node 20+, JDK 21 dan Android SDK):

```bash
npm install
npm run android:apk        # hasil: android/app/build/outputs/apk/release/app-release.apk
```

Coba mode penyimpanan lokal di browser biasa dengan `http://localhost:5173/?local=1`.

Listening memakai MP3 di folder `audio/`. WebView Android umumnya tidak mendukung text-to-speech browser, jadi
part yang belum punya MP3 tidak bersuara di Android.

---

## Kebutuhan sistem

| Kebutuhan | Keterangan |
|---|---|
| **Python 3.8 atau lebih baru** | Wajib. Menjalankan server aplikasi. Hanya memakai pustaka standar, tidak perlu `pip install`. |
| **Browser modern** | Chrome, Edge, Safari, atau Firefox versi terbaru. |
| **Git** | Untuk mengunduh (clone) repository. Bisa juga diunduh sebagai ZIP. |
| Node.js 18+ | Opsional. Hanya untuk memvalidasi soal dan membuat ulang MP3. |
| ffmpeg + macOS | Opsional. Hanya untuk membuat ulang MP3 Listening. |

Cek versi Python:

```bash
python3 --version
```

---

## Instalasi

### 1. Pasang Python (jika belum ada)

- **macOS**: biasanya sudah terpasang. Jika belum, unduh dari <https://www.python.org/downloads/>
  atau pasang lewat Homebrew:
  ```bash
  brew install python
  ```
- **Windows**: unduh installer dari <https://www.python.org/downloads/>. Saat instalasi,
  **centang "Add Python to PATH"**. Di Windows, perintahnya `python` (bukan `python3`).
- **Linux (Ubuntu/Debian)**:
  ```bash
  sudo apt install python3
  ```

### 2. Unduh aplikasi

Dengan Git:

```bash
git clone https://github.com/ramsis23/mockup-tes-ielts.git
cd mockup-tes-ielts
```

Tanpa Git: buka halaman repository di GitHub, klik **Code → Download ZIP**, ekstrak, lalu buka
terminal di folder hasil ekstrak.

Tidak ada langkah instalasi lain. Database dibuat otomatis saat server pertama kali dijalankan.

---

## Menjalankan aplikasi

1. Buka terminal di folder proyek, lalu jalankan:

   ```bash
   python3 server.py
   ```

   Di Windows:

   ```bash
   python server.py
   ```

2. Terminal akan menampilkan:

   ```text
   IELTS Practice Test running at http://localhost:5173  (database: data/ielts.db)
   Keep this window open while you use the app. Press Ctrl+C to stop.
   ```

3. Buka **http://localhost:5173** di browser.

4. **Biarkan terminal tetap terbuka** selama memakai aplikasi. Untuk menghentikan server,
   tekan **Ctrl + C** di terminal.

### Memakai port lain

Jika port 5173 sudah dipakai program lain, tambahkan nomor port:

```bash
python3 server.py 8000
```

Lalu buka **http://localhost:8000**.

### Penting: jangan pakai `python3 -m http.server`

Aplikasi ini butuh `server.py` karena fitur akun dan penyimpanan progres berjalan di server tersebut.
Jika dibuka dengan `python3 -m http.server`, halaman memang tampil tetapi muncul pesan
*"The account server is not running"*. Membuka `index.html` langsung (klik dua kali) juga tidak akan berfungsi.

---

## Cara memakai

1. **Create an account**: isi nama, email, dan password (minimal 6 karakter). Akun hanya tersimpan
   di komputer Anda sendiri.
2. **Log in**, lalu konfirmasi data kandidat.
3. **Pilih jenis tes**: *Academic* atau *General Training*.
4. **Pilih nomor tes** (1–10), lalu pilih **Full test** (Listening → Reading → Writing) atau satu modul saja.
5. **Listening**: lakukan tes suara (*Play sound*), atur volume, lalu mulai. Audio diputar sekali
   dan tidak bisa dijeda, sama seperti tes asli. Setelah audio selesai, ada 2 menit untuk memeriksa jawaban.
6. **Reading**: 60 menit. Teks di kiri, soal di kanan. Garis tengah bisa digeser.
7. **Writing**: 60 menit. Ketik jawaban di kotak kanan; jumlah kata tampil di bawahnya.
8. Klik **Submit** (tanda ✓ di kanan bawah) untuk mengumpulkan. Jawaban juga terkirim otomatis saat waktu habis.
9. Lihat **hasil**: band Listening/Reading, pembahasan tiap soal, transkrip, dan jawaban Writing.
   Writing tidak dinilai otomatis karena di tes asli dinilai examiner.

### Kontrol selama tes

| Kontrol | Fungsi |
|---|---|
| Nomor soal di bawah | Lompat ke soal tersebut. Garis bawah = sudah dijawab, titik merah = ditandai *Review*. |
| Tombol ← → | Soal sebelumnya / berikutnya. |
| Kotak *Review* | Menandai soal untuk dicek ulang. |
| Klik kanan pada teks terpilih | *Highlight* atau *Notes*. Klik kanan pada highlight untuk *Clear* / *Clear all*. |
| Ikon speaker (Listening) | Mengatur volume. |
| *Hide* | Menyembunyikan layar sementara (timer tetap berjalan). |
| Menu ☰ | Ukuran teks dan kontras warna. |

---

## Audio Listening

Folder `audio/` berisi MP3 untuk ke-10 tes dengan nama `listening-NN-partK.mp3`
(NN = 01–10, K = 1–4). Jika file ada, aplikasi memutarnya; jika tidak ada, transkrip dibacakan
oleh text-to-speech browser (pilihan suara tersedia di layar tes suara).

### Membuat ulang MP3 (opsional, khusus macOS)

MP3 dibuat dari transkrip dengan suara macOS dan ffmpeg. Untuk membuat ulang:

1. Pasang Node.js dan ffmpeg:
   ```bash
   brew install node ffmpeg
   ```
2. Unduh suara berkualitas tinggi: **System Settings → Accessibility → Spoken Content →
   System voice → Manage Voices**, lalu pasang misalnya *Daniel (Enhanced)* dan *Serena (Premium)*.
3. Jalankan:
   ```bash
   node tools/generate-audio.mjs              # semua tes
   node tools/generate-audio.mjs 3            # hanya Test 3
   node tools/generate-audio.mjs 1 --part 1   # hanya Test 1 Part 1
   node tools/generate-audio.mjs --force      # timpa MP3 yang sudah ada
   ```

Anda juga bisa mengganti MP3 dengan rekaman sendiri, selama isinya mengikuti transkrip di
`js/tests/test-NN.js` (termasuk instruksi narator dan jedanya). Rekaman resmi IELTS dilindungi
hak cipta dan dibuat untuk soal mereka sendiri, jadi tidak cocok dipakai di sini.
Detail ada di [`audio/README.md`](audio/README.md).

---

## Struktur folder

```text
mockup-tes-ielts/
├── index.html            Halaman utama
├── server.py             Server lokal: file statis + API akun & progres (SQLite)
├── css/style.css         Tampilan
├── js/
│   ├── app.js            Logika aplikasi (layar, timer, navigasi, penilaian)
│   ├── registry.js       Registrasi data tes
│   └── tests/
│       └── test-01.js … test-10.js   Soal, kunci jawaban, transkrip, prompt Writing
├── audio/                MP3 Listening (listening-NN-partK.mp3)
├── docs/test-format.md   Format data soal
├── tools/
│   ├── validate.mjs      Validasi file soal
│   └── generate-audio.mjs  Pembuat MP3 dari transkrip (macOS)
├── desktop/
│   ├── launcher.py       Titik masuk aplikasi desktop (server + browser + jendela kontrol)
│   ├── ielts.spec        Konfigurasi PyInstaller
│   ├── build-mac.sh      Build .app dan .dmg (macOS)
│   ├── build-windows.ps1 Build installer .exe (Windows)
│   └── windows-installer.iss  Skrip Inno Setup
├── .github/workflows/release.yml  Build installer otomatis di GitHub Actions
└── data/ielts.db         Database akun & progres (dibuat otomatis, tidak ikut ke Git)
```

---

## Data akun dan database

- Semua akun, progres, dan riwayat nilai tersimpan di **`data/ielts.db`** (SQLite) di komputer Anda.
- Password disimpan sebagai hash (PBKDF2-SHA256), bukan teks asli.
- Folder `data/` ada di `.gitignore`, jadi tidak ikut ter-upload ke GitHub.
- **Cadangan**: salin file `data/ielts.db` ke tempat lain.
- **Reset semua data**: hentikan server, hapus `data/ielts.db`, lalu jalankan server lagi.

---

## Menambah atau mengubah soal

1. Buka file `js/tests/test-NN.js` untuk tes yang ingin diubah.
2. Ikuti format di [`docs/test-format.md`](docs/test-format.md) (tipe soal, penomoran 1–40,
   kunci jawaban, transkrip audio, jenis grafik Writing).
3. Validasi:
   ```bash
   node tools/validate.mjs        # semua tes
   node tools/validate.mjs 3      # hanya Test 3
   ```
   Jika semua benar, keluar pesan `OK: tests ... valid`.
4. Jika transkrip Listening diubah, buat ulang MP3 untuk tes itu
   (`node tools/generate-audio.mjs NN --force`) atau hapus MP3-nya agar memakai text-to-speech.
5. Muat ulang halaman di browser.

---

## Membuat installer sendiri

### Otomatis lewat GitHub Actions (disarankan)

Installer Windows dan Mac (Intel + Apple Silicon) dibuat otomatis oleh
[`.github/workflows/release.yml`](.github/workflows/release.yml):

- **Rilis versi baru**: buat tag berawalan `v`, lalu push.
  ```bash
  git tag v1.0.0
  git push origin v1.0.0
  ```
  Sekitar 10–15 menit kemudian, installer muncul di halaman **Releases**.
- **Uji build tanpa rilis**: tab **Actions → Build desktop apps → Run workflow**. Hasilnya bisa
  diunduh dari bagian *Artifacts* di halaman run tersebut.

Untuk versi berikutnya, naikkan nomornya (misalnya `v1.0.1`, `v1.1.0`).

### Manual di macOS

```bash
python3 -m venv .venv
.venv/bin/pip install pyinstaller
PATH="$PWD/.venv/bin:$PATH" bash desktop/build-mac.sh 1.0.0
```

Hasil: `dist/IELTS Practice.app` dan `dist/IELTS-Practice-1.0.0-mac-<arsitektur>.dmg`.
File `.dmg` hanya berjalan di jenis Mac yang sama dengan Mac tempat build (Intel atau Apple Silicon).

### Manual di Windows

1. Pasang Python 3 dan [Inno Setup 6](https://jrsoftware.org/isdl.php) (tambahkan folder Inno Setup ke PATH).
2. Di PowerShell, dari folder proyek:
   ```powershell
   python -m pip install pyinstaller
   .\desktop\build-windows.ps1 -Version 1.0.0
   ```

Hasil: `dist\IELTS-Practice-Setup-1.0.0.exe`.

Installer tidak bisa dibuat silang: installer Windows harus dibuat di Windows, dan `.dmg` di macOS.
Karena itu GitHub Actions dipakai untuk membuat keduanya sekaligus.

---

## Pemecahan masalah

| Masalah | Penyebab dan solusi |
|---|---|
| *"The account server is not running"* | Aplikasi dibuka lewat `python3 -m http.server` atau file langsung. Jalankan `python3 server.py`. |
| *"Port 5173 is already in use"* | Ada program lain di port itu. Hentikan (Ctrl+C di terminalnya) atau pakai port lain: `python3 server.py 8000`. |
| `python3: command not found` | Python belum terpasang, atau di Windows pakai `python`. |
| Audio Listening tidak terdengar | Cek volume dan headphone, klik *Play sound* di layar tes suara. Pastikan file MP3 ada di folder `audio/`. |
| Suara text-to-speech terdengar kaku | Pakai MP3 yang sudah disediakan, atau pilih suara lain di layar tes suara. |
| Lupa password | Belum ada fitur reset. Hapus `data/ielts.db` untuk mengosongkan semua akun (semua riwayat ikut terhapus). |
| Aplikasi desktop tidak terbuka di Mac | Lihat [peringatan keamanan](#peringatan-keamanan-saat-pertama-kali-dibuka). |
| Aplikasi desktop dibuka dua kali | Tidak masalah; pembukaan kedua hanya membuka browser ke aplikasi yang sudah berjalan. |
| Tampilan berantakan setelah update | Muat ulang paksa: Ctrl+Shift+R (Windows/Linux) atau Cmd+Shift+R (macOS). |

---

## Catatan keamanan

- Server hanya menerima koneksi dari komputer sendiri (`127.0.0.1` / `::1`), tidak bisa diakses dari jaringan lain.
- `server.py` dirancang untuk pemakaian lokal. **Jangan dipasang sebagai server publik di internet**
  tanpa tambahan pengamanan (HTTPS, pembatasan percobaan login, dan sebagainya).
- GitHub Pages tidak bisa menjalankan `server.py`, sehingga fitur akun tidak berfungsi di sana.

---

## Lisensi dan atribusi

- Soal, teks, dan transkrip adalah konten orisinal untuk latihan.
- "IELTS" adalah merek dagang milik pemiliknya masing-masing dan disebut di sini hanya untuk
  menjelaskan jenis latihan.
- Audio MP3 dibuat dengan suara text-to-speech bawaan macOS untuk keperluan latihan non-komersial.
