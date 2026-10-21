import Image from "next/image";

/**
 * SensViz logo: the icon and the wordmark, from the owner's PNG files (public/brands/sensviz-icon.png and
 * sensviz-wordmark.png, the wordmark set in onyx for the light band). The width and height are the size it is shown at; Next serves 1x and 2x
 * WebP from the sources (about three times that size), so it stays sharp and light. Sized in em, so the lockup follows the text
 * it sits in. `decorative` hides it from assistive tech when the name is already in the text beside it.
 */
export function SensVizLogo({ className = "", decorative }: { className?: string; decorative?: boolean }) {
  return (
    <span
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : "SensViz"}
      aria-hidden={decorative || undefined}
      className={"inline-flex items-center gap-[.14em] " + className}
    >
      <Image
        src="/brands/sensviz-icon.png"
        alt=""
        width={44}
        height={66}
        loading="eager"
        className="block h-[.78em] w-auto"
      />
      <Image
        src="/brands/sensviz-wordmark.png"
        alt=""
        width={155}
        height={34}
        loading="eager"
        className="block h-[.42em] w-auto translate-y-[.06em]"
      />
    </span>
  );
}
