"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import { apis } from "@/data/apis";
import { extendedData } from "@/data/extended";

const compareFields = [
  { key: "pricing", label: "Pricing" },
  { key: "rateLimit", label: "Rate Limit" },
  { key: "latency", label: "Latency" },
  { key: "maxTokens", label: "Max Context" },
  { key: "popularity", label: "Popularity" },
  { key: "auth", label: "Auth" },
  { key: "sdks", label: "SDKs" },
];


import type { Metadata } from "next";
export const metadata: Metadata = { title: "Compare AI APIs Side-by-Side: Pricing, Speed & Features (2026) | ToolKiti", description: "Compare up to 4 AI APIs side by side. Pricing, rate limits, latency, context windows, features & SDKs. GPT-4o vs Claude vs Gemini & more." };export default function ComparePage() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleApi = (slug: string) => {
    setSelected(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug].slice(0, 4)
    );
  };

  const selectedApis = useMemo(() => {
    return selected.map(slug => {
      const api = apis.find(a => a.slug === slug)!;
      const ext = extendedData[slug] || {};
      return { ...api, ...ext };
    });
  }, [selected]);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="mb-2 text-2xl font-bold">Compare APIs</h1>
        <p className="mb-6 text-sm text-[var(--muted)]">
          Select up to 4 APIs to compare their pricing, performance, and features side by side.
        </p>

        {/* Selection */}
        <div className="mb-8 flex flex-wrap gap-2">
          {[...apis].sort((a, b) => b.popularity - a.popularity).map(api => (
            <button
              key={api.slug}
              onClick={() => toggleApi(api.slug)}
              disabled={!selected.includes(api.slug) && selected.length >= 4}
              className={`rounded-full px-3 py-1.5 text-xs transition-colors ${
                selected.includes(api.slug)
                  ? "bg-[var(--accent)] text-white"
                  : "bg-[var(--card)] border border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] disabled:opacity-30"
              }`}
            >
              {api.name}
            </button>
          ))}
        </div>

        {/* Comparison Table */}
        {selectedApis.length > 0 && (
          <div className="overflow-x-auto rounded-lg border border-[var(--border)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--card)]">
                  <th className="sticky left-0 bg-[var(--card)] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Field</th>
                  {selectedApis.map(api => (
                    <th key={api.slug} className="px-4 py-3 text-left text-xs font-semibold">
                      <Link href={`/api/${api.slug}`} className="hover:text-[var(--accent)]">{api.name}</Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareFields.map(field => (
                  <tr key={field.key} className="border-b border-[var(--border)] last:border-0">
                    <td className="sticky left-0 bg-[var(--bg)] px-4 py-3 text-xs font-medium text-[var(--muted)]">{field.label}</td>
                    {selectedApis.map(api => {
                      let value = (api as any)[field.key];
                      if (Array.isArray(value)) value = value.join(", ");
                      if (field.key === "popularity") value = value + "/100";
                      return (
                        <td key={api.slug} className="px-4 py-3 text-xs">{value || "—"}</td>
                      );
                    })}
                  </tr>
                ))}
                {/* Features row */}
                <tr className="border-b border-[var(--border)] last:border-0">
                  <td className="sticky left-0 bg-[var(--bg)] px-4 py-3 text-xs font-medium text-[var(--muted)]">Features</td>
                  {selectedApis.map(api => (
                    <td key={api.slug} className="px-4 py-3">
                      <ul className="list-disc pl-4 text-xs space-y-1">
                        {(api.features || []).slice(0, 4).map((f: string, i: number) => (
                          <li key={i} className="text-[var(--muted)]">{f}</li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                {/* Tags row */}
                <tr>
                  <td className="sticky left-0 bg-[var(--bg)] px-4 py-3 text-xs font-medium text-[var(--muted)]">Tags</td>
                  {selectedApis.map(api => (
                    <td key={api.slug} className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {api.tags.slice(0, 5).map(t => (
                          <span key={t} className="rounded-full bg-[var(--border)] px-1.5 py-0.5 text-[10px] text-[var(--muted)]">{t}</span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {selected.length === 0 && (
          <div className="rounded-lg border border-dashed border-[var(--border)] p-12 text-center">
            <p className="text-sm text-[var(--muted)]">Select APIs above to start comparing</p>
          </div>
        )}
      </main>
    </>
  );
}

