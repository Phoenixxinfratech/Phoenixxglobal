# Copy Guide

Rules from master prompt Section 4.2. All copy in `src/content/` and `src/app/` must read as if written by an Indian engineer-founder who has loaded containers and handled site complaints — not a brochure or an LLM.

---

## Banned words

Never use any of the following (including inflected forms):

| | | |
| --- | --- | --- |
| elevate | seamless / seamlessly | unlock |
| unleash | leverage (verb) | robust |
| cutting-edge | state-of-the-art | game-changer |
| revolutionise / revolutionize | empower | delve |
| embark | navigate the landscape | in today's fast-paced world |
| ever-evolving | testament to | tapestry |
| realm | harness | streamline |
| holistic | synergy | bespoke (solutions) |
| world-class | one-stop (solution) | unparalleled |
| meticulously (crafted) | we pride ourselves | at the end of the day |
| it's worth noting | rest assured | look no further |
| dive in | take it to the next level | |

The audit script also flags: `bespoke`, `meticulously`, `rest assured`, `look no further`, `dive in`, `one-stop`, `world-class`, `unparalleled`, `holistic`, `synergy`, `harness`, `streamline`, `realm`, `tapestry`, `embark`, `delve`, `empower`, `revolutionise`, `revolutionize`, `game-changer`, `state-of-the-art`, `cutting-edge`, `robust`, `leverage`, `unleash`, `unlock`, `seamless`, `elevate`.

---

## Banned sentence patterns

- "Not just X — but Y."
- "Whether you're X or Y, we've got you covered."
- Three-item triads in every sentence ("quality, reliability and trust").
- Starting more than two sections on one page with "At PHOENIXX SMARTBUILD, we…"
- Rhetorical question openers ("Looking for a reliable panel supplier?")
- Stacked em-dash asides (more than one per paragraph).
- Colon-then-reveal headlines ("Cold storage panels: what you need to know").
- Every paragraph the same 2–3 sentence length.

---

## Required behaviours

- **Vary sentence length.** Mix short (8 words) with long (30 words).
- **Use concrete nouns and numbers:** `42 mm`, `1000 mm cover width`, `40-foot HC container`, `Mombasa port`, `Athi River` — not "various sizes" or "leading destinations".
- **Name real objections and answer them:** delamination at joints, condensation, sagging spans, colour fade in tropical UV, panel damage in transit, lead time slippage, documentation delays at destination port.
- **Write like speech where appropriate.** Contractions are fine.
- **Indian English register** is acceptable; grammar must stay clean for international buyers.
- **Practitioner sentence:** every page needs at least one line only someone who has done the work would write (a caveat, trade-off, or honest limitation).
- **Answer first:** the buyer's question in the first two sentences, then expand.

---

## Truth rules (copy-related)

- Never invent certifications, capacities, client names, projects, export destinations, or test data.
- Unknown specs: use the note *"Specification confirmed against approved project documentation before dispatch."* and set `verified: false`.
- Never publish JSON-LD that is not visible on the page.
- Never claim local offices, warehouses, or distributors abroad.
- Log missing facts in `docs/OPEN-ITEMS.md`.

---

## Holding copy (shell pages)

Stub routes use `holdingCopy` from the pages registry or entity record. Requirements:

- 2–3 sentences, honest and specific.
- Never "coming soon" filler.
- Offer a concrete next step (RFQ, email with BOQ, ask for datasheet).
- Example tone: *"We're publishing the full technical page for Rockwool panels shortly — density options, fire performance and joint details included. If you need specifications now, send us your application and we'll email the datasheet the same day."*

---

## Self-check

Before committing copy, ask: **would a Kingspan engineer or a Nairobi procurement head believe a human wrote this?** If it reads like a brochure or an LLM, rewrite it.

---

## Audit

```bash
npm run audit:copy
```

Scans `src/content/` and `src/app/` for banned words. Exit 1 on any match. The `docs/` folder is excluded from the scan — still avoid banned words in documentation.

---

## Documentation

This guide applies to user-facing site copy. These docs use plain technical English and deliberately avoid the banned word list.
