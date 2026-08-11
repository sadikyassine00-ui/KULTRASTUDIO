"use client";

import React from "react";
import { Check } from "lucide-react";
import { trackSelectVariant } from "@/lib/analytics";

export interface ColorVariant {
  id: string;
  name: string;
  hex: string;
  subtitle: string;
  inStock: boolean;
}

export const LAUNCH_COLORS: ColorVariant[] = [
  {
    id: "dark-charcoal",
    name: "Dark Charcoal",
    hex: "#242528",
    subtitle: "Deep heathered charcoal for dark wood and matte setups.",
    inStock: true
  },
  {
    id: "light-ash-grey",
    name: "Light Ash Grey",
    hex: "#D1D3D4",
    subtitle: "Clean Scandinavian grey for bright oak and birch desks.",
    inStock: true
  }
];

export interface SizeOption {
  id: 'Medium' | 'Large';
  name: 'Medium' | 'Large';
  dimensions: string;
  price: string;
  recommended: string;
}

export const LAUNCH_SIZES: SizeOption[] = [
  {
    id: "Medium",
    name: "Medium",
    dimensions: "80 × 30 cm (31.5\" × 11.8\")",
    price: "$80.00",
    recommended: "Standard Desk"
  },
  {
    id: "Large",
    name: "Large",
    dimensions: "90 × 40 cm (35.4\" × 15.7\")",
    price: "$95.00",
    recommended: "Standing Desk"
  }
];

interface VariantSelectorProps {
  selectedColor: string;
  selectedSize: 'Medium' | 'Large';
  onSelectColor: (colorName: string) => void;
  onSelectSize: (size: 'Medium' | 'Large') => void;
}

export function VariantSelector({
  selectedColor,
  selectedSize,
  onSelectColor,
  onSelectSize
}: VariantSelectorProps) {
  const handleColorClick = (colorName: string) => {
    onSelectColor(colorName);
    trackSelectVariant(colorName, selectedSize);
  };

  const handleSizeClick = (size: 'Medium' | 'Large') => {
    onSelectSize(size);
    trackSelectVariant(selectedColor, size);
  };

  return (
    <div className="space-y-3 pt-1 border-t border-stone-200/80">
      {/* 1. Launch Colors Selector */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="uppercase tracking-wider text-stone-700">
            Launch Finish: <span className="text-stone-900 font-bold">{selectedColor}</span>
          </span>
          <span className="text-stone-500 text-[10px] uppercase tracking-wider font-semibold">
            100% Undyed Merino Wool
          </span>
        </div>

        <div
          role="radiogroup"
          aria-label="Color Finish Selector"
          className="grid grid-cols-1 sm:grid-cols-2 gap-2"
        >
          {LAUNCH_COLORS.map((c) => {
            const isSelected = selectedColor === c.name || (selectedColor === "Charcoal" && c.name === "Dark Charcoal") || (selectedColor === "Heather Grey" && c.name === "Light Ash Grey");
            return (
              <button
                key={c.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => handleColorClick(c.name)}
                className={`p-2.5 rounded-xl border-2 text-left flex items-start gap-2.5 transition-all relative group ${
                  isSelected
                    ? "border-stone-900 bg-stone-100/90 text-stone-900 ring-1 ring-stone-900/20 shadow-2xs"
                    : "border-stone-200/80 bg-white text-stone-700 hover:border-stone-300 hover:bg-stone-50/50"
                }`}
              >
                {/* Swatch Circle */}
                <div
                  className="w-4 h-4 rounded-full mt-0.5 border border-stone-400/80 shadow-xs flex items-center justify-center shrink-0"
                  style={{ backgroundColor: c.hex }}
                >
                  {isSelected && <Check className={`w-2.5 h-2.5 ${c.name === "Light Ash Grey" ? "text-stone-900" : "text-stone-100"}`} />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-bold leading-tight text-stone-900">{c.name}</span>
                    <span className="text-[9px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.2 rounded">
                      In Stock
                    </span>
                  </div>
                  <p className="text-[10px] mt-0.5 leading-snug line-clamp-2 text-stone-500">
                    {c.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Dimensions & Size Selector */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="uppercase tracking-wider text-stone-700">
            Dimensions: <span className="text-stone-900 font-bold">{selectedSize}</span>
          </span>
          <span className="text-amber-800 font-medium text-[10px]">3.0mm Solid Felt</span>
        </div>

        <div
          role="radiogroup"
          aria-label="Size Dimensions Selector"
          className="grid grid-cols-2 gap-2"
        >
          {LAUNCH_SIZES.map((s) => {
            const isSelected = selectedSize === s.name;
            return (
              <button
                key={s.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => handleSizeClick(s.name)}
                className={`p-2.5 rounded-xl border-2 text-left transition-all ${
                  isSelected
                    ? "border-stone-900 bg-stone-100/90 text-stone-900 ring-1 ring-stone-900/20 shadow-2xs"
                    : "border-stone-200/80 bg-white text-stone-700 hover:border-stone-300 hover:bg-stone-50/50"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-stone-900">{s.name} ({s.price})</span>
                  {isSelected && <Check className="w-3 h-3 text-stone-900" />}
                </div>
                <div className="text-[10px] font-mono mt-0.5 text-stone-500">
                  {s.dimensions}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
