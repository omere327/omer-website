/**
 * The eclipse mark at hero scale, tone-on-tone behind the headline: the page's one motif.
 * Same geometry as <Mark/> (×10): o disc (340,500) r215, e stroke from (450,500). Blue-black gradient tones.
 */
const DISC = "M125 500 a215 215 0 1 0 430 0 a215 215 0 1 0 -430 0";
const E = "M450 500 H830 A190 190 0 1 0 786 622";

export function HeroEclipse() {
  return (
    <div
      aria-hidden="true"
      // Sized from the screen height so the mark sits behind the headline the same way on a phone and at 1080p,
      // and centred on the mark's own middle (it spans x 125–830 of the 1000 viewBox, so 47.7%, not 50%).
      className="oe-eclipse pointer-events-none absolute top-1/2 left-1/2 -z-10 w-[min(118vh,128vw,1500px)] w-[min(118svh,128vw,1500px)] -translate-x-[47.7%] -translate-y-1/2"
    >
      <svg viewBox="0 0 1000 1000" className="block h-auto w-full">
        <defs>
          <clipPath id="hero-disc-clip">
            <path d={DISC} />
          </clipPath>
          {/* The page's blue, held almost at black: lit top left, falling to ink. taste-skill-ignore */}
          <linearGradient id="hero-mark-grad" gradientUnits="userSpaceOnUse" x1="140" y1="260" x2="840" y2="760">
            <stop offset="0" stopColor="#0A1426" />
            <stop offset=".55" stopColor="#070D19" />
            <stop offset="1" stopColor="#080B1F" />
          </linearGradient>
        </defs>
        {/* Two close blue-black tones from the page's own family: a faint emboss behind the type, never a shape
            crossing it. */}
        <path d={DISC} fill="url(#hero-mark-grad)" />
        <path
          d={E}
          fill="none"
          stroke="url(#hero-mark-grad)"
          strokeWidth="44"
          strokeLinecap="round"
        />
        {/* Where the e crosses the o it is cut out, as in the logo. */}
        <path
          d={E}
          fill="none"
          stroke="#000000"
          strokeWidth="44"
          strokeLinecap="round"
          clipPath="url(#hero-disc-clip)"
        />
      </svg>
    </div>
  );
}
