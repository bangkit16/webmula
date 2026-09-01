"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

type FormState = {
  name: string;
  contact: string;
  message: string;
};

const initial: FormState = { name: "", contact: "", message: "" };

export default function ContactForm() {
  const t = useTranslations("contact");
  const [data, setData] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);
  const [method, setMethod] = useState<"whatsapp" | "email">("whatsapp");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("[Webmula] contact form submitted:", data, method);
    setSent(true);
    setData(initial);
  }

  const contactLabel = method === "whatsapp" ? t("form.contactWhatsapp") : t("form.contactEmail");
  const contactPlaceholder = method === "whatsapp" ? t("form.contactWhatsappPlaceholder") : t("form.contactEmailPlaceholder");

  return (
    <section id="kontak" className="bg-wm-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            className="my-auto"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-wm-primary ">
              {t("eyebrow")}
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-wm-ink md:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-wm-ink/70 md:text-base">
              {t("body")}
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <motion.div className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-wm-primary/10 text-wm-primary">
                  ✆
                </span>
                <div>
                  <div className="font-semibold text-wm-ink">{t("whatsappLabel")}</div>
                  <a
                    href="https://wa.me/6285196399108"
                    className="text-wm-ink/70 hover:text-wm-primary"
                  >
                    +62 851-9639-9108
                  </a>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-wm-primary/10 text-wm-primary">
                  ✉
                </span>
                <div>
                  <div className="font-semibold text-wm-ink">{t("emailLabel")}</div>
                  <a
                    href="mailto:webmuladigital@gmail.com"
                    className="text-wm-ink/70 hover:text-wm-primary"
                  >
                    webmuladigital@gmail.com
                  </a>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-wm-primary/10 text-wm-primary">
                  ⏱
                </span>
                <div>
                  <div className="font-semibold text-wm-ink">{t("responseLabel")}</div>
                  <div className="text-wm-ink/70">{t("responseTime")}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="rounded-2xl border border-wm-surface-2 bg-white p-6 shadow-sm md:p-8"
          >
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
                {t("form.tabWhatsapp")}
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
                {t("form.tabEmail")}
              </button>
            </div>
            <AnimatePresence>
              {sent && (
                <motion.div
                  key="sent"
                  role="status"
                  initial={{ opacity: 0, y: -8, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -8, height: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
                  className="mb-5 overflow-hidden rounded-xl border border-wm-mint/40 bg-wm-mint/10 px-4 py-3 text-sm text-wm-ink"
                >
                  {t("form.success")}
                </motion.div>
              )}
            </AnimatePresence>
            <label className="block text-sm font-medium text-wm-ink">
              {t("form.name")}
              <input
                required
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                placeholder={t("form.namePlaceholder")}
                className="mt-1.5 w-full rounded-xl border border-wm-surface-2 bg-wm-surface px-4 py-2.5 text-sm outline-none transition focus:border-wm-primary focus:bg-white"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-wm-ink">
              {contactLabel}
              <input
                required
                value={data.contact}
                onChange={(e) => setData({ ...data, contact: e.target.value })}
                placeholder={contactPlaceholder}
                className="mt-1.5 w-full rounded-xl border border-wm-surface-2 bg-wm-surface px-4 py-2.5 text-sm outline-none transition focus:border-wm-primary focus:bg-white"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-wm-ink">
              {t("form.message")}
              <textarea
                required
                rows={4}
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
                placeholder={t("form.messagePlaceholder")}
                className="mt-1.5 w-full resize-none rounded-xl border border-wm-surface-2 bg-wm-surface px-4 py-2.5 text-sm outline-none transition focus:border-wm-primary focus:bg-white"
              />
            </label>
            <motion.button
              type="submit"
              className="mt-5 w-full rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-md shadow-wm-primary/25 transition hover:opacity-95"
            >
              {t("form.submit")}
            </motion.button>
            <p className="mt-3 text-center text-xs text-wm-ink/50">
              {t("form.disclaimer")}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}