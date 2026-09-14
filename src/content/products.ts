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
    h1: "Cam-Lock Cold Room Panels — Modular Chiller and Freezer Kits",
    seoTitle: "Cold Room Panels — Cam-Lock Export | PHOENIXX",
    metaDescription:
      "Modular cam-lock cold room panels for chiller and freezer rooms. Door jamb bridging and floor coving detail for export projects.",
    summary:
      "Cam-lock sandwich panels sized as complete cold room kits — chiller, freezer and blast-freezer boxes with corner pieces, coving and door frame interfaces. We engineer the floor-to-wall and jamb transitions because that is where most African installs lose temperature, not at the panel face.",
    quickAnswer:
      "Cold room panels use cam-lock hooks at vertical joints so a box room can ship flat-packed and assemble without site welding. Typical cores are PUF or PIR between 80–150 mm depending on target temperature. Heat bridging at the door frame and an unsealed floor coving junction are the two details buyers skip — we include jamb profiles and floor interface drawings in every kit quotation.",
    overview:
      "A modular cold room is a box assembled from cam-lock sandwich panels — not a random wall panel order with corners cut on site. Each vertical joint rotates into a gasketed hook; horizontal laps and ceiling pieces complete the envelope. We supply chiller rooms (+2 to +8 °C), standard freezers (−18 °C) and lower-temperature blast zones when your load calculation supports it. Core type follows the same logic as our PUF and PIR ranges; cam-lock geometry is the differentiator here. The caveat we raise on every enquiry: door frame heat bridging and floor junctions cause more callbacks than panel thickness mistakes. A 120 mm wall with a bare steel door frame and no coving at the floor is a thermal short circuit — warm air tracks the frame while your compressor runs flat out. We quote jamb profiles, floor coving sections and threshold interfaces with the panel schedule so your installer is not improvising with angle iron on the day of assembly.",
    construction:
      "Cam-lock panels pair a hook-and-rotate vertical joint with tongue-and-groove horizontal laps where the profile requires it. Core is injected PUF or PIR between 0.45–0.60 mm pre-painted steel facings; food-facing side can be upgraded on request. Standard module width is approximately 1000 mm effective cover. Corner pieces, H-post connectors, ceiling panels and coving extrusions ship in labelled crates within the same container. Door openings are factory-framed where possible — field-cut openings need our jamb supplement kit to recover the thermal break.",
    benefits: [
      "Flat-packed modular kits — often 800–1,200 m² panel area per 40 ft HC container at 100 mm thickness",
      "Cam-lock assembly without welding — suited to sites with limited crane access",
      "Complete corner, coving and jamb accessory schedule quoted with the room, not as afterthoughts",
      "PUF or PIR core options matched to chiller versus freezer duty",
      "Room layouts can expand with additional panel modules when production grows",
      "Export packing with edge protection and labelled joint hardware reduces site confusion",
    ],
    selectionGuidance:
      "Send internal dimensions, target temperature, ambient design condition and door size/position. A −18 °C freezer in humid coastal East Africa typically starts at 100–120 mm PUF before door losses; blast freezers need a proper load calc, not a catalogue guess. Specify how many door openings and whether forklifts need a rated floor coving detail. If the room sits inside an existing shell, tell us what the external walls are — we may recommend a thinner internal box with its own vapour control layer.",
    thermalPerformance: [
      { thickness: "80 mm", uValue: "0.28", indicative: true },
      { thickness: "100 mm", uValue: "0.22", indicative: true },
      { thickness: "120 mm", uValue: "0.18", indicative: true },
      { thickness: "150 mm", uValue: "0.15", indicative: true },
    ],
    installationNotes:
      "Sequence matters: floor coving or floor panel interface first, then wall panels from a corner, ceiling last. Cam-lock engagement needs even pressure along the joint — never force a panel with a crowbar against the foam lip. Door jambs must be installed with the supplied thermal break gaskets before the door leaf is hung; retrofitting gaskets after the frame is fixed rarely achieves full compression. At the floor junction, continuous coving without gaps is non-negotiable in freezers — mop water and warm air enter any open corner. Allow the room to pull down under supervision before you load product; joint leaks show as frost trails at bridging points within 48 hours.",
    comparisonNotes:
      "Versus site-built masonry cold stores: modular cam-lock rooms install in days and can relocate if lease terms change. Versus tongue-and-groove wall panels on a fixed building: cam-lock suits box rooms; continuous cladding suits large envelope walls — do not specify cam-lock for a 200 m long warehouse wall. Versus thicker panels alone: if door frames and floors are not detailed, extra thickness does not fix the bridge.",
    keySpec: "Cam-lock modular · PUF/PIR core · jamb + coving kit",
    coreOfType: "polyurethane foam (PUF) or polyisocyanurate (PIR)",
    specs: [
      { label: "Joint system", value: "Cam-lock hook-and-rotate", verified: false, note: SPEC_NOTE },
      { label: "Core options", value: "PUF or PIR", verified: false, note: SPEC_NOTE },
      { label: "Typical panel thickness (freezer)", value: "100–120", unit: "mm", verified: false, note: SPEC_NOTE },
      { label: "Cover width (effective)", value: "~1000", unit: "mm", verified: false, note: SPEC_NOTE },
      { label: "Facing options", value: "PPGI / PPGL, 0.45–0.60 mm", verified: false, note: SPEC_NOTE },
      { label: "Accessories", value: "Corners, coving, jamb profiles, ceiling panels", verified: false, note: SPEC_NOTE },
      { label: "Operating temperature range", value: "−40 to +15", unit: "°C typical", verified: false, note: SPEC_NOTE },
      { label: "Assembly", value: "Mechanical cam-lock — no site welding", verified: false, note: SPEC_NOTE },
    ],
    thicknessOptions: ["80 mm", "100 mm", "120 mm", "150 mm", "180 mm", "200 mm"],
    coverWidth: "~1000 mm",
    facings: ["PPGI (pre-painted galvanized iron)", "PPGL (pre-painted galvalume)", "food-grade facing on request"],
    jointTypes: ["cam-lock"],
    finishes: ["standard RAL colours", "white internal typical for food plants"],
    applications: [
      "cold-room-construction",
      "controlled-temperature-storage",
      "food-processing-envelope",
    ],
    industries: ["cold-storage", "food-processing", "dairy", "warehousing-logistics"],
    comparisons: ["puf-vs-pir-panels"],
    relatedProducts: ["puf-panels", "pir-panels", "industrial-doors"],
    faqs: [
      {
        question: "Why does frost appear on the door frame before anywhere else?",
        answer:
          "The door frame is a steel bridge through the insulation line. Without thermal break gaskets and a correctly detailed jamb profile, the frame stays warmer than the panel field and condenses first. We supply jamb kits matched to your wall thickness — do not substitute generic steel angle.",
      },
      {
        question: "How do you detail the floor-to-wall junction in a freezer?",
        answer:
          "Continuous floor coving or an insulated floor panel interface with sealed laps — no open corner. The drawing shows coving radius, sealant type and fixings. Cutting coving short to save cost is the most common floor junction failure we see on site.",
      },
      {
        question: "Can I order cold room panels without the accessory kit?",
        answer:
          "We strongly advise against it. Corners, coving and jambs are part of the thermal system. Panels-only quotes are available for experienced contractors who already hold compatible profiles — state that explicitly in your enquiry.",
      },
      {
        question: "What is the difference between a cold room kit and standard PUF wall panels?",
        answer:
          "Cold room kits use cam-lock joints and include box-room accessories sized to your internal dimensions. Standard tongue-and-groove wall panels clad building envelopes — different joint, different accessory set.",
      },
      {
        question: "How long to assemble a modular cold room on site?",
        answer:
          "A trained crew often completes a 50–100 m³ chiller box in two to four days excluding refrigeration commissioning. Freezer rooms need longer pull-down and joint inspection time before sign-off.",
      },
      {
        question: "Do cam-lock panels need silicone on every joint?",
        answer:
          "Gaskets and cam-lock compression provide the primary seal. Supplementary sealant is used only where the detail calls for it — excess silicone on the cold face cracks and traps moisture.",
      },
      {
        question: "Can the room be extended later?",
        answer:
          "Yes if you plan an expansion wall during the first order. We can leave a removable end panel or schedule compatible cam-lock modules for a future bay — tell us at quotation stage.",
      },
      {
        question: "What door size should I allow in the panel schedule?",
        answer:
          "Share forklift pallet dimensions and traffic direction. Undersized doors increase open time and load; oversized openings add bridge area. We coordinate leaf thickness with the industrial doors page spec.",
      },
      {
        question: "How are cold room kits packed for export?",
        answer:
          "Panels flat-stacked; corners, coving and hardware in labelled crates within the same container. We issue a packing list that maps crate numbers to assembly sequence.",
      },
      {
        question: "Is PIR worth it inside a cam-lock freezer box?",
        answer:
          "When internal volume is tight or the client spec names improved fire behaviour over PUF, yes. For a large simple −18 °C box with generous dimensions, PUF usually meets the load at lower cost — we quote both when asked.",
      },
    ],
    exportNotes:
      "Cold room kits ship as panel stacks plus accessory crates in 40 ft HC containers. Door jamb and coving profiles are nested between panel faces with edge protection. Hardware bags are labelled by room elevation to reduce customs unpacking errors on first-time African sites.",
    images: [
      {
        src: "/images/solutions/freezer-boxes.jpg",
        alt: "Stacked insulated freezer boxes in a warehouse yard — stock reference, not a Phoenixx install",
        width: 1600,
        height: 1067,
        caption: "Stock reference — modular cold box form factor.",
        isStock: true,
      },
      {
        src: "/images/hero/hero-cold-storage-hvac.jpg",
        alt: "Refrigeration condenser units on an exterior plant wall — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
      {
        src: "/images/solutions/cold-storage-exterior-hvac.jpg",
        alt: "Packaged HVAC units mounted on a cold storage building — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
      {
        src: "/images/products/warehouse-interior-product.jpg",
        alt: "Temperature-controlled warehouse interior aisle — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "cleanroom-panels",
    name: "Cleanroom Sandwich Panels",
    shortName: "Cleanroom Panels",
    category: "panel",
    h1: "Cleanroom Wall and Ceiling Panels — Smooth Hygiene Facings",
    seoTitle: "Cleanroom Panels — Hygiene Export | PHOENIXX",
    metaDescription:
      "Smooth-faced cleanroom panels for pharma and food plants. Coved joints and washdown-safe detailing for controlled environments.",
    summary:
      "Smooth-faced sandwich panels for cleanroom walls and ceilings — PIR or PUF core with hygiene-grade coatings where specified. Joint geometry and coved bases are engineered for washdown regimes, because bio-burden collects at panel laps long before the facing itself fails.",
    quickAnswer:
      "Cleanroom panels use flat or lightly micro-rib inner facings with tight tongue-and-groove or concealed joints, plus coved skirting at floor lines. ISO class is achieved by the full system — HVAC, gowning, cleaning protocol and joint detail — not by panel marketing claims alone. Washdown pressure at unsealed horizontal laps is the contamination path we design out first.",
    overview:
      "Cleanroom fit-out panels must present a wipeable, non-shedding surface and survive repeated disinfection cycles without chalking or joint opening. We supply wall and ceiling modules with smooth inner facings — typically white coated steel or upgraded hygiene finishes on request — over PIR or PUF cores depending on temperature and fire notes in your URS. Pharmaceutical suites often specify PIR for a thinner partition when HVAC plenum space is tight; food processing areas may accept PUF when the room is not classified but still needs hose-down surfaces. Our honest caveat on every pharma enquiry: washdown water and chemical residue migrate into open joints and behind poorly terminated coving — that is where contamination audits fail, not on the flat field of the panel. We detail coved bases, sealed horizontal laps and penetration collars in the drawing set. We do not publish generic ISO class numbers on a panel SKU; your validation consultant maps the installed system to the class you target.",
    construction:
      "Inner facing is smooth PPGI or specified hygiene coating; outer facing follows the plant envelope requirement. Core is PIR or PUF laminated on a continuous line with density held to project spec. Wall panels interlock vertically with factory-applied gasket bead or sealant channel; ceiling panels use concealed-fix or flush grid interfaces. Coving pieces are radius extrusions or formed steel at wall-floor and wall-ceiling transitions. Window and pass-through openings receive framed trim with silicone-free options where your SOP bans certain sealant chemistry.",
    benefits: [
      "Smooth inner facing suited to wipe-down and fogging disinfection cycles",
      "Coved skirting and ceiling cornice profiles reduce ledges where residue collects",
      "PIR option recovers plenum height in classified suites with tight floor-to-deck dimensions",
      "Concealed-fix facades available for corridors visible to auditors",
      "Panel modules coordinate with common cleanroom door frame sections",
      "Export packing with facing interleaves protects coating gloss during long sea transits",
    ],
    selectionGuidance:
      "Send target cleanliness class reference (if any), washdown method — low-pressure wipe versus high-pressure hose — temperature range and whether the room is part of a cold chain suite. Classified pharma work needs your HVAC and pressurisation scheme alongside panel enquiry; we respond with joint and coving detail, not a class badge. For food hygiene zones without formal classification, specify chemical exposure (peracetic, quat, chlorine) so we confirm coating compatibility.",
    thermalPerformance: [
      { thickness: "50 mm", uValue: "0.38", indicative: true },
      { thickness: "80 mm", uValue: "0.26", indicative: true },
      { thickness: "100 mm", uValue: "0.21", indicative: true },
      { thickness: "120 mm", uValue: "0.17", indicative: true },
    ],
    installationNotes:
      "Install coving before the final wall panel course at floor level — retrofit coving after panels are fixed leaves a hidden crevice. Horizontal joints on washdown walls need the specified gasket tape continuous through corners; cutting tape short at intersections is an audit finding. Penetrations for sockets and pipes get collar trim with sealant type named on the drawing — mixed chemistry on site voids coating warranties. Ceiling panels must be fixed to a grid or purlin layout that allows removal for filter changes without levering against foam edges. Do not use abrasive pads on coated facings during construction cleanup — scratches harbour biofilm later.",
    comparisonNotes:
      "Versus standard industrial wall panels: cleanroom modules use smoother facings and tighter joint accessories; micro-rib warehouse walls are cheaper but harder to sanitise. Versus post-finished drywall: sandwich panels install faster and avoid plaster dust during fit-out, but joint discipline during install is stricter. Versus cold-room cam-lock: cleanrooms need coved hygiene geometry, not freezer floor bridging — different accessory families.",
    keySpec: "Smooth hygiene facing · coved joints · PIR/PUF core",
    coreOfType: "polyisocyanurate (PIR) or polyurethane (PUF)",
    specs: [
      { label: "Inner facing", value: "Smooth PPGI or hygiene-grade coating", verified: false, note: SPEC_NOTE },
      { label: "Core options", value: "PIR or PUF", verified: false, note: SPEC_NOTE },
      { label: "Typical wall thickness", value: "50–120", unit: "mm", verified: false, note: SPEC_NOTE },
      { label: "Joint system", value: "Tongue-and-groove or concealed-fix", verified: false, note: SPEC_NOTE },
      { label: "Coving", value: "Radius wall-floor and wall-ceiling profiles", verified: false, note: SPEC_NOTE },
      { label: "Cover width (effective)", value: "~1000", unit: "mm", verified: false, note: SPEC_NOTE },
      { label: "Ceiling interface", value: "Flush grid or concealed-fix", verified: false, note: SPEC_NOTE },
      { label: "Coating compatibility", value: "Confirm against cleaning agents in URS", verified: false, note: SPEC_NOTE },
    ],
    thicknessOptions: ["50 mm", "60 mm", "80 mm", "100 mm", "120 mm"],
    coverWidth: "~1000 mm",
    facings: ["smooth PPGI inner", "PPGI/PPGL outer", "hygiene-grade coating on request"],
    jointTypes: ["tongue-and-groove", "concealed-fix"],
    finishes: ["white smooth inner standard", "RAL outer on plant envelope"],
    applications: ["cleanroom-fitout", "pharmaceutical-cold-chain", "food-processing-envelope"],
    industries: ["pharmaceutical-cleanroom", "food-processing", "cold-storage"],
    comparisons: ["pir-vs-rockwool-panels"],
    relatedProducts: ["pir-panels", "wall-panels", "industrial-doors"],
    faqs: [
      {
        question: "Do your panels achieve ISO 7 or ISO 8 on their own?",
        answer:
          "No panel SKU carries an ISO class by itself. Classification depends on airflow, filtration, pressurisation, procedures and joint integrity after install. We supply surfaces and joint details that support your validated system — your consultant maps the outcome.",
      },
      {
        question: "Can cleanroom panels withstand daily hose-down?",
        answer:
          "Yes when joints and coving are installed per the hygiene detail. High-pressure nozzles aimed directly at open laps will force water behind the facing — that is an installation gap, not a facing defect.",
      },
      {
        question: "What causes contamination findings at panel joints?",
        answer:
          "Incomplete gasket continuity, missing coving at floor lines, or sealant incompatible with your disinfectant. Residue wicks into capillary gaps and survives visual inspection until swab testing.",
      },
      {
        question: "PIR or PUF for a classified suite?",
        answer:
          "PIR when plenum space is tight or the spec names improved fire behaviour. PUF when the room is hygiene-critical but not formally classified and cost sensitivity is high. Send your URS and we align without upselling.",
      },
      {
        question: "Are concealed-fix joints better for pharma corridors?",
        answer:
          "Often yes — fewer exposed screw heads and cleaner lines for auditor walk-through. Rear plant walls may still use tongue-and-groove for speed and access.",
      },
      {
        question: "How do you handle pipe and cable penetrations?",
        answer:
          "Framed collars with named sealant or gasket systems on the drawing. Site-drilled holes without trim are not acceptable in washdown zones.",
      },
      {
        question: "Can cleanroom ceilings support HEPA housings?",
        answer:
          "Ceiling panels integrate with common grid systems when load paths are shown on the structural note. Heavy housings need dedicated support steel — share equipment weights early.",
      },
      {
        question: "Do you supply windows and viewing panels?",
        answer:
          "Yes as framed modules with flush inner glazing and sealed perimeters. Vision panel size affects cleaning SOP — oversized glazing adds edge length to maintain.",
      },
      {
        question: "How are panels protected during export?",
        answer:
          "Facing interleaves and edge boards on flat stacks. Long sea transits to East Africa need intact coating on arrival — unpacking damage before install is treated as site handling, so we pack accordingly.",
      },
      {
        question: "Can cleanroom panels be used in cold chain suites?",
        answer:
          "Yes where hygiene and temperature control overlap — coordinate core thickness with cold load and vapour control through floors and ceilings. Mixed cold and classified zones need transition details at the boundary.",
      },
    ],
    exportNotes:
      "Cleanroom panels ship flat with facing protection between each sheet. Coving and trim lengths are bundled separately with colour-coded labels matching elevation drawings. Chemical compatibility notes for coatings travel with the packing list for QA file inclusion.",
    images: [
      {
        src: "/images/details/metal-siding-detail.jpg",
        alt: "Close view of smooth metal panel siding joints — stock reference",
        width: 1600,
        height: 1067,
        caption: "Stock reference — smooth facing and joint line appearance.",
        isStock: true,
      },
      {
        src: "/images/hero/hero-manufacturing-panels.jpg",
        alt: "Clean industrial building with metal panel cladding — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
      {
        src: "/images/solutions/warehouse-interior.jpg",
        alt: "Bright industrial interior suitable for controlled environment fit-out — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
      {
        src: "/images/products/metal-cladding-exterior.jpg",
        alt: "Industrial facade with flat metal sandwich panels — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "fire-rated-panels",
    name: "Fire-Rated Sandwich Panels",
    shortName: "Fire-Rated Panels",
    category: "panel",
    h1: "Fire-Rated Sandwich Panel Systems — Mineral Wool Compartmentation",
    seoTitle: "Fire-Rated Panels — System Export | PHOENIXX",
    metaDescription:
      "Fire-rated mineral wool panel systems for compartment walls. Ratings confirmed against your project test standard — not catalogue guesses.",
    summary:
      "Fire-rated sandwich panel systems with mineral wool cores, matched joints and trim for compartment walls and roofs. We quote against the fire period and test standard on your drawings — we do not invent certification labels or imply PIR foam equals rated fire separation.",
    quickAnswer:
      "A fire-rated panel system is the tested assembly — panel, joint, fixings and trim together — not the core marketing name alone. Mineral wool cores are non-combustible; PIR and PUF improve fire behaviour versus basic foam but do not replace a certified compartment build-up unless your project documents say so. Send the required fire period and standard reference; we map an approved system before dispatch.",
    overview:
      "Fire-rated sandwich panels address compartmentation where your insurer, authority or process safety brief names a fire period on a wall or roof element. The mineral wool core does not melt or drip in fire exposure; facings and joint hardware complete a system that must match a test report your engineer accepts. We supply wall and roof profiles with tongue-and-groove joints, fire-stop trims and fixing patterns documented on the approval drawing. Two objections we answer upfront on export enquiries: first, we will not publish a generic two-hour label on this page — every rating is confirmed against the project-specified test standard and build-up before we release material. Second, buyers often specify PIR sandwich panels expecting certified fire compartmentation; PIR is a better-behaving foam than standard PUF but it is not interchangeable with a mineral wool fire-rated system unless a matched test report explicitly covers that build-up. Mixing foam envelope panels with rockwool fire walls without a detailed transition is a common inspection failure — we detail those junctions or flag the risk in writing.",
    construction:
      "Mineral wool slabs are factory-laminated or inserted between steel facings, typically 0.50–0.70 mm on fire specs. Core density runs higher than foam panels — commonly 100–140 kg/m³ — to meet the system report. Joint lines include fire-stop beads, intumescent trim or approved steel covers per the tested detail; site substitutions void the intended period. Cover width is approximately 1000 mm. Roof and wall profiles are not interchangeable on the same rating — each orientation has its own approval when one exists.",
    benefits: [
      "Non-combustible mineral wool core for compartment walls and rated roof elements",
      "System quotation includes joint trim and fire-stop accessories — not panels alone",
      "Ratings referenced to project documents before manufacturing release",
      "Acoustic mass as a secondary benefit on plant-to-office separations",
      "Compatible flashings and penetration kits when part of the approved build-up",
      "Export packing that protects core edges — compression damages fire performance",
    ],
    selectionGuidance:
      "Send the fire period, test standard reference (as listed on your drawing or insurer letter), wall height and whether the element is wall, roof or partition. Include adjacent envelope types — foam-cored panels, masonry, steel frame — so we can quote transition details. If your brief only says non-combustible insulation without a period, rockwool panels may suffice without a formal fire-rated system — we clarify that distinction to avoid overspecifying.",
    thermalPerformance: [
      { thickness: "80 mm", uValue: "0.45", indicative: true },
      { thickness: "100 mm", uValue: "0.38", indicative: true },
      { thickness: "120 mm", uValue: "0.32", indicative: true },
      { thickness: "150 mm", uValue: "0.26", indicative: true },
    ],
    installationNotes:
      "Fixing density follows the fire test note — never copy foam panel screw spacing. Fire-stops at horizontal and vertical joints must be continuous before the next panel is closed in. Penetrations for ducts and cables use approved collar systems from the same system family; raw holes with generic foam filler fail inspection. Where a foam envelope meets a fire-rated wall, install the detailed transition profile before either side is signed off. Store panels dry — wet mineral fibre must be replaced, not dried in place.",
    comparisonNotes:
      "Versus PIR panels: PIR improves foam fire behaviour but is not a substitute for mineral wool compartmentation unless a specific tested build-up says otherwise. Versus generic rockwool panels: fire-rated systems add matched trim and documented periods; rockwool without a system report is insulation, not a rated compartment. Versus fire board on steel frame: sandwich panels install faster when crane access exists; board systems suit retrofit tight sites.",
    keySpec: "Mineral wool system · rating per project docs · matched trim",
    coreOfType: "mineral wool (rockwool)",
    specs: [
      { label: "Core material", value: "Mineral wool (rockwool)", verified: false, note: SPEC_NOTE },
      { label: "Fire period", value: "Per project test standard — confirmed before dispatch", verified: false, note: SPEC_NOTE },
      { label: "Typical core density", value: "100–140", unit: "kg/m³", verified: false, note: SPEC_NOTE },
      { label: "Thermal conductivity (λ)", value: "0.035–0.040", unit: "W/m·K", verified: false, note: SPEC_NOTE },
      { label: "Joint system", value: "Tongue-and-groove with fire-stop trim", verified: false, note: SPEC_NOTE },
      { label: "Facing thickness", value: "0.50–0.70", unit: "mm typical", verified: false, note: SPEC_NOTE },
      { label: "Cover width (effective)", value: "~1000", unit: "mm", verified: false, note: SPEC_NOTE },
      { label: "Combustibility", value: "Non-combustible mineral fibre core", verified: false, note: SPEC_NOTE },
    ],
    thicknessOptions: ["50 mm", "80 mm", "100 mm", "120 mm", "150 mm", "200 mm"],
    coverWidth: "~1000 mm",
    facings: ["PPGI (pre-painted galvanized iron)", "PPGL (pre-painted galvalume)"],
    jointTypes: ["tongue-and-groove with fire-stop", "concealed-fix where approved"],
    finishes: ["standard RAL colours on request"],
    applications: ["industrial-envelope", "warehouse-insulation", "food-processing-envelope"],
    industries: ["manufacturing-plants", "warehousing-logistics", "food-processing"],
    comparisons: ["pir-vs-rockwool-panels", "puf-vs-rockwool-panels"],
    relatedProducts: ["rockwool-panels", "wall-panels", "roofing-panels"],
    faqs: [
      {
        question: "Can you confirm a two-hour fire rating on this page?",
        answer:
          "No generic period is published here. The rating belongs to a named test system matched to your project documents. Send the period and standard reference and we confirm feasibility before quoting.",
      },
      {
        question: "Are PIR panels acceptable for fire compartment walls?",
        answer:
          "Not unless your project’s approved test report covers that exact PIR build-up. PIR improves fire behaviour versus standard PUF foam but does not automatically satisfy compartmentation requirements. Mineral wool systems are the usual path when a period is specified.",
      },
      {
        question: "What documents do you need to quote a fire-rated system?",
        answer:
          "Drawing extracts showing the rated element, required fire period, test standard reference if listed, wall or roof orientation and heights. Insurer or authority letters help when the drawing is incomplete.",
      },
      {
        question: "Can foam panels meet a rockwool fire wall at a corner?",
        answer:
          "Only with an approved transition detail — intumescent trim, steel closure or listed junction system. Un detailed mixing fails inspections.",
      },
      {
        question: "Do fire-rated roof panels use the same system as walls?",
        answer:
          "Often different approvals by orientation. Share whether the rated element is roof, wall or both — we quote matched profiles separately when required.",
      },
      {
        question: "Why are fire-rated panels heavier than PUF?",
        answer:
          "Mineral wool density is higher and facings may be thicker. Structure and fixings must follow the fire system note, not a foam shed drawing.",
      },
      {
        question: "Can I use rockwool panels without a formal fire rating?",
        answer:
          "Yes when the brief asks for non-combustible insulation only. A fire-rated system adds documented period and trim — specify which you actually need to avoid overpaying.",
      },
      {
        question: "How are fire-stop accessories shipped?",
        answer:
          "Labelled crates with trim lengths matched to panel schedule and elevation marks. Missing a fire-stop batch on site delays close-in — we pack by install sequence.",
      },
      {
        question: "Does cutting panels on site affect the fire period?",
        answer:
          "Uncontrolled field cuts at rated joints can void the system intent. Use framed openings from the drawing; cap cut edges per the method statement.",
      },
      {
        question: "Are test certificates included in export shipments?",
        answer:
          "System documentation is issued against the approved build-up in your project file — not a generic marketing certificate. Confirm document requirements at order stage for customs and consultant review.",
      },
    ],
    exportNotes:
      "Fire-rated panels add weight and need edge protection to prevent core crushing. Trim and fire-stop lengths ship in marked bundles aligned to container unload order. Documentation references the project-matched system — request copies for QA files before sail date.",
    images: [
      {
        src: "/images/hero/hero-peb-steel-frame.jpg",
        alt: "Steel frame industrial hall under construction — stock reference for fire-rated envelope context",
        width: 1600,
        height: 1067,
        isStock: true,
      },
      {
        src: "/images/plant/industrial-warehouse-exterior.jpg",
        alt: "Large industrial warehouse with metal cladding — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
      {
        src: "/images/solutions/steel-sheet-storage.jpg",
        alt: "Stacked steel sheet coils in a factory yard — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
      {
        src: "/images/products/metal-cladding-exterior.jpg",
        alt: "Factory building with sandwich panel facade — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "industrial-doors",
    name: "Industrial Cold Room Doors",
    shortName: "Industrial Doors",
    category: "door",
    h1: "Cold Room and Cleanroom Doors — Insulated Leaves and Frames",
    seoTitle: "Industrial Cold Room Doors — Export | PHOENIXX",
    metaDescription:
      "Hinged and sliding cold room doors with gasketed frames. Threshold and seal detailing for chiller and freezer export projects.",
    summary:
      "Insulated industrial doors for cold rooms, cleanrooms and high-traffic plant openings — hinged, sliding and rapid-roll options matched to panel wall thickness. Seal compression and threshold detailing determine energy loss more than leaf thickness alone.",
    quickAnswer:
      "Cold room doors pair an insulated leaf (typically 80–120 mm PUF or PIR) with a heated or thermal-break frame, floor threshold plate and perimeter gaskets. Seal failure at the sill and jamb bottom — not the panel field — causes most energy and frost complaints. We quote frame, leaf and threshold as one interface set aligned to your wall build-up.",
    overview:
      "Doors are the highest-cycle thermal breach in any cold store or hygiene suite. We supply hinged and sliding insulated doors for chiller and freezer rooms, plus rapid-roll options where forklift traffic demands short open times. Leaf core matches wall insulation — PUF or PIR between steel skins — with thickness coordinated to the panel schedule on the same order. Cleanroom doors add flush surfaces and gasket profiles suited to washdown, without the floor heating elements a freezer needs. The field objection we document on every quotation: seal failure and threshold detailing. A correctly sized leaf with a generic sill plate and no heated threshold will ice up in a −18 °C room within weeks; warm-side jamb gaskets that are never adjusted after install leak audible air within a month. We specify threshold heaters or ramp details, jamb gasket type and maintenance clearance in the door schedule — not as optional extras discovered on site.",
    construction:
      "Door leaf is insulated sandwich construction — steel skins over foam core — sized to opening width and room classification. Frame sections are anodised aluminium or stainless steel options depending on washdown level; thermal-break inserts sit between inner and outer frame faces on freezer specs. Gaskets are replaceable magnetic or PVC profiles seated in continuous grooves. Sliding doors run on tracked head members with safety interlocks; hinged doors use adjustable hinges for post-install compression tuning. Threshold plates may include low-voltage heating circuits on freezer openings — electrical scope is noted on the drawing for your MEP contractor.",
    benefits: [
      "Leaf thickness matched to adjacent panel wall build-up on the same order",
      "Thermal-break frames reduce jamb condensation in freezer duty",
      "Replaceable gasket profiles — maintenance without replacing the whole leaf",
      "Threshold options for heated sill, ramp plate or hygiene coved base at cleanrooms",
      "Sliding and hinged formats for forklift versus personnel traffic patterns",
      "Safety interlocks and release hardware available per local practice",
    ],
    selectionGuidance:
      "Send opening width and height, room temperature, traffic type — pedestrian, pallet jack or forklift — and whether the door faces an unconditioned corridor. Freezer doors need threshold strategy decided at quote stage: heated sill, air curtain coordination or rapid-roll cycle time. Cleanroom doors need facing finish and washdown chemical compatibility. Quote doors with the panel order so jamb depth matches wall thickness exactly.",
    thermalPerformance: [
      { thickness: "80 mm leaf", uValue: "0.35", indicative: true },
      { thickness: "100 mm leaf", uValue: "0.28", indicative: true },
      { thickness: "120 mm leaf", uValue: "0.22", indicative: true },
    ],
    installationNotes:
      "Set frame plumb before foam packing — twisted frames twist gaskets. Adjust hinge or track alignment until gasket compression is even at all four edges; a business card should drag consistently around the perimeter on hinged units. Connect threshold heat only after the refrigeration pull-down schedule allows — energising too early wastes energy, too late ices the sill. Sliding doors need level track and periodic roller greasing per the manual; grit in tracks is a common seal bypass on African sites near unpaved yards. Never fix a door leaf before wall panels are complete — jamb interfaces depend on final panel face position.",
    comparisonNotes:
      "Versus strip curtains alone: curtains are cheap for moderate traffic but leak more on high-cycle freezer openings — many projects use both with the door as primary seal. Versus uninsulated industrial doors: metal roll-up doors without insulation belong outside the cold envelope, not on a −18 °C room. Versus larger openings than needed: oversizing increases infiltration area — size for actual pallet plus margin, not maximum theoretical load.",
    keySpec: "Insulated leaf · thermal-break frame · gasket + threshold kit",
    coreOfType: "insulated door leaf with PUF/PIR core",
    specs: [
      { label: "Leaf construction", value: "Steel skins over PUF/PIR core", verified: false, note: SPEC_NOTE },
      { label: "Typical leaf thickness", value: "80–120", unit: "mm", verified: false, note: SPEC_NOTE },
      { label: "Frame material", value: "Aluminium thermal-break or stainless on request", verified: false, note: SPEC_NOTE },
      { label: "Door types", value: "Hinged, sliding, rapid-roll (application-dependent)", verified: false, note: SPEC_NOTE },
      { label: "Gaskets", value: "Replaceable magnetic or PVC profile", verified: false, note: SPEC_NOTE },
      { label: "Threshold", value: "Heated sill, ramp plate or hygiene detail per room", verified: false, note: SPEC_NOTE },
      { label: "Indicative leaf U-value", value: "0.22–0.35", unit: "W/m²K at 80–120 mm", verified: false, note: SPEC_NOTE },
      { label: "Interlock options", value: "Per traffic and safety brief", verified: false, note: SPEC_NOTE },
    ],
    thicknessOptions: ["80 mm leaf", "100 mm leaf", "120 mm leaf"],
    facings: ["PPGI door skins", "stainless or hygiene finish on request"],
    jointTypes: ["gasketed frame rebate"],
    finishes: ["white or RAL leaf colour", "stainless frame for washdown zones"],
    applications: ["cold-room-construction", "cleanroom-fitout", "warehouse-insulation"],
    industries: ["cold-storage", "food-processing", "pharmaceutical-cleanroom", "warehousing-logistics"],
    comparisons: [],
    relatedProducts: ["cold-room-panels", "cleanroom-panels", "puf-panels"],
    faqs: [
      {
        question: "Why does ice build up at the door threshold first?",
        answer:
          "The sill is where warm moist air meets the coldest path during every open cycle. Without a heated threshold, ramp detail or adequate close speed, condensation freezes into a ridge that prevents gasket contact — a feedback loop. Specify threshold strategy at order stage.",
      },
      {
        question: "How often should door gaskets be replaced?",
        answer:
          "Inspect quarterly on high-cycle freezer doors — sooner if forklift impact marks appear. Gaskets are consumables; running with compressed or torn sections increases energy cost and frost trails on adjacent panels.",
      },
      {
        question: "Hinged or sliding for a forklift freezer opening?",
        answer:
          "Sliding doors suit wide pallet openings with side clearance; hinged doors suit personnel and narrow lanes. Rapid-roll may beat both on very high cycle counts if your refrigeration engineer accepts the infiltration profile.",
      },
      {
        question: "Do cleanroom doors need heated thresholds?",
        answer:
          "Usually no — hygiene suites are not held at −18 °C. Focus on flush gaskets, coved floor interface and chemical-compatible coatings instead.",
      },
      {
        question: "Can you match door jamb depth to cam-lock cold room panels?",
        answer:
          "Yes when doors are quoted on the same schedule as the cold room kit. Send wall thickness and facing type so frames are not shimmed on site.",
      },
      {
        question: "What electrical supply do heated thresholds need?",
        answer:
          "Low-voltage heated sills are typical — exact wattage and control are on the door drawing for your MEP contractor. We do not commission electrical work on export supply.",
      },
      {
        question: "Are safety release handles included for personnel doors?",
        answer:
          "Panic or internal release hardware is specified per local practice and your safety brief. Confirm requirements before manufacturing.",
      },
      {
        question: "How are doors packed for export?",
        answer:
          "Leaves crated upright or flat with frame sections and hardware in separate labelled boxes. Gaskets may ship rolled — acclimatise before install per the manual.",
      },
      {
        question: "Can I add a door to an existing cold room later?",
        answer:
          "Possible with a framed opening cut and jamb retrofit, but thermal performance rarely matches factory-planned openings. Plan door positions in the first panel schedule when you can.",
      },
      {
        question: "Do rapid-roll doors replace insulated sliding doors entirely?",
        answer:
          "Not always — rapid-roll fabric has a different infiltration and washdown profile. Cold store engineers often specify insulated doors for primary separation and rapid-roll at high-traffic internal zones.",
      },
    ],
    exportNotes:
      "Doors ship in crates separate from flat panel stacks to prevent frame bending. Hardware kits are labelled by opening mark matching the elevation drawing. Threshold heaters include wiring diagrams only — local electrician connects on site.",
    images: [
      {
        src: "/images/solutions/logistics-warehouse.jpg",
        alt: "Warehouse loading area with industrial door opening — stock reference",
        width: 1600,
        height: 1067,
        caption: "Stock reference — high-traffic industrial opening context.",
        isStock: true,
      },
      {
        src: "/images/solutions/freezer-boxes.jpg",
        alt: "Insulated cold storage boxes in a yard — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
      {
        src: "/images/solutions/cold-storage-exterior-hvac.jpg",
        alt: "Cold storage building exterior with plant equipment — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
      {
        src: "/images/solutions/warehouse-racks.jpg",
        alt: "Warehouse interior with rack aisles — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "peb-prefabricated-buildings",
    name: "PEB and Prefabricated Buildings",
    shortName: "PEB Structures",
    category: "structure",
    h1: "Pre-Engineered Steel Buildings with Insulated Panel Cladding",
    seoTitle: "PEB Buildings — Steel + Panels Export | PHOENIXX",
    metaDescription:
      "Pre-engineered steel buildings with sandwich panel walls and roofs. Foundation and span tables coordinated — not ignored.",
    summary:
      "Pre-engineered building packages — primary steel frame, secondary purlins and girts, plus insulated wall and roof sandwich panels for warehouses and factories. We coordinate foundation reactions and span tables with the cladding spec so the envelope is not designed in isolation from the structure.",
    quickAnswer:
      "A PEB package is primary steel (columns, rafters, bracing) and secondary members sized to a bay grid, clad with insulated sandwich panels on walls and roof. Cladding span ratings and frame span tables must agree — widening bay spacing to save steel without rechecking panel span limits causes roof sag and fastener pull-through. Foundation anchor bolt templates issue with the steel shop drawings before you pour.",
    overview:
      "Pre-engineered buildings combine a fabricated steel frame with insulated sandwich panel cladding for fast enclosure of warehouses, distribution centres and light industrial plants. We supply the structural package — main frames, secondary purlins and girts, bracing, anchor bolt settings — alongside wall and roof panels selected from our PUF, PIR or rockwool ranges depending on thermal and fire brief. Bay width, eave height and roof slope drive steel tonnage; purlin spacing drives which panel profile and thickness satisfy deflection limits. The objection we tackle on every combined quote: foundation interface and span tables treated separately. If your civil engineer pours a footing template from an old drawing while the steel design moved bay spacing, anchor bolts miss columns. If the frame designer widened purlin spacing without checking the roof panel structural table, the roof dips between supports within a year. We issue coordinated steel and cladding notes on one project schedule — anchor bolt plan, reaction loads for foundations, and purlin spacing matched to the panel span table in the same revision.",
    construction:
      "Primary frames are built-up or rolled sections designed to the bay module and design code reference on the project. Secondary members attach at spacing that matches the approved roof and wall panel tables. Base plates sit on civil foundations with grouted anchor bolts — template dimensions are released before concrete pour on export jobs where rework is costly. Cladding attaches through the inner liner to girts and purlins with patterns from wind load notes. Mezzanine options, crane brackets and future expansion bays can be allowed for in the frame when flagged at enquiry.",
    benefits: [
      "Single supplier path for steel frame and insulated cladding — aligned purlin spacing",
      "Anchor bolt templates and reaction summaries for civil foundation design",
      "Bay grids optimised for common warehouse clear spans without ad hoc panel overrides",
      "Wall and roof panel cores selected for thermal, fire or cost brief on the same building",
      "Phased shipment possible — steel first, panels follow when site is ready",
      "Export crating for steel members with member marks matching erection drawings",
    ],
    selectionGuidance:
      "Send building width, length, eave height, design wind region reference, desired clear span and internal use — storage, production, cold store envelope. Include soil or foundation type if known so we flag anchor bolt embedment assumptions. If you already have a civil engineer, request reaction loads early; if not, we note typical footing sizes as indicative only, not stamped civil design. Choose panel cores after fire and thermal brief — do not default to thin PUF on a roof without checking spacing.",
    thermalPerformance: [
      { thickness: "Roof 80 mm PUF", uValue: "0.28", indicative: true },
      { thickness: "Roof 100 mm PUF", uValue: "0.23", indicative: true },
      { thickness: "Wall 80 mm PUF", uValue: "0.28", indicative: true },
      { thickness: "Wall 100 mm PUF", uValue: "0.22", indicative: true },
    ],
    installationNotes:
      "Verify anchor bolt projection and template alignment before steel erection — heat straightening columns with mis-set bolts is expensive on remote sites. Erect primary frames, install bracing, then secondary members to the spacing on the cladding note — not an improvised wider grid. Panel install follows roof slope direction and lap rules from the roofing page detail. Do not cut purlins on site to fit a panel mistake; reorder the correct length. Grout base plates after final plumb check; envelope leak paths often start at poorly seated base flashings against out-of-level concrete.",
    comparisonNotes:
      "Versus conventional hot-rolled steel: PEB is lighter and faster for standard portal warehouses when the bay module fits. Versus cladding-only supply on someone else's frame: we reduce the spacing mismatch risk when both come from one schedule. Versus site-built masonry: PEB with panels encloses quicker but needs accurate anchor bolt placement — masonry is more forgiving of dimension drift at the cost of time.",
    keySpec: "Portal frame · coordinated purlin spacing · panel cladding",
    coreOfType: "steel frame with insulated panel envelope",
    specs: [
      { label: "Structure type", value: "Pre-engineered portal steel frame", verified: false, note: SPEC_NOTE },
      { label: "Cladding", value: "Insulated sandwich wall and roof panels", verified: false, note: SPEC_NOTE },
      { label: "Panel core options", value: "PUF / PIR / rockwool per brief", verified: false, note: SPEC_NOTE },
      { label: "Purlin spacing", value: "Matched to panel span table on drawing", verified: false, note: SPEC_NOTE },
      { label: "Foundation interface", value: "Anchor bolt template + reaction summary", verified: false, note: SPEC_NOTE },
      { label: "Design code", value: "Per project specification", verified: false, note: SPEC_NOTE },
      { label: "Typical bay width", value: "Project-specific — commonly 6–12", unit: "m", verified: false, note: SPEC_NOTE },
      { label: "Erection", value: "Bolted site assembly — crane required", verified: false, note: SPEC_NOTE },
    ],
    thicknessOptions: ["Roof/wall panels per thermal brief — typically 50–150 mm"],
    facings: ["PPGI wall and roof profiles per panel pages"],
    jointTypes: ["panel side-lap and end-lap per roofing/wall details"],
    finishes: ["RAL cladding colours coordinated wall and roof"],
    applications: ["warehouse-insulation", "industrial-envelope", "cold-room-construction"],
    industries: ["warehousing-logistics", "manufacturing-plants", "food-processing"],
    comparisons: [],
    relatedProducts: ["roofing-panels", "wall-panels", "puf-panels"],
    faqs: [
      {
        question: "Do you supply foundation drawings?",
        answer:
          "We issue anchor bolt templates, reaction summaries and typical footing sketches for your civil engineer. Stamped foundation design remains with your local civil consultant who knows soil conditions.",
      },
      {
        question: "What happens if anchor bolts are cast in the wrong position?",
        answer:
          "Field correction is slow and costly on export sites. We release bolt templates before pour specifically to avoid this — hold concrete until template check is signed off.",
      },
      {
        question: "Can purlin spacing be widened to save secondary steel?",
        answer:
          "Only within the roof panel span table for your profile, thickness and load case. Wider spacing without that check causes visible sag and screw fatigue — we push back when spacing requests exceed the table.",
      },
      {
        question: "Is steel shipped in the same container as panels?",
        answer:
          "Often separate: steel in open-top or bulk containers, panels flat-packed in HC boxes. Phased delivery matches erection sequence when the site pad is not ready for everything at once.",
      },
      {
        question: "Can the building expand later with another bay?",
        answer:
          "Yes if expansion bays and bracing locations are flagged in the first design. Retrofit expansion without planned bracing is structurally messy — plan early.",
      },
      {
        question: "Which panel core is typical on a standard warehouse PEB?",
        answer:
          "PUF on roof and walls for general storage. PIR when a lower U-value is needed without extra thickness; rockwool when a boundary wall must be fire-rated.",
      },
      {
        question: "Do you include gutters and downpipes?",
        answer:
          "Formed metal accessories can be quoted with the cladding schedule. Confirm rainfall intensity reference for sizing on tropical sites.",
      },
      {
        question: "Is erection included in export supply?",
        answer:
          "Supply is FOB/CIF per your Incoterm — erection is by your contractor or a partner we can introduce regionally. Member marks and erection drawings support bolt-up assembly.",
      },
      {
        question: "What design wind load do you assume?",
        answer:
          "We use the code and return period on your project brief — not a generic default. Send the region and reference standard so spacing and sheet gauge are not under-designed.",
      },
      {
        question: "Can a PEB host an internal cold room box?",
        answer:
          "Yes — the outer PEB envelope is often ambient while an internal cam-lock cold room sits inside. Coordinate floor loads and vapour paths between outer cladding and inner box with us on one enquiry.",
      },
    ],
    exportNotes:
      "Steel members are marked, bundled by erection sequence and protected against salt air in transit. Panel containers may sail on a later vessel to match site readiness. Anchor bolt templates travel with the first steel shipment — email copies go to your civil engineer simultaneously.",
    images: [
      {
        src: "/images/hero/hero-peb-steel-frame.jpg",
        alt: "Portal steel frame inside an industrial building shell — stock reference",
        width: 1600,
        height: 1067,
        caption: "Stock reference — PEB primary frame during erection.",
        isStock: true,
      },
      {
        src: "/images/hero/hero-export-containers.jpg",
        alt: "Shipping containers at a port yard — stock reference for export logistics",
        width: 1600,
        height: 1067,
        isStock: true,
      },
      {
        src: "/images/hero/hero-warehouse-ceiling.jpg",
        alt: "Warehouse interior showing roof structure and liner — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
      {
        src: "/images/plant/industrial-warehouse-exterior.jpg",
        alt: "Completed industrial warehouse with metal cladding — stock reference",
        width: 1600,
        height: 1067,
        isStock: true,
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
];
