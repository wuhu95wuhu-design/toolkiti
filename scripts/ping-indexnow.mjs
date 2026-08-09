/**
 * Post-build: ping IndexNow (Bing, Yandex, Seznam) with all site URLs.
 * Runs after next build on Vercel.
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = join(__dirname, "..");

const INDEXNOW_KEY = "f452965da85d46369ed3b7c2c041cf80";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const SITE = "https://www.toolkiti.org";

async function pingIndexNow() {
  const urls = [];

  // Static pages
  urls.push(
    SITE + "/",
    SITE + "/compare",
    SITE + "/blog",
    SITE + "/free-tier",
    SITE + "/error-codes",
    SITE + "/mcp-servers",
    SITE + "/agent-stacks",
    SITE + "/submit",
    SITE + "/sponsor",
    SITE + "/sitemap.xml",
  );

  // Blog posts
  urls.push(
    SITE + "/blog/top-llm-apis-2026-compared",
    SITE + "/blog/ai-agent-tool-stack",
    SITE + "/blog/api-pricing-trends-2026",
  );

  // Try to load API slugs from data file
  try {
    const dataPath = join(ROOT, ".next", "server", "app", "rss.xml", "meta.js");
    // Dynamic pages will be discovered via sitemap
  } catch {}

  console.log(`Pinging IndexNow with ${urls.length} core URLs...`);

  const body = JSON.stringify({
    host: "www.toolkiti.org",
    key: INDEXNOW_KEY,
    keyLocation: `https://www.toolkiti.org/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  });

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body,
    });
    console.log(`IndexNow response: ${res.status} ${res.statusText}`);
  } catch (e) {
    console.error("IndexNow ping failed:", e.message);
  }

  // Also ping Google
  const googlePing = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITE + "/sitemap.xml")}`;
  try {
    const res = await fetch(googlePing);
    console.log(`Google sitemap ping: ${res.status}`);
  } catch (e) {
    console.error("Google ping failed:", e.message);
  }

  // Ping Bing sitemap
  const bingPing = `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITE + "/sitemap.xml")}`;
  try {
    const res = await fetch(bingPing);
    console.log(`Bing sitemap ping: ${res.status}`);
  } catch (e) {
    console.error("Bing ping failed:", e.message);
  }

  console.log("IndexNow + sitemap pings complete.");
}

pingIndexNow().catch(console.error);
