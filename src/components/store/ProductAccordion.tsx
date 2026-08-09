"use client";

import React, { useState } from "react";
import { ChevronDown, Ruler, Globe, Truck, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { trackExpandAccordion } from "@/lib/analytics";

interface AccordionItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export function ProductAccordion() {
  const [openId, setOpenId] = useState<string | null>("specs");

  const toggle = (id: string, title: string) => {
    const nextId = openId === id ? null : id;
    setOpenId(nextId);
    if (nextId) {
      trackExpandAccordion(title);
    }
  };

  const items: AccordionItem[] = [
    {
      id: "specs",
      title: "Dimensions & Weights",
      icon: <Ruler className="w-4 h-4 text-amber-700" />,
      content: (
        <div className="space-y-3 text-xs text-stone-600">
          <div className="grid grid-cols-2 gap-2 py-1.5 border-b border-stone-200">
            <span className="font-semibold text-stone-900">Medium Size:</span>
            <span>31.5" × 11.8" × 0.12" (80 × 30 cm × 3.0mm)</span>
          </div>
          <div className="grid grid-cols-2 gap-2 py-1.5 border-b border-stone-200">
            <span className="font-semibold text-stone-900">Large Size:</span>
            <span>35.4" × 15.7" × 0.12" (90 × 40 cm × 3.0mm)</span>
          </div>
          <div className="grid grid-cols-2 gap-2 py-1.5 border-b border-stone-200">
            <span className="font-semibold text-stone-900">Total Weight:</span>
            <span>Medium: 320g | Large: 460g</span>
          </div>
          <div className="grid grid-cols-2 gap-2 py-1.5 border-b border-stone-200">
            <span className="font-semibold text-stone-900">Wool Density:</span>
            <span>300g/m² Solid Merino Wool Felt</span>
          </div>
          <div className="grid grid-cols-2 gap-2 py-1.5">
            <span className="font-semibold text-stone-900">Backing Tech:</span>
            <span>Zero-Slide Micro-Grip Dot Matrix</span>
          </div>
        </div>
      )
    },
    {
      id: "materials",
      title: "Material Sourcing & Production",
      icon: <Globe className="w-4 h-4 text-amber-700" />,
      content: (
        <p className="text-xs text-stone-600 leading-relaxed">
          We source Grade-A Merino Wool from non-mulesed Australian sheep farms certified under the Responsible Wool Standard (RWS). The 3.0mm solid wool felt slab is precision heat-set with an anti-slip micro-grip dot matrix backing for zero desktop sliding.
        </p>
      )
    },
    {
      id: "shipping",
      title: "Shipping, Returns & 30-Day Trial",
      icon: <Truck className="w-4 h-4 text-amber-700" />,
      content: (
        <div className="space-y-2 text-xs text-stone-600 leading-relaxed">
          <p>• <strong>Free Shipping:</strong> Automatically applied to orders over $70.00 USD (2–4 business days delivery).</p>
          <p>• <strong>30-Day Trial:</strong> Work with the mat on your desk for 30 days. If it doesn't fit your routine, return it for a full refund.</p>
          <p>• <strong>Lifetime Guarantee:</strong> Covers edge fraying or micro-grip dot backing delamination for life.</p>
        </div>
      )
    },
    {
      id: "care",
      title: "Care & Cleaning Guidelines",
      icon: <Sparkles className="w-4 h-4 text-amber-700" />,
      content: (
        <div className="space-y-2 text-xs text-stone-600 leading-relaxed">
          <p>• <strong>Daily Maintenance:</strong> Clean surface dust gently with a lint roller or light vacuum nozzle.</p>
          <p>• <strong>Liquid Spills:</strong> Blot immediately with a dry paper towel or damp cloth. Do not rub vigorously.</p>
          <p>• <strong>Deep Spot Clean:</strong> Hand spot-clean using mild wool soap and tepid water. Air dry flat away from direct heat.</p>
        </div>
      )
    }
  ];

  return (
    <section id="specs" aria-label="Product Accordions" className="py-16 px-4 sm:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-800 bg-amber-100/90 border border-amber-200 px-3 py-1 rounded-full">
          Product Specifications
        </span>
        <h2 className="font-serif text-3xl font-bold text-stone-900 tracking-tight mt-3">
          Dimensions & Sourcing
        </h2>
      </div>

      {/* Accordions Container */}
      <div className="space-y-3">
        {items.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="glass-card rounded-2xl border border-stone-200/80 overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggle(item.id, item.title)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-stone-900 text-base sm:text-lg hover:bg-stone-100/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span>{item.title}</span>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 text-stone-500"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-6 pt-1 border-t border-stone-200/60">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
