import { Suspense } from "react";
import { Catalogue } from "@/components/catalogue";
export const metadata = { title: "Products" };
export default function Page() {
  return (
    <>
      <section className="page-heading container">
        <span className="eyebrow">PRODUCTS</span>
        <h1>Find your kind of crunch.</h1>
        <p>Explore our illustrative collection of familiar flavours.</p>
      </section>
      <section className="container section catalogue">
        <Suspense fallback={<p>Loading catalogue…</p>}>
          <Catalogue kind="products" />
        </Suspense>
      </section>
    </>
  );
}
