// src/pages/rss.xml.js
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export const prerender = true; // explicit, though pages endpoints are static in your setup

export async function GET(context) {
  const site =
    (context.site && context.site.toString()) ||
    process.env.PUBLIC_SITE_URL ||
    "https://www.digissential.co.za";

  const posts = (await getCollection("blog", ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: "Digissential Blog",
    description: "Tips, guides, and notes from our workshop in Stellenbosch.",
    site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.summary ?? p.data.description ?? "",
      link: `/blog/${p.slug}/`,          // trailing slash for consistency
      pubDate: p.data.pubDate,
      // Emit <category> tags if you have p.data.tags
      customData:
        Array.isArray(p.data.tags)
          ? p.data.tags.map((t) => `<category>${t}</category>`).join("")
          : "",
    })),
    // Feed-level extras
    customData: [
      "<language>en-ZA</language>",
      "<ttl>60</ttl>"
    ].join(""),
  });
}
