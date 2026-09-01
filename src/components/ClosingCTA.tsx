"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ClosingCTA({ url }: { url?: string }) {
  const t = useTranslations("closingCta");
  const brand = (
    <>
      <span className="text-white">web</span>
      <span className="text-wm-sky">mula</span>
    </>
  );

  return (
    <section className="relative overflow-hidden bg-wm-ink text-white">
      <motion.div
        aria-hidden
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.5 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hero-blob -left-15 -top-10 h-64 w-64 bg-wm-primary"
      />
      <motion.div
        aria-hidden
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.5 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
        className="hero-blob -right-10 -bottom-10 h-72 w-72 bg-wm-sky"
      />
      <div className="relative mx-auto max-w-4xl px-5 py-20 text-center md:px-8 md:py-24">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-3xl font-extrabold leading-tight md:text-4xl"
        >
          {t.rich("title", { brand: () => brand })}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
          className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base"
        >
          {t("body")}
        </motion.p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <motion.a
            href={url || "#kontak"}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-wm-primary/30 transition hover:opacity-95"
          >
            {t("button")}
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
          </motion.a>
        </div>
      </div>
    </section>
  );
}