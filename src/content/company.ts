import type { FaqItem, ImageRef } from "./types";

export type ProseSection = {
  heading: string;
  paragraphs: string[];
};

export type ProcessStep = {
  title: string;
  body: string;
  duration?: string;
};

export type QualityCheck = {
  name: string;
  method: string;
  criteria: string;
};

export type AboutContent = {
  intro: string;
  keySpecs: Array<{ label: string; value: string }>;
  sections: ProseSection[];
  notList: string[];
  faqs: FaqItem[];
  heroImage: ImageRef;
  ctaHeading: string;
  ctaCopy: string;
};

export type ManufacturingContent = {
  intro: string;
  processSteps: ProcessStep[];
  rawMaterials: ProseSection;
  inProcessChecks: ProseSection;
  packing: ProseSection;
  featureSplit: {
    heading: string;
    prose: string;
    bullets: string[];
    image: ImageRef;
  };
  detailImages: ImageRef[];
  ctaHeading: string;
  ctaCopy: string;
};

export type QualityContent = {
  intro: string;
  sections: ProseSection[];
  checks: QualityCheck[];
  certificationNote: string;
  faqs: FaqItem[];
  ctaHeading: string;
  ctaCopy: string;
};

export type ProjectsContent = {
  intro: string;
  sections: ProseSection[];
  referenceProcess: ProcessStep[];
  productLinks: Array<{ slug: string; label: string }>;
  solutionLinks: Array<{ slug: string; label: string }>;
  projects: Array<{
    slug: string;
    name: string;
    summary: string;
    href: string;
    location?: string;
    image?: { src: string; alt: string; width: number; height: number };
  }>;
  ctaHeading: string;
  ctaCopy: string;
};

const STOCK_CAPTION = "Stock photo — not the Phoenixx plant or a Phoenixx project.";

export const aboutContent: AboutContent = {
  intro:
    "We manufacture insulated sandwich panels and PEB cladding systems in Ahmedabad and ship them to buyers who need drawings, packing lists and containers that arrive without corner damage — not vague assurances. If you are comparing suppliers, read how we work below, then send a BOQ with your port and temperature band.",
  keySpecs: [
    { label: "Base", value: "Ahmedabad, Gujarat" },
    { label: "Entity", value: "NXT Phoenixx SmartBuild LLP" },
    { label: "Core products", value: "PUF, PIR, Rockwool panels + PEB" },
    { label: "Typical buyer", value: "Export + industrial EPC" },
  ],
  sections: [
    {
      heading: "Who we are",
      paragraphs: [
        "PHOENIXX SMARTBUILD is an Ahmedabad-based manufacturer of insulated sandwich panels, cold room kits, industrial doors and PEB structures. We run continuous foam lines, coil slitting and panel forming under one roof — enough control to answer thickness, facing grade and joint detail from the same team that signs the packing list.",
        "Most of our export work goes to East and West Africa, where buyers ask hard questions about container utilisation, documentation at Mombasa or Dar es Salaam, and what happens when a panel arrives with a crushed edge. We have loaded enough 40-foot HC containers to know that packing is not an afterthought.",
      ],
    },
    {
      heading: "What we make",
      paragraphs: [
        "Our product range covers PUF and PIR foam-core panels for cold chain and industrial envelopes, Rockwool panels where fire performance drives the specification, modular cold room kits with cam-lock joints, cleanroom-facing panels, fire-rated build-ups, industrial cold room doors and PEB steel with matching cladding packages.",
        "We do not sell refrigeration plant, HVAC equipment or site installation labour as part of a panel order. We supply the envelope — walls, roofs, doors and the accessory list — with drawings that your installer or local contractor can work from.",
      ],
    },
    {
      heading: "How we work with buyers",
      paragraphs: [
        "You send room dimensions or a layout PDF, target temperature, fire requirement if any, and destination port with Incoterm preference. We reply with a dated quotation listing panel thickness, facing, joint type, accessory counts and indicative m² per container at your thickness. Missing inputs get flagged — we do not fill gaps with guesswork.",
        "Once you release the order, production follows an agreed panel schedule. We issue packing labels by room zone, edge-protect bundles for ocean freight and prepare the commercial invoice, packing list and certificate of origin as standard. Third-party inspection or additional test certificates are arranged when your project specifies them and the documents exist.",
        "For repeat buyers we keep facing colour and foam system consistent across shipments so site teams do not mix batches. That sounds obvious until a second container arrives with a different coil shade and the client rejects the lot on aesthetics alone.",
      ],
    },
  ],
  notList: [
    "We are not a trading house that buys unknown coils and resells them under our label. Facing steel, foam chemistry and joint profiles are specified on our drawings and traced to incoming material lots.",
    "We do not claim ISO or third-party certifications we have not uploaded and verified. In-house checks are listed on our quality page; formal certificates are shared only when issued for your project.",
    "We do not publish project photographs or client names without written consent. References are available on request when a similar application exists.",
    "We do not maintain warehouses or sales offices outside India. Export is ex-factory Ahmedabad through Indian ports.",
  ],
  faqs: [
    {
      question: "Can we visit the plant before placing an order?",
      answer:
        "Yes — arrange a visit through our contact page with your travel dates. We show the forming line, foam station and packing bay. Bring your BOQ so the walk-through maps to your panel thickness and joint choice.",
    },
    {
      question: "Do you supply installation teams abroad?",
      answer:
        "No. We supply panels, doors and drawings. Your local contractor or EPC handles erection. We can comment on joint sequence and cam-lock torque from our installation notes.",
    },
    {
      question: "What do you need for a first quotation?",
      answer:
        "Internal dimensions or a layout sketch, target temperature per room, ambient design condition, door sizes, delivery port and Incoterm. A PDF is enough — CAD is better but not mandatory for a budgetary quote.",
    },
  ],
  heroImage: {
    src: "/images/hero/hero-manufacturing-panels.jpg",
    alt: "Industrial warehouse exterior with corrugated metal cladding under a clear sky",
    width: 2560,
    height: 1707,
    caption: STOCK_CAPTION,
    isStock: true,
  },
  ctaHeading: "Send your BOQ for a written quotation",
  ctaCopy:
    "Attach room dimensions, temperature targets and destination port. We reply with panel recommendations, accessory counts and export pricing — not a generic brochure.",
};

