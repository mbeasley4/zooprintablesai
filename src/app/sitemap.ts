import type { MetadataRoute } from "next";
import { animals } from "@/lib/animalData";
import { getAllBlogSlugs } from "@/lib/blogQueries";

const SITE = "https://www.zooprintablesai.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE,                   lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE}/animals`,      lastModified: new Date(), changeFrequency: "weekly",  priority: 0.95 },
    { url: `${SITE}/blog`,         lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${SITE}/faq`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/about`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/charities`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  const animalRoutes: MetadataRoute.Sitemap = animals.map((a) => ({
    url: `${SITE}/animals/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const blogSlugs = await getAllBlogSlugs();
  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map(({ slug }) => ({
    url: `${SITE}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...animalRoutes, ...blogRoutes];
}
