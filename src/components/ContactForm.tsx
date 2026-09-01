"use client";

import { useState, type FormEvent } from "react";

type FormState = {
  name: string;
  contact: string;
  message: string;
};

const initial: FormState = { name: "", contact: "", message: "" };

export default function ContactForm() {
  const [data, setData] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);
  const [method, setMethod] = useState<"whatsapp" | "email">("whatsapp");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: integrasikan ke backend/email service (Resend, Formspree, dsb).
    // Untuk sekarang cukup log + tampilkan state sukses di UI.
    console.log("[Webmula] contact form submitted:", data, method);
    setSent(true);
    setData(initial);
  }

  return (
    <section id="kontak" className="bg-wm-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="my-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-wm-primary ">
              Hubungi Kami
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-wm-ink md:text-4xl">
              Ceritain kebutuhan website-mu.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-wm-ink/70 md:text-base">
              Konsultasi gratis, tanpa komitmen. Kami balas dalam 1×24 jam hari
              kerja.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-wm-primary/10 text-wm-primary">
                  ✆
                </span>
                <div>
                  <div className="font-semibold text-wm-ink">WhatsApp</div>
                  {/* TODO: ganti dengan nomor resmi Webmula */}
                  <a
                    href="https://wa.me/6285196399108"
                    className="text-wm-ink/70 hover:text-wm-primary"
                  >
                    +62 851-9639-9108
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-wm-primary/10 text-wm-primary">
                  ✉
                </span>
                <div>
                  <div className="font-semibold text-wm-ink">Email</div>
                  {/* TODO: ganti dengan email resmi Webmula */}
                  <a
                    href="mailto:webmuladigital@gmail.com"
                    className="text-wm-ink/70 hover:text-wm-primary"
                  >
                    webmuladigital@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-wm-primary/10 text-wm-primary">
                  ⏱
                </span>
                <div>
                  <div className="font-semibold text-wm-ink">Jam Respon</div>
                  <div className="text-wm-ink/70">
                    Senin - Minggu, 09.00–18.00 WIB
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-wm-surface-2 bg-white p-6 shadow-sm md:p-8"
          >
            {/* Tab switcher */}
            <div className="mb-6 flex rounded-xl border border-wm-surface-2 bg-wm-surface p-1">
              <button
                type="button"
                onClick={() => setMethod("whatsapp")}
                className={`flex-1 rounded-lg py-2 text-sm font-medium transition ${
                  method === "whatsapp"
                    ? "bg-white text-wm-ink shadow-sm"
                    : "text-wm-ink/60 hover:text-wm-ink"
                }`}
              >
                ✆ WhatsApp
              </button>
              <button
                type="button"
                onClick={() => setMethod("email")}
                className={`flex-1 rounded-lg py-2 text-sm font-medium transition ${
                  method === "email"
                    ? "bg-white text-wm-ink shadow-sm"
                    : "text-wm-ink/60 hover:text-wm-ink"
                }`}
              >
                ✉ Email
              </button>
            </div>
            {sent && (
              <div
                role="status"
                className="mb-5 rounded-xl border border-wm-mint/40 bg-wm-mint/10 px-4 py-3 text-sm text-wm-ink"
              >
                Terima kasih! Pesan kamu sudah kami terima. Tim Webmula akan
                balas dalam 1×24 jam.
              </div>
            )}
            <label className="block text-sm font-medium text-wm-ink">
              Nama
              <input
                required
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                placeholder="Nama lengkap kamu"
                className="mt-1.5 w-full rounded-xl border border-wm-surface-2 bg-wm-surface px-4 py-2.5 text-sm outline-none transition focus:border-wm-primary focus:bg-white"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-wm-ink">
              {" "}
              {method === "whatsapp" ? "Nomor WhatsApp" : "Alamat Email"}
              <input
                required
                value={data.contact}
                onChange={(e) => setData({ ...data, contact: e.target.value })}
                placeholder={method === "whatsapp" ? "08xxx" : "kamu@email.com"}
                className="mt-1.5 w-full rounded-xl border border-wm-surface-2 bg-wm-surface px-4 py-2.5 text-sm outline-none transition focus:border-wm-primary focus:bg-white"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-wm-ink">
              Pesan Singkat tentang Kebutuhan Project
              <textarea
                required
                rows={4}
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
                placeholder="Contoh: Saya punya toko baju, mau buat website katalog + checkout WhatsApp. Budget sekitar 5 juta."
                className="mt-1.5 w-full resize-none rounded-xl border border-wm-surface-2 bg-wm-surface px-4 py-2.5 text-sm outline-none transition focus:border-wm-primary focus:bg-white"
              />
            </label>
            <button
              type="submit"
              className="mt-5 w-full rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-md shadow-wm-primary/25 transition hover:opacity-95"
            >
              Kirim Pesan
            </button>
            <p className="mt-3 text-center text-xs text-wm-ink/50">
              Data kamu aman — nggak kami jual atau spam.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
