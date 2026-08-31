import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const features = [
  {
    title: "Mobile Friendly",
    body: "Nyaman dibuka di semua perangkat.",
    icon: "smartphone",
  },
  {
    title: "Terhubung ke WhatsApp",
    body: "Calon pelanggan bisa langsung menghubungi kamu.",
    icon: "chat",
  },
  {
    title: "Desain Profesional",
    body: "Tampilan modern untuk bangun kepercayaan.",
    icon: "star",
  },
  {
    title: "Basic SEO",
    body: "Struktur website disiapkan agar mudah ditemukan di Google.",
    icon: "search",
  },
];

const plans = [
  {
    label: "START",
    title: "Landing Page",
    description: "Untuk memperkenalkan bisnis atau layanan.",
    price: "Rp699K",
  },
  {
    label: "BUSINESS",
    title: "Business Website",
    description: "Untuk bisnis yang ingin tampil lebih profesional.",
    price: "Rp1,5JT",
    featured: true,
  },
  {
    label: "STORE",
    title: "Online Store",
    description: "Untuk menampilkan dan menjual produk online.",
    price: "Rp2,5JT",
  },
];

const faqs = [
  [
    "Berapa lama pengerjaan website?",
    "Landing Page sekitar 5–7 hari kerja. Website Bisnis atau Toko Online berkisar 2–3 minggu, tergantung kompleksitas konten.",
  ],
  [
    "Apakah saya harus paham teknologi?",
    "Tidak perlu. Tim Webmula menangani setup, desain, pengembangan, dan integrasi kontak sampai website siap digunakan.",
  ],
  [
    "Apakah bisa revisi?",
    "Bisa. Revisi desain dilakukan pada tahap draf layout sebelum website resmi online.",
  ],
  [
    "Apakah bisa terhubung ke WhatsApp?",
    "Bisa. Tombol chat langsung terhubung ke nomor WhatsApp bisnis dengan pesan pembuka otomatis.",
  ],
];

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

function FeatureSection() {
  return (
    <section id="layanan" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-wm-primary">
            Semua yang kamu butuhkan, tanpa ribet
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-wm-ink md:text-4xl text-center">
            Website yang bekerja untuk bisnismu.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-wm-surface-2 bg-wm-surface/40 p-6 transition hover:-translate-y-1 hover:border-wm-primary/30 hover:bg-white hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-wm-primary/10">
                {feature.icon === "smartphone" && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wm-primary">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                )}
                {feature.icon === "chat" && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wm-primary">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                )}
                {feature.icon === "star" && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wm-primary">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                )}
                {feature.icon === "search" && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wm-primary">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                )}
              </div>
              <h3 className="mt-5 text-base font-bold text-wm-ink">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-wm-ink/70">
                {feature.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="harga" className="bg-wm-surface">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-wm-primary">
            Pilih sesuai kebutuhan
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-wm-ink md:text-4xl">
            Mulai dari yang kamu butuhkan.
          </h2>
        </div>
        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.title}
              className={`relative flex flex-col rounded-2xl border bg-white transition-all ${
                plan.featured
                  ? "border-2 border-wm-primary shadow-[0_15px_30px_-5px_rgba(37,99,235,0.15)] p-7 md:py-14 md:-my-6 lg:py-16 lg:-my-8 z-10"
                  : "border-wm-surface-2 p-7"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-wm-primary px-4 py-1 text-[10px] font-bold tracking-[0.08em] text-white">
                  PALING POPULER
                </span>
              )}
              <div className="text-center">
                <p className="text-xs font-bold tracking-[0.08em] text-wm-primary">
                  {plan.label}
                </p>
                <h3 className="mt-3 text-xl font-bold text-wm-ink">
                  {plan.title}
                </h3>
                <p className="mt-3 min-h-12 text-sm leading-relaxed text-wm-ink/70">
                  {plan.description}
                </p>
                <div className="mt-7">
                  <span className="block text-xs font-semibold text-wm-ink/50">
                    Mulai dari
                  </span>
                  <strong className="mt-1 block text-3xl font-extrabold tracking-tight text-wm-primary">
                    {plan.price}
                  </strong>
                </div>
              </div>
              <a
                href="#kontak"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                  plan.featured
                    ? "bg-wm-primary text-white hover:bg-wm-ink"
                    : "border border-wm-surface-2 text-wm-ink hover:border-wm-primary hover:text-wm-primary"
                }`}
              >
                Pilih Paket Ini
                <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-wm-ink/50">
          Harga menyesuaikan kebutuhan custom project.
        </p>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-wm-primary">
            Pertanyaan yang sering ditanyakan
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-wm-ink md:text-4xl">
            Punya pertanyaan lain? Cek di sini.
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <details
              key={question}
              className="group overflow-hidden rounded-xl border border-wm-surface-2 bg-wm-surface/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-sm font-semibold text-wm-ink marker:hidden [&::-webkit-details-marker]:hidden">
                {question}
                <span className="text-xl font-normal text-wm-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="border-t border-wm-surface-2 bg-white px-5 pb-5 pt-4 text-sm leading-relaxed text-wm-ink/70">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeatureSection />
        <PricingSection />
        <Portfolio />
        <Process />
        <WhyUs />
        <Testimonials />
        <FAQSection />
        <ClosingCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
