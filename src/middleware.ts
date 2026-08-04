import { NextRequest, NextResponse } from "next/server";

const AI_BOT_PATTERNS: { pattern: RegExp; label: string }[] = [
  { pattern: /GPTBot/i, label: "GPTBot (OpenAI)" },
  { pattern: /ChatGPT-User/i, label: "ChatGPT-User" },
  { pattern: /Claude-Web/i, label: "Claude (Anthropic)" },
  { pattern: /anthropic-ai/i, label: "Anthropic" },
  { pattern: /PerplexityBot/i, label: "PerplexityBot" },
  { pattern: /Google-Extended/i, label: "Google-Extended (Gemini)" },
  { pattern: /GoogleOther/i, label: "GoogleOther" },
  { pattern: /CCBot/i, label: "CCBot (Common Crawl)" },
  { pattern: /cohere-ai/i, label: "Cohere" },
  { pattern: /Amazonbot/i, label: "Amazonbot" },
  { pattern: /Applebot/i, label: "Applebot" },
  { pattern: /Bytespider/i, label: "Bytespider (TikTok)" },
  { pattern: /Diffbot/i, label: "Diffbot" },
  { pattern: /FacebookBot/i, label: "FacebookBot (Meta)" },
  { pattern: /Omgili/i, label: "Omgili" },
  { pattern: /YouBot/i, label: "YouBot (You.com)" },
  { pattern: /Firecrawl/i, label: "Firecrawl" },
  { pattern: /JinaBot/i, label: "JinaBot" },
  { pattern: /Browserless/i, label: "Browserless" },
  { pattern: /HeadlessChrome/i, label: "Headless Chrome" },
  { pattern: /Puppeteer/i, label: "Puppeteer" },
  { pattern: /Playwright/i, label: "Playwright" },
  { pattern: /curl/i, label: "curl" },
  { pattern: /python-requests/i, label: "Python Requests" },
  { pattern: /axios/i, label: "Axios" },
  { pattern: /node-fetch/i, label: "Node Fetch" },
  { pattern: /Go-http-client/i, label: "Go HTTP Client" },
  { pattern: /Bingbot/i, label: "Bingbot (Copilot)" },
  { pattern: /DuckDuckBot/i, label: "DuckDuckBot" },
  { pattern: /meta-externalagent/i, label: "Meta External Agent" },
  { pattern: /meta-externalfetcher/i, label: "Meta External Fetcher" },
  { pattern: /OAI-SearchBot/i, label: "OAI-SearchBot (OpenAI Search)" },
  { pattern: /Google-InspectionTool/i, label: "Google Inspection Tool" },
  { pattern: /AhrefsBot/i, label: "AhrefsBot" },
  { pattern: /SemrushBot/i, label: "SemrushBot" },
  { pattern: /PetalBot/i, label: "PetalBot (Huawei)" },

];

export function middleware(request: NextRequest) {
  const ua = request.headers.get("user-agent") || "";
  const path = request.nextUrl.pathname;
  const method = request.method;

  for (const { pattern, label } of AI_BOT_PATTERNS) {
    if (pattern.test(ua)) {
      const log = JSON.stringify({
        event: "ai_bot_hit",
        bot: label,
        method,
        path,
        ua_short: ua.slice(0, 120),
        time: new Date().toISOString(),
      });
      console.log(log);
      break;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|logo.png).*)",
  ],
};
