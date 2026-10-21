import type { CSSProperties } from "react";
import Image from "next/image";
import { SplitWords } from "@/components/motion/SplitWords";
import { clients, recognition } from "@/lib/content";
import { Section } from "./Section";

/**
 * Clients: the one quotation at statement size, then a wall of their logos. Logos rest in one quiet tone so the
 * wall reads as a set, with no boxes around them, and take their own colours under the pointer (styles/motion.css, .oe-logo).
 * A client without a logo file is set as its name in the display face, in the same tile.
 * Below the wall, SensViz's ratings and partner badges, centred and treated like the logos: grey at rest, their
 * own colours under the pointer.
 */
export function Proof() {
  return (
    <Section aria-labelledby="clients-title" inner="oe-bento gap-y-12">
      <h2 id="clients-title" data-reveal="words" className="oe-display oe-span-4 m-0 text-on-dark">
        <SplitWords text="Clients" />
      </h2>
      <figure data-reveal="up" style={{ "--i": 1 } as CSSProperties} className="oe-span-8 m-0 flex flex-col gap-5">
        <blockquote className="m-0">
          <p className="m-0 max-w-[44ch] font-display text-[clamp(24px,2.2vw,30px)] leading-[1.25] text-pretty text-on-dark">
            “Working with Omer and his team at SensViz on our project was an absolute pleasure. Their expertise in
            machine learning is exceptional.”
          </p>
        </blockquote>
        <figcaption className="flex flex-wrap items-baseline gap-x-3">
          <span className="oe-label text-on-dark">Conston Taylor</span>
          <span className="oe-small">CEO, ZenPro</span>
        </figcaption>
      </figure>
      <ul
        aria-label="Clients"
        className="oe-span-12 m-0 grid list-none grid-cols-2 gap-3 p-0 pt-[clamp(16px,3vw,40px)] sm:grid-cols-3 lg:grid-cols-5"
      >
        {clients.map((c, i) => (
          <li
            key={c.name}
            data-reveal="card"
            style={{ "--i": i % 5 } as CSSProperties}
            className="oe-logo flex h-[clamp(88px,8vw,112px)] items-center justify-center px-3"
          >
            {c.logo ? (
              <Image
                src={c.logo.src}
                alt={`${c.name} logo`}
                width={c.logo.w}
                height={c.logo.h}
                className="oe-logo__img h-auto max-h-[52px] w-auto max-w-[78%]"
              />
            ) : (
              <span className="oe-logo__name oe-subtitle text-center text-on-dark">{c.name}</span>
            )}
          </li>
        ))}
      </ul>
      <div className="oe-span-12 flex flex-col gap-8 pt-[clamp(24px,4vw,56px)]">
        <h3 data-reveal="up" className="oe-subtitle m-0 text-center text-on-dark">
          Ratings and partners
        </h3>
        <ul className="m-0 grid list-none grid-cols-2 gap-x-8 gap-y-12 p-0 lg:grid-cols-4">
          {recognition.map((r, i) => (
            <li key={r.name} data-reveal="card" style={{ "--i": i } as CSSProperties} className="oe-logo oe-badge flex flex-col items-center gap-4 text-center">
              <div className="flex h-[80px] items-center justify-center">
                <Image
                  src={r.src}
                  alt={`${r.name}: ${r.note}`}
                  width={r.w}
                  height={r.h}
                  className="oe-logo__img oe-badge__img h-auto max-h-[80px] w-auto max-w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="oe-label text-on-dark">{r.name}</span>
                <span className="oe-small">{r.note}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
