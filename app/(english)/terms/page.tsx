import type { Metadata } from "next";
import { canonicalUrl } from "@/lib/site";
import { languageAlternates } from "@/lib/page-metadata";
import { LegalPage } from "@/components/legal-page";
import { SEO_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Terms of Use",
  description: "Operational terms of use for the Innovatek SWD website build.",
  keywords: SEO_KEYWORDS.en.terms,
  alternates: { canonical: canonicalUrl("/terms"), languages: languageAlternates("/terms") },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegalPage locale="en" type="terms" />;
}
