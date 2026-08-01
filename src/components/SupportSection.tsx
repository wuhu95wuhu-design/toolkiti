export default function SupportSection() {
  return (
    <section className="mt-16 border-t border-[var(--border)] pt-8">
      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-8 text-center">
        <h2 className="mb-2 text-xl font-bold">Help ToolKiti Grow</h2>
        <p className="mx-auto mb-6 max-w-lg text-sm text-[var(--muted)]">
          ToolKiti is free and open-source, supported by the developer community. Every coffee helps us add more APIs and keep the lights on.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="https://buymeacoffee.com/toolkiti" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#FFDD00] px-5 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90">
            ☕ Buy us a coffee
          </a>
          <a href="/sponsor" 
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
            🚀 Sponsor an API
          </a>
          <a href="https://github.com/wuhu95wuhu-design/toolkiti" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-5 py-2.5 text-sm font-semibold transition-colors hover:border-[var(--accent)]">
            ⭐ Star on GitHub
          </a>
        </div>
        <p className="mt-4 text-[10px] text-[var(--muted)]">
          Some links are affiliate links. We may earn a commission at no extra cost to you.
        </p>
      </div>
    </section>
  );
}