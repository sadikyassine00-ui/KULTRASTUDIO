"use client";

import React from "react";
import { Layers, ShieldCheck, Sparkles } from "lucide-react";

export function ProductDetailsSpec() {
  return (
    <section className="product-details-spec py-16 px-4 sm:px-8 max-w-5xl mx-auto border-t border-stone-200/80">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-800 bg-amber-100/90 border border-amber-200 px-3.5 py-1 rounded-full inline-block mb-3">
          Material Engineering
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
          Engineered Performance & Wool Care
        </h2>
        <p className="text-stone-600 text-sm mt-2 leading-relaxed">
          Comprehensive technical specifications, surface mechanics, and daily maintenance guidelines for your KULTRA 100% Merino Wool Desk Mat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Subsection 1 */}
        <article className="glass-card p-6 rounded-3xl border border-stone-200/80 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center mb-4 text-amber-700 shadow-2xs">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-xl text-stone-900 mb-3">
              3.0mm High-Density Merino Construction
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Crafted from a solid 3.0mm slab of Grade-A Australian Merino wool felt (300g/m² density), our desk blotter absorbs mechanical keyboard keystroke acoustic resonance by up to -14dB. The high-density fiber matrix cushions wrists during extended work sessions while safeguarding solid oak, walnut, and standing desk surfaces against scuffs, scratches, and heavy monitor arms without edge fraying.
            </p>
          </div>
        </article>

        {/* Subsection 2 */}
        <article className="glass-card p-6 rounded-3xl border border-stone-200/80 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center mb-4 text-amber-700 shadow-2xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-xl text-stone-900 mb-3">
              Zero-Slide Micro-Grip Backing
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Equipped with a low-profile, heat-set micro-grip silicone dot matrix on the underside, the KULTRA desk pad locks securely to solid wood, tempered glass, standing desk laminates, and composite surfaces. The precision matrix prevents desk pad migration during intense typing or rapid optical mouse movements without leaving sticky residues, rubber chemical odors, or surface discoloration.
            </p>
          </div>
        </article>

        {/* Subsection 3 */}
        <article className="glass-card p-6 rounded-3xl border border-stone-200/80 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center mb-4 text-amber-700 shadow-2xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-xl text-stone-900 mb-3">
              Natural Lanolin Water Repellency & Care
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Organic Australian Merino wool contains natural lanolin wax, making the felt surface inherently water-repellent and dirt-resistant. Daily care requires minimal effort: vacuum gently or roll with a standard lint brush to clear dust and pet hair. For accidental coffee or water spills, immediately blot the liquid with a clean paper towel without vigorous rubbing.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
