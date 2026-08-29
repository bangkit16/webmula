# Webmula — Copywriting Source

> Semua teks yang dipakai di landing page `app/page.tsx`, dikumpulkan jadi
> satu dokumen ini supaya gampang di-review, diterjemahkan, atau diganti
> tanpa harus baca kode satu per satu.
>
> **Tagline brand:** "Website untuk bisnis yang mau mulai tumbuh."
>
> **Catatan:** bagian yang ditandai `// TODO` di komponen adalah
> placeholder (nomor WhatsApp, email, data testimoni, data portfolio)
> yang akan diganti setelah data asli tersedia.

---

## Metadata (`app/layout.tsx`)

| Field | Copy |
|---|---|
| `title` | Webmula — Website untuk bisnis yang mau mulai tumbuh |
| `description` | Webmula bikin website profesional buat UMKM dan bisnis kecil. Tanpa perlu paham coding, desain yang dirancang untuk konversi, harga transparan. |
| `lang` | `id` (Bahasa Indonesia) |

---

## Navbar (`components/Navbar.tsx`)

| Elemen | Copy |
|---|---|
| Brand mark | `W` (di badge rounded dengan gradient brand) |
| Brand wordmark | **web** (ink) + **mula** (primary) |
| Menu 1 | Layanan |
| Menu 2 | Cara Kerja |
| Menu 3 | Hasil Kerja |
| Menu 4 | Kontak |
| CTA button | Konsultasi Gratis |

> Menu mengarah ke anchor: `#layanan`, `#proses`, `#portfolio`, `#kontak`.

---

## Hero (`components/Hero.tsx`)

| Elemen | Copy |
|---|---|
| Eyebrow badge | 🚀 Jasa Pembuatan Website untuk UMKM |
| Headline | Website untuk bisnis yang mau **mulai tumbuh.** |
| Sub-headline | Webmula bikin website profesional buat UMKM dan bisnis kecil — tanpa kamu perlu paham coding. Tinggal ceritain kebutuhan bisnismu, kami yang urus desain sampai website-nya live dan siap narik pelanggan baru. |
| Primary CTA | Mulai Proyek Kamu → (link ke `#kontak`) |
| Secondary CTA | Lihat Contoh Hasil Kerja (link ke `#portfolio`) |
| Trust strip 1 | ✓ Tanpa perlu coding |
| Trust strip 2 | ✓ Bisa update sendiri |
| Trust strip 3 | ✓ Harga transparan |

> Word "mulai tumbuh." di-highlight dengan gradient brand
> (`bg-gradient-brand bg-clip-text text-transparent`).

---

## Problem Section (`components/ProblemSection.tsx`)

| Elemen | Copy |
|---|---|
| Eyebrow | Masalahnya |
| Heading | Andalkan WhatsApp & Instagram itu praktis, tapi bikin calon pembeli ragu. |
| Intro | Pelanggan sekarang cek website sebelum mereka kirim pesan. Kalau bisnis kamu nggak punya, mereka anggap kurang serius — dan uang mereka pindah ke kompetitor. |

**Pain point 1**
- Title: Calon pembeli ragu
- Body: Toko cuma numpang di bio Instagram atau chat WhatsApp tanpa alamat jelas. Saat pelanggan mau memastikan ini bisnis sungguhan, mereka pergi ke kompetitor yang punya website.

**Pain point 2**
- Title: Info produk tercecer
- Body: Daftar harga, katalog, dan cara order tersebar di banyak chat dan story yang hilang dalam 24 jam. Pelanggan jadi males nanya dan akhirnya batal beli.

**Pain point 3**
- Title: Susah terlihat profesional
- Body: Logo asal comot dari Canva, tampilan beda-beda di tiap platform, dan nggak ada cara konsisten untuk bangun kepercayaan. Brand-mu kelihatan seperti bisnis rumahan — bukan seperti bisnis yang siap dipercaya.

