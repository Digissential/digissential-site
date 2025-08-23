import { defineCollection, z } from "astro:content";

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    price: z.string().optional(),
    badge: z.string().optional(),
    category: z
      .enum([
        "Security",
        "Data",
        "Windows",
        "Hardware",
        "Network",
        "Support",
        "Other",
      ])
      .default("Other"),
    featured: z.boolean().default(false),
    bullets: z.array(z.string()).default([]),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),

    // New optional IA fields:
    visibility: z.enum(["public", "addon", "internal"]).default("public"),
    audience: z.enum(["home", "business", "both"]).default("both"),
    quoteOnly: z.boolean().default(false),
    order: z.number().int().min(0).max(999).default(500),
    keywords: z.array(z.string()).default([]),
    noindex: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    author: z.string().default("Digissential Team"),
    tags: z.array(z.string()).default([]),
    hero: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { services, blog };
