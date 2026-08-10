import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://usekultra.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/", "/images/", "/api/google-feed", "/llms.txt"],
        disallow: ["/api/", "/admin/"]
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended"
        ],
        allow: ["/", "/llms.txt"]
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
