import type { Locale } from "@/lib/content";
import { canonicalUrl, CONTACT, SITE_NAME, SITE_URL } from "@/lib/site";
import { MarketingHeader, MarketingFooter } from "@/components/marketing-chrome";
import { ContactSection } from "@/components/contact-section";
import { JsonLd } from "@/components/json-ld";

export function ContactPage({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const prefix = ar ? "/ar" : "";

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: canonicalUrl(`${prefix}/contact`),
    name: ar ? "تواصل مع إنوفاتك SWD" : "Contact Innovatek SWD",
    about: { "@id": `${SITE_URL}/#organization` },
    mainEntity: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
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
    inLanguage: ar ? "ar-AE" : "en-AE",
  };

  return (
    <div className="designer-landing secondary-page" data-lang={locale} dir={ar ? "rtl" : "ltr"}>
      <JsonLd data={schema} />
      <MarketingHeader locale={locale} alternateHref={ar ? "/contact" : "/ar/contact"} />
      <main id="main-content" className="overflow-x-hidden w-full max-w-full">
        <ContactSection locale={locale} standalone />
      </main>
      <MarketingFooter locale={locale} alternateHref={ar ? "/contact/" : "/ar/contact/"} />
    </div>
  );
}
