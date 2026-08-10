"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, VolumeX, ZoomIn, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { trackViewProductImage } from "@/lib/analytics";

export interface GalleryImage {
  url: string;
  altText: string;
}

export const KULTRA_PRODUCT_IMAGES: GalleryImage[] = [
  {
    url: "/images/products/kultra-australian-merino-wool-desk-mat-ash-gray.webp",
    altText: "100% Australian Merino Wool Desk Mat in Light Ash Grey on a modern wooden desk with mechanical keyboard"
  },
  {
    url: "/images/products/kultra-3mm-solid-wool-felt-texture-close-up.webp",
    altText: "Macro close-up of 3.0mm solid Australian Merino wool felt weave showing raw precision-cut edge"
  },
  {
    url: "/images/products/kultra-desk-mat-anti-slip-micro-grip-dot-backing.webp",
    altText: "Underside corner of KULTRA Studio desk mat flipped showing anti-slip micro-grip dot backing on wood surface"
  },
  {
    url: "/images/products/kultra-wool-desk-pad-dimensions-keyboard-mouse-setup.webp",
    altText: "Overhead view of 900mm x 400mm wool desk pad showing scale with mechanical keyboard, mouse, and workspace setup"
  },
  {
    url: "/images/products/kultra-merino-desk-mat-features-acoustic-dampening.webp",
    altText: "Infographic highlighting KULTRA Studio desk mat key features including -14dB acoustic dampening and 3mm solid felt"
  },
  {
    url: "/images/products/kultra-desk-mat-dark-charcoal-light-ash-grey.webp",
    altText: "KULTRA Studio Australian Merino Wool Desk Mats in Dark Charcoal and Light Ash Grey side-by-side"
  }
];

interface ProductGalleryProps {
  images?: GalleryImage[];
  activeImageIndex?: number;
  onSelectImage?: (index: number) => void;
}

export function ProductGallery({
  images = KULTRA_PRODUCT_IMAGES,
  activeImageIndex: externalActiveIndex,
  onSelectImage
}: ProductGalleryProps) {
  const [internalActiveIndex, setInternalActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activeIndex = externalActiveIndex !== undefined ? externalActiveIndex : internalActiveIndex;
  const currentImage = images[activeIndex] || images[0];

  const handleThumbnailClick = (idx: number) => {
    if (onSelectImage) {
      onSelectImage(idx);
    } else {
      setInternalActiveIndex(idx);
    }
    trackViewProductImage(idx, images[idx]?.altText || `Product image ${idx + 1}`);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - left) / width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - top) / height) * 100));
    setMousePosition({ x, y });
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Full-Screen Lightbox Modal */}
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

      {/* Main Product Image Panel (Alibaba Hover Magnifier) */}
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
            priority={activeIndex === 0}
            loading={activeIndex === 0 ? "eager" : "lazy"}
            quality={90}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2 pointer-events-none z-10">
          <span className="glass-dark-card text-[11px] font-medium tracking-wide px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-stone-700/80">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>3.0mm Solid Merino Wool</span>
          </span>
          <span className="glass-panel text-stone-900 text-[11px] font-medium tracking-wide px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-stone-200/90">
            <VolumeX className="w-3.5 h-3.5 text-amber-700" />
            <span>-14dB Acoustic Dampening</span>
          </span>
        </div>

        <div className="absolute bottom-3 right-3 glass-dark-card text-[11px] font-medium px-3.5 py-1 rounded-full tracking-wide text-amber-300 border border-stone-700/80 flex items-center gap-1.5">
          <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
          <span>{isZoomed ? "Hover to Pan • Click to Enlarge" : "Zero-Slide Micro-Grip Backing"}</span>
        </div>
      </div>

      {/* 6 Thumbnails Row (Sitting Tight Side-by-Side) */}
      <div className="flex items-center gap-2 overflow-x-auto py-1">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => handleThumbnailClick(idx)}
            aria-label={`View product image ${idx + 1}`}
            className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
              activeIndex === idx
                ? "border-stone-900 shadow-md ring-2 ring-stone-900/10 scale-[1.03]"
                : "border-stone-200 opacity-75 hover:opacity-100 hover:border-stone-400"
            }`}
          >
            <Image
              src={img.url}
              alt={img.altText}
              fill
              loading="lazy"
              quality={80}
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
