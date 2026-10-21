"use client";

import { useEffect, useRef } from "react";

/**
 * The footer's closing wordmark, built the way langchain.com builds theirs:
 *  - glass layer: the logo and the name filled with an almost clear radial tint and a faint top sheen, so the
 *    letters read as transparent, glossy glass rather than solid shapes;
 *  - edge layer: a crisp inner edge traced around every shape (an SVG filter: the shape minus itself eroded),
 *    lit by a soft spotlight. The light is tied to scroll: as the footer rises, it glides from the logo mark
 *    across the name, eased frame by frame (the same 0.12 smoothing and 18% radius LangChain uses).
 *  - the logo: when the footer arrives, the e of the mark draws itself in.
 * The mark uses the logo's own geometry (o disc, e stroke) at ×3.4.
 */
const W = 1400;
const H = 290;
const DISC = { cx: 95.6, cy: 130, r: 73.1 };
const E = "M133 130 H262.2 A64.6 64.6 0 1 0 247.2 171.5";
const RADIUS_RATIO = 0.18;
const SMOOTHING = 0.12;

function Shapes({ fill, eStroke }: { fill: string; eStroke: string }) {
  return (
    <>
      <circle cx={DISC.cx} cy={DISC.cy} r={DISC.r} fill={fill} />
      <path className="ft-e" d={E} pathLength={1} fill="none" stroke={eStroke} strokeWidth="17" strokeLinecap="round" />
      <text x="300" y="214" textLength="1090" lengthAdjust="spacingAndGlyphs" className="ft-word__text" fill={fill}>
        Omer Ejaz
      </text>
    </>
  );
}

export function FooterWordmark() {
  const wrap = useRef<HTMLDivElement>(null);
  const edges = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = wrap.current;
    const light = edges.current;
    const footer = el?.closest("footer");
    if (!el || !light || !footer) return;

    // The mark draws itself in once, when the wordmark first comes into view.
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        el.setAttribute("data-in", "");
        io.disconnect();
      },
      { threshold: 0.3 },
    );
    io.observe(el);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let current: number | null = null;
    let target = 0;
    let raf = 0;

    const measure = () => {
      const r = el.getBoundingClientRect();
      const f = footer.getBoundingClientRect();
      const radius = r.width * RADIUS_RATIO;
      const start = r.height * 0.1;
      // 0 when the wordmark's top enters the screen, 1 when the footer's bottom reaches it.
      const range = f.bottom - r.top - start;
      const scrolled = window.innerHeight - r.top - start;
      const progress = Math.max(0, Math.min(1, range > 0 ? scrolled / range : 1));
      target = -radius + progress * (r.width + radius);
      if (current === null) current = target;
      return { radius, y: r.height / 2 };
    };
    const apply = (x: number, y: number, radius: number) => {
      // Full strength at the light, 60% everywhere else, so every edge stays defined. taste-skill-ignore
      const g = `radial-gradient(${radius}px at ${x}px ${y}px, #000 0%, rgb(0 0 0 / 0.6) 100%)`; // taste-skill-ignore
      light.style.maskImage = g;
      light.style.setProperty("-webkit-mask-image", g);
    };
    const tick = () => {
      const { radius, y } = measure();
      current = reduce.matches ? target : current! + (target - current!) * SMOOTHING;
      apply(current, y, radius);
      if (Math.abs(target - current) > 0.3) raf = requestAnimationFrame(tick);
      else {
        current = target;
        apply(current, y, radius);
        raf = 0;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    tick();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrap} className="ft-word" aria-hidden="true">
      {/* Glass: an almost clear tint with a faint sheen across the top. */}
      <svg viewBox={`0 0 ${W} ${H}`} className="ft-word__svg">
        <defs>
          {/* Clear near the mark, an 8% blue tint at its far reach. taste-skill-ignore */}
          <radialGradient
            id="ft-tint"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(300 250) rotate(-5) scale(1250 230)"
          >
            <stop stopOpacity="0" />
            <stop offset="1" stopColor="#8FB4FF" stopOpacity="0.08" />
          </radialGradient>
          {/* The gloss: light along the top of each letter, gone by its middle. taste-skill-ignore */}
          <linearGradient id="ft-sheen" x1="0" y1="40" x2="0" y2="190" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F4F4F2" stopOpacity="0.05" />
            <stop offset="0.55" stopColor="#F4F4F2" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g>
          <Shapes fill="url(#ft-tint)" eStroke="url(#ft-tint)" />
        </g>
        <g>
          <Shapes fill="url(#ft-sheen)" eStroke="url(#ft-sheen)" />
        </g>
      </svg>

      {/* Edges: the inner edge of every shape, lit by the scroll-driven light. */}
      <svg ref={edges} viewBox={`0 0 ${W} ${H}`} className="ft-word__svg ft-word__edges">
        <defs>
          <filter id="ft-edge" x="0" y="0" width={W} height={H} filterUnits="userSpaceOnUse">
            <feMorphology in="SourceAlpha" operator="erode" radius="1.6" result="inner" />
            <feComposite in="SourceAlpha" in2="inner" operator="out" result="ring" />
            <feFlood floodColor="#C9DCF5" />
            <feComposite in2="ring" operator="in" />
          </filter>
        </defs>
        <g filter="url(#ft-edge)">
          <Shapes fill="#fff" eStroke="#fff" />
        </g>
      </svg>
    </div>
  );
}
