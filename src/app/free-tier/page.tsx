import Link from "next/link";
import Header from "@/components/Header";

import type { Metadata } from "next";
export const metadata: Metadata = { title: "20 Free AI APIs in 2026 (No Credit Card) — LLM, Image, Search & More | ToolKiti", description: "20 AI APIs with free tiers in 2026. No credit card required. Includes Gemini, DeepSeek, Groq, Tavily, Supabase & more. Start building AI apps for zero dollars today." };
export default function FreeTierPage() {
  return (<>
    <Header />
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-2 text-2xl font-bold">Top 20 Free AI APIs in 2026 (No Credit Card Required)</h1>
      <p className="mb-8 text-[var(--muted)]">Build production AI apps with zero upfront cost. Updated July 2026.</p>
      
      <div className="space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="mb-3 text-lg font-semibold">LLM & Chat</h2>
          <div className="space-y-4">
            {[{ name: "Google Gemini", slug: "google-gemini", tier: "1M tokens/day free", note: "Gemini 2.0 Flash: 1M context, multimodal, function calling" },
              { name: "DeepSeek", slug: "deepseek", tier: "Free credits for new users", note: "DeepSeek-V3: 128K context, top-tier reasoning at fraction of cost" },
              { name: "Groq", slug: "groq", tier: "Free tier available", note: "Llama 3.1 70B at 250 tok/s. Fastest inference" },
              { name: "Cerebras", slug: "cerebras", tier: "1M tokens/day free", note: "Llama 3.1 405B at 969 tok/s. OpenAI-compatible" },
            ].map(api => (
              <div key={api.slug} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
                <div className="flex items-center justify-between mb-1">
                  <Link href={`/api/${api.slug}`} className="font-semibold hover:text-[var(--accent)]">{api.name}</Link>
                  <span className="rounded bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-600">{api.tier}</span>
                </div>
                <p className="text-[var(--muted)]">{api.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold">Image & Video</h2>
          <div className="space-y-4">
            {[{ name: "Replicate", slug: "replicate", tier: "Free trial credits", note: "1000s of models. SDXL, Flux, CogVideoX" },
              { name: "Stability AI", slug: "stability", tier: "Free tier (25 credits)", note: "Stable Diffusion 3, image-to-image, upscaling" },
              { name: "Remove.bg", slug: "remove-bg", tier: "50 free/month", note: "AI background removal. Process millions at scale" },
            ].map(api => (
              <div key={api.slug} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
                <div className="flex items-center justify-between mb-1">
                  <Link href={`/api/${api.slug}`} className="font-semibold hover:text-[var(--accent)]">{api.name}</Link>
                  <span className="rounded bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-600">{api.tier}</span>
                </div>
                <p className="text-[var(--muted)]">{api.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold">Search & Data</h2>
          <div className="space-y-4">
            {[{ name: "Tavily", slug: "tavily", tier: "1000 req/month free", note: "AI-optimized search. Structured results with citations" },
              { name: "Exa", slug: "exa", tier: "Free tier available", note: "Semantic search. Content-based, not keyword matching" },
              { name: "Jina AI", slug: "jina", tier: "Free tier available", note: "Reader API turns URLs into LLM-ready markdown. Embeddings + reranking" },
              { name: "Firecrawl", slug: "firecrawl", tier: "Free tier available", note: "Turn websites into LLM-ready markdown at scale" },
            ].map(api => (
              <div key={api.slug} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
                <div className="flex items-center justify-between mb-1">
                  <Link href={`/api/${api.slug}`} className="font-semibold hover:text-[var(--accent)]">{api.name}</Link>
                  <span className="rounded bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-600">{api.tier}</span>
                </div>
                <p className="text-[var(--muted)]">{api.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold">Infrastructure & DevTools</h2>
          <div className="space-y-4">
            {[{ name: "Supabase", slug: "supabase", tier: "Free tier + $25/mo pro", note: "Postgres, auth, realtime, storage. Firebase alternative" },
              { name: "Vercel", slug: "vercel", tier: "Free tier (Hobby)", note: "Deploy frontend apps instantly. Serverless functions included" },
              { name: "Upstash", slug: "upstash", tier: "Free tier available", note: "Serverless Redis and Kafka. Per-request pricing" },
              { name: "Neon", slug: "neon", tier: "Free tier available", note: "Serverless Postgres with database branching" },
              { name: "Sentry", slug: "sentry", tier: "Free tier available", note: "Error tracking, performance monitoring, session replay" },
              { name: "PostHog", slug: "posthog", tier: "Free tier + usage-based", note: "Product analytics, feature flags, A/B testing" },
              { name: "Clerk", slug: "clerk", tier: "Free (10K MAU)", note: "Complete auth & user management. Drop-in React components" },
              { name: "Resend", slug: "resend", tier: "100 emails/day free", note: "Modern email API with React components" },
              { name: "n8n", slug: "n8n", tier: "Free (self-hosted)", note: "Open-source workflow automation. 400+ integrations" },
            ].map(api => (
              <div key={api.slug} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
                <div className="flex items-center justify-between mb-1">
                  <Link href={`/api/${api.slug}`} className="font-semibold hover:text-[var(--accent)]">{api.name}</Link>
                  <span className="rounded bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-600">{api.tier}</span>
                </div>
                <p className="text-[var(--muted)]">{api.note}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="text-sm text-[var(--accent)] underline hover:opacity-80">← Back to ToolKiti</Link>
      </div>
    </main>
  </>);
}