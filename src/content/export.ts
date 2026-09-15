import type { FaqItem, ImageRef, SpecRow } from "./types";
import type { ProcessStep, ProseSection } from "./company";

const STOCK_CAPTION = "Stock photo — not the Phoenixx plant or a Phoenixx loading operation.";

export type ExportSupportLink = {
  label: string;
  href: string;
  description: string;
};

export type ExportHubContent = {
  intro: string;
  keySpecs: Array<{ label: string; value: string }>;
  quickAnswer: { heading: string; text: string };
  sections: ProseSection[];
  supportLinks: ExportSupportLink[];
  faqs: FaqItem[];
  heroImage: ImageRef;
  ctaHeading: string;
  ctaCopy: string;
};

export type ExportProcessContent = {
  intro: string;
  processSteps: ProcessStep[];
  buyerInputs: ProseSection;
  installationNote: ProseSection;
  faqs: FaqItem[];
  ctaHeading: string;
  ctaCopy: string;
};

export type ExportDocumentationContent = {
  intro: string;
  standardDocs: ProseSection;
  buyerAgentNote: ProseSection;
  optionalDocs: ProseSection;
  docTable: SpecRow[];
  faqs: FaqItem[];
  ctaHeading: string;
  ctaCopy: string;
};

export type ExportPackagingContent = {
  intro: string;
  bundleSection: ProseSection;
  containerSection: ProseSection;
  damageSection: ProseSection;
  containerComparison: {
    columns: string[];
    rows: Array<{ label: string; values: string[] }>;
  };
  detailImages: ImageRef[];
  faqs: FaqItem[];
  ctaHeading: string;
  ctaCopy: string;
};

export type ExportIncotermsContent = {
  intro: string;
  incotermRows: Array<{ label: string; values: string[] }>;
  paymentSection: ProseSection;
  proformaNote: string;
  faqs: FaqItem[];
  ctaHeading: string;
  ctaCopy: string;
};

export type ExportLeadTimeContent = {
  intro: string;
  productionDrivers: ProseSection;
  transitSection: ProseSection;
  delaySection: ProseSection;
  transitTable: SpecRow[];
  faqs: FaqItem[];
  ctaHeading: string;
  ctaCopy: string;
};

