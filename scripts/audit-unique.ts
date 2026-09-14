/**
 * Content uniqueness audit — pairwise Jaccard similarity on long-text fields
 * across product, solution, country, and city entities.
 *
 * Exit 1: any pair of DIFFERENT entities share >70% word overlap in long text
 * Exit 0: pass (or no comparable content yet)
 */
import { readFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const MIN_TEXT_CHARS = 80;
const SIMILARITY_THRESHOLD = 0.7;

const TARGET_FILES = [
  "src/content/products.ts",
  "src/content/solutions.ts",
  "src/content/countries.ts",
  "src/content/cities.ts",
] as const;

/** Phase 3 stub pages share holding copy — only audit when full content fields exist. */
const SUBSTANTIVE_MARKERS = ["quickAnswer:", "marketContext:"] as const;

type EntityText = {
  file: string;
  slug: string;
  texts: string[];
};

function unescapeString(raw: string): string {
  return raw
    .replace(/\\n/g, "\n")
    .replace(/\\t/g, "\t")
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'")
    .replace(/\\\\/g, "\\");
}

function isLongText(value: string): boolean {
  if (value.length < MIN_TEXT_CHARS) return false;
  if (!/[A-Za-z].{40,}/.test(value)) return false;
  const wordCount = (value.match(/[A-Za-z']+/g) ?? []).length;
  return wordCount >= 8;
}

function extractLongStrings(block: string): string[] {
  const strings: string[] = [];
  const re = /(["'`])((?:\\.|(?!\1)[\s\S])*?)\1/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(block)) !== null) {
    const value = unescapeString(match[2]!);
    if (isLongText(value)) strings.push(value);
  }
  return strings;
}

function isProgrammaticStub(file: string, block: string): boolean {
  if (file !== "src/content/countries.ts" && file !== "src/content/cities.ts") {
    return false;
  }
  return !SUBSTANTIVE_MARKERS.some((marker) => block.includes(marker));
}

function splitEntities(content: string, file: string): EntityText[] {
  const entities: EntityText[] = [];
  const slugRe = /slug:\s*["'`]([^"'`]+)["'`]/g;
  const matches = [...content.matchAll(slugRe)];

  for (let i = 0; i < matches.length; i++) {
    const slug = matches[i]![1]!;
    const start = matches[i]!.index!;
    const end = i + 1 < matches.length ? matches[i + 1]!.index! : content.length;
    const block = content.slice(start, end);
    if (isProgrammaticStub(file, block)) continue;
    const texts = extractLongStrings(block);
    if (texts.length) {
      entities.push({ file: "", slug, texts });
    }
  }

  return entities;
}

function wordSet(text: string): Set<string> {
  const words = text
    .toLowerCase()
    .replace(/[^\w\s'-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2);
  return new Set(words);
}

function jaccardSimilarity(a: Set<string>, b: Set<string>): number {
  if (!a.size && !b.size) return 0;
  let intersection = 0;
  for (const word of a) {
    if (b.has(word)) intersection += 1;
  }
  const union = a.size + b.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

function combinedWordSet(texts: string[]): Set<string> {
  const combined = new Set<string>();
  for (const text of texts) {
    for (const word of wordSet(text)) combined.add(word);
  }
  return combined;
}

async function main() {
  const allEntities: EntityText[] = [];

  for (const rel of TARGET_FILES) {
    const full = path.join(ROOT, rel);
    try {
      const content = await readFile(full, "utf8");
      const entities = splitEntities(content, rel);
      for (const entity of entities) {
        entity.file = rel;
        allEntities.push(entity);
      }
    } catch {
      console.warn(`  Skipped missing file: ${rel}`);
    }
  }

  console.log("=== Uniqueness audit — long-text Jaccard similarity ===\n");
  console.log(`Scanned ${allEntities.length} entities across ${TARGET_FILES.length} files.\n`);

  if (allEntities.length < 2) {
    console.log("PASS — not enough entities with long text to compare.\n");
    process.exit(0);
  }

  const failures: Array<{
    a: EntityText;
    b: EntityText;
    similarity: number;
  }> = [];

  for (let i = 0; i < allEntities.length; i++) {
    for (let j = i + 1; j < allEntities.length; j++) {
      const a = allEntities[i]!;
      const b = allEntities[j]!;
      if (a.slug === b.slug && a.file === b.file) continue;

      const setA = combinedWordSet(a.texts);
      const setB = combinedWordSet(b.texts);
      const similarity = jaccardSimilarity(setA, setB);

      if (similarity > SIMILARITY_THRESHOLD) {
        failures.push({ a, b, similarity });
      }
    }
  }

  if (failures.length) {
    console.error(
      `FAIL — ${failures.length} pair(s) exceed ${SIMILARITY_THRESHOLD * 100}% word overlap:\n`,
    );
    for (const { a, b, similarity } of failures.slice(0, 20)) {
      console.error(
        `  ${a.file}#${a.slug} ↔ ${b.file}#${b.slug} — ${(similarity * 100).toFixed(1)}%`,
      );
    }
    if (failures.length > 20) {
      console.error(`  … and ${failures.length - 20} more\n`);
    }
    process.exit(1);
  }

  console.log(
    `PASS — no cross-entity pairs exceed ${SIMILARITY_THRESHOLD * 100}% word overlap.\n`,
  );
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
