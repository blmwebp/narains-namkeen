"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { products, categories } from "@/content/products";
import { recipes, news } from "@/content/articles";
import { ProductCard, ArticleCard } from "./cards";
export function Catalogue({
  kind = "products",
}: {
  kind?: "products" | "recipes" | "news";
}) {
  const params = useSearchParams();
  const router = useRouter();
  const path = usePathname();
  const q = params.get("q") || "";
  const category = params.get("category") || "All";
  const [input, setInput] = useState(q);
  useEffect(() => setInput(q), [q]);
  const articles = kind === "recipes" ? recipes : news;
  const options =
    kind === "products"
      ? categories
      : [...new Set(articles.map((a) => a.category))];
  function update(query: string, cat: string) {
    const p = new URLSearchParams();
    if (query) p.set("q", query);
    if (cat !== "All") p.set("category", cat);
    router.replace(path + (p.size ? "?" + p.toString() : ""), {
      scroll: false,
    });
  }
  const filtered = products.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      (p.name + " " + p.description).toLowerCase().includes(q.toLowerCase()),
  );
  const filteredArticles = articles.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      (p.title + " " + p.excerpt).toLowerCase().includes(q.toLowerCase()),
  );
  const count = kind === "products" ? filtered.length : filteredArticles.length;
  return (
    <>
      <form
        className="search-row"
        onSubmit={(e) => {
          e.preventDefault();
          update(input, category);
        }}
      >
        <label className="sr-only" htmlFor="search">
          Search {kind}
        </label>
        <input
          id="search"
          type="search"
          value={input}
          placeholder={
            "Find your favourite " +
            (kind === "products"
              ? "snack"
              : kind === "recipes"
                ? "recipe"
                : "story") +
            "…"
          }
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="filters" aria-label="Filter by category">
        {["All", ...options].map((c) => (
          <button
            key={c}
            onClick={() => update(input, c)}
            aria-pressed={category === c}
            className={category === c ? "active" : ""}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="results-line">
        <span role="status">
          {count}{" "}
          {kind === "products"
            ? "snacks"
            : kind === "recipes"
              ? "recipes"
              : "stories"}{" "}
          to explore
        </span>
        {(q || category !== "All") && (
          <button
            onClick={() => {
              setInput("");
              update("", "All");
            }}
          >
            Clear filters ×
          </button>
        )}
      </div>
      {count ? (
        <div
          className={kind === "products" ? "product-grid" : "article-grid"}
          key={category + q}
        >
          {kind === "products"
            ? filtered.map((p) => (
                <ProductCard key={p.slug} product={p} imageSwap />
              ))
            : filteredArticles.map((a) => (
                <ArticleCard key={a.slug} article={a} kind={kind} />
              ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No matches just yet.</h2>
          <p>Try a different word or explore all categories.</p>
          <button
            className="button"
            onClick={() => {
              setInput("");
              update("", "All");
            }}
          >
            Show everything
          </button>
        </div>
      )}
    </>
  );
}
