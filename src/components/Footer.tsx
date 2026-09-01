"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Footer() {
  const t = useTranslations("footer");

  const serviceLinks = [
    { key: "landing", href: "/#harga" },
    { key: "business", href: "/#harga" },
    { key: "onlineStore", href: "/#harga" },
    { key: "maintenance", href: "/#kontak" },
  ] as const;

  const companyLinks = [
    { key: "portfolio", href: "/portofolio" },
    { key: "about", href: "/" },
    { key: "faq", href: "/#faq" },
    { key: "contact", href: "/#kontak" },
  ] as const;

  return (
    <footer className=" w-full border-t border-wm-surface-2 bg-white text-left">
      <motion.div
        className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 sm:grid-cols-2 md:grid-cols-4 md:px-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
      >
        <motion.div
          className="space-y-4"
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label={t("company.about")}
          >
            <Image
              src="/image/logo-webmula.png"
              alt="Logo Webmula"
              width={36}
              height={36}
            />
            <span className="text-base font-bold tracking-[-0.04em] text-wm-ink">
              web<span className="text-wm-primary">mula</span>
            </span>
          </Link>
          <p className="max-w-[220px] text-sm leading-6 text-wm-ink/60">
            {t("tagline")}
          </p>
          <a
            href="https://wa.me/6285196399108"
            className="inline-flex text-sm font-semibold text-wm-primary hover:text-wm-ink"
          >
            {t("consultation")}
          </a>
        </motion.div>

        <FooterLinks
          title={t("servicesTitle")}
          links={serviceLinks.map((l) => ({ label: t(`services.${l.key}`), href: l.href }))}
        />
        <FooterLinks
          title={t("companyTitle")}
          links={companyLinks.map((l) => ({ label: t(`company.${l.key}`), href: l.href }))}
        />

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <h2 className="text-sm font-bold text-wm-ink">{t("contactTitle")}</h2>
          <ul className="mt-5 space-y-3 text-sm text-wm-ink/60">
            <li>
              <a
                href="https://wa.me/6285196399108"
                className="hover:text-wm-primary"
              >
                0851-9639-9108
              </a>
            </li>
            <li>
              <a
                href="mailto:webmuladigital@gmail.com"
                className="hover:text-wm-primary"
              >
                webmuladigital@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/LRvnxrDk75JdZAqo9"
                className="hover:text-wm-primary"
              >
                Jl. Gubeng Kertajaya IX G No.5B, Airlangga, Kec. Gubeng,
                Surabaya, Jawa Timur 60286
              </a>
            </li>
            <li className="pt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.7022081196897!2d112.75784589999999!3d-7.274686899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbd23ca3c777%3A0x48e0a10ad25572f7!2sJl.%20Gubeng%20Kertajaya%20IX%20G%20No.5-B%2C%20RT.011%2FRW.05%2C%20Airlangga%2C%20Kec.%20Gubeng%2C%20Surabaya%2C%20Jawa%20Timur%2060286!5e0!3m2!1sid!2sid!4v1788229711315!5m2!1sid!2sid"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Lokasi Webmula"
                className="rounded-lg"
              />
            </li>
          </ul>
        </motion.div>
      </motion.div>
      <div className="border-t border-wm-surface-2">
        <p className="mx-auto max-w-[1200px] px-6 py-5 text-xs text-wm-ink/50 md:px-8">
          {t("copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <h2 className="text-sm font-bold text-wm-ink">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm text-wm-ink/60">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <a href={l.href} className="hover:text-wm-primary">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}