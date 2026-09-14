import type { ComparisonInput } from "./types";

export const comparisons: ComparisonInput[] = [
  {
    slug: "puf-vs-pir-panels",
    name: "PUF vs PIR Panels",
    h1: "PUF vs PIR Sandwich Panels — Which Core for Your Project?",
    seoTitle: "PUF vs PIR Panels — Comparison | PHOENIXX",
    metaDescription:
      "Compare PUF and PIR sandwich panel cores — thermal conductivity, cost, thickness equivalents and where each core type fits cold storage and industrial envelopes.",
    productA: "puf-panels",
    productB: "pir-panels",
    summary:
      "Both are rigid foam cores in metal facings. PIR has lower thermal conductivity; PUF is typically lower cost per m² for the same facing gauge.",
    quickAnswer:
      "Choose PUF when budget per square metre matters and room temperatures stay in standard chiller or freezer ranges. Choose PIR when you need a thinner wall for the same U-value, higher continuous service temperature, or slightly better long-term thermal stability. Neither replaces a fire-rated mineral wool core where non-combustibility is specified.",
    decisionTable: [
      {
        criterion: "Typical core λ (indicative)",
        optionA: "0.022–0.024 W/m·K",
        optionB: "0.019–0.022 W/m·K",
      },
      {
        criterion: "Relative material cost per m² (same facing)",
        optionA: "Lower — standard PUR foam",
        optionB: "Higher — modified isocyanurate chemistry",
        cheaperWins: true,
      },
      {
        criterion: "Thickness for ~0.20 W/m²·K wall (indicative)",
        optionA: "80–100 mm typical",
        optionB: "60–80 mm typical",
      },
      {
        criterion: "Continuous service temperature",
        optionA: "Up to ~80 °C before degradation risk rises",
        optionB: "Up to ~120 °C with better dimensional stability",
      },
      {
        criterion: "Fire behaviour (foam core)",
        optionA: "Combustible — needs fire-rated build-up if required",
        optionB: "Combustible — similar; not a mineral wool substitute",
      },
      {
        criterion: "Export availability from India",
        optionA: "Full thickness range — standard line item",
        optionB: "Full range — lead time similar to PUF at volume",
      },
    ],
    chooseAWhen:
      "Specify PUF when the project is cost-sensitive, room temperatures are in normal cold storage bands (+2 °C to −25 °C), and the extra 10–20 mm of wall thickness is acceptable. PUF is the default on most chiller rooms, food processing walls and warehouse cladding where fire regulations allow a combustible core inside a protected envelope.",
    chooseBWhen:
      "Specify PIR when floor area is tight and every millimetre of insulation counts — walk-in freezers, plant rooms with limited clearance, or roofs where dead load and purlin height are constrained. PIR also suits applications where the envelope may see higher ambient or process-side temperatures than a standard cold room.",
    costNotes:
      "On like-for-like facing gauge and thickness, PUF is usually 8–15% lower in ex-works panel cost. PIR can offset part of that premium by allowing a thinner panel to hit the same U-value, which reduces steel in facings and sometimes freight volume. Always compare total installed cost: thinner PIR may need the same number of fixings and joint detail as thicker PUF.",
    relatedSolutions: ["cold-storage", "food-processing", "warehousing-logistics"],
    relatedGuides: [],
    faqs: [
      {
        question: "Can I mix PUF walls with a PIR roof on the same cold store?",
        answer:
          "Yes — many projects use PIR on the roof where span and condensation control are tighter, and PUF on walls where thickness is less critical. Match joint detail and facing colour at interfaces, and confirm both cores meet the same vapour control strategy on your drawings.",
      },
      {
        question: "Does PIR always mean a better U-value than PUF?",
        answer:
          "At equal thickness, PIR typically achieves a lower U-value because λ is lower. If you increase PUF thickness to match, the performance gap narrows. Compare on calculated U-value for your actual build-up, not core name alone.",
      },
      {
        question: "Which core is better for coastal export to East Africa?",
        answer:
          "Core type matters less than facing specification. Use PPGL or heavier galvanizing on coastal sites regardless of PUF or PIR. Both foam cores are closed-cell and resist moisture absorption when the envelope is sealed correctly.",
      },
      {
        question: "Are website λ values final for ordering?",
        answer:
          "No — values on product pages are indicative until confirmed on the test report and datasheet issued with your order. Request the current datasheet before structural or refrigeration load calculations are frozen.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "pir-vs-rockwool-panels",
    name: "PIR vs Rockwool Panels",
    h1: "PIR vs Rockwool Sandwich Panels — Thermal vs Fire Performance",
    seoTitle: "PIR vs Rockwool Panels — Comparison | PHOENIXX",
    metaDescription:
      "Compare PIR foam and rockwool mineral wool sandwich panels — insulation value, fire rating, weight, cost and application fit for walls and partitions.",
    productA: "pir-panels",
    productB: "rockwool-panels",
    summary:
      "PIR delivers the best thermal performance in a foam core. Rockwool is non-combustible and suits fire-rated walls where foam cores are excluded.",
    quickAnswer:
      "PIR wins on thermal performance per millimetre of thickness and is the default for cold storage where fire codes allow a foam core. Rockwool wins where non-combustibility, fire compartmentation or higher fire ratings are specified — even though you need a thicker panel for the same insulation value and pay more per m².",
    decisionTable: [
      {
        criterion: "Typical core λ (indicative)",
        optionA: "0.019–0.022 W/m·K",
        optionB: "0.034–0.040 W/m·K",
      },
      {
        criterion: "Combustibility",
        optionA: "Combustible foam — check local fire code",
        optionB: "Non-combustible mineral wool",
      },
      {
        criterion: "Relative panel cost per m²",
        optionA: "Lower for same thickness",
        optionB: "Higher — denser core, slower line speed",
        cheaperWins: true,
      },
      {
        criterion: "Weight per m² (100 mm indicative)",
        optionA: "~12–14 kg/m²",
        optionB: "~18–22 kg/m²",
      },
      {
        criterion: "Typical fire-rated wall use",
        optionA: "Cold rooms, food plants where foam permitted",
        optionB: "Corridors, boundaries, 60–120 min rated walls",
      },
      {
        criterion: "Moisture in cold environments",
        optionA: "Closed-cell — low absorption if sealed",
        optionB: "Open-fibre — needs vapour control on cold side",
      },
    ],
    chooseAWhen:
      "Choose PIR for refrigerated envelopes, processing halls with wash-down facings, and roofs where you need maximum insulation in minimum depth. PIR is appropriate when your fire consultant and local authority accept a combustible core inside a complete system test or when the room is not a fire compartment boundary.",
    chooseBWhen:
      "Choose rockwool when the drawing calls for A1 or non-combustible core, fire-rated partition between occupancies, or separation between production and storage in a multi-tenant facility. Hospitals, data centre boundaries and some pharmaceutical projects push toward mineral wool even where foam would insulate better.",
    costNotes:
      "Rockwool panels cost more per m² at equal thickness — often 25–40% above PIR on export quotes — and you typically need 30–50% greater thickness to approach the same U-value. The cheaper option on thermal grounds is PIR; the cheaper option on fire compliance may still be rockwool if it avoids a secondary fire-rated layer.",
    relatedSolutions: ["cold-storage", "hospitals", "data-centres"],
    relatedGuides: [],
    faqs: [
      {
        question: "Can rockwool panels replace PIR in a freezer room?",
        answer:
          "Technically yes, but you need much thicker panels and careful vapour control on the warm side to limit interstitial condensation. Most freezer specs stay on PIR or PUF unless fire code explicitly prohibits foam cores in that room class.",
      },
      {
        question: "Which panel is lighter for roof loading?",
        answer:
          "PIR panels are lighter at comparable thermal performance because the core density is lower. Rockwool roofs need thicker sections, which adds both insulation weight and facing steel — check purlin design early.",
      },
      {
        question: "Do both panels use the same joint hardware?",
        answer:
          "Wall profiles are similar, but fire-rated rockwool systems may specify different fixings, fire stops at junctions and closer screw patterns. Do not assume PIR erection details copy across without review.",
      },
      {
        question: "How do I document the choice for an insurer?",
        answer:
          "Reference the test report or classification for the complete panel system, not the core marketing name. We supply test summaries with export orders when available — request them at quotation stage.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "puf-vs-eps-panels",
    name: "PUF vs EPS Insulation",
    h1: "PUF Sandwich Panels vs EPS Board — Factory Panel vs Site-Built Insulation",
    seoTitle: "PUF vs EPS Insulation — Comparison | PHOENIXX",
    metaDescription:
      "Compare factory-made PUF sandwich panels with expanded polystyrene (EPS) board insulation — thermal performance, moisture, fire, speed of build and export fit.",
    productA: "puf-panels",
    productB: "wall-panels",
    summary:
      "PUF sandwich panels are factory-bonded steel-faced units with closed-cell foam. EPS is typically site-fixed board insulation — we compare PUF panels against EPS-based build-ups, not a separate EPS product line.",
    quickAnswer:
      "PUF sandwich panels beat EPS board build-ups on air tightness, erection speed and structural composite action in industrial envelopes. EPS can win on raw insulation material cost for simple non-refrigerated shells where you already have a masonry or steel frame and manual labour is cheap — but vapour control and joint continuity are harder to guarantee on site.",
    decisionTable: [
      {
        criterion: "Typical λ — insulation layer only",
        optionA: "0.022–0.024 W/m·K (PUF core)",
        optionB: "0.034–0.038 W/m·K (EPS board)",
      },
      {
        criterion: "Factory quality control",
        optionA: "Continuous bonded composite — one supplier",
        optionB: "Multi-trade site assembly — varies by crew",
      },
      {
        criterion: "Relative installed cost (industrial shed)",
        optionA: "Higher panel price — fewer site days",
        optionB: "Lower material cost — more labour and trades",
        cheaperWins: true,
      },
      {
        criterion: "Air and vapour tightness",
        optionA: "Metal facing + closed-cell core — strong default",
        optionB: "Depends on board joints, tapes and cladding",
      },
      {
        criterion: "Cold storage suitability",
        optionA: "Standard specification path",
        optionB: "Rare — condensation at board joints is common",
      },
      {
        criterion: "Export as prefabricated envelope",
        optionA: "Containerised panels — designed for export",
        optionB: "Bulk EPS ships separately — more site work abroad",
      },
    ],
    chooseAWhen:
      "Choose PUF sandwich panels when you need a weathertight industrial or cold storage envelope in weeks not months, when quality must be repeatable across multiple sites in Africa, or when a single supplier should warrant the composite. PUF is the rational default for cam-lock cold rooms, food plants and prefabricated warehouses.",
    chooseBWhen:
      "EPS board can make sense for non-critical temperature buildings where a block or steel frame already exists and local labour will fix cladding over board insulation. Treat EPS as a budget site-built path — not as a direct substitute for exported cold room panels.",
    costNotes:
      "EPS board material is cheaper per m² of insulation than a finished PUF panel, but total project cost often favours PUF when you include frame, cladding labour, scaffolding and rework. For export projects, prefabricated PUF reduces foreign-site labour and weather risk — that saving rarely appears in a line-item insulation comparison.",
    relatedSolutions: ["warehousing-logistics", "cold-storage", "manufacturing-plants"],
    relatedGuides: [],
    faqs: [
      {
        question: "Do you supply EPS sandwich panels?",
        answer:
          "Our export range is metal-faced PUF, PIR and rockwool sandwich panels. This comparison addresses EPS board systems you may see in local tenders — not a product we manufacture. Ask for PUF or PIR equivalents when EPS is specified on a drawing.",
      },
      {
        question: "Is EPS ever acceptable inside a cold room?",
        answer:
          "Generally no for commercial cold storage — joint gaps and vapour drive lead to icing and loss of performance. If a consultant specifies EPS, ask for the condensation calculation and compare against a closed-cell foam panel build-up.",
      },
      {
        question: "Which option ships more efficiently to East Africa?",
        answer:
          "PUF panels pack as nested bundles in 20 ft or 40 ft containers with known m² per box. EPS boards are bulky for the same R-value and still need steel cladding on site — freight efficiency favours the finished sandwich panel.",
      },
      {
        question: "Can EPS achieve the same fire rating as rockwool?",
        answer:
          "Neither EPS nor PUF is non-combustible. Fire-rated boundaries still need mineral wool or a tested fire-rated system. Do not select EPS expecting rockwool-equivalent fire performance.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "rockwool-vs-glasswool-panels",
    name: "Rockwool vs Glass Wool Panels",
    h1: "Rockwool vs Glass Wool in Sandwich Panels — Mineral Wool Compared",
    seoTitle: "Rockwool vs Glass Wool Panels | PHOENIXX",
    metaDescription:
      "Compare rockwool and glass wool mineral fibre cores for sandwich panels — density, fire performance, moisture handling and when each wool type is specified.",
    productA: "rockwool-panels",
    productB: "fire-rated-panels",
    summary:
      "Both are mineral fibre insulants. Rockwool (stone wool) is what we manufacture for export panels; glass wool appears in other suppliers' fire-rated systems — compare on tested system performance, not fibre name alone.",
    quickAnswer:
      "Rockwool sandwich panels use stone wool with higher density and better moisture tolerance than typical glass wool slabs. Glass wool systems can be lighter and cheaper in some markets but are less common on exported industrial panels. Specify the fire test and classification for the complete panel, not the wool marketing label.",
    decisionTable: [
      {
        criterion: "Typical core density",
        optionA: "100–140 kg/m³ (stone wool panel core)",
        optionB: "Varies — often lower density glass wool in systems",
      },
      {
        criterion: "Moisture resilience",
        optionA: "Superior — stone wool tolerates humidity cycles",
        optionB: "More sensitive — performance drops if wet",
      },
      {
        criterion: "Fire classification potential",
        optionA: "Non-combustible — A1 core achievable",
        optionB: "Non-combustible core possible in rated systems",
      },
      {
        criterion: "Typical λ at panel thickness",
        optionA: "0.034–0.040 W/m·K",
        optionB: "Similar range when densities match",
      },
      {
        criterion: "Export panel availability (our range)",
        optionA: "Standard rockwool wall and fire-rated line",
        optionB: "Fire-rated panel systems — confirm core type on datasheet",
        cheaperWins: true,
      },
      {
        criterion: "Acoustic damping",
        optionA: "Good — higher density helps",
        optionB: "Good at equal density — depends on build-up",
      },
    ],
    chooseAWhen:
      "Choose rockwool-faced sandwich panels when you need a non-combustible core for fire walls, acoustic separation or humid industrial environments. Our rockwool export line targets partitions, external fire-rated walls and corridors where stone wool's moisture behaviour is an advantage.",
    chooseBWhen:
      "Fire-rated panel systems — including some glass wool cores — fit when a specific fire test report or insurer schedule names a tested system classification. Match the system ID on the drawing; we will confirm whether our fire-rated build-up satisfies it or propose an equivalent tested configuration.",
    costNotes:
      "At similar fire performance, glass wool systems in some regions undercut rockwool on material cost. Rockwool panels may cost slightly more per m² but reduce replacement risk in humid or wash-down areas. Compare warranted system performance and local approval — not per-kg wool price alone.",
    relatedSolutions: ["hospitals", "data-centres", "manufacturing-plants"],
    relatedGuides: [],
    faqs: [
      {
        question: "Is rockwool the same as glass wool?",
        answer:
          "No. Rockwool is spun from molten rock; glass wool from molten glass. Both are mineral fibres, but density, λ and moisture response differ. Sandwich panel specifications should name the tested system, not just 'mineral wool'.",
      },
      {
        question: "Which wool type do your fire-rated panels use?",
        answer:
          "Our fire-rated and rockwool export panels use stone wool cores unless a specific datasheet states otherwise. Request the current test summary for the exact classification before substituting against a glass wool system on a tender.",
      },
      {
        question: "Can either wool type go on a cold store exterior?",
        answer:
          "Use closed-cell foam cores for the insulated cold envelope. Mineral wool suits fire boundaries and non-cold external walls — not the primary vapour-tight layer of a freezer unless the hygrothermal design explicitly allows it.",
      },
      {
        question: "How do wool panels compare on weight?",
        answer:
          "Higher-density rockwool cores weigh more than lightweight glass wool slabs at the same thickness. Structural fixings and purlin spacing must be checked against the panel weight table on the datasheet.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "sandwich-panel-vs-masonry",
    name: "Sandwich Panel vs Masonry",
    h1: "Sandwich Panels vs Masonry Walls — Speed, Insulation and Cost",
    seoTitle: "Sandwich Panel vs Masonry — Comparison | PHOENIXX",
    metaDescription:
      "Compare insulated sandwich panel envelopes with masonry and block construction — build speed, thermal performance, freight to Africa and total installed cost.",
    productA: "wall-panels",
    productB: "peb-prefabricated-buildings",
    summary:
      "Sandwich panels deliver structure, weathering and insulation in one prefabricated layer. Masonry needs separate insulation, more wet trades and longer programmes — but may suit sites with abundant local block and strict permanence norms.",
    quickAnswer:
      "Sandwich panels win on programme length, predictable thermal performance and export prefabrication from India. Masonry can win on local material cost where block and labour are inexpensive and insulation standards are modest — but cold storage and food plants rarely accept uninsulated block without a heavy build-up.",
    decisionTable: [
      {
        criterion: "Typical erection speed (warehouse shell)",
        optionA: "Weeks — panel crews and cranes",
        optionB: "Months — block, cure, insulate, clad",
      },
      {
        criterion: "Insulation included in wall build-up",
        optionA: "Yes — factory bonded core",
        optionB: "No — separate trade unless specified",
      },
      {
        criterion: "Relative material cost (local block available)",
        optionA: "Higher imported panel cost",
        optionB: "Lower local block — hidden insulation cost",
        cheaperWins: true,
      },
      {
        criterion: "Cold storage suitability",
        optionA: "Designed for vapour-tight envelopes",
        optionB: "Needs careful insulation and vapour layers",
      },
      {
        criterion: "Export from India to Africa",
        optionA: "Containerised — repeatable quality",
        optionB: "Mostly local procurement abroad",
      },
      {
        criterion: "Future relocation or expansion",
        optionA: "Demountable options with PEB frames",
        optionB: "Permanent — harder to modify openings",
      },
    ],
    chooseAWhen:
      "Choose sandwich panels on steel or PEB frames when the programme must finish before rainy season, when insulation values are specified on drawings, or when the same envelope detail will repeat across multiple regional sites. Food, pharma and logistics investors typically expect panelised industrial shells.",
    chooseBWhen:
      "Masonry remains viable for small ancillary buildings, boundary walls, or regions where import duty on steel panels is prohibitive and local block is cheap. For primary refrigerated or high-bay logistics buildings, masonry rarely competes on total cost once insulation and programme are included.",
    costNotes:
      "Block work looks cheaper on BOQ line items until you add insulation, plaster, cladding, scaffolding and extra weeks of site overhead. Panel quotes are higher upfront but often lower on total installed cost for insulated industrial buildings — especially when panels are shipped ready to fix from India.",
    relatedSolutions: ["warehousing-logistics", "food-processing", "manufacturing-plants"],
    relatedGuides: [],
    faqs: [
      {
        question: "Can sandwich panels attach directly to masonry?",
        answer:
          "Yes — using steel sub-frame or bracket systems, but thermal bridges at fixings must be detailed. New cold stores and warehouses usually use a primary steel frame designed for panel spans rather than retrofitting panels onto uncured block.",
      },
      {
        question: "Which option do banks and tenants prefer in Africa?",
        answer:
          "Institutional tenants for cold chain and logistics increasingly specify insulated panel envelopes with documented U-values. Masonry shells without proven insulation rarely meet those lease schedules without costly retrofit.",
      },
      {
        question: "Are panels less durable than block?",
        answer:
          "Correctly fixed steel-faced panels with appropriate coating last decades in industrial use. Masonry cracks from settlement if foundations move — panels allow some frame flexibility. Maintenance is mostly coating renewal, not structural rebuild.",
      },
      {
        question: "What about acoustic performance versus block?",
        answer:
          "Dense masonry can outperform thin panel walls on airborne sound if untreated. Add mass layers or specify rockwool-cored panels for noisy process areas — compare on the actual STC requirement, not wall type alone.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "puf-vs-pir-cold-storage",
    name: "PUF vs PIR for Cold Storage",
    h1: "PUF vs PIR for Cold Storage — Freezer and Chiller Panel Choice",
    seoTitle: "PUF vs PIR Cold Storage Panels | PHOENIXX",
    metaDescription:
      "Cold storage specific comparison of PUF and PIR sandwich panels — thickness for freezer rooms, vapour control, floor interface and export cold room kits.",
    productA: "cold-room-panels",
    productB: "pir-panels",
    summary:
      "Cold room kits default to PUF cam-lock panels for cost-effective chillers and freezers. PIR suits deeper negative temperatures, tighter floor plates and rooms where thinner walls free operational space.",
    quickAnswer:
      "For standard chillers (+0 °C to +5 °C) and moderate freezers (−18 °C to −25 °C), PUF cam-lock panels are the economical default. Move to PIR when the room targets −30 °C and below, ceiling height is fixed, or the consultant asks for lower λ to reduce wall thickness at door openings and corners.",
    decisionTable: [
      {
        criterion: "Typical chiller room (+2 °C to +5 °C)",
        optionA: "80–100 mm PUF — common export spec",
        optionB: "Often over-spec unless space is tight",
        cheaperWins: true,
      },
      {
        criterion: "Typical freezer (−18 °C to −25 °C)",
        optionA: "120–150 mm PUF — standard range",
        optionB: "100–120 mm PIR — similar U-value, thinner",
      },
      {
        criterion: "Deep freeze (−30 °C and below)",
        optionA: "Possible with increased thickness",
        optionB: "Preferred — lower λ reduces thickness",
      },
      {
        criterion: "Cam-lock joint availability",
        optionA: "Primary cold room kit configuration",
        optionB: "Available — confirm profile with order",
      },
      {
        criterion: "Relative ex-works panel cost",
        optionA: "Lower per m² at same thickness",
        optionB: "Higher — offset if thickness drops",
      },
      {
        criterion: "Vapour barrier responsibility",
        optionA: "Same — warm-side continuity required",
        optionB: "Same — core type does not remove vapour design",
      },
    ],
    chooseAWhen:
      "Choose PUF cold room panels for distribution chillers, meat holding rooms, floral storage and most export cold room kits where cam-lock speed matters and thickness is acceptable. PUF is what most African cold chain operators quote first — it is proven and service parts are easy to match.",
    chooseBWhen:
      "Choose PIR when the room is a blast freezer, when existing building clearance limits panel thickness at doors, or when the refrigeration engineer sized equipment assuming a thinner envelope. PIR also helps multi-deck cold stores where every centimetre of aisle width affects racking layout.",
    costNotes:
      "PUF cold room panels usually cost less per m² than PIR at the same thickness. A PIR downgrade in thickness may save enough panel area and refrigeration load to justify the core premium — run the calculation with your refrigeration supplier before deciding on price alone.",
    relatedSolutions: ["cold-storage", "dairy", "poultry-meat-processing"],
    relatedGuides: [],
    faqs: [
      {
        question: "Do cam-lock joints work the same in PUF and PIR?",
        answer:
          "The joint profile is compatible, but gasket compression and torque settings follow the manufacturer's erection sheet for each thickness. Do not mix panel generations from different orders without checking cam height and density.",
      },
      {
        question: "Which core for a room opening onto a hot dock?",
        answer:
          "Either core works if thickness meets U-value and vapour design. PIR reduces wall thickness at the door jamb where air infiltration is highest — detail the door frame thermal break carefully regardless of core.",
      },
      {
        question: "Should floors match wall core type?",
        answer:
          "Floor insulation is often extruded polystyrene or polyurethane board separate from wall panels. Match vapour control layers across the floor-wall junction — core branding does not have to be identical if λ and vapour resistance are continuous.",
      },
      {
        question: "Can I order a mixed PUF chiller and PIR freezer in one shipment?",
        answer:
          "Yes — common on multi-temperature sites. Label bundles clearly on site to avoid installing the wrong thickness at each room. We mark packages by room reference when you supply a room schedule with the PO.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "panel-roof-vs-conventional-roof",
    name: "Panel Roof vs Conventional Roof",
    h1: "Insulated Panel Roof vs Conventional Metal Roof with Insulation",
    seoTitle: "Panel Roof vs Conventional Roof | PHOENIXX",
    metaDescription:
      "Compare insulated sandwich panel roofing with conventional metal roof plus site insulation — thermal performance, leaks, speed and African climate fit.",
    productA: "roofing-panels",
    productB: "peb-prefabricated-buildings",
    summary:
      "Insulated roof panels combine profiled steel, insulation and liner in one lift. Conventional roofs use purlins, single-skin sheets and site-fixed insulation — lower sheet cost, more trades and more leak paths.",
    quickAnswer:
      "Insulated roofing panels win when you need a weathertight, insulated roof in one operation — cold stores, food plants and high-bay warehouses. Conventional single-skin roofs with blanket or board insulation can cost less on simple sheds in dry inland climates if local installers are skilled and maintenance is accepted.",
    decisionTable: [
      {
        criterion: "Number of weathertight layers at install",
        optionA: "One composite panel with sealed laps",
        optionB: "Multiple — sheets, insulation, liners, flashings",
      },
      {
        criterion: "Typical install speed",
        optionA: "Fast — long panel lengths, fewer steps",
        optionB: "Slower — sequential trades",
      },
      {
        criterion: "Initial material cost (large span shed)",
        optionA: "Higher panel unit cost",
        optionB: "Lower sheet cost — add insulation labour",
        cheaperWins: true,
      },
      {
        criterion: "Thermal bridging at purlins",
        optionA: "Reduced — continuous insulation in panel",
        optionB: "Higher — compression at purlin lines",
      },
      {
        criterion: "Coastal / heavy rain climates",
        optionA: "Strong — factory-controlled joint detail",
        optionB: "Depends on installer quality",
      },
      {
        criterion: "Export prefabrication fit",
        optionA: "Panels nested in containers",
        optionB: "PEB frame export + mixed local roof fix",
      },
    ],
    chooseAWhen:
      "Specify insulated roof panels for refrigerated buildings, food-grade plants, coastal ports and anywhere downtime from roof leaks is expensive. Long single spans reduce purlin count when the frame is designed for panel loading.",
    chooseBWhen:
      "Conventional roofs fit open-sided cattle sheds, temporary covers, or inland sites where insulation is minimal and skilled roofers maintain laps annually. Pair a PEB steel frame with site-built roof if panel freight is constrained — accept the programme and quality risk.",
    costNotes:
      "Single-skin roofing sheet is cheaper per m² than an insulated sandwich roof panel. The gap closes when you add insulation, liner, fasteners and labour — and widens again if leak callbacks occur. For exported industrial projects, panel roofs usually win on lifecycle cost despite higher FOB price.",
    relatedSolutions: ["warehousing-logistics", "cold-storage", "manufacturing-plants"],
    relatedGuides: [],
    faqs: [
      {
        question: "What roof pitch do sandwich roof panels need?",
        answer:
          "Minimum slope depends on profile and rainfall intensity — typically 5–10% for trapezoidal roofs. Flat or low-slope roofs need specialised profiles and drainage design. Share rainfall data and span with us before fixing pitch on drawings.",
      },
      {
        question: "Can panels span the same distance as bare metal sheets?",
        answer:
          "Spans are shorter than thin single-skin because the composite is stiffer and heavier. Purlin spacing follows manufacturer tables — do not copy single-skin spacing without checking deflection limits.",
      },
      {
        question: "How do panel roofs perform in cyclone-prone coasts?",
        answer:
          "Fixing density, clip type and edge flashings must match wind load calculations. PPGL facings and stainless fixings are common on coastal exports — core type matters less than fastening and coating.",
      },
      {
        question: "Is maintenance lower than conventional roofs?",
        answer:
          "Yes when installed correctly — fewer exposed insulation layers and fewer penetration paths. Annual inspection of fasteners, gutters and curb flashings is still required, especially after storm seasons.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "peb-vs-rcc",
    name: "PEB vs RCC Construction",
    h1: "PEB vs RCC — Prefabricated Steel Buildings Compared to Concrete",
    seoTitle: "PEB vs RCC Construction — Comparison | PHOENIXX",
    metaDescription:
      "Compare pre-engineered steel buildings (PEB) with reinforced cement concrete (RCC) shells for industrial warehouses — speed, cost, expansion and panel-ready frames.",
    productA: "peb-prefabricated-buildings",
    productB: "wall-panels",
    summary:
      "PEB is a prefabricated steel frame with cladding — fast to erect and easy to extend. RCC is cast-in-place concrete — heavy, slow, but familiar where steel supply or skills are limited.",
    quickAnswer:
      "PEB with sandwich panel cladding wins on speed, weight and future expansion for warehouses, factories and logistics hubs exported from India. RCC wins where local codes favour concrete, crane access is limited for steel, or the building needs heavy point loads on few columns — but programme and formwork cost are higher.",
    decisionTable: [
      {
        criterion: "Typical programme to weathertight shell",
        optionA: "8–16 weeks including panel fix",
        optionB: "16–30+ weeks with cure times",
      },
      {
        criterion: "Foundation size and cost",
        optionA: "Lighter — smaller footings",
        optionB: "Heavier — larger raft and columns",
        cheaperWins: true,
      },
      {
        criterion: "Future column-free expansion",
        optionA: "Bolt-on bays — designed in advance",
        optionB: "Possible but slow — new formwork",
      },
      {
        criterion: "Integration with sandwich panels",
        optionA: "Native — purlins and girts designed for panels",
        optionB: "Needs brackets and thermal break detail",
      },
      {
        criterion: "Seismic / wind (engineered)",
        optionA: "Flexible frame — designed per code",
        optionB: "Rigid mass — local engineering norms",
      },
      {
        criterion: "Export package from India",
        optionA: "Steel + panels containerised together",
        optionB: "Mostly local build — limited prefab export",
      },
    ],
    chooseAWhen:
      "Choose PEB when investors want the building operational this season, when clear spans over 25 m are needed for racking or cranes, or when the same shed design will roll out in multiple African countries. We supply steel designed to receive our wall and roof panels directly.",
    chooseBWhen:
      "RCC remains appropriate for multi-storey structures, heavy process equipment on few supports, or municipalities that restrict imported steel frames. Cladding can still be sandwich panels on a concrete frame — but thermal bridges at columns need explicit detail.",
    costNotes:
      "RCC superstructure material can appear cheaper in markets with low cement cost, but formwork, curing and labour extend finance cost. PEB has higher steel import cost but shorter site months — compare on total project IRR, not civil BOQ alone. Panel-ready PEB avoids a second cladding tender.",
    relatedSolutions: ["warehousing-logistics", "manufacturing-plants", "food-processing"],
    relatedGuides: [],
    faqs: [
      {
        question: "Can PEB buildings carry overhead cranes?",
        answer:
          "Yes — crane loads are designed into the primary frame at enquiry stage. RCC also carries cranes; the choice is engineering economics and programme, not capability alone.",
      },
      {
        question: "Do banks finance PEB imports to Africa?",
        answer:
          "Many lenders finance turnkey industrial sheds when engineering stamps and insurance schedules are complete. RCC may face fewer questions in markets unfamiliar with imported steel — provide local engineer review where required.",
      },
      {
        question: "Which option is better for future mezzanine floors?",
        answer:
          "PEB mezzanines bolt between frames quickly. RCC mezzanines are stiff but slow to add later. Plan floor loads in the first drawing regardless of structural system.",
      },
      {
        question: "Are sandwich panels only for PEB?",
        answer:
          "No — panels fix to RCC via steel sub-girts, but PEB is optimised for panel spans and fixings. If you already committed to RCC, we can still supply panels with bracket details.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
];
