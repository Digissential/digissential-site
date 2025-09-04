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
        "Core services",
        "Software",
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
    title: z.string().min(5),
    description: z.string().min(40).max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("Digissential Team"),
    tags: z.array(z.string()).min(1).max(6).default([]),
    // Hero & OG
    hero: z.object({
      // Use /images/... under /public (absolute path from site root)
      src: z.string().regex(/^\/images\//, "Use a site-root path like /images/..."),
      alt: z.string().min(5),
      caption: z.string().optional().nullable(),
    }).optional(),
    // Absolute OR site-root path; will be absolutized in <Seo/>
    ogImage: z.string().regex(/^(https?:\/\/|\/)/, "Use absolute URL or site-root path").optional(),
    // If omitted, computed from Astro.site + URL. Must end with `/` (trailingSlash: "always").
    canonical: z.string().url().refine((v) => v.endsWith("/"), { message: "Canonical must end with /" }).optional(),
    draft: z.boolean().default(false),
    // SEO switches
    noindex: z.boolean().default(false),   // e.g. thank-you pages
    // Optional structured data helpers
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    howTo: z.object({
      title: z.string(),
      steps: z.array(z.string().min(3)).min(2)
    }).optional(),
        // Optional rich media for reels/shorts
        video: z.object({
          url: z.string().url(),
          name: z.string(),
          description: z.string(),
          thumbnailUrl: z.string().url(),
          uploadDate: z.coerce.date(),
          duration: z.string().optional(), // ISO 8601 if available, e.g. PT40S
        }).optional(),
        // Optional manual override for related posts
        relatedSlugs: z.array(z.string()).optional(),
  }),
});

const resources = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().min(40).max(160),
    pubDate: z.coerce.date(),                 // ← coerce to Date
    updatedDate: z.coerce.date().optional(),  // ← coerce to Date
    tags: z.array(z.string()).default([]),

    // Optional hero/OG, same style as blog
    hero: z.object({
      src: z.string().regex(/^\/images\//, "Use a site-root path like /images/..."),
      alt: z.string().min(5).optional(),
      caption: z.string().optional().nullable(),
    }).optional(),
    ogImage: z.string().regex(/^(https?:\/\/|\/)/, "Use absolute URL or site-root path").optional(),
    canonical: z.string().url().refine((v) => v.endsWith("/"), { message: "Canonical must end with /" }).optional(),

    draft: z.boolean().default(false),
    noindex: z.boolean().default(false),

    // Optional structured data helpers (match blog)
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    howTo: z.object({
      title: z.string(),
      steps: z.array(z.string().min(3)).min(2),
    }).optional(),
    video: z.object({
      url: z.string().url(),
      name: z.string(),
      description: z.string(),
      thumbnailUrl: z.string().url(),
      uploadDate: z.coerce.date(),
      duration: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { services, blog, resources };
