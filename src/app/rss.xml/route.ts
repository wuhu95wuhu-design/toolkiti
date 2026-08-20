import { apis } from "@/data/apis";

export const dynamic = "force-static";

function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

export async function GET() {
  const now = new Date().toUTCString();
  const topApis = [...apis].sort((a, b) => b.popularity - a.popularity).slice(0, 30);

  const items = topApis.map(api => {
    const url = `https://www.toolkiti.org/api/${api.slug}`;
    const desc = `${api.name} (${api.nameCn}) - ${api.description}. Pricing: ${api.pricing}. Popularity: ${api.popularity}/100.`;
    return `    <item>
      <title>${escapeXml(api.name)} — ${escapeXml(api.nameCn)}</title>
      <link>${escapeXml(url)}</link>
      <description>${escapeXml(desc)}</description>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${new Date(api.lastUpdated).toUTCString()}</pubDate>
      <category>${escapeXml(api.categoryCn || api.category)}</category>
    </item>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ToolKiti — AI API &amp; Tool Directory</title>
    <link>https://www.toolkiti.org</link>
    <description>Structured API references for AI agents and developers. ${apis.length} APIs across 13 categories. Updated daily.</description>
    <language>en</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="https://www.toolkiti.org/rss.xml" rel="self" type="application/rss+xml"/>
    <generator>ToolKiti RSS Engine</generator>
    <docs>https://www.rssboard.org/rss-specification</docs>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Last-Modified": now,
    },
  });
}
