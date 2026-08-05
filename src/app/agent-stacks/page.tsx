import Link from "next/link";
import Header from "@/components/Header";

const stacks = [
  { name: "Coding Agent", desc: "Build an AI coding assistant that can read, write, and debug code.", components: [
    { role: "LLM", picks: ["Anthropic Claude 3.5 Sonnet — best coding model", "GPT-4o — strong reasoning"], cost: "$3-5/1M tokens" },
    { role: "Search", picks: ["Tavily — AI-optimized search", "Exa — semantic code search"], cost: "Free tier" },
    { role: "Browser", picks: ["Browserbase — headless stealth browser", "Playwright MCP — local automation"], cost: "Free-$49/mo" },
    { role: "Memory", picks: ["Mem0 — AI-native memory layer", "Upstash Redis — serverless KV"], cost: "Free tier" },
    { role: "Deploy", picks: ["Vercel — instant Next.js deploys", "Railway — full-stack with DB"], cost: "Free tier" },
  ]},
  { name: "Research Agent", desc: "Deep research assistant that searches, reads, and synthesizes information.", components: [
    { role: "LLM", picks: ["GPT-4o — 128K context for long docs", "Gemini 2.0 Flash — 1M context"], cost: "$0.15-2.50/1M tokens" },
    { role: "Search", picks: ["Exa — content-based semantic search", "Tavily — cited structured results", "Jina Reader — URL to markdown"], cost: "Free-$19/mo" },
    { role: "Scraping", picks: ["Firecrawl — web to markdown at scale", "Jina AI Reader — single page extraction"], cost: "Free-$19/mo" },
    { role: "Storage", picks: ["Pinecone — vector DB for RAG", "Supabase — Postgres + pgvector"], cost: "Free tier" },
    { role: "Orchestration", picks: ["LangChain — agent framework", "Trigger.dev — background jobs"], cost: "Free-$39/mo" },
  ]},
  { name: "Customer Support Agent", desc: "AI agent that handles tickets, searches docs, and responds to customers.", components: [
    { role: "LLM", picks: ["GPT-4o — reliable, function calling", "Claude 3.5 Haiku — fast, affordable"], cost: "$0.25-2.50/1M tokens" },
    { role: "Knowledge Base", picks: ["Pinecone — vector search over docs", "Weaviate — hybrid keyword+vector"], cost: "Free tier" },
    { role: "Email", picks: ["Resend — React email API", "SendGrid — transactional at scale"], cost: "Free-100/day" },
    { role: "Ticketing", picks: ["Linear API — issue tracking", "GitHub Issues — for open source"], cost: "Free-$8/user/mo" },
    { role: "Analytics", picks: ["PostHog — product analytics", "Helicone — LLM observability"], cost: "Free tier" },
  ]},
  { name: "Data Analysis Agent", desc: "Agent that queries databases, runs Python, and generates reports.", components: [
    { role: "LLM", picks: ["GPT-4o — code interpreter", "Claude 3.5 Sonnet — analysis & charts"], cost: "$3-5/1M tokens" },
    { role: "Code Execution", picks: ["E2B — sandboxed code runtime", "OpenAI Code Interpreter"], cost: "Free-$25/mo" },
    { role: "Database", picks: ["Supabase — Postgres", "Neon — serverless branching"], cost: "Free tier" },
    { role: "Visualization", picks: ["Mapbox — custom maps", "Recharts/D3 — JS charting"], cost: "Free tier" },
    { role: "Scheduling", picks: ["Trigger.dev — cron jobs", "n8n — workflow automation"], cost: "Free tier" },
  ]},
];

import type { Metadata } from "next";
export const metadata: Metadata = { title: "4 Production AI Agent Stacks: Coding, Research, Support & Data (2026) | ToolKiti", description: "4 production AI agent templates. Coding agent, research agent, customer support agent & data analysis agent. Full API stack, cost breakdown & deployment guides." };
export default function AgentStacksPage() {
  return (<>
    <Header />
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-2 text-2xl font-bold">AI Agent Stack Templates</h1>
      <p className="mb-8 text-[var(--muted)]">Production-ready API stacks for building AI agents. Each template includes recommended providers with pricing.</p>
      <div className="space-y-8">
        {stacks.map(s => (
          <section key={s.name} className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h2 className="mb-1 text-lg font-bold">{s.name}</h2>
            <p className="mb-4 text-sm text-[var(--muted)]">{s.desc}</p>
            <div className="space-y-3">
              {s.components.map((c, i) => (
                <div key={i} className="flex flex-col gap-1 rounded-lg bg-[var(--bg)] p-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="text-[10px] font-semibold uppercase text-[var(--accent)]">{c.role}</span>
                    <div className="text-sm">{c.picks[0]}</div>
                    <div className="text-xs text-[var(--muted)]">Alt: {c.picks[1]}</div>
                  </div>
                  <span className="text-xs text-[var(--muted)]">{c.cost}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/" className="text-sm text-[var(--accent)] underline hover:opacity-80">← Back to ToolKiti</Link>
      </div>
    </main>
  </>);
}