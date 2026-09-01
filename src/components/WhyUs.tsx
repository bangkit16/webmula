"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    icon: "favorite",
    title: "Fokus untuk Bisnis Kecil",
    body: "Kami paham kebutuhan UMKM dan bisnis lokal.",
  },
  {
    icon: "sell",
    title: "Harga Masuk Akal",
    body: "Paket dibuat untuk kebutuhan, bukan keinginan.",
  },
  {
    icon: "headset_mic",
    title: "Dukungan Setelah Launch",
    body: "Kami siap bantu update dan maintenance.",
  },
  {
    icon: "verified_user",
    title: "Aman & Terpercaya",
    body: "Proses jelas, komunikasi transparan.",
  },
];

function BenefitIcon({ icon }: { icon: string }) {
  const iconClass = "w-6 h-6 text-wm-primary";
  
  if (icon === "favorite") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    );
  }
  if (icon === "sell") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    );
  }
  if (icon === "headset_mic") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        <line x1="12" y1="22" x2="12" y2="19" />
      </svg>
    );
  }
  if (icon === "verified_user") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    );
  }
  return null;
}

export default function WhyUs() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-wm-primary">
            Kenapa Webmula
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-wm-ink md:text-4xl">
            Partner yang tepat untuk bisnis kecil.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
              className="rounded-2xl border border-wm-surface-2 bg-wm-surface/40 p-6 transition hover:-translate-y-1 hover:border-wm-primary/30 hover:bg-white hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-wm-primary/10">
                <BenefitIcon icon={b.icon} />
              </div>
              <h3 className="mt-5 text-base font-bold text-wm-ink">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-wm-ink/70">
                {b.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
