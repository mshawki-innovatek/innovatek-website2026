import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { SEO_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "شروط استخدام الموقع",
  description: "شروط استخدام تشغيلية لإصدار موقع إنوفاتك SWD.",
  keywords: SEO_KEYWORDS.ar.terms,
  alternates: { canonical: "/ar/terms", languages: { "en-AE": "/terms", "ar-AE": "/ar/terms" } },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegalPage locale="ar" type="terms" />;
}
