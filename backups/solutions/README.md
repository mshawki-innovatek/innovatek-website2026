# Removed solutions content

This folder preserves the English and Arabic content from the retired solutions index and product detail pages. It contains content data only, with no executable page components or routes.

`content.json` includes the four products in each language, image references, index and detail page copy, ecosystem descriptions, operating principles, and shared contact copy. Images remain in `public/assets` because the site still uses them. Product information also remains available to the homepage.

The removed URLs are `/solutions/`, `/ar/solutions/`, and their product detail paths for `donation-hub`, `bunyan-cmms`, `visitor-management-system`, and `communication-platform`. They return 404. Current solution links lead to `/#platform` or `/ar/#platform`.

This folder is outside `app` and `public`, is not imported by the application, and is not served or included in the sitemap. Keep it as a content reference for future work.
