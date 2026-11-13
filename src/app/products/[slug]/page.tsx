import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/content/products";
import { ProductDetail } from "@/components/product-detail";
import { ProductCard } from "@/components/cards";
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return { title: products.find((p) => p.slug === slug)?.name || "Product" };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();
  return (
    <div className="container section">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link> / <Link href="/products/">Products</Link> /{" "}
        {product.name}
      </nav>
      <ProductDetail product={product} />
      <section className="section">
        <span className="eyebrow">KEEP EXPLORING</span>
        <h2>More to pass around.</h2>
        <div className="product-grid">
          {products
            .filter((p) => p.slug !== slug)
            .sort(
              (a, b) =>
                Number(b.category === product.category) -
                Number(a.category === product.category),
            )
            .slice(0, 4)
            .map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
        </div>
      </section>
    </div>
  );
}
