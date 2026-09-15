import type { Solution } from "./types";

const SPEC_NOTE = "Confirmed against approved project documentation before dispatch.";

export const solutions: Solution[] = [
  {
    slug: "cold-storage",
    name: "Cold Storage",
    h1: "Cold Storage Building Solutions — Panels, Doors and Export",
    seoTitle: "Cold Storage Solutions — Export to Africa | PHOENIXX",
    metaDescription:
      "Cold storage panels, doors and accessories for chiller and freezer rooms. Modular kits and custom build-ups. Export from India to East Africa.",
    summary:
      "Cold storage projects need the right panel thickness, joint system and door specification for your temperature band. We supply PUF and PIR sandwich panels with cam-lock joints for modular rooms, plus hinged and sliding cold room doors. For larger facilities — multi-room distribution centres, blast freezers, fruit ripening chambers — we work from your layout drawing and quote the full panel and accessory list.",
    quickAnswer:
      "Cold storage envelopes are sized from target internal temperature, ambient design condition and door schedule — not from a catalogue thickness alone. Chiller rooms at +2 to +8 °C often start at 80–100 mm PUF; freezers at −18 °C commonly need 100–120 mm before door losses. Condensation at joints, the floor-to-wall junction and door frame heat bridging cause more callbacks than wrong foam density.",
    engineeringRequirement:
      "Define the coldest room first, then ambient peak (often +35 to +45 °C external for East African coastal sites), door size and cycle frequency. Chiller rooms hold +2 to +8 °C; standard freezers target −18 to −25 °C; blast zones may reach −30 to −40 °C with a proper load calculation. Relative humidity above 75 % at the door plane increases defrost demand — specify vapor-barrier continuity at every horizontal lap. Food safety and cold chain regulations vary by country; verify HACCP and local cold store licensing against your authority before you fix panel facing and coving detail.",
    recommendedSpec: [
      { label: "Chiller room target", value: "+2 to +8", unit: "°C", verified: false, note: SPEC_NOTE },
      { label: "Standard freezer target", value: "−18 to −25", unit: "°C", verified: false, note: SPEC_NOTE },
      { label: "Typical chiller panel thickness", value: "80–100", unit: "mm PUF/PIR", verified: false, note: SPEC_NOTE },
      { label: "Typical freezer panel thickness", value: "100–120", unit: "mm PUF/PIR", verified: false, note: SPEC_NOTE },
      { label: "Joint system (modular rooms)", value: "Cam-lock with gasketed hook", verified: false, note: SPEC_NOTE },
      { label: "Door interface", value: "Thermal break jamb + coving kit", verified: false, note: SPEC_NOTE },
    ],
    failurePoints: [
      {
        problem:
          "Condensation trails appear at vertical panel joints within weeks of pull-down, especially on the warm side of freezer walls facing a humid plant corridor.",
        prevention:
          "Specify even gasket compression along the full cam-lock joint length, vapor-barrier tape at every horizontal lap and no site grinding against the foam lip. We issue joint torque guidance and reject panels with crushed gasket channels from overtightening one corner.",
      },
      {
        problem:
          "Warm air ingress and ice build-up at the floor-to-wall junction — often where coving was cut short or floor insulation was omitted to save cost.",
        prevention:
          "Quote continuous floor coving or an insulated floor panel interface with sealed laps as part of the kit, not as a site improvisation. Drawing shows coving radius, sealant type and fixings before production release.",
      },
      {
        problem:
          "Frost on the door frame before anywhere else on the envelope — a steel thermal bridge through the insulation line while the compressor runs flat out.",
        prevention:
          "Supply thermal break gaskets and jamb profiles matched to wall thickness with the door order. Do not substitute generic angle iron; retrofit gaskets after frame installation rarely achieve full compression.",
      },
    ],
    estimatingGuidance:
      "Send internal dimensions (L × W × H), target temperature per room, ambient design temperature, number and size of doors, and delivery port. A simple PDF sketch is enough for a first panel schedule. We quote wall and ceiling square metres separately, list cam-lock accessories and door interfaces, and state indicative m² per 40 ft HC container at your thickness. Refrigeration plant is excluded — we can comment on envelope heat gain but do not supply compressors or evaporators.",
    productRationale: [
      {
        slug: "cold-room-panels",
        why: "Cam-lock modular kits for box rooms where flat-packed shipment and field assembly without welding matter. Includes corner, coving and jamb accessories in the same quotation.",
      },
      {
        slug: "puf-panels",
        why: "Default foam core for chiller and standard freezer duty when cost per m² and thermal performance must balance on long wall runs.",
      },
      {
        slug: "pir-panels",
        why: "Lower λ at the same thickness — worth it when headroom is fixed or improved fire behaviour is specified over standard PUF.",
      },
      {
        slug: "industrial-doors",
        why: "Hinged and sliding cold room doors sized to the jamb detail — heat bridging at the frame is the detail buyers skip most often.",
      },
    ],
    processSteps: [
      {
        title: "Room load and temperature band",
        body: "You send dimensions, product type, door schedule and ambient design condition. We map chiller versus freezer thickness and flag door losses that force a step up.",
        duration: "1–2 days",
      },
      {
        title: "Panel schedule and accessory list",
        body: "Wall, ceiling and floor interface panels with cam-lock counts, coving, jambs and flashings. Door openings factory-framed where possible.",
        duration: "2–3 days",
      },
      {
        title: "Production and export packing",
        body: "Panels foam-cured on line, edge-protected and labelled by room zone. Container loading plan issued with the commercial invoice.",
        duration: "3–5 weeks typical",
      },
    ],
    relevantProducts: ["cold-room-panels", "puf-panels", "pir-panels", "industrial-doors"],
    applications: ["cold-room-construction", "controlled-temperature-storage"],
    comparisons: ["puf-vs-pir-panels"],
    faqs: [
      {
        question: "What temperature bands do you cover?",
        answer:
          "Chiller rooms (+2 to +8 °C), freezer rooms (−18 to −25 °C) and blast freezer applications (−30 to −40 °C). Each band needs a different panel thickness and sometimes a different core type. Tell us your target temperature and room size.",
      },
      {
        question: "Do you supply complete modular cold room kits?",
        answer:
          "Yes. A typical kit includes wall and ceiling panels, corner profiles, floor coving, cam-lock accessories and a matched door. Refrigeration equipment is sourced separately — we can recommend capacity but do not supply compressors or evaporators.",
      },
      {
        question: "How do I choose between PUF and PIR for my cold store?",
        answer:
          "Both work for cold storage. PIR gives lower thermal conductivity, so you can use thinner panels where space is tight. PUF is usually lower cost per m² at equivalent insulation. We send a side-by-side comparison with your quotation.",
      },
      {
        question: "Can you export cold room panels to Kenya?",
        answer:
          "Yes. We ship to Mombasa and other East African ports. Container loading is optimised for panel dimensions — a typical 40 ft container holds 800–1,200 m² depending on thickness. We handle export documentation including commercial invoice, packing list and certificate of origin.",
      },
      {
        question: "What information do you need for a cold storage quote?",
        answer:
          "Room dimensions (L × W × H), target temperature, ambient design temperature, number and size of doors, and delivery port. A simple sketch or layout drawing helps. We respond with a panel schedule, thickness recommendation and CIF or FOB pricing.",
      },
      {
        question: "Do you provide installation support?",
        answer:
          "We supply installation guidelines and panel layout drawings. For larger projects, on-site supervision by an experienced installer can be arranged — ask when you send your enquiry. We do not act as the main contractor on site.",
      },
      {
        question: "Why does my freezer frost at the door before the walls?",
        answer:
          "The door frame is a steel bridge through the insulation line. Without thermal break gaskets and a correctly detailed jamb profile, the frame stays warmer than the panel field and condenses first. We supply jamb kits matched to your wall thickness.",
      },
    ],
    buyerChecklist: [
      "Define coldest room temperature and ambient design peak before fixing thickness",
      "Send door count, size and daily cycle frequency — door losses often force a step up",
      "Confirm whether refrigeration plant is in scope elsewhere — we supply envelope only",
      "Specify cam-lock modular versus fixed wall build-up per room",
      "Name destination port and Incoterm for export kit planning",
    ],
    limitations:
      "Condensation at joints and door frames causes more field issues than wrong foam density alone. We do not supply compressors, evaporators or site erection labour as part of a panel order.",
    images: [
      {
        src: "/images/solutions/cold-storage-exterior-hvac.jpg",
        alt: "Stock photo of industrial HVAC units on a warehouse exterior — illustrative cold storage plant, not a Phoenixx project",
        width: 1920,
        height: 1280,
        isStock: true,
        credit: "Pexels",
      },
    ],
    draft: false,
    updatedAt: "2026-09-15",
  },
  {
    slug: "food-processing",
    name: "Food Processing",
    h1: "Food Processing Facility Panel Solutions — Hygiene Zones and Cold Docks",
    seoTitle: "Food Processing Panel Solutions | PHOENIXX",
    metaDescription:
      "Insulated panels for food processing halls, washdown walls and cold dock interfaces. Hygiene joints and temperature zoning for export projects.",
    summary:
      "Food processing plants mix ambient production halls, washdown zones and cold docks in one envelope. We supply wall and ceiling panels with facing and joint detail suited to hygiene washdown, plus cold room kits for blast chillers and raw material stores. The specification splits by zone — you do not use the same facing on a wet washdown wall as on a −2 °C dispatch dock.",
    quickAnswer:
      "Food plants need zone-by-zone panel specification: ambient halls at 40–80 mm PUF or PIR on tongue-and-groove joints; washdown areas need smooth facings, sealed horizontal laps and coving at floor junctions; cold docks at +0 to +4 °C need cam-lock or gasketed joints with vapor control. FSSAI, FDA-style and local food hygiene rules differ — verify washdown chemical compatibility and audit requirements against your local authority.",
    engineeringRequirement:
      "Map each room to process temperature, cleaning regime (low-pressure rinse versus daily caustic washdown) and traffic type. Ambient processing halls typically hold +15 to +25 °C with 40–100 mm insulated cladding. High-care zones may need food-grade facing and flush joints without exposed fixings. Cold docks and raw stores run +0 to +4 °C or lower — treat them as cold rooms with door cycle losses included. Relative humidity in washdown areas accelerates corrosion at cut edges if facings are not sealed. Noise and condensation at cold dock openings affect HACCP monitoring — specify air curtain or vestibule detail separately.",
    recommendedSpec: [
      { label: "Ambient processing hall", value: "+15 to +25", unit: "°C typical", verified: false, note: SPEC_NOTE },
      { label: "Cold dock / raw store", value: "+0 to +4", unit: "°C", verified: false, note: SPEC_NOTE },
      { label: "Washdown wall facing", value: "Smooth PPGI/PPGL, sealed laps", verified: false, note: SPEC_NOTE },
      { label: "Hall wall thickness", value: "40–80", unit: "mm PUF/PIR", verified: false, note: SPEC_NOTE },
      { label: "Cold dock panel thickness", value: "80–100", unit: "mm", verified: false, note: SPEC_NOTE },
      { label: "Floor junction", value: "Radius coving, no open corner", verified: false, note: SPEC_NOTE },
    ],
    failurePoints: [
      {
        problem:
          "Panel facings delaminate or rust at the base of washdown walls where daily hose spray hits unsealed cut edges and floor coving gaps.",
        prevention:
          "Specify factory-cut openings, sealed horizontal laps and continuous coving with chemical-resistant sealant compatible with your cleaning agent list. No on-site disc grinding against the foam core.",
      },
      {
        problem:
          "Cold dock temperature drifts above setpoint when dispatch doors stay open — warm humid air tracks through the dock vestibule into the production corridor.",
        prevention:
          "Size dock panels for door cycle losses, detail a vestibule or air curtain in the layout and use thermal break door frames with gasket compression checked at commissioning.",
      },
      {
        problem:
          "Audit failures at panel joints where standard through-fixings create dirt traps in high-care zones.",
        prevention:
          "Use cleanroom-style tongue-and-groove profiles with concealed fixings on high-care walls; flush silicone only where movement joints are required, not as a substitute for correct profile selection.",
      },
    ],
    estimatingGuidance:
      "Send a zone layout with temperatures, cleaning method per area and door positions. Quote wall and ceiling m² by zone — ambient hall, washdown, cold dock and any blast chiller box separately. List facing colour, joint type and whether food-grade facing is required. Include delivery port; we state packing and lead time on the quotation. Structural steel and refrigeration plant are excluded unless quoted as a separate line.",
    productRationale: [
      {
        slug: "wall-panels",
        why: "Tongue-and-groove wall cladding for long production hall runs with optional washdown-facing upgrade.",
      },
      {
        slug: "cleanroom-panels",
        why: "Flush joints and concealed fixings for high-care zones where auditors flag dirt traps at exposed fasteners.",
      },
      {
        slug: "cold-room-panels",
        why: "Cam-lock kits for blast chillers, raw material stores and cold docks with coving included in the schedule.",
      },
      {
        slug: "puf-panels",
        why: "Cost-effective core for ambient halls and secondary cold zones where PIR premium is not justified.",
      },
    ],
    processSteps: [
      {
        title: "Zone mapping and hygiene class",
        body: "You mark each room with temperature, washdown frequency and audit level. We split panel types by zone rather than quoting one thickness for the whole plant.",
        duration: "2–3 days",
      },
      {
        title: "Joint and facing selection",
        body: "Hall cladding, washdown profiles and cold dock kits quoted with coving and door interfaces on one panel schedule.",
        duration: "3–5 days",
      },
      {
        title: "Production and phased dispatch",
        body: "Panels packed by zone label for site sequence — cold dock kits can ship ahead of ambient hall cladding if your programme requires.",
        duration: "4–6 weeks typical",
      },
    ],
    relevantProducts: ["wall-panels", "cleanroom-panels", "cold-room-panels", "puf-panels"],
    applications: ["food-processing-envelope", "cold-room-construction"],
    comparisons: [],
    faqs: [
      {
        question: "Can one panel type cover the whole food plant?",
        answer:
          "No — ambient halls, washdown areas and cold docks need different facings and joint detail. We quote by zone so you do not over-specify cleanroom profiles on a dry storage wall.",
      },
      {
        question: "What facing works for daily caustic washdown?",
        answer:
          "Smooth pre-painted steel with sealed laps and radius coving at the floor. Confirm your cleaning chemical list so we can flag incompatible sealants — verify against your hygiene auditor.",
      },
      {
        question: "How do you detail the cold dock interface with the dispatch area?",
        answer:
          "Thermal break door frame, coving continuity and often a short vestibule or air curtain in the layout. We size dock wall thickness for door-open heat gain, not steady-state alone.",
      },
      {
        question: "Do you supply panels for blast chillers in meat plants?",
        answer:
          "Yes — cam-lock cold room kits at −2 to −40 °C depending on product and hold time. Send pull-down time target and product load so thickness is not guessed from a catalogue row.",
      },
      {
        question: "What drawings do you need for a food plant quotation?",
        answer:
          "Zone layout with dimensions, temperatures, door sizes and positions, plus facing colour preference and destination port. A PDF export from your consultant is sufficient for a first schedule.",
      },
      {
        question: "Can panels be exported to East African food processors?",
        answer:
          "Yes — we ship to Mombasa, Dar es Salaam and other ports with edge protection suited to tropical humidity during transit. Documentation includes commercial invoice, packing list and certificate of origin.",
      },
      {
        question: "Who validates HACCP compatibility of panel materials?",
        answer:
          "Your hygiene consultant and local food authority — we supply material declarations and facing specifications; you verify them against your HACCP plan and local rules.",
      },
    ],
    buyerChecklist: [
      "Map hygiene zones — raw, clean and washdown areas need different facing and joint detail",
      "Send HACCP or consultant notes on washable surfaces and coving requirements",
      "List cold dock and chill room temperatures separately from ambient processing halls",
      "Confirm fire boundaries between plant and storage with local authority if required",
      "Name destination port for export scheduling",
    ],
    limitations:
      "HACCP and local food safety approval sit with your consultant — we supply material declarations and panel specs, not regulatory sign-off. Washdown joints fail audits when exposed fixings trap residue.",
    images: [
      {
        src: "/images/hero/hero-manufacturing-panels.jpg",
        alt: "Stock photo of an industrial warehouse interior — illustrative food processing hall volume, not a Phoenixx installation",
        width: 1920,
        height: 1280,
        isStock: true,
        credit: "Pexels",
      },
    ],
    draft: false,
    updatedAt: "2026-09-15",
  },
  {
    slug: "pharmaceutical-cleanroom",
    name: "Pharmaceutical Cleanroom",
    h1: "Pharmaceutical Cleanroom Panel Solutions — ISO Classes and Cold Chain",
    seoTitle: "Pharma Cleanroom Panel Solutions | PHOENIXX",
    metaDescription:
      "Cleanroom wall and ceiling panels for pharmaceutical manufacturing. ISO class guidance, cold chain zones and joint detail for regulated facilities.",
    summary:
      "Pharmaceutical facilities combine classified cleanrooms, material airlocks and cold chain storage in one regulated envelope. We supply cleanroom sandwich panels with flush joints for production zones, plus insulated cold rooms for API storage and finished goods. Cleanliness class drives facing, joint geometry and whether concealed fixings are mandatory — verify against your local drug authority before you lock the specification.",
    quickAnswer:
      "Cleanroom panels for pharma use flush tongue-and-groove profiles with smooth facings and gasketed joints — not standard industrial cladding. ISO Class 7–8 areas often use 40–60 mm panels; Class 5–6 may need dedicated cleanroom profiles with concealed fixings. Temperature-controlled storage (+2 to +8 °C or −20 °C for certain APIs) sits alongside classified rooms — specify each zone separately. WHO, EU GMP and national drug rules differ; verify cleanliness class and validation requirements against your local authority.",
    engineeringRequirement:
      "Define ISO or GMP cleanliness class per room, pressure cascade direction, temperature and humidity setpoints, and whether the room is washdown or dry serviced. Classified zones need smooth, non-shedding facings and joints that survive repeated disinfection — typically 40–80 mm panels with cleanroom profile geometry. Material airlocks bridge classified and unclassified areas; detail returns and coving to avoid particle traps. Cold chain rooms for vaccines or APIs follow pharmaceutical cold storage limits (+2 to +8 °C common; −20 °C for some products) with continuous temperature mapping points at panel joints. Fire compartmentation may be required between production and storage — verify fire period with local building and drug regulators.",
    recommendedSpec: [
      { label: "Typical ISO Class 7–8 wall", value: "40–60", unit: "mm cleanroom panel", verified: false, note: SPEC_NOTE },
      { label: "ISO Class 5–6 wall", value: "50–80", unit: "mm, concealed fixing", verified: false, note: SPEC_NOTE },
      { label: "Vaccine / finished goods store", value: "+2 to +8", unit: "°C", verified: false, note: SPEC_NOTE },
      { label: "API frozen store (where required)", value: "−20", unit: "°C typical", verified: false, note: SPEC_NOTE },
      { label: "Joint type", value: "Flush tongue-and-groove, gasketed", verified: false, note: SPEC_NOTE },
      { label: "Pressure cascade", value: "Positive to lower class", verified: false, note: "HVAC design by others" },
    ],
    failurePoints: [
      {
        problem:
          "Validation fails at panel joints where standard industrial profiles leave visible fixings and silicone gaps that trap disinfectant residue.",
        prevention:
          "Specify cleanroom profiles with concealed fixings and factory-cut openings. Gasket replacement schedule belongs in your SOP — we document joint type for qualification packs.",
      },
      {
        problem:
          "Temperature excursion in adjacent cold store traced to an unsealed penetration at a panel-to-ceiling interface.",
        prevention:
          "Detail every penetration on the layout drawing before production. Supply penetration collars and coving matched to wall thickness — field-cut holes without collars are the usual root cause.",
      },
      {
        problem:
          "Cross-contamination risk when pressure cascade reverses because airlock doors open simultaneously — not a panel fault but exposed by weak airlock panel sealing.",
        prevention:
          "Size airlock panels for interlock door sequence, gasket compression on both leaves and no gap at floor coving. Coordinate with HVAC balancer before PQ.",
      },
    ],
    estimatingGuidance:
      "Send room list with ISO or GMP class, dimensions, temperature, humidity target and pressure relationship to adjacent rooms. Quote cleanroom m² separately from cold chain m². Include door count, pass-through hatch positions and facing finish. Validation documentation support (joint diagrams, material declarations) is listed on the quotation — third-party IQ/OQ is by your validator. Destination port and required fire rating note if known.",
    productRationale: [
      {
        slug: "cleanroom-panels",
        why: "Flush profiles and gasketed joints for ISO Class 5–8 production and filling areas where auditors inspect joint geometry.",
      },
      {
        slug: "cold-room-panels",
        why: "Cam-lock cold stores for finished goods and raw material hold rooms with jamb and coving kits included.",
      },
      {
        slug: "pir-panels",
        why: "Lower λ where cold chain rooms sit inside limited headroom without stepping up thickness.",
      },
      {
        slug: "fire-rated-panels",
        why: "Mineral wool build-ups where fire compartmentation between production and warehouse is specified — verify rating with local authority.",
      },
    ],
    processSteps: [
      {
        title: "Classification and cascade review",
        body: "Room matrix with ISO class, setpoints and adjacent pressure relationships. We flag where cleanroom profile is mandatory versus standard insulated wall.",
        duration: "3–5 days",
      },
      {
        title: "Panel schedule for qualification",
        body: "Joint types, facing specs and penetration list issued for your validation protocol — no surprise profiles at installation.",
        duration: "1 week",
      },
      {
        title: "Phased manufacture",
        body: "Classified zones packed separately with edge protection. Cold chain kits can release on a different vessel if site sequence demands.",
        duration: "5–8 weeks typical",
      },
    ],
    relevantProducts: ["cleanroom-panels", "cold-room-panels", "pir-panels", "fire-rated-panels"],
    applications: ["cleanroom-fitout", "pharmaceutical-cold-chain"],
    comparisons: [],
    faqs: [
      {
        question: "Which ISO class do your cleanroom panels achieve?",
        answer:
          "Panel geometry and joint detail support ISO Class 5–8 when installed with the correct HVAC cascade — the room classification is a system outcome, not a panel label alone. Verify with your validator against your protocol.",
      },
      {
        question: "Can you supply both cleanroom and cold chain panels on one order?",
        answer:
          "Yes — most pharma sites quote classified production rooms and +2 to +8 °C stores together. Each zone has its own thickness and joint specification on one panel schedule.",
      },
      {
        question: "What documentation do you provide for validation?",
        answer:
          "Material and facing declarations, joint diagrams and recommended gasket maintenance notes. IQ/OQ execution is your validator's scope — we do not sign validation protocols.",
      },
      {
        question: "How do fire-rated walls fit a pharma layout?",
        answer:
          "Where local building code or insurer requires a fire period between production and storage, mineral wool fire-rated panels may be specified — verify the required rating with your authority before quoting.",
      },
      {
        question: "Do panels survive daily disinfectant fogging?",
        answer:
          "Smooth steel facings with compatible sealants handle most quaternary and alcohol cycles — send your disinfectant list so we can flag incompatible sealant chemistry.",
      },
      {
        question: "What is the lead time for export to African pharma projects?",
        answer:
          "Production typically 5–8 weeks after drawing approval, plus ocean transit to your named port. We state gate-in date on the order acknowledgement.",
      },
      {
        question: "Can existing plants be retrofitted with cleanroom panels?",
        answer:
          "Yes — send existing wall dimensions and services layout. Retrofits need careful penetration planning; factory-cut openings reduce validation risk versus site cutting.",
      },
    ],
    buyerChecklist: [
      "Send room matrix with ISO or GMP class, setpoints and pressure cascade per room",
      "List cold chain zones (+2 to +8 °C or lower) separately from classified production areas",
      "Confirm validation documentation needs — joint diagrams and material declarations only",
      "State fire compartment lines between production and warehouse if known",
      "Name destination port and phased delivery requirements if site sequence demands it",
    ],
    limitations:
      "IQ/OQ/PQ execution is your validator's scope — we do not sign validation protocols. ISO class is a system outcome; panels alone do not certify the room.",
    images: [
      {
        src: "/images/products/metal-cladding-exterior.jpg",
        alt: "Stock photo of corrugated metal cladding on an industrial building — illustrative clean envelope finish, not a Phoenixx project",
        width: 1920,
        height: 1280,
        isStock: true,
        credit: "Pexels",
      },
    ],
    draft: false,
    updatedAt: "2026-09-15",
  },
  {
    slug: "warehousing-logistics",
    name: "Warehousing and Logistics",
    h1: "Warehouse and Logistics Shed Solutions — Fast-Erect Insulated Envelopes",
    seoTitle: "Warehouse Insulated Panel Solutions | PHOENIXX",
    metaDescription:
      "Insulated roof and wall panels for warehouses and distribution centres. Fast-erect PEB shells with cladding for export to Africa.",
    summary:
      "Distribution centres and logistics sheds need long-span insulated roofs, high wall cladding and sometimes chilled chambers for perishable goods. We supply roofing and wall sandwich panels on PEB steel frames for fast site erection — a typical 30 × 60 m shed can go from foundation to weathertight envelope in weeks when steel and panels arrive on sequence. Thermal performance targets ambient storage (+25 to +35 °C internal) unless you add a cold zone.",
    quickAnswer:
      "Warehouse envelopes pair PEB primary steel with 40–80 mm PUF or PIR roof and wall panels on tongue-and-groove joints. Roof profile and purlin spacing drive span capability — send bay width and eave height, not just total m². Fast-erect sheds suit greenfield logistics parks where programme beats custom masonry. Fire and insurance rules for large single-storey stores vary — verify with local building authority.",
    engineeringRequirement:
      "Define clear height, bay spacing, roof slope and whether the store is ambient, temperature-controlled or mixed. Ambient warehouses target +25 to +35 °C internal with 40–60 mm roof and wall panels for condensation control on metal decks in humid climates. Add insulated partitions or a cam-lock cold chamber if perishable SKUs need +2 to +8 °C. Roof live load, wind speed and seismic zone feed the PEB design — we coordinate panel fixings to the steel supplier's purlin layout. Fire spread requirements for single-storey warehouses differ by country — verify whether mineral wool walls or sprinklers are mandated instead of foam-cored panels on boundary walls.",
    recommendedSpec: [
      { label: "Ambient warehouse internal", value: "+25 to +35", unit: "°C typical", verified: false, note: SPEC_NOTE },
      { label: "Roof panel thickness", value: "40–80", unit: "mm PUF/PIR", verified: false, note: SPEC_NOTE },
      { label: "Wall panel thickness", value: "40–60", unit: "mm", verified: false, note: SPEC_NOTE },
      { label: "Roof profile", value: "Trapezoidal, ~1000 mm cover", verified: false, note: SPEC_NOTE },
      { label: "Primary structure", value: "PEB portal frame", verified: false, note: SPEC_NOTE },
      { label: "Optional cold chamber", value: "+2 to +8", unit: "°C", verified: false, note: "If perishable SKU" },
    ],
    failurePoints: [
      {
        problem:
          "Roof leaks at endlap joints after monsoon season — often where fixings were overdriven or missing closure strips at the ridge.",
        prevention:
          "Issue fixing pattern drawings matched to purlin centres, supply ridge and endlap flashings in the same crate and specify torque limits for weather-exposed fasteners.",
      },
      {
        problem:
          "Internal condensation drips from the roof soffit in humid coastal warehouses without adequate ventilation or insulation thickness.",
        prevention:
          "Size roof U-value for ambient peak humidity, add ventilation slots or destratification fans in the HVAC brief and avoid uninsulated steel purlins breaking the thermal line.",
      },
      {
        problem:
          "Programme slip when PEB steel and panel crates arrive out of sequence — panels on site before frames are plumb.",
        prevention:
          "Align production release dates with steel fabricator dispatch. We label panel crates by wall zone so site teams install long walls first without opening every bundle.",
      },
    ],
    estimatingGuidance:
      "Send plan dimensions, eave height, bay width, roof slope and whether PEB steel is in scope. Quote roof m², wall m² per facade and flashings separately. State destination port — a 40 ft HC container holds roughly 800–1,200 m² of 50 mm roof sheet depending on profile. Include colour, facing type and any cold chamber box as a separate line. Structural design submission to local engineer is your scope unless agreed otherwise.",
    productRationale: [
      {
        slug: "peb-prefabricated-buildings",
        why: "Portal frame primary steel sized to your bay spacing for fast-erect sheds in logistics parks.",
      },
      {
        slug: "roofing-panels",
        why: "Trapezoidal insulated roof sheets with endlap and ridge detail matched to purlin layout.",
      },
      {
        slug: "wall-panels",
        why: "Vertical wall cladding for long wall runs with tongue-and-groove joints and base flashings.",
      },
      {
        slug: "puf-panels",
        why: "Standard foam core for ambient sheds where cost per m² drives the envelope decision.",
      },
    ],
    processSteps: [
      {
        title: "Layout and steel coordination",
        body: "Bay grid, eave height and purlin spacing agreed with PEB supplier. Panel fixing drawings issued to match.",
        duration: "1 week",
      },
      {
        title: "Panel and steel production",
        body: "Steel and panels released on aligned schedules. Crates labelled by wall zone for site sequence.",
        duration: "4–6 weeks",
      },
      {
        title: "Site erection",
        body: "Frame erected, roof sheets fixed per torque pattern, walls closed from corners. Cold chamber kit last if inside the shell.",
        duration: "Site programme",
      },
    ],
    relevantProducts: ["peb-prefabricated-buildings", "roofing-panels", "wall-panels", "puf-panels"],
    applications: ["warehouse-insulation", "industrial-envelope"],
    comparisons: [],
    faqs: [
      {
        question: "How fast can a warehouse envelope be erected?",
        answer:
          "A 30 × 60 m PEB shed with insulated cladding often reaches weathertight in 3–6 weeks on site after steel erection — programme depends on crane access, crew size and weather. Panel production lead time is separate.",
      },
      {
        question: "Do you supply steel and panels together?",
        answer:
          "Yes — PEB primary steel and sandwich panels can quote on one order with aligned dispatch dates. You can also supply your own steel and buy panels only.",
      },
      {
        question: "What roof span can insulated panels cover?",
        answer:
          "Panel span follows purlin spacing, not panel strength alone — typical purlin centres are 1.5–3.0 m depending on load and profile. Send bay width and we coordinate with the frame design.",
      },
      {
        question: "Can we add a cold room inside a ambient warehouse?",
        answer:
          "Yes — cam-lock cold room kits install inside the finished shell. Quote the box room separately with its own door and refrigeration interface.",
      },
      {
        question: "What wind speed do you design for?",
        answer:
          "Design wind and seismic loads follow local code for the site country — state the location on enquiry so steel design uses the correct map value.",
      },
      {
        question: "How are roof panels packed for export?",
        answer:
          "Nested by profile with edge protectors and banding for 40 ft HC loading. Packing list shows crate weights for port handling equipment.",
      },
      {
        question: "Are foam-cored panels allowed on warehouse boundary walls?",
        answer:
          "Rules vary — some jurisdictions require non-combustible cladding on fire boundaries. Verify with your local building authority; we supply mineral wool fire-rated walls where specified.",
      },
    ],
    buyerChecklist: [
      "Send plan dimensions, eave height, bay width and roof slope — not total m² alone",
      "State whether PEB steel is in scope or cladding-only on existing frame",
      "Confirm ambient versus chilled zones inside the shed",
      "Verify local fire rules for foam-cored panels on boundary walls",
      "Align steel and panel dispatch dates to site erection programme",
      "Name destination port for container load estimates",
    ],
    limitations:
      "Structural design submission to local engineer is buyer scope unless agreed otherwise. Roof endlap leaks in monsoon usually trace to fixings or missing closure strips, not panel thickness alone.",
    images: [
      {
        src: "/images/solutions/warehouse-interior.jpg",
        alt: "Stock photo of an empty warehouse interior with ceiling lights — illustrative logistics volume, not a Phoenixx project",
        width: 1920,
        height: 1280,
        isStock: true,
        credit: "Pexels",
      },
    ],
    draft: false,
    updatedAt: "2026-09-15",
  },
  {
    slug: "dairy",
    name: "Dairy Processing",
    h1: "Dairy Plant Panel Solutions — Milk Chilling and Hygiene Zones",
    seoTitle: "Dairy Processing Panel Solutions | PHOENIXX",
    metaDescription:
      "Insulated panels for dairy plants — milk chilling rooms, processing halls and cold stores. Hygiene joints and export from India.",
    summary:
      "Dairy plants combine raw milk reception, pasteurisation halls and chilled storage in one hygiene-controlled envelope. We supply panels for milk chilling rooms (+2 to +4 °C), curd and culture stores and ambient processing areas with washdown-facing options. Milk chilling is time-critical — envelope performance affects cooling plant sizing as much as compressor selection.",
    quickAnswer:
      "Milk chilling rooms hold +2 to +4 °C with 80–100 mm PUF or PIR cam-lock panels, continuous coving and thermal break door frames. Pasteurisation and culture areas need washdown-safe facings with sealed joints. CIP chemical exposure and FSSAI-style audit requirements vary — verify material compatibility and hygiene rules against your local dairy regulator.",
    engineeringRequirement:
      "Size the milk chilling room from peak reception litres per hour, hold time and allowable temperature rise — not from a generic 'dairy cold room' thickness. Typical bulk milk stores target +2 to +4 °C with 80–100 mm panels and low door cycle frequency. Processing halls run +10 to +18 °C with daily washdown — specify smooth facings and coving at floor junctions. Culture and starter rooms may need tighter tolerance (+4 to +6 °C). Relative humidity during CIP cycles attacks cut panel edges if laps are not sealed. Indian FSSAI, EU dairy hygiene and national milk board rules differ — verify against your licensing authority.",
    recommendedSpec: [
      { label: "Bulk milk chilling", value: "+2 to +4", unit: "°C", verified: false, note: SPEC_NOTE },
      { label: "Chilling room panel thickness", value: "80–100", unit: "mm", verified: false, note: SPEC_NOTE },
      { label: "Processing hall", value: "+10 to +18", unit: "°C", verified: false, note: SPEC_NOTE },
      { label: "Hall wall thickness", value: "40–80", unit: "mm", verified: false, note: SPEC_NOTE },
      { label: "Washdown facing", value: "Smooth PPGI, sealed laps", verified: false, note: SPEC_NOTE },
      { label: "Floor junction", value: "Radius coving, dairy-grade sealant", verified: false, note: SPEC_NOTE },
    ],
    failurePoints: [
      {
        problem:
          "Milk temperature rises above +4 °C during peak reception because the chilling room was sized on steady-state load without door-open heat gain from tanker discharge.",
        prevention:
          "Include door cycle frequency and peak litre flow in the load brief. Oversize envelope thickness or add a vestibule at the tanker bay — compressor capacity alone does not fix a leaky box.",
      },
      {
        problem:
          "Corrosion at panel bases in CIP wash areas where alkaline cleaner pools against unsealed floor coving.",
        prevention:
          "Continuous coving with sealant rated for your CIP chemistry. Sloped floor falls away from panel base — panel detail supports drainage; it does not replace it.",
      },
      {
        problem:
          "Ice formation at the chilling room ceiling near evaporator penetrations where vapor barrier continuity was broken during site cutting.",
        prevention:
          "Factory-locate evaporator penetrations on the drawing. Supply penetration collars and restore vapor seal before pull-down — site-cut holes without collars fail within one season.",
      },
    ],
    estimatingGuidance:
      "Send peak milk flow (litres/hour), chilling room dimensions, processing hall layout and CIP chemical list if available. Quote chilling box as cam-lock kit with door and coving; halls as wall and ceiling m² by zone. Include delivery port and facing colour. Refrigeration equipment is excluded — we comment on envelope heat gain only. Typical export lead time 4–6 weeks production plus ocean transit.",
    productRationale: [
      {
        slug: "cold-room-panels",
        why: "Cam-lock milk chilling rooms with jamb and coving accessories sized to tanker bay door cycles.",
      },
      {
        slug: "pir-panels",
        why: "Tighter λ when chilling room headroom is fixed by existing steel structure.",
      },
      {
        slug: "wall-panels",
        why: "Tongue-and-groove cladding for pasteurisation and packaging halls with washdown-facing option.",
      },
      {
        slug: "cleanroom-panels",
        why: "Flush joints for culture rooms where auditors scrutinise particle and microbial control surfaces.",
      },
    ],
    relevantProducts: ["cold-room-panels", "pir-panels", "wall-panels", "cleanroom-panels"],
    applications: ["cold-room-construction", "food-processing-envelope"],
    comparisons: [],
    faqs: [
      {
        question: "What temperature should a milk chilling room hold?",
        answer:
          "+2 to +4 °C at bulk storage — local milk board rules may specify tighter bands. Tell us peak reception volume so thickness accounts for door-open loads, not just steady-state.",
      },
      {
        question: "Can panels handle dairy CIP chemicals?",
        answer:
          "Smooth steel facings with compatible sealants handle most alkaline CIP cycles — send your chemical list for confirmation. Verify against your hygiene auditor.",
      },
      {
        question: "Do you supply panels for cheese ageing caves?",
        answer:
          "Yes — higher humidity rooms need vapor control on the warm side of the envelope and sealed joints. Send target temperature and RH for thickness selection.",
      },
      {
        question: "How is the tanker bay door detailed?",
        answer:
          "Thermal break frame, threshold coving and often a short vestibule to limit warm air ingress during discharge. Door size and cycle count belong on the enquiry form.",
      },
      {
        question: "Can chilling rooms expand when milk intake grows?",
        answer:
          "Cam-lock modular rooms accept additional panel modules on one wall — plan expansion direction on the first layout to avoid removing a corner that carries structural load from the roof.",
      },
      {
        question: "What export documentation applies to dairy projects in East Africa?",
        answer:
          "Commercial invoice, packing list, certificate of origin and bill of lading as standard. Destination-specific import permits are your clearing agent's scope — share requirements early.",
      },
      {
        question: "Is food-grade facing mandatory for milk contact areas?",
        answer:
          "Milk does not touch walls in a properly designed store — but washdown zones may specify food-grade facing per your consultant. State the requirement on enquiry.",
      },
    ],
    buyerChecklist: [
      "Send milk intake temperature, storage band and peak daily volume for chill room sizing",
      "Confirm washdown requirements in processing versus storage zones",
      "List door traffic between chill rooms and dispatch docks",
      "State whether food-grade facing is required in any zone",
      "Name destination port and Incoterm for export pricing",
    ],
    limitations:
      "Dairy licensing and HACCP validation remain with your consultant and local authority. Condensation at floor coving in chill rooms is usually a detail gap, not insufficient foam thickness.",
    images: [
      {
        src: "/images/hero/hero-cold-storage-hvac.jpg",
        alt: "Stock photo of industrial refrigeration units on a building exterior — illustrative dairy chilling plant, not a Phoenixx project",
        width: 1920,
        height: 1280,
        isStock: true,
        credit: "Pexels",
      },
    ],
    draft: false,
    updatedAt: "2026-09-15",
  },
  {
    slug: "poultry-meat-processing",
    name: "Poultry and Meat Processing",
    h1: "Poultry and Meat Processing Solutions — Cold Holding and Hygiene Envelopes",
    seoTitle: "Poultry & Meat Processing Solutions | PHOENIXX",
    metaDescription:
      "Insulated panels for poultry and meat plants — processing halls, blast chillers and cold holding rooms. Export from India.",
    summary:
      "Poultry and meat plants move product from slaughter through chilling, cutting and dispatch under strict temperature control. We supply insulated envelopes for processing halls, blast chillers (+2 to +4 °C carcass chill) and frozen holding (−18 °C) with doors matched to washdown and traffic loads. Envelope design follows product path — raw, clean and dirty zones need different facing and joint detail.",
    quickAnswer:
      "Carcass chill rooms hold +2 to +4 °C with 80–100 mm cam-lock panels; cutting rooms sit at +8 to +12 °C; frozen stores target −18 °C with 100–120 mm panels. Processing areas need washdown facings and coving that survives daily hose-down. USDA, EU hygiene and local abattoir licensing rules differ — verify zone separation and audit requirements against your authority.",
    engineeringRequirement:
      "Map the product path: kill floor ambient, carcass chill (+2 to +4 °C), evisceration and cutting (+8 to +12 °C), blast freeze (−30 to −40 °C short hold) and frozen dispatch (−18 °C). Each zone gets its own thickness and joint type. Washdown walls in dirty zones need smooth facings, sealed laps and stainless-compatible coving. Door cycles are high — specify traffic-rated cold room doors with thermal break frames. Condensation control between adjacent temperature zones requires vapor barriers on the warm side of cold rooms. Verify halal, kosher or national meat inspection layout rules with your consultant.",
    recommendedSpec: [
      { label: "Carcass chill", value: "+2 to +4", unit: "°C", verified: false, note: SPEC_NOTE },
      { label: "Cutting room", value: "+8 to +12", unit: "°C", verified: false, note: SPEC_NOTE },
      { label: "Frozen holding", value: "−18", unit: "°C typical", verified: false, note: SPEC_NOTE },
      { label: "Chill room thickness", value: "80–100", unit: "mm", verified: false, note: SPEC_NOTE },
      { label: "Freezer thickness", value: "100–120", unit: "mm", verified: false, note: SPEC_NOTE },
      { label: "Door type", value: "Traffic-rated cold room door", verified: false, note: SPEC_NOTE },
    ],
    failurePoints: [
      {
        problem:
          "Carcass chill room fails to pull down after shift start because door traffic from the kill floor loads the envelope beyond steady-state calculation.",
        prevention:
          "Model door-open duration and air exchange from the kill floor. Add vestibule, air curtain or step up thickness — do not size only on carcass mass and hold time.",
      },
      {
        problem:
          "Bacterial audit flags at panel joints in washdown areas where exposed fixings trap organic residue.",
        prevention:
          "Use flush profiles or cleanroom-style joints in washdown zones; radius coving without gaps at the floor. Through-fixings belong on dry perimeter walls only.",
      },
      {
        problem:
          "Floor ice and slip hazard at the chill room threshold where coving was omitted between the drain floor and panel base.",
        prevention:
          "Supply threshold coving and thermal break detail at every zone transition. Sloped falls and drain positions belong on the civil drawing — we detail the panel interface only.",
      },
    ],
    estimatingGuidance:
      "Send line layout with zone temperatures, peak throughput (birds/hour or kg/day), door sizes and washdown classification per area. Quote each cold zone as a kit with doors; halls as wall m². Include facing colour, delivery port and whether halal layout separation affects wall positions. Refrigeration and overhead rail steel are excluded unless agreed. Export packing lists panels by zone for site sequence.",
    productRationale: [
      {
        slug: "cold-room-panels",
        why: "Cam-lock chill and freeze boxes along the product path with coving matched to drain floor layouts.",
      },
      {
        slug: "industrial-doors",
        why: "Sliding and hinged doors rated for fork and trolley traffic with thermal break jambs.",
      },
      {
        slug: "wall-panels",
        why: "Ambient and semi-chilled processing halls with washdown-facing upgrade on dirty zones.",
      },
      {
        slug: "puf-panels",
        why: "Standard foam core for secondary chill zones where PIR premium is not required.",
      },
    ],
    processSteps: [
      {
        title: "Zone temperature mapping",
        body: "Product path from kill floor to dispatch with hold times and door traffic. Each box room sized on combined load.",
        duration: "2–4 days",
      },
      {
        title: "Door and coving schedule",
        body: "Traffic-rated doors, thresholds and washdown profiles listed per zone on one quotation.",
        duration: "3–5 days",
      },
      {
        title: "Phased export dispatch",
        body: "Chill rooms can ship before processing hall cladding if your programme requires early cold chain commissioning.",
        duration: "4–6 weeks production",
      },
    ],
    relevantProducts: ["cold-room-panels", "industrial-doors", "wall-panels", "puf-panels"],
    applications: ["cold-room-construction", "food-processing-envelope"],
    comparisons: [],
    faqs: [
      {
        question: "What temperature is a carcass chill room?",
        answer:
          "+2 to +4 °C typical for poultry and red meat — confirm against your HACCP plan and local abattoir licence. Pull-down time from warm carcass load must be on the enquiry.",
      },
      {
        question: "Can one door serve kill floor and chill room?",
        answer:
          "Possible but increases heat gain — we recommend a vestibule or separate traffic pattern. Door cycle count belongs in the load calculation.",
      },
      {
        question: "Do you supply blast freezer panels?",
        answer:
          "Yes — short-hold blast at −30 to −40 °C needs a proper load calc and often 120–150 mm PIR. Send product type and tray load.",
      },
      {
        question: "How are washdown walls different from chill room walls?",
        answer:
          "Washdown walls prioritise smooth facing and sealed joints over maximum insulation — thickness may be lower but coving and sealant spec is stricter.",
      },
      {
        question: "Can panels meet halal layout separation?",
        answer:
          "Panel walls define zones — layout separation is your process consultant's design. We supply partitions to your drawing coordinates.",
      },
      {
        question: "What is the lead time for an abattoir cold chain export order?",
        answer:
          "4–6 weeks production after drawing sign-off, plus ocean transit. Order acknowledgement states gate-in date; early chill room release can be requested.",
      },
      {
        question: "Do you supply doors for high-traffic dispatch docks?",
        answer:
          "Yes — sliding cold room doors with impact protection and thermal break frames. Specify opening width and daily cycle count.",
      },
    ],
    buyerChecklist: [
      "Map product path temperatures — kill floor, carcass chill, cutting and frozen hold",
      "Model door-open time from hot zones into chill rooms on the enquiry",
      "Specify washdown classification per area for facing and joint choice",
      "Confirm halal or layout separation requirements on the drawing",
      "Quote traffic-rated doors with panel kits on the same schedule",
    ],
    limitations:
      "Abattoir licensing and hygiene audit outcomes are outside panel supply scope. Carcass chill rooms sized for steady state alone fail when kill-floor door traffic is omitted from load calcs.",
    images: [
      {
        src: "/images/plant/industrial-warehouse-exterior.jpg",
        alt: "Stock photo of an industrial warehouse exterior — illustrative meat processing plant scale, not a Phoenixx project",
        width: 1920,
        height: 1280,
        isStock: true,
        credit: "Pexels",
      },
    ],
    draft: false,
    updatedAt: "2026-09-15",
  },
  {
    slug: "hospitals",
    name: "Hospitals and Healthcare",
    h1: "Hospital Panel Solutions — OT Partitions, Pharmacy Stores and Hygiene Zones",
    seoTitle: "Hospital Insulated Panel Solutions | PHOENIXX",
    metaDescription:
      "Insulated panels for hospital OT partitions, pharmacy cold stores and healthcare envelopes. Fire and hygiene guidance for export projects.",
    summary:
      "Healthcare facilities need insulated partitions for operating theatres, pharmacy cold stores (+2 to +8 °C) and service corridors — often retrofitted inside an existing shell. We supply cleanroom-style panels for OT and isolation zones, plus cold room kits for vaccine and medicine stores. Fire rating, infection control and medical gas routing must align with national hospital building codes — verify against your local authority and fire department.",
    quickAnswer:
      "OT and sterile supply partitions use cleanroom profiles with smooth facings and flush joints — not standard warehouse cladding. Pharmacy and vaccine stores hold +2 to +8 °C with 80–100 mm cam-lock panels and continuous temperature monitoring points at doors. Fire-rated separation between departments may require mineral wool panels — verify required fire period with local building and health regulators before quoting foam cores on escape routes.",
    engineeringRequirement:
      "Define room function: OT suite, sterile store, pharmacy refrigerator room, mortuary cold store or general corridor partition. OT areas need washable surfaces, minimal joints and coordination with medical gas and HVAC laminar flow — panel scope stops at the partition line; ceiling and floor finishes may be separate trades. Pharmacy cold stores target +2 to +8 °C with alarmed monitoring and backup power on refrigeration — envelope spec includes vapor control and door seal compression tests. Mortuary rooms (+2 to +4 °C) need odour control coordination with exhaust — not panel scope alone. NBC of India, HTM (UK) and national hospital standards differ — verify fire, infection control and licensing with your authority.",
    recommendedSpec: [
      { label: "Pharmacy / vaccine store", value: "+2 to +8", unit: "°C", verified: false, note: SPEC_NOTE },
      { label: "Cold store panel thickness", value: "80–100", unit: "mm", verified: false, note: SPEC_NOTE },
      { label: "OT partition profile", value: "Cleanroom flush joint", verified: false, note: SPEC_NOTE },
      { label: "Mortuary hold", value: "+2 to +4", unit: "°C typical", verified: false, note: SPEC_NOTE },
      { label: "Fire wall (where required)", value: "Mineral wool system", verified: false, note: "Verify rating locally" },
      { label: "Door interface", value: "Thermal break, monitored seal", verified: false, note: SPEC_NOTE },
    ],
    failurePoints: [
      {
        problem:
          "Vaccine store temperature alarm triggered by warm air ingress at a pharmacy door left propped open during restocking — envelope sized for closed-door steady state only.",
        prevention:
          "Include door-open duration in the load brief. Specify self-closing hinges, alarm contacts and vestibule where traffic is frequent.",
      },
      {
        problem:
          "Infection control audit flags joint gaps in OT anteroom partitions installed with standard industrial profiles.",
        prevention:
          "Use cleanroom panels with gasketed flush joints in anteroom and OT support zones. Coordinate cut-outs for medical gases on the factory drawing.",
      },
      {
        problem:
          "Fire inspection rejects foam-cored partitions on a corridor escape route where mineral wool was required by local hospital code.",
        prevention:
          "Confirm fire period and combustibility limits with local fire authority before specifying PUF on any hospital escape or department boundary wall.",
      },
    ],
    estimatingGuidance:
      "Send room list with function, dimensions, temperature (if cold), fire rating note and retrofit versus new build. Quote OT partitions, pharmacy cold box and mortuary store separately. Include door count, monitoring requirements and delivery port. Medical gas and HVAC are by others — we coordinate penetration locations only. Allow longer drawing review for hospital projects; export lead time typically 5–7 weeks after approval.",
    productRationale: [
      {
        slug: "cleanroom-panels",
        why: "Flush joints for OT anterooms, sterile stores and isolation partitions where infection control audits inspect surface continuity.",
      },
      {
        slug: "cold-room-panels",
        why: "Cam-lock pharmacy and vaccine stores with jamb detail suited to frequent door cycles.",
      },
      {
        slug: "fire-rated-panels",
        why: "Mineral wool walls where hospital code mandates fire separation between departments — verify rating locally.",
      },
      {
        slug: "pir-panels",
        why: "Lower λ for cold stores in plant rooms with limited headroom above ceiling services.",
      },
    ],
    relevantProducts: ["cleanroom-panels", "cold-room-panels", "fire-rated-panels", "pir-panels"],
    applications: ["cold-room-construction", "cleanroom-fitout"],
    comparisons: [],
    faqs: [
      {
        question: "Can panels be retrofitted in an operating hospital?",
        answer:
          "Yes — modular cleanroom panels suit retrofit OT anterooms and pharmacy stores. Night works and infection control barriers are site logistics — plan crane and material routes with your facility manager.",
      },
      {
        question: "What fire rating do hospital partitions need?",
        answer:
          "Varies by country and room type — escape routes often need 60–120 minute rated walls. Verify with local fire authority; we supply mineral wool fire-rated panels where specified.",
      },
      {
        question: "Do you supply mortuary cold room panels?",
        answer:
          "Yes — +2 to +4 °C hold rooms with odour-control coordination on exhaust penetrations. Send room size and local mortuary licensing notes.",
      },
      {
        question: "How is pharmacy cold store monitoring addressed?",
        answer:
          "Temperature probes and alarms sit on the refrigeration BMS — we detail door seal quality and vapor continuity so the envelope does not undermine sensor readings at joints.",
      },
      {
        question: "Are foam panels allowed in hospital corridors?",
        answer:
          "Some codes restrict combustible cores on escape routes — verify locally. Mineral wool or fire-rated build-ups may be mandatory on specific walls.",
      },
      {
        question: "What drawings do you need for a hospital enquiry?",
        answer:
          "Room schedule with dimensions, function, temperature, fire note and existing structure type if retrofit. PDF plans from your hospital consultant are sufficient for a first quotation.",
      },
      {
        question: "Can vaccine stores be exported as flat-packed kits to Africa?",
        answer:
          "Yes — cam-lock kits ship in labelled crates with installation drawings. Cold chain validation after install is your facility's responsibility.",
      },
    ],
    buyerChecklist: [
      "Send room schedule with function — OT, pharmacy store, mortuary or corridor partition",
      "Confirm fire period with local hospital and fire authority before specifying foam cores",
      "State retrofit versus new build and existing structure type",
      "List cold store monitoring requirements — probes sit on BMS, not panel scope",
      "Plan infection-control barriers if retrofitting in an operating facility",
    ],
    limitations:
      "Medical gas, HVAC laminar flow and fire authority approval are separate trades. Foam-cored partitions on escape routes may be rejected where mineral wool is mandated locally.",
    images: [
      {
        src: "/images/products/metal-cladding-exterior.jpg",
        alt: "Stock photo of metal-clad industrial building facade — illustrative healthcare facility envelope, not a Phoenixx hospital project",
        width: 1920,
        height: 1280,
        isStock: true,
        credit: "Pexels",
      },
    ],
    draft: false,
    updatedAt: "2026-09-15",
  },
  {
    slug: "data-centres",
    name: "Data Centres",
    h1: "Data Centre Building Envelope Solutions — Thermal Shell and Fire Separation",
    seoTitle: "Data Centre Panel Solutions | PHOENIXX",
    metaDescription:
      "Insulated wall and roof panels for data centre building envelopes. Fire-rated options — no Tier certification claims from panel supply alone.",
    summary:
      "Data centre buildings need a weathertight insulated envelope that keeps HVAC load predictable and separates fire compartments where code requires. We supply wall and roof sandwich panels for shell buildings housing white space — we do not supply precision cooling, redundancy architecture or Tier certification. Panel scope is the building skin: thermal performance, weather resistance and optional fire-rated boundaries.",
    quickAnswer:
      "Data centre shells use 60–100 mm PUF or PIR wall and roof panels on PEB or steel frame structures — thermal target is stable ambient (+18 to +27 °C shell) so CRAC units size on IT load, not solar gain through the roof. Fire-rated mineral wool panels may be required on boundaries between electrical rooms and white space — verify fire period with local building authority. We do not claim Tier III or Tier IV from panel supply; uptime architecture is your MEP and redundancy design.",
    engineeringRequirement:
      "Define shell U-value target, design wind and snow load, fire compartment lines and whether the building is single-tenant or multi-hall. Roof panels carry most solar load — 80–100 mm PIR is common where ambient peaks exceed +40 °C external. Wall panels at 60–80 mm reduce heat ingress on west-facing facades. Electrical and generator rooms may need fire-rated separation from white space — verify period (often 60–120 minutes) with local code; foam cores alone do not satisfy most fire wall specs. Vapor control matters in humid climates to protect downstream humidity control. ASHRAE thermal guidelines and national telecom building codes differ — verify against your authority.",
    recommendedSpec: [
      { label: "Shell internal target", value: "+18 to +27", unit: "°C ambient", verified: false, note: "White space HVAC by others" },
      { label: "Roof panel thickness", value: "80–100", unit: "mm PIR typical", verified: false, note: SPEC_NOTE },
      { label: "Wall panel thickness", value: "60–80", unit: "mm", verified: false, note: SPEC_NOTE },
      { label: "Fire boundary (where required)", value: "Mineral wool system", verified: false, note: "Verify period locally" },
      { label: "Primary structure", value: "PEB or steel frame", verified: false, note: SPEC_NOTE },
      { label: "Roof profile", value: "Standing seam or trapezoidal", verified: false, note: SPEC_NOTE },
    ],
    failurePoints: [
      {
        problem:
          "CRAC units oversize because roof solar gain was underestimated — thin roof panels on a dark facing in equatorial sun add measurable load.",
        prevention:
          "Size roof U-value for peak external temperature and facing colour. PIR at 80–100 mm on south and west roofs is a common starting point before MEP simulation.",
      },
      {
        problem:
          "Fire inspection rejects foam-cored panels on the generator room boundary where a rated fire wall was specified.",
        prevention:
          "Confirm fire period and tested system requirement with local authority before quoting. Supply fire-rated mineral wool panels on designated boundaries only.",
      },
      {
        problem:
          "Roof endlap leakage introduces humidity into the plenum above ceiling grids — IT humidity alarms trip during monsoon.",
        prevention:
          "Issue fixing and endlap detail matched to design wind uplift. Include ridge closures and sealant specification for high-rainfall sites.",
      },
    ],
    estimatingGuidance:
      "Send building footprint, eave height, roof slope, fire compartment lines and design wind speed. Quote roof m², wall m² per facade and fire-rated wall line metres separately. State destination port and facing colour (light colours reduce solar load). PEB steel can quote with panels on one schedule. Precision cooling, UPS and Tier design are excluded — we supply building envelope panels only.",
    productRationale: [
      {
        slug: "pir-panels",
        why: "Lower λ on roof runs where solar load drives shell heat gain and CRAC sizing.",
      },
      {
        slug: "roofing-panels",
        why: "Trapezoidal or standing-seam profiles with endlap detail for weathertight long spans.",
      },
      {
        slug: "wall-panels",
        why: "Vertical cladding for machine hall perimeter walls with tongue-and-groove joints.",
      },
      {
        slug: "fire-rated-panels",
        why: "Mineral wool boundaries between generator, electrical and white space where code mandates rated separation.",
      },
    ],
    relevantProducts: ["pir-panels", "roofing-panels", "wall-panels", "fire-rated-panels"],
    applications: ["industrial-envelope", "warehouse-insulation"],
    comparisons: [],
    faqs: [
      {
        question: "Do your panels achieve Tier III or Tier IV?",
        answer:
          "No — Tier certification covers redundancy, uptime and operations architecture, not panel thickness. We supply the building envelope; uptime design is your MEP and operations scope.",
      },
      {
        question: "What roof thickness suits a data centre in East Africa?",
        answer:
          "80–100 mm PIR is a common starting point where external peaks exceed +35 °C — confirm with your MEP load calculation before fixing.",
      },
      {
        question: "Can panels provide fire separation between halls?",
        answer:
          "Fire-rated mineral wool panel systems may be used where tested and approved for the required period — verify with local fire authority. Standard PUF is not a fire wall.",
      },
      {
        question: "Do you supply precision cooling or hot-aisle containment?",
        answer:
          "No — our scope is wall and roof sandwich panels for the shell building. Containment and CRAC are specialist MEP trades.",
      },
      {
        question: "How is roof uplift handled in cyclone-prone regions?",
        answer:
          "Fixing pattern and endlap detail follow design wind speed for the site — state location and code map value on enquiry.",
      },
      {
        question: "Can shell and panels export together to African data centre projects?",
        answer:
          "Yes — PEB steel and panels dispatch on aligned schedules with crate labels by wall zone. Ocean transit adds to programme after gate-in.",
      },
      {
        question: "What information do you need for a shell quotation?",
        answer:
          "Footprint, eave height, bay spacing, roof slope, fire line locations, design wind and delivery port. MEP loads are helpful context but envelope sizing uses shell thermal targets.",
      },
    ],
    buyerChecklist: [
      "Send shell U-value target and design wind speed for roof endlap detail",
      "Mark fire compartment lines between electrical, generator and white space",
      "Confirm we supply envelope only — not CRAC, UPS or Tier architecture",
      "Specify roof facing colour for solar load — dark roofs add CRAC sizing margin",
      "Name destination port for export lead time planning",
    ],
    limitations:
      "We do not claim Tier III/IV or uptime certification from panel supply alone. Fire-rated boundaries need local code confirmation — standard PUF is not a generator-room fire wall.",
    images: [
      {
        src: "/images/hero/hero-warehouse-ceiling.jpg",
        alt: "Stock photo of industrial ceiling with skylights — illustrative data hall roof volume, not a Phoenixx data centre",
        width: 1920,
        height: 1280,
        isStock: true,
        credit: "Pexels",
      },
    ],
    draft: false,
    updatedAt: "2026-09-15",
  },
  {
    slug: "manufacturing-plants",
    name: "Manufacturing Plants",
    h1: "Manufacturing Plant Panel Solutions — Factory Walls and Roofs",
    seoTitle: "Manufacturing Plant Panel Solutions | PHOENIXX",
    metaDescription:
      "Insulated wall and roof panels for factory buildings and production halls. Fire-rated options and PEB structures for export.",
    summary:
      "Factory buildings and production halls need insulated wall and roof cladding that handles process heat, occasional washdown and fire separation between zones. We supply PEB structures with PUF, PIR and Rockwool sandwich panels for walls and roofs — plus fire-rated partitions where insurers or local code require non-combustible separation between storage and production.",
    quickAnswer:
      "Manufacturing envelopes combine PEB steel with 40–100 mm wall and roof panels — thickness follows internal process temperature and fire rules, not a single catalogue value. Production halls at +25 to +40 °C internal may need ventilation coordination more than extra insulation; paint shops and chemical stores need fire-rated walls. Factory Act, NBC and local industrial licensing rules differ — verify fire and environmental requirements against your authority.",
    engineeringRequirement:
      "Define bay spacing, crane hook height, internal process temperature range and any fire compartment lines between production, storage and office zones. Ambient production halls use 40–80 mm roof and wall panels for rain noise and condensation control. Process areas running +35 to +50 °C internal need ventilation and heat release coordination — insulation reduces radiant load but does not replace exhaust design. Chemical storage and paint lines often require fire-rated mineral wool walls — verify period with local fire department. Washdown bays in food-adjacent manufacturing need sealed joints and coving like food plants. Noise from punch presses and compressors may require acoustic lining — panel mass helps but is not a complete acoustic solution.",
    recommendedSpec: [
      { label: "Production hall internal", value: "+25 to +40", unit: "°C typical", verified: false, note: SPEC_NOTE },
      { label: "Roof panel thickness", value: "50–80", unit: "mm PUF/PIR", verified: false, note: SPEC_NOTE },
      { label: "Wall panel thickness", value: "40–80", unit: "mm", verified: false, note: SPEC_NOTE },
      { label: "Fire partition (where required)", value: "Rockwool / fire-rated system", verified: false, note: "Verify locally" },
      { label: "Primary structure", value: "PEB portal frame", verified: false, note: SPEC_NOTE },
      { label: "Crane capacity note", value: "Coordinate with steel design", verified: false, note: "If overhead crane" },
    ],
    failurePoints: [
      {
        problem:
          "Internal paint finish on stored goods fails because direct sun heats the roof soffit above +45 °C despite 'insulated' cladding — thickness was sized for ambient hall, not radiant roof load.",
        prevention:
          "Size roof U-value for peak solar gain on dark facing; add ventilation or lighter external colour. Process heat and solar load stack — do not size on winter ambient alone.",
      },
      {
        problem:
          "Insurance survey rejects foam-cored partition between solvent store and production line after a near-miss incident.",
        prevention:
          "Confirm fire period and combustibility limits at quotation stage. Specify mineral wool fire-rated panels on chemical and solvent boundaries before production release.",
      },
      {
        problem:
          "Condensation drips onto machinery from uninsulated purlin bridges that interrupt the thermal line on the roof underside.",
        prevention:
          "Detail purlin thermal breaks or continuous insulation below purlins where dew point control matters. Issue fixing drawings that show no bare steel crossing the insulated line.",
      },
    ],
    estimatingGuidance:
      "Send plan, eave height, bay width, crane capacity if any, fire line locations and process temperature range. Quote PEB steel, roof m², wall m² per facade and fire-rated wall metres separately. Include facing colour, delivery port and whether office mezzanine is in scope (often separate trade). Typical production lead time 4–7 weeks plus ocean transit for export orders.",
    productRationale: [
      {
        slug: "peb-prefabricated-buildings",
        why: "Portal frames sized to crane span and bay spacing for production halls and storage annexes.",
      },
      {
        slug: "roofing-panels",
        why: "Insulated roof sheets with endlap detail for long factory bays and ventilator penetrations.",
      },
      {
        slug: "wall-panels",
        why: "Vertical cladding for perimeter and internal partition walls on tongue-and-groove joints.",
      },
      {
        slug: "fire-rated-panels",
        why: "Mineral wool walls between solvent storage, paint lines and production where code or insurer mandates rated separation.",
      },
    ],
    processSteps: [
      {
        title: "Layout and load review",
        body: "Bay grid, crane hook height, fire lines and process heat notes feed steel and panel schedules together.",
        duration: "1 week",
      },
      {
        title: "Steel and panel release",
        body: "PEB fabrication and panel production aligned to site erection sequence. Fire walls flagged on separate crate labels.",
        duration: "4–7 weeks",
      },
      {
        title: "Erection and closure",
        body: "Frame up, roof fixed to wind uplift pattern, walls from corners. Fire partitions before commissioning of process equipment in adjacent bays.",
        duration: "Site programme",
      },
    ],
    relevantProducts: ["peb-prefabricated-buildings", "roofing-panels", "wall-panels", "fire-rated-panels"],
    applications: ["industrial-envelope", "warehouse-insulation"],
    comparisons: [],
    faqs: [
      {
        question: "What panel thickness suits a general manufacturing hall?",
        answer:
          "50–80 mm roof and 40–60 mm wall is common for ambient production in tropical climates — increase roof thickness if solar load or internal process heat is high.",
      },
      {
        question: "Can panels span a factory with an overhead crane?",
        answer:
          "Panel span follows purlin spacing from the PEB design — crane load is on the steel frame, not the panel skin. Send crane capacity and bay width on enquiry.",
      },
      {
        question: "When are fire-rated panels required in factories?",
        answer:
          "When local code or insurance mandates non-combustible separation between storage, paint or chemical areas and production — verify period with your fire authority.",
      },
      {
        question: "Do you supply panels for washdown areas inside a factory?",
        answer:
          "Yes — sealed laps and coving at floor junctions similar to food plant washdown zones. Send cleaning chemical list for sealant compatibility.",
      },
      {
        question: "Can office mezzanine and factory shell quote together?",
        answer:
          "PEB shell and panels quote together; office fit-out is usually a separate scope — state if mezzanine steel is included in your enquiry.",
      },
      {
        question: "How are roof ventilators and exhaust penetrations handled?",
        answer:
          "Locate penetrations on the drawing before production. Supply flashings matched to panel profile — field-cut holes without flashings leak within one monsoon.",
      },
      {
        question: "What export lead time applies to a factory order?",
        answer:
          "4–7 weeks production after drawing approval, plus ocean transit. Large orders may split dispatch by wall zone to match site crane availability.",
      },
    ],
    buyerChecklist: [
      "Send process heat range and ventilation brief — insulation does not replace exhaust design",
      "Mark fire lines between solvent storage, paint lines and production bays",
      "Confirm crane capacity and bay spacing if overhead lift is in scope",
      "State washdown zones versus dry production areas for facing spec",
      "Name destination port and whether steel and panels ship phased",
    ],
    limitations:
      "Acoustic performance needs a full partition build-up — panel mass alone is not a complete noise solution. Insurance-driven fire upgrades after equipment install are costly — confirm combustibility limits at quote stage.",
    images: [
      {
        src: "/images/hero/hero-peb-steel-frame.jpg",
        alt: "Stock photo of steel frame factory hall under construction — illustrative manufacturing plant structure, not a Phoenixx project",
        width: 1920,
        height: 1280,
        isStock: true,
        credit: "Pexels",
      },
    ],
    draft: false,
    updatedAt: "2026-09-15",
  },
];
