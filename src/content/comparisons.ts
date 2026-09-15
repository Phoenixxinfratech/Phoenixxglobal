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
      "Both are rigid foam cores in metal facings on the same production line. PIR has lower thermal conductivity and tolerates higher service temperatures; PUF is typically lower cost per m² for the same facing gauge and remains the default on most export cold stores.",
    quickAnswer:
      "Choose PUF when budget per square metre matters and room temperatures stay in standard chiller or freezer ranges (+2 °C to −25 °C). Choose PIR when you need a thinner wall for the same U-value, higher continuous service temperature near plant equipment, or slightly better long-term thermal stability at negative setpoints. Neither replaces a fire-rated mineral wool core where non-combustibility is specified — that is a separate decision from foam chemistry.",
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
      {
        criterion: "Dimensional stability after years in service",
        optionA: "Good when envelope sealed — watch joint torque on freezers",
        optionB: "Better at deep negative temps — less thickness creep tendency",
      },
    ],
    chooseAWhen:
      "Specify PUF when the project is cost-sensitive, room temperatures are in normal cold storage bands (+2 °C to −25 °C), and the extra 10–20 mm of wall thickness is acceptable. PUF is the default on most chiller rooms, food processing walls and warehouse cladding where fire regulations allow a combustible core inside a protected envelope. On repeat roll-outs across Kenya, Tanzania or Uganda, buyers often standardise on PUF for chillers and reserve PIR for the one freezer bay where clearance is tight — that keeps spare panels and cam-lock profiles interchangeable on site.",
    chooseBWhen:
      "Specify PIR when floor area is tight and every millimetre of insulation counts — walk-in freezers, plant rooms with limited clearance, or roofs where dead load and purlin height are constrained. PIR also suits applications where the envelope may see higher ambient or process-side temperatures than a standard cold room, such as a compressor room wall facing a +35 °C plant hall. If your refrigeration consultant sized plant assuming 100 mm PUF walls and you can drop to 80 mm PIR at the same U-value, the freed aisle width often matters more than the core premium on high-turnover cold stores.",
    costNotes:
      "On like-for-like facing gauge and thickness, PUF is usually 8–15% lower in ex-works panel cost. PIR can offset part of that premium by allowing a thinner panel to hit the same U-value, which reduces steel in facings and sometimes freight volume per TEU. Always compare total installed cost: thinner PIR may need the same number of fixings and joint detail as thicker PUF, and door frame thermal breaks do not shrink just because the wall is thinner. Running-cost savings from lower refrigeration load appear only after the envelope U-value is confirmed on the test report for the thickness you will buy — not from brochure λ alone.",
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
      {
        question: "Does PIR improve fire rating over PUF on the same facing?",
        answer:
          "Both are combustible foam cores — reaction class depends on the complete system test, not the PUR vs PIR label alone. Some PIR formulations achieve B-s1,d0 in declared systems, but that does not replace rockwool where A1 or a rated fire wall is specified. Ask for the fire test scope that matches your thickness and joint detail.",
      },
      {
        question: "What happens if I substitute PIR for PUF after the frame is designed?",
        answer:
          "Thinner PIR may change girt spacing assumptions, door jamb depth and cam-lock stack height. Send revised panel thickness to your steel supplier before panels ship — we have seen crews forced to pack out frames because someone swapped core type without updating shop drawings.",
      },
      {
        question: "Which core handles panel damage in transit better?",
        answer:
          "Both foam types chip at corners if bundles are poorly strapped. PIR is slightly denser and can resist minor edge crush, but packing method matters more than core name. Inspect bundles at port and photograph damage before customs release so replacement panels can match batch colour.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-15",
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
      "PIR delivers the best thermal performance per millimetre in a foam core. Rockwool is non-combustible and suits fire-rated walls where foam cores are excluded — the trade-off is thickness, weight and panel cost, not a simple swap on the same drawings.",
    quickAnswer:
      "PIR wins on thermal performance per millimetre of thickness and is the default for cold storage where fire codes allow a foam core. Rockwool wins where non-combustibility, fire compartmentation or 60–120 minute rated walls are specified — even though you need a thicker panel for the same insulation value, pay more per m², and detail vapour control differently on cold-side applications. Treat this as a compliance and load decision first, then compare U-value.",
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
      {
        criterion: "Insurer / authority questionnaire",
        optionA: "May need justification where foam is permitted",
        optionB: "Straightforward answer on non-combustible core",
      },
    ],
    chooseAWhen:
      "Choose PIR for refrigerated envelopes, processing halls with wash-down facings, and roofs where you need maximum insulation in minimum depth. PIR is appropriate when your fire consultant and local authority accept a combustible core inside a complete system test or when the room is not a fire compartment boundary. On a typical export cold store at Mombasa or Dar es Salaam, PIR walls and roof inside the insulated box with rockwool only on escape corridors is a common split — do not pay for rockwool everywhere unless the spec demands it.",
    chooseBWhen:
      "Choose rockwool when the drawing calls for A1 or non-combustible core, fire-rated partition between occupancies, or separation between production and storage in a multi-tenant facility. Hospitals, data centre boundaries and some pharmaceutical projects push toward mineral wool even where foam would insulate better. If the insurer asks whether foam is present on escape routes, rockwool on those walls closes the conversation faster than arguing system test scope for PIR.",
    costNotes:
      "Rockwool panels cost more per m² at equal thickness — often 25–40% above PIR on export quotes — and you typically need 30–50% greater thickness to approach the same U-value. The cheaper option on thermal grounds is PIR; the cheaper option on fire compliance may still be rockwool if it avoids a secondary fire-rated layer or a rejected occupancy certificate. Frame design must absorb extra panel weight on rockwool roofs — purlin tables do not transfer from PIR without recalculation. Freight per m² can rise because fewer panels fit per container at 120–150 mm rockwool versus 100 mm PIR.",
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
      {
        question: "Can PIR and rockwool share the same wall profile?",
        answer:
          "Joint geometry is often similar, but fire-rated rockwool systems may require fire stops, intumescent mastic and closer screw spacing. Do not assume one erection method sheet covers both — request the system-specific detail for each wall type on the drawing.",
      },
      {
        question: "Which panel type sags on long roof spans?",
        answer:
          "Both need purlin spacing per manufacturer tables. Rockwool at 120 mm on a 12 m span feels heavier during lift and may need more intermediate supports than PIR at 100 mm for the same U-value. Check deflection limits before crane day.",
      },
      {
        question: "Is rockwool mandatory for food factories?",
        answer:
          "Not automatically — many food plants use PIR or PUF on process halls and rockwool only on fire boundaries. Hygiene audits focus on wash-down compatibility of facings and joints, not wool type alone. Match the consultant's fire strategy document, not generic 'food grade' marketing.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-15",
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
      "PUF sandwich panels are factory-bonded steel-faced units with closed-cell foam. EPS is typically site-fixed board insulation behind separate cladding — we compare PUF panels against EPS-based build-ups, not a separate EPS product line from PHOENIXX SMARTBUILD.",
    quickAnswer:
      "PUF sandwich panels beat EPS board build-ups on air tightness, erection speed and structural composite action in industrial envelopes. EPS can win on raw insulation material cost for simple non-refrigerated shells where you already have a masonry or steel frame and manual labour is cheap — but vapour control, joint continuity and quality variance between crews are harder to guarantee on site. For any room below +5 °C or with wash-down, factory PUF is the safer default.",
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
      {
        criterion: "Condensation / icing at board joints",
        optionA: "Low when laps sealed and vapour barrier continuous",
        optionB: "Higher risk — gaps at board edges common in field fixes",
      },
    ],
    chooseAWhen:
      "Choose PUF sandwich panels when you need a weathertight industrial or cold storage envelope in weeks not months, when quality must be repeatable across multiple sites in Africa, or when a single supplier should warrant the composite. PUF is the rational default for cam-lock cold rooms, food plants and prefabricated warehouses. If your investor expects documented U-values and a single warranty path from India to site, a factory panel removes the argument about who failed the insulation layer when condensation appears at year two.",
    chooseBWhen:
      "EPS board can make sense for non-critical temperature buildings where a block or steel frame already exists and local labour will fix cladding over board insulation. Treat EPS as a budget site-built path — not as a direct substitute for exported cold room panels. We see EPS on ancillary stores and farm sheds inland; it rarely survives scrutiny on a −18 °C freezer BOQ where the consultant models vapour drive through board joints.",
    costNotes:
      "EPS board material is cheaper per m² of insulation than a finished PUF panel, but total project cost often favours PUF when you include frame, cladding labour, scaffolding, tape, mastic and rework after failed blower-door tests. For export projects, prefabricated PUF reduces foreign-site labour and weather risk during monsoon or rainy season — that saving rarely appears in a line-item insulation comparison. Container efficiency favours finished panels: EPS bulk for equivalent R-value occupies more cubic metres and still needs steel cladding shipped or sourced locally.",
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
      {
        question: "Why do cold room tenders still mention EPS?",
        answer:
          "Local suppliers in some markets promote EPS cam-lock kits at low upfront price. Buyers discover joint icing and compressor overload later. If a tender names EPS for a commercial freezer, ask for the hygrothermal calculation and compare against a PUF panel quote at declared U-value.",
      },
      {
        question: "Can EPS be upgraded to PUF later without rebuilding?",
        answer:
          "Rarely economical — you strip cladding, remove boards, and often replace framing. Starting with PUF on the primary envelope avoids a second capex cycle. EPS retrofits make sense only on small ambient rooms.",
      },
      {
        question: "How does site supervision differ between the two?",
        answer:
          "PUF needs trained panel crews, crane access and torque-controlled fixings. EPS needs multiple trades sequenced correctly — insulator, cladder, vapour barrier installer. The failure mode on EPS is usually a missed tape line, not visible until the room is running.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-15",
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
      "Both are mineral fibre insulants with non-combustible credentials. Rockwool (stone wool) is what PHOENIXX SMARTBUILD manufactures for export panels; glass wool appears in other suppliers' fire-rated systems — compare on tested system performance, density and moisture handling, not fibre name alone.",
    quickAnswer:
      "Rockwool sandwich panels use stone wool with higher density and better moisture tolerance than typical glass wool slabs used in site-fixed insulation. Glass wool panel systems can be lighter and cheaper in some markets but are less common on exported industrial panels bound for humid or wash-down environments. Specify the fire test report and classification for the complete panel build-up, not the wool marketing label on a brochure.",
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
      {
        criterion: "Wash-down / humidity cycles",
        optionA: "Stone wool recovers after drying if envelope vented",
        optionB: "Performance can drop if fibres stay wet at cuts",
      },
    ],
    chooseAWhen:
      "Choose rockwool-faced sandwich panels when you need a non-combustible core for fire walls, acoustic separation or humid industrial environments. Our rockwool export line targets partitions, external fire-rated walls and corridors where stone wool's moisture behaviour is an advantage. If panels face periodic steam or external humidity in coastal industrial parks, stone wool tolerates the cycle better than lightweight glass wool that sags when fibres absorb moisture at unsealed edges.",
    chooseBWhen:
      "Fire-rated panel systems — including some glass wool cores — fit when a specific fire test report or insurer schedule names a tested system classification that your consultant will accept. Match the system ID on the drawing; we will confirm whether our fire-rated build-up satisfies it or propose an equivalent tested configuration. Glass wool can be appropriate on dry internal partitions where weight savings matter and the specifier has prior approval history with that system in your jurisdiction.",
    costNotes:
      "At similar fire performance, glass wool systems in some regions undercut rockwool on material cost. Rockwool panels may cost slightly more per m² but reduce replacement risk in humid or wash-down areas where wet wool loses λ and invites mould behind facings. Compare warranted system performance and local approval — not per-kg wool price alone. Export freight difference is usually secondary to whether the authority accepts the test report; swapping wool type to save substrate cost fails if the occupancy certificate is withheld.",
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
      {
        question: "Does either wool type need a vapour barrier on cold rooms?",
        answer:
          "Mineral wool is open-fibre — vapour control on the warm side is mandatory if wool faces a cold environment. Neither rockwool nor glass wool replaces PUF or PIR on the primary freezer envelope unless a qualified hygrothermal model explicitly allows it.",
      },
      {
        question: "Can I substitute rockwool for glass wool on an approved system?",
        answer:
          "Only if the fire test report covers the substitution or your consultant issues an equivalence letter accepted locally. Fire classification attaches to the tested build-up — fibre swap without engineering review is a common certificate rejection reason.",
      },
      {
        question: "Which wool type do acoustic consultants prefer?",
        answer:
          "At equal thickness and density, performance is similar. Rockwool at 100–140 kg/m³ is often specified where both STC and fire rating matter. Share the target dB rating — we map it to panel thickness and core density, not wool brand alone.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-15",
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
      "Sandwich panels deliver weathering, insulation and cladding in one prefabricated layer on a steel frame. Masonry needs separate insulation, more wet trades and longer programmes — but may suit ancillary buildings where local block is cheap and thermal specs are loose.",
    quickAnswer:
      "Sandwich panels win on programme length, predictable thermal performance and export prefabrication from India to East or West Africa. Masonry can win on local material cost where block and labour are inexpensive and insulation standards are modest — but cold storage, food plants and institutional logistics leases rarely accept uninsulated block without a heavy, slow insulation build-up that closes the cost gap.",
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
      {
        criterion: "Thermal bridge at structure",
        optionA: "Girts and thermal break details published by panel maker",
        optionB: "Columns and bond beams — breaks need separate design",
      },
    ],
    chooseAWhen:
      "Choose sandwich panels on steel or PEB frames when the programme must finish before rainy season, when insulation values are specified on drawings, or when the same envelope detail will repeat across multiple regional sites. Food, pharma and logistics investors typically expect panelised industrial shells with declared U-values. A 40-foot container of nested wall panels from Gujarat can weathertight a 2,000 m² shed shell in weeks; masonry on the same footprint often runs through two wet seasons before the roof is on.",
    chooseBWhen:
      "Masonry remains viable for small ancillary buildings, boundary walls, guard houses, or regions where import duty on steel panels is prohibitive and local block is cheap. For primary refrigerated or high-bay logistics buildings, masonry rarely competes on total cost once insulation, vapour barriers, programme finance and tenant fit-out delays are included. If the brief is a single-storey ambient store with no insulation spec, block plus metal sheet may still be the local norm.",
    costNotes:
      "Block work looks cheaper on BOQ line items until you add insulation, plaster, cladding, scaffolding and extra weeks of site overhead. Panel quotes are higher upfront but often lower on total installed cost for insulated industrial buildings — especially when panels ship ready to fix from India and foreign labour rates are high. Hidden masonry costs include curing time, rework after shrinkage cracks, and a second tender for insulation that panel buyers avoid. Compare IRR on the operational date, not civil BOQ alone.",
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
      {
        question: "Does masonry handle panel fixings for a cold store retrofit?",
        answer:
          "Retrofit brackets onto cured block are possible but thermal bridges at every anchor need detailing. New cold stores on greenfield sites usually get a PEB frame sized for panel spans — cheaper than engineering block to carry 100 mm insulated panels at freezer loads.",
      },
      {
        question: "Which envelope copes better with foundation movement?",
        answer:
          "Steel-framed panel buildings tolerate some differential settlement if connections are slotted. Masonry cracks at corners and lets moisture into insulation cavities. In expansive clay soils common in parts of East Africa, flexible frame systems reduce patch-repair cycles.",
      },
      {
        question: "How do import duties affect the comparison?",
        answer:
          "Duty on prefabricated panels and steel frames varies by HS code and destination. Local block avoids import duty but not the cost of achieving the same U-value. Model landed panel cost against local block plus insulation plus programme delay before assuming masonry wins.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-15",
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
      "Cold room kits default to PUF cam-lock panels for cost-effective chillers and moderate freezers. PIR suits deeper negative temperatures, tighter floor plates and rooms where thinner walls free operational space or reduce refrigeration load at the same envelope area.",
    quickAnswer:
      "For standard chillers (+0 °C to +5 °C) and moderate freezers (−18 °C to −25 °C), PUF cam-lock panels are the economical default on export orders from India. Move to PIR when the room targets −30 °C and below, ceiling height is fixed, or the consultant asks for lower λ to reduce wall thickness at door openings, corners and dock interfaces where air infiltration is highest.",
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
      {
        criterion: "Spare panel matching years later",
        optionA: "High volume — easy colour and cam profile match",
        optionB: "Available — confirm density and cam height on RFQ",
      },
    ],
    chooseAWhen:
      "Choose PUF cold room panels for distribution chillers, meat holding rooms, floral storage and most export cold room kits where cam-lock speed matters and thickness is acceptable. PUF is what most African cold chain operators quote first — it is proven and service parts are easy to match. On a two-room site with a +4 °C chiller and −20 °C freezer, PUF at 100 mm and 120 mm respectively is a common split that keeps one core type for spare panels and erection training.",
    chooseBWhen:
      "Choose PIR when the room is a blast freezer, when existing building clearance limits panel thickness at doors, or when the refrigeration engineer sized equipment assuming a thinner envelope. PIR also helps multi-deck cold stores where every centimetre of aisle width affects racking layout. Blast freezers pulling down product at −35 °C see higher vapour drive — the lower λ at 100 mm PIR versus 120 mm PUF can mean one fewer refrigeration stage if load calc supports it.",
    costNotes:
      "PUF cold room panels usually cost less per m² than PIR at the same thickness. A PIR downgrade in thickness may save enough panel area and refrigeration load to justify the core premium — run the calculation with your refrigeration supplier before deciding on price alone. Door sets, floor insulation and refrigeration plant dominate capex on small rooms; core savings matter more on multi-room logistics hubs above 500 m². Freight per cam-lock panel is similar between cores at equal thickness — savings come from shipping fewer millimetres per bundle when PIR hits U-value in a thinner section.",
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
      {
        question: "Does core type change cam-lock gasket material?",
        answer:
          "Gasket compound is usually the same PVC or silicone profile — compatibility is with panel thickness and cam depth, not PUF vs PIR chemistry. Confirm gasket spec if rooms see aggressive wash-down chemicals.",
      },
      {
        question: "How often should cam-lock torque be checked after commissioning?",
        answer:
          "Re-torque after the first full freeze cycle and again at six months on busy rooms. Foam settles slightly at joints regardless of core type; loose cams are the main cause of icing at corners we see on service calls.",
      },
      {
        question: "Will PIR reduce my electricity bill noticeably?",
        answer:
          "Only if thickness drops enough to change declared U-value and your consultant models lower transmission load. Swapping 120 mm PUF for 100 mm PIR at the same λ band may save space but not kWh — compare declared U-values on the order datasheet.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-15",
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
      "Insulated roof panels combine profiled steel, insulation and liner in one factory-controlled lift. Conventional roofs use purlins, single-skin sheets and site-fixed insulation — lower sheet cost, more trades, more penetration paths and more dependence on installer skill in rain and wind.",
    quickAnswer:
      "Insulated roofing panels win when you need a weathertight, insulated roof in one operation — cold stores, food plants and high-bay warehouses where downtime from leaks is expensive. Conventional single-skin roofs with blanket or board insulation can cost less on simple sheds in dry inland climates if local installers are skilled and annual lap maintenance is accepted. On coastal exports, panel roofs reduce the number of exposed insulation layers that saturate in driving rain.",
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
      {
        criterion: "Internal condensation control",
        optionA: "Factory-bonded liner — fewer gaps at purlin lines",
        optionB: "Blanket compression common — cold spots at purlins",
      },
    ],
    chooseAWhen:
      "Specify insulated roof panels for refrigerated buildings, food-grade plants, coastal ports and anywhere downtime from roof leaks is expensive. Long single spans up to manufacturer limits reduce purlin count when the frame is designed for panel loading from day one. If your lease requires a documented roof U-value and a single warranty path, a composite panel beats arguing which trade failed after water marks appear on the ceiling liner.",
    chooseBWhen:
      "Conventional roofs fit open-sided cattle sheds, temporary covers, or inland sites where insulation is minimal and skilled roofers maintain laps annually. Pair a PEB steel frame with site-built roof if panel freight is constrained — accept the programme and quality risk. In markets with deep local roofing labour pools and mild climates, single-skin plus glass wool blanket still appears on ambient factories — plan for hot aisles and higher HVAC load.",
    costNotes:
      "Single-skin roofing sheet is cheaper per m² than an insulated sandwich roof panel. The gap closes when you add insulation, liner, fasteners, safety nets and labour — and widens again if leak callbacks occur after the first monsoon. For exported industrial projects, panel roofs usually win on lifecycle cost despite higher FOB price because foreign-site roofing crews are expensive and weather windows are narrow. Thermal bridging at purlins on conventional builds often underperforms the calculated U-value — buyers discover this in summer roof surface temperatures, not on paper.",
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
      {
        question: "Can roof panels carry rooftop HVAC or solar loads?",
        answer:
          "Yes with curbs and spreader details designed into the panel layout — share equipment weights at RFQ. Conventional roofs also carry loads but penetrations through site-fixed insulation are a common leak point on both systems if flashings are rushed.",
      },
      {
        question: "What is the typical minimum pitch for export panel roofs?",
        answer:
          "Most trapezoidal profiles need 5–10% slope depending on rainfall intensity at site. Flat-looking industrial roofs often still have hidden fall. Send location and span — we confirm profile and drainage before production.",
      },
      {
        question: "Do panel roofs need a separate vapour barrier?",
        answer:
          "Closed-cell cores in composite panels act as the insulation layer; vapour control still needs continuity at laps, penetrations and wall junctions. Cold stores need the warm-side strategy documented — panel type does not remove that design step.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-15",
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
      "PEB is a prefabricated steel frame designed to receive sandwich panel cladding — fast to erect and straightforward to extend with bolt-on bays. RCC is cast-in-place concrete — heavy, slow, familiar where steel supply or erection skills are limited, but harder to match panel spans without extra steel sub-framing.",
    quickAnswer:
      "PEB with sandwich panel cladding wins on speed, weight and future expansion for warehouses, factories and logistics hubs exported from India. RCC wins where local codes favour concrete, crane access is limited for steel erection, or the building needs heavy point loads on few columns — but programme, formwork cost and cladding integration are usually higher than a panel-ready steel frame.",
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
      {
        criterion: "Column footprint in racked warehouse",
        optionA: "Slender columns — clear span layouts",
        optionB: "Bulkier columns — racking aisles may shrink",
      },
    ],
    chooseAWhen:
      "Choose PEB when investors want the building operational this season, when clear spans over 25 m are needed for racking or cranes, or when the same shed design will roll out in multiple African countries. We supply steel designed to receive our wall and roof panels directly — purlins, girts and bracing coordinated with panel cover width and fixings. A typical export package leaves Mundra or Nhava Sheva as nested steel and panels with one engineering contact, which matters when the site team abroad has never built a cold store before.",
    chooseBWhen:
      "RCC remains appropriate for multi-storey structures, heavy process equipment on few supports, or municipalities that restrict imported steel frames. Cladding can still be sandwich panels on a concrete frame — but thermal bridges at columns need explicit detail and bracket schedules. If local banks only finance concrete industrial shells in your market, RCC with imported panels is a workable hybrid — just budget for the sub-girt layer and longer civil programme.",
    costNotes:
      "RCC superstructure material can appear cheaper in markets with low cement cost, but formwork, curing, labour and finance during idle months extend total cost. PEB has higher steel import cost but shorter site months — compare on total project IRR, not civil BOQ alone. Panel-ready PEB avoids a second cladding tender and the coordination risk between a separate steel erector and panel supplier. Foundation cost favours PEB: lighter superstructure means smaller footings, which can offset part of the imported steel premium on poor soils.",
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
      {
        question: "Which system handles future mezzanine or crane additions better?",
        answer:
          "PEB bays are often designed for bolt-on extensions and crane brackets at enquiry stage. RCC can carry cranes and mezzanines but retrofits mean formwork, propping and longer downtime. Decide floor and crane loads in the first drawing set either way.",
      },
      {
        question: "How does seismic design compare?",
        answer:
          "Both can meet local codes when engineered properly — steel frames are lighter with defined ductility; RCC relies on mass and detailing. Share the seismic zone and soil report at RFQ; do not assume one system is automatically cheaper to certify.",
      },
      {
        question: "Can PHOENIXX SMARTBUILD supply PEB and panels in one order?",
        answer:
          "Yes — coordinated steel and panel packages are our default on export industrial sheds. One shop drawing set for frame and cladding reduces the gap we often see when a local civil contractor finishes columns before panel spans are confirmed.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-15",
  },
  {
    slug: "puf-vs-pir-vs-rockwool",
    name: "PUF vs PIR vs Rockwool Panels",
    h1: "PUF vs PIR vs Rockwool — Three Core Types Compared",
    seoTitle: "PUF vs PIR vs Rockwool Panels | PHOENIXX",
    metaDescription:
      "PUF, PIR and rockwool cores compared — thermal λ, fire, thickness, weight, humidity and cost for cold storage and industrial walls.",
    productA: "puf-panels",
    productB: "pir-panels",
    productC: "rockwool-panels",
    summary:
      "PUF is the default foam core for cost-sensitive cold storage. PIR gives better λ per millimetre. Rockwool is non-combustible where fire codes exclude foam — at higher weight and thickness for the same insulation.",
    quickAnswer:
      "Pick PUF when budget and standard chiller or freezer temperatures drive the spec. Pick PIR when you need a thinner wall or roof for the same U-value. Pick rockwool when non-combustibility or a rated fire wall is mandatory — accept thicker panels and higher weight. None of the three replaces a complete fire-rated system without the correct joint and fixing detail.",
    decisionTable: [
      {
        criterion: "Typical core λ (indicative)",
        optionA: "0.022–0.024 W/m·K",
        optionB: "0.019–0.022 W/m·K",
        optionC: "0.034–0.040 W/m·K",
      },
      {
        criterion: "Fire behaviour",
        optionA: "Combustible foam — reaction class B typical",
        optionB: "Combustible foam — often B-s1,d0",
        optionC: "Non-combustible mineral wool — A1 core",
      },
      {
        criterion: "Typical thickness for cold room (−20 °C class)",
        optionA: "100–120 mm walls common",
        optionB: "80–100 mm for similar U-value",
        optionC: "120–150 mm for similar U-value",
      },
      {
        criterion: "Weight tendency (100 mm class)",
        optionA: "Lightest — ~12–14 kg/m²",
        optionB: "Similar to PUF — ~12–14 kg/m²",
        optionC: "Heaviest — ~18–22 kg/m²",
      },
      {
        criterion: "Humidity and vapour",
        optionA: "Closed-cell — good when envelope sealed",
        optionB: "Closed-cell — similar vapour behaviour",
        optionC: "Open fibre — needs vapour control on cold side",
      },
      {
        criterion: "Cost tendency (same facing gauge)",
        optionA: "Lowest foam option",
        optionB: "Mid — premium over PUF",
        optionC: "Highest per m² at equal U-value",
        cheaperWins: true,
      },
      {
        criterion: "Best-fit applications",
        optionA: "Chillers, food halls, standard warehouses",
        optionB: "Freezers, tight clearances, hot-side plant rooms",
        optionC: "Fire walls, escape routes, data hall partitions",
      },
    ],
    chooseAWhen:
      "Choose PUF when the room temperature stays in normal cold storage bands, fire regulations allow a foam core, and panel cost per m² matters more than saving 20 mm of wall thickness. PUF is the workhorse on export cold stores, processing walls and logistics sheds across Africa and the Middle East.",
    chooseBWhen:
      "Choose PIR when floor area is tight, roof dead load limits purlin depth, or you want a lower U-value without stepping up to 120 mm PUF. PIR suits walk-in freezers and plant rooms where the envelope may see higher ambient or process-side temperatures than a standard chiller.",
    chooseCWhen:
      "Choose rockwool when the specification names non-combustibility, a fire-rated compartment wall, or insurer questionnaire answers that exclude foam cores on escape routes. Cold stores can still use PUF or PIR where local code permits — rockwool everywhere adds cost and structural load without benefit on unrated internal partitions.",
    costNotes:
      "At equal thickness and facing, PUF is usually the lowest ex-works panel cost, PIR sits mid-range, and rockwool is highest because the core is denser and the line runs slower. PIR may offset part of its premium by allowing a thinner panel to hit the same U-value, which can reduce freight volume. Rockwool needs more millimetres for the same U-value — compare total installed cost including frame loading, not core name alone.",
    relatedSolutions: ["cold-storage", "warehousing-logistics", "manufacturing-plants"],
    relatedGuides: [
      "fire-performance-insulated-panels",
      "cold-storage-panel-thickness",
      "evaluating-sandwich-panel-suppliers",
    ],
    faqs: [
      {
        question: "Can I use different cores on walls and roof in one building?",
        answer:
          "Yes — common pattern is PIR or thicker PUF on the roof where condensation control is tighter, and PUF on walls where thickness is less critical. Rockwool on escape-route walls with PUF cold rooms behind is also normal. Document transitions on drawings so inspectors and installers see a deliberate strategy.",
      },
      {
        question: "Does rockwool always mean better fire safety on a cold store?",
        answer:
          "Rockwool is non-combustible, but a cold store that does not require a fire-rated envelope often runs fine on PUF or PIR when detection, distance and local code allow foam cores. Fire safety is about the complete system — joints, penetrations and compartment lines — not the core name alone.",
      },
      {
        question: "Which core handles coastal humidity best?",
        answer:
          "Facing specification matters more than core type at the coast. PPGL or heavier galvanizing with the right topcoat protects both foam and rockwool panels. Closed-cell PUF and PIR resist moisture absorption when the envelope is sealed; rockwool needs a continuous vapour barrier on the cold side in freezer applications.",
      },
      {
        question: "How do I compare U-value across three cores?",
        answer:
          "Request declared U-values at the thickness you will buy from the same test standard and facing gauge. Do not compare a 80 mm PIR number against a 100 mm PUF brochure figure. Your refrigeration consultant should model load at the build-up you will install.",
      },
      {
        question: "Is rockwool harder to install than foam panels?",
        answer:
          "Rockwool panels are heavier — crane capacity and fixings must match. Joint detail differs by system but trained crews handle both. Allow longer install time on long wall runs where weight slows handling.",
      },
      {
        question: "Which core is most common on export orders from India?",
        answer:
          "PUF dominates cold storage export volume. PIR share grows on freezers and thickness-constrained roofs. Rockwool ships where fire-rated walls or insurer requirements are written into the spec before enquiry.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-15",
  },
  {
    slug: "manufacturer-vs-trader",
    name: "Manufacturer vs Trading Company",
    h1: "Sandwich Panel Manufacturer vs Trading Company — Who to Buy From",
    seoTitle: "Panel Manufacturer vs Trader | PHOENIXX",
    metaDescription:
      "Sandwich panel manufacturer vs trader — factory control, drawings, packing, MOQ, price transparency and after-sales on export orders.",
    productA: "puf-panels",
    productB: "puf-panels",
    optionALabel: "Manufacturer",
    optionBLabel: "Trading company",
    summary:
      "Manufacturers control lamination, QC and packing on their own line. Traders aggregate stock or subcontract production — useful for small urgent fills but weaker on drawing accountability and batch traceability.",
    quickAnswer:
      "Buy from a manufacturer when you need shop drawings tied to production, export packing you can inspect, and a single contact for thickness, coating and test report queries. A trading company can fit a small urgent top-up or a mixed container when they hold stock — verify who owns production and who replaces damaged panels at port before you pay.",
    decisionTable: [
      {
        criterion: "Factory and process control",
        optionA: "Direct — line, QC and batch records in-house",
        optionB: "Indirect — may source from multiple mills",
      },
      {
        criterion: "Shop drawings before production",
        optionA: "Standard on export orders — hold until approval",
        optionB: "Varies — may rely on buyer drawings only",
      },
      {
        criterion: "Packing accountability",
        optionA: "Documented method — photos per order common",
        optionB: "Depends on upstream mill — ask who packs",
      },
      {
        criterion: "MOQ flexibility",
        optionA: "Production MOQ — partial containers at premium",
        optionB: "Can fill gaps from stock — small lots possible",
      },
      {
        criterion: "Price transparency",
        optionA: "Spec on invoice matches line output",
        optionB: "Margin stacked — harder to value-engineer thickness",
        cheaperWins: true,
      },
      {
        criterion: "After-sales and replacement panels",
        optionA: "Batch traceability — colour and thickness match",
        optionB: "May need to re-source if stock gone",
      },
      {
        criterion: "When each fits best",
        optionA: "New cold store, PEB cladding, repeat export buyer",
        optionB: "Urgent site fill, small repair lot, local stock check",
      },
    ],
    chooseAWhen:
      "Choose a manufacturer when the order includes custom lengths, a defined coating spec, export sea freight, or when your bank and consultant expect test reports and shop drawings from the same entity that produced the panels. First-time importers benefit from one technical contact through production, packing and documentation.",
    chooseBWhen:
      "A trading company can fit when you need ten panels tomorrow from local stock, a single colour match for damage replacement and the trader holds the original batch, or when your main manufacturer is on lead time and the trader sources from a mill you have already approved. Confirm mill name, test report scope and who signs the commercial invoice before treating trader price as comparable.",
    costNotes:
      "Trader quotes sometimes look lower on small quantities because they absorb mill MOQ across several buyers — or higher because margin and storage are included. Manufacturer pricing is clearer to audit against thickness, density and coating on the order. Compare landed cost and replacement terms, not FOB alone. A low FOB from an unclear source is expensive if panels fail thickness check at site.",
    relatedSolutions: ["cold-storage", "warehousing-logistics"],
    relatedGuides: ["evaluating-sandwich-panel-suppliers", "sandwich-panel-rfq-from-india"],
    faqs: [
      {
        question: "How do I verify someone is a manufacturer and not only a trader?",
        answer:
          "Ask for a live video walk of the lamination line during your order week, QC records with your PO number, and whether the commercial invoice issuer matches the factory address on the packing list. Traders can facilitate export legitimately — the issue is undisclosed subcontracting.",
      },
      {
        question: "Can a trader provide EN 14509 test reports?",
        answer:
          "They may forward a mill report — check that the report scope covers your thickness and that the issuing entity is the same mill producing your panels. A report dated three years ago from a different line is not proof for your batch.",
      },
      {
        question: "Is after-sales support weaker through a trader?",
        answer:
          "Often yes, because the trader may not control spare panel production or colour matching after stock clears. Agree in writing who replaces transit-damaged panels and the lead time for matching thickness years later.",
      },
      {
        question: "When is a trader the practical choice on an export project?",
        answer:
          "When you need a small quantity urgently to close a wall before commissioning and the primary manufacturer shipment is weeks away — provided the trader discloses mill source and packing matches your spec. Not ideal for a full cold store kit on first order.",
      },
      {
        question: "Should payment terms differ for trader vs manufacturer?",
        answer:
          "Link final payment to documents you can verify — test report PDF, approved shop drawing, packing photos. New traders warrant smaller advance than a manufacturer you have visited or audited remotely.",
      },
      {
        question: "Can PHOENIXX SMARTBUILD supply both factory-direct and through agents?",
        answer:
          "We produce panels at our works and export factory-direct. Regional agents may assist logistics — ask that contracts name production source and documentation issuer clearly on the order.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-15",
  },
  {
    slug: "50mm-vs-75mm-vs-100mm-puf-panels",
    name: "50 vs 75 vs 100 mm PUF Panels",
    h1: "50 mm vs 75 mm vs 100 mm PUF Panels — Thickness Compared",
    seoTitle: "50 vs 75 vs 100 mm PUF Panels | PHOENIXX",
    metaDescription:
      "Compare 50, 75 and 100 mm PUF sandwich panel thickness — typical use, U-value tendency, container area per shipment, structural feel and cold-room suitability.",
    productA: "puf-panels",
    productB: "puf-panels",
    productC: "puf-panels",
    optionALabel: "50 mm PUF",
    optionBLabel: "75 mm PUF",
    optionCLabel: "100 mm PUF",
    summary:
      "50 mm suits partitions and mild temperature differences. 75 mm is a mid option for chillers. 100 mm is the common cold-room and freezer wall thickness when U-value targets sit near 0.22 W/m²·K class.",
    quickAnswer:
      "Use 50 mm PUF for internal partitions, ambient warehouses with minimal insulation need, or where structure limits depth. Use 75 mm when the room is chilled but not deep freezer class and you want a balance of cost and U-value. Use 100 mm for −18 °C to −25 °C freezers and export cold stores where consultants target ~0.22 W/m²·K walls — confirm with your load calculation.",
    decisionTable: [
      {
        criterion: "Typical use",
        optionA: "Partitions, +5 °C to +15 °C service rooms",
        optionB: "Chillers +2 °C to −5 °C, light processing",
        optionC: "Freezers −18 °C to −25 °C, export cold stores",
      },
      {
        criterion: "Indicative U tendency (wall build-up)",
        optionA: "~0.36 W/m²·K class",
        optionB: "~0.26 W/m²·K class",
        optionC: "~0.22 W/m²·K class",
      },
      {
        criterion: "Container m² tendency (qualitative)",
        optionA: "Most m² per TEU — thinnest bundle",
        optionB: "Mid — fewer m² than 50 mm per container",
        optionC: "Fewest m² per TEU — thickest core",
      },
      {
        criterion: "Structural feel and handling",
        optionA: "Lightest — easier manual handling",
        optionB: "Mid stiffness — standard wall runs",
        optionC: "Stiffer — plan lifting for long lengths",
      },
      {
        criterion: "Cold-room suitability",
        optionA: "Not for deep freezers — vapour and load risk",
        optionB: "Acceptable for many chillers — verify load calc",
        optionC: "Standard freezer export spec — consultant default",
      },
    ],
    chooseAWhen:
      "Choose 50 mm when the temperature difference across the panel is modest, the wall is internal or within a conditioned factory, or when an existing frame only accepts shallow girts. Do not specify 50 mm on a −25 °C freezer to save freight — running cost and condensation risk will exceed the panel savings.",
    chooseBWhen:
      "Choose 75 mm when the room operates in chiller bands, door traffic is moderate, and the consultant accepts the U-value at this thickness. Useful value-engineering step when 100 mm is over-spec for a +2 °C vegetable store.",
    chooseCWhen:
      "Choose 100 mm when the refrigeration spec names freezer class temperatures, export buyers want alignment with common African and Gulf cold-store norms, or when upgrading from an under-insulated legacy room. Pair with correct vapour seal and door detail — thickness alone does not fix infiltration.",
    costNotes:
      "Panel cost rises with thickness — roughly proportional to foam volume plus slightly heavier facings on thick cores. Freight per m² rises because fewer panels fit per container. A 100 mm order may ship fewer m² per TEU than 50 mm but save compressor kWh over five to ten years on a busy freezer — model both capex and running cost with your consultant. We quote per schedule; no fixed public price list applies across destinations.",
    relatedSolutions: ["cold-storage", "food-processing"],
    relatedGuides: ["cold-storage-panel-thickness", "u-values-and-running-cost"],
    faqs: [
      {
        question: "Can I mix 75 mm walls with 100 mm ceiling in one cold room?",
        answer:
          "Yes — roofs often need equal or greater insulation than walls because of solar gain and condensation risk. State both thicknesses on the RFQ so shop drawings and container loading reflect the mix.",
      },
      {
        question: "Is 50 mm ever acceptable on a freezer?",
        answer:
          "Rarely — only if a qualified load calculation proves adequate and local code accepts it, which is uncommon for −20 °C class rooms. Most export specs move to 100 mm or thicker for freezers.",
      },
      {
        question: "How much does U-value improve from 75 mm to 100 mm?",
        answer:
          "Indicative step from ~0.26 to ~0.22 W/m²·K on a standard PUF wall build-up — not linear because steel facings add fixed resistance. Request declared values from the supplier test report for your order.",
      },
      {
        question: "Does thicker PUF always mean stronger panels?",
        answer:
          "Thicker core adds stiffness but span tables still govern purlin spacing. Structural design follows manufacturer load tables — do not assume 100 mm allows wider spans without checking deflection limits.",
      },
      {
        question: "Which thickness ships fastest from India?",
        answer:
          "50 mm and 100 mm are standard line items on most export mills. 75 mm is available but confirm lead time — some lines optimise for 50/80/100 mm modules.",
      },
      {
        question: "Should I pick thickness before or after refrigeration design?",
        answer:
          "After envelope load is estimated. Provide room size, setpoint and ambient to your refrigeration consultant first — they will suggest minimum U-value, then you map that to 75 mm or 100 mm PUF with supplier data.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-15",
  },
  {
    slug: "ppgi-vs-ppgl-sandwich-panels",
    name: "PPGI vs PPGL Facings",
    h1: "PPGI vs PPGL Sandwich Panel Facings — Which Steel Substrate",
    seoTitle: "PPGI vs PPGL Panel Facings | PHOENIXX",
    metaDescription:
      "Compare PPGI and PPGL steel facings on sandwich panels — coastal corrosion, UV exposure, typical coating systems and cost tendency for roofs and walls.",
    productA: "roofing-panels",
    productB: "wall-panels",
    optionALabel: "PPGI facing",
    optionBLabel: "PPGL facing",
    summary:
      "PPGI uses galvanised steel (GI). PPGL uses galvalume (Al-Zn alloy). Both are pre-painted coil before lamination. PPGL tends to win on coastal and high-UV roofs; PPGI is common on inland walls, internal cold room faces and standard industrial rooms where salt exposure is limited.",
    quickAnswer:
      "Specify PPGL facings on coastal roofs, heavy-rain ports and high-UV sites where you want longer coating life before maintenance repaint. PPGI with adequate zinc mass (Z275 typical) and 25–28 µm polyester topcoat fits many inland walls and chillers. Match topcoat system — SMP or PVDF — to environment, not only substrate; a premium galvalume base with thin PE topcoat still chalks in tropical sun.",
    decisionTable: [
      {
        criterion: "Substrate",
        optionA: "Hot-dip galvanised (GI)",
        optionB: "Galvalume (Al-Zn alloy)",
      },
      {
        criterion: "Coastal and salt-spray tendency",
        optionA: "Good inland — edge rust risk at cuts if unprotected",
        optionB: "Better cut-edge and coastal durability typical",
      },
      {
        criterion: "UV and chalking (roof exposure)",
        optionA: "Fine with SMP/PVDF topcoat — PE weathers faster",
        optionB: "Often paired with SMP/PVDF on export roofs",
      },
      {
        criterion: "Typical topcoat on industrial panels",
        optionA: "25–28 µm polyester interior; SMP/PVDF on exposed roof",
        optionB: "Same topcoat options — substrate differs",
      },
      {
        criterion: "Cost tendency",
        optionA: "Lower substrate cost — standard spec",
        optionB: "Premium over PPGI — justified on harsh sites",
        cheaperWins: true,
      },
      {
        criterion: "Common application fit",
        optionA: "Inland warehouses, internal faces, moderate climate walls",
        optionB: "Coastal roofs, port logistics, high-UV industrial roofs",
      },
      {
        criterion: "Cut-edge exposure after site trimming",
        optionA: "Zinc sacrificial protection — touch-up recommended",
        optionB: "Al-Zn alloy — better cut-edge hold in salt air",
      },
    ],
    chooseAWhen:
      "Choose PPGI when the building sits inland, the facing sees limited direct UV, or the wall is inside a conditioned envelope. Food and pharma internal faces often use standard polyester on Z275 GI when wash-down chemicals are compatible with the topcoat datasheet. Ambient warehouse walls at Athi River or inland Nigeria rarely justify galvalume premium on all four elevations — specify PPGL on the roof and PPGI on walls if budget is tight but coastal rain hits the roof hardest.",
    chooseBWhen:
      "Choose PPGL on roof panels facing open sky within 5–10 km of salt water, on sheds in tropical UV with long warranty expectations, or when the buyer's O&M plan cannot repaint at year eight. Pair with stainless or coated fixings on coastal exports — we have seen GI screws fail before the facing on Mombasa roof jobs where the sheet still looked fine. External walls within splash zone of sea spray also deserve PPGL or heavier coating systems.",
    costNotes:
      "PPGL coil carries a substrate premium over PPGI — often single-digit percent on total panel price, not double. The cost of one premature roof repaint or edge rust repair at a port warehouse exceeds that premium on most projects. Compare warranty years and topcoat system together; a cheap polyester on PPGL still chalks fast in harsh UV. Colour fade in tropical sun is a topcoat issue — upgrading SMP or PVDF on either substrate often matters more than GI vs GL alone for walls that face equatorial afternoon sun.",
    relatedSolutions: ["warehousing-logistics", "food-processing"],
    relatedGuides: ["ppgi-coating-selection"],
    faqs: [
      {
        question: "Can I use PPGI outside and PPGL inside on the same panel?",
        answer:
          "Yes — export orders often specify different coatings per face. State external and internal environment on the RFQ so the mill paints the correct side.",
      },
      {
        question: "Does PPGL remove the need for a good topcoat?",
        answer:
          "No — substrate and topcoat work together. PPGL with thin polyester on a coastal roof still weathers. Specify SMP or PVDF where UV and salt are severe.",
      },
      {
        question: "What zinc mass should I specify with PPGI?",
        answer:
          "Z275 (275 g/m² total both sides) is common on export panels. Heavier zinc may help inland industrial walls — confirm availability on the order.",
      },
      {
        question: "Are cut edges a problem on site?",
        answer:
          "Both substrates expose metal at cuts. Use factory swaged edges where possible, touch-up paint approved by the supplier, and avoid storing cut panels open to rain at port.",
      },
      {
        question: "Which facing do cold room cam-lock panels use?",
        answer:
          "Most export cold room kits use PPGI with food-safe facing on the internal side unless the room faces a corrosive wash-down — then discuss coated or stainless options.",
      },
      {
        question: "How do I document facing choice for customs?",
        answer:
          "Commercial invoice and packing list should state substrate (GI vs GL), coating type and colour code. Mismatch with clearance documents delays port release.",
      },
      {
        question: "Does facing choice affect panel lamination bond?",
        answer:
          "Both substrates bond in our PUR lamination process when coil is prepared to spec. Bond failure in transit is rare and usually traceable to moisture ingress at open bundle ends — not GI vs GL chemistry. Store panels under cover at port regardless of facing.",
      },
      {
        question: "Can I specify different colours on PPGI vs PPGL in one order?",
        answer:
          "Yes — colour is applied before lamination. State external and internal colour codes separately on the RFQ. Lead time may differ if PPGL coil for a special colour is not on mill stock.",
      },
      {
        question: "What maintenance schedule should O&M teams plan?",
        answer:
          "Annual wash on coastal roofs, inspect cut edges and fastener heads after storms, and plan repaint or recoat per topcoat datasheet — typically earlier for PE, later for SMP/PVDF. Inland PPGI walls may run longer between cosmetic maintenance cycles if drainage keeps facings dry.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-15",
  },
];
