import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/store/Navbar";
import { Footer } from "@/components/store/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | KULTRA Studio",
  description: "Official Terms of Service for HostKeys LLC operating as KULTRA Studio.",
  alternates: {
    canonical: "https://usekultra.com/pages/terms-of-service"
  }
};

export default function TermsOfServicePage() {
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
            Legal Terms & Conditions
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
            Terms of Service
          </h1>
        </div>

        <article className="glass-card p-6 sm:p-8 rounded-3xl border border-stone-200/80 space-y-4 text-sm text-stone-700 leading-relaxed">
          <p>
            HostKeys LLC (operating as KULTRA Studio) terms of service agreement covering store usage, orders, pricing, intellectual property, and governing law in Sheridan, Wyoming, USA.
          </p>
          <p>
            By accessing or placing an order on https://usekultra.com, you agree to be bound by these Terms of Service. All content, imagery, and product designs remain the intellectual property of HostKeys LLC.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
