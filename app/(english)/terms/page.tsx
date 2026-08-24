import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { SEO_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Terms of Use",
  description: "Operational terms of use for the Innovatek SWD website build.",
  keywords: SEO_KEYWORDS.en.terms,
  alternates: { canonical: "/terms", languages: { "en-AE": "/terms", "ar-AE": "/ar/terms" } },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegalPage locale="en" type="terms" />;
}
