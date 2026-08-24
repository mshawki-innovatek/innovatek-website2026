import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { outfit } from "@/app/fonts";
import "@/app/globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { SEO_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AI Software for Giving & Facility Management | Innovatek SWD",
    template: "%s | Innovatek SWD",
  },
  description:
    "Innovatek SWD builds modular, Arabic-ready software for donations, facilities, visitor management and customer engagement across the UAE and MENA.",
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
    <html lang="en-AE" dir="ltr" className={outfit.variable} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
