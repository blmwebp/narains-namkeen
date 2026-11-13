import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
const root = join(process.cwd(), "out");
function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );
}
test("static export includes all expected detail pages", () => {
  assert.ok(existsSync(root), "Run npm run build first");
  for (const path of [
    "index.html",
    "products/index.html",
    "products/aloo-bhujia/index.html",
    "recipes/namkeen-bhel/index.html",
    "news/the-art-of-sharing/index.html",
    "distributor/index.html",
    "contact/index.html",
    "404.html",
  ])
    assert.ok(existsSync(join(root, path)), path);
});
test("exported internal page links and images resolve", () => {
  const failures = [];
  for (const file of walk(root).filter((p) => p.endsWith(".html"))) {
    const html = readFileSync(file, "utf8");
    for (const [, attr, raw] of html.matchAll(/\b(href|src)="(\/[^"<>]*)"/g)) {
      const value = raw.replaceAll("&amp;", "&").split(/[?#]/)[0];
      if (value.startsWith("//")) continue;
      const target = join(root, decodeURIComponent(value));
      if (!existsSync(target) && !existsSync(join(target, "index.html")))
        failures.push(file + ": " + attr + "=" + value);
    }
  }
  assert.deepEqual(failures, []);
});
test("preview is excluded from search indexing", () => {
  assert.match(readFileSync(join(root, "index.html"), "utf8"), /noindex/);
  assert.match(readFileSync(join(root, "robots.txt"), "utf8"), /Disallow: \//);
});
