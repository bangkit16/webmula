# Copywriting Fix — Webmula Landing Page

## Masalah di Versi Sebelumnya

**Terlalu banyak bacaan.** 12 section, tiap section punya 3-4 sub-item, dan tiap sub-item punya body text 2-3 kalimat. Total ini landing page yang harus dibaca, bukan di-scan. UMKM yang jadi target audiens kebanyakan buka dari HP sambil buru-buru — mereka butuh info cepat, bukan esai.

**Struktur terlalu simetris.** 4 pillar di WhyUs, 4 layanan, 4 step di Process, 4 testimoni, 6 portfolio, 3 poin "cocok untuk" + 3 poin "bukan buat kamu kalau". Semua angka genap dan seragam — ini pola yang langsung kelihatan sebagai output AI, bukan tulisan orang yang mikirin prioritas.

**Jargon startup generik berulang.** "Naik kelas", "naik level ke digital" muncul di 3 tempat berbeda. Metafora "etalase yang buka 24 jam" itu klise yang sudah dipakai ribuan landing page jasa web lain. CTA penutup "Kompetitor kamu udah punya website. Berapa lama lagi kamu mau nunggu?" itu fear-based copy generik, bukan argumen yang berdiri di atas fakta.

**Identitas wordmark hilang di luar navbar/footer.** Brand guideline menegaskan "**web**" (ink `#0B1D3A`) + "**mula**" (primary `#2563EB`) sebagai treatment dua-warna yang jadi ciri khas nama brand. Di copy sebelumnya, treatment ini cuma dipakai di Navbar dan Footer. Begitu masuk Hero, Problem Section, sampai Closing CTA, kata "Webmula" ditulis polos satu warna atau malah tidak disebut sama sekali. Akibatnya brand recall lemah — orang scroll 6 section tanpa diingatkan lagi nama brand-nya apa.

---

## Prinsip Revisi

1. Satu section boleh punya headline + 1-2 kalimat body maksimal. Kalau butuh detail lebih, taruh di halaman terpisah nanti, bukan dipaksa masuk landing page.
2. Jumlah item per section bervariasi — kalau realistanya cuma butuh 3 poin, jangan dipaksa jadi 4.
3. Kata "Webmula" (atau minimal kata "web"/"mula" yang dipisah warna) muncul dengan treatment dua-warna di **setiap section utama**: Hero, Problem, Closing CTA — bukan cuma navbar/footer.
4. Tagline "Website untuk bisnis yang mau mulai tumbuh." dipakai ulang sebagai variasi, bukan cuma sekali di hero.
5. Buang metafora tempel dan CTA rasa takut. Ganti dengan klaim spesifik yang bisa dipertanggungjawabkan.

---

## Konten Baru

### Hero (`components/Hero.tsx`)

| Elemen | Copy |
|---|---|
| Eyebrow | Jasa Pembuatan Website untuk UMKM |
| Headline | **web**mula bikin bisnismu **mulai tumbuh** di internet. |
| Sub-headline | Ceritain kebutuhanmu, kami urus desain sampai website live. Nggak perlu ngerti coding. |
| Primary CTA | Mulai Proyek Kamu |
| Secondary CTA | Lihat Hasil Kerja |
| Trust strip | Tanpa coding · Bisa update sendiri · Harga transparan |

> Treatment wajib: "**web**" pakai `text-wm-ink`, "**mula**" pakai `text-wm-primary`, ditulis menyatu tanpa spasi persis seperti logo — bukan dipisah jadi dua kata biasa.

---

### Problem (`components/ProblemSection.tsx`)

| Elemen | Copy |
|---|---|
| Heading | WhatsApp dan Instagram doang bikin calon pembeli ragu. |
| Body | Pelanggan cek website dulu sebelum chat. Kalau nggak ada, mereka anggap bisnismu kurang serius — dan pindah ke kompetitor yang punya. |

**3 poin singkat (bukan 3 card panjang, cukup list):**
- Calon pembeli ragu tanpa alamat digital yang jelas
- Katalog dan harga tercecer di story yang hilang 24 jam
- Susah kelihatan profesional tanpa tampilan yang konsisten

*(Hapus closing callout "etalase 24 jam" — sudah tersampaikan lewat heading + body di atas, tidak perlu diulang dengan metafora tambahan.)*

---

### Kenapa Pilih Webmula (`components/WhyUs.tsx`)

Pangkas dari 4 pillar jadi 3. Body dipotong jadi satu kalimat per pillar.

| Pillar | Copy |
|---|---|
| Proses jelas | Kamu tahu progress, timeline, dan biaya sejak hari pertama — nggak ada yang ditutupi. |
| Desain untuk konversi | Tiap halaman diarahkan ke satu tujuan: bikin pengunjung klik WhatsApp atau order. |
| Bisa dikelola sendiri | Setelah live, kamu bisa ganti teks dan foto sendiri tanpa nunggu developer. |

---

### Layanan (`components/Services.tsx`)

