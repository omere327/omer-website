import type { ReactNode } from "react";

/** Secondary action beside the primary Button: a flat, quieter fill. `light` is for paper grounds. */
export function PillLink({ href, light, children }: { href: string; light?: boolean; children: ReactNode }) {
  return (
    <a
      href={href}
      className={
        "oe-label inline-flex min-h-12 items-center rounded-pill px-6 leading-none no-underline transition-[background-color,transform] duration-150 ease-[ease] active:scale-[.97] focus-visible:outline-2 focus-visible:outline-offset-2 " +
        (light
          ? "bg-onyx/[.08] text-onyx hover:bg-onyx/[.14] hover:text-onyx focus-visible:outline-onyx"
          : "bg-white/[.1] text-on-dark hover:bg-white/[.16] hover:text-on-dark focus-visible:outline-paper")
      }
    >
      {children}
    </a>
  );
}
