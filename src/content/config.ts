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


/** A service can be a plain label or a linkable CTA */
const LocationService = z.union([
  z.string(),
  z.object({
    label: z.string(),
    // allow absolute URLs or site-root paths
    href: z.string().regex(/^(\/|https?:\/\/)/, "Use a site-root path or absolute URL").optional(),
  }),
]);

const locations = defineCollection({
  type: "content",
  schema: z
    .object({
      // Core
      title: z.string().min(3),
      kind: z.enum(["hub", "city", "neighbourhood"]),
      /** Deprecated: rely on file-based slug (entry.slug). Keep optional for backward-compat. */
      slug: z.string().optional(),
      /** For neighbourhoods: parent slug like "stellenbosch" */
      parent: z.string().optional(),

      // UX copy
      intro: z.string().min(40, "Write a short intro (≥ 40 chars)."),
      description: z
        .string()
        .min(40)
        .max(160)
        .optional(), // meta description; falls back to intro

      // SEO toggles
      ogImage: z
        .string()
        .regex(/^(https?:\/\/|\/)/, "Use absolute URL or site-root path")
        .optional(),
      noindex: z.boolean().default(false),
      draft: z.boolean().default(false),

      // IA / ordering
      order: z.number().int().min(0).max(999).default(500),

      // Content blocks
      services: z.array(LocationService).default([]),
      children: z
        .array(
          z.object({
            title: z.string(),
            slug: z.string(), // relative under /locations/**
            blurb: z.string().min(10),
          }),
        )
        .default([]),
      faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),

      // Optional: distance helper for outer towns
      distanceFromStbKm: z.number().min(0).max(50).optional(),

      // Optional tagging for filtering/reporting
      tags: z.array(z.string()).default([]),
    })
    .superRefine((val, ctx) => {
      // Enforce parent on neighbourhoods
      if (val.kind === "neighbourhood" && !val.parent) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Neighbourhood pages must specify a parent (e.g., 'stellenbosch').",
          path: ["parent"],
        });
      }
    }),
});

const bundles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    price: z.string(), // e.g. "R1 450"
    summary: z.string(),
    bullets: z.array(z.string()).min(3),
    ideal_for: z.string().optional(),
    includes: z.array(z.string()).optional(), // map to services slugs
    featured: z.boolean().optional(),
    save: z.string().optional(), // e.g. "Save ±R200 vs separately"
    cta_text: z.string().default("Book this bundle"),
    cta_link: z.string().default("/contact"),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { services, blog, resources, locations , bundles };
