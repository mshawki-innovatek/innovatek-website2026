import type { Locale } from "@/lib/content";
import {
  faqs,
  faqsAr,
  homeCopy,
  solutions,
  solutionsAr,
} from "@/lib/content";
import { absoluteUrl, CONTACT, SITE_NAME, SITE_URL } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { TrustedClients } from "@/components/trusted-clients";
import { RoleMarquee } from "@/components/role-marquee";
import { SolutionBento } from "@/components/solution-bento";
import { ProductStory } from "@/components/product-story";
import { SharedCore } from "@/components/shared-core";
import { PerspectivesCarousel } from "@/components/perspectives-carousel";
import { Approach } from "@/components/approach";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const copy = homeCopy[locale];
  const localizedSolutions = locale === "ar" ? solutionsAr : solutions;
  const localizedFaqs = locale === "ar" ? faqsAr : faqs;
  const pageUrl = locale === "ar" ? absoluteUrl("/ar") : SITE_URL;

  const schema = {
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
        name: locale === "ar" ? "حلول إنوفاتك التشغيلية" : "Innovatek operational software solutions",
        itemListElement: localizedSolutions.map((solution, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(solution.href),
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

  return (
    <>
      <JsonLd data={schema} />
      <SiteHeader locale={locale} nav={copy.nav} />
      <main className="overflow-x-hidden w-full max-w-full">
        <Hero locale={locale} copy={copy.hero} />
        <TrustedClients locale={locale} />
        <RoleMarquee copy={copy} />
        <SolutionBento locale={locale} copy={copy.interest} solutions={localizedSolutions} />
        <ProductStory locale={locale} copy={copy.story} solutions={localizedSolutions} />
        <SharedCore copy={copy.core} locale={locale} />
        <PerspectivesCarousel locale={locale} copy={copy.perspectives} />
        <Approach copy={copy.approach} />
        <FaqSection copy={copy.faq} items={localizedFaqs} />
        <ContactSection locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
