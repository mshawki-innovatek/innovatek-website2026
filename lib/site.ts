export const SITE_NAME = "Innovatek SWD";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.innovatek.ae";

export const CONTACT = {
  email: "hello@innovatek.ae",
  emailHref: "mailto:hello@innovatek.ae",
  phone: "055 889 1317",
  phoneInternational: "+971 55 889 1317",
  phoneHref: "tel:+971558891317",
  address: {
    en: "Business Bay, Dubai, UAE",
    ar: "الخليج التجاري، دبي، الإمارات العربية المتحدة",
    schema: {
      streetAddress: "Business Bay",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
  },
} as const;

export const CONTACT_EMAIL = CONTACT.email;

export const absoluteUrl = (path = "/") =>
  new URL(path, `${SITE_URL}/`).toString();
