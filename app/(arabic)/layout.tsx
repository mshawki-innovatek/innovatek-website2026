import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { outfit } from "@/app/fonts";
import "@/app/globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { SEO_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "إنوفاتك SWD | برمجيات ذكية للعطاء وإدارة المرافق",
    template: "%s | إنوفاتك SWD",
  },
  description:
    "تبني إنوفاتك SWD منصات معيارية ثنائية اللغة لإدارة التبرعات والمرافق والزوار وتفاعل العملاء في الإمارات ومنطقة الشرق الأوسط.",
  keywords: SEO_KEYWORDS.ar.home,
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

export default function ArabicRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar-AE" dir="rtl" className={outfit.variable} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
