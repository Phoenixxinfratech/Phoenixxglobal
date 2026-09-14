import { products } from "./products";
import { solutions } from "./solutions";
import { countries } from "./countries";

export type FooterLink = { label: string; href: string };

export const footerCompanyDescription =
  "PHOENIXX SMARTBUILD manufactures insulated sandwich panels and pre-engineered building systems in Ahmedabad, India. We supply PUF, PIR and Rockwool panels, industrial doors and PEB structures to project buyers across Africa and other export markets.";

export const footerPopularSearches: FooterLink[] = [
  { label: "PUF panel technical specs", href: "/products/puf-panels/" },
  { label: "PIR panels for industrial walls", href: "/products/pir-panels/" },
  {
    label: "Panel thickness for cold storage at −25 °C",
    href: "/solutions/cold-storage/",
  },
  { label: "Export panels to Kenya", href: "/export/kenya/" },
  { label: "Sandwich panel FAQs", href: "/resources/faqs/" },
  { label: "Panel glossary — U-value and cam-lock", href: "/resources/glossary/" },
  { label: "Request a panel quotation", href: "/request-a-quote/" },
  { label: "Contact export team", href: "/contact/" },
  { label: "Cold storage building solutions", href: "/solutions/cold-storage/" },
  { label: "All insulated panel products", href: "/products/" },
  { label: "Industry solutions hub", href: "/solutions/" },
  { label: "Export from India hub", href: "/export/" },
  { label: "Privacy policy", href: "/privacy-policy/" },
  { label: "HTML site map", href: "/sitemap/" },
];

export function getFooterData() {
  const productLinks: FooterLink[] = products.map((p) => ({
    label: p.shortName || p.name,
    href: `/products/${p.slug}/`,
  }));

  const solutionLinks: FooterLink[] = solutions.map((s) => ({
    label: s.name,
    href: `/solutions/${s.slug}/`,
  }));

  const countryLinks: FooterLink[] = [
    { label: "Export Home", href: "/export/" },
    { label: "Africa", href: "/export/africa/" },
    ...countries.map((c) => ({
      label: c.name,
      href: `/export/${c.slug}/`,
    })),
    { label: "Export Process", href: "/export/process/" },
    { label: "Shipping & Documentation", href: "/export/documentation/" },
    { label: "Packaging & Loading", href: "/export/packaging-and-container-loading/" },
    { label: "Incoterms & Payment", href: "/export/incoterms-and-payment-terms/" },
    { label: "Lead Time & Freight", href: "/export/lead-time-and-freight/" },
  ];

  const resourceLinks: FooterLink[] = [
    { label: "Technical Guides", href: "/resources/guides/" },
    { label: "Comparisons", href: "/resources/comparisons/" },
    { label: "FAQs", href: "/resources/faqs/" },
    { label: "Datasheets", href: "/resources/datasheets/" },
    { label: "Glossary", href: "/resources/glossary/" },
    { label: "About", href: "/about/" },
    { label: "Projects", href: "/projects/" },
    { label: "Careers", href: "/careers/" },
    { label: "Contact", href: "/contact/" },
  ];

  return {
    companyDescription: footerCompanyDescription,
    productLinks,
    solutionLinks,
    countryLinks,
    resourceLinks,
    popularSearches: footerPopularSearches,
  };
}
