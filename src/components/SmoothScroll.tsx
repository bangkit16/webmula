"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as Element | null)?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const target = anchor.getAttribute("href");
      if (target && target.length > 1 && document.querySelector(target)) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: -64, duration: 1.4 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}