export default function ProblemSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-wm-primary">
            Masalahnya
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-wm-ink md:text-4xl">
            WhatsApp dan Instagram doang bikin calon pembeli ragu.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-wm-ink/70 md:text-lg">
            Pelanggan cek website dulu sebelum chat. Kalau nggak ada, mereka
            anggap bisnismu kurang serius — dan pindah ke kompetitor yang
            punya.
          </p>
        </div>

        <ul className="mt-10 max-w-3xl space-y-3 text-base text-wm-ink/80">
          <li className="flex items-start gap-3">
            <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-wm-primary" />
            Calon pembeli ragu tanpa alamat digital yang jelas
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-wm-primary" />
            Katalog dan harga tercecer di story yang hilang 24 jam
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-wm-primary" />
            Susah kelihatan profesional tanpa tampilan yang konsisten
          </li>
        </ul>
      </div>
    </section>
  );
}
