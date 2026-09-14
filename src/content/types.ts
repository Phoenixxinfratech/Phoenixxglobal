import { z } from "zod";

export const SpecRowSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
  unit: z.string().optional(),
  note: z.string().optional(),
  verified: z.boolean(),
});
export type SpecRow = z.infer<typeof SpecRowSchema>;

export const ImageRefSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  caption: z.string().optional(),
  credit: z.string().optional(),
  sourceUrl: z.string().optional(),
  isStock: z.boolean().optional(),
});
export type ImageRef = z.infer<typeof ImageRefSchema>;

export const ThermalPerfSchema = z.object({
  thickness: z.string().min(1),
  uValue: z.string().min(1),
  indicative: z.boolean().default(true),
});
export type ThermalPerf = z.infer<typeof ThermalPerfSchema>;

export const FailurePointSchema = z.object({
  problem: z.string().min(1),
  prevention: z.string().min(1),
});
export type FailurePoint = z.infer<typeof FailurePointSchema>;

export const ProductRationaleSchema = z.object({
  slug: z.string().min(1),
  why: z.string().min(1),
});
export type ProductRationale = z.infer<typeof ProductRationaleSchema>;

export const FaqItemSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});
export type FaqItem = z.infer<typeof FaqItemSchema>;

export const ProductSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  shortName: z.string().min(1),
  category: z.enum(["panel", "door", "structure"]),
  h1: z.string().min(1),
  seoTitle: z.string().min(1).max(70),
  metaDescription: z.string().min(1).max(170),
  summary: z.string().min(1),
  coreOfType: z.string().min(1),
  specs: z.array(SpecRowSchema).default([]),
  thicknessOptions: z.array(z.string()).optional(),
  coverWidth: z.string().optional(),
  facings: z.array(z.string()).optional(),
  jointTypes: z.array(z.string()).optional(),
  finishes: z.array(z.string()).optional(),
  applications: z.array(z.string()).default([]),
  industries: z.array(z.string()).default([]),
  comparisons: z.array(z.string()).default([]),
  relatedProducts: z.array(z.string()).default([]),
  faqs: z.array(FaqItemSchema).default([]),
  exportNotes: z.string().optional(),
  images: z.array(ImageRefSchema).default([]),
  datasheet: z.string().optional(),
  holdingCopy: z.string().optional(),
  quickAnswer: z.string().optional(),
  overview: z.string().optional(),
  construction: z.string().optional(),
  benefits: z.array(z.string()).optional(),
  selectionGuidance: z.string().optional(),
  thermalPerformance: z.array(ThermalPerfSchema).optional(),
  installationNotes: z.string().optional(),
  comparisonNotes: z.string().optional(),
  keySpec: z.string().optional(),
  draft: z.boolean(),
  updatedAt: z.string().optional(),
});
export type Product = z.infer<typeof ProductSchema>;

export const SolutionSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  h1: z.string().min(1),
  seoTitle: z.string().min(1).max(70),
  metaDescription: z.string().min(1).max(170),
  summary: z.string().min(1),
  relevantProducts: z.array(z.string()).default([]),
  applications: z.array(z.string()).default([]),
  comparisons: z.array(z.string()).default([]),
  faqs: z.array(FaqItemSchema).default([]),
  images: z.array(ImageRefSchema).default([]),
  holdingCopy: z.string().optional(),
  quickAnswer: z.string().optional(),
  engineeringRequirement: z.string().optional(),
  recommendedSpec: z.array(SpecRowSchema).optional(),
  failurePoints: z.array(FailurePointSchema).optional(),
  estimatingGuidance: z.string().optional(),
  productRationale: z.array(ProductRationaleSchema).optional(),
  processSteps: z
    .array(
      z.object({
        title: z.string().min(1),
        body: z.string().min(1),
        duration: z.string().optional(),
      }),
    )
    .optional(),
  draft: z.boolean(),
  updatedAt: z.string().optional(),
});
export type Solution = z.infer<typeof SolutionSchema>;

