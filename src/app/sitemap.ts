import type { MetadataRoute } from "next";
import { animals } from "@/lib/animalData";

const SITE = "https://www.zooprintablesai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE,                   lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
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

  return [...staticRoutes, ...animalRoutes];
}
