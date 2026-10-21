import type { CSSProperties } from "react";
import { Button } from "@/components/ds/Button";
import { SplitWords } from "@/components/motion/SplitWords";
import { HeroEclipse } from "./HeroEclipse";
import { PillLink } from "./PillLink";

// A title, not a sentence: 32 characters, two lines at every width.
const HEADLINE = "Brands, businesses and products.";
// Supporting elements follow the last word of the headline.
const after = (ms: number) => ({ "--d": `${260 + ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      // Fills the first screen under the nav (84px) at every size, content centred, slightly above the middle.
      className="relative isolate flex min-h-[calc(100vh-84px)] min-h-[calc(100svh-84px)] flex-col items-center justify-center overflow-hidden px-[var(--oe-pad-page)] pt-[clamp(32px,4vw,64px)] pb-[clamp(72px,8vw,136px)] text-center"
    >
      <div aria-hidden="true" className="oe-glow-hero pointer-events-none absolute inset-0 -z-20" />
      <HeroEclipse />
      {/* A soft black pool behind the type, above the mark, so the words never sit on its edges. */}
      <div aria-hidden="true" className="oe-hero-scrim pointer-events-none absolute inset-0 -z-[5]" />
      <h1 id="hero-title" className="oe-hero oe-rise-load m-0 max-w-[17ch] text-on-dark">
        <SplitWords text={HEADLINE} />
      </h1>
      <p className="oe-lead oe-fade-load m-0 mt-10 max-w-[44ch] text-on-dark" style={after(0)}>
        I’m Mohammed Omer Ejaz, co-founder and CEO of SensViz, a custom AI development and software company in London
        and Lahore. I work on brand strategy, product strategy and AI, and the part where they ship.
      </p>
      <div className="oe-fade-load mt-10 flex flex-wrap items-center justify-center gap-3" style={after(120)}>
        <Button variant="brand" icon="arrow-right" href="/#contact">
          Start a conversation
        </Button>
        <PillLink href="#built">See what I’ve built</PillLink>
      </div>
    </section>
  );
}
