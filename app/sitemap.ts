import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/site";
import { languageAlternates } from "@/lib/page-metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Product pages stay noindex and outside the sitemap pending manager approval.
  return ["", "/about", "/contact"].flatMap((path) =>
    ["", "/ar"].map((prefix) => ({
      url: canonicalUrl(`${prefix}${path}`),
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
