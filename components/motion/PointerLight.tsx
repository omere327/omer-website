"use client";

import { useEffect } from "react";

/**
 * One pointer listener for the whole page. Over any `[data-spot]` element it sets
 * --mx / --my (the pointer, in px, for the light that follows it) and --px / --py
 * (-0.5…0.5, for the tilt). CSS in styles/motion.css does the drawing.
 * Fine pointers only: on touch there is no hover to follow.
 */
export function PointerLight() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let last: HTMLElement | null = null;
    let frame = 0;
    let ev: PointerEvent | null = null;

    const clear = (el: HTMLElement) => {
      for (const p of ["--px", "--py"]) el.style.removeProperty(p);
    };
    const paint = () => {
      frame = 0;
      if (!ev) return;
      const el = (ev.target as Element | null)?.closest?.("[data-spot]") as HTMLElement | null;
      if (last && last !== el) clear(last);
      last = el;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = ev.clientX - r.left;
      const y = ev.clientY - r.top;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
      el.style.setProperty("--px", (x / r.width - 0.5).toFixed(3));
      el.style.setProperty("--py", (y / r.height - 0.5).toFixed(3));
    };
    const onMove = (e: PointerEvent) => {
      ev = e;
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const onLeave = () => {
      if (last) clear(last);
      last = null;
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
