"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectImage from "@/components/ProjectImage";
import ClosingCTA from "@/components/ClosingCTA";

const projects = [
  {
    name: "Klinik Utama Nikita Farla",
    type: "Company Profile",
    description:
      "Klinik spesialis keluarga di Tulungagung dengan pelayanan cepat, dokter peduli, dan rating 4.9 dari 265 ulasan Google.",
    url: "https://nikita-farla.vercel.app",
  },
  {
    name: "Tesla Education Center",
    type: "Company Profile",
    description:
      "Bimbingan belajar Tulungagung dengan pengajar asik, suasana nyaman, dan rating 5.0 dari 17 ulasan Google.",
    url: "https://tesla-education-center.vercel.app",
  },
  {
    name: "Aluna Pilates Studio",
    type: "Landing Page",
    description:
      "Rasakan pengalaman pilates terbaik di Tulungagung! Didukung pengajar yang asik, suasana studio yang nyaman, dan rating sempurna 5.0 dari 17 ulasan Google.",
    url: "https://aluna-pilates-studio.vercel.app",
  },
  {
    name: "Notaris Muchlis Samfrudin",
    type: "Company Profile",
    description:
      "Jasa notaris di Tulungagung dengan layanan profesional dan pengalaman yang terbukti.",
    url: "https://notaris-muchlis-samfrudin.vercel.app/",
  },
  {
    name: "Odekorasi",
    type: "Landing Page",
    description:
      "Penyewaan dekorasi premium untuk pernikahan, ulang tahun, dan acara perusahaan dengan desain eksklusif dan material berkualitas.",
    url: "https://www.okynawa.com",
  },
  {
    name: "Video Belajar",
    type: "Custom Website",
    description:
      "Platform pembelajaran video interaktif untuk meningkatkan skill digital dan teknologi.",
    url: "https://videobelajar.bangkit.site",
  },
  {
    name: "3D Design Portfolio",
    type: "Portfolio",
    description:
      "Portfolio personal showcase dengan desain modern dan responsif untuk menampilkan karya profesional.",
    url: "https://pio-rust.vercel.app",
  },
];

const filters = [
  "All",
  "Landing Page",
  "Company Profile",
  "Portfolio",
  "Custom Website",
];

export default function PortofolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero header */}
        <section className="relative overflow-hidden overflow-y-clip bg-white">
          <div className="hero-blob left-[-80%] md:left-[-10%] top-[-20%] h-105 w-105 bg-wm-primary/30" />
          <div className="hero-blob right-[-90%] md:right-[-10%] top-[10%] h-90 w-90 bg-wm-sky/30" />
          <div className="hero-blob top-[-40%] left-1/3 h-90 w-90 bg-wm-mint/30" />

          <div className="relative mx-auto max-w-3xl px-6 py-20 text-center md:px-8 md:py-28">
            <p className="text-sm font-semibold uppercase tracking-wider text-wm-primary">
              Showcase
            </p>
            <h1 className="mt-3 text-5xl font-extrabold leading-[1.08] tracking-[-0.04em] text-wm-ink md:text-6xl">
              Portofolio{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Kami
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-wm-ink/70 md:text-base">
              Melihat bagaimana kami membantu bisnis tumbuh melalui desain web
              yang presisi dan berorientasi pada hasil.
            </p>
          </div>
        </section>

        {/* Filter pills */}
        <section className="mx-auto max-w-300 px-6 md:px-8 pt-6">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  activeFilter === filter
                    ? "bg-gradient-brand text-white shadow"
                    : "border border-wm-surface-2 bg-wm-surface text-wm-ink hover:border-wm-primary hover:text-wm-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        {/* Projects grid */}
        <section className="mx-auto mt-12 grid max-w-300 gap-6 px-6 pb-20 sm:grid-cols-2 sm:px-6 md:px-8 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.name}
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
                  {project.type}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-wm-ink">
                  {project.name}
                </h2>
                <p className="mt-1 text-sm text-wm-ink/70">
                  {project.description}
                </p>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" inline-flex items-center gap-1 text-sm mt- font-semibold text-wm-primary transition-colors hover:text-wm-sky"
                >
                  Lihat Live Demo
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

        {/* Closing CTA */}
        {/* <section className="relative overflow-hidden bg-wm-surface">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center md:px-8 md:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-wm-ink md:text-4xl">
              Siap untuk proyek Anda berikutnya?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-wm-ink/70 md:text-base">
              Yuk konsultasi gratis kebutuhan websitemu. Ceritakan bisnis kamu,
              kami bantu solusinya.
            </p>
            <a
              href="https://wa.me/6285196399108"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-wm-primary/30 transition-transform hover:-translate-y-0.5"
            >
              Konsultasi Gratis via WhatsApp
              <svg
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
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </section> */}
        <ClosingCTA url="https://wa.me/6285196399108" />
      </main>
      <Footer />
    </>
  );
}
