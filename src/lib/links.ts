import {
  getAllComparisons,
  getAllCountries,
  getAllProducts,
  getAllSolutions,
  getProduct,
  getSolution,
  getCountry,
  getComparison,
  getGuide,
  getApplication,
  getCity,
  getGlossaryTerm,
} from "@/content";
import type { Product } from "@/content/types";
import { withTrailingSlash } from "@/lib/slug";

export const routes = {
  home: "/",
  about: "/about/",
  contact: "/contact/",
  requestQuote: "/request-a-quote/",
  products: "/products/",
  product: (slug: string) => `/products/${slug}/`,
  solutions: "/solutions/",
  solution: (slug: string) => `/solutions/${slug}/`,
  export: "/export/",
  exportAfrica: "/export/africa/",
  exportCountry: (slug: string) => `/export/${slug}/`,
  exportProcess: "/export/process/",
  exportDocumentation: "/export/documentation/",
  exportPackaging: "/export/packaging-and-container-loading/",
  exportIncoterms: "/export/incoterms-and-payment-terms/",
  exportLeadTime: "/export/lead-time-and-freight/",
  resources: "/resources/",
  guides: "/resources/guides/",
  guide: (slug: string) => `/resources/guides/${slug}/`,
  comparisons: "/resources/comparisons/",
  comparison: (slug: string) => `/resources/comparisons/${slug}/`,
  panelSelection: "/resources/panel-selection/",
  datasheets: "/resources/datasheets/",
  faqs: "/resources/faqs/",
  glossary: "/resources/glossary/",
  glossaryTerm: (slug: string) => `/resources/glossary/${slug}/`,
  blog: "/blog/",
  blogPost: (slug: string) => `/blog/${slug}/`,
  manufacturing: "/manufacturing/",
  qualityAndTesting: "/quality-and-testing/",
  projects: "/projects/",
  careers: "/careers/",
  privacy: "/privacy-policy/",
  terms: "/terms/",
  applications: "/applications/",
  application: (slug: string) => `/applications/${slug}/`,
  cities: "/cities/",
  city: (slug: string) => `/cities/${slug}/`,
} as const;

export type RelatedLink = {
  slug: string;
  name: string;
  href: string;
};

export type RelatedContentBundle = {
  products: RelatedLink[];
  solutions: RelatedLink[];
  guides: RelatedLink[];
  exports: RelatedLink[];
};

function toProductLink(slug: string): RelatedLink | undefined {
  const product = getProduct(slug);
  if (!product) return undefined;
  return { slug: product.slug, name: product.name, href: routes.product(product.slug) };
}

function toSolutionLink(slug: string): RelatedLink | undefined {
  const solution = getSolution(slug);
  if (!solution) return undefined;
  return { slug: solution.slug, name: solution.name, href: routes.solution(solution.slug) };
}

function toComparisonLink(slug: string): RelatedLink | undefined {
  const comparison = getAllComparisons().find((item) => item.slug === slug);
  if (!comparison) return undefined;
  return {
    slug: comparison.slug,
    name: comparison.name,
    href: routes.comparison(comparison.slug),
  };
}

export function requestQuoteUrl(options?: {
  product?: string;
  variant?: "quote" | "datasheet" | "consultation" | "contact";
}): string {
  const params = new URLSearchParams();
  if (options?.product) params.set("product", options.product);
  if (options?.variant) params.set("variant", options.variant);
  const query = params.toString();
  return query ? `${routes.requestQuote}?${query}` : routes.requestQuote;
}

export function whatsAppUrl(message: string, phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  const withoutQuery = path.split("?")[0]?.split("#")[0] ?? path;
  return withTrailingSlash(withoutQuery);
}

function extractSlug(path: string, prefix: string): string | null {
  const normalized = normalizePath(path);
  if (!normalized.startsWith(prefix)) return null;
  const slug = normalized.slice(prefix.length).replace(/\/$/, "");
  return slug || null;
}

export function isDraftPath(path: string): boolean {
  const normalized = normalizePath(path);

  const productSlug = extractSlug(normalized, "/products/");
  if (productSlug) return getProduct(productSlug)?.draft ?? false;

  const solutionSlug = extractSlug(normalized, "/solutions/");
  if (solutionSlug) return getSolution(solutionSlug)?.draft ?? false;

  const exportSlug = extractSlug(normalized, "/export/");
  const exportSupportSlugs = new Set([
    "africa",
    "process",
    "documentation",
    "packaging-and-container-loading",
    "incoterms-and-payment-terms",
    "lead-time-and-freight",
  ]);
  if (exportSlug && !exportSupportSlugs.has(exportSlug)) {
    return getCountry(exportSlug)?.draft ?? false;
  }

  const comparisonSlug = extractSlug(normalized, "/resources/comparisons/");
  if (comparisonSlug) return getComparison(comparisonSlug)?.draft ?? false;

  const guideSlug = extractSlug(normalized, "/resources/guides/");
  if (guideSlug) return getGuide(guideSlug)?.draft ?? false;

  const applicationSlug = extractSlug(normalized, "/applications/");
  if (applicationSlug) return getApplication(applicationSlug)?.draft ?? false;

  const citySlug = extractSlug(normalized, "/cities/");
  if (citySlug) return getCity(citySlug)?.draft ?? false;

  const glossarySlug = extractSlug(normalized, "/resources/glossary/");
  if (glossarySlug) return getGlossaryTerm(glossarySlug)?.draft ?? false;

  return false;
}

export function getRelatedForProduct(slug: string): RelatedContentBundle {
  const product = getProduct(slug);
  if (!product) {
    return { products: [], solutions: [], guides: [], exports: [] };
  }

  const products = product.relatedProducts
    .map(toProductLink)
    .filter((link): link is RelatedLink => Boolean(link));

  const solutions = product.industries
    .map(toSolutionLink)
    .filter((link): link is RelatedLink => Boolean(link));

  const guides = product.comparisons
    .map(toComparisonLink)
    .filter((link): link is RelatedLink => Boolean(link));

  const exports = getAllCountries()
    .filter((country) => country.relevantProducts.includes(slug))
    .map((country) => ({
      slug: country.slug,
      name: country.name,
      href: routes.exportCountry(country.slug),
    }));

  return { products, solutions, guides, exports };
}

export function getRelatedForSolution(slug: string): RelatedContentBundle {
  const solution = getSolution(slug);
  if (!solution) {
    return { products: [], solutions: [], guides: [], exports: [] };
  }

  const products = solution.relevantProducts
    .map(toProductLink)
    .filter((link): link is RelatedLink => Boolean(link));

  const solutions = getAllSolutions()
    .filter((item) => item.slug !== slug && item.applications.some((app) => solution.applications.includes(app)))
    .slice(0, 4)
    .map((item) => ({
      slug: item.slug,
      name: item.name,
      href: routes.solution(item.slug),
    }));

  const guides = solution.comparisons
    .map(toComparisonLink)
    .filter((link): link is RelatedLink => Boolean(link));

  const exports = getAllCountries()
    .filter((country) => country.relevantIndustries.includes(slug))
    .map((country) => ({
      slug: country.slug,
      name: country.name,
      href: routes.exportCountry(country.slug),
    }));

  return { products, solutions, guides, exports };
}

export function getProductOptions(): Pick<Product, "slug" | "name">[] {
  return getAllProducts().map((product) => ({
    slug: product.slug,
    name: product.name,
  }));
}
