/**
 * Design tokens for PHOENIXX SMARTBUILD.
 * Mirrored as CSS variables in src/styles/globals.css (@theme).
 * If a client logo supplies different brand colours, update here and report the change.
 */
export const tokens = {
  color: {
    ink: "#0B0F12",
    graphite: "#161C21",
    steel: "#2C3A44",
    zinc: "#5E6E78",
    line: "#D6DBDE",
    paper: "#F4F5F6",
    white: "#FFFFFF",
    ember: "#E8481F",
    emberDeep: "#B8320F",
    signal: "#FFB100",
    verify: "#2E7D5B",
  },
  radius: {
    input: "2px",
    button: "2px",
    card: "4px",
    image: "0px",
    table: "0px",
  },
  container: {
    maxWidth: "1280px",
    gutterMobile: "24px",
    gutterDesktop: "48px",
  },
  section: {
    paddingMobile: "64px",
    paddingDesktop: "112px",
  },
  type: {
    scale: [
      0.75, 0.875, 1, 1.125, 1.25, 1.5, 1.875, 2.25, 3, 3.75, 4.5,
    ] as const,
    bodyMaxWidth: "72ch",
    bodyLineHeight: 1.65,
    headingLineHeight: 1.15,
  },
  motion: {
    megaMenuIntentMs: 150,
    headerCompressPx: 64,
    headerTallPx: 88,
  },
} as const;

export type Tokens = typeof tokens;
