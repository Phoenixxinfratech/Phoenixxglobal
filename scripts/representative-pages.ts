/** Eight templates used for a11y and performance audits (Phase 4 Section 11 / 14). */
export const REPRESENTATIVE_PAGES = [
  { name: "home", path: "/" },
  { name: "product", path: "/products/puf-panels/" },
  { name: "solution", path: "/solutions/cold-storage/" },
  { name: "country", path: "/export/kenya/" },
  { name: "city", path: "/export/kenya/nairobi/" },
  { name: "guide", path: "/resources/guides/cold-storage-panel-thickness/" },
  { name: "comparison", path: "/resources/comparisons/puf-vs-pir-panels/" },
  { name: "selection-tool", path: "/resources/panel-selection/" },
] as const;
