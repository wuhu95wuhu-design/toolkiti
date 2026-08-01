import { NextRequest } from "next/server";
import { apis } from "@/data/apis";
import { extendedData } from "@/data/extended";
export const dynamic = "force-dynamic";
export async function GET(req: NextRequest) {
  const ids = (req.nextUrl.searchParams.get("ids") || "").split(",").filter(Boolean);
  if (ids.length < 2) return new Response(JSON.stringify({ success: false, error: "Need at least 2 ids" }), { status: 400, headers: { "Content-Type": "application/json; charset=utf-8" } });
  const tools = apis.filter(a => ids.includes(a.slug));
  const compared = tools.map(a => {
    const ext = extendedData[a.slug] || {};
    return { slug: a.slug, name: a.name, nameCn: a.nameCn, category: a.category, pricing: a.pricing, popularity: a.popularity, status: a.status, auth: a.auth, rateLimit: ext.rateLimit || "N/A", latency: ext.latency || "N/A", maxTokens: ext.maxTokens || "N/A", sdks: a.sdks, endpoints: a.endpoints, referralUrl: a.referralUrl || a.website };
  });
  return new Response(JSON.stringify({ success: true, compared }), { status: 200, headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "public, max-age=3600", "Access-Control-Allow-Origin": "*" } });
}