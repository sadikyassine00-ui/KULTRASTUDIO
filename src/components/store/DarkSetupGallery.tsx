"use client";

import React from "react";
import Image from "next/image";
import { Star, Sparkles, Monitor } from "lucide-react";
import { motion } from "framer-motion";

export function DarkSetupGallery() {
  return (
    <section aria-label="Customer Workspace Gallery" className="bg-[#121212] text-stone-100 py-24 border-y border-stone-800/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-400 bg-stone-900 border border-stone-800 px-3.5 py-1 rounded-full inline-block">
              Real Workspace Setups
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3">
              In Daily Use
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-2 max-w-xl">
              Photographs from software engineers, audio designers, and writers using KULTRA Studio 3.0mm Merino mats on their desks.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-stone-900/90 border border-stone-800 px-4 py-3 rounded-2xl shrink-0">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <div className="text-xs">
              <div className="font-semibold text-stone-100 tracking-[0.2em]">#KULTRASTUDIO</div>
              <div className="text-stone-400 text-[11px]">Shared Desk Photos</div>
            </div>
          </div>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Main Studio Photo */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="md:col-span-7 bg-stone-900/90 rounded-3xl overflow-hidden border border-stone-800 flex flex-col justify-between group shadow-2xl"
          >
            <div className="relative w-full h-80 sm:h-96 overflow-hidden">
              <Image
                src="/images/dark_studio_setup.png"
                alt="KULTRA Studio Charcoal 100% Merino Wool Desk Mat with micro-grip backing"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 glass-dark-card text-xs font-semibold text-amber-300 px-3 py-1 rounded-full border border-stone-800">
                Charcoal Merino Wool
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-1 text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                "Dampens mechanical keyboard key clack noticeably."
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 mt-2 leading-relaxed">
                "I work in a quiet home studio. The wool absorbs keypress resonance, while the micro-grip backing stays firmly locked to my wooden desk without sliding."
              </p>

              <div className="mt-4 pt-4 border-t border-stone-800 flex items-center justify-between text-xs font-semibold text-stone-400">
                <span>Marcus Vance</span>
                <span className="text-amber-400">Software Architect, Seattle</span>
              </div>
            </div>
          </motion.div>

          {/* Cards 2 & 3: Secondary Photos & Specs */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="bg-stone-900/90 rounded-3xl overflow-hidden border border-stone-800 p-6 flex flex-col justify-between group shadow-xl"
            >
              <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-4 border border-stone-800">
                <Image
                  src="/images/audio_keyboard_setup.png"
                  alt="KULTRA Studio Heather Grey 100% Merino Wool Desk Mat overhead view on solid desk"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 glass-dark-card text-xs font-semibold text-amber-300 px-3 py-1 rounded-full border border-stone-800">
                  Heather Grey Finish
                </div>
              </div>

              <div>
                <h3 className="font-serif font-bold text-lg text-white">
                  Tactile Daily Comfort
                </h3>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                  Dense 3.0mm wool fiber provides smooth optical mouse tracking while protecting solid wood desk surfaces from scratches.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs font-semibold text-amber-400">
                <span>RWS Merino Wool</span>
                <span>3.0mm Solid Slab</span>
              </div>
            </motion.div>

            {/* Rating Box */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="bg-gradient-to-br from-stone-900 to-stone-950 rounded-3xl p-6 border border-stone-800 flex items-center justify-between shadow-xl"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
                  <Monitor className="w-4 h-4" />
                  <span>Desk Setup Recommendation</span>
                </div>
                <h3 className="font-serif font-bold text-white text-base">
                  4.9 / 5.0 Rating Across 128 Reviews
                </h3>
                <p className="text-xs text-stone-400">
                  Based on verified customer desk setups.
                </p>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-amber-400 text-stone-950 font-bold flex items-center justify-center text-lg shrink-0 font-serif">
                ★
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
