import Link from "next/link";
import type { Product } from "@/content/products";
import type { Article } from "@/content/articles";
import { Pack } from "./pack";
import { ProductImageSwap } from "./product-image-swap";
export function ProductCard({
  product,
  imageSwap = false,
}: {
  product: Product;
  imageSwap?: boolean;
}) {
  const pack = <Pack product={product} />;
  return (
    <Link className="product-card" href={"/products/" + product.slug + "/"}>
      <div
        className="product-stage"
        style={{ background: product.colour + "12" }}
      >
        {imageSwap ? (
          <ProductImageSwap hoverImage={product.hoverImage}>
            {pack}
          </ProductImageSwap>
        ) : (
          pack
        )}
        <span className="card-arrow">↗</span>
      </div>
      <span className="eyebrow">{product.category}</span>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <small>{product.sizes.join(" · ")}</small>
    </Link>
  );
}
export function ArticleCard({
  article,
  kind,
}: {
  article: Article;
  kind: "recipes" | "news";
}) {
  return (
    <Link className="article-card" href={"/" + kind + "/" + article.slug + "/"}>
      <div className="article-image">
        <img
          src={article.image}
          width="600"
          height="420"
          alt={article.title}
          loading="lazy"
        />
        <span className="card-arrow">↗</span>
      </div>
      <span className="eyebrow">
        {article.category} ·{" "}
        {article.time ||
          new Date(article.date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
            timeZone: "UTC",
          })}
      </span>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
    </Link>
  );
}
