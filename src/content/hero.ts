import { z } from "zod";

export const HeroSlideSchema = z.object({
  id: z.string().min(1),
  eyebrow: z.string().optional(),
  headline: z.string().min(1),
  subline: z.string().min(1),
  primaryCta: z.object({
    label: z.string().min(1),
    href: z.string().min(1),
  }),
  secondaryCta: z
    .object({
      label: z.string().min(1),
      href: z.string().min(1),
    })
    .optional(),
  image: z.object({
    src: z.string().min(1),
    alt: z.string().min(1),
    focalPoint: z.enum(["left", "center", "right"]),
  }),
  theme: z.enum(["dark-overlay", "split"]),
  stat: z
    .object({
      value: z.string().min(1),
      label: z.string().min(1),
    })
    .optional(),
});

export type HeroSlide = z.infer<typeof HeroSlideSchema>;

export const heroSlides: HeroSlide[] = HeroSlideSchema.array().parse([
  {
    id: "manufacturing",
    eyebrow: "From Ahmedabad to export markets",
    headline: "PUF and PIR panels, ready to ship",
    subline:
      "Insulated sandwich panels with PPGI or PPGL facings for cold rooms, warehouses and industrial sheds. Drawings go out with every quotation.",
    primaryCta: { label: "Explore panel range", href: "/products/" },
    secondaryCta: { label: "Request a quotation", href: "/request-a-quote/" },
    image: {
      src: "/images/hero/hero-manufacturing-panels.jpg",
      alt: "Green metal-clad industrial warehouse exterior under a clear sky",
      focalPoint: "center",
    },
    theme: "dark-overlay",
  },
  {
    id: "export-africa",
    headline: "Packed for African project ports",
    subline:
      "Export packing for 40-foot HC containers, with commercial paperwork prepared before sailing. Share destination port and Incoterm preference with your enquiry.",
    primaryCta: { label: "See export markets", href: "/export/" },
    secondaryCta: { label: "Talk to export desk", href: "/contact/" },
    image: {
      src: "/images/hero/hero-export-containers.jpg",
      alt: "Cargo ship loaded with shipping containers at an industrial port",
      focalPoint: "right",
    },
    theme: "dark-overlay",
  },
  {
    id: "cold-storage",
    headline: "Cold rooms built as full envelopes",
    subline:
      "Panels through to doors for chillers, freezers and hygiene zones. Send room size and temperature target — we reply with thickness and joint recommendations.",
    primaryCta: { label: "Cold storage envelopes", href: "/solutions/cold-storage/" },
    secondaryCta: { label: "Get a panel recommendation", href: "/request-a-quote/?product=cold-room-panels" },
    image: {
      src: "/images/hero/hero-cold-storage-hvac.jpg",
      alt: "Industrial refrigeration condenser units mounted outdoors on a plant wall",
      focalPoint: "left",
    },
    theme: "dark-overlay",
  },
  {
    id: "peb",
    headline: "Steel frames with insulated cladding",
    subline:
      "Pre-engineered building structures paired with sandwich panel walls and roofs for warehouses and factories. One enquiry covers structure and envelope.",
    primaryCta: {
      label: "PEB and prefab buildings",
      href: "/products/",
    },
    secondaryCta: { label: "Request project consultation", href: "/request-a-quote/?variant=consultation" },
    image: {
      src: "/images/hero/hero-peb-steel-frame.jpg",
      alt: "Orange steel beams and columns inside an industrial factory hall",
      focalPoint: "center",
    },
    theme: "dark-overlay",
  },
]);
