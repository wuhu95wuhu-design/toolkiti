"use client";

import { apis } from "@/data/apis";
import Link from "next/link";

export default function PricingCompare({ slug, category }: { slug: string; category: string }) {
  const similar = apis
    .filter(a => a.slug !== slug && a.category === category)
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 4);

  if (similar.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="mb-3 text-lg font-semibold">Pricing Comparison</h2>
      <div className="overflow-x-auto rounded-lg border border-[var(--border)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--card)]">
              <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">API</th>
              <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Pricing</th>
              <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Auth</th>
              <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Popularity</th>
            </tr>
          </thead>
          <tbody>
            {similar.map(a => (
              <tr key={a.slug} className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--card)]/50">
                <td className="px-4 py-2.5">
                  <Link href={"/api/" + a.slug} className="font-medium hover:text-[var(--accent)]">{a.name}</Link>
                </td>
                <td className="px-4 py-2.5 text-xs text-[var(--muted)]">{a.pricing}</td>
                <td className="px-4 py-2.5 text-xs text-[var(--muted)]">{a.auth[0]}</td>
                <td className="px-4 py-2.5 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-16 rounded-full bg-[var(--border)]">
                      <div className="h-1.5 rounded-full bg-[var(--accent)]" style={{ width: a.popularity + "%" }} />
                    </div>
                    <span>{a.popularity}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
