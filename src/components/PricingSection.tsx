"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type PricingPlan = {
  id: string;
  name: string;
  description: string;
  monthlyPrice: string;
  annualPrice: string;
  originalMonthlyPrice: string;
  originalAnnualPrice: string;
  discountBadge: string;
  savingsMonthlyNote: string;
  savingsAnnualNote: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
};

const plans: PricingPlan[] = [
  { id: "basic", name: "Basic", description: "Cocok untuk promosi produk atau bisnis kecil.", monthlyPrice: "Rp 25.000", annualPrice: "Rp 200.000", originalMonthlyPrice: "Rp 35.000", originalAnnualPrice: "Rp 300.000", discountBadge: "DISKON 33%", savingsMonthlyNote: "Dibayar per tahun Rp 200.000 • termasuk domain & hosting", savingsAnnualNote: "Termasuk domain & hosting", ctaText: "Pilih Basic", features: ["1 Halaman Utama Responsif", "Desain Modern & Cepat Diakses", "Integrasi WhatsApp Chat", "Gratis SSL & Keamanan", "Setup Cepat 1 Hari Kerja"] },
  { id: "standard", name: "Standard", description: "Cocok untuk bisnis atau UMKM yang mau tampil lebih serius.", monthlyPrice: "Rp 60.000", annualPrice: "Rp 500.000", originalMonthlyPrice: "Rp 85.000", originalAnnualPrice: "Rp 700.000", discountBadge: "DISKON 31%", savingsMonthlyNote: "Dibayar per tahun Rp 500.000 • termasuk domain & hosting", savingsAnnualNote: "Termasuk domain & hosting", ctaText: "Pilih Standard", popular: true, features: ["1–2 Halaman (Home, Layanan, Kontak)", "Desain Modern & Full Responsif", "Google Maps & Lokasi Bisnis", "Gratis Email Bisnis & SSL", "Basic SEO Siap Muncul di Google"] },
  { id: "premium", name: "Premium", description: "Cocok untuk bisnis yang butuh fitur lebih dan konten aktif.", monthlyPrice: "Rp 120.000", annualPrice: "Rp 1.000.000", originalMonthlyPrice: "Rp 175.000", originalAnnualPrice: "Rp 1.400.000", discountBadge: "DISKON 31%", savingsMonthlyNote: "Dibayar per tahun Rp 1.000.000 • termasuk domain & hosting", savingsAnnualNote: "Termasuk domain & hosting", ctaText: "Pilih Premium", features: ["3–7 Halaman (Katalog, Blog, Kontak)", "Fitur Toko & Kelola Produk", "Integrasi WhatsApp Checkout", "Payment Gateway (opsional)", "Kecepatan Tinggi & Basic SEO"] },
];

function CheckmarkIcon() {
  return <svg className="h-4 w-4 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd" /></svg>;
}

function ArrowRightIcon() {
  return <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>;
}

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");
  const isMonthly = billingCycle === "monthly";

  return (
    <section id="harga" className="border-y border-slate-200/60 bg-slate-50/70 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">Paket & Harga</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">Website Profesional,<br /><span className="text-blue-600">Harga Tetap Bersahabat</span></motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-xl text-sm leading-relaxed text-slate-500">Pilih paket yang sesuai dengan kebutuhan bisnis kamu. Semua paket sudah termasuk fitur penting untuk membantu bisnismu tumbuh di dunia digital.</motion.p>
          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm">
            <button type="button" onClick={() => setBillingCycle("monthly")} className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold transition-all ${isMonthly ? "bg-blue-600 text-white shadow-sm" : "text-slate-700 hover:text-slate-900"}`}>Bayar per bulan<span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${isMonthly ? "bg-white text-blue-600" : "bg-blue-100 text-blue-600"}`}>Lebih ringan</span></button>
            <button type="button" onClick={() => setBillingCycle("annually")} className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold transition-all ${!isMonthly ? "bg-blue-600 text-white shadow-sm" : "text-slate-700 hover:text-slate-900"}`}>Bayar sekaligus<span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${!isMonthly ? "bg-white text-blue-600" : "bg-blue-100 text-blue-600"}`}>Lebih hemat</span></button>
          </div>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 pt-4 md:grid-cols-3">
          {plans.map((plan, idx) => {
            const price = isMonthly ? plan.monthlyPrice : plan.annualPrice;
            const originalPrice = isMonthly ? plan.originalMonthlyPrice : plan.originalAnnualPrice;
            return <motion.div key={plan.id} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className={`relative flex flex-col justify-between rounded-2xl bg-white p-6 transition-all duration-300 sm:p-8 ${plan.popular ? "popular-card-wobble border-2 border-blue-600 shadow-xl md:-translate-y-2" : "border border-slate-200 shadow-sm hover:shadow-lg"}`}>
              {plan.popular && <><div className="absolute -top-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-blue-600 px-6 py-2 text-[10px] font-extrabold uppercase tracking-wider text-white"><svg className="h-3.5 w-3.5 text-orange-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 2.5c.2 3.1-1.5 4.8-3.1 6.4-1.3 1.3-2.5 2.6-2.5 4.8 0 1.6.8 3 2.1 3.8-.1-.4-.2-.8-.2-1.3 0-1.5.8-2.7 2.1-3.9.3 1.8 1.5 2.8 2.4 3.7.8.8 1.4 1.6 1.4 2.8 0 .7-.2 1.3-.5 1.8 2.4-.9 4.1-3.2 4.1-5.9 0-3.7-2.5-6.8-5.8-12.2Z" /></svg><span>Recommended</span></div><div className="pointer-events-none absolute right-0 top-0 z-10 h-36 w-36 overflow-hidden rounded-tr-2xl"><div className="absolute right-[-35px] top-[24px] w-[150px] rotate-45 border-y border-white/20 bg-blue-600 py-1.5 text-center text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">★ TERLARIS</div></div></>}
              <div>
                <div className="mb-4 text-left"><h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3><p className="mt-1.5 text-xs leading-relaxed text-slate-500">{plan.description}</p></div>
                <div className="border-b border-slate-100 pb-6 pt-2"><div className="mb-1.5 flex items-center gap-2"><span className="text-xs text-slate-400 line-through">{originalPrice}</span><span className="rounded-full bg-blue-100/60 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-blue-600">{plan.discountBadge}</span></div><div className="flex items-baseline gap-1"><AnimatePresence mode="wait"><motion.span key={price} initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }} className="text-3xl font-extrabold tracking-tight text-blue-600 sm:text-4xl">{price.replace("Rp ", "")}</motion.span></AnimatePresence><span className="text-xs font-semibold text-slate-500">{isMonthly ? "/bulan" : "/tahun"}</span></div></div>
                <div className="space-y-3.5 pt-6 text-xs text-slate-600">{plan.features.map((feature) => <div key={feature} className="flex items-center gap-2"><CheckmarkIcon /><span>{feature}</span></div>)}</div>
              </div>
              <a href={`https://wa.me/6285196399108?text=${encodeURIComponent(`Halo Webmula, saya tertarik dengan paket ${plan.name} (${isMonthly ? "Bayar per bulan" : "Bayar sekaligus per tahun"}).`)}`} target="_blank" rel="noopener noreferrer" className="group mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-xs font-bold text-blue-600 transition-all hover:bg-blue-100 sm:text-sm">{plan.ctaText}<ArrowRightIcon /></a>
            </motion.div>;
          })}
        </div>
      </div>
    </section>
  );
}
