"use client";

import { useState, useEffect } from "react";

export default function ThumbsUp({ slug }: { slug: string }) {
  const [vote, setVote] = useState<"up" | "down" | null>(null);
  const [counts, setCounts] = useState({ up: 0, down: 0 });

  useEffect(() => {
    const key = "tk_vote_" + slug;
    const saved = localStorage.getItem(key);
    if (saved === "up" || saved === "down") setVote(saved);
    
    const stored = localStorage.getItem("tk_counts_" + slug);
    if (stored) {
      try { setCounts(JSON.parse(stored)); } catch {}
    }
  }, [slug]);

  const handleVote = (v: "up" | "down") => {
    const key = "tk_vote_" + slug;
    if (vote === v) {
      localStorage.removeItem(key);
      setVote(null);
    } else {
      localStorage.setItem(key, v);
      setVote(v);
      const newCounts = { ...counts, [v]: counts[v] + (vote ? 0 : 1) };
      if (vote && vote !== v) {
        newCounts[vote] = Math.max(0, newCounts[vote] - 1);
      }
      localStorage.setItem("tk_counts_" + slug, JSON.stringify(newCounts));
      setCounts(newCounts);
    }
  };

  return (
    <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
      <span className="text-xs">Was this helpful?</span>
      <button
        onClick={() => handleVote("up")}
        className={"flex items-center gap-1 rounded px-2 py-1 transition-colors " + (vote === "up" ? "bg-green-500/20 text-green-500" : "hover:bg-[var(--border)]")}
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/></svg>
        {counts.up || ""}
      </button>
      <button
        onClick={() => handleVote("down")}
        className={"flex items-center gap-1 rounded px-2 py-1 transition-colors " + (vote === "down" ? "bg-red-500/20 text-red-500" : "hover:bg-[var(--border)]")}
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a.5.5 0 01.484.06L17 7m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/></svg>
        {counts.down || ""}
      </button>
    </div>
  );
}
