export default function ClosingCTA({url}: {url?: string}) {
  return (
    <section className="relative overflow-hidden bg-wm-ink text-white">
      <div
        aria-hidden
        className="hero-blob -left-15 -top-10 h-64 w-64 bg-wm-primary"
      />
      <div
        aria-hidden
        className="hero-blob -right-10 -bottom-10 h-72 w-72 bg-wm-sky"
      />
      <div className="relative mx-auto max-w-4xl px-5 py-20 text-center md:px-8 md:py-24">
        <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
          {/* Two-tone wordmark di closing — web (putih/ink-on-dark) + mula (primary) */}
          Siap mulai proyek website-mu bareng{" "}
          <span className="text-white">web</span>
          <span className="text-wm-sky">mula</span>?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
          Konsultasi 30 menit, gratis, lewat WhatsApp. Kami kasih rekomendasi
          paket sebelum kamu commit apapun.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={url || "#kontak"}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-wm-primary/30 transition hover:opacity-95"
          >
            Konsultasi Gratis Sekarang
            <svg
              width="18"
              height="18"
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
      </div>
    </section>
  );
}
