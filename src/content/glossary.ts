import type { GlossaryTerm } from "./types";

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "u-value",
    term: "U-value",
    definition:
      "Thermal transmittance of a wall or roof assembly, measured in W/m²·K. Lower U-value means less heat transfer through the complete build-up including facings and joints. Used with design temperatures to size insulation thickness for cold rooms and conditioned industrial spaces.",
    relatedProducts: ["puf-panels", "pir-panels", "rockwool-panels"],
    draft: false,
  },
  {
    slug: "puf",
    term: "PUF (Polyurethane Foam)",
    definition:
      "Rigid closed-cell foam core produced by reacting polyol and isocyanate on a continuous lamination line. Standard export choice for cold storage and industrial envelopes due to low λ and competitive cost per m². Combustible — verify fire code acceptance before specifying on rated boundaries.",
    relatedProducts: ["puf-panels", "cold-room-panels"],
    draft: false,
  },
  {
    slug: "pir",
    term: "PIR (Polyisocyanurate)",
    definition:
      "Modified polyurethane foam with improved thermal stability and typically lower λ than standard PUF. Allows thinner panels for the same U-value — useful in freezers, plant rooms and roofs with tight clearance. Still a combustible foam core unless used inside an approved fire system.",
    relatedProducts: ["pir-panels"],
    draft: false,
  },
  {
    slug: "cam-lock",
    term: "Cam-lock Joint",
    definition:
      "Modular cold room joint where a rotating cam in one panel edge engages a receiver in the adjacent panel. Enables rapid assembly without external clips along the joint length. Requires correct gasket compression torque and factory-matched cam heights within a batch.",
    relatedProducts: ["cold-room-panels", "puf-panels", "pir-panels"],
    draft: false,
  },
  {
    slug: "cover-width",
    term: "Cover Width",
    definition:
      "Effective installed width of one panel module after side-lap overlap, typically near 1000 mm on sandwich panels. Total wall length divided by cover width estimates panel count for ordering. Always confirm on the quotation — profile type changes overlap dimension.",
    relatedProducts: ["puf-panels", "pir-panels", "wall-panels", "roofing-panels"],
    draft: false,
  },
  {
    slug: "ppgi",
    term: "PPGI (Pre-Painted Galvanized Iron)",
    definition:
      "Hot-dip galvanized steel sheet with factory-applied paint coating on both sides. Standard outer and inner facing on export sandwich panels for inland industrial use. Specify zinc coating mass (GSM) and paint system when quoting coastal or wash-down environments.",
    relatedProducts: ["puf-panels", "pir-panels"],
    draft: false,
  },
  {
    slug: "ppgl",
    term: "PPGL (Pre-Painted Galvalume)",
    definition:
      "Steel sheet with aluminium-zinc alloy coating and factory paint finish. Better corrosion resistance than PPGI in coastal humidity and chemical atmospheres at slightly higher cost. Common upgrade on export orders to East and West African ports with salt air exposure.",
    relatedProducts: ["puf-panels", "pir-panels"],
    draft: false,
  },
  {
    slug: "tongue-and-groove",
    term: "Tongue-and-Groove Joint",
    definition:
      "Wall panel edge profile where a protruding tongue on one panel interlocks with a groove on the next. Provides alignment and weather resistance along the length. Used on external wall cladding as an alternative to concealed-fix systems on some profiles.",
    relatedProducts: ["wall-panels", "roofing-panels", "puf-panels"],
    draft: false,
  },
  {
    slug: "thermal-conductivity",
    term: "Thermal Conductivity (λ)",
    definition:
      "Measure of heat flow through a material in W/m·K — lower λ means better insulation. PUF cores are typically 0.022–0.024 W/m·K; PIR 0.019–0.022 W/m·K; rockwool higher. Compare complete assembly U-value, not core λ alone, when thickness differs.",
    relatedProducts: ["puf-panels", "pir-panels", "rockwool-panels"],
    draft: false,
  },
  {
    slug: "sandwich-panel",
    term: "Sandwich Panel",
    definition:
      "Prefabricated building component with two metal facings bonded to a rigid insulation core. Used for walls, roofs and cold room envelopes in industrial and food projects. Also called insulated panel or structural insulated panel (SIP) in some markets.",
    relatedProducts: ["puf-panels", "pir-panels", "rockwool-panels", "wall-panels", "roofing-panels"],
    draft: false,
  },
  {
    slug: "gsm",
    term: "GSM (Grams per Square Metre)",
    definition:
      "Mass of zinc or zinc-aluminium coating on steel sheet per square metre of surface. Higher GSM improves corrosion resistance — important for coastal export sites. Quote facing specification with GSM and paint system together, not thickness of steel alone.",
    relatedProducts: ["puf-panels", "pir-panels", "roofing-panels"],
    draft: false,
  },
  {
    slug: "lambda",
    term: "Lambda (λ) Value",
    definition:
      "Synonym for thermal conductivity of the insulation core. Marketing sheets sometimes round λ aggressively — final value belongs on the test report issued with your order. Use λ with declared thickness to calculate R-value and compare cores fairly.",
    relatedProducts: ["puf-panels", "pir-panels", "rockwool-panels"],
    draft: false,
  },
  {
    slug: "purlin",
    term: "Purlin",
    definition:
      "Secondary steel member spanning between primary frames to support roof or wall cladding. Purlin spacing must follow panel span tables for design load, deflection and fixings pattern. Do not assume single-skin metal roof spacing applies to insulated sandwich panels.",
    relatedProducts: ["roofing-panels", "wall-panels", "peb-prefabricated-buildings"],
    draft: false,
  },
  {
    slug: "cold-bridge",
    term: "Cold Bridge (Thermal Bridge)",
    definition:
      "Localised path where heat bypasses insulation — typically steel fasteners, door frames or structural penetrations. In cold stores, cold bridges show as frost lines before the panel field fails. Detail thermal breaks at doors and use specified fixings with minimal penetration depth.",
    relatedProducts: ["cold-room-panels", "industrial-doors"],
    draft: false,
  },
  {
    slug: "vapour-barrier",
    term: "Vapour Barrier",
    definition:
      "Layer on the warm side of insulation that limits water vapour drive into the cold assembly. Essential in refrigerated envelopes to prevent interstitial condensation and icing at joints. Tape continuity at panel laps matters as much as core type selection.",
    relatedProducts: ["cold-room-panels", "puf-panels", "pir-panels"],
    draft: false,
  },
  {
    slug: "fob",
    term: "FOB (Free on Board)",
    definition:
      "Incoterm where seller delivers goods cleared for export on board the vessel at the named Indian port. Buyer arranges and pays ocean freight and insurance from that point. Useful when you have an existing forwarder relationship in Africa or want to compare freight quotes separately.",
    relatedProducts: [],
    draft: false,
  },
  {
    slug: "cif",
    term: "CIF (Cost, Insurance and Freight)",
    definition:
      "Incoterm where seller pays freight and minimum insurance to the named destination port. Risk transfers when goods are on board at origin, but buyer receives a landed cost figure for budgeting. We itemise freight so you can validate against market rates.",
    relatedProducts: [],
    draft: false,
  },
  {
    slug: "hc-container",
    term: "HC Container (High Cube)",
    definition:
      "40 ft high-cube container with extra internal height — often used for nested roof panel bundles that exceed standard 40 ft door height limits. Packing lists state m² per container type; HC may fit longer roof lengths without folding prohibited profiles.",
    relatedProducts: ["roofing-panels"],
    draft: false,
  },
  {
    slug: "gmp",
    term: "GMP (Good Manufacturing Practice)",
    definition:
      "Quality system requirements for food and pharmaceutical production environments. Panel specifications in GMP zones often demand washable facings, coved hygienic joints and documented material traceability. GMP does not replace local building and fire codes — both apply together.",
    relatedProducts: ["cleanroom-panels", "cold-room-panels"],
    draft: false,
  },
  {
    slug: "iso-14644",
    term: "ISO 14644",
    definition:
      "International cleanroom classification standard based on airborne particle counts by room class. Panel selection for pharma and food clean areas references ISO class targets together with pressure cascade and filtration — not panel marketing names alone.",
    relatedProducts: ["cleanroom-panels"],
    draft: false,
  },
  {
    slug: "r-value",
    term: "R-value",
    definition:
      "Thermal resistance of a material layer — thickness divided by λ, often expressed in m²·K/W. Higher R-value means more resistance to heat flow. U-value is the inverse of total R-value for the assembly including surface resistances.",
    relatedProducts: ["puf-panels", "pir-panels"],
    draft: false,
  },
  {
    slug: "eps",
    term: "EPS (Expanded Polystyrene)",
    definition:
      "White bead foam board insulation common in site-built walls — not our factory sandwich core. Higher λ than PUF and vulnerable at board joints in cold environments. Compare EPS site build-ups against exported closed-cell sandwich panels on total installed cost and air tightness.",
    relatedProducts: ["puf-panels", "wall-panels"],
    draft: false,
  },
  {
    slug: "rockwool",
    term: "Rockwool (Stone Wool)",
    definition:
      "Non-combustible mineral fibre spun from molten rock, used as sandwich panel core for fire-rated walls. Higher λ than foam — thicker panels needed for similar U-value. Preferred where fire compartmentation or A1 core classification is specified on drawings.",
    relatedProducts: ["rockwool-panels", "fire-rated-panels"],
    draft: false,
  },
  {
    slug: "glass-wool",
    term: "Glass Wool",
    definition:
      "Mineral fibre insulation spun from molten glass — lighter density than typical rockwool panel cores. Appears in some fire-rated systems from other suppliers. Compare tested system classification, not fibre name, when substituting against rockwool export panels.",
    relatedProducts: ["rockwool-panels", "fire-rated-panels"],
    draft: false,
  },
  {
    slug: "peb",
    term: "PEB (Pre-Engineered Building)",
    definition:
      "Prefabricated steel frame designed for rapid site erection with optimised member sizes for a specific span and loading. PEB pairs naturally with sandwich panel cladding — purlins and girts are spaced for panel span tables. Exported as bolted steel packages with panel bundles.",
    relatedProducts: ["peb-prefabricated-buildings"],
    draft: false,
  },
  {
    slug: "rcc",
    term: "RCC (Reinforced Cement Concrete)",
    definition:
      "Cast-in-place concrete structural system common in local industrial construction. Heavier and slower than PEB but familiar where steel import is restricted. Sandwich panels can clad RCC frames via bracket systems — thermal bridges at columns need explicit detail.",
    relatedProducts: ["peb-prefabricated-buildings", "wall-panels"],
    draft: false,
  },
  {
    slug: "bill-of-lading",
    term: "Bill of Lading (B/L)",
    definition:
      "Shipping document issued by the carrier evidencing receipt of cargo and title for negotiation. Original or telex release B/L is required for port clearance in most African destinations. We share draft B/L for balance payment coordination before originals release.",
    relatedProducts: [],
    draft: false,
  },
  {
    slug: "certificate-of-origin",
    term: "Certificate of Origin",
    definition:
      "Document certifying country of manufacture — required for preferential duty treatment and many African import registrations. Chamber of Commerce attestation is standard on our export document pack. Confirm format requirements with your clearing agent before sail date.",
    relatedProducts: [],
    draft: false,
  },
  {
    slug: "lcl",
    term: "LCL (Less than Container Load)",
    definition:
      "Consolidated sea freight when your order does not fill a full container. Viable for trial panels but costs more per m² and adds handling damage risk. Full container loads remain the economical default for cold store and warehouse projects above a few hundred m².",
    relatedProducts: [],
    draft: false,
  },
  {
    slug: "exw",
    term: "EXW (Ex Works)",
    definition:
      "Incoterm where buyer collects goods from the factory gate and arranges all export clearance and freight. Occasionally used when your Indian agent handles export formalities. Most African buyers prefer FOB or CIF for simpler handover at port.",
    relatedProducts: [],
    draft: false,
  },
  {
    slug: "dap",
    term: "DAP (Delivered at Place)",
    definition:
      "Incoterm delivering to a named inland destination with seller bearing freight to that point — import clearance still buyer responsibility. Used selectively when inland haul from port is pre-arranged. Confirm road weight limits for panel bundles on long inland legs.",
    relatedProducts: [],
    draft: false,
  },
  {
    slug: "cfr",
    term: "CFR (Cost and Freight)",
    definition:
      "Seller pays freight to destination port; insurance optional for buyer. Similar to CIF without seller-provided insurance. Some buyers with captive insurers prefer CFR over CIF for transparency on premium costs.",
    relatedProducts: [],
    draft: false,
  },
  {
    slug: "galvalume",
    term: "Galvalume",
    definition:
      "Aluminium-zinc alloy metallic coating on steel sheet — base metal for PPGL facings. Outperforms plain galvanized coating in many coastal and humid exposures. Specify alongside paint system and cut-edge protection strategy on marine-adjacent projects.",
    relatedProducts: ["puf-panels", "pir-panels"],
    draft: false,
  },
  {
    slug: "trapezoidal-profile",
    term: "Trapezoidal Profile",
    definition:
      "Corrugated steel outer face geometry on roof and wall panels providing bending stiffness and water run-off. Profile depth affects span capability and minimum roof pitch. Match profile designation on orders — mixing depths on one roof plane causes lap mismatch.",
    relatedProducts: ["roofing-panels", "wall-panels"],
    draft: false,
  },
  {
    slug: "standing-seam",
    term: "Standing Seam",
    definition:
      "Roof joint style where adjacent panels interlock with raised seams above the drainage plane. Used on some architectural and low-pitch roof systems. Distinct from standard trapezoidal side-lap — confirm erection method and clip type on the datasheet.",
    relatedProducts: ["roofing-panels"],
    draft: false,
  },
  {
    slug: "fire-stop",
    term: "Fire Stop",
    definition:
      "Material or detail sealing panel joints and penetrations to maintain a fire-rated compartment line. Required in rated rockwool and fire-rated panel systems — omitting stops voids test classification. Site photos of fire stops are common insurer inspection points.",
    relatedProducts: ["fire-rated-panels", "rockwool-panels"],
    draft: false,
  },
  {
    slug: "compartmentation",
    term: "Fire Compartmentation",
    definition:
      "Building strategy dividing occupancy into fire-resisting zones to limit spread. Mineral wool sandwich panels often form compartment boundaries where foam cores are excluded. Rating period and test standard must match the approved drawing schedule.",
    relatedProducts: ["rockwool-panels", "fire-rated-panels"],
    draft: false,
  },
  {
    slug: "a1-core",
    term: "A1 Core Classification",
    definition:
      "Reaction-to-fire class indicating non-combustible insulation material under European test framing. Rockwool panel cores can achieve A1; foam cores cannot. Local codes may reference different standards — map A1 to your jurisdiction with a fire consultant.",
    relatedProducts: ["rockwool-panels"],
    draft: false,
  },
  {
    slug: "hygienic-joint",
    term: "Hygienic Joint",
    definition:
      "Cleanroom or food-area panel joint detail with flush surfaces, sealed caps and coved bases to limit bacterial harbourage. Wash-down chemical resistance depends on facing coating and gasket material — declare cleaning regime at specification stage.",
    relatedProducts: ["cleanroom-panels"],
    draft: false,
  },
  {
    slug: "hepa",
    term: "HEPA Filtration",
    definition:
      "High-efficiency particulate air filters used in cleanroom HVAC — unrelated to panel core type but drives pressure control and panel airtightness requirements. Panel air leakage targets must align with room classification and fan capacity calculations.",
    relatedProducts: ["cleanroom-panels"],
    draft: false,
  },
  {
    slug: "positive-pressure",
    term: "Positive Pressure",
    definition:
      "Cleanroom strategy where supply air exceeds extract, pushing particles outward through leaks. Panel joints become part of the containment envelope — gasket quality and frame stiffness matter. Negative pressure rooms invert the flow path for isolation zones.",
    relatedProducts: ["cleanroom-panels"],
    draft: false,
  },
  {
    slug: "dew-point",
    term: "Dew Point",
    definition:
      "Temperature at which air becomes saturated and moisture condenses on a surface. In cold stores, keep panel inner surface above dew point of adjacent warm air by insulation thickness and vapour sealing. Hygrothermal software beats rules of thumb for borderline climates.",
    relatedProducts: ["cold-room-panels", "puf-panels"],
    draft: false,
  },
  {
    slug: "condensation",
    term: "Interstitial Condensation",
    definition:
      "Moisture deposit inside a build-up when vapour passes through insulation and hits a cold interface. Common failure mode in under-insulated or poorly sealed freezer envelopes. Appears as ice at joints long before foam density is suspect.",
    relatedProducts: ["cold-room-panels"],
    draft: false,
  },
  {
    slug: "blast-freezer",
    term: "Blast Freezer",
    definition:
      "High-pull-down room for rapid product freezing — often −35 °C internal design with heavy refrigeration load. Thicker PIR or PUF panels, heavy-duty doors and floor insulation continuity are typical. Share commodity load and door cycle frequency for thickness advice.",
    relatedProducts: ["cold-room-panels", "pir-panels", "industrial-doors"],
    draft: false,
  },
  {
    slug: "walk-in-cooler",
    term: "Walk-in Cooler",
    definition:
      "Modular refrigerated room for chilled storage — typically +2 °C to +8 °C with cam-lock PUF panels. Smaller than central distribution cold stores but same joint and door detailing rules apply. Quote internal clear dimensions, not external slab size.",
    relatedProducts: ["cold-room-panels", "puf-panels"],
    draft: false,
  },
  {
    slug: "skin-gauge",
    term: "Skin Gauge",
    definition:
      "Thickness of outer and inner steel facings on a sandwich panel, usually in mm or BWG. Heavier gauge improves dent resistance and span but adds weight and cost. Structural tables assume declared gauge — do not swap without engineering review.",
    relatedProducts: ["puf-panels", "roofing-panels", "wall-panels"],
    draft: false,
  },
  {
    slug: "self-drilling-screw",
    term: "Self-Drilling Screw",
    definition:
      "Fastener drilling through steel facings into purlins without pre-drilling. Must match total metal thickness and include EPDM washer for weather tightness. Coastal orders often upgrade to stainless or coated screws per erection sheet — mixing grades causes bimetallic corrosion.",
    relatedProducts: ["roofing-panels", "wall-panels"],
    draft: false,
  },
  {
    slug: "butyl-tape",
    term: "Butyl Tape",
    definition:
      "Flexible sealant tape used at panel laps, flashings and penetration collars. Maintains adhesion across temperature cycles better than rigid seals when applied on clean dry surfaces. Part of the weathertightness system — not optional on exposed roof laps.",
    relatedProducts: ["roofing-panels"],
    draft: false,
  },
  {
    slug: "ridge-cap",
    term: "Ridge Cap",
    definition:
      "Formed metal cover closing the roof apex where opposing slopes meet. Sized to panel profile and insulation thickness. Incorrect ridge detail is a common leak point on first monsoon — match cap to profile drawing, not generic catalogues.",
    relatedProducts: ["roofing-panels"],
    draft: false,
  },
  {
    slug: "flashings",
    term: "Flashings",
    definition:
      "Custom bent metal pieces sealing panel terminations at walls, parapets, penetrations and gutters. Export panel orders should include a flashing schedule or standard detail set for the site team. Missing flashings are not replaceable with foam sealant long term.",
    relatedProducts: ["roofing-panels", "wall-panels"],
    draft: false,
  },
  {
    slug: "modular-cold-room",
    term: "Modular Cold Room",
    definition:
      "Factory-produced panel kit assembled on site into a complete refrigerated box — floor, walls, ceiling and doors. Distinct from central plant cold stores built inside larger shells. Cam-lock PUF panels dominate modular kits for cost and speed in African food retail rollouts.",
    relatedProducts: ["cold-room-panels"],
    draft: false,
  },
  {
    slug: "pur",
    term: "PUR (Polyurethane)",
    definition:
      "Polymer family forming rigid foam cores in sandwich panels — includes both PUF and PIR variants depending on formulation. Sales literature may say PUR generically; confirm whether standard PUF or modified PIR is quoted before comparing λ and price.",
    relatedProducts: ["puf-panels", "pir-panels"],
    draft: false,
  },
  {
    slug: "closed-cell",
    term: "Closed-Cell Foam",
    definition:
      "Foam structure where gas cells are sealed — low water absorption and higher compressive strength than open-cell types. PUF and PIR panel cores are closed-cell, making them suitable for refrigerated envelopes when joints are vapour sealed correctly.",
    relatedProducts: ["puf-panels", "pir-panels"],
    draft: false,
  },
  {
    slug: "open-cell",
    term: "Open-Cell Insulation",
    definition:
      "Insulation where cells interconnect — can absorb and hold moisture if exposed. Mineral wool fibres behave differently from foam; vapour control is still required on cold side applications. Not interchangeable with closed-cell foam in freezer specifications.",
    relatedProducts: ["rockwool-panels"],
    draft: false,
  },
  {
    slug: "test-report",
    term: "Test Report",
    definition:
      "Laboratory document verifying λ, density, fire classification or structural capacity for a named product build-up. Website values remain indicative until tied to a report number on your order. Request reports matching your exact thickness and facing combination.",
    relatedProducts: ["puf-panels", "fire-rated-panels"],
    draft: false,
  },
  {
    slug: "incoterms",
    term: "Incoterms",
    definition:
      "International Commercial Terms defining buyer and seller obligations for delivery, risk transfer and cost allocation. FOB, CIF and EXW are common on panel export from India. Misaligned incoterm choice causes disputes over who pays demurrage or insurance — confirm on the PO.",
    relatedProducts: [],
    draft: false,
  },
];
