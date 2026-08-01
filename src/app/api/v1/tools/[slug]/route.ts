import { NextRequest, NextResponse } from "next/server";
import { apis } from "@/data/apis";
import { extendedData } from "@/data/extended";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const api = apis.find(a => a.slug === slug);
  if (!api) return NextResponse.json({ success: false, error: "Tool not found" }, { status: 404 });
  const ext = extendedData[slug] || {};
  const curlExample = api.endpoints.length > 0 ? `curl ${api.endpoints[0]} \\\n  -H "Authorization: Bearer $KEY" \\\n  -H "Content-Type: application/json"` : null;
  return NextResponse.json({
    success: true,
    tool: {
      slug: api.slug, name: api.name, nameCn: api.nameCn,
      category: api.category, categoryCn: api.categoryCn,
      description: api.description, descriptionCn: api.descriptionCn,
      website: api.website, docsUrl: api.docsUrl,
      pricing: api.pricing, auth: api.auth,
      endpoints: api.endpoints, sdks: api.sdks,
      status: api.status, popularity: api.popularity,
      tags: api.tags, lastUpdated: api.lastUpdated,
      referralUrl: api.referralUrl || null,
      sponsored: ext.sponsored || false,
      rateLimit: ext.rateLimit || null,
      latency: ext.latency || null,
      maxTokens: ext.maxTokens || null,
      features: ext.features || [],
      usageTips: ext.usageTips || [],
      codeExamples: ext.codeExamples || [],
      curlExample,
    },
    _links: { compare: `/api/v1/tools/compare?ids=${slug},...`, search: "/api/v1/tools/search?q=" }
  }, { headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "public, max-age=86400", "Access-Control-Allow-Origin": "*" }});
}