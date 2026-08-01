import Link from "next/link";
import { ApiEntry } from "@/lib/types";

interface TopPicksProps {
  apis: ApiEntry[];
}

export default function TopPicks({ apis }: TopPicksProps) {
  // Get sponsored APIs first, then top popularity
  const sponsored = apis.filter(a => a.sponsored);
  const top = [...apis].sort((a, b) => b.popularity - a.popularity).slice(0, 6);
  const picks = [...new Set([...sponsored, ...top])].slice(0, 6);

  return (
    <section className="mb-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Top Picks</h2>
        <Link href="/sponsor" className="text-[10px] text-[var(--accent)] hover:underline">Promote yours →</Link>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {picks.map(api => (
          <div key={api.slug} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 hover:border-[var(--accent)]/50 transition-colors">
            <div className="mb-2 flex items-center justify-between">
              <Link href={`/api/${api.slug}`} className="font-semibold text-sm hover:text-[var(--accent)]">{api.name}</Link>
              {api.sponsored && <span className="rounded bg-[var(--accent)]/10 px-1.5 py-0.5 text-[10px] font-medium text-[var(--accent)]">Ad</span>}
            </div>
            <p className="mb-3 text-xs text-[var(--muted)] line-clamp-2">{api.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-[var(--muted)]">{api.pricing}</span>
              <a href={api.referralUrl || api.website} target="_blank" rel="noopener noreferrer"
                className="rounded bg-[var(--accent)] px-3 py-1 text-[11px] font-semibold text-white transition-opacity hover:opacity-90">
                Get Started
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}