import { MetadataRoute } from "next";
import { apis, categories } from "@/data/apis";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: "https://toolkiti.dev", lastModified: new Date(), changeFrequency: "daily" as const, priority: 1 },
  ];
  const categoryPages = categories.map(cat => ({
    url: `https://toolkiti.dev/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  const apiPages = apis.map(api => ({
    url: `https://toolkiti.dev/api/${api.slug}`,
    lastModified: new Date(api.lastUpdated),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...staticPages, ...categoryPages, ...apiPages];
}
