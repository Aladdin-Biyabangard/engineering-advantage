/**
 * Production build for Docker/CI.
 * Vite 7 + TanStack prerender can exit 1 after successful prerender when stdin has no `.off`
 * (common in Docker build). Treat as success if prerendered output exists.
 */
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const indexHtml = join(root, "dist/client/index.html");

const result = spawnSync("npm", ["run", "build"], {
  stdio: "inherit",
  shell: true,
  env: process.env,
});

if (result.status === 0) {
  process.exit(0);
}

if (existsSync(indexHtml)) {
  console.warn(
    "[build-static] vite exited with code %s but %s exists (prerender teardown bug); continuing.",
    result.status ?? "unknown",
    indexHtml,
  );
  process.exit(0);
}

console.error("[build-static] build failed and no prerendered index.html found.");
process.exit(result.status ?? 1);
