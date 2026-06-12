---
name: publisher-author-config
description: "Canonical @id values, logo, sameAs, and entity config used across all Zoo Printables AI pages"
metadata:
  type: reference
---

## Organization
- `@id`: `https://www.zooprintablesai.com/#organization`
- `name`: "Zoo Printables AI"
- `url`: `https://www.zooprintablesai.com`
- `logo`: `{ "@type": "ImageObject", url: "https://www.zooprintablesai.com/images/logo.png", width: 280, height: 40 }`
- `sameAs`: instagram, pinterest, facebook, tiktok, youtube all at @zooprintablesai

## Author / Person
- `@id`: `https://www.zooprintablesai.com/#mike-beasley`
- `name`: "Mike Beasley"
- `jobTitle`: "Founder & Full-Stack Web Developer"
- `sameAs`: `https://www.linkedin.com/in/michaelkbeasley/`
- `image`: `https://www.zooprintablesai.com/images/mike-profile.png`
- `url`: `https://www.zooprintablesai.com/about`
- **Never** use Dr. Maya Okafor — this persona was removed in June 2026 for EEAT verification

## WebSite node
- `@id`: `https://www.zooprintablesai.com/#website`
- Defined only on the homepage

## Usage pattern
When any page schema needs `author` or `publisher`, always reference by `@id`:
```json
"author": { "@id": "https://www.zooprintablesai.com/#mike-beasley" },
"publisher": { "@id": "https://www.zooprintablesai.com/#organization" }
```
Never inline a full Person or Organization object on a page where it is not the primary subject.
