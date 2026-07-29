import Link from "next/link";
import Header from "@/components/Header";

export default function SponsorPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-6 text-2xl font-bold">Sponsor an API on ToolKiti</h1>
        
        <div className="mb-8 space-y-4 text-sm leading-relaxed text-[var(--muted)]">
          <p>
            ToolKiti is visited by AI agents and developers looking for the best APIs and tools. 
            Your listing here reaches a targeted technical audience.
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
            <h2 className="mb-2 font-semibold">Featured Listing</h2>
            <p className="mb-3 text-sm text-[var(--muted)]">Get your API featured at the top of your category with a sponsored badge.</p>
            <p className="text-sm font-medium">Contact: wuhu95wuhu@gmail.com</p>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
            <h2 className="mb-2 font-semibold">Banner Sponsorship</h2>
            <p className="mb-3 text-sm text-[var(--muted)]">Your banner ad on the homepage, seen by every AI agent and developer visit.</p>
            <p className="text-sm font-medium">Contact: wuhu95wuhu@gmail.com</p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="text-sm text-[var(--accent)] underline hover:opacity-80">
            ← Back to ToolKiti
          </Link>
        </div>
      </main>
    </>
  );
}