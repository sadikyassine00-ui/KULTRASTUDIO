"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Star,
  ShieldCheck,
  Check,
  Sparkles,
  VolumeX,
  Layers,
  ArrowRight
} from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  trackAddToCart,
  trackSelectVariant,
  trackViewProductImage,
  trackClickReviewsAnchor,
  trackClickTrustBadge
} from "@/lib/analytics";

export function HeroSection() {
  const {
    product,
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
    activeVariant,
    addToCart,
    showAddedToast
  } = useStore();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = product.images;

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    trackSelectVariant(color, selectedSize);
    if (color === "Heather Grey") {
      setActiveImageIndex(2);
    } else {
      setActiveImageIndex(0);
    }
  };

  const handleSizeChange = (size: 'Medium' | 'Large') => {
    setSelectedSize(size);
    trackSelectVariant(selectedColor, size);
  };

  const handleImageClick = (idx: number, altText: string) => {
    setActiveImageIndex(idx);
    trackViewProductImage(idx, altText);
  };

  const handleAddToCart = () => {
    addToCart();
    trackAddToCart({
      name: "100% Merino Wool Desk Mat",
      price: parseFloat(activeVariant.price.amount),
      variant: `${selectedColor} / ${selectedSize}`
    });
  };

  return (
    <section id="hero" aria-label="Product Showcase" className="relative pt-2 pb-6 md:py-4 lg:py-6 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Toast alert on add to cart */}
      <AnimatePresence>
        {showAddedToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-4 sm:right-8 z-50 bg-stone-900 text-stone-50 px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-stone-700"
          >
            <div className="w-7 h-7 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center font-bold text-sm">
              ✓
            </div>
            <div>
              <p className="text-xs font-semibold">Added to Cart</p>
              <p className="text-[11px] text-stone-400">
                {activeVariant.colorName} • {activeVariant.size} (${activeVariant.price.amount})
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2-Column Side-by-Side Compact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Product Showcase Gallery */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          {/* Main Showcase Image */}
          <div
            className="relative w-full aspect-[4/3] max-h-[360px] lg:max-h-[390px] rounded-3xl overflow-hidden bg-stone-200/80 border border-stone-300/80 shadow-lg group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full h-full relative"
            >
              <Image
                src={images[activeImageIndex]?.url || images[0].url}
                alt={images[activeImageIndex]?.altText ? `KULTRA Studio ${images[activeImageIndex].altText}` : "KULTRA Studio 100% Merino Wool Desk Mat"}
                fill
                priority
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
            </motion.div>

            {/* Overlapping Specification Badges */}
            <div className="absolute top-3 left-3 flex flex-wrap gap-2 pointer-events-none z-10">
              <span className="glass-dark-card text-[11px] font-medium tracking-wide px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-stone-700/80">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>3.0mm Solid Merino Wool</span>
              </span>
              <span className="glass-panel text-stone-900 text-[11px] font-medium tracking-wide px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-stone-200/90">
                <VolumeX className="w-3.5 h-3.5 text-amber-700" />
                <span>-14dB Keyboard Noise Dampening</span>
              </span>
            </div>

            <div className="absolute bottom-3 right-3 glass-dark-card text-[11px] font-medium px-3 py-1 rounded-full tracking-wide text-amber-300 border border-stone-700/80">
              Zero-Slide Micro-Grip Backing
            </div>
          </div>

          {/* Gallery Thumbnails */}
          <div className="grid grid-cols-4 gap-2.5">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => handleImageClick(idx, img.altText)}
                aria-label={`View photo ${idx + 1} of 100% Merino Wool Desk Mat`}
                className={`relative aspect-[4/3] max-h-16 rounded-xl overflow-hidden border-2 transition-all ${
                  activeImageIndex === idx
                    ? "border-stone-900 shadow-md ring-2 ring-stone-900/10 scale-[1.02]"
                    : "border-stone-200 opacity-70 hover:opacity-100 hover:border-stone-400"
                }`}
              >
                <Image
                  src={img.url}
                  alt={`KULTRA Studio Desk Mat view ${idx + 1} - ${img.altText}`}
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 25vw, 15vw"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Packed Buy Box Container */}
        <div className="lg:col-span-5">
          <div className="bg-stone-100/90 backdrop-blur-md border border-stone-300/80 p-5 sm:p-6 rounded-3xl shadow-xl flex flex-col gap-3">
            {/* 1. Category Pill + Social Rating Stars */}
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-800 bg-amber-100/90 border border-amber-200 px-2.5 py-0.5 rounded-full">
                Solid Merino Wool Surface
              </span>
              <a
                href="#reviews"
                onClick={() => trackClickReviewsAnchor()}
                className="flex items-center gap-1.5 text-xs hover:opacity-80 transition-opacity"
              >
                <div className="flex items-center text-amber-500" aria-label="Rating 4.9 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-stone-900">4.9</span>
                <span className="text-stone-500 text-[11px] underline">(128 reviews)</span>
              </a>
            </div>

            {/* 2. Main Title */}
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
              100% Merino Wool Desk Mat
            </h1>

            {/* 3. Price + In-Stock Status Badge */}
            <div className="flex items-center justify-between gap-3 pt-0.5 border-t border-stone-200/80">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl font-bold text-stone-900 tracking-tight">
                  ${activeVariant.price.amount}
                </span>
                <span className="text-xs text-stone-400 line-through font-medium">
                  ${product.compareAtPrice?.amount}
                </span>
              </div>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> In Stock • Ships in 24h
              </span>
            </div>

            {/* 4. 1-Sentence Value Proposition */}
            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              Full 3.0mm solid slab of pure Australian Merino wool felt with a low-profile zero-slide micro-grip dot backing. Dampens key sound and protects desk wood.
            </p>

            {/* 5. Variant Selectors */}
            <div className="space-y-2 pt-1 border-t border-stone-200/80">
              {/* Finish Swatches */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="uppercase tracking-wider text-stone-700">
                    Finish: <span className="text-stone-900 font-bold">{selectedColor}</span>
                  </span>
                  <span className="text-stone-500 text-[10px] uppercase">Undyed Wool</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleColorChange("Charcoal")}
                    className={`p-2.5 rounded-xl border-2 text-left flex items-center gap-2.5 transition-all ${
                      selectedColor === "Charcoal"
                        ? "border-stone-900 bg-stone-900 text-stone-50 shadow-xs"
                        : "border-stone-200 bg-white text-stone-800 hover:border-stone-300"
                    }`}
                  >
                    <div className="w-3.5 h-3.5 rounded-full bg-[#262626] border border-stone-400 shadow-xs flex items-center justify-center shrink-0">
                      {selectedColor === "Charcoal" && <Check className="w-2.5 h-2.5 text-stone-100" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold leading-tight">Charcoal Felt</div>
                      <div className={`text-[10px] ${selectedColor === "Charcoal" ? "text-stone-300" : "text-stone-500"}`}>
                        Obsidian tone
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleColorChange("Heather Grey")}
                    className={`p-2.5 rounded-xl border-2 text-left flex items-center gap-2.5 transition-all ${
                      selectedColor === "Heather Grey"
                        ? "border-stone-900 bg-stone-900 text-stone-50 shadow-xs"
                        : "border-stone-200 bg-white text-stone-800 hover:border-stone-300"
                    }`}
                  >
                    <div className="w-3.5 h-3.5 rounded-full bg-[#8C8C8C] border border-stone-400 shadow-xs flex items-center justify-center shrink-0">
                      {selectedColor === "Heather Grey" && <Check className="w-2.5 h-2.5 text-stone-100" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold leading-tight">Heather Grey</div>
                      <div className={`text-[10px] ${selectedColor === "Heather Grey" ? "text-stone-300" : "text-stone-500"}`}>
                        Silver wool
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Dimensions Swatches */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="uppercase tracking-wider text-stone-700">
                    Dimensions: <span className="text-stone-900 font-bold">{selectedSize}</span>
                  </span>
                  <span className="text-amber-800 font-medium text-[10px]">Standing Desks</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleSizeChange("Medium")}
                    className={`p-2.5 rounded-xl border-2 text-left transition-all ${
                      selectedSize === "Medium"
                        ? "border-stone-900 bg-stone-900 text-stone-50 shadow-xs"
                        : "border-stone-200 bg-white text-stone-800 hover:border-stone-300"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold">Medium ($80.00)</span>
                      {selectedSize === "Medium" && <Check className="w-3 h-3 text-amber-400" />}
                    </div>
                    <div className={`text-[10px] font-mono mt-0.5 ${selectedSize === "Medium" ? "text-stone-300" : "text-stone-500"}`}>
                      80 × 30 cm
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSizeChange("Large")}
                    className={`p-2.5 rounded-xl border-2 text-left transition-all ${
                      selectedSize === "Large"
                        ? "border-stone-900 bg-stone-900 text-stone-50 shadow-xs"
                        : "border-stone-200 bg-white text-stone-800 hover:border-stone-300"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold">Large ($95.00)</span>
                      {selectedSize === "Large" && <Check className="w-3 h-3 text-amber-400" />}
                    </div>
                    <div className={`text-[10px] font-mono mt-0.5 ${selectedSize === "Large" ? "text-stone-300" : "text-stone-500"}`}>
                      90 × 40 cm
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* 6. Primary Add to Cart CTA Button */}
            <div className="pt-1 flex flex-col gap-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleAddToCart}
                className="w-full bg-stone-900 hover:bg-stone-800 text-stone-50 font-bold py-3.5 px-5 rounded-xl shadow-lg transition-all flex items-center justify-between group border border-stone-800"
                id="hero-add-to-cart-btn"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-xs sm:text-sm uppercase tracking-wider font-semibold">Add to Cart</span>
                  <span className="bg-stone-800 text-stone-300 text-xs px-2.5 py-0.5 rounded font-mono">
                    ${activeVariant.price.amount}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-amber-400 group-hover:translate-x-1 transition-transform font-bold">
                  <span>CHECKOUT</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.button>

              {/* 7. Three Micro Trust Badges Line */}
              <div className="grid grid-cols-3 gap-1.5 text-center text-xs font-semibold text-stone-800 bg-amber-50/90 border border-amber-200/90 py-2 px-2.5 rounded-xl shadow-2xs">
                <button
                  type="button"
                  onClick={() => trackClickTrustBadge("30-Day Trial")}
                  className="flex items-center justify-center gap-1 hover:opacity-80 transition-opacity"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>30-Day Trial</span>
                </button>
                <button
                  type="button"
                  onClick={() => trackClickTrustBadge("Free Shipping")}
                  className="flex items-center justify-center gap-1 border-x border-amber-200 px-1 hover:opacity-80 transition-opacity"
                >
                  <Layers className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>Free Shipping</span>
                </button>
                <button
                  type="button"
                  onClick={() => trackClickTrustBadge("Anti-Pilling")}
                  className="flex items-center justify-center gap-1 hover:opacity-80 transition-opacity"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>Anti-Pilling</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
