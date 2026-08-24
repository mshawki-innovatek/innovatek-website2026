import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";
import { SEO_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the Innovatek SWD product approach: Arabic-ready, modular operational software designed close to the teams who use it.",
  keywords: SEO_KEYWORDS.en.about,
  alternates: {
    canonical: "/about",
    languages: { "en-AE": "/about", "ar-AE": "/ar/about" },
  },
  openGraph: {
    type: "website",
    url: "/about",
    title: "About Innovatek SWD",
    description: "A UAE product team building operational software close to the work.",
    images: ["/assets/reference/innovatek-engineering-team.webp"],
  },
};

export default function Page() {
  return <AboutPage locale="en" />;
}
