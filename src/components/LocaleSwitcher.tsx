"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { routing, type AppLocale } from "@/i18n/routing";
import { useTransition } from "react";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("nav");
  const [isPending, startTransition] = useTransition();

  function switchTo(next: AppLocale) {
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div
      role="group"
      aria-label={t("languageSwitch")}
      className="inline-flex items-center rounded-full border border-slate-200 bg-white p-0.5 text-xs font-semibold"
    >
      {routing.locales.map((loc) => {
        const active = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => switchTo(loc)}
            disabled={isPending}
            aria-current={active ? "true" : undefined}
            className={`min-w-9 rounded-full px-2.5 py-1.5 transition-colors ${
              active
                ? "bg-wm-primary text-white"
                : "text-slate-500 hover:text-wm-ink"
            } ${isPending ? "opacity-60" : ""}`}
          >
            {loc.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}