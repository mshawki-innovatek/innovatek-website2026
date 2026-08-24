import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";
import { SEO_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "احجز جلسة عمل",
  description:
    "أحضر إلى إنوفاتك مسار عمل حقيقياً وجهّز جلسة مركزة حول الأشخاص والأنظمة والقرار التالي.",
  keywords: SEO_KEYWORDS.ar.contact,
  alternates: {
    canonical: "/ar/contact",
    languages: { "en-AE": "/contact", "ar-AE": "/ar/contact" },
  },
  openGraph: {
    type: "website",
    url: "/ar/contact",
    locale: "ar_AE",
    title: "احجز جلسة عمل | إنوفاتك SWD",
    description: "ابدأ بمسار عمل حقيقي، من دون عرض مبيعات عام.",
    images: ["/opengraph-image.png"],
  },
};

export default function Page() {
  return <ContactPage locale="ar" />;
}
