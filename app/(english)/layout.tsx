import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { outfit, plexArabic } from "@/app/fonts";
import "@/app/globals.css";
import "@/app/designer/designer.css";
import "@/app/designer/landing.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { SEO_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AI Software for Giving & Facility Management | Innovatek SWD",
    template: "%s | Innovatek SWD",
  },
  description:
    "Technology for Impact — AI-native platforms for giving, facility management and customer engagement across the UAE, KSA, Egypt and MENA. Modular by design, Arabic-first, and supported after go-live.",
  keywords: SEO_KEYWORDS.en.home,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1020",
  colorScheme: "light dark",
};

export default function EnglishRootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en-AE"
      dir="ltr"
      className={`${outfit.variable} ${plexArabic.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>{children}</body>
    </html>
  );
}
