import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, RefreshCw, Truck, Mail, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/store/Navbar";
import { Footer } from "@/components/store/Footer";

export const metadata: Metadata = {
  title: "Return Policy | KULTRA Studio",
  description: "KULTRA Studio 30-day hassle-free return and refund policy for US orders.",
  alternates: {
    canonical: "https://usekultra.com/return-policy"
  }
};

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-stone-900 selection:bg-amber-200">
      {/* Header Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 py-16 px-4 sm:px-8 max-w-4xl mx-auto w-full">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-stone-900 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Storefront</span>
        </Link>

        {/* Page Header */}
        <div className="mb-12 border-b border-stone-200/80 pb-8">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-800 bg-amber-100/90 border border-amber-200 px-3.5 py-1 rounded-full inline-block mb-3">
            Customer Care & Guarantees
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
            30-Day Return & Refund Policy
          </h1>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            We want you to experience our 100% Merino Wool Desk Mat with complete peace of mind. Every US order includes a 30-day risk-free trial.
          </p>
        </div>

        {/* 4 Summary Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <div className="glass-card p-5 rounded-2xl border border-stone-200/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900">30-Day Trial Window</h3>
              <p className="text-xs text-stone-600 mt-1 leading-normal">
                Initiate a return within 30 calendar days of delivery for a full refund.
              </p>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-stone-200/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900">Free US Returns</h3>
              <p className="text-xs text-stone-600 mt-1 leading-normal">
                Complimentary return shipping labels provided for all domestic US orders.
              </p>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-stone-200/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900">Original Condition</h3>
              <p className="text-xs text-stone-600 mt-1 leading-normal">
                Returned items must be undamaged and free of permanent stains or modifications.
              </p>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-stone-200/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900">Fast 5–7 Day Refunds</h3>
              <p className="text-xs text-stone-600 mt-1 leading-normal">
                Refunds processed back to original payment method within 5–7 business days after inspection.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Policy Sections */}
        <div className="space-y-8 text-sm text-stone-700 leading-relaxed">
          <section className="glass-card p-6 sm:p-8 rounded-3xl border border-stone-200/80 space-y-3">
            <h2 className="font-serif text-xl font-bold text-stone-900">1. How to Initiate a Return</h2>
            <p>
              To start a return, simply send an email to our support team at{" "}
              <a href="mailto:support@usekultra.com" className="font-semibold text-stone-900 underline decoration-amber-400 underline-offset-4">
                support@usekultra.com
              </a>{" "}
              with your order number and full name.
            </p>
            <div className="bg-stone-100/80 p-4 rounded-xl text-xs space-y-1.5 border border-stone-200 text-stone-800 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>We will issue a Return Merchandise Authorization (RMA) within 24 hours.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>You will receive a printable prepaid USPS / FedEx shipping label at zero cost.</span>
              </div>
            </div>
          </section>

          <section className="glass-card p-6 sm:p-8 rounded-3xl border border-stone-200/80 space-y-3">
            <h2 className="font-serif text-xl font-bold text-stone-900">2. Return Eligibility & Condition</h2>
            <p>
              To be eligible for a full refund, your desk mat must be returned within 30 calendar days of delivery. Items should be rolled cleanly back into their packaging (or protective tube) and free from cuts, burns, or liquid alterations.
            </p>
          </section>

          <section className="glass-card p-6 sm:p-8 rounded-3xl border border-stone-200/80 space-y-3">
            <h2 className="font-serif text-xl font-bold text-stone-900">3. Inspection & Refund Timeline</h2>
            <p>
              Once your returned package arrives at our warehouse, our quality control team will inspect the item within 2 business days.
            </p>
            <p>
              Upon approval, a full refund for the product price will be automatically issued back to your original credit card, PayPal, or Apple Pay account. Please allow <strong>5 to 7 business days</strong> for the credit to appear on your bank statement.
            </p>
          </section>

          <section className="glass-card p-6 sm:p-8 rounded-3xl border border-stone-200/80 space-y-3">
            <h2 className="font-serif text-xl font-bold text-stone-900">4. Exchanges & Damaged Deliveries</h2>
            <p>
              If your product arrives damaged in transit or you prefer to exchange your color finish (e.g. from Dark Charcoal to Light Ash Grey), contact support immediately at{" "}
              <a href="mailto:support@usekultra.com" className="font-semibold text-stone-900 underline decoration-amber-400 underline-offset-4">
                support@usekultra.com
              </a>
              . We will dispatch a replacement unit free of charge without delay.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
