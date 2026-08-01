import { NextRequest, NextResponse } from "next/server";
import { apis, categories } from "@/data/apis";
export const dynamic = "force-static";
export async function GET(req: NextRequest) {
  const limit = Math.min(parseInt(req.nextUrl.searchParams.get("limit") || "100"), 100);
  const tools = apis.slice(0, limit).map(a => ({ slug: a.slug, name: a.name, category: a.category, description: a.description, pricing: a.pricing, popularity: a.popularity, status: a.status, tags: a.tags }));
  return NextResponse.json({ success: true, total: apis.length, returned: tools.length, tools, categories: categories.map(c => c.slug),
    _links: { search: "/api/v1/tools/search?q=", compare: "/api/v1/tools/compare?ids=", categories: "/api/v1/tools/categories" }
  }, { headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "public, max-age=3600", "Access-Control-Allow-Origin": "*" }});
}