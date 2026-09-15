# Sales Scripts

Call openers, WhatsApp messages, email templates and objection replies for the PHOENIXX SMARTBUILD sales desk. Built for three people working off a phone between plant and site visits.

---

## Placeholders

Curly placeholders are enquiry data. Replace every one before you send.

| Placeholder | Meaning | Example |
| --- | --- | --- |
| `{{name}}` | Buyer's first name | Daniel |
| `{{company}}` | Buyer's company | Rift Valley Foods Ltd |
| `{{product}}` | Product as named on our site | Cold Room Panels |
| `{{lead_id}}` | Reference from the lead ledger | PSB-20260915-0042 |
| `{{country}}` | Export market | Kenya |
| `{{city}}` | Delivery or installation city | Athi River |
| `{{port}}` | Port of discharge | Mombasa |
| `{{your_name}}` | Whoever is sending | — |

Square brackets mark a business fact you look up before sending, such as `[your current lead time from production]`. Never fill one from memory. A bracket left in a sent message looks careless; an invented delivery date costs money.

---

## How to use this file

Pick by channel and stage. A website enquiry gets the WhatsApp first response, then the callback opener when they reply. A name from a directory listing or an exhibition badge gets the cold opener. Anything carrying a number from production or the forwarder goes by email, because email leaves a record you can point to three months later when someone disputes scope.

Discovery decides whether the quotation is accurate, so do not skip it. The India and export sets are different conversations: an export buyer is purchasing a container and a clearance process along with the panels. Objection scripts are a last resort, because good discovery means most price pushback arrives with enough context to answer in one message.

---

## Cold call scripts

### Opener — inbound lead callback

> Good morning {{name}}, this is {{your_name}} from PHOENIXX SMARTBUILD in Ahmedabad. You sent us an enquiry for {{product}}, reference {{lead_id}}. Is now a good time for five minutes, or shall I call back later today?
>
> I have read what you sent. Before I put a price on paper I want the specification right, so I have four or five questions about the room and the site. Then I will tell you what I am sending and when.

If they are on a noisy site: *"Tell me one thing — chiller or freezer — and I will send the rest of the questions on WhatsApp."*

### Opener — genuinely cold call

> Good afternoon, am I speaking with {{name}}? My name is {{your_name}}, from PHOENIXX SMARTBUILD. We manufacture insulated sandwich panels and cold room panels at our plant in Ahmedabad and we export to {{country}}.
>
> I am calling because {{company}} works in [what you actually know — cold storage, food processing, warehousing]. I will not pitch you anything today. I want to know whether panels are something you buy or specify, and who handles it. If that is you, I will keep this to two minutes.

If they are not the right person, ask for the name and department, thank them and end the call. Do not pitch a gatekeeper.

### Discovery questions — India enquiry

```
1.  Site location — district, nearest town and state.
2.  What are you building? Cold room box, factory envelope, roofing,
    or a full PEB shed.
3.  Internal dimensions: length, width, height. Rough is fine now.
4.  Target temperature inside. Chiller, minus eighteen freezer, ambient.
5.  Has anyone already specified a thickness and facing?
6.  Is there a consultant, architect or main contractor in between?
    If yes, who approves the specification — you or them?
7.  Who installs? Your own team, a local cold room contractor, or are
    you expecting it from the supplier?
8.  Is {{company}} GST registered? Share the GSTIN and billing state so
    the invoice and e-way bill are correct.
9.  Is the billing address the same as the delivery address?
10. When do you need material at site, and what is driving that date?
```

Two questions that prevent arguments later: can a truck carrying 12 m panels reach the site, and who unloads? Panels arrive as heavy stacked bundles, and a site with no forklift needs to know that before dispatch.

### Discovery questions — export enquiry

```
1.  Country and city of the site.
2.  Port of discharge — {{port}}? Does the container move inland after
    clearance, and to where?
3.  Which Incoterm do you work on? FOB Indian port, CIF your port, or
    something you have used before.
4.  Who clears at destination — your team or an agent? Share the
    agent's name and email.
5.  Do you know the import requirements — declaration form, conformity
    inspection, HS classification? Your agent should confirm these
    before we dispatch, not after the vessel sails.
6.  Container: 20 ft or 40 ft high cube? Any limit on panel length at
    site or on the inland road?
7.  Room dimensions and target temperature.
8.  Coastal or inland, and what ambient design temperature should we
    work to?
9.  Power at site — voltage, phases, and is supply stable? A freezer
    that loses power daily is a different design conversation.
10. Payment route: advance, letter of credit, or another arrangement
    you have used with Indian suppliers.
```

