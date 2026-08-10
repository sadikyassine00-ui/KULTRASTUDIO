import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://usekultra.com";
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
      images: [
        `${baseUrl}/images/products/kultra-australian-merino-wool-desk-mat-ash-gray.webp`,
        `${baseUrl}/images/products/kultra-3mm-solid-wool-felt-texture-close-up.webp`,
        `${baseUrl}/images/products/kultra-desk-mat-anti-slip-micro-grip-dot-backing.webp`,
        `${baseUrl}/images/products/kultra-wool-desk-pad-dimensions-keyboard-mouse-setup.webp`,
        `${baseUrl}/images/products/kultra-merino-desk-mat-features-acoustic-dampening.webp`,
        `${baseUrl}/images/products/kultra-desk-mat-dark-charcoal-light-ash-grey.webp`
      ]
    },
    {
      url: `${baseUrl}/return-policy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.3
    },
    {
      url: `${baseUrl}/shipping`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.3
    }
  ];
}
