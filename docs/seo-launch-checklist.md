# SEO launch checklist

Canonical origin: **https://www.innovatek-swd.com**, confirmed by the owner on 13 September 2026. Use this origin for build settings, verification and sitemap submission.

## Before an authorized deployment

- Run `npm run check` with Node 24 and npm 11. This includes exported-HTML SEO validation.
- Build with `NEXT_PUBLIC_SITE_URL=https://www.innovatek-swd.com`.
- Keep all ten product descriptions accurate in `lib/product-catalog.ts`; this drives both visible homepage content and Service structured data. Keep FAQ text in `lib/designer/landing-data.ts` synchronized through the shared schema source.
- If using HTML-tag ownership verification, obtain the actual token from Google Search Console or Bing Webmaster Tools and set `GOOGLE_SITE_VERIFICATION` / `BING_SITE_VERIFICATION` before building. CI reads the corresponding GitHub repository variables. These are public verification identifiers. Never invent a token.
- Review the generated sitemap: only `/`, `/ar/`, `/about/`, `/ar/about/`, `/contact/`, `/ar/contact/`. Privacy and terms remain `noindex`; removed solutions routes and backups stay excluded.
- Keep the established sales contact `Sales@innovatek-swd.com`, `+971 55 889 1317`, Business Bay, Dubai consistent with visible copy and Organization data.

## Deployment and host checks

Deployment, DNS changes and production changes require the owner's authorization. None were performed during the SEO implementation.

- Publish the new `out/` build through the existing Azure workflow once authorized.
- Check HTTPS and the www host. The apex `innovatek-swd.com` failed DNS resolution from the audit environment; the domain administrator should confirm authoritative DNS and configure the intended redirect to www. This observation alone does not establish a worldwide outage.
- Keep `trailingSlash: "auto"` in `staticwebapp.config.json`; exported directory routes should normalize `/about` and `/about/index.html` to `/about/` on Azure. Verify the deployed 301 behavior.
- Verify Brotli/Gzip at the host. Source config now requests one-year immutable caching for hashed `/_next/static/*` assets and one-day revalidation for `/assets/*`. Confirm actual response headers after deployment. HTML should not receive immutable caching.
- Confirm all six indexable pages return HTTP 200 without `noindex` in HTML or `X-Robots-Tag` headers, and self-reference the correct canonical origin.
- Confirm `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, `/icon.png`, and `/opengraph-image.png` return 200 and appropriate MIME types.
- Confirm a missing page, `/solutions/`, `/ar/solutions/` and their former detail paths return real HTTP 404 responses. Do not add a homepage fallback returning 200 for nonexistent routes. Source backups must not be publicly served.
- Inspect desktop and mobile English/Arabic pages, footer links, language switches, FAQs and CTA validation. Any real email delivery test needs authorization to send it.

## Google and Bing

- In an owner-controlled Google account, add/verify the Search Console property for this website. Choose a Domain property with DNS verification if all subdomains/protocols should be covered, or an exact `https://www.innovatek-swd.com/` URL-prefix property with a supported verification method.
- After deployment and successful verification, submit **https://www.innovatek-swd.com/sitemap.xml**. Submit it to Bing Webmaster Tools as well.
- Use URL Inspection for the English and Arabic homepage, about and contact pages. Check fetched HTML, crawl permission, Google-selected canonical and indexing status. Request indexing of updated representative URLs where appropriate; this is a request, not a guarantee.
- Validate homepage JSON-LD in Schema.org Validator and Google's Rich Results Test. Service/Organization validity does not imply a special search presentation; this commercial site should not expect FAQ rich results.
- Review Page Indexing reasons before diagnosing a missing query result. Distinguish an excluded URL from an indexed URL that ranks below the visible results.

## Measure and develop content

- Record the first available Search Console baseline by query, page, country and device. Track impressions, clicks, CTR and average position for the ten product groups in the audit, including singular/plural donation-system queries and Arabic equivalents.
- Compare equivalent 28-day periods once enough data exists. Separate branded from non-branded queries; do not infer success from a single personalized Google search.
- Monitor real-user Core Web Vitals and lead quality. Local Lighthouse scores are diagnostic lab results, not Google ranking or field-performance measurements.
- Add accurate case studies, implementation details, integration documentation and buyer FAQs when source material exists. Obtain client approval before publishing names, results or quotations. Seek relevant links through legitimate partner and customer references.
- Product anchors remain sections of the homepages, not independently indexable product pages. More focused editorial pages could support deeper product searches later, but require an agreed content/routing decision; do not restore the retired solutions layout automatically.
- Add sitemap `lastModified` only when backed by actual content update dates. Re-run `npm run check` for each release.

See [the audit and query map](seo-audit-2026-09-13.md) for evidence and research sources.

Final local verification and current GitHub Actions status: [14 September review](seo-final-review-2026-09-14.md).
