import { defineConfig, type Plugin } from "vite";
import tailwindcss from "@tailwindcss/vite";
import fs from "node:fs";
import path from "node:path";

/**
 * Vite plugin to resolve `<kite-include src="...">` tags at compile time
 * for zero-latency production builds and instant live reload in development.
 */
function kiteInclude(): Plugin {
  function resolveIncludes(html: string, root: string, seen = new Set<string>()): string {
    return html.replace(
      /<kite-include\s+src=["']([^"']+)["']\s*(?:\/>|>(?:<\/kite-include>)?)/gi,
      (_match, src: string) => {
        const cleanSrc = src.replace(/^\//, "");
        const resolved = path.resolve(root, cleanSrc);
        if (!fs.existsSync(resolved)) {
          console.warn(`[kite-include] File not found: ${resolved}`);
          return `<!-- kite-include not found: ${src} -->`;
        }
        if (seen.has(resolved)) {
          return `<!-- kite-include circular: ${src} -->`;
        }
        seen.add(resolved);
        try {
          const content = fs.readFileSync(resolved, "utf8");
          return resolveIncludes(content, root, seen);
        } catch {
          return `<!-- kite-include read error: ${src} -->`;
        }
      },
    );
  }

  return {
    name: "kite-include",
    transformIndexHtml: {
      order: "pre",
      handler(html, ctx) {
        const root = ctx.server ? ctx.server.config.root : process.cwd();
        return resolveIncludes(html, root);
      },
    },
    handleHotUpdate({ file, server }) {
      if (file.endsWith(".html")) {
        server.ws.send({ type: "full-reload" });
      }
    },
  };
}

export default defineConfig({
  plugins: [tailwindcss(), kiteInclude()],
});
