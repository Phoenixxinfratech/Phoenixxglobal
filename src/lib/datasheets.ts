import { readdirSync } from "node:fs";
import path from "node:path";
import { products } from "@/content";

const DOCUMENTS_DIR = path.join(process.cwd(), "public", "documents");

export type DatasheetEntry = {
  slug: string;
  name: string;
  href: string;
  exists: boolean;
};

/** List datasheet files that physically exist under public/documents/. */
export function getAvailableDatasheets(): DatasheetEntry[] {
  let filesOnDisk = new Set<string>();
  try {
    filesOnDisk = new Set(readdirSync(DOCUMENTS_DIR));
  } catch {
    filesOnDisk = new Set();
  }

  const entries: DatasheetEntry[] = [];

  for (const product of products) {
    if (!product.datasheet) continue;
    const filename = product.datasheet.replace(/^\//, "").split("/").pop() ?? "";
    const exists = filesOnDisk.has(filename);
    if (exists) {
      entries.push({
        slug: product.slug,
        name: `${product.name} datasheet`,
        href: product.datasheet,
        exists: true,
      });
    }
  }

  for (const file of filesOnDisk) {
    if (!file.endsWith(".pdf")) continue;
    const already = entries.some((entry) => entry.href.endsWith(file));
    if (!already) {
      entries.push({
        slug: file.replace(/\.pdf$/i, ""),
        name: file,
        href: `/documents/${file}`,
        exists: true,
      });
    }
  }

  return entries.sort((a, b) => a.name.localeCompare(b.name));
}

/** Product slugs referenced in content but missing PDF on disk — for OPEN-ITEMS logging. */
export function getMissingDatasheetProducts(): string[] {
  let filesOnDisk = new Set<string>();
  try {
    filesOnDisk = new Set(readdirSync(DOCUMENTS_DIR));
  } catch {
    return products.filter((p) => p.datasheet).map((p) => p.slug);
  }

  return products
    .filter((product) => {
      if (!product.datasheet) return false;
      const filename = product.datasheet.replace(/^\//, "").split("/").pop() ?? "";
      return !filesOnDisk.has(filename);
    })
    .map((product) => product.slug);
}
