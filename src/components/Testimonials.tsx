"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Testimonial = {
  name: string;
  quote: string;
  initials: string;
};

const testimonials: Testimonial[] = [
  { name: "Raka Pratama", quote: "Website dari Webmula bikin bisnis kami terlihat lebih profesional dan pelanggan jadi lebih mudah menemukan informasi.", initials: "RP" },
  { name: "Dewi Lestari", quote: "Prosesnya jelas dari awal sampai akhir. Kami jadi lebih percaya diri saat membagikan website ke calon pelanggan.", initials: "DL" },
  { name: "Ahmad Fauzi", quote: "Tampilan website jauh lebih rapi dari yang kami bayangkan, dan tim Webmula cepat merespons setiap revisi.", initials: "AF" },
  { name: "Nadia Permata", quote: "Kami tidak perlu pusing dengan istilah teknis. Webmula membantu menerjemahkan kebutuhan bisnis kami menjadi website yang mudah dipakai.", initials: "NP" },
  { name: "Bagas Wicaksono", quote: "Portfolio kami sekarang terasa lebih premium. Banyak calon klien langsung memahami layanan kami setelah melihat website.", initials: "BW" },
  { name: "Sinta Maharani", quote: "Website-nya cepat dibuka di HP dan informasi pemesanan jadi lebih mudah ditemukan. Sangat membantu operasional harian kami.", initials: "SM" },
];

function Avatar({ initials, idx }: { initials: string; idx: number }) {
  const tones = ["bg-gradient-brand", "bg-wm-ink", "bg-wm-primary"];
  return (
    <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-bold text-white ${tones[idx % tones.length]}`}>
      {initials}
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const updateVisibleCount = () => setVisibleCount(window.matchMedia("(min-width: 768px)").matches ? 3 : 1);
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => current >= testimonials.length - visibleCount ? 0 : current + 1);
    }, 2000);
    return () => window.clearInterval(timer);
  }, [paused, visibleCount]);

  const move = (direction: -1 | 1) => {
    setActiveIndex((current) => {
      const lastIndex = testimonials.length - visibleCount;
      return current + direction < 0 ? lastIndex : current + direction > lastIndex ? 0 : current + direction;
    });
  };

  return (
    <section className="bg-wm-surface" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <motion.div className="mx-auto max-w-3xl text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}>
          <p className="text-sm font-semibold uppercase tracking-wider text-wm-primary">Testimoni Klien</p>
          <h2 id="testimonials-title" className="mt-3 text-3xl font-bold leading-tight text-wm-ink md:text-4xl">
            Mereka yang sudah jalan bareng <span className="text-wm-ink">web</span><span className="text-wm-primary">mula</span>.
          </h2>
        </motion.div>

        <div className="relative mt-12" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }} role="region" aria-roledescription="carousel" aria-label="Testimoni klien Webmula">
          <div className="overflow-hidden">
            <div className="flex gap-5 transition-transform duration-500 ease-out motion-reduce:transition-none" style={{ transform: `translateX(calc(-${activeIndex} * ((100% + 1.25rem) / ${visibleCount})))` }}>
              {testimonials.map((t, i) => (
                <motion.figure key={t.name} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay: (i % visibleCount) * 0.1, ease: [0.22, 1, 0.36, 1] as const }} className="flex min-w-0 basis-full shrink-0 flex-col gap-4 rounded-2xl border border-wm-surface-2 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md md:basis-[calc((100%-2.5rem)/3)]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-wm-primary/30" aria-hidden><path d="M7 7h3v3H7v3H4V10a3 3 0 0 1 3-3zm10 0h3v3h-3v3h-3V10a3 3 0 0 1 3-3z" /></svg>
                  <blockquote className="text-[15px] leading-relaxed text-wm-ink/80">“{t.quote}”</blockquote>
                  <figcaption className="mt-auto flex items-center gap-3 border-t border-wm-surface-2 pt-4"><Avatar initials={t.initials} idx={i} /><div className="text-sm font-semibold text-wm-ink">{t.name}</div></figcaption>
                </motion.figure>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center justify-between gap-4">
            <div className="flex gap-2" aria-label="Pilih slide testimoni">
              {Array.from({ length: testimonials.length - visibleCount + 1 }, (_, index) => (
                <button key={index} type="button" aria-label={`Tampilkan testimoni ${index + 1}`} aria-current={activeIndex === index ? "true" : undefined} onClick={() => setActiveIndex(index)} className={`h-2 rounded-full transition-all ${activeIndex === index ? "w-7 bg-wm-primary" : "w-2 bg-wm-ink/20 hover:bg-wm-ink/40"}`} />
              ))}
            </div>
            <div className="flex gap-2">
              <button type="button" aria-label="Testimoni sebelumnya" onClick={() => move(-1)} className="grid h-11 w-11 place-items-center rounded-full border border-wm-surface-2 bg-white text-wm-ink transition hover:border-wm-primary hover:text-wm-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wm-primary">←</button>
              <button type="button" aria-label="Testimoni berikutnya" onClick={() => move(1)} className="grid h-11 w-11 place-items-center rounded-full border border-wm-surface-2 bg-white text-wm-ink transition hover:border-wm-primary hover:text-wm-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wm-primary">→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
