import { writeFile } from "node:fs/promises";

const ctx = (process.env.CONTEXT || "").toLowerCase(); // netlify context
if (ctx && ctx !== "production") {
  const headers = `/*\n  X-Robots-Tag: noindex, nofollow\n`;
  await writeFile("dist/_headers", headers, "utf8");
  console.log("Preview/branch build: wrote _headers with X-Robots-Tag: noindex, nofollow");
}
