/**
 * Pre-build validation — runs before every `next build` / `next dev`.
 * Auto-detects the crash patterns we've seen:
 *   1. Corrupted template literals (`${...}` eaten by shell variable expansion)
 *   2. Non-UTF8 encoding in source files
 *   3. Missing memory-safe next.config settings
 *   4. Oversized data files that risk OOM
 */

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = join(__dirname, "..");
const SRC = join(ROOT, "src");

let errors = 0;
let warnings = 0;

function err(msg) { console.error("  \u2716  " + msg); errors++; }
function warn(msg) { console.warn("  \u26A0  " + msg); warnings++; }
function ok(msg)  { console.log("  \u2713  " + msg); }

console.log("\n=== Pre-build validation ===\n");

// ── 1. Check next.config.ts has stability settings ──
const configPath = join(ROOT, "next.config.ts");
if (!existsSync(configPath)) {
  err("next.config.ts not found");
} else {
  const config = readFileSync(configPath, "utf-8");
  if (!config.includes("staticGenerationMaxConcurrency")) {
    warn("next.config.ts missing staticGenerationMaxConcurrency \u2014 build may OOM on large datasets");
  }
  if (!config.includes("staticGenerationRetryCount")) {
    warn("next.config.ts missing staticGenerationRetryCount \u2014 failed generations may retry endlessly");
  }
  ok("next.config.ts checked");
}

// ── 2. Scan .ts/.tsx source files for issues ──
function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory() && e.name !== "node_modules" && e.name !== ".next") {
      files.push(...walk(full));
    } else if (e.isFile() && /\.(ts|tsx|js|jsx|mjs)$/.test(e.name)) {
      files.push(full);
    }
  }
  return files;
}

// 2a. UTF-8 validity + CRCRLF detection
for (const f of walk(SRC)) {
  try {
    const raw = readFileSync(f);
    const decoded = new TextDecoder("utf-8", { fatal: true }).decode(raw);
    if (decoded.includes("\r\r\n")) {
      err(relative(ROOT, f) + " has CRCRLF line endings (shell corruption)");
    }
  } catch (e) {
    err(relative(ROOT, f) + " is not valid UTF-8: " + e.message);
  }
}
if (errors === 0) ok("All source files are valid UTF-8");

// 2b. Check for corrupted template literals
const tmplLiteral = /\$\{(.+?)\}/g;
for (const f of walk(SRC)) {
  const content = readFileSync(f, "utf-8");
  const matches = [...content.matchAll(tmplLiteral)];
  for (const m of matches) {
    const expr = m[1].trim();
    if (
      !expr.includes(".") && !expr.includes(" ") && expr.length > 0 &&
      !/^['"0-9]/.test(expr) && expr !== "..." &&
      !expr.startsWith("(") && !expr.startsWith("__")
    ) {
      warn(relative(ROOT, f) + ": possible corrupted template literal: ${" + expr + "}");
    }
  }
}

// 2c. Flag large data files
const dataDir = join(SRC, "data");
if (existsSync(dataDir)) {
  for (const f of readdirSync(dataDir)) {
    const full = join(dataDir, f);
    const s = statSync(full);
    if (s.size > 50000) {
      warn(relative(ROOT, full) + " is " + (s.size / 1024).toFixed(1) + "KB \u2014 large data files increase OOM risk during static generation");
    }
  }
}

// ── 3. Summary ──
console.log("");
if (errors > 0) {
  console.error("  FAIL: " + errors + " error(s) found \u2014 fix before building\n");
  process.exit(1);
}
if (warnings > 0) {
  console.warn("  WARN: " + warnings + " warning(s) \u2014 build can proceed but review suggested\n");
}
console.log("  All clean \u2014 safe to build\n");
process.exit(0);