import Link from "next/link";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import ApiCard from "@/components/ApiCard";
import TopPicks from "@/components/TopPicks";
import SponsoredApiOfWeek from "@/components/SponsoredApiOfWeek";
import PremiumDataTeaser from "@/components/PremiumDataTeaser";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import dynamic from "next/dynamic";
const SearchSection = dynamic(() => import("@/components/SearchSection"), {
  loading: () => (
    <div className="relative mb-4">
      <input type="text" placeholder="Loading search..." disabled
        className="w-full rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 pl-10 text-sm text-[var(--fg)] placeholder-[var(--muted)] outline-none disabled:opacity-50" />
    </div>
  ),
});
import AdBanner from "@/components/AdBanner";
import BlogCard from "@/components/BlogCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { apis, categories } from "@/data/apis";
import SupportSection from "@/components/SupportSection";

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ToolKiti",
    "alternateName": ["ToolKiti API Directory", "ToolKiti Tools"],
    "url": "https://toolkiti.org",
    "description": "Structured API references and tool listings for AI agents and developers. " + apis.length + " APIs across " + categories.length + " categories with popularity rankings, code examples, and comparison tools.",
    "inLanguage": ["en", "zh"],
    "applicationCategory": "DeveloperApplication",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://toolkiti.org/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Hero */}
        <section className="mb-6 text-center">
          <div className="mb-4 flex justify-center">
            <Logo size={48} />
          </div>
          <h1 className="mb-3 text-3xl font-bold">ToolKiti</h1>
          <p className="mx-auto max-w-xl text-[var(--muted)]">
            Structured API references and tool listings, designed for AI agents and developers.
            Clean, machine-readable, bilingual.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <Link href="/compare" className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm transition-colors hover:border-[var(--accent)]">Compare APIs</Link>
            <Link href="/blog" className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm transition-colors hover:border-[var(--accent)]">Blog</Link>
            <Link href="/submit" className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90">+ Submit API</Link>
          </div>
        </section>

        {/* Ad Banner */}
        <AdBanner />

        {/* API of the Week */}
        <SponsoredApiOfWeek />

        {/* Stats */}
        <section className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-3 text-center"><div className="text-xl font-bold text-[var(--accent)]">{apis.length}</div><div className="text-xs text-[var(--muted)]">APIs Listed</div></div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-3 text-center"><div className="text-xl font-bold text-[var(--accent)]">{categories.length}</div><div className="text-xs text-[var(--muted)]">Categories</div></div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-3 text-center"><div className="text-xl font-bold text-[var(--accent)]">{apis.filter(a => a.referralUrl).length}</div><div className="text-xs text-[var(--muted)]">Try-It Links</div></div>
          <a href="https://github.com/wuhu95wuhu-design/toolkiti" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-3 text-center transition-colors hover:border-[var(--accent)]"><div className="flex items-center justify-center gap-1 text-xl font-bold text-[var(--accent)]"><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>Star</div><div className="text-xs text-[var(--muted)]">GitHub</div></a>
        </section>

        {/* Search */}
        <section className="mb-10">
          <SearchSection />
        </section>

        {/* Top Picks - Monetization */}
        <TopPicks apis={apis} />

        {/* Categories */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold">Categories</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {categories.map(cat => (
              <Link key={cat.slug} href={`/category/${cat.slug}`}
                className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-center transition-colors hover:border-[var(--accent)]">
                <div className="font-medium">{cat.name}</div>
                <div className="text-xs text-[var(--muted)]">{cat.nameCn}</div>
                <div className="mt-1 text-[10px] text-[var(--muted)]">{apis.filter(a => a.category === cat.slug).length} APIs</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Blog Teaser */}
        <section className="mb-10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Latest from Blog</h2>
            <Link href="/blog" className="text-sm text-[var(--accent)] hover:underline">View all →</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <BlogCard slug="top-llm-apis-2026-compared" title="Top 10 LLM APIs Compared" excerpt="GPT-4o, Claude 3.5, Gemini 2.0 — real benchmarks and prices." date="2026-07-30" category="AI" />
            <BlogCard slug="ai-agent-tool-stack" title="Building an AI Agent: Full API Stack" excerpt="From LLM to payment — every API your agent needs." date="2026-07-28" category="Guide" />
            <BlogCard slug="api-pricing-trends-2026" title="API Pricing Trends 2026" excerpt="LLM costs dropped 80%. What it means for builders." date="2026-07-25" category="Analysis" />
          </div>
        </section>

        {/* Popular APIs */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold">Popular APIs</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[...apis].sort((a, b) => b.popularity - a.popularity).slice(0, 12).map(api => (
              <ApiCard key={api.slug} api={api} />
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/compare" className="inline-flex items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--card)] px-5 py-2 text-sm transition-colors hover:border-[var(--accent)]">
              Compare APIs →
            </Link>
          </div>
        </section>

        {/* All APIs */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold">All APIs & Tools</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[...apis].sort((a, b) => b.popularity - a.popularity).map(api => (
              <ApiCard key={api.slug} api={api} />
            ))}
          </div>
        </section>

        {/* Submit CTA */}
        <section className="mb-8 rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 text-center">
          <h2 className="mb-2 text-lg font-semibold">Missing an API?</h2>
          <p className="mb-4 text-sm text-[var(--muted)]">Submit your API or request a new one. Free basic listings available.</p>
          <div className="flex justify-center gap-3">
            <a href="https://github.com/wuhu95wuhu-design/toolkiti/issues/new?labels=api-request&template=api_request.md&title=Request: "
              target="_blank" rel="noopener noreferrer"
              className="inline-block rounded-lg border border-[var(--border)] bg-[var(--card)] px-5 py-2.5 text-sm font-semibold transition-colors hover:border-[var(--accent)]">
              Request API →
            </a>
            <Link href="/submit"
              className="inline-block rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
              Submit API →
            </Link>
          </div>
        </section>

        {/* Newsletter */}
        <NewsletterSignup />

        {/* AI-friendly section */}
        <section className="mt-16 border-t border-[var(--border)] pt-8">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">For AI Agents</h2>
          <p className="mb-3 text-sm text-[var(--muted)]">
            This site provides structured JSON-LD data on every page and code examples in machine-readable format.
          </p>
          <div className="flex flex-wrap gap-2">
            <code className="rounded bg-[var(--card)] px-3 py-1.5 text-sm">/api/data</code>
            <code className="rounded bg-[var(--card)] px-3 py-1.5 text-sm">/api/v1/tools/search?q=</code>
            <code className="rounded bg-[var(--card)] px-3 py-1.5 text-sm">/api/ai.txt</code>
          </div>
          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm">
            <a href="/robots.txt" className="underline">robots.txt</a>
            <a href="/llms.txt" className="underline">llms.txt</a>
            <a href="/llms-full.txt" className="underline">llms-full.txt</a>
            <a href="/openapi.json" className="underline">openapi.json</a>
            <a href="/.well-known/ai-plugin.json" className="underline">ai-plugin.json</a>
            <a href="/llms.txt" className="underline">llms.txt</a>
            <a href="/llms-full.txt" className="underline">llms-full.txt</a>
            <a href="/sitemap.xml" className="underline">sitemap.xml</a>
          </div>
        </section>

        <PremiumDataTeaser />

        <SupportSection />
      </main>
      <ExitIntentPopup />
    </>
  );
}