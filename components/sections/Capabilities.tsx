"use client";

import { useState, useTransition, ViewTransition, type CSSProperties } from "react";
import { capabilities } from "@/lib/content";
import { Section } from "./Section";
import { SectionIntro } from "./SectionIntro";

/** The page's live thing: pick a kind of AI work and read what it changes and what we ask first. */
export function Capabilities() {
  const [active, setActive] = useState(0);
  const [, startTransition] = useTransition();
  const cap = capabilities[active];

  return (
    <Section aria-labelledby="ai-title">
      <SectionIntro id="ai-title" title="AI attached to real problems">
        SensViz is a custom AI development and software company with offices in London and Lahore. We build AI products,
        AI agents and software for startups and growing businesses.
      </SectionIntro>

      {/* Segmented control; the chosen option is lit. The panel below swaps with a short view transition.
          An even grid (2, then 3, then all 6 across) so the options never wrap into a ragged last row. */}
      <div
        role="tablist"
        aria-label="SensViz capabilities"
        data-reveal="card"
        className="oe-line mb-3 grid grid-cols-2 gap-1 p-1.5 md:grid-cols-3 3xl:grid-cols-6"
      >
        {capabilities.map((c, i) => {
          const selected = i === active;
          return (
            <button
              key={c.title}
              role="tab"
              id={`cap-tab-${i}`}
              aria-selected={selected}
              aria-controls="cap-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => startTransition(() => setActive(i))}
              onKeyDown={(e) => {
                // Arrow keys move between tabs (WAI-ARIA tabs pattern). Keyboard moves are not
                // animated: they repeat quickly and motion would make them feel slow.
                const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
                if (!step) return;
                e.preventDefault();
                const next = (i + step + capabilities.length) % capabilities.length;
                setActive(next);
                document.getElementById(`cap-tab-${next}`)?.focus();
              }}
              className={
                "oe-label min-h-12 cursor-pointer rounded-full px-4 py-2 text-center leading-tight text-balance transition-colors duration-150 ease-[ease] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper " +
                (selected ? "oe-grad-fill text-white" : "text-on-dark-muted hover:bg-white/[.06] hover:text-on-dark")
              }
            >
              {c.title}
            </button>
          );
        })}
      </div>

      <div id="cap-panel" role="tabpanel" aria-labelledby={`cap-tab-${active}`} data-reveal="card" data-spot style={{ "--i": 1 } as CSSProperties} className="oe-line oe-spot">
        <ViewTransition key={active} enter="cap-enter" exit="cap-exit" default="none">
          <div className="oe-bento items-start gap-y-10 p-[clamp(28px,4vw,64px)]">
            <p className="oe-subtitle oe-span-6 m-0 max-w-[22ch] text-on-dark">{cap.change}</p>
            <div className="oe-span-6 flex flex-col gap-3">
              <h3 className="oe-label m-0 pb-1 text-on-dark">Questions we ask before building</h3>
              <ul className="m-0 flex list-none flex-col gap-2 p-0">
                {cap.questions.map((q) => (
                  <li key={q} className="oe-qa oe-body oe-line max-w-none px-5 py-4 text-on-dark!">
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ViewTransition>
      </div>
    </Section>
  );
}