export const exportHubContent: ExportHubContent = {
  intro:
    "This is PHOENIXX SMARTBUILD's India sandwich panel export hub — we manufacture PUF, PIR and Rockwool panels, cold room kits, industrial doors and PEB cladding in Ahmedabad and ship them to buyers who need accurate packing lists, commercial documents and containers that survive a rough port unload. Africa is our primary market cluster; this hub explains what we export, how an order runs from enquiry to vessel sailing, and where to read country-specific port notes.",
  keySpecs: [
    { label: "Origin", value: "Ahmedabad, Gujarat" },
    { label: "Dispatch", value: "Indian ports (confirm per shipment)" },
    { label: "Typical markets", value: "East & West Africa" },
    { label: "Order basis", value: "Made-to-order — no overseas stock" },
  ],
  quickAnswer: {
    heading: "How do I import sandwich panels from India?",
    text: "Start with an Indian manufacturer who quotes panel thickness, joint type and indicative m² per 40-foot HC container against your room layout — then lock destination port, Incoterm and your clearing agent's document checklist before production release. We manufacture in Ahmedabad, pack for ocean freight to African ports (and other export enquiries), and issue commercial invoice, packing list, bill of lading and certificate of origin as standard; import declaration, duty and inland haulage sit with your agent at destination. Send port name, temperature band and a layout PDF through the quotation form — we reply with a dated offer and flag missing inputs rather than guessing.",
  },
  sections: [
    {
      heading: "What we export",
      paragraphs: [
        "PUF and PIR foam-core sandwich panels for cold rooms and industrial envelopes, Rockwool panels where fire performance drives the wall build-up, modular cold room kits with cam-lock joints, cleanroom-facing panels, fire-rated build-ups, industrial cold room doors and PEB steel structures with matching cladding packages. Each product family has a technical page with thickness options, joint types and typical applications.",
        "We export the building envelope — panels, doors, coving, gaskets and accessory lists with layout drawings your installer works from. We do not supply refrigeration plant, HVAC equipment or site erection labour as part of a panel order. If your tender bundles plant and panels, split the scope early so documentation and HS classification stay clean.",
      ],
    },
    {
      heading: "How orders run",
      paragraphs: [
        "You send room dimensions or a layout PDF, target temperature per zone, fire requirement if any, destination port and Incoterm preference. We reply with a dated quotation listing panel thickness, facing grade, accessory counts and indicative m² per 40-foot HC container at your thickness. Once you release the order with agreed commercial terms, production follows an approved panel schedule — colour, foam system and joint profile locked from the signed drawing.",
        "QC hold, export packing and document preparation run in parallel before container gate-in. We share draft commercial documents for your clearing agent to review while the vessel is still on the water — waiting until arrival to discover a mismatch on consignee name or product description is the most common avoidable delay we see from African buyers.",
      ],
    },
    {
      heading: "Packing and container loading",
      paragraphs: [
        "Panels travel flat in strapped bundles with edge protectors, corner boards and poly film sized for port handling — not for a factory floor photograph. Bundle labels match packing list line items so your site team can sort by room zone on arrival. Container type depends on panel length and stack height: long roof sheets often need a 40-foot HC; shorter wall panels may fit a standard 40-foot with different stacking geometry.",
        "Exact m² per container is confirmed on your quotation at the agreed thickness — do not assume a competitor's loading figure applies to your profile. Loading photos are available on request if damage is disputed at destination.",
      ],
    },
    {
      heading: "Documentation we prepare",
      paragraphs: [
        "Standard export set from India: commercial invoice, packing list, bill of lading, certificate of origin and GST/shipping bill copies as applicable. We do not file your import declaration, IDF or PVoC at destination — that is your clearing agent's job with paperwork requirements that change by country and product classification.",
        "Share your agent's checklist before we dispatch. If they need a specific product description format, consignee block or extra inspection certificate, tell us on the enquiry — adding fields after the container has sailed costs more than getting it right at invoice draft stage.",
      ],
    },
    {
      heading: "Freight and lead times",
      paragraphs: [
        "Manufacturing typically runs two to four weeks from drawing approval, depending on thickness mix, facing colour and queue position. Ocean transit from Indian west coast ports to East African main ports is often in the 18–28 day range — indicative only, because vessel routing, transshipment and seasonal congestion move the date.",
        "Total elapsed time is production plus transit plus clearance at destination. Buyers who start import paperwork when the vessel sails rather than when the order is placed consistently see shorter port stays. We publish indicative ranges on the lead time page — not guaranteed arrival dates.",
      ],
    },
    {
      heading: "Payment and commercial terms",
      paragraphs: [
        "Typical structures include advance against proforma invoice, balance before dispatch or against copy documents, and letter of credit where the buyer's bank requires it. We do not publish fixed payment terms as universal policy — commercial terms are agreed per order and confirmed in the proforma invoice.",
        "Incoterm choice (EXW, FOB, CFR, CIF, DAP) shifts where freight and insurance sit on the invoice and who books the vessel. Read the incoterms page for plain-language responsibility splits, then state your preference on the RFQ.",
      ],
    },
    {
      heading: "Markets we ship to",
      paragraphs: [
        "Most export enquiries come from East and West Africa — cold storage, food processing and warehouse projects around Mombasa, Dar es Salaam, Tema, Lagos and Durban corridors. Kenya has the most complete country page on this site, with Mombasa port and documentation notes written for real import workflows. Other African country pages expand as we publish unique logistics notes — links below include live and in-progress routes.",
        "Enquiries also come from Gulf destinations on cold chain and industrial projects. We do not maintain country pages for every Gulf port yet — country pages expand as we publish unique logistics notes rather than duplicate generic copy. We do not maintain warehouses or sales offices outside India. Every shipment is ex-factory Ahmedabad through Indian ports (e.g. Mundra / Nhava Sheva as typical West Coast options — confirm per shipment). Inland delivery in your country is arranged by your agent or haulier after clearance.",
      ],
    },
  ],
  supportLinks: [
    {
      label: "Export process",
      href: "/export/process/",
      description: "Enquiry through container gate-in with indicative durations",
    },
    {
      label: "Shipping documentation",
      href: "/export/documentation/",
      description: "Commercial set we prepare and what your agent must file",
    },
    {
      label: "Packaging and loading",
      href: "/export/packaging-and-container-loading/",
      description: "Bundle construction and 20/40/40HC selection logic",
    },
    {
      label: "Incoterms and payment",
      href: "/export/incoterms-and-payment-terms/",
      description: "EXW, FOB, CFR, CIF, DAP and typical payment structures",
    },
    {
      label: "Lead time and freight",
      href: "/export/lead-time-and-freight/",
      description: "Production drivers and indicative ocean transit",
    },
    {
      label: "Export to Africa overview",
      href: "/export/africa/",
      description: "Climate bands, port corridors and country page links",
    },
  ],
  faqs: [
    {
      question: "Which Indian port do you ship from?",
      answer:
        "Dispatch is from Indian west coast ports — Mundra and Nhava Sheva (JNPT) are typical options depending on vessel schedule and freight booking. We confirm the port of loading on your proforma invoice and bill of lading — do not assume a port from an old shipment.",
    },
    {
      question: "Can you handle customs clearance in my country?",
      answer:
        "No. We prepare export documents from India. Import declaration, duty payment, IDF/PVoC or equivalent processes at destination are handled by your clearing agent. Share their requirements early so our invoice and packing list match what they file.",
    },
    {
      question: "What is the minimum order for export?",
      answer:
        "Practical minimum is often one 20-foot or 40-foot container of panels — smaller lots may be possible but freight cost per m² rises sharply. Send your m² estimate and port; we advise whether container load makes sense or if a mixed shipment with accessories is better.",
    },
    {
      question: "Do you include installation in export quotes?",
      answer:
        "No. We supply panels, doors, accessories and drawings. Your local contractor or EPC erects the envelope. We can comment on cam-lock sequence and joint torque from our installation notes — we do not send erection crews abroad.",
    },
    {
      question: "How do I compare quotes from Indian suppliers?",
      answer:
        "Match thickness, facing grade, foam type, joint detail and Incoterm — not headline m² price alone. Ask for m² per container at your thickness, document list, production lead time and what happens if panels arrive with edge damage. Missing any of those lines usually explains a cheap quote.",
    },
    {
      question: "Where should I start for a Kenya project?",
      answer:
        "Read the Kenya export page for Mombasa port context and documentation notes, then send your layout with target temperatures. That page is written for buyers who already have a clearing agent — if you do not, appoint one before production release.",
    },
    {
      question: "Why does m² per container vary so much between quotations?",
      answer:
        "Thickness, profile, longest panel length and accessory mix all change stack geometry. A 100 mm wall profile loads differently from a 150 mm roof sheet or a crate of doors nested between bundles. Your proforma states indicative m² at your spec — do not copy another project's container count.",
    },
    {
      question: "How do I verify I am dealing with a manufacturer, not a trader?",
      answer:
        "Ask for factory address, production lead time tied to drawing approval, m² per container at your thickness, and sample packing photos from a recent dispatch. Traders often quote headline m² price without joint type, document list or load count. Plant visits in Ahmedabad can be arranged before first order.",
    },
    {
      question: "Do you ship sandwich panels to the UAE or Saudi Arabia?",
      answer:
        "Yes — we manufacture in Ahmedabad and ship to Gulf ports such as Jebel Ali or Jeddah / Dammam on a made-to-order basis. Read the UAE and Saudi Arabia country pages for climate, packing and agent notes, then send port, Incoterm and layout for a dated quotation.",
    },
  ],
  heroImage: {
    src: "/images/hero/hero-export-containers.jpg",
    alt: "Cargo ship loaded with shipping containers at a port",
    width: 2560,
    height: 1707,
    caption: STOCK_CAPTION,
    isStock: true,
  },
  ctaHeading: "Request export pricing — port, Incoterm and layout",
  ctaCopy:
    "Attach room dimensions and temperature targets. We reply with panel schedule, indicative container load and export pricing — with missing inputs flagged, not filled with guesses.",
};

