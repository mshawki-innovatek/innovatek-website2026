import {
  faqs,
  faqsAr,
  homeCopy,
  solutions,
  solutionsAr,
  type Locale,
} from "@/lib/content";
import { absoluteUrl, canonicalUrl, CONTACT, SITE_NAME, SITE_URL } from "@/lib/site";

export function buildHomeSchema(locale: Locale) {
  const copy = homeCopy[locale];
  const localizedSolutions = locale === "ar" ? solutionsAr : solutions;
  const localizedFaqs = locale === "ar" ? faqsAr : faqs;
  const pageUrl = canonicalUrl(locale === "ar" ? "/ar" : "/");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: absoluteUrl("/assets/reference/innovatek-logo-primary.png"),
        email: CONTACT.email,
        telephone: CONTACT.phoneInternational,
        address: {
          "@type": "PostalAddress",
          ...CONTACT.address.schema,
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: CONTACT.email,
          telephone: CONTACT.phoneInternational,
          contactType: "sales",
          areaServed: "AE",
          availableLanguage: ["English", "Arabic"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: ["en-AE", "ar-AE"],
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: copy.hero.title,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        inLanguage: locale === "ar" ? "ar-AE" : "en-AE",
      },
      {
        "@type": "ItemList",
        name:
          locale === "ar"
            ? "حلول إنوفاتك التشغيلية"
            : "Innovatek operational software solutions",
        itemListElement: localizedSolutions.map((solution, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: canonicalUrl(solution.href),
          name: solution.name,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: localizedFaqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
