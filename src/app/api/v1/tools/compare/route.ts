import { NextRequest, NextResponse } from "next/server";
import { apis } from "@/data/apis";
import { extendedData } from "@/data/extended";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const ids = (req.nextUrl.searchParams.get("ids") || "").split(",").filter(Boolean);
  if (ids.length < 2) return NextResponse.json({ success: false, error: "Need at least 2 ids, e.g. ?ids=openai,anthropic" }, { status: 400 });
  const tools = apis.filter(a => ids.includes(a.slug));
  const compared = tools.map(a => {
    const ext = extendedData[a.slug] || {};
    return {
      slug: a.slug, name: a.name, category: a.category,
      pricing: a.pricing, popularity: a.popularity,
      status: a.status, auth: a.auth,
      rateLimit: ext.rateLimit || "N/A",
      latency: ext.latency || "N/A",
      maxTokens: ext.maxTokens || "N/A",
      sdks: a.sdks, endpoints: a.endpoints,
      referralUrl: a.referralUrl || a.website,
    };
  });
  return NextResponse.json({ success: true, compared, _links: { search: "/api/v1/tools/search?q=" } },
    { headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "public, max-age=3600", "Access-Control-Allow-Origin": "*" }});
}