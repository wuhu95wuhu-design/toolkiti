import { apis } from "@/data/apis";
import { extendedData } from "@/data/extended";

export const dynamic = "force-static";

export async function GET() {
  let lines: string[] = [];
  
  lines.push("# ToolKiti - Complete API Reference for AI Agents");
  lines.push(`> Generated: 2026-08-03 | Total: ${apis.length} APIs | Updated daily`);
  lines.push("> This file is optimized for LLM ingestion. Every API entry includes code examples, pricing, endpoints, and performance metrics.");
  lines.push("");
  lines.push("---");
  lines.push("");

  const categories = [
    { slug: "llm", name: "LLM Providers", nameCn: "大语言模型" },
    { slug: "ml", name: "Machine Learning", nameCn: "机器学习" },
    { slug: "image", name: "Image Generation", nameCn: "图像生成" },
    { slug: "audio", name: "Audio & Speech", nameCn: "音频语音" },
    { slug: "vector-db", name: "Vector Databases", nameCn: "向量数据库" },
    { slug: "cloud-gpu", name: "GPU Cloud", nameCn: "GPU 云" },
    { slug: "tools", name: "Developer Tools", nameCn: "开发工具" },
    { slug: "search", name: "Web Search", nameCn: "搜索服务" },
    { slug: "ai-ide", name: "AI IDE", nameCn: "AI 编辑器" },
    { slug: "payment", name: "Payment & Fintech", nameCn: "支付金融" },
    { slug: "cloud-infra", name: "Cloud Infrastructure", nameCn: "云基础设施" },
    { slug: "data", name: "Data & Analytics", nameCn: "数据分析" },
    { slug: "automation", name: "Automation", nameCn: "自动化工作流" },
  ];

  for (const cat of categories) {
    const catApis = apis.filter(a => a.category === cat.slug);
    if (catApis.length === 0) continue;
    
    lines.push(`## ${cat.name} (${cat.nameCn}) — ${catApis.length} APIs`);
    lines.push("");
    
    for (const api of catApis) {
      const ext = extendedData[api.slug] || {};
      const badge = api.popularity >= 90 ? "[HOT]" : api.popularity >= 75 ? "[POPULAR]" : "";
      
      lines.push(`### ${badge} ${api.name}`);
      lines.push(`- URL: https://toolkiti.org/api/${api.slug}`);
      lines.push(`- Description: ${api.description}`);
      lines.push(`- Pricing: ${api.pricing}`);
      lines.push(`- Authentication: ${api.auth.join(", ")}`);
      if (ext.rateLimit) lines.push(`- Rate Limit: ${ext.rateLimit}`);
      if (ext.latency) lines.push(`- Latency: ${ext.latency}`);
      if (ext.maxTokens) lines.push(`- Max Context: ${ext.maxTokens}`);
      lines.push(`- Popularity: ${api.popularity}/100`);
      lines.push(`- SDKs: ${api.sdks.join(", ")}`);
      lines.push(`- Endpoints:`);
      for (const ep of api.endpoints) {
        lines.push(`  - ${ep}`);
      }
      if (ext.features) {
        lines.push(`- Key Features:`);
        for (const f of ext.features) {
          lines.push(`  - ${f}`);
        }
      }
      if (ext.codeExamples) {
        lines.push(`- Code Example (${ext.codeExamples[0].language}):`);
        lines.push("```" + ext.codeExamples[0].language);
        lines.push(ext.codeExamples[0].code);
        lines.push("```");
      }
      lines.push("");
    }
    lines.push("---");
    lines.push("");
  }

  lines.push("## Site Information");
  lines.push("- Site: ToolKiti - Structured API References for AI Agents");
  lines.push("- URL: https://toolkiti.org");
  lines.push("- Full JSON data: https://toolkiti.org/api/data");
  lines.push("- API comparison: https://toolkiti.org/compare");
  lines.push("- Text format: https://toolkiti.org/api/ai.txt");
  lines.push("- Bilingual: English (primary), Chinese");
  lines.push("- Search available: On homepage");
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