export const exportProcessContent: ExportProcessContent = {
  intro:
    "Export orders follow the same sequence whether the destination is Mombasa, Dar es Salaam or Tema — specification, production, packing, documents, container gate-in, ocean transit, then clearance and site work on your side. Durations below are indicative; your quotation carries the dates that apply to your release.",
  processSteps: [
    {
      title: "Enquiry and specification",
      body: "You send layout PDF or room dimensions, target temperature, fire requirement if any, destination port and Incoterm preference. We ask clarifying questions on facing grade, door sizes and accessory counts rather than assuming defaults.",
      duration: "Response: 1–3 working days",
    },
    {
      title: "Quotation and drawing review",
      body: "We issue a dated quotation with panel thickness, joint type, accessory list and indicative m² per container. You review against your BOQ; revisions are normal when room heights or door positions change.",
      duration: "Review: buyer-dependent",
    },
    {
      title: "Order confirmation and proforma",
      body: "Purchase order or signed acceptance triggers a proforma invoice with agreed payment terms, Incoterm and production window. Drawings are locked at this stage — late profile changes restart scheduling.",
      duration: "Typical: 3–7 days to release",
    },
    {
      title: "Production",
      body: "Panels run on the continuous line to approved length and thickness. Foam density is sampled at run start; bundles are labelled by room zone for site sorting.",
      duration: "Typical: 2–4 weeks from drawing approval",
    },
    {
      title: "QC hold and export packing",
      body: "Random panels checked for thickness and facing adhesion. Bundles stacked flat with edge protectors and strapping suited to ocean freight and rough port handling.",
      duration: "1–2 days per container lot",
    },
    {
      title: "Export documentation",
      body: "Commercial invoice, packing list, certificate of origin and shipping bill prepared. Draft copies can be sent to your clearing agent before vessel departure.",
      duration: "Parallel with packing",
    },
    {
      title: "Container loading and gate-in",
      body: "Loading plan follows bundle sequence and weight distribution. Gate-in at Indian port; bill of lading issued once vessel space is confirmed.",
      duration: "1–2 days at factory/port handoff",
    },
    {
      title: "Ocean transit",
      body: "Transit time depends on routing and transshipment — East African main ports from Indian west coast are often 18–28 days but not guaranteed. Track via carrier; we share sailing schedule when booked.",
      duration: "Indicative — see lead time page",
    },
    {
      title: "Destination clearance and inland haulage",
      body: "Your clearing agent files import declaration, pays duties and arranges inspection if required. Inland transport from port to site is buyer-arranged unless DAP was agreed in writing on the proforma.",
      duration: "Varies by country and agent",
    },
    {
      title: "Site delivery and installation",
      body: "We do not erect panels abroad. Your contractor unpacks bundles, checks quantities against packing list and installs per our layout drawings. Report transit damage with photos within the period on your invoice.",
      duration: "Site programme — buyer contractor",
    },
  ],
  buyerInputs: {
    heading: "What we need from you at each stage",
    paragraphs: [
      "At enquiry: layout or dimensions, temperature band, port name, Incoterm preference and clearing agent contact if you have one. At order release: signed drawing approval, consignee details exactly as they should appear on the bill of lading, and payment per proforma terms.",
      "Before dispatch: confirmation that import paperwork (IDF, PVoC or local equivalent) is in progress if your country requires it pre-shipment. Chasing documents after the container sails is slower than starting when production begins.",
    ],
  },
  installationNote: {
    heading: "Installation support — what we do and do not do",
    paragraphs: [
      "We supply installation notes for cam-lock sequence, gasket compression and door hanging tolerances. Remote clarification on joint detail is part of export support — flying a crew to site is not included unless separately contracted and agreed in writing.",
      "If your EPC expects a single subcontractor to supply and erect, scope that locally. Our deliverable ends at documented ex-factory or port handoff per the agreed Incoterm.",
    ],
  },
  faqs: [
    {
      question: "Can production start before my import permit is ready?",
      answer:
        "Often yes — but risk sits with the buyer if shipment cannot be cleared. Confirm with your agent whether IDF or pre-shipment inspection must complete before dispatch. We can hold finished goods briefly; indefinite storage is not standard.",
    },
    {
      question: "Who books freight — buyer or PHOENIXX?",
      answer:
        "Depends on Incoterm. FOB Ahmedabad/Indian port means you or your forwarder books the vessel. CFR/CIF means we arrange freight to named port — details on the incoterms page. State preference on the RFQ.",
    },
    {
      question: "Can I inspect panels before loading?",
      answer:
        "Third-party or buyer inspection at Ahmedabad is possible when agreed before production release. Inspection after bundles are containerised is too late to change thickness without unloading cost.",
    },
    {
      question: "What happens if the vessel rolls to a later sailing?",
      answer:
        "Ocean schedules slip — transshipment ports congest, lines blank sailings. We notify you when carrier updates ETD. Storage at Indian port if gate-in happened early may incur demurrage — we plan loading close to cut-off where possible.",
    },
  ],
  ctaHeading: "Start with a layout and port name",
  ctaCopy:
    "We map your enquiry to the process stages above and reply with a quotation that states production window and document set — not a generic export brochure.",
};

