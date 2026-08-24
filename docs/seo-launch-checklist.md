# SEO launch checklist

## Before deployment

- Confirm `https://www.innovatek.ae` is the preferred canonical origin and that the apex domain redirects to it with one permanent redirect.
- Confirm `Sales@innovatek-swd.com` is monitored and test the prepared-email workflow on desktop and mobile.
- Confirm the sales line `055 889 1317` and the Business Bay, Dubai, UAE address remain current in visible contact details and Organization structured data.
- Have UAE-qualified counsel review the privacy notice and terms; they are deliberately excluded from the sitemap and marked `noindex` until approved.
- Review all product descriptions with Innovatek product owners. Unverified customer logos, statistics, testimonials, and performance claims from the reference were intentionally omitted.
- Run `npm run check` using Node 24 and npm 11.

## At deployment

- Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin before building.
- Use a Next.js-capable Node host so image optimization and framework routes remain available.
- Enable HTTPS, HSTS, Brotli/Gzip, immutable caching for hashed assets, and a permanent canonical-host redirect at the edge.
- Verify `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, `/icon.png`, and `/opengraph-image.png` return `200` with the expected MIME types.
- Confirm the contact, language-switch, and mobile-menu flows against the deployed origin.

## Immediately after launch

- Add and verify the canonical origin in Google Search Console and Bing Webmaster Tools.
- Submit `https://www.innovatek.ae/sitemap.xml` to both services.
- Inspect the English and Arabic home pages plus one solution page in Google’s URL Inspection tool.
- Validate representative pages in Schema.org Validator and Rich Results Test.
- Test the social card in LinkedIn Post Inspector and the relevant messaging platforms.
- Record a Core Web Vitals baseline for mobile and desktop; monitor field data before adding third-party scripts.
- If analytics is added, use consent and privacy controls appropriate to the deployed markets and update the privacy notice first.

## Ongoing

- Re-run crawl, broken-link, metadata, structured-data, and responsive checks with every content release.
- Keep titles, descriptions, Arabic translations, screenshots, and solution capabilities synchronized across locale pairs.
- Add `lastModified` dates to the sitemap only when they can be sourced from genuine content update times.
