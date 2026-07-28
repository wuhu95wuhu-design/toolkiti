export default function SupportSection() {
  return (
    <section className="mt-16 border-t border-[var(--border)] pt-8 text-center">
      <h2 className="mb-2 text-lg font-semibold">Support ToolKiti</h2>
      <p className="mx-auto mb-4 max-w-lg text-sm text-[var(--muted)]">
        ToolKiti is a free, open resource for the AI community. If you find it useful, 
        consider supporting its growth.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="https://buymeacoffee.com/toolkiti" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[#FFDD00] px-5 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90">
          ☕ Buy me a coffee
        </a>
        <a href="/sponsor" 
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-5 py-2.5 text-sm font-semibold transition-colors hover:border-[var(--accent)]">
          ★ Sponsor an API
        </a>
      </div>
      <p className="mt-3 text-xs text-[var(--muted)]">
        Some links on this site are affiliate links. We may earn a commission at no extra cost to you.
      </p>
    </section>
  );
}