import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, RefreshCw, Truck, Mail } from "lucide-react";
import { Navbar } from "@/components/store/Navbar";
import { Footer } from "@/components/store/Footer";

export const metadata: Metadata = {
  title: "Return Policy | KULTRA Studio",
  description: "KULTRA Studio 30-day hassle-free return and refund policy for US orders.",
  alternates: {
    canonical: "https://usekultra.com/return-policy/"
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
        <header className="mb-12 border-b border-stone-200/80 pb-8">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-800 bg-amber-100/90 border border-amber-200 px-3.5 py-1 rounded-full inline-block mb-3">
            Customer Care & Guarantees
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
            30-Day Risk-Free Trial & Return Policy
          </h1>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            We want you to experience our 100% Australian Merino Wool Desk Mat with absolute confidence. Every order includes a 30-day risk-free desk trial backed by free return shipping for US buyers.
          </p>
        </header>

        {/* 4 Summary Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <div className="glass-card p-5 rounded-2xl border border-stone-200/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900">30-Day Workspace Trial</h3>
              <p className="text-xs text-stone-600 mt-1 leading-normal">
                Test the desk mat on your workstation for 30 calendar days from delivery.
              </p>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-stone-200/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900">Prepaid US Return Labels</h3>
              <p className="text-xs text-stone-600 mt-1 leading-normal">
                Complimentary prepaid return shipping labels provided for all domestic US orders.
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
                Returned items must be free of permanent liquid damage, burns, or physical cuts.
              </p>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-stone-200/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900">Fast 2-4 Day Refunds</h3>
              <p className="text-xs text-stone-600 mt-1 leading-normal">
                Full refunds credited back to your payment method within 2-4 days after inspection.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Expanded Semantic Sections */}
        <div className="space-y-8 text-sm text-stone-700 leading-relaxed">
          {/* Section 1 */}
          <section className="glass-card p-6 sm:p-8 rounded-3xl border border-stone-200/80 space-y-3">
            <h2 className="font-serif text-xl font-bold text-stone-900">1. The KULTRA Guarantee</h2>
            <p>
              At KULTRA Studio, we design workspace equipment meant to enhance your daily focus, ergonomic comfort, and desk aesthetic. We understand that finding the right desk pad surface takes real-world use. That is why we offer an extended 30-day risk-free trial for all US buyers.
            </p>
            <p>
              From the day your package arrives, you have 30 calendar days to set up the desk mat on your workstation, test your mechanical keyboard acoustics, and evaluate mouse sensor tracking. If you are not completely satisfied with the feel, texture, or fit, you can return it for a 100% full refund with no restocking fees.
            </p>
          </section>

          {/* Section 2 */}
          <section className="glass-card p-6 sm:p-8 rounded-3xl border border-stone-200/80 space-y-4">
            <h2 className="font-serif text-xl font-bold text-stone-900">2. How to Initiate a US Return</h2>
            <p>
              Initiating a return is simple and straightforward. Follow these three steps:
            </p>
            <ol className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-3 bg-stone-100/80 p-3.5 rounded-xl border border-stone-200">
                <span className="w-6 h-6 rounded-full bg-stone-900 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0">1</span>
                <div>
                  <strong>Email Support:</strong> Send an email to{" "}
                  <a href="mailto:support@usekultra.com" className="font-semibold text-stone-900 underline decoration-amber-400 underline-offset-4">
                    support@usekultra.com
                  </a>{" "}
                  with your order number and request a return label.
                </div>
              </li>
              <li className="flex items-start gap-3 bg-stone-100/80 p-3.5 rounded-xl border border-stone-200">
                <span className="w-6 h-6 rounded-full bg-stone-900 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0">2</span>
                <div>
                  <strong>Receive Prepaid Label:</strong> Our customer care team will issue a Return Merchandise Authorization (RMA) and email you a printable prepaid USPS / FedEx shipping label within 24 hours.
                </div>
              </li>
              <li className="flex items-start gap-3 bg-stone-100/80 p-3.5 rounded-xl border border-stone-200">
                <span className="w-6 h-6 rounded-full bg-stone-900 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0">3</span>
                <div>
                  <strong>Ship Package:</strong> Roll the desk mat loosely back into its original protective paper tube or shipping box, attach the label, and drop off the package at any authorized carrier drop-off point.
                </div>
              </li>
            </ol>
          </section>

          {/* Section 3 */}
          <section className="glass-card p-6 sm:p-8 rounded-3xl border border-stone-200/80 space-y-3">
            <h2 className="font-serif text-xl font-bold text-stone-900">3. Refund Processing & Condition Requirements</h2>
            <p>
              To qualify for a full refund, returned merchandise must be in original, clean condition without permanent stains, burns, chemical damage, or physical cuts.
            </p>
            <p>
              Once your return package arrives at our US fulfillment center, our inspection team verifies the item within 1 business day. Upon verification, your full purchase price is automatically credited back to your original payment method (Credit Card, PayPal, or Apple Pay) within <strong>2 to 4 business days</strong>.
            </p>
          </section>

          {/* Section 4 */}
          <section className="glass-card p-6 sm:p-8 rounded-3xl border border-stone-200/80 space-y-3">
            <h2 className="font-serif text-xl font-bold text-stone-900">4. Exchanges & Damaged Shipments</h2>
            <p>
              If your package arrives damaged during transit or if you wish to exchange your color finish (e.g. swapping Dark Charcoal for Light Ash Grey), contact support immediately. We will issue a replacement shipment right away at zero additional cost to you.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
