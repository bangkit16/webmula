"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type PkgFeature = { text: string; included: boolean };

type Pkg = {
  label: string;
  title: string;
  description: string;
  price: string;
  priceMonthly?: string;
  featured?: boolean;
  features: PkgFeature[];
};

const packages: Pkg[] = [
  {
    label: "BASIC",
    title: "Landing Page Website",
    description: "Cocok untuk promosi produk atau bisnis kecil.",
    price: "Rp 600.000",
    priceMonthly: "Rp 50.000/bulan",
    features: [
      { text: "1 Halaman", included: true },
      { text: "Domain gratis (tahun pertama)", included: true },
      { text: "Hosting gratis (tahun pertama)", included: true },
      { text: "Free SSL", included: true },
      { text: "Mobile friendly", included: true },
      { text: "Desain profesional", included: true },
      { text: "Integrasi tombol WhatsApp", included: true },
      { text: "Formulir kontak", included: true },
      { text: "Basic SEO", included: true },
      { text: "Admin panel", included: false },
      { text: "Blog/artikel", included: false },
      { text: "Revisi (1x minor revision only)", included: false },
    ],
  },
  {
    label: "STANDARD",
    title: "Company Profile Website",
    description:
      "Cocok untuk bisnis atau UMKM yang mau tampil lebih serius dengan budget terbatas.",
    price: "Rp 1.500.000",
    priceMonthly: "Rp 125.000/bulan",
    featured: true,
    features: [
      { text: "1-2 Halaman (Home, About)", included: true },
      { text: "Domain gratis (tahun pertama)", included: true },
      { text: "Hosting gratis (tahun pertama)", included: true },
      { text: "Free SSL", included: true },
      { text: "Mobile friendly", included: true },
      { text: "Desain profesional", included: true },
      { text: "Integrasi tombol WhatsApp", included: true },
      { text: "Formulir kontak", included: true },
      { text: "Basic SEO", included: true },
      {
        text: "Admin panel (edit teks & gambar dasar — bukan CRUD penuh)",
        included: true,
      },
      { text: "Blog/artikel", included: false },
      { text: "Formulir kontak database", included: false },
      { text: "Revisi lebih dari 1x", included: false },
    ],
  },
  {
    label: "PREMIUM",
    title: "Website Custom Bisnis",
    description: "Cocok untuk bisnis yang butuh fitur lebih dan konten aktif.",
    price: "Rp 2.500.000",
    priceMonthly: "Rp 208.000/bulan",
    features: [
      {
        text: "3-7 Halaman (Home, About, Gallery, Blog, Artikel)",
        included: true,
      },
      { text: "Domain gratis (tahun pertama)", included: true },
      { text: "Hosting gratis (tahun pertama)", included: true },
      { text: "Free SSL", included: true },
      { text: "Mobile friendly", included: true },
      { text: "Desain custom sesuai brand", included: true },
      { text: "Integrasi tombol WhatsApp", included: true },
      { text: "Formulir kontak + database", included: true },
      { text: "Basic SEO", included: true },
      { text: "Admin panel lengkap (CRUD penuh)", included: true },
      { text: "Upload blog/artikel", included: true },
      { text: "Bantuan penggunaan website", included: true },
      { text: "2x revisi minor", included: true },
    ],
  },
  {
    label: "CUSTOM",
    title: "Custom Website",
    description:
      "Untuk bisnis yang butuh sistem atau fitur unik di luar template standar.",
    price: "Harga menyesuaikan",
    priceMonthly: undefined,
    features: [
      { text: "Jumlah halaman & fitur sesuai kebutuhan", included: true },
      { text: "Domain & hosting (skema disesuaikan project)", included: true },
      { text: "Free SSL", included: true },
      { text: "Mobile friendly", included: true },
      { text: "Desain & UX 100% custom sesuai brand", included: true },
      {
        text: "Integrasi API/third-party (payment, CRM, marketplace)",
        included: true,
      },
      { text: "Database & backend custom", included: true },
      { text: "Admin panel/dashboard sesuai kebutuhan", included: true },
      { text: "Sesi konsultasi & scoping sebelum development", included: true },
      { text: "Revisi sesuai kesepakatan kontrak", included: true },
    ],
  },
];

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
  const [open, setOpen] = useState(false);
  const visible = pkg.features.slice(0, VISIBLE);
  const hidden = pkg.features.slice(VISIBLE);
  const hasMore = hidden.length > 0;

  return (
    <motion.article
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`relative flex flex-col rounded-2xl border bg-white transition-all hover:-translate-y-1 ${
        pkg.featured
          ? "border-2 border-wm-primary shadow-[0_15px_30px_-5px_rgba(37,99,235,0.15)] p-7 md:py-10 md:-my-3 lg:py-12 z-10"
          : "border-wm-surface-2 p-7"
      }`}
    >
      {pkg.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-wm-primary px-4 py-1 text-[10px] font-bold tracking-[0.08em] text-white">
          PALING POPULER
        </span>
      )}

      <div className="text-center">
        <p className="text-xs font-bold tracking-[0.08em] text-wm-primary">
          {pkg.label}
        </p>
        <h3 className="mt-3 text-lg font-bold text-wm-ink">{pkg.title}</h3>
        <p className="mt-3 min-h-12 text-sm leading-relaxed text-wm-ink/70">
          {pkg.description}
        </p>
        <div className="mt-6">
          {pkg.priceMonthly ? (
            <>
              <strong className="block text-2xl font-extrabold tracking-tight text-wm-primary">
                {pkg.priceMonthly}
              </strong>
              <p className="mt-1 text-xs text-wm-ink/60">
                {pkg.price} per tahun
              </p>
            </>
          ) : (
            <strong className="block text-2xl font-extrabold tracking-tight text-wm-primary">
              {pkg.price}
            </strong>
          )}
        </div>
      </div>

      <ul className="mt-7 flex-1 space-y-2.5 border-t border-wm-surface-2 pt-6 text-left text-sm">
        {visible.map((f) => (
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

      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
          open ? "grid-rows-[1fr] mt-2" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-2.5 pt-3 text-left text-sm">
            {hidden.map((f) => (
              <li key={f.text} className="flex items-start gap-2">
                {f.included ? (
                  <CheckIcon className="mt-0.5 shrink-0 text-wm-primary" />
                ) : (
                  <CrossIcon className="mt-0.5 shrink-0 text-wm-ink/30" />
                )}
                <span
                  className={
                    f.included
                      ? "text-wm-ink/80"
                      : "text-wm-ink/40 line-through"
                  }
                >
                  {f.text}
                </span>
              </li>
            ))}
          </ul>
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
            {open ? "Sembunyikan detail" : "Lihat detail"}
            <ChevronIcon open={open} />
          </button>
        )}
        <motion.a
          href="#kontak"
          className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
            pkg.featured
              ? "bg-wm-primary text-white hover:bg-wm-ink"
              : "border border-wm-surface-2 text-wm-ink hover:border-wm-primary hover:text-wm-primary"
          }`}
        >
          Pilih Paket Ini
          <ArrowIcon />
        </motion.a>
      </div>
    </motion.article>
  );
}

export default function PricingSection() {
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
            Pilih paket sesuai kebutuhan
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-wm-ink md:text-4xl">
            Mulai dari yang kamu butuhkan.
          </h2>
        </motion.div>
        <div className="mt-12 grid items-start gap-5 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.title}
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
          Butuh sistem di luar paket di atas? Hubungi kami untuk konsultasi
          Custom.
        </p>
      </div>
    </section>
  );
}
