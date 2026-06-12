---
name: env-config-convention
description: All .env* files are gitignored; document env vars in README, not a committed .env.example
metadata:
  type: project
---

All `.env*` files are gitignored in this repo (`.gitignore` has `.env*` with no negation), so there is no committed `.env.example`.

**Why:** The maintainer keeps secrets out of git entirely rather than maintaining a checked-in example file. Note `.env.local` currently contains a real `SANITY_API_WRITE_TOKEN` value (pre-existing, out of scope to change).

**How to apply:** When adding new env vars, put empty placeholders in `.env.local` AND document the variable's purpose in the README environment-variables table (the README is the committed source of truth for what env vars exist). Do not create a `.env.example` — it would be gitignored and never committed. Server-only secrets must be read in route handlers / server code, never prefixed `NEXT_PUBLIC_`. See [[internal-links-convention]].
