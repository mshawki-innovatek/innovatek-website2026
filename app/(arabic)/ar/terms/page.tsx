import type { Metadata } from "next";
import { canonicalUrl } from "@/lib/site";
import { languageAlternates } from "@/lib/page-metadata";
import { LegalPage } from "@/components/legal-page";
import { SEO_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "شروط استخدام الموقع",
  description: "شروط استخدام تشغيلية لإصدار موقع إنوفاتك SWD.",
  keywords: SEO_KEYWORDS.ar.terms,
  alternates: { canonical: canonicalUrl("/ar/terms"), languages: languageAlternates("/terms") },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegalPage locale="ar" type="terms" />;
}
