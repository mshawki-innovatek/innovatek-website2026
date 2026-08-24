import type { Locale } from "@/lib/content";
import { homeCopy } from "@/lib/content";
import { absoluteUrl, CONTACT, SITE_NAME, SITE_URL } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";

export function ContactPage({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const prefix = ar ? "/ar" : "";
  const copy = homeCopy[locale];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: absoluteUrl(`${prefix}/contact`),
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
    <>
      <JsonLd data={schema} />
      <SiteHeader locale={locale} nav={copy.nav} alternateHref={ar ? "/contact" : "/ar/contact"} />
      <main className="overflow-x-hidden w-full max-w-full">
        <ContactSection locale={locale} copy={copy.contact} standalone />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
