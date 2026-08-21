import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const siteUrl = "https://www.toolkiti.org";

export const metadata: Metadata = {
  title: {
    default: "ToolKiti - AI API Directory: Compare 127 APIs, Pricing & Free Tiers (2026)",
    template: "%s | ToolKiti",
  },
  description:
    "Find the best AI APIs in 2026. Compare 127 APIs across 13 categories: pricing, free tiers, latency, code examples & side-by-side comparisons. Updated daily. Bilingual EN/ZH.",
  robots: { index: true, follow: true },
  verification: {
    other: {
      "msvalidate.01": "D44B98DB7A4CA5A619328E2ED47260C9",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ToolKiti",
    title: "ToolKiti - Compare 127 AI APIs: Pricing, Free Tiers & Alternatives (2026)",
    description:
      "127 AI APIs compared. Find pricing, free tiers, code examples, and side-by-side comparisons for GPT-4o, Claude, Gemini, DeepSeek & more.",
    url: siteUrl,
  },
  twitter: { card: "summary_large_image", title: "ToolKiti - Compare 127 AI APIs: Pricing, Free Tiers & Alternatives", description: "127 AI APIs compared. Pricing, free tiers, code examples, side-by-side comparisons. Updated daily.",
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
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        {children}
        <Analytics />
      </body>
    </html>
  );
}

