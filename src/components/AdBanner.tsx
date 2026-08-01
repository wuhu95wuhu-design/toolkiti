export default function AdBanner() {
  return (
    <div className="mb-8 overflow-hidden rounded-lg border border-dashed border-[var(--border)] bg-[var(--card)] p-4">
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-wider text-[var(--muted)]">Sponsored</span>
        <a href="/sponsor" className="text-[10px] text-[var(--accent)] hover:underline">Advertise here →</a>
      </div>
      <div className="mt-3 flex items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-[var(--bg)] text-2xl">
          🚀
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold">Promote your API on ToolKiti</p>
          <p className="text-xs text-[var(--muted)]">Reach 5,000+ AI agents and developers monthly. Featured listings, banners, and sponsored content available.</p>
        </div>
        <a href="/sponsor" className="shrink-0 rounded-md bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90">
          Get Started
        </a>
      </div>
    </div>
  );
}