import type { Metadata } from "next";
import { canonicalUrl } from "@/lib/site";
import { languageAlternates } from "@/lib/page-metadata";
import { LegalPage } from "@/components/legal-page";
import { SEO_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "إشعار خصوصية الموقع",
  description: "إشعار خصوصية تشغيلي لإصدار موقع إنوفاتك SWD.",
  keywords: SEO_KEYWORDS.ar.privacy,
  alternates: { canonical: canonicalUrl("/ar/privacy"), languages: languageAlternates("/privacy") },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegalPage locale="ar" type="privacy" />;
}
