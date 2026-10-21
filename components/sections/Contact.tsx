import type { CSSProperties } from "react";
import { Button } from "@/components/ds/Button";
import { Mark } from "@/components/ds/Mark";
import { SplitWords } from "@/components/motion/SplitWords";
import { EMAIL } from "@/lib/content";
import { PillLink } from "./PillLink";
import { Section } from "./Section";

/** The close: a whole field of paper, answering the hero's dark opening with the same rising line. */
export function Contact() {
  return (
    <Section
      id="contact"
      aria-labelledby="cta-title"
      className="oe-light bg-ivory py-[clamp(96px,11vw,176px)]! text-onyx"
      inner="flex flex-col items-center gap-8 text-center"
    >
      <div data-reveal="up">
        <Mark size={56} tone="flat" cutColor="var(--oe-ivory)" title="" />
      </div>
      <h2 id="cta-title" data-reveal="words" className="oe-hero m-0 max-w-[16ch] text-onyx">
        <SplitWords text="Tell me what you are building." />
      </h2>
      <div data-reveal="up" className="flex flex-col items-center gap-8" style={{ "--i": 2 } as CSSProperties}>
        <p className="oe-lead m-0 max-w-[36ch]">
          A business, a brand, a product, or a question about AI that needs a straight answer.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button variant="brand" icon="arrow-right" href={`mailto:${EMAIL}`}>
            Start a conversation
          </Button>
          <PillLink href={`mailto:${EMAIL}`} light>
            {EMAIL}
          </PillLink>
        </div>
      </div>
    </Section>
  );
}
