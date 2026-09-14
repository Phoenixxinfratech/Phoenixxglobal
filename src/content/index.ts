import { applications } from "./applications";
import { certifications } from "./certifications";
import { cities } from "./cities";
import { comparisons } from "./comparisons";
import { countries } from "./countries";
import { sharedFaqs } from "./faqs";
import { glossaryTerms } from "./glossary";
import { industrialZones } from "./industrialZones";
import { products } from "./products";
import { solutions } from "./solutions";
import {
  ApplicationSchema,
  CertificationSchema,
  CitySchema,
  ComparisonSchema,
  CountrySchema,
  FaqItemSchema,
  GlossaryTermSchema,
  IndustrialZoneSchema,
  ProductSchema,
  SolutionSchema,
} from "./types";
import type {
  Application,
  Certification,
  City,
  Comparison,
  Country,
  FaqItem,
  GlossaryTerm,
  IndustrialZone,
  Product,
  Solution,
} from "./types";

function validateContent<T>(
  label: string,
  items: T[],
  schema: { parse: (item: T) => T },
): T[] {
  return items.map((item, index) => {
    try {
      return schema.parse(item);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : String(error);
      throw new Error(
        `Content validation failed for ${label}[${index}]: ${message}`,
      );
    }
  });
}

const validatedProducts = validateContent("products", products, ProductSchema);
const validatedSolutions = validateContent("solutions", solutions, SolutionSchema);
const validatedApplications = validateContent(
  "applications",
  applications,
  ApplicationSchema,
);
const validatedCountries = validateContent("countries", countries, CountrySchema);
const validatedCities = validateContent("cities", cities, CitySchema);
const validatedIndustrialZones = validateContent(
  "industrialZones",
  industrialZones,
  IndustrialZoneSchema,
);
const validatedComparisons = validateContent(
  "comparisons",
  comparisons,
  ComparisonSchema,
);
const validatedCertifications = validateContent(
  "certifications",
  certifications,
  CertificationSchema,
);
const validatedGlossaryTerms = validateContent(
  "glossaryTerms",
  glossaryTerms,
  GlossaryTermSchema,
);
const validatedSharedFaqs = validateContent("sharedFaqs", sharedFaqs, FaqItemSchema);

function assertUniqueSlugs<T extends { slug: string }>(
  label: string,
  items: T[],
): void {
  const seen = new Set<string>();
  for (const item of items) {
    if (seen.has(item.slug)) {
      throw new Error(`Duplicate slug in ${label}: "${item.slug}"`);
    }
    seen.add(item.slug);
  }
}

assertUniqueSlugs("products", validatedProducts);
assertUniqueSlugs("solutions", validatedSolutions);
assertUniqueSlugs("applications", validatedApplications);
assertUniqueSlugs("countries", validatedCountries);
assertUniqueSlugs("cities", validatedCities);
assertUniqueSlugs("industrialZones", validatedIndustrialZones);
assertUniqueSlugs("comparisons", validatedComparisons);
assertUniqueSlugs("glossaryTerms", validatedGlossaryTerms);

const productSlugs = new Set(validatedProducts.map((p) => p.slug));
const solutionSlugs = new Set(validatedSolutions.map((s) => s.slug));
const applicationSlugs = new Set(validatedApplications.map((a) => a.slug));
const countrySlugs = new Set(validatedCountries.map((c) => c.slug));
const citySlugs = new Set(validatedCities.map((c) => c.slug));

function assertSlugsExist(
  source: string,
  field: string,
  slugs: string[],
  validSet: Set<string>,
): void {
  for (const slug of slugs) {
    if (!validSet.has(slug)) {
      throw new Error(
        `Cross-reference error in ${source}.${field}: unknown slug "${slug}"`,
      );
    }
  }
}

for (const product of validatedProducts) {
  assertSlugsExist(product.slug, "relatedProducts", product.relatedProducts, productSlugs);
  assertSlugsExist(product.slug, "comparisons", product.comparisons, new Set(validatedComparisons.map((c) => c.slug)));
  assertSlugsExist(product.slug, "applications", product.applications, applicationSlugs);
  assertSlugsExist(product.slug, "industries", product.industries, solutionSlugs);
}

