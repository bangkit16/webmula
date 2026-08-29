type Service = {
  name: string;
  desc: string;
  tone: "primary" | "sky" | "ink" | "mint";
};

const services: Service[] = [
  {
    name: "Website Company Profile",
    desc: "Untuk usaha jasa dan konsultan yang butuh kelihatan kredibel di mata klien.",
    tone: "primary",
  },
  {
    name: "Landing Page Produk",
    desc: "Satu halaman fokus buat promo atau produk baru, dirancang buat konversi.",
    tone: "sky",
  },
  {
    name: "Website Toko Online",
    desc: "Katalog, keranjang, dan checkout — kelola stok sendiri dari dashboard.",
    tone: "ink",
  },
  {
    name: "Maintenance & Update",
    desc: "Untuk website yang sudah jalan tapi butuh update rutin tanpa kamu pusing teknis.",
    tone: "mint",
  },
];

const toneClass: Record<Service["tone"], string> = {
  primary: "bg-wm-primary/10 text-wm-primary",
  sky: "bg-wm-sky/15 text-wm-sky",
  ink: "bg-wm-ink/10 text-wm-ink",
  mint: "bg-wm-mint/15 text-wm-mint",
};

export default function Services() {
  return (
    <section id="layanan" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-wm-primary">
            Layanan
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-wm-ink md:text-4xl">
            Pilih layanan yang cocok buat tahap bisnismu sekarang.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.name}
              className="group flex h-full flex-col rounded-2xl border border-wm-surface-2 bg-wm-surface p-6 transition hover:-translate-y-1 hover:border-wm-primary/40 hover:bg-white hover:shadow-lg"
            >
              <div
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold ${toneClass[s.tone]}`}
              >
                ★
              </div>
              <h3 className="text-lg font-semibold leading-snug text-wm-ink">
                {s.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-wm-ink/70">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
