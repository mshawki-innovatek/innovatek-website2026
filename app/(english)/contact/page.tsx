import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata("en", "contact");

export default function Page() {
  return <ContactPage locale="en" />;
}