Say this openly on coastal projects: salt air eats ordinary fixings, so external facing and fastener choice change once we know the site is near the coast. It is a specification point, not an upsell.

### How to close a discovery call

> Let me read back what I have. {{product}}, [room size they gave], target [temperature they gave], delivery to {{city}} through {{port}}, on [Incoterm they said]. Correct me if any of that is wrong.
>
> Here is what I will do. Check the thickness against your temperature and room size, confirm the facing with production, then send a written quotation with the panel schedule and accessory list. You will have it by [specific day you can actually hit]. If production tells me something different from what I assumed, I will call you rather than send a quotation you cannot use.
>
> What I need from you: [the one document or number still missing]. Send it on WhatsApp, reference {{lead_id}}.

---

## WhatsApp messages

Each block is one message, under 700 characters. Send it whole, not as five fragments.

### First response to a new enquiry

```
Hello {{name}}, this is {{your_name}} from PHOENIXX SMARTBUILD, Ahmedabad.
Thank you for the enquiry on {{product}}. Your reference is {{lead_id}}.

To quote correctly I need four things:
1. Internal size — length x width x height
2. Target temperature inside the room
3. Thickness and facing, if already specified
4. Delivery city and port

Text is fine, or send a photo of the drawing. An engineer from our side
replies within one working day. We work Monday to Saturday, 9:30 AM to
6:30 PM IST.
```

### Follow-up when there has been no reply

```
Hello {{name}}, {{your_name}} from PHOENIXX SMARTBUILD. I sent some
questions on your {{product}} enquiry, reference {{lead_id}}, and have not
heard back.

Two ways forward, both useful to me:
1. Send the room size and target temperature and I will quote.
2. Tell me it is on hold or closed and I stop messaging you.

If the drawing is not ready, a hand sketch with dimensions written on it is
enough for me to start.
```

### Quote-sent message

```
{{name}}, the quotation for {{lead_id}} is in your email. Check spam if it
is not in the inbox.

Inside: panel schedule, thickness, facing, joint type, accessories
(corners, coving, jamb profiles) and commercial terms.
Not inside: refrigeration plant, floor screed, site labour.

Please read the scope section first. If any line does not match your site,
tell me and I will revise it. Validity is printed on the quotation —
[validity period from the quotation].
```

### Negotiation and price pushback

```
{{name}}, I hear you on price. Before I change any figure I need to know
what you are comparing against: panel thickness, facing gauge, core
density, and whether doors and accessories are included.

Two quotations for a "100 mm panel" can sit far apart on those four lines
alone.

Send me the other specification, price blanked out if you prefer. If they
match us line for line, I will go to production and tell you honestly what
is possible. If the spec is lighter, I will show you where.
```

### Reactivation of a dormant enquiry

```
Hello {{name}}, {{your_name}} from PHOENIXX SMARTBUILD, Ahmedabad. We
quoted {{product}} for {{company}} in [month you sent the quotation],
reference {{lead_id}}.

Steel and coil prices move, so that old quotation is no longer safe to work
from. If the project is live, send me the final room sizes and I will
re-quote on today's rates.

If it is closed, or went to another supplier, tell me. I will close the
file and stop following up.
```

---

## Email templates

### Quotation cover email

**Subject:** Quotation {{lead_id}} — {{product}} for {{company}}, {{city}}

```
Dear {{name}},

Quotation attached for {{product}}, reference {{lead_id}}.

Specification:
- Panel: [thickness] mm, [core type], [facing type and gauge]
- Joint: [cam-lock or tongue-and-groove]
- Cover width: approximately 1000 mm
- Accessories: [corners, coving, jamb profiles, ceiling panels as applicable]
- Quantity: [panel area from the schedule]

Commercial terms:
- Basis: [Incoterm and named place]
- Price: [price per sqm from the rate sheet]
- Payment: [payment terms you have confirmed]
- Lead time: [your current lead time from production], from drawing
  approval and advance receipt
- Validity: [validity period from the quotation]

Outside our scope: refrigeration equipment, civil and flooring work, site
labour, inland transport beyond the named place above.

Two points before you compare this with another quotation. The thickness is
set against the temperature and room size you gave me, so a thinner panel
elsewhere is not the same product. The accessory lines are part of the
thermal system: without correct jamb profiles and floor coving, a cold room
loses temperature at the frame and the floor corner whatever the wall
thickness is.

Tell me if anything does not match your site and I will revise it.

Regards,
{{your_name}}
PHOENIXX SMARTBUILD (NXT Phoenixx SmartBuild LLP), Ahmedabad
```