| Elemen | Copy |
|---|---|
| Closing callout (dark) | Website profesional = etalase yang buka 24 jam. |
| Closing callout body | Website bukan cuma pajangan. Itu alat kerja yang nunjukin katalog, bukti sosial, cara order, dan kontak bisnismu — semua di satu tempat yang gampang ditemukan lewat Google. Sekali bikin, dia kerja cari pelanggan buat kamu, tiap hari. |

---

## Kenapa Pilih Webmula (`components/WhyUs.tsx`)

| Elemen | Copy |
|---|---|
| Eyebrow | Kenapa Webmula |
| Heading | Empat alasan UMKM pilih Webmula buat naik level ke digital. |

**Pillar 01** *(di-highlight, col-span lebih besar)*
- Title: Proses jelas, nggak ada yang ditutup-tutupi
- Body: Dari hari pertama kamu tahu apa yang lagi kami kerjakan, kapan selesai, dan berapa biayanya. Update progress rutin, revisi terukur, dan kontrak sederhana yang bisa dipahami tanpa perlu pengacara.

**Pillar 02**
- Title: Desain yang dirancang untuk konversi
- Body: Setiap halaman dirancang supaya pengunjung paham apa yang kamu jual dalam 5 detik, dan diarahkan ke tombol WhatsApp atau order dalam 1 klik. Bukan cuma cantik — tapi menghasilkan leads dan penjualan.

**Pillar 03**
- Title: Harga transparan sejak awal
- Body: Kamu dapat rincian harga lengkap di awal — apa yang termasuk, apa yang tidak, dan opsional apa yang bisa ditambah nanti. Nggak ada biaya tersembunyi, nggak ada tagihan mendadak di tengah jalan. Kalau setuju di angka pertama, itu angka terakhir.

**Pillar 04**
- Title: Klien bisa update konten sendiri
- Body: Setelah website jadi, kami ajarkan cara ganti teks, upload foto produk, atau tambah halaman baru lewat dashboard yang simpel. Kamu nggak harus nelpon kami tiap mau ganti promo. Tapi kalau butuh bantuan, kami tetap siap.

---

## Layanan (`components/Services.tsx`)

| Elemen | Copy |
|---|---|
| Eyebrow | Layanan |
| Heading | Pilih layanan yang cocok buat tahap bisnismu sekarang. |
| Sub-intro | Semua paket bisa dikustom. Kalau belum yakin butuh yang mana, konsultasi gratis dulu — kami bantu rekomendasikan. |

**Service 1 — Website Company Profile** *(tone: primary)*
- Target: Untuk usaha jasa, klinik, konsultan, agensi
- Desc: Bikin bisnis kamu kelihatan serius lewat website yang rapi, cepat, dan menjelaskan layanan, tim, dan portofolio.
- Bullets:
  - Halaman about, layanan, portofolio
  - Form kontak & integrasi WhatsApp
  - SEO lokal dasar

**Service 2 — Landing Page Produk** *(tone: sky)*
- Target: Untuk produk baru, promo, atau pendaftaran
- Desc: Satu halaman fokus dengan copywriting yang dirancang untuk mengubah pengunjung jadi leads atau pembeli.
- Bullets:
  - Copywriting + desain
  - Tracking pixel Meta & Google
  - A/B test friendly

**Service 3 — Website Toko Online** *(tone: ink)*
- Target: Untuk UMKM yang mau jualan online lebih serius
- Desc: Katalog produk, keranjang, dan checkout WhatsApp atau payment gateway. Kelola stok dari dashboard tanpa coding.
- Bullets:
  - Katalog + keranjang belanja
  - Integrasi payment gateway
  - Dashboard kelola sendiri

**Service 4 — Maintenance & Update Berkala** *(tone: mint)*
- Target: Untuk pemilik website yang mau tangani operasional, bukan teknis
- Desc: Kami jaga website kamu tetap aman, cepat, dan up-to-date — termasuk update konten, foto produk baru, atau promo musiman.
- Bullets:
  - Backup & security bulanan
  - Update konten sesuai request
  - Laporan performa singkat

