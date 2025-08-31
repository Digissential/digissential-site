import fs from "node:fs";
import path from "node:path";

const [, , slugArg, ...titleParts] = process.argv;
if (!slugArg || titleParts.length === 0) {
  console.error("Usage: npm run new:post <slug> \"Title of the post\"");
  process.exit(1);
}
const slug = slugArg.toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "");
const title = titleParts.join(" ").trim();

const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");
const dateStr = `${yyyy}-${mm}-${dd}`;

const fileName = `${dateStr}-${slug}.mdx`;
const outDir = path.join("src", "content", "blog");
const outPath = path.join(outDir, fileName);

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const hero = `/images/blog/${slug}/hero.webp`;
const og = `/images/blog/${slug}/og-1200x630.jpg`;
const canonical = `/blog/${slug}/`; // <Seo/> will absolutize

const body = `---
title: "${title}"
description: "Write a crisp 140–160 character description with the primary keyword (and 'Stellenbosch' if it fits)."
pubDate: ${dateStr}
updatedDate: ${dateStr}
author: "Digissential Team"
tags: ["laptop repair", "stellenbosch", "how-to"]  # 3–6 tags max
draft: false

hero:
  src: "${hero}"
  alt: "Describe the hero image clearly"
  caption:
ogImage: "${og}"
canonical: "https://digissential.co.za${canonical}"
noindex: false

faq:
  - q: "Common question 1?"
    a: "Short, precise, genuinely helpful answer."
  - q: "Common question 2?"
    a: "Answer."
howTo:
  title: "How to <do the thing> safely"
  steps:
    - "Step 1 – do X."
    - "Step 2 – do Y."
    - "Step 3 – do Z."
---

import PostImage from "@/components/PostImage.astro";
import ExtLink from "@/components/ExtLink.astro";

> **TL;DR**: Summarise outcome in 1–2 lines. Who is this for? What will they learn?

## What you’ll learn
- Benefit 1
- Benefit 2
- Benefit 3

## Why this matters in Stellenbosch
Local context (students, SMEs, power, connectivity, dust/heat). Tie to search intent.

## 1) Core concept / problem
Explain clearly. Use keywords naturally, short paragraphs.

### Pro tip
> A one-sentence tip that keeps readers moving.

## 2) Step-by-step (actionable)
1. **Step 1:** What to do, what to avoid, how to verify.
2. **Step 2:** …
3. **Step 3:** …

<PostImage src="${hero}" alt="Describe what’s in this screenshot or photo" caption="Optional caption" />

## 3) Common mistakes (and quick fixes)
- Mistake → Fix  
- Mistake → Fix

## 4) When to DIY vs. call a pro
Clear threshold. Link internally:
- [/services/data-recovery/](/services/data-recovery/)
- [/services/os-reinstall/](/services/os-reinstall/)
- [/contact/](/contact/)

Credible sources for E-E-A-T:
- <ExtLink href="https://support.microsoft.com/windows">Windows docs</ExtLink>
- <ExtLink href="https://www.sun.ac.za/english/it">SU IT</ExtLink>
- <ExtLink href="https://greencycle.co.za/">Recyclers</ExtLink>

## FAQs
- **Q:** …  
  **A:** …

## Final word
Wrap with a crisp takeaway + soft CTA.

---

### Ready for help?
- **Call:** 066 425 6314  
- **Message:** [/contact/](/contact/)  
- **Visit:** Stellenbosch & surrounds (lawful e-waste, CPA warranties, POPIA-aligned)
`;

fs.writeFileSync(outPath, body, "utf8");
console.log(`Created ${outPath}`);
console.log(`\nNext:\n  - Add images under /public/images/blog/${slug}/ (hero.webp, og-1200x630.jpg)\n  - Write the 800–1,400 words and update FAQ/HowTo as needed.\n`);