### Technical clarification request

**Subject:** {{lead_id}} — details needed before I can quote your {{product}}

```
Dear {{name}},

Thank you for the enquiry. I cannot put an honest price on this yet, and I
would rather ask than send a number I must withdraw later.

Please confirm:
1. Internal dimensions of the room, or the wall and roof areas
2. Target internal temperature and the ambient condition at site
3. Number and size of door openings, and whether forklifts pass through
4. Facing requirement — standard PPGI or PPGL, or food-grade facing
5. Delivery point in {{city}}, and the port of discharge for export

A PDF drawing or a clear photo of the marked-up plan is faster than typing
dimensions.

Once I have these I will confirm the thickness and send the quotation. Keep
{{lead_id}} in your reply so it stays on one file.

Regards,
{{your_name}}
```

### Post-quote follow-up

**Subject:** {{lead_id}} — does the panel schedule match your site?

```
Dear {{name}},

About the quotation I sent for {{lead_id}}. I am not chasing a purchase
order today. I want to know whether the specification is right, because
that is the part I can still fix.

Three questions:
1. Is the thickness and facing acceptable to your consultant or contractor?
2. Is anything in the scope list unclear, or priced differently to how you
   expected?
3. Has the project timeline shifted?

If you are comparing quotations, send me what you are comparing against and
I will tell you plainly where we are the same and where we are not.

Regards,
{{your_name}}
```

### Price-objection response

**Subject:** {{lead_id}} — where our price sits against the specification

```
Dear {{name}},

You said the price is high. Fair enough. Let me show you what sits inside it
before we discuss the number.

Our quotation is built on [thickness] mm with [facing type and gauge] and
includes [accessory lines included]. Four things move a panel price most:
thickness, facing gauge, core density, and whether accessory and door lines
sit inside or outside the price. A cheaper quotation is usually cheaper on
one of those four. That is legitimate if the lighter specification suits
your application, and expensive later if it does not.

Two options:
1. Send the comparison specification. If it matches ours, I will take it to
   production and come back with the best I can genuinely do.
2. If you want to cut cost, tell me which way you prefer — a different core
   at the same thickness, a lighter facing gauge where the application
   allows, or a reduced accessory scope with your contractor supplying the
   rest. I will re-quote and note what you give up in each case.

What I will not do is quote a thinner panel than your temperature needs.

Regards,
{{your_name}}
```

### Dormant reactivation

**Subject:** {{lead_id}} — re-quote for {{company}} on current rates?

```
Dear {{name}},

We quoted {{product}} for your {{city}} project in [month you sent the
quotation], reference {{lead_id}}. Nothing has moved since, so I am writing
once to check.

Input costs change, so I will not ask you to work from old figures. If the
project is still planned, send the final dimensions and I will issue a fresh
quotation on today's rates.

If it is shelved or awarded elsewhere, tell me and I will close the file. A
clear no is more useful to me than silence.

Regards,
{{your_name}}
```

---

## Proposal pitch structure

Five parts, always this order. Works on the phone, in an email and in a PDF.

1. **Problem.** Their situation in their own words, including the constraint they mentioned. One or two sentences, no adjectives.
2. **Specification.** Core, thickness, facing, joint type, accessories, doors. Concrete numbers only.
3. **Why this specification.** The engineering reason for those numbers, tied to their temperature, room size, door traffic and site conditions. Name the trade-off you chose and the one you rejected.
4. **Commercial terms.** Basis, price, payment, lead time, and what sits outside scope. Every figure from the rate sheet or production.
5. **What we need to start, and validity.** The exact documents or approvals required, and how long the price holds.

### Worked example — cold room enquiry

