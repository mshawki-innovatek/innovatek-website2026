import { Mail, MapPin, Phone } from "lucide-react";
import type { HomeCopy, Locale } from "@/lib/content";
import { CONTACT } from "@/lib/site";
import { ContactForm } from "@/components/contact-form";

type ContactSectionProps = {
  locale: Locale;
  copy: HomeCopy["contact"];
  standalone?: boolean;
};

export function ContactSection({ locale, copy, standalone = false }: ContactSectionProps) {
  const ar = locale === "ar";
  const Heading = standalone ? "h1" : "h2";

  return (
    <section
      id="contact"
      className={standalone ? "contact-section contact-section--standalone" : "contact-section section"}
      aria-labelledby="contact-title"
    >
      <div className="contact-section__ambient" aria-hidden="true" />
      <div className="shell contact-section__grid">
        <div className="contact-section__copy">
          <p className="eyebrow eyebrow--light">{copy.preface}</p>
          <Heading id="contact-title">{copy.title}</Heading>
          <p>{copy.body}</p>
          <div className="contact-section__details">
            <a href={CONTACT.emailHref}>
              <Mail aria-hidden="true" size={18} />
              <span>
                <small>{copy.emailLabel}</small>
                {CONTACT.email}
              </span>
            </a>
            <a href={CONTACT.phoneHref}>
              <Phone aria-hidden="true" size={18} />
              <span>
                <small>{ar ? "الهاتف" : "Phone"}</small>
                <bdi dir="ltr">{CONTACT.phone}</bdi>
              </span>
            </a>
            <div>
              <MapPin aria-hidden="true" size={18} />
              <span>
                <small>{ar ? "العنوان" : "Address"}</small>
                {ar ? CONTACT.address.ar : CONTACT.address.en}
              </span>
            </div>
          </div>
          <p className="contact-section__note">{copy.note}</p>
        </div>

        <ContactForm locale={locale} />
      </div>
    </section>
  );
}
