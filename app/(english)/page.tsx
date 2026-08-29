import type { Metadata } from "next";
import { DesignerLanding } from "@/app/designer/designer-landing";
import { SEO_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "AI Software for Giving & Facility Management | Innovatek SWD",
  },
  description:
    "Innovatek SWD builds modular, Arabic-ready software for donations, facilities, visitor management and customer engagement across the UAE and MENA.",
  keywords: SEO_KEYWORDS.en.home,
  alternates: {
    canonical: "/",
    languages: {
      "en-AE": "/",
      "ar-AE": "/ar",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Innovatek SWD",
    locale: "en_AE",
    alternateLocale: ["ar_AE"],
    title: "AI Software for Giving & Facility Management | Innovatek SWD",
    description:
      "Modular, Arabic-ready operational software for giving, facilities, visitors and customer engagement across the UAE and MENA.",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Innovatek SWD operational software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Software for Giving & Facility Management | Innovatek SWD",
    description:
      "Modular, Arabic-ready operational software for giving, facilities, visitors and customer engagement.",
    images: ["/opengraph-image.png"],
  },
};

export default function Page() {
  return <DesignerLanding lang="en" />;
}
