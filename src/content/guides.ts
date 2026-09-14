import type { GuideInput } from "./types";

export const guides: GuideInput[] = [
  {
    slug: "cold-storage-panel-thickness",
    name: "Cold Storage Panel Thickness",
    h1: "How to Choose Cold Storage Panel Thickness",
    seoTitle: "Cold Storage Panel Thickness Guide | PHOENIXX",
    metaDescription: "Select cold room panel thickness from room temperature, ambient climate and door load. Worked examples for chill, freezer and blast rooms.",
    relatedProducts: ["cold-room-panels","puf-panels","pir-panels"],
    relatedSolutions: ["cold-storage","dairy"],
    relatedComparisons: ["puf-vs-pir-panels"],
    quickAnswer: "Cold storage panel thickness follows design room temperature, not the product name. Chill rooms at +2 to +8 °C often start at 80–100 mm PUF; freezers at −18 to −25 °C need 120–150 mm; blast tunnels below −30 °C may need 150–200 mm. Confirm thickness with a heat load calculation before ordering.",
    bodySections: [
      {
        h2: "Start with room temperature, not product name",
        content: `Buyers often ask for thickness based on what they store — milk, ice cream, or frozen fish — but the refrigeration engineer sizes panels from the design room temperature and the heat ingress through walls, ceiling, floor and openings. A +4 °C chill room holding dairy needs less insulation than a −25 °C freezer holding the same product because the temperature difference to ambient is smaller. Blast freezing tunnels that pull product from +15 °C down to −35 °C in hours see peak load during pull-down; the steady-state thickness may still be set by the holding temperature after the blast cycle ends. Write the design condition on the enquiry: target air temperature, expected ambient (not average annual — use a hot-day design for tropical sites), and daily door cycles. Without those three numbers, any thickness recommendation is a guess.

Lighting load inside cold rooms adds steady heat — LED upgrades reduce load but specifiers often omit lux level on enquiries. Forklift battery charging in the same hall as a chill store adds ambient heat if not partitioned. Multi-temperature facilities should size each zone independently; sharing wall thickness across zones because one calc was done for the whole site leads to weak performance in the coldest box.`,
      },
      {
        h2: "Thickness bands by application",
        content: `The table below gives starting bands for PUF/PIR factory panels in moderate ambient (+30 to +35 °C external). Cold room specialists may adjust after formal load calculation.

| Room type | Typical setpoint | Starting thickness (PUF/PIR) |
| --- | --- | --- |
| Chill storage | +2 to +8 °C | 80–100 mm walls; 100–120 mm ceiling |
| Freezer | −18 to −25 °C | 120–150 mm walls; 150 mm ceiling |
| Deep freeze | −30 to −40 °C | 150–200 mm all surfaces |
| Blast chiller | Pull-down duty | Size for peak load; often 150 mm+ |

PIR cores reach lower U-values at the same thickness than standard PUF — useful when headroom is fixed. Floor insulation is often separate (XPS or similar) and not always included in panel kit quotes; confirm whether your supplier includes floor panels or expects a screed system.

Altitude changes ambient pressure and affects refrigeration equipment sizing more than foam lambda at typical site elevations. If your consultant models in SI units, convert imperial panel thickness carefully — 4 inch is 101.6 mm, not 100 mm. Blast freezers with product loaders introduce pulsed load during batch cycles; steady-state thickness may underperform during peak unless plant is oversized.`,
      },
      {
        h2: "Worked example: 500 m³ dairy chill room in Nairobi",
        content: `Room internal size 10 m × 10 m × 5 m (500 m³). Setpoint +4 °C, ambient design +32 °C, one personnel door and one pallet door with air curtain. Wall area roughly 200 m², ceiling 100 m². Starting specification: 100 mm PUF cam-lock walls (U ≈ 0.22 W/m²K) and 120 mm ceiling (U ≈ 0.18 W/m²K). Heat load calculation adds 15–25% for the pallet door cycling 40 times per day — if the calc shows borderline plant selection, stepping walls to 120 mm is cheaper than oversizing compressors for the next decade. In this example 100 mm walls passed the calc with standard 2 HP condensing unit duty; ceiling stayed at 120 mm because roof solar load adds daytime gain through the metal deck above.

Floor insulation was XPS 100 mm below screed in this project — panel quote excluded floor because buyer cast screed locally. Confirm whether your m² rate includes floor panels or only wall and ceiling kit. Nairobi ambient design +32 °C is conservative for night operation but matches peak afternoon load when trucks arrive.`,
      },
      {
        h2: "When thicker panels pay back",
        content: `Thicker panels cost more in steel, foam and freight weight. Payback appears when reduced compressor run hours offset the capital difference over 5–10 years — common in freezers where plant runs continuously. In single-shift chill rooms with minimal door traffic, the payback on jumping from 80 mm to 120 mm may never arrive. Thicker panels also help when external ambient is high (Gulf coast, East Africa lowland) or when the owner cannot service refrigeration frequently. Pair thickness decisions with door quality: a high-spec freezer wall with a poorly sealed door leaks more energy than a moderate wall with a proper cold-room door and vestibule.

Refrigeration audit meters on existing plants quantify savings better than theoretical U-value deltas alone. If audit is unavailable, assume envelope is 30–45% of load in well-sealed freezers and 15–25% in busy chill stores as a sanity check before upgrading walls.`,
      },
      {
        h2: "Why overspecifying thickness wastes money",
        content: `Specifying 150 mm walls for a +6 °C vegetable chill room in a temperate climate is a common over-reaction to "cold storage" as a label. The extra 40 mm of foam adds panel cost, reduces internal clear height, increases container weight on export, and may force heavier cam-lock hardware — without moving the compressor duty enough to notice on the electricity bill. Engineers sometimes copy a freezer spec from an older project "to be safe." Safer is to run the heat load with realistic door and lighting loads, then pick the thinnest build-up that meets plant efficiency targets. If the calc shows 80 mm achieves the required U-value with margin, 120 mm is waste unless future use might drop temperature.

Internal clear height loss from thicker ceiling panels can force taller building or reduce racking levels — include height trade-off in cost comparison, not only m² panel price.`,
      },
      {
        h2: "Data you need before quoting",
        content: `Send internal dimensions (L × W × H), design room temperature, ambient design temperature, door count and approximate openings per day, floor type (insulated or not), and whether the room sits inside a building or outdoors under sun. Note altitude if above 1 500 m — air density affects refrigeration equipment, not panel U-value directly, but the overall system sizing may change. Ask the supplier to state assumed ambient if they return a thickness recommendation without your inputs.

Include intended product turnover if pull-down load matters — dairies receiving warm milk need different plant than stable +4 °C storage.`,
      },
      {
        h2: "Ceiling versus wall thickness on the same room",
        content: `Ceilings often carry equal or greater thickness than walls because roof solar load and warm air stratification add heat above the product level. A freezer with 120 mm walls may still need 150 mm ceiling if the roof sits under direct sun or a warm mezzanine. Internal partitions between zones at different temperatures need thickness sized for the colder side plus a margin for the partition line load. When a chill room sits inside an ambient warehouse, the shared wall may need insulation on one face only — do not double-count that wall in heat load if the outer face sees +25 °C warehouse air rather than outdoor ambient.`,
      },
      {
        h2: "Export and site handling implications",
        content: `Thicker panels increase bundle weight and container cube — freight quotes should refresh when thickness steps up. Long cam-lock panels at 150 mm flex more during unload; use spreader bars. Mark panel thickness on packing lists so site crews do not mix 100 mm and 120 mm bundles on the same wall run. For Kenya and East Africa corridors, allow extra curing time before dispatch in monsoon season; foam moisture content affects cam-lock fit if panels absorb humidity before install.`,
      },
      {
        h2: "Coordination with refrigeration contractor",
        content: `Panel supplier and refrigeration contractor must share design temperature and pull-down duty before either locks specification. We see projects where walls are ordered at 100 mm while plant is sized for 120 mm envelope — room never pulls to setpoint on hot afternoons. Request one combined submittal showing wall U-value used in load calc matches panel order. Commissioning should log time-to-temperature with empty room before product load — failure here is often thickness or infiltration, not compressor nameplate. Include door manufacturer in the same coordination call; door area is small but leakage dominates when gaskets are wrong.`,
      }
    ],
    limitations: "Thickness bands here are indicative for budgeting — not a substitute for project-specific heat load software or local building rules. U-values vary by manufacturer batch and facing. We do not publish third-party test certificates on this page; request current reports with your quotation. Blast freezer and controlled-atmosphere rooms need specialist design beyond wall thickness alone. Values and examples are indicative for cold storage panel thickness planning — confirm against project drawings, local codes and supplier test reports before purchase. Contact our export team with your application details if you need a written recommendation tied to a quotation.",
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "puf-core-density-explained",
    name: "PUF Core Density Explained",
    h1: "PUF Core Density — What the Number Means on Site",
    seoTitle: "PUF Core Density Explained | PHOENIXX",
    metaDescription: "Understand PUF density (kg/m³), how it affects strength and thermal conductivity, and what to ask your supplier before specifying sandwich panels.",
    relatedProducts: ["puf-panels","cold-room-panels","roofing-panels"],
    relatedSolutions: ["cold-storage","warehousing-logistics"],
    relatedComparisons: ["puf-vs-pir-panels"],
    quickAnswer: "PUF core density is cured foam mass per cubic metre, typically 38–42 kg/m³ for sandwich panels. Higher density improves compressive strength and screw pull-out but adds cost. For cold rooms and roofs, 40 kg/m³ nominal is the usual target. Ask for declared density on the test report, not marketing copy.",
    bodySections: [
      {
        h2: "What density measures in a sandwich panel",
        content: `Polyurethane foam is blown into a continuous laminator between two steel coils. Density is controlled by the chemical ratio, blowing agent and line speed. In a finished panel the core must resist compression from foot traffic on roofs, clip loads on walls, and cam-lock tongue pressure in cold rooms. Too low a density feels light and may crush at joints; too high adds raw material cost without proportional thermal benefit. Density is reported in kg/m³ on factory quality records — it is not the same as panel weight per m², which includes both steel facings.

Closed-cell content in PUF affects both density and lambda — suppliers optimizing lambda may adjust formulation within the same nominal density band.`,
      },
      {
        h2: "Typical density ranges in the market",
        content: `Most Indian and export-oriented PUF panel lines target 38–42 kg/m³ for building panels. Cold room kits sometimes specify minimum 40 kg/m³ for better lock engagement. Structural roof panels carrying maintenance loads may use 42–45 kg/m³ in the same thickness. PIR foam often sits slightly higher in density for equivalent strength because of the closed-cell structure. When comparing quotations, check whether both suppliers quote the same nominal density — a 38 kg/m³ panel is not directly interchangeable with 42 kg/m³ for span tables that assume minimum core strength.

Imported panels and domestic panels may use different blowing agents; density comparison across countries should use test reports from the same standard.`,
      },
      {
        h2: "Worked example: comparing two supplier datasheets",
        content: `Supplier A quotes 100 mm PUF wall at 40 kg/m³ core, U-value 0.22 W/m²K. Supplier B quotes the same thickness at "high density foam" without a number, U-value 0.24 W/m²K. Before price comparison, request Supplier B's declared core density and compressive strength at 10% deformation. If B is 36 kg/m³, the higher U-value may reflect poorer foam or a conservative test date — not a reason to pay more. If B is 44 kg/m³ with similar U-value, the extra density may help on a long-span roof but adds little to a partition wall. In this example Supplier A matched the project need; B's premium was not justified for a standard chill store partition.

When U-value differs at same thickness, check test date — aged foam samples can read slightly better than fresh line samples.`,
      },
      {
        h2: "Density versus thermal conductivity",
        content: `Thermal conductivity (lambda, W/mK) and density move together only up to a point. Very low density foam has more open cells and higher lambda; very high density adds polymer content that also conducts slightly more heat. The sweet spot for building panels is the band where lambda is stable and compressive strength meets the fixing schedule. Do not assume "denser equals warmer" — check the declared U-value for the full build-up including facings. Third-party tests to EN 14509 or equivalent report both density and lambda on the same sample.

Facing steel thickness adds to overall panel rigidity; do not use density alone to predict wind deflection.`,
      },
      {
        h2: "When chasing higher density adds little value",
        content: `Interior partition walls in a warehouse — no walk-on load, no cam-lock, ambient both sides — do not need 45 kg/m³ foam. Paying for structural density on a non-structural application is a frequent overspec. Similarly, specifying "minimum 42 kg/m³" on every line item when only the roof requires it inflates the bill. Match density to load case: roof and heavy cam-lock corners at 40–42 kg/m³; standard wall infill at declared factory standard. If an engineer copies a roof spec onto all elevations, ask which surfaces actually see load or repeated handling.

Mezzanine floors above insulated rooms transfer load through structure — density in wall panel does not carry floor load.`,
      },
      {
        h2: "Questions to put on your enquiry",
        content: `Ask for: nominal core density (kg/m³), test standard reference, compressive strength at 10% deformation, and whether density is measured per production shift or per order batch. Request the facing thickness and steel grade on the same line — density alone does not define panel stiffness. For export orders, confirm density is measured before panels are cut to length, not on offcuts alone.

Ask whether density is guaranteed minimum or typical — contract language should match.`,
      },
      {
        h2: "How density is measured in the factory",
        content: `Core samples are cut from production panels or free-rise foam blocks and weighed against volume per EN ISO 845 or equivalent. Continuous lines take samples every shift or per order batch depending on QA protocol. A single off-cut from a damaged panel is not representative if the foam collapsed during impact. Buyers auditing suppliers should ask when the sample was taken relative to panel manufacture date on the label.`,
      },
      {
        h2: "Density on the purchase order",
        content: `Write "minimum declared core density 40 kg/m³ per test report reference" rather than "high density foam." Tie acceptance to the same test standard quoted in the datasheet. If thickness tolerance is ±2 mm, density variation still affects thermal performance slightly — reject only when outside contracted minimum, not when at minimum. Store audit copies of density reports with project files for insurance or HACCP audits that trace building materials.`,
      },
      {
        h2: "Field checks without a laboratory",
        content: `Site teams cannot measure density precisely without a sample and scale, but gross indicators help: panels that feel unusually light for thickness may be below spec; delamination at edges suggests poor rise or handling damage. Compare weight per panel against supplier shipping list if available — large variance between bundles warrants hold. For dispute resolution, third-party lab tests on retained sample cut from delivered panel are standard; define who pays for test in contract before shipment. Photo-document bundle labels and steel stamp on arrival for traceability back to production batch.`,
      },
      {
        h2: "Linking density to screw pull-out on roofs",
        content: `Roof fixings rely on foam core surrounding the screw shank — low density foam strips under fastener heads during uplift tests. Suppliers publish pull-out values by thickness and density; using pull-out from 40 kg/m³ table on 36 kg/m³ delivered batch is unsafe. Site pull tests on first five fixings in corner zone validate supplier data on critical projects. Inquiry should ask for pull-out test method reference if coastal wind governs. Density and pull-out together determine purlin spacing in wind zones more often than deflection alone in short spans. When re-roofing over old purlins, confirm screw length matches new panel thickness without bottoming out in thin foam near old screw holes.`,
      },
      {
        h2: "Retention samples on export orders",
        content: `Retain one full panel length from first delivery for dispute resolution — store flat and dry. Label with batch and date matching packing list. If density dispute arises, test house cuts from retained sample without arguing over which on-site panel was representative. Contract clause for retained sample location (buyer warehouse vs third party) avoids stalemate. Some buyers photograph foam cross-section at cut ends on arrival — irregular cell structure visible in photo supports later lab claim. This practice costs nothing and shortens resolution if batch is off-spec.`,
      }
    ],
    limitations: "Density values on this page reflect common factory practice — your supplier's declared test report governs acceptance. We do not guarantee lambda or density for every production batch without project-specific documentation. Structural design for wind and seismic load remains the responsibility of the project engineer. Values and examples are indicative for puf core density explained planning — confirm against project drawings, local codes and supplier test reports before purchase. Contact our export team with your application details if you need a written recommendation tied to a quotation.",
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "u-values-and-running-cost",
    name: "U-Values and Running Cost",
    h1: "U-Values and Cold Room Running Cost",
    seoTitle: "U-Values and Running Cost | PHOENIXX",
    metaDescription: "Link panel U-value to compressor load and electricity cost. Compare thickness options with a simple payback method for cold storage envelopes.",
    relatedProducts: ["puf-panels","pir-panels","cold-room-panels"],
    relatedSolutions: ["cold-storage","food-processing"],
    relatedComparisons: ["puf-vs-pir-panels"],
    quickAnswer: "U-value (W/m²K) measures heat flow through a panel build-up — lower is better. A 100 mm PUF wall near 0.22 W/m²K loses less heat than 80 mm at 0.28 W/m²K. Running cost also depends on doors, setpoint and plant efficiency. Model panel cost and energy savings over five to ten years.",
    bodySections: [
      {
        h2: "U-value in plain language",
        content: `U-value is the overall heat transfer coefficient through a panel assembly including facings and core. It combines conduction through the metal and foam with surface effects. Lower U-value means less heat enters a cold room (or leaves a heated space) per square metre for each degree of temperature difference. Manufacturers publish U-values by thickness — always read whether the number is for wall or roof build-up and which test age (foam can improve slightly after curing). U-value alone does not size refrigeration plant; total load includes infiltration, product, lighting, and defrost.

Surface coefficients inside cold rooms differ from ambient walls — manufacturer U-values assume standard indoor and outdoor films.`,
      },
      {
        h2: "How thickness changes U-value",
        content: `Doubling foam thickness does not halve U-value because the steel facings contribute a fixed thermal resistance. Typical progression for PUF walls: 50 mm ≈ 0.36, 80 mm ≈ 0.28, 100 mm ≈ 0.22, 120 mm ≈ 0.18 W/m²K — indicative only. PIR at 80 mm may match PUF at 100 mm. When comparing cores, convert to the same thickness and facing spec before judging running cost impact.

| Thickness | Indicative PUF U (W/m²K) | Indicative PIR U (W/m²K) |
| --- | --- | --- |
| 80 mm | 0.28 | 0.24 |
| 100 mm | 0.22 | 0.19 |
| 120 mm | 0.18 | 0.16 |

Use supplier-declared values for quotations; the table is for orientation.

Roof U-values include slope and sometimes air gap above ceiling — wall table values are not interchangeable.`,
      },
      {
        h2: "Worked example: freezer wall upgrade payback",
        content: `Existing −20 °C freezer, 400 m² wall area, 100 mm PUF (U = 0.22). Ambient +30 °C, plant runs 8 000 h/year, electricity 0.12 USD/kWh, approximate envelope load share 35 kW average. Upgrade option: 120 mm PUF (U = 0.18), extra panel cost USD 12 000 installed. Rough envelope saving ~15% of envelope load → ~5 kW average → ~40 000 kWh/year → ~USD 4 800/year saved. Simple payback ~2.5 years before maintenance benefits. If the room opens doors 200 times daily, infiltration dominates and wall upgrade payback stretches beyond five years — fix doors first. This example shows why load software beats rules of thumb.

Sensitivity: if electricity tariff doubles, payback halves — model tariff escalation if grid is subsidised today.`,
      },
      {
        h2: "What U-value does not capture",
        content: `Thermal bridges at floor tracks, door frames, and pipe penetrations add load beyond calculated U × area. Poorly foamed cam-lock gaps can add 5–10% to real consumption. Solar gain on a roof under direct sun exceeds steady-state U-value models unless external shading or ventilated air gap is modelled. Aging foam and damaged facings degrade performance over years — maintenance matters as much as initial spec. Running cost also depends on COP of compressors, head pressure control, and whether defrost is electric or hot gas.

Product respiration heat from stored fruit generates load unrelated to envelope U-value.`,
      },
      {
        h2: "Avoid over-specifying for marginal U-value gains",
        content: `Moving from U 0.22 to 0.18 on walls that represent only 40% of total load saves a fraction of the headline percentage. Specifying 150 mm walls to chase U 0.14 when doors leak is poor economics. Some buyers request "the best U-value available" without a payback threshold — suppliers should push back with load context. If annual energy saving is below 3% of panel upgrade cost, the project budget is better spent on doors, vestibules, or variable-speed condensers.

Lifecycle costing should include panel replacement at year 20 if facing warranty expires — seldom changes thickness choice but affects NPV.`,
      },
      {
        h2: "Inputs for a meaningful comparison",
        content: `Provide room dimensions, setpoint, ambient design, operating hours, door traffic estimate, and current or proposed plant kW. Ask for U-values at declared thickness from the same test date for all options. Request separate line pricing so you can compare incremental cost per 0.01 W/m²K improvement — when the curve flattens, stop adding thickness.

State whether compressors are ammonia or HFC — COP curves differ and change savings calc.`,
      },
      {
        h2: "Relating envelope load to compressor selection",
        content: `Envelope U-value contributes one term in total refrigeration load. Product load, infiltration, lighting and defrost often dominate in busy chill stores. A 10% improvement in wall U-value might translate to 3–4% total plant energy if doors drive half the load. Use load software that separates components so capital spend targets the largest term. When upgrading an existing room, measure actual run hours before modelling — occupancy may differ from design.`,
      },
      {
        h2: "Tariff and maintenance factors",
        content: `Electricity tariffs with peak demand charges penalise oversized compressors that short-cycle after over-insulating a small room. Maintenance cost rises with compressor count — thicker panels that allow a single-stage plant to suffice can reduce service contracts. Include defrost energy in running cost models for freezer evaporators; it is independent of wall U-value but affects payback comparisons between insulation and door upgrades.`,
      },
      {
        h2: "Reporting U-value in submittals",
        content: `Architectural submittals should quote U-value at the same thickness and facing as structural schedule — swapping 0.5 mm for 0.4 mm facing changes declared U slightly. Include reference test standard and date on submittal cover sheet so consultant compare like with like. Value engineering that steps down thickness must trigger refrigeration consultant review, not only cost report. Some green building schemes grant credits for improved envelope — verify panel test age meets scheme rules. Keep one panel label from site in project file linking batch to test report number for future audit.`,
      },
      {
        h2: "Benchmarking against existing utility bills",
        content: `Owners upgrading envelope should collect twelve months of kWh and operating hours before modelling savings — assumed 8760 h/year operation overstates payback if room runs single shift. Normalize bills for production volume changes year on year. Compare similar rooms on same site with different thickness if available — real side-by-side beats catalogue U-value for convincing finance team. Submetering one cold room circuit isolates envelope improvements from plant changes elsewhere. Document baseline month in upgrade proposal so post-install review has reference. If savings do not appear, check door seals and defrost schedule before blaming panel supplier.`,
      },
      {
        h2: "Presenting options to non-technical stakeholders",
        content: `Finance teams prefer simple payback over engineering units — translate U-value step into annual currency saved using consultant load output. Show three options (base, +20 mm, +40 mm) with incremental cost and savings so decision is not binary thickest vs thinnest. Highlight non-energy benefits where real: thicker ceiling may allow smaller plant room footprint. Avoid promising exact percentage savings without measurement plan — include post-install review in project schedule. Export buyers face currency risk — express panel upgrade cost and savings in same currency as loan repayment.`,
      },
      {
        h2: "Integrating envelope data into CAPEX models",
        content: `Capital expenditure models for cold chain projects should line-item panel cost against refrigeration plant cost — sensitivity shows which line responds to thickness change. Spreadsheet scenario at 0.20 vs 0.24 W/m²K on same wall area quantifies kWh delta when consultant provides factor. Include refrigerant type GWP if carbon reporting required — envelope savings may support green finance application. Depreciation period for panels may differ from plant — finance team treats separately. Export duty and freight step up with thickness — CAPEX model must refresh panel line when thickness changes, not only plant line.`,
      }
    ],
    limitations: "Payback examples use simplified assumptions — actual refrigeration load requires qualified software and local tariff structures. U-values cited are indicative; use supplier test reports for contract. We do not size compressors or guarantee energy savings on this page. Values and examples are indicative for u-values and running cost planning — confirm against project drawings, local codes and supplier test reports before purchase. Contact our export team with your application details if you need a written recommendation tied to a quotation.",
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "fire-performance-insulated-panels",
    name: "Fire Performance of Insulated Panels",
    h1: "Fire Performance of Insulated Sandwich Panels",
    seoTitle: "Fire Performance Insulated Panels | PHOENIXX",
    metaDescription: "Fire ratings, reaction to fire classes and core choice for PUF, PIR and rockwool panels. What factory tests mean and what they do not prove on site.",
    relatedProducts: ["fire-rated-panels","rockwool-panels","pir-panels"],
    relatedSolutions: ["data-centres","hospitals"],
    relatedComparisons: ["pir-vs-rockwool-panels"],
    quickAnswer: "Sandwich panel fire performance depends on core type, facing thickness and the complete wall or roof system — not the panel alone. PUF and PIR foam cores are combustible; rockwool is non-combustible. Factory reaction-to-fire classes (e.g. B-s1,d0) describe small-scale tests. Compartment fire resistance (30–120 minutes) needs a certified system including joints, fixings and penetrations.",
    bodySections: [
      {
        h2: "Reaction to fire versus fire resistance",
        content: `Reaction to fire describes how a material contributes to flame spread and smoke on a test specimen — classes like A1 (non-combustible) through F. Fire resistance (REI or EI) describes how long a built assembly maintains integrity and insulation in a furnace test. A B-s1,d0 foam panel may still fail a 60-minute fire wall requirement unless installed as part of a tested system with specific joint details and fixings. Architects often ask for "A2 panels" when the code actually requires a 90-minute compartment wall — different tests, different suppliers.

Smoke toxicity classes (s1, s2, s3) matter for escape routes — not only flame spread.`,
      },
      {
        h2: "Core behaviour in a fire",
        content: `PUF and PIR char and generate combustible gases under heat; PIR has somewhat better high-temperature behaviour than standard PUF but is not non-combustible. Rockwool cores do not propagate flame inside the core but still need correct facings and fixings to achieve a rated wall. Mixed buildings sometimes use rockwool on escape routes and PUF in cold stores — document the transition so inspectors see a deliberate strategy, not an ad hoc swap.

| Core | Combustibility | Typical reaction class | Notes |
| --- | --- | --- | --- |
| PUF | Combustible | B-s2,d0 to B-s1,d0 | Common cold room core |
| PIR | Combustible | B-s1,d0 common | Improved char stability |
| Rockwool | Non-combustible | A1 core | Heavier; lower lambda |

PIR char layer slows but does not stop fire spread if facing breaches — integrity depends on steel remaining attached.`,
      },
      {
        h2: "Worked example: separating generator room from office",
        content: `Single-storey logistics hub: 60-minute fire separation between diesel generator room and open office. Code asks for REI 60 wall. PUF sandwich panel alone is not automatically REI 60 — supplier proposes rockwool panel system tested as EI 60 with specific track, intumescent seal at head, and stainless fixings at 600 mm centres. Cold store on the opposite side of the site uses 100 mm PUF because no fire wall rating is required between chilled hall and ambient warehouse when distance and detection meet local rules. Using rockwool everywhere would add cost and weight without benefit on unrated internal partitions.

Local authority may accept equivalency report importing foreign test to local code — budget consultant time.`,
      },
      {
        h2: "Joint and penetration details that fail audits",
        content: `Fire stops fail at cable trays, PVC pipes, and unsealed cam-lock gaps. Inspectors look for continuous linear gap seal matched to the test report — generic silicone is not acceptable unless listed. Roof-to-wall junctions need the same fire strategy as the wall system. Penetration kits must be applied on both sides where the test detail shows. MEP contractors cutting panels after fire stopping voids the system warranty.

Cable trays running horizontally through rated walls need listed fire stop pillows rated for the same period.`,
      },
      {
        h2: "When a higher rating than code requires is wasted",
        content: `Specifying REI 120 rockwool walls where local code demands REI 60 doubles material and structural load for no compliance gain. Some buyers request "non-combustible panels throughout" because of insurance questionnaires — insurance and code may differ; clarify with the underwriter before replacing all PUF cold rooms with rockwool. Data halls sometimes over-specify fire performance on internal partitions that are not part of the rated escape path.

Tenant fit-out guidelines sometimes exceed code — clarify whether insurance or statute drives spec.`,
      },
      {
        h2: "Documentation to request from the supplier",
        content: `Ask for the full test report number, scope (wall vs roof), maximum span tested, joint detail drawing, and list of compatible fixings. Confirm whether the report is valid in your jurisdiction or needs a local engineer's equivalency letter. For export projects, send the report to the consultant before panels are fabricated — retrofits are expensive.

Photograph approved joint detail on site and attach to O&M manual for future tenant changes.`,
      },
      {
        h2: "Insurance and insurer questionnaires",
        content: `Insurers may ask about foam core type and whether panels are FM or LPCB listed — a listing that applies in one market may not transfer. Answer questionnaires with test report numbers, not generic "fire rated panel" language. Cold stores in mixed-use buildings sometimes trigger enhanced requirements; clarify with broker before specifying rockwool on cold rooms that do not need fire resistance.`,
      },
      {
        h2: "Maintenance after partial fire or hot work",
        content: `Hot work near PUF panels requires fire watch and often replacement of heat-affected panels — charred foam loses structural bond to facings. Keep spare panels or record batch for colour match. After any fire event, assess whether joint seals survived; smoke travels through cam-lock gaps if intumescent detail was absent.`,
      },
      {
        h2: "Maintaining fire strategy through tenant changes",
        content: `Tenant fit-out often punctures rated walls for cables and pipes without fire stop — building owner should maintain drawing register of rated lines and inspect after each tenant. Cold store operator adding an internal office inside envelope may create compartment line through existing PUF wall; fire strategy must be redrawn. Training maintenance staff not to store combustibles against foam panel walls reduces fire load even where rating is not required. Sprinkler activation on foam roof may require cleanup and panel replacement — discuss with insurer whether foam panels are acceptable under sprinkler design in your region.`,
      },
      {
        h2: "Export markets and local approval paths",
        content: `Test reports from Indian or European labs may need local engineer endorsement in African markets — budget time for equivalency letter before customs clearance of fire-rated systems. Some ports inspect fire documentation on rated buildings; missing report number delays clearance even when panels are standard PUF cold room type. Clarify with consultant whether local fire authority inspects installed joint detail or only paper submittal. Mixed shipments of rockwool fire wall panels and PUF cold panels should be labelled separately on packing list to avoid confusion at site about which detail applies where.`,
      },
      {
        h2: "Temporary partitions during construction",
        content: `Construction phase often uses uncertified temporary foam barrier — ensure temporary wall is replaced before occupation certificate. Fire inspector may not distinguish temp from permanent — clarify on drawing register. Hot work permit near PUF during fit-out requires fire watch and often water blanket — include in contractor safety plan. Do not store combustible packaging against completed foam wall in warm corridor — ignition source during snagging causes disproportionate damage. Handover should remove temp partitions and update fire strategy drawing to as-built rated lines only.`,
      },
      {
        h2: "Coordination with electrical and detection systems",
        content: `Detection and suppression layout must respect rated wall lines — moving detector without updating fire drawing violates compartment strategy. Cable penetration fire stop product must match wall test detail brand where specified — mixing brands voids system. Emergency lighting on escape route through rated wall needs door vision panel or separate circuit path — panel wall cannot be ad hoc drilled after rating cert issued. Fire damper through rated panel assembly needs listed assembly, not field improvised sleeve. Early MEP clash review on rated lines saves rework when panels already installed.`,
      },
      {
        h2: "Summary for specification writers",
        content: `Write fire requirement as tested system reference where rated, and reaction class where partition unrated. Avoid blanket "non-combustible panels" language — rockwool core still has steel facings and joint materials with their own classification. Cross-reference door and panel ratings on same schedule line only when tested together. Submittal review checklist: report number, scope, max span, joint detail page, compatible fixings list, installer qualification note if any.`,
      }
    ],
    limitations: "Fire regulations vary by country and building use — verify with the project fire engineer. Test classifications on this page are illustrative, not project certifications. We supply panels as components; rated systems require correct installation by qualified contractors. Values and examples are indicative for fire performance of insulated panels planning — confirm against project drawings, local codes and supplier test reports before purchase. Contact our export team with your application details if you need a written recommendation tied to a quotation.",
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "joint-systems-compared",
    name: "Joint Systems Compared",
    h1: "Sandwich Panel Joint Systems Compared",
    seoTitle: "Panel Joint Systems Compared | PHOENIXX",
    metaDescription: "Cam-lock, tongue-and-groove, concealed screw and standing seam joints for insulated panels — thermal bridges, hygiene and install speed compared.",
    relatedProducts: ["cold-room-panels","cleanroom-panels","wall-panels"],
    relatedSolutions: ["cold-storage","pharmaceutical-cleanroom"],
    relatedComparisons: [],
    quickAnswer: "Joint choice drives air leakage, thermal bridging and cleanability. Cam-lock suits modular cold rooms with frequent disassembly. Tongue-and-groove with concealed clips suits long wall runs in factories. Standing seam roof joints handle expansion on long spans. No single joint wins every application — match the joint to room temperature, hygiene class and whether panels will be relocated.",
    bodySections: [
      {
        h2: "Why the joint matters as much as the core",
        content: `The foam core may deliver the advertised U-value, but heat and moisture travel through gaps at joints faster than through intact panel. Air leakage from poorly engaged cam locks raises refrigeration load and causes frost at cracks in freezers. In cleanrooms, joints are wipe-down surfaces — ledges collect powder and violate audit photos. Joint type also dictates install speed and whether unskilled teams can relocate a room. Pick the joint before arguing about foam density.

Acoustic performance also leaks at joints — STC rating of panel field is meaningless if gaps whistle.`,
      },
      {
        h2: "Common joint types and where they fit",
        content: `Cam-lock: hook-and-pin engagement along panel length; common in cold room kits; allows disassembly; requires trained fitters for square alignment. Tongue-and-groove with concealed clip: used on long industrial walls and roofs; faster on straight runs; less suited to repeated disassembly. Standing seam roof: mechanical seam between trapezoidal profiles; handles thermal expansion on 12 m+ bays. Secret-fix wall: clips hidden in groove; clean aesthetic for offices and showrooms.

| Joint | Best for | Weak point |
| --- | --- | --- |
| Cam-lock | Modular cold rooms | Misalignment if floor not level |
| Tongue-and-groove | Factory walls/roofs | Long straight runs only |
| Standing seam | Long roof spans | Complex at hips and valleys |
| Secret-fix | Partitions, offices | Not for freezer vapour load alone |

Hidden-fix walls may need internal access for clip tightening — plan maintenance before closing services.`,
      },
      {
        h2: "Worked example: pharmaceutical corridor wall",
        content: `ISO 8 corridor, 40 m run, no disassembly planned, daily wash-down. Cam-lock would leave more internal ledges than tongue-and-groove with flush cap strips. Specified 50 mm PIR secret-fix vertical panels with silicone-free gasketed vertical joint cover approved by QA. Cold store adjacent still uses cam-lock for modularity. Mixing joint types on one fire compartment line required a detail drawing at the interface — plan that junction before ordering two panel systems.

QA may require same cap profile colour as wall facing — order caps with batch-matched coating.`,
      },
      {
        h2: "Thermal bridge and air leakage risks",
        content: `Metal-to-metal contact at joints creates linear thermal bridges. Some systems include plastic breaker clips or foam-injected keys to reduce bridging. In freezers, vapor seal mastic at floor and ceiling tracks is mandatory regardless of joint type. Blower-door testing is rare on small cold rooms but reveals leakage at corners — corners get extra attention during install. Roof eaves are another path: panel-to gutter detail must match the roof joint spec.

Infrared thermography during commissioning shows joint leaks before product load.`,
      },
      {
        h2: "Do not over-specify cam-lock where it slows production",
        content: `Using cam-lock panels on a 120 m straight processing hall because "cold room panels are better" slows install and adds cost versus clip-fixed wall panels. Cam-lock shines when rooms reconfigure or expand; fixed halls benefit from continuous wall runs. Similarly, specifying standing seam roof joints on a 8 m span shed adds seam labour without expansion benefit. Match joint complexity to geometry and lifecycle.

Labour cost per m² install varies more by joint type than material cost on long runs.`,
      },
      {
        h2: "Site checks after the first row is fixed",
        content: `Verify sole plate level and first corner square before the second row. Check cam-lock engagement audibly clicks along full length. Confirm vapor seal continuity at floor track before panels cover it. Photograph joint details before closing ceiling — useful for warranty claims. Reject panels with crushed tongues from improper handling; they will not seal.

Laser check first row level — cumulative error is visible by panel five if ignored.`,
      },
      {
        h2: "Hygiene audits and joint cleaning",
        content: `FDA and EU hygiene audits photograph joints at random — cap profiles must survive brush cleaning without sharp edges that cut gloves. Document approved cleaning agents so cap coatings are not damaged by chlorinated compounds. Replace damaged cap strips before audit rather than silicone over cracks; auditors flag ad hoc sealant.`,
      },
      {
        h2: "Relocating modular rooms",
        content: `Cam-lock rooms disassemble for relocation if panels were labelled and stored flat. Tongue-and-groove industrial panels are poor candidates for reuse unless lengths match the new layout. Budget new vapor seal and corner hardware on relocation — pins wear after two assembly cycles on some systems.`,
      },
      {
        h2: "Selecting joint type in the enquiry document",
        content: `State on RFQ whether room is relocatable, required hygiene class, design temperature, and expected internal wash pressure. Suppliers propose joint system from those four inputs — omitting relocation need may push cam-lock when fixed clip wall would install faster. For export kits, joint hardware (pins, caps, coving) should be counted as line items so customs value matches invoice. Mixed suppliers for panels and doors often fail at interface — prefer door supplier who has detail drawing for your panel profile or single source for both.`,
      },
      {
        h2: "Cost and time comparison on a 200 m² cold room",
        content: `Cam-lock kit for 200 m² chill room might install in four days with trained crew; clip-fixed wall of same area without disassembly need may install in three days but cannot relocate later. Labour rate difference often exceeds material joint premium — evaluate total installed cost. Export projects should include install time in project schedule; cam-lock waiting for ceiling support delays follow-on trades if sequence ignored. Include joint consumables (pins, foam, mastic) in BOQ — omitted consumables cause site purchase delays. Supplier kit list should match joint type quoted; mixed pins from incompatible systems fail engagement silently.`,
      },
      {
        h2: "Acoustic and wash-down joint variants",
        content: `Food plants needing acoustic attenuation between hall and office may specify double-wall air gap system — different joint kit than single skin cold room. Wash-down pressure rating of cap profile should be stated in Pa if QA requires — standard caps may deflect under high-pressure hose. Joint colour contrast aids audit photography — white cap on white wall hides gaps; light grey cap optional where QA prefers visible joint line for inspection. Export orders should pack cap strips in same container as panels to avoid port delay on second shipment.`,
      },
      {
        h2: "Warranty scope for joint performance",
        content: `Panel warranty often excludes joint leakage if install not by approved method — read warranty footnote on cam-lock engagement and vapor mastic brand. Supplier may warrant material but not air leakage rate unless install certified — clarify before bid. Photographic install record supports warranty claim for frost at joint. Cap profile warranty may be shorter than panel facing — replace caps on maintenance cycle. Export buyer should ask whether remote install support is included in warranty year one — email review of daily photos sometimes included, site visit extra.`,
      },
      {
        h2: "Summary for specification writers",
        content: `Name joint type on drawing legend matching supplier nomenclature — "cam-lock" vs "hook joint" confusion orders wrong hardware. Show vapor seal continuity on detail before specification prose. If room relocatable, note disassembly expected life on spec so supplier quotes correct pin grade. Internal audit photo standard: cap joint every 3 m on long runs for QA file.`,
      }
    ],
    limitations: "Joint performance depends on install quality and compatible accessories — factory specs assume trained installers. Hygiene and fire approvals must be confirmed for the complete system in your jurisdiction. We can share standard detail drawings; project-specific details may require consultant review. Values and examples are indicative for joint systems compared planning — confirm against project drawings, local codes and supplier test reports before purchase. Contact our export team with your application details if you need a written recommendation tied to a quotation. Site trials on one wall bay before full run are cheap insurance when crew is new to the joint system quoted. Keep spare pins and one spare cap profile on site for same-day repair. Acoustic and wash-down ratings apply to listed assemblies only — field modifications are not covered by supplier data. Joint performance in fire-rated lines reverts to the fire test detail; this guide does not replace that detail.",
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "ppgi-coating-selection",
    name: "PPGI Coating Selection",
    h1: "PPGI Coating Selection for Sandwich Panel Facings",
    seoTitle: "PPGI Coating Selection Guide | PHOENIXX",
    metaDescription: "Choose PPGI coating mass, primer and topcoat for coastal, food-grade and high-UV panel facings. SMP, HDP and PVDF trade-offs explained.",
    relatedProducts: ["roofing-panels","wall-panels","puf-panels"],
    relatedSolutions: ["food-processing","warehousing-logistics"],
    relatedComparisons: [],
    quickAnswer: "Pre-painted galvanised steel (PPGI) facings protect the panel from corrosion and UV. Standard food and industrial rooms often use 25–28 µm polyester on 0.5 mm Z275 galvanised substrate. Coastal or high-UV roofs may need SMP or PVDF topcoats and heavier zinc coating. Coating choice affects warranty length — match the facing to environment, not to the thickest catalogue option.",
    bodySections: [
      {
        h2: "Build-up of a typical facing",
        content: `PPGI starts as hot-dip galvanised coil (Z275 is 275 g/m² zinc total both sides — common for panels). Primer promotes adhesion; topcoat provides colour, UV resistance and chemical tolerance. Total coated thickness is often 25–35 µm per side for polyester systems. Internal facing may use lighter coating or plain galvanised with food-safe lacquer where regulations allow. Always specify which side faces which environment on the order — panels are not reversible if coatings differ.

Reverse-side primer on external coil may differ — ask for both-side coating spec on export orders.`,
      },
      {
        h2: "Coating systems compared",
        content: `Polyester (PE): economical, good colour for interiors and moderate exterior use; chalking accelerates after 8–10 years in harsh UV. SMP (silicone modified polyester): better UV and gloss retention on roofs. HDP (high durability polyester): mid-tier exterior performance. PVDF (fluoropolymer): premium UV and chemical resistance; common on coastal and industrial roofs; higher cost.

| System | Typical use | UV endurance (indicative) |
| --- | --- | --- |
| PE | Internal, chill rooms | Moderate |
| SMP/HDP | Industrial roofs | Good |
| PVDF | Coastal, harsh UV | Best |

Zinc mass Z275 is standard; Z450 may be specified within 500 m of salt water on external roofs.

Warranty years on SMP vs PVDF should be compared at same chalk rating definition — mills define failure differently.`,
      },
      {
        h2: "Worked example: Mombasa port-side cold store roof",
        content: `External roof over −25 °C freezer, 800 m from coast, high humidity. Internal facing: food-safe white PE on 0.5 mm steel. External facing: SMP topcoat on Z450 galvanised, not bare PE — salt aerosol and UV degrade standard polyester within years. Walls partially shaded — SMP external, PE internal. Buyer initially requested PVDF everywhere; value engineering kept PVDF on roof only and SMP on walls, saving ~8% on facing cost with same 15-year roof coating warranty from mill.

Discuss sacrificial anodes or increased maintenance wash frequency if budget excludes PVDF on full roof.`,
      },
      {
        h2: "Food and wash-down environments",
        content: `Food processing walls need smooth, non-porous surfaces that tolerate detergents. Anti-bacterial or food-grade lacquers are specified on internal facings — confirm compatibility with your cleaning regime (chlorine vs quaternary). Avoid dark external colours on sun-facing roofs in hot climates; they increase surface temperature and heat load. Stainless steel facings appear on aggressive wash-down zones — costlier than PPGI but survives chemical attack.

Copper ion anti-bacterial coatings may have regulatory status varying by country — confirm with local food authority.`,
      },
      {
        h2: "Premium coatings you may not need inland",
        content: `PVDF on every wall panel in a landlocked warehouse adds cost without matching environment. Buyers sometimes specify PVDF because it appears on a competitor brochure for a different climate. Inland dry zones often perform well with HDP roofs and PE internal walls for decades. Redirect budget to joint sealing or floor insulation where environment is mild.

Interior walls in unconditioned warehouses seldom need SMP — PE internal is standard.`,
      },
      {
        h2: "What to list on your material schedule",
        content: `State: steel thickness (mm), zinc coating (Z275/Z450), topcoat type and thickness (µm), colour code, which face internal/external, and warranty terms from the steel mill (not just the panel fabricator). Request mill test certificates for zinc and coating on export orders — customs and consultants may ask.

Include coil supplier name if consultant tracks approved mill list.`,
      },
      {
        h2: "Colour and solar absorptance",
        content: `Dark roof colours increase surface temperature and heat load — specify light colours on external roofs in tropical export markets unless architectural requirements override. Colour mismatch between replacement panels and aged facings is visible on walls; record RAL code and batch on handover. Metallic finishes show oil-canning more than matt whites on long flat wall runs.`,
      },
      {
        h2: "Handling and touch-up on site",
        content: `Cut edges expose galvanised steel — touch-up paint compatible with food environments must be approved. Drill holes only where drawings allow; each penetration is a future corrosion node. Bundle unloading with chains without edge protectors damages coating at panel ends first — inspect before install and reject creased leading edges.`,
      },
      {
        h2: "Warranty claims and coating failure modes",
        content: `Chalking, fade, and edge rust are distinct warranty categories — read mill warranty for exclusions on cut edges and improper storage. Panels stored at port in direct sun without wrap can heat-soak and damage foam bond before install; coating warranty may not cover install delay damage. Document storage conditions in handover. Touch-up paint for field cuts must match system — incompatible paint causes peeling and traps moisture. For coastal roofs, annual wash down removes salt film and extends SMP life; warranty may require maintenance log.`,
      },
      {
        h2: "Aligning facing spec with structural galvanizing",
        content: `Structural steel galvanizing on primary frame differs from panel coil Z275 — do not assume frame zinc protects panel cut edges. Cut edges on site need touch-up per panel supplier list. Panel facing galvanizing mass Z450 adds cost — apply only on external face if internal is dry chill environment. Dissimilar metal contact between stainless door frame and galvanized panel may need isolation gasket in coastal sites — specify on door detail. Coil origin tracking helps warranty if batch defect appears mid-project — retain one unused panel for comparison sample if colour drift suspected between batches.`,
      },
      {
        h2: "Bill of materials clarity for consultants",
        content: `Consultant schedule should read "external: SMP on Z450, internal: PE food grade on Z275, 0.5 mm base" — not "pre-painted panel white." Ambiguity causes wrong coil at factory. Include both-side colour if different. Roof and wall may differ on same project — separate line items prevent uniform wrong facing. Substitution clause should require written approval if mill runs out of colour — batch change mid-order needs client sign-off for aesthetic continuity on visible elevations.`,
      },
      {
        h2: "Regional UV and pollution factors",
        content: `Industrial pollution sulphur dioxide accelerates coating degradation near cement plants or unfiltered stacks — PE life shortens; step to SMP. High altitude UV is stronger than sea level — inland high-plateau roofs may need SMP though not coastal. Tree sap and bird droppings etch polyester if not washed — maintenance schedule part of coating life. Adjacent steel stack hot flu gas drift can heat facing above design — thermal stress crazes coating near stack line. Environmental profile belongs on facing enquiry same as mechanical load.`,
      },
      {
        h2: "Summary for specification writers",
        content: `Schedule facing as four lines: internal coating, external coating, steel thickness, zinc mass. Reference mill colour code not marketing name. Note wash-down compatibility if food zone. For export, state same spec on invoice as schedule to avoid customs query. Replacement panel order years later needs archived RAL and coating system — store in O&M manual.`,
      },
      {
        h2: "Quick reference for buyers",
        content: `Inland chill room: PE internal, PE or SMP external on Z275, 0.5 mm. Coastal external roof: SMP or PVDF on Z450. Food wash-down wall: food-safe PE or approved lacquer, smooth finish. Always confirm with supplier mill certificate for your coil batch.`,
      }
    ],
    limitations: "Coating life depends on environment, maintenance and install damage — warranties are mill-specific. We do not publish mill certificates on this site. Aggressive chemical environments may need stainless or specialty coatings beyond standard PPGI. Values and examples are indicative for ppgi coating selection planning — confirm against project drawings, local codes and supplier test reports before purchase. Contact our export team with your application details if you need a written recommendation tied to a quotation. Colour fade is cosmetic until corrosion starts — inspect annually on external roofs in harsh sites. Coil batch numbers on panel label should be copied to O&M manual for reorder. Mill warranty terms vary by region and maintenance — read the certificate issued for your destination, not a generic brochure. Aggressive chemicals outside listed compatibility charts require case-by-case approval. Touch-up and field repair products must appear on the approved maintenance list before use in food areas.",
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "roofing-panel-spans",
    name: "Roofing Panel Spans",
    h1: "Roofing Panel Spans and Purlin Spacing",
    seoTitle: "Roofing Panel Spans Guide | PHOENIXX",
    metaDescription: "Purlin spacing, allowable spans and deflection limits for insulated roofing panels. How profile, thickness and load case affect your steel frame.",
    relatedProducts: ["roofing-panels","puf-panels","peb-prefabricated-buildings"],
    relatedSolutions: ["warehousing-logistics","manufacturing-plants"],
    relatedComparisons: [],
    quickAnswer: "Roofing panel span is the purlin spacing the panel can bridge without exceeding deflection or pull-out limits. Fifty-millimetre trapezoidal PUF might span 1.8–2.2 m; 80 mm can reach 2.5–3.0 m depending on profile. Use the supplier span table for your load case — coastal wind uplift often governs fixings, not gravity alone.",
    bodySections: [
      {
        h2: "Span tables and what governs them",
        content: `Allowable span is the maximum purlin spacing where deflection under combined load stays below L/200 (typical for roofs) and fixings resist uplift. Tables are profile-specific — trapezoidal rib height and steel gauge matter. Thicker foam increases composite stiffness slightly but steel profile dominates. Suppliers publish separate tables for internal vs external support, and for snow zones. Never interpolate far beyond the published table without engineer sign-off.

Temporary construction load for workers on unfixed sheets is often 1 kN/m² — do not walk on panels until fixings complete per supplier note.`,
      },
      {
        h2: "Profile shape and core thickness",
        content: `Deep rib trapezoidal profiles span farther than flat micro-rib panels at the same thickness. 50 mm PUF suits short spans and low snow; 80–100 mm common on 6–12 m bay warehouses. Standing seam systems may allow longer spans with fewer penetrations. Core density affects screw pull-out under uplift — coastal wind maps can require reduced spacing even if deflection allows wider spans.

| Panel build | Indicative span (m) | Typical load case |
| --- | --- | --- |
| 50 mm trapezoidal PUF | 1.8–2.2 | Light industrial |
| 80 mm trapezoidal PUF | 2.5–3.0 | Warehouse |
| 100 mm PIR standing seam | 3.0+ | Cold store roof |

Trapezoidal rib orientation must match purlin direction on drawing — rotating panel 90° invalidates span.`,
      },
      {
        h2: "Worked example: 24 m wide warehouse bay",
        content: `Clear span 24 m between portal frames, purlins at 1.5 m centres along 60 m length. Design snow 0.5 kN/m², maintenance load, wind uplift per local code. Supplier span table for 80 mm trapezoidal PUF allows 2.8 m purlin spacing — project uses 1.5 m for conservative stock holding on roof and to match standard purlin section already purchased. Alternative 50 mm panel would require 1.2 m spacing — more steel, higher erection cost, negating cheaper panel price. Thickness choice followed structure economics, not panel list price alone.

Purlin cleat spacing must match panel screw line — structural and cladding drawings reconciled before steel order.`,
      },
      {
        h2: "Uplift, drift and maintenance loads",
        content: `Wind suction on leeward roofs can exceed dead load — fixings fail before foam crushes. Corner and edge zones need closer screw spacing per the supplier wind detail. Drifted snow increases local load — span tables may have reduction factors. Maintenance walkways concentrate load; either add purlins under walk paths or use walk pads spread load. Do not stack tiles or unused panels on a partially fixed roof beyond the temporary load note.

Internal pressure in partially enclosed buildings during wind can suction roof upward — check if building is classified enclosed.`,
      },
      {
        h2: "Thicker panels are not a substitute for structure",
        content: `Buyers sometimes order 100 mm roof panels hoping to eliminate purlins — foam stiffness does not replace steel frame design. Maximum span increases modestly with thickness; primary frame still carries building loads. Oversized panels also weigh more, complicating crane lifts. Use structural engineer purlin layout first, then pick panel thickness for thermal performance within that grid.

Deflection limits protect gutters and flashings from ponding — serviceability not strength may govern.`,
      },
      {
        h2: "Information to send for span approval",
        content: `Provide purlin spacing, roof pitch, site wind speed, snow load if any, and whether panels are single-span or continuous over multiple purlins. Send profile drawing or supplier catalogue reference. For coastal export sites, state distance to coast — fixings may upgrade.

Send roof plan with purlin grid marked, not only bay width.`,
      },
      {
        h2: "Continuous versus end-span panels",
        content: `Continuous panels over multiple purlins achieve higher effective span than single-span tables suggest — supplier may allow 10–15% wider spacing with lap continuity. Confirm whether end laps are required and minimum lap length. Cut panels at supports lose continuity; do not extrapolate span table to cut pieces without engineer note.`,
      },
      {
        h2: "Integration with gutters and daylight",
        content: `Roof profile must match gutter clip geometry — changing profile mid-project changes span and fixings. Skylight curbs interrupt purlin continuity; add local purlins or reduce spacing adjacent to openings. Do not use span table for panel spanning skylight opening without trimmer design.`,
      },
      {
        h2: "Site changes that invalidate span assumptions",
        content: `Adding rooftop HVAC plant after structural design may require local purlins or reduced span near loads — cladding engineer should review before cutting holes. Snow fences or parapets change drift — inform supplier if architectural changes occur after span sign-off. Retrofit overlays installing second roof skin over old panels need separate structural check; do not assume original span table applies to double skin. Hail damage denting ribs reduces span capacity locally — replace affected sheets rather than shimming over dents.`,
      },
      {
        h2: "Peer review of span sign-off before steel order",
        content: `Structural engineer and cladding supplier should sign same purlin grid before steel fabrication — changing grid after steel order is expensive. Request PDF mark-up from panel supplier showing screw rows on profile overlaying purlin lines. For curved roofs, span table may not apply — use project-specific finite element note. Temporary bracing during erection prevents permanent panning in thin profiles — follow erection guide wind speed limit. Night storage of loose panels on roof before fixing is prohibited on many supplier warranties — secure or remove daily if wind forecast exceeds limit in guide footnote.`,
      },
      {
        h2: "Erection sequencing and panel damage",
        content: `Walking on unfixed panel mid-span causes permanent dimple — crew must use board walk path or fix as they go per supplier erection sequence. End laps staggered per drawing — aligned laps create line weakness in wind. If erection stops for rain, drain standing water before next fix — water weight exceeds design load temporarily. Cut panel ends at support only unless engineer approves cantilever cut piece. Bundle order on roof should match fix sequence to avoid double handling of 12 m lengths on fragile ribs.`,
      },
      {
        h2: "Future maintenance and fall arrest anchors",
        content: `Maintenance anchors for fall arrest must tie to structure or listed anchor on panel system — ad hoc anchor through rib cracks facing. Plan anchor locations on grid before panel order so reinforce zones factory possible where system allows. Gutter cleaning access may dictate walk path on roof — concentrate load at purlins only. PV module future load not in today's span table — if solar planned, declare on RFQ even if phase two. Snow guard attachment adds point load — supplier detail or reduce purlin spacing locally.`,
      },
      {
        h2: "Summary for specification writers",
        content: `Roof spec should cite profile name, thickness, steel gauge, and maximum purlin spacing signed by supplier for project load case — not generic "insulated roof panel." Note erection restriction on foot traffic. Include fallback reduced spacing in corner wind zone if table allows zone reduction. Structural engineer general arrangement and cladding span letter must match grid dimension on same revision.`,
      }
    ],
    limitations: "Span tables are manufacturer-specific — values here are indicative. Structural design must be signed by a qualified engineer for your jurisdiction. Temporary construction loads and cut panel conditions are not covered by standard tables. Values and examples are indicative for roofing panel spans planning — confirm against project drawings, local codes and supplier test reports before purchase. Contact our export team with your application details if you need a written recommendation tied to a quotation. Re-check span if purlin supplier changes section modulus after value engineering — cladding approval must follow steel revision. Span tables assume uniform support; real buildings with patched purlins or local reinforcement need project-specific review. Snow, wind, and maintenance loads combined may not match single-load table entries — ask supplier for combination case if applicable. Request written span approval for non-standard bay widths or cut panels at hips.",
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "condensation-vapour-control",
    name: "Condensation and Vapour Control",
    h1: "Condensation Risk and Vapour Control in Panel Buildings",
    seoTitle: "Condensation and Vapour Control | PHOENIXX",
    metaDescription: "Dew point, vapour barriers and facing orientation for cold rooms and conditioned buildings. Prevent interstitial condensation in sandwich panels.",
    relatedProducts: ["cold-room-panels","puf-panels","pir-panels"],
    relatedSolutions: ["cold-storage","food-processing"],
    relatedComparisons: ["puf-vs-pir-panels"],
    quickAnswer: "Condensation forms when moist air meets a surface below the dew point. In cold rooms the vapour drive is from outside in — the vapour control layer belongs on the warm side. Correct facing orientation and sealed joints manage most chill rooms. Freezers below −20 °C often need extra vapour stops at joints; model dew point for your ambient design.",
    bodySections: [
      {
        h2: "Warm-side versus cold-side logic",
        content: `Moisture migrates from high vapour pressure to low — warm humid air towards cold surfaces. In a +4 °C chill room in +30 °C ambient, the warm side is outside (or the building envelope around the room). Any vapour barrier or tight-facing layer should sit on the warm side of the insulation so water vapour does not enter the core and condense on the cold internal facing. Reversing panel orientation in humid climates is a common install error that shows up as ice between core and steel after months.

In heated buildings in cold climates, warm side flips seasonally — hybrid climates need dual-period review.`,
      },
      {
        h2: "Facing orientation in factory panels",
        content: `Panel orders specify internal vs external facing — coating, thickness and sometimes vapour-resistant film differ. Cam-lock floors and ceilings need continuity: vapor seal tape at top and bottom tracks before panels slide in. In conditioned offices with sandwich walls, the warm side follows the heated interior in winter climates; mixed climates need consultant review. Metal facings themselves are vapor barriers on one side — the weak points are joints, not the flat panel field.

Some panels use thicker external steel — orientation error changes stiffness and vapor performance together.`,
      },
      {
        h2: "Worked example: +4 °C chill room in humid coast",
        content: `Mombasa ambient +32 °C, 80% RH design; room +4 °C. Dew point outside ~28 °C — well above room surface if vapor enters core. Spec: 100 mm PUF cam-lock, vapor seal mastic at floor track and ceiling angle, foam-injected cam joints on ceiling row, heated door frame threshold. Without ceiling joint foam, callbacks at 6 months showed frost dust at pin joints. Repair: inject closed-cell foam and add strip curtain — cheaper than replacing panels if caught early.

Strip curtains reduced infiltration 40% in retrofit — measured via door opening logger.`,
      },
      {
        h2: "Penetrations and door frames",
        content: `Pipe entries need grommeted sleeves sealed to both facings. Electrical boxes break the vapor line — cluster penetrations where possible and seal with approved mastic. Cold room doors need heated frames or vestibules in high humidity; the door is the highest leakage path. Avoid drilling new holes through panel after vapor seal without re-sealing inside and out.

Floor drain penetrations break vapor line — use trapped drain detail approved for cold rooms.`,
      },
      {
        h2: "Double vapour barriers that trap moisture",
        content: `Adding polyethylene sheets on both sides of a panel wall "for extra protection" can trap construction moisture inside the core with no drying path — worse than a single correct barrier. Some specs call for vapor barrier on already factory-sealed panels; challenge redundant layers unless the hygrothermal model shows benefit. Over-specifying vapor membranes on chill rooms while ignoring door infiltration misses the dominant moisture source.

Construction moisture in new concrete slab dries upward — do not seal slab prematurely before RH test.`,
      },
      {
        h2: "Design inputs for a condensation review",
        content: `Provide design temperatures and RH on both sides, expected operation (continuous cooling or intermittent), and location (coastal vs dry inland). Note if the room is inside an envelope or standalone under sun. Ask for panel orientation mark on drawings before production.

Note if room will operate intermittently — idle warm periods change condensation risk.`,
      },
      {
        h2: "Interstitial moisture in retrofit rooms",
        content: `Retrofit cold rooms inside older buildings may trap moisture in existing walls behind new panels — consider vapor open or closed strategy for the legacy wall separately. Monitoring with humidity loggers during first month of operation validates design. Frost on external facing of panel inside a building signals vapor drive from an unexpected source, such as adjacent unventilated crawl space.`,
      },
      {
        h2: "Seasonal humidity swings",
        content: `Monsoon seasons raise ambient RH without changing design temperature — revisit dew point if room operates year-round in tropical ports. Temporary condensation on external facing during defrost cycles is normal; persistent water trails are not. Door air curtains reduce moisture ingress more per dollar than extra foam in high-traffic chill stores.`,
      },
      {
        h2: "Communicating vapor strategy to install team",
        content: `Vapor seal details must appear on install drawing, not only specification prose — fitters follow diagrams. Mark warm-side facing with sticker on site if panels look identical both sides. Pre-job briefing should cover why vapor mastic at floor track cannot be skipped for coffee break. QA hold point before ceiling closes: supervisor signs photo of continuous seal. Owner operator training should explain not to drill ad hoc holes for cable trays after handover without seal kit — common post-occupancy failure mode in expanding chill stores.`,
      },
      {
        h2: "Owner operation habits that defeat vapor design",
        content: `Leaving cold room doors open during loading blows warm humid air across vapor line faster than design — operational SOP matters. Strip curtains and air curtains reduce load but need maintenance when vinyl strips tangle. Washing floors with hot water in adjacent hall raises RH without temperature change — dew point rises. Train staff not to prop doors; monitor alarm if door open exceeds timed limit. Night setback raising room temperature reduces vapor drive temporarily but increases product risk — operational choice not panel fix. Logged door events help diagnose frost appearing at joints months after install.`,
      },
      {
        h2: "Repair protocol when frost appears at joint",
        content: `If frost appears at cam-lock after months, diagnose vapor path before adding random foam externally. Infrared photo shows cold line at joint — if continuous, internal vapor seal failed at floor track. Repair may require opening lowest row, reseal track, reinject pins. External wrapping alone traps ice inside. Document repair for warranty — supplier may contribute if install followed drawing and material batch traceable. Prevent recurrence with door discipline and strip curtain maintenance — joint repair without operational fix fails again next season.`,
      },
      {
        h2: "Measuring success after remedial work",
        content: `After vapor repair, log internal RH and product surface temperature for two weeks — trend should stabilise without new frost lines. Dew point calculator with logged RH confirms margin. Thermal imaging in third week validates joint lines warm enough relative to dew point. If problem persists, pressure test room lightly if design allows — identifies air leakage path dominating over vapor. Consultant hygrothermal review cheap compared to second panel replacement — engage before repeating same fix.`,
      },
      {
        h2: "Summary for specification writers",
        content: `Show warm-side facing orientation arrow on elevation. Reference approved mastic product on detail — "apply vapor seal" alone is not buildable. Require install photo hold point before ceiling close on cold room contracts. Operation SOP for doors references vapor strategy — link in handover pack. Retrofit projects note legacy wall vapor condition separately from new panel.`,
      },
      {
        h2: "Quick reference for buyers",
        content: `Chill room in humid climate: vapor seal at floor track, foam pins at ceiling row, heated door frame or vestibule, correct facing orientation marked on drawings. Freezer below −20 °C: add joint inspection at six months. Fix doors before adding panel thickness.`,
      }
    ],
    limitations: "Hygrothermal modelling should be done by a qualified designer for critical rooms. Examples are simplified; local climate files may differ. We supply panels with specified facings — site sealing remains installer responsibility. Values and examples are indicative for condensation and vapour control planning — confirm against project drawings, local codes and supplier test reports before purchase. Contact our export team with your application details if you need a written recommendation tied to a quotation. Hygrothermal software output should name design RH and temperature explicitly — generic 'tropical' input is not enough for sign-off. This guide does not model dynamic door opening or product moisture release. Remedial work should be designed by a qualified engineer if frost has already damaged foam or facings. Seasonal commissioning may show issues only after first full operational cycle — allow a monitoring period in project schedule.",
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "cleanroom-panel-requirements",
    name: "Cleanroom Panel Requirements",
    h1: "Cleanroom Panel Requirements for GMP Projects",
    seoTitle: "Cleanroom Panel Requirements | PHOENIXX",
    metaDescription: "Surface finish, joint detail, coving and flush glazing for ISO-class cleanrooms. How sandwich panels fit pharmaceutical and food hygiene rules.",
    relatedProducts: ["cleanroom-panels","cold-room-panels","wall-panels"],
    relatedSolutions: ["pharmaceutical-cleanroom","food-processing"],
    relatedComparisons: [],
    quickAnswer: "Cleanroom panels need smooth, cleanable surfaces with flush joints and minimal ledges. ISO 7–8 areas typically use 50–80 mm PIR or PUF with food-safe coatings on 0.5 mm steel, plus covings and gasketed doors. Validate the build-up against your URS and local GMP rules — panel spec alone does not qualify the room.",
    bodySections: [
      {
        h2: "Surface and coating requirements",
        content: `Panels must resist repeated wipe-down with approved disinfectants without chalking or pitting. White or light grey smooth polyester is standard; embossing is avoided where particles could lodge. Anti-bacterial coatings reduce biofilm risk but do not replace cleaning validation. Stainless facings appear in wet zones and sterilant areas. Surface roughness Ra values may appear in URS — confirm supplier coating meets the stated Ra, not just colour.

Electrostatic discharge requirements in electronics cleanrooms may need conductive floor, not panel facing alone.`,
      },
      {
        h2: "Joint and coving details",
        content: `Flush aluminum or PVC cap profiles cover vertical joints; silicone bead must be smooth and continuous without crevices. Floor and ceiling covings radius typically 50 mm for ISO 8, tighter for higher classes. Ceiling panels integrate with filtered ceiling grid or walk-on ceiling where maintenance access is required. Windows are flush double-glazed units with gasketed frames — no internal ledge.

| Element | ISO 8 typical | Higher class trend |
| --- | --- | --- |
| Joint cap | Flush PVC/aluminum | Welded or sealed monolithic |
| Coving radius | 50 mm | 25 mm or cast resin |
| Door | Gasketed steel | Interlock, air shower |

Cast resin covings monolithic with floor are alternative to panel coving in wet ISO 7 zones.`,
      },
      {
        h2: "Worked example: ISO 8 packaging room",
        content: `40 m² secondary packaging for tablets, ISO 8 target, non-classified corridor outside. Specified 60 mm PIR cleanroom panels, food-safe internal facing, flush joints with cap strips, 50 mm floor coving, two pass-through hatches with interlocked doors. HVAC positive pressure +15 Pa vs corridor. Validation focused on particle counts and cleaning logs — panel supplier provided surface certificate and cap profile cleaning compatibility letter. No need for ISO 6 monolithic walls; auditor accepted sandwich system with documented cleaning SOP.

HVAC filter grade at ceiling must match panel ceiling grid load — verify filter weight on grid.`,
      },
      {
        h2: "Doors, transfers and pressure cascades",
        content: `Air flows from higher to lower cleanliness via pressure cascade. Panel walls are airtight enough only if doors close correctly — specify door type with same supplier family where possible. Material airlocks need active or passive strategies drawn on HVAC plans, not guessed on site. Cut-outs for utilities should be factory-punched where dimensions are fixed to preserve facing integrity.

Interlocked doors fail validation if pressure not achieved — tune HVAC before panel sign-off.`,
      },
      {
        h2: "ISO 6 detailing where ISO 8 would suffice",
        content: `Over-specifying monolithic resin walls and welded corners in a ISO 8 packaging zone adds months and cost without regulatory benefit if URS says ISO 8. Conversely, using standard warehouse wall panels with exposed fasteners fails even ISO 8. Read the URS class and GMP guide (EU Annex 1, WHO TRS, local FDA) before upgrading joint systems. Match panel tier to classified volume, not to the cleanest room on the campus.

Consultant fee for over-classification exceeds panel cost difference — align URS early.`,
      },
      {
        h2: "Validation documents to align early",
        content: `Request: coating chemical resistance list, particle contribution test if available, cap and coving cleaning instructions, and drawing register for custom cut panels. Align with HVAC designer on panel thickness vs duct routing in the wall cavity — thin panels leave less space for services.

Change control procedure should list who approves panel cut-outs after baseline drawing freeze.`,
      },
      {
        h2: "Monitoring and panel penetrations for sensors",
        content: `Particle counters and temperature probes need sealed penetrations with grommets rated for cleaning. Cluster sensors on dedicated plates rather than random drill points after qualification. Panel penetrations after IQ/OQ may trigger re-validation — plan instrument layout on approved drawings before fabrication.`,
      },
      {
        h2: "Expansion and future classified volume",
        content: `Design partition walls that can extend classification if URS grows — cap profiles and pressure regime should allow another room without replacing entire run. Over-building ISO 6 infrastructure for speculative future use ties capital; build ISO 8 envelope with documented upgrade path if URS allows phased qualification.`,
      },
      {
        h2: "Commissioning particle counts versus panel spec",
        content: `Passing ISO classification at handover depends on HVAC balance, not panel smoothness alone — panel supplier scope ends at surface and joint integrity. Empty room classification before equipment install is baseline; adding machines may change airflow patterns. Panel repairs after equipment bump must use same cap profile and sealant approved in validation. Change control for any panel replacement post-OQ should reference original batch and coating. Training cleaners on approved wipe pattern reduces particle spikes that are misattributed to panel surface.`,
      },
      {
        h2: "Balancing panel cost with HVAC capital",
        content: `Thicker cleanroom panels reduce HVAC load slightly but clean HVAC capital dominates project cost — do not chase 80 mm where 50 mm meets load for ISO 8. Smooth surface and joint detail affect cleaning labour hours more than 10 mm foam in many audits. Focus budget on cap profile and coving continuity before upgrading core thickness. Walkable ceiling panels cost premium — specify only where maintenance access demands; otherwise standard ceiling with external access reduces panel cost. Future panel removal for equipment must be planned without breaking coving monolith if validation requires — modular caps help.`,
      },
      {
        h2: "Qualification timeline versus panel delivery",
        content: `Panel delivery should align with HVAC first air milestone — storing classified panels in ambient warehouse long term risks coating damage and uncontrolled particle load on surface before install. Clean install crew clothing and tool control during panel erection reduces post-clean burden. Particle count failure at OQ may trace to erection dust not panel spec — vacuum and wipe protocol before test. Include panel erection in qualification scope if regulator expects it — subcontractor method statement may be requested. Spare panels stored outside classified area until needed.`,
      },
      {
        h2: "Change control after baseline qualification",
        content: `Any panel replacement post-OQ triggers change control — same cap profile and coating batch preferred. Patch panel from different batch may colour mismatch but must match surface Ra and cleaning compatibility letter. Minor dent repair with filler may be rejected in pharma — replace panel module instead. Document panel serial map on wall drawing for future maintenance. Expansion into adjacent room needs pressure cascade recalculation — new panel line may need interlock door upgrade not copy of existing partition spec alone.`,
      },
      {
        h2: "Summary for specification writers",
        content: `URS class drives panel tier — quote ISO class on spec cover. List cap profile part number and coving radius. Cleaning agent compatibility by name. Vision panel as tested assembly if rated. Pressure cascade direction on HVAC drawing must match panel layout — spec cross-reference HVAC sheet. Qualification scope statement names panel install in or out of IQ.`,
      },
      {
        h2: "Quick reference for buyers",
        content: `ISO 8 hall: 50–60 mm PIR/PUF, flush cap joints, 50 mm covings, gasketed doors, positive pressure vs corridor. Match cap and panel coating cleaning compatibility. Validate HVAC and cleaning SOP with panel install — not panel alone.`,
      }
    ],
    limitations: "Cleanroom qualification depends on HVAC, procedures and monitoring — not panels alone. ISO classes referenced are informational; your validator sets acceptance. We do not perform IQ/OQ/PQ on this page. Values and examples are indicative for cleanroom panel requirements planning — confirm against project drawings, local codes and supplier test reports before purchase. Contact our export team with your application details if you need a written recommendation tied to a quotation. Panel spec is one line in URS — cleaning validation protocol drives audit success more than an extra 10 mm foam. ISO class achievement requires validated HVAC and procedures; panel surface alone does not certify the room. Local GMP authorities may impose details beyond this summary — consult your validator early. Change control after qualification applies to any panel modification, including patch plates and new penetrations. Include cap profile cleaning data in validation protocols where auditors require it.",
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "estimating-panel-quantity",
    name: "Estimating Panel Quantity",
    h1: "How to Estimate Sandwich Panel Quantity",
    seoTitle: "Estimating Panel Quantity | PHOENIXX",
    metaDescription: "Calculate wall and roof panel area from room dimensions, deduct openings and add waste allowance. Sample take-off for a cold room kit.",
    relatedProducts: ["cold-room-panels","wall-panels","roofing-panels"],
    relatedSolutions: ["cold-storage","warehousing-logistics"],
    relatedComparisons: [],
    quickAnswer: "Panel quantity is net envelope area plus waste — not floor area alone. Measure dimensions consistently, deduct openings above 0.5 m², and add 5–8% waste for cuts and export damage. Cold room kits are quoted in m² of wall and ceiling separately. Send a dimensioned sketch rather than floor area alone.",
    bodySections: [
      {
        h2: "Wall area from room dimensions",
        content: `For a rectangular room with internal length L, width W, height H, gross wall area = 2 × (L + W) × H. Use internal dimensions if panels line the inside face — typical for cold rooms. External dimensions apply when panels hang outside the structure. Pick one basis and stick to it; mixing internal length with external height double-counts corner overlap. Angled or L-shaped rooms split into rectangles and sum.

Sloped ceiling cold rooms need sloped wall height average, not max height only.`,
      },
      {
        h2: "Roof, floor and opening deductions",
        content: `Ceiling area ≈ L × W for flat roofs; add gable triangles separately. Floor panels may be optional — many cold rooms cast insulated screed instead. Deduct door openings (width × height) and windows above 0.5 m²; small pass-throughs sometimes still need surrounding panel and are not fully deducted. Include reveal panels above doors as separate line items.

| Surface | Formula (rectangular room) | Notes |
| --- | --- | --- |
| Walls | 2(L+W)×H | Internal basis |
| Ceiling | L×W | Cam-lock ceiling grid |
| Openings | −w×h each | State net or gross quote |

Small pipe penetrations add surround patch panels — list count on take-off.`,
      },
      {
        h2: "Worked example: 6 m × 4 m × 3 m chill room",
        content: `Internal 6 × 4 × 3 m. Walls: 2 × (6+4) × 3 = 60 m². Ceiling: 6 × 4 = 24 m². One door 1.2 × 2.1 m = 2.52 m² deduction if net area pricing. Net wall ~57.5 m². Waste 7% → ~61.5 m² wall panels ordered. Ceiling 24 × 1.07 ≈ 25.7 m². Corner panels and cam-lock extras often listed as kit line items — confirm supplier includes corners in m² rate or as pieces. Export order added two spare full panels for transit damage.

Supplier rounded ceiling to 26 m² standard module — buyer accepted 2% over theoretical.`,
      },
      {
        h2: "Waste and spare panel policy",
        content: `Cut waste rises with many corners, low heights, and mixed panel widths. Complex layouts may need 10% waste. Export containers benefit from one spare same-length panel per wall run. On-site damage during unbundle is more common on 12 m lengths — packing quality matters as much as quantity pad. Record panel IDs when unloading to match warranty claims.

Insurance claims for transit damage need photos before unwrapping if policy requires.`,
      },
      {
        h2: "Padding quantities beyond site need",
        content: `Ordering 15% extra "because the site is messy" ties up capital and may leave non-returnable custom lengths. Better: accurate take-off, agreed spare panel list, and damage replacement clause in contract. Oversized orders also complicate container cube — you may pay freight for panels that sit in storage rusting at port.

Return policy for unused panels is rare on custom lengths — padding has disposal cost.`,
      },
      {
        h2: "What suppliers need for an accurate bill",
        content: `Send sketch with dimensions, door positions, column intrusions, desired panel width module (e.g. 1.115 m), floor and ceiling system choice, and whether angles are 90° only. Photos of existing slab if retrofitting. State net vs gross area preference on the RFQ.

Mark door swing and hinge side on sketch — affects corner panel hand.`,
      },
      {
        h2: "Corner and angle pieces",
        content: `Corner panels are often counted as pieces, not m² — clarify whether supplier includes four corners in kit price. L-shaped rooms need internal corner panels with correct hand; external corners use different profiles. Column wraps add surface area not visible on simple wall formula — measure each column face.`,
      },
      {
        h2: "Container loading and length modules",
        content: `Standard panel lengths (e.g. 11.8 m) may exceed container usable length — supplier splits into two numbers with extra joints. Count joints when estimating install time, not only m². Non-standard lengths attract cutting surcharge and higher waste; align room dimensions to module where possible.`,
      },
      {
        h2: "Checking supplier bill against your take-off",
        content: `Compare supplier m² to your calculation within agreed tolerance — 3% variance may be module rounding; 10% warrants review. Panel width module affects cut waste; 1.115 m vs 1.0 m module changes row count on 6 m wall. Ask for panel schedule table listing length, width, quantity per mark number aligned to drawing grid. Revise estimate when door size changes — door height drives wall panel cut list. For phased construction, stage quantities per phase so Phase 2 panels are not stored on site months where facings corrode.`,
      },
      {
        h2: "Software and spreadsheet take-off tips",
        content: `Spreadsheet template with separate rows for each wall elevation reduces arithmetic error versus single formula block. CAD export area tools often overcount if openings not closed polylines — manual check door wall. Round up to supplier module in separate column labelled rounding delta so buyer sees waste explicitly. For L-shaped rooms, draw sketch with panel direction arrow — direction affects cut waste on cam-lock. Share spreadsheet with supplier so both parties edit one source during negotiation. Version control filename with date when dimensions change during design — avoid ordering from Rev A when site built to Rev C.`,
      },
      {
        h2: "Reconciliation at goods receipt",
        content: `On arrival, count bundles against packing list before unload damage obscures labels — shortage claim to insurer needs pre-unload count. m² on invoice should match contract schedule within rounding note. Random measure three panel lengths with tape — systematic short length indicates production error not rounding. Weight per bundle compared to supplier declared kg/m² catches density or thickness shortfall approximately before install. Photograph bundle labels with container number for end-to-end trace in export claims.`,
      },
      {
        h2: "Pricing models: per m² versus kit lump sum",
        content: `Some suppliers quote lump sum kit for standard room sizes — compare by normalising to m² for your actual dimensions. Lump sum may hide waste padding or corner piece markup. Itemised schedule with mark numbers allows value engineering on one elevation without renegotiating whole kit. Freight quoted per container not per m² — large rooms may need two containers while small room one container — unit m² freight differs. Currency and Incoterm on quote must match when comparing Indian FOB vs local landed price.`,
      },
      {
        h2: "Summary for specification writers",
        content: `Quantity schedule format: mark, dimension, net m², waste factor, order m². Separate wall, ceiling, floor, corners, accessories. Opening deduct policy stated. Module width assumption noted. Supplier and buyer sign same schedule revision at order. Spare panel line explicit count not percentage alone.`,
      },
      {
        h2: "Quick reference for buyers",
        content: `Rectangular chill room walls: 2(L+W)×H minus doors, ceiling L×W, add 5–8% waste export. Send sketch with door positions. Confirm kit includes corners and floor or not. Reconcile supplier schedule to your spreadsheet before PO. Retain packing list for claims. Note panel width module on RFQ to align cut waste with supplier standard lengths.`,
      }
    ],
    limitations: "Quantities here are arithmetic aids — supplier kit lists may round to standard panel lengths. Structural openings and steel interference require site survey. We quote from buyer-provided dimensions; remeasure disputes follow contract terms. Values and examples are indicative for estimating panel quantity planning — confirm against project drawings, local codes and supplier test reports before purchase. Contact our export team with your application details if you need a written recommendation tied to a quotation. Two independent quantity take-offs within 2% agreement is good practice before issuing PO on orders above 500 m². Curved, raked, or multi-height envelopes need site measure — arithmetic templates here are rectangular defaults only. Supplier kit rounding may differ from buyer spreadsheet; agree revision letter at order. Freight and customs are not driven by m² alone — confirm container plan when quantity is finalised. Column wraps and raked ceilings need measured additions beyond rectangular formulas. Spare panel count should be agreed in writing, not assumed. Attach your take-off spreadsheet to the enquiry so both parties reconcile against one revision.",
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "installation-sequence-mistakes",
    name: "Installation Sequence Mistakes",
    h1: "Sandwich Panel Installation Sequence Mistakes",
    seoTitle: "Panel Installation Mistakes | PHOENIXX",
    metaDescription: "Common installation errors — wrong start corner, unlevel sole plate, premature door cut-out and missing vapour seal. Sequence for cold rooms and walls.",
    relatedProducts: ["cold-room-panels","wall-panels","industrial-doors"],
    relatedSolutions: ["cold-storage","manufacturing-plants"],
    relatedComparisons: [],
    quickAnswer: "Most panel callbacks trace to sequence errors, not material failure. Start from a squared corner on a level sole plate; erect corners before long runs; fit doors after adjacent panels align. Cam-lock rooms need ceiling support before the last wall row. Skipping vapour seal at the floor track creates condensation paths that show up months later.",
    bodySections: [
      {
        h2: "Pre-install checks that prevent rework",
        content: `Verify concrete slab level within 3 mm over 3 m — shims distort cam-lock engagement. Mark panel layout on floor matching supplier drawing. Check panel IDs against packing list before cutting bundles. Confirm vapor seal tape and mastic are on site before first panel — retrofits require partial dismantling. Crane or lift plan for long roof sheets prevents creasing facings.

Verify sole plate anchor torque — loose anchors allow track movement under cam-lock tension.`,
      },
      {
        h2: "Recommended sequence for modular cold rooms",
        content: `Typical order: floor track and vapor seal → corner panels → wall runs in one direction → ceiling grid or temporary support → ceiling panels → opposite walls → door frames → final foam injection at ceiling joints if specified → door hang and seal adjustment. Deviating by hanging doors before ceiling support often racks walls outward. Power and lighting penetrations after alignment, sealed immediately.

Temporary bracing diagram from supplier shows where props go before ceiling load.`,
      },
      {
        h2: "Worked example: correcting a racked wall run",
        content: `Site erected 18 m wall before checking diagonal — 22 mm out of square at far end. Cause: first corner not plumbed, cumulative cam-lock drift. Fix: remove last six panels, re-square corner with temporary brace, re-engage locks with rubber mallet per supplier method — not hammer on facing. Added half-day labour; avoided reordering custom lengths. Lesson: check diagonal every fourth panel during first install shift.

Supplier video call resolved engagement technique without site visit — keep channel open during first install.`,
      },
      {
        h2: "Door and MEP coordination",
        content: `Door openings need reinforced frame panels ordered from factory — field cutting voids facing warranty. HVAC sleeves should align with panel joint plan; shifting a duct 100 mm may land on a cam pin line. Fire stopping must follow tested detail before adjacent panels cover the penetration. Schedule MEP rough-in inspection before closing last wall panel on each side.

Door frame plumb affects gasket compression — adjust frame before fixing adjacent panels.`,
      },
      {
        h2: "Over-tightening fixings and excess foam",
        content: `Roof screws driven until dimple cracks facing invite corrosion. Cam-lock panels do not need extra screw holes "for safety." Polyurethane foam injected everywhere looks thorough but can bow thin facings and block thermal movement on long roofs. Follow supplier fixings per span table and foam only where detail drawing shows — over-specifying fixings does not fix a racked frame.

Excess foam in cam joints prevents full lock engagement — inject after lock clicks, not before.`,
      },
      {
        h2: "Handover records worth keeping",
        content: `Keep install photos of vapor seal, corner engagement, and roof screw pattern. Log panel batch numbers from labels. Note ambient temperature during foam injection — cold ambient slows cure. These records shorten warranty discussions if condensation appears later.

Torque log for roof screws if engineer specified — some audits request sample.`,
      },
      {
        h2: "Weather and curing on site",
        content: `Install PUF roof panels in dry conditions when possible — wet surfaces affect sealant bond. Foam injection at joints needs minimum ambient for cure per chemical datasheet; winter installs may need heated enclosure. Do not leave cut panel ends exposed to rain overnight without cap.`,
      },
      {
        h2: "Commissioning before load-in",
        content: `Pull room to temperature and hold before loading product — monitors joint performance under real delta T. Loading warm product into an unfinished room masks vapor defects until full load and humidity arrive. Document setpoint achievement date for warranty start if contract ties warranty to commissioning.`,
      },
      {
        h2: "Supervisor checklist for first cold room project",
        content: `Assign one supervisor who has completed cam-lock training on a small room before leading large export kit. Checklist: slab level, vapor seal stocked, corner panels unpacked first, diagonal check every fourth panel, ceiling support in place before last wall, door frame plumb, foam injection only where drawing shows. Stop work if locks fail to engage — forcing with hammer damages facing. Daily photo to supplier technical contact catches drift early. Sign-off meeting with refrigeration contractor before pulling to temperature confirms envelope complete — avoids blaming panels for plant issues when door still leaks.`,
      },
      {
        h2: "Tooling and consumables often missing on site",
        content: `Cam-lock install needs rubber mallet, pin insertion tool, vapor seal gun, and approved foam canisters — missing tools lead to improvised methods that void warranty. Screw guns for roof must be torque limited or depth controlled per supplier — impact drivers overdrive. Fall protection for roof erection is separate from panel scope but stops work if absent — plan before panel lift. Consumables stockout of correct pin size stops wall run mid-course — count pins from BOM before start. First-time installers should mock up one corner on ground to practice lock engagement before lifting to slab.`,
      },
      {
        h2: "Subcontractor scope boundaries",
        content: `Define whether panel supplier scope includes install supervision only or labour — grey scope causes sequence disputes. Main contractor often expects panel vendor to direct sequence while vendor assumes GC coordinates — write sequence owner in contract. Refrigeration contractor should not pull room to temperature until panel installer signs vapor complete — split responsibility causes finger pointing. One joint inspection hold point in contract payment schedule incentivizes correct sequence more than verbal briefing alone.`,
      },
      {
        h2: "Cold chain handover to operations",
        content: `Operations team needs setpoint range, door limit settings, and alarm points before product load — not only panel install sign-off. Training on vapor integrity: do not mount shelves through panel without seal kit. Maintenance calendar for door gasket and strip curtain included in handover pack. Panel supplier O&M should list approved cleaning agents for facing — wrong chemical voids coating warranty. As-built drawing with panel mark numbers taped in plant office speeds future ordering of replacement lengths.`,
      },
      {
        h2: "Summary for specification writers",
        content: `Install spec references supplier erection guide revision and sequence diagram. Hold points: sole plate, first corner, vapor seal before ceiling, door frame plumb. Prohibit extra screw holes and unlisted foam injection. Supervisor name qualification cam-lock training. Payment milestone tied to photo sign-off reduces sequence shortcuts. Weather limit for roof fix and foam cure stated. Include toolbox talk sign-in sheet template in tender so main contractor proves briefing occurred. Retain daily sequence checklist signed by supervisor for warranty file. Define rework cost allocation if sequence error caused by GC schedule pressure versus installer skill. Cold room projects benefit from mock-up corner on ground day zero before crane time booked.`,
      },
      {
        h2: "Quick reference for buyers",
        content: `Sequence: level track, vapor seal, square corner, walls, ceiling support, ceiling, doors last, foam per detail only. Check diagonal every fourth panel. Photo vapor seal before close-in. No extra screws. Align MEP before final wall row. Sign off before pull-down. Brief crew on facing orientation if both sides look similar.`,
      }
    ],
    limitations: "Sequences vary by panel system — follow supplier install guide for your order. We can advise on typical cam-lock practice but do not supervise site labour unless agreed separately. Structural fixings for roofs require engineer approval. Values and examples are indicative for installation sequence mistakes planning — confirm against project drawings, local codes and supplier test reports before purchase. Contact our export team with your application details if you need a written recommendation tied to a quotation. Main contractor schedule should show panel install window after slab cure and before MEP bulkhead clash — sequence on Gantt reduces overlap trades. Installer qualification requirements vary by system — verify against supplier install manual for your order. Weather delays and cure times are site responsibilities unless supervision scope says otherwise. Warranty claims require evidence that approved sequence and consumables were used — keep daily log. Third-party install audit before pull-down is optional but useful on first project. Record ambient temperature during joint foam injection if cold-room warranty covers seal performance.",
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "evaluating-sandwich-panel-suppliers",
    name: "Evaluating Sandwich Panel Suppliers",
    h1: "How to Evaluate Sandwich Panel Suppliers",
    seoTitle: "Evaluating Panel Suppliers | PHOENIXX",
    metaDescription: "Factory checks, test reports, export packing and thickness tolerance when choosing a sandwich panel manufacturer for cold storage or industrial projects.",
    relatedProducts: ["puf-panels","peb-prefabricated-buildings","cold-room-panels"],
    relatedSolutions: ["cold-storage","warehousing-logistics"],
    relatedComparisons: ["puf-vs-pir-panels"],
    quickAnswer: "Evaluate panel suppliers on verifiable factory output, not brochure claims. Ask for recent thermal and density test reports, coating spec on the order, thickness tolerance (±2 mm), and export packing photos. Confirm shop drawings before production and damage replacement terms. Compare price only after technical compliance is confirmed.",
    bodySections: [
      {
        h2: "Technical evidence to request upfront",
        content: `Request EN 14509 or equivalent test reports dated within three years, covering core density, lambda, and declared U-value for the thickness you will buy. Ask for steel mill certificates for zinc and coating. Confirm thickness tolerance and flatness — warped panels rack joints. Query whether the line is continuous lamination or discontinuous press — both work if quality records exist.

Check test sample thickness matches your order — report at 40 mm does not cover 100 mm claim without interpolation letter.`,
      },
      {
        h2: "Factory capability signals",
        content: `Useful signals: in-house roll forming, CNC length cutting, labelled bundle tracking, and QC records per order. Video walkthrough or visit beats brochure photos. Ask daily output capacity versus your delivery window — rushed orders skip curing time. Export experience shows in packing: edge protectors, desiccant, shrink wrap, and marked center of gravity on bundles.

Second shift production without QC overlap increases batch risk — ask shift QC protocol.`,
      },
      {
        h2: "Worked example: scoring three export quotations",
        content: `Project: 1 200 m² cold room panels to Kenya, 100 mm PUF. Supplier X lowest price, no test report on request. Supplier Y mid price, 2024 EN 14509 report, shop drawings included, export packing photos documented. Supplier Z highest price, full reports plus on-site supervisor offer. Scoring: eliminate X for missing docs; compare Y vs Z on whether supervisor is needed — buyer has local installer certified on cam-lock. Selected Y; saved 6% vs Z with acceptable risk. Price alone would have picked X and risked customs hold on unclear origin docs.

Incoterms FOB vs CIF shifted damage responsibility — score logistics not only panel price.`,
      },
      {
        h2: "Export packing and documentation",
        content: `Panels for sea freight need moisture protection and secure strapping — steel edges rust in humid ports if wrap is thin. Commercial invoice must match HS code and coating description for clearance. Ask if supplier has shipped to your destination before and which clearing issues appeared. Damage clause: who replaces bent panels at port — define in contract.

Fumigation certificate for wooden packing still required in some African ports — confirm ISPM compliance.`,
      },
      {
        h2: "Rejecting suppliers who over-promise performance",
        content: `Red flags: "A2 fire rating" on plain PUF without test number, U-values far below industry curves, or density claims without lab header. Another overspec trap is suppliers promising installation certification they cannot document. Walk away from vague performance — cold chain and fire authorities ask for paper, not assurances.

Social media project photos may not be supplier's own plant — reverse image search if doubtful.`,
      },
      {
        h2: "Contract clauses that protect the buyer",
        content: `Include: declared spec on order (thickness, density, coating, U-value reference), replacement policy for transit damage above X%, production hold until drawing approval, and penalty or credit for late test document delivery. Retain partial payment until bundle count matches packing list at port if Incoterms allow inspection.

Arbitration seat and language matter for cross-border disputes — agree before signature.`,
      },
      {
        h2: "Reference projects and repeat export",
        content: `Ask for two reference projects in climates similar to yours — thickness and coating choices that worked in Gujarat may differ for coastal Africa. Speak to the buyer's installer, not only the sales contact. Repeat export to same country suggests documentation templates exist for customs.`,
      },
      {
        h2: "After-sales and spare panel policy",
        content: `Confirm lead time for replacement panels matching batch colour and thickness years later — some lines change coil suppliers. Spare panel pricing on original order is cheaper than one-off later. Clarify technical support channel during install — WhatsApp photo review of joint detail prevents errors before whole wall is built.`,
      },
      {
        h2: "Long-term partnership signals",
        content: `Suppliers who maintain test report library and update when formulation changes are lower risk than one-off traders. Ask how they handle formulation change notification to repeat buyers — foam chemistry changes should trigger updated U-value letter. Panel line investment date indicates capacity stability; very old lines may lack current QA automation but can still produce good panels if records are solid. Willingness to hold production until drawing approval is signed indicates process maturity. Price drops far below market without explanation correlate with density or thickness shortfall — verify before celebrating low bid.`,
      },
      {
        h2: "Visiting the factory versus remote audit",
        content: `Video audit with live pan of lamination line and QC desk substitutes when travel budget is limited — insist on unedited walk, not slideshow. Visit during production of your order if volume large — confirms line running and packing method. Ask to see rejected panel quarantine area — mature QA holds non-conforming stock. Compare coil storage under roof versus climate controlled — humidity on coils affects facing quality. Speak to export documentation clerk, not only sales — documentation errors delay port more than foam quality. Record names of technical contacts for install support — turnover is high at some mills; get backup contact in contract.`,
      },
      {
        h2: "Payment terms versus documentation delivery",
        content: `Link final payment tranche to delivery of test report PDF and as-built panel schedule — not only to container departure. LC documents must match coating description exactly — typo on HS code holds cargo. Advance payment percentage versus new supplier risk — use smaller PO on first order if docs were slow during enquiry. Escrow or inspection agent at factory before shipment is option on large orders. Track record of same buyer repeat orders within two years is strong signal supplier delivered acceptable docs and panels previously.`,
      },
      {
        h2: "Ethical and compliance screening",
        content: `Large buyers may require modern slavery and environmental questionnaire from mill — panel supplier should pass through from steel coil source. Export compliance includes sanctioned country check on bank route — not panel technical but blocks shipment if failed. Child labour and safety audit at factory increasingly requested by EU buyers — supplier with recent audit report answers faster. ISO 9001 at panel plant does not replace product test report but shows process control. Align supplier code of conduct with your corporate policy before multi-year frame agreement.`,
      },
      {
        h2: "Summary for specification writers",
        content: `Evaluation scorecard weights: test docs 30%, export track record 25%, packing 15%, price 20%, responsiveness 10% — adjust to project. Disqualify missing thermal report on cold chain order. Reference check two projects minimum. Contract exhibits: spec, test report IDs, packing standard photo, damage replacement clause. First order size limit optional risk control.`,
      },
      {
        h2: "Quick reference for buyers",
        content: `Minimum enquiry return: EN 14509 or equivalent report, coating spec, thickness tolerance, packing photos, shop drawing offer, export reference. Reject missing test PDF. Score price after docs pass. Contract: spec on order, damage clause, drawing approval hold. Call one reference project installer before final award on cold chain orders. Keep scored evaluation sheet in procurement file.`,
      }
    ],
    limitations: "Supplier evaluation is buyer responsibility — we describe common practice, not rankings of named competitors. Test report validity depends on test body and scope. Legal terms require your counsel for international contracts. Values and examples are indicative for evaluating sandwich panel suppliers planning — confirm against project drawings, local codes and supplier test reports before purchase. Contact our export team with your application details if you need a written recommendation tied to a quotation. Bank reference and trade registration check complements technical scoring on first international order. Scoring examples are illustrative — weight criteria to your project risk. We do not endorse or rank third-party suppliers on this page. Legal review of export contracts remains the buyer's responsibility. Past export success to one country does not guarantee identical customs treatment elsewhere. Request proof of insurance for cargo in transit on first large order. Factory visit or live video audit remains the strongest verification step. Retain scored evaluation worksheets with procurement files for audit trail on public-sector tenders.",
    draft: false,
    updatedAt: "2026-09-14",
  }
];
