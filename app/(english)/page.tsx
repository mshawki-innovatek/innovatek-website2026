import type { Metadata } from "next";
import { EnglishLanding } from "@/app/designer/en-landing";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata } from "@/lib/page-metadata";
import { buildHomeSchema } from "@/lib/home-schema";

export const metadata: Metadata = pageMetadata("en", "home");

export default function Page() {
  return (
    <>
      <JsonLd data={buildHomeSchema("en")} />
      <EnglishLanding />
    </>
  );
}
