"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, VolumeX, Shield, Feather, Droplets, Leaf, Layers, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LayerDetail {
  id: string;
  layerNumber: string;
  name: string;
  material: string;
  badge: string;
  image: string;
  altText: string;
  specs: { label: string; value: string }[];
  description: string;
  benefits: string[];
}

const ANATOMY_LAYERS: LayerDetail[] = [
  {
    id: "layer-1",
    layerNumber: "Layer 1",
    name: "Virgin Australian Merino Wool",
    material: "300g/m² Non-Mulesed Merino Wool Felt",
    badge: "Soft Wool Top Surface",
    image: "/images/wool_cork_texture.png",
    altText: "KULTRA Studio 3.5mm Merino Wool and Natural Cork Layer Texture",
    specs: [
      { label: "Fiber Density", value: "300g/m² Dense Weave" },
      { label: "Acoustic Dampening", value: "-14dB Key-Switch Dampening" },
      { label: "Treatment", value: "Anti-Pilling & Water Repellent" }
    ],
    description: "Sourced from certified Australian Merino wool farms. The surface wool regulates wrist temperature, dampens keyboard echo, and feels exceptionally comfortable during long working hours.",
    benefits: [
      "Naturally anti-static and dust resistant",
      "Protects laptop aluminum bodies from desk scratches",
      "Smooth tracking surface for optical mouse sensors"
    ]
  },
  {
    id: "layer-2",
    layerNumber: "Layer 2",
    name: "High-Density Compression Core",
    material: "3.5mm Shock-Absorbing Cushion Matrix",
    badge: "Ergonomic Cushion Core",
    image: "/images/hero_desk_mat.png",
    altText: "KULTRA Studio Charcoal Merino Wool Desk Mat Cushioning Profile",
    specs: [
      { label: "Thickness", value: "3.5mm Profile" },
      { label: "Compression Method", value: "Thermal Vapor Molded" },
      { label: "Wrist Ergonomics", value: "Pressure-Distributing Cushion" }
    ],
    description: "Steam-compressed to provide subtle wrist cushioning without curling at the edges or shifting under heavy typing load.",
    benefits: [
      "Dampens mechanical keyboard desk resonance",
      "Lies flat permanently across years of daily use",
      "Protects wooden desktop finishes from heavy equipment"
    ]
  },
  {
    id: "layer-3",
    layerNumber: "Layer 3",
    name: "Portuguese Natural Cork Base",
    material: "Natural Quercus Suber Tree Bark",
    badge: "Rubber-Free Cork Grip",
    image: "/images/cork_base_detail.png",
    altText: "KULTRA Studio Natural Portuguese Cork Bark Underside Non-Slip Texture",
    specs: [
      { label: "Cork Sourcing", value: "Alentejo, Portugal" },
      { label: "Grip Rating", value: "High-Friction Non-Slip Base" },
      { label: "Harvest Method", value: "Sustainably Stripped Tree Bark" }
    ],
    description: "Sustainably harvested from living cork oak trees in Portugal. The natural cork underside locks firmly onto wood, glass, or steel desks without rubber or adhesives.",
    benefits: [
      "Free from synthetic rubber, petroleum, and chemical odors",
      "Impervious to desk spills and wood moisture",
      "Naturally hypoallergenic and antimicrobial"
    ]
  }
];

export function BentoGrid() {
  const [activeLayerId, setActiveLayerId] = useState<string>("layer-1");

  const activeLayer = ANATOMY_LAYERS.find((l) => l.id === activeLayerId) || ANATOMY_LAYERS[0];

  return (
    <section id="materials" aria-label="Material Architecture" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-stone-200/80">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-800 bg-amber-100/90 border border-amber-200 px-3.5 py-1 rounded-full">
          Three-Layer Material Craft
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight mt-3">
          Anatomy of a Desk Surface
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2.5 leading-relaxed">
          Pressed 3.5mm Merino wool felt layered directly onto natural Portuguese cork. Select a layer below to see how each material performs.
        </p>
      </div>

      {/* Layer Toggle Selector Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
        {ANATOMY_LAYERS.map((layer) => {
          const isActive = activeLayerId === layer.id;
          return (
            <button
              key={layer.id}
              onClick={() => setActiveLayerId(layer.id)}
              aria-label={`Inspect ${layer.layerNumber}: ${layer.name}`}
              className={`p-5 rounded-2xl text-left border-2 transition-all flex flex-col justify-between ${
                isActive
                  ? "bg-stone-900 text-stone-50 border-stone-900 shadow-xl scale-[1.02]"
                  : "bg-white text-stone-800 border-stone-200 hover:border-stone-400 hover:bg-stone-50"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-semibold tracking-wider uppercase ${isActive ? "text-amber-400" : "text-amber-700"}`}>
                    {layer.layerNumber}
                  </span>
                  {isActive && (
                    <span className="bg-amber-400 text-stone-950 text-[10px] font-semibold px-2 py-0.5 rounded">
                      Selected
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-lg font-bold leading-tight">{layer.name}</h3>
              </div>
              <p className={`text-xs mt-3 ${isActive ? "text-stone-300" : "text-stone-500"}`}>
                {layer.badge}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Layer Deep-Dive Showcase Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeLayer.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left Column: Layer Image Showcase */}
          <div className="lg:col-span-6 relative w-full h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border border-stone-800 shadow-inner">
            <Image
              src={activeLayer.image}
              alt={activeLayer.altText}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute top-4 left-4 glass-dark-card text-[11px] font-semibold text-amber-300 px-3.5 py-1 rounded-full border border-stone-700">
              {activeLayer.layerNumber}: {activeLayer.badge}
            </div>
          </div>

          {/* Right Column: Layer Specifications & Benefits */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <div>
              <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
                {activeLayer.material}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                {activeLayer.name}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-3 leading-relaxed">
                {activeLayer.description}
              </p>
            </div>

            {/* Spec Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-stone-950 p-4 rounded-xl border border-stone-800 text-xs">
              {activeLayer.specs.map((spec, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider">{spec.label}</span>
                  <span className="font-semibold text-amber-300 text-xs mt-0.5">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Benefit List */}
            <div className="space-y-2 pt-2 border-t border-stone-800">
              {activeLayer.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
