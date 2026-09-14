import { site } from "@/config/site";

export const seo = {
  siteName: site.brand,
  defaultTitle: `${site.brand} | Insulated Panels & PEB Export from India`,
  titleTemplate: `%s | ${site.brand}`,
  defaultDescription:
    "Insulated sandwich panels and pre-engineered buildings manufactured in Ahmedabad, India — engineered for cold storage, warehouses and industrial plants across Africa and beyond.",
  locale: "en_IN",
  twitterHandle: "",
  hreflang: ["en", "x-default"] as const,
} as const;
