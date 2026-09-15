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
  /** Market / domain descriptors only — not used in nav or logo. */
  alternateNames: [
    "PHOENIXX SMARTBUILD GLOBAL",
    "PHOENIXX GLOBAL",
  ] as readonly string[],
  domain: "https://phoenixxglobal.com",
  tagline:
    "Africa's trusted engineering and export partner for industrial building solutions",
  /** 55-word entity description for schema / AI consistency. */
  canonicalDescription:
    "PHOENIXX SMARTBUILD manufactures insulated sandwich panels and pre-engineered building systems in Ahmedabad, India. We supply PUF, PIR and Rockwool panels, cold room systems, industrial doors and PEB structures to project buyers in Africa and other export markets. Enquiries include technical specification support, export documentation and container-ready packing from our Gujarat plant.",
  foundedYear: "[CONFIRM]",
  entityType: "LLP",

  contact: {
    salesEmail: "info@phoenixxsmartbuild.com",
    exportEmail: "info@phoenixxsmartbuild.com",
    /** Same number for voice call and WhatsApp. Do not print the email in the UI. */
    phonePrimary: "+91 8866556879",
    whatsapp: "+91 8866556879",
    /** Email is for forms and auto-replies only — not a public contact method. */
    publishEmail: false,
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
