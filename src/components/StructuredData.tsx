import React from "react";

export function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://usekultra.com";

  // 1. Product & Offer Schema (6 WebP Product Images Array)
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "100% Merino Wool Desk Mat",
    "image": [
      `${baseUrl}/images/products/kultra-australian-merino-wool-desk-mat-ash-gray.webp`,
      `${baseUrl}/images/products/kultra-3mm-solid-wool-felt-texture-close-up.webp`,
      `${baseUrl}/images/products/kultra-desk-mat-anti-slip-micro-grip-dot-backing.webp`,
      `${baseUrl}/images/products/kultra-wool-desk-pad-dimensions-keyboard-mouse-setup.webp`,
      `${baseUrl}/images/products/kultra-merino-desk-mat-features-acoustic-dampening.webp`,
      `${baseUrl}/images/products/kultra-desk-mat-dark-charcoal-light-ash-grey.webp`
    ],
    "description": "Full 3.0mm solid Australian Merino wool felt desk mat with zero-slide micro-grip dot backing. Absorbs mechanical keyboard acoustic noise (-14dB) and protects solid desk surfaces.",
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

  // 3. FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the dimensions and weights of the Merino Wool Desk Mat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Medium size measures 80 × 30 cm × 3.0mm (31.5\" × 11.8\") weighing 320g. The Large size measures 90 × 40 cm × 3.0mm (35.4\" × 15.7\") weighing 460g."
        }
      },
      {
        "@type": "Question",
        "name": "How does the anti-slip micro-grip dot backing work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The underside features a precision micro-grip dot matrix heat-set onto the 3.0mm solid wool slab. It locks firmly to solid wood, glass, or standing desks without rubber, petroleum chemical odors, or sticky adhesives."
        }
      },
      {
        "@type": "Question",
        "name": "Does the 100% Merino wool felt pill over time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our 300g/m² Grade-A virgin Australian Merino wool uses dense long-staple fibers treated for anti-pilling and anti-static performance, resisting fraying and fiber clumping."
        }
      },
      {
        "@type": "Question",
        "name": "Does the desk mat reduce mechanical keyboard noise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the 3.0mm solid high-density wool slab dampens mechanical keyboard desk acoustic resonance by up to -14dB."
        }
      },
      {
        "@type": "Question",
        "name": "What is the 30-Day Trial and Shipping policy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer complimentary express shipping on orders over $70.00 USD (8–12 business days delivery) along with a 30-day risk-free desk trial and a lifetime guarantee covering wool felt and micro-grip backing."
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
