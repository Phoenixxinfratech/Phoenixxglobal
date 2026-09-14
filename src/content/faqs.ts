import type { FaqCategory, FaqItem } from "./types";

export const sharedFaqs: FaqItem[] = [
  {
    question: "What is the minimum order quantity for export?",
    answer:
      "For container loads, one 20 ft or 40 ft container is the practical minimum — roughly 400–1,200 m² depending on panel thickness. Smaller trial orders can be discussed; LCL (less-than-container) shipping is possible but costs more per m².",
    linkHref: "/export/packaging-and-container-loading/",
    linkLabel: "Packaging and container loading",
  },
  {
    question: "Do you provide CIF or FOB pricing?",
    answer:
      "Both. FOB from the Indian port of loading, or CIF to your named port (Mombasa, Dar es Salaam, Tema, etc.). We itemise freight separately so you can compare with your own forwarder if needed.",
    linkHref: "/export/incoterms-and-payment-terms/",
    linkLabel: "Incoterms and payment terms",
  },
  {
    question: "How long from order to delivery at port?",
    answer:
      "Manufacturing takes 2–4 weeks depending on thickness, volume and current schedule. Sea freight to East Africa is typically 18–25 days from the west coast of India. We share production updates and bill of lading once the container sails.",
    linkHref: "/export/lead-time-and-freight/",
    linkLabel: "Lead time and freight",
  },
  {
    question: "What export documents do you provide?",
    answer:
      "Commercial invoice, packing list, bill of lading, certificate of origin (Chamber of Commerce attested), and shipping bill. Additional certificates (fumigation, test reports) can be arranged on request — confirm before order placement.",
    linkHref: "/export/documentation/",
    linkLabel: "Export documentation",
  },
  {
    question: "Can I visit the factory before ordering?",
    answer:
      "Yes. Our manufacturing facility is in Gujarat, India. Schedule a visit through our sales team — we recommend coming with your project spec so we can walk through the relevant production line and sample panels.",
    linkHref: "/contact/",
    linkLabel: "Contact and visit request",
  },
  {
    question: "Are panel specifications on the website final?",
    answer:
      "Website specifications are indicative and marked as unverified until confirmed against your approved project documentation. Final values — density, λ, thickness tolerance — are on the test report and datasheet issued with your order.",
    linkHref: "/resources/datasheets/",
    linkLabel: "Request datasheets",
  },
  {
    question: "Do you help with import clearance in Africa?",
    answer:
      "We supply export-side documents and coordinate with your nominated clearing agent. Import clearance, duty payment and inland transport are handled by your agent on the ground. We can recommend agents in Kenya and Tanzania if you do not have one.",
    linkHref: "/export/process/",
    linkLabel: "Export process overview",
  },
  {
    question: "What payment terms do you offer for export orders?",
    answer:
      "Standard terms are 30% advance with purchase order, balance before dispatch against copy of bill of lading. Letter of credit is accepted for orders above agreed thresholds. We do not dispatch without confirmed payment as per the agreed terms.",
    linkHref: "/export/incoterms-and-payment-terms/",
    linkLabel: "Payment terms detail",
  },
];

