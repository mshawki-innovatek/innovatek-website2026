import type { HomeCopy } from "@/lib/content";
import { FaqAccordion } from "@/components/faq-accordion";

type FaqSectionProps = {
  copy: HomeCopy["faq"];
  items: Array<{ question: string; answer: string }>;
};

export function FaqSection({ copy, items }: FaqSectionProps) {
  return (
    <section className="faq-section section section--light" aria-labelledby="faq-title">
      <div className="shell faq-section__grid">
        <div className="faq-section__intro">
          <p className="eyebrow">{copy.preface}</p>
          <h2 id="faq-title">{copy.title}</h2>
        </div>
        <FaqAccordion items={items} />
      </div>
    </section>
  );
}

