import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/site";
import { languageAlternates } from "@/lib/page-metadata";
import { PRODUCT_PAGES } from "@/lib/product-pages";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/contact", ...PRODUCT_PAGES.map(({ id }) => `/products/${id}`)];
  return paths.flatMap((path) =>
    ["", "/ar"].map((prefix) => ({
      url: canonicalUrl(`${prefix}${path}`),
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
