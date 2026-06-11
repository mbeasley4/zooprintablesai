---
name: feedback-internal-links
description: This codebase uses raw <a> tags for internal navigation, not next/link — match it
metadata:
  type: feedback
---

Use raw `<a href>` for internal links, not `<Link>` from `next/link`.

**Why:** Every existing page (animals index, animals/[slug], Navbar, Footer) uses plain `<a>` tags for internal routes. The `@next/next/no-html-link-for-pages` ESLint rule fires on these, but the errors are pre-existing across the whole codebase and do not block builds (no `next lint` in the build script, ESLint not enforced at build). It is a deliberate, consistent convention.

**How to apply:** When adding pages/components, follow the `<a>` convention to stay consistent — do not introduce `next/link` for internal nav unless the user asks to migrate the whole codebase. The lint error on `<a>` internal links is expected noise, not a regression you introduced.
