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
      "Who we are, how we manufacture insulated panels in Ahmedabad, and how export enquiries are handled from first email to container loading.",
    h1: "About PHOENIXX SMARTBUILD",
    holdingCopy:
      "We're an Ahmedabad-based LLP manufacturing insulated sandwich panels and PEB systems for buyers who need drawings, packing lists and on-time containers — not vague promises. The full company story, plant photos and process walkthrough publish in the next phase. Meanwhile, ask for our company profile and current production lead times.",
    draft: false,
    section: "core",
    updatedAt: "2026-09-14",
  },
  {
    path: "/manufacturing/",
    title: "Panel Manufacturing in Ahmedabad",
    description:
      "How PHOENIXX SMARTBUILD forms, foams and finishes insulated sandwich panels for domestic and export projects.",
    h1: "Manufacturing",
    holdingCopy:
      "The manufacturing page will cover line layout, foam systems, facing coils and the checks we run before a pack list is signed. If you need plant capacity or process notes for a tender today, email your BOQ and we'll respond with what we can confirm in writing.",
    draft: false,
    section: "core",
    updatedAt: "2026-09-14",
  },
  {
    path: "/quality-and-testing/",
    title: "Quality & Testing",
    description:
      "Dimensional checks, density sampling and documentation practices for insulated panels before dispatch from Ahmedabad.",
    h1: "Quality and testing",
    holdingCopy:
      "We do not publish test certificates we have not issued. This page will list the checks we run on density, dimensions and finish, plus how third-party tests are handled when a project specifies them. Send your QA checklist with the enquiry if you need a mapped response.",
    draft: false,
    section: "core",
    updatedAt: "2026-09-14",
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
      "PUF, PIR, Rockwool, roofing and wall panels, cold room and cleanroom systems, industrial doors and PEB structures.",
    h1: "Products",
    holdingCopy:
      "This hub lists every panel, door and structure we manufacture. All ten product families — PUF, PIR, Rockwool, roofing, wall, cold room, cleanroom, fire-rated, industrial doors and PEB — carry full technical pages. Start with the core that matches your fire and thermal brief, then request a quote with drawings attached.",
    draft: false,
    section: "products",
    updatedAt: "2026-09-14",
  },
  {
    path: "/solutions/",
    title: "Industry Solutions for Insulated Buildings",
    description:
      "Panel and PEB solutions for cold storage, food processing, pharma cleanrooms, warehousing, dairy, healthcare, data centres and manufacturing.",
    h1: "Solutions by industry",
    holdingCopy:
      "Nine industry pages map panel thickness, joint types, failure modes and product shortlists to real applications — cold chain, food hygiene, pharma classification, logistics sheds, healthcare partitions and factory fire lines. Pick the closest match to your process temperature and hygiene class, then send a layout for a zone-by-zone quotation.",
    draft: false,
    section: "solutions",
    updatedAt: "2026-09-14",
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
