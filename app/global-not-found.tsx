import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { outfit, plexArabic } from "@/app/fonts";
import "@/app/globals.css";
import { BrandLogo } from "@/components/brand-logo";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute: "Page Not Found | Innovatek SWD",
  },
  description: "The requested Innovatek SWD page could not be found.",
};

export default function GlobalNotFound() {
  return (
    <html
      lang="en-AE"
      dir="ltr"
      className={`not-found-root ${outfit.variable} ${plexArabic.variable}`}
    >
      <body className="not-found-page">
        <main>
          <BrandLogo />
          <p className="eyebrow">404 · Route not found</p>
          <h1>This page stepped outside the system.</h1>
          <p>
            Return to Innovatek’s operational software overview, or continue in Arabic.
          </p>
          <div>
            <Link href="/" className="button button--primary">
              <ArrowLeft aria-hidden="true" size={18} />
              Innovatek home
            </Link>
            <Link href="/ar" hrefLang="ar-AE" className="button button--outline">
              العربية
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
