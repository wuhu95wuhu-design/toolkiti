import Link from "next/link";

export default function SponsoredApiOfWeek() {
  return (
    <section className="mb-8 rounded-xl border-2 border-[var(--accent)] bg-[var(--card)] p-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-[var(--accent)] px-2 py-0.5 text-[10px] font-bold text-white">SPONSORED</span>
          <h2 className="text-lg font-semibold">API of the Week</h2>
        </div>
        <Link href="/sponsor" className="text-[11px] text-[var(--accent)] hover:underline">Get featured →</Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg bg-[var(--bg)] p-4 text-center">
          <div className="mb-2 text-3xl font-bold text-[var(--accent)]">#1</div>
          <p className="text-sm font-semibold">Featured Placement</p>
          <p className="text-xs text-[var(--muted)]">Top of homepage + category pages</p>
        </div>
        <div className="rounded-lg bg-[var(--bg)] p-4 text-center">
          <div className="mb-2 text-3xl font-bold text-[var(--accent)]">5K+</div>
          <p className="text-sm font-semibold">Monthly Impressions</p>
          <p className="text-xs text-[var(--muted)]">AI agents + developers</p>
        </div>
        <div className="rounded-lg bg-[var(--bg)] p-4 text-center">
          <div className="mb-2 text-3xl font-bold text-[var(--accent)]">$149</div>
          <p className="text-sm font-semibold">Starting at</p>
          <p className="text-xs text-[var(--muted)]">30-day money-back</p>
        </div>
      </div>
      <div className="mt-4 text-center">
        <a href="mailto:wuhu95wuhu@gmail.com?subject=API of the Week - ToolKiti" className="inline-block rounded-lg bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
          Book Your Spot
        </a>
      </div>
    </section>
  );
}