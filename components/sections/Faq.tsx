import type { CSSProperties } from "react";
import { SplitWords } from "@/components/motion/SplitWords";
import { faqs } from "@/lib/content";
import { Section } from "./Section";

/**
 * The questions people search about Omer and SensViz, each answered in a sentence or two that stands on its own.
 * Native <details>, so every answer is in the HTML and works without script; each has a stable anchor.
 * The same text is the FAQPage structured data (components/seo/StructuredData.tsx).
 */
export function Faq() {
  return (
    <Section id="faq" aria-labelledby="faq-title" inner="oe-bento gap-y-12">
      <div className="oe-span-4 flex flex-col gap-5">
        <h2 id="faq-title" data-reveal="words" className="oe-display m-0 text-on-dark">
          <SplitWords text="Questions people ask" />
        </h2>
        <p data-reveal="up" style={{ "--i": 3 } as CSSProperties} className="oe-body m-0 max-w-[30ch]">
          About me, SensViz and how to start a project.
        </p>
      </div>
      <div className="oe-span-8 flex flex-col">
        {faqs.map((f, i) => (
          <details
            key={f.id}
            id={f.id}
            data-reveal="up"
            data-spot
            style={{ "--i": i } as CSSProperties}
            className="oe-faq oe-row"
          >
            <summary className="oe-faq__q oe-subtitle text-on-dark">
              <span aria-hidden="true" className="oe-row__line" />
              {f.q}
              <span aria-hidden="true" className="oe-faq__icon" />
            </summary>
            <p className="oe-faq__a oe-body m-0 max-w-[60ch]">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
