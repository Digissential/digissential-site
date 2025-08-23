import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (await getCollection("blog")).filter((p) => !p.data.draft);
  return rss({
    title: "Digissential Blog",
    description: "Tips, guides, and notes from our workshop in Stellenbosch.",
    site: context.site ?? "https://www.digissential.co.za",
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((p) => ({
        title: p.data.title,
        description: p.data.description,
        link: `/blog/${p.slug}`,
        pubDate: p.data.pubDate,
      })),
  });
}
