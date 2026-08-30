import type { Metadata } from "next";
import { DesignerLanding } from "@/app/designer/designer-landing";
import { JsonLd } from "@/components/json-ld";
import { SEO_KEYWORDS } from "@/lib/seo";
import { buildHomeSchema } from "@/lib/home-schema";

export const metadata: Metadata = {
  title: {
    absolute: "إنوفاتك SWD | برمجيات ذكية للعطاء وإدارة المرافق",
  },
  description:
    "تبني إنوفاتك SWD منصات معيارية ثنائية اللغة لإدارة التبرعات والمرافق والزوار وتفاعل العملاء في الإمارات ومنطقة الشرق الأوسط.",
  keywords: SEO_KEYWORDS.ar.home,
  alternates: {
    canonical: "/ar",
    languages: {
      "en-AE": "/",
      "ar-AE": "/ar",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    url: "/ar",
    siteName: "Innovatek SWD",
    locale: "ar_AE",
    alternateLocale: ["en_AE"],
    title: "إنوفاتك SWD | برمجيات ذكية للعطاء وإدارة المرافق",
    description:
      "منصات معيارية ثنائية اللغة لإدارة التبرعات والمرافق والزوار وتفاعل العملاء في الإمارات والمنطقة.",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "منصات إنوفاتك التشغيلية" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "إنوفاتك SWD | برمجيات ذكية للعطاء وإدارة المرافق",
    description: "منصات تشغيلية معيارية وثنائية اللغة في الإمارات والمنطقة.",
    images: ["/opengraph-image.png"],
  },
};

export default function ArabicPage() {
  return (
    <>
      <JsonLd data={buildHomeSchema("ar")} />
      <DesignerLanding lang="ar" />
    </>
  );
}
