import Link from "next/link";
import Header from "@/components/Header";

const servers = [
  { name: "Brave Search MCP", gh: "anthropics/brave-search-mcp", install: "npx @anthropic/mcp-brave-search", desc: "Web search via Brave Search API. Returns structured results with snippets and URLs.", tools: ["brave_web_search", "brave_local_search"] },
  { name: "Filesystem MCP", gh: "modelcontextprotocol/filesystem-server", install: "npx @modelcontextprotocol/server-filesystem", desc: "Read, write, and manage files on the local filesystem. Secure path restrictions.", tools: ["read_file", "write_file", "list_directory"] },
  { name: "GitHub MCP", gh: "modelcontextprotocol/github-server", install: "npx @modelcontextprotocol/server-github", desc: "Manage repos, issues, PRs, and search code via GitHub API.", tools: ["create_issue", "search_repos", "get_file_contents"] },
  { name: "Postgres MCP", gh: "modelcontextprotocol/postgres-server", install: "npx @modelcontextprotocol/server-postgres", desc: "Query Postgres databases. Read-only mode available for safety.", tools: ["query", "list_tables", "describe_table"] },
  { name: "Puppeteer MCP", gh: "modelcontextprotocol/puppeteer-server", install: "npx @modelcontextprotocol/server-puppeteer", desc: "Browser automation. Navigate, click, screenshot, and extract content.", tools: ["navigate", "click", "screenshot", "extract"] },
  { name: "Slack MCP", gh: "modelcontextprotocol/slack-server", install: "npx @modelcontextprotocol/server-slack", desc: "Send messages, list channels, and search Slack history.", tools: ["send_message", "list_channels", "search_messages"] },
  { name: "Memory MCP", gh: "modelcontextprotocol/memory-server", install: "npx @modelcontextprotocol/server-memory", desc: "Persistent knowledge graph for agents. Store and retrieve entities and relations.", tools: ["create_entities", "search_nodes", "open_nodes"] },
  { name: "Fetch MCP", gh: "modelcontextprotocol/fetch-server", install: "npx @modelcontextprotocol/server-fetch", desc: "Fetch web content and convert to markdown. Handles HTML, PDF, and images.", tools: ["fetch", "fetch_markdown"] },
  { name: "Sequential Thinking MCP", gh: "modelcontextprotocol/sequential-thinking-server", install: "npx @modelcontextprotocol/server-sequential-thinking", desc: "Multi-step reasoning with thought chains. Dynamic reflection and hypothesis revision.", tools: ["sequentialthinking"] },
  { name: "Tavily Search MCP", gh: "tavily-ai/tavily-mcp", install: "npx tavily-mcp", desc: "AI-optimized web search. Returns cited, structured results perfect for RAG.", tools: ["tavily_search", "tavily_extract"] },
  { name: "Exa Search MCP", gh: "exa-labs/exa-mcp-server", install: "npx exa-mcp-server", desc: "Semantic search. Content-based neural search, not keyword matching.", tools: ["web_search", "get_contents"] },
  { name: "Firecrawl MCP", gh: "mendableai/firecrawl-mcp-server", install: "npx firecrawl-mcp", desc: "Turn entire websites into LLM-ready markdown. Crawl, scrape, extract.", tools: ["scrape_url", "crawl_website", "map_website"] },
  { name: "Browserbase MCP", gh: "browserbase/mcp-server", install: "npx @browserbasehq/mcp", desc: "Headless browser with stealth mode. Cloud-based, no local Chrome needed.", tools: ["create_session", "navigate", "screenshot", "click"] },
  { name: "Supabase MCP", gh: "supabase-community/supabase-mcp", install: "npx @supabase/mcp-server-supabase", desc: "Manage Supabase projects. Tables, auth, edge functions, storage.", tools: ["list_tables", "query", "manage_auth"] },
  { name: "Resend MCP", gh: "resend/mcp-server", install: "npx @resend/mcp", desc: "Send emails from your agent. React email templates, tracking, and analytics.", tools: ["send_email", "get_email_status"] },
];

import type { Metadata } from "next";
export const metadata: Metadata = { title: "15 MCP Servers for AI Agents — Search, Database, Browser & More (2026) | ToolKiti", description: "15 Model Context Protocol (MCP) servers for AI agents. Brave Search, GitHub, Postgres, Puppeteer, Slack & more. Install commands & tools listed." };
export default function MCPServersPage() {
  return (<>
    <Header />
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-2 text-2xl font-bold">MCP Server Directory</h1>
      <p className="mb-2 text-[var(--muted)]">Structured directory of Model Context Protocol servers for AI agents. Each entry includes GitHub repo, install command, and available tools.</p>
      <p className="mb-8 text-sm text-[var(--muted)]">
        MCP (Model Context Protocol) is the standard for connecting AI agents to external tools. 
        All servers listed are open-source and npm-installable.
      </p>
      <div className="space-y-3">
        {servers.map(s => (
          <div key={s.name} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
            <h3 className="font-semibold">{s.name}</h3>
            <p className="mt-1 text-sm text-[var(--muted)]">{s.desc}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {s.tools.map(t => (<span key={t} className="rounded bg-[var(--bg)] px-2 py-0.5 text-[10px] text-[var(--accent)]">{t}</span>))}
            </div>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-[var(--muted)]">
              <span>GitHub: {s.gh}</span>
              <code className="rounded bg-[var(--bg)] px-1.5 py-0.5">{s.install}</code>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/" className="text-sm text-[var(--accent)] underline hover:opacity-80">← Back to ToolKiti</Link>
      </div>
    </main>
  </>);
}