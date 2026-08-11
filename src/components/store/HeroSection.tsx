"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Star,
  ShieldCheck,
  Sparkles,
  VolumeX,
  Layers,
  ArrowRight,
  ZoomIn,
  X
} from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { motion, AnimatePresence } from "framer-motion";
import { VariantSelector } from "@/components/VariantSelector";
import {
  trackAddToCart,
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
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const images = product.images;

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    if (color === "Dark Charcoal" || color === "Charcoal") {
      setActiveImageIndex(3);
    } else {
      setActiveImageIndex(0);
    }
  };

  const handleSizeChange = (size: 'Medium' | 'Large') => {
    setSelectedSize(size);
  };

  const handleImageClick = (idx: number, altText: string) => {
    setActiveImageIndex(idx);
    trackViewProductImage(idx, altText);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - left) / width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - top) / height) * 100));
    setMousePosition({ x, y });
  };

  const handleAddToCart = () => {
    addToCart();
    trackAddToCart({
      name: "100% Merino Wool Desk Mat",
      price: parseFloat(activeVariant.price.amount),
      variant: `${selectedColor} / ${selectedSize}`
    });
  };

  const currentImage = images[activeImageIndex] || images[0];

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

      {/* Full-Screen Image Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 text-stone-300 hover:text-white bg-stone-900/80 p-3 rounded-full border border-stone-700 z-50 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              className="relative w-full max-w-5xl aspect-square max-h-[80vh] rounded-3xl overflow-hidden border border-stone-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentImage.url}
                alt={currentImage.altText}
                fill
                quality={90}
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2-Column Side-by-Side Compact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Product Showcase Gallery (6 WebP Images) */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          {/* Main Showcase Image (Alibaba Precision Magnifier Zoom Panel - LCP Optimized) */}
          <div
            className="relative w-full aspect-square max-h-[420px] rounded-3xl overflow-hidden bg-stone-200/80 border border-stone-300/80 shadow-lg group cursor-zoom-in select-none"
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            onMouseMove={handleMouseMove}
            onClick={() => setIsLightboxOpen(true)}
          >
            <div
              className="w-full h-full relative transition-transform duration-100 ease-out"
              style={{
                transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                transform: isZoomed ? "scale(2.2)" : "scale(1)"
              }}
            >
              <Image
                src={currentImage.url}
                alt={currentImage.altText}
                fill
                priority={activeImageIndex === 0}
                fetchPriority={activeImageIndex === 0 ? "high" : "auto"}
                loading={activeImageIndex === 0 ? "eager" : "lazy"}
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

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

            {/* Hover Magnifier / Click Hint Badge */}
            <div className="absolute bottom-3 right-3 glass-dark-card text-[11px] font-medium px-3.5 py-1 rounded-full tracking-wide text-amber-300 border border-stone-700/80 flex items-center gap-1.5">
              <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
              <span>{isZoomed ? "Hover to Pan • Click to Enlarge" : "Zero-Slide Micro-Grip Backing"}</span>
            </div>
          </div>

          {/* Gallery Thumbnails (6 WebP Items Sitting Tight Side-by-Side) */}
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => handleImageClick(idx, img.altText)}
                aria-label={`View photo ${idx + 1} of 100% Merino Wool Desk Mat`}
                className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                  activeImageIndex === idx
                    ? "border-stone-900 shadow-md ring-2 ring-stone-900/10 scale-[1.03]"
                    : "border-stone-200 opacity-75 hover:opacity-100 hover:border-stone-400"
                }`}
              >
                <Image
                  src={img.url}
                  alt={img.altText}
                  fill
                  loading="lazy"
                  quality={75}
                  sizes="80px"
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

            {/* 2. Main Title (Sole H1 on Page) */}
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
                <ShieldCheck className="w-3.5 h-3.5" /> In Stock • 8-13 Days Delivery
              </span>
            </div>

            {/* 4. 1-Sentence Value Proposition */}
            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              Full 3.0mm solid slab of pure Australian Merino wool felt with a low-profile zero-slide micro-grip dot backing. Dampens key sound and protects desk wood.
            </p>

            {/* 5. Variant Selector Component */}
            <VariantSelector
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              onSelectColor={handleColorChange}
              onSelectSize={handleSizeChange}
            />

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

              {/* Single Line Small-Caps Buy Button Micro-Copy */}
              <p className="text-[10px] uppercase font-semibold text-stone-500 text-center tracking-wider py-1">
                Complimentary US Shipping (8-13 Business Days) | 30-Day Risk-Free Trial
              </p>

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
