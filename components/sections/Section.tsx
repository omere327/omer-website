import type { ComponentProps } from "react";

/** A full-width band with the page container inside. Sections are 72px apart on phones, up to 136px on large screens; nothing draws a rule between them. */
export function Section({
  className = "",
  inner = "",
  children,
  ...rest
}: ComponentProps<"section"> & { inner?: string }) {
  return (
    <section className={"py-[clamp(72px,7vw,136px)] " + className} {...rest}>
      <div className={"oe-page " + inner}>{children}</div>
    </section>
  );
}
