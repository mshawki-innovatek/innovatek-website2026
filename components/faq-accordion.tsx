"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const open = openIndex === index;
        const answerId = `faq-answer-${index}`;
        const buttonId = `faq-question-${index}`;

        return (
          <div className={open ? "faq-item faq-item--open" : "faq-item"} key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={answerId}
                onClick={() => setOpenIndex(open ? -1 : index)}
              >
                <span>{item.question}</span>
                <Plus aria-hidden="true" />
              </button>
            </h3>
            <div
              id={answerId}
              role="region"
              aria-labelledby={buttonId}
              className="faq-item__answer"
              hidden={!open}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

