import Link from "next/link";
import type { Locale } from "@/lib/content";
import { PRODUCT_CATALOG } from "@/lib/product-catalog";

export function ProductEcosystemGroup({ group, locale }: {
  group: "giving" | "facilities" | "shared";
  locale: Locale;
}) {
  return PRODUCT_CATALOG.filter((product) => product.group === group).map((product) => (
    <article key={product.id} id={`product-${product.id}`} style={{ padding: "14px 0", borderTop: "1px solid var(--color-border-subtle)", scrollMarginTop: "90px" }}>
      <h4 style={{ margin: "0 0 4px", fontSize: "15px", fontWeight: "700", color: "var(--color-text-primary)", lineHeight: "1.5" }}>
        <Link href={`${locale === "ar" ? "/ar" : ""}/products/${product.id}/`} style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: "4px" }}>{product.name[locale]}</Link>
      </h4>
      <p style={{ margin: "0 0 4px", fontSize: "14px", fontWeight: "600", lineHeight: "1.5", color: "var(--color-text-primary)" }}>
        {product.category[locale]}
      </p>
      <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.6", color: "var(--color-text-secondary)" }}>
        {product.description[locale]}
      </p>
    </article>
  ));
}
