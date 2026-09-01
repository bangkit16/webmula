"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

function Avatar({ initials, idx }: { initials: string; idx: number }) {
  const tones = ["bg-gradient-brand", "bg-wm-ink", "bg-wm-primary"];
  return (
    <div
      className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-bold text-white ${tones[idx % tones.length]}`}
    >
      {initials}
    </div>
  );
}

const TESTIMONIAL_KEYS = ["1", "2", "3"] as const;

function initialsFor(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const brand = (
    <>
      <span className="text-wm-ink">web</span>
      <span className="text-wm-primary">mula</span>
    </>
  );

  return (
    <section className="bg-wm-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-wm-primary">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-wm-ink md:text-4xl">
            {t.rich("title", { brand: () => brand })}
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIAL_KEYS.map((key, i) => {
            const name = t(`items.${key}.name`);
            return (
              <motion.figure
                key={key}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                className="flex h-full flex-col gap-4 rounded-2xl border border-wm-surface-2 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-wm-primary/30"
                  aria-hidden
                >
                  <path d="M7 7h3v3H7v3H4V10a3 3 0 0 1 3-3zm10 0h3v3h-3v3h-3V10a3 3 0 0 1 3-3z" />
                </svg>
                <blockquote className="text-[15px] leading-relaxed text-wm-ink/80">
                  “{t(`items.${key}.quote`)}”
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 border-t border-wm-surface-2 pt-4">
                  <Avatar initials={initialsFor(name)} idx={i} />
                  <div>
                    <div className="text-sm font-semibold text-wm-ink">
                      {name}
                    </div>
                    <div className="text-xs text-wm-ink/60">
                      {t(`items.${key}.business`)}
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}