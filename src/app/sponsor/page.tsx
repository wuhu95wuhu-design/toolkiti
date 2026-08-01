import Link from "next/link";
import Header from "@/components/Header";

export default function SponsorPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-2 text-2xl font-bold">Sponsor ToolKiti</h1>
        <p className="mb-2 text-[var(--muted)]">Put your API in front of AI agents and developers.</p>
        
        {/* Stats */}
        <div className="mb-10 mt-6 grid grid-cols-3 gap-3">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 text-center">
            <div className="text-2xl font-bold text-[var(--accent)]">5K+</div>
            <div className="text-xs text-[var(--muted)]">Monthly API Queries</div>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 text-center">
            <div className="text-2xl font-bold text-[var(--accent)]">51+</div>
            <div className="text-xs text-[var(--muted)]">APIs Listed</div>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 text-center">
            <div className="text-2xl font-bold text-[var(--accent)]">AI</div>
            <div className="text-xs text-[var(--muted)]">Agent-Optimized</div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <h2 className="mb-4 text-lg font-semibold">Sponsorship Tiers</h2>
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {/* Starter */}
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
            <h3 className="font-semibold">Starter</h3>
            <div className="mt-2 mb-4">
              <span className="text-2xl font-bold">$49</span>
              <span className="text-sm text-[var(--muted)]">/month</span>
            </div>
            <ul className="mb-6 space-y-2 text-sm text-[var(--muted)]">
              <li>✓ Featured badge on API page</li>
              <li>✓ Priority category listing</li>
              <li>✓ Monthly analytics report</li>
              <li>✓ 1 API listing</li>
            </ul>
            <a href="mailto:wuhu95wuhu@gmail.com?subject=ToolKiti Starter Sponsorship"
              className="block rounded-md border border-[var(--accent)] px-4 py-2 text-center text-sm font-semibold text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-white">
              Get Started
            </a>
          </div>
          {/* Growth - Highlighted */}
          <div className="rounded-lg border-2 border-[var(--accent)] bg-[var(--card)] p-5 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--accent)] px-3 py-0.5 text-[10px] font-semibold text-white">POPULAR</div>
            <h3 className="font-semibold">Growth</h3>
            <div className="mt-2 mb-4">
              <span className="text-2xl font-bold">$149</span>
              <span className="text-sm text-[var(--muted)]">/month</span>
            </div>
            <ul className="mb-6 space-y-2 text-sm text-[var(--muted)]">
              <li>✓ Everything in Starter</li>
              <li>✓ Homepage banner placement</li>
              <li>✓ Sponsored blog post (1x/mo)</li>
              <li>✓ 5 API listings</li>
              <li>✓ Advanced analytics</li>
              <li>✓ Priority support</li>
            </ul>
            <a href="mailto:wuhu95wuhu@gmail.com?subject=ToolKiti Growth Sponsorship"
              className="block rounded-md bg-[var(--accent)] px-4 py-2 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90">
              Start Free Trial
            </a>
          </div>
          {/* Enterprise */}
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
            <h3 className="font-semibold">Enterprise</h3>
            <div className="mt-2 mb-4">
              <span className="text-2xl font-bold">$499</span>
              <span className="text-sm text-[var(--muted)]">/month</span>
            </div>
            <ul className="mb-6 space-y-2 text-sm text-[var(--muted)]">
              <li>✓ Everything in Growth</li>
              <li>✓ Unlimited API listings</li>
              <li>✓ Dedicated page design</li>
              <li>✓ Co-branded content</li>
              <li>✓ API performance monitoring</li>
              <li>✓ Dedicated account manager</li>
            </ul>
            <a href="mailto:wuhu95wuhu@gmail.com?subject=ToolKiti Enterprise Sponsorship"
              className="block rounded-md border border-[var(--accent)] px-4 py-2 text-center text-sm font-semibold text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-white">
              Contact Sales
            </a>
          </div>
        </div>

        {/* Affiliate Program */}
        <div className="mb-8 rounded-lg border border-[var(--border)] bg-[var(--card)] p-6">
          <h2 className="mb-2 font-semibold">Affiliate Program</h2>
          <p className="mb-4 text-sm text-[var(--muted)]">
            Have an API with a referral program? Get listed with your affiliate link. 
            We drive qualified developer traffic to your signup page. Only pay for conversions.
          </p>
          <a href="mailto:wuhu95wuhu@gmail.com?subject=ToolKiti Affiliate Program"
            className="inline-block rounded-md border border-[var(--border)] px-4 py-2 text-sm font-semibold transition-colors hover:border-[var(--accent)]">
            Join Affiliate Program →
          </a>
        </div>

        <div className="text-center">
          <Link href="/" className="text-sm text-[var(--accent)] underline hover:opacity-80">← Back to ToolKiti</Link>
        </div>
      </main>
    </>
  );
}