/**
 * Copy audit — banned marketing words, duplicate paragraphs,
 * sentence rhythm warnings, repeated openers, word counts.
 *
 * Exit 1: banned words or duplicate paragraphs across files
 * Warnings (exit 0): robotic rhythm, repeated paragraph openers
 */
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const SCAN_DIRS = [
  path.join(ROOT, "src/content"),
  path.join(ROOT, "src/app"),
];
const EXCLUDE_DIRS = new Set(["docs"]);
const SELF_PATH = path.resolve(import.meta.filename);

const BANNED = [
  "elevate",
  "seamless",
  "unlock",
  "unleash",
  "leverage",
  "robust",
  "cutting-edge",
  "state-of-the-art",
  "game-changer",
  "revolutionise",
  "revolutionize",
  "empower",
  "delve",
  "embark",
  "tapestry",
  "realm",
  "harness",
  "streamline",
  "holistic",
  "synergy",
  "bespoke",
  "world-class",
  "unparalleled",
  "meticulously",
  "rest assured",
  "look no further",
  "dive in",
  "one-stop",
] as const;

const EXTENSIONS = new Set([".ts", ".tsx", ".md", ".mdx"]);
const MIN_PARAGRAPH_CHARS = 80;
const WORD_COUNT_FILES = [
  "src/content/products.ts",
  "src/content/solutions.ts",
  "src/content/hero.ts",
  "src/content/pages.ts",
] as const;

const RHYTHM_FILES = [
  "src/content/products.ts",
  "src/content/solutions.ts",
  "src/content/hero.ts",
  "src/content/pages.ts",
  "src/content/countries.ts",
  "src/content/comparisons.ts",
  "src/content/faqs.ts",
  "src/content/glossary.ts",
] as const;

type Match = { file: string; line: number; term: string; excerpt: string };

async function walk(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (EXCLUDE_DIRS.has(entry.name)) continue;
      files.push(...(await walk(full)));
    } else if (EXTENSIONS.has(path.extname(entry.name))) {
      files.push(full);
    }
  }

  return files;
}

function scanBannedWords(filePath: string, content: string): Match[] {
  const matches: Match[] = [];
  const lines = content.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]!;
    const lower = line.toLowerCase();

    for (const term of BANNED) {
      if (lower.includes(term)) {
        matches.push({
          file: path.relative(ROOT, filePath),
          line: i + 1,
          term,
          excerpt: line.trim().slice(0, 120),
        });
      }
    }
  }

  return matches;
}

function unescapeString(raw: string): string {
  return raw
    .replace(/\\n/g, "\n")
    .replace(/\\t/g, "\t")
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'")
    .replace(/\\\\/g, "\\");
}

