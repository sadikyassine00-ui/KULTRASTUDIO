import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://usekultra.com"),
  title: "100% Merino Wool & Natural Cork Desk Mat | KULTRA Studio",
  description: "Australian Merino wool felt desk mat fused to a non-slip Portuguese cork base. Absorbs mechanical keyboard noise (-14dB) and protects desk wood. ($80.00 USD)",
  keywords: [
    "wool desk mat",
    "felt desk pad",
    "large merino desk mat",
    "cork desk mat",
    "acoustic keyboard pad",
    "non-slip desk pad",
    "wool felt desk protector"
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
    title: "100% Merino Wool & Natural Cork Desk Mat | KULTRA Studio",
    description: "Australian Merino wool felt desk mat fused to a non-slip Portuguese cork base. Absorbs mechanical keyboard acoustic noise (-14dB).",
    url: "https://usekultra.com",
    siteName: "KULTRA Studio",
    images: [
      {
        url: "/images/hero_desk_mat.png",
        width: 1200,
        height: 630,
        alt: "KULTRA Studio 100% Merino Wool & Cork Desk Mat"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "100% Merino Wool & Natural Cork Desk Mat | KULTRA Studio",
    description: "Australian Merino wool felt desk mat fused to a non-slip Portuguese cork base ($80.00 USD).",
    images: ["/images/hero_desk_mat.png"],
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
        {/* Microsoft Clarity Heatmaps Script */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
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
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
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
            strategy="afterInteractive"
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
        {children}
      </body>
    </html>
  );
}
