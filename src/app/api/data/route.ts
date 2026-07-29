import { NextResponse } from "next/server";
import { apis } from "@/data/apis";
import { extendedData } from "@/data/extended";

export const dynamic = "force-dynamic";

export async function GET() {
  const enhanced = apis.map(api => {
    const ext = extendedData[api.slug] || {};
    return {
      ...api,
      ...ext,
      _meta: {
        totalApis: apis.length,
        siteDescription: "Structured API references for AI agents and developers",
        siteUrl: "https://toolkiti.org",
        bilingual: ["en", "zh"],
        lastUpdated: "2026-07-29",
      }
    };
  });
  return NextResponse.json(enhanced, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Pragma": "no-cache",
      "Expires": "0",
    },
  });
}
