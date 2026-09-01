import Link from "next/link";
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
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-wm-primary">
            Hasil Kerja
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-wm-ink md:text-4xl">
            Beberapa website yang sudah kami bantu launching.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-2xl border border-wm-surface-2 bg-wm-surface transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[16/9] overflow-hidden bg-[#dee8ff]">
                <ProjectImage
                  url={p.url}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-wm-primary">
                  {p.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-wm-ink">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-wm-ink/70">{p.blurb}</p>
                <Link
                  href="/portofolio"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-wm-primary hover:text-wm-sky"
                >
                  Lihat Detail
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
        </div>
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-wm-ink/70 md:text-base">
            <Link
              href="/portofolio"
              className="mt-8 inline-flextext-center gap-1 text-xl mx-auto w-full font-semibold text-wm-primary hover:text-wm-sky"
            >
              Lihat Portofolio Lain <span aria-hidden>→</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
