import type { CSSProperties } from "react";
import { Icon } from "@/components/ds/Icon";
import { SplitWords } from "@/components/motion/SplitWords";
import { questions } from "@/lib/content";
import { Section } from "./Section";

/** Open questions as a reading list: the topic beside each question, separated by space. */
export function Ideas() {
  return (
    <Section id="ideas" aria-labelledby="ideas-title" className="bg-surface-1" inner="oe-bento gap-y-12">
      <div className="oe-span-4 flex flex-col gap-5">
        <h2 id="ideas-title" data-reveal="words" className="oe-display m-0 text-on-dark">
          <SplitWords text="What I’m exploring" />
        </h2>
        <p data-reveal="up" style={{ "--i": 3 } as CSSProperties} className="oe-body m-0 max-w-[30ch]">
          Questions on my desk. Notes will be published when they are finished.
        </p>
      </div>
      <ul className="oe-span-8 m-0 flex list-none flex-col gap-[clamp(28px,3vw,44px)] p-0">
        {questions.map((q, i) => (
          <li
            key={q.title}
            data-reveal="slide"
            style={{ "--i": i } as CSSProperties}
            className="oe-q grid grid-cols-1 gap-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-8"
          >
            <span className="oe-q__topic oe-small pt-2">{q.topic}</span>
            <span className="oe-q__title oe-subtitle text-on-dark">
              {q.title}
              <span aria-hidden="true" className="oe-q__arrow">
                <Icon name="arrow-right" size={20} />
              </span>
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
