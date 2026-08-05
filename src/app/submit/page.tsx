import Link from "next/link";
import Header from "@/components/Header";

import type { Metadata } from "next";
export const metadata: Metadata = { title: "Submit Your API to ToolKiti — Free Listing for AI Tools (2026)", description: "Submit your API or developer tool to ToolKiti's AI API directory. Free basic listings available. Reach developers searching for APIs." };
export default function SubmitPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="mb-2 text-2xl font-bold">Submit an API</h1>
        <p className="mb-8 text-[var(--muted)]">Add your API or tool to ToolKiti. Free for basic listings.</p>

        <div className="mb-8 rounded-lg border border-[var(--border)] bg-[var(--card)] p-6">
          <h2 className="mb-4 font-semibold">Quick Submit via GitHub</h2>
          <p className="mb-4 text-sm text-[var(--muted)]">
            The fastest way: open a GitHub issue with your API details. We review and publish within 24 hours.
          </p>
          <a href="https://github.com/wuhu95wuhu-design/toolkiti/issues/new?labels=api-submission&template=api_submit.md&title=Submit: "
            target="_blank" rel="noopener noreferrer"
            className="inline-block rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
            Submit via GitHub →
          </a>
        </div>

        <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6">
          <h2 className="mb-4 font-semibold">Submission Guidelines</h2>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            <li>• Must be a publicly available API or developer tool</li>
            <li>• Include documentation URL and authentication method</li>
            <li>• Pricing information helps developers make decisions</li>
            <li>• Code examples (curl preferred) get faster approval</li>
            <li>• Self-submissions welcome — we are vendor-neutral</li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-[var(--accent)] underline hover:opacity-80">← Back to ToolKiti</Link>
        </div>
      </main>
    </>
  );
}