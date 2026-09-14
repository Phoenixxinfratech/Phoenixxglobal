/**
 * Schema audit — scan rendered HTML for forbidden JSON-LD on export routes.
 *
 * Exit 1: AggregateRating, priced offers, Review, or LocalBusiness on /export/
 * Exit 0: pass (warns on empty FAQPage; warns if .next missing)
 */
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const HTML_APP_DIR = path.join(ROOT, ".next/server/app");

type SchemaIssue = {
  file: string;
  type: "error" | "warn";
  message: string;
};

async function walkHtml(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkHtml(full)));
    } else if (entry.name.endsWith(".html")) {
      files.push(full);
    }
  }

  return files;
}

function extractJsonLdScripts(html: string): unknown[] {
  const scripts: unknown[] = [];
  const re =
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match: RegExpExecArray | null;

  while ((match = re.exec(html)) !== null) {
    const raw = match[1]!.trim();
    if (!raw) continue;
    try {
      scripts.push(JSON.parse(raw));
    } catch {
      // skip malformed blocks
    }
  }

  return scripts;
}

function collectNodes(node: unknown, out: unknown[] = []): unknown[] {
  if (!node || typeof node !== "object") return out;
  out.push(node);

  if (Array.isArray(node)) {
    for (const item of node) collectNodes(item, out);
    return out;
  }

  for (const value of Object.values(node as Record<string, unknown>)) {
    collectNodes(value, out);
  }

  return out;
}

function getTypes(node: unknown): string[] {
  if (!node || typeof node !== "object") return [];
  const record = node as Record<string, unknown>;
  const type = record["@type"];
  if (typeof type === "string") return [type];
  if (Array.isArray(type)) return type.filter((t): t is string => typeof t === "string");
  return [];
}

function hasPricedOffer(node: unknown): boolean {
  if (!node || typeof node !== "object") return false;
  const record = node as Record<string, unknown>;
  const types = getTypes(node);
  if (!types.includes("Offer")) return false;
  return record.price !== undefined || record.priceSpecification !== undefined;
}

function isExportPath(filePath: string): boolean {
  const rel = path.relative(HTML_APP_DIR, filePath).replace(/\\/g, "/");
  return rel.startsWith("export/") || rel === "export.html";
}

function auditJsonLd(filePath: string, data: unknown): SchemaIssue[] {
  const issues: SchemaIssue[] = [];
  const exportPage = isExportPath(filePath);
  const rel = path.relative(ROOT, filePath);

  for (const node of collectNodes(data)) {
    const types = getTypes(node);

    if (exportPage) {
      if (types.includes("AggregateRating")) {
        issues.push({
          file: rel,
          type: "error",
          message: "AggregateRating on export route",
        });
      }
      if (types.includes("Review")) {
        issues.push({
          file: rel,
          type: "error",
          message: "Review on export route",
        });
      }
      if (types.includes("LocalBusiness")) {
        issues.push({
          file: rel,
          type: "error",
          message: "LocalBusiness on export route",
        });
      }
      if (hasPricedOffer(node)) {
        issues.push({
          file: rel,
          type: "error",
          message: "Offer with price on export route",
        });
      }
    }

    if (types.includes("FAQPage")) {
      const record = node as Record<string, unknown>;
      const mainEntity = record.mainEntity;
      const empty =
        !mainEntity ||
        (Array.isArray(mainEntity) && mainEntity.length === 0);
      if (empty) {
        issues.push({
          file: rel,
          type: "warn",
          message: "FAQPage with empty mainEntity",
        });
      }
    }
  }

  return issues;
}

async function main() {
  console.log("=== Schema audit — JSON-LD on export routes ===\n");

  try {
    const dirStat = await stat(HTML_APP_DIR);
    if (!dirStat.isDirectory()) throw new Error("not a directory");
  } catch {
    console.warn(
      "WARN — .next/server/app not found. Run `npm run build` first for a full schema audit.\n",
    );
    console.log("PASS — skipped (no build output).\n");
    process.exit(0);
  }

  const htmlFiles = await walkHtml(HTML_APP_DIR);
  const errors: SchemaIssue[] = [];
  const warnings: SchemaIssue[] = [];

  for (const file of htmlFiles) {
    const html = await readFile(file, "utf8");
    for (const block of extractJsonLdScripts(html)) {
      for (const issue of auditJsonLd(file, block)) {
        if (issue.type === "error") errors.push(issue);
        else warnings.push(issue);
      }
    }
  }

  console.log(`Scanned ${htmlFiles.length} HTML files.\n`);

  if (warnings.length) {
    console.log("Warnings:");
    for (const w of warnings.slice(0, 20)) {
      console.log(`  • ${w.file}: ${w.message}`);
    }
    if (warnings.length > 20) {
      console.log(`  … and ${warnings.length - 20} more`);
    }
    console.log("");
  }

  if (errors.length) {
    console.error(`FAIL — ${errors.length} forbidden schema issue(s):\n`);
    for (const e of errors) {
      console.error(`  • ${e.file}: ${e.message}`);
    }
    console.error("");
    process.exit(1);
  }

  console.log("PASS — no forbidden schema types on export routes.");
  if (warnings.length) {
    console.log(`${warnings.length} warning(s) (non-fatal).`);
  }
  console.log("");
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
