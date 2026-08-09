"use client";

// TypeScript declarations for window analytics objects
declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "set",
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    clarity?: (command: string, ...args: unknown[]) => void;
    fbq?: (
      command: "track" | "trackCustom" | "init",
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Universal Analytics & Event Tracking Helper
 * Safely dispatches events to Google Analytics 4, Microsoft Clarity, and Meta Pixel
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  try {
    // 1. Google Analytics 4 Event Dispatch
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }

    // 2. Microsoft Clarity Tag & Custom Event Logging
    if (typeof window.clarity === "function") {
      window.clarity("event", eventName);
      if (params) {
        Object.entries(params).forEach(([key, val]) => {
          if (typeof val === "string" || typeof val === "number") {
            window.clarity?.("set", key, String(val));
          }
        });
      }
    }

    // 3. Meta Pixel Event Dispatch
    if (typeof window.fbq === "function") {
      // Map standard e-commerce events to Meta Pixel standard events
      if (eventName === "add_to_cart") {
        window.fbq("track", "AddToCart", params);
      } else if (eventName === "begin_checkout") {
        window.fbq("track", "InitiateCheckout", params);
      } else if (eventName === "view_item") {
        window.fbq("track", "ViewContent", params);
      } else {
        window.fbq("trackCustom", eventName, params);
      }
    }

    // Optional console log in development environment
    if (process.env.NODE_ENV === "development") {
      console.log(`[Analytics Tracked]: ${eventName}`, params || "");
    }
  } catch (err) {
    console.warn("Analytics event tracking error:", err);
  }
}

/** Specialized E-Commerce Helper Functions */

export function trackAddToCart(item: {
  name: string;
  price: number;
  variant: string;
  currency?: string;
}) {
  trackEvent("add_to_cart", {
    currency: item.currency || "USD",
    value: item.price,
    items: [
      {
        item_name: item.name,
        variant: item.variant,
        price: item.price,
        quantity: 1
      }
    ]
  });
}

export function trackSelectVariant(color: string, size: string) {
  trackEvent("select_variant", {
    color,
    size,
    variant_label: `${color} / ${size}`
  });
}

export function trackViewProductImage(index: number, altText?: string) {
  trackEvent("view_product_image", {
    image_index: index + 1,
    alt_text: altText || ""
  });
}

export function trackExpandAccordion(topicTitle: string) {
  trackEvent("expand_accordion", {
    accordion_topic: topicTitle
  });
}

export function trackClickReviewsAnchor() {
  trackEvent("click_reviews_anchor", {
    target_section: "#reviews"
  });
}

export function trackClickTrustBadge(badgeName: string) {
  trackEvent("click_trust_badge", {
    badge_name: badgeName
  });
}
