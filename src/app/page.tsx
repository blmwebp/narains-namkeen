import { HoverMedia, PackPreview } from "@/components/hover-media";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { ProductCard, ArticleCard } from "@/components/cards";
import { Reveal } from "@/components/ui";
import { products, categories } from "@/content/products";
import { recipes, news } from "@/content/articles";
export default function Home() {
  return (
    <>
      <Hero />
      <div className="flavour-strip">
        <span>FOR THE CHAI BREAKS</span>
        <b>✳</b>
        <span>FOR THE LONG CONVERSATIONS</span>
        <b>✳</b>
        <span>FOR THE JOY OF SHARING</span>
      </div>
      <section className="section container">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="eyebrow">FIND YOUR FAVOURITE</span>
              <h2>A world of crunch.</h2>
            </div>
            <Link className="text-link" href="/products/">
              Explore all snacks ↗
            </Link>
          </div>
          <div className="category-grid">
            {categories.map((c, i) => (
              <Link
                key={c}
                href={"/products/?category=" + encodeURIComponent(c)}
              >
                <span className={"category-photo cat-" + i}>
                  <HoverMedia linked
                    src={"/images/" + (i === 0 ? "sev" : "mixture") + ".jpg"}
                    width="240"
                    height="240"
                    alt={"Illustrative " + c}
                    loading="lazy"
                  />
                </span>
                <h3>
                  {c} <span>↗</span>
                </h3>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
      <section className="section soft">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <span className="eyebrow">MEET THE DEMO COLLECTION</span>
                <h2>Pass around the favourites.</h2>
              </div>
              <p>
                Something familiar.
                <br />
                Something for everyone.
              </p>
            </div>
            <div className="product-grid">
              {[products[0], products[3], products[1], products[4]].map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section container story-split">
        <Reveal className="story-photo">
          <HoverMedia
            src="/images/chai.jpg"
            width="700"
            height="650"
            alt="A warm cup of chai, an everyday sharing moment"
            loading="lazy"
          />
          <span className="photo-note">Some things bring us closer.</span>
        </Reveal>
        <Reveal className="story-copy">
          <span className="eyebrow">THE SPIRIT OF NARAIN’S</span>
          <h2>
            Big conversations.
            <br />
            <em>Little handfuls.</em>
          </h2>
          <p>
            There’s a special kind of happiness in the everyday: a cup of chai,
            a familiar face, a bowl that makes its way around the room.
          </p>
          <p>
            That is the feeling behind this demo brand story. A warm invitation
            to slow down and share something good.
          </p>
          <Link className="text-link" href="/our-story/">
            Get to know us ↗
          </Link>
        </Reveal>
      </section>
      <section className="care-band">
        <div className="container">
          <span className="eyebrow">FROM INGREDIENT TO EVERYDAY MOMENT</span>
          <h2>Good taste begins with care.</h2>
          <div className="care-grid">
            {[
              "Thoughtful ingredients",
              "A balance of flavour",
              "A satisfying crunch",
              "Packed for sharing",
            ].map((s, i) => (
              <div key={s}>
                <span>0{i + 1}</span>
                <h3>{s}</h3>
              </div>
            ))}
          </div>
          <p>
            Illustrative quality story.{" "}
            <Link href="/quality/">Explore quality & care ↗</Link>
          </p>
        </div>
      </section>
      <section className="section container">
        <div className="section-head">
          <div>
            <span className="eyebrow">A LITTLE KITCHEN INSPIRATION</span>
            <h2>More ways to enjoy.</h2>
          </div>
          <Link className="text-link" href="/recipes/">
            All recipes ↗
          </Link>
        </div>
        <div className="article-grid">
          {recipes.slice(0, 3).map((a) => (
            <ArticleCard key={a.slug} article={a} kind="recipes" />
          ))}
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">FROM OUR CORNER</span>
              <h2>Stories with a little flavour.</h2>
            </div>
            <Link className="text-link" href="/news/">
              All stories ↗
            </Link>
          </div>
          <div className="article-grid">
            {[...news]
              .sort((a, b) => b.date.localeCompare(a.date))
              .slice(0, 3)
              .map((a) => (
                <ArticleCard key={a.slug} article={a} kind="news" />
              ))}
          </div>
        </div>
      </section>
      <section className="partner container">
        <span className="eyebrow">LET’S GROW TOGETHER</span>
        <h2>
          Bring a little joy
          <br />
          to your neighbourhood.
        </h2>
        <Link href="/distributor/" className="button light">
          Become a distributor ↗
        </Link>
      </section>
    </>
  );
}
