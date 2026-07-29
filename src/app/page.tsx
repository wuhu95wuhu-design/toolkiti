import Link from "next/link";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import ApiCard from "@/components/ApiCard";
import SearchSection from "@/components/SearchSection";
import { apis, categories } from "@/data/apis";
import SupportSection from "@/components/SupportSection";

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ToolKiti",
    "alternateName": ["ToolKiti API Directory", "ToolKiti Tools"],
    "url": "https://toolkiti.org",
    "description": "Structured API references and tool listings for AI agents and developers. 32 APIs across 8 categories with popularity rankings, code examples, and comparison tools.",
    "inLanguage": ["en", "zh"],
    "applicationCategory": "DeveloperApplication"
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
        <section className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <Logo size={48} />
          </div>
          <h1 className="mb-3 text-3xl font-bold">ToolKiti</h1>
          <p className="mx-auto max-w-xl text-[var(--muted)]">
            Structured API references and tool listings, designed for AI agents and developers.
            Clean, machine-readable, bilingual. Featuring code examples, search, and comparison tools.
          </p>
        </section>

        {/* Search */}
        <section className="mb-10">
          <SearchSection />
        </section>

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

        {/* AI-friendly section */}
        <section className="mt-16 border-t border-[var(--border)] pt-8">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">For AI Agents</h2>
          <p className="mb-3 text-sm text-[var(--muted)]">
            This site provides structured JSON-LD data on every page and code examples in machine-readable format. AI crawlers can access the full dataset at:
          </p>
          <code className="rounded bg-[var(--card)] px-3 py-1.5 text-sm">/api/data.json</code>
          <div className="mt-3 space-x-3 text-sm">
            <a href="/robots.txt" className="underline">robots.txt</a>
            <a href="/llms.txt" className="underline">llms.txt</a>
            <a href="/sitemap.xml" className="underline">sitemap.xml</a>
          </div>
        </section>

        <SupportSection />
      </main>
    </>
  );
}
