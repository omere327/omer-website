"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * The stage for a product scene. The scene is drawn once at a fixed design size (960×600, or 1200×600 when
 * wide) and scaled to the card, so it keeps its proportions at every width, the way a picture would.
 * It only animates while it is on screen; with reduced motion every scene rests in its finished state.
 */
export function Demo({
  label,
  wide,
  tone,
  children,
}: {
  label: string;
  wide?: boolean;
  /** Which product this is: sets the stage tint and the product colour (styles/demos.css). */
  tone?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const designW = wide ? 1200 : 960;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = () => {
      el.style.setProperty("--s", String(el.clientWidth / designW));
      el.setAttribute("data-ready", "");
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    const io = new IntersectionObserver(([e]) => el.toggleAttribute("data-play", e.isIntersecting), {
      rootMargin: "80px 0px",
    });
    io.observe(el);
    return () => {
      ro.disconnect();
      io.disconnect();
    };
  }, [designW]);

  return (
    <div
      ref={ref}
      role="img"
      aria-label={label}
      className="demo"
      data-tone={tone}
      style={{ aspectRatio: wide ? "2 / 1" : "16 / 10" }}
    >
      <div className="demo__canvas" data-ui aria-hidden="true" style={{ width: designW, height: 600 }}>
        <div className={"demo__disc" + (wide ? " demo__disc--wide" : "")} />
        {children}
      </div>
    </div>
  );
}
