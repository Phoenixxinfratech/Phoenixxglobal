# Experiments

Cookie-based 50/50 split helper: `src/lib/experiments.ts`. No third-party library. The variant is stored in `psb_exp` for 90 days so a returning visitor stays in the same bucket. Read the cookie before paint (server component or inline script) — never flash the control then swap.

**One experiment at a time.** Results are read in GA4 (`cta_click` and `generate_lead` by variant, once you pass `variant` into `track()`).

## Traffic rule

Do not start an experiment on a URL that has fewer than ~400 sessions and ~20 generate_lead events in a fortnight. Below that, the result is noise. This site is pre-launch, so **no experiment is running**.

## Backlog (run after launch, in this order)

### EXP-01 — quote CTA wording

| | |
| --- | --- |
| Hypothesis | Wording that names the outcome ("Get a panel specification and quote") will raise generate_lead on product and country pages versus "Get a quote". |
| Metric | generate_lead / session on `/products/*` and `/export/*` |
| Decision | Ship the winner at 95% confidence or after 4 weeks, whichever is later. Stop if either arm drops mobile Lighthouse performance below 90. |
| Status | **Not started** — the outcome wording is currently the default (CRO pass). Re-test against the shorter label only after traffic exists. |

When you run EXP-01 for real, keep the current label as `variant` and restore "Get a quote" as `control`, then record the start date here.