export const manufacturingContent: ManufacturingContent = {
  intro:
    "Insulated panels are formed, foamed, cured and packed on a continuous line in Ahmedabad. This page walks through the steps, the materials we specify, and the checks we run before a bundle gets a shipping label — with stock photos where our own plant photography is still pending.",
  processSteps: [
    {
      title: "Coil preparation and profiling",
      body: "PPGI or galvalume coils are decoiled, slit to cover width and roll-formed into trapezoidal or micro-rib profiles. Profile geometry is checked against the drawing before the first production metre runs.",
      duration: "Setup: 2–4 hours per profile change",
    },
    {
      title: "Foam injection and press cure",
      body: "Upper and lower facings enter the laminator with side dams set to panel thickness. PUF or PIR foam is injected, the press closes, and panels cure to handling strength on the line. Density is sampled from the first board of each production run.",
      duration: "Line speed varies by thickness",
    },
    {
      title: "Cut-to-length and edge finish",
      body: "Panels are cut to order length, tongue-and-groove or secret-fix edges are formed, and film protection is applied to outward faces. Length tolerance is checked against the panel schedule before stacking.",
    },
    {
      title: "QC hold and labelling",
      body: "Random panels from each run are measured for thickness, squareness and facing adhesion. Bundles that fail hold are segregated — we do not mix rejected boards into an export pack.",
    },
    {
      title: "Export packing and container loading",
      body: "Panels are stacked flat with edge protectors, poly strapping and corner boards sized for 40-foot HC containers. Each bundle carries a label matching the packing list line. Loading photos are available on request.",
      duration: "1–2 days per container",
    },
  ],
  rawMaterials: {
    heading: "Raw materials we specify",
    paragraphs: [
      "Facing steel is pre-painted galvanised (PPGI) or galvalume in grades matched to your corrosion environment — coastal export orders often step up coating weight. Coil colour and batch are recorded on the packing list so site teams can check consistency on arrival.",
      "Foam systems are polyurethane (PUF) for standard cold chain duty or polyisocyanurate (PIR) where lower thermal conductivity or improved fire behaviour is specified. Rockwool panels use mineral wool slabs laminated between steel facings — a separate line path from foam cores.",
      "Cam-lock hooks, gaskets, coving profiles and door jamb sections are sourced to match wall thickness. We do not substitute generic hardware that leaves a gap at the insulation line.",
    ],
  },
  inProcessChecks: {
    heading: "In-process checks",
    paragraphs: [
      "Thickness is measured with a calibrated micrometer at the centre and both edges — foam can sag at wide spans if press timing is wrong. Cover width and effective length are checked against the order schedule before bundling.",
      "Facing adhesion is spot-checked by attempting to peel the steel lip at the panel edge — delamination at this stage means the whole run stops until press temperature and glue spread are corrected.",
      "For export orders we photograph bundle stacking before the container door closes. If a panel arrives damaged, those photos settle the argument faster than email threads.",
    ],
  },
  packing: {
    heading: "Packing for ocean freight",
    paragraphs: [
      "Flat stacking with vertical support at intervals prevents permanent bow in long panels. Edge protectors and poly film reduce rub damage during port handling — African ports can be rough on bundles that were packed for a smooth factory floor.",
      "Container loading plans show bundle sequence and weight distribution. We aim for maximum m² per 40-foot HC without crushing the bottom layer — the exact count depends on thickness and profile.",
    ],
  },
  featureSplit: {
    heading: "Continuous line forming",
    prose:
      "The laminator ties foam chemistry, press dwell and facing speed together. Change one variable without adjusting the others and you get voids at the steel-to-foam interface — the failure mode that shows up six months later as condensation trails at joints. Our line operators hold panels at QC until the first board of a run passes thickness and adhesion checks.",
    bullets: [
      "Profile and thickness locked from approved drawings before coil enters the line",
      "Foam density sampled at run start — not assumed from supplier batch sheets",
      "Rejected boards segregated; never repacked into export bundles",
    ],
    image: {
      src: "/images/plant/industrial-warehouse-exterior.jpg",
      alt: "Large industrial warehouse building with corrugated metal exterior walls",
      width: 2560,
      height: 1707,
      caption: "Stock photo — representative of industrial panel manufacturing; not the Phoenixx plant.",
      isStock: true,
    },
  },
  detailImages: [
    {
      src: "/images/products/metal-cladding-exterior.jpg",
      alt: "Close-up of corrugated metal cladding on an industrial building facade",
      width: 1200,
      height: 1600,
      caption: "Stock photo — PPGI facing profile detail; not a Phoenixx product sample.",
      isStock: true,
    },
    {
      src: "/images/hero/hero-peb-steel-frame.jpg",
      alt: "Steel beam frame structure inside a factory hall under construction",
      width: 1200,
      height: 1800,
      caption: "Stock photo — steel frame with panel cladding in progress; not a Phoenixx site.",
      isStock: true,
    },
    {
      src: "/images/hero/hero-export-containers.jpg",
      alt: "Cargo ship loaded with shipping containers at a port",
      width: 2560,
      height: 1707,
      caption: "Stock photo — ocean export context; not a Phoenixx loading operation.",
      isStock: true,
    },
  ],
  ctaHeading: "Need plant capacity or process notes for a tender?",
  ctaCopy:
    "Email your BOQ with the panel thickness and joint type. We respond with what we can confirm in writing — line capability, lead time and packing approach.",
};

