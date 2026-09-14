import type { GlossaryTerm } from "./types";

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "u-value",
    term: "U-value",
    definition:
      "Thermal transmittance of a wall or roof assembly, measured in W/m²·K. Lower U-value means less heat transfer. Used to specify how much insulation a build-up needs for a given temperature difference.",
    relatedProducts: ["puf-panels", "pir-panels", "rockwool-panels"],
    draft: false,
  },
  {
    slug: "puf",
    term: "PUF (Polyurethane Foam)",
    definition:
      "Rigid closed-cell foam used as the core in sandwich panels. Produced by reacting polyol and isocyanate. Standard choice for cold storage due to low thermal conductivity and cost.",
    relatedProducts: ["puf-panels", "cold-room-panels"],
    draft: false,
  },
  {
    slug: "pir",
    term: "PIR (Polyisocyanurate)",
    definition:
      "Modified polyurethane foam with improved thermal stability and lower λ than standard PUF. Used where thinner panels are needed for the same insulation value, or where higher continuous service temperature is required.",
    relatedProducts: ["pir-panels"],
    draft: false,
  },
  {
    slug: "cam-lock",
    term: "Cam-lock Joint",
    definition:
      "Panel joint system where a rotating cam in one panel edge hooks into a receiver in the adjacent panel. Common in modular cold rooms — allows assembly without external clips along the joint.",
    relatedProducts: ["cold-room-panels", "puf-panels", "pir-panels"],
    draft: false,
  },
  {
    slug: "cover-width",
    term: "Cover Width",
    definition:
      "The effective width of one panel module after installation, excluding overlap at joints. Most sandwich panels have a cover width of approximately 1000 mm. Total wall area divided by cover width gives the number of panels required.",
    relatedProducts: ["puf-panels", "pir-panels", "wall-panels", "roofing-panels"],
    draft: false,
  },
  {
    slug: "ppgi",
    term: "PPGI (Pre-Painted Galvanized Iron)",
    definition:
      "Galvanized steel sheet with a factory-applied paint coating. Used as the outer and inner facing on sandwich panels. Standard facing for industrial and cold storage applications.",
    relatedProducts: ["puf-panels", "pir-panels"],
    draft: false,
  },
  {
    slug: "ppgl",
    term: "PPGL (Pre-Painted Galvalume)",
    definition:
      "Aluminium-zinc alloy coated steel with a factory paint finish. Better corrosion resistance than PPGI in coastal and humid environments. Slightly higher cost than PPGI.",
    relatedProducts: ["puf-panels", "pir-panels"],
    draft: false,
  },
  {
    slug: "tongue-and-groove",
    term: "Tongue-and-Groove Joint",
    definition:
      "Panel edge profile where one panel has a protruding tongue and the adjacent panel has a matching groove. Panels interlock along the length. Used in wall and roof cladding as an alternative to cam-lock.",
    relatedProducts: ["wall-panels", "roofing-panels", "puf-panels"],
    draft: false,
  },
  {
    slug: "thermal-conductivity",
    term: "Thermal Conductivity (λ)",
    definition:
      "Measure of how easily heat passes through a material, in W/m·K. Lower λ means better insulation. PUF is typically 0.022–0.024 W/m·K; PIR is typically 0.019–0.022 W/m·K.",
    relatedProducts: ["puf-panels", "pir-panels", "rockwool-panels"],
    draft: false,
  },
  {
    slug: "sandwich-panel",
    term: "Sandwich Panel",
    definition:
      "A prefabricated building component with two metal facings bonded to a rigid insulation core. Used for walls, roofs and cold room envelopes. Also called insulated panel or SIP (structural insulated panel) in some markets.",
    relatedProducts: ["puf-panels", "pir-panels", "rockwool-panels", "wall-panels", "roofing-panels"],
    draft: false,
  },
];
