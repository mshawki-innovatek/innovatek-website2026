import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { SEO_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Website Privacy Notice",
  description: "Operational privacy notice for the Innovatek SWD website build.",
  keywords: SEO_KEYWORDS.en.privacy,
  alternates: { canonical: "/privacy", languages: { "en-AE": "/privacy", "ar-AE": "/ar/privacy" } },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegalPage locale="en" type="privacy" />;
}
