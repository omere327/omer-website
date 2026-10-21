import { Fragment, type CSSProperties } from "react";

/**
 * Splits a line of copy into clipped words for the masked rise. The words keep real spaces between them,
 * so the heading's text (for screen readers and search engines alike) is the plain line, once.
 */
export function SplitWords({ text, start = 0 }: { text: string; start?: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="oe-word">
            <span style={{ "--i": start + i } as CSSProperties}>{w}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}
