import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/store/Navbar";
import { Footer } from "@/components/store/Footer";

export const metadata: Metadata = {
  title: "Shipping & Delivery | KULTRA Studio",
  description: "Complimentary standard shipping within the United States with 8 to 13 business days delivery.",
  alternates: {
    canonical: "https://usekultra.com/pages/shipping-policy"
  }
};

export default function ShippingPolicyPage() {
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
            Shipping & Delivery
          </h1>
        </div>

        <article className="glass-card p-6 sm:p-8 rounded-3xl border border-stone-200/80 space-y-4 text-sm text-stone-700 leading-relaxed">
          <p>
            All orders receive complimentary standard shipping within the United States ($0.00). Orders are processed within 1 to 2 business days. Estimated delivery timeframe is 8 to 13 business days via tracked US postal carriers. Tracking confirmation is issued automatically upon carrier dispatch.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
