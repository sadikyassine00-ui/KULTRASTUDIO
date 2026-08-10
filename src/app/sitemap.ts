import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://usekultra.com";
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${baseUrl}/images/hero_desk_mat.png`,
        `${baseUrl}/images/wool_cork_texture.png`,
        `${baseUrl}/images/heather_grey_setup.png`,
        `${baseUrl}/images/cork_base_detail.png`
      ]
    }
  ];
}
