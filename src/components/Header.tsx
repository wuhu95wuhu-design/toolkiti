import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-[var(--border)] px-4 py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight">
          ToolKiti
        </Link>
        <nav className="flex items-center gap-4 text-sm text-[var(--muted)]">
          <Link href="/">Home</Link>
          <span className="text-[var(--border)]">/</span>
          <a href="/api">API</a>
        </nav>
      </div>
    </header>
  );
}
