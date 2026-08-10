"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Shield, Volume2, Flame } from "lucide-react";
import { motion } from "framer-motion";

export function BentoGrid() {
  const features = [
    {
      title: "3.0mm Solid Virgin Merino Wool Felt",
      subtitle: "Grade-A Australian Merino Wool",
      description: "Dense 300g/m² solid slab sheared from RWS-certified Australian sheep farms. Naturally soft to the touch, water-resistant, and anti-static.",
      image: "/images/products/kultra-3mm-solid-wool-felt-texture-close-up.webp",
      alt: "Macro close-up of 3.0mm solid Australian Merino wool felt weave showing raw precision-cut edge",
      tag: "100% Organic Wool",
      colSpan: "md:col-span-8",
      icon: <Sparkles className="w-5 h-5 text-amber-600" />
    },
    {
      title: "-14dB Acoustic Noise Dampening",
      subtitle: "Mechanical Keyboard Studio Dampening",
      description: "Dense wool fibers absorb desk reverberation and high-frequency key-switch click rattle.",
      image: "/images/products/kultra-merino-desk-mat-features-acoustic-dampening.webp",
      alt: "Infographic highlighting KULTRA Studio desk mat key features including -14dB acoustic dampening and 3mm solid felt",
      tag: "Acoustic Dampening",
      colSpan: "md:col-span-4",
      icon: <Volume2 className="w-5 h-5 text-amber-600" />
    },
    {
      title: "Zero-Slide Micro-Grip Dot Backing",
      subtitle: "Low-Profile Precision Dot Matrix",
      description: "Under-side micro-grip matrix locks down to solid wood, glass, and standing desk surfaces without adhesives.",
      image: "/images/products/kultra-desk-mat-anti-slip-micro-grip-dot-backing.webp",
      alt: "Underside corner of KULTRA Studio desk mat flipped showing anti-slip micro-grip dot backing on wood surface",
      tag: "Micro-Grip Matrix",
      colSpan: "md:col-span-6",
      icon: <Shield className="w-5 h-5 text-amber-600" />
    },
    {
      title: "Dual Launch Color Finishes",
      subtitle: "Dark Charcoal & Light Ash Grey",
      description: "Precision-dyed deep obsidian charcoal and clean Scandinavian silver ash grey tailored for modern setups.",
      image: "/images/products/kultra-desk-mat-dark-charcoal-light-ash-grey.webp",
      alt: "KULTRA Studio Australian Merino Wool Desk Mats in Dark Charcoal and Light Ash Grey side-by-side",
      tag: "Dual Launch Finishes",
      colSpan: "md:col-span-6",
      icon: <Flame className="w-5 h-5 text-amber-600" />
    }
  ];

  return (
    <section id="materials" aria-label="Material Craft & Specs" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-800 bg-amber-100/90 border border-amber-200 px-3.5 py-1 rounded-full inline-block mb-3">
          Craft & Technical Anatomy
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
          Engineered for Daily Comfort
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
          Full 3.0mm solid slab of pure Australian Merino wool felt paired with an anti-slip micro-grip dot backing.
        </p>
      </div>

      {/* Asymmetrical Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className={`${item.colSpan} glass-card rounded-3xl overflow-hidden border border-stone-200/80 p-6 sm:p-8 flex flex-col justify-between group shadow-sm`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shadow-2xs">
                  {item.icon}
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-full border border-amber-200/60">
                  {item.tag}
                </span>
              </div>

              <h3 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 group-hover:text-amber-900 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs font-semibold text-amber-800 mt-1">
                {item.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Feature Image Wrapper */}
            <div className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mt-6 border border-stone-200/80 bg-stone-100">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
