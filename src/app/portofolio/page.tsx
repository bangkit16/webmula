"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectImage from "@/components/ProjectImage";

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
    name: "Video Belajar - Pembelajaran Video Interaktif ",
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
  "Custom Website",
  "Portfolio",
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
      <main className="bg-white px-6 pb-24 pt-12 text-[#111c2d] md:px-8">
        <section className="relative mx-auto max-w-3xl py-14 text-center md:py-[120px]">
          <div className="relative z-10">
            <span className="mb-6 inline-block rounded-full bg-[#004ac6]/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.2em] text-[#004ac6]">
              Showcase
            </span>
            <h1 className="mb-6 text-[36px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#111c2d] md:text-[48px] md:leading-[1.1]">
              Portfolio{" "}
              <span className="bg-gradient-to-r from-[#004ac6] to-[#007d55] bg-clip-text text-transparent">
                Kami
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-[18px] font-normal leading-[1.6] text-[#434655]">
              Melihat bagaimana kami membantu bisnis tumbuh melalui desain web
              yang presisi dan berorientasi pada hasil.
            </p>
          </div>
          <div className="absolute left-1/2 top-1/2 -z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#004ac6]/5 blur-3xl" />
        </section>

        <div className="mx-auto mb-[64px] flex max-w-[1200px] flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-2 text-[14px] font-semibold leading-none tracking-[0.05em] transition-colors ${
                activeFilter === filter
                  ? "bg-[#004ac6] text-white"
                  : "border border-[#c3c6d7] text-[#111c2d] hover:border-[#004ac6] hover:text-[#004ac6]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <section className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-xl border border-[#c3c6d7] bg-white transition-shadow hover:shadow-lg"
            >
              <div className="flex aspect-[16/9] items-end justify-center overflow-hidden bg-[#dee8ff] p-6 pb-0">
                <ProjectImage
                  url={project.url}
                  className="h-auto w-full rounded-t-lg shadow-md transition-transform duration-500 group-hover:-translate-y-2"
                />
              </div>
              <div className="p-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[#004ac6]">
                  {project.type}
                </p>
                <h2 className="mb-4 text-2xl font-bold">{project.name}</h2>
                <p className="mb-6 text-base text-[#434655]">
                  {project.description}
                </p>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-[#004ac6] hover:underline"
                >
                  Lihat Live Demo <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="mx-auto mt-24 flex max-w-4xl flex-col items-center rounded-2xl bg-[#dee8ff] p-8 text-center md:p-16">
          <h2 className="text-2xl font-bold md:text-3xl">
            Siap untuk proyek Anda berikutnya?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#434655]">
            Yuk konsultasi gratis kebutuhan websitemu. Ceritakan bisnis kamu,
            kami bantu solusinya.
          </p>
          <a
            href="https://wa.me/6281234567890"
            className="mt-8 inline-flex min-h-12 items-center rounded-xl bg-[#10B981] px-8 py-4 font-semibold text-white transition-opacity hover:opacity-90"
          >
            Konsultasi Gratis via WhatsApp
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
