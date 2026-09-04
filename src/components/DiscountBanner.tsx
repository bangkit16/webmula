"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function DiscountBanner({
  showBanner = true,
  onClose,
}: {
  showBanner?: boolean;
  onClose?: () => void;
}) {
  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[#2563eb] to-[#00b4ff] py-2 text-center text-sm font-semibold text-white"
        >
          <span className="mx-2">
            Promo terbatas! Gunakan kode{" "}
            <span className="inline-block rounded bg-white px-2 py-0.5 font-bold text-[#2563eb]">
              WEB10
            </span>{" "}
            untuk diskon 10%
          </span>
          <button
            onClick={onClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
            aria-label="Tutup"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DiscountBanner;