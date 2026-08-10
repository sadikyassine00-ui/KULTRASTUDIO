import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://usekultra.com";

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>KULTRA Studio Products</title>
    <link>${baseUrl}</link>
    <description>Handcrafted 100% Merino Wool Desk Mats with Zero-Slide Micro-Grip Backing.</description>
    <item>
      <g:id>KULTRA-MAT-MERINO-01</g:id>
      <g:title>100% Merino Wool Desk Mat</g:title>
      <g:description>Full 3.0mm solid Australian Merino wool felt desk mat with zero-slide micro-grip dot backing. Absorbs mechanical keyboard acoustic noise (-14dB) and protects desk surfaces.</g:description>
      <g:link>${baseUrl}</g:link>
      <g:image_link>${baseUrl}/images/hero_desk_mat.png</g:image_link>
      <g:availability>in_stock</g:availability>
      <g:price>80.00 USD</g:price>
      <g:brand>KULTRA Studio</g:brand>
      <g:condition>new</g:condition>
      <g:mpn>KULTRA-MAT-01</g:mpn>
      <g:shipping>
        <g:country>US</g:country>
        <g:service>Standard</g:service>
        <g:price>0.00 USD</g:price>
      </g:shipping>
    </item>
  </channel>
</rss>`;

  return new NextResponse(xmlContent, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400"
    }
  });
}
