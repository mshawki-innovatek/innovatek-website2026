import type { Metadata } from "next";
import type { Locale } from "@/lib/content";
import { getProductPage, productPath } from "@/lib/product-pages";
import { languageAlternates } from "@/lib/page-metadata";
import { canonicalUrl, SITE_NAME } from "@/lib/site";

export function productMetadata(id: string, locale: Locale): Metadata {
  const product = getProductPage(id, locale);
  if (!product) return {};
  const url = canonicalUrl(productPath(id, locale));
  const description = product.description[locale];
  return {
    title: { absolute: product.title }, description,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    alternates: { canonical: url, languages: languageAlternates(`/products/${id}`) },
    openGraph: { type: "website", url, siteName: SITE_NAME, title: product.title, description,
      locale: locale === "ar" ? "ar_AE" : "en_AE", alternateLocale: [locale === "ar" ? "en_AE" : "ar_AE"],
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: SITE_NAME }] },
    twitter: { card: "summary_large_image", title: product.title, description, images: ["/opengraph-image.png"] },
  };
}
