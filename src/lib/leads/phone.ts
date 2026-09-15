/**
 * Phone normalisation to E.164 so WhatsApp links and CRM records agree.
 * Falls back to the raw string rather than rejecting — a slightly odd number
 * the sales team can still read beats a lost enquiry.
 */
import { getCountryCallingCode, parsePhoneNumberFromString } from "libphonenumber-js";
import type { CountryCode } from "libphonenumber-js";

/** Country name (as used in the form) → ISO 3166-1 alpha-2 dialling region. */
const COUNTRY_TO_REGION: Record<string, CountryCode> = {
  Kenya: "KE",
  Tanzania: "TZ",
  Uganda: "UG",
  Rwanda: "RW",
  Ghana: "GH",
  Zambia: "ZM",
  Mozambique: "MZ",
  Namibia: "NA",
  Botswana: "BW",
  Angola: "AO",
  Ethiopia: "ET",
  Nigeria: "NG",
  "South Africa": "ZA",
  Zimbabwe: "ZW",
  Mauritius: "MU",
  "Democratic Republic of the Congo": "CD",
  India: "IN",
};

export function regionForCountry(country: string | undefined): CountryCode | undefined {
  if (!country) return undefined;
  return COUNTRY_TO_REGION[country.trim()];
}

export function normalizePhone(
  phone: string,
  country?: string,
): { e164: string; valid: boolean } {
  const raw = phone.trim();
  if (!raw) return { e164: "", valid: false };

  const region = regionForCountry(country);
  const parsed = parsePhoneNumberFromString(raw, region);

  if (parsed?.isValid()) {
    return { e164: parsed.number, valid: true };
  }

  // Try again without a region for numbers already typed with a + prefix.
  if (!raw.startsWith("+")) {
    const withPlus = parsePhoneNumberFromString(`+${raw.replace(/[^\d]/g, "")}`);
    if (withPlus?.isValid()) {
      return { e164: withPlus.number, valid: true };
    }
  }

  return { e164: raw, valid: false };
}

/** "+254" for Kenya. Used as a form hint, not to rewrite what the buyer typed. */
export function dialCodeForCountry(country: string | undefined): string | null {
  const region = regionForCountry(country);
  if (!region) return null;
  try {
    return `+${getCountryCallingCode(region)}`;
  } catch {
    return null;
  }
}

/** Digits only, for wa.me links. */
export function toWhatsAppDigits(phoneE164: string): string {
  return phoneE164.replace(/[^\d]/g, "");
}