for (const solution of validatedSolutions) {
  assertSlugsExist(solution.slug, "relevantProducts", solution.relevantProducts, productSlugs);
  assertSlugsExist(solution.slug, "applications", solution.applications, applicationSlugs);
  assertSlugsExist(solution.slug, "comparisons", solution.comparisons, new Set(validatedComparisons.map((c) => c.slug)));
}

for (const comparison of validatedComparisons) {
  assertSlugsExist(comparison.slug, "productA", [comparison.productA], productSlugs);
  assertSlugsExist(comparison.slug, "productB", [comparison.productB], productSlugs);
}

for (const city of validatedCities) {
  assertSlugsExist(city.slug, "countrySlug", [city.countrySlug], countrySlugs);
}

for (const zone of validatedIndustrialZones) {
  assertSlugsExist(zone.slug, "countrySlug", [zone.countrySlug], countrySlugs);
  if (zone.citySlug) {
    assertSlugsExist(zone.slug, "citySlug", [zone.citySlug], citySlugs);
  }
}

for (const country of validatedCountries) {
  assertSlugsExist(country.slug, "majorCities", country.majorCities, citySlugs);
  assertSlugsExist(country.slug, "relevantProducts", country.relevantProducts, productSlugs);
  assertSlugsExist(country.slug, "relevantIndustries", country.relevantIndustries, solutionSlugs);
  assertSlugsExist(country.slug, "industrialZones", country.industrialZones, new Set(validatedIndustrialZones.map((z) => z.slug)));
}

for (const application of validatedApplications) {
  assertSlugsExist(application.slug, "relatedProducts", application.relatedProducts, productSlugs);
  assertSlugsExist(application.slug, "relatedSolutions", application.relatedSolutions, solutionSlugs);
}

for (const term of validatedGlossaryTerms) {
  assertSlugsExist(term.slug, "relatedProducts", term.relatedProducts, productSlugs);
}

for (const city of validatedCities) {
  assertSlugsExist(city.slug, "relevantProducts", city.relevantProducts, productSlugs);
  assertSlugsExist(city.slug, "relevantIndustries", city.relevantIndustries, solutionSlugs);
}

// ── Getters ──

export function getProduct(slug: string): Product | undefined {
  return validatedProducts.find((p) => p.slug === slug);
}

export function getSolution(slug: string): Solution | undefined {
  return validatedSolutions.find((s) => s.slug === slug);
}

export function getCountry(slug: string): Country | undefined {
  return validatedCountries.find((c) => c.slug === slug);
}

export function getCity(slug: string): City | undefined {
  return validatedCities.find((c) => c.slug === slug);
}

export function getApplication(slug: string): Application | undefined {
  return validatedApplications.find((a) => a.slug === slug);
}

export function getComparison(slug: string): Comparison | undefined {
  return validatedComparisons.find((c) => c.slug === slug);
}

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return validatedGlossaryTerms.find((t) => t.slug === slug);
}

export function getAllProducts(): Product[] {
  return validatedProducts;
}

export function getLiveProducts(): Product[] {
  return validatedProducts.filter((p) => !p.draft);
}

export function getAllSolutions(): Solution[] {
  return validatedSolutions;
}

export function getLiveSolutions(): Solution[] {
  return validatedSolutions.filter((s) => !s.draft);
}

export function getAllCountries(): Country[] {
  return validatedCountries;
}

export function getLiveCountries(): Country[] {
  return validatedCountries.filter((c) => !c.draft);
}

export function getAllCities(): City[] {
  return validatedCities;
}

export function getLiveCities(): City[] {
  return validatedCities.filter((c) => !c.draft);
}

export function getAllApplications(): Application[] {
  return validatedApplications;
}

export function getAllComparisons(): Comparison[] {
  return validatedComparisons;
}

export function getAllIndustrialZones(): IndustrialZone[] {
  return validatedIndustrialZones;
}

export function getAllCertifications(): Certification[] {
  return validatedCertifications;
}

export function getAllGlossaryTerms(): GlossaryTerm[] {
  return validatedGlossaryTerms;
}

export function getSharedFaqs(): FaqItem[] {
  return validatedSharedFaqs;
}

export {
  validatedProducts as products,
  validatedSolutions as solutions,
  validatedApplications as applications,
  validatedCountries as countries,
  validatedCities as cities,
  validatedIndustrialZones as industrialZones,
  validatedComparisons as comparisons,
  validatedCertifications as certifications,
  validatedGlossaryTerms as glossaryTerms,
  validatedSharedFaqs as sharedFaqs,
};
