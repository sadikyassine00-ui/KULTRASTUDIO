"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingBag, ArrowRight, Star } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { motion, AnimatePresence } from "framer-motion";
import { trackAddToCart } from "@/lib/analytics";

export function StickyMobileBar() {
  const { activeVariant, addToCart, setIsCartOpen } = useStore();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroBtn = document.getElementById("hero-add-to-cart-btn");
      if (heroBtn) {
        const rect = heroBtn.getBoundingClientRect();
        if (rect.bottom < 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileAddToCart = () => {
    addToCart();
    trackAddToCart({
      name: "100% Merino Wool Desk Mat",
      price: parseFloat(activeVariant.price.amount),
      variant: `${activeVariant.colorName} / ${activeVariant.size}`
    });
    setIsCartOpen(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-stone-950/95 backdrop-blur-md text-stone-50 border-t border-stone-800 p-3 sm:px-8 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            {/* Product Thumbnail & Details */}
            <div className="flex items-center gap-2.5">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-stone-800 border border-stone-700 shrink-0">
                <Image
                  src={activeVariant.image}
                  alt={activeVariant.title}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-1 text-xs font-semibold text-stone-200">
                  <span className="text-white font-serif font-bold">Merino Desk Mat</span>
                  <span className="text-stone-500">•</span>
                  <span className="text-amber-400 font-bold">${activeVariant.price.amount}</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-stone-400">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span>4.9 (128)</span>
                </div>
              </div>
            </div>

            {/* Quick Action Button with Gold Glow */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleMobileAddToCart}
              className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-extrabold text-xs px-4 py-3 rounded-xl shadow-[0_4px_16px_rgba(251,191,36,0.5)] transition-all flex items-center gap-2 uppercase tracking-wider border border-amber-300"
            >
              <ShoppingBag className="w-4 h-4 text-stone-950" />
              <span>Add to Cart</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
