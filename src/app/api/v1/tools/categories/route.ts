import { NextResponse } from "next/server";
import { apis, categories } from "@/data/apis";
export const dynamic = "force-static";
export async function GET() {
  const cats = categories.map(c => ({ slug: c.slug, name: c.name, nameCn: c.nameCn, count: apis.filter(a => a.category === c.slug).length }));
  return NextResponse.json({ success: true, categories: cats },
    { headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "public, max-age=86400", "Access-Control-Allow-Origin": "*" }});
}