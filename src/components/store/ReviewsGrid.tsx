"use client";

import React from "react";
import Image from "next/image";
import { Star, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  variant: string;
  image?: string;
  verified: boolean;
}

const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Marcus Vance",
    role: "Senior Software Architect",
    rating: 5,
    date: "3 days ago",
    title: "Dampens mechanical keyboard desk rattle.",
    content: "I use an aluminum Keychron Q1 with lubricant key switches. Before this mat, typing echoed through my wooden desk. The 3.0mm Merino wool dampens key sound noticeably, and the zero-slide micro-grip dot backing stays firmly in place.",
    variant: "Charcoal / Large",
    image: "/images/hero_desk_mat.png",
    verified: true
  },
  {
    id: "rev-2",
    name: "Elena Rostova",
    role: "UX Designer & Photographer",
    rating: 5,
    date: "1 week ago",
    title: "Quiet, comfortable daily desk surface.",
    content: "The Heather Grey wool texture brings comfortable warmth to my studio setup. My wrists stay comfortable during long editing sessions, and mouse tracking with optical sensors works smoothly.",
    variant: "Heather Grey / Medium",
    image: "/images/heather_grey_setup.png",
    verified: true
  },
  {
    id: "rev-3",
    name: "David K.",
    role: "Product Designer",
    rating: 5,
    date: "2 weeks ago",
    title: "Durable wool that doesn't pill.",
    content: "Cheaper felt pads pill within two weeks. This 300g/m² virgin wool has held up cleanly after 3 months of daily work. The anti-slip micro-grip dot backing grips solid wood without slipping.",
    variant: "Charcoal / Medium",
    image: "/images/wool_cork_texture.png",
    verified: true
  }
];

export function ReviewsGrid() {
  return (
    <section id="reviews" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-stone-200/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-800 bg-amber-100/90 border border-amber-200 px-3.5 py-1 rounded-full">
            Customer Reviews
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-3">
            Verified Customer Reviews
          </h2>
          <p className="text-stone-600 text-sm mt-1">
            Real feedback from software engineers, writers, and product designers.
          </p>
        </div>

        {/* Overall Score Badge */}
        <div className="glass-card p-4 rounded-2xl border border-stone-200/80 shadow-xs flex items-center gap-4 shrink-0">
          <div className="text-center pr-4 border-r border-stone-200">
            <div className="font-serif text-3xl font-bold text-stone-900">4.9</div>
            <div className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider">Out of 5.0</div>
          </div>
          <div>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-xs font-semibold text-stone-800 mt-1">128 Verified Desk Reviews</div>
            <div className="text-[10px] text-emerald-700 font-medium flex items-center gap-1 mt-0.5">
              <CheckCircle2 className="w-3 h-3" /> Verified Buyers
            </div>
          </div>
        </div>
      </div>

      {/* 3-Column Reviews Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS.map((rev) => (
          <motion.div
            key={rev.id}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="glass-card rounded-3xl p-6 border border-stone-200/80 shadow-sm flex flex-col justify-between"
          >
            <div>
              {/* Stars & Verified badge */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                {rev.verified && (
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Verified Buyer
                  </span>
                )}
              </div>

              <h3 className="font-serif font-bold text-base text-stone-900 leading-snug">
                "{rev.title}"
              </h3>
              <p className="text-xs text-stone-600 mt-2.5 leading-relaxed">
                {rev.content}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200/80">
              {/* Customer Photo Thumbnail */}
              {rev.image && (
                <div className="relative w-full h-32 rounded-xl overflow-hidden mb-3 border border-stone-200 shadow-xs">
                  <Image
                    src={rev.image}
                    alt={`${rev.name}'s desk setup`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 glass-dark-card text-[10px] font-semibold px-2 py-0.5 rounded">
                    Customer Photo
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-stone-900">{rev.name}</div>
                  <div className="text-[10px] text-stone-500">{rev.role}</div>
                </div>
                <div className="text-[10px] text-stone-600 font-semibold bg-stone-100 px-2.5 py-1 rounded-md border border-stone-200">
                  {rev.variant}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
