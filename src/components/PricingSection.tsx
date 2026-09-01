"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

type PkgFeature = { text: string; included: boolean };
type Pkg = {
  key: "basic" | "standard" | "premium" | "custom";
  features: PkgFeature[];
};

const PACKAGE_KEYS: Pkg["key"][] = ["basic", "standard", "premium", "custom"];

const VISIBLE = 6;

function ArrowIcon() {
  return (
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
  );
}

function CheckIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CrossIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
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
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function PackageCard({ pkg }: { pkg: Pkg }) {
  const t = useTranslations("pricing");
  const [open, setOpen] = useState(false);
  const visible = pkg.features.slice(0, VISIBLE);
  const hidden = pkg.features.slice(VISIBLE);
  const hasMore = hidden.length > 0;
  const featured = pkg.key === "standard";

  return (
    <motion.article
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`relative flex flex-col rounded-2xl border bg-white transition-all hover:-translate-y-1 ${
        featured
          ? "border-2 border-wm-primary shadow-[0_15px_30px_-5px_rgba(37,99,235,0.15)] p-7 md:py-10 md:-my-3 lg:py-12 z-10"
          : "border-wm-surface-2 p-7"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-wm-primary px-4 py-1 text-[10px] font-bold tracking-[0.08em] text-white">
          {t("mostPopular")}
        </span>
      )}

      <div className="text-center">
        <p className="text-xs font-bold tracking-[0.08em] text-wm-primary">
          {t(`packages.${pkg.key}.label`)}
        </p>
        <h3 className="mt-3 text-lg font-bold text-wm-ink">
          {t(`packages.${pkg.key}.title`)}
        </h3>
        <p className="mt-3 min-h-12 text-sm leading-relaxed text-wm-ink/70">
          {t(`packages.${pkg.key}.description`)}
        </p>
        <div className="mt-6">
          <strong className="block text-2xl font-extrabold tracking-tight text-wm-primary">
            {t(`packages.${pkg.key}.price`)}
          </strong>
        </div>
      </div>

      <FeatureList features={visible} />
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
          open ? "grid-rows-[1fr] mt-2" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <FeatureList features={hidden} />
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-2">
        {hasMore && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-wm-ink/60 transition hover:text-wm-primary"
          >
            {open ? t("showLess") : t("showMore")}
            <ChevronIcon open={open} />
          </button>
        )}
        <motion.a
          href="#kontak"
          className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
            featured
              ? "bg-wm-primary text-white hover:bg-wm-ink"
              : "border border-wm-surface-2 text-wm-ink hover:border-wm-primary hover:text-wm-primary"
          }`}
        >
          {t("selectCta")}
          <ArrowIcon />
        </motion.a>
      </div>
    </motion.article>
  );
}

function FeatureList({ features }: { features: PkgFeature[] }) {
  return (
    <ul className="space-y-2.5 text-left text-sm">
      {features.map((f) => (
        <li key={f.text} className="flex items-start gap-2">
          {f.included ? (
            <CheckIcon className="mt-0.5 shrink-0 text-wm-primary" />
          ) : (
            <CrossIcon className="mt-0.5 shrink-0 text-wm-ink/30" />
          )}
          <span
            className={
              f.included ? "text-wm-ink/80" : "text-wm-ink/40 line-through"
            }
          >
            {f.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function PricingSection() {
  const t = useTranslations("pricing");

  const packages: Pkg[] = PACKAGE_KEYS.map((key) => ({
    key,
    features: t.raw(`packages.${key}.features`) as PkgFeature[],
  }));

  return (
    <section id="harga" className="bg-wm-surface">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-wm-primary">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-wm-ink md:text-4xl">
            {t("title")}
          </h2>
        </motion.div>
        <div className="mt-12 grid items-start gap-5 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.key}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
              className={i === 3 ? "md:col-start-2" : undefined}
            >
              <PackageCard pkg={pkg} />
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-wm-ink/50">
          {t("footnote")}
        </p>
      </div>
    </section>
  );
}