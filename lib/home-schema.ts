import type { Locale } from "@/lib/content";
import { T } from "@/lib/designer/landing-data";
import { productPath } from "@/lib/product-pages";
import { PRODUCT_CATALOG } from "@/lib/product-catalog";
import { PAGE_SEO } from "@/lib/page-metadata";
import { absoluteUrl, canonicalUrl, CONTACT, SITE_NAME, SITE_URL } from "@/lib/site";

export function buildHomeSchema(locale: Locale) {
  const pageUrl = canonicalUrl(locale === "ar" ? "/ar" : "/");
  const organizationId = `${SITE_URL}/#organization`;
  const products = PRODUCT_CATALOG.map((product) => ({
    "@type": "Service",
    "@id": `${canonicalUrl(productPath(product.id, locale))}#service`,
    url: canonicalUrl(productPath(product.id, locale)),
    name: product.name[locale],
    serviceType: product.category[locale],
    description: product.description[locale],
    provider: { "@id": organizationId },
    areaServed: ["United Arab Emirates", "Saudi Arabia", "Egypt"].map((name) => ({ "@type": "Country", name })),
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization", "@id": organizationId,
        name: SITE_NAME, url: canonicalUrl(),
        logo: absoluteUrl("/assets/reference/innovatek-logo-primary.png"),
        email: CONTACT.email, telephone: CONTACT.phoneInternational,
        address: { "@type": "PostalAddress", ...CONTACT.address.schema },
        contactPoint: {
          "@type": "ContactPoint", email: CONTACT.email, telephone: CONTACT.phoneInternational,
          contactType: "sales", areaServed: "AE", availableLanguage: ["English", "Arabic"],
        },
        knowsAbout: PRODUCT_CATALOG.map((product) => product.category[locale]),
      },
      {
        "@type": "WebSite", "@id": `${SITE_URL}/#website`,
        url: canonicalUrl(), name: SITE_NAME,
        publisher: { "@id": organizationId }, inLanguage: ["en", "ar"],
      },
      {
        "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl,
        name: PAGE_SEO[locale].home.title, description: PAGE_SEO[locale].home.description,
        isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": organizationId },
        inLanguage: locale, mainEntity: { "@id": `${pageUrl}#products` },
      },
      {
        "@type": "ItemList", "@id": `${pageUrl}#products`, numberOfItems: products.length,
        name: locale === "ar" ? "حلول إنوفاتك التشغيلية" : "Innovatek operational software solutions",
        itemListElement: products.map((product, index) => ({
          "@type": "ListItem", position: index + 1, item: { "@id": product["@id"] },
        })),
      },
      ...products,
      {
        "@type": "FAQPage", "@id": `${pageUrl}#faq`,
        mainEntity: T.faqs.map((faq) => ({
          "@type": "Question", name: faq[locale][0],
          acceptedAnswer: { "@type": "Answer", text: faq[locale][1] },
        })),
      },
    ],
  };
}
