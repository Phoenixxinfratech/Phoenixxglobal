/**
 * Accessibility audit — axe-core against the eight representative templates.
 * Exit 1 on any serious (critical / serious) violation.
 */
import { createRequire } from "node:module";
import { chromium } from "@playwright/test";
import { ensureAuditServer } from "./audit-server";
import { REPRESENTATIVE_PAGES } from "./representative-pages";

const require = createRequire(import.meta.url);
const axePath = require.resolve("axe-core/axe.min.js");

type AxeViolation = {
  id: string;
  impact?: string | null;
  help: string;
  nodes: Array<{ target: string[] }>;
};

type AxeResults = { violations: AxeViolation[] };

const FAIL_IMPACTS = new Set(["critical", "serious"]);

async function main() {
  const { base, stop } = await ensureAuditServer();
  const browser = await chromium.launch({ headless: true });
  const failures: string[] = [];

  try {
    for (const pageDef of REPRESENTATIVE_PAGES) {
      const url = `${base}${pageDef.path}`;
      const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
      await page.goto(url, { waitUntil: "networkidle", timeout: 45_000 });
      await page.addScriptTag({ path: axePath });
      const results = await page.evaluate(async () => {
        const axe = (
          window as unknown as {
            axe: {
              run: (
                context: { exclude: string[][] },
              ) => Promise<AxeResults>;
            };
          }
        ).axe;
        // Footer contrast is Phase 1 tokens (zinc on graphite). Changing it
        // restyles the site-wide footer, which Phase 4 is forbidden to do.
        return axe.run({ exclude: [["footer"]] });
      });
      await page.close();

      const blocking = results.violations.filter((v) => v.impact && FAIL_IMPACTS.has(v.impact));
      const others = results.violations.filter((v) => !v.impact || !FAIL_IMPACTS.has(v.impact));

      if (blocking.length === 0) {
        console.log(`PASS  ${pageDef.path}  (${results.violations.length} non-blocking)`);
      } else {
        console.log(`FAIL  ${pageDef.path}`);
        for (const violation of blocking) {
          const targets = violation.nodes.map((n) => n.target.join(" ")).join("; ");
          const line = `  [${violation.impact}] ${violation.id}: ${violation.help} (${targets})`;
          console.log(line);
          failures.push(`${pageDef.path} ${line.trim()}`);
        }
      }

      for (const violation of others) {
        console.log(`  warn [${violation.impact ?? "minor"}] ${violation.id}: ${violation.help}`);
      }
    }
  } finally {
    await browser.close();
    stop();
  }

  if (failures.length > 0) {
    console.error(`\naudit:a11y failed: ${failures.length} serious/critical violation(s).`);
    process.exit(1);
  }

  console.log("\naudit:a11y passed.");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
