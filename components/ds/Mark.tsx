import { useId, type CSSProperties } from "react";

// The eclipse mark. Geometry from the brand brief: o disc (34,50) r21.5; e ring (64,50) r19, stroke 5 (8 at <=24px).
const DISC = "M12.5 50 a21.5 21.5 0 1 0 43 0 a21.5 21.5 0 1 0 -43 0";
const E = "M45 50 H83 A19 19 0 1 0 78.6 62.2";

export type MarkTone = "light" | "dark" | "flat" | "flat-dark";

export function Mark({
  size = 40,
  tone = "light",
  cutColor,
  title = "Omer Ejaz",
  style,
  className,
}: {
  size?: number;
  tone?: MarkTone;
  cutColor?: string;
  title?: string;
  style?: CSSProperties;
  className?: string;
}) {
  // useId output can contain characters that break url(#…) references.
  const uid = "oe" + useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const small = size <= 24;
  const sw = small ? 8 : 5;
  const dark = tone === "dark" || tone === "flat-dark";
  const flat = small || tone === "flat" || tone === "flat-dark";
  const ink = dark ? "var(--oe-paper)" : "var(--oe-onyx)";
  const cut = cutColor || (dark ? "var(--oe-onyx)" : "var(--oe-surface)");
  const g0 = dark ? "var(--oe-paper)" : "var(--oe-slate)";
  const g1 = dark ? "var(--oe-mark-rev-end)" : "var(--oe-onyx)";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role={title ? "img" : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
      className={className}
      style={{ display: "block", overflow: "visible", flex: "none", ...style }}
    >
      <defs>
        <clipPath id={uid + "c"}>
          <path d={DISC} />
        </clipPath>
        {/* The logo's own shading is a brand asset; pages use the flat tones. taste-skill-ignore */}
        <radialGradient id={uid + "g"} gradientUnits="userSpaceOnUse" cx="26" cy="38" r="32">
          <stop offset="0" style={{ stopColor: g0 }} />
          <stop offset="1" style={{ stopColor: g1 }} />
        </radialGradient>
      </defs>
      <path d={DISC} style={{ fill: flat ? ink : `url(#${uid}g)` }} />
      <path d={E} fill="none" strokeWidth={sw} strokeLinecap="round" style={{ stroke: ink }} />
      <path
        d={E}
        fill="none"
        strokeWidth={sw}
        strokeLinecap="round"
        clipPath={`url(#${uid}c)`}
        style={{ stroke: cut }}
      />
    </svg>
  );
}
