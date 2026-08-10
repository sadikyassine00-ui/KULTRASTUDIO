"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Truck, RotateCcw, Award, Check } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Value Prop Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-stone-800 text-center">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-stone-800 text-amber-400 flex items-center justify-center mb-3">
              <Truck className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-stone-100 text-sm">Express Shipping</h4>
            <p className="text-xs text-stone-400 mt-1">Complimentary on orders $70+</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-stone-800 text-amber-400 flex items-center justify-center mb-3">
              <RotateCcw className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-stone-100 text-sm">30-Day Desk Trial</h4>
            <p className="text-xs text-stone-400 mt-1">Full refund guarantee</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-stone-800 text-amber-400 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-stone-100 text-sm">Lifetime Warranty</h4>
            <p className="text-xs text-stone-400 mt-1">Covers wool felt & backing</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-stone-800 text-amber-400 flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-stone-100 text-sm">100% Merino Wool</h4>
            <p className="text-xs text-stone-400 mt-1">Full 3.0mm solid slab</p>
          </div>
        </div>

        {/* Footer Links & Journal Subscription */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 flex flex-col gap-4">
            {/* KULTRA Studio Serif Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-400 text-stone-950 flex items-center justify-center font-serif text-lg font-bold">
                K
              </div>
              <span className="font-serif tracking-[0.25em] text-xl font-bold uppercase text-stone-100">
                KULTRA <span className="font-sans font-light text-stone-400 text-xs tracking-wider">STUDIO</span>
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Independent studio creating Australian Merino wool felt desk pads with zero-slide micro-grip backing.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-stone-100 text-sm">Policies & Support</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><Link href="/pages/shipping-policy" className="hover:text-amber-400 transition-colors">Shipping Policy</Link></li>
              <li><Link href="/return-policy" className="hover:text-amber-400 transition-colors">Return Policy</Link></li>
              <li><Link href="/pages/privacy-policy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/pages/terms-of-service" className="hover:text-amber-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/pages/contact" className="hover:text-amber-400 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-stone-100 text-sm">Studio Journal</h4>
            <p className="text-xs text-stone-400">
              Receive desk setup photographs, material releases, and care guides.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-stone-800 text-amber-400 text-xs font-semibold flex items-center gap-2 border border-stone-700">
                <Check className="w-4 h-4" /> Thank you for subscribing.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-stone-800 border border-stone-700 text-xs text-stone-100 rounded-xl px-3.5 py-2.5 flex-1 focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  className="bg-amber-400 hover:bg-amber-500 text-stone-950 font-bold text-xs px-4 py-2.5 rounded-xl uppercase tracking-wider transition-colors"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Legal Ownership Text & Copyright */}
        <div className="pt-8 border-t border-stone-800 text-center text-[11px] text-stone-500 flex flex-col gap-3">
          <p className="text-stone-400">
            KULTRA Studio is owned and operated by HostKeys LLC, located at 30 N Gould St Ste R, Sheridan, WY 82801, USA.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p>© 2026 KULTRA Studio. All rights reserved.</p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <Link href="/pages/shipping-policy" className="hover:text-stone-300">Shipping Policy</Link>
              <span>•</span>
              <Link href="/return-policy" className="hover:text-stone-300">Return Policy</Link>
              <span>•</span>
              <Link href="/pages/privacy-policy" className="hover:text-stone-300">Privacy Policy</Link>
              <span>•</span>
              <Link href="/pages/terms-of-service" className="hover:text-stone-300">Terms of Service</Link>
              <span>•</span>
              <Link href="/pages/contact" className="hover:text-stone-300">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
