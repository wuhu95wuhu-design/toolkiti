"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { apis } from "@/data/apis";
import type { ApiEntry } from "@/lib/types";
import { extendedData } from "@/data/extended";

function PopularityBadge({ score }: { score: number }) {
  if (score >= 90) return <span className="rounded bg-red-500/10 px-1.5 py-0.5 text-xs font-bold text-red-500">🔥 HOT</span>;
  if (score >= 75) return <span className="rounded bg-orange-500/10 px-1.5 py-0.5 text-xs font-medium text-orange-500">★ Popular</span>;
  if (score >= 60) return <span className="rounded bg-blue-500/10 px-1.5 py-0.5 text-xs text-blue-500">● Normal</span>;
  return null;
}

export default function SearchSection() {
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    apis.forEach(a => a.tags.forEach(t => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, []);

  const filtered = useMemo(() => {
    let results = [...apis];
    if (query.trim()) {
      const q = query.toLowerCase();
      results = results.filter(a =>
        a.name.toLowerCase().includes(q) ||
        a.nameCn.includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.descriptionCn.includes(q) ||
        a.tags.some(t => t.includes(q)) ||
        a.categoryCn.includes(q)
      );
    }
    if (selectedTags.length > 0) {
      results = results.filter(a => selectedTags.some(t => a.tags.includes(t)));
    }
    return results.sort((a, b) => b.popularity - a.popularity);
  }, [query, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search APIs by name, description, or tags..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 pl-10 text-sm text-[var(--fg)] placeholder-[var(--muted)] outline-none transition-colors focus:border-[var(--accent)]"
        />
        <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        {query && (
          <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-[var(--fg)]">
            ✕
          </button>
        )}
      </div>

      {/* Tag Filters */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {allTags.slice(0, 20).map(tag => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`rounded-full px-2.5 py-1 text-xs transition-colors ${
              selectedTags.includes(tag)
                ? "bg-[var(--accent)] text-white"
                : "bg-[var(--border)] text-[var(--muted)] hover:text-[var(--fg)]"
            }`}
          >
            {tag}
          </button>
        ))}
        {selectedTags.length > 0 && (
          <button onClick={() => setSelectedTags([])} className="rounded-full px-2.5 py-1 text-xs text-red-500 hover:bg-red-500/10">
            Clear filters
          </button>
        )}
      </div>

      {/* Results */}
      {query || selectedTags.length > 0 ? (
        <div>
          <p className="mb-3 text-xs text-[var(--muted)]">{filtered.length} result{filtered.length !== 1 ? "s" : ""}</p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(api => (
              <Link key={api.slug} href={`/api/${api.slug}`} className="block">
                <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-3 transition-colors hover:border-[var(--accent)]">
                  <div className="mb-1 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold">{api.name}</h3>
                      <PopularityBadge score={api.popularity} />
                    </div>
                  </div>
                  <p className="mb-1.5 text-xs text-[var(--muted)] line-clamp-1">{api.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {api.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="rounded-full bg-[var(--border)] px-1.5 py-0.5 text-[10px] text-[var(--muted)]">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