> **Problem.** You need a freezer room at your {{city}} plant holding minus eighteen, and the existing shed has fixed headroom, so the ceiling build-up cannot grow.
>
> **Specification.** Cam-lock cold room panels, [thickness] mm, [core type] core, PPGI facing at [facing gauge], approximately 1000 mm effective cover width, with corner pieces, floor coving, factory-framed door openings and matched jamb profiles.
>
> **Why this specification.** Thickness follows your room size, the minus eighteen target and the door cycles you described. Cam-lock rather than tongue-and-groove because this is a box room inside an existing shell and your team may extend it later. The jamb profiles matter more than another ten millimetres of wall — a steel door frame with no thermal break frosts first and your compressor runs against it all day.
>
> **Commercial terms.** [Incoterm and named place], [price per sqm from the rate sheet], [payment terms you have confirmed], lead time [your current lead time from production] from drawing approval. Refrigeration plant, floor screed and site labour are not in our scope.
>
> **What we need to start, and validity.** Signed approval of the panel layout drawing, [advance terms you have confirmed], and your billing details. Price holds for [validity period from the quotation].

---

## Objection handling

### "Your price is high."

*Wrong instinct:* drop the price on the call to keep the conversation alive.

> I understand. High against what — another quotation, or the budget you had in mind? If it is another quotation, I want to see the specification, not their price. Thickness, facing gauge, core density, and whether accessories and doors are included. Those four lines explain most of the gap I see in this market.
>
> If their specification is genuinely the same as mine, send it and I will go to production and tell you the best we can honestly do. If it is lighter, I will point out which line is lighter and you decide whether that suits your application. Either way you get a straight answer by [when you can actually reply].

### "We're getting it locally."

*Wrong instinct:* argue that local suppliers are poor quality.

> That may well be the right choice, and I will not run down suppliers I have not inspected. What I would compare is the specification and the total installed cost, not the panel rate alone.
>
> Three things to check on the local offer: the actual core density and facing gauge; whether the joint system and accessories — corners, coving, jamb profiles — are included or bought separately; and who carries the risk if the room does not hold temperature at handover. Local supply also saves you shipping and clearance, which is a real advantage.
>
> Send me their specification and I will mark it against ours line by line. If they match on spec and beat us on landed cost, buy locally, and keep my number for the next project.

### "Send your best price first."

*Wrong instinct:* send a low number to stay in the race.

> I can send a price in an hour, but it will be a guess, and a guess helps neither of us. Panel price moves with thickness, facing gauge and core, and I do not yet know your target temperature or room size.
>
> Give me three things — room dimensions, internal temperature, delivery point — and I will send a firm quotation with the specification written out, so you can compare it properly against whatever else is on your table. If you need a rough range for your management before that, I will give a range and label it clearly as indicative.

### "We'll revert after the site visit."

*Wrong instinct:* say "sure, take your time" and let the file go quiet.

> Understood. Let me make the visit more useful. I will send a short checklist of what to measure and photograph: clear internal dimensions, door positions and sizes, floor condition, the approach road for a delivery truck, and the power supply point.
>
> When is the visit? I will call you the day after, not before. If dimensions change, send the new ones and I will revise the quotation the same working day. Keep {{lead_id}} in the subject so it stays on one file.

---

## What never to say

- Never quote a delivery date you have not confirmed with production. Say: "I will confirm the date with production and come back to you today."
- Never confirm a certification the company does not hold. State what we do hold and offer the in-house inspection records.
- Never agree to an Incoterm you have not costed. CIF sounds helpful on a call and can lose money on freight and insurance.
- Never give a price before you know the thickness and the facing. Those two decide the cost.
- Never state a capacity figure, an export volume or a project count that is not documented.
- Never name a client or a project as a reference without that client's written consent.
- Never promise a local office, stockist or warehouse in the buyer's country. We manufacture in Ahmedabad and export made-to-order.
- Never quote a duty rate or a landed cost. That is the clearing agent's job, and we say so plainly.
- Never offer a thinner panel to win on price when the temperature target needs more.
- Never say the container will arrive on a given date before the forwarder confirms the sailing.

---

## Fill-in fields

Business facts the scripts leave in square brackets. Keep them current and log anything still unconfirmed in `docs/OPEN-ITEMS.md`.

- `[your current lead time from production]` — manufacturing lead time from drawing approval
- `[price per sqm from the rate sheet]`, `[facing gauge]` — current rates and coil availability
- `[payment terms you have confirmed]`, `[advance terms you have confirmed]`
- `[validity period from the quotation]` — how long a quoted price holds
- `[Incoterm and named place]` — only the ones we have costed
- `[thickness]`, `[core type]`, `[accessory lines included]` — set per enquiry after discovery
- `[month you sent the quotation]`, `[when you can actually reply]` — from the lead ledger and your calendar
