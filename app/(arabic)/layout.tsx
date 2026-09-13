import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { outfit, plexArabic } from "@/app/fonts";
import "@/app/globals.css";
import "@/app/designer/landing.css";
import "@/app/secondary-pages.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { searchVerification } from "@/lib/page-metadata";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "إنوفاتك SWD | برمجيات ذكية للعطاء وإدارة المرافق",
    template: "%s | إنوفاتك SWD",
  },
  description:
    "تكنولوجيا من أجل الأثر — منصات ذكاء أصلية للعطاء وإدارة المرافق وتفاعل العملاء في الإمارات والسعودية ومصر والشرق الأوسط. معيارية بالتصميم، عربية أولاً، وبدعم بعد التشغيل.",
  applicationName: SITE_NAME,
  verification: searchVerification,
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
  colorScheme: "only light",
};

export default function ArabicRootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="ar-AE"
      dir="rtl"
      className={`${outfit.variable} ${plexArabic.variable} ${plexArabic.className}`}
      data-scroll-behavior="smooth"
    >
      <body>{children}</body>
    </html>
  );
}
