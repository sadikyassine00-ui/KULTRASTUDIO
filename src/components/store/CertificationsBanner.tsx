"use client";

import React from "react";
import { ShieldCheck, Award, Leaf, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function CertificationsBanner() {
  const certs = [
    {
      title: "OEKO-TEX® Standard 100",
      subtitle: "Tested Toxic-Free",
      description: "Tested free from pesticides, heavy metals, or harsh chemical dyes. Safe for direct skin contact and long daily work hours.",
      icon: <Award className="w-6 h-6 text-amber-400" />,
      tag: "OEKO-TEX 100"
    },
    {
      title: "Responsible Wool Standard (RWS)",
      subtitle: "Humane Farm Sourcing",
      description: "Sheared virgin Australian Merino wool sourced from organic sheep farms adhering to humane land and animal welfare standards.",
      icon: <Leaf className="w-6 h-6 text-amber-400" />,
      tag: "RWS Wool"
    },
    {
      title: "Zero-Slide Micro-Grip Backing",
      subtitle: "Precision Anti-Slip Matrix",
      description: "Precision anti-slip dot matrix applied to the underside. Grips solid wood, glass, and standing desks securely without residue.",
      icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
      tag: "Micro-Grip"
    },
    {
      title: "Plastic-Free Packaging",
      subtitle: "100% Recyclable Delivery",
      description: "Shipped rolled in unbleached paper tubes with natural hemp twine. Zero plastic film or poly mailer bags.",
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      tag: "Zero Plastic"
    }
  ];

  return (
    <section aria-label="Material Certifications" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-stone-200/80">
      <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden border border-stone-800">
        {/* Background Radial Lighting */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-amber-600/5 rounded-full blur-2xl pointer-events-none" />

        {/* Section Header */}
        <div className="relative z-10 max-w-3xl mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-400 bg-stone-800/90 border border-stone-700/80 px-3.5 py-1 rounded-full inline-block mb-3">
            Material Standards
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Certified Organic Materials
          </h2>
          <p className="text-base text-stone-300 mt-3 leading-relaxed">
            Tested and certified for animal welfare, human health, and precision workspace ergonomics.
          </p>
        </div>

        {/* 4-Column Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {certs.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-stone-800/90 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-stone-700/80 shadow-md flex flex-col justify-between group hover:border-amber-500/40 hover:bg-stone-800 transition-all"
            >
              <div>
                {/* Header Badge & Dark Container */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-stone-900 border border-stone-700/90 flex items-center justify-center shadow-inner group-hover:border-amber-400/50 transition-colors">
                    {c.icon}
                  </div>

                  <span className="text-[10px] font-semibold text-amber-300 tracking-wider bg-stone-950 px-2.5 py-1 rounded-full border border-stone-800">
                    {c.tag}
                  </span>
                </div>

                {/* Card Title & Subtitle */}
                <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-100 group-hover:text-white transition-colors leading-snug">
                  {c.title}
                </h3>
                <p className="text-xs font-semibold text-amber-400 mt-1">
                  {c.subtitle}
                </p>
                <p className="text-xs text-stone-300 mt-3 leading-relaxed">
                  {c.description}
                </p>
              </div>

              {/* Bottom Seal */}
              <div className="mt-8 pt-4 border-t border-stone-700/60 flex items-center gap-2 text-xs font-semibold text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Verified Independent Testing</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
