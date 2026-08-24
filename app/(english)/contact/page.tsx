import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";
import { SEO_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Book a Working Session",
  description:
    "Bring Innovatek one real operational workflow and prepare a focused working session around the people, systems and next decision involved.",
  keywords: SEO_KEYWORDS.en.contact,
  alternates: {
    canonical: "/contact",
    languages: { "en-AE": "/contact", "ar-AE": "/ar/contact" },
  },
  openGraph: {
    type: "website",
    url: "/contact",
    title: "Book a Working Session | Innovatek SWD",
    description: "Start with one real workflow—without a generic sales deck.",
    images: ["/opengraph-image.png"],
  },
};

export default function Page() {
  return <ContactPage locale="en" />;
}
