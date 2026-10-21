import { ImageResponse } from "next/og";

// The social card: name, role and what SensViz is, on the site's black, with the mark.
export const alt = "Omer Ejaz, co-founder and CEO of SensViz, a custom AI development and software company";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#000",
          color: "#F5F7FA",
          fontFamily: "Georgia, serif",
        }}
      >
        <svg width="120" height="120" viewBox="8 8 84 84">
          <defs>
            <mask id="m" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
              <rect width="100" height="100" fill="#fff" />
              <path d="M45 50 H83 A19 19 0 1 0 78.6 62.2" fill="none" stroke="#000" strokeWidth="8" strokeLinecap="round" />
            </mask>
            <mask id="o" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
              <rect width="100" height="100" fill="#fff" />
              <circle cx="34" cy="50" r="21.5" fill="#000" />
            </mask>
          </defs>
          <circle cx="34" cy="50" r="21.5" fill="#F4F4F2" mask="url(#m)" />
          <path d="M45 50 H83 A19 19 0 1 0 78.6 62.2" fill="none" stroke="#F4F4F2" strokeWidth="8" strokeLinecap="round" mask="url(#o)" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 96, lineHeight: 1 }}>Omer Ejaz</div>
          <div style={{ fontSize: 40, color: "#D0D7E2", fontFamily: "Helvetica, Arial, sans-serif" }}>
            Co-founder and CEO, SensViz
          </div>
          <div style={{ fontSize: 28, color: "#8FC2FF", fontFamily: "Helvetica, Arial, sans-serif" }}>
            Custom AI development and software · London and Lahore
          </div>
        </div>
      </div>
    ),
    size,
  );
}
