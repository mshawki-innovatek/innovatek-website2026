export const SITE_NAME = "Innovatek SWD";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.innovatek.ae";

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

/** App subdomain shown in the platform section's mock browser chrome, tied to the
 *  company's verified email domain rather than the marketing site's SITE_URL. */
export const APP_HOST = `app.${CONTACT.email.split("@")[1].toLowerCase()}`;

export const canonicalPath = (path = "/") => {
  if (path === "/") return "/";

  return `/${path.replace(/^\/+|\/+$/g, "")}/`;
};

export const canonicalUrl = (path = "/") =>
  new URL(canonicalPath(path), `${SITE_URL}/`).toString();

export const absoluteUrl = (path = "/") =>
  new URL(path, `${SITE_URL}/`).toString();
