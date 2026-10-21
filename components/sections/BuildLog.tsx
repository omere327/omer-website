import type { CSSProperties } from "react";
import { SplitWords } from "@/components/motion/SplitWords";
import { buildSteps } from "@/lib/content";
import { Section } from "./Section";

/**
 * How I build: four stages in order. All four sit on the black page with a line; the one in progress has its status lit in SensViz blue. On hover a stage
 * fills with that blue from below, lifts and tilts toward the pointer, and a light follows the pointer
 * around its edge (styles/motion.css).
 */
export function BuildLog() {
  return (
    <Section aria-labelledby="build-title" inner="oe-bento gap-y-12">
      <div className="oe-span-4 flex flex-col gap-5">
        <h2 id="build-title" data-reveal="words" className="oe-display m-0 text-on-dark">
          <SplitWords text="How I build" />
        </h2>
        <p data-reveal="up" style={{ "--i": 3 } as CSSProperties} className="oe-body m-0 max-w-[32ch]">
          From an idea worth building to a business that pays for itself.
        </p>
      </div>
      <ol className="oe-span-8 m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
        {buildSteps.map((s, i) => (
          <li key={s.name} data-reveal="card" style={{ "--i": i } as CSSProperties} className="flex">
            <div
              data-spot
              data-current={s.current ? "" : undefined}
              className={
                "oe-step oe-spot oe-line flex w-full flex-col justify-between gap-4 p-[clamp(20px,2.6vw,36px)] text-on-dark sm:min-h-[188px] sm:gap-6"
              }
            >
              <span aria-hidden="true" className="oe-step__fill" />
              <div className="flex flex-col gap-2">
                <h3 className="oe-subtitle m-0">{s.name}</h3>
                <p className="oe-step__text oe-body m-0">{s.note}</p>
              </div>
              <span className="oe-step__status oe-label">{s.status}</span>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
