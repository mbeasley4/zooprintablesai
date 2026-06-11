/**
 * Root Sanity config consumed by the Sanity CLI (`sanity deploy`,
 * `sanity schema extract`, etc.). The embedded Studio route at
 * `/app/studio/[[...tool]]/page.tsx` and the CLI now share a single
 * source of truth: `src/sanity/sanity.config.ts`.
 */
export { default } from "./src/sanity/sanity.config";
