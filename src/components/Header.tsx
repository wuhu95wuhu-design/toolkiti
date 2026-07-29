import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="border-b border-[var(--border)] px-4 py-3">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo size={28} />
          <span className="text-lg font-bold tracking-tight">ToolKiti</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm text-[var(--muted)]">
          <Link href="/" className="transition-colors hover:text-[var(--fg)]">Home</Link>
          <Link href="/compare" className="transition-colors hover:text-[var(--fg)]">Compare</Link>
          <a href="/api/data" target="_blank" className="transition-colors hover:text-[var(--fg)]">API</a>
          <Link href="/sponsor" className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-xs transition-colors hover:border-[var(--accent)] hover:text-[var(--fg)]">Sponsor</Link>
        </nav>
      </div>
    </header>
  );
}

