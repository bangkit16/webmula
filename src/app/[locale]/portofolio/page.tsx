"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectImage from "@/components/ProjectImage";
import ClosingCTA from "@/components/ClosingCTA";

type Project = {
  key: string;
  type: string;
  url: string;
};

const projects: Project[] = [
  {
    key: "nikita",
    type: "Company Profile",
    url: "https://nikita-farla.vercel.app",
  },
  {
    key: "tesla",
    type: "Company Profile",
    url: "https://tesla-education-center.vercel.app",
  },
  {
    key: "aluna",
    type: "Landing Page",
    url: "https://aluna-pilates-studio.vercel.app",
  },
  {
    key: "notaris",
    type: "Company Profile",
    url: "https://notaris-muchlis-samfrudin.vercel.app/",
  },
  {
    key: "odekorasi",
    type: "Landing Page",
    url: "https://www.okynawa.com",
  },
  {
    key: "videobelajar",
    type: "Custom Website",
    url: "https://videobelajar.bangkit.site",
  },
  {
    key: "design3d",
    type: "Portfolio",
    url: "https://pio-rust.vercel.app",
  },
];

const FILTER_KEYS = ["all", "landing", "company", "portfolio", "custom"] as const;
type FilterKey = (typeof FILTER_KEYS)[number];

const FILTER_TO_TYPE: Record<FilterKey, string | null> = {
  all: null,
  landing: "Landing Page",
  company: "Company Profile",
  portfolio: "Portfolio",
  custom: "Custom Website",
};

export default function PortofolioPage() {
  const t = useTranslations("portofolio");
  const [active, setActive] = useState<FilterKey>("all");

  const targetType = FILTER_TO_TYPE[active];
  const filtered =
    targetType === null
      ? projects
      : projects.filter((p) => p.type === targetType);

  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="relative overflow-hidden overflow-y-clip bg-white">
          <div className="hero-blob left-[-80%] md:left-[-10%] top-[-20%] h-105 w-105 bg-wm-primary/30" />
          <div className="hero-blob right-[-90%] md:right-[-10%] top-[10%] h-90 w-90 bg-wm-sky/30" />
          <div className="hero-blob top-[-40%] left-1/3 h-90 w-90 bg-wm-mint/30" />

          <div className="relative mx-auto max-w-3xl px-6 py-20 text-center md:px-8 md:py-28">
            <p className="text-sm font-semibold uppercase tracking-wider text-wm-primary">
              {t("eyebrow")}
            </p>
            <h1 className="mt-3 text-5xl font-extrabold leading-[1.08] tracking-[-0.04em] text-wm-ink md:text-6xl">
              {t("title1")}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                {t("title2")}
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-wm-ink/70 md:text-base">
              {t("body")}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-300 px-6 md:px-8 pt-6">
          <div className="flex flex-wrap justify-center gap-3">
            {FILTER_KEYS.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActive(key)}
                aria-pressed={active === key}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  active === key
                    ? "bg-gradient-brand text-white shadow"
                    : "border border-wm-surface-2 bg-wm-surface text-wm-ink hover:border-wm-primary hover:text-wm-primary"
                }`}
              >
                {t(`filters.${key}`)}
              </button>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-12 grid max-w-300 gap-6 px-6 pb-20 sm:grid-cols-2 sm:px-6 md:px-8 lg:grid-cols-3">
          {filtered.map((project) => (
            <article
              key={project.key}
              className="group overflow-hidden rounded-2xl border border-wm-surface-2 bg-wm-surface transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <div className="aspect-video overflow-hidden bg-wm-surface-2">
                <ProjectImage
                  url={project.url}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col ">
                <p className="text-xs font-semibold uppercase tracking-wider text-wm-primary">
                  {t(`items.${project.key}.type`)}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-wm-ink">
                  {t(`items.${project.key}.name`)}
                </h2>
                <p className="mt-1 text-sm text-wm-ink/70">
                  {t(`items.${project.key}.description`)}
                </p>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" inline-flex items-center gap-1 text-sm mt- font-semibold text-wm-primary transition-colors hover:text-wm-sky"
                >
                  {t("liveDemo")}
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
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </section>

        <ClosingCTA url="https://wa.me/6285196399108" />
      </main>
      <Footer />
    </>
  );
}