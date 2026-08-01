"use client";
import { useEffect, useState } from "react";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const handler = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        setShow(true);
      }
    };
    document.addEventListener("mouseleave", handler);
    return () => document.removeEventListener("mouseleave", handler);
  }, [dismissed]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShow(false)}>
      <div className="mx-4 w-full max-w-md rounded-xl border border-[var(--border)] bg-[var(--card)] p-8 text-center shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="mb-4 text-4xl">🚀</div>
        <h3 className="mb-2 text-xl font-bold">Get Weekly API Insights</h3>
        <p className="mb-6 text-sm text-[var(--muted)]">
          Join 500+ developers who get our curated API picks, pricing alerts, and industry trends every week.
        </p>
        <form className="flex gap-2" action="https://toolkiti.us22.list-manage.com/subscribe/post" method="POST" target="_blank" onSubmit={() => { setShow(false); setDismissed(true); }}>
          <input type="email" name="EMAIL" placeholder="your@email.com" required
            className="flex-1 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-sm outline-none focus:border-[var(--accent)]" />
          <button type="submit" className="rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
            Subscribe
          </button>
        </form>
        <button onClick={() => { setShow(false); setDismissed(true); }} className="mt-3 text-xs text-[var(--muted)] hover:underline">
          No thanks, I do not like free API insights
        </button>
      </div>
    </div>
  );
}