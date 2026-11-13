"use client";
import { useState } from "react";
import type { Product } from "@/content/products";
import { Pack } from "./pack";
export function ProductDetail({ product: p }: { product: Product }) {
  const [size, setSize] = useState(p.sizes[0]);
  const [photo, setPhoto] = useState(0);
  return (
    <div className="detail-grid">
      <div>
        <div className="detail-stage" style={{ background: p.colour + "12" }}>
          <div
            className={"detail-swap " + (photo === 1 ? "show-serving" : "")}
            tabIndex={0}
            role="group"
            aria-label="Product gallery. Hover or focus to preview the alternate view."
          >
            <div className="detail-pack">
              <Pack product={p} large />
            </div>
            <img
              className="detail-serving"
              src={p.image}
              width="700"
              height="600"
              alt="Illustrative serving; not an actual product photograph"
            />
          </div>
        </div>
        <div className="filters">
          <button aria-pressed={photo === 0} onClick={() => setPhoto(0)}>
            Concept pack
          </button>
          <button aria-pressed={photo === 1} onClick={() => setPhoto(1)}>
            Serving photo
          </button>
        </div>
      </div>
      <div className="detail-copy">
        <span className="eyebrow">{p.category}</span>
        <h1>{p.name}</h1>
        <p className="lead">{p.description}</p>
        <h3>Choose a pack size</h3>
        <div className="filters">
          {p.sizes.map((s) => (
            <button
              key={s}
              aria-pressed={s === size}
              className={s === size ? "active" : ""}
              onClick={() => setSize(s)}
            >
              {s}
            </button>
          ))}
        </div>
        <p role="status">
          Selected pack: <strong>{size}</strong>
        </p>
        {/* <div className="sample-label">
          Illustrative product information — verify before purchase or use.
        </div> */}
        <details open>
          <summary>Ingredients & allergens</summary>
          <p>{p.ingredients}</p>
          <p>{p.allergens}</p>
        </details>
        <details>
          <summary>Nutrition · sample per 100 g</summary>
          <table>
            <tbody>
              {[
                ["Energy", "520 kcal"],
                ["Protein", "10 g"],
                ["Carbohydrate", "52 g"],
                ["Total fat", "30 g"],
                ["Sodium", "600 mg"],
              ].map(([a, b]) => (
                <tr key={a}>
                  <th scope="row">{a}</th>
                  <td>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <small>Layout sample only. Not verified nutritional values.</small>
        </details>
        <details>
          <summary>Storage & shelf life</summary>
          <p>{p.shelfLife}</p>
          <p>
            Sample guidance: store in a cool, dry place in a sealed container.
            Follow the actual package instructions.
          </p>
        </details>
      </div>
    </div>
  );
}
