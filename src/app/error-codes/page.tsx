import Link from "next/link";
import Header from "@/components/Header";

const errors = [
  { code: "429", api: "OpenAI", title: "Rate Limit Exceeded", cause: "Too many requests in a short period. OpenAI enforces RPM (requests per minute) and TPM (tokens per minute) limits.", fix: "Implement exponential backoff. Start with 1s delay, double each retry up to 60s. Check response header `x-ratelimit-reset-requests` for reset time.", curl: 'curl https://api.openai.com/v1/chat/completions -H "Authorization: Bearer $KEY" -d \'{"model":"gpt-4o","messages":[{"role":"user","content":"hi"}]}\'' },
  { code: "401", api: "OpenAI", title: "Invalid Authentication", cause: "API key is missing, expired, or invalid. The Authorization header format is wrong.", fix: "Verify Bearer token in header. Check key at platform.openai.com/api-keys. Regenerate if compromised.", curl: 'curl https://api.openai.com/v1/models -H "Authorization: Bearer $OPENAI_API_KEY"' },
  { code: "503", api: "OpenAI", title: "Service Unavailable", cause: "OpenAI servers are overloaded or under maintenance. Temporary outage.", fix: "Retry with backoff. Monitor status.openai.com for incidents. Consider fallback to another provider (Anthropic, Gemini)." },
  { code: "500", api: "OpenAI", title: "Internal Server Error", cause: "Unexpected server-side error. Usually transient.", fix: "Retry request. If persists >5 min, check status page. Log the request ID from response headers for support." },
  { code: "400", api: "OpenAI", title: "Bad Request", cause: "Malformed request body. Invalid JSON, missing required fields, or parameter out of range.", fix: "Validate JSON structure. Check max_tokens is within model limits. Ensure messages array is not empty." },
  { code: "429", api: "Anthropic", title: "Rate Limited", cause: "Exceeded requests per minute. Anthropic has tiered rate limits.", fix: "Backoff with retry-after header value. Upgrade tier at console.anthropic.com for higher limits." },
  { code: "529", api: "Anthropic", title: "Overloaded", cause: "Anthropic servers at capacity. Temporary overload condition.", fix: "Wait and retry. This is Anthropic's equivalent of 503. Exponential backoff recommended." },
  { code: "403", api: "Google Gemini", title: "Permission Denied", cause: "API key lacks permission for the requested model or region.", fix: "Enable the API in Google Cloud Console. Check the model name is correct. Verify billing is set up." },
  { code: "429", api: "Google Gemini", title: "Resource Exhausted", cause: "Quota exceeded. Free tier has strict limits.", fix: "Check quota at console.cloud.google.com/apis. Wait for quota reset or upgrade to paid tier." },
  { code: "402", api: "DeepSeek", title: "Insufficient Balance", cause: "Account balance is zero or negative. Prepaid credits exhausted.", fix: "Top up at platform.deepseek.com. Check usage dashboard for consumption rate." },
  { code: "429", api: "Stripe", title: "Too Many Requests", cause: "Exceeded Stripe API rate limit (100/sec in test mode, 25/sec in live).", fix: "Use idempotency keys for retries. Implement exponential backoff. Batch operations where possible." },
  { code: "401", api: "GitHub", title: "Bad Credentials", cause: "Token is expired, revoked, or lacks required scopes.", fix: "Generate new token at github.com/settings/tokens. Check required scopes in API docs." },
  { code: "403", api: "GitHub", title: "Resource Not Accessible", cause: "Token has insufficient permissions for this resource.", fix: "Add required scopes to token. Check organization access settings." },
  { code: "429", api: "Vercel", title: "Rate Limited", cause: "Exceeded Vercel API rate limit (varies by plan).", fix: "Check x-ratelimit-remaining header. Backoff 1-60s. Upgrade plan for higher limits." },
  { code: "503", api: "Supabase", title: "Database Unavailable", cause: "Project is paused (free tier) or database is restarting.", fix: "Go to app.supabase.com and unpause project. Wait for restart to complete (~30s)." },
];

import type { Metadata } from "next";
export const metadata: Metadata = { title: "15 Common API Error Codes & Fixes: Curl Debugging Guide (2026) | ToolKiti", description: "Debug 15 common API error codes with curl examples. 401, 403, 429, 500, CORS errors & more. Step-by-step fixes for REST API developers." };
export default function ErrorCodesPage() {
  return (<>
    <Header />
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-2 text-2xl font-bold">API Error Code Database</h1>
      <p className="mb-8 text-[var(--muted)]">Structured reference of common API errors with causes, fixes, and curl examples. Built for AI agents and developers.</p>
      
      <div className="space-y-3">
        {errors.map((e, i) => (
          <div key={i} id={`${e.api.toLowerCase()}-${e.code}`} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="rounded bg-red-500/10 px-2 py-0.5 text-xs font-bold text-red-500">{e.code}</span>
              <span className="text-xs text-[var(--muted)]">{e.api}</span>
              <h3 className="font-semibold text-sm">{e.title}</h3>
            </div>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              <div>
                <span className="text-[10px] font-semibold uppercase text-[var(--muted)]">Cause</span>
                <p className="text-sm">{e.cause}</p>
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase text-[var(--muted)]">Fix</span>
                <p className="text-sm">{e.fix}</p>
              </div>
            </div>
            {e.curl && (
              <pre className="mt-2 overflow-x-auto rounded bg-[var(--bg)] p-3 text-[11px] leading-relaxed">{e.curl}</pre>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/" className="text-sm text-[var(--accent)] underline hover:opacity-80">← Back to ToolKiti</Link>
      </div>
    </main>
  </>);
}