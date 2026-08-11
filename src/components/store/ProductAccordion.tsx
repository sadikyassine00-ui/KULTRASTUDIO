"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles, ShieldCheck, Layers, RefreshCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { trackExpandAccordion } from "@/lib/analytics";

interface AccordionItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string;
}

export function ProductAccordion() {
  const [openItems, setOpenItems] = useState<string[]>(["item-1", "item-2"]);

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
      title: "How do I clean and care for Merino Wool?",
      icon: <Sparkles className="w-4 h-4 text-amber-700" />,
      content:
        "100% Australian Merino Wool naturally contains lanolin, making it inherently water-repellent and stain-resistant. For daily maintenance, simply wipe away dust or crumbs with a dry micro-fiber cloth or soft brush. For liquid spills (coffee, water, tea), dab immediately with a dry cloth—do not rub. For deeper spots, spot-clean gently using cool water and a mild wool-safe detergent, then lay flat to air dry."
    },
    {
      id: "item-2",
      title: "Will this desk mat slide or curl on my desk?",
      icon: <ShieldCheck className="w-4 h-4 text-amber-700" />,
      content:
        "No. The underside of every KULTRA desk mat is engineered with a high-density, non-toxic micro-grip dot matrix that anchors firmly to wood, glass, metal, and laminate surfaces. The solid 3.0mm felt thickness gives it structural weight so it unrolls and lays flat within 1-2 hours out of the box with zero persistent corner curling."
    },
    {
      id: "item-3",
      title: "Is it suitable for mechanical keyboards and optical mice?",
      icon: <Layers className="w-4 h-4 text-amber-700" />,
      content:
        "Yes. The high-density 3mm felt provides natural acoustic sound-dampening, eliminating the hollow thock and desk echo during typing. Optical and laser sensors track effortlessly across the dense wool fibers."
    },
    {
      id: "item-4",
      title: "What are your shipping rates and 30-day desk trial terms?",
      icon: <RefreshCcw className="w-4 h-4 text-amber-700" />,
      content:
        "All US orders receive complimentary standard shipping (8-13 business days delivery). Every order is backed by a 30-day risk-free workspace trial. If you are not completely satisfied, return it for a 100% full refund with prepaid US return shipping."
    }
  ];

  return (
    <section
      id="faq-care-specifications"
      aria-label="Care & Product FAQ"
      className="py-16 px-4 sm:px-8 max-w-4xl mx-auto border-t border-stone-200/80"
    >
      <div className="text-center mb-10">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-800 bg-amber-100/90 border border-amber-200 px-3.5 py-1 rounded-full inline-block mb-3">
          Care & Performance Guide
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
          Frequently Asked Questions
        </h2>
        <p className="text-stone-600 text-xs sm:text-sm mt-2 max-w-xl mx-auto leading-relaxed">
          Everything you need to know about 100% Australian Merino wool care, surface stability, and acoustic keyboard dampening.
        </p>
      </div>

      <div className="space-y-3.5">
        {items.map((item) => {
          const isOpen = openItems.includes(item.id);
          const buttonId = `accordion-button-${item.id}`;
          const contentId = `accordion-content-${item.id}`;

          return (
            <div
              key={item.id}
              className="glass-card rounded-2xl border border-stone-200/80 overflow-hidden transition-all shadow-2xs"
            >
              <button
                id={buttonId}
                type="button"
                onClick={() => toggleItem(item.id, item.title)}
                aria-expanded={isOpen}
                aria-controls={contentId}
                className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left hover:bg-stone-100/60 focus:outline-none focus:ring-2 focus:ring-amber-500/50 rounded-2xl transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-serif font-bold text-sm sm:text-base text-stone-900 leading-snug">
                    {item.title}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-stone-900" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-5 pt-1 border-t border-stone-200/50 ml-11 text-xs sm:text-sm text-stone-600 leading-relaxed">
                      <p>{item.content}</p>
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
