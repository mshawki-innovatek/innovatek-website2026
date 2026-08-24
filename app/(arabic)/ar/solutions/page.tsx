import type { Metadata } from "next";
import { solutionsAr } from "@/lib/content";
import { SolutionsIndexPage } from "@/components/solutions-index-page";
import { SEO_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "حلول البرمجيات التشغيلية",
  description:
    "استكشف حلول إنوفاتك لإدارة التبرعات والمرافق والصيانة والزوار والتواصل الذكي مع العملاء.",
  keywords: SEO_KEYWORDS.ar.solutions,
  alternates: {
    canonical: "/ar/solutions",
    languages: { "en-AE": "/solutions", "ar-AE": "/ar/solutions" },
  },
  openGraph: {
    type: "website",
    url: "/ar/solutions",
    locale: "ar_AE",
    title: "حلول البرمجيات التشغيلية | إنوفاتك SWD",
    description: "أربع منصات مركزة للعطاء والمرافق والزوار وتفاعل العملاء.",
    images: ["/opengraph-image.png"],
  },
};

export default function ArabicSolutionsPage() {
  return <SolutionsIndexPage locale="ar" solutions={solutionsAr} />;
}
