import type { Product } from "./types";

const SPEC_NOTE = "Confirmed against approved project documentation before dispatch.";

export const products: Product[] = [
  {
    slug: "puf-panels",
    name: "PUF Sandwich Panels",
    shortName: "PUF Panels",
    category: "panel",
    h1: "PUF Sandwich Panels for Cold Rooms and Controlled-Temperature Envelopes",
    seoTitle: "PUF Sandwich Panels — Cold Room Export | PHOENIXX",
    metaDescription:
      "Polyurethane foam sandwich panels for chiller and freezer rooms, food plants and warehouses. Joint sealing guidance for export to Africa.",
    summary:
      "Rigid polyurethane foam between PPGI or PPGL facings — our default core for modular cold rooms, distribution centres and industrial cladding where cost per m² and thermal performance must balance. Thickness and joint detail are set against your temperature band before we release production.",
    quickAnswer:
      "PUF sandwich panels use a closed-cell polyurethane core between metal facings, typically 40–200 mm thick with cam-lock or tongue-and-groove joints. They suit chiller and freezer rooms when joints are sealed and maintained — condensation at poorly sealed interfaces is the main field complaint we see on African installs, not the foam itself.",
    overview:
      "Polyurethane foam (PUF) sandwich panels are the workhorse core for cold storage and general insulated cladding from our Ahmedabad line. Two pre-painted steel facings are bonded to a rigid closed-cell foam core that holds its shape in the −40 to +80 °C range when specified correctly. For a −18 °C freezer in East Africa, 100–120 mm is a common starting thickness before we run a proper heat load check on your room size and door schedule. Cam-lock joints suit modular cold rooms where panels must be assembled and occasionally reconfigured; tongue-and-groove profiles suit continuous wall and roof runs on industrial sheds. We supply PPGI and PPGL facings in standard RAL colours where coil availability allows — food-grade facing is quoted separately when you need it for hygiene zones. One honest caveat: PUF is self-extinguishing but not a fire-rated compartment material. If your insurer or local code asks for a certified fire period, you need mineral wool or a dedicated fire-rated build-up — not a thicker PUF panel. Condensation streaking at joints almost always traces back to gasket compression, missing vapor-barrier continuity or warm humid air ingress during door cycles — we address this in installation notes, not by blaming the foam density.",
    construction:
      "The build-up is continuous foam core between inner and outer steel facings, typically 0.40–0.60 mm pre-painted galvanized or galvalume sheet. Foam is injected and cured between facings on a continuous lamination line; density is held in the 38–42 kg/m³ band for standard cold-chain supply. Effective cover width is approximately 1000 mm depending on profile. Cam-lock profiles include a hook-and-rotate mechanism at the vertical joint; tongue-and-groove profiles interlock along the long edge with concealed or through-fixings as per the drawing. Corner pieces, flashings and coving are packed as accessories in the same shipment where possible.",
    benefits: [
      "Typical core thermal conductivity λ 0.022–0.024 W/m·K — among the lowest-cost paths to a given U-value in cold rooms",
      "Operating range −40 to +80 °C when thickness and joint detail match the application",
      "Standard lengths up to 12 m reduce horizontal joint count on long wall runs",
      "Cam-lock modular rooms can ship flat-packed — often 800–1,200 m² per 40 ft HC container at 80–100 mm thickness",
      "Self-extinguishing foam behaviour — suitable for many industrial envelopes but not fire-rated compartment walls",
      "Facing options in PPGI/PPGL allow colour coordination with existing plant buildings",
    ],
    selectionGuidance:
      "Start with your target internal temperature, ambient design condition and largest single wall dimension. Chiller rooms at +2 to +8 °C often land at 80–100 mm; freezer rooms at −18 °C commonly need 100–120 mm before door losses and defrost cycles are added. High-traffic doorways and long external walls in humid coastal climates may need one step thicker or a PIR core if headroom is fixed. Choose cam-lock when the room is modular and may expand; choose tongue-and-groove for fixed industrial envelopes. Send us the room plan — we will not quote a thickness from a single temperature number alone.",
    thermalPerformance: [
      { thickness: "80 mm", uValue: "0.28", indicative: true },
      { thickness: "100 mm", uValue: "0.22", indicative: true },
      { thickness: "120 mm", uValue: "0.18", indicative: true },
      { thickness: "150 mm", uValue: "0.15", indicative: true },
    ],
    installationNotes:
      "Joint sealing is the difference between a dry cold room and callbacks about condensation trails. Cam-lock panels need even gasket compression along the full joint length — overtightening one corner leaves a gap three metres away. Tongue-and-groove runs need vapor-barrier tape continuity at every horizontal lap, especially where the envelope meets a floor coving or ceiling penetration. Do not cut panels on site with a disc grinder against the foam — use a fine-tooth blade and seal the cut edge. Allow thermal movement at corners; rigid silicone blobs crack within one season in East African humidity cycles. We issue handling and joint diagrams with the supply; on-site supervision is available on request for first-time installers.",
    comparisonNotes:
      "PUF is usually the lowest cost per m² for a given insulation value in cold-chain work. PIR achieves a lower λ at the same thickness — worth the premium when headroom or external footprint is constrained, or when improved fire behaviour is specified. Rockwool trades thermal performance for non-combustibility and acoustic mass; it is the wrong first choice for a −25 °C freezer on cost and thickness alone, but the right one for a fire wall between plant zones. We will show both foam options on the same quotation when you ask — we do not push PIR where PUF meets the load.",
    keySpec: "λ 0.022–0.024 W/m·K · 38–42 kg/m³ · ~1000 mm cover width",
    coreOfType: "polyurethane foam (PUF)",
    specs: [
      { label: "Core material", value: "Rigid polyurethane foam (PUF)", verified: false, note: SPEC_NOTE },
      { label: "Typical core density", value: "38–42", unit: "kg/m³", verified: false, note: SPEC_NOTE },
      { label: "Thermal conductivity (λ)", value: "0.022–0.024", unit: "W/m·K", verified: false, note: SPEC_NOTE },
      { label: "Cover width (effective)", value: "~1000", unit: "mm", verified: false, note: SPEC_NOTE },
      { label: "Standard lengths", value: "Up to 12", unit: "m", verified: false, note: SPEC_NOTE },
      { label: "Facing options", value: "PPGI / PPGL, 0.40–0.60 mm typical", verified: false, note: SPEC_NOTE },
      { label: "Joint system", value: "Cam-lock or tongue-and-groove", verified: false, note: SPEC_NOTE },
      { label: "Operating temperature range", value: "−40 to +80", unit: "°C", verified: false, note: SPEC_NOTE },
    ],
    thicknessOptions: ["40 mm", "50 mm", "60 mm", "80 mm", "100 mm", "120 mm", "150 mm", "200 mm"],
    coverWidth: "~1000 mm",
    facings: ["PPGI (pre-painted galvanized iron)", "PPGL (pre-painted galvalume)"],
    jointTypes: ["cam-lock", "tongue-and-groove"],
    finishes: ["standard RAL colours on request", "food-grade facing where specified"],
    applications: [
      "cold-room-construction",
      "warehouse-insulation",
      "food-processing-envelope",
      "controlled-temperature-storage",
    ],
    industries: ["cold-storage", "food-processing", "warehousing-logistics", "dairy"],
    comparisons: ["puf-vs-pir-panels", "puf-vs-rockwool-panels"],
    relatedProducts: ["pir-panels", "cold-room-panels", "roofing-panels"],
    faqs: [
      {
        question: "Why do I see condensation at PUF panel joints in a freezer?",
        answer:
          "Condensation at joints is almost always air leakage, not failed foam. Warm humid air reaches the cold side through a compressed gasket gap, a missed vapor-barrier lap or a door threshold detail. Re-check gasket continuity and vapor-barrier tape before blaming panel density. We can review photos and joint sections remotely.",
      },
      {
        question: "What thickness do I need for a −18 °C freezer room?",
        answer:
          "For most freezer rooms at −18 °C in East Africa, 100–120 mm PUF is a common starting point. Final thickness depends on room size, ambient conditions, door openings and your target energy use. Send us the room dimensions and we will calculate the build-up.",
      },
      {
        question: "Can PUF panels be used for chiller rooms at +2 to +8 °C?",
        answer:
          "Yes. Chiller rooms typically need 80–100 mm depending on size and location. Smaller rooms and high-traffic doors may need thicker panels to hold temperature.",
      },
      {
        question: "What is the difference between cam-lock and tongue-and-groove joints?",
        answer:
          "Cam-lock panels hook together with a rotating lock at the joint — common in modular cold rooms. Tongue-and-groove panels slide and interlock, often used in wall and roof cladding. We supply both; the choice depends on your installer and the application.",
      },
      {
        question: "Do you supply panels with food-grade facings?",
        answer:
          "Yes, on request. Standard supply is PPGI or PPGL. For direct food contact zones, specify the facing requirement in your enquiry and we will confirm availability and coating type.",
      },
      {
        question: "How are PUF panels packed for export to Africa?",
        answer:
          "Panels are stacked flat on timber pallets, edge-protected and stretch-wrapped. A 40 ft container typically holds 800–1,200 m² depending on thickness and profile. We share the loading plan before you confirm the order.",
      },
      {
        question: "Can I install PUF panels myself?",
        answer:
          "Modular cold room kits with cam-lock joints are designed for trained installers. For large industrial envelopes, we recommend an experienced cladding contractor. We can share installation guidelines; on-site supervision is available on request.",
      },
      {
        question: "What fire rating do PUF panels have?",
        answer:
          "Standard PUF panels are self-extinguishing but not fire-rated for compartmentation. If your project needs a certified fire rating, look at rockwool-core or fire-rated panel options, or contact us with the required rating and test standard.",
      },
      {
        question: "How long does export delivery to Kenya take?",
        answer:
          "From order confirmation, manufacturing takes 2–4 weeks depending on thickness and volume. Sea freight to Mombasa is typically 18–25 days from Indian west coast ports. We share the bill of lading and tracking once the container sails.",
      },
      {
        question: "Should I seal cam-lock joints with silicone on the cold side?",
        answer:
          "Follow the joint detail on the drawing. Excess silicone on the cold face can crack and trap moisture. Gaskets and vapor-barrier tape at the joint line are the primary seal; sealant is supplementary where the detail calls for it.",
      },
    ],
    exportNotes:
      "PUF panels ship flat-stacked in 40 ft or 20 ft containers. Thicker panels (150 mm and above) reduce m² per container — we provide a loading schedule with your quotation. Corner profiles, flashings and cam-lock accessories are packed separately in the same container where possible.",
    images: [
      {
        src: "/images/hero/hero-cold-storage-hvac.jpg",
        alt: "Industrial refrigeration condenser units mounted on an exterior plant wall — stock reference image",
        width: 1600,
        height: 1067,
        caption: "Stock reference — cold-chain plant exterior, not a Phoenixx installation.",
        isStock: true,
      },
      {
        src: "/images/products/metal-cladding-exterior.jpg",
        alt: "Modern industrial building with corrugated metal sandwich panel cladding — stock reference",
        width: 1600,
        height: 1067,
        caption: "Typical PPGI-faced panel appearance on an industrial envelope.",
        isStock: true,
      },
      {
        src: "/images/solutions/cold-storage-exterior-hvac.jpg",
        alt: "Row of packaged HVAC units on a warehouse exterior wall — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
      {
        src: "/images/solutions/warehouse-interior.jpg",
        alt: "Empty warehouse interior with high ceiling and concrete floor — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "pir-panels",
    name: "PIR Sandwich Panels",
    shortName: "PIR Panels",
    category: "panel",
    h1: "PIR Sandwich Panels — Higher Fire Performance Than Standard PUF",
    seoTitle: "PIR Sandwich Panels — Thermal & Fire | PHOENIXX",
    metaDescription:
      "Polyisocyanurate foam panels with lower λ than PUF and improved fire behaviour. When the premium is justified for cold storage export.",
    summary:
      "Polyisocyanurate (PIR) foam core between metal facings — lower thermal conductivity than standard PUF at the same thickness, with modified fire behaviour that suits many cold-chain and industrial specs. Costs more per m²; we quote both cores so you can see when the premium pays back.",
    quickAnswer:
      "PIR panels use a polyisocyanurate foam core with λ 0.019–0.022 W/m·K — roughly one thickness step less than PUF for the same U-value. The premium is justified when headroom is fixed, footprint is limited, or the spec asks for better fire behaviour than standard polyurethane. Not on cost alone for a large simple chiller.",
    overview:
      "PIR (polyisocyanurate) sandwich panels share the same metal-facing construction as our PUF range but use a modified isocyanurate foam formulation. The result is lower thermal conductivity and improved fire behaviour compared with standard polyurethane — not a replacement for mineral wool on fire-rated compartment walls, but a meaningful step up on many project specifications. In practice, an 80 mm PIR wall often approximates the U-value of 100 mm PUF, which matters when ceiling height is capped or when you are retrofitting inside an existing shell. PIR foam is slightly denser (40–45 kg/m³ typical) and the raw material cost is higher — expect roughly 15–25 % more per m² than equivalent-thickness PUF depending on volume and facing. We quote both on the same enquiry when you ask; we will tell you plainly if PUF meets the load and PIR is discretionary. One caveat we see in the field: buyers specify PIR for fire reasons alone without checking the actual test report their insurer wants — PIR improves fire behaviour versus PUF but does not automatically satisfy a named fire period. Send the required standard and we will map it honestly.",
    construction:
      "PIR core is laminated between PPGI or PPGL facings on the same continuous line as PUF, with foam chemistry adjusted for the isocyanurate index. Facing thickness, joint profiles and cover width (~1000 mm effective) follow the same families as PUF — cam-lock for modular cold rooms, tongue-and-groove for industrial cladding. Do not mix PIR and PUF panels on the same continuous envelope; expansion and joint geometry differ enough to cause alignment issues at corners.",
    benefits: [
      "Typical λ 0.019–0.022 W/m·K — often one thickness step less than PUF for the same U-value",
      "Modified foam formulation with improved fire behaviour versus standard PUF",
      "Suits freezer applications to −40 °C when joint detail and thickness are calculated correctly",
      "Same facing and joint options as PUF — easier to upgrade a spec without redesigning flashings",
      "Higher core density (40–45 kg/m³) adds a small stiffness benefit on long wall spans",
      "Can increase m² per container versus thick PUF when a thinner build-up clears the thermal load",
    ],
    selectionGuidance:
      "Choose PIR when the GA drawing shows fixed ceiling height, when the client specification names improved fire performance over PUF, or when external wall footprint cannot grow but the U-value target is fixed. Stay on PUF when the room is a standard −18 °C freezer with generous dimensions and no fire upgrade requirement — the saving is real. For pharmaceutical cold chain or high-visibility food plants where downtime cost is high, PIR's thinner wall can recover floor area. Send target U-value or temperature band plus any fire standard reference; we respond with a side-by-side line item, not a single-core push.",
    thermalPerformance: [
      { thickness: "60 mm", uValue: "0.32", indicative: true },
      { thickness: "80 mm", uValue: "0.24", indicative: true },
      { thickness: "100 mm", uValue: "0.19", indicative: true },
      { thickness: "120 mm", uValue: "0.16", indicative: true },
    ],
    installationNotes:
      "PIR panels handle and cut like PUF — same gasket care, same vapor-barrier continuity rules. Because the core is denser, long panels need two installers on the lift to avoid twisting the joint during cam-lock engagement. Store panels flat; edge damage to the foam before install is harder to repair on PIR than on lower-density PUF. Fixings and screw depth follow the facing gauge on the drawing — overtightening through-fixings dimples the inner face and breaks the vapor seal.",
    comparisonNotes:
      "Against PUF: PIR wins on λ and fire behaviour; PUF wins on unit cost for large simple envelopes. Against Rockwool: PIR wins on thermal performance and weight; Rockwool wins when the spec demands non-combustible mineral fibre regardless of thickness. We do not recommend mixing cores in one room — pick one core type per temperature-controlled zone.",
    keySpec: "λ 0.019–0.022 W/m·K · improved fire vs PUF · ~1000 mm cover",
    coreOfType: "polyisocyanurate foam (PIR)",
    specs: [
      { label: "Core material", value: "Rigid polyisocyanurate foam (PIR)", verified: false, note: SPEC_NOTE },
      { label: "Typical core density", value: "40–45", unit: "kg/m³", verified: false, note: SPEC_NOTE },
      { label: "Thermal conductivity (λ)", value: "0.019–0.022", unit: "W/m·K", verified: false, note: SPEC_NOTE },
      { label: "Cover width (effective)", value: "~1000", unit: "mm", verified: false, note: SPEC_NOTE },
      { label: "Standard lengths", value: "Up to 12", unit: "m", verified: false, note: SPEC_NOTE },
      { label: "Facing options", value: "PPGI / PPGL, 0.40–0.60 mm typical", verified: false, note: SPEC_NOTE },
      { label: "Joint system", value: "Cam-lock or tongue-and-groove", verified: false, note: SPEC_NOTE },
      { label: "Operating temperature range", value: "−40 to +80", unit: "°C", verified: false, note: SPEC_NOTE },
    ],
    thicknessOptions: ["40 mm", "50 mm", "60 mm", "80 mm", "100 mm", "120 mm", "150 mm"],
    coverWidth: "~1000 mm",
    facings: ["PPGI (pre-painted galvanized iron)", "PPGL (pre-painted galvalume)"],
    jointTypes: ["cam-lock", "tongue-and-groove"],
    finishes: ["standard RAL colours on request"],
    applications: [
      "cold-room-construction",
      "controlled-temperature-storage",
      "pharmaceutical-cold-chain",
      "warehouse-insulation",
    ],
    industries: ["cold-storage", "pharmaceutical-cleanroom", "food-processing", "dairy"],
    comparisons: ["puf-vs-pir-panels", "pir-vs-rockwool-panels"],
    relatedProducts: ["puf-panels", "cold-room-panels", "cleanroom-panels"],
    faqs: [
      {
        question: "When is PIR worth the premium over PUF?",
        answer:
          "When headroom or external wall thickness is capped, when the spec names improved fire behaviour over PUF, or when a thinner build-up saves floor area in a high-value cold store. For a large simple chiller with no space constraint, PUF usually wins on cost.",
      },
      {
        question: "When should I choose PIR over PUF?",
        answer:
          "Choose PIR when you need a lower U-value at the same thickness — for example, a freezer room where external space is limited. If thickness is not constrained, PUF is usually cheaper per m² for the same thermal result.",
      },
      {
        question: "Is PIR better for freezer applications?",
        answer:
          "PIR and PUF both work down to −40 °C when specified correctly. PIR lets you use 80 mm where PUF might need 100 mm for the same insulation value. Send your room spec and we will compare both options with pricing.",
      },
      {
        question: "Does PIR have better fire performance than PUF?",
        answer:
          "PIR foam is formulated for improved fire behaviour compared to standard PUF, but neither replaces a mineral wool core for fire-rated compartment walls. Specify your fire rating requirement and we will recommend the right core type.",
      },
      {
        question: "What cover width do PIR panels come in?",
        answer:
          "Effective cover width is approximately 1000 mm, same as our PUF range. Confirm the exact module with your quotation — profiles vary slightly by manufacturer line.",
      },
      {
        question: "Can PIR and PUF panels be mixed in one project?",
        answer:
          "We do not recommend mixing core types in the same envelope — joint details, thermal movement and expansion coefficients differ. Use one core type per room or building zone.",
      },
      {
        question: "How do PIR panels ship to East Africa?",
        answer:
          "Same as PUF: flat-stacked in containers with edge protection. PIR panels are slightly denser, so container capacity in m² is marginally lower than equivalent-thickness PUF. We include the loading plan in your quote.",
      },
      {
        question: "Do you provide U-value calculations for PIR build-ups?",
        answer:
          "Yes. Share room dimensions, target internal temperature, ambient design temperature and location. We calculate the required thickness and send a build-up summary with the quotation.",
      },
      {
        question: "Is PIR mandatory for pharmaceutical cold chain?",
        answer:
          "Not automatically. Many pharma cold rooms use PUF when the specification allows. PIR is specified when the U-value target, fire note or client standard names it. Send the spec sheet and we will map it without upselling.",
      },
      {
        question: "Does PIR yellow or degrade in tropical heat on the outer face?",
        answer:
          "The foam core is protected by the outer metal facing. Facing colour fade is a coating issue on the steel — we specify UV-stable pre-painted coil where the project is exposed to strong sun. Inner cold-face appearance is unaffected.",
      },
    ],
    exportNotes:
      "PIR panels follow the same container loading approach as PUF. Because PIR achieves lower λ, projects often use thinner panels — this can increase m² per container compared to an equivalent PUF specification. Accessories and flashings packed in the same shipment where possible.",
    images: [
      {
        src: "/images/hero/hero-manufacturing-panels.jpg",
        alt: "Green metal-clad industrial warehouse exterior under clear sky — stock reference",
        width: 1600,
        height: 1067,
        caption: "Stock reference — insulated metal-clad envelope.",
        isStock: true,
      },
      {
        src: "/images/products/metal-cladding-exterior.jpg",
        alt: "Industrial building with corrugated sandwich panel siding — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
      {
        src: "/images/plant/industrial-warehouse-exterior.jpg",
        alt: "Large industrial warehouse with metal cladding — stock reference, not Phoenixx plant",
        width: 1600,
        height: 1067,
        isStock: true,
      },
      {
        src: "/images/solutions/cold-storage-exterior-hvac.jpg",
        alt: "Packaged air-conditioning units on a warehouse wall — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "rockwool-panels",
    name: "Rockwool Sandwich Panels",
    shortName: "Rockwool Panels",
    category: "panel",
    h1: "Rockwool Sandwich Panels for Fire-Rated Walls and Partitions",
    seoTitle: "Rockwool Sandwich Panels — Fire Rated | PHOENIXX",
    metaDescription:
      "Mineral wool core sandwich panels for fire-rated walls. Weight and thermal trade-off versus PUF explained for industrial export projects.",
    summary:
      "Mineral wool (rockwool) core between steel facings — non-combustible insulation for fire-rated walls, acoustic separation and plant zones where polyurethane foam is not acceptable. Heavier and thermally inferior to PUF at the same thickness; specified when fire performance drives the brief.",
    quickAnswer:
      "Rockwool sandwich panels use a mineral fibre core that is non-combustible — the default when a wall must carry a fire period or separate hazardous plant zones. Expect roughly 2–3× the panel weight of PUF at the same thickness and a higher U-value; you trade thermal efficiency for fire compliance and acoustic damping.",
    overview:
      "Rockwool (mineral wool) sandwich panels put a non-combustible fibre core between pre-painted steel facings. They are specified when the building code, insurer or process engineer requires a fire-rated separation — not because they insulate better than foam. At 100 mm, a typical rockwool wall might land near U 0.35–0.40 W/m²K where PUF would be closer to 0.22 — that gap matters if you are also trying to hold −18 °C on the other side, which is why cold rooms stay on foam unless a fire wall sits between zones at ambient. Weight is the other factor buyers underestimate: a 100 mm rockwool panel can exceed 25 kg/m² whereas PUF might be under 12 kg/m² — your steel structure and fixings must be checked, not copied from a foam-only shed drawing. The honest trade-off: you are buying fire performance and acoustic mass, not the thinnest cold envelope. We supply rockwool walls and roofs with tongue-and-groove or concealed-fix profiles; joint fire-stops and trim details must match the tested system — we confirm against the approved build-up before dispatch.",
    construction:
      "Mineral wool slabs are lamination-bonded or inserted between inner and outer steel facings, typically 0.50–0.70 mm on fire-rated specs. Core density is higher than foam — commonly 100–140 kg/m³ depending on the required fire period. Facings are micro-rib or flat profiles per the drawing. Cover width is approximately 1000 mm. Rockwool absorbs moisture if left open to rain — panels must be stored under cover and installed with facings intact.",
    benefits: [
      "Non-combustible mineral fibre core — specified for fire-rated compartment walls",
      "Typical weighted sound reduction 35–45 dB on partition specs (system-dependent)",
      "Operates to +600 °C core exposure in fire tests when part of a certified build-up",
      "No melting or dripping in fire scenarios — unlike foam cores",
      "Suitable for plant rooms, corridors and boundaries between process zones",
      "Available in wall and roof profiles with matching flashings",
    ],
    selectionGuidance:
      "Specify rockwool when the drawing names a fire period, when the insurer lists non-combustible insulation, or when acoustic separation between noisy plant and offices is part of the brief. Do not specify it for a primary −25 °C freezer envelope on thermal grounds alone — foam cores will be thinner and cheaper. Match thickness to the fire test report you need, not a guess from a catalogue. Send the required standard (e.g. local fire code reference) and wall height so we can confirm purlin spacing and fixing density.",
    thermalPerformance: [
      { thickness: "80 mm", uValue: "0.45", indicative: true },
      { thickness: "100 mm", uValue: "0.38", indicative: true },
      { thickness: "120 mm", uValue: "0.32", indicative: true },
      { thickness: "150 mm", uValue: "0.26", indicative: true },
    ],
    installationNotes:
      "Rockwool panels need more fixings per m² than foam — follow the drawing, not the habit from PUF sheds. Long panels flex under their own weight; use spreader bars on the lift. Cut with a fine-tooth saw and cap the core edge to stop fibre dust in food plants. Fire-stops at junctions with foam-cored panels must be detailed — mixing cores at a corner without a rated closure is a common inspection failure. Store flat and dry; waterlogged mineral fibre loses both thermal and fire performance.",
    comparisonNotes:
      "Versus PUF and PIR: rockwool wins on fire and acoustics; foam wins on thermal performance, weight and cost. Versus fire-rated board systems: sandwich panels speed up install but need crane access and accurate steelwork. We will state plainly when a foam envelope plus a separate fire board is cheaper than an all-rockwool wall — it often is on small jobs.",
    keySpec: "Non-combustible core · ~25 kg/m² at 100 mm · fire-rated systems",
    coreOfType: "mineral wool (rockwool)",
    specs: [
      { label: "Core material", value: "Mineral wool (rockwool)", verified: false, note: SPEC_NOTE },
      { label: "Typical core density", value: "100–140", unit: "kg/m³", verified: false, note: SPEC_NOTE },
      { label: "Thermal conductivity (λ)", value: "0.035–0.040", unit: "W/m·K", verified: false, note: SPEC_NOTE },
      { label: "Panel weight (indicative)", value: "22–28", unit: "kg/m² at 100 mm", verified: false, note: SPEC_NOTE },
      { label: "Cover width (effective)", value: "~1000", unit: "mm", verified: false, note: SPEC_NOTE },
      { label: "Facing options", value: "PPGI / PPGL, 0.50–0.70 mm typical", verified: false, note: SPEC_NOTE },
      { label: "Joint system", value: "Tongue-and-groove with fire-stop trim", verified: false, note: SPEC_NOTE },
      { label: "Combustibility", value: "Non-combustible mineral fibre", verified: false, note: SPEC_NOTE },
    ],
    thicknessOptions: ["50 mm", "80 mm", "100 mm", "120 mm", "150 mm", "200 mm"],
    coverWidth: "~1000 mm",
    facings: ["PPGI (pre-painted galvanized iron)", "PPGL (pre-painted galvalume)"],
    jointTypes: ["tongue-and-groove", "concealed-fix"],
    finishes: ["standard RAL colours on request"],
    applications: ["warehouse-insulation", "industrial-envelope", "food-processing-envelope"],
    industries: ["manufacturing-plants", "warehousing-logistics", "food-processing"],
    comparisons: ["pir-vs-rockwool-panels", "puf-vs-rockwool-panels"],
    relatedProducts: ["fire-rated-panels", "wall-panels", "puf-panels"],
    faqs: [
      {
        question: "How much heavier are rockwool panels than PUF?",
        answer:
          "Roughly double to triple the mass per m² at the same thickness. A 100 mm rockwool panel is often 22–28 kg/m² versus under 12 kg/m² for PUF. Check purlins and fixings — do not assume foam-era spacing.",
      },
      {
        question: "Can I use rockwool panels for a −18 °C freezer room?",
        answer:
          "Technically possible but usually the wrong economics. You need much thicker rockwool to match foam U-values, adding cost and structure load. Use foam for the cold envelope and rockwool for fire separations at ambient boundaries.",
      },
      {
        question: "What fire rating do rockwool sandwich panels achieve?",
        answer:
          "The rating belongs to the tested system — panel plus joint, trim and fixing detail. Send the fire period and test standard your project references and we will map it to an approved build-up. We do not publish generic ratings without a matched system.",
      },
      {
        question: "Do rockwool panels absorb water?",
        answer:
          "The core can hold moisture if facings are punctured or panels are stored unprotected in rain. Install with intact coatings and cap cut edges. Wet mineral fibre must be replaced — it does not dry back to specified performance.",
      },
      {
        question: "Are rockwool panels harder to cut on site?",
        answer:
          "Yes. Use fine-tooth blades and dust control in food and pharma areas. Fibre dust is irritant — installers should use masks and vacuums per their method statement.",
      },
      {
        question: "How do rockwool panels ship for export?",
        answer:
          "Flat-stacked like foam panels but heavier — container m² counts drop and axle weights matter on road legs. We provide a weight-loaded packing plan with the quotation.",
      },
      {
        question: "Can rockwool and PUF panels meet at a corner?",
        answer:
          "Only with a detailed fire-stop or transition profile approved for that junction. Mixing cores without a rated closure fails inspections. Show us the corner on the drawing before install.",
      },
      {
        question: "Is rockwool better for sound insulation?",
        answer:
          "Generally yes compared with foam cores. Weighted sound reduction depends on the full partition build-up — panel plus air gap plus lining. Share the acoustic target if this drives the spec.",
      },
      {
        question: "What thickness for a two-hour fire wall?",
        answer:
          "Thickness alone does not guarantee a period — the certified system does. Send the required rating and we will quote the matched panel, joint and trim package.",
      },
      {
        question: "Do you supply rockwool roof panels?",
        answer:
          "Yes for fire-rated roof specs on industrial buildings. Roof spans are shorter than foam roofs due to weight — purlin spacing must follow the structural note on the drawing.",
      },
    ],
    exportNotes:
      "Rockwool panels add significant weight per container. We load to axle and port handling limits, often reducing m² per 40 ft HC versus foam. Edge protection is critical — core compression damages fire performance. Fire-stop accessories ship in labelled crates within the same container.",
    images: [
      {
        src: "/images/plant/industrial-warehouse-exterior.jpg",
        alt: "Industrial warehouse with metal sandwich panel cladding — stock reference",
        width: 1600,
        height: 1067,
        caption: "Stock reference — fire-rated envelopes often match this cladding form.",
        isStock: true,
      },
      {
        src: "/images/products/metal-cladding-exterior.jpg",
        alt: "Corrugated metal facade on a factory building — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
      {
        src: "/images/hero/hero-peb-steel-frame.jpg",
        alt: "Steel frame structure inside an industrial hall — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
      {
        src: "/images/solutions/warehouse-interior.jpg",
        alt: "Wide-span warehouse interior — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "roofing-panels",
    name: "Roofing Sandwich Panels",
    shortName: "Roofing Panels",
    category: "panel",
    h1: "Insulated Roofing Panels — Trapezoidal Profiles for Industrial Spans",
    seoTitle: "Insulated Roofing Sandwich Panels | PHOENIXX",
    metaDescription:
      "Trapezoidal insulated roof panels for warehouses and factories. Purlin spacing, sag on long spans and tropical UV facing notes for export.",
    summary:
      "Insulated roof sandwich panels in trapezoidal and concealed-fix profiles — PUF, PIR or rockwool core depending on thermal and fire requirements. Specified with purlin spacing, fixing pattern and drip detail for long spans in tropical export markets.",
    quickAnswer:
      "Roofing sandwich panels combine a structural outer profile, insulation core and inner liner in one liftable unit — typically trapezoidal outer ribs over PUF or PIR foam for warehouse roofs. Span capability depends on purlin spacing and core density; sagging beyond the structural table and outer-coat chalking in UV are the two field issues we address in quotations.",
    overview:
      "Insulated roofing panels turn a warehouse roof into a single fixed-up operation — outer weather sheet, insulation and inner liner arrive as one element screwed to purlins. We supply trapezoidal profiles for exposed-fastener industrial roofs and concealed-fix options where the architectural brief demands it. Core type follows the same logic as walls: PUF for general insulated sheds, PIR when a lower U-value is needed without adding thickness, rockwool when the roof must be part of a fire-rated separation. Span tables are not guesswork — a 0.70 mm outer profile on 100 mm PUF might be rated to 1.8 m purlin spacing while a 1.2 m spacing on the same sheet will show visible deflection within a season. Tropical UV is the other honest caveat: pre-painted outer sheets in strong equatorial sun can chalk or fade on the weather face even when the coating is UV-stable — this is cosmetic, not structural, but clients who specify bright colours on roof tops should expect faster appearance change than on wall panels. We quote fixing centres, screw type and drip-edge detail with the panel schedule.",
    construction:
      "Outer profile is formed galvanised or galvalume sheet, typically 0.50–0.70 mm, with trapezoidal ribs for bending stiffness. Core is injected foam or inserted mineral wool depending on specification. Inner liner is flat or micro-rib white sheet, often 0.40 mm, that completes the vapour control layer when joints are taped correctly. Panels are supplied in lengths up to 12 m — longer than 11 m needs site access checks for delivery and lift. Side laps interlock with foam-backed beads or factory-applied sealant; end laps sit over purlins with butyl tape and screw clusters per the detail.",
    benefits: [
      "Single-pass install versus built-up insulation systems — fewer trades on the roof",
      "100 mm PUF roof commonly achieves U 0.22–0.25 W/m²K (indicative, system-dependent)",
      "Trapezoidal ribs increase stiffness — span ratings to ~1.8–2.0 m purlin centres on standard specs",
      "Inner white liner improves daylight reflectivity in unlit warehouses",
      "Lengths to 12 m cut horizontal joint count on long barrel roofs",
      "Compatible with standard ridge, gutter and eave flashing packages",
    ],
    selectionGuidance:
      "Send roof plan area, purlin spacing, design wind load reference and whether the roof is part of a fire-rated boundary. Increase profile gauge or reduce purlin spacing before you increase foam thickness if deflection is the concern. In coastal zones, specify AZ150 or equivalent outer coating class. For cold store roofs, treat the roof like a wall thermally — vapour control on the warm side is non-negotiable. We do not approve spacing wider than the structural table in our quotation notes.",
    thermalPerformance: [
      { thickness: "50 mm", uValue: "0.42", indicative: true },
      { thickness: "80 mm", uValue: "0.28", indicative: true },
      { thickness: "100 mm", uValue: "0.23", indicative: true },
      { thickness: "120 mm", uValue: "0.19", indicative: true },
    ],
    installationNotes:
      "Start from the eaves, not the ridge — lap direction must shed water. Use the specified screw length and washer type; undertightening is as bad as overtightening on trapezoidal roofs. Walk boards only — foot traffic on unfixed panels dents ribs and compresses foam at the purlin line. Cut end laps on the ground with deburred edges. In windy seasons, temporary clamping prevents panels lifting before fixings are complete. Sagging mid-span is corrected by adding purlins, not by pulling screws tighter.",
    comparisonNotes:
      "Versus single-skin metal plus blanket insulation: sandwich panels cost more upfront but install faster and give a cleaner inner finish. Versus foam walls on the same project: roof panels carry higher structural demand — do not copy wall thickness without checking span. Rockwool roofs are heavier; confirm steel weights before ordering.",
    keySpec: "Trapezoidal profile · span per purlin table · PUF/PIR/rockwool core",
    coreOfType: "varies by specification (PUF / PIR / rockwool)",
    specs: [
      { label: "Outer profile", value: "Trapezoidal or concealed-fix", verified: false, note: SPEC_NOTE },
      { label: "Outer sheet thickness", value: "0.50–0.70", unit: "mm typical", verified: false, note: SPEC_NOTE },
      { label: "Core options", value: "PUF / PIR / rockwool", verified: false, note: SPEC_NOTE },
      { label: "Typical purlin spacing", value: "1.5–2.0", unit: "m (spec-dependent)", verified: false, note: SPEC_NOTE },
      { label: "Standard lengths", value: "Up to 12", unit: "m", verified: false, note: SPEC_NOTE },
      { label: "Cover width (effective)", value: "~1000", unit: "mm", verified: false, note: SPEC_NOTE },
      { label: "Inner liner", value: "0.40 mm flat/micro-rib white typical", verified: false, note: SPEC_NOTE },
      { label: "Fixing pattern", value: "Per structural note on drawing", verified: false, note: SPEC_NOTE },
    ],
    thicknessOptions: ["40 mm", "50 mm", "80 mm", "100 mm", "120 mm", "150 mm"],
    coverWidth: "~1000 mm",
    facings: ["PPGI outer profile", "PPGI inner liner"],
    jointTypes: ["side-lap interlock", "end-lap over purlin"],
    finishes: ["standard RAL on outer face", "white inner liner typical"],
    applications: ["warehouse-insulation", "industrial-envelope", "cold-room-construction"],
    industries: ["warehousing-logistics", "manufacturing-plants", "cold-storage"],
    comparisons: ["puf-vs-pir-panels"],
    relatedProducts: ["wall-panels", "puf-panels", "pir-panels"],
    faqs: [
      {
        question: "How far can roofing panels span between purlins?",
        answer:
          "Depends on profile depth, outer gauge, core type and design load. Typical PUF roof panels land between 1.5 and 2.0 m centres on standard industrial specs. Send your spacing and we will confirm against the structural table — do not extrapolate from a catalogue photo.",
      },
      {
        question: "Why is my insulated roof sagging after one season?",
        answer:
          "Usually purlin spacing too wide, incorrect fixings or foot traffic damage during install. Adding a purlin row fixes most cases; pulling screws harder does not. Send photos and spacing — we can tell if it is structural or installation.",
      },
      {
        question: "Will the outer colour fade in African sun?",
        answer:
          "Strong UV can chalk or lighten pre-painted surfaces over time — especially dark colours on horizontal roofs. This is cosmetic. Specify lighter colours or higher UV-class coil if appearance retention matters on the weather face.",
      },
      {
        question: "Can I walk on installed roof panels?",
        answer:
          "Only on designated walk paths with boards over purlin lines. Random foot traffic dents ribs and compresses foam, leading to ponding and leaks.",
      },
      {
        question: "Which core is best for a simple warehouse roof?",
        answer:
          "PUF is the usual choice on cost and thermal performance. PIR when you need lower U-value without extra thickness. Rockwool when the roof is part of a fire-rated separation.",
      },
      {
        question: "How are long roof panels delivered?",
        answer:
          "Flat on cradles or angled in open-top or high-cube containers depending on length. Lengths above 11 m need route surveys for port and site access. We confirm before production.",
      },
      {
        question: "Do you supply ridge and eave flashings?",
        answer:
          "Yes as formed accessories matched to the profile. Quote them with the panel schedule so colours and gauges align.",
      },
      {
        question: "Can roof panels go on an existing steel frame?",
        answer:
          "Yes if purlin levels and spacing match an approved table or we redesign spacing. Retrofits often need packers or additional purlins — send as-built steel drawings.",
      },
      {
        question: "What screw type do you specify?",
        answer:
          "Self-drilling screws with EPDM washers sized to outer gauge and purlin thickness. The pattern is on the structural note — do not substitute shorter screws to save time.",
      },
      {
        question: "Are concealed-fix roof panels available?",
        answer:
          "Yes for architectural industrial projects. They need tighter tolerances on purlin alignment and usually cost more than exposed-fastener trapezoidal systems.",
      },
    ],
    exportNotes:
      "Long roof panels dominate container geometry — we nest accessories in the gaps and may split lengths for port handling if access is tight. Outer sheets are protected with film where the coil supplier provides it. Weight limits apply sooner on rockwool roofs than foam.",
    images: [
      {
        src: "/images/hero/hero-warehouse-ceiling.jpg",
        alt: "Warehouse ceiling with skylight panels and metal liner — stock reference",
        width: 1600,
        height: 1067,
        caption: "Stock reference — insulated roof interior appearance.",
        isStock: true,
      },
      {
        src: "/images/hero/hero-peb-steel-frame.jpg",
        alt: "Steel portal frame inside a factory under construction — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
      {
        src: "/images/products/metal-cladding-exterior.jpg",
        alt: "Industrial building with metal roof and wall cladding — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
      {
        src: "/images/solutions/warehouse-interior.jpg",
        alt: "Empty warehouse showing roof span — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "wall-panels",
    name: "Wall Sandwich Panels",
    shortName: "Wall Panels",
    category: "panel",
    h1: "Wall Sandwich Panels for Exterior Cladding and Internal Partitions",
    seoTitle: "Wall Sandwich Panels — Cladding Export | PHOENIXX",
    metaDescription:
      "Insulated wall panels for factories and cold storage. Tongue-and-groove joints, delamination prevention and partition guidance for export.",
    summary:
      "Insulated wall sandwich panels for exterior cladding and internal partitions — tongue-and-groove or concealed-fix systems with PUF, PIR or rockwool cores. Joint preparation and fixing sequence matter more than buyers expect for delamination-free service life.",
    quickAnswer:
      "Wall sandwich panels interlock vertically and horizontally to form insulated envelopes on factories, warehouses and temperature-controlled buildings. Delamination at joints usually starts from poor surface prep, wrong fixings or panels stored wet — not from normal thermal movement when the correct core and gasket detail are used.",
    overview:
      "Wall sandwich panels clad industrial buildings as a single insulated skin — outer weather sheet, core and inner liner fixed to steel columns or girts. Tongue-and-groove joints suit most warehouse and plant walls; concealed-fix systems hide screws for office and showroom facades. Core selection mirrors roofs and cold rooms: PUF for general insulation, PIR when thickness is capped, rockwool when the wall is part of a fire-rated boundary. Partition walls inside a plant use the same panels mounted on a steel sub-frame — acoustic performance improves with mass, so rockwool partitions are common between noisy production and QAQC offices. The delamination buyers fear — facing separation at joints or bubbled coatings — is almost always traceable to installation: panels stored unprotected in rain, fixings overtightened off purlin lines, or foam cores cut with heat guns that melt the bond zone. One caveat we state upfront: horizontal joint lines on very tall walls need expansion allowance; rigid sealant beads crack and let water track behind the outer face. We detail joint gaskets and flashing sequences on the drawing set, not in a generic brochure.",
    construction:
      "Wall panels share the same lamination principle as roof units but with vertical joint geometry optimised for water shedding and wind suction. Outer sheet is typically micro-rib or flat 0.50 mm PPGI; inner liner 0.40 mm white is standard for unlit factory interiors. Side joints tongue-and-groove with factory-applied foam bead or gasket; base detail sits on cill trim with insect baffle and drip. Fixings pass through slotted holes in the inner liner into girts — screw type and density follow wind load notes.",
    benefits: [
      "Continuous insulated envelope without separate cavity insulation trades",
      "100 mm PUF wall commonly near U 0.22 W/m²K — indicative, per full build-up",
      "Tongue-and-groove vertical install at 400–600 m² per crew-day on open walls (site-dependent)",
      "Partition systems reuse the same panels on internal steel frames",
      "Colour-matched flashings with roof panels for single-envelope quotes",
      "Food and pharma projects can specify hygienic inner facing on request",
    ],
    selectionGuidance:
      "Exterior walls: confirm wind load, girt spacing and whether the wall is parapet or full-height. Partitions: confirm acoustic or fire requirement before picking core — foam is fine between two conditioned spaces; rockwool between plant and office. Cold store walls should align core type with the ceiling and floor coving detail. Send elevations with opening sizes so we can schedule corner panels and reduce site cuts.",
    thermalPerformance: [
      { thickness: "60 mm", uValue: "0.35", indicative: true },
      { thickness: "80 mm", uValue: "0.28", indicative: true },
      { thickness: "100 mm", uValue: "0.22", indicative: true },
      { thickness: "120 mm", uValue: "0.18", indicative: true },
    ],
    installationNotes:
      "Install bottom to top with each joint fully engaged before the next panel is lifted. Do not lever panels with crowbars against the foam edge — that is a common delamination starter. Fixings must sit flush with girts; a screw driven between girts pulls the inner face away from the core. Cut openings with framed supports — freestanding cutouts flex and crack sealant within months. On partition walls, terminate panels at ceiling grids with a movement gap, not hard silicone. Store panels flat and dry; water ingress between facings before install is not repairable in the field.",
    comparisonNotes:
      "Versus masonry with insulated cavity: sandwich panels are faster and lighter but need accurate steelwork. Versus single-skin cladding plus internal insulation: one trade and a cleaner finish, higher material cost. Versus cold-room cam-lock panels: wall tongue-and-groove is for building envelopes, not modular box rooms — do not mix systems on the same face.",
    keySpec: "Tongue-and-groove wall · PUF/PIR/rockwool · ~1000 mm module",
    coreOfType: "varies by specification (PUF / PIR / rockwool)",
    specs: [
      { label: "Profile type", value: "Micro-rib or flat wall panel", verified: false, note: SPEC_NOTE },
      { label: "Outer sheet thickness", value: "0.50", unit: "mm typical", verified: false, note: SPEC_NOTE },
      { label: "Core options", value: "PUF / PIR / rockwool", verified: false, note: SPEC_NOTE },
      { label: "Cover width (effective)", value: "~1000", unit: "mm", verified: false, note: SPEC_NOTE },
      { label: "Standard lengths", value: "Up to 12", unit: "m", verified: false, note: SPEC_NOTE },
      { label: "Joint system", value: "Tongue-and-groove or concealed-fix", verified: false, note: SPEC_NOTE },
      { label: "Inner liner", value: "0.40 mm white PPGI typical", verified: false, note: SPEC_NOTE },
      { label: "Fixing to steel", value: "Through inner liner to girt", verified: false, note: SPEC_NOTE },
    ],
    thicknessOptions: ["40 mm", "50 mm", "80 mm", "100 mm", "120 mm", "150 mm"],
    coverWidth: "~1000 mm",
    facings: ["PPGI outer sheet", "PPGI inner liner"],
    jointTypes: ["tongue-and-groove", "concealed-fix"],
    finishes: ["RAL outer colours", "white inner liner standard"],
    applications: ["warehouse-insulation", "industrial-envelope", "food-processing-envelope"],
    industries: ["warehousing-logistics", "manufacturing-plants", "food-processing"],
    comparisons: ["puf-vs-rockwool-panels"],
    relatedProducts: ["roofing-panels", "puf-panels", "rockwool-panels"],
    faqs: [
      {
        question: "What causes delamination at wall panel joints?",
        answer:
          "Usually installation damage — panels stored wet, fixings off-girt, or joints forced with levers. Facing bond fails where the foam is crushed or overheated during site cuts. Follow the joint sequence on the drawing and delamination risk drops sharply.",
      },
      {
        question: "Can wall panels be used for internal partitions only?",
        answer:
          "Yes on a steel stud or channel frame. Acoustic partitions often use rockwool core; general divisions between conditioned spaces can use PUF or PIR.",
      },
      {
        question: "Do wall and roof panels need the same core?",
        answer:
          "Not mandatory across the whole building, but each envelope zone should be consistent. Mixing cores on the same plane causes joint mismatch. Quote walls and roofs together when possible.",
      },
      {
        question: "How do I detail openings for doors and windows?",
        answer:
          "Use framed openings in the drawing — we supply jamb trim and head flashings matched to the panel profile. Frehand oversized cuts void the warranty on joint performance.",
      },
      {
        question: "Are concealed-fix wall panels worth the extra cost?",
        answer:
          "For facades visible to visitors or office fronts, yes. For rear plant walls, exposed-fix tongue-and-groove is faster and easier to maintain.",
      },
      {
        question: "Can I paint over the outer facing later?",
        answer:
          "Pre-painted coil is not designed for field repainting without adhesion testing. Specify the RAL at order stage — colour changes after install are costly on large walls.",
      },
      {
        question: "What girt spacing do you assume?",
        answer:
          "Typically 1.5–2.0 m vertically depending on wind load and panel thickness. Send the structural engineer's note — we align fixings to it.",
      },
      {
        question: "How are wall panels packed for export?",
        answer:
          "Flat-stacked with face protection between panels. Heavier rockwool walls reduce m² per container versus foam. Corner trims ship in labelled bundles.",
      },
      {
        question: "Do wall panels need a separate vapour barrier?",
        answer:
          "The inner liner acts as a vapour control layer when joints are taped per the detail. Cold store walls need continuous vapor-barrier logic through floors and ceilings — not stop-gap tape at one joint.",
      },
      {
        question: "Can panels run vertically full height without horizontal joint?",
        answer:
          "Up to available panel length — often 12 m. Taller walls need horizontal joints with designed expansion gaps and trim covers.",
      },
    ],
    exportNotes:
      "Wall panels pack efficiently flat — often higher m² per container than roof lengths of the same thickness. Colour-facing must be confirmed before coil allocation; changes after order entry delay production. Flashings and cill sections are nested between panel faces with protective interleaving.",
    images: [
      {
        src: "/images/products/metal-cladding-exterior.jpg",
        alt: "Industrial facade with horizontal metal sandwich panel cladding — stock reference",
        width: 1600,
        height: 1067,
        caption: "Stock reference — typical exterior wall panel appearance.",
        isStock: true,
      },
      {
        src: "/images/hero/hero-manufacturing-panels.jpg",
        alt: "Metal-clad industrial building exterior — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
      {
        src: "/images/plant/industrial-warehouse-exterior.jpg",
        alt: "Warehouse with insulated metal wall panels — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
      {
        src: "/images/solutions/warehouse-interior.jpg",
        alt: "Industrial warehouse interior partition zone — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "cold-room-panels",
    name: "Cold Room Panels",
    shortName: "Cold Room Panels",
    category: "panel",
    h1: "Cold Room Sandwich Panels — Modular and Custom Build",
    seoTitle: "Cold Room Panels — Export from India | PHOENIXX",
    metaDescription:
      "Cam-lock cold room panels for chiller and freezer rooms. Modular kits and custom sizes. Full page coming soon.",
    summary:
      "Purpose-built cold room panels with cam-lock joints for chiller, freezer and blast-freezer applications.",
    coreOfType: "polyurethane foam (PUF) or polyisocyanurate (PIR)",
    specs: [],
    comparisons: [],
    images: [],
    applications: ["cold-room-construction", "controlled-temperature-storage"],
    industries: ["cold-storage", "food-processing", "dairy"],
    relatedProducts: ["puf-panels", "pir-panels", "industrial-doors"],
    faqs: [],
    holdingCopy:
      "Cam-lock cold room panels publish next — corner profiles, floor coving and door jamb interfaces included. Until then, size your room with our live PUF and PIR panel pages and note cam-lock in the quotation request.",
    draft: true,
  },
  {
    slug: "cleanroom-panels",
    name: "Cleanroom Sandwich Panels",
    shortName: "Cleanroom Panels",
    category: "panel",
    h1: "Cleanroom Sandwich Panels for Controlled Environments",
    seoTitle: "Cleanroom Panels — Export from India | PHOENIXX",
    metaDescription:
      "Cleanroom wall and ceiling panels for pharmaceutical and food processing facilities. Full page coming soon.",
    summary:
      "Smooth-faced sandwich panels for cleanroom walls and ceilings — pharmaceutical, food and electronics applications.",
    coreOfType: "polyisocyanurate (PIR) or polyurethane (PUF)",
    specs: [],
    comparisons: [],
    images: [],
    applications: ["cleanroom-fitout", "pharmaceutical-cold-chain"],
    industries: ["pharmaceutical-cleanroom", "food-processing"],
    relatedProducts: ["pir-panels", "puf-panels", "wall-panels"],
    faqs: [],
    holdingCopy:
      "Cleanroom panel finishes, coved joints and ISO-class considerations publish in the next batch. For active tenders, reference our PIR page for core performance and flag hygiene-class facing in your datasheet request.",
    draft: true,
  },
  {
    slug: "fire-rated-panels",
    name: "Fire-Rated Sandwich Panels",
    shortName: "Fire-Rated Panels",
    category: "panel",
    h1: "Fire-Rated Sandwich Panels for Compartment Walls",
    seoTitle: "Fire-Rated Sandwich Panels — Export | PHOENIXX",
    metaDescription:
      "Mineral wool core fire-rated panels for industrial fire compartmentation. Full page coming soon.",
    summary:
      "Fire-rated sandwich panels with mineral wool cores for walls and roofs where building codes require non-combustible insulation.",
    coreOfType: "mineral wool (rockwool)",
    specs: [],
    comparisons: [],
    images: [],
    applications: ["industrial-envelope", "warehouse-insulation"],
    industries: ["manufacturing-plants", "warehousing-logistics"],
    relatedProducts: ["rockwool-panels", "wall-panels", "roofing-panels"],
    faqs: [],
    holdingCopy:
      "Fire-rated system pages will tie test reports to joint and trim details — not generic marketing ratings. Until then, use the live Rockwool panel page for mineral wool build-ups and send your required fire period with the enquiry.",
    draft: true,
  },
  {
    slug: "industrial-doors",
    name: "Industrial Cold Room Doors",
    shortName: "Industrial Doors",
    category: "door",
    h1: "Industrial and Cold Room Doors for Temperature-Controlled Facilities",
    seoTitle: "Industrial Cold Room Doors — Export | PHOENIXX",
    metaDescription:
      "Hinged, sliding and high-speed doors for cold rooms and industrial buildings. Full page coming soon.",
    summary:
      "Cold room doors, industrial sliding doors and high-speed doors matched to panel systems and temperature requirements.",
    coreOfType: "insulated door leaf with PUF/PIR core",
    specs: [],
    comparisons: [],
    images: [],
    applications: ["cold-room-construction", "warehouse-insulation"],
    industries: ["cold-storage", "food-processing", "warehousing-logistics"],
    relatedProducts: ["cold-room-panels", "puf-panels", "pir-panels"],
    faqs: [],
    holdingCopy:
      "Industrial door types, frame interfaces and gasket specifications publish shortly. Quote door openings with your panel order now — we will match leaf thickness to the wall build-up on the live PUF and PIR pages.",
    draft: true,
  },
  {
    slug: "peb-prefabricated-buildings",
    name: "PEB and Prefabricated Buildings",
    shortName: "PEB Structures",
    category: "structure",
    h1: "Pre-Engineered Buildings with Insulated Panel Cladding",
    seoTitle: "PEB Prefabricated Buildings — Export | PHOENIXX",
    metaDescription:
      "Pre-engineered steel buildings with sandwich panel cladding for warehouses and factories. Full page coming soon.",
    summary:
      "Pre-engineered building (PEB) steel structures with insulated sandwich panel walls and roofs for warehouses, factories and distribution centres.",
    coreOfType: "steel frame with insulated panel envelope",
    specs: [],
    comparisons: [],
    images: [],
    applications: ["warehouse-insulation", "industrial-envelope"],
    industries: ["warehousing-logistics", "manufacturing-plants"],
    relatedProducts: ["puf-panels", "roofing-panels", "wall-panels"],
    faqs: [],
    holdingCopy:
      "PEB frame and cladding packages publish in the next batch — bay spacing, bracing and panel interfaces included. Until then, send building width, length and eave height with panel types from our live roofing and wall pages.",
    draft: true,
  },
];
