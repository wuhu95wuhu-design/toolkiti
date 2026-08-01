import Link from "next/link";
import { ApiEntry } from "@/lib/types";

function PopularityBadge({ score }: { score: number }) {
  if (score >= 90) return <span className="rounded bg-red-500/10 px-1.5 py-0.5 text-xs font-bold text-red-500">HOT</span>;
  if (score >= 75) return <span className="rounded bg-orange-500/10 px-1.5 py-0.5 text-xs font-medium text-orange-500">Popular</span>;
  if (score >= 60) return <span className="rounded bg-blue-500/10 px-1.5 py-0.5 text-xs text-blue-500">Active</span>;
  return null;
}

const statusColors: Record<string, string> = {
  online: "bg-green-600",
  beta: "bg-yellow-600",
  deprecated: "bg-red-600",
};

export default function ApiCard({ api }: { api: ApiEntry }) {
  const refUrl = api.referralUrl || api.website;
  
  return (
    <div className="group rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 transition-all hover:border-[var(--accent)] hover:shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href={`/api/${api.slug}`} className="font-semibold hover:text-[var(--accent)]">{api.name}</Link>
          <PopularityBadge score={api.popularity} />
        </div>
        <span className={`h-2 w-2 rounded-full ${statusColors[api.status]}`} title={api.status} />
      </div>
      <Link href={`/api/${api.slug}`} className="block">
        <p className="mb-2 text-sm text-[var(--muted)] line-clamp-2">{api.description}</p>
      </Link>
      <div className="mb-3 flex flex-wrap gap-1.5">
        {api.tags.slice(0, 4).map(tag => (
          <span key={tag} className="rounded-full bg-[var(--bg)] px-2 py-0.5 text-[10px] text-[var(--muted)]">{tag}</span>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-[var(--border)] pt-2">
        <span className="text-[10px] text-[var(--muted)]">{api.pricing}</span>
        {refUrl && (
          <a href={refUrl} target="_blank" rel="noopener noreferrer" 
            className="rounded bg-[var(--accent)]/10 px-2.5 py-1 text-[11px] font-medium text-[var(--accent)] opacity-0 transition-opacity group-hover:opacity-100 hover:bg-[var(--accent)]/20">
            Try it
          </a>
        )}
      </div>
    </div>
  );
}