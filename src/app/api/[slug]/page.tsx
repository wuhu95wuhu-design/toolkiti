import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import { apis, getApiBySlug } from "@/data/apis";

export async function generateStaticParams() {
  return apis.map(api => ({ slug: api.slug }));
}

export default async function ApiPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const api = getApiBySlug(slug);
  if (!api) notFound();

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
      <main className="mx-auto max-w-3xl px-4 py-8">
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
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Website</h3>
            <div className="text-sm"><a href={api.website} target="_blank" rel="noopener noreferrer">{api.website}</a></div>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Documentation</h3>
            <div className="text-sm"><a href={api.docsUrl} target="_blank" rel="noopener noreferrer">{api.docsUrl}</a></div>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Pricing</h3>
            <div className="text-sm">{api.pricing}</div>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Authentication</h3>
            <ul className="list-disc pl-4 text-sm">{api.auth.map(a => <li key={a}>{a}</li>)}</ul>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 sm:col-span-2">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Endpoints</h3>
            <div className="space-y-1">{api.endpoints.map(e => <div key={e} className="overflow-x-auto whitespace-nowrap rounded bg-[var(--bg)] px-2 py-1 font-mono text-xs">{e}</div>)}</div>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">SDKs</h3>
            <div className="flex flex-wrap gap-1.5">{api.sdks.map(s => <span key={s} className="rounded-full bg-[var(--border)] px-2.5 py-0.5 text-xs">{s}</span>)}</div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="mb-2 text-sm font-semibold text-[var(--muted)]">Tags</h3>
          <div className="flex flex-wrap gap-1.5">{api.tags.map(t => <span key={t} className="rounded-full bg-[var(--accent)]/10 px-2.5 py-0.5 text-xs text-[var(--accent)]">{t}</span>)}</div>
        </div>
        <p className="mt-8 text-xs text-[var(--muted)]">Last updated: {api.lastUpdated}</p>
            {/* Affiliate/Referral CTA */}
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
    </main>
    </>
  );
}
