---
name: recurring-validation-patterns
description: "Common schema.org validation errors found and fixed in the June 2026 site-wide audit"
metadata:
  type: feedback
---

## Patterns observed in June 2026 full-site audit

### 1. Bare URL used as @id (causes node collision)
**Wrong:** `"@id": "https://www.zooprintablesai.com/faq"`
**Right:** `"@id": "https://www.zooprintablesai.com/faq#webpage"` and `"@id": "https://www.zooprintablesai.com/faq#faqpage"`
**Why:** When two schema nodes on the same page share an identical `@id`, the graph merges them into one entity. FAQPage and WebPage should be distinct nodes.

### 2. Inline WebSite stub instead of @id reference in isPartOf
**Wrong:** `isPartOf: { "@type": "WebSite", url: SITE }`
**Right:** `isPartOf: { "@id": "https://www.zooprintablesai.com/#website" }`
**Why:** The WebSite node is fully defined on the homepage. All other pages should link to it by `@id`, not redeclare a partial stub.

### 3. `provider` used instead of `publisher` on LearningResource
**Wrong:** `provider: { "@id": ".../#organization" }`
**Right:** `publisher: { "@id": ".../#organization" }`
**Why:** `provider` is not a recognized Google Rich Result field for LearningResource. `publisher` is the correct recommended field.

### 4. `image` as plain URL string on BlogPosting
**Wrong:** `image: "https://..."` (string)
**Right:** `image: { "@type": "ImageObject", url: "https://...", width: 1200, height: 630 }`
**Why:** Google's structured data guidelines for Article/BlogPosting expect `ImageObject` with explicit dimensions for rich result eligibility.

### 5. Missing `dateModified` on BlogPosting
BlogPosting nodes must include both `datePublished` and `dateModified`. If no separate modified date is tracked in Sanity, fall back to `post.createDate` for `dateModified` until the CMS stores an update date.

### 6. Missing BreadcrumbList on blog pages
Blog index and blog post pages had no `BreadcrumbList`. Added to both. All navigational pages should have `BreadcrumbList`.

### 7. Stale "conservation biologist" language in WebSite description
The WebSite node on the homepage contained "curated by a conservation biologist" — a remnant of the Dr. Maya Okafor persona. Fixed to reference Mike Beasley's actual role.
**How to apply:** Any time WebSite/Organization/WebPage description is edited, check for phantom expert language.

### 8. Missing JSON-LD on blog index and privacy pages
Both `blog/page.tsx` and `privacy/page.tsx` had zero structured data. Added `CollectionPage` + `BreadcrumbList` to blog index, and `WebPage` + `BreadcrumbList` to privacy.
**How to apply:** Every page route needs at minimum a `WebPage` + `BreadcrumbList` schema.
