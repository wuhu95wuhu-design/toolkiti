"use client";

import { useEffect, useRef } from "react";

export default function Comments({ slug }: { slug: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "wuhu95wuhu-design/toolkiti");
    script.setAttribute("data-repo-id", "R_kgDOTlHaew");
    script.setAttribute("data-category", "Announcements");
    script.setAttribute("data-mapping", "specific");
    script.setAttribute("data-term", slug);
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
  }, [slug]);

  return (
    <div className="mb-8">
      <h2 className="mb-3 text-lg font-semibold">Discussion</h2>
      <div ref={ref} className="min-h-[200px]" />
    </div>
  );
}
