import type { ArticleInput } from "./types";

const AUTHOR = "phoenixx-smartbuild";

export const articles: ArticleInput[] = [
  {
    slug: "cold-room-panel-specification-mistakes",
    title: "Cold Room Panel Specification Mistakes Buyers Repeat",
    h1: "Cold Room Panel Specification Mistakes That Cost Money Later",
    seoTitle: "Cold Room Panel Spec Mistakes | PHOENIXX Blog",
    metaDescription:
      "Thickness copied from an old project, wrong joint type, and missing floor insulation — common cold room panel mistakes and how to avoid them on export orders.",
    category: "Technical",
    authorSlug: AUTHOR,
    excerpt:
      "Most cold room failures we hear about start in the specification sheet, not on the refrigeration plant. These are the errors that repeat on African and Indian export enquiries.",
    quickAnswer:
      "The three mistakes we see most often: specifying wall thickness without a design room temperature and door cycle count; ordering cam-lock panels for a site that only has screw-fix tooling; and treating floor insulation as optional when the heat load calc assumes an insulated slab. Fix those before you compare m² rates.",
    bodySections: [
      {
        h2: "Why do buyers copy thickness from an old BOQ?",
        content:
          "A procurement team receives a new chill room enquiry and lifts 100 mm PUF from a 2019 dairy project without checking setpoint. That old room held +4 °C with one door and sat inside an ambient warehouse. The new room is −2 °C, outdoors under sun, with a pallet door cycling sixty times per shift. The wall build-up that worked in 2019 will not hold setpoint in the new layout — and the supplier who quotes 100 mm because the BOQ says so is not doing you a favour. Write design temperature, ambient design, and daily door openings on every enquiry. If you cannot, ask the refrigeration contractor to sign a one-line design condition before panels are ordered.",
      },
      {
        h2: "When is cam-lock the wrong joint system?",
        content:
          "Cam-lock panels suit modular cold rooms where lengths repeat and crews are trained on tongue-and-groove engagement. We see screw-fix wall panels specified for a cam-lock quote because the buyer likes the price per m² — then the site team tries to force cam profiles onto a frame designed for through-fastened sheets. Joint gaps show up at commissioning as frost lines and condensate tracks. Match joint type to the installer’s method and the room geometry. Long straight runs with factory corners favour cam-lock; retrofits onto existing steel, or walls with many openings, often suit screw-fix or a hybrid detail drawn on the enquiry.",
      },
      {
        h2: "What happens when floor insulation is left out?",
        content:
          "Panel quotations sometimes list wall and ceiling kit only. The heat load calculation still assumes an insulated floor — XPS under screed, or factory floor panels — and the plant is sized accordingly. If the floor is cast later without insulation because it was not on the purchase order, compressors run longer and the room may never reach pull-down on hot afternoons. Ask explicitly whether floor panels or screed insulation are in scope. For freezers, floor heat ingress is often 15–25 % of total load; skipping it to save upfront cost is a common false economy.",
      },
      {
        h2: "How should export orders differ from domestic specs?",
        content:
          "Export bundles travel longer and are handled more times before install. Thicker edge protection, marked panel thickness on packing lists, and humidity-aware storage notes matter on Mombasa or Dar corridors. Specify facing coat for coastal sites when the room sits near salt air — the cold room panel page and PPGI coating guide cover facing grades we see specified for East Africa. Allow curing and dispatch timing in monsoon season; foam that absorbs moisture before install can affect cam-lock fit on site.",
      },
      {
        h2: "Key takeaways",
        content:
          "Send design room temperature, ambient, and door cycles before thickness is fixed. Match joint type to installer capability and geometry. Confirm floor insulation in the same quote as walls and ceiling. For export, add facing grade and packing assumptions to the spec — not only m² price.",
      },
    ],
    keyTakeaways: [
      "Thickness follows design temperature and door load — not product stored.",
      "Cam-lock and screw-fix are not interchangeable without a redraw.",
      "Floor insulation must appear on the PO if the load calc includes it.",
      "Export specs need facing grade and packing notes, not only panel thickness.",
    ],
    datePublished: "2026-09-01",
    dateModified: "2026-09-14",
    relatedProducts: ["cold-room-panels", "puf-panels", "pir-panels"],
    relatedSolutions: ["cold-storage", "dairy"],
    relatedGuides: ["cold-storage-panel-thickness", "joint-systems-compared"],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "coastal-humidity-coating-east-africa",
    title: "Coastal Humidity and Panel Coating on East African Sites",
    h1: "Coastal Humidity — Choosing Panel Coatings for East Africa",
    seoTitle: "Coastal Panel Coatings East Africa | PHOENIXX",
    metaDescription:
      "Polyester, SMP and PVDF facing grades for sandwich panels near Mombasa, Dar es Salaam and other humid coastal corridors — what to specify before export.",
    category: "Export & Logistics",
    authorSlug: AUTHOR,
    excerpt:
      "Salt air and high humidity do not wait until install day. Facing grade chosen in Ahmedabad shows up as chalking or red rust at fixing points two seasons later on the coast.",
    quickAnswer:
      "For coastal East Africa, specify minimum polyester facing on external roof and wall panels exposed to weather; upgrade to SMP or PVDF when the building sits within a few kilometres of salt air or when wash-down chemicals are used. Stainless or coated fixings on exposed surfaces matter as much as the top coat — cut edges and screw heads fail first.",
    bodySections: [
      {
        h2: "Why does the coast punish the wrong facing grade?",
        content:
          "Standard polyester on an external roof panel works inland where rain rinses dust and UV load is moderate. Near Mombasa or Tema, chloride in air accelerates underfilm corrosion at cut edges, screw penetrations, and damaged coil strip. The foam core is fine — the failure mode is facing delamination or rust bloom at fasteners that wick moisture. Buyers who only compare core type and thickness miss the line item that determines whether the shed still looks acceptable after three monsoons.",
      },
      {
        h2: "Which coating tiers do we see on export orders?",
        content:
          "Polyester is the baseline for sheltered walls and internal cold room faces. SMP (super-durable polyester) adds UV and chalking resistance for external long-span roofs. PVDF is specified when the owner wants extended colour retention on prominent elevations or aggressive cleaning regimes. None of these replace correct fixing washer detail or drip folds at eaves — coating is one layer in a system. Our PPGI coating selection guide lists trade-offs without inventing warranty years we have not issued.",
      },
      {
        h2: "What should a Nairobi inland site specify differently from Mombasa?",
        content:
          "Inland chill stores at altitude still need vapour-sealed joints, but external wall panels may survive polyester when the room sits inside a larger ambient shell. A cold store roof five kilometres from the Indian Ocean needs a harder look at SMP minimum and stainless roof screws in the fixing pattern. Document the site distance from coast and whether panels are fully sheltered — suppliers assume inland unless you say otherwise.",
      },
      {
        h2: "How does packing affect facing before install?",
        content:
          "Panels stacked on site in open yards before the roof is closed absorb edge moisture. Bundles should be opened in sequence, not left in direct rain for weeks. Edge protectors exist to prevent handling dents that breach the coil coating — dents at coastal sites become corrosion nuclei. Include storage instructions in the export packing note and align delivery with install readiness so facing is not acting as temporary weatherproofing.",
      },
      {
        h2: "Key takeaways",
        content:
          "Coastal exposure needs facing grade and fixing material on the spec, not a footnote. Inland projects still need joint vapour integrity for cold rooms. Match delivery timing to install capacity so panels are not stored unprotected in humid yards.",
      },
    ],
    keyTakeaways: [
      "Salt air attacks cut edges and fasteners before foam fails.",
      "SMP or PVDF upgrades belong on exposed coastal roofs and walls.",
      "Stainless or coated fixings are part of the coastal specification.",
      "Delay site storage — open bundles only when ready to fix.",
    ],
    datePublished: "2026-09-02",
    dateModified: "2026-09-13",
    relatedProducts: ["roofing-panels", "wall-panels", "cold-room-panels"],
    relatedSolutions: ["warehousing-logistics", "cold-storage"],
    relatedGuides: ["ppgi-coating-selection", "condensation-vapour-control"],
    draft: false,
    updatedAt: "2026-09-13",
  },
  {
    slug: "what-delays-export-shipments",
    title: "What Actually Delays Sandwich Panel Export Shipments",
    h1: "What Delays Panel Export Shipments From India",
    seoTitle: "Panel Export Shipment Delays | PHOENIXX",
    metaDescription:
      "Documentation gaps, late drawing approval, and vessel booking timing — practical reasons insulated panel export orders miss the intended sailing week.",
    category: "Export & Logistics",
    authorSlug: AUTHOR,
    excerpt:
      "Manufacturing time is only one slice of lead time. Most slippage we see on African corridors happens before the container reaches the factory gate.",
    quickAnswer:
      "Export panel orders slip when: final panel lengths and door openings are not approved before production slotting; payment or LC terms block material release; shipping documents do not match the packing list the clearing agent expects; or the buyer changes thickness mid-production without accepting a new dispatch date. Fix the drawing approval and document checklist early — factory days are rarely the longest variable.",
    bodySections: [
      {
        h2: "Why do drawing approvals stall dispatch?",
        content:
          "A quotation assumes standard cam-lock modules and a single personnel door location. After proforma payment, the buyer sends a revised layout with two pallet doors and a partition wall that was not in the first BOQ. Every revision re-queues nesting and foam cut lists. We are not describing a failure — it is normal project churn — but the dispatch date attached to the original email is then wrong. Treat the approved layout drawing as the gate for production, and attach a revised schedule when the layout changes.",
      },
      {
        h2: "Where do documentation mismatches appear?",
        content:
          "Commercial invoice description, HS code, and packing list piece count must match what customs sees at Mombasa or Dar. A pallet counted as one package on the invoice but listed as twelve panel bundles on the packing list triggers holds. Certificate of origin form errors are fixable but cost days. Share your clearing agent’s preferred document format at enquiry stage — not the week before vessel cut-off.",
      },
      {
        h2: "How does freight booking interact with panel production?",
        content:
          "Forty-foot high-cube containers suit most panel bundles, but booking too late in peak season pushes sailings regardless of factory readiness. Conversely, booking a vessel before panels are packed forces drayage storage charges at port. We align gate-in with production completion plus one buffer day for final QA photos — not with an arbitrary sailing printed on a marketing slide.",
      },
      {
        h2: "What can buyers do in the first email?",
        content:
          "Send destination port, Incoterm preference, approximate panel quantities, and who will approve drawings on your side. Name the clearing agent contact if you have one. Ask for a document checklist with the proforma. Those four items remove more delay than repeated requests for faster production once the order is already in queue.",
      },
      {
        h2: "Key takeaways",
        content:
          "Approved drawings gate production — revisions move the dispatch date. Documents must match piece counts and descriptions before gate-in. Book vessel space against realistic pack completion, not wishful sailing dates.",
      },
    ],
    keyTakeaways: [
      "Layout approval is the production start gate.",
      "Invoice, packing list and CoO must align before gate-in.",
      "Vessel booking should follow pack completion, not precede it.",
      "Send port, Incoterm and approver name on the first enquiry.",
    ],
    datePublished: "2026-09-03",
    dateModified: "2026-09-12",
    relatedProducts: ["puf-panels", "cold-room-panels"],
    relatedSolutions: ["cold-storage"],
    relatedGuides: ["evaluating-sandwich-panel-suppliers"],
    draft: false,
    updatedAt: "2026-09-12",
  },
  {
    slug: "reading-a-panel-quotation",
    title: "How to Read a Sandwich Panel Quotation Line by Line",
    h1: "How to Read a Panel Quotation Without Missing Hidden Scope",
    seoTitle: "Reading a Panel Quotation | PHOENIXX Blog",
    metaDescription:
      "m² rate, thickness, facing, joint type, accessories, freight and exclusions — what each line on a sandwich panel quote means before you sign.",
    category: "Technical",
    authorSlug: AUTHOR,
    excerpt:
      "Two quotes at the same thickness can differ forty percent in scope. The line items below the m² rate are where the difference hides.",
    quickAnswer:
      "Check: declared thickness and core density; facing steel thickness and coat grade; joint type and included accessories (corners, coving, door frames); whether freight, insurance and documentation are in scope; and explicit exclusions (floor panels, refrigeratio plant, install). A lower m² rate with exclusions for corners and freight is not cheaper — it is incomplete.",
    bodySections: [
      {
        h2: "What does the m² rate actually include?",
        content:
          "Some suppliers quote wall panel only — ceiling as a separate line, corners and coving as extras, cam-lock keys and gaskets as add-ons. Others quote a room kit with standard door opening framed. Compare total installed kit cost for the same internal volume, not headline wall m². Ask for a bill of quantities mapped to your layout: wall running metres, ceiling area, floor if included, and count of special pieces.",
      },
      {
        h2: "Which technical lines matter for performance?",
        content:
          "Declared core density in kg/m³, facing thickness in mm, and stated U-value with test standard reference tell you whether the panel is structural for your span and thermal for your setpoint. If U-value is missing, request it — do not infer from thickness alone when comparing PUF and PIR. Joint type should be named (cam-lock, tongue-groove screw-fix) not implied by product photo.",
      },
      {
        h2: "How are freight and Incoterms shown?",
        content:
          "EXW Ahmedabad, FOB Mundra, CFR Mombasa and DAP site each place different costs on your side. A low EXW panel rate plus unexpected freight can exceed a CFR quote that looked expensive on first pass. Confirm currency, payment milestone tied to dispatch, and who books insurance for ocean leg. Export documentation preparation should be listed — invoice, packing list, CoO — not assumed.",
      },
      {
        h2: "What exclusions should you expect to see?",
        content:
          "Refrigeration plant, floor screed, civil works, local install labour, and taxes at destination are normally excluded. Red flag when exclusions are silent — you will discover them at payment stage. Acceptable quotes state exclusions plainly. For cold rooms, confirm whether door leaf and frame are included or quoted separately.",
      },
      {
        h2: "Key takeaways",
        content:
          "Compare total kit scope, not wall m² alone. Insist on density, facing, U-value and joint type in writing. Map Incoterm to landed cost. Read exclusions before comparing suppliers.",
      },
    ],
    keyTakeaways: [
      "m² rate scope varies — corners, ceiling and freight may be extra.",
      "Density, facing and U-value belong on the same quote sheet.",
      "Incoterm determines true landed cost comparison.",
      "Silent exclusions become surprises at payment.",
    ],
    datePublished: "2026-09-04",
    dateModified: "2026-09-11",
    relatedProducts: ["puf-panels", "pir-panels", "cold-room-panels"],
    relatedSolutions: ["cold-storage", "warehousing-logistics"],
    relatedGuides: ["estimating-panel-quantity", "u-values-and-running-cost"],
    draft: false,
    updatedAt: "2026-09-11",
  },
  {
    slug: "cheapest-quote-rarely-cheapest-project",
    title: "Why the Cheapest Panel Quote Is Rarely the Cheapest Project",
    h1: "Why the Cheapest Panel Quote Rarely Wins on Total Cost",
    seoTitle: "Cheapest Panel Quote vs Project Cost | PHOENIXX",
    metaDescription:
      "Rework, freight surprises, thicker plant duty and site delays — why low m² panel quotes often cost more by project handover.",
    category: "Project Insights",
    authorSlug: AUTHOR,
    excerpt:
      "Procurement scores on unit rate. Project directors score on handover date and running cost. Those two spreadsheets disagree when the panel spec is thin.",
    quickAnswer:
      "Low quotes often omit freight, accessories, or correct thickness for your temperature band — forcing change orders later. Under-specified walls push refrigeration plant to run harder for a decade. Poor packing increases damage replacements at site. Total project cost includes rework, extra freight for missing pieces, and electricity — not only the first proforma m² rate.",
    bodySections: [
      {
        h2: "Where do change orders appear after award?",
        content:
          "Award on thinnest wall quote; refrigeration contractor then rejects heat load because door area was underestimated. Thicker panels or an extra vestibule is added on variation. Corners and coving were excluded — site buys local angles that do not match cam-lock profile. A second container ships for missing pieces. Each event has a invoice. The original winner quote was incomplete, not cheap.",
      },
      {
        h2: "How does thickness undership affect running cost?",
        content:
          "A freezer at −25 °C with walls one step thinner than the load calc recommended may pull down eventually but never recovers after defrost cycles on hot days. Compressors run longer; electricity bills tell the story over five years. The m² saving on 100 mm instead of 120 mm is often smaller than one year of extra kWh in a continuous-duty plant.",
      },
      {
        h2: "What is the cost of transit damage?",
        content:
          "Minimal edge protection saves packing cost at factory but increases crushed corner panels at discharge. Replacing custom lengths delays install crew and refrigeration commissioning. Our container loading article lists damage modes we design packing against — buyers who delete dunnage to win freight tender often pay twice in replacement panels and air freight for urgent lengths.",
      },
      {
        h2: "How should procurement score quotes?",
        content:
          "Use a landed kit checklist: same thickness, same joint, same accessories, same Incoterm, same document set. Add indicative install duration impact when thickness forces plant upsizing. Ask each supplier to list exclusions side by side. The lowest complete kit price is the fair comparison — not the lowest wall rate with blank lines.",
      },
      {
        h2: "Key takeaways",
        content:
          "Incomplete quotes generate variations — compare full kit scope. Thickness undership raises electricity cost for years. Packing quality is part of project cost, not factory overhead. Score landed, complete specifications.",
      },
    ],
    keyTakeaways: [
      "Change orders follow excluded corners, doors and freight.",
      "Thin walls can cost more in kWh than they save in steel.",
      "Transit damage triggers replacement and delay costs.",
      "Compare complete landed kit — identical scope and Incoterm.",
    ],
    datePublished: "2026-09-05",
    dateModified: "2026-09-10",
    relatedProducts: ["cold-room-panels", "puf-panels"],
    relatedSolutions: ["cold-storage", "food-processing"],
    relatedGuides: ["u-values-and-running-cost", "evaluating-sandwich-panel-suppliers"],
    draft: false,
    updatedAt: "2026-09-10",
  },
  {
    slug: "container-loading-damage-mistakes",
    title: "Container Loading Mistakes That Damage Sandwich Panels",
    h1: "Container Loading Mistakes That Damage Panels in Transit",
    seoTitle: "Panel Container Loading Mistakes | PHOENIXX",
    metaDescription:
      "Wrong container type, poor strapping, mixed thickness bundles and rushed discharge — how sandwich panels get damaged between factory and site.",
    category: "Export & Logistics",
    authorSlug: AUTHOR,
    excerpt:
          "Panels leave the factory straight. They arrive creased, edge-crushed, or mixed by thickness when loading and discharge are treated as someone else’s problem.",
    quickAnswer:
      "Damage comes from: loading long panels without spreader support; mixing 100 mm and 120 mm bundles without labels; under-strapping stacks for ocean roll; choosing standard 40-foot when high-cube headroom is needed; and using forklift tines on unprotected panel faces at discharge. Fix loading diagram, bundle labels and discharge method before gate-in — not after insurance claims.",
    bodySections: [
      {
        h2: "Why does container type matter for panels?",
        content:
          "Forty-foot high-cube adds roughly 300 mm internal height — often the difference between stacking roof-length panels flat or forcing an angle that bends cam-lock tongues. Standard twenty-foot boxes suit small cold room kits; long warehouse wall panels need length and headroom planned in the load diagram. Wrong box choice is decided at booking, not at factory.",
      },
      {
        h2: "What strapping and dunnage failures do we see?",
        content:
          "Single-band strapping on tall stacks allows mid-stack shift when the vessel rolls. Edge protectors left off to save minutes at load-out crush foam at corners — the first panels off are scrap or rework. Dunnage air gaps let bundles hammer each other in transit. A loading diagram with band count, protector placement and weight distribution is part of export quality — not paperwork theatre.",
      },
      {
        h2: "How does discharge at port or site cause damage?",
        content:
          "Forklift tines through facing without spreader bars dent coil coat and compress foam locally. Crews pull top bundles before removing inner restraints — panels slide and scrape. Mixing thicknesses because packing list was not checked leads to wrong panels on the wrong wall run. Brief discharge crew with bundle labels and sequence: restraint removal order matters.",
      },
      {
        h2: "What should buyers request with the quotation?",
        content:
          "Ask for a packing note sketch: bundle count, gross weight per container, label format showing thickness and length, and photos of a reference load. Align insurance coverage to replacement value of custom lengths, not generic cargo rate. Site storage under cover until install reduces secondary damage after a clean discharge.",
      },
      {
        h2: "Key takeaways",
        content:
          "Pick container type for panel length and stack height. Strap, protect edges and dun properly — ocean roll is real. Discharge with spreaders and labelled sequence. Request packing diagram with the export quote.",
      },
    ],
    keyTakeaways: [
      "40-foot HC often needed for long flat stacks.",
      "Under-strapping and missing edge protectors cause corner crush.",
      "Forklift discharge without spreaders dents facing and core.",
      "Bundle labels must show thickness and length clearly.",
    ],
    datePublished: "2026-09-06",
    dateModified: "2026-09-09",
    relatedProducts: ["puf-panels", "roofing-panels", "wall-panels"],
    relatedSolutions: ["warehousing-logistics"],
    relatedGuides: ["installation-sequence-mistakes"],
    draft: false,
    updatedAt: "2026-09-09",
  },
  {
    slug: "doors-for-blast-freezers",
    title: "Specifying Doors for Blast Freezers and High-Throughput Cold Rooms",
    h1: "Doors for Blast Freezers — What Buyers Underspecify",
    seoTitle: "Blast Freezer Door Specification | PHOENIXX",
    metaDescription:
      "Heater cables, floor thresholds, opening cycles and vestibules — door requirements for blast freezers and busy freezer rooms.",
    category: "Technical",
    authorSlug: AUTHOR,
    excerpt:
      "Blast freezer walls are specified to −40 °C while the door is still a standard chill-room leaf. Frost at the threshold follows within weeks.",
    quickAnswer:
      "Blast freezer and high-cycle freezer doors need: leaf and frame rated for the room setpoint; heated floor threshold or ramp detail where specified; gasket and hardware that survive hundreds of cycles per day; and often a vestibule or air curtain when product loads on trolleys. Door area is small but leakage dominates envelope load when underspecified.",
    bodySections: [
      {
        h2: "Why is door setpoint mismatch common?",
        content:
          "Wall panels are ordered for −35 °C blast tunnel duty; door schedule still shows a +4 °C personnel door catalogue number because it was copied from another project. Gaskets harden or shrink; heaters if present are undersized. Specify door leaf insulation thickness and frame detail for the same design temperature as walls. Industrial doors product page lists cold room and freezer variants — match variant to room class, not only opening size.",
      },
      {
        h2: "How many cycles per day should you declare?",
        content:
          "A blast room with batch trolley traffic may see eighty openings per shift. Hardware and auto-closer specs rated for twenty cycles fail in months. Declare expected cycles when ordering — suppliers adjust hinge grade, closer model, and maintenance notes. High-cycle freezers without vestibule need faster-closing automation; manual held-open doors defeat wall thickness.",
      },
      {
        h2: "When is a vestibule worth the floor space?",
        content:
          "Two-door airlocks add floor area but cut infiltration load sharply when forklift traffic is continuous. Heat load calcs that ignore infiltration oversize compressors instead of fixing the door line — cheaper on paper, expensive on power. For small blast batches with low cycle count, a single high-spec door may suffice if pull-down duty is modelled with door open time.",
      },
      {
        h2: "What coordination does refrigeration need?",
        content:
          "Evaporator placement relative to door line affects frost throw on the opening. Floor heaters and drain details must be on the civil drawing before threshold cast. Commissioning should log pull-down with door cycling profile — failure here is often door leakage, not nameplate compressor capacity.",
      },
      {
        h2: "Key takeaways",
        content:
          "Door setpoint must match room design temperature. Declare daily cycle count for hardware selection. Vestibules beat oversized plant for busy freezers. Coordinate floor heat and drain before pour.",
      },
    ],
    keyTakeaways: [
      "Freezer doors must match wall design temperature.",
      "Cycle count drives hinge and closer specification.",
      "Vestibules reduce infiltration load on busy lines.",
      "Floor threshold heat belongs on civil drawings early.",
    ],
    datePublished: "2026-09-07",
    dateModified: "2026-09-08",
    relatedProducts: ["industrial-doors", "cold-room-panels"],
    relatedSolutions: ["cold-storage", "poultry-meat-processing"],
    relatedGuides: ["cold-storage-panel-thickness", "joint-systems-compared"],
    draft: false,
    updatedAt: "2026-09-08",
  },
  {
    slug: "handling-a-site-complaint",
    title: "Handling a Site Complaint on Panel Delivery or Performance",
    h1: "Handling a Site Complaint — Panel Supply Done Properly",
    seoTitle: "Handling Panel Site Complaints | PHOENIXX Blog",
    metaDescription:
      "Document damage before unload, measure gaps against drawings, and separate transit from spec issues — a practical site complaint process for panel buyers.",
    category: "Project Insights",
    authorSlug: AUTHOR,
    excerpt:
      "Site tempers run hot when a container arrives and something looks wrong. A fixed response sequence saves relationships and avoids guessing root cause.",
    quickAnswer:
      "On complaint: stop unload and photograph bundle condition with container doors open; compare panel marks to packing list before cutting straps; measure damaged lengths against order sheet; seal and store unaffected bundles; notify supplier with photos and piece numbers same day. Separate transit damage, missing pieces, and performance issues (temperature, joints) — each has a different remedy path.",
    bodySections: [
      {
        h2: "What should happen before straps are cut?",
        content:
          "Open container doors, photograph stack condition, note shifted bands or visible corner crush. If damage is obvious, do not discharge all bundles onto bare ground — moisture and further handling compound the claim. Mark affected bundle numbers on the delivery note before sign-off. Carriers and insurers look for same-day documentation; photos taken a week later are weak evidence.",
      },
      {
        h2: "How do you tell transit damage from spec error?",
        content:
          "Transit: facing dents, crushed corners, water staining on outer bundles. Spec error: correct-looking panels that do not match approved thickness on label, wrong cam-lock profile, or lengths that do not fit layout despite intact packing. Performance after install: frost at joints, failure to reach setpoint — usually installation, door, or thickness issue, not factory foam batch. Name the category before asking for replacement or credit.",
      },
      {
        h2: "What data should the supplier receive?",
        content:
          "Panel mark numbers, length and thickness from bundle label, quantity affected, and room location if already installed. For thermal complaints: design setpoint, recorded room temperature trend, door cycle estimate, and photos of joint lines showing frost or condensate tracks. Without that packet, any supplier is guessing — responses slow down.",
      },
      {
        h2: "How do we prevent repeat issues on the next container?",
        content:
          "Update packing note requirements: extra edge protection on long lengths, label format, discharge briefing. If root cause was spec mismatch, fix approval workflow — one signed layout before production. Complaints handled cleanly usually improve the next dispatch more than penalty clauses.",
      },
      {
        h2: "Key takeaways",
        content:
          "Photograph and document before full discharge. Classify transit, spec and performance separately. Send piece numbers and labels with every claim. Feed lessons into packing and drawing approval on the next order.",
      },
    ],
    keyTakeaways: [
      "Document container condition before cutting straps.",
      "Transit, spec and performance complaints need different fixes.",
      "Send panel marks, photos and quantities same day.",
      "Close the loop on packing and approvals for repeat orders.",
    ],
    datePublished: "2026-09-08",
    dateModified: "2026-09-07",
    relatedProducts: ["cold-room-panels", "puf-panels"],
    relatedSolutions: ["cold-storage"],
    relatedGuides: ["installation-sequence-mistakes", "evaluating-sandwich-panel-suppliers"],
    draft: false,
    updatedAt: "2026-09-07",
  },
  {
    slug: "when-to-specify-pir-over-puf",
    title: "When Should You Specify PIR Over PUF Panels?",
    h1: "When to Specify PIR Over PUF — A Buyer Decision Guide",
    seoTitle: "When to Specify PIR Over PUF | PHOENIXX Blog",
    metaDescription:
      "Fire performance, thickness headroom and temperature band — practical cases where PIR sandwich panels beat standard PUF on industrial and cold chain projects.",
    category: "Technical",
    authorSlug: AUTHOR,
    excerpt:
      "PIR is not automatically better than PUF. It wins in specific fire, thickness, and hygiene contexts — and costs more where those drivers do not apply.",
    quickAnswer:
      "Specify PIR when: you need lower flame spread or higher fire class on the core for insurer or code dialogue; headroom is fixed and you need a lower U-value at the same thickness as PUF; or the room is deep freeze with long continuous runs where PIR lambda helps plant sizing. Stay on PUF when the room is chill-only, fire requirement is satisfied by PUF system test, and budget is tight on m².",
    bodySections: [
      {
        h2: "What fire dialogue pushes buyers to PIR?",
        content:
          "Insurance or local fire officer asks for core reaction class better than standard PUF without moving to mineral wool. PIR typically improves reaction-to-fire behaviour versus PUF at similar thickness — not a replacement for a rated fire wall assembly. Read the comparison page for PUF vs PIR cold storage before you swap core on price alone.",
      },
      {
        h2: "When does thickness headroom force PIR?",
        content:
          "Retrofit freezer inside an existing shed with fixed clear height — stepping from 120 mm PUF to 100 mm PIR can recover internal volume while holding U-value. Verify with declared test values, not marketing adjectives. If height is not constrained, thicker PUF may still be cheaper landed.",
      },
      {
        h2: "Does deep freeze always need PIR?",
        content:
          "Not always. −25 °C freezers run successfully on high-density PUF worldwide. PIR helps when load calc is borderline and you cannot add thickness because of door height or rack layout. Blast tunnels below −30 °C with aggressive pull-down may justify PIR on ceiling where load peaks — engineer decision, not catalogue default.",
      },
      {
        h2: "What should you ask on the enquiry?",
        content:
          "Required fire class if any, design temperatures, internal height limit, and whether insurer has written to you about core type. Request side-by-side U-value at chosen thickness for PUF and PIR from the same manufacturer line — comparing across factories is weaker evidence.",
      },
      {
        h2: "Key takeaways",
        content:
          "PIR wins on fire class dialogue and tight headroom at same U-value. Chill-only rooms often stay on PUF economically. Deep freeze chooses PIR when thickness cannot grow. Compare U-value at fixed thickness from one production line.",
      },
    ],
    keyTakeaways: [
      "PIR helps fire class and fixed headroom cases.",
      "Chill rooms often remain on PUF at lower cost.",
      "Deep freeze uses PIR when thickness is capped.",
      "Compare declared U-values at the same thickness.",
    ],
    datePublished: "2026-09-09",
    dateModified: "2026-09-06",
    relatedProducts: ["pir-panels", "puf-panels"],
    relatedSolutions: ["cold-storage", "data-centres"],
    relatedGuides: ["fire-performance-insulated-panels"],
    draft: false,
    updatedAt: "2026-09-06",
  },
  {
    slug: "how-long-panel-quotes-stay-valid",
    title: "How Long Do Sandwich Panel Quotes Stay Valid?",
    h1: "How Long Should You Treat a Panel Quote as Valid?",
    seoTitle: "Panel Quote Validity Period | PHOENIXX Blog",
    metaDescription:
      "Steel coil, freight and currency move — what validity dates on panel export quotes mean and when to refresh pricing before award.",
    category: "Export & Logistics",
    authorSlug: AUTHOR,
    excerpt:
      "A quote dated three months ago is a reference point, not a locked price — especially when freight and coil surcharges moved since issue.",
    quickAnswer:
      "Most panel export quotes carry thirty to sixty day validity on ex-works panel price; freight is often shorter because vessel rates change weekly. After validity expires, refresh before PO — steel facing surcharge, foam chemical adjustment and ocean freight are the usual movers. Award on expired numbers without written extension invites dispute at proforma stage.",
    bodySections: [
      {
        h2: "What moves panel price between quote and award?",
        content:
          "Galvanised and PPGI coil indices shift month to month. Polyol and isocyanate inputs affect foam cost on some lines. These are smaller than freight swings on African lanes in tight container markets. A quote that excluded CFR freight entirely may double in landed cost when you finally book vessel — compare like-for-like Incoterms when checking if old price still holds.",
      },
      {
        h2: "Why is freight validity shorter?",
        content:
          "Ocean rates, bunker surcharges and space availability change faster than factory list pricing. Suppliers often requote freight within two weeks of sailing window confirmation. If your project slipped ninety days, assume freight is new money — not the footnote on page two of the old PDF.",
      },
      {
        h2: "What happens when layout changes after quote?",
        content:
          "Validity covers the same scope. Add a partition, change door size, or step thickness — that is a new quote even inside the calendar validity window. Treat layout approval as price lock point, not the first email enquiry.",
      },
      {
        h2: "What should buyers put in the PO?",
        content:
          "Reference quote number, date, Incoterm, currency, and explicit list of inclusions copied from the proforma. If validity passed, attach written extension email from supplier — verbal OK does not survive audit. For LC orders, align document dates with dispatch actually achievable under current production queue.",
      },
      {
        h2: "Key takeaways",
        content:
          "Panel ex-works validity is typically thirty to sixty days; freight shorter. Refresh after layout change regardless of date. Lock price at approved scope and written proforma. Do not award on expired freight lines.",
      },
    ],
    keyTakeaways: [
      "Ex-works panel quotes often valid thirty to sixty days.",
      "Freight repricing is faster — confirm before vessel booking.",
      "Scope change voids old price even inside validity window.",
      "PO must reference current proforma and extension if needed.",
    ],
    datePublished: "2026-09-10",
    dateModified: "2026-09-05",
    relatedProducts: ["puf-panels", "peb-prefabricated-buildings"],
    relatedSolutions: ["warehousing-logistics"],
    relatedGuides: ["evaluating-sandwich-panel-suppliers"],
    draft: false,
    updatedAt: "2026-09-05",
  },
  {
    slug: "dairy-chill-room-specification",
    title: "Dairy Chill Room Panel Specification — Practical Notes",
    h1: "Dairy Chill Room Specification — What Process Engineers Ask",
    seoTitle: "Dairy Chill Room Panel Spec | PHOENIXX Blog",
    metaDescription:
      "Milk reception temperature, wash-down facings, ante-room layout and panel hygiene details for dairy chill rooms in hot climates.",
    category: "Industry Applications",
    authorSlug: AUTHOR,
    excerpt:
      "Dairy chill is not a generic +4 °C room — warm milk ingress, CIP splash and forklift traffic change panel and door choices.",
    quickAnswer:
      "Dairy chill rooms typically hold +2 °C to +6 °C with frequent wash-down on lower walls. Specify food-safe facing finish on splash zones, coved internal corners, cam-lock or hygienic joint detail, and an ante-room when forklift traffic meets warm milk delivery. Size wall thickness for peak ingress load, not only steady-state storage.",
    bodySections: [
      {
        h2: "Why does warm milk ingress change the load?",
        content:
          "Steady-state calc at +4 °C with full storage assumes product is already cold. Reception bays pull warm milk in batches — pull-down load spikes when tankers arrive. Panels may be thermally fine while plant is undersized if only steady state was modelled. Share reception schedule and maximum warm product mass per hour with the refrigeration designer before thickness is frozen.",
      },
      {
        h2: "Which facing details matter for CIP and splash?",
        content:
          "Lower wall zones see chemical splash and hose impact. Smooth polyester or higher coat on internal face, coving at floor-wall junction, and seals that survive alkaline wash reduce mould and corrosion at joints. Cleanroom panel facing grades are not always required for dairy chill — but splash zone detail is stricter than dry warehouse partition.",
      },
      {
        h2: "How should ante-rooms be sized?",
        content:
          "One pallet door from ambient yard into +4 °C room without airlock loads infiltration every delivery. A small ante at +10 °C to +12 °C cuts frost on the inner door and stabilises product temp before entry. Floor space cost is real — so is compressor wear when ante is skipped on high-volume dairies.",
      },
      {
        h2: "What export notes apply for African dairy projects?",
        content:
          "Long transit to inland sites means install may start weeks after discharge — store bundles dry, label thickness clearly, and sequence install so reception room is closed before monsoon season storage on site. Dairy solution page maps typical product links; pair with cold storage thickness guide for setpoint bands.",
      },
      {
        h2: "Key takeaways",
        content:
          "Model peak warm ingress, not only storage steady state. Specify splash-zone facing and coving for wash-down areas. Use ante-room when forklift traffic is heavy from ambient. Protect export bundles until install in humid seasons.",
      },
    ],
    keyTakeaways: [
      "Peak milk ingress drives plant and sometimes thickness.",
      "Splash zones need durable internal facing and coving.",
      "Ante-rooms cut infiltration on busy reception docks.",
      "Export dairy projects need dry sequenced site storage.",
    ],
    datePublished: "2026-09-11",
    dateModified: "2026-09-04",
    relatedProducts: ["cold-room-panels", "cleanroom-panels", "industrial-doors"],
    relatedSolutions: ["dairy", "food-processing"],
    relatedGuides: ["cold-storage-panel-thickness", "cleanroom-panel-requirements"],
    draft: false,
    updatedAt: "2026-09-04",
  },
  {
    slug: "pre-shipment-inspection-checklist",
    title: "Pre-Shipment Inspection Checklist for Panel Export Orders",
    h1: "Pre-Shipment Inspection — Panel Export Checklist",
    seoTitle: "Panel Pre-Shipment Inspection | PHOENIXX Blog",
    metaDescription:
      "Bundle labels, thickness spot-check, packing photos and document alignment — what we verify before panel containers gate in at port.",
    category: "Company News",
    authorSlug: AUTHOR,
    excerpt:
      "We publish this checklist so buyers know what happens between final QA and container seal — and what to request if third-party inspection is required.",
    quickAnswer:
      "Before gate-in we verify: panel mark numbers match packing list; spot-check thickness and facing on sample bundles; edge protectors and banding per loading diagram; bundle labels show length, thickness and weight; commercial invoice and packing list piece counts align; photos archived for the order file. Third-party inspection can mirror this list — it does not replace drawing approval earlier in the process.",
    bodySections: [
      {
        h2: "What do we check on the production floor?",
        content:
          "Final dimensional sample on random panels from the order batch, facing coat code against PO, cam-lock engagement sample on one corner module where applicable. Density records stay in factory QA file — available on request, not emailed on every order by default. Damage from internal handling is corrected before pack — not at port.",
      },
      {
        h2: "What belongs in the packing bay?",
        content:
          "Bundle labels readable from outside stack, moisture barrier where monsoon dispatch requires it, edge protectors on long lengths, weight within container payload plan. Loading sequence matches diagram so first-needed panels are accessible if partial discharge occurs — rare, but planned.",
      },
      {
        h2: "Which documents are reconciled?",
        content:
          "Commercial invoice description, HS code, packing list carton/bundle count, and certificate of origin draft where applicable. Names and addresses match LC if letter credit is involved. Buyer clearing agent gets PDF set twenty-four hours before truck moves to port when email is on file.",
      },
      {
        h2: "Can buyers attend or appoint inspection?",
        content:
          "Factory visits by appointment when schedule allows. Third-party inspection agencies can witness the same checklist — buyer pays agency fee and books slot aligned to production completion. Inspection at port after gate-in catches carrier damage, not factory scope — both have a place.",
      },
      {
        h2: "Key takeaways",
        content:
          "QA covers dimensions, labels and packing before truck dispatch. Documents must match bundle counts before gate-in. Third-party inspection mirrors factory checklist — book against production finish. Port inspection addresses transit, not drawing approval.",
      },
    ],
    keyTakeaways: [
      "Random dimensional and facing checks before pack.",
      "Labels, protectors and banding per loading diagram.",
      "Invoice and packing list reconciled pre gate-in.",
      "Third-party inspection books against production completion.",
    ],
    datePublished: "2026-09-12",
    dateModified: "2026-09-03",
    relatedProducts: ["puf-panels", "cold-room-panels"],
    relatedSolutions: ["cold-storage"],
    relatedGuides: ["evaluating-sandwich-panel-suppliers", "installation-sequence-mistakes"],
    draft: false,
    updatedAt: "2026-09-03",
  },
];

export const ARTICLE_CATEGORIES = [
  "Technical",
  "Export & Logistics",
  "Industry Applications",
  "Project Insights",
  "Company News",
] as const;

export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[number];
