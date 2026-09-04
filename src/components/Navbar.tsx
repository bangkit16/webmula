"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  ["Layanan", "/#layanan"],
  ["Portfolio", "/portofolio"],
  ["Cara Kerja", "/#proses"],
  ["Harga", "/#harga"],
  ["FAQ", "/#faq"],
] as const;

export default function Navbar({ showBanner = true }: { showBanner?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      className={`sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur transition-all duration-300 ${showBanner ? "pt-8 md:pt-10" : ""}`}
    >
      <nav className="mx-auto flex min-h-20 max-w-[1200px] items-center justify-between gap-6 px-6 md:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Webmula home">
          <Image src="/image/logo-webmula.png" alt="Logo Webmula" width={36} height={36} />
          <span className="text-[19px] font-bold tracking-[-0.04em] text-wm-ink">
            web<span className="text-wm-primary">mula</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <Link
                href={href}
                className="relative transition-colors hover:text-wm-primary"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/#kontak"
            className="hidden min-h-10 items-center justify-center rounded-full bg-wm-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-wm-ink sm:inline-flex"
          >
            Konsultasi Gratis
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-wm-ink transition-colors hover:bg-slate-100 lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full bg-current transition-all duration-300 ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-full bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-full bg-current transition-all duration-300 ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
            className="overflow-hidden border-t border-slate-200/80 bg-white lg:hidden"
          >
            <ul className="mx-auto flex max-w-[1200px] flex-col gap-1 px-6 py-4 text-base font-medium text-slate-700">
              {links.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 transition-colors hover:bg-slate-100 hover:text-wm-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/#kontak"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-wm-primary px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-wm-ink"
                >
                  Konsultasi Gratis
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