function extractQuotedStrings(content: string): string[] {
  const strings: string[] = [];
  const re = /(["'`])((?:\\.|(?!\1)[\s\S])*?)\1/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(content)) !== null) {
    const value = unescapeString(match[2]!);
    if (value.length >= MIN_PARAGRAPH_CHARS && isParagraphLike(value)) {
      strings.push(value);
    }
  }
  return strings;
}

function normalizeParagraph(text: string): string {
  return text.replace(/\s+/g, " ").trim().toLowerCase();
}

function isParagraphLike(text: string): boolean {
  if (!/[A-Za-z].{60,}/.test(text)) return false;
  const trimmed = text.trim();
  // Skip Tailwind / JSX class strings
  if (/^(rounded|flex|grid|border|text-|bg-|px-|py-|md:|lg:|max-w|min-h|inline-flex)/.test(trimmed)) {
    return false;
  }
  if ((trimmed.match(/-/g) ?? []).length > 6 && !/[.!?]/.test(trimmed)) {
    return false;
  }
  const wordCount = (trimmed.match(/[A-Za-z']+/g) ?? []).length;
  return wordCount >= 8;
}

function countWords(text: string): number {
  const cleaned = text.replace(/\\n/g, " ").replace(/\\"/g, '"');
  const matches = cleaned.match(/[A-Za-z0-9'’-]+/g);
  return matches?.length ?? 0;
}

function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 20 && /[A-Za-z]/.test(s));
}

function sentenceWordCounts(sentences: string[]): number[] {
  return sentences.map((s) => {
    const words = s.match(/[A-Za-z0-9'’-]+/g);
    return words?.length ?? 0;
  });
}

function mean(values: number[]): number {
  if (!values.length) return 0;
  return values.reduce((a, b) => a + b, 0) / values.length;
}

function stddev(values: number[]): number {
  if (values.length < 2) return 0;
  const avg = mean(values);
  const variance =
    values.reduce((sum, v) => sum + (v - avg) ** 2, 0) / values.length;
  return Math.sqrt(variance);
}

function firstThreeWords(text: string): string {
  const words = text
    .replace(/\s+/g, " ")
    .trim()
    .split(/\s+/)
    .slice(0, 3)
    .map((w) => w.toLowerCase().replace(/^[^a-z0-9]+|[^a-z0-9]+$/gi, ""));
  return words.filter(Boolean).join(" ");
}

function checkRepeatedOpeners(
  fileRel: string,
  strings: string[],
): Array<{ opener: string; count: number }> {
  const counts = new Map<string, number>();
  for (const text of strings) {
    const paragraphs = text.split(/\n+/).filter((p) => p.trim().length >= 40);
    for (const para of paragraphs.length ? paragraphs : [text]) {
      const opener = firstThreeWords(para);
      if (opener.split(/\s+/).length >= 3) {
        counts.set(opener, (counts.get(opener) ?? 0) + 1);
      }
    }
  }
  return [...counts.entries()]
    .filter(([, count]) => count > 2)
    .map(([opener, count]) => ({ opener, count }))
    .sort((a, b) => b.count - a.count);
}

function checkRoboticRhythm(
  fileRel: string,
  strings: string[],
): { meanLen: number; std: number } | null {
  const sentences = strings.flatMap(splitSentences);
  if (sentences.length < 4) return null;
  const counts = sentenceWordCounts(sentences);
  const avg = mean(counts);
  const sd = stddev(counts);
  if (avg > 20 && sd < 4) {
    return { meanLen: avg, std: sd };
  }
  return null;
}

async function main() {
  const allBanned: Match[] = [];
  const paragraphMap = new Map<string, Set<string>>();
  const duplicateFailures: Array<{ normalized: string; files: string[] }> = [];
  const rhythmWarnings: Array<{ file: string; meanLen: number; std: number }> =
    [];
  const openerWarnings: Array<{ file: string; opener: string; count: number }> =
    [];
  const wordCounts: Array<{ file: string; words: number }> = [];

  const scanFiles: string[] = [];
  for (const dir of SCAN_DIRS) {
    scanFiles.push(...(await walk(dir)));
  }

  for (const file of scanFiles) {
    if (path.resolve(file) === SELF_PATH) continue;
    const content = await readFile(file, "utf8");
    const rel = path.relative(ROOT, file);

    allBanned.push(...scanBannedWords(file, content));

    const isDuplicateScanTarget =
      rel.startsWith("src/content/") && rel.endsWith(".ts") ||
      (rel.startsWith("src/app/") && rel.endsWith("page.tsx"));

    if (isDuplicateScanTarget) {
      const strings = extractQuotedStrings(content);
      for (const raw of strings) {
        const normalized = normalizeParagraph(raw);
        if (normalized.length < MIN_PARAGRAPH_CHARS) continue;
        if (!paragraphMap.has(normalized)) {
          paragraphMap.set(normalized, new Set());
        }
        paragraphMap.get(normalized)!.add(rel);
      }

      if ((RHYTHM_FILES as readonly string[]).includes(rel)) {
        const rhythm = checkRoboticRhythm(rel, strings);
        if (rhythm) {
          rhythmWarnings.push({ file: rel, ...rhythm });
        }
        for (const { opener, count } of checkRepeatedOpeners(rel, strings)) {
          openerWarnings.push({ file: rel, opener, count });
        }
      }
    }
  }

  for (const [normalized, files] of paragraphMap.entries()) {
    if (files.size >= 2) {
      duplicateFailures.push({
        normalized: normalized.slice(0, 100) + (normalized.length > 100 ? "…" : ""),
        files: [...files].sort(),
      });
    }
  }

  for (const rel of WORD_COUNT_FILES) {
    const full = path.join(ROOT, rel);
    try {
      const content = await readFile(full, "utf8");
      wordCounts.push({ file: rel, words: countWords(content) });
    } catch {
      // file may not exist yet
    }
  }

  let failed = false;

  console.log("=== Copy audit — banned words ===\n");
  if (allBanned.length) {
    failed = true;
    console.error(`Found ${allBanned.length} banned word occurrence(s):\n`);
    for (const m of allBanned) {
      console.error(`  ${m.file}:${m.line}  "${m.term}"`);
      console.error(`    ${m.excerpt}\n`);
    }
  } else {
    console.log("No banned words found in src/content or src/app.\n");
  }

  console.log("=== Copy audit — duplicate paragraphs ===\n");
  if (duplicateFailures.length) {
    failed = true;
    console.error(
      `Found ${duplicateFailures.length} duplicated paragraph(s) across files:\n`,
    );
    for (const dup of duplicateFailures.slice(0, 20)) {
      console.error(`  “${dup.normalized}”`);
      for (const f of dup.files) {
        console.error(`    • ${f}`);
      }
      console.error("");
    }
    if (duplicateFailures.length > 20) {
      console.error(`  … and ${duplicateFailures.length - 20} more\n`);
    }
  } else {
    console.log("No duplicate paragraphs (≥80 chars) across content files.\n");
  }

  console.log("=== Copy audit — word counts ===\n");
  for (const { file, words } of wordCounts) {
    console.log(`  ${file}: ${words.toLocaleString()} words`);
  }
  console.log("");

  console.log("=== Copy audit — rhythm & openers (warnings) ===\n");
  if (rhythmWarnings.length) {
    console.log("Warnings — robotic sentence rhythm (mean > 20 words, stddev < 4):");
    for (const w of rhythmWarnings) {
      console.log(
        `  • ${w.file} — mean ${w.meanLen.toFixed(1)} words, σ ${w.std.toFixed(2)}`,
      );
    }
    console.log("");
  } else {
    console.log("No robotic rhythm warnings.\n");
  }

  if (openerWarnings.length) {
    console.log("Warnings — repeated paragraph openers (>2× same first 3 words):");
    for (const w of openerWarnings.slice(0, 15)) {
      console.log(`  • ${w.file} — “${w.opener}…” (${w.count}×)`);
    }
    console.log("");
  } else {
    console.log("No repeated opener warnings.\n");
  }

  console.log("=== Summary ===");
  if (failed) {
    console.error("FAIL — banned words and/or duplicate paragraphs found.");
    process.exit(1);
  }
  console.log("PASS — no banned words or duplicate paragraphs.");
  if (rhythmWarnings.length || openerWarnings.length) {
    console.log(
      `${rhythmWarnings.length} rhythm warning(s), ${openerWarnings.length} opener warning(s) (non-fatal).`,
    );
  }
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
