"use client";

import { motion } from "framer-motion";
import ProjectImage from "./ProjectImage";

type Project = {
  name: string;
  category: string;
  blurb: string;
  url: string;
};

const projects: Project[] = [
  {
    name: "Klinik Utama Nikita Farla",
    category: "Company Profile",
    blurb:
      "Klinik spesialis keluarga di Tulungagung dengan pelayanan cepat, dokter peduli, dan rating 4.9 dari 265 ulasan Google.",
    url: "https://nikita-farla.vercel.app",
  },
  {
    name: "Tesla Education Center",
    category: "Company Profile",
    blurb:
      "Bimbingan belajar Tulungagung dengan pengajar asik, suasana nyaman, dan rating 5.0 dari 17 ulasan Google.",
    url: "https://tesla-education-center.vercel.app",
  },
  // {
  //   name: "Odekorasi",
  //   category: "Company Profile",
  //   blurb:
  //     "Penyewaan dekorasi premium untuk pernikahan, ulang tahun, dan acara perusahaan dengan desain eksklusif.",
  //   url: "https://www.okynawa.com",
  // },
  // {
  //   name: "Video Belajar Bangkit",
  //   category: "Landing Page",
  //   blurb:
  //     "Platform pembelajaran video interaktif untuk meningkatkan skill digital dan teknologi.",
  //   url: "https://videobelajar.bangkit.site",
  // },
  {
    name: "Aluna Pilates Studio",
    category: "Landing Page",
    blurb:
      "Rasakan pengalaman pilates terbaik di Tulungagung! Didukung pengajar yang asik, suasana studio yang nyaman, dan rating sempurna 5.0 dari 17 ulasan Google.",
    url: "https://aluna-pilates-studio.vercel.app",
  },
  {
    name: "Notaris Muchlis Samfrudin",
    category: "Company Profile",
    blurb:
      "Jasa notaris di Tulungagung dengan layanan profesional dan pengalaman yang terbukti.",
    url: "https://notaris-muchlis-samfrudin.vercel.app/",
  },
];

export default function Portfolio() {
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
            Hasil Kerja
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-wm-ink md:text-4xl">
            Beberapa website yang sudah kami bantu launching.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-wm-surface-2 bg-wm-surface transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[16/9] overflow-hidden bg-[#dee8ff] shrink-0">
                <ProjectImage
                  url={p.url}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-wm-primary">
                  {p.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-wm-ink">
                  {p.name}
                </h3>
                <p className="mt-1 flex-1 text-sm text-wm-ink/70">{p.blurb}</p>
                <div className="mt-4">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-wm-primary px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-wm-ink"
                  >
                    Lihat Website
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
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
