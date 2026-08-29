import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-wm-surface-2/60 bg-wm-surface/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="#top" className="flex items-center gap-2">
          <Image
            src="/image/logo-webmula.png"
            alt="Logo Webmula"
            width={40}
            height={40}
            className="-translate-y-1"
          />
          <span className="text-lg font-extrabold tracking-tight">
            <span className="text-wm-ink">web</span>
            <span className="text-wm-primary">mula</span>
          </span>
        </Link>
        <ul className="hidden items-center gap-7 text-sm font-medium text-wm-ink/80 md:flex">
          <li>
            <a href="#layanan" className="hover:text-wm-primary">
              Layanan
            </a>
          </li>
          <li>
            <a href="#proses" className="hover:text-wm-primary">
              Cara Kerja
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-wm-primary">
              Hasil Kerja
            </a>
          </li>
          <li>
            <a href="#kontak" className="hover:text-wm-primary">
              Kontak
            </a>
          </li>
        </ul>
        <a
          href="#kontak"
          className="rounded-full bg-wm-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-wm-primary"
        >
          Konsultasi Gratis
        </a>
      </nav>
    </header>
  );
}
