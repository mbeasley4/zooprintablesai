import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

/**
 * Read-only Sanity client for the public site.
 *
 * - `useCdn: true` serves cached, published content from Sanity's CDN.
 * - `perspective: "published"` excludes drafts from public queries.
 * - `stega: { enabled: false }` keeps invisible visual-editing metadata out of
 *   the rendered output (we are not using Presentation/visual editing here).
 */
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: true,
  perspective: "published",
  stega: { enabled: false },
});

export default sanityClient;