---

## Cara Kerja (`components/Process.tsx`)

| Elemen | Copy |
|---|---|
| Eyebrow | Cara Kerja |
| Heading | Dari ngobrol pertama sampai website live, biasanya 2–4 minggu. |

**Step 01 — Konsultasi Kebutuhan** *(estimasi 1–2 hari)*
- Body: Ngobrol 30–60 menit via video call atau chat. Kami dengerin bisnismu, target pasar, dan contoh website yang kamu suka. Dari situ kami susun brief dan rekomendasi paket.

**Step 02 — Desain & Draft** *(estimasi 3–5 hari)*
- Body: Tim desain bikin mockup halaman utama di Figma. Kamu kasih feedback, kami revisi sampai cocok. Baru setelah desain disetujui, kami mulai bangun.

**Step 03 — Pengembangan** *(estimasi 7–14 hari)*
- Body: Website dibangun pakai stack modern (Next.js + Tailwind). Kamu bisa pantau progress di staging link yang bisa dibuka kapan aja selama proses.

**Step 04 — Live & Serah Terima** *(estimasi hari yang sama)*
- Body: Website di-deploy ke domain kamu, dikonekin ke Google Search Console, dan kami ajarin cara kelola konten lewat video tutorial + sesi live 1 jam.

---

## Portfolio / Hasil Kerja (`components/Portfolio.tsx`)

> `// TODO: replace dengan data project asli + URL project live.`

| Elemen | Copy |
|---|---|
| Eyebrow | Hasil Kerja |
| Heading | Beberapa website yang sudah kami bantu launching. |
| Catatan | Daftar di bawah adalah placeholder untuk contoh tampilan. Data asli akan diganti setelah project riil tersedia. |

**Project 1 — Toko Kopi Nusantara**
- Category: Toko Online
- Blurb: Katalog biji kopi single-origin + langganan bulanan via WhatsApp.
- Thumb: gradient primary → sky, glyph ☕, label "Placeholder"

**Project 2 — Klinik Sehat Bersama**
- Category: Company Profile
- Blurb: Profil layanan, jadwal dokter, dan form pendaftaran pasien baru.
- Thumb: gradient sky → mint, glyph 🩺, label "Placeholder"

**Project 3 — Roastery Gunung Lawu**
- Category: Landing Page
- Blurb: Halaman tunggal untuk pre-order edisi terbatas musim panen.
- Thumb: gradient ink → primary, glyph 🌋, label "Placeholder"

**Project 4 — Butik Batik Anjani**
- Category: Toko Online
- Blurb: Katalog koleksi batik modern + checkout payment gateway.
- Thumb: gradient mint → sky, glyph 👗, label "Placeholder"

**Project 5 — Kelas Masak Dapur Bunda**
- Category: Landing Page
- Blurb: Pendaftaran kursus masak online dengan testimoni video.
- Thumb: gradient primary → mint, glyph 🍳, label "Placeholder"

**Project 6 — Studio Foto Lens**
- Category: Company Profile
- Blurb: Portofolio, paket harga, dan form booking sesi foto.
- Thumb: gradient ink → sky, glyph 📸, label "Placeholder"

CTA per card: **Lihat Detail →** (sementara link ke `#kontak`, `// TODO: ganti href ke URL project live saat data asli tersedia`)

---

## Testimoni (`components/Testimonials.tsx`)

> `// TODO: replace dengan testimoni asli + foto klien (izin tertulis)`

| Elemen | Copy |
|---|---|
| Eyebrow | Testimoni Klien |
| Heading | Mereka yang sudah jalan bareng Webmula. |
| Catatan | Testimoni di bawah adalah contoh placeholder. Data asli akan diganti setelah klien mengizinkan publikasi. |

