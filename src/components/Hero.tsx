"use client";

import { motion, type Variants } from "framer-motion";

function FeatureIcon({ name }: { name: "smartphone" | "chat" | "search" }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "smartphone") {
    return (
      <svg {...common}>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    );
  }
  if (name === "chat") {
    return (
      <svg {...common}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export default function Hero() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.08,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-white"
    >
      <motion.div
        aria-hidden
        className="hero-blob left-[-300px] md:left-[-160px] top-[-100px] h-80 w-80 bg-wm-primary/70"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.div
        aria-hidden
        className="hero-blob right-[-350px] md:right-[-160px] top-12 h-96 w-96 bg-wm-sky/70"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
      />
      <motion.div
        aria-hidden
        className="hero-blob bottom-[-140px] left-1/3 h-80 w-80 bg-wm-mint/70"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      />

      <div className="relative mx-auto w-full max-w-[1200px] grid items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-8 md:py-0">
        <div className="max-w-xl py-8">
          <motion.p
            className="text-sm font-semibold uppercase tracking-[0.12em] text-wm-primary"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            Webmula untuk bisnis kecil
          </motion.p>
          <motion.h1
            className="mt-5 text-5xl font-extrabold leading-[1.08] tracking-[-0.04em] text-wm-ink md:text-6xl"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
          >
            Website simpel.
            <br />
            Bisnis makin <span className="text-wm-primary">profesional.</span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-lg text-lg leading-8 text-wm-ink/70 md:text-xl"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
          >
            Website untuk bisnis yang mau mulai tumbuh.
          </motion.p>
          <motion.p
            className="mt-3 max-w-xl text-base leading-7 text-wm-ink/60"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
          >
            Bantu bisnis kecil tampil lebih terpercaya dengan website yang
            mobile-friendly dan terhubung ke WhatsApp.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
          >
            <motion.a
              href="#kontak"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-wm-primary px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-wm-ink"
            >
              <FeatureIcon name="chat" />
              Konsultasi Gratis
            </motion.a>
            <motion.a
              href="#portfolio"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-wm-surface-2 bg-white px-6 text-sm font-semibold text-wm-ink transition hover:border-wm-primary hover:text-wm-primary"
            >
              Lihat Contoh Website
            </motion.a>
          </motion.div>
          <motion.div
            className="mt-7 flex flex-wrap gap-3 sm:gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
          >
            {(["smartphone", "chat", "search"] as const).map((icon, index) => (
              <motion.span
                key={icon}
                className="inline-flex items-center gap-2 rounded-full bg-wm-surface px-3 py-1.5 text-xs font-medium text-wm-ink/65"
              >
                <FeatureIcon name={icon} />
                {index === 0
                  ? "Mobile Friendly"
                  : index === 1
                    ? "WhatsApp Ready"
                    : "Basic SEO"}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative flex min-h-[420px] items-center justify-center md:min-h-[560px] md:justify-end md:pr-8"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
        >
          <motion.div className="relative h-[280px] w-[min(100%,520px)] rounded-2xl border border-wm-surface-2 bg-wm-surface shadow-[0_10px_30px_rgba(11,29,58,0.08)] sm:h-[340px]">
            <div className="flex h-10 items-center gap-1.5 border-b border-wm-surface-2 bg-white px-4 rounded-t-2xl">
              <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
            </div>
            <div className="p-6 sm:p-8">
              <div className="h-3 w-24 rounded-full bg-wm-primary/20" />
              <div className="mt-5 h-7 w-4/5 rounded bg-wm-ink/10" />
              <div className="mt-3 h-3 w-3/5 rounded bg-wm-ink/10" />
              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="h-24 rounded-xl bg-wm-primary/10" />
                <div className="h-24 rounded-xl bg-wm-sky/15" />
                <div className="h-24 rounded-xl bg-wm-mint/15" />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="absolute bottom-[-20px] right-[-8px] h-[270px] w-[130px] rounded-[24px] border-4 border-white bg-wm-ink p-2 shadow-[0_14px_30px_rgba(11,29,58,0.2)] sm:bottom-[-28px] sm:right-0 sm:h-[340px] sm:w-[165px]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            <div className="h-full rounded-[17px] bg-white p-3">
              <div className="mx-auto h-1.5 w-12 rounded-full bg-wm-ink/15" />
              <div className="mt-8 h-3 w-16 rounded bg-wm-primary/25" />
              <div className="mt-3 h-16 rounded-lg bg-wm-primary/10" />
              <div className="mt-3 h-3 w-4/5 rounded bg-wm-ink/10" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
