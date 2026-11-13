import type { Product } from "@/content/products";
export function Pack({
  product,
  large = false,
}: {
  product: Product;
  large?: boolean;
}) {
  return (
    <div
      className={"pack " + (large ? "pack-large" : "")}
      style={{ "--pack": product.colour } as React.CSSProperties}
    >
      <div className="pack-seal" />
      <div className="pack-logo">
        <img
          src="/images/logo.png"
          alt="Narain’s Namkeen"
          width="130"
          height="80"
        />
      </div>
      <span className="pack-kicker">A LITTLE EVERYDAY JOY</span>
      <strong>{product.name}</strong>
      <div className="pack-food">
        <img
          src={product.image}
          alt="Illustrative snack serving"
          width="240"
          height="180"
          loading={large ? "eager" : "lazy"}
        />
      </div>
      <span className="pack-note">CONCEPT PACK · DEMO</span>
      <div className="pack-seal bottom" />
    </div>
  );
}
