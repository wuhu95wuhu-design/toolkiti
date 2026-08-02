import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = "https://toolkiti.org";

export const metadata: Metadata = {
  title: {
    default: "ToolKiti — API & Tool Reference for AI Agents",
    template: "%s | ToolKiti",
  },
  description:
    "Structured, machine-readable API references and tool listings for AI agents and developers. 32 APIs across 8 categories with code examples, pricing, endpoints, SDKs, popularity rankings, and side-by-side comparison. Bilingual EN/ZH.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ToolKiti",
    title: "ToolKiti — API & Tool Reference for AI Agents",
    description:
      "Structured API references for AI agents and developers. 32 APIs, 8 categories, code examples, comparison tools, popularity rankings.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolKiti — API & Tool Reference for AI Agents",
    description:
      "Structured API references for AI agents. 32 APIs, code examples, comparison tools, bilingual EN/ZH.",
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="2" y="2" width="28" height="28" rx="6" stroke="%236366f1" stroke-width="2" fill="none"/><path d="M10 10H22M16 10V22" stroke="%236366f1" stroke-width="2.5" stroke-linecap="round"/><circle cx="22" cy="22" r="3" fill="%236366f1"/></svg>', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
        <link rel="search" type="application/opensearchdescription+xml" title="ToolKiti" href="/opensearch.xml" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

