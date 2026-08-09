import type { Metadata } from "next";
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
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-stone-50 text-stone-900 font-sans"
      >
        {children}
      </body>
    </html>
  );
}
