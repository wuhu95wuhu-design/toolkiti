import Link from "next/link";
import { ApiEntry } from "@/lib/types";

const statusColors: Record<string, string> = {
  online: "bg-green-600",
  beta: "bg-yellow-600",
  deprecated: "bg-red-600",
};

export default function ApiCard({ api }: { api: ApiEntry }) {
  return (
    <Link href={`/api/${api.slug}`} className="block">
      <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 transition-colors hover:border-[var(--accent)]">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-semibold">{api.name}</h3>
          <span className={`h-2 w-2 rounded-full ${statusColors[api.status]}`} title={api.status} />
        </div>
        <p className="mb-2 text-sm text-[var(--muted)] line-clamp-2">{api.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {api.tags.slice(0, 4).map(tag => (
            <span key={tag} className="rounded-full bg-[var(--border)] px-2 py-0.5 text-xs text-[var(--muted)]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
