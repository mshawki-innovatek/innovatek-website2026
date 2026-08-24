# Innovatek SWD website

A production-oriented, bilingual marketing website for Innovatek SWD. The visual system is derived from the supplied landing-page reference and rebuilt as an original Next.js implementation with English and Arabic routes, responsive editorial layouts, and SEO foundations included from the first release.

## Run locally

The project is pinned to Node 24 and npm 11.

```bash
nvm use
npm install
npm run dev -- --hostname 127.0.0.1 --port 3001
```

Open `http://127.0.0.1:3001`.

Useful checks:

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Configuration

Copy `.env.example` to `.env.local` only when the canonical production origin differs from the current default:

```bash
NEXT_PUBLIC_SITE_URL=https://www.innovatek.ae
```

That value drives canonical URLs, hreflang, Open Graph URLs, JSON-LD, `robots.txt`, and `sitemap.xml`.

The contact experience is deliberately backend-free: it prepares a complete message in the visitor’s email app for `Sales@innovatek-swd.com` and clearly states that nothing is transmitted until the visitor sends it. The official sales line is `055 889 1317` and the office address is Business Bay, Dubai, UAE.

## Route coverage

- English and Arabic home, solutions, about, contact, privacy, and terms pages
- Four English and four Arabic solution detail pages
- Global branded 404 page
- Generated robots, sitemap, and web manifest endpoints
- Static 512×512 app icon and 1200×630 social sharing image

## SEO and production notes

- All indexable pages have a unique title, description, canonical URL, reciprocal locale alternate, and one H1.
- Organization, WebSite, WebPage, ItemList, FAQ, Service, BreadcrumbList, AboutPage, and ContactPage structured data is emitted where relevant.
- Privacy and terms pages are operational drafts and intentionally `noindex` until legal review is complete.
- Security headers ship from `next.config.ts`; HSTS should be enabled at the HTTPS host/CDN.
- The site uses Next Image optimization, so deploy to Vercel or another Next.js-capable Node host rather than a static-file-only host.

See [docs/seo-launch-checklist.md](docs/seo-launch-checklist.md) before publishing.

## Design provenance

- `brief.md` records the content and conversion brief.
- `design.md` records the design system and motion rules.
- `taste-plan.json` records the deterministic Premium Web Studio selection.
- Supplied brand/context assets are preserved in `public/assets/reference`.
