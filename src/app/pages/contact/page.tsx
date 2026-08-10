import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Clock } from "lucide-react";
import { Navbar } from "@/components/store/Navbar";
import { Footer } from "@/components/store/Footer";

export const metadata: Metadata = {
  title: "Customer Support | KULTRA Studio",
  description: "Contact HostKeys LLC operating as KULTRA Studio for order inquiries and support.",
  alternates: {
    canonical: "https://usekultra.com/pages/contact"
  }
};

export default function ContactPage() {
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
            Customer Inquiries
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
            Customer Support
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass-card p-6 rounded-3xl border border-stone-200/80 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-stone-900 text-amber-400 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-base text-stone-900">Corporate Address</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-mono">
              HostKeys LLC<br />
              30 N Gould St Ste R<br />
              Sheridan, WY 82801, USA
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-stone-200/80 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-stone-900 text-amber-400 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-base text-stone-900">Email Support</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              <a href="mailto:support@kulturastudio.com" className="font-semibold text-stone-900 underline decoration-amber-400 underline-offset-4">
                support@kulturastudio.com
              </a>
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-stone-200/80 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-stone-900 text-amber-400 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-base text-stone-900">Response Time</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Inquiries are addressed within 24 business hours.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
