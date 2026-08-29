export default function Footer() {
  return (
    <footer className="border-t border-wm-surface-2 bg-wm-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand font-extrabold text-white">
              W
            </span>
            <span className="text-lg font-extrabold tracking-tight">
              <span className="text-wm-ink">web</span>
              <span className="text-wm-primary">mula</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-wm-ink/70">
            Jasa pembuatan website untuk UMKM dan bisnis kecil di Indonesia.
            Profesional, transparan, dan bisa dikelola sendiri.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-wm-ink">Jelajahi</h4>
          <ul className="mt-4 space-y-2 text-sm text-wm-ink/70">
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
        </div>

        <div>
          <h4 className="text-sm font-semibold text-wm-ink">Kontak</h4>
          {/* TODO: ganti dengan kontak resmi Webmula */}
          <ul className="mt-4 space-y-2 text-sm text-wm-ink/70">
            <li>WhatsApp: +62 812-3456-7890</li>
            <li>Email: halo@webmula.id</li>
            <li>Senin–Jumat, 09.00–18.00 WIB</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-wm-surface-2">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-wm-ink/60 md:flex-row md:px-8">
          <p>
            © {new Date().getFullYear()} Webmula. Semua hak dilindungi.
          </p>
          <p>
            Dibuat dengan Next.js + Tailwind, dengan warna dari DESIGN.md.
          </p>
        </div>
      </div>
    </footer>
  );
}
