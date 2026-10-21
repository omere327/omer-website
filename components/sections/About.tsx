import type { CSSProperties } from "react";
import Image from "next/image";
import { TextLink } from "@/components/ds/TextLink";
import { SplitWords } from "@/components/motion/SplitWords";
import { values } from "@/lib/content";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" aria-labelledby="values-title" inner="oe-bento gap-3">
      <div data-reveal="card" data-spot className="oe-span-5 oe-line oe-spot flex flex-col overflow-hidden">
        <div className="flex flex-col items-start gap-4 p-[clamp(28px,3.6vw,52px)] pb-0">
          <h2 id="values-title" data-reveal="words" className="oe-display m-0 max-w-[12ch] text-on-dark">
            <SplitWords text="Where an idea becomes real" />
          </h2>
          <p className="oe-body m-0 max-w-[38ch]">
            Omer Ejaz is the co-founder and CEO of SensViz. He works with founders and growing businesses from first
            positioning to a shipped AI product, so the brand, the product and the technology tell the same story.
          </p>
          <TextLink onDark href="/#contact" icon="arrow-right">
            Get in touch
          </TextLink>
        </div>

        {/* The portrait stands in front of the logo's "o", a flat disc one tone up from the card,
            and runs off the card's bottom edge. Shown in full colour at the owner's request. */}
        <div className="oe-portrait relative mx-auto mt-auto w-[min(100%,400px)] pt-10">
          <div className="relative aspect-[690/838]">
            <div
              aria-hidden="true"
              className="absolute top-[4%] left-1/2 aspect-square w-[88%] -translate-x-1/2 rounded-full bg-white/[.05]"
            />
            <Image
              src="/omer-ejaz.webp"
              alt="Mohammed Omer Ejaz, co-founder and CEO of SensViz, in a charcoal suit and aviator sunglasses"
              fill
              sizes="(max-width: 1023px) 80vw, 400px"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
      <div data-reveal="card" data-spot style={{ "--i": 1 } as CSSProperties} className="oe-span-7 oe-line oe-spot flex flex-col justify-between gap-[clamp(28px,3vw,44px)] p-[clamp(28px,4vw,64px)]">
        {values.map((v, i) => (
          <p
            key={v.a}
            data-reveal="strike"
            style={{ "--i": i } as CSSProperties}
            className="m-0 flex flex-wrap items-baseline gap-x-[.3em] gap-y-1 font-display text-[clamp(40px,calc(2.6vw+26px),80px)] leading-none font-medium tracking-[-.02em] text-on-dark"
          >
            <span>{v.a}</span>
            {/* "over" is set at the same size in a quieter tone: part of the line, not a label. */}
            <span className="whitespace-nowrap">
              <span className="text-on-dark-muted">over </span>
              <span className="text-on-dark-quiet">
                <span className="oe-strike">{v.b}</span>
              </span>
            </span>
          </p>
        ))}
      </div>
    </Section>
  );
}
