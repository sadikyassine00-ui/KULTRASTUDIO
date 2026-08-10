import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/store/Navbar";
import { Footer } from "@/components/store/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | KULTRA Studio",
  description: "Official Privacy Policy for HostKeys LLC operating as KULTRA Studio.",
  alternates: {
    canonical: "https://usekultra.com/pages/privacy-policy"
  }
};

export default function PrivacyPolicyPage() {
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
            Legal & Data Protection
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
            Privacy Policy
          </h1>
        </div>

        <article className="glass-card p-6 sm:p-8 rounded-3xl border border-stone-200/80 space-y-4 text-sm text-stone-700 leading-relaxed">
          <p>
            HostKeys LLC (operating as KULTRA Studio) respects your privacy. We collect customer information—including name, shipping address, email address, and payment details—strictly for order processing, fulfillment, and customer communication.
          </p>
          <p>
            Payment data is securely processed via Stripe; we do not store full payment card details on our servers. Customer data is never sold or shared with unauthorized third parties. For data inquiries or deletion requests, contact support@kulturastudio.com.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
