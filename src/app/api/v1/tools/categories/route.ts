import { apis, categories } from "@/data/apis";
export const dynamic = "force-dynamic";
export async function GET() {
  const cats = categories.map(c => ({ slug: c.slug, name: c.name, nameCn: c.nameCn, count: apis.filter(a => a.category === c.slug).length }));
  const body = JSON.stringify({ success: true, categories: cats });
  return new Response(body, { status: 200, headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "public, max-age=86400", "Access-Control-Allow-Origin": "*" } });
}