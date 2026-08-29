const steps = [
  {
    no: "01",
    title: "Konsultasi",
    body: "Ngobrol 30-60 menit soal kebutuhan dan target bisnismu.",
  },
  {
    no: "02",
    title: "Desain",
    body: "Mockup halaman utama, kamu review, kami revisi sampai cocok.",
  },
  {
    no: "03",
    title: "Pengembangan",
    body: "Website dibangun, kamu bisa pantau progress lewat staging link.",
  },
  {
    no: "04",
    title: "Live",
    body: "Deploy ke domain kamu + panduan singkat cara kelola sendiri.",
  },
];

export default function Process() {
  return (
    <section id="proses" className="bg-wm-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-wm-primary">
            Cara Kerja
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-wm-ink md:text-4xl">
            Dari ngobrol pertama sampai website live, biasanya 2–4 minggu.
          </h2>
        </div>

        <ol className="relative mt-14 space-y-8 md:space-y-0 md:grid md:grid-cols-4 md:gap-6">
          {/* Connecting line on desktop */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-brand md:block"
          />

          {steps.map((s) => (
            <li
              key={s.no}
              className="relative md:flex md:flex-col md:items-center md:text-center"
            >
              <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-base font-extrabold text-white shadow-lg shadow-wm-primary/20">
                {s.no}
              </div>
              <div className="rounded-2xl border border-wm-surface-2 bg-white p-5 text-left md:mt-2 md:w-full">
                <h3 className="text-base font-semibold text-wm-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-wm-ink/70">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
