// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { Plugin } from "vite";

/** Cloudflare build emits index.js; TanStack prerender expects server.js. */
function prerenderServerShim(): Plugin {
  return {
    name: "ingress-prerender-server-shim",
    apply: "build",
    applyToEnvironment(environment) {
      return environment.name === "ssr";
    },
    writeBundle() {
      const indexPath = join(process.cwd(), "dist/server/index.js");
      const serverPath = join(process.cwd(), "dist/server/server.js");
      if (existsSync(indexPath)) {
        copyFileSync(indexPath, serverPath);
      }
    },
  };
}

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: { enabled: true },
  },
  plugins: [prerenderServerShim()],
});
