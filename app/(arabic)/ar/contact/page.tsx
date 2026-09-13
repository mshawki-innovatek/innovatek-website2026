import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata("ar", "contact");

export default function Page() {
  return <ContactPage locale="ar" />;
}
