"use client";

import { DesignerLanding } from "./designer-landing";
import { LandingBodyEn } from "./landing-body-en";

export function EnglishLanding() {
  return <DesignerLanding lang="en" Body={LandingBodyEn} />;
}
