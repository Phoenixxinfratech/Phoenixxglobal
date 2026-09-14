/**
 * Generate public/llms.txt from live content — run after content changes.
 */
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { buildLlmsTxt } from "../src/lib/llms";

const OUT = path.resolve(import.meta.dirname, "../public/llms.txt");

async function main() {
  const body = buildLlmsTxt();
  await writeFile(OUT, `${body}\n`, "utf8");
  const lines = body.split("\n").length;
  console.log(`Wrote ${OUT} (${lines} lines)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
