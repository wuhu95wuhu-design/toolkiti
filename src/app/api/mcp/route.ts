/**
 * ToolKiti MCP Server — Streamable HTTP endpoint at /.well-known/mcp
 * Model Context Protocol (MCP) JSON-RPC 2.0 over HTTP.
 * Lets AI agents (Claude, Cursor, etc.) mount ToolKiti's API directory as tools.
 */
import { NextRequest, NextResponse } from "next/server";
import { apis, categories } from "@/data/apis";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const PROTOCOL_VERSION = "2025-06-18";
const SERVER_INFO = {
  name: "toolkiti-mcp",
  version: "1.0.0",
};

/* ── Tool definitions ─────────────────────────────────────────── */
const TOOLS = [
  {
    name: "search_tools",
    description:
      "Search ToolKiti's directory of 127+ AI APIs by keyword. Returns matching APIs with name, category, pricing, free-tier info, and tags. Use when user asks for an API recommendation (TTS, image gen, LLM, search, payments, etc.).",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Search keyword, e.g. 'tts', 'image', 'vector', 'payment'" },
        category: { type: "string", description: "Optional category filter: llm, image, audio, search, vector-db, cloud-gpu, tools, payment, cloud-infra, data, automation, ai-ide, ml" },
        limit: { type: "number", description: "Max results (default 10, max 25)" },
      },
      required: ["query"],
    },
  },
  {
    name: "get_tool",
    description:
      "Get full details of one API from ToolKiti: description, pricing, auth method, endpoints, SDKs, status. Use when user needs concrete integration details for a specific API.",
    inputSchema: {
      type: "object",
      properties: {
        slug: { type: "string", description: "API slug, e.g. 'openai', 'anthropic', 'elevenlabs', 'stripe'" },
      },
      required: ["slug"],
    },
  },
  {
    name: "compare_tools",
    description:
      "Compare 2-5 APIs side by side (pricing, free tiers, popularity, tags). Use when user is choosing between alternatives.",
    inputSchema: {
      type: "object",
      properties: {
        ids: { type: "string", description: "Comma-separated slugs, e.g. 'openai,anthropic,google-gemini'" },
      },
      required: ["ids"],
    },
  },
  {
    name: "list_categories",
    description: "List all API categories with counts. Use to discover what ToolKiti covers.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "list_tools",
    description: "List all APIs in the directory (name, category, pricing, status). Paginated.",
    inputSchema: {
      type: "object",
      properties: {
        limit: { type: "number", description: "Max results (default 20, max 100)" },
        category: { type: "string", description: "Optional category filter" },
      },
    },
  },
];

/* ── JSON-RPC handlers ────────────────────────────────────────── */
function rpcError(id: unknown, code: number, message: string) {
  return { jsonrpc: "2.0", id, error: { code, message } };
}

function handleInitialize(id: unknown) {
  return {
    jsonrpc: "2.0",
    id,
    result: {
      protocolVersion: PROTOCOL_VERSION,
      capabilities: { tools: { listChanged: false } },
      serverInfo: SERVER_INFO,
    },
  };
}

function handleToolsList(id: unknown) {
  return { jsonrpc: "2.0", id, result: { tools: TOOLS } };
}

function handleToolsCall(id: unknown, params: any) {
  const { name, arguments: args } = params || {};
  if (!name || !args) return rpcError(id, -32602, "Invalid params: name and arguments required");

  try {
    let content: string;
    switch (name) {
      case "search_tools": {
        const q = String(args.query || "").toLowerCase().trim();
        const cat = args.category ? String(args.category).toLowerCase() : null;
        const limit = Math.min(parseInt(args.limit) || 10, 25);
        if (!q) return rpcError(id, -32602, "query is required");
        let hits = apis.filter((a) => {
          const hay = `${a.name} ${a.nameCn} ${a.description} ${a.descriptionCn} ${a.tags.join(" ")}`.toLowerCase();
          const okQ = hay.includes(q);
          const okC = cat ? a.category === cat : true;
          return okQ && okC;
        });
        const top = hits.sort((a, b) => b.popularity - a.popularity).slice(0, limit);
        content = JSON.stringify({
          total: hits.length,
          returned: top.length,
          results: top.map((a) => ({
            slug: a.slug, name: a.name, nameCn: a.nameCn, category: a.category,
            categoryCn: a.categoryCn, description: a.description, pricing: a.pricing,
            status: a.status, popularity: a.popularity, tags: a.tags, website: a.website,
          })),
        }, null, 0);
        break;
      }
      case "get_tool": {
        const slug = String(args.slug || "").toLowerCase();
        const api = apis.find((a) => a.slug === slug);
        if (!api) return rpcError(id, -32000, `Tool not found: ${slug}`);
        content = JSON.stringify(api, null, 0);
        break;
      }
      case "compare_tools": {
        const ids = String(args.ids || "").split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
        if (ids.length < 2) return rpcError(id, -32602, "Provide at least 2 slugs (comma-separated)");
        const rows = ids
          .map((s) => apis.find((a) => a.slug === s))
          .filter((a): a is (typeof apis)[number] => Boolean(a));
        content = JSON.stringify({
          compared: rows.map((a) => ({
            slug: a.slug, name: a.name, category: a.category, pricing: a.pricing,
            status: a.status, popularity: a.popularity, rateLimit: a.rateLimit ?? "n/a",
            tags: a.tags, website: a.website,
          })),
        }, null, 0);
        break;
      }
      case "list_categories": {
        content = JSON.stringify(categories.map((c) => ({ slug: c.slug, name: c.name, nameCn: c.nameCn, count: apis.filter((a) => a.category === c.slug).length })));
        break;
      }
      case "list_tools": {
        const limit = Math.min(parseInt(args.limit) || 20, 100);
        const cat = args.category ? String(args.category).toLowerCase() : null;
        const pool = cat ? apis.filter((a) => a.category === cat) : apis;
        content = JSON.stringify({
          total: pool.length,
          returned: Math.min(limit, pool.length),
          tools: pool.slice(0, limit).map((a) => ({
            slug: a.slug, name: a.name, category: a.category, pricing: a.pricing,
            status: a.status, popularity: a.popularity, tags: a.tags,
          })),
        });
        break;
      }
      default:
        return rpcError(id, -32601, `Method not found: ${name}`);
    }
    return { jsonrpc: "2.0", id, result: { content: [{ type: "text", text: content }] } };
  } catch (e: any) {
    return rpcError(id, -32603, `Internal error: ${e?.message || e}`);
  }
}

/* ── HTTP handler ─────────────────────────────────────────────── */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { jsonrpc, id, method, params } = body || {};
    if (jsonrpc !== "2.0") return NextResponse.json(rpcError(id ?? null, -32600, "Invalid Request: not JSON-RPC 2.0"), { status: 400 });

    let response;
    switch (method) {
      case "initialize": response = handleInitialize(id); break;
      case "notifications/initialized":
      case "notifications/cancelled":
        // Notifications have no id and no response body (202)
        return new NextResponse(null, { status: 202 });
      case "ping": response = { jsonrpc: "2.0", id, result: {} }; break;
      case "tools/list": response = handleToolsList(id); break;
      case "tools/call": response = handleToolsCall(id, params); break;
      default: response = rpcError(id, -32601, `Method not found: ${method}`); break;
    }
    return NextResponse.json(response, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, Mcp-Session-Id",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "MCP-Protocol-Version": PROTOCOL_VERSION,
      },
    });
  } catch (e: any) {
    return NextResponse.json(rpcError(null, -32700, `Parse error: ${e?.message || e}`), { status: 400 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Mcp-Session-Id",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    },
  });
}
