"use client";

import { useEffect } from "react";

/**
 * One observer for the whole page. Any element with `data-reveal` gets `data-in`
 * the first time it scrolls into view; CSS in globals.css does the rest.
 * Elements mounted later (a remount, streamed content, Fast Refresh) are picked up too,
 * so nothing can be left hidden.
 */
export function RevealObserver() {
  useEffect(() => {
    const reveal = (el: Element) => el.setAttribute("data-in", "");
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal]").forEach(reveal);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          reveal(e.target);
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0 },
    );
    const watch = (root: ParentNode) =>
      root.querySelectorAll("[data-reveal]:not([data-in])").forEach((el) => io.observe(el));
    watch(document);

    // A fast jump (scrollbar drag, End key, an anchor link) can carry an element from below the screen
    // to above it without a frame where it intersects, so the observer never fires. On scroll, reveal
    // anything whose top is already above the bottom of the screen.
    let frame = 0;
    const sweep = () => {
      frame = 0;
      const limit = window.innerHeight;
      document.querySelectorAll("[data-reveal]:not([data-in])").forEach((el) => {
        if (el.getBoundingClientRect().top < limit) {
          reveal(el);
          io.unobserve(el);
        }
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(sweep);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const mo = new MutationObserver((records) => {
      for (const r of records) {
        r.addedNodes.forEach((n) => {
          if (!(n instanceof Element)) return;
          if (n.matches("[data-reveal]:not([data-in])")) io.observe(n);
          watch(n);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
