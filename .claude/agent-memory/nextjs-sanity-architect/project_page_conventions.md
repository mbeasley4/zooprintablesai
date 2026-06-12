---
name: project-page-conventions
description: How pages, route handlers, forms, and JSON-LD are structured in the zooprintablesai Next.js 16 app
metadata:
  type: project
---

Page/route conventions for this codebase (Next.js 16.2.7, React 19, App Router, src/app).

**Fact:** Pages live in `src/app/`, not `app/`. `@/*` aliases to `./src/*`. Components in `src/components/`, shared data/queries in `src/lib/`.

**Page shape:** Server Component default. Pattern is `<Navbar />` + `<main className="bg-[#FEFAE0] pt-24">` (pt-24 clears the fixed Navbar) + `<Footer />`. Export `metadata: Metadata` with `alternates.canonical` and `openGraph` pointing at `https://www.zooprintablesai.com`. JSON-LD injected via `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />`. JSON-LD uses `@graph` with BreadcrumbList + WebPage (author `@id` `${SITE}/#mike-beasley`) + optional FAQPage.

**Palette:** `#1B4332` deep green, `#2D6A4F` mid green, `#52B788`/`#B7E4C7` light green, `#F4A261` orange (hover `#E76F51`), `#FEFAE0` cream page bg. CTAs are `rounded-full` pills.

**Interactivity:** keep pages as Server Components; extract any `useState` UI (accordions, forms) into small `"use client"` components. Accordion pattern (the "+" rotates to 45deg when open) is in `src/app/faq/FaqClient.tsx` — reuse it.

**Route handlers:** mirror `src/app/api/newsletter/route.ts` — `export const runtime = "nodejs"`, in-memory IP rate limit via `Map<string, number[]>`, `getClientIp` reads `x-forwarded-for` then `x-real-ip`, `json()` helper returns `Response.json(body, { status })`, return shape `{ ok: boolean; message: string }`. Next 16 supports typed `RouteContext<'/path'>` for dynamic params (await ctx.params).

**Forms:** `"use client"`, `useId()` for input ids, accessible labels + `aria-required`/`aria-invalid`/`aria-describedby`, `aria-live="polite"` status region, `noValidate` on the form with JS validation. See [[project-sanity-blog]] for content-side conventions.
