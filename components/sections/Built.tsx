import type { CSSProperties } from "react";
import { Icon } from "@/components/ds/Icon";
import { SensVizLogo } from "@/components/ds/SensVizLogo";
import { work, type WorkItem } from "@/lib/content";
import { Demo } from "@/components/work/Demo";
import { scenes } from "@/components/work/scenes";
import { Section } from "./Section";
import { Tag } from "./Tag";

/** A product's animated scene; on hover the whole stage eases forward a touch. */
function Scene({ w }: { w: WorkItem }) {
  const Drawing = scenes[w.scene];
  return (
    <div data-reveal="wipe" className="overflow-hidden">
      <div className="origin-bottom transition-transform duration-500 ease-[ease] group-hover:scale-[1.02]">
        <Demo label={w.label} wide={w.span === 12} tone={w.scene}>
          <Drawing />
        </Demo>
      </div>
    </div>
  );
}

export function Built() {
  return (
    // The light band: a change of field colour marks the section instead of a rule.
    <Section id="built" aria-labelledby="built-title" className="oe-light bg-ivory text-onyx">
      <div className="oe-bento items-end gap-y-6 pb-[clamp(48px,5vw,72px)]" data-reveal="up">
        {/* "Built with" and then SensViz's own logo, at the heading's cap height, linking to sensviz.com.
            Screen readers hear "Built with SensViz". */}
        <h2 id="built-title" className="oe-display oe-span-7 m-0 flex flex-wrap items-center gap-x-[.32em] text-onyx">
          <span>Built with</span>
          <a
            href="https://sensviz.com"
            className="inline-flex rounded-md transition-opacity duration-150 ease-[ease] hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-onyx"
          >
            <span className="sr-only">SensViz</span>
            <SensVizLogo decorative />
          </a>
        </h2>
        <p className="oe-body oe-span-5 m-0 max-w-[42ch] lg:justify-self-end">
          AI products SensViz has designed and built, where AI does a specific job. Each one starts with the problem, then the technology.
        </p>
      </div>
      <div className="oe-bento gap-x-3 gap-y-[clamp(40px,4vw,64px)]">
        {work.map((w, i) => (
          <a
            key={w.title}
            href="https://sensviz.com"
            data-reveal="up"
            style={{ "--i": i % 2 } as CSSProperties}
            className={`oe-span-${w.span} group flex flex-col gap-6 text-onyx no-underline hover:text-onyx focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-onyx`}
          >
            <Scene w={w} />
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 flex-col gap-3">
                <h3 className="oe-subtitle m-0 text-onyx">{w.title}</h3>
                <p className="oe-body m-0 max-w-[46ch]">{w.summary}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {w.tech.map((t) => (
                    <Tag key={t} light>
                      {t}
                    </Tag>
                  ))}
                </div>
              </div>
              <span className="flex size-11 flex-none items-center justify-center rounded-full bg-onyx/[.07] text-onyx transition-[transform,background-color,color] duration-200 ease-[ease] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-onyx group-hover:text-paper">
                <Icon name="arrow-up-right" size={18} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
