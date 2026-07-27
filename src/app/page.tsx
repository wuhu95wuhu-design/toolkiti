import Link from "next/link";
import Header from "@/components/Header";
import ApiCard from "@/components/ApiCard";
import { apis, categories } from "@/data/apis";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Hero */}
        <section className="mb-12 text-center">
          <h1 className="mb-3 text-3xl font-bold">ToolKiti</h1>
          <p className="mx-auto max-w-xl text-[var(--muted)]">
            Structured API references and tool listings, designed for AI agents and developers.
            Clean, machine-readable, bilingual.
          </p>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold">Categories</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {categories.map(cat => (
              <Link key={cat.slug} href={`/category/${cat.slug}`}
                className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-center transition-colors hover:border-[var(--accent)]">
                <div className="font-medium">{cat.name}</div>
                <div className="text-xs text-[var(--muted)]">{cat.nameCn}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* All APIs */}
        <section>
          <h2 className="mb-4 text-lg font-semibold">All APIs & Tools</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {apis.map(api => (
              <ApiCard key={api.slug} api={api} />
            ))}
          </div>
        </section>

        {/* AI-friendly section */}
        <section className="mt-16 border-t border-[var(--border)] pt-8">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">For AI Agents</h2>
          <p className="mb-3 text-sm text-[var(--muted)]">
            This site provides structured JSON-LD data on every page. AI crawlers can access the full dataset at:
          </p>
          <code className="rounded bg-[var(--card)] px-3 py-1.5 text-sm">/api/data.json</code>
          <div className="mt-3 space-x-3 text-sm">
            <a href="/robots.txt" className="underline">robots.txt</a>
            <a href="/llms.txt" className="underline">llms.txt</a>
            <a href="/sitemap.xml" className="underline">sitemap.xml</a>
          </div>
        </section>
      </main>
    </>
  );
}
