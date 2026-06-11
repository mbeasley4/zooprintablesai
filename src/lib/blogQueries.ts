import imageUrlBuilder, { type SanityImageSource } from "@sanity/image-url";
import type { PortableTextBlock } from "@portabletext/react";
import { sanityClient } from "./sanityClient";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

const builder = imageUrlBuilder({ projectId, dataset });

/** Build a Sanity image URL with chainable transforms (width, height, crop, etc.). */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

/** Revalidate published content at most once per hour (ISR). */
const REVALIDATE_SECONDS = 3600;

/**
 * A Sanity image reference as returned by GROQ. The raw asset reference is kept
 * so it can be passed straight into `urlFor`.
 */
export interface SanityImage {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  alt?: string;
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
}

/** Fields needed to render a blog post card in the listing grid. */
export interface BlogPostSummary {
  _id: string;
  title: string;
  slug: string;
  createDate: string;
  featureImage: SanityImage | null;
  excerpt: string;
  postedBy: string;
}

/** Full blog post, including body content and SEO overrides. */
export interface BlogPost extends BlogPostSummary {
  content: PortableTextBlock[];
  seoTitle?: string;
  metaDescription?: string;
}

const summaryProjection = `
  _id,
  title,
  "slug": slug.current,
  createDate,
  featureImage,
  excerpt,
  postedBy
`;

/** All posts, newest first, with listing-card fields only. */
export async function getAllBlogPosts(): Promise<BlogPostSummary[]> {
  const query = `*[_type == "blog" && defined(slug.current)] | order(createDate desc) {
    ${summaryProjection}
  }`;
  return sanityClient.fetch<BlogPostSummary[]>(
    query,
    {},
    { next: { revalidate: REVALIDATE_SECONDS } },
  );
}

/** Slugs for every published post — used by generateStaticParams. */
export async function getAllBlogSlugs(): Promise<{ slug: string }[]> {
  const query = `*[_type == "blog" && defined(slug.current)] {
    "slug": slug.current
  }`;
  return sanityClient.fetch<{ slug: string }[]>(
    query,
    {},
    { next: { revalidate: REVALIDATE_SECONDS } },
  );
}

/** A single post by slug, including full content and SEO overrides. */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
    ${summaryProjection},
    content,
    seoTitle,
    metaDescription
  }`;
  return sanityClient.fetch<BlogPost | null>(
    query,
    { slug },
    { next: { revalidate: REVALIDATE_SECONDS } },
  );
}
