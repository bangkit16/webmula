# Webmula — Design System

> **Tagline:** "Website untuk bisnis yang mau mulai tumbuh."
> (Websites for businesses ready to start growing.)

---

## 1. Brand Overview

**Webmula** is a website-building/service brand targeting small businesses and UMKM (micro/small enterprises) in Indonesia looking to establish and grow their digital presence.

### Brand Personality
| Trait | Meaning |
|---|---|
| 🚀 **Profesional** | Modern, trustworthy appearance |
| 🙂 **Bersahabat** | Approachable, close to UMKM and small businesses |
| 📈 **Bertumbuh** | Digital solutions built for future growth |
| ✅ **Praktis** | Simple, clear, easy to understand |

---

## 2. Logo

### Logo Mark Construction
The Webmula mark combines three elements:
1. **"W" initial** — a modern, geometric double-stroke "W"
2. **Upward arrow** — symbolizes business growth and progress
3. **Digital pixels** (stepped squares, top-right) — symbolizes technology & digital transformation

> *"Logo Webmula menggabungkan huruf 'W' yang modern dengan elemen panah ke atas dan piksel digital yang melambangkan pertumbuhan bisnis melalui solusi website yang tepat."*

### Logo Variations
- **Full logo (light background):** Mark + wordmark ("web" in dark navy, "mula" in blue) + tagline
- **Full logo (dark background):** Mark + wordmark in white/blue + tagline, on `#0B1D3A` background
- **Icon-only (app icon):** Blue rounded-square badge (`#2563EB`) with white W-mark — used for app icons/social avatars
- **Favicon / Light:** Mark on white/transparent background
- **Favicon / Dark:** Mark on dark navy circular background

### Usage Notes
- The wordmark always splits colors: "**web**" in dark navy (`#0B1D3A`), "**mula**" in primary blue (`#2563EB`)
- Maintain clear space around the mark equal to the width of one pixel-block unit
- Use the dark-background lockup only on navy (`#0B1D3A`) or near-black surfaces — do not place on mid-tone colors
- Don't recolor, skew, rotate, or separate the mark from its pixel/arrow elements

---

## 3. Color Palette

| Swatch | Name | Hex | Usage |
|---|---|---|---|
| 🟦⬛ | Navy / Ink | `#0B1D3A` | Primary text, dark backgrounds, "web" wordmark |
| 🔵 | Primary Blue | `#2563EB` | Primary brand color, CTAs, "mula" wordmark, icon badge |
| 🔷 | Sky Blue | `#00B4FF` | Accent, gradients, highlights |
| 🟢 | Mint Green | `#22D3A7` | Secondary accent, success states, growth indicators |
| ⬜ | Light Gray | `#F3F4F6` | Backgrounds, surfaces, neutral fills |

### Suggested Semantic Mapping (for UI)
```css
:root {
  --color-primary: #2563EB;
  --color-primary-light: #00B4FF;
  --color-accent: #22D3A7;
  --color-ink: #0B1D3A;
  --color-surface: #F3F4F6;
  --color-surface-dark: #0B1D3A;

  /* Logo gradient (blue mark) */
  --gradient-brand: linear-gradient(135deg, #2563EB 0%, #00B4FF 100%);
}
```

- Use **Navy** for body text on light backgrounds and as the dark-mode background base
- Use **Primary Blue → Sky Blue** as the signature diagonal gradient (seen in the logo mark) for hero sections, buttons, icons
- Use **Mint Green** sparingly — success states, growth metrics, secondary highlights
- Use **Light Gray** as the default page/card background, not pure white, for a softer feel

---

## 4. Typography

**Typeface:** [Poppins](https://fonts.google.com/specimen/Poppins) (Google Fonts)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

body { font-family: 'Poppins', sans-serif; }
```

| Weight | Use case |
|---|---|
| 400 (Regular) | Body text, descriptions |
| 500 (Medium) | UI labels, secondary emphasis |
| 600 (SemiBold) | Subheadings |
| 700–800 (Bold/ExtraBold) | Headlines, wordmark ("webmula"), CTAs |

Character set reference: `Aa Bb Cc ... 1234567890 !@#$%^&*()`

---

## 5. Iconography Style

- Simple, line/duotone icons in **Primary Blue**, matching the brand-personality icons (rocket, smiley, growth chart, checkmark)
- Rounded corners, consistent stroke weight — friendly and approachable, not sharp/corporate
- Icon badges use a **rounded square** container (matching the app-icon shape) at `#2563EB`

---

## 6. Application Notes

- **App icon / Favicon:** rounded-square blue badge (light contexts) or circular navy badge (dark contexts), both with the white W-mark
- **Dark mode:** background `#0B1D3A`, text white/light gray, accents remain `#2563EB` / `#00B4FF`
- **Light mode:** background `#F3F4F6` or white, text `#0B1D3A`
- Maintain the **diagonal blue gradient** as a recurring signature motif (buttons, hero backgrounds, chart accents)

---

## 7. Quick Reference — Tailwind Config Snippet

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'wm-ink': '#0B1D3A',
        'wm-primary': '#2563EB',
        'wm-sky': '#00B4FF',
        'wm-mint': '#22D3A7',
        'wm-surface': '#F3F4F6',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
};
```
