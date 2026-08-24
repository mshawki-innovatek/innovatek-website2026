import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { SEO_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "إشعار خصوصية الموقع",
  description: "إشعار خصوصية تشغيلي لإصدار موقع إنوفاتك SWD.",
  keywords: SEO_KEYWORDS.ar.privacy,
  alternates: { canonical: "/ar/privacy", languages: { "en-AE": "/privacy", "ar-AE": "/ar/privacy" } },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegalPage locale="ar" type="privacy" />;
}
