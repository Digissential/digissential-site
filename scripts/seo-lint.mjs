import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import glob from "fast-glob";

const SITE = process.env.PUBLIC_SITE_URL || "";
const files = await glob("src/content/blog/**/*.mdx");
let ok = true;

for (const fp of files) {
  const raw = fs.readFileSync(fp, "utf8");
  const { data, content } = matter(raw);
  const words = content.split(/\s+/).filter(Boolean).length;

  const errs = [];
  if (words < 800 || words > 1400) errs.push(`word count ${words} (want 800–1400)`);
  if (!data.title) errs.push("missing title");
  if (!data.description || data.description.length < 40 || data.description.length > 160) errs.push("meta description length");
  if (!data.pubDate) errs.push("missing pubDate");
  if (!data.hero?.src || !data.hero?.alt) errs.push("hero image src/alt");
  if (!Array.isArray(data.tags)) errs.push("tags must be an array");
  else if (data.tags.length > 6) errs.push("too many tags (>6)");
  // Optional advice only (won't fail build):
  else if (data.tags.length === 0) console.log(`· note: ${fp} has 0 tags (ok, but consider 1–3 for discovery)`);
  if (data.canonical && !/\/$/.test(data.canonical)) errs.push("canonical must end with /");

  // Internal link UTM check
  const utmOnInternal = (content.match(/\(\/[^\s\)]*\?utm_[^)]+\)/g) || []).length;
  if (utmOnInternal) errs.push("UTM found on internal link(s)");

  if (errs.length) {
    ok = false;
    console.log(`✖ ${fp}\n  - ${errs.join("\n  - ")}`);
  }
}
if (!ok) {
  console.error("\nSEO lint failed.");
  process.exit(1);
} else {
  console.log("✓ SEO lint passed.");
}
