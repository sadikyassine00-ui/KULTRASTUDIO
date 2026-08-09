import React from "react";

export function ProductSchema() {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "100% Merino Wool & Natural Cork Desk Mat",
    "image": [
      "https://usekultra.com/images/hero_desk_mat.png",
      "https://usekultra.com/images/wool_cork_texture.png",
      "https://usekultra.com/images/heather_grey_setup.png"
    ],
    "description": "Handcrafted Australian Merino wool felt desk mat fused to a non-slip Portuguese cork base. Absorbs mechanical keyboard acoustic noise (-14dB) and protects solid desk surfaces.",
    "sku": "KULTRA-MAT-MERINO-CORK-01",
    "mpn": "KULTRA-MAT-01",
    "brand": {
      "@type": "Brand",
      "name": "KULTRA Studio"
    },
    "material": "Virgin Australian Merino Wool, Portuguese Natural Cork",
    "color": "Charcoal, Heather Grey",
    "offers": {
      "@type": "Offer",
      "url": "https://usekultra.com",
      "priceCurrency": "USD",
      "price": "80.00",
      "priceValidUntil": "2027-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "KULTRA Studio"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0.00",
          "currency": "USD"
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
            "minValue": 2,
            "maxValue": 4,
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
          "name": "Marcus Vance"
        },
        "reviewBody": "Dampens mechanical keyboard key clack noticeably. The Merino wool is soft and the cork base stays firmly in place."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
