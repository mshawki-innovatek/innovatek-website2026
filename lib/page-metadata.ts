import type { Metadata } from "next";
import type { Locale } from "@/lib/content";
import { canonicalUrl, SITE_NAME } from "@/lib/site";

export const PAGE_SEO = {
  en: {
    home: { title: "Donation Systems, CMMS & Visitor Software | Innovatek SWD", description: "Arabic-ready donation systems, facility management, visitor management and AI customer communication software for organisations in the UAE and MENA." },
    about: { title: "About Innovatek SWD | Software Company in Dubai, UAE", description: "Meet the Dubai team behind Donation Hub, Bunyan, Smart VMS and seven more connected products for giving, facilities and customer engagement across MENA." },
    contact: { title: "Book a Software Demo in Dubai | Innovatek SWD", description: "Discuss donation systems, CMMS, visitor management, donation kiosks or AI customer engagement with Innovatek SWD. Book a focused demo for your organisation." },
  },
  ar: {
    home: { title: "أنظمة التبرعات وإدارة المرافق والزوار | إنوفاتك SWD", description: "أنظمة إدارة التبرعات والمرافق والصيانة والزوار ومنصات تواصل العملاء بالذكاء الاصطناعي. عشرة حلول بالعربية والإنجليزية للمؤسسات في الإمارات والمنطقة." },
    about: { title: "عن إنوفاتك SWD | شركة برمجيات في دبي والإمارات", description: "تعرّف إلى فريق إنوفاتك في دبي الذي يبني Donation Hub وبنيان وSmart VMS وسبعة منتجات مترابطة للعطاء والمرافق وتفاعل العملاء في المنطقة." },
    contact: { title: "احجز عرضاً لأنظمة إنوفاتك في دبي | إنوفاتك SWD", description: "ناقش أنظمة التبرعات وإدارة المرافق والصيانة والزوار وأكشاك التبرع والتواصل الذكي مع فريق إنوفاتك. احجز عرضاً مناسباً لاحتياجات مؤسستك." },
  },
} as const;

export function languageAlternates(path = "") {
  const english = canonicalUrl(path || "/");
  const arabic = canonicalUrl(`/ar${path}`);
  return { en: english, ar: arabic, "en-AE": english, "ar-AE": arabic, "x-default": english };
}

export function pageMetadata(locale: Locale, page: keyof typeof PAGE_SEO.en): Metadata {
  const copy = PAGE_SEO[locale][page];
  const path = page === "home" ? "" : `/${page}`;
  const url = canonicalUrl(`${locale === "ar" ? "/ar" : ""}${path}`);
  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website", url, siteName: SITE_NAME,
      locale: locale === "ar" ? "ar_AE" : "en_AE",
      alternateLocale: [locale === "ar" ? "en_AE" : "ar_AE"],
      title: copy.title, description: copy.description,
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: locale === "ar" ? "إنوفاتك: أنظمة التبرعات والمرافق والزوار والتواصل" : "Innovatek software for giving, facilities, visitors and communication" }],
    },
    twitter: { card: "summary_large_image", title: copy.title, description: copy.description, images: ["/opengraph-image.png"] },
  };
}

// Verification codes are public identifiers, supplied by the property's owner.
export const searchVerification: Metadata["verification"] = {
  google: process.env.GOOGLE_SITE_VERIFICATION?.trim() || undefined,
  other: process.env.BING_SITE_VERIFICATION?.trim()
    ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION.trim() }
    : undefined,
};