export const exportDocumentationContent: ExportDocumentationContent = {
  intro:
    "Wrong paperwork delays panel cargo more often than wrong foam density. This page lists the commercial documents we prepare from India as standard, what your clearing agent must file at destination, and where assumptions become expensive mistakes.",
  standardDocs: {
    heading: "Documents we prepare from India",
    paragraphs: [
      "Commercial invoice with product description, quantity, unit price and Incoterm — matching the proforma you accepted. Packing list with bundle numbers, dimensions, gross and net weight per line, aligned with labels on each bundle. Bill of lading once the carrier accepts the container. Certificate of origin when the shipment and destination require it. GST invoice and shipping bill copies for Indian export compliance.",
      "Product description wording is agreed with your agent where possible — generic terms like 'insulated panels' cause HS classification disputes. We use the specification from your approved quotation; we do not invent HS codes as fact for your market.",
    ],
  },
  buyerAgentNote: {
    heading: "Your clearing agent's work — not ours",
    paragraphs: [
      "Import declaration, duty assessment, pre-shipment or destination inspection schemes, and port storage charges sit with your licensed agent in the destination country. Requirements change by country, product classification and current regulation — we do not guarantee clearance outcomes or duty rates on this website.",
      "Kenya buyers commonly need an Import Declaration Form before shipment and may need PVoC depending on classification — confirm with your agent; do not treat our country notes as legal advice. Tanzania, Uganda, Ghana and other markets have their own portals and forms. Share agent contact details on the enquiry so we can cc draft documents for review.",
    ],
  },
  optionalDocs: {
    heading: "Optional documents when projects require them",
    paragraphs: [
      "Third-party inspection reports, additional test certificates, fumigation certificates for wooden dunnage where destination rules require, and bank-specific L/C wording — arranged when your tender or letter of credit names them and the documents exist or can be commissioned in time.",
      "We do not display certificates we have not issued. If your checklist asks for ISO 9001 or a fire test we have not run for your build-up, we say so plainly and quote external testing if needed.",
    ],
  },
  docTable: [
    {
      label: "Commercial invoice",
      value: "Issued with shipment; matches proforma terms",
      verified: true,
    },
    {
      label: "Packing list",
      value: "Bundle-level weights and dimensions",
      verified: true,
    },
    {
      label: "Bill of lading",
      value: "Carrier document; consignee as buyer confirms",
      verified: true,
    },
    {
      label: "Certificate of origin",
      value: "When destination or L/C requires",
      verified: true,
    },
    {
      label: "Import declaration (destination)",
      value: "Filed by buyer's clearing agent",
      verified: false,
      note: "Forms and timing vary by country",
    },
    {
      label: "Duty and HS classification",
      value: "Calculated by agent at destination",
      verified: false,
      note: "We do not publish duty rates as fact",
    },
  ],
  faqs: [
    {
      question: "Can you consign the bill of lading to my bank under L/C?",
      answer:
        "Yes when the L/C terms are agreed before production and the wording is confirmed in writing. Late changes to consignee or notify party after loading may require amendment fees from the carrier and bank.",
    },
    {
      question: "Do you send documents by courier before the vessel arrives?",
      answer:
        "Electronic copies go to you and your agent by email as standard. Originals follow by courier when required for clearance — courier mode and cost depend on Incoterm and what your agent needs physically at destination.",
    },
    {
      question: "What if my agent rejects the product description?",
      answer:
        "Tell us their required format before invoice finalisation. Re-issuing after dispatch is possible but slow — catch mismatches at draft stage while the container is still at factory.",
    },
    {
      question: "Are your documents valid for customs in every African country?",
      answer:
        "They satisfy Indian export requirements and standard commercial practice. Whether destination customs accepts them without amendment depends on local rules and your agent's filing — we cannot guarantee clearance timelines or outcomes.",
    },
  ],
  ctaHeading: "Share your agent's checklist with the enquiry",
  ctaCopy:
    "Send port, Incoterm and document requirements alongside your layout. We prepare the commercial set to match — and flag gaps before dispatch, not at destination.",
};

export const exportPackagingContent: ExportPackagingContent = {
  intro:
    "How many panels fit in a container depends on thickness, profile and longest length — your proforma carries the number, not a generic table. Panels that survive Ahmedabad QC can still arrive with crushed edges if the bundle was packed for a smooth factory floor and unloaded with a fork lift at a congested port. This page covers how we build export bundles, how container type follows panel length, and the damage modes we design against.",
  bundleSection: {
    heading: "Bundle construction",
    paragraphs: [
      "Panels stack flat with foam-to-foam contact avoided by spacers where profile geometry requires it. Edge protectors run the full length of long sheets; corner boards protect tongue-and-groove ends that chip easily in transit. Poly strapping tension is set for ocean vibration — overtightening bows thin panels.",
      "Each bundle carries a label matching the packing list line: room zone, panel length, thickness and quantity. Cam-lock accessories and doors ship in separate crates with desiccant where sea air is a concern. Mixed containers — panels plus small parts — need a loading sequence so crates are not crushed by panel weight on top.",
    ],
  },
  containerSection: {
    heading: "20-foot, 40-foot and 40-foot HC — what drives the choice",
    paragraphs: [
      "Panel length is the first constraint: 11.8 m roof sheets often need a 40-foot HC internal height; cutting to shorter lengths may allow a standard 40-foot but reduces site lap joints — engineering decides, not freight alone. Width and thickness set how many panels stack before weight limits the layer count.",
      "A 20-foot container suits small cold room kits or accessory-heavy shipments where panel m² is low. Most export panel orders aim for 40-foot HC utilisation — m² per box is quoted at your thickness on the proforma, not copied from a catalogue table.",
    ],
  },
  damageSection: {
    heading: "Damage prevention in transit",
    paragraphs: [
      "Bottom layers see the highest compressive load — we limit stack height and use spreader boards. Film wrap reduces rub between facing sheets; it does not stop puncture from improper fork lift handling at port. Pre-loading photos document bundle condition before the container door closes.",
      "If panels arrive damaged, notify us with photos and packing list reference within the period stated on your invoice. Arguments resolve faster when load photos exist — without them, origin and carrier blame is guesswork.",
    ],
  },
  containerComparison: {
    columns: ["20-foot", "40-foot", "40-foot HC"],
    rows: [
      {
        label: "Typical use",
        values: [
          "Small kits, accessories, trial lots",
          "Standard length wall panels",
          "Long roof sheets, max m² loads",
        ],
      },
      {
        label: "Internal length (approx.)",
        values: ["5.9 m", "12.0 m", "12.0 m"],
      },
      {
        label: "Internal height (approx.)",
        values: ["2.35 m", "2.35 m", "2.69 m"],
      },
      {
        label: "Panel length driver",
        values: [
          "Short cuts only unless overhang planned",
          "Up to ~11.8 m with clearance",
          "Extra headroom for tall stacks / long units",
        ],
      },
    ],
  },
  detailImages: [
    {
      src: "/images/solutions/port-cargo.jpg",
      alt: "Cargo ship with containers docked at a port — export freight context",
      width: 2560,
      height: 1707,
      caption: "Stock photo — port and ocean freight context; not a Phoenixx shipment.",
      isStock: true,
    },
    {
      src: "/images/hero/hero-export-containers.jpg",
      alt: "Container ship loaded with multi-colour shipping containers at sea",
      width: 2560,
      height: 1707,
      caption: "Stock photo — containerised ocean export; not a Phoenixx vessel booking.",
      isStock: true,
    },
    {
      src: "/images/solutions/warehouse-interior.jpg",
      alt: "Empty warehouse interior with high ceiling — storage and handling context",
      width: 2560,
      height: 1707,
      caption: "Stock photo — warehouse handling context; not a Phoenixx dispatch bay.",
      isStock: true,
    },
  ],
  faqs: [
    {
      question: "How many m² fit in a 40-foot HC?",
      answer:
        "Depends on thickness, profile and length — thin 50–80 mm wall panels often pack more m² than 120–150 mm freezer roofs or mixed crates with doors. Accessory-heavy kits reduce panel m² in the same box. Your quotation states indicative m² at your spec. Do not use another project's load count.",
    },
    {
      question: "Can panels overhang a container?",
      answer:
        "No for standard ocean FCL — length must fit inside internal dimensions. Exceptionally long units need break bulk or on-site splicing design — discuss on enquiry if spans exceed container length.",
    },
    {
      question: "Do you use wooden crates?",
      answer:
        "Accessories and doors often ship in plywood crates. Panel bundles use strapping and edge protection — wooden dunnage may appear between layers. Fumigation certificates are supplied when destination rules require treated wood.",
    },
    {
      question: "Can I request extra film wrap for coastal destinations?",
      answer:
        "Yes — note salt-air exposure and expected port storage time on the order. Extra wrap adds material cost and slightly reduces m² per container if stack geometry changes.",
    },
  ],
  ctaHeading: "Ask for m² per container on your quotation",
  ctaCopy:
    "Send thickness, profile and longest panel length. We confirm container type and indicative load — with packing notes your site team can use on arrival.",
};

