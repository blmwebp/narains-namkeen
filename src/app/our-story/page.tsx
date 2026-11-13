import { HoverMedia, PackPreview } from "@/components/hover-media";
import Link from "next/link";
export const metadata = { title: "Our Story" };
export default function Page() {
  return (
    <>
      <section className="container page-heading">
        <span className="eyebrow">OUR STORY</span>
        <h1>
          Rooted in familiar flavours.
          <br />
          <em>Made for shared moments.</em>
        </h1>
        <p>A warm introduction to the world of Narain’s Namkeen.</p>
      </section>
      <section className="container story-split section">
        <HoverMedia
          className="rounded-photo"
          src="/images/chai.jpg"
          width="700"
          height="600"
          alt="Chai and everyday moments"
        />
        <div>
          {/* <span className="sample-label"></span> */}
          <h2>A place at every table.</h2>
          <p>
            Imagine a table where there is always room for one more. A favourite
            snack passed between generations. A conversation that lasts longer
            than the tea.
          </p>
          <p>
            This illustrative story introduces the feeling of Narain’s:
            approachable, familiar and full of flavour. Replace it with the
            brand’s verified origin, people and journey before launch.
          </p>
          <p>
            The portrait and lettering in the supplied logo are preserved
            exactly. No founder identity or history has been assumed.
          </p>
          <Link className="text-link" href="/products/">
            Meet the collection ↗
          </Link>
        </div>
      </section>
      <section className="care-band">
        <div className="container">
          <h2>The things we make room for.</h2>
          <div className="care-grid">
            {[
              "Togetherness",
              "Familiarity",
              "Everyday joy",
              "A curious palate",
            ].map((x, i) => (
              <div key={x}>
                <span>0{i + 1}</span>
                <h3>{x}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