export const qualityContent: QualityContent = {
  intro:
    "We test panels against the specification on your quotation — thickness, dimensions, facing finish and foam density sampled in-house. We do not display ISO certificates or third-party test reports we have not issued. When your project requires formal certification and the documents exist, we share them with the shipment.",
  sections: [
    {
      heading: "What we check before dispatch",
      paragraphs: [
        "Every production run gets dimensional checks on length, cover width and thickness at multiple points along the panel. Foam density is sampled from the first board of a run using a core extraction method — we compare against the target range on your order, not a generic catalogue number.",
        "Facing quality is inspected for coating defects, oil marks and edge burrs that would break the gasket line at joints. Cam-lock panels get hook engagement checks on sample pieces before accessories are boxed.",
      ],
    },
    {
      heading: "How testing is done",
      paragraphs: [
        "In-house checks use calibrated micrometers, steel rules and visual inspection under line lighting. Density samples are weighed and measured in our QC area — results are recorded against the batch label on each bundle.",
        "Third-party laboratory tests — fire reaction, thermal conductivity, formaldehyde emission — are arranged when your specification names a standard and the test report is required for clearance or insurance. We do not quote test results we have not paid a lab to run.",
      ],
    },
    {
      heading: "What we test against",
      paragraphs: [
        "The reference document is your approved quotation and panel schedule — thickness, facing grade, foam type and joint detail. If your tender cites IS, EN or ASTM methods, tell us on the enquiry so we map our checks to those clauses or arrange external testing where in-house equipment cannot replicate the method.",
        "Specification confirmed against approved project documentation before dispatch. If a value on this website differs from your signed quotation, the quotation wins.",
      ],
    },
    {
      heading: "Certifications — honest position",
      paragraphs: [
        "Our certifications registry is empty until verified documents are uploaded. We will not invent ISO 9001 numbers or display badges for audits we have not completed. Buyers who need formal QMS certificates should ask on the enquiry — we share what exists, and we say clearly when it does not.",
        "That honesty saves time. Procurement teams in Nairobi or Accra often discover fake certificates at customs anyway. We would rather lose an order than ship paperwork that fails verification.",
      ],
    },
  ],
  checks: [
    {
      name: "Panel thickness",
      method: "Calibrated micrometer at centre and both edges",
      criteria: "Within tolerance on approved panel schedule",
    },
    {
      name: "Cover width and length",
      method: "Steel rule against production drawing",
      criteria: "± tolerance per order specification",
    },
    {
      name: "Foam density",
      method: "Core sample from first board of run",
      criteria: "Within target range stated on quotation",
    },
    {
      name: "Facing adhesion",
      method: "Edge peel check on sample piece",
      criteria: "No delamination at steel-to-foam interface",
    },
    {
      name: "Surface finish",
      method: "Visual under line lighting",
      criteria: "No coating defects, oil marks or edge burrs affecting joints",
    },
    {
      name: "Cam-lock engagement",
      method: "Hook fit check on sample panels",
      criteria: "Full gasket compression along joint length",
    },
  ],
  certificationNote:
    "No third-party certificates are published on this website yet. When your project requires them and the documents exist, we include copies with the shipment or send them on request.",
  faqs: [
    {
      question: "Can you provide a fire test report for PIR panels?",
      answer:
        "If a valid test report exists for the build-up you ordered, we share it. If your specification requires a test we have not run, we quote the external lab cost and lead time separately — we do not fabricate report numbers.",
    },
    {
      question: "Do you accept buyer-side inspection at the plant?",
      answer:
        "Yes, when agreed before production release. Third-party inspectors need access during the production window for your order — not after bundles are already in the container.",
    },
    {
      question: "What if panels fail inspection on arrival?",
      answer:
        "Notify us with photos within the period stated on your commercial invoice. Pre-loading photos and packing list weights help establish whether damage occurred in transit or at origin.",
    },
  ],
  ctaHeading: "Send your QA checklist with the enquiry",
  ctaCopy:
    "Tell us which test methods your tender references. We map our in-house checks or quote external testing — and we say plainly when a certificate does not exist yet.",
};

