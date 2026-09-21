import { ProductPage } from "@/components/product-page";
import { PRODUCT_PAGES } from "@/lib/product-pages";
import { productMetadata } from "@/lib/product-metadata";
export const dynamicParams = false;
export function generateStaticParams() { return PRODUCT_PAGES.map(({ id }) => ({ slug: id })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) { return productMetadata((await params).slug, "ar"); }
export default async function Page({ params }: Props) { return <ProductPage id={(await params).slug} locale="ar" />; }
