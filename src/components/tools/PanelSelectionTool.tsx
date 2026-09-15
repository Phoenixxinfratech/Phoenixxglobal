"use client";

import { useMemo, useState } from "react";
import { Button, Select } from "@/components/ui";
import { track } from "@/lib/analytics/track";
import {
  APPLICATION_OPTIONS,
  CLIMATE_OPTIONS,
  evaluateSelection,
  FIRE_OPTIONS,
  HYGIENE_OPTIONS,
  SPAN_OPTIONS,
  TEMP_OPTIONS,
  type ApplicationType,
  type ClimateType,
  type FireRequirement,
  type HygieneLevel,
  type InternalTempBand,
  type SpanBand,
} from "@/lib/selection-rules";

type PanelSelectionToolProps = {
  onRecommend?: (payload: {
    productSlug: string;
    message: string;
  }) => void;
};

export function PanelSelectionTool({ onRecommend }: PanelSelectionToolProps) {
  const [application, setApplication] = useState<ApplicationType>("cold-storage");
  const [internalTemp, setInternalTemp] = useState<InternalTempBand>("freezer");
  const [climate, setClimate] = useState<ClimateType>("hot-humid");
  const [coastal, setCoastal] = useState(false);
  const [fireRequirement, setFireRequirement] = useState<FireRequirement>("standard");
  const [span, setSpan] = useState<SpanBand>("medium");
  const [hygiene, setHygiene] = useState<HygieneLevel>("standard");
  const [started, setStarted] = useState(false);

  function markStarted() {
    if (started) return;
    setStarted(true);
    track("selection_tool_start");
  }

  const result = useMemo(
    () =>
      evaluateSelection({
        application,
        internalTemp,
        climate,
        coastal,
        fireRequirement,
        span,
        hygiene,
      }),
    [application, internalTemp, climate, coastal, fireRequirement, span, hygiene],
  );

  const recommendationMessage = [
    "Panel selection tool recommendation:",
    `Core: ${result.core}`,
    `Thickness: ${result.thicknessRange}`,
    `Facing: ${result.facing}`,
    `Coating: ${result.coating}`,
    ...result.reasoning.map((line) => `• ${line}`),
  ].join("\n");

  function handleQuotePrefill() {
    track("selection_tool_complete", { product: result.productSlug });
    onRecommend?.({
      productSlug: result.productSlug,
      message: recommendationMessage,
    });
    const form = document.getElementById("lead-form");
    form?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="rounded-[2px] border border-line bg-white p-6 md:p-8">
      <h2 className="text-xl font-semibold text-ink">Panel selection inputs</h2>
      <p className="mt-2 text-sm text-steel">
        Answer seven questions — we suggest a core, thickness band and facing.
        Indicative guidance only; confirm on quotation with your refrigeration and
        structural engineer.
      </p>

      <div
        className="mt-6 grid gap-5 md:grid-cols-2"
        onChangeCapture={markStarted}
      >
        <Select
          label="Application"
          value={application}
          onChange={(event) => setApplication(event.target.value as ApplicationType)}
        >
          {APPLICATION_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>

        <Select
          label="Internal temperature"
          value={internalTemp}
          onChange={(event) => setInternalTemp(event.target.value as InternalTempBand)}
        >
          {TEMP_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>

        <Select
          label="Ambient / climate"
          value={climate}
          onChange={(event) => setClimate(event.target.value as ClimateType)}
        >
          {CLIMATE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>

        <Select
          label="Fire requirement"
          value={fireRequirement}
          onChange={(event) =>
            setFireRequirement(event.target.value as FireRequirement)
          }
        >
          {FIRE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>

        <Select
          label="Span / purlin spacing"
          value={span}
          onChange={(event) => setSpan(event.target.value as SpanBand)}
        >
          {SPAN_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>

        <Select
          label="Hygiene level"
          value={hygiene}
          onChange={(event) => setHygiene(event.target.value as HygieneLevel)}
        >
          {HYGIENE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>

        <div className="flex flex-col gap-1.5 md:col-span-2">
          <span className="text-sm font-medium text-ink">Coastal exposure</span>
          <label className="flex items-center gap-2 text-base text-steel">
            <input
              type="checkbox"
              checked={coastal}
              onChange={(event) => setCoastal(event.target.checked)}
              className="h-4 w-4 rounded border-line accent-ember"
            />
            Site within ~5 km of sea or heavy salt-air environment
          </label>
        </div>
      </div>

      <div
        className="mt-8 rounded-[2px] border border-line bg-paper p-5"
        aria-live="polite"
        aria-atomic="true"
      >
        <h3 className="text-lg font-semibold text-ink">Suggested specification</h3>
        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          <div>
            <dt className="text-xs text-zinc">Core type</dt>
            <dd className="font-medium text-ink">{result.core}</dd>
          </div>
          <div>
            <dt className="text-xs text-zinc">Thickness range</dt>
            <dd className="font-medium text-ink">{result.thicknessRange}</dd>
          </div>
          <div>
            <dt className="text-xs text-zinc">Facing</dt>
            <dd className="font-medium text-ink">{result.facing}</dd>
          </div>
          <div>
            <dt className="text-xs text-zinc">Coating</dt>
            <dd className="font-medium text-ink">{result.coating}</dd>
          </div>
        </dl>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-steel">
          {result.reasoning.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-zinc">
          Indicative guidance — not a structural or refrigeration design sign-off.
          Values must be confirmed against your project documentation before order.
        </p>
        <Button
          type="button"
          variant="primary"
          size="md"
          className="mt-6"
          onClick={handleQuotePrefill}
        >
          Request quote with this recommendation
        </Button>
      </div>
    </div>
  );
}
