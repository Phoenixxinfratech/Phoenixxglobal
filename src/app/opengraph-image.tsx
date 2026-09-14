import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const runtime = "nodejs";

export const alt = `${site.brand} — Insulated Panels Export from India`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#161C21",
          fontFamily:
            'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        <div
          style={{
            width: 8,
            height: "100%",
            backgroundColor: "#E85D04",
            flexShrink: 0,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px 80px",
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            {site.brand}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 28,
              fontWeight: 400,
              color: "#A1A1AA",
              lineHeight: 1.4,
              maxWidth: 900,
            }}
          >
            Insulated sandwich panels &amp; PEB systems — engineered for export
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
