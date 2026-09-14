import type { City, Country } from "@/content/types";

const MIN_DATA_POINTS = 12;
const MIN_FAQS = 6;
const MIN_WORD_COUNT = 900;

function countWords(text: string | undefined): number {
  if (!text?.trim()) return 0;
  return (text.match(/[A-Za-z0-9'’-]+/g) ?? []).length;
}

function sumWordCounts(fields: Array<string | undefined>): number {
  return fields.reduce((sum, field) => sum + countWords(field), 0);
}

function countArrayItems(arrays: string[][]): number {
  return arrays.reduce((sum, arr) => sum + arr.length, 0);
}

function countNonEmptyStrings(fields: Array<string | undefined>): number {
  return fields.filter((f) => f?.trim()).length;
}

/** Count structured data points on a country entity (arrays, text fields, FAQs). */
export function countCountryDataPoints(c: Country): number {
  let points = countArrayItems([
    c.portsOfEntry,
    c.majorCities,
    c.industrialZones,
    c.demandDrivers,
    c.demandSectors,
    c.keyPorts,
    c.inlandRoutes,
    c.typicalProjectTypes,
    c.researchSources,
    c.relevantProducts,
    c.relevantIndustries,
  ]);

  points += countNonEmptyStrings([
    c.climateNotes,
    c.temperatureRange,
    c.logisticsNotes,
    c.documentationNotes,
    c.importConsiderations,
    c.localInstallationNotes,
    c.quickAnswer,
    c.marketContext,
    c.specificationNotes,
    c.holdingCopy,
  ]);

  if (c.coastal !== undefined) points += 1;
  points += c.faqs.length;

  return points;
}

/** Count structured data points on a city entity. */
export function countCityDataPoints(c: City): number {
  let points = countArrayItems([
    c.industrialEstates,
    c.localIndustries,
    c.projectProfiles,
    c.relevantProducts,
    c.relevantIndustries,
  ]);

  points += countNonEmptyStrings([
    c.nearestPort,
    c.roadAccessNotes,
    c.specificationNotes,
    c.quickAnswer,
    c.marketContext,
    c.climateNotes,
    c.portRelevance,
    c.holdingCopy,
  ]);

  points += c.faqs.length;

  return points;
}

function countryTextWordCount(c: Country): number {
  const fieldWords = sumWordCounts([
    c.quickAnswer,
    c.marketContext,
    c.specificationNotes,
    c.logisticsNotes,
    c.documentationNotes,
    c.importConsiderations,
    c.localInstallationNotes,
  ]);
  const faqWords = c.faqs.reduce((sum, faq) => sum + countWords(faq.answer), 0);
  return fieldWords + faqWords;
}

function cityTextWordCount(c: City): number {
  const fieldWords = sumWordCounts([
    c.quickAnswer,
    c.marketContext,
    c.specificationNotes,
    c.roadAccessNotes,
    c.climateNotes,
    c.portRelevance,
  ]);
  const faqWords = c.faqs.reduce((sum, faq) => sum + countWords(faq.answer), 0);
  return fieldWords + faqWords;
}

function hasRequiredCopyFields(
  quickAnswer: string | undefined,
  marketContext: string | undefined,
  specificationNotes: string | undefined,
  faqs: { question: string; answer: string }[],
): boolean {
  return (
    Boolean(quickAnswer?.trim()) &&
    Boolean(marketContext?.trim()) &&
    Boolean(specificationNotes?.trim()) &&
    faqs.length >= MIN_FAQS
  );
}

/**
 * Whether a country page is ready for indexation.
 * Single source of truth for templates and sitemap filters.
 */
export function isPublishableCountry(c: Country): boolean {
  if (c.draft) return false;
  if (countCountryDataPoints(c) < MIN_DATA_POINTS) return false;
  if (c.relevantProducts.length < 1) return false;
  if (
    !hasRequiredCopyFields(
      c.quickAnswer,
      c.marketContext,
      c.specificationNotes,
      c.faqs,
    )
  ) {
    return false;
  }
  if (countryTextWordCount(c) < MIN_WORD_COUNT) return false;
  return true;
}

/** Whether a city page is ready for indexation. */
export function isPublishableCity(c: City): boolean {
  if (c.draft) return false;
  if (countCityDataPoints(c) < MIN_DATA_POINTS) return false;
  if (c.relevantProducts.length < 1) return false;
  if (
    !hasRequiredCopyFields(
      c.quickAnswer,
      c.marketContext,
      c.specificationNotes,
      c.faqs,
    )
  ) {
    return false;
  }
  if (cityTextWordCount(c) < MIN_WORD_COUNT) return false;
  return true;
}
