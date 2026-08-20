# ToolKiti — AI API & Tool Directory for Agents

> **Compare 127 AI APIs across 13 categories: pricing, free tiers, latency, code examples & side-by-side comparisons. Updated daily. Bilingual (EN/中文).**

ToolKiti is a structured, machine-readable directory of AI APIs and developer tools — built **for AI agents and developers**. Every page includes JSON-LD structured data, curl-ready examples, and pricing comparisons.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## ✨ Features

- **127 APIs** across 13 categories (LLM, image, audio, search, vector DB, GPU cloud, payment, cloud infra, automation & more)
- **Pricing & free tiers** — side-by-side comparisons, updated daily
- **AI-native formats**: `llms.txt`, `agents.txt`, `structured-data.json`, OpenAPI spec
- **REST API** for programmatic access (JSON catalog, search, compare)
- **Bilingual** EN/中文

## 🤖 For AI Agents

This site is designed to be consumed by AI agents:

| Resource | URL |
|----------|-----|
| LLM-readable index | https://toolkiti.org/llms.txt |
| Full AI dataset | https://toolkiti.org/llms-full.txt |
| Agent manifest | https://toolkiti.org/agents.txt |
| Structured JSON catalog | https://toolkiti.org/structured-data.json |
| JSON API (127 APIs) | https://toolkiti.org/api/v1/tools |
| Search API | https://toolkiti.org/api/v1/tools/search?q={query} |
| Compare API | https://toolkiti.org/api/v1/tools/compare?ids=slug1,slug2 |
| Categories | https://toolkiti.org/api/v1/tools/categories |
| OpenAPI spec | https://toolkiti.org/openapi.json |
| RSS feed (daily updates) | https://toolkiti.org/rss.xml |

## 🤝 MCP Server (for AI Agents)

ToolKiti exposes a **Model Context Protocol (MCP)** server so AI agents can query the directory as tools:

```json
// Claude Desktop / Cursor / any MCP client:
{
  "mcpServers": {
    "toolkiti": {
      "url": "https://toolkiti.org/.well-known/mcp"
    }
  }
}
```

**Available tools:**

| Tool | Description |
|------|-------------|
| `search_tools` | Search 127+ APIs by keyword (tts, image, vector, payment…) |
| `get_tool` | Full details of one API: pricing, auth, endpoints, SDKs |
| `compare_tools` | Compare 2-5 APIs side-by-side |
| `list_categories` | List all 13 categories with counts |
| `list_tools` | Paginated list of all APIs |

Protocol: MCP Streamable HTTP, JSON-RPC 2.0, protocol version `2025-06-18`.

## 🗂 Categories

LLM Providers · Machine Learning · Image Generation · Audio & Speech · Vector Databases · GPU Cloud · Developer Tools · Web Search · AI IDE · Payment & Fintech · Cloud Infrastructure · Data & Analytics · Automation

## 📚 Popular Guides

- [Top 10 LLM APIs Compared](https://toolkiti.org/blog) — real benchmarks and prices
- [Building an AI Agent: Full API Stack](https://toolkiti.org/blog) — from LLM to payment
- [API Pricing Trends 2026](https://toolkiti.org/blog) — LLM costs dropped 80%
- [Free AI APIs](https://toolkiti.org/free-tier) — 20 free APIs, no credit card
- [MCP Servers](https://toolkiti.org/mcp-servers) — 15 MCP servers for AI agents

## 🚀 Submit Your API

Free basic listings: https://toolkiti.org/submit

## 🛠 Tech Stack

Next.js · Tailwind CSS · Static generation (machine-first) · JSON-LD structured data

## 📄 License

Open-source, supported by the developer community. Some links are affiliate links.