export const faqCategories: FaqCategory[] = [
  {
    id: "product",
    label: "Product selection",
    faqs: [
      {
        question: "When should I specify PUF instead of PIR?",
        answer:
          "PUF is the default for chillers and standard freezers where wall thickness is acceptable and budget per m² matters. PIR earns its premium when you need a thinner wall for the same U-value or higher continuous service temperature. Compare both on calculated U-value, not marketing names alone.",
        linkHref: "/resources/comparisons/puf-vs-pir-panels/",
        linkLabel: "PUF vs PIR comparison",
      },
      {
        question: "Which core type suits a fire-rated partition wall?",
        answer:
          "Mineral wool cores — rockwool or tested fire-rated systems — when the drawing calls for non-combustible insulation or a rated fire period. Foam cores (PUF/PIR) are combustible and belong in cold or process envelopes where fire code allows them inside a complete system.",
        linkHref: "/resources/comparisons/pir-vs-rockwool-panels/",
        linkLabel: "PIR vs Rockwool comparison",
      },
      {
        question: "What panel thickness do I need for a −25 °C freezer?",
        answer:
          "Typical export specs land between 120 mm and 150 mm PUF, or 100 mm to 120 mm PIR for similar U-value — always confirm with your refrigeration load and ambient design conditions. Thickness rises in hot humid climates and drops when internal humidity is controlled.",
        linkHref: "/resources/comparisons/puf-vs-pir-cold-storage/",
        linkLabel: "Cold storage core comparison",
      },
      {
        question: "Can I use roofing panels on vertical walls?",
        answer:
          "Roof profiles are designed for slope drainage and purlin loading — use wall profiles for vertical cladding unless your engineer accepts a roof profile rotated with adjusted fixings. Matching wall and roof from the same facing colour keeps the envelope consistent.",
        linkHref: "/products/wall-panels/",
        linkLabel: "Wall panel specifications",
      },
      {
        question: "Do you supply cam-lock cold room kits?",
        answer:
          "Yes — cold room panels with cam-lock joints ship as modular kits with corners, floors interfaces and door jambs quoted separately. Send internal dimensions, temperature and door count so we bundle the correct thickness and gasket spec.",
        linkHref: "/products/cold-room-panels/",
        linkLabel: "Cold room panel kits",
      },
    ],
  },
  {
    id: "technical",
    label: "Technical specifications",
    faqs: [
      {
        question: "What does U-value mean on a panel datasheet?",
        answer:
          "U-value is thermal transmittance of the complete wall or roof assembly in W/m²·K — lower is better. It combines core λ, thickness, facings and any air gaps. Do not compare core λ alone without the same total build-up thickness and joint detail.",
        linkHref: "/resources/glossary/#u-value",
        linkLabel: "U-value glossary entry",
      },
      {
        question: "What facing should I choose for a coastal site?",
        answer:
          "PPGL (galvalume) or heavier galvanizing with a suitable paint system resists salt air better than standard PPGI. Coastal specs often add stainless fixings and closer maintenance intervals — core type matters less than facing mass and coating class.",
        linkHref: "/resources/glossary/#ppgl",
        linkLabel: "PPGL definition",
      },
      {
        question: "How do I avoid condensation inside a cold store?",
        answer:
          "Continuous vapour control on the warm side of the insulation line, sealed joints, and thermal breaks at door frames and penetrations. Condensation at panel field usually means air leakage — not failed foam — until proven otherwise with a hygrothermal review.",
        linkHref: "/solutions/cold-storage/",
        linkLabel: "Cold storage solution page",
      },
      {
        question: "What is cover width and why does it matter for ordering?",
        answer:
          "Cover width is the effective panel width after overlap — typically near 1000 mm on sandwich panels. Order quantity in m² divided by cover width gives panel count; rounding up avoids site gaps. Always confirm cover width on the quotation packing list.",
        linkHref: "/resources/glossary/#cover-width",
        linkLabel: "Cover width definition",
      },
      {
        question: "Are published fire ratings valid for any installation?",
        answer:
          "No — fire classification applies to a tested system: core, facings, fixings and joint detail together. Substituting screws, omitting fire stops or changing span invalidates a catalogue claim. Send your required rating and standard reference before ordering.",
        linkHref: "/products/fire-rated-panels/",
        linkLabel: "Fire-rated panel page",
      },
    ],
  },
  {
    id: "export",
    label: "Export and logistics",
    faqs: sharedFaqs,
  },
  {
    id: "commercial",
    label: "Commercial and quoting",
    faqs: [
      {
        question: "What information do you need to quote accurately?",
        answer:
          "Panel type, thickness, total m², facing colour, delivery port, incoterm preference and required-by date. For cold rooms add internal dimensions, temperature and door schedule. Incomplete specs get indicative pricing — final proforma follows confirmed drawings.",
        linkHref: "/request-a-quote/",
        linkLabel: "Request a quotation",
      },
      {
        question: "Can I mix panel types in one container?",
        answer:
          "Yes — common on multi-room cold sites or projects needing both wall and roof profiles. We label bundles by room or elevation to simplify customs and site unloading. Declare mixed SKUs early so packing lists match your clearing agent's expectations.",
        linkHref: "/export/packaging-and-container-loading/",
        linkLabel: "Container loading guidance",
      },
      {
        question: "Do quotes include installation?",
        answer:
          "Export quotes cover ex-works or FOB/CIF panel supply unless erection is explicitly added. We can recommend installers in some African markets; labour, cranes and local permits remain the buyer's scope unless agreed otherwise in writing.",
        linkHref: "/export/process/",
        linkLabel: "Export process",
      },
      {
        question: "How do currency and freight volatility affect pricing?",
        answer:
          "Steel and freight indices move monthly — quotations carry validity dates. CIF quotes can be fixed to sailing week once booking confirms; FOB leaves freight to your forwarder. Reconfirm before PO if your decision cycle exceeds the stated validity.",
        linkHref: "/export/incoterms-and-payment-terms/",
        linkLabel: "Incoterms detail",
      },
      {
        question: "Can I order a trial quantity before a full cold store?",
        answer:
          "Sample panels or a small LCL shipment are possible but cost more per m² than a full container. Many buyers instead order one room thickness as phase one of a multi-room project — discuss phasing on the quotation call.",
        linkHref: "/contact/",
        linkLabel: "Contact export team",
      },
    ],
  },
  {
    id: "installation",
    label: "Installation and site",
    faqs: [
      {
        question: "What tools do erectors need for cam-lock panels?",
        answer:
          "Cam wrench, torque-controlled drill for optional clip plates, gasket lubricant compatible with food environments, and vapour-barrier tape rated for cold rooms. Panels lift by spreader bar or suction — never chain through foam without edge protection.",
        linkHref: "/resources/glossary/#cam-lock",
        linkLabel: "Cam-lock joint definition",
      },
      {
        question: "How much expansion gap do panels need in hot climates?",
        answer:
          "Follow manufacturer end-gap tables for the maximum expected panel temperature on site — not just ambient air. Dark outer colours and direct sun increase metal expansion. Missing gaps show as buckled profiles or popped fasteners after the first hot season.",
        linkHref: "/products/roofing-panels/",
        linkLabel: "Roofing panel installation notes",
      },
      {
        question: "Can panels be cut on site for openings?",
        answer:
          "Factory end cuts are preferred for cam-lock rooms — site cuts need re-sealed facings and vapour tape at every exposed core edge. Large openings should be framed in the order so factory punching maintains gasket continuity where possible.",
        linkHref: "/products/cold-room-panels/",
        linkLabel: "Cold room panel page",
      },
      {
        question: "Who is responsible for structural design of purlins?",
        answer:
          "Your structural engineer sizes primary and secondary steel for wind, dead load and deflection limits using panel weight tables we supply. We do not stamp local foundations or seismic designs — we provide reactions and span tables for the specified panel build-up.",
        linkHref: "/products/peb-prefabricated-buildings/",
        linkLabel: "PEB and frame packages",
      },
      {
        question: "What warranty applies after installation abroad?",
        answer:
          "Manufacturing defects are covered per order terms when installation follows our erection sheet and fixings are as specified. Corrosion from wrong fixings, missing flashings or cut cores without sealing is a site workmanship exclusion — document handover with photos.",
        linkHref: "/quality-and-testing/",
        linkLabel: "Quality and testing",
      },
    ],
  },
];
