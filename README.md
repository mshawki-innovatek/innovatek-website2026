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
npm run check:seo
npm start
```

## Configuration

Copy `.env.example` to `.env.local` and fill in the values:

```bash
NEXT_PUBLIC_SITE_URL=https://www.innovatek-swd.com
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

The site reads these public values at build time. They are intentionally visible in the browser because EmailJS uses a public key.

### Form delivery

Home, About and Contact share the same three-field booking section and submission hook, using the client-side EmailJS SDK. Their English and Arabic versions also share the homepage navigation and footer. There is no API route or Server Action, so the whole site stays a static export.

The three `NEXT_PUBLIC_EMAILJS_*` values are **required** and have no built-in defaults. If any is missing the forms skip the send entirely and offer the prefilled `mailto:` fallback instead — deliberately, so an unconfigured build fails visibly rather than posting to a stale account. Send failures are logged to the browser console with the provider's own reason (bad SMTP credentials, quota, blocked origin); the visitor only ever sees a generic retry message.

To point the forms at a different mailbox, change only these variables — no code change is needed. The EmailJS template must use these exact variable names (case-sensitive):

```
{{from_name}} {{Email}} {{Company}} {{Phone}} {{services}} {{message}}
```

and its **To Email** must be the address that should receive enquiries — currently `Sales@innovatek-swd.com`. Note that `innovatek-swd.com` is a Microsoft 365 domain whose SPF ends in `-all`, so a mailbox-backed service (Outlook, connected by OAuth) is the sane choice there; a transactional provider would need SPF and DKIM records added first.

The official sales line is `055 889 1317` and the office address is Business Bay, Dubai, UAE.

## Route coverage

- English and Arabic home, about, contact, privacy, and terms pages
- Ten products described on each homepage with individual section anchors
- Retired solutions routes return 404; their content is preserved in `backups/solutions/`, outside the public export
- Global branded 404 page
- Generated robots, sitemap, and web manifest endpoints
- Static 512×512 app icon and 1200×630 social sharing image

## SEO and production notes

- All indexable pages have a unique title, description, canonical URL, reciprocal locale alternate, and one H1.
- Organization, WebSite, WebPage, ItemList, FAQPage, Service, AboutPage, and ContactPage structured data is emitted where relevant. The visible ten-product catalog and homepage schema share one data source.
- `npm run check` runs lint, types, build and exported-HTML SEO checks. The crawler checks all six indexable pages, locale pairs, canonical URLs, metadata, links, image paths, ten products per homepage and FAQ/schema parity.
- Optional `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION` values render public verification tags at build time. In GitHub Actions, set the matching repository variables before rebuilding. Adding a tag alone does not complete verification or submit a sitemap.
- Both languages and the global 404 enforce light color-scheme regardless of system preference. Intentional dark editorial sections retain their designed colors.
- Privacy and terms pages are operational drafts and intentionally `noindex` until legal review is complete.
- Security headers belong to the static host/CDN. Configure them in Azure Static Web Apps or the chosen edge host; HSTS should be enabled only after every relevant host is HTTPS.
- Use `npm start` only for the local static preview server (`python3 -m http.server`); production deployment publishes `out/` directly.

See [docs/seo-launch-checklist.md](docs/seo-launch-checklist.md) before publishing.

The [SEO audit](docs/seo-audit-2026-09-13.md) records the research, ten-product query map, local checks and remaining launch steps. Google ranking is not established by a local SEO score.

Unused Figma custom properties were removed from `app/designer/landing.css` using `node scripts/prune-design-tokens.mjs`. This optional maintenance tool follows CSS variable dependencies and keeps selectors and live values; review its diff and render both languages after future use.

## Design provenance

- `brief.md` records the content and conversion brief.
- `design.md` records the design system and motion rules.
- `taste-plan.json` records the deterministic Premium Web Studio selection.
- Supplied brand/context assets are preserved in `public/assets/reference`.
