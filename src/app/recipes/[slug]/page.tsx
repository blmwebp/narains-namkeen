import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes } from "@/content/articles";
import { ShareTools } from "@/components/ui";
import { ArticleCard } from "@/components/cards";
export function generateStaticParams() {
  return recipes.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return { title: recipes.find((a) => a.slug === slug)?.title || "Article" };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = recipes.find((a) => a.slug === slug);
  if (!a) notFound();
  return (
    <article className="container section">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link> / <Link href="/recipes/">Recipes</Link> /{" "}
        {a.title}
      </nav>
      <header className="article-heading">
        <span className="eyebrow">
          {a.category} · {a.time || a.date}
        </span>
        <h1>{a.title}</h1>
        <p className="lead">{a.excerpt}</p>
      </header>
      <img
        className="article-hero"
        src={a.image}
        width="1200"
        height="600"
        alt={a.title}
        loading="lazy"
      />
      <div className="reading">
        {/* <p className="sample-label">
          Demo editorial · Illustrative photography
        </p> */}
        {a.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {a.ingredients && (
          <>
            <h2>What you’ll need</h2>
            <p>Serves 2 · {a.time}</p>
            <ul>
              {a.ingredients.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <h2>Make it together</h2>
            <ol>
              {a.steps?.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ol>
            <p>Check ingredient labels for allergens before preparing.</p>
          </>
        )}
        {a.product && (
          <Link className="text-link" href={"/products/" + a.product + "/"}>
            Explore the featured snack ↗
          </Link>
        )}
        <ShareTools print={true} />
      </div>
      <section className="section related">
        <h2>A little more inspiration.</h2>
        <div className="article-grid">
          {recipes
            .filter((b) => b.slug !== slug)
            .slice(0, 3)
            .map((b) => (
              <ArticleCard key={b.slug} article={b} kind="recipes" />
            ))}
        </div>
      </section>
    </article>
  );
}
