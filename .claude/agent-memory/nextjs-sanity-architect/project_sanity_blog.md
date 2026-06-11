---
name: project-sanity-blog
description: Sanity.io blog integration architecture — config source of truth, schema location, query/ISR conventions, env vars needed
metadata:
  type: project
---

The site has a Sanity blog integration (added 2026-06-11).

**Single config source of truth:** `src/sanity/sanity.config.ts` is canonical. Both the embedded Studio route (`src/app/studio/[[...tool]]/page.tsx`) and the root CLI config (`sanity.config.ts`, used by `sanity deploy`/`sanity schema extract`) point at it. Root `sanity.config.ts` is a one-line re-export; legacy `src/sanity/schemaTypes/index.ts` re-exports `src/sanity/schemas` to avoid schema drift.

**Schemas:** live in `src/sanity/schemas/` (`blockContent.ts`, `blog.ts`, `index.ts` exporting `schemaTypes`). `blockContent` is the shared Portable Text type — reuse it for any new rich text field, do not create one-off block configs. Blog SEO fields (`seoTitle`, `metaDescription`) are grouped in a collapsible "seo" fieldset.

**Public read client:** `src/lib/sanityClient.ts` — `useCdn:true`, `perspective:"published"`, `stega:{enabled:false}`, apiVersion `2024-01-01`.

**Queries:** `src/lib/blogQueries.ts` — `urlFor`, interfaces `BlogPostSummary`/`BlogPost`/`SanityImage`, and `getAllBlogPosts`/`getAllBlogSlugs`/`getBlogPost`. ISR via `{ next: { revalidate: 3600 } }` as the third arg to `client.fetch` (project does NOT use Cache Components, so the per-fetch revalidate model applies — not `cacheLife`).

**Rendering:** `src/components/PortableTextRenderer.tsx` is the `"use client"` Portable Text renderer (uses `next/image` for inline images).

**Why:** EEAT/SEO content strategy needs an editor-managed blog. **How to apply:** when adding content types or rich text, extend `src/sanity/schemas` + add a matching GROQ query + TS interface in `blogQueries.ts`; never introduce a second Sanity config. See [[project-zooprintablesai]] for author/org schema IDs used in JSON-LD (`#mike-beasley`, `#organization`).

**Env vars required (user creates `.env.local` manually):** `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`.
