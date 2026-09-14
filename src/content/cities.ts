import type { CityInput } from "./types";

export const cities: CityInput[] = [
  {
    slug: "nairobi",
    name: "Nairobi",
    countrySlug: "kenya",
    nearestPort: "Mombasa (Kilindini Port)",
    relevantProducts: ["puf-panels", "pir-panels", "cold-room-panels", "roofing-panels"],
    relevantIndustries: ["cold-storage", "food-processing", "warehousing-logistics"],
    industrialEstates: [
      "Nairobi Industrial Area",
      "Embakasi light industrial belt",
      "Tatu City industrial zone",
    ],
    localIndustries: [
      "Horticulture packhouses and pre-export cold holding",
      "Third-party food distribution and retail cold storage",
      "Inland container depot logistics and bonded warehousing",
    ],
    projectProfiles: [
      "Chiller rooms for flower and fresh-produce exporters before JKIA air freight",
      "Freezer and chiller retrofits in Industrial Area food processors",
      "Insulated roof replacements on distribution warehouses in Embakasi",
    ],
    roadAccessNotes:
      "Containers cleared at Mombasa typically reach Nairobi by road on the A109 corridor in one to two days depending on haulier scheduling and weighbridge queues. Some consignments divert to Nairobi inland container depots for customs release before last-mile delivery to Industrial Area or Embakasi sites — your clearing agent chooses ICD versus direct port release. Tatu City and northern bypass routes add distance but avoid central traffic; confirm unloading access and crane reach at the gate before the truck leaves Mombasa. Panel bundles need flatbed or suitable trailer securing for the highland climb — lashings can chafe facings if padding is omitted.",
    climateNotes:
      "Nairobi sits near 1,600 m elevation with warm days, cooler nights and a wider diurnal swing than the coast. Dry seasons reduce ambient humidity but sun load on warehouse roofs remains strong midday.",
    portRelevance:
      "Mombasa remains the primary entry port for Nairobi-bound panel orders. Sea freight lands at Kilindini; inland haul is arranged after Kenya Revenue Authority release. ICD Nairobi options suit buyers who want customs formalities closer to site — not every shipment qualifies, so confirm with your agent before we lock sailing dates. Transit time from Indian west coast ports is commonly two to three weeks at sea plus inland road days.",
    quickAnswer:
      "PHOENIXX exports PUF, PIR and cam-lock cold room panels from India to Nairobi via Mombasa port clearance and road haul inland. We manufacture to order, provide standard Indian export documents and quote FOB India or CIF Mombasa. Your clearing agent handles IDF, any PVoC steps and inland delivery to Industrial Area, Embakasi, Tatu City or other Nairobi sites. Send room dimensions, target temperature, door count and delivery location for pricing from our export desk.",
    marketContext:
      "Nairobi concentrates Kenya's cold-chain investment: horticulture exporters need reliable holding rooms before air cargo departs Jomo Kenyatta, while food processors and retail logistics operators add chiller capacity across Industrial Area and Embakasi. The inland container depot network lets some buyers clear panels closer to site, though port-side release at Mombasa still dominates for first-time importers. Tatu City adds greenfield factory and warehouse builds where insulated roof panels shorten enclosure time compared with conventional sheeting. Nairobi's highland climate means night-time ambient can sit well below midday peaks — refrigeration plant sizing should use local design conditions, not coastal Mombasa assumptions copied from another project. Repeat buyers often split orders: cam-lock cold room kits for process areas plus PUF roofing for ambient warehouses on the same campus. Landed cost discussions usually compare CIF Mombasa plus local haul against ex-works India plus a Nairobi contractor's install quote — we provide both when asked.",
    specificationNotes:
      "Highland day–night swings favour thicker PUF cores or PIR where headroom is tight in retrofitted Industrial Area buildings. Horticulture chillers targeting roughly +2 °C to +8 °C see frequent door cycles — specify cam-lock quality, vapor barriers and coving details on drawings. Freezer rooms below −18 °C need floor insulation and heater-tape provision at joints; confirm electrical supply before we lock panel thickness. Warehouse roofing in Embakasi should use light external colour to reduce midday heat gain on purlins. Panels cleared at Mombasa and trucked uphill may sit in yard storage briefly — keep bundles under cover and off bare ground until install. Practitioner caveat: ICD versus direct port routing changes dwell time and handling counts; a cheap sea freight line with slow vessel plus ICD transfer can cost more in yard days than a slightly higher CIF with faster release.",
    faqs: [
      {
        question: "Do Nairobi projects clear customs at Mombasa or at an inland depot?",
        answer:
          "Most first shipments clear at Kilindini Port in Mombasa then move by road to Nairobi. Inland container depot release is possible for some consignments when your clearing agent structures the entry that way — it does not apply to every buyer or product line. Tell us your agent's preferred route when requesting a quote so packing and document timing match their workflow.",
      },
      {
        question: "What cold room temperatures do Nairobi horticulture exporters usually specify?",
        answer:
          "Fresh flower and produce holding rooms commonly target chiller bands around +2 °C to +8 °C before air freight. Some exporters add separate pre-cooling rooms at slightly higher bands. Freezer specifications appear in meat and prepared-food projects but are less common in flower packhouses. Send your commodity and hold time so we size thickness and joint detail correctly.",
      },
      {
        question: "Can one container serve a cold room in Industrial Area and roofing panels in Embakasi?",
        answer:
          "Yes, when bundle weights and lengths fit a single container and your install sequence allows one delivery point first. Mixed SKU loads need clear packing lists for customs inspection — your agent should review before we dispatch. If two sites unload separately, split containers sometimes reduce local handling even if sea freight is duplicated.",
      },
      {
        question: "How should panels be stored after arrival in Nairobi?",
        answer:
          "Keep cam-lock bundles flat, strapped and under waterproof cover if install is more than a few days out. Highland nights can be cool while midday sun still fades unprotected facings. Do not stack heavy equipment on panel packs. Acclimatise panels to ambient before locking joints if they arrived from a hot Mombasa yard the same morning.",
      },
      {
        question: "Are PIR panels worth the premium for Nairobi retrofits?",
        answer:
          "PIR helps when ceiling height is fixed and you need thinner walls for the same insulation value — common in older Industrial Area buildings with low truss clearance. PUF remains the default for stand-alone cold rooms where thickness is flexible. Share room dimensions and structural constraints; we recommend one core type per room for consistent expansion behaviour.",
      },
      {
        question: "What documents does our clearing agent need before panels sail to Mombasa?",
        answer:
          "Commercial invoice, packing list, bill of lading and certificate of origin from our Indian export desk, plus your agent's IDF and any conformity steps they require before shipment. We do not control Kenya customs classification — your agent verifies HS treatment and landed cost. Send consignee details early to avoid reissuing bills of lading.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "athi-river",
    name: "Athi River",
    countrySlug: "kenya",
    nearestPort: "Mombasa (Kilindini Port)",
    relevantProducts: ["puf-panels", "roofing-panels", "wall-panels", "peb-prefabricated-buildings"],
    relevantIndustries: ["warehousing-logistics", "manufacturing-plants", "food-processing"],
    industrialEstates: [
      "Athi River EPZ and adjacent export parks",
      "Mavoko light industrial plots along Mombasa Road",
      "Daystar–Sabaki corridor warehouse clusters",
    ],
    localIndustries: [
      "Export-oriented garment and light assembly plants",
      "Regional distribution centres serving Nairobi retail",
      "Food and beverage processing with ambient and chilled storage",
    ],
    projectProfiles: [
      "PEB warehouse shells with PUF roof and wall infill for logistics operators",
      "Manufacturing plant insulated envelopes on greenfield EPZ plots",
      "Cold storage add-ons at beverage and dairy processing lines",
    ],
    roadAccessNotes:
      "Athi River sits on the Mombasa–Nairobi A109 corridor roughly halfway between port and capital — containers often stop here before or after Nairobi ICD clearance depending on agent routing. Mombasa Road carries heavy truck traffic; night deliveries sometimes avoid weighbridge peaks. EPZ gates require pre-registration of hauliers and unloading equipment — confirm slot times before the truck departs Mombasa. Wall and roof panel lengths must match crane reach on site; narrow access lanes between warehouse pads are common on subdivided plots. Export park tenants occasionally share a single gate slot — coordinate with neighbouring importers if multiple containers from one vessel target the same week.",
    climateNotes:
      "Semi-arid Athi plains run hotter and drier than Nairobi highland with strong sun and occasional dust-laden winds. Thermal design should assume higher midday ambient than Limuru or Westlands projects. Night radiative cooling can still drop surface temperatures on exposed steel — allow install during stable daylight hours so panels do not lock under thermal stress.",
    portRelevance:
      "All panel imports still enter Kenya through Mombasa. Athi River buyers benefit from shorter road haul than upcountry sites once containers release — typically same-day or next-day from Mombasa yard if paperwork is ready. Some EPZ operators use bonded movement straight to park gates; procedure is agent-specific. When vessels discharge multiple SKU containers for one industrial park, staggered release reduces yard clutter if your contractor can only unload one load per day.",
    quickAnswer:
      "PHOENIXX supplies PUF roof and wall panels plus cam-lock cold room kits to Athi River industrial parks from India via Mombasa port. Export-oriented factories and regional warehouses specify insulated envelopes on fast programmes — we manufacture to order and ship in containerised bundles. Quote requests should include plot location within Athi River EPZ or Mavoko, envelope areas, cold room temperatures if any, and your clearing agent's preferred release point. Mixed roof and wall orders need labelled packing lists for customs inspection at Kilindini.",
    marketContext:
      "Athi River functions as Nairobi's industrial overflow: export processing zones, large-footprint warehouses and manufacturing plants land here when central Nairobi land costs bite. The Mombasa–Nairobi corridor places Athi River logically for containers that clear at Kilindini and move north without entering city-centre congestion. PEB structures with PUF infill panels appear frequently in logistics bids where owners want weathertight shells quickly. Food and beverage plants add chilled rooms for raw material and finished goods beside ambient production halls. Buyers compare landed panel cost against local metal-deck alternatives — speed of enclosure and insulation value in one package often decide the specification. EPZ tenants should confirm any park management notices about facade colour or fixing types before we lock external facing. Dust from nearby quarries can accumulate on stored panels — plan covered storage between delivery and install. Third-party logistics operators building dual-temperature campuses often phase cold rooms first while roofing panels follow once steel is standing — share programme sequence so we align container contents with your contractor's mobilisation dates rather than shipping everything to an unprepared plot.",
    specificationNotes:
      "Warehouse roofs need light external colour and adequate purlin spacing for PUF span tables — Athi sun load rewards reflective facings. Wall panels on manufacturing blocks should specify washer-friendly internal surfaces where washdown occurs. Cold rooms inside EPZ food plants need drainage falls toward floor drains and stainless-compatible coving. Fixings exposed to open yard storage before install should be galvanised or stainless per your maintenance plan. Long Mombasa Road frontages expose gable ends to afternoon sun — consider insulated wall panels on west-facing elevations even when the original brief was roof-only. Cam-lock cold rooms sited beside production halls should include vestibule or air-lock details if forklifts enter constantly, otherwise condensation tracks across the floor at shift change. Practitioner caveat: splitting one order across multiple small contractors on neighbouring plots can duplicate haulage from Mombasa — coordinate delivery windows if several tenants import simultaneously from the same vessel.",
    faqs: [
      {
        question: "Is Athi River closer to Mombasa port haul than Nairobi Industrial Area?",
        answer:
          "Road distance from Mombasa to Athi River is shorter than to central Nairobi, which can reduce last-mile cost once customs releases the container. Total landed cost still includes sea freight and clearance — do not choose Athi River land purely for haul savings without comparing full agent fees and plot readiness.",
      },
      {
        question: "Do EPZ tenants need different import paperwork for sandwich panels?",
        answer:
          "EPZ operators often work with specialised clearing agents familiar with bonded park entry. Panel imports still require standard Kenya entry steps — your agent confirms whether goods enter the EPZ under bond or domestic consumption treatment. We provide commercial descriptions suitable for customs review but do not file Kenya entries ourselves.",
      },
      {
        question: "Can PEB steel and our PUF panels ship in one container?",
        answer:
          "Primary steel frames usually ship separately from panel bundles due to weight and handling equipment differences. Small accessory packs can combine when weights allow. Share your steel supplier's delivery schedule so panel containers arrive when the frame is ready for infill — premature delivery invites yard damage on open plots.",
      },
      {
        question: "What roof pitch suits Athi River warehouse PUF panels?",
        answer:
          "Low-slope insulated roofs are common on logistics sheds — confirm designed pitch, purlin orientation and gutter lines on drawings before manufacture. Steeper pitches appear on smaller manufacturing blocks. We need structural spacing and required insulation value to select core thickness and fixing pattern.",
      },
      {
        question: "How do dust and heat affect panel storage on open Athi plots?",
        answer:
          "Store bundles under tarpaulin with airflow gaps — trapped heat can soften facings on dark covers. Brush dust from joint tongues before cam-lock assembly; grit in grooves prevents proper engagement. Schedule install soon after delivery if the site lacks secure covered storage.",
      },
      {
        question: "Should cold rooms in Athi beverage plants use PUF or PIR?",
        answer:
          "PUF cam-lock remains standard for chiller and freezer rooms in beverage and dairy lines. PIR suits retrofits with tight ceiling clearance above existing equipment. Match core type within each room and confirm refrigeration plant capacity against Athi ambient peaks, not coastal Mombasa averages.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "mombasa",
    name: "Mombasa",
    countrySlug: "kenya",
    nearestPort: "Mombasa (Kilindini Port)",
    relevantProducts: ["puf-panels", "cold-room-panels", "industrial-doors"],
    relevantIndustries: ["cold-storage", "food-processing"],
    industrialEstates: [
      "Mombasa mainland industrial zones near port access roads",
      "Likoni–Ukunda processing belt fish handling sites",
      "Bamburi and Shanzu light industrial pockets",
    ],
    localIndustries: [
      "Fish and seafood blast-freeze and cold storage",
      "Import re-export logistics with temperature-controlled holding",
      "Coconut, spice and prepared food processing",
    ],
    projectProfiles: [
      "Port-side blast freezer rooms for tuna and pelagic landings",
      "Cam-lock chillers for imported frozen food redistribution",
      "Insulated industrial doors on high-cycle fish processing lines",
    ],
    roadAccessNotes:
      "Port-side sites sit within short drayage distance of Kilindini once customs releases containers — yard congestion and inspection queues dominate timing more than road kilometres. Likoni ferry crossings add scheduling risk for south-coast installs; mainland sites avoid ferry dependency. Narrow port access roads require agreed delivery windows with terminal operators. Salt spray on open trucks during short port-to-site moves is normal — wipe facings before joint assembly. Fish plants running night landings may prefer dawn delivery before production peaks — book hauliers against your processing schedule, not generic port hours alone.",
    climateNotes:
      "Coastal humidity, salt aerosol and steady warm ambient year-round. External facings and fixings must tolerate marine exposure; unprotected steel fixings corrode quickly. Brief tropical downpours between sunny periods raise yard humidity — do not lock cam-lock joints on rain-wetted tongues without drying first. Morning sea mist is common even on clear coastal days.",
    portRelevance:
      "Mombasa is both destination and national entry port — panels for local install often clear where they land, avoiding inland transit handling. Kilindini dwell time varies with agent preparedness and inspection slots; pre-arrival document submission shortens release. Re-export or transit cargo to landlocked neighbours uses different agent workflows — confirm before shipment if panels are not staying in Kenya. Local drayage rates spike when multiple vessels discharge the same week — pre-book trucks when bill of lading shows ETA.",
    quickAnswer:
      "PHOENIXX exports PUF cam-lock cold room panels and industrial cold-store doors to Mombasa for port-side and coastal processing projects. Manufacturing is in India on made-to-order specifications; containers arrive Kilindini for local clearance and short drayage to site. Specify salt-air facing requirements, target room temperatures and door cycle rates when requesting CIF Mombasa or FOB India pricing. Share whether cargo stays in Kenya or transits inland so consignee details match agent filing before sail. Include filleting line washdown zones on drawings when requesting internal facing specs.",
    marketContext:
      "Mombasa coastal economics centre on fish processing, import redistribution and logistics warehouses within drayage distance of Kilindini. Blast-freeze and holding rooms for seafood landings specify low-temperature cores, heavy-duty floors and rapid-closing doors because product value decays quickly in warm ambient. Imported frozen food operators add chillers near port yards to break bulk before upcountry dispatch. Salt air and humidity punish cheap fixings and uncoated steel — coastal projects should budget for marine-grade hardware even if panel facings are standard polyester. Some Mombasa orders ultimately feed Uganda or Rwanda after inland transit; documents and consignee names must match agent intent at quotation stage. Local contractors experienced with cam-lock assembly are available but peak season can stretch schedules — book install crews before vessel ETA. Tuna and pelagic processors often run parallel room builds while an existing chiller stays live — phased delivery reduces yard clutter if your agent can split bills of lading or stagger container release without duplicating duty events.",
    specificationNotes:
      "Specify polyester or equivalent external facing rated for coastal exposure; internal facings in fish plants should tolerate washdown chemicals. Floor panels in blast-freeze rooms need rated load and anti-slip finish where operators stand during grading. Industrial doors on high-cycle lines require matched refrigeration air curtains and maintenance access — door size affects panel wall layout. Stainless or coated fixings are mandatory within spray zones. Ceiling panels above filleting lines should slope toward drains where hygiene audits require no flat water pooling. If rooms open directly to quay-side ambient, vestibules reduce frost line migration on floor joints during door-open cycles. Practitioner caveat: storing panels unprotected in port yards during rainy season wicks salt moisture into bundle edges — push for covered storage or immediate site move even if demurrage timing is tight.",
    faqs: [
      {
        question: "How close to Kilindini can cold rooms be installed?",
        answer:
          "Many processing and logistics sites sit within short truck distance of port gates once containers release. Exact drayage depends on customs status and whether cargo moves under bond to a private yard. Share GPS or estate name so your agent and haulier confirm access restrictions before we sail.",
      },
      {
        question: "Do Mombasa fish plants need special panel facings?",
        answer:
          "Coastal salt air favours external facings and fixings chosen for marine exposure. Internal surfaces in filleting and washdown areas should resist moisture and cleaning agents. Standard inland facings without corrosion-rated fixings fail prematurely on coast — tell us the room location when ordering.",
      },
      {
        question: "Can panels clear at Mombasa and continue to Nairobi in one container?",
        answer:
          "Yes for Kenya domestic moves after full clearance and inland haul booking. Transit to neighbouring countries uses separate bond procedures — your agent structures that before arrival. Do not assume a Mombasa-cleared container can cross borders without additional paperwork.",
      },
      {
        question: "What door types suit high-cycle fish processing?",
        answer:
          "Sliding and hinged cold-store doors with heated frames appear frequently in blast-freeze and chiller openings with constant forklift traffic. Specify opening width, headroom and expected cycles per hour so we match door hardware to refrigeration load. Mis-sized doors leak air and overload compressors. Heated frames reduce ice buildup in coastal humidity — confirm electrical provision in MEP scope before punch lists freeze.",
      },
      {
        question: "How long do panels typically sit in Mombasa port yards?",
        answer:
          "Dwell varies with agent document readiness and inspection queues — prepared agents release within a few days; missing IDF or conformity steps extend storage. We share shipping documents before arrival to shorten the window. Budget yard days in project schedules even when documents are complete. Photograph bundle condition at yard exit if storage exceeds one week — salt mist can stain facings without obvious dent damage.",
      },
      {
        question: "Should freezer rooms in Mombasa use thicker cores than Nairobi?",
        answer:
          "Coastal ambient is warmer than Nairobi highland at most hours — refrigeration plant works harder, but panel thickness is sized against target room temperature and energy goals, not city name alone. Share design conditions and hold temperature; we recommend core thickness accordingly. Quay-side entries may still need vestibules regardless of core thickness — ask your refrigeration designer before we lock wall layout.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "dar-es-salaam",
    name: "Dar es Salaam",
    countrySlug: "tanzania",
    nearestPort: "Dar es Salaam Port",
    relevantProducts: ["puf-panels", "pir-panels", "cold-room-panels"],
    relevantIndustries: ["cold-storage", "food-processing", "warehousing-logistics"],
    industrialEstates: [
      "Ubungo and Chang'ombe industrial corridors",
      "Kurasini and port-adjacent logistics yards",
      "Mlandizi and Kibaha industrial growth pockets",
    ],
    localIndustries: [
      "Food processing and edible oil packaging",
      "Import warehousing for upcountry Tanzania distribution",
      "Beverage and dairy chilling near urban consumption",
    ],
    projectProfiles: [
      "Port-side chillers for imported frozen and chilled cargo break-bulk",
      "PUF roof replacements on Ubungo distribution warehouses",
      "PIR-lined process rooms in compact urban food plants",
    ],
    roadAccessNotes:
      "Containers from Dar es Salaam port move by drayage to Ubungo, Kurasini and coastal industrial sites on tarmac but face urban traffic peaks mid-morning. Upcountry-bound cargo sometimes transships after clearance — confirm whether your site is port-side or requires further trucking to Mlandizi. Ferry-independent mainland routes are preferred for heavy loads. Unloading cranes must be booked ahead on congested streets near older industrial blocks. Kurasini yards with shared access sometimes restrict oversize loads to weekend windows — verify estate rules before container sails. Chang'ombe narrow alleys may require manual offloading of long roof panels if crane access fails on first attempt.",
    climateNotes:
      "Warm humid coastal climate with corrosion risk on exposed steel. Seasonal rains increase ambient moisture — vapor control in cold rooms matters year-round. Ubungo inland feels slightly less salt exposure than Kurasini port belt but humidity remains high during long wet spells.",
    portRelevance:
      "Dar es Salaam Port is Tanzania's dominant entry for Indian Ocean container traffic including panels from India. Clearance procedures and dwell depend on TRA readiness and agent familiarity. Some Zambia- and Malawi-bound cargo transits Dar before road or rail onward — consignee details must reflect final use. Port-side chillers often need same-week drayage — idle containers in Kurasini yards accumulate demurrage faster than agents quote on calm weeks. Pre-arrival invoice review with your agent reduces TRA holds that extend yard stays beyond free time. Share agent contact details on every quote request.",
    quickAnswer:
      "PHOENIXX exports PUF, PIR and cam-lock cold room panels from India to Dar es Salaam Port for Tanzanian food, logistics and processing projects. We manufacture to order, supply Indian export documentation and quote FOB or CIF Dar. Your clearing agent handles Tanzania Revenue Authority entry, any pre-shipment inspection steps and drayage to Ubungo, Kurasini or other city industrial sites. Include facing preferences for coastal corrosion on every enquiry.",
    marketContext:
      "Dar es Salaam combines port-side logistics with urban food and beverage production — cold storage builders specify cam-lock kits for chillers near Kurasini yards while warehouse operators upgrade PUF roofing in Ubungo. Coastal corrosion influences facing and fixing choices on every quote. PIR panels appear where city plants lack headroom for thick PUF walls. Tanzania also serves as transit corridor for landlocked neighbours; mislabelled consignee data on bills of lading delays TRA release. Buyers should align panel delivery with local install capacity — experienced cold room contractors exist but peak import seasons stack projects. Energy cost pushes some owners toward thicker insulation despite higher first cost; others prioritise faster enclosure with standard cores. Supermarket suppliers building shared chillers for multiple tenants should agree temperature zoning before we lock panel counts — retrofitting missing partitions after install is costly on cam-lock rooms. Kibaha growth plots with new power feeds should confirm transformer capacity before we size heater-tape loads on freezer doors.",
    specificationNotes:
      "Coastal facings and stainless or coated fixings for external and washdown zones. Cold rooms need vapor barriers suited to humid ambient — joint tape and coving details belong on approved drawings. Warehouse roofs specify drainage and gutter compatibility with existing steel. PIR cores help retrofits along Chang'ombe corridors where truss clearance is tight. Edible oil and beverage lines sometimes specify pit-mounted drainage that conflicts with panel floor coving — resolve slab falls on drawings before manufacture. Ubungo warehouse re-roofs may need staggered delivery if only half the bay is vacant at a time; tell us phasing so bundles match crane access on active sites. Practitioner caveat: TRA classification questions can hold containers for re-inspection — ensure commercial invoice descriptions match agent filing exactly; we revise descriptions before sail if your agent flags wording.",
    faqs: [
      {
        question: "Which Tanzanian industrial areas receive most panel deliveries?",
        answer:
          "Ubungo and Chang'ombe warehouses, Kurasini port-adjacent logistics sites and growing Mlandizi–Kibaha plots are common delivery points after Dar port clearance. Share estate name and gate requirements so hauliers avoid failed delivery attempts on narrow streets.",
      },
      {
        question: "Do Dar es Salaam projects need corrosion-rated fixings?",
        answer:
          "Yes for coastal external envelopes and internal washdown areas exposed to salt and moisture. Inland-facing walls still benefit from coated fixings if panels sit in open yards before install. Specify environment on enquiry so we do not quote inland hardware for marine sites.",
      },
      {
        question: "Can Dar-cleared panels transit to Zambia or Malawi?",
        answer:
          "Transit and re-export procedures are agent-managed after TRA release — additional bonds and road permits apply. Tell us at quotation if cargo is not staying in Tanzania so documents reflect transit intent. We do not control border outcomes on onward corridors. Zambia-bound loads need consignee names matching transit bonds before Mombasa or Dar departure — mismatches stop trucks at Nakonde unrelated to panel quality.",
      },
      {
        question: "When is PIR preferred over PUF in Dar food plants?",
        answer:
          "PIR suits retrofits with limited ceiling height or door opening constraints where thinner walls must meet insulation targets. Greenfield cold rooms usually stay on PUF cam-lock for cost and contractor familiarity. Mixing core types within one room is discouraged. Chang'ombe retrofits with low trusses often combine PIR walls with standard PUF ceiling panels — confirm mixed-room details on drawings before manufacture.",
      },
      {
        question: "How should we plan storage if TRA inspection delays release?",
        answer:
          "Keep bundles under cover in port or bonded yards — coastal rain and salt spray damage unprotected edges. Photograph bundle condition before signing release if panels sit in open storage. Push your agent for covered yard space when extended dwell is likely. TRA re-inspection sometimes opens bundles — repack strapping carefully before final drayage to avoid tongues pulling apart in urban traffic.",
      },
      {
        question: "What should we send for a Dar es Salaam cold room quote?",
        answer:
          "Room internal dimensions, target temperature, door sizes and count, floor load needs if freezers, delivery site area after port, and facing preferences for coastal exposure. Include agent contact if they require specific invoice wording before we manufacture. Ubungo re-roofs need existing purlin spacing and crane reach notes — cold-room-only quotes still need door cycle estimates for hardware sizing.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "kigali",
    name: "Kigali",
    countrySlug: "rwanda",
    nearestPort: "Mombasa (transit via Uganda)",
    relevantProducts: ["puf-panels", "cold-room-panels"],
    relevantIndustries: ["cold-storage", "food-processing"],
    industrialEstates: [
      "Kigali Special Economic Zone",
      "Masoro light industrial cluster",
      "Gikondo warehousing belt",
    ],
    localIndustries: [
      "Pharmaceutical and vaccine cold-chain storage",
      "Food processing and packaged goods production",
      "Hospitality and retail central kitchen supply",
    ],
    projectProfiles: [
      "GMP-aligned chillers for pharma distribution in the SEZ",
      "Cam-lock freezers for meat and imported frozen food",
      "Central kitchen cold prep rooms for hotel supply chains",
    ],
    roadAccessNotes:
      "Landlocked Kigali receives panels after Mombasa clearance and long road transit through Kenya and Uganda — commonly via Malaba and Gatuna borders depending on agent routing. Total overland time often exceeds sea leg; schedule install after physical arrival, not vessel ETA. SEZ gates require pre-declared hauliers. Mountainous sections demand secure lashing — panel facings chafe on long transits if dunnage is thin. Rwanda Revenue inspections at Gatuna occasionally sample bundle counts — keep packing lists accessible on the truck cab. SEZ first deliveries sometimes need escort vehicles — confirm with park admin before truck departs Mombasa.",
    climateNotes:
      "Highland capital with mild days, cool nights and two rainy seasons. Lower ambient than coastal ports but UV at altitude still stresses external warehouse facings. Short intense showers during rainy seasons raise site humidity — protect open bundles before afternoon storms. Gikondo yard storage without cover invites mold on facings within a fortnight during wet weeks each year.",
    portRelevance:
      "No local seaport — every import enters through Mombasa (or occasionally Dar es Salaam via alternate corridors). Port choice and border sequence define total lead time more than manufacturing duration. Transit bonds and multi-country documents must align before containers leave Indian Ocean ports. Agents sometimes re-route around congested borders mid-transit — consignee contact must stay reachable during overland legs. First-time SEZ importers should budget extra days at Gatuna when multiple containers from one vessel arrive the same week — bond limits occasionally force sequential release.",
    quickAnswer:
      "PHOENIXX exports PUF cam-lock cold room panels from India to Kigali via Mombasa port transit through Kenya and Uganda. We manufacture to order and provide full Indian export documents. Your clearing agent manages Mombasa release, transit bonds, border crossings and Rwanda Revenue entry at Kigali or SEZ gates. Send room specs, preferred corridor and SEZ gate requirements when requesting pricing. Pharma and food projects should share validation or hygiene expectations on initial enquiry drawings.",
    marketContext:
      "Rwanda's insulated panel demand clusters in the Special Economic Zone for pharma and food plants, plus Gikondo logistics for imported cold chain. Landlocked routing makes document accuracy critical — a mismatch between bill of lading consignee and transit bond stops containers at Kenyan or Ugandan borders for days. Pharma-oriented chillers specify tight temperature bands and backup power provisions that panel shells alone do not provide — we supply envelopes; local MEP contractors handle refrigeration and generators. Food processors add freezer capacity for imported protein and dairy. Highland climate moderates ambient versus Mombasa but altitude UV still favours light external roof colours on warehouse additions. Kigali buyers consolidating multiple room orders into one container should align bond limits with agent capacity — oversized mixed loads sometimes trigger split inspection at Gatuna that adds handling days unrelated to panel quality. Hotel central kitchens with small prep chillers should confirm ceiling height for cam-lock overhead joints before ordering thick floor-and-wall kits. SEZ pharma and food tenants should share cleanroom-adjacent hygiene notes even when the room is only a chiller — auditors ask about washdown and coving before they ask about U-values. Mountain road haulage from Mombasa transit partners needs drivers briefed on tarpaulin cover; uncovered crates through rainy highlands invite claims neither shipper nor buyer wants. Confirm whether your site power can run door heaters overnight before we ship freezer kits that assume continuous power.",
    specificationNotes:
      "Long transit handling favours strong edge protection on bundles and polyester facings resistant to multiple unload cycles. Pharma chillers need washable internal surfaces and coving details compatible with validation protocols — share clean-room expectations early. Freezer floors require rated insulation and heater tape at joints. Masoro and SEZ sites often require security escort for first container delivery — confirm gate protocol before truck leaves Mombasa to avoid rejected entry and idle demurrage. Gikondo logistics chillers with frequent door cycles benefit from vestibules even when room size is modest — share traffic patterns on enquiry drawings. Practitioner caveat: border queue length varies week to week — avoid concrete pours and crane bookings until panels clear Gatuna or alternative crossings; vessel arrival dates mislead project planners who ignore overland legs.",
    faqs: [
      {
        question: "Which transit corridor do Kigali panel imports usually follow?",
        answer:
          "Mombasa clearance then road via Kenya and Uganda to Gatuna border into Rwanda is the common path agents quote. Alternatives via Dar es Salaam exist but differ in time and cost. Your agent picks corridor based on current border processing — tell us their preference when ordering.",
      },
      {
        question: "Can pharma cold rooms use standard cam-lock panels?",
        answer:
          "Cam-lock PUF envelopes suit many 2–8 °C pharma holding rooms when local contractors add validated refrigeration, monitoring and backup power. Finishes and coving must meet your qualification scope — share GMP expectations on drawings so we specify washable internal facings and joint details your validator accepts.",
      },
      {
        question: "How many handling steps should packing tolerate?",
        answer:
          "Expect port unload, possible bonded yard storage, border inspections and final site offload — four or more touches are normal. We pack for sea plus extended road legs; still inspect tongues and grooves at Kigali arrival before assembly. Report transit damage to haulier immediately with photos. Border officials occasionally reject damaged outer bundles — keep inner panel IDs visible for count verification without cutting factory wrap.",
      },
      {
        question: "Do Kigali freezers need different thickness than coastal projects?",
        answer:
          "Thickness follows target room temperature and energy goals using Kigali design ambient, not Mombasa coastal averages. Highland nights reduce condenser load versus coast but do not automatically justify thinner freezers — send design conditions for recommendation. Pharma 2–8 °C rooms still need vapor control despite milder ambient — humidity spikes during rainy weeks condense at joints if coving is omitted.",
      },
      {
        question: "Should SEZ and Gikondo deliveries use one container?",
        answer:
          "Single-container delivery to one site simplifies transit bonds and unload. Split destinations after transit need agent approval and may duplicate border handling. Consolidate orders with neighbouring tenants only when agents confirm customs treatment. SEZ and Gikondo split deliveries rarely share one transit bond — assume separate entries unless agent writes combined filing.",
      },
      {
        question: "What lead time should planners assume for Kigali?",
        answer:
          "Manufacturing plus Indian Ocean sailing plus Mombasa dwell plus Kenya–Uganda–Rwanda transit commonly spans several weeks beyond ex-works date. Agents with prepared bonds move faster; first-time importers should add buffer for border learning curves. Book refrigeration plant after Gatuna exit — compressors idle in warehouses if ordered against vessel ETA alone.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "accra",
    name: "Accra",
    countrySlug: "ghana",
    nearestPort: "Tema Port",
    relevantProducts: ["puf-panels", "cold-room-panels", "roofing-panels"],
    relevantIndustries: ["cold-storage", "food-processing", "warehousing-logistics"],
    industrialEstates: [
      "Tema motorway industrial enclave",
      "Spintex and Airport City logistics pockets",
      "North Kaneshie and Awoshie light industrial strips",
    ],
    localIndustries: [
      "Food retail and supermarket distribution cold chain",
      "Poultry and protein processing with blast chill",
      "Import consolidation warehouses serving Greater Accra",
    ],
    projectProfiles: [
      "Multi-temperature cold rooms for retail distribution hubs",
      "PUF roof upgrades on Spintex logistics sheds",
      "Process chillers for poultry cutting and packaging lines",
    ],
    roadAccessNotes:
      "Most panel containers clear at Tema Port then move by road into Accra industrial areas — motorway access to Spintex is straightforward while older Kaneshie lanes need smaller trucks or off-peak delivery. Accra traffic peaks worsen afternoon last-mile times; schedule heavy loads before mid-morning when possible. Unloading at multi-tenant warehouses requires booked forklift and gate passes from estate managers. Rainy-season potholes on side streets to Kaneshie plots slow last-mile — allow buffer on delivery day. Spintex estate managers occasionally restrict weekend heavy loads — confirm gate hours before booking Tema drayage.",
    climateNotes:
      "Coastal humidity with high wet-season rainfall and strong UV between showers. External facings must handle moisture cycles; internal cold room vapor control is essential. Harmattan dust episodes occasionally coat open yards — brush facings before joint assembly after dust events. Tema motorway haul still exposes panels to humid air before Spintex unload — do not downgrade internal vapor barriers for inland-sounding addresses.",
    portRelevance:
      "Tema Port serves Greater Accra industrial demand — short drayage compared with haulage to Kumasi or Tamale. Some buyers store containers in Tema yards briefly before Accra site readiness; demurrage planning is agent-dependent. Indian Ocean sailings from west India ports are the usual lane for our exports. When Tema yard space is tight, agents may divert to Accra inland yards — confirm unload address before truck leaves port gate. Poultry plant deliveries near motorway exits should avoid Friday afternoon traffic peaks when Tema gates throttle truck entry.",
    quickAnswer:
      "PHOENIXX exports PUF cam-lock cold room and roofing panels from India to Accra via Tema Port clearance and local road delivery. We manufacture to order with Ghana-bound commercial invoices and standard shipping documents. Your clearing agent handles Ghana Customs entry and haulage to Spintex, Tema motorway estates or other Accra sites — send room dimensions, roof areas, temperature targets and washdown zone notes for quotes. Retail distribution projects should mark freezer floor loads and pallet door widths on layouts before we lock panel counts.",
    marketContext:
      "Accra's cold-chain growth tracks supermarket expansion and poultry processing — multi-deck chillers and freezer rooms appear in retail distribution centres while processing lines add blast chill capacity. Warehouse roofing projects in Spintex and Tema motorway zones specify PUF panels to cut heat gain in non-conditioned storage. Coastal humidity influences every envelope quote even for inland-appearing sites within Greater Accra. Tema haulage is short but traffic and gate restrictions dominate scheduling more than kilometre distance. Buyers often bundle cold room kits with roofing panels for mixed-use logistics campuses; mixed containers need clear packing lists for customs inspection. Poultry cut-up lines requesting frequent washdown should specify drainage and coving before cam-lock counts are frozen — adding floor falls after panel order invites site rework that delays commissioning. Airport City logistics tenants with tight delivery curfews should share gate hours so hauliers from Tema avoid failed night unload attempts. Buyer RFQs that only list square metres without temperature zones force us to re-quote after layouts arrive — mark chill, freeze and ambient on the first drawing. Coastal Accra warehouses without insulation still benefit from light-colour roofing panels that cut peak heat for workers and stored goods. Clearing agents should see product descriptions that match Ghana entry practice; we write commercial invoices to your agent's template when you share it early.",
    specificationNotes:
      "Coastal-facing specifications for external roofs and walls — light colours reduce heat load. Cold rooms for retail distribution need heavy-duty floor panels where pallet jacks turn frequently. Poultry washdown areas specify corrosion-resistant internal fixings. Vapor barriers and coving at floor joints critical in humid ambient. Spintex re-roof projects over occupied warehouses may require night install — panel lengths must fit crane reach over existing racking without shutdown beyond agreed windows. Freezer rooms sharing walls with ambient halls need thermal breaks at common partitions to limit condensation on the ambient side. Kaneshie strip retrofits with low door heights may need custom door frames — mark obstructions on layouts before we lock panel heights. Practitioner caveat: rainy-season site storage without cover swells panel edges — delay delivery if Accra site has no weathertight staging area rather than accepting damaged tongues.",
    faqs: [
      {
        question: "Do Accra deliveries always clear at Tema Port?",
        answer:
          "Tema is the normal entry for containerised panels bound for Greater Accra industrial sites. Your agent confirms final clearance location and whether goods move directly to site or via bonded yard. Share delivery address early so haulage quotes match customs routing. Kaneshie last-mile sometimes needs smaller trucks — note vehicle limits on enquiry forms.",
      },
      {
        question: "What cold rooms do Accra retail logistics projects specify?",
        answer:
          "Multi-temperature campuses combine chiller and freezer rooms with different core thicknesses and door types. Retail operators specify heavy floor loads and wide door openings for pallet flow. Send layout drawings with temperature zones marked for accurate panel and door counts.",
      },
      {
        question: "Can roofing and cold room panels share one container?",
        answer:
          "Yes when weights and lengths fit and your install crew sequence allows. Customs inspection needs itemised packing lists separating SKUs. If roofing install follows cold room by weeks, consider split shipments to reduce yard storage risk. Spintex sites with occupied racking need delivery phasing on packing lists so inspectors see roof bundles separately from cam-lock crates.",
      },
      {
        question: "How does coastal humidity affect Accra specifications?",
        answer:
          "External envelopes need facings and fixings suited to moisture cycling even away from the beach — humid air penetrates industrial zones. Internal cold rooms need vapor control to limit condensation at joints. Tell us washdown and external exposure zones on enquiry. Kaneshie retrofits with poor ventilation need vapor barriers even when rooms look inland on a map.",
      },
      {
        question: "What documents does Ghana Customs expect on panel imports?",
        answer:
          "Commercial invoice, packing list, bill of lading and origin certificate from our export desk plus your agent's import filing. Classification and duty treatment are agent-verified — we provide product descriptions for review but do not control Ghana entry outcomes. Poultry plant invoices should mention washdown zone panels separately if agents request hygiene-related descriptions for inspection.",
      },
      {
        question: "Should poultry plants specify stainless internal fixings?",
        answer:
          "Washdown areas benefit from stainless or coated fixings compatible with cleaning chemicals. Standard zinc fixings corrode quickly in wet processing lines — include hygiene zone layout on drawings so we quote appropriate hardware. Blast-chill entries near scalding lines need fixings rated for both moisture and heat splash — mark those walls on layouts.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "tema",
    name: "Tema",
    countrySlug: "ghana",
    nearestPort: "Tema Port",
    relevantProducts: ["puf-panels", "cold-room-panels", "industrial-doors"],
    relevantIndustries: ["cold-storage", "food-processing"],
    industrialEstates: [
      "Tema Free Zone enclave",
      "Tema industrial area portside plots",
      "Heavy industrial zone near oil services support",
    ],
    localIndustries: [
      "Port-side import cold storage and reefer support",
      "Fish and protein processing near landing logistics",
      "Free-zone food packaging for export markets",
    ],
    projectProfiles: [
      "Port-adjacent blast freezers for imported containerised protein",
      "Free-zone cam-lock chillers for export-oriented food plants",
      "High-cycle industrial doors on cold stores facing port yards",
    ],
    roadAccessNotes:
      "Port-side sites allow minimal drayage once containers release — yard location and inspection status matter more than road distance. Free Zone gates require pre-registered hauliers and security screening. Industrial area streets accommodate heavy trucks but queue at peak shift changes. Coordinate unload cranes with port traffic windows to avoid demurrage stacking. Free-zone tenants with dual addresses should confirm which gate accepts container trucks — admin offices and plant gates are not always the same entry. Blast-freeze projects near quay may require daytime unload only — share estate HSE curfews when booking slots.",
    climateNotes:
      "Direct coastal exposure with salt air, high humidity and intense sun on unshaded yards. Marine-grade fixings and external facings are mandatory for durable installs. Onshore breeze carries salt even when rain is absent — wipe external surfaces before installing fixings through facings. Free-zone audits often inspect fixings within months of install — specify marine hardware up front rather than swapping screws after salt staining appears.",
    portRelevance:
      "Tema Port is both Ghana's main container gateway and the physical neighbour to many cold storage projects — panels often move from quay to site within the same day when agents pre-file entries. Free Zone operators may use bonded procedures distinct from domestic consumption clearance. Reefer-support chillers near quay sometimes need delivery before lunch peak when port gates throttle truck entry. Free-zone blast-freeze builds should confirm yard power capacity before we size door heater loads on shipping documents.",
    quickAnswer:
      "PHOENIXX supplies PUF cam-lock cold room panels and industrial cold-store doors to Tema port industrial and free-zone sites from India. Containers arrive Tema for clearance and short drayage. Specify marine exposure facings, freezer versus chiller targets and door cycle rates when requesting CIF Tema pricing — your agent handles Ghana Customs, free-zone gate entry and bonded treatment confirmation before we finalize consignee details. Port-side blast-freeze and break-bulk chillers should confirm yard power and gate HSE rules on the enquiry form.",
    marketContext:
      "Tema concentrates port-side cold chain: break-bulk chillers for imported frozen cargo, free-zone food plants serving export markets and fish-related processing near landing logistics. Salt air punishes under-specified fixings within seasons — port-adjacent quotes always include corrosion-aware hardware. Industrial doors on high-cycle stores facing port yards see constant forklift traffic; undersized doors leak cold and overload plant. Free Zone tenants should confirm zone authority notices on facade and fire requirements before we manufacture external envelopes. Demurrage pressure pushes agents to release fast — align local install crew availability with expected yard exit date. Reefer-container break-bulk operators sometimes spec quick-build chillers beside existing yard power limits — confirm available amperage before we size heater-tape and door frame loads on freezer entries. Fish landing peaks overlap import vessel peaks — book drayage against both calendars, not import ETA alone. Heavy industrial zone plots may restrict hot work near panel install — share HSE rules early. Fish and protein plants near Tema often share yards with truck parking — design door approaches so reefers and forklifts do not collide at peak discharge. Free-zone export packaging lines may need white or light internal facings for hygiene audits; tell us colour codes before production. If your plot sits inside a multi-tenant park, confirm whether estate rules ban evening crane work so we do not schedule arrival on a blocked night.",
    specificationNotes:
      "Marine-exposure external facings and stainless fixings in spray and washdown zones. Blast-freeze floors need anti-slip rated panels where operators work standing. Door frames with heated elements suit high humidity door openings. Bundle storage in open port yards requires immediate cover — salt mist corrodes exposed steel strapping. Free-zone export plants may need label-friendly internal colours for audit photography — note preferences on drawings. Port-facing cold stores should plan condensate management on door thresholds where trucks idle in humid air. Heavy industrial zone plots near oil services may restrict hot work near install — share estate HSE rules before we schedule factory dispatch. Practitioner caveat: confusing Free Zone bonded entry with domestic consumption filing holds containers in Tema yards past free days — agent must confirm treatment before we finalize consignee on shipping documents.",
    faqs: [
      {
        question: "How far is typical drayage from Tema quay to free-zone cold rooms?",
        answer:
          "Many free-zone and industrial plots sit within short truck distance of port yards once customs releases cargo. Exact timing depends on inspection completion and gate registration — not kilometre count alone. Provide plot number and zone name for haulier quotes.",
      },
      {
        question: "Do port-side cold stores need different doors than inland Accra?",
        answer:
          "High-cycle port-facing stores specify larger openings and durable door hardware for constant forklift movement. Heated door frames help in humid coastal air. Share expected cycles and opening sizes so we match doors to refrigeration load. Yard-facing doors need wind baffles where onshore breeze hits open thresholds during idle trucks.",
      },
      {
        question: "What facing spec suits Tema salt air?",
        answer:
          "Polyester or equivalent external facings with coated or stainless fixings for coastal exposure. Internal washdown areas need chemical-resistant surfaces. Inland hardware packages fail quickly on Tema port plots — declare marine environment on every quote request. Free-zone audits sometimes photograph external fixings — coated screws should match facing colour notes on submittals.",
      },
      {
        question: "Can free-zone and domestic Ghana projects share one import entry?",
        answer:
          "Customs treatment differs — your agent structures entry per consignee and zone status. Do not mix free-zone and domestic destinations in one shipment without agent approval. We issue separate commercial descriptions if agents require split invoices.",
      },
      {
        question: "How soon after clearance should panels leave the port yard?",
        answer:
          "Move to covered site storage or immediate install — salt spray and rain on open yards damage edges within days. Book hauliers before vessel arrival to minimize dwell. Photograph bundle condition at yard exit for insurance claims if damage occurs. Free-zone gates may refuse oversize loads during security drills — confirm drill calendars with estate admin when ETA is tight.",
      },
      {
        question: "What room data do Tema blast-freeze projects need to quote?",
        answer:
          "Internal dimensions, target temperature below −18 °C if applicable, floor load for pallet stacks, door sizes, marine exposure notes and expected product throughput for door cycle planning. Include agent contact for invoice wording before manufacturing starts. Yard power limits for heater-tape on freezer doors should come from your electrician — undersized circuits trip during humid door openings.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "kampala",
    name: "Kampala",
    countrySlug: "uganda",
    nearestPort: "Mombasa (transit)",
    relevantProducts: ["puf-panels", "cold-room-panels"],
    relevantIndustries: ["cold-storage", "food-processing"],
    industrialEstates: [
      "Namanve Industrial Park",
      "Luzira and Port Bell logistics belt",
      "Kampala industrial area legacy plots",
    ],
    localIndustries: [
      "Brewery and beverage process cooling",
      "Dairy collection and chilling centres",
      "Imported frozen food wholesale break-down",
    ],
    projectProfiles: [
      "Cam-lock chillers for brewery fermentation and storage zones",
      "Dairy collection centre holding rooms near upcountry routes",
      "Freezer retrofits in Kampala frozen food wholesale depots",
    ],
    roadAccessNotes:
      "Uganda-bound containers clear at Mombasa (or occasionally Dar es Salaam) then transit by road via Malaba or Mutukula borders — total overland time often exceeds sea transit. Namanve deliveries use Jinja–Kampala highway after border; city traffic slows final kilometres. Secure lashing for long transit is essential; facings abrade if dunnage shifts at border reloads. Confirm gate access and unload equipment at Namanve before container leaves Kenyan port. Malaba queues lengthen after regional holiday periods — agents with standing bonds usually recover faster than ad-hoc filers. Mutukula routing adds southern border timing — confirm corridor before locking Kampala install dates.",
    climateNotes:
      "Lake-influenced humidity with moderate elevation — warm days, cooler nights and two rainy seasons. Mold risk on stored panels if bundles sit in unventilated tarps. Namanve pads drain better than lakeside Luzira yards but both need covered storage during long wet weeks. Brewery process humidity spikes during CIP cycles — vapor barriers at cold room ceilings matter even when ambient looks moderate.",
    portRelevance:
      "Landlocked Kampala depends on Kenyan or Tanzanian ports — Mombasa via Malaba is the frequent corridor agents quote. Transit bonds and multi-country paperwork must align before sailing. Port dwell in Mombasa plus border queue time define arrival better than manufacturing lead alone. Mutukula routing via Dar adds a different border personality — do not assume Malaba timing applies when your agent switches corridors mid-quote. Namanve first imports should confirm park gate plate registration before container leaves Mombasa to avoid rejected entry after long transit.",
    quickAnswer:
      "PHOENIXX exports PUF cam-lock cold room panels from India to Kampala via Mombasa port transit through Kenya. We manufacture to order with full Indian export documentation. Your clearing agent handles Kenyan port release, transit bond, Malaba or Mutukula border processing and Uganda Revenue Authority entry to Namanve, Luzira or central industrial sites. Share brewery or dairy hygiene requirements on drawings when requesting quotes. Landlocked transit means install crews should mobilise only after panels cross the Uganda border, not when the vessel reaches Mombasa.",
    marketContext:
      "Kampala cold storage demand ties to beverages, dairy and imported frozen food — Namanve Industrial Park concentrates new factory builds where cam-lock chillers slot into process layouts. Landlocked logistics mean every panel container crosses two customs jurisdictions; document mismatches stop trucks at Malaba for days. Lake Victoria proximity raises ambient humidity compared with highland Rwanda projects — vapor control in cold rooms matters. Wholesale frozen food operators retrofit older warehouses with freezer rooms where headroom limits PIR interest. Practitioner planning should assume border variability week to week rather than fixed transit days printed on shipping schedules. Brewery expansion projects often add chillers beside live production — phased panel delivery reduces yard clutter if your agent can release one container while the next remains at Mombasa under bond. Dairy collection routes with multiple small chillers should standardise door sizes where possible to simplify spare hardware stocking for maintenance teams. Namanve and Jinja-road plants frequently mix dry storage with small blast freezers for export samples — do not order one thickness for both zones. Transit insurance and inland trucking are buyer-side; we coordinate document release timing so your haulier is ready when Mombasa clears. Lake-effect humidity means internal facings in wash areas need coatings that tolerate frequent cleaning chemicals without chalking within the first seasons.",
    specificationNotes:
      "Transit-length packing with edge protection for multi-border road legs. Beverage process rooms specify washable internal facings and drainage at coving. Dairy chillers often target +2 °C to +4 °C with frequent door openings — cam-lock quality and air curtains matter. Luzira and lakeside sites feel higher humidity than Namanve inland pads — specify vapor barrier continuity at ceiling penetrations where refrigeration piping enters. Central industrial area retrofits may need PIR walls where truss clearance is tight — share measured heights before we default to standard PUF thickness. Avoid scheduling pours until panels physically arrive in Kampala — vessel ETA misleads programmes. Practitioner caveat: Mombasa versus Dar corridor choice changes cost and congestion — follow agent advice on current border queues, not last year's preference.",
    faqs: [
      {
        question: "Which port do Kampala imports usually clear first?",
        answer:
          "Mombasa clearance with Malaba border transit is the common path agents quote for Uganda. Dar es Salaam via Mutukula is an alternative with different timing. Your agent selects based on current queues and bond availability — tell us their corridor when ordering.",
      },
      {
        question: "How should Namanve projects plan delivery timing?",
        answer:
          "Allow manufacturing time plus ocean transit plus Kenyan port dwell plus border processing plus Kampala haul. First-time importers often underestimate border days. Book local install crews after container crosses Malaba, not when bill of lading shows Mombasa arrival.",
      },
      {
        question: "Do brewery chillers need special panel finishes?",
        answer:
          "Process areas specify washable internal surfaces and coving compatible with CIP practices where applicable. Temperature bands vary by zone — fermentation, storage and packaging need separate specs on drawings. We supply insulated shells; refrigeration piping is local trade. Namanve brewery expansions often need phased panel delivery while production stays live — mark install sequence on drawings so bundles arrive in usable order.",
      },
      {
        question: "Can dairy collection centres use standard cam-lock kits?",
        answer:
          "Small chillers for milk holding commonly use standard PUF cam-lock with appropriate floor insulation and drainage. Collection centres with heavy traffic need durable floor panels and wide doors. Share peak delivery volumes for door sizing.",
      },
      {
        question: "What happens if transit documents mismatch at Malaba?",
        answer:
          "Border stops until agent corrects bond or consignee data — panels sit on truck or in yard without install access. Verify consignee names and transit bonds before we dispatch from India. We reissue documents pre-sail if your agent flags errors. Uganda Revenue sometimes re-scans container seals at Malaba — keep packing lists matching bundle labels to avoid opened-container delays in rain.",
      },
      {
        question: "How should panels be stored in Kampala rainy season?",
        answer:
          "Keep bundles off muddy ground on dunnage with ventilated cover — trapped humidity molds facings. Install soon after arrival or store in warehouse space if project delay continues. Inspect joints before assembly if storage exceeded two weeks. Luzira lakeside yards need taller dunnage during wet weeks — capillary moisture wicks into bottom panels if bundles sit on saturated ground.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "lusaka",
    name: "Lusaka",
    countrySlug: "zambia",
    nearestPort: "Dar es Salaam (transit)",
    relevantProducts: ["puf-panels", "cold-room-panels", "roofing-panels"],
    relevantIndustries: ["cold-storage", "warehousing-logistics"],
    industrialEstates: [
      "Lusaka South Multi-Facility Economic Zone",
      "Chinika industrial area",
      "Mass Media and Kamwala logistics pockets",
    ],
    localIndustries: [
      "Retail and wholesale cold chain for urban supermarkets",
      "Copperbelt-linked distribution warehousing",
      "Import consolidation for landlocked regional trade",
    ],
    projectProfiles: [
      "Freezer and chiller rooms for supermarket regional distribution centres",
      "PUF roofing on Lusaka South warehouse greenfields",
      "Cold storage supporting imported frozen food wholesale",
    ],
    roadAccessNotes:
      "Zambia-bound panels commonly clear Dar es Salaam then road north via Nakonde or alternative corridors agents specify — long overland legs dominate scheduling. Lusaka South MFEZ has wide access roads suited to full containers; older Chinika lanes may need off-peak delivery. Copperbelt-bound cargo sometimes transships in Lusaka — confirm final unload point before haulier booking. Desert-dust sections of transit routes require wrapped bundles. Nakonde uphill grades stress strapping — inspect bundles at border before final haul to Lusaka South. Chinika one-way segments may force reverse offload — confirm truck length against lane constraints.",
    climateNotes:
      "Subtropical highland with hot dry season and cooler dry winter nights — strong sun and low humidity stress external facings differently from coastal imports. Dust storms during late dry season abrade unprotected yard storage — keep bundles wrapped until install day. Retail freezer entries still see humid air during first rains — coving details should not assume permanently dry ambient.",
    portRelevance:
      "Landlocked Lusaka relies on Tanzanian or occasionally Mozambican ports — Dar es Salaam transit is the base assumption for quotes. Total lead time includes Tanzanian clearance, bond transit and Zambian border entry at Nakonde or other posts agents prefer. Dar port dwell plus overland leg often exceeds Indian Ocean sailing — plan site labour against border exit, not vessel departure alone. Lusaka South MFEZ tenants should confirm park import quotas with admin before ordering multiple containers on one vessel.",
    quickAnswer:
      "PHOENIXX exports PUF cold room and roofing panels from India to Lusaka via Dar es Salaam port transit. We manufacture to order and supply Indian export documents. Your clearing agent manages Tanzanian port release, transit procedures, border crossing and ZRA entry to Lusaka South, Chinika or other city industrial addresses. Include retail distribution floor-load notes when quoting freezer rooms. Nakonde border timing dominates programmes more than sea schedule — share agent corridor choice when requesting CIF Dar pricing.",
    marketContext:
      "Lusaka anchors Zambia's retail cold chain and regional warehousing — supermarket distribution centres specify multi-temperature cam-lock rooms while Lusaka South greenfields use PUF roofing on large logistics sheds. Copperbelt-linked trade flows through Lusaka consolidation warehouses adding chiller capacity for imported goods. Arid-season dust and intense UV during dry months favour light external roof colours and protected yard storage on arrival. Landlocked transit makes border timing volatile — projects should not lock refrigeration plant purchase until panels clear Zambian entry. Some buyers source via South African intermediaries; direct India import still competes on product cost when agents manage Dar corridor efficiently. Chinika retrofits with low truss clearance often request PIR wall panels while new Lusaka South sheds stay on standard PUF roof spans — mixing specs within one purchase order is fine when rooms are physically separate. Kamwala wholesale plots with shared yards need agreed panel staging zones — neighbours moving steel or bags across your bundles damages tongues before install starts. Supermarket seasonal peaks stack freezer projects — book install crews before Nakonde exit, not at Dar discharge. Copperbelt camp catering rooms travel as kits; spare cam-lock keys and spare gaskets should ship in the same container as the panels so remote sites are not waiting on a second air freight. Lusaka retail DCs serving the capital and Copperbelt trucks need wide doors and reinforced floor edges at thresholds. Hot-season site storage without shade warps plastic edge protectors — stage under cover or delay delivery until the slab and crew are ready.",
    specificationNotes:
      "Dry-season UV justifies light external facing colours on warehouse roofs. Cold rooms for retail distribution need heavy floor panels and wide doors for pallet traffic. Long Dar–Lusaka transit requires secure bundle strapping and edge guards. Freezer rooms below −18 °C specify heater tape at floor joints — confirm power before thickness lock. Dust ingress at Nakonde reload sometimes fills cam-lock grooves — budget contractor time for careful cleaning before assembly on sensitive freezer jobs. Lusaka South MFEZ plots with future expansion wings should note phased wall lengths — ordering full perimeter upfront while only one wing has slab invites long yard storage. Practitioner caveat: Nakonde border congestion spikes around holiday periods — agents with bond relationships move faster; first imports should pad schedules accordingly.",
    faqs: [
      {
        question: "Why is Dar es Salaam listed as nearest port for Lusaka?",
        answer:
          "Zambia has no seaport — Dar es Salaam is a primary transit gateway agents use for Indian Ocean imports including panels. Other routes exist via Mozambique or South Africa; your agent quotes total time and cost. Tell us their chosen corridor when requesting pricing.",
      },
      {
        question: "What cold storage do Lusaka supermarket projects need?",
        answer:
          "Regional distribution centres combine chiller and freezer zones with different core thicknesses, floor ratings and door sizes. Wholesale operators specify pallet-wide doors and durable floor panels. Send marked layouts with temperature bands for accurate quotes.",
      },
      {
        question: "Can roofing panels ship with cold room kits to Lusaka South?",
        answer:
          "Combined containers work when weights fit and install sequence allows one delivery. Long transit increases handling risk — inspect all SKUs at arrival. Split shipments reduce delay if roofing contractor starts later than cold room crew. Lusaka South gate registration for MFEZ tenants needs haulier plate numbers before container leaves Dar — missing data bounces trucks at the park entry.",
      },
      {
        question: "How does dry-season climate affect specifications?",
        answer:
          "Low humidity reduces condensation risk but high sun load increases heat gain on warehouse roofs — light external colours help. Cold room design still uses local ambient for refrigeration sizing, not coastal Dar averages copied from another job. Retail freezers still need heater tape at floor joints despite dry ambient — frost tracks inward from pallet entries during frequent door cycles.",
      },
      {
        question: "What border should planners watch for Dar–Lusaka transit?",
        answer:
          "Nakonde is commonly quoted between Tanzania and Zambia — queue length varies. Agents monitor alternative posts when congestion spikes. We do not control border timing; plan install after ZRA release, not Dar port discharge.",
      },
      {
        question: "How should bundles be protected on long overland transit?",
        answer:
          "Use ventilated tarp cover and check strapping at border reloads — dust enters gaps if wraps tear. Photograph condition at Lusaka unload before signing haulage receipts. Report damage immediately for insurance claims. Chinika narrow lanes may require transhipment to smaller trucks — confirm last-mile vehicle before ordering extra-long roof panels.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "maputo",
    name: "Maputo",
    countrySlug: "mozambique",
    nearestPort: "Maputo Port",
    relevantProducts: ["puf-panels", "cold-room-panels"],
    relevantIndustries: ["cold-storage", "food-processing"],
    industrialEstates: [
      "Beluluane Industrial Park",
      "Matola industrial and logistics belt",
      "Maputo port hinterland agro-processing plots",
    ],
    localIndustries: [
      "Citrus and produce cold chain for export packing",
      "Poultry and meat processing with chill and freeze",
      "Import redistribution warehouses for southern Mozambique",
    ],
    projectProfiles: [
      "Pre-cool and hold rooms for citrus export packhouses",
      "Cam-lock freezers at Matola poultry processing lines",
      "Port-hinterland chillers for imported frozen cargo",
    ],
    roadAccessNotes:
      "Containers clearing Maputo Port reach Matola and Beluluane by short drayage on main arteries — cyclone-season road damage occasionally detours heavy trucks. Port gate queues and customs inspection drive timing. Agro plots outside ring road may need escort or daylight delivery per local haulier practice. Secure loads against humid wind-driven rain during storage moves. Beluluane gate registration sometimes requires Portuguese paperwork copies — site admin should prepare before truck leaves port yard. Matola ring-road peaks delay drayage even when customs cleared overnight — book flexible unload windows during harvest.",
    climateNotes:
      "Humid subtropical coastal climate with cyclone exposure seasonally — wind-driven rain and flooding risk in low-lying yards. Corrosion and moisture control are design priorities. Post-storm humidity spikes linger in Matola yards — delay cam-lock assembly until panels dry if bundles were exposed. Citrus packhouses see rapid respiration heat after harvest — room design should follow commodity pull-down notes, not generic chiller templates alone.",
    portRelevance:
      "Maputo Port serves local agro cold chain and transit to hinterland markets — panels for Beluluane and Matola often drayage same day after customs release when agents pre-file. Cyclone seasons disrupt port operations intermittently; sailing schedules should include buffer. When fruit harvest peaks, port truck queues lengthen even for released containers — book drayage against packhouse receiving hours. Agro exporters should align vessel ETA with contractor mobilisation — idle panels in humid yards lose edge quality faster than inland storage.",
    quickAnswer:
      "PHOENIXX exports PUF cam-lock cold room panels from India to Maputo Port for agro processing, poultry and import cold storage projects. We manufacture to order with standard export documents and quote FOB India or CIF Maputo. Your clearing agent handles Mozambique customs entry and delivery to Beluluane, Matola or port-hinterland sites — include cyclone-season scheduling notes and commodity hold times in project plans. Citrus pre-cool and poultry blast-chill quotes need pull-down assumptions from your refrigeration designer alongside room dimensions.",
    marketContext:
      "Maputo links Indian Ocean imports to southern Mozambique agro processing — citrus packhouses specify pre-cool rooms, poultry plants add blast chill and freezers, and Matola warehouses hold imported frozen cargo. Humidity and seasonal cyclone exposure push buyers toward facings and fixings rated for wet coastal air. Beluluane Industrial Park attracts food and logistics tenants needing cam-lock kits on greenfield pads. Port hinterland projects compete for local install crews during peak harvest windows — align panel arrival with contractor availability, not only vessel schedule. Export-oriented packhouses sometimes hold fruit at multiple temperature stages — separate rooms with distinct door sizes beat one oversized room that mixes load profiles and wastes refrigeration energy. Matola poultry lines running double shifts need door maintenance access in panel layouts — omitting access panels near hinges slows downtime when seals fail mid-week. Import redistribution chillers near port hinterland sometimes spec quick-build rooms — confirm slab falls and power before we lock floor panel thickness on quotes. Seafood and agro chillers near Maputo Bay should specify drainage falls and coving on drawings before panel counts lock — adding falls later cuts wrong panels. Cyclone preparedness includes knowing how to reseal joints after extreme rain; we can note joint types on the packing list for your install crew. Portuguese or English document preferences must be confirmed with your agent; we print commercial packs to the language set you request in writing. Confirm cyclone-season install windows with your crew before containers sail so panels are not staged in open yards through a named storm warning.",
    specificationNotes:
      "Coastal facings and coated fixings for external and washdown zones. Packhouses need rapid-pull-down chillers with tight door seals for fruit respiration loads — share commodity and dwell time. Raised flood-risk yards should store panels off ground on dunnage during storms. Cyclone strapping for roof panels follows local steel engineer guidance — we supply panels, not primary structure. Poultry blast-chill entries benefit from air-curtain coordination with door heater sizing — underspecified curtains show up as frost on floor edges within weeks of commissioning. Port hinterland agro plots with dirt access roads need delivery during dry windows — mud ruts stop lowbed trucks even when port release is clean. Practitioner caveat: port closures during severe weather extend dwell — maintain agent contact for covered yard space rather than leaving bundles exposed dockside.",
    faqs: [
      {
        question: "Do citrus packhouses near Maputo need special chiller specs?",
        answer:
          "Pre-cool rooms target commodity-specific bands and pull-down rates — share fruit type, carton size and hold duration. Tight door seals and airflow layout matter as much as wall thickness. We size panels to your refrigeration contractor's design conditions.",
      },
      {
        question: "How do cyclones affect panel delivery planning?",
        answer:
          "Severe weather can close Maputo port and flood low yards — build buffer around sailing ETA during cyclone season. Move released containers to covered storage quickly. Do not schedule crane lifts during high-wind warnings. Post-storm yard mud can prevent forklift access for days — confirm packhouse yard drainage before you accept delivery slots tied to harvest start.",
      },
      {
        question: "Is Beluluane delivery straightforward from Maputo Port?",
        answer:
          "Industrial park plots sit within routine drayage distance once customs clears containers. Gate registration and unload equipment must be pre-booked. Matola traffic peaks can delay last-mile even when port release is smooth.",
      },
      {
        question: "What corrosion spec suits Matola poultry plants?",
        answer:
          "Washdown areas need stainless or coated fixings and chemical-resistant internal facings. External walls near open yards still face humid salt air — specify full environment on drawings, not just internal zones.",
      },
      {
        question: "Can Maputo-cleared panels transit to South Africa or Eswatini?",
        answer:
          "Transit procedures are agent-managed with additional bonds and permits. Tell us if cargo is not staying in Mozambique before we finalize shipping documents. We do not control cross-border outcomes.",
      },
      {
        question: "What should agro cold chain buyers send for a quote?",
        answer:
          "Room dimensions, commodity temperature band, expected door cycles, floor load if palletised, delivery site name and facing preferences for coastal humidity. Include agent details if they require Portuguese or bilingual invoice wording review. Citrus pre-cool quotes need respiration pull-down assumptions from your refrigeration designer — wall thickness alone does not set fruit hold quality.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "windhoek",
    name: "Windhoek",
    countrySlug: "namibia",
    nearestPort: "Walvis Bay Port",
    relevantProducts: ["puf-panels", "roofing-panels", "wall-panels"],
    relevantIndustries: ["warehousing-logistics", "cold-storage"],
    industrialEstates: [
      "Windhoek industrial area southern belt",
      "Brakwater and Northern Industrial logistics plots",
      "Okahandja road corridor warehouse nodes",
    ],
    localIndustries: [
      "Mining sector warehousing and spares storage",
      "Retail and wholesale distribution for central Namibia",
      "Limited cold chain for imported frozen and chilled goods",
    ],
    projectProfiles: [
      "PUF roof and wall envelopes on mining support warehouses",
      "Small-format chillers for retail frozen food holding",
      "Insulated cladding on Brakwater logistics sheds",
    ],
    roadAccessNotes:
      "Containers arrive Walvis Bay then truck roughly four hours inland to Windhoek on the B2 — desert heat and dust dominate transit more than distance. Night driving is common for heavy loads avoiding midday heat. Windhoek industrial plots generally accommodate full containers; confirm crane or forklift at unload. Dust ingress during open transport requires wiping facings before joint assembly. Summer tar softening on B2 occasionally slows heavy loads — hauliers may split night runs into two segments with inspection stop. Brakwater narrow plots may reject oversize trailers — confirm vehicle class before Walvis release.",
    climateNotes:
      "Arid highland with intense UV, hot dry days and cold winter nights — wide diurnal swing stresses roof expansion and contraction details. Low rainfall reduces corrosion but dust abrades facings stored in open yards. Winter morning frost on steel purlins does not remove daytime roof heat load. Walvis salt mist on facings before B2 haul is easy to overlook — wipe tongues even when panels look clean at Windhoek unload.",
    portRelevance:
      "Walvis Bay is Namibia's primary container port for Windhoek-bound cargo — clearance and inland haul are separate agent bookings. Indian Ocean sailings feed Walvis Bay; inland leg timing is more predictable than multi-border transit but summer heat affects road scheduling. Walvis yard salty air touches panels before B2 haul — inland wipe-down before cam-lock assembly is good practice even when facings look clean at unload. Mining warehouse deliveries should book B2 haul for night windows when summer midday heat restricts heavy load movement.",
    quickAnswer:
      "PHOENIXX exports PUF roof, wall and cold room panels from India to Windhoek via Walvis Bay Port clearance and B2 road haul. We manufacture to order with Namibian-bound export documents. Your clearing agent handles Walvis Bay customs release and inland delivery to Windhoek industrial sites — send envelope areas, cold room specs if any, and facing preferences for arid UV exposure plus mining warehouse scope if roof-only. Night B2 haul is common in summer — align unload slots with industrial plot security hours.",
    marketContext:
      "Windhoek logistics construction serves mining support, retail distribution and limited cold chain for imported frozen goods — PUF envelopes on warehouses reduce heat gain in arid summers while small chillers appear in wholesale depots. Walvis Bay inland haul is straightforward compared with landlocked neighbours but UV and dust define specification choices. Mining-sector warehouses prioritise rapid weathertight enclosure over chilled storage unless specifically quoted. Cold room enquiries are fewer than East African capitals but specify freezer capacity for imported protein. Winter night frost does not eliminate daytime sun load on roof panels — thermal movement details matter on long spans. Brakwater logistics tenants upgrading roofs on occupied buildings should confirm whether insulation is required above office mezzanines — partial bay installs need panel lengths matched to crane reach over live operations. Okahandja corridor nodes used as staging yards should cover bundles against kalahari dust fronts that arrive with little warning between sunny mornings. Northern Industrial shared yards benefit from fenced panel storage away from neighbour steel deliveries. Walvis Bay to Windhoek hauliers need booking references that match container numbers on the bill of lading — mismatched paperwork parks boxes at the port while the capital site waits. Mining camp modular rooms for the wider Namibian network often stage through Windhoek yards; design kits for second-leg trucking length limits. Dusty yards at door openings need threshold details that keep sand out of gasket lines during frequent openings.",
    specificationNotes:
      "Arid UV favours light external roof and wall colours with UV-stable facings. Expansion allowance on long roof runs per structural engineer guidance. Cold rooms still specify cam-lock and floor insulation for freezers — confirm power availability. Dusty Walvis–Windhoek transit requires sealed bundle wraps — inspect tongues before assembly. Wall panels on west-facing elevations reduce afternoon heat gain in office-warehouse combos even when the original enquiry was roof-only. Northern Industrial plots with shared yards need fenced panel storage — mining contractors moving steel nearby have damaged bundles that looked secure on unload photos. Practitioner caveat: Walvis Bay yard dwell during peak import seasons stacks demurrage — pre-file customs entries before vessel arrival to shorten exposure in salty coastal yard air before inland move.",
    faqs: [
      {
        question: "How do panels reach Windhoek from Walvis Bay?",
        answer:
          "Containers clear at Walvis Bay Port then move by truck on the B2 corridor to Windhoek industrial sites. Hauliers often drive at night to reduce heat stress on tarps and facings. Book inland transport when customs release is imminent, not at vessel departure.",
      },
      {
        question: "What warehouse specs suit Windhoek arid climate?",
        answer:
          "Light external colours and UV-stable facings reduce surface heat on PUF roofs and walls. Dusty ambient requires protected storage before install. Cold rooms are sized on design ambient for Windhoek, not Walvis coastal humidity.",
      },
      {
        question: "Are cold rooms common in Windhoek projects?",
        answer:
          "Less frequent than coastal African capitals but appear in retail wholesale and catering supply storing imported frozen goods. Standard PUF cam-lock applies — share temperature band and floor load for quote.",
      },
      {
        question: "Should mining warehouses use wall panels or roof only?",
        answer:
          "Many mining support stores specify roof insulation with single-skin wall cladding; others use full envelope for temperature-sensitive spares. Share operational storage needs — we quote roof-only or full wall infill accordingly.",
      },
      {
        question: "How protect panels from desert dust on the B2 haul?",
        answer:
          "Use ventilated tarp with secure strapping; wipe dust from cam-lock grooves before assembly. Do not store open bundles in Windhoek yard dust storms — move indoors or under cover promptly after unload. B2 night hauls still deposit fine dust in joints — compressed air blow-out is risky on facings; use soft brushes instead.",
      },
      {
        question: "What documents does Namibian customs need?",
        answer:
          "Commercial invoice, packing list, bill of lading and certificate of origin from India plus your agent's import filing at Walvis Bay. Duty treatment is agent-verified — we provide descriptions suitable for review before sail. Mining warehouse invoices should state roof-only versus full envelope scope clearly if agents split treatment for ambient versus insulated structures.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "gaborone",
    name: "Gaborone",
    countrySlug: "botswana",
    nearestPort: "Durban (transit)",
    relevantProducts: ["puf-panels", "cold-room-panels"],
    relevantIndustries: ["cold-storage", "warehousing-logistics"],
    industrialEstates: [
      "Gaborone Industrial and trade park zones",
      "Palapye road corridor logistics pockets",
      "Broadhurst and Old Naledi light industrial strips",
    ],
    localIndustries: [
      "Beef export cold chain and abattoir support storage",
      "Mining supply warehousing for regional operations",
      "Retail and wholesale imported frozen food holding",
    ],
    projectProfiles: [
      "Freezer rooms supporting beef export cold chain",
      "Cam-lock chillers for retail frozen food depots",
      "Insulated warehouse additions for mining logistics tenants",
    ],
    roadAccessNotes:
      "Landlocked Gaborone imports via Durban or Walvis Bay corridors through South Africa or Namibia — multi-border transit with long road legs. Plot access in industrial zones generally suits containers but hot arid drives favour night haul. Secure lashing for cross-border legs is critical; agent-managed bonds must match route. Confirm unload at Gaborone gate before container leaves coastal port. South African public holidays compress border hours — avoid ETA that lands on long weekends unless your agent confirms staffing. Gaborone industrial gates sometimes close early on month-end — align unload with estate security calendars.",
    climateNotes:
      "Semi-arid savanna with hot summers, cool dry winters and high UV — low humidity reduces corrosion but increases thermal movement on roofs. Thunderstorm bursts in wet season spike humidity briefly — coving and vapor barriers still matter in freezer entries. Cross-border dust on long Durban or Walvis hauls packs into cam-lock grooves if wraps tear at border reload — inspect before first row install.",
    portRelevance:
      "No local seaport — Durban transit via South Africa is the listed base port; Walvis Bay via Namibia is an alternative agents quote. Port choice affects transit time, bond complexity and road distance more than panel manufacturing lead. Durban dwell plus Gauteng transit plus Botswana entry can exceed three overland handling events — packing quality matters more than on single-port destinations. Beef export season peaks overlap Durban vessel peaks — agents with standing bonds recover faster when multiple cold room containers land same week.",
    quickAnswer:
      "PHOENIXX exports PUF cam-lock cold room panels from India to Gaborone via Durban port transit through South Africa. We manufacture to order with export documentation for your clearing agent to manage South African port release, transit bonds, border crossings and Botswana customs entry to industrial sites. Include beef export freezer floor loads and mining warehouse scope when requesting separate quotes. Landlocked routing means bond paperwork should be confirmed before we lock manufacturing slots on peak-season vessels.",
    marketContext:
      "Gaborone cold chain ties to beef export logistics, mining supply warehousing and retail frozen food — freezer rooms appear near abattoir support chains while logistics sheds add insulated volume for temperature-sensitive inventory. Landlocked routing through South Africa or Namibia makes agent selection decisive; bond errors delay panels at borders unrelated to product quality. Arid climate reduces rust versus coastal sites but UV still demands light external roof colours. Beef export seasonality can stack cold room projects — book local refrigeration contractors before ordering panels to avoid idle bundles in yard storage. Retail wholesalers near Broadhurst sometimes spec small freezer rooms inside leased warehouses where landlord approval for refrigerant lines and condenser placement must be settled before panel thickness is locked. Palapye corridor staging sometimes holds containers overnight — arid cold nights still warrant ventilated covers because morning dew settles on metal strapping. Mining logistics roof-only quotes should confirm whether wall infill is truly omitted — reordering wall panels after roof install duplicates transit cost. Beef export cold chain operators around Gaborone care about hygiene zoning more than maximum thickness; over-specified PIR where PUF meets the temperature wastes budget without improving audits. Corridor choice between Durban and Walvis Bay changes not only days but also which agent stamps you need — freeze the corridor on the enquiry form. Industrial roofs over non-conditioned halls still need deflection-aware spans; send purlin spacing with the RFQ.",
    specificationNotes:
      "Freezer rooms for protein export specify thick PUF cores, rated floors and heated door frames where humidity spikes during storms. Warehouse roofs use UV-stable light facings. Cross-border transit packing needs edge protection for long hauls. Mining logistics sheds may need only roof insulation without wall infill — confirm envelope scope early to avoid shipping wall panels that sit in yard for months. Old Naledi strip installs with tight plot frontage may need shorter panel lengths split for manual handling — note crane limits on drawings. Practitioner caveat: Durban versus Walvis routing changes cost and border count — agent advice trumps historical preference; first Botswana imports should pad two weeks beyond vessel ETA for bond learning curves.",
    faqs: [
      {
        question: "Why is Durban listed as nearest port for Gaborone?",
        answer:
          "Botswana has no seaport — Durban is a common Indian Ocean entry agents use before road transit through South Africa. Walvis Bay via Namibia is an alternative. Your agent quotes total landed cost and time for the corridor they prefer.",
      },
      {
        question: "What freezer specs suit beef export cold chain?",
        answer:
          "Export protein storage often targets −18 °C or lower with durable floor panels for pallet loads and wide doors for forklift flow. Share abattoir or third-party cold store layout and hold duration for thickness and joint recommendations. Export inspection holds may require redundant temperature logging — panel specs do not include monitoring, but room layout should leave conduit paths your validator expects.",
      },
      {
        question: "How many borders do panels cross from Durban to Gaborone?",
        answer:
          "Typically South African port release then road transit into Botswana with agent-managed bonds — exact steps depend on corridor and consignee structure. We provide export documents from India; your agent sequences border filings.",
      },
      {
        question: "Can mining warehouses and cold rooms share one import?",
        answer:
          "Combined shipments work when customs treatment and delivery address align. Mixed SKUs need detailed packing lists for inspection. Split containers if mining roof install precedes cold room by months. Broadhurst leased warehouses may restrict condenser placement — settle landlord MEP approvals before we size door heaters on freezer entries.",
      },
      {
        question: "How does arid climate affect panel choice?",
        answer:
          "Low humidity reduces external corrosion versus coast but UV is intense — light roof colours and stable facings matter. Cold room sizing still uses Gaborone design ambient, not Durban coastal averages.",
      },
      {
        question: "When should local refrigeration plant be ordered?",
        answer:
          "After panels clear Botswana entry and site storage is ready — ordering plant against vessel ETA risks idle equipment if borders delay. Coordinate MEP contractor with agent transit updates. Beef export peaks stack contractor schedules — reserve install crew before container leaves Durban, not after Gauteng transit begins.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
  {
    slug: "luanda",
    name: "Luanda",
    countrySlug: "angola",
    nearestPort: "Luanda Port",
    relevantProducts: ["puf-panels", "cold-room-panels", "roofing-panels"],
    relevantIndustries: ["cold-storage", "food-processing", "warehousing-logistics"],
    industrialEstates: [
      "Viana industrial district",
      "Kilamba logistics and construction supply zones",
      "Sonils port-support industrial belt",
    ],
    localIndustries: [
      "Oil sector camp warehousing and support storage",
      "Import redistribution for urban retail and hospitality",
      "Food processing with chilled and frozen holding",
    ],
    projectProfiles: [
      "Cold rooms for imported frozen food serving retail chains",
      "PUF roofing on oil camp support warehouses",
      "Port-proximate chillers for seafood and protein break-bulk",
    ],
    roadAccessNotes:
      "Luanda Port clearance followed by drayage to Viana and Kilamba industrial zones — urban traffic and port gate queues dominate timing. Sonils belt sites sit near port but face congestion at shift changes. Heavy trucks may require daylight delivery per local haulier norms. Portuguese-language gate paperwork sometimes requested — coordinate with local site manager before truck dispatch. Viana industrial streets flood in heavy rain — avoid scheduling unload during storm warnings even if customs released the container. Sonils shift changes overlap port truck peaks — early-morning slots sometimes clear faster than afternoon attempts.",
    climateNotes:
      "Coastal humid tropical climate with salt air and strong sun — corrosion-rated fixings and facings required on external envelopes. Brief heavy showers between sunny periods are common — do not store open bundles in Sonils yards during storm warnings. Oil-camp roofing panels still face UV and salt mist near port yards — light external colours reduce heat load on unshaded support stores.",
    portRelevance:
      "Luanda Port is both entry and local delivery point for many projects — short drayage when customs releases promptly. Oil-sector warehousing sometimes prioritises rapid enclosure over chilled storage unless specified. Document language and agent familiarity strongly influence dwell time. When agents request revised consignee spelling after sail, inland haul may wait — engage agent before manufacturing to reduce Luanda yard idle days. Retail frozen food distributors should confirm Viana gate forklift capacity before booking drayage on public holidays.",
    quickAnswer:
      "PHOENIXX exports PUF cold room and roofing panels from India to Luanda Port for food, logistics and oil-support warehouse projects. We manufacture to order with English commercial documents; your clearing agent handles Angolan customs entry, Portuguese documentation requirements and drayage to Viana, Kilamba or Sonils industrial sites. Engage agent before manufacture to align invoice wording with local filing practice. Mixed oil-camp roofing and cold-room orders should note phasing so containers match site security and unload permits.",
    marketContext:
      "Luanda combines port-side import logistics, oil-sector camp warehousing and growing retail cold chain — cam-lock chillers serve frozen food distributors while PUF roofs enclose support stores for offshore logistics. Coastal humidity and salt air require marine-aware specifications on every quote. Clearing agents familiar with Angolan procedures shorten port dwell; first-time importers should expect document review cycles that agents manage in Portuguese as needed — we supply English export packs and revise descriptions when agents request before sail. Oil camp projects sometimes order roofing panels ahead of cold rooms; align container sequencing with site security and unload permits. Kilamba logistics tenants sharing yards with construction material imports should segregate panel storage — heavy aggregate loads stacked near cam-lock bundles crush tongues if yard discipline slips. Viana food plants expanding beside live lines should phase cold room panels after refrigeration rough-in — premature shell install blocks pipe routing that local MEP teams expect to run after walls are standing. Sonils-adjacent retail chillers should confirm daytime delivery windows before we lock sailing dates against port gate curfews. Bay-front warehouses and inland industrial parks in Luanda province do not share the same coating needs — map coastal distance on the enquiry. Oil-camp catering freezers that move between sites need cam-lock kits with labeled crates and spare hardware lists in Portuguese and English when crews rotate. Reconstruction PEB halls with PUF roofs should confirm wind and fixing schedules with the PEB designer before we cut roof sheets to length.",
    specificationNotes:
      "Coastal external facings and corrosion-resistant fixings on warehouse roofs and cold store walls. Freezer rooms specify floor insulation and door heaters for humid door openings. Oil camp warehouses may need light roof colours only without chilled rooms — quote separately. Viana food processors with washdown cycles should confirm internal facing chemical resistance before we lock standard polyester on walls that see daily foam cleaning. Sonils-adjacent yards combine salt mist with construction dust — wipe facings before cam-lock engagement even when transit was short. Kilamba mixed-use yards should fence panel bundles away from cement deliveries — powder dust in joints causes cam-lock misalignment on first row install. Practitioner caveat: Portuguese-language customs queries and agent bandwidth delay release more often than product inspection — engage a clearing agent before we manufacture so invoice wording matches their filing practice.",
    faqs: [
      {
        question: "Do Luanda imports require Portuguese documents?",
        answer:
          "Angolan customs often works through clearing agents who handle Portuguese filings — we issue English commercial invoices, packing lists and bills of lading from India. Your agent translates or files as local practice requires. Confirm wording with them before we dispatch to avoid re-inspection holds. Product descriptions mentioning cold storage should match agent classification notes — generic insulation wording sometimes triggers manual review.",
      },
      {
        question: "Which Luanda industrial areas receive panel deliveries?",
        answer:
          "Viana industrial district, Kilamba logistics zones and Sonils port-support belt are common addresses after Luanda Port clearance. Share gate security requirements and unload equipment availability — urban congestion affects last-mile timing.",
      },
      {
        question: "What cold rooms do retail frozen food projects specify?",
        answer:
          "Distributors combine chiller and freezer zones with pallet-rated floors and wide doors. Import break-bulk near port may add blast-freeze capacity — send temperature bands and throughput expectations for door and thickness sizing.",
      },
      {
        question: "Are oil camp warehouses usually chilled?",
        answer:
          "Many support stores are ambient insulated envelopes for general goods — PUF roof and wall panels without refrigeration. Cold rooms appear when catering or medical storage is specified. Tell us operational use so we do not over-specify cold chain hardware.",
      },
      {
        question: "How does coastal humidity affect Luanda specifications?",
        answer:
          "Salt air and moisture require coated or stainless fixings and external facings rated for marine exposure. Internal washdown areas in food projects need chemical-resistant surfaces. Standard inland hardware fails quickly near Sonils and port yards. Kilamba inland plots still see humid onshore air — do not downgrade fixings because the site map looks farther from the quay.",
      },
      {
        question: "What lead time should Luanda planners assume?",
        answer:
          "Manufacturing plus ocean transit plus port dwell and drayage — agent preparedness drives dwell more than sea schedule alone. First imports benefit from extra buffer while agents confirm classification and Portuguese filing steps. Oil-sector security gates may inspect containers twice — keep packing lists in Portuguese and English if site security requests both.",
      },
    ],
    draft: false,
    updatedAt: "2026-09-14",
  },
];
