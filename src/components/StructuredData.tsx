import React from "react";

export function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://usekultra.com";

  // 1. Product & Offer Schema
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "100% Australian Merino Wool Desk Mat",
    "image": [
      `${baseUrl}/images/products/kultra-australian-merino-wool-desk-mat-ash-gray.webp`,
      `${baseUrl}/images/products/kultra-3mm-solid-wool-felt-texture-close-up.webp`,
      `${baseUrl}/images/products/kultra-desk-mat-anti-slip-micro-grip-dot-backing.webp`,
      `${baseUrl}/images/products/kultra-wool-desk-pad-dimensions-keyboard-mouse-setup.webp`,
      `${baseUrl}/images/products/kultra-merino-desk-mat-features-acoustic-dampening.webp`,
      `${baseUrl}/images/products/kultra-desk-mat-dark-charcoal-light-ash-grey.webp`
    ],
    "description": "Full 3.0mm solid Australian Merino wool felt desk mat with zero-slide micro-grip dot backing.",
    "sku": "KULTRA-MAT-MERINO-01",
    "mpn": "KULTRA-MAT-01",
    "brand": {
      "@type": "Brand",
      "name": "KULTRA Studio"
    },
    "material": "100% Australian Merino Wool Felt, Anti-Slip Micro-Grip Backing",
    "color": "Dark Charcoal, Light Ash Grey",
    "offers": {
      "@type": "Offer",
      "url": baseUrl,
      "priceCurrency": "USD",
      "price": "80.00",
      "validFrom": "2025-01-01",
      "priceValidUntil": "2027-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "KULTRA Studio"
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "US",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 30,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0.00",
          "currency": "USD"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "US"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 1,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 8,
            "maxValue": 12,
            "unitCode": "DAY"
          }
        }
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Chris Taylor"
        },
        "reviewBody": "Took about two hours to sit completely flat after unboxing, but it's great now. Dampens the hollow thock from my Keychron keyboard so my desk doesn't echo during late-night coding sessions."
      }
    ]
  };

  // 2. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org/",
    "@type": "Organization",
    "name": "KULTRA Studio",
    "url": baseUrl,
    "logo": `${baseUrl}/icon.svg`,
    "sameAs": [
      "https://instagram.com/usekultra",
      "https://twitter.com/usekultra"
    ]
  };

  // 3. FAQ Schema (Grants Google Accordion Rich Snippets)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does the KULTRA wool desk mat slide on smooth wooden or glass desks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Unlike cheap felt pads that slide, the KULTRA Merino Wool Desk Mat features an engineered micro-grip silicone dot backing that anchors firmly to oak, walnut, glass, and laminate surfaces without residue."
        }
      },
      {
        "@type": "Question",
        "name": "How thick is the Merino wool desk blotter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The KULTRA desk mat is crafted from solid 3.0mm thick 100% Australian Merino wool felt, providing optimal wrist cushioning and absorbing mechanical keyboard acoustic vibrations by up to -14dB."
        }
      },
      {
        "@type": "Question",
        "name": "How do you clean and maintain a Merino wool felt desk pad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Merino wool contains natural lanolin, making it naturally water-repellent and stain-resistant. For routine maintenance, simply vacuum or lint-roll dust. For liquid spills, blot immediately with a damp cloth."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
