import type { PageMeta } from "./types";

/**
 * Holding-page registry for routes that are not driven by a content entity.
 * draft: true → noindex + excluded from sitemap until real content lands.
 */
export const pages: PageMeta[] = [
  {
    path: "/",
    title: "Insulated Sandwich Panels & PEB Export from India",
    description:
      "Ahmedabad-made PUF, PIR and Rockwool panels with PEB cladding packages for cold chain and industrial sheds — export-ready packing and drawings with every quote.",
    h1: "Insulated panels and PEB systems built for export",
    holdingCopy:
      "This homepage shell is live while we finish the full visual system and project photography. Browse products, solutions and export markets below, or send drawings now — our engineers reply with a clear quotation pack, not a brochure dump.",
    draft: false,
    section: "core",
    updatedAt: "2026-09-14",
  },
  {
    path: "/about/",
    title: "About PHOENIXX SMARTBUILD",
    description:
      "Ahmedabad manufacturing base, Gujarat industrial supply context, export port options from Mundra to Nhava Sheva, and how buyers engage with RFQ, drawings and BOQ — from NXT Phoenixx SmartBuild LLP.",
    h1: "About PHOENIXX SMARTBUILD",
    holdingCopy:
      "PHOENIXX SMARTBUILD manufactures insulated sandwich panels, cold room kits, doors and PEB cladding in Ahmedabad — one roof for forming, foam and export packing. This page covers who we are, how Gujarat industrial belts use our panels, which Indian ports we evaluate per shipment, and what we need for a written quotation. Send a BOQ with port and temperature band if you are comparing suppliers.",
    draft: false,
    section: "core",
    updatedAt: "2026-09-15",
  },
  {
    path: "/manufacturing/",
    title: "Panel Manufacturing in Ahmedabad",
    description:
      "Continuous line forming, cut-to-length, QC holds, export packing and multi-port dispatch from Ahmedabad — for domestic Gujarat sites and ocean freight orders.",
    h1: "Manufacturing",
    holdingCopy:
      "Panels are decoiled, foamed, cut to order length and packed on a continuous line in Ahmedabad — the same process for a Sanand factory shed or a 40-foot HC container to Mombasa. This page walks through materials, in-process checks, ocean packing and how we choose between Mundra, Kandla, Pipavav, Hazira or Nhava Sheva per shipment. Email your BOQ with thickness and joint type for tender-ready process notes.",
    draft: false,
    section: "core",
    updatedAt: "2026-09-15",
  },
  {
    path: "/quality-and-testing/",
    title: "Quality & Testing",
    description:
      "Pre-dispatch checks, buyer-arranged inspection, documents we share with shipments, and an honest position on certifications — no invented ISO or test report numbers.",
    h1: "Quality and testing",
    holdingCopy:
      "We check thickness, dimensions, foam density and facing finish in-house before any bundle leaves the plant — against your approved quotation, not a generic catalogue. Third-party lab tests and buyer-side inspection are arranged when your tender names them. We share certificates and test reports only when they exist; send your QA checklist with the RFQ for a mapped reply.",
    draft: false,
    section: "core",
    updatedAt: "2026-09-15",
  },
  {
    path: "/projects/",
    title: "Projects",
    description:
      "Selected panel and PEB installations — published only with verified project details and permissions.",
    h1: "Projects",
    holdingCopy:
      "We will not invent case studies. Project pages go live only with confirmed scope, location and photographs we are cleared to show. If you need a reference for a similar application, tell us the temperature band and panel type and we'll share what we can.",
    draft: false,
    section: "core",
    updatedAt: "2026-09-14",
  },
  {
    path: "/careers/",
    title: "Careers",
    description:
      "Open roles at PHOENIXX SMARTBUILD in manufacturing, sales and export operations in Ahmedabad.",
    h1: "Careers",
    holdingCopy:
      "Openings will be listed here with role, location and how to apply. Until then, send a CV to our sales email with the subject line Careers — relevant trade or engineering experience gets a reply.",
    draft: true,
    section: "core",
  },
  {
    path: "/products/",
    title: "Insulated Sandwich Panels & PEB Products",
    description:
      "PUF, PIR and Rockwool cores, roofing and wall cladding, cold room and cleanroom kits, fire-rated build-ups, industrial doors and PEB structures — specification pages with thickness, joints and export notes.",
    h1: "Products",
    holdingCopy:
      "Ten product families cover the insulated envelope from cold store cam-lock walls to long-span PEB roof sheets. Start from your temperature band and fire line — PUF for most −18 °C rooms, PIR when thickness must shrink, Rockwool when the wall must be non-combustible. Live pages carry joint types, indicative thickness tables and packing notes; draft pages accept datasheet requests by email. Send elevations with port and Incoterm when you are ready to freeze the schedule.",
    draft: false,
    section: "products",
    updatedAt: "2026-09-15",
  },
  {
    path: "/solutions/",
    title: "Industry Solutions for Insulated Buildings",
    description:
      "Industry-specific panel and PEB guidance for cold storage, food and dairy processing, pharma cleanrooms, warehousing, healthcare, data centres and manufacturing plants.",
    h1: "Solutions by industry",
    holdingCopy:
      "Each industry page ties process temperature, hygiene class and fire separation to a panel shortlist — not a generic catalogue browse. Cold storage and dairy cover chilled envelopes; food and poultry cover washdown zoning; pharma and hospital pages cover classified partitions; warehousing and manufacturing cover long-span shells and fire lines. Pick the closest match, read the linked product page for joint detail, then send a zoned layout PDF for a quotation that lists thickness by room.",
    draft: false,
    section: "solutions",
    updatedAt: "2026-09-15",
  },
  {
    path: "/export/",
    title: "Export of Sandwich Panels from India",
    description:
      "How PHOENIXX SMARTBUILD packs, documents and ships insulated panels from Ahmedabad to African and international ports — process, lead times and country pages.",
    h1: "Export from India",
    holdingCopy:
      "We manufacture in Ahmedabad and ship through Indian ports with packing suited to long ocean voyages. This hub covers process, documentation and country pages. Kenya is the first fully written market page; others are being completed with port and documentation notes specific to each destination.",
    draft: false,
    section: "export",
    updatedAt: "2026-09-14",
  },
  {
    path: "/export/africa/",
    title: "Sandwich Panel Export to Africa",
    description:
      "PUF and PIR panels for African hot climates, humid coasts and highland sites — port corridors, thickness guidance and import notes from India.",
    h1: "Export to Africa",
    holdingCopy:
      "Climate bands from Sahel heat to Indian Ocean humidity change panel thickness and facing choice. Country pages carry port names and clearing-agent checklists — Kenya is the deepest example today.",
    draft: false,
    updatedAt: "2026-09-15",
    section: "export",
  },
  {
    path: "/export/process/",
    title: "Export Process — Enquiry to Installation",
    description:
      "Step-by-step export process for sandwich panel orders from enquiry and quotation through production, packing, vessel booking and site installation.",
    h1: "Export process",
    holdingCopy:
      "From first enquiry to container gate-in, the sequence is fixed so nothing hangs on one person's memory. This page will spell out each stage, typical durations and what we need from you at every step. Until then, use the RFQ form — we reply with a dated quotation and a clear list of missing inputs.",
    draft: false,
    section: "export",
    updatedAt: "2026-09-14",
  },
  {
    path: "/export/documentation/",
    title: "Export Documentation for Panel Shipments",
    description:
      "Commercial invoice, packing list, certificate of origin and what your clearing agent must file — panel export documents from India.",
    h1: "Shipping and documentation",
    holdingCopy:
      "Wrong paperwork delays cargo more often than wrong foam density. We'll publish the document set we prepare as standard and the extras certain destinations ask for. Share your buyer's clearing agent requirements early — that is usually where delays hide.",
    draft: false,
    section: "export",
    updatedAt: "2026-09-14",
  },
  {
    path: "/export/packaging-and-container-loading/",
    title: "Panel Packaging & Container Loading",
    description:
      "How insulated sandwich panels are packed and loaded into 20-foot, 40-foot and 40-foot HC containers for ocean export.",
    h1: "Packaging and container loading",
    holdingCopy:
      "Panels travel better when edge protectors, banding and dunnage are chosen for the voyage, not for the factory floor photo. This page will cover stacking practice for 40-foot HC containers and the damage modes we design packing against. Ask for our packing note with your quotation if you need it now.",
    draft: false,
    section: "export",
    updatedAt: "2026-09-14",
  },
  {
    path: "/export/incoterms-and-payment-terms/",
    title: "Incoterms & Payment Terms for Panel Export",
    description:
      "EXW, FOB, CFR, CIF and DAP explained for sandwich panel export from India — plus typical payment structures agreed per order.",
    h1: "Incoterms and payment terms",
    holdingCopy:
      "Commercial terms are agreed per order and confirmed in the proforma invoice. This page explains common Incoterms and payment patterns — not legal advice.",
    draft: false,
    section: "export",
    updatedAt: "2026-09-14",
  },
  {
    path: "/export/lead-time-and-freight/",
    title: "Lead Time & Freight for Panel Export",
    description:
      "Production lead drivers, indicative ocean transit to African ports and what delays sandwich panel export orders from India.",
    h1: "Lead time and freight",
    holdingCopy:
      "Lead time is manufacturing plus ocean transit plus destination clearance — not a single website number. Indicative ranges only; your proforma carries the dates for your order.",
    draft: false,
    section: "export",
    updatedAt: "2026-09-14",
  },
  {
    path: "/resources/",
    title: "Technical Resources for Panel Buyers",
    description:
      "Live guides, comparisons, FAQs, glossary, panel selection and datasheets — specification help before you request a quotation.",
    h1: "Resources",
    holdingCopy:
      "Guides, comparisons and FAQs are live for thickness, joints, fire performance and export packing. Use panel selection or request a datasheet if you need a PDF.",
    draft: false,
    updatedAt: "2026-09-15",
    section: "resources",
  },
  {
    path: "/resources/guides/",
    title: "Technical Guides",
    description:
      "Practical guides on panel selection, joints, cold storage thickness and export packing.",
    h1: "Technical guides",
    holdingCopy:
      "Guides will cover the questions project engineers actually ask on site calls — condensation risk, joint choice, and what fails when span tables are ignored. Individual articles publish as they clear technical review.",
    draft: false,
    updatedAt: "2026-09-14",
    section: "resources",
  },
  {
    path: "/resources/comparisons/",
    title: "Panel Comparisons",
    description:
      "Side-by-side comparisons of PUF, PIR and Rockwool sandwich panels for thermal and fire performance.",
    h1: "Comparisons",
    holdingCopy:
      "Each comparison page will state where one core wins and where it does not. PUF vs PIR is the first priority. Until the full tables are live, tell us your fire rating and temperature target and we'll recommend a core in plain language.",
    draft: false,
    section: "resources",
    updatedAt: "2026-09-14",
  },
  {
    path: "/resources/faqs/",
    title: "Frequently Asked Questions",
    description:
      "Answers on lead times, container loading, panel thickness, joints and export documentation.",
    h1: "FAQs",
    holdingCopy:
      "These are the questions we hear on sales calls and WhatsApp threads. Answers stay practical: what affects price, what delays dispatch, and what we need to quote accurately. Expand any topic with a direct enquiry if your project has constraints we have not covered.",
    draft: false,
    section: "resources",
    updatedAt: "2026-04-13",
  },
  {
    path: "/resources/glossary/",
    title: "Panel Glossary",
    description:
      "Definitions of U-value, PIR, PUF, cam-lock, cover width and other sandwich panel terms.",
    h1: "Glossary",
    holdingCopy:
      "Short definitions for terms that show up on drawings and datasheets. We keep them accurate and free of marketing gloss. Request a clarification if a specification note uses a term differently in your market.",
    draft: false,
    section: "resources",
    updatedAt: "2026-04-13",
  },
  {
    path: "/resources/datasheets/",
    title: "Datasheets",
    description:
      "Downloadable panel datasheets — listed only when the PDF file exists in our library.",
    h1: "Datasheets",
    holdingCopy:
      "We list a datasheet only when the file is ready. Fake download buttons waste everyone's time. Email your product interest and application — we send the current PDF the same working day when it exists.",
    draft: false,
    section: "resources",
    updatedAt: "2026-09-14",
  },
  {
    path: "/resources/panel-selection/",
    title: "Panel Selection Tool",
    description:
      "Match insulated panel core and thickness to temperature, fire and hygiene requirements.",
    h1: "Panel selection",
    holdingCopy:
      "A guided selection tool is planned for a later phase. Until then, send process temperature, required fire performance and whether the room needs wash-down facings — we'll reply with a short shortlist and why each option fits.",
    draft: false,
    section: "resources",
    updatedAt: "2026-09-14",
  },
  {
    path: "/blog/",
    title: "Blog",
    description:
      "Notes on panel specification, export logistics and industrial building practice from PHOENIXX SMARTBUILD.",
    h1: "Blog",
    holdingCopy:
      "Articles cover field problems — condensation, joint leaks, packing damage — not generic industry news. Browse by category or start with technical guides and export process notes linked from each post.",
    draft: false,
    section: "blog",
    updatedAt: "2026-09-14",
  },
  {
    path: "/privacy-policy/",
    title: "Privacy Policy",
    description:
      "How PHOENIXX SMARTBUILD collects and uses enquiry data from this website.",
    h1: "Privacy policy",
    holdingCopy:
      "This draft explains how we handle enquiry forms, cookies and contact details. It is pending legal review before we treat it as final. If you need a data-processing note for a vendor onboarding pack, ask and we will share the current draft.",
    draft: false,
    section: "legal",
    updatedAt: "2026-04-13",
  },
  {
    path: "/terms/",
    title: "Terms of Use",
    description:
      "Website terms of use for phoenixxglobal.com operated by NXT Phoenixx SmartBuild LLP.",
    h1: "Terms of use",
    holdingCopy:
      "These website terms are a working draft pending legal review. They cover acceptable use of this site and limits on reliance on published specifications. Contract terms for supply are issued separately with each quotation.",
    draft: false,
    section: "legal",
    updatedAt: "2026-04-13",
  },
  {
    path: "/sitemap/",
    title: "HTML Sitemap",
    description:
      "Complete list of pages on the PHOENIXX SMARTBUILD website for quick navigation.",
    h1: "Sitemap",
    holdingCopy:
      "Every public section of the site is linked below. Draft pages remain reachable for buyers who need them, but they stay noindex until full content is published.",
    draft: false,
    section: "legal",
    updatedAt: "2026-04-13",
  },
];

export function getPageByPath(path: string): PageMeta | undefined {
  const normalized = path.endsWith("/") || path === "/" ? path : `${path}/`;
  return pages.find((p) => p.path === normalized);
}

export function requirePageByPath(path: string): PageMeta {
  const page = getPageByPath(path);
  if (!page) {
    throw new Error(`Page registry entry missing: ${path}`);
  }
  return page;
}
