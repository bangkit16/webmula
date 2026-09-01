"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ProjectImage from "./ProjectImage";

const PROJECT_KEYS = ["nikita", "tesla", "aluna", "notaris"] as const;

// URLs are not localized — kept here so the image preview still points at the live site.
const PROJECT_URLS: Record<(typeof PROJECT_KEYS)[number], string> = {
  nikita: "https://nikita-farla.vercel.app",
  tesla: "https://tesla-education-center.vercel.app",
  aluna: "https://aluna-pilates-studio.vercel.app",
  notaris: "https://notaris-muchlis-samfrudin.vercel.app/",
};

export default function Portfolio() {
  const t = useTranslations("portfolio");

  return (
    <section id="portfolio" className="bg-white">
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
            {t("title")}
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECT_KEYS.map((key, i) => (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
              className="group overflow-hidden rounded-2xl border border-wm-surface-2 bg-wm-surface transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[16/9] overflow-hidden bg-[#dee8ff]">
                <ProjectImage
                  url={PROJECT_URLS[key]}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-wm-primary">
                  {t(`items.${key}.type`)}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-wm-ink">
                  {t(`items.${key}.name`)}
                </h3>
                <p className="mt-1 text-sm text-wm-ink/70">{t(`items.${key}.blurb`)}</p>
                <Link
                  href="/portofolio"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-wm-primary hover:text-wm-sky"
                >
                  {t("viewDetail")}
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
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <Link
            href="/portofolio"
            className="text-xl font-semibold text-wm-primary hover:text-wm-sky"
          >
            {t("viewMore")} <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}