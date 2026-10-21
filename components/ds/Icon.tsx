import type { CSSProperties, ReactElement } from "react";

// Subset of Lucide (lucide.dev, ISC) path data — 24px grid, 1.5 stroke, round caps.
const PATHS = {
  "arrow-right": [<path key="a" d="M5 12h14" />, <path key="b" d="m12 5 7 7-7 7" />],
  "arrow-up-right": [<path key="a" d="M7 7h10v10" />, <path key="b" d="M7 17 17 7" />],
  menu: [<path key="a" d="M4 12h16" />, <path key="b" d="M4 6h16" />, <path key="c" d="M4 18h16" />],
  x: [<path key="a" d="M18 6 6 18" />, <path key="b" d="m6 6 12 12" />],
  check: [<path key="a" d="M20 6 9 17l-5-5" />],
  mail: [
    <rect key="a" x={2} y={4} width={20} height={16} rx={2} />,
    <path key="b" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />,
  ],
  linkedin: [
    <path key="a" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />,
    <rect key="b" x={2} y={9} width={4} height={12} />,
    <circle key="c" cx={4} cy={4} r={2} />,
  ],
  instagram: [
    <rect key="a" x={2} y={2} width={20} height={20} rx={5} />,
    <path key="b" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />,
    <path key="c" d="M17.5 6.5h.01" />,
  ],
  // The X (Twitter) mark, from Tabler Icons (tabler.io, MIT): Lucide has no brand icon for it.
  "x-social": [
    <path key="a" d="M4 4l11.733 16h4.267l-11.733-16z" />,
    <path key="b" d="M4 20l6.768-6.768m2.46-2.46L20 4" />,
  ],
} satisfies Record<string, ReactElement[]>;

export type IconName = keyof typeof PATHS;

export function Icon({
  name,
  size = 20,
  title,
  className = "",
  style,
}: {
  name: IconName;
  size?: number;
  title?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      className={`oe-icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      style={style}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      {PATHS[name]}
    </svg>
  );
}
