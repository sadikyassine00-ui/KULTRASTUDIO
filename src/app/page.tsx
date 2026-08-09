import React from "react";
import { StoreProvider } from "@/context/StoreContext";
import { Navbar } from "@/components/store/Navbar";
import { HeroSection } from "@/components/store/HeroSection";
import { BentoGrid } from "@/components/store/BentoGrid";
import { DarkSetupGallery } from "@/components/store/DarkSetupGallery";
import { CertificationsBanner } from "@/components/store/CertificationsBanner";
import { ProductAccordion } from "@/components/store/ProductAccordion";
import { ReviewsGrid } from "@/components/store/ReviewsGrid";
import { Footer } from "@/components/store/Footer";
import { StickyMobileBar } from "@/components/store/StickyMobileBar";
import { CartDrawer } from "@/components/store/CartDrawer";
import { ProductSchema } from "@/components/store/ProductSchema";

export default function StorePage() {
  return (
    <StoreProvider>
      {/* Schema.org Product JSON-LD */}
      <ProductSchema />

      <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-stone-900 selection:bg-amber-200">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Architectural Showcase Content */}
        <main className="flex-1">
          <HeroSection />
          <BentoGrid />
          <DarkSetupGallery />
          <CertificationsBanner />
          <ProductAccordion />
          <ReviewsGrid />
        </main>

        {/* Footer */}
        <Footer />

        {/* Sticky Mobile Purchase Triggers & Slide-Out Cart Drawer */}
        <StickyMobileBar />
        <CartDrawer />
      </div>
    </StoreProvider>
  );
}
