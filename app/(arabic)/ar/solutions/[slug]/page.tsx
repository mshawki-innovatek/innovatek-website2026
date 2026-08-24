import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { solutionsAr } from "@/lib/content";
import { getSolutionKeywords } from "@/lib/seo";
import { SolutionDetailPage } from "@/components/solution-detail-page";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutionsAr.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutionsAr.find((item) => item.slug === slug);
  if (!solution) return {};

  return {
    title: solution.name,
    description: solution.description,
    keywords: getSolutionKeywords("ar", solution.slug),
    alternates: {
      canonical: solution.href,
      languages: {
        "en-AE": `/solutions/${solution.slug}`,
        "ar-AE": solution.href,
      },
    },
    openGraph: {
      type: "website",
      url: solution.href,
      locale: "ar_AE",
      title: `${solution.name} | إنوفاتك SWD`,
      description: solution.description,
      images: [{ url: solution.image, alt: solution.imageAlt }],
    },
  };
}

export default async function ArabicSolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = solutionsAr.find((item) => item.slug === slug);
  if (!solution) notFound();

  return <SolutionDetailPage locale="ar" solution={solution} />;
}
