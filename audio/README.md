# Audio Listening (opsional)

Taruh rekaman MP3 di folder ini dengan nama:

    listening-NN-partK.mp3      (NN = 01–10, K = 1–4)

Contoh: `listening-03-part2.mp3` untuk Test 3, Part 2.

Jika file ada, aplikasi memutarnya untuk part tersebut. Jika tidak ada, transkrip dibacakan
oleh text-to-speech browser. Rekaman harus mengikuti transkrip di `js/tests/test-NN.js`
(isinya sama dengan kunci jawaban) dan sudah memuat instruksi narator serta jedanya sendiri.

Rekaman resmi IELTS/British Council/IDP/Cambridge dilindungi hak cipta dan dibuat untuk soal
mereka sendiri, jadi tidak cocok dengan soal di aplikasi ini.

## Membuat MP3 otomatis dari transkrip (macOS)

Skrip ini memakai suara macOS berkualitas tinggi (Enhanced/Premium) dan ffmpeg:

    node tools/generate-audio.mjs            # semua tes
    node tools/generate-audio.mjs 3          # hanya Test 3
    node tools/generate-audio.mjs 1 --part 1 # hanya Test 1 Part 1
    node tools/generate-audio.mjs --force    # buat ulang file yang sudah ada

Unduh suara di System Settings → Accessibility → Spoken Content → System voice → Manage Voices.
Skrip memilih otomatis: pria "Daniel (Enhanced)", wanita "Serena (Premium)" / "Kate (Enhanced)" /
"Stephanie (Enhanced)" jika terpasang. Bisa juga dipilih manual: `--male "..." --female "..."`.
