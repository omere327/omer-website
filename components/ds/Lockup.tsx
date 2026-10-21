import { Mark } from "./Mark";

export function Lockup({
  size = 40,
  tone = "light",
  cutColor,
  wordmarkSize,
  className = "",
}: {
  size?: number;
  /** The wordmark's font size in px; by default 55% of the mark. */
  wordmarkSize?: number;
  tone?: "light" | "dark";
  cutColor?: string;
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <span
      className={`oe-lockup ${dark ? "oe-lockup--on-dark " : ""}${className}`}
      style={{ gap: Math.round(size * 0.32) }}
      aria-label="Omer Ejaz"
    >
      <Mark size={size} tone={dark ? "flat-dark" : "flat"} cutColor={cutColor ?? (dark ? "var(--oe-ink)" : undefined)} title="" />
      <span className="oe-wordmark" style={{ fontSize: wordmarkSize ?? Math.round(size * 0.55) }}>
        OMER EJAZ
      </span>
    </span>
  );
}
