"use client";

import React from "react";
import { ShoppingBag, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { motion } from "framer-motion";

export function Navbar() {
  const { totalQuantity, setIsCartOpen } = useStore();

  return (
    <header className="sticky top-0 z-40 w-full transition-all">
      {/* Announcement Banner */}
      <div className="bg-stone-900 text-stone-300 text-[11px] font-medium tracking-widest uppercase py-2 px-4 text-center flex items-center justify-center gap-4 sm:gap-6 border-b border-stone-800">
        <span className="flex items-center gap-1.5">
          <Truck className="w-3.5 h-3.5 text-amber-400" />
          <span>Complimentary Express Shipping on $70+</span>
        </span>
        <span className="hidden md:inline text-stone-600">•</span>
        <span className="hidden md:flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
          <span>30-Day Risk-Free Desk Trial</span>
        </span>
        <span className="hidden lg:inline text-stone-600">•</span>
        <span className="hidden lg:flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Natural Merino Wool & Portuguese Cork</span>
        </span>
      </div>

      {/* Main Navigation Bar */}
      <nav className="glass-panel border-b border-stone-200/80 shadow-xs px-4 sm:px-8 py-4 flex items-center justify-between">
        {/* Elegant KULTRA Studio Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-stone-900 text-stone-50 border border-stone-700/80 flex items-center justify-center font-serif text-lg font-bold shadow-sm transition-transform group-hover:scale-105">
            K
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-[0.25em] text-lg sm:text-xl font-bold uppercase text-stone-900 leading-none">
              KULTRA <span className="font-sans font-light text-stone-500 text-xs tracking-wider">STUDIO</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-stone-500 font-semibold mt-1">
              Natural Desk Surfaces
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-wider text-stone-600">
          <a href="#hero" className="hover:text-stone-900 transition-colors py-1">
            Overview
          </a>
          <a href="#materials" className="hover:text-stone-900 transition-colors py-1">
            Materials & Anatomy
          </a>
          <a href="#specs" className="hover:text-stone-900 transition-colors py-1">
            Specifications
          </a>
          <a href="#reviews" className="hover:text-stone-900 transition-colors py-1">
            Reviews (128)
          </a>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-block text-[11px] font-semibold text-stone-500 bg-stone-100 border border-stone-200 px-2.5 py-1 rounded-full uppercase tracking-wider">
            USD $
          </span>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCartOpen(true)}
            className="relative bg-stone-900 text-stone-50 p-2.5 rounded-xl hover:bg-stone-800 transition-colors shadow-sm flex items-center gap-2 px-3.5"
            aria-label="Open Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-medium hidden sm:inline tracking-wider">CART</span>
            {totalQuantity > 0 && (
              <span className="bg-amber-400 text-stone-950 font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center -ml-0.5 shadow-sm">
                {totalQuantity}
              </span>
            )}
          </motion.button>
        </div>
      </nav>
    </header>
  );
}
