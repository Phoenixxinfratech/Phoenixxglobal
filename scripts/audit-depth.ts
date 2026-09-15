/**
 * Content depth audit — soft floors from docs/CONTENT-QUALITY.md.
 * Exit 1 only if an entity is severely thin (<70% of floor).
 * Soft under-floor counts print as warnings (exit 0).
 */
import { aboutContent, manufacturingContent, qualityContent } from "../src/content/company";
import { comparisons } from "../src/content/comparisons";
import {
  exportDocumentationContent,
  exportHubContent,
  exportIncotermsContent,
  exportLeadTimeContent,
  exportPackagingContent,
  exportProcessContent,
} from "../src/content/export";
import { guides } from "../src/content/guides";
import { products } from "../src/content/products";
import { solutions } from "../src/content/solutions";

function countWords(...parts: Array<string | string[] | undefined | null>): number {
  const chunks: string[] = [];
  for (const part of parts) {
    if (!part) continue;
    if (Array.isArray(part)) chunks.push(...part);
    else chunks.push(part);
  }
  const text = chunks.join(" ");
  return (text.match(/[A-Za-z0-9'’-]+/g) ?? []).length;
}

type Row = {
  id: string;
  words: number;
  floor: number;
};

function status(row: Row): "ok" | "warn" | "fail" {
  if (row.words >= row.floor) return "ok";
  if (row.words >= Math.floor(row.floor * 0.7)) return "warn";
  return "fail";
}

const rows: Row[] = [];

for (const p of products.filter((x) => !x.draft)) {
  rows.push({
    id: `product:${p.slug}`,
    floor: 900,
    words: countWords(
      p.summary,
      p.quickAnswer,
      p.overview,
      p.construction,
      p.selectionGuidance,
      p.installationNotes,
      p.comparisonNotes,
      p.exportNotes,
      p.limitations,
      p.benefits,
      p.buyerChecklist,
      p.faqs?.map((f) => `${f.question} ${f.answer}`),
      p.buyerScenarios?.map((s) => `${s.question} ${s.answer}`),
    ),
  });
}

for (const s of solutions.filter((x) => !x.draft)) {
  rows.push({
    id: `solution:${s.slug}`,
    floor: 1000,
    words: countWords(
      s.summary,
      s.quickAnswer,
      s.engineeringRequirement,
      s.estimatingGuidance,
      s.limitations,
      s.buyerChecklist,
      s.faqs?.map((f) => `${f.question} ${f.answer}`),
      s.failurePoints?.map((f) => `${f.problem} ${f.prevention}`),
      s.productRationale?.map((r) => r.why),
      s.processSteps?.map((p) => `${p.title} ${p.body}`),
      s.buyerScenarios?.map((x) => `${x.question} ${x.answer}`),
    ),
  });
}

function companyWords(obj: unknown): number {
  return countWords(JSON.stringify(obj));
}

rows.push({
  id: "company:about",
  floor: 1200,
  words: companyWords(aboutContent),
});
rows.push({
  id: "company:manufacturing",
  floor: 1200,
  words: companyWords(manufacturingContent),
});
rows.push({
  id: "company:quality",
  floor: 700,
  words: companyWords(qualityContent),
});

rows.push({
  id: "export:hub",
  floor: 1200,
  words: companyWords(exportHubContent),
});
rows.push({
  id: "export:process",
  floor: 700,
  words: companyWords(exportProcessContent),
});
rows.push({
  id: "export:documentation",
  floor: 700,
  words: companyWords(exportDocumentationContent),
});
rows.push({
  id: "export:packaging",
  floor: 700,
  words: companyWords(exportPackagingContent),
});
rows.push({
  id: "export:incoterms",
  floor: 700,
  words: companyWords(exportIncotermsContent),
});
rows.push({
  id: "export:lead-time",
  floor: 700,
  words: companyWords(exportLeadTimeContent),
});

for (const g of guides.filter((x) => !x.draft)) {
  rows.push({
    id: `guide:${g.slug}`,
    floor: 700,
    words: companyWords(g),
  });
}

for (const c of comparisons.filter((x) => !x.draft)) {
  rows.push({
    id: `comparison:${c.slug}`,
    floor: 700,
    words: companyWords(c),
  });
}

console.log("=== Content depth audit ===\n");
console.log("Floor rules: docs/CONTENT-QUALITY.md\n");

let warns = 0;
let fails = 0;

for (const row of rows) {
  const st = status(row);
  const mark = st === "ok" ? "OK  " : st === "warn" ? "WARN" : "FAIL";
  if (st === "warn") warns += 1;
  if (st === "fail") fails += 1;
  console.log(`${mark}  ${row.words.toString().padStart(5)} / ${row.floor}  ${row.id}`);
}

console.log(`\n=== Summary ===`);
console.log(`${rows.length} entities · ${warns} warning(s) · ${fails} fail(s)`);

if (fails > 0) {
  console.log("FAIL — one or more entities under 70% of floor.");
  process.exit(1);
}

console.log(
  warns > 0
    ? "PASS with warnings — deepen under-floor pages with useful copy (do not pad)."
    : "PASS — all measured entities meet soft floors.",
);
process.exit(0);
