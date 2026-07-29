import { NextResponse } from "next/server";
import { apis } from "@/data/apis";
import { extendedData } from "@/data/extended";

export async function GET() {
  const enhanced = apis.map(api => {
    const ext = extendedData[api.slug] || {};
    return {
      ...api,
      ...ext,
      // Expanded for AI agents
      _meta: {
        totalApis: apis.length,
        siteDescription: "Structured API references for AI agents and developers",
        siteUrl: "https://toolkiti.org",
        bilingual: ["en", "zh"],
        lastUpdated: new Date().toISOString().split("T")[0],
      }
    };
  });
  return NextResponse.json(enhanced);
}
