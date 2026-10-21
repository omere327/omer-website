import type { CSSProperties } from "react";
import { practice } from "@/lib/content";
import { Section } from "./Section";
import { SectionIntro } from "./SectionIntro";
import { Tag } from "./Tag";

/**
 * Four disciplines as editorial rows: the name on the left, its statement and detail on the right.
 * Each row's line draws itself in on scroll; on hover the row lights up under the pointer, the name steps
 * forward, the line turns SensViz blue and the tags lift one after another (styles/motion.css).
 */
export function Practice() {
  return (
    <Section aria-labelledby="what-title" className="bg-surface-1">
      <SectionIntro id="what-title" title="Four things that work together">
        A good product is not yet a business. A good logo is not yet a brand. The work is in connecting them.
      </SectionIntro>
      <div className="flex flex-col gap-3">
        {practice.map((p) => (
          <div
            key={p.name}
            data-reveal="row"
            data-spot
            className="oe-row oe-bento gap-y-4 py-[clamp(36px,4vw,60px)]"
          >
            <span aria-hidden="true" className="oe-row__line" />
            <h3 className="oe-row__name oe-subtitle oe-span-4 m-0 text-on-dark">
              {p.name}
            </h3>
            <div className="oe-row__body oe-span-8 flex flex-col gap-4 lg:w-[min(100%,62ch)] lg:justify-self-end">
              <p className="oe-lead m-0 max-w-[36ch] text-on-dark!">{p.statement}</p>
              <p className="oe-body m-0 max-w-[52ch]">{p.body}</p>
              <div className="flex flex-wrap gap-2 pt-1" aria-label={`${p.name} covers`}>
                {p.tags.map((t, i) => (
                  <span key={t} className="oe-row__tag" style={{ "--t": i } as CSSProperties}>
                    <Tag>{t}</Tag>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
