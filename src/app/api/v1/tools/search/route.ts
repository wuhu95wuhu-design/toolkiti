import { NextRequest, NextResponse } from "next/server";
import { apis } from "@/data/apis";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q")?.toLowerCase() || "";
  const category = req.nextUrl.searchParams.get("category") || "";
  const limit = Math.min(parseInt(req.nextUrl.searchParams.get("limit") || "20"), 50);
  let results = apis;
  if (q) {
    const terms = q.split(/\s+/);
    results = results.filter(a => {
      const haystack = [a.name, a.nameCn, a.description, a.descriptionCn, a.tags.join(" "), a.category].join(" ").toLowerCase();
      return terms.every((t: string) => haystack.includes(t));
    });
  }
  if (category) results = results.filter(a => a.category === category);
  const enhanced = results.slice(0, limit).map(a => ({
    slug: a.slug,
    name: a.name,
    nameCn: a.nameCn,
    category: a.category,
    categoryCn: a.categoryCn,
    description: a.description,
    descriptionCn: a.descriptionCn,
    pricing: a.pricing,
    popularity: a.popularity,
    status: a.status,
    website: a.website,
    docsUrl: a.docsUrl,
    auth: a.auth,
    tags: a.tags,
    referralUrl: a.referralUrl || null,
  }));
  return NextResponse.json({
    success: true,
    total: results.length,
    returned: enhanced.length,
    query: q || null,
    results: enhanced,
    _links: { detail: "/api/v1/tools/{slug}", compare: "/api/v1/tools/compare?ids=slug1,slug2" }
  }, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Access-Control-Allow-Origin": "*"
    }
  });
}