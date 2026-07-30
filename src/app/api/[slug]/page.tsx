import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { apis, getApiBySlug } from "@/data/apis";
import { ApiEntry } from "@/lib/types";
import { extendedData } from "@/data/extended";
import ThumbsUp from "@/components/ThumbsUp";
import PricingCompare from "@/components/PricingCompare";
import Comments from "@/components/Comments";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return apis.map(api => ({ slug: api.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const api = getApiBySlug(slug);
  if (!api) return { title: "API Not Found" };
  return {
    title: api.name + " API — Docs, Pricing & Endpoints",
    description: api.description + " Category: " + api.categoryCn + ". Pricing: " + api.pricing + ". SDKs: " + api.sdks.join(", ") + ".",
    openGraph: {
      title: api.name + " API",
      description: api.descriptionCn || api.description,
      url: "https://toolkiti.org/api/" + api.slug,
    },
  };
}

function CodeBlock({ code, language, title }: { code: string; language: string; title: string }) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] overflow-hidden">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-2">
        <span className="text-xs font-medium text-[var(--muted)]">{title}</span>
        <span className="text-[10px] uppercase tracking-wider text-[var(--muted)]">{language}</span>
      </div>
      <pre className="overflow-x-auto p-4 text-xs leading-relaxed"><code>{code}</code></pre>
    </div>
  );
}

export default async function ApiPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const api = getApiBySlug(slug);
  if (!api) notFound();

  // Merge extended data (code examples, features, performance metrics)
  const ext = extendedData[api.slug] || {};
  const apiWithExt = { ...api, ...ext };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: api.name,
    description: api.description,
    applicationCategory: api.category,
    url: api.website,
    dateModified: api.lastUpdated,
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        
        <div className="mb-6 text-sm text-[var(--muted)]">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href={"/category/" + api.category} className="hover:underline">{api.categoryCn}</Link>
          <span className="mx-2">/</span>
          <span>{api.name}</span>
        </div>

        <div className="mb-8">
          <div className="mb-1 flex items-center gap-3">
            <h1 className="text-2xl font-bold">{api.name}</h1>
            <span className={"h-2.5 w-2.5 rounded-full " + (api.status === "online" ? "bg-green-600" : api.status === "beta" ? "bg-yellow-600" : "bg-red-600")} />
          </div>
          <p className="text-sm text-[var(--muted)]">{api.nameCn}</p>
          <p className="mt-2">{api.description}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{api.descriptionCn}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mb-8">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Website</h3>
            <div className="text-sm"><a href={api.website} target="_blank" rel="noopener noreferrer" className="break-all">{api.website}</a></div>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Documentation</h3>
            <div className="text-sm"><a href={api.docsUrl} target="_blank" rel="noopener noreferrer" className="break-all">{api.docsUrl}</a></div>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Pricing</h3>
            <div className="text-sm">{api.pricing}</div>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Authentication</h3>
            <ul className="list-disc pl-4 text-sm">{api.auth.map(a => <li key={a}>{a}</li>)}</ul>
          </div>
          {apiWithExt.rateLimit && (
            <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Rate Limit</h3>
              <div className="text-sm">{apiWithExt.rateLimit}</div>
            </div>
          )}
          {apiWithExt.latency && (
            <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Typical Latency</h3>
              <div className="text-sm">{apiWithExt.latency}</div>
            </div>
          )}
          {apiWithExt.maxTokens && (
            <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Max Context</h3>
              <div className="text-sm">{apiWithExt.maxTokens}</div>
            </div>
          )}
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Popularity</h3>
            <div className="flex items-center gap-2 text-sm">
              <div className="h-2 w-full max-w-32 rounded-full bg-[var(--border)]">
                <div className="h-2 rounded-full bg-[var(--accent)]" style={{ width: api.popularity + "%" }} />
              </div>
              <span>{api.popularity}/100</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="mb-3 text-lg font-semibold">Endpoints</h2>
          <div className="space-y-1.5">
            {api.endpoints.map(e => (
              <div key={e} className="overflow-x-auto whitespace-nowrap rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2.5 font-mono text-xs">{e}</div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="mb-3 text-lg font-semibold">SDKs</h2>
          <div className="flex flex-wrap gap-1.5">
            {api.sdks.map(s => (
              <span key={s} className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs">{s}</span>
            ))}
          </div>
        </div>

        {apiWithExt.features && apiWithExt.features.length > 0 && (
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-semibold">Key Features</h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {apiWithExt.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm">
                  <span className="mt-0.5 shrink-0 text-[var(--accent)]">&#9670;</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {apiWithExt.usageTips && apiWithExt.usageTips.length > 0 && (
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-semibold">Usage Tips</h2>
            <ul className="space-y-2">
              {apiWithExt.usageTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm">
                  <span className="mt-0.5 shrink-0 text-yellow-500">💡</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}

        {apiWithExt.sponsored && (
          <div className="mb-8 rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-4 text-center text-sm">
            <span className="inline-block rounded bg-yellow-500/20 px-2 py-0.5 text-xs font-semibold text-yellow-500">SPONSORED</span>
            <p className="mt-1 text-[var(--muted)]">This API listing is sponsored. Content is independently maintained.</p>
          </div>
        )}

        {apiWithExt.codeExamples && apiWithExt.codeExamples.length > 0 && (
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-semibold">Code Examples</h2>
            <div className="space-y-4">
              {apiWithExt.codeExamples.map((ex, i) => (
                <CodeBlock key={i} code={ex.code} language={ex.language} title={ex.title} />
              ))}
            </div>
          </div>
        )}

        <div className="mb-8">
          <h2 className="mb-2 text-sm font-semibold text-[var(--muted)]">Tags</h2>
          <div className="flex flex-wrap gap-1.5">
            {api.tags.map(t => (
              <span key={t} className="rounded-full bg-[var(--accent)]/10 px-2.5 py-0.5 text-xs text-[var(--accent)]">{t}</span>
            ))}
          </div>
        </div>

        <p className="text-xs text-[var(--muted)]">Last updated: {api.lastUpdated}</p>

        {/* Quick Compare Button */}
        <div className="mb-8 text-center">
          <a href={"/compare"}
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-5 py-2.5 text-sm transition-colors hover:border-[var(--accent)]">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Compare {api.name} with other APIs
          </a>
        </div>

        {/* Similar APIs */}
        {(() => {
          const similar = apis
            .filter(a => a.slug !== api.slug && a.tags.some(t => api.tags.includes(t)))
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 4);
          if (similar.length === 0) return null;
          return (
            <div className="mb-8">
              <h2 className="mb-3 text-lg font-semibold">Similar APIs</h2>
              <div className="grid gap-2 sm:grid-cols-2">
                {similar.map(s => (
                  <Link key={s.slug} href={"/api/" + s.slug}
                    className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 transition-colors hover:border-[var(--accent)]">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold">{s.name}</div>
                      <span className="text-xs text-[var(--muted)]">★{s.popularity}</span>
                    </div>
                    <div className="mt-1 line-clamp-1 text-xs text-[var(--muted)]">{s.description}</div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Feedback */}
        <div className="mb-8 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 text-center text-sm">
          <p className="text-[var(--muted)]">
            Something wrong or missing?{" "}
            <a href="https://github.com/wuhu95wuhu-design/toolkiti/issues/new" target="_blank" rel="noopener noreferrer"
              className="text-[var(--accent)] underline hover:opacity-80">
              Open an issue on GitHub →
            </a>
          </p>
        </div>

        {/* Pricing Comparison */}
        <PricingCompare slug={api.slug} category={api.category} />

        {api.referralUrl && (
          <div className="mt-8 rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 text-center">
            <h3 className="mb-2 text-lg font-semibold">Get Started with {api.name}</h3>
            <p className="mb-4 text-sm text-[var(--muted)]">Click below to visit the official website and start using this API.</p>
            <a href={api.referralUrl} target="_blank" rel="noopener noreferrer"
              className="inline-block rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
              Visit {api.name} →
            </a>
          </div>
        )}
        <Comments slug={api.slug} />
      </main>
    </>
  );
}



