import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Truck, Clock, ShieldCheck, Globe } from "lucide-react";
import { Navbar } from "@/components/store/Navbar";
import { Footer } from "@/components/store/Footer";

export const metadata: Metadata = {
  title: "Shipping & Delivery Information | KULTRA Studio",
  description: "KULTRA Studio complimentary express US shipping and 8–12 business days delivery details.",
  alternates: {
    canonical: "https://usekultra.com/shipping"
  }
};

export default function ShippingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-stone-900 selection:bg-amber-200">
      <Navbar />

      <main className="flex-1 py-16 px-4 sm:px-8 max-w-4xl mx-auto w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-stone-900 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Storefront</span>
        </Link>

        <div className="mb-12 border-b border-stone-200/80 pb-8">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-800 bg-amber-100/90 border border-amber-200 px-3.5 py-1 rounded-full inline-block mb-3">
            Fulfillment & Delivery
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
            Shipping & Delivery Information
          </h1>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            All orders ship directly in eco-friendly, plastic-free paper roll tubes to preserve wool felt flatness and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="glass-card p-5 rounded-2xl border border-stone-200/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900">Free Shipping</h3>
              <p className="text-xs text-stone-600 mt-1 leading-normal">
                Complimentary express shipping applied automatically to all US orders over $70.00.
              </p>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-stone-200/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900">8–12 Day Delivery</h3>
              <p className="text-xs text-stone-600 mt-1 leading-normal">
                Standard delivery timeline of 8 to 12 business days with full door-to-door tracking.
              </p>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-stone-200/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900">Plastic-Free</h3>
              <p className="text-xs text-stone-600 mt-1 leading-normal">
                100% recyclable paper tube packaging with zero plastic wrap or poly mailers.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8 text-sm text-stone-700 leading-relaxed">
          <section className="glass-card p-6 sm:p-8 rounded-3xl border border-stone-200/80 space-y-3">
            <h2 className="font-serif text-xl font-bold text-stone-900">1. Order Processing & Tracking</h2>
            <p>
              Orders placed before 2:00 PM EST are processed and packed within 24 hours (Monday through Friday). As soon as your order ships, a tracking confirmation email containing your carrier tracking number (USPS or FedEx) will be sent to you.
            </p>
          </section>

          <section className="glass-card p-6 sm:p-8 rounded-3xl border border-stone-200/80 space-y-3">
            <h2 className="font-serif text-xl font-bold text-stone-900">2. Rates & Timelines</h2>
            <p>
              • <strong>Domestic US (Orders $70+):</strong> FREE Express Shipping (8–12 Business Days).<br />
              • <strong>Domestic US (Orders under $70):</strong> Flat Rate $5.00 USD (8–12 Business Days).
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
