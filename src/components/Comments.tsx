"use client";

import { useState, useEffect } from "react";

export default function Comments({ slug }: { slug: string }) {
  const [totalComments, setTotalComments] = useState(0);

  useEffect(() => {
    // 用 GitHub Discussions API 获取讨论数量
    fetch("https://api.github.com/search/issues?q=repo:wuhu95wuhu-design/toolkiti+type:discussions+" + slug)
      .then(r => r.json())
      .then(d => { if (d.total_count) setTotalComments(d.total_count); })
      .catch(() => {});
  }, [slug]);

  const title = slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  return (
    <div className="mb-8">
      <h2 className="mb-3 text-lg font-semibold">Discussion</h2>
      <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 text-center">
        <p className="mb-3 text-sm text-[var(--muted)]">
          {totalComments > 0 ? `${totalComments} comment${totalComments > 1 ? "s" : ""}` : "Join the discussion"}
        </p>
        <a
          href={`https://github.com/wuhu95wuhu-design/toolkiti/discussions/new?category=general&title=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Start a discussion on GitHub →
        </a>
        <p className="mt-3 text-xs text-[var(--muted)]">
          Comments powered by GitHub Discussions. No login required to read.
        </p>
      </div>
    </div>
  );
}