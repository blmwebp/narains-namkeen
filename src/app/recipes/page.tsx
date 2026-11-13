import { Suspense } from "react";
import { Catalogue } from "@/components/catalogue";
export const metadata = { title: "Recipes" };
export default function Page() {
  return (
    <>
      <section className="page-heading container">
        <span className="eyebrow">RECIPES</span>
        <h1>A little crunch. A new idea.</h1>
        <p>Easy serving ideas for everyday snack moments.</p>
      </section>
      <section className="container section catalogue">
        <Suspense fallback={<p>Loading catalogue…</p>}>
          <Catalogue kind="recipes" />
        </Suspense>
      </section>
    </>
  );
}
