import { MetadataRoute } from "next";
import { apis, categories } from "@/data/apis";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: "https://toolkiti.org", lastModified: new Date(), changeFrequency: "daily" as const, priority: 1 },
    { url: "https://toolkiti.org/compare", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: "https://toolkiti.org/blog", lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: "https://toolkiti.org/free-tier", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: "https://toolkiti.org/error-codes", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: "https://toolkiti.org/mcp-servers", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: "https://toolkiti.org/agent-stacks", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: "https://toolkiti.org/submit", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "https://toolkiti.org/sponsor", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: "https://toolkiti.org/llms.txt", lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: "https://toolkiti.org/llms-full.txt", lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: "https://toolkiti.org/agents.txt", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: "https://toolkiti.org/openapi.json", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: "https://toolkiti.org/api/ai.txt", lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: "https://toolkiti.org/rss.xml", lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: "https://toolkiti.org/opensearch.xml", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
  ];
  const categoryPages = categories.map(cat => ({
    url: `https://toolkiti.org/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  const apiPages = apis.map(api => ({
    url: `https://toolkiti.org/api/${api.slug}`,
    lastModified: new Date(api.lastUpdated),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...staticPages, ...categoryPages, ...apiPages];
}
