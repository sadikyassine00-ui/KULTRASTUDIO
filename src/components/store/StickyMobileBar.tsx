"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { motion, AnimatePresence } from "framer-motion";

export function StickyMobileBar() {
  const { activeVariant, addToCart } = useStore();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroBtn = document.getElementById("hero-add-to-cart-btn");
      if (heroBtn) {
        const rect = heroBtn.getBoundingClientRect();
        // Show sticky bar when hero button is scrolled out of view above
        setIsVisible(rect.bottom < 0);
      } else {
        setIsVisible(window.scrollY > 450);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 22, stiffness: 260 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden glass-dark-card border-t border-stone-800 p-3 shadow-2xl"
        >
          <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
            {/* Product Thumbnail & Details */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-stone-700 bg-stone-800 shrink-0">
                <Image
                  src={activeVariant.image}
                  alt={activeVariant.title}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-stone-100 line-clamp-1">
                  Merino & Cork Mat
                </span>
                <span className="text-[10px] text-stone-400 font-medium">
                  {activeVariant.colorName} • {activeVariant.size}
                </span>
                <span className="text-xs font-serif font-bold text-amber-400">
                  ${activeVariant.price.amount}
                </span>
              </div>
            </div>

            {/* Instant ATC Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => addToCart()}
              className="bg-amber-400 hover:bg-amber-500 text-stone-950 font-bold px-4 py-2.5 rounded-xl shadow-sm text-xs flex items-center gap-1.5 shrink-0 uppercase tracking-wider"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add to Cart</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
