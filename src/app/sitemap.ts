import type { MetadataRoute } from "next";
import { articles } from "./news/articles";

export const dynamic = "force-static";

const BASE = "https://www.shifsd-liberia.org";
const NOW = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, priority: 1.0, changeFrequency: "monthly", lastModified: NOW },
    { url: `${BASE}/about`, priority: 0.9, changeFrequency: "monthly", lastModified: NOW },
    { url: `${BASE}/programs`, priority: 0.9, changeFrequency: "monthly", lastModified: NOW },
    { url: `${BASE}/programs/climate-smart-agriculture`, priority: 0.8, changeFrequency: "monthly", lastModified: NOW },
    { url: `${BASE}/programs/education-livelihood`, priority: 0.8, changeFrequency: "monthly", lastModified: NOW },
    { url: `${BASE}/programs/financial-sustainability`, priority: 0.8, changeFrequency: "monthly", lastModified: NOW },
    { url: `${BASE}/impact`, priority: 0.9, changeFrequency: "monthly", lastModified: NOW },
    { url: `${BASE}/get-involved`, priority: 0.8, changeFrequency: "monthly", lastModified: NOW },
    { url: `${BASE}/news`, priority: 0.8, changeFrequency: "weekly", lastModified: NOW },
    { url: `${BASE}/contact`, priority: 0.7, changeFrequency: "yearly", lastModified: NOW },
    { url: `${BASE}/donate`, priority: 0.9, changeFrequency: "monthly", lastModified: NOW },
    { url: `${BASE}/privacy`, priority: 0.3, changeFrequency: "yearly", lastModified: NOW },
    { url: `${BASE}/terms`, priority: 0.3, changeFrequency: "yearly", lastModified: NOW },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE}/news/${a.slug}`,
    lastModified: new Date(a.isoDate),
    priority: 0.6,
    changeFrequency: "yearly" as const,
  }));

  return [...staticRoutes, ...articleRoutes];
}
