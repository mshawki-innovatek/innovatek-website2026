import type { Metadata } from "next";
import { ArabicLanding } from "@/app/designer/ar-landing";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata } from "@/lib/page-metadata";
import { buildHomeSchema } from "@/lib/home-schema";

export const metadata: Metadata = pageMetadata("ar", "home");

export default function ArabicPage() {
  return (
    <>
      <JsonLd data={buildHomeSchema("ar")} />
      <ArabicLanding />
    </>
  );
}
