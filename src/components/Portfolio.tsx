type Project = {
  name: string;
  category: string;
  blurb: string;
  thumb: "coffee" | "beauty" | "fashion" | "food";
};

const projects: Project[] = [
  {
    name: "Kopi Senja",
    category: "Coffee Shop",
    blurb: "Website untuk coffee shop dengan menu dan lokasi.",
    thumb: "coffee",
  },
  {
    name: "Glow Skincare",
    category: "Skincare & Beauty",
    blurb: "Katalog produk skincare dengan booking konsultasi.",
    thumb: "beauty",
  },
  {
    name: "Minimalist Closet",
    category: "Fashion Store",
    blurb: "Toko online fashion dengan checkout payment gateway.",
    thumb: "fashion",
  },
  {
    name: "Dapur Bu Sari",
    category: "Catering Service",
    blurb: "Layanan catering dengan menu dan pemesanan online.",
    thumb: "food",
  },
];

// Placeholder thumbnail — kombinasi gradien + emoji biar variatif.
// TODO: replace dengan <Image> + file asli.
function Thumb({ kind }: { kind: Project["thumb"] }) {
  const map: Record<Project["thumb"], { from: string; to: string; glyph: string }> = {
    coffee: { from: "from-wm-primary", to: "to-wm-sky", glyph: "☕" },
    beauty: { from: "from-pink-400", to: "to-pink-200", glyph: "💆" },
    fashion: { from: "from-wm-ink", to: "to-wm-primary", glyph: "👗" },
    food: { from: "from-orange-400", to: "to-yellow-200", glyph: "🍳" },
  };
  const c = map[kind];
  return (
    <div
      className={`relative flex h-44 w-full items-center justify-center bg-gradient-to-br ${c.from} ${c.to} text-5xl text-white/90`}
    >
      <span aria-hidden>{c.glyph}</span>
      <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-wm-ink">
        Placeholder
      </span>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-wm-primary">
            Hasil Kerja
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-wm-ink md:text-4xl">
            Beberapa website yang sudah kami bantu launching.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-2xl border border-wm-surface-2 bg-wm-surface transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Thumb kind={p.thumb} />
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-wm-primary">
                  {p.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-wm-ink">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-wm-ink/70">{p.blurb}</p>
                {/* TODO: ganti href ke URL project live saat data asli tersedia */}
                <a
                  href="#kontak"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-wm-primary hover:text-wm-sky"
                >
                  Lihat Detail
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
