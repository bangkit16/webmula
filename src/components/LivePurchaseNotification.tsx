"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const names = [
  "Andi", "Budi", "Dewi", "Eka", "Fitri", "Hadi", "Ika", "Joko", 
  "Kartika", "Lina", "Made", "Nila", "Putu", "Rina", "Siti", "Tika",
  "Umar", "Vina", "Wati", "Yanti", "Zainal", "Ayu", "Bella", "Citra",
  "Doni", "Erni", "Fajar", "Gita", "Hana", "Indra"
];

const categories = [
  "Landing Page",
  "Company Profile",
  "Website Bisnis",
  "Toko Online",
  "Website UMKM",
];

interface PurchaseData {
  name: string;
  category: string;
}

function getRandomPurchase(): PurchaseData {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  return { name: randomName, category: randomCategory };
}

export default function LivePurchaseNotification() {
  const [notification, setNotification] = useState<PurchaseData | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setNotification(getRandomPurchase());
      setIsVisible(true);
    }, 5000);

    const showNotification = () => {
      setNotification(getRandomPurchase());
      setIsVisible(true);
      
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    const interval = setInterval(() => {
      showNotification();
    }, 15000 + Math.random() * 10000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && notification && (
        <motion.div
          key={notification.name + notification.category}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-24 left-6 z-50 max-w-xs rounded-lg bg-white px-4 py-3 shadow-lg ring-1 ring-black/5"
        >
          <p className="text-xs text-gray-500">
            <span className="font-semibold text-gray-900">{notification.name}</span> baru saja memesan{" "}
            <span className="font-semibold text-green-600">{notification.category}</span>
          </p>
          <p className="mt-1 text-xs text-gray-400">Beberapa menit yang lalu</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}