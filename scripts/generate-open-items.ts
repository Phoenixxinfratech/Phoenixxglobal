/**
 * Regenerates docs/OPEN-ITEMS.md sentinel rows from site config.
 * Owner and Category columns are included for client handoff.
 * Legal and Assets sections are appended manually in the doc — re-merge after running.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { site } from "../src/config/site";
import { collectUnconfirmed } from "../src/lib/confirmed";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUTPUT = path.join(ROOT, "docs/OPEN-ITEMS.md");

type Category =
  | "Contact"
  | "Registrations"
  | "Social"
  | "Claims"
  | "Legal"
  | "Assets";

type Row = {
  path: string;
  value: string;
  category: Category;
  owner: string;
  notes: string;
};

function categoryForPath(fieldPath: string): Category {
  if (fieldPath.startsWith("contact.") || fieldPath.startsWith("address.") || fieldPath === "foundedYear") {
    return "Contact";
  }
  if (fieldPath.startsWith("registrations.")) return "Registrations";
  if (fieldPath.startsWith("social.")) return "Social";
  if (fieldPath.startsWith("claims.")) return "Claims";
  return "Contact";
}

function buildRows(): Row[] {
  const rows: Row[] = collectUnconfirmed(site).map(({ path: fieldPath, value }) => ({
    path: fieldPath,
    value,
    category: categoryForPath(fieldPath),
    owner: "Client",
    notes: "Replace sentinel with verified value before rendering in UI",
  }));

  if (site.claims.certifications.length === 0) {
    rows.push({
      path: "claims.certifications",
      value: "(empty array)",
      category: "Claims",
      owner: "Client",
      notes: "Add verified certification names once documents are uploaded",
    });
  }

  if (site.claims.exportCountries.length === 0) {
    rows.push({
      path: "claims.exportCountries",
      value: "(empty array)",
      category: "Claims",
      owner: "Client",
      notes: "Populate with confirmed export destination countries",
    });
  }

  rows.push(
    {
      path: "pages./privacy-policy/",
      value: "draft legal copy",
      category: "Legal",
      owner: "Client",
      notes: "Pending legal review before treating as final",
    },
    {
      path: "pages./terms/",
      value: "draft legal copy",
      category: "Legal",
      owner: "Client",
      notes: "Pending legal review before treating as final",
    },
    {
      path: "assets.logo",
      value: "pending",
      category: "Assets",
      owner: "Client",
      notes: "Final brand logo not yet placed in public/images/icons/",
    },
    {
      path: "assets.photography",
      value: "pending",
      category: "Assets",
      owner: "Client",
      notes: "Product and project photos pending — placeholders in use",
    },
  );

  return rows;
}

function toMarkdown(rows: Row[]): string {
  const generated = new Date().toISOString().slice(0, 10);
  const esc = (s: string) => s.replace(/\|/g, "\\|");

  const intro = [
    "# Open Items",
    "",
    "Items blocking full UI rendering or final publication. **Owner: Client** for all rows unless noted.",
    "",
    "> **Note:** Contact details (email, phone, WhatsApp, address) and the brand logo were promised by the client but not yet provided at build time. Components hide unconfirmed fields via `src/lib/confirmed.ts`; nothing prints `[CONFIRM]` on live pages.",
    "",
    "Regenerate sentinel rows with:",
    "",
    "```bash",
    "npm run audit:open-items",
    "```",
    "",
    "Then merge any new fields into the category sections below.",
    "",
    `**Auto-generated from \`src/config/site.ts\` on ${generated}.**`,
    "",
  ];

  const categories: Category[] = [
    "Contact",
    "Registrations",
    "Social",
    "Claims",
    "Legal",
    "Assets",
  ];

  const sections: string[] = [...intro];

  for (const category of categories) {
    const categoryRows = rows.filter((r) => r.category === category);
    if (!categoryRows.length) continue;

    sections.push(`## ${category}`, "");
    sections.push("| Path | Value | Owner | Notes |");
    sections.push("| --- | --- | --- | --- |");

    for (const row of categoryRows) {
      sections.push(
        `| \`${esc(row.path)}\` | ${esc(row.value)} | ${row.owner} | ${esc(row.notes)} |`,
      );
    }

    sections.push("");
  }

  sections.push(
    "## Engineering follow-up (not client blockers)",
    "",
    "| Item | Owner | Notes |",
    "| --- | --- | --- |",
    "| Product spec verification | Client + Engineering | All seed specs marked `verified: false` until datasheets issued |",
    "| Datasheet PDFs | Client | Link in `product.datasheet` only when file exists in `public/documents/` |",
    "| Guide and comparison content | Engineering | Phase 3 — entities stubbed `draft: true` |",
    "",
  );

  return sections.join("\n");
}

async function main() {
  const rows = buildRows();
  await mkdir(path.dirname(OUTPUT), { recursive: true });
  await writeFile(OUTPUT, toMarkdown(rows), "utf8");
  console.log(`Wrote ${rows.length} open items to ${path.relative(ROOT, OUTPUT)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
