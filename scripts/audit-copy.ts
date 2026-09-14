/**
 * Scans src/content and src/app for banned marketing filler words.
 * Exit 1 if any match is found.
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

function scanFile(filePath: string, content: string): Match[] {
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

async function main() {
  const allMatches: Match[] = [];

  for (const dir of SCAN_DIRS) {
    const files = await walk(dir);
    for (const file of files) {
      if (path.resolve(file) === SELF_PATH) continue;
      const content = await readFile(file, "utf8");
      allMatches.push(...scanFile(file, content));
    }
  }

  console.log("=== Copy audit — banned words ===\n");

  if (!allMatches.length) {
    console.log("No banned words found in src/content or src/app.");
    process.exit(0);
  }

  console.error(`Found ${allMatches.length} banned word occurrence(s):\n`);
  for (const m of allMatches) {
    console.error(`  ${m.file}:${m.line}  "${m.term}"`);
    console.error(`    ${m.excerpt}\n`);
  }

  process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
