---
name: page-id-conventions
description: "Fragment naming rules for all @id values across page types — prevents entity graph collisions"
metadata:
  type: reference
---

## @id Fragment Convention (Zoo Printables AI)

Every page's primary node uses a `#fragment` suffix on the page URL to avoid `@id` collisions between
the `WebPage`/`CollectionPage` node and the `FAQPage`, `BlogPosting`, etc. on the same page.

| Page | Primary node @id |
|---|---|
| Homepage | `https://www.zooprintablesai.com/#webpage` |
| /about | `https://www.zooprintablesai.com/about#webpage` |
| /animals | `https://www.zooprintablesai.com/animals#webpage` (CollectionPage) |
| /animals/[slug] | `https://www.zooprintablesai.com/animals/[slug]#webpage` (WebPage) |
| /animals/[slug] LearningResource | `https://www.zooprintablesai.com/animals/[slug]#learning-resource` |
| /blog | `https://www.zooprintablesai.com/blog#webpage` (CollectionPage) |
| /blog/[slug] | `https://www.zooprintablesai.com/blog/[slug]#webpage` (mainEntityOfPage) |
| /blog/[slug] BlogPosting | `https://www.zooprintablesai.com/blog/[slug]#blogposting` |
| /charities | `https://www.zooprintablesai.com/charities#webpage` |
| /faq WebPage | `https://www.zooprintablesai.com/faq#webpage` |
| /faq FAQPage | `https://www.zooprintablesai.com/faq#faqpage` |
| /privacy | `https://www.zooprintablesai.com/privacy#webpage` |

## Rules
- `@id` must never equal the bare page URL (e.g. `https://www.zooprintablesai.com/faq`) — that creates a collision if two nodes on the same page claim the same IRI
- `isPartOf` on every page WebPage/CollectionPage must reference `{ "@id": "https://www.zooprintablesai.com/#website" }` — NOT an inline `{ "@type": "WebSite", url: ... }` stub
- `worksFor` / `affiliation` on Person nodes should reference `{ "@id": ".../#organization" }` not inline org objects
