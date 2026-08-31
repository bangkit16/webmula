"use client"
import Image from "next/image";
import Link from "next/link";

const links = [
  ["Layanan", "/#layanan"],
  ["Portfolio", "/portofolio"],
  ["Cara Kerja", "/#proses"],
  ["Harga", "/#harga"],
  ["FAQ", "/#faq"],
] as const;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex min-h-20 max-w-[1200px] items-center justify-between gap-6 px-6 md:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Webmula home">
          <Image src="/image/logo-webmula.png" alt="Logo Webmula" width={36} height={36} />
          <span className="text-[19px] font-bold tracking-[-0.04em] text-wm-ink">
            web<span className="text-wm-primary">mula</span>
          </span>
        </Link>
        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
          {links.map(([label, href]) => (
            <li key={href}><Link href={href} className="transition-colors hover:text-wm-primary">{label}</Link></li>
          ))}
        </ul>
        <Link href="/#kontak" className="inline-flex min-h-10 items-center justify-center rounded-full bg-wm-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-wm-ink">
          Konsultasi Gratis
        </Link>
      </nav>
    </header>
  );
}
