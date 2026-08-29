export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-brand-soft"
    >
      {/* Decorative gradient blobs */}
      <div
        aria-hidden
        className="hero-blob left-[-80px] top-[-60px] h-72 w-72 bg-wm-primary"
      />
      <div
        aria-hidden
        className="hero-blob right-[-60px] top-20 h-80 w-80 bg-wm-sky"
      />
      <div
        aria-hidden
        className="hero-blob left-1/3 bottom-[-100px] h-64 w-64 bg-wm-mint"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-12 md:px-8 md:pb-28 md:pt-20">
        {/* <span className="inline-flex items-center gap-2 rounded-full border border-wm-primary/30 bg-white/70 px-3 py-1 text-xs font-semibold text-wm-primary backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-wm-mint" />
          Jasa Pembuatan Website untuk UMKM
        </span> */}

        <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-wm-ink md:text-5xl md:leading-[1.1]">
          {/* Two-tone wordmark: "web" (ink) + "mula" (primary), no space */}
          <span className="text-wm-ink">web</span>
          <span className="text-wm-primary">mula</span>{" "}
          bikin bisnismu{" "}
          <span className="bg-gradient-brand bg-clip-text text-transparent">
            mulai tumbuh
          </span>{" "}
          di internet.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-wm-ink/75 md:text-lg">
          Ceritain kebutuhanmu, kami urus desain sampai website live. Nggak
          perlu ngerti coding.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href="#kontak"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-wm-primary/25 transition hover:opacity-95"
          >
            Mulai Proyek Kamu
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
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-wm-ink/15 bg-white px-6 py-3.5 text-sm font-semibold text-wm-ink transition hover:border-wm-primary hover:text-wm-primary"
          >
            Lihat Hasil Kerja
          </a>
        </div>

        {/* Trust strip — inline, no checkmark badges to reduce visual noise */}
        {/* <p className="mt-12 text-sm text-wm-ink/70">
          Tanpa coding · Bisa update sendiri · Harga transparan
        </p> */}
      </div>
    </section>
  );
}