**Testimoni 1 — Rina Wulandari** *(avatar: gradient brand)*
- Business: Pemilik, Toko Kopi Nusantara
- Quote: "Sebelum ada website, order masuk cuma dari Instagram dan sering banget pelanggan ragu karena nggak nemu menu lengkap. Sekarang mereka cek web dulu, baru chat WhatsApp. Order naik hampir 2x lipat dalam 2 bulan."

**Testimoni 2 — dr. Andi Pratama** *(avatar: ink)*
- Business: Klinik Sehat Bersama
- Quote: "Prosesnya enak — saya kasih contoh website yang saya suka, mereka yang adaptasi. Revisi nggak ribet, dan tim kasih penjelasan yang bisa dimengerti orang awam IT."

**Testimoni 3 — Sinta Maharani** *(avatar: sky)*
- Business: Founder, Kelas Masak Dapur Bunda
- Quote: "Yang bikin saya pilih Webmula: harganya jelas dari awal dan saya diajarin update sendiri. Sekarang tiap mau buka kelas baru, saya tinggal tambahin halaman tanpa harus nungguin mereka."

**Testimoni 4 — Budi Santoso** *(avatar: mint)*
- Business: Owner, Butik Batik Anjani
- Quote: "Awalnya kira bikin website itu mahal dan ribet. Ternyata nggak, dan tim Webmula sabar banget ngurusin saya yang gaptek. Sekarang batik saya udah dikirim ke luar Jawa."

---

## Untuk Siapa Webmula (`components/AudienceSection.tsx`)

| Elemen | Copy |
|---|---|
| Eyebrow | Untuk Siapa |
| Heading | Webmula buat bisnis yang siap naik kelas — bukan korporasi besar. |
| Body | Kami fokus bantu UMKM, bisnis keluarga, dan profesional yang baru mau serius di digital. Kalau kamu sudah punya tim IT sendiri dan butuh custom platform skala besar, kami bukan partner yang tepat — dan kami akan bilang itu di awal, bukan di akhir. |

**Cocok untuk:**
- Bisnis yang omzetnya udah jalan tapi masih ngandelin chat & sosmed
- Pemilik usaha yang nggak punya waktu atau skill ngoding
- Profesional (konsultan, klinik, agensi kecil) yang butuh kredibilitas
- UMKM yang mau jualan online tapi nggak mau ribet pakai marketplace

**Card kanan (kontras — "bukan buat kamu kalau"):**
- Header: Bukan buat kamu kalau…
- ✕ Perusahaan besar dengan tim engineering internal.
- ✕ Butuh MVP super-custom untuk produk SaaS kompleks dalam 2 minggu.
- ✕ Proyek dengan budget di bawah Rp 1 juta (kami bakal rekomendasikan alternatif lain).
- Footer card: Transparan soal batasan = hubungan kerja yang sehat.

---

## Contact Form (`components/ContactForm.tsx`)

| Elemen | Copy |
|---|---|
| Eyebrow | Hubungi Kami |
| Heading | Ceritain kebutuhan website-mu. Konsultasi gratis, tanpa komitmen. |
| Sub-intro | Isi form di samping atau langsung hubungi kami lewat WhatsApp. Kami balas dalam 1×24 jam di hari kerja. |

**Info kontak (kiri):**
- WhatsApp: `+62 812-3456-7890` *(TODO: ganti dengan nomor resmi Webmula)* — link `https://wa.me/6281234567890`
- Email: `halo@webmula.id` *(TODO: ganti dengan email resmi Webmula)* — link `mailto:halo@webmula.id`
- Jam Respon: Senin–Jumat, 09.00–18.00 WIB

**Form (kanan):**
- Field 1 label: Nama
- Field 1 placeholder: Nama lengkap kamu
- Field 2 label: Nomor WhatsApp atau Email
- Field 2 placeholder: 08xxx atau kamu@email.com
- Field 3 label: Pesan Singkat tentang Kebutuhan Project
- Field 3 placeholder: Contoh: Saya punya toko baju, mau buat website katalog + checkout WhatsApp. Budget sekitar 5 juta.
- Submit button: Kirim Pesan
- Helper text: Data kamu aman — nggak kami jual atau spam.
- Success state: Terima kasih! Pesan kamu sudah kami terima. Tim Webmula akan balas dalam 1×24 jam.

