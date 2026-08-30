"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type DesignerMotionProps = {
  /** Reports which flagship chapter the reader is on, for the sticky index. */
  onPanelChange: (index: number) => void;
};

/**
 * Motion for the flagship-solutions story, built the way the product story on
 * `main` is: nothing is pinned under the reader and no panel is swapped in
 * place. All four chapters sit on the page, the intro column stays put beside
 * them, and each screen comes into focus as it arrives and recedes as it
 * leaves. Scroll stays the reader's, which is what the pinned tab deck took
 * away from them.
 */
export function DesignerMotion({ onPanelChange }: DesignerMotionProps) {
  useGSAP(() => {
    const root = document.querySelector<HTMLElement>(".designer-landing");
    if (!root) return;

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const impactFrame = root.querySelector<HTMLElement>(
        '[data-image-frame="impact"]',
      );
      const impactImage = impactFrame?.querySelector<HTMLElement>("img");
      if (impactFrame && impactImage) {
        gsap.fromTo(
          impactImage,
          { scale: 1.08, opacity: 0.72 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: impactFrame,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }

      const chapters = gsap.utils.toArray<HTMLElement>(
        "[data-story-chapter]",
        root,
      );

      chapters.forEach((chapter, index) => {
        const heading = chapter.querySelector<HTMLElement>(
          "[data-story-heading]",
        );
        const visual = chapter.querySelector<HTMLElement>("[data-story-visual]");
        const copy = chapter.querySelector<HTMLElement>("[data-story-copy]");

        if (heading) {
          // Lands just ahead of its screen, so the chapter names itself first.
          gsap.from(heading, {
            opacity: 0,
            y: 12,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: { trigger: heading, start: "top 92%", once: true },
          });
        }

        if (visual) {
          // Scrubbed depth pass. The screen being read is the one at full size
          // and full strength; the ones above and below sit back. A light touch
          // on purpose — these mocks are dense with text, so the resting state
          // stays legible instead of dropping away to a ghost.
          gsap
            .timeline({
              scrollTrigger: {
                trigger: chapter,
                start: "top 88%",
                end: "bottom 12%",
                // A little smoothing, so a trackpad flick does not translate
                // straight into a jittering card.
                scrub: 0.5,
              },
            })
            .fromTo(
              visual,
              { scale: 0.945, opacity: 0.5, y: 34 },
              { scale: 1, opacity: 1, y: 0, ease: "none", duration: 0.5 },
            )
            .to(visual, {
              scale: 0.975,
              opacity: 0.45,
              y: -26,
              ease: "none",
              duration: 0.5,
            });
        }

        if (copy) {
          // The copy arrives once, on its own beat. Tying it to scroll as well
          // would leave a half-faded paragraph parked in front of the reader.
          gsap.from(copy.children, {
            opacity: 0,
            y: 26,
            duration: 0.55,
            ease: "power3.out",
            stagger: 0.07,
            scrollTrigger: { trigger: copy, start: "top 85%", once: true },
          });
        }

        // Whichever chapter holds the middle of the viewport owns the index.
        ScrollTrigger.create({
          trigger: chapter,
          start: "top 55%",
          end: "bottom 55%",
          onToggle: (self) => {
            if (self.isActive) onPanelChange(index);
          },
        });
      });
    });

    return () => media.revert();
  }, [onPanelChange]);

  return null;
}
