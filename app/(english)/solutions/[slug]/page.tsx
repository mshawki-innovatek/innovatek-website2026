import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { solutions } from "@/lib/content";
import { getSolutionKeywords } from "@/lib/seo";
import { SolutionDetailPage } from "@/components/solution-detail-page";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) return {};

  return {
    title: solution.name,
    description: solution.description,
    keywords: getSolutionKeywords("en", solution.slug),
    alternates: {
      canonical: solution.href,
      languages: {
        "en-AE": solution.href,
        "ar-AE": `/ar/solutions/${solution.slug}`,
      },
    },
    openGraph: {
      type: "website",
      url: solution.href,
      title: `${solution.name} | Innovatek SWD`,
      description: solution.description,
      images: [{ url: solution.image, alt: solution.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${solution.name} | Innovatek SWD`,
      description: solution.description,
      images: [solution.image],
    },
  };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) notFound();

  return <SolutionDetailPage locale="en" solution={solution} />;
}
