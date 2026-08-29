# Innovatek SWD Brand Visual System

## Brand concept

A luminous operations command surface suspended inside a calm Gulf-night editorial field—technical precision against generous cinematic space.

The product promise is **AI-native operational platforms for giving, facilities, visitors, and customer engagement**. The primary experience serves **UAE and MENA operations, facilities, finance, government, and foundation leaders** and guides them toward **Book a working session and receive an on-page confirmation**.

## GPT Taste lock

- Design authority: embedded `gpt-taste` only; do not blend another design or app-builder skill.
- Deterministic seed: `16207833524234935267`
- Hero architecture: Editorial Split
- Typography stack: Outfit
- Component architectures: Inline Typography Images, Infinite Marquee, Feedback/Testimonial Carousel
- GSAP paradigms: Image Scale & Fade Scroll, Scroll Pinning
- Structure: premium Navigation → Attention → Interest → Desire → Action.
- Hero rule: ultra-wide H1, verified at two or three lines; no stamp icons, pill tags, or raw stats.
- Bento rule: three to five intentional cards, `grid-flow-dense`, and span arithmetic with zero dead cells.
- Content rule: no cheap meta-labels such as “SECTION 01”, “QUESTION 05”, or “ABOUT US”.
- Motion rule: real `@gsap/react` + `ScrollTrigger`, reactive clickable cards/images, and a reduced-motion fallback.

## Color roles

| Role | Token | Value | Intent |
| --- | --- | --- | --- |
| Page background | `--background` | `#F5F7FB` | Establish the dominant atmosphere |
| Primary surface | `--surface` | `#FFFFFF` | Hold navigation, controls, and grouped content |
| Border | `--border` | `#DDE3EE` | Separate surfaces without visual noise |
| Primary text | `--text-primary` | `#0A1020` | High-emphasis reading and actions |
| Secondary text | `--text-secondary` | `#5C667A` | Supporting copy and metadata |
| Accent | `--accent` | `#176BFF` | Reserve for the primary CTA, focus, and key signals |

Derive hover, pressed, selection, positive, warning, and destructive colors while preserving contrast and this hierarchy. Do not introduce unrelated accents.

## Typography

- Heading family: Outfit
- Body and interface family: Outfit
- Arabic script: IBM Plex Sans Arabic (Google Fonts), self-hosted at build time via `next/font` so rendering is identical on Windows, Linux, and macOS. The Arabic subset only is loaded; Latin glyphs inside RTL text fall through to Outfit. Tahoma/Arial remain as deep fallbacks only.
- Inter is forbidden.
- Display headings: tight but readable tracking, intentional line breaks, responsive scale.
- Body: comfortable measure and line height; avoid low-contrast small text.
- Labels: concise, consistent casing, and sufficient weight for controls.

## Spatial system

- Use a deliberate base spacing rhythm and cinematic major-section spacing comparable to `py-32 md:py-48`.
- Keep prose measures readable and content widths consistent across sections.
- Radius profile: Restrained and hierarchical; controls are tighter than focal panels.
- Use borders before shadows for ordinary separation; reserve elevation for overlays and focal objects.
- Let mobile recompose hierarchy instead of mechanically stacking desktop columns.

## Component language

- Primary actions use the accent token and remain the strongest repeated interactive signal.
- Secondary actions are quieter and never compete with the primary CTA.
- Use the three selected gpt-taste component architectures; keep bento grids gapless and restrained to three to five intentional cards.
- Explicit owner override: keep the operational-ecosystems headline uninterrupted; do not place an inline photo inside that sentence.
- Place the verified UAE client-proof panel directly after the hero, using the supplied 3×3 logo composition.
- Product visuals are code-native operational interfaces: 16px browser frame, compact chrome, dark navigation rail, KPI cards, and a structured table. Do not substitute cropped photography for these product screens.
- Testimonial avatars, arrow controls, and side rails are all functional selectors. New quotes enter in the chosen direction with a short transform-and-opacity transition; reduced-motion users receive an immediate content change.
- Never add arbitrary hero stamps, hero pill-tags, raw hero stats, or cheap numbered meta-labels.
- Use one icon family and a consistent optical size and stroke treatment.
- Preserve semantic HTML and visible focus treatments.

## Motion

- Character: Quiet, responsive, and spatially coherent.
- Implement Image Scale & Fade Scroll, Scroll Pinning with real GSAP and ScrollTrigger.
- Favor transforms and opacity for feedback, spatial continuity, and staged entrances.
- Avoid perpetual decorative motion unless it materially supports the concept.
- Provide a reduced-motion treatment that preserves meaning and interaction.

## Imagery

- Store approved public media in `public/assets`.
- Keep lighting, texture, palette, perspective, and crop behavior consistent with the brand concept.
- Use raster media for atmosphere or illustrative content; prefer HTML/CSS/SVG for interface structure and diagrams.
- Never depict generated people as real customers or place critical text inside raster images.

## Quality bar

- The interface must be recognizable without relying on a logo.
- Every section must advance the audience toward the primary CTA.
- Desktop and mobile must feel intentionally composed.
- Accessibility, clarity, and performance are design constraints, not cleanup tasks.
