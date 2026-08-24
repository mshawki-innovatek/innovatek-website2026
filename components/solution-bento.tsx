import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  HandHeart,
  MessagesSquare,
  ScanFace,
} from "lucide-react";
import type { HomeCopy, Solution } from "@/lib/content";
import { ProductScreen } from "@/components/product-screen";

type SolutionBentoProps = {
  locale: "en" | "ar";
  copy: HomeCopy["interest"];
  solutions: Solution[];
};

const icons = [HandHeart, Building2, ScanFace, MessagesSquare];

export function SolutionBento({ locale, copy, solutions }: SolutionBentoProps) {
  return (
    <section id="solutions" className="section section--light solutions-section">
      <div className="shell">
        <div className="section-intro section-intro--wide">
          <p className="eyebrow">{copy.preface}</p>
          <h2 className="display-heading">
            {copy.titleStart} {copy.titleEnd}
          </h2>
          <p>{copy.body}</p>
        </div>

        <div className="solution-grid grid-flow-dense">
          {solutions.map((solution, index) => {
            const Icon = icons[index];
            return (
              <Link
                href={solution.href}
                key={solution.slug}
                className={`solution-card ${solution.cardClass} solution-card--${index}`}
              >
                <div className="solution-card__copy">
                  <div className="solution-card__topline">
                    <span className="solution-card__icon">
                      <Icon aria-hidden="true" size={20} />
                    </span>
                    <span>{solution.category}</span>
                  </div>
                  <div>
                    <h3>{solution.shortName}</h3>
                    <p>{solution.title}</p>
                  </div>
                  <span className="solution-card__link">
                    {copy.link}
                    <ArrowUpRight aria-hidden="true" size={18} />
                  </span>
                </div>
                <div className="solution-card__screen" aria-hidden="true">
                  <ProductScreen solution={solution} locale={locale} compact />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
