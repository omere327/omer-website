import type { ReactNode } from "react";

/** A filled chip in the text face. `light` is for chips on the paper band. */
export function Tag({ light, children }: { light?: boolean; children: ReactNode }) {
  return (
    <span
      className={
        "oe-small inline-flex min-h-8 items-center rounded-full px-3.5 leading-none " +
        (light ? "bg-onyx/[.07] text-graphite!" : "bg-white/[.08] text-on-dark-muted")
      }
    >
      {children}
    </span>
  );
}
