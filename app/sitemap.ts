import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/site";
import { languageAlternates } from "@/lib/page-metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Only canonical, indexable pages. Retired routes and noindex legal drafts stay out.
  return ["", "/about", "/contact"].flatMap((path) =>
    ["", "/ar"].map((prefix) => ({
      url: canonicalUrl(`${prefix}${path}`),
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
