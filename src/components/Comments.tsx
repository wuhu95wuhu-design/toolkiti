"use client";

import { useEffect, useRef } from "react";

export default function Comments({ slug }: { slug: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    // Giscus needs GitHub Discussions enabled on the repo
    // Repo: wuhu95wuhu-design/toolkiti
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "wuhu95wuhu-design/toolkiti");
    script.setAttribute("data-repo-id", ""); // Need to fill after enabling Discussions
    script.setAttribute("data-category", "Announcements");
    script.setAttribute("data-category-id", "");
    script.setAttribute("data-mapping", "specific");
    script.setAttribute("data-term", slug);
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "dark");
    script.setAttribute("data-lang", "en");
    script.crossOrigin = "anonymous";
    script.async = true;

    if (ref.current) {
      ref.current.appendChild(script);
    }
  }, []);

  return (
    <div className="mb-8">
      <h2 className="mb-3 text-lg font-semibold">Discussion</h2>
      <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 text-center text-sm text-[var(--muted)]">
        <p>Comments powered by Giscus.</p>
        <p className="mt-1 text-xs">Requires GitHub Discussions to be enabled on the repository.</p>
      </div>
      <div ref={ref} />
    </div>
  );
}
