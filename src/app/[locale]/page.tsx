"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import PricingSection from "@/components/PricingSection";

const FEATURE_ICONS = ["smartphone", "chat", "star", "search"] as const;

function FeatureSection() {
  const t = useTranslations("features");
  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  const items = ["mobile", "whatsapp", "design", "seo"] as const;

  return (
    <section id="layanan" className="bg-white">
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
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-wm-ink md:text-4xl text-center">
            {t("title")}
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((key, i) => (
            <motion.article
              key={key}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-2xl border border-wm-surface-2 bg-wm-surface/40 p-6 transition hover:-translate-y-1 hover:border-wm-primary/30 hover:bg-white hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-wm-primary/10">
                {FEATURE_ICONS[i] === "smartphone" && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wm-primary">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                )}
                {FEATURE_ICONS[i] === "chat" && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wm-primary">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                )}
                {FEATURE_ICONS[i] === "star" && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wm-primary">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                )}
                {FEATURE_ICONS[i] === "search" && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wm-primary">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                )}
              </div>
              <h3 className="mt-5 text-base font-bold text-wm-ink">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-wm-ink/70">
                {t(`items.${key}.body`)}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const t = useTranslations("faq");
  const items = ["duration", "tech", "revision", "whatsapp"] as const;

  return (
    <section id="faq" className="bg-white">
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
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
          {items.map((key, i) => (
            <motion.details
              key={key}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const }}
              className="group overflow-hidden rounded-xl border border-wm-surface-2 bg-wm-surface/30 transition hover:-translate-y-1"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-sm font-semibold text-wm-ink marker:hidden [&::-webkit-details-marker]:hidden">
                {t(`items.${key}.q`)}
                <span className="text-xl font-normal text-wm-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="border-t border-wm-surface-2 bg-white px-5 pb-5 pt-4 text-sm leading-relaxed text-wm-ink/70">
                {t(`items.${key}.a`)}
              </p>
            </motion.details>
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