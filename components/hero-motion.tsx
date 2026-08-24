"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function HeroMotion() {
  useGSAP(() => {
    const hero = document
      .getElementById("hero-title")
      ?.closest<HTMLElement>(".hero");
    if (!hero) return;

    const copy = gsap.utils.toArray<HTMLElement>(".hero__content > *", hero);
    const ambient = hero.querySelector<HTMLElement>(".hero__ambient");
    const visual = hero.querySelector<HTMLElement>(".hero-visual");
    const consolePanel = hero.querySelector<HTMLElement>(".hero-visual__console");
    if (!ambient || !visual || !consolePanel) return;

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const targets = [...copy, ambient, visual, consolePanel];
      const visualOffset = document.documentElement.dir === "rtl" ? -34 : 34;
      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          gsap.set(targets, { clearProps: "opacity,visibility,transform" });
        },
      });

      timeline
        .fromTo(
          ambient,
          { opacity: 0 },
          { opacity: 0.35, duration: 1.05, ease: "power2.out" },
          0,
        )
        .fromTo(
          copy,
          { autoAlpha: 0, y: 26 },
          { autoAlpha: 1, y: 0, duration: 0.72, stagger: 0.09 },
          0.06,
        )
        .fromTo(
          visual,
          { autoAlpha: 0, x: visualOffset, y: 24, scale: 0.965 },
          { autoAlpha: 1, x: 0, y: 0, scale: 1, duration: 1 },
          0.14,
        )
        .fromTo(
          consolePanel,
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.62 },
          0.56,
        );
    });

    return () => media.revert();
  }, []);

  return null;
}
