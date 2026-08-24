import type { Metadata } from "next";
import { solutions } from "@/lib/content";
import { SolutionsIndexPage } from "@/components/solutions-index-page";
import { SEO_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Operational Software Solutions",
  description:
    "Explore Innovatek SWD software for donation management, facilities and CMMS, visitor management and AI-powered customer communication.",
  keywords: SEO_KEYWORDS.en.solutions,
  alternates: {
    canonical: "/solutions",
    languages: { "en-AE": "/solutions", "ar-AE": "/ar/solutions" },
  },
  openGraph: {
    type: "website",
    url: "/solutions",
    title: "Operational Software Solutions | Innovatek SWD",
    description: "Four focused platforms for giving, facilities, visitors and customer engagement.",
    images: ["/opengraph-image.png"],
  },
};

export default function SolutionsPage() {
  return <SolutionsIndexPage locale="en" solutions={solutions} />;
}
