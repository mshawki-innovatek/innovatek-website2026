"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ProductStoryGsap() {
  useGSAP(() => {
    const section = document.getElementById("product-story");
    const intro = section?.querySelector<HTMLElement>("[data-story-intro]");
    if (!section || !intro) return;

    const media = gsap.matchMedia();
    media.add(
      "(min-width: 960px) and (prefers-reduced-motion: no-preference)",
      () => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top+=120",
          end: "bottom bottom-=80",
          pin: intro,
          pinSpacing: false,
        });

        gsap.utils
          .toArray<HTMLElement>("[data-story-chapter]", section)
          .forEach((chapter) => {
            const visual = chapter.querySelector<HTMLElement>("[data-story-visual]");
            if (!visual) return;

            gsap
              .timeline({
                scrollTrigger: {
                  trigger: chapter,
                  start: "top 82%",
                  end: "bottom 18%",
                  scrub: true,
                },
              })
              .fromTo(
                visual,
                { scale: 0.8, opacity: 0.28 },
                { scale: 1, opacity: 1, ease: "none", duration: 0.58 },
              )
              .to(visual, {
                scale: 1.035,
                opacity: 0.2,
                ease: "none",
                duration: 0.42,
              });
          });
      },
    );

    return () => media.revert();
  }, []);

  return null;
}
