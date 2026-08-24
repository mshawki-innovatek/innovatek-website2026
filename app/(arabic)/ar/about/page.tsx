import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";
import { SEO_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "عن إنوفاتك",
  description:
    "تعرّف إلى منهج إنوفاتك SWD في بناء برمجيات تشغيلية عربية ومعيارية بالقرب من الفرق التي تستخدمها.",
  keywords: SEO_KEYWORDS.ar.about,
  alternates: {
    canonical: "/ar/about",
    languages: { "en-AE": "/about", "ar-AE": "/ar/about" },
  },
  openGraph: {
    type: "website",
    url: "/ar/about",
    locale: "ar_AE",
    title: "عن إنوفاتك SWD",
    description: "فريق منتج في الإمارات يبني البرمجيات التشغيلية بالقرب من العمل.",
    images: ["/assets/reference/innovatek-engineering-team.webp"],
  },
};

export default function Page() {
  return <AboutPage locale="ar" />;
}
