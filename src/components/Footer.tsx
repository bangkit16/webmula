import Image from "next/image";

const serviceLinks = [
  ["Landing Page", "#harga"],
  ["Business Website", "#harga"],
  ["Online Store", "#harga"],
  ["Maintenance", "#kontak"],
] as const;

const companyLinks = [
  ["Portfolio", "#portfolio"],
  ["Tentang Webmula", "#top"],
  ["FAQ", "#faq"],
  ["Kontak", "#kontak"],
] as const;

export default function Footer() {
  return (
    <footer className="mt-12 w-full border-t border-wm-surface-2 bg-white text-left">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 sm:grid-cols-2 md:grid-cols-4 md:px-8">
        <div className="space-y-4">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Webmula home">
            <Image src="/image/logo-webmula.png" alt="Logo Webmula" width={36} height={36} />
            <span className="text-base font-bold tracking-[-0.04em] text-wm-ink">
              web<span className="text-wm-primary">mula</span>
            </span>
          </a>
          <p className="max-w-[220px] text-sm leading-6 text-wm-ink/60">
            Website untuk bisnis yang mau mulai tumbuh.
          </p>
          <a href="https://wa.me/6281234567890" className="inline-flex text-sm font-semibold text-wm-primary hover:text-wm-ink">
            Konsultasi gratis →
          </a>
        </div>

        <FooterLinks title="Layanan" links={serviceLinks} />
        <FooterLinks title="Company" links={companyLinks} />

        <div>
          <h2 className="text-sm font-bold text-wm-ink">Hubungi Kami</h2>
          <ul className="mt-5 space-y-3 text-sm text-wm-ink/60">
            <li><a href="https://wa.me/6281234567890" className="hover:text-wm-primary">WhatsApp</a></li>
            <li><a href="mailto:halo@webmula.id" className="hover:text-wm-primary">halo@webmula.id</a></li>
            <li>Senin–Jumat, 09.00–18.00 WIB</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-wm-surface-2">
        <p className="mx-auto max-w-[1200px] px-6 py-5 text-xs text-wm-ink/50 md:px-8">
          © {new Date().getFullYear()} Webmula. Semua hak dilindungi.
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
  links: readonly (readonly [string, string])[];
}) {
  return (
    <div>
      <h2 className="text-sm font-bold text-wm-ink">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm text-wm-ink/60">
        {links.map(([label, href]) => (
          <li key={href + label}><a href={href} className="hover:text-wm-primary">{label}</a></li>
        ))}
      </ul>
    </div>
  );
}
