type Pillar = {
  title: string;
  body: string;
};

// 3 pillars — body dipotong satu kalimat per pillar.
const pillars: Pillar[] = [
  {
    title: "Proses jelas",
    body: "Kamu tahu progress, timeline, dan biaya sejak hari pertama — nggak ada yang ditutupi.",
  },
  {
    title: "Desain untuk konversi",
    body: "Tiap halaman diarahkan ke satu tujuan: bikin pengunjung klik WhatsApp atau order.",
  },
  {
    title: "Bisa dikelola sendiri",
    body: "Setelah live, kamu bisa ganti teks dan foto sendiri tanpa nunggu developer.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-wm-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-wm-primary">
            Kenapa Webmula
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-wm-ink md:text-4xl">
            Tiga alasan UMKM pilih{" "}
            <span className="text-wm-ink">web</span>
            <span className="text-wm-primary">mula</span>.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <article
                key={p.title}
                className="group relative overflow-hidden rounded-2xl border border-wm-surface-2 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-wm-primary/10"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-brand opacity-10 transition group-hover:opacity-20" />
                <div className="relative">
                  <span className="inline-flex h-9 items-center rounded-full bg-wm-ink px-3 text-xs font-bold tracking-wider text-white">
                    {num}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold leading-snug text-wm-ink md:text-xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-wm-ink/70 md:text-[15px]">
                    {p.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
