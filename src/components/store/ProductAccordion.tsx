"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles, ShieldCheck, Truck, RefreshCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { trackExpandAccordion } from "@/lib/analytics";

interface AccordionItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export function ProductAccordion() {
  const [openItems, setOpenItems] = useState<string[]>(["item-1"]);

  const toggleItem = (id: string, questionTitle: string) => {
    const isOpening = !openItems.includes(id);
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );

    if (isOpening) {
      trackExpandAccordion(questionTitle);
    }
  };

  const items: AccordionItem[] = [
    {
      id: "item-1",
      title: "Does the wool felt slide on smooth wooden or glass desks?",
      icon: <ShieldCheck className="w-4 h-4 text-amber-700" />,
      content: (
        <div className="space-y-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
          <p>
            No. Unlike standard unbacked felt pads that slip during typing, the KULTRA Merino Wool Desk Mat features an engineered micro-grip silicone dot backing.
          </p>
          <p>
            The micro-dot backing anchors firmly to solid oak, walnut, composite laminate, and tempered glass surfaces without leaving sticky residues, rubber chemical odors, or surface discoloration.
          </p>
        </div>
      )
    },
    {
      id: "item-2",
      title: "How thick is the mat and how much noise does it absorb?",
      icon: <Sparkles className="w-4 h-4 text-amber-700" />,
      content: (
        <div className="space-y-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
          <p>
            The mat is crafted from a solid 3.0mm slab of Grade-A Australian Merino wool felt (300g/m² density).
          </p>
          <p>
            This 3.0mm thickness provides optimal wrist cushioning while absorbing mechanical keyboard keystroke acoustic resonance by up to <strong>-14dB</strong>, preventing hollow desktop reverberation during intense typing.
          </p>
        </div>
      )
    },
    {
      id: "item-3",
      title: "What are your shipping rates and delivery timelines?",
      icon: <Truck className="w-4 h-4 text-amber-700" />,
      content: (
        <div className="space-y-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
          <p>
            • <strong>Free US Shipping:</strong> Automatically applied to all US orders (8-13 business days delivery).
          </p>
          <p>
            • <strong>Order Processing:</strong> Orders are processed within 1 to 2 business days and shipped in plastic-free eco paper roll tubes with full door-to-door carrier tracking.
          </p>
        </div>
      )
    },
    {
      id: "item-4",
      title: "How does the 30-Day Risk-Free Desk Trial work?",
      icon: <RefreshCcw className="w-4 h-4 text-amber-700" />,
      content: (
        <div className="space-y-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
          <p>
            Test the mat in your personal workspace for 30 full calendar days. If you are not satisfied with the acoustic dampening, wrist comfort, or finish, email support@usekultra.com for a hassle-free US return label and 100% full refund.
          </p>
        </div>
      )
    }
  ];

  return (
    <section id="faq-specifications" aria-label="Frequently Asked Questions" className="py-16 px-4 sm:px-8 max-w-4xl mx-auto border-t border-stone-200/80">
      <div className="text-center mb-10">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-800 bg-amber-100/90 border border-amber-200 px-3.5 py-1 rounded-full inline-block mb-3">
          Got Questions?
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-3">
        {items.map((item) => {
          const isOpen = openItems.includes(item.id);
          return (
            <div
              key={item.id}
              className="glass-card rounded-2xl border border-stone-200/80 overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleItem(item.id, item.title)}
                className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left hover:bg-stone-100/50 transition-colors"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-serif font-bold text-sm sm:text-base text-stone-900">
                    {item.title}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-stone-900" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-5 pt-1 border-t border-stone-200/50 ml-11">
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
