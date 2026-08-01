import Link from "next/link";

export default function PremiumDataTeaser() {
  return (
    <section className="mb-10 rounded-xl border border-[var(--border)] bg-gradient-to-br from-[var(--card)] to-[var(--bg)] p-6">
      <h2 className="mb-2 text-lg font-semibold">Premium Data API</h2>
      <p className="mb-4 text-sm text-[var(--muted)]">
        Get real-time API pricing changes, latency monitoring, and status alerts via a dedicated data feed. Built for AI agents that need live intelligence.
      </p>
      <div className="grid gap-3 sm:grid-cols-3 mb-4">
        <div className="rounded-lg bg-[var(--bg)] p-3 text-center">
          <div className="text-sm font-semibold">Real-time Pricing</div>
          <div className="text-xs text-[var(--muted)]">Price change alerts across 100+ APIs</div>
        </div>
        <div className="rounded-lg bg-[var(--bg)] p-3 text-center">
          <div className="text-sm font-semibold">Status Monitoring</div>
          <div className="text-xs text-[var(--muted)]">Uptime & incident tracking</div>
        </div>
        <div className="rounded-lg bg-[var(--bg)] p-3 text-center">
          <div className="text-sm font-semibold">Bulk Export</div>
          <div className="text-xs text-[var(--muted)]">CSV/JSON/Parquet daily dumps</div>
        </div>
      </div>
      <div className="text-center">
        <a href="mailto:wuhu95wuhu@gmail.com?subject=Premium Data API" className="inline-block rounded-lg border border-[var(--accent)] px-5 py-2 text-sm font-semibold text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-white">
          Request Early Access
        </a>
      </div>
    </section>
  );
}