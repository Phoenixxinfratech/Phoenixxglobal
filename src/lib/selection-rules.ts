export type ApplicationType =
  | "cold-storage"
  | "food-processing"
  | "warehouse"
  | "cleanroom"
  | "fire-rated-wall"
  | "roof-only";

export type InternalTempBand =
  | "ambient"
  | "chiller"
  | "freezer"
  | "deep-freeze";

export type ClimateType = "temperate" | "hot-humid" | "hot-dry" | "coastal";

export type FireRequirement = "none" | "standard" | "non-combustible";

export type SpanBand = "short" | "medium" | "long";

export type HygieneLevel = "standard" | "wash-down" | "food-grade";

export type SelectionInput = {
  application: ApplicationType;
  internalTemp: InternalTempBand;
  climate: ClimateType;
  coastal: boolean;
  fireRequirement: FireRequirement;
  span: SpanBand;
  hygiene: HygieneLevel;
};

export type SelectionResult = {
  core: string;
  thicknessRange: string;
  facing: string;
  coating: string;
  productSlug: string;
  reasoning: string[];
};

const THICKNESS_BY_TEMP: Record<InternalTempBand, { puf: string; pir: string }> = {
  ambient: { puf: "40–80 mm", pir: "40–60 mm" },
  chiller: { puf: "80–100 mm", pir: "60–80 mm" },
  freezer: { puf: "120–150 mm", pir: "100–120 mm" },
  "deep-freeze": { puf: "150–200 mm", pir: "120–150 mm" },
};

export function evaluateSelection(input: SelectionInput): SelectionResult {
  const reasoning: string[] = [];
  let core = "PUF";
  let productSlug = "puf-panels";
  let thicknessRange = THICKNESS_BY_TEMP[input.internalTemp].puf;
  let facing = "PPGI both sides";
  let coating = "Standard polyester paint system";

  if (input.fireRequirement === "non-combustible") {
    core = "Rockwool (stone wool)";
    productSlug = "rockwool-panels";
    thicknessRange = "80–150 mm depending on U-value target";
    reasoning.push(
      "Non-combustible core specified — foam cores (PUF/PIR) are excluded for this fire requirement.",
    );
  } else if (input.application === "fire-rated-wall") {
    core = "Fire-rated mineral wool system";
    productSlug = "fire-rated-panels";
    thicknessRange = "Per rated wall schedule — typically 80–120 mm";
    reasoning.push(
      "Fire-rated partition application — match the tested system classification on your drawing.",
    );
  } else if (input.application === "cleanroom" || input.hygiene === "food-grade") {
    core = input.internalTemp === "ambient" ? "PIR or PUF" : "PIR preferred";
    productSlug = "cleanroom-panels";
    thicknessRange =
      input.internalTemp === "ambient"
        ? "50–80 mm"
        : THICKNESS_BY_TEMP[input.internalTemp].pir;
    facing = "Food-grade / hygienic facing";
    coating = "Wash-down compatible coating";
    reasoning.push(
      "Hygiene-rated facing and joint detail recommended for clean or food-grade zones.",
    );
  } else if (input.application === "cold-storage" || input.internalTemp !== "ambient") {
    if (input.internalTemp === "deep-freeze" || input.span === "long") {
      core = "PIR";
      productSlug = "pir-panels";
      thicknessRange = THICKNESS_BY_TEMP[input.internalTemp].pir;
      reasoning.push(
        "Deep freeze or long span favours PIR for lower λ in thinner sections.",
      );
    } else if (input.internalTemp === "freezer") {
      core = "PUF or PIR";
      productSlug = "cold-room-panels";
      thicknessRange = THICKNESS_BY_TEMP.freezer.puf;
      reasoning.push(
        "Standard freezer range — PUF cam-lock kits are cost-effective; PIR if space is tight.",
      );
    } else {
      core = "PUF";
      productSlug = "cold-room-panels";
      thicknessRange = THICKNESS_BY_TEMP[input.internalTemp].puf;
      reasoning.push("Chiller application — PUF is the usual export default.");
    }
  } else if (input.application === "roof-only") {
    core = "PUF";
    productSlug = "roofing-panels";
    thicknessRange = "40–100 mm depending on comfort / condensation target";
    reasoning.push("Roof-only industrial application — trapezoidal PUF roof panel profile.");
  } else {
    core = "PUF";
    productSlug = "wall-panels";
    thicknessRange = THICKNESS_BY_TEMP.ambient.puf;
    reasoning.push("Ambient warehouse or factory envelope — standard PUF wall build-up.");
  }

  if (input.coastal || input.climate === "coastal") {
    facing = "PPGL (galvalume) recommended";
    coating = "Enhanced corrosion-resistant paint system";
    reasoning.push(
      "Coastal or salt-air exposure — upgrade from standard PPGI to PPGL and specify coated fixings.",
    );
  } else if (input.climate === "hot-humid") {
    thicknessRange = bumpThickness(thicknessRange);
    reasoning.push(
      "Hot humid climate — consider upper thickness band for margin on refrigeration load.",
    );
  }

  if (input.fireRequirement === "standard" && core.startsWith("PU")) {
    reasoning.push(
      "Standard fire requirement — confirm local code accepts foam core or add fire-rated boundary where required.",
    );
  }

  if (input.span === "long" && productSlug === "roofing-panels") {
    reasoning.push(
      "Long span — verify purlin spacing against structural table; heavier gauge may be required.",
    );
  }

  if (input.hygiene === "wash-down" && productSlug !== "cleanroom-panels") {
    coating = "Wash-down compatible outer coating";
    reasoning.push("Wash-down environment — declare cleaning chemicals for coating compatibility.");
  }

  return {
    core,
    thicknessRange,
    facing,
    coating,
    productSlug,
    reasoning,
  };
}

function bumpThickness(range: string): string {
  if (range.includes("120–150")) return "150–180 mm";
  if (range.includes("100–120")) return "120–150 mm";
  if (range.includes("80–100")) return "100–120 mm";
  if (range.includes("60–80")) return "80–100 mm";
  return range;
}

export const APPLICATION_OPTIONS: { value: ApplicationType; label: string }[] = [
  { value: "cold-storage", label: "Cold storage room" },
  { value: "food-processing", label: "Food processing hall" },
  { value: "warehouse", label: "Warehouse / factory" },
  { value: "cleanroom", label: "Cleanroom / pharma" },
  { value: "fire-rated-wall", label: "Fire-rated wall" },
  { value: "roof-only", label: "Roof only" },
];

export const TEMP_OPTIONS: { value: InternalTempBand; label: string }[] = [
  { value: "ambient", label: "Ambient (+15 °C to +35 °C)" },
  { value: "chiller", label: "Chiller (+0 °C to +8 °C)" },
  { value: "freezer", label: "Freezer (−18 °C to −25 °C)" },
  { value: "deep-freeze", label: "Deep freeze (−30 °C and below)" },
];

export const CLIMATE_OPTIONS: { value: ClimateType; label: string }[] = [
  { value: "temperate", label: "Temperate inland" },
  { value: "hot-humid", label: "Hot humid" },
  { value: "hot-dry", label: "Hot dry" },
  { value: "coastal", label: "Coastal / salt air" },
];

export const FIRE_OPTIONS: { value: FireRequirement; label: string }[] = [
  { value: "none", label: "Not specified" },
  { value: "standard", label: "Standard industrial" },
  { value: "non-combustible", label: "Non-combustible core required" },
];

export const SPAN_OPTIONS: { value: SpanBand; label: string }[] = [
  { value: "short", label: "Up to 1.5 m purlin spacing" },
  { value: "medium", label: "1.5–2.0 m spacing" },
  { value: "long", label: "Over 2.0 m — check structurally" },
];

export const HYGIENE_OPTIONS: { value: HygieneLevel; label: string }[] = [
  { value: "standard", label: "Standard industrial" },
  { value: "wash-down", label: "Wash-down area" },
  { value: "food-grade", label: "Food / GMP zone" },
];
