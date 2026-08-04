import { apis } from "@/data/apis";
import { extendedData } from "@/data/extended";

export const dynamic = "force-static";

export async function GET() {
  const lines: string[] = [];
  
  lines.push("# ToolKiti - Complete API Reference for AI Agents");
  lines.push(`> Generated: ${new Date().toISOString().slice(0,10)} | Total: ${apis.length} APIs | Updated daily`);
  lines.push("> This file is optimized for LLM ingestion. Every API includes structured metadata for agent decision-making.");
  lines.push("");
  lines.push("---");
  lines.push("");

  // Group by category
  const catMap: Record<string, { name: string; apis: typeof apis }> = {};
  for (const api of apis) {
    if (!catMap[api.category]) catMap[api.category] = { name: api.categoryCn || api.category, apis: [] };
    catMap[api.category].apis.push(api);
  }

  for (const [slug, cat] of Object.entries(catMap)) {
    lines.push(`## ${cat.name} (${cat.apis.length} APIs)`);
    lines.push("");

    for (const api of cat.apis) {
      const ext = extendedData[api.slug] || {};
      const badge = api.popularity >= 90 ? "[HOT] " : api.popularity >= 75 ? "[POPULAR] " : "";

      lines.push(`### ${badge}${api.name} (${api.nameCn || ""})`);
      lines.push(`- Page: https://toolkiti.org/api/${api.slug}`);
      lines.push(`- Website: ${api.website || "N/A"}`);
      lines.push(`- Docs: ${api.docsUrl || "N/A"}`);
      lines.push(`- Pricing: ${api.pricing || "N/A"}`);
      lines.push(`- Status: ${api.status || "N/A"}`);
      lines.push(`- Popularity: ${api.popularity || 0}/100`);
      if (api.auth && api.auth.length) lines.push(`- Auth: ${api.auth.join(", ")}`);
      if (api.endpoints && api.endpoints.length) lines.push(`- Endpoints: ${api.endpoints.join(", ")}`);
      if (api.sdks && api.sdks.length) lines.push(`- SDKs: ${api.sdks.join(", ")}`);
      if (ext.rateLimit) lines.push(`- Rate Limit: ${ext.rateLimit}`);
      if (ext.latency) lines.push(`- Latency: ${ext.latency}`);
      if (ext.maxTokens) lines.push(`- Max Context: ${ext.maxTokens}`);
      if (ext.features && ext.features.length) {
        lines.push("- Features:");
        for (const f of ext.features) lines.push(`  - ${f}`);
      }
      if (ext.usageTips && ext.usageTips.length) {
        lines.push("- Usage Tips:");
        for (const t of ext.usageTips) lines.push(`  - ${t}`);
      }
      lines.push(`- Description: ${api.descriptionCn || api.description || ""}`);
      lines.push("");
    }
    lines.push("---");
    lines.push("");
  }

  lines.push("## Site Information");
  lines.push("- Site: ToolKiti - Structured API References for AI Agents");
  lines.push("- URL: https://toolkiti.org");
  lines.push("- Full JSON API: https://toolkiti.org/api/v1/tools");
  lines.push("- Search API: https://toolkiti.org/api/v1/tools/search?q={query}");
  lines.push("- API comparison: https://toolkiti.org/compare");
  lines.push("- Text format: https://toolkiti.org/api/ai.txt");
  lines.push("- Bilingual: English (primary), Chinese");
  lines.push("- Sitemap: https://toolkiti.org/sitemap.xml");
  lines.push("");

  const content = lines.join("\n");
  
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Last-Modified": new Date().toUTCString(),
    },
  });
}