export const exportIncotermsContent: ExportIncotermsContent = {
  intro:
    "Incoterms define where our responsibility ends and yours begins — factory floor, Indian port rail, ship's rail at destination, or your site gate. Payment terms sit beside Incoterms on the proforma; neither is universal policy on this website.",
  incotermRows: [
    {
      label: "EXW (Ex Works)",
      values: [
        "Buyer collects from Ahmedabad factory",
        "Export clearance and freight are buyer's scope",
        "Lowest seller scope — buyer arranges everything after pickup",
      ],
    },
    {
      label: "FOB (Free on Board)",
      values: [
        "We deliver container to named Indian port and clear export",
        "Buyer books ocean freight and insurance from port of loading",
        "Common when buyer has a forwarder contract",
      ],
    },
    {
      label: "CFR (Cost and Freight)",
      values: [
        "We pay freight to named destination port",
        "Risk transfers when goods are on board at Indian port",
        "Buyer insures transit unless agreed otherwise",
      ],
    },
    {
      label: "CIF (Cost, Insurance and Freight)",
      values: [
        "We pay freight and minimum insurance to named port",
        "Buyer handles import clearance and inland haulage",
        "Insurance scope is as stated on proforma — not unlimited",
      ],
    },
    {
      label: "DAP (Delivered at Place)",
      values: [
        "We arrange carriage to named place short of import clearance",
        "Buyer clears customs and pays import duties",
        "Site access and unloading at destination need agreeing in writing",
      ],
    },
  ],
  paymentSection: {
    heading: "Payment structures — typical patterns, not advice",
    paragraphs: [
      "Advance against proforma — common on first orders — with balance before dispatch or against copy bill of lading. Milestone splits for large PEB packages may tie to production start and pre-loading inspection. Letter of credit at sight or usance when the buyer's bank requires it; L/C wording must be agreed before production because document presentation is strict.",
      "We do not offer open-account terms to unknown buyers by default. Established repeat customers may negotiate different structures — always confirmed in writing on the proforma invoice, not inferred from this page.",
    ],
  },
  proformaNote:
    "Commercial terms are agreed per order and confirmed in the proforma invoice.",
  faqs: [
    {
      question: "Which Incoterm do most African buyers use?",
      answer:
        "CFR or CIF to named port is frequent when the buyer wants one Indian invoice line for freight. Buyers with strong local forwarders often prefer FOB. There is no single best term — match to who books freight and who carries transit risk.",
    },
    {
      question: "Does CIF include import duty at destination?",
      answer:
        "No. CIF covers cost, insurance and freight to named port — not destination customs duties, agent fees or inland delivery unless DAP or DDP was explicitly agreed (DDP is rare for us given import knowledge sits with your agent).",
    },
    {
      question: "Can I pay in USD?",
      answer:
        "Currency is stated on the proforma — USD and INR are typical for export. Exchange rate and bank charges follow the proforma clause; ask on enquiry if your treasury needs a specific structure.",
    },
    {
      question: "Is this page legal advice on trade terms?",
      answer:
        "No. It explains how we usually apply Incoterms in panel export. Your lawyer, bank and clearing agent should confirm terms fit your contract and country rules before you sign the proforma.",
    },
  ],
  ctaHeading: "State Incoterm and payment preference on the RFQ",
  ctaCopy:
    "We quote the responsibility split you ask for — or suggest FOB/CFR alternatives if your forwarder setup makes another term cheaper overall.",
};

