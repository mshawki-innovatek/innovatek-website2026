"use client";

import { useId, useRef, useState } from "react";
import type { KeyboardEvent, RefObject } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import type { HomeCopy, Locale } from "@/lib/content";

type PerspectivesCarouselProps = {
  locale: Locale;
  copy: HomeCopy["perspectives"];
};

export function PerspectivesCarousel({ locale, copy }: PerspectivesCarouselProps) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const panelId = useId();
  const avatarRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const railRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const item = copy.items[active];
  const isArabic = locale === "ar";
  const itemCount = copy.items.length;

  const describePerspective = (role: string) =>
    isArabic ? `عرض منظور ${role}` : `View ${role} perspective`;

  const goPrevious = () => {
    setDirection("backward");
    setActive((index) => (index - 1 + itemCount) % itemCount);
  };

  const goNext = () => {
    setDirection("forward");
    setActive((index) => (index + 1) % itemCount);
  };

  const selectPerspective = (index: number) => {
    if (index === active) return;

    const forwardDistance = (index - active + itemCount) % itemCount;
    const backwardDistance = (active - index + itemCount) % itemCount;
    setDirection(forwardDistance <= backwardDistance ? "forward" : "backward");
    setActive(index);
  };

  const handleSelectorKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    orientation: "horizontal" | "vertical",
    refs: RefObject<Array<HTMLButtonElement | null>>,
  ) => {
    let targetIndex: number | null = null;
    const horizontalStep = isArabic ? -1 : 1;

    if (event.key === "Home") targetIndex = 0;
    if (event.key === "End") targetIndex = itemCount - 1;
    if (orientation === "horizontal" && event.key === "ArrowRight") {
      targetIndex = (active + horizontalStep + itemCount) % itemCount;
    }
    if (orientation === "horizontal" && event.key === "ArrowLeft") {
      targetIndex = (active - horizontalStep + itemCount) % itemCount;
    }
    if (orientation === "vertical" && event.key === "ArrowDown") {
      targetIndex = (active + 1) % itemCount;
    }
    if (orientation === "vertical" && event.key === "ArrowUp") {
      targetIndex = (active - 1 + itemCount) % itemCount;
    }

    if (targetIndex === null) return;
    event.preventDefault();
    selectPerspective(targetIndex);
    refs.current?.[targetIndex]?.focus();
  };

  const motionDirection = isArabic
    ? direction === "forward" ? "backward" : "forward"
    : direction;

  return (
    <section className="perspectives section" aria-labelledby="perspectives-title">
      <div className="shell">
        <div className="section-intro section-intro--split">
          <div>
            <p className="eyebrow">{copy.preface}</p>
            <h2 id="perspectives-title" className="display-heading">
              {copy.title}
            </h2>
          </div>
          <div className="carousel-controls">
            <button type="button" onClick={goPrevious} aria-label={copy.previous} aria-controls={panelId}>
              {isArabic ? <ArrowRight aria-hidden="true" /> : <ArrowLeft aria-hidden="true" />}
            </button>
            <span>
              {String(active + 1).padStart(2, "0")} / {String(itemCount).padStart(2, "0")}
            </span>
            <button type="button" onClick={goNext} aria-label={copy.next} aria-controls={panelId}>
              {isArabic ? <ArrowLeft aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}
            </button>
          </div>
        </div>

        <dl className="impact-stats">
          {copy.stats.map((stat) => (
            <div key={stat.label}>
              <dd>{stat.value}</dd>
              <dt>{stat.label}</dt>
            </div>
          ))}
        </dl>

        <div className="perspective-card">
          <div
            className="perspective-card__avatars"
            role="group"
            aria-label={isArabic ? "اختر منظوراً تشغيلياً" : "Choose an operational perspective"}
            onKeyDown={(event) => handleSelectorKeyDown(event, "horizontal", avatarRefs)}
          >
            {copy.items.map((entry, index) => (
              <button
                type="button"
                key={entry.role}
                className={index === active ? "perspective-avatar perspective-avatar--active" : "perspective-avatar"}
                style={{ zIndex: index === active ? itemCount + 1 : itemCount - index }}
                aria-label={describePerspective(entry.role)}
                aria-pressed={index === active}
                aria-controls={panelId}
                tabIndex={index === active ? 0 : -1}
                ref={(node) => { avatarRefs.current[index] = node; }}
                onClick={() => selectPerspective(index)}
              >
                <span aria-hidden="true">{entry.initials}</span>
              </button>
            ))}
          </div>
          <div className="perspective-card__quote" id={panelId} aria-live="polite" aria-atomic="true">
            <div
              key={`${active}-${motionDirection}`}
              className={`perspective-card__quote-content perspective-card__quote-content--${motionDirection}`}
            >
              <Quote aria-hidden="true" size={32} />
              <p className="perspective-card__role">{item.role}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </div>
          <div
            className="perspective-card__rail"
            role="group"
            aria-label={isArabic ? "انتقل إلى منظور" : "Go to perspective"}
            onKeyDown={(event) => handleSelectorKeyDown(event, "vertical", railRefs)}
          >
            {copy.items.map((entry, index) => (
              <button
                type="button"
                key={entry.role}
                className={index === active ? "perspective-card__dot perspective-card__dot--active" : "perspective-card__dot"}
                aria-label={describePerspective(entry.role)}
                aria-pressed={index === active}
                aria-controls={panelId}
                tabIndex={index === active ? 0 : -1}
                ref={(node) => { railRefs.current[index] = node; }}
                onClick={() => selectPerspective(index)}
              >
                <span aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
