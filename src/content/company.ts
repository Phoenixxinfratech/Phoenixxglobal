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
        "PHOENIXX SMARTBUILD is an Ahmedabad-based manufacturer of insulated sandwich panels, cold room kits, industrial doors and PEB structures. phoenixxglobal.com is the global web presence for PHOENIXX SMARTBUILD (PHOENIXX SMARTBUILD GLOBAL as the market descriptor on export documentation). We run continuous foam lines, coil slitting and panel forming under one roof — enough control to answer thickness, facing grade and joint detail from the same team that signs the packing list.",
        "Most of our export work goes to East and West Africa, where buyers ask hard questions about container utilisation, documentation at Mombasa or Dar es Salaam, and what happens when a panel arrives with a crushed edge. We have loaded enough 40-foot HC containers to know that packing is not an afterthought.",
        "We are NXT Phoenixx SmartBuild LLP — a manufacturing entity, not a broker. When you call, you reach people who have stood on the loading bay and argued about corner board thickness, not a sales desk that forwards your email to an unknown factory.",
      ],
    },
    {
      heading: "Ahmedabad base and project coordination",
      paragraphs: [
        "Our plant sits in the Ahmedabad industrial belt where coil suppliers, foam chemical distributors and freight forwarders are within a half-day drive. That matters when a buyer changes facing colour two weeks before production or when a container line closes and you need to re-route through a different port without re-cutting panels.",
        "Project coordination runs from the same office as production planning. One engineer owns your panel schedule from quotation through packing list — not a handoff between a Mumbai sales office and a distant works. Drawings, revision notes and hold points sit in one thread so thickness changes on level two do not get lost before level one ships.",
        "Site visits are arranged when you need to see the line before releasing a large order. Bring your BOQ — a generic factory tour wastes everyone's afternoon. We walk through the profile that matches your joint detail and show how bundles are labelled for your room zones.",
        "Domestic Gujarat projects often need phased dispatch: cold store walls first, roof sheets after steel is up, doors last. Export orders usually ship complete in one or two containers. We plan both from Ahmedabad because the same line produces both — the difference is packing density and documentation, not panel quality.",
      ],
    },
    {
      heading: "Gujarat industrial belt — where panels actually go",
      paragraphs: [
        "We manufacture in Ahmedabad, but most of our domestic volume ships to industrial sites within Gujarat or to export buyers who found us through that cluster. Naming places without context is useless — what follows is why each belt matters for panel specification, not a directory of cities.",
        "Sanand and the western Ahmedabad corridor carry auto and engineering plants that need clean internal partitions, paint-shop temperature control and large-span PEB sheds. Panel thickness there is often driven by programme speed and fire line placement, not cold chain duty.",
        "Changodar, Bavla and the Ahmedabad–Sanand road belt host pharma formulation, engineering goods and logistics hubs. Buyers here ask for washdown facings, cam-lock cold rooms for raw material hold, and Rockwool fire walls between process and storage zones.",
        "The Dahej–Bharuch–Ankleshwar chemical and petrochemical strip runs hot, humid and corrosive. Coastal-facing steel coating weight and joint gasket choice matter more than they do inland. We step up PPGI specs when the envelope sits near process vents or open cooling towers — not because the map says Bharuch, but because the environment eats thin coatings.",
        "Surat and Hazira combine textile and heavy industry with a deep draft port. Hazira suits project cargo and containers heading west; Surat-side factories often want panels on trucks within 48 hours of release. We do not maintain a Surat warehouse — ex-factory Ahmedabad with road freight is the honest answer.",
        "Morbi's ceramics and tile industry runs high-volume cold storage for finished goods and raw material hold rooms in kilns-adjacent zones. Panel orders there repeat on thickness and facing — consistency across shipments matters because site teams install the same profile month after month.",
        "Vadodara and Halol serve engineering, pharma and auto ancillaries. Gandhinagar and the capital region add government and institutional cold stores with documentation-heavy procurement. When your site sits in any of these belts, tell us ambient design conditions and process temperature — we have shipped enough local envelopes to know typical failure modes without inventing project names.",
      ],
    },
    {
      heading: "What we make",
      paragraphs: [
        "Our product range covers PUF and PIR foam-core panels for cold chain and industrial envelopes, Rockwool panels where fire performance drives the specification, modular cold room kits with cam-lock joints, cleanroom-facing panels, fire-rated build-ups, industrial cold room doors and PEB steel with matching cladding packages.",
        "We do not sell refrigeration plant, HVAC equipment or site installation labour as part of a panel order. We supply the envelope — walls, roofs, doors and the accessory list — with drawings that your installer or local contractor can work from.",
        "Length, cover width and profile are cut to order — we do not stock finished panels for walk-in purchase. That keeps inventory honest: what you approve on the quotation is what the micrometer checks before dispatch.",
      ],
    },
    {
      heading: "Export logistics from west India",
      paragraphs: [
        "Material leaves our Ahmedabad plant by road. Which Indian port makes sense depends on your destination, vessel schedule, freight rate and whether your buyer's clearing agent has a relationship at that gate — not on a fixed rule printed here.",
        "Mundra (Adani Port) handles a large share of container traffic to East and West Africa. Cut-off times are tight; we confirm gate-in feasibility per shipment once production dates and the forwarder's booking are known.",
        "Deendayal Port (Kandla) suits some breakbulk and container routes, especially when freight to certain African or Middle East destinations prices better from the Kutch coast. We do not guarantee Kandla availability for every order — it is one option we evaluate with your forwarder.",
        "Pipavav (APM Terminals) is an alternative on the Saurashtra coast when Mundra slots are full or when sailing schedules align better with your arrival port.",
        "Hazira (Surat) helps when project cargo, oversized door frames or mixed consignments need a different handling profile than standard container stuffing at Mundra.",
        "Nhava Sheva and JNPT serve buyers who import through Mumbai or need east-coast transshipment. Road haul from Ahmedabad to Nhava Sheva adds cost and transit days — we quote that honestly when your Incoterm and port preference point there.",
        "Port choice is confirmed per shipment after we know bundle dimensions, container count and the forwarder's sailing options. We will not promise Mundra on every quote if your production window and vessel schedule say otherwise.",
      ],
    },
    {
      heading: "How buyers engage — RFQ, drawings and BOQ",
      paragraphs: [
        "First contact is usually an email or the RFQ form with a PDF sketch, internal room dimensions or an elevation drawing. A BOQ with m² by wall, roof and door count speeds the reply — but a hand-drawn layout with temperature notes is enough for a budgetary quotation.",
        "We reply with a dated quotation listing panel thickness, facing grade, joint type, accessory counts, indicative m² per 40-foot HC container at your thickness, and any inputs still missing. If you have not named a port or Incoterm, we state assumptions clearly so you can compare suppliers on the same basis.",
        "Technical clarification happens before order release — not after panels are on the line. Cam-lock versus tongue-and-groove, door handing, coving at corners and fire-rated wall interfaces get locked on approved drawings. Revision after release follows a written change note with lead-time impact.",
        "Payment terms, inspection hold points and documentation requirements are agreed on the proforma invoice. Standard export documents — commercial invoice, packing list, certificate of origin — go with the shipment. Additional certificates or third-party inspection are scoped when your tender names them and the documents exist or can be arranged at quoted cost.",
        "Repeat buyers often send updated BOQs for phase two while phase one is in transit. We keep coil batch references where possible so facing colour stays consistent — the rejection we want to avoid is aesthetic mismatch on the same facade, not a micrometer reading.",
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
        "Yes — arrange a visit through our contact page with your travel dates. We show the forming line, foam station and packing bay. Bring your BOQ so the walk-through maps to your panel thickness and joint choice. Visits during someone else's production run may limit photography; ask when you book.",
    },
    {
      question: "Do you supply installation teams abroad?",
      answer:
        "No. We supply panels, doors and drawings. Your local contractor or EPC handles erection. We can comment on joint sequence and cam-lock torque from our installation notes.",
    },
    {
      question: "What do you need for a first quotation?",
      answer:
        "Internal dimensions or a layout sketch, target temperature per room, ambient design condition, door sizes, delivery port and Incoterm. A PDF is enough — CAD is better but not mandatory for a budgetary quote. Without port and Incoterm we still reply, but freight and insurance lines stay marked indicative.",
    },
    {
      question: "Which port do you ship from?",
      answer:
        "Most export containers gate in at Mundra, but Kandla (Deendayal), Pipavav, Hazira or Nhava Sheva/JNPT are evaluated per order depending on vessel schedule, freight and your forwarder's preference. Port is confirmed on the proforma — not guaranteed on a first email.",
    },
    {
      question: "What do you not claim on quotations or this website?",
      answer:
        "We do not invent ISO certificates, fire test report numbers, named client logos or installed project photographs. We do not guarantee a fixed port, vessel date or clearance time at your destination. Published U-values and thickness tables are indicative until confirmed on your approved quotation.",
    },
    {
      question: "Can you supply panels for a site outside Gujarat?",
      answer:
        "Yes for export — that is most of our long-distance work. Domestic supply outside Gujarat is quoted case by case on freight and minimum order size. We do not pretend to have regional warehouses we do not operate.",
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
    "Insulated panels are formed, foamed, cured and packed on a continuous line in Ahmedabad. This page walks through the steps, the materials we specify, and the checks we run before a bundle gets a shipping label — with stock photos where our own plant photography is still pending. Gujarat's industrial clusters sit within a day's road haul; export orders use the same line with packing and documentation suited to ocean freight.",
  processSteps: [
    {
      title: "Coil preparation and profiling",
      body: "PPGI or galvalume coils are decoiled, slit to cover width and roll-formed into trapezoidal or micro-rib profiles. Profile geometry is checked against the drawing before the first production metre runs. Coil batch and colour are logged on the production sheet so export bundles can be matched on repeat orders.",
      duration: "Setup: 2–4 hours per profile change",
    },
    {
      title: "Foam injection and press cure",
      body: "Upper and lower facings enter the laminator with side dams set to panel thickness. PUF or PIR foam is injected, the press closes, and panels cure to handling strength on the line. Density is sampled from the first board of each production run — if the core is light, the run stops before hundreds of metres accumulate. Rockwool panels follow a separate lamination path with slab thickness checked before facing bond.",
      duration: "Line speed varies by thickness",
    },
    {
      title: "Cut-to-length and edge finish",
      body: "Panels are cut to order length — typically 2 m to 12 m depending on transport and container diagonal. Custom lengths outside the usual range are quoted with packing impact noted. Tongue-and-groove, secret-fix or cam-lock edges are formed per approved drawing; length tolerance is checked against the panel schedule before stacking. Protective film stays on outward faces until packing.",
    },
    {
      title: "QC hold and labelling",
      body: "Random panels from each run are measured for thickness, squareness and facing adhesion. Failed boards trigger a hold on the whole run until root cause is cleared — press temperature, glue spread or dam alignment. Bundles that fail hold are segregated and labelled reject; we do not mix rejected boards into an export pack or slip them into domestic truck loads.",
    },
    {
      title: "Export packing and container loading",
      body: "Panels are stacked flat with edge protectors, poly strapping and corner boards sized for 40-foot HC containers — occasionally 20-foot when the BOQ is small. Each bundle carries a label matching the packing list line and room zone where applicable. Dunnage and weight distribution are planned before the first bundle enters the box; loading photos are available on request when damage claims arise.",
      duration: "1–2 days per container",
    },
  ],
  rawMaterials: {
    heading: "Raw materials we specify",
    paragraphs: [
      "Facing steel is pre-painted galvanised (PPGI) or galvalume in grades matched to your corrosion environment — coastal export orders and chemical-belt sites often step up coating weight. Coil colour and batch are recorded on the packing list so site teams can check consistency on arrival.",
      "Foam systems are polyurethane (PUF) for standard cold chain duty or polyisocyanurate (PIR) where lower thermal conductivity or improved fire behaviour is specified. Rockwool panels use mineral wool slabs laminated between steel facings — a separate line path from foam cores.",
      "Cam-lock hooks, gaskets, coving profiles and door jamb sections are sourced to match wall thickness. We do not substitute generic hardware that leaves a gap at the insulation line.",
      "Incoming coils and foam chemicals are checked against supplier batch sheets before they enter the line. We are not a trading house — material spec on your drawing is what we aim to trace through production, not whatever coil was cheap that week.",
    ],
  },
  inProcessChecks: {
    heading: "In-process checks",
    paragraphs: [
      "Thickness is measured with a calibrated micrometer at the centre and both edges — foam can sag at wide spans if press timing is wrong. Cover width and effective length are checked against the order schedule before bundling.",
      "Facing adhesion is spot-checked by attempting to peel the steel lip at the panel edge — delamination at this stage means the whole run stops until press temperature and glue spread are corrected.",
      "Squareness and edge profile are checked on the first cut length of each run. Cam-lock panels get hook engagement verified on a sample before accessories are kitted.",
      "QC hold tags stay on bundles until release. If your order specifies buyer-side inspection, production slots inspection during the run window — not after containers are sealed.",
      "For export orders we photograph bundle stacking before the container door closes. If a panel arrives damaged, those photos settle the argument faster than email threads.",
    ],
  },
  packing: {
    heading: "Packing for ocean freight",
    paragraphs: [
      "Flat stacking with vertical support at intervals prevents permanent bow in long panels. Edge protectors and poly film reduce rub damage during port handling — African ports can be rough on bundles that were packed for a smooth factory floor.",
      "Container loading plans show bundle sequence and weight distribution. We aim for maximum m² per 40-foot HC without crushing the bottom layer — the exact count depends on thickness and profile. Long panels near 11–12 m may reduce pieces per container; we state the trade-off on the quotation rather than surprise you at invoice.",
      "Doors, cam-lock accessories and coving ship in separate crates or nested packs where vibration would damage hooks. Heavy Rockwool panels need lower stack heights — stuffing them like PUF is how bottom boards get crushed.",
      "Domestic Gujarat deliveries use truck-friendly bundles with the same edge protection but without container dunnage. Export and domestic panels come off the same line; the difference is how they are strapped and labelled for the journey.",
      "Common questions: maximum length follows transport and container diagonal — we quote the feasible cut per order. Custom RAL colours need coil lead time stated on the proforma. Buyer-arranged inspection must fall inside the production window for your batch, not after the container is sealed.",
    ],
  },
  featureSplit: {
    heading: "Continuous line forming and dispatch",
    prose:
      "The laminator ties foam chemistry, press dwell and facing speed together. Change one variable without adjusting the others and you get voids at the steel-to-foam interface — the failure mode that shows up six months later as condensation trails at joints. Line operators hold panels at QC until the first board of a run passes thickness and adhesion checks. Most domestic orders ship by road to sites in Sanand, Changodar, Dahej, Bharuch, Surat, Morbi, Vadodara or Gandhinagar within one to two days of release. Export orders add port haul and gate-in timing: Mundra is the usual container port, but Kandla (Deendayal), Pipavav, Hazira and Nhava Sheva/JNPT are feasible depending on vessel schedule, freight and your forwarder's booking — confirmed per shipment, not guaranteed on a first email.",
    bullets: [
      "Profile and thickness locked from approved drawings before coil enters the line",
      "Foam density sampled at run start — not assumed from supplier batch sheets",
      "Rejected boards segregated; never repacked into export or domestic bundles",
      "Port and container plan agreed before production release on export orders",
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
    "We test panels against the specification on your quotation — thickness, dimensions, facing finish and foam density sampled in-house before any bundle leaves Ahmedabad. We do not display ISO certificates or third-party test reports we have not issued. When your project requires formal certification and the documents exist, we share them with the shipment or on request.",
  sections: [
    {
      heading: "What we check before dispatch",
      paragraphs: [
        "Every production run gets dimensional checks on length, cover width and thickness at multiple points along the panel. Foam density is sampled from the first board of a run using a core extraction method — we compare against the target range on your order, not a generic catalogue number.",
        "Facing quality is inspected for coating defects, oil marks and edge burrs that would break the gasket line at joints. Cam-lock panels get hook engagement checks on sample pieces before accessories are boxed.",
        "Bundles carry batch labels tied to the production sheet. QC hold tags are removed only after release. Rejected boards from the same run do not ship on a different truck or container to clear floor space — they stay segregated until disposition is recorded.",
        "Export orders get a final visual check on strapping, edge protectors and label match to packing list line items before gate-in. Domestic truck loads get the same release standard minus container dunnage checks.",
      ],
    },
    {
      heading: "How testing is done",
      paragraphs: [
        "In-house checks use calibrated micrometers, steel rules and visual inspection under line lighting. Density samples are weighed and measured in our QC area — results are recorded against the batch label on each bundle.",
        "Third-party laboratory tests — fire reaction, thermal conductivity, formaldehyde emission — are arranged when your specification names a standard and the test report is required for clearance or insurance. We do not quote test results we have not paid a lab to run.",
        "Buyer-arranged inspection (SGS, Bureau Veritas or your nominated agency) is welcome when agreed before production release. Inspectors need access during the run for your order — a visit after the container door closes is too late to verify foam density on your boards.",
      ],
    },
    {
      heading: "Documents we share — and what we will not invent",
      paragraphs: [
        "Standard export shipments include commercial invoice, packing list and certificate of origin prepared from the approved panel schedule. Coil batch references and bundle labels cross-check to those documents.",
        "We share test reports, fire certificates or third-party audit documents only when they exist for the build-up you ordered — copies with the shipment or by email on request. We do not generate ISO 9001 badges, fake lab report numbers or generic CE declarations.",
        "Material test certificates from steel or foam suppliers are shared when your contract requires them and the supplier issued them for that batch. If a supplier MTC is unavailable, we say so — we do not backfill with a template.",
        "Installation manuals and joint detail sheets go with the order when applicable. We do not publish project-specific O&M manuals for sites we did not commission.",
      ],
    },
    {
      heading: "What we test against",
      paragraphs: [
        "The reference document is your approved quotation and panel schedule — thickness, facing grade, foam type and joint detail. If your tender cites IS, EN or ASTM methods, tell us on the enquiry so we map our checks to those clauses or arrange external testing where in-house equipment cannot replicate the method.",
        "Specification confirmed against approved project documentation before dispatch. If a value on this website differs from your signed quotation, the quotation wins.",
        "Visual colour match is checked within a coil batch — not against a printed RAL chip under fluorescent office light. If exact colour continuity across multiple shipments matters, state it on the enquiry so we plan coil allocation.",
      ],
    },
    {
      heading: "Certifications — honest position",
      paragraphs: [
        "Our certifications registry is empty until verified documents are uploaded. We will not invent ISO 9001 numbers or display badges for audits we have not completed. Buyers who need formal QMS certificates should ask on the enquiry — we share what exists, and we say clearly when it does not.",
        "That honesty saves time. Procurement teams in Nairobi or Accra often discover fake certificates at customs anyway. We would rather lose an order than ship paperwork that fails verification.",
        "When your tender mandates a factory audit we have not yet passed, we tell you upfront and quote any pre-shipment inspection alternative you accept — we do not imply the audit exists.",
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
        "Yes, when agreed before production release. Third-party inspectors need access during the production window for your order — not after bundles are already in the container. Inspection hold on dispatch is written on the proforma when applicable.",
    },
    {
      question: "What if panels fail inspection on arrival?",
      answer:
        "Notify us with photos within the period stated on your commercial invoice. Pre-loading photos and packing list weights help establish whether damage occurred in transit or at origin.",
    },
    {
      question: "Do you issue ISO 9001 or CE certificates with every shipment?",
      answer:
        "No — only documents that exist for our company and your build-up are included. Ask on the enquiry if your vendor form requires QMS proof; we respond with what is available, not a placeholder PDF.",
    },
    {
      question: "Can we specify additional tests beyond your standard checks?",
      answer:
        "Yes — name the standard and test method on the RFQ. We quote external lab fees and schedule where in-house equipment cannot run the test. Results attach to your batch when complete, not borrowed from another product line.",
    },
    {
      question: "What records stay in-house versus what ships with the cargo?",
      answer:
        "Production sheets, micrometer logs and density worksheets stay at the plant unless your contract requires copies. Invoice, packing list, certificate of origin and any agreed test reports ship with the cargo or follow by email before vessel sail.",
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
