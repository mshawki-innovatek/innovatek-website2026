import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata("en", "about");

export default function Page() {
  return <AboutPage locale="en" />;
}
