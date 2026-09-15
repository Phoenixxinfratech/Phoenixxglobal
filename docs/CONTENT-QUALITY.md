# Content Quality Rules

Mandatory standards for important commercial pages. Complements [`docs/COPY-GUIDE.md`](COPY-GUIDE.md).

## Depth bands (floors, not targets)

Use enough useful prose to answer the buyer. Do not pad.

| Page type | Soft floor (prose words) |
| --- | --- |
| Major product pages | ≥ 900 |
| Important solutions / service pages | ≥ 1,000 |
| High-value manufacturer pages (About, Manufacturing) | ≥ 1,200 |
| Quality / export support pages | ≥ 700 |
| Product / solutions hub intros | Useful navigational copy; not thin stubs |
| Technical / commercial guides | ≥ 700 |
| Comparison pages | ≥ 700 |

If intent needs more, write more. Never add empty paragraphs to hit a number.

Run: `npm run audit:depth` (warnings for under-floor entities).

## Buyer-answer coverage

Important pages should address, where relevant:

1. What is this product/service?
2. What problem does it solve?
3. Where is it used / who buys it?
4. Which specifications matter?
5. What options exist?
6. What should the buyer check before ordering?
7. Practical advantages and honest limitations
8. How it differs from alternatives (link comparisons)
9. What affects price (variables only — never invent live rates)
10. What information is required for a quotation?
11. Relevant applications / industries
12. Common buyer FAQs

Use existing fields: `quickAnswer`, `buyerChecklist`, `limitations`, `buyerScenarios`, FAQs, `exportNotes`, `estimatingGuidance`.

## Humanization

Write as a manufacturer who loads containers and fields site complaints. Ban list: COPY-GUIDE. Prefer concrete nouns (thickness mm, port names, joint types) over brochure adjectives.

## Freshness

Refresh by adding better technical and commercial information — not by swapping synonyms or inventing “Updated 2026” badges.

## Ports and locations

Where export or Gujarat industrial context is relevant, mention **multiple** relevant ports and locations **with why they matter**.

Indian west-coast examples (confirm per shipment): Mundra, Deendayal (Kandla), Pipavav, Hazira, Nhava Sheva / JNPT.

Gujarat industrial examples when genuine: Ahmedabad, Sanand, Changodar, Bavla, Dahej, Bharuch, Ankleshwar, Surat, Hazira, Vadodara, Halol, Morbi, Gandhinagar.

**Forbidden:** city/port keyword laundry lists; “PUF manufacturer Mundra, PUF manufacturer Kandla…” stuffing.

## Truth

Never invent certifications, prices, clients, projects, HS codes, duty rates, or guaranteed sailings.

## Conversion

Every important page needs a clear next step (RFQ / quote CTA) and relevant internal links to products, comparisons, export, and guides.
