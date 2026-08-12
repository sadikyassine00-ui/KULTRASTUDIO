import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { StoreProvider } from "@/context/StoreContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "xzf7lo2y2o";
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

const SITE_URL = "https://usekultra.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/"
  },
  title: {
    default: "100% Australian Merino Wool Desk Mat & Desk Blotter | KULTRA Studio",
    template: "%s | KULTRA Studio"
  },
  description: "Elevate your workspace with the KULTRA 3.0mm solid Australian Merino wool felt desk mat. Features zero-slide micro-grip dot backing, -14dB keyboard noise dampening, and precision laser-cut edges. 30-Day Trial & Free US Shipping.",
  icons: {
    icon: [
      { url: '/icon?v=2', type: 'image/png', sizes: '32x32' },
      { url: '/icon.svg?v=2', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.ico?v=2',
    apple: '/apple-icon?v=2',
  },
  keywords: [
    "wool desk mat",
    "desk blotter",
    "merino wool desk pad",
    "felt desk pad",
    "acoustic keyboard mat",
    "non slip desk mat"
  ],
  authors: [{ name: "KULTRA Studio" }],
  creator: "KULTRA Studio",
  publisher: "KULTRA Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "KULTRA™ Merino Wool Desk Mat - Premium Workspace Blotter",
    description: "Solid 3.0mm Australian Merino wool felt with micro-grip anti-slip backing.",
    url: SITE_URL,
    siteName: "KULTRA Studio",
    images: [
      {
        url: `${SITE_URL}/images/products/kultra-australian-merino-wool-desk-mat-ash-gray.webp`,
        width: 1200,
        height: 1200,
        alt: "KULTRA Merino Wool Desk Mat"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "KULTRA™ Merino Wool Desk Mat - Premium Workspace Blotter",
    description: "Solid 3.0mm Australian Merino wool felt with micro-grip anti-slip backing.",
    images: [`${SITE_URL}/images/products/kultra-australian-merino-wool-desk-mat-ash-gray.webp`]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased selection:bg-amber-200 selection:text-stone-900`}
    >
      <head>
        {/* Preload Hero LCP Image */}
        <link
          rel="preload"
          as="image"
          href="/images/products/kultra-australian-merino-wool-desk-mat-ash-gray.webp"
          type="image/webp"
          fetchPriority="high"
        />

        {/* Microsoft Clarity Heatmaps Script */}
        <Script
          id="microsoft-clarity"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_ID}");
            `
          }}
        />

        {/* Google Analytics 4 Script */}
        {GA_ID && GA_ID !== "G-XXXXXXXXXX" && (
          <>
            <Script
              strategy="lazyOnload"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', { page_path: window.location.pathname });
                `
              }}
            />
          </>
        )}

        {/* Meta Pixel Script */}
        {META_PIXEL_ID && META_PIXEL_ID !== "000000000000000" && (
          <Script
            id="meta-pixel"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${META_PIXEL_ID}');
                fbq('track', 'PageView');
              `
            }}
          />
        )}
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-stone-50 text-stone-900 font-sans"
      >
        <StoreProvider>
          {children}
        </StoreProvider>
        {/* Vercel Analytics & Speed Insights Integration */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
