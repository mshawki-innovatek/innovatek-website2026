import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { HomeCopy, Locale, Solution } from "@/lib/content";
import { ProductStoryMotion } from "@/components/product-story-motion";

type ProductStoryProps = {
  locale: Locale;
  copy: HomeCopy["story"];
  solutions: Solution[];
};

export function ProductStory({ locale, copy, solutions }: ProductStoryProps) {
  const prefix = locale === "ar" ? "/ar" : "";

  return (
    <section id="product-story" className="product-story section" aria-labelledby="product-story-title">
      <ProductStoryMotion />
      <div className="product-story__grid shell">
        <div className="product-story__intro" data-story-intro>
          <p className="eyebrow eyebrow--light">{copy.preface}</p>
          <h2 id="product-story-title">{copy.title}</h2>
          <p>{copy.body}</p>
          <Link href={`${prefix}/#platform`} className="text-link text-link--light">
            {copy.cta}
            <ArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </div>

        <div className="product-story__chapters">
          {solutions.map((solution) => (
            <article className="story-chapter" data-story-chapter key={solution.slug}>
              <div className="story-chapter__visual" data-story-visual>
                <Image
                  src={solution.image}
                  alt={solution.imageAlt}
                  fill
                  sizes="(max-width: 959px) 100vw, 58vw"
                />
                <div className="story-chapter__interface">
                  <span>{solution.category}</span>
                  <strong>{solution.shortName}</strong>
                  <div className="story-chapter__checks">
                    {solution.capabilities.slice(0, 3).map((capability) => (
                      <span key={capability}>
                        <Check aria-hidden="true" size={12} strokeWidth={3} />
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="story-chapter__copy">
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <Link href={solution.href} className="text-link text-link--light">
                  {solution.shortName}
                  <ArrowUpRight aria-hidden="true" size={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
