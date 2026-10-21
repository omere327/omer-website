import type { CSSProperties, ReactNode } from "react";
import { SplitWords } from "@/components/motion/SplitWords";

/** Section heading beside its one supporting sentence. The heading's words rise in on scroll, then the sentence. `light` is for the paper band. */
export function SectionIntro({
  id,
  title,
  light,
  children,
}: {
  id: string;
  title: string;
  light?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="oe-bento items-end gap-y-6 pb-[clamp(48px,5vw,72px)]">
      <h2
        id={id}
        data-reveal="words"
        className={"oe-display oe-span-7 m-0 max-w-[16ch] " + (light ? "text-onyx" : "text-on-dark")}
      >
        <SplitWords text={title} />
      </h2>
      <p
        data-reveal="up"
        style={{ "--i": 4 } as CSSProperties}
        className="oe-body oe-span-5 m-0 max-w-[42ch] lg:justify-self-end"
      >
        {children}
      </p>
    </div>
  );
}