> Submit handler: `console.log("[Webmula] contact form submitted:", data)` —
> `// TODO: integrasikan ke backend/email service (Resend, Formspree, dsb).`

---

## Penutup + CTA Akhir (`components/ClosingCTA.tsx`)

| Elemen | Copy |
|---|---|
| Heading | Kompetitor kamu udah punya website. **Berapa lama lagi kamu mau nunggu?** |
| Body | Setiap hari tanpa website yang baik, calon pembeli yang harusnya milikmu malah ke tempat lain. Konsultasi gratisnya 30 menit — tanpa komitmen, tanpa tekanan, dan bisa lewat WhatsApp. |
| Primary CTA | Konsultasi Gratis Sekarang → (link ke `#kontak`) |
| Secondary CTA | Lihat Hasil Kerja Dulu (link ke `#portfolio`) |

> Background: navy (`#0B1D3A`) dengan blob gradient primary & sky, sesuai
> panduan "dark mode" di DESIGN.md.

---

## Footer (`components/Footer.tsx`)

| Elemen | Copy |
|---|---|
| Brand | W (badge gradient) + **web** (ink) + **mula** (primary) |
| Tagline | Jasa pembuatan website untuk UMKM dan bisnis kecil di Indonesia. Profesional, transparan, dan bisa dikelola sendiri. |

**Kolom "Jelajahi":**
- Layanan → `#layanan`
- Cara Kerja → `#proses`
- Hasil Kerja → `#portfolio`
- Kontak → `#kontak`

**Kolom "Kontak"** *(TODO: ganti dengan kontak resmi Webmula)*:
- WhatsApp: +62 812-3456-7890
- Email: halo@webmula.id
- Senin–Jumat, 09.00–18.00 WIB

**Bottom bar:**
- Copyright: © 2026 Webmula. Semua hak dilindungi.
- Credit: Dibuat dengan Next.js + Tailwind, dengan warna dari DESIGN.md.

---

## TODO Ringkasan (siap diganti data asli)

| Item | Lokasi | Kapan diganti |
|---|---|---|
| Nomor WhatsApp resmi | `ContactForm.tsx`, `Footer.tsx` | Setelah nomor bisnis di-set |
| Email resmi | `ContactForm.tsx`, `Footer.tsx` | Setelah domain email aktif |
| Data portfolio (6 project) | `Portfolio.tsx` | Setelah ada 4–6 project live |
| URL live per project | `Portfolio.tsx` (card CTA) | Setelah data portfolio asli tersedia |
| Testimoni klien (4) | `Testimonials.tsx` | Setelah dapat izin tertulis dari klien |
| Submit handler form | `ContactForm.tsx` `onSubmit` | Setelah backend/email service di-setup |
| Logo SVG | Inline `<span>W</span>` di Navbar/Footer | Setelah logo final dari desainer tersedia |

---

## Prinsip Copy yang Dipakai

1. **Bahasa Indonesia kasual tapi profesional** — "kamu" bukan "Anda", tapi tetap rapi.
2. **Spesifik > generic** — sebut angka ("30–60 menit", "2–4 minggu", "1×24 jam") daripada kata "cepat".
3. **Bahasa masalah & solusi, bukan fitur** — fokus ke outcome untuk UMKM, bukan list teknologi.
4. **Honest about limits** — section "Untuk Siapa" & "Bukan buat kamu kalau" sengaja eksplisit soal batasan. Lebih sehat daripada jualan ke klien yang nggak cocok.
5. **Tidak ada lorem ipsum** — semua placeholder ditulis kontekstual dengan industri yang umum di Indonesia (kopi, klinik, batik, kursus, dll).
