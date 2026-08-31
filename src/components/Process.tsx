const steps = [
  {
    no: "1",
    title: "Ceritakan Bisnis Kamu",
    body: "Ceritakan kebutuhan bisnismu kepada kami.",
    icon: "chat",
  },
  {
    no: "2",
    title: "Pilih Paket yang Sesuai",
    body: "Pilih paket yang sesuai dengan kebutuhanmu.",
    icon: "description",
  },
  {
    no: "3",
    title: "Kami Buat Websitenya",
    body: "Tim kami mulai membangun website Anda.",
    icon: "edit",
  },
  {
    no: "4",
    title: "Review & Revisi",
    body: "Review hasil dan minta revisi jika diperlukan.",
    icon: "visibility",
  },
  {
    no: "5",
    title: "Website Online",
    body: "Siap Digunakan",
    icon: "send",
  },
];

function StepIcon({ icon }: { icon: string }) {
  const iconClass = "w-6 h-6 text-wm-primary";
  
  if (icon === "chat") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    );
  }
  if (icon === "description") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    );
  }
  if (icon === "edit") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    );
  }
  if (icon === "visibility") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }
  if (icon === "send") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    );
  }
  return null;
}

export default function Process() {
  return (
    <section id="proses" className="bg-wm-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-wm-primary">
            Cara Kerja
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-wm-ink md:text-4xl">
            Dari ngobrol pertama sampai website live, biasanya 2–4 minggu.
          </h2>
        </div>

        <ol className="relative mt-14 space-y-8 md:grid md:grid-cols-5 md:gap-5">
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
              <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-wm-primary/10 shadow-lg shadow-wm-primary/10">
                <StepIcon icon={s.icon} />
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