export const projectsContent: ProjectsContent = {
  intro:
    "We do not publish a portfolio of installations we cannot verify. Project photographs, locations and client names appear here only with written consent. Until then, tell us your application and temperature band — we share references we are cleared to discuss.",
  sections: [
    {
      heading: "Why this page is mostly empty",
      paragraphs: [
        "Cold storage and industrial panel projects belong to our clients — their sites, their brand, their operational data. Publishing case studies without permission creates legal risk and misleads buyers who think the photo shows their future facility.",
        "We would rather leave this page sparse than invent a project in Lagos or Nairobi to fill a grid. If a competitor's website shows dozens of unnamed installations, ask them for a contactable reference — not just a stock photo with a city name.",
      ],
    },
    {
      heading: "How we share references",
      paragraphs: [
        "When your enquiry matches a completed scope — similar temperature band, panel type and region — we ask the original client whether we may share their name and a brief scope description. Some agree; many prefer confidentiality. We respect either answer.",
        "References are shared by email or call, not as downloadable marketing PDFs. That keeps the conversation honest: you speak to someone who actually received panels from us, or we tell you we have no match yet.",
      ],
    },
    {
      heading: "What to send instead of browsing projects",
      paragraphs: [
        "Send your room dimensions, target temperature, delivery port and any fire or hygiene requirement. We reply with a panel schedule, indicative pricing and — where permitted — a reference contact for a similar job.",
        "Product and solution pages describe the technical scope in detail. Start there if you are specifying a cold room, warehouse envelope or PEB shed, then use the quotation form when you are ready to talk numbers.",
      ],
    },
  ],
  referenceProcess: [
    {
      title: "You describe the application",
      body: "Temperature band, panel type preference, country and approximate size. A sketch PDF is enough.",
    },
    {
      title: "We check for a match",
      body: "Internal list of completed scopes — filtered by what clients have cleared us to mention.",
    },
    {
      title: "Reference shared if cleared",
      body: "Contact name and scope summary by email. No reference is invented if no match exists.",
    },
    {
      title: "Quotation follows separately",
      body: "Technical recommendation and pricing come from your BOQ, not from a case study template.",
    },
  ],
  productLinks: [
    { slug: "puf-panels", label: "PUF sandwich panels" },
    { slug: "pir-panels", label: "PIR sandwich panels" },
    { slug: "cold-room-panels", label: "Modular cold room kits" },
    { slug: "industrial-doors", label: "Cold room doors" },
    { slug: "peb-prefabricated-buildings", label: "PEB structures with cladding" },
  ],
  solutionLinks: [
    { slug: "cold-storage", label: "Cold storage building solutions" },
    { slug: "warehousing-logistics", label: "Warehouse and logistics sheds" },
    { slug: "food-processing", label: "Food processing envelopes" },
  ],
  projects: [],
  ctaHeading: "Describe your project — we reply with what we can verify",
  ctaCopy:
    "Send dimensions, temperature target and delivery port. We quote the envelope and share a reference only if a cleared match exists.",
};