export const ApplicationSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  summary: z.string().optional(),
  relatedProducts: z.array(z.string()).default([]),
  relatedSolutions: z.array(z.string()).default([]),
  draft: z.boolean(),
});
export type Application = z.infer<typeof ApplicationSchema>;

export const CountrySchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  iso2: z.string().length(2),
  region: z.string().min(1),
  h1: z.string().min(1),
  seoTitle: z.string().min(1).max(70),
  metaDescription: z.string().min(1).max(170),
  portsOfEntry: z.array(z.string()).default([]),
  majorCities: z.array(z.string()).default([]),
  industrialZones: z.array(z.string()).default([]),
  demandDrivers: z.array(z.string()).default([]),
  relevantProducts: z.array(z.string()).default([]),
  relevantIndustries: z.array(z.string()).default([]),
  logisticsNotes: z.string().default(""),
  documentationNotes: z.string().default(""),
  faqs: z.array(FaqItemSchema).default([]),
  holdingCopy: z.string().optional(),
  draft: z.boolean(),
  updatedAt: z.string().optional(),
});
export type Country = z.infer<typeof CountrySchema>;

export const CitySchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  countrySlug: z.string().min(1),
  nearestPort: z.string().optional(),
  relevantProducts: z.array(z.string()).default([]),
  relevantIndustries: z.array(z.string()).default([]),
  holdingCopy: z.string().optional(),
  draft: z.boolean(),
  updatedAt: z.string().optional(),
});
export type City = z.infer<typeof CitySchema>;

export const IndustrialZoneSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  countrySlug: z.string().min(1),
  citySlug: z.string().optional(),
  draft: z.boolean(),
});
export type IndustrialZone = z.infer<typeof IndustrialZoneSchema>;

export const ComparisonSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  h1: z.string().min(1),
  seoTitle: z.string().min(1).max(70),
  metaDescription: z.string().min(1).max(170),
  productA: z.string().min(1),
  productB: z.string().min(1),
  summary: z.string().optional(),
  holdingCopy: z.string().optional(),
  draft: z.boolean(),
  updatedAt: z.string().optional(),
});
export type Comparison = z.infer<typeof ComparisonSchema>;

export const GuideSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  h1: z.string().min(1),
  seoTitle: z.string().min(1).max(70),
  metaDescription: z.string().min(1).max(170),
  relatedProducts: z.array(z.string()).default([]),
  relatedSolutions: z.array(z.string()).default([]),
  relatedComparisons: z.array(z.string()).default([]),
  holdingCopy: z.string().optional(),
  draft: z.boolean(),
  updatedAt: z.string().optional(),
});
export type Guide = z.infer<typeof GuideSchema>;

export const CertificationSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  issuer: z.string().optional(),
  documentPath: z.string().optional(),
  verified: z.boolean(),
  draft: z.boolean(),
});
export type Certification = z.infer<typeof CertificationSchema>;

export const GlossaryTermSchema = z.object({
  slug: z.string().min(1),
  term: z.string().min(1),
  definition: z.string().min(1),
  relatedProducts: z.array(z.string()).default([]),
  draft: z.boolean(),
});
export type GlossaryTerm = z.infer<typeof GlossaryTermSchema>;

export const NavItemSchema = z.object({
  label: z.string(),
  href: z.string(),
  description: z.string().optional(),
  children: z
    .array(
      z.object({
        label: z.string(),
        href: z.string(),
        description: z.string().optional(),
      }),
    )
    .optional(),
});
export type NavItem = z.infer<typeof NavItemSchema>;

export const PageMetaSchema = z.object({
  path: z.string(),
  title: z.string(),
  description: z.string(),
  h1: z.string(),
  holdingCopy: z.string(),
  draft: z.boolean(),
  section: z.enum([
    "core",
    "products",
    "solutions",
    "export",
    "resources",
    "blog",
    "legal",
  ]),
  updatedAt: z.string().optional(),
});
export type PageMeta = z.infer<typeof PageMetaSchema>;
