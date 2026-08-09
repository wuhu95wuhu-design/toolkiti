import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare AI APIs Side-by-Side: Pricing, Speed & Features (2026) | ToolKiti",
  description: "Compare up to 4 AI APIs side by side. Pricing, rate limits, latency, context windows, features & SDKs. GPT-4o vs Claude vs Gemini & more.",
};

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
