import { NextResponse } from "next/server";
import { apis } from "@/data/apis";

export async function GET() {
  return NextResponse.json(apis);
}
