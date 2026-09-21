# Product search pages — 14 September 2026

## Scope and content sources

Ten product pages in English and Arabic, alongside the six existing indexable pages. The 20 new pages are held at noindex for the manager review release requested on 21 September 2026. All pages reuse the homepage navigation, brand tokens, font stack and contact form. New illustrations are HTML/CSS/SVG, explicitly labeled as fictional examples. No demo screenshots, exported customer data, customer names, financial records or customer assets were saved or used in these pages.

The owner-authorized Donation Hub overview was reviewed read-only for feature labels: projects, devices, layouts, gallery, locations, transaction reporting, overview filters, roles, audit logs, agents, custody and attendance. Other product claims come from the existing approved homepage catalog. Integration availability, hardware support, provider fees and deployment details are scoped rather than invented. No fabricated testimonials, customer case studies, success metrics, prices, certifications or rankings have been added.

## Search intent and page map

All paths below also have an `/ar` counterpart. These are relevant topic targets, not measured search-volume or difficulty estimates.

| Page | Main search intent | Supporting topics |
| --- | --- | --- |
| /products/donation-hub/ | Donation systems; donation management system UAE | Charity fundraising software, donation tracking, receipts, reconciliation, campaign reporting |
| /products/smart-kiosk/ | Donation kiosk systems UAE | Self-service donation kiosks, visitor check-in terminals, device deployment |
| /products/tajir/ | In-kind donation management software | Goods donations, donation requests |
| /products/agent-management/ | Field agent management for donation collection | Attendance, custody records, collection reconciliation |
| /products/jood/ | SMS fundraising campaign software | Charity outreach, campaign follow-up, lead management |
| /products/bunyan-cmms/ | CMMS software UAE; facility maintenance software | CAFM, preventive maintenance, work orders, asset history |
| /products/twin-ai/ | Digital twin predictive maintenance | Asset condition, sensor context, maintenance risk |
| /products/visitor-management-system/ | Visitor management system UAE | Visitor registration, contractor access, check-in |
| /products/insight-360/ | Operational analytics dashboard | Cross-system reporting, giving and facilities analytics |
| /products/communication-platform/ | AI customer engagement platform | Unified inbox, WhatsApp/Facebook/SMS, team handoffs |

Arabic pages use natural Arabic descriptions for the same buyer needs. Each product has its own explanation, capabilities, workflow and FAQs; there are no duplicate pages for singular/plural keywords or separate near-identical city pages.

## Research and implementation decisions

Google recommends useful original content, descriptive titles, crawlable links and accurate language annotations. Product pages answer operational buyer questions instead of repeating keywords. Structured data describes the visible service and FAQs; no promise of FAQ rich results is made. All content is statically exported and readable without executing JavaScript.

Primary guidance reviewed:
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/appearance/title-link
- https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites

Search results reviewed for topic/intent context (not copied for product claims):
- https://go-donate.uk/godonate-enterprise/ — product-focused donation systems
- https://alphasys.com.au/service/fundraising-and-donation-systems/ — fundraising operations and system integration
- https://www.charityerp.com/ — donation management terminology
- https://neotech.ae/products/donation-kiosk-solutions-uae — hardware-specific kiosk intent
- https://www.mygatepass.com/visitor-management-system — UAE visitor-management intent

Technical implementation: unique titles/descriptions; self-canonicals on the owner-confirmed www domain; reciprocal en/ar, en-AE/ar-AE and x-default links; Open Graph/Twitter metadata; WebPage, Service, BreadcrumbList and visible FAQ JSON-LD; sitemap entries; crawlable links from both homepage ecosystem and flagship sections; contextual related-product links. The retired `/solutions/` routes and private content backups remain retired/private.

## What remains outside the implementation

A real case study needs approved facts and permission to publish. No customer records are substitutes for that approval. Relevant customer/partner links require those parties' participation; no outreach or link purchases were performed. Search Console indexing requests for new URLs must follow deployment. Rankings are not guaranteed, and the existing no-data keyword report predates this expansion.

## Local verification on 14 September 2026

- `npm run check` passed after the final code changes: ESLint, TypeScript, production static build, and SEO checks across all 26 indexable pages.
- Browser rendered all 20 new routes at 1440×1000, 820×1180 and 390×844 (60 route/viewport checks). No horizontal overflow, broken images or duplicate/missing booking forms. All 60 hero screenshots visually reviewed; representative lower-page sections, Arabic workflow, FAQ and contact layouts inspected separately.
- English and Arabic homepage links reach Donation Hub; language switch preserves the product. All ten product links and four flagship detail links are present in each homepage's rendered HTML.
- Keyboard Enter opens FAQ content; mobile menu moves focus into navigation; Escape closes the menu and restores focus to its trigger.
- Demo links reach the shared form. Empty required fields are rejected. Whitespace-only names are rejected, and correcting the name now clears custom validity so the form can become valid again. No real email was sent; inbox delivery is not claimed as verified.
- Emulated dark system preference still renders the site with `color-scheme: light only` and white primary surfaces. Reduced motion removes transitions. Temporary emulation was reset.
- Browser console showed no errors during the verified product and navigation flows.
- QA screenshots and the 60-check JSON are local ignored artifacts under `qa/product-pages/`. Full-page screenshot stitching was unreliable in the browser tool, so visual review used viewport captures and section navigation.
- This expansion is locally built and previewed, not deployed or submitted to Google. The earlier production workflow success applies to the earlier release, not this expansion.

## Responsive refinement and independent review

- An independent reviewer checked the shared product layout, English/Arabic rendering, homepage consistency and fictional-data constraint. Their actionable finding was cramped workflow and related-product cards on narrow tablets; both now stack through 700px.
- Mobile hero actions now use a full-width primary button and a centred secondary link with consistent spacing and touch heights.
- Replaced the dashboard letter with a centred SVG and removed inherited legacy badge padding. Sidebar icons have consistent dimensions; dashboard toolbar titles are centred and small-screen labels simplified. Capability dividers and FAQ icons are consistent.
- Final browser pass covered all 20 product routes at 320px, 820px and 1440px: 60 checks passed for horizontal overflow, loaded images, one booking form and exact badge centring where visible. Additional Donation Hub breakpoint checks covered 390px, 620px and 1024px in both languages.
- Visually inspected updated mobile heroes, long product titles, Arabic at 320px, narrow-tablet workflow/related cards, tablet capability cards and desktop dashboard. Keyboard FAQ expansion and visible focus passed; no console errors were reported.
- Final `npm run check` passed. Updated pages remain local and the preview server is running on port 3015.

## Manager review release - 21 September 2026

The owner requested publication of the pages before manager feedback, with SEO activation deferred. All 20 product URLs therefore use `noindex, follow` for both generic robots and Googlebot, and stay outside the sitemap. The existing six indexable pages remain in the sitemap. Product titles, language links, structured content and homepage navigation remain available for review; none overrides the noindex directive. No Search Console indexing requests are part of this release.

The export checker verifies all 26 pages, enforces noindex on every new product route, and confirms exact sitemap exclusion. Once feedback is resolved and the owner authorizes SEO activation, remove the product noindex settings, add the product routes to the sitemap, update the checker expectations, deploy, and then verify/request indexing in Search Console.
