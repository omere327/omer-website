import { Mark } from "./Mark";

export function Lockup({
  size = 40,
  tone = "light",
  cutColor,
  className = "",
}: {
  size?: number;
  tone?: "light" | "dark";
  cutColor?: string;
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <span
      className={`oe-lockup ${dark ? "oe-lockup--on-dark " : ""}${className}`}
      style={{ gap: Math.round(size * 0.5) }}
      aria-label="Omer Ejaz"
    >
      <Mark size={size} tone={dark ? "flat-dark" : "flat"} cutColor={cutColor ?? (dark ? "var(--oe-ink)" : undefined)} title="" />
      <span className="oe-wordmark" style={{ fontSize: Math.round(size * 0.55) }}>
        OMER EJAZ
      </span>
    </span>
  );
}
