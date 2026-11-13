import { Suspense } from "react";
import { Catalogue } from "@/components/catalogue";
export const metadata = { title: "News" };
export default function Page() {
  return (
    <>
      <section className="page-heading container">
        <span className="eyebrow">NEWS</span>
        <h1>Stories worth sharing.</h1>
        <p>A little inspiration from our corner of the table.</p>
      </section>
      <section className="container section catalogue">
        <Suspense fallback={<p>Loading catalogue…</p>}>
          <Catalogue kind="news" />
        </Suspense>
      </section>
    </>
  );
}