export const exportLeadTimeContent: ExportLeadTimeContent = {
  intro:
    "Lead time is manufacturing plus ocean transit plus whatever your clearing agent adds at destination — not a single number on a website banner. This page separates what we control in Ahmedabad from what vessel schedules and import paperwork do to your arrival date.",
  productionDrivers: {
    heading: "What drives production lead time",
    paragraphs: [
      "Queue position when the factory is running multiple export releases — we quote a window, not a mythical 'always two weeks'. Panel thickness and length mix: many unique cuts slow the line versus one repeated wall height. Non-standard facing colour may need coil lead time from the steel supplier.",
      "Drawing approval speed on your side is the silent variable. Orders that sit in 'pending approval' for three weeks then demand dispatch in five days create the failures buyers blame on the factory. Release production only when dimensions and door positions are frozen.",
    ],
  },
  transitSection: {
    heading: "Indicative ocean transit to African ports",
    paragraphs: [
      "From Indian west coast ports (e.g. Mundra / Nhava Sheva — confirm per shipment) to East African hubs such as Mombasa or Dar es Salaam, direct or transshipped routing is often roughly 18–28 days — indicative only. West Africa (Tema, Lagos, Durban) varies more with line and transshipment hub.",
      "Carriers publish schedules that slip — blank sailings, port congestion, weather. Treat transit as a range on your project plan; critical path projects should include buffer for one missed connection.",
    ],
  },
  delaySection: {
    heading: "What delays orders most often",
    paragraphs: [
      "Late drawing changes after production start. Incomplete import paperwork at destination while goods are on the water. Payment or L/C discrepancy holding bill of lading release. Forwarder booking mismatch — container rolled to next vessel after factory gate-in.",
      "Less common but painful: agent rejects invoice description at destination, holding cargo for amendment. Share agent requirements at enquiry; start IDF or equivalent when production begins, not when the vessel docks.",
    ],
  },
  transitTable: [
    {
      label: "Production (typical)",
      value: "2–4 weeks from approved drawings",
      verified: false,
      note: "Quoted per order on proforma",
    },
    {
      label: "Factory to Indian port gate-in",
      value: "1–3 days after packing",
      verified: false,
      note: "Depends on haulage booking",
    },
    {
      label: "Ocean — East Africa (indicative)",
      value: "Often 18–28 days",
      verified: false,
      note: "Not guaranteed; routing-dependent",
    },
    {
      label: "Ocean — West / Southern Africa (indicative)",
      value: "Often 22–35 days",
      verified: false,
      note: "Wider range; confirm with forwarder",
    },
    {
      label: "Destination clearance",
      value: "Agent-dependent",
      verified: false,
      note: "We do not guarantee clearance duration",
    },
  ],
  faqs: [
    {
      question: "Can you expedite production for an urgent site?",
      answer:
        "Sometimes — if the line has capacity and coils are in stock. Rush fees may apply. We will not skip QC hold to save two days; damaged panels cost more than waiting for proper packing.",
    },
    {
      question: "Why did my colleague get a shorter lead time?",
      answer:
        "Different thickness mix, facing colour, order size or approval date. Compare proforma production windows, not WhatsApp rumours.",
    },
    {
      question: "Do you stock panels for immediate export?",
      answer:
        "No — export is made-to-order from Ahmedabad. There is no overseas warehouse to pull from.",
    },
    {
      question: "How early should I place an order before my site handover?",
      answer:
        "Work backwards: clearance buffer at destination (often 1–2 weeks), indicative ocean transit, production window, and your drawing approval time. For a first order, six to ten weeks total elapsed is a safer planning figure than four — verify on your quotation.",
    },
  ],
  ctaHeading: "Ask for a dated production window on your quotation",
  ctaCopy:
    "Send release date expectations with your BOQ. We state manufacturing start, indicative sailing and what we need from you to hold the schedule.",
};
