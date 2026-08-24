"use client";

import { lazy, Suspense, useEffect, useState } from "react";

const ProductStoryGsap = lazy(() => import("@/components/product-story-gsap"));

export function ProductStoryMotion() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const section = document.getElementById("product-story");
    const motionQuery = window.matchMedia(
      "(min-width: 960px) and (prefers-reduced-motion: no-preference)",
    );
    if (!section) return;

    let sectionIsNear = false;
    const maybeEnable = () => {
      if (sectionIsNear && motionQuery.matches) setEnabled(true);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        sectionIsNear = Boolean(entry?.isIntersecting);
        maybeEnable();
      },
      { rootMargin: "720px 0px" },
    );

    const rect = section.getBoundingClientRect();
    sectionIsNear = rect.top < window.innerHeight + 720 && rect.bottom > -720;
    maybeEnable();
    observer.observe(section);
    motionQuery.addEventListener("change", maybeEnable);

    return () => {
      observer.disconnect();
      motionQuery.removeEventListener("change", maybeEnable);
    };
  }, []);

  if (!enabled) return null;

  return (
    <Suspense fallback={null}>
      <ProductStoryGsap />
    </Suspense>
  );
}
