import type { MetadataRoute } from "next";
import { solutions } from "@/lib/content";
import { canonicalUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "/", priority: 1, changeFrequency: "monthly" as const },
    { path: "/ar", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/solutions", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/ar/solutions", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/ar/about", priority: 0.65, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/ar/contact", priority: 0.75, changeFrequency: "yearly" as const },
  ];

  const solutionPages = solutions.flatMap((solution) => [
    {
      path: `/solutions/${solution.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: `/ar/solutions/${solution.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
  ]);

  return [...staticPages, ...solutionPages].map((entry) => ({
    url: canonicalUrl(entry.path),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}

