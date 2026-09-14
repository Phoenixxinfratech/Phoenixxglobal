/**
 * Single source of truth for company facts.
 * Every component, schema, metadata and page reads from here.
 * Never hardcode these values in JSX.
 *
 * Values marked "[CONFIRM]" or "VERIFY_REQUIRED" must not render in the UI.
 * See src/lib/confirmed.ts and docs/OPEN-ITEMS.md.
 */
export const site = {
  legalName: "NXT Phoenixx SmartBuild LLP",
  brand: "PHOENIXX SMARTBUILD",
  brandShort: "PHOENIXX",
  domain: "https://phoenixxglobal.com",
  tagline:
    "Africa's trusted engineering and export partner for industrial building solutions",
  foundedYear: "[CONFIRM]",
  entityType: "LLP",

  contact: {
    salesEmail: "[CONFIRM]",
    exportEmail: "[CONFIRM]",
    phonePrimary: "[CONFIRM]",
    whatsapp: "[CONFIRM]",
    workingHours: "Mon–Sat, 9:30 AM – 6:30 PM IST",
  },

  address: {
    line1: "[CONFIRM]",
    city: "Ahmedabad",
    state: "Gujarat",
    postalCode: "[CONFIRM]",
    country: "India",
    countryCode: "IN",
    mapsUrl: "[CONFIRM]",
    geo: { lat: "[CONFIRM]", lng: "[CONFIRM]" },
  },

  registrations: {
    gstin: "[CONFIRM]",
    llpin: "[CONFIRM]",
    iec: "[CONFIRM]",
    udyam: "[CONFIRM]",
  },

  social: {
    linkedin: "[CONFIRM]",
    youtube: "[CONFIRM]",
    instagram: "[CONFIRM]",
    facebook: "[CONFIRM]",
    indiamart: "[CONFIRM]",
  },

  claims: {
    manufacturingCapacity: "VERIFY_REQUIRED",
    plantLocation: "VERIFY_REQUIRED",
    certifications: [] as readonly string[],
    exportCountries: [] as readonly string[],
    yearsInBusiness: "VERIFY_REQUIRED",
    installedArea: "VERIFY_REQUIRED",
  },
} as const;

export type SiteConfig = typeof site;
