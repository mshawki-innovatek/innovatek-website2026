export const SITE_NAME = "Innovatek SWD";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL = (
  configuredSiteUrl || "https://www.innovatek.ae"
).replace(/\/+$/, "");

export const CONTACT = {
  email: "Sales@innovatek-swd.com",
  emailHref: "mailto:Sales@innovatek-swd.com",
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

// Keep the mock app host tied to the verified company email domain.
export const APP_HOST = `app.${CONTACT.email.split("@")[1].toLowerCase()}`;

export const canonicalPath = (path = "/") => {
  if (path === "/") return "/";

  return `/${path.replace(/^\/+|\/+$/g, "")}/`;
};

export const canonicalUrl = (path = "/") =>
  new URL(canonicalPath(path), `${SITE_URL}/`).toString();

export const absoluteUrl = (path = "/") =>
  new URL(path, `${SITE_URL}/`).toString();
