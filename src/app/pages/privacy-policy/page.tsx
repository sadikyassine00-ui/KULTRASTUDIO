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
          <p className="text-xs text-stone-500 mt-2 font-medium">
            Effective Date: August 10, 2026
          </p>
        </div>

        <div className="space-y-8 text-sm text-stone-700 leading-relaxed">
          <section className="glass-card p-6 sm:p-8 rounded-3xl border border-stone-200/80 space-y-3">
            <p>
              HostKeys LLC (operating as KULTRA Studio) respects your privacy and is committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit or make a purchase from our store.
            </p>
          </section>

          <section className="glass-card p-6 sm:p-8 rounded-3xl border border-stone-200/80 space-y-4">
            <h2 className="font-serif text-xl font-bold text-stone-900">1. Information We Collect</h2>
            <p>
              When you place an order or interact with our site, we collect personal details necessary to process your purchase, including:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm pl-4 list-disc text-stone-600">
              <li>Name, shipping address, and billing address.</li>
              <li>Email address and phone number for order tracking and customer support.</li>
              <li>Device information, IP address, and interaction data collected automatically via cookies and tracking technologies (including Google Analytics and advertising pixels) to optimize site performance and advertising accuracy.</li>
            </ul>
          </section>

          <section className="glass-card p-6 sm:p-8 rounded-3xl border border-stone-200/80 space-y-3">
            <h2 className="font-serif text-xl font-bold text-stone-900">2. Payment Processing & Security</h2>
            <p>
              All transaction data is encrypted and securely processed through our payment gateway, Stripe. HostKeys LLC does not store, process, or access full credit card numbers on our servers. All data transfers occur over an SSL-encrypted connection.
            </p>
          </section>

          <section className="glass-card p-6 sm:p-8 rounded-3xl border border-stone-200/80 space-y-4">
            <h2 className="font-serif text-xl font-bold text-stone-900">3. Data Sharing With Third Parties</h2>
            <p>
              We do not sell, rent, or trade your personal information. We only share data with essential third-party service providers required to fulfill your order:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm pl-4 list-disc text-stone-600">
              <li><strong>Payment Processors:</strong> Stripe (payment verification and fraud prevention).</li>
              <li><strong>Logistics & Shipping Carriers:</strong> US postal and freight carriers to deliver your physical shipment.</li>
              <li><strong>Platform Infrastructure:</strong> Website hosting and analytics services.</li>
            </ul>
          </section>

          <section className="glass-card p-6 sm:p-8 rounded-3xl border border-stone-200/80 space-y-3">
            <h2 className="font-serif text-xl font-bold text-stone-900">4. Your Rights & Data Requests</h2>
            <p>
              You have the right to access, update, or request the deletion of your personal information at any time. To exercise these rights or raise data privacy inquiries, contact our compliance team at{" "}
              <a href="mailto:support@kulturastudio.com" className="font-semibold text-stone-900 underline decoration-amber-400 underline-offset-4">
                support@kulturastudio.com
              </a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