Body tiap layanan dipotong jadi satu kalimat, hapus kalimat "target" terpisah — gabungkan ke body.

| Layanan | Copy |
|---|---|
| Website Company Profile | Untuk usaha jasa dan konsultan yang butuh kelihatan kredibel di mata klien. |
| Landing Page Produk | Satu halaman fokus buat promo atau produk baru, dirancang buat konversi. |
| Website Toko Online | Katalog, keranjang, dan checkout — kelola stok sendiri dari dashboard. |
| Maintenance & Update | Untuk website yang sudah jalan tapi butuh update rutin tanpa kamu pusing teknis. |

*(Hapus bullet-point 3-item per layanan yang ada di versi sebelumnya — sudah terlalu detail untuk landing page, cukup satu kalimat body yang jelas.)*

---

### Cara Kerja (`components/Process.tsx`)

Tetap 4 step (ini yang paling masuk akal karena memang proses linear), tapi body dipotong jadi setengah panjang sebelumnya.

| Step | Copy |
|---|---|
| 1. Konsultasi | Ngobrol 30-60 menit soal kebutuhan dan target bisnismu. |
| 2. Desain | Mockup halaman utama, kamu review, kami revisi sampai cocok. |
| 3. Pengembangan | Website dibangun, kamu bisa pantau progress lewat staging link. |
| 4. Live | Deploy ke domain kamu + panduan singkat cara kelola sendiri. |

---

### Portfolio (`components/Portfolio.tsx`)

Kurangi dari 6 jadi **4 project** — cukup untuk menunjukkan variasi kategori tanpa bikin section kepanjangan.

- Toko Kopi Nusantara — Toko Online
- Klinik Sehat Bersama — Company Profile
- Roastery Gunung Lawu — Landing Page
- Butik Batik Anjani — Toko Online

*(Tetap `// TODO: replace dengan data project asli`.)*

---

### Testimoni (`components/Testimonials.tsx`)

Kurangi dari 4 jadi **2 testimoni**. Dua testimoni yang kuat dan spesifik lebih meyakinkan daripada empat yang mulai terasa template.

**Rina Wulandari** — Pemilik, Toko Kopi Nusantara
> "Order naik hampir 2x lipat dalam 2 bulan setelah ada website. Pelanggan sekarang cek web dulu, baru chat WhatsApp."

**Sinta Maharani** — Founder, Kelas Masak Dapur Bunda
> "Harganya jelas dari awal dan saya diajarin update sendiri. Sekarang buka kelas baru tinggal tambah halaman."

---

### Untuk Siapa (`components/AudienceSection.tsx`)

Gabungkan "cocok untuk" dan "bukan buat kamu kalau" jadi satu paragraf pendek, bukan dua card terpisah dengan masing-masing 3 bullet.

| Elemen | Copy |
|---|---|
| Heading | Webmula cocok buat UMKM dan bisnis kecil yang mau serius di digital — bukan perusahaan besar dengan tim IT sendiri. |
| Body | Kalau bisnismu masih ngandelin chat dan sosmed tapi omzetnya udah jalan, kami cocok bantu. Kalau kamu butuh platform custom skala besar dengan tim engineering internal, kami bukan partner yang tepat — dan kami bilang itu dari awal. |

---

### Contact Form (`components/ContactForm.tsx`)

Tidak berubah secara struktur, cuma pangkas heading jadi lebih pendek.

| Elemen | Copy |
|---|---|
| Heading | Ceritain kebutuhan website-mu. |
| Sub-intro | Konsultasi gratis, tanpa komitmen. Kami balas dalam 1x24 jam hari kerja. |

---

### Closing CTA (`components/ClosingCTA.tsx`)

Ganti total — hapus copy fear-based, ganti dengan klaim spesifik + treatment wordmark.

| Elemen | Copy |
|---|---|
| Heading | Siap mulai proyek website-mu bareng **web**mula? |
| Body | Konsultasi 30 menit, gratis, lewat WhatsApp. Kami kasih rekomendasi paket sebelum kamu commit apapun. |
| Primary CTA | Konsultasi Gratis Sekarang |

---

## Checklist Implementasi

- [ ] Hero: headline pakai treatment dua-warna "**web**"/"mula"
- [ ] Problem: ganti jadi heading + body + 3 poin list, hapus closing callout metafora
- [ ] WhyUs: 4 pillar → 3 pillar, body satu kalimat
- [ ] Services: hapus bullet 3-item per card, body satu kalimat gabungan target+desc
- [ ] Process: body dipotong setengah, tetap 4 step
- [ ] Portfolio: 6 → 4 project
- [ ] Testimonials: 4 → 2 testimoni
- [ ] Audience: 2 card terpisah → 1 section heading+body gabungan
- [ ] Contact: heading dipendekkan
- [ ] ClosingCTA: hapus copy fear-based, ganti dengan treatment wordmark + klaim spesifik
- [ ] Cek ulang: kata "Webmula" dengan treatment dua-warna muncul minimal di Hero dan ClosingCTA, tidak cuma di Navbar/Footer
