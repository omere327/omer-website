import type { CSSProperties } from "react";

// Five product scenes, drawn in the site's own tones and faces at a fixed design size (see Demo.tsx).
// They show how each product works, not screenshots of it. Motion lives in styles/demos.css.

const v = (vars: Record<string, string | number>) => vars as CSSProperties;

function WindowBar() {
  return (
    <div className="dw__bar">
      <i />
      <i />
      <i />
    </div>
  );
}

/** GrantMatch: a search is typed and the matching grants rank themselves. */
export function GrantMatchScene() {
  const rows = [
    { name: "Innovation Grant", agency: "DOD · closes June 30", fit: 0.94 },
    { name: "Small Business Grant", agency: "NASA · closes June 30", fit: 0.81 },
    { name: "Community Impact Grant", agency: "DHS · closes July 18", fit: 0.67 },
  ];
  return (
    <div className="dw">
      <WindowBar />
      <div className="dw__body">
        <div className="gm-head">
          <span className="gm-logo">GrantMatch</span>
          <span className="gm-nav">Home &nbsp; Browse &nbsp; Saved</span>
        </div>
        <div className="gm-search">
          <svg width="20" height="20" viewBox="0 0 24 24" className="gm-search__icon">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <span className="gm-q">fusion reactor materials</span>
        </div>
        <div className="gm-count">3 grants match this project</div>
        <div className="gm-rows">
          {rows.map((r, i) => (
            <div key={r.name} className="gm-row" style={v({ "--d": `${i * 0.28}s`, "--v": r.fit })}>
              <div>
                <div className="gm-row__name">{r.name}</div>
                <div className="gm-row__meta">{r.agency}</div>
              </div>
              <div className="gm-track">
                <div className="gm-fill" />
              </div>
              <div className="gm-pct">{Math.round(r.fit * 100)}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** CVJury: pick the role and field, and the cover letter writes itself line by line. */
export function CVJuryScene() {
  const lines = [
    "Dear hiring team,",
    "I design payment flows that people trust.",
    "At my last company I rebuilt checkout so every",
    "fee is explained before the customer pays.",
    "I would like to bring that care to your team.",
  ];
  return (
    <div className="dw dw--narrow">
      <WindowBar />
      <div className="dw__body">
        <div className="cv-controls">
          <span className="cv-chip">Product designer</span>
          <span className="cv-chip">Fintech</span>
          <span className="cv-btn">Write letter</span>
        </div>
        <div className="cv-sheet">
          {lines.map((l, i) => (
            <p key={l} className={"cv-line" + (i === 0 ? " cv-line--salute" : "")} style={v({ "--d": `${i * 0.55}s` })}>
              {l}
            </p>
          ))}
          <p className="cv-line cv-sign" style={v({ "--d": `${lines.length * 0.55}s` })}>
            Sana Malik
          </p>
        </div>
      </div>
    </div>
  );
}

/** Playano: the next notes fall onto the keys, and each key lights as it should be played. */
export function PlayanoScene() {
  // Ode to Joy, on the white keys from middle C (0 = C … 7 = the C above).
  const melody = [2, 2, 3, 4, 4, 3, 2, 1, 0, 0, 1, 2, 2, 1, 1];
  const whites = 8;
  const blacks = [0, 1, 3, 4, 5]; // black keys after C, D, F, G, A
  return (
    <div className="pl-board">
      <div className="pl-head">
        <span className="pl-title">Ode to Joy</span>
        <span className="pl-meta">Beethoven · 72 bpm</span>
      </div>
      <div className="pl-lane">
        {melody.map((k, i) => (
          <span key={i} className="pl-note" style={v({ "--k": k, "--d": `${i * 0.5}s` })} />
        ))}
      </div>
      <div className="pl-keys" style={v({ "--n": whites })}>
        {Array.from({ length: whites }, (_, i) => (
          <span key={i} className="pl-white" />
        ))}
        {blacks.map((b) => (
          <span key={b} className="pl-black" style={v({ "--b": b })} />
        ))}
        {melody.map((k, i) => (
          <span key={i} className="pl-hit" style={v({ "--k": k, "--d": `${i * 0.5}s` })} />
        ))}
      </div>
    </div>
  );
}

/** SIPP: a fountain's flow is read, scored and charted, and the filter warning arrives when it is due. */
export function SippScene() {
  return (
    <div className="ph">
      <div className="ph__screen">
        <span className="ph__notch" />
        <div className="sp-alert">Your filter has reached the end of its lifespan.</div>
        <div className="sp-title">Basement fountain</div>
        <svg className="sp-gauge" viewBox="0 0 200 110">
          <path className="sp-gauge__track" d="M15 100 A85 85 0 0 1 185 100" pathLength={1} />
          <path className="sp-gauge__value" d="M15 100 A85 85 0 0 1 185 100" pathLength={1} />
        </svg>
        <div className="sp-status">
          <span>Flow status</span>
          <strong>Excellent</strong>
        </div>
        <div className="sp-big">
          4.3 <span>GPM</span>
        </div>
        <div className="sp-chart">
          <div className="sp-chart__head">
            <span>Average flow</span>
            <span>24 h</span>
          </div>
          <svg viewBox="0 0 200 60" className="sp-chart__svg">
            <path
              className="sp-chart__line"
              pathLength={1}
              d="M0 44 C 20 40, 30 22, 50 26 S 80 48, 100 38 S 130 12, 150 18 S 180 34, 200 28"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

/** AR Tile: the floor is scanned and measured, then each tile is laid over the photographed room. */
export function ARTileScene() {
  const swatches = ["Square tile", "Oak plank", "Stone slab"];
  return (
    <>
      <div className="ar-card ar-card--measure">
        <div className="ar-card__title">Floor measured</div>
        <div className="ar-card__big">4.2 × 3.6 m</div>
        <div className="ar-card__meta">15.1 m² · LiDAR scan</div>
      </div>

      <div className="ph ph--ar">
        <div className="ph__screen ar-screen">
          <span className="ph__notch" />
          {/* The photographed room: back wall, window and sofa. */}
          <div className="ar-wall">
            <span className="ar-window" />
            <span className="ar-sofa" />
            <span className="ar-lamp" />
          </div>
          <div className="ar-floor">
            <svg className="ar-pat ar-pat--a" viewBox="0 0 400 400" preserveAspectRatio="none">
              <defs>
                <pattern id="ar-square" width="50" height="50" patternUnits="userSpaceOnUse">
                  <rect width="50" height="50" fill="#D3D3CF" />
                  <rect x="2" y="2" width="46" height="46" fill="#E4E4E0" />
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#ar-square)" />
            </svg>
            <svg className="ar-pat ar-pat--b" viewBox="0 0 400 400" preserveAspectRatio="none">
              <defs>
                <pattern id="ar-plank" width="160" height="40" patternUnits="userSpaceOnUse">
                  <rect width="160" height="40" fill="#7A5133" />
                  <rect x="1" y="1" width="78" height="18" fill="#B07A50" />
                  <rect x="81" y="1" width="78" height="18" fill="#A06B44" />
                  <rect x="-39" y="21" width="78" height="18" fill="#BE8A5E" />
                  <rect x="41" y="21" width="78" height="18" fill="#A87449" />
                  <rect x="121" y="21" width="78" height="18" fill="#B98257" />
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#ar-plank)" />
            </svg>
            <svg className="ar-pat ar-pat--c" viewBox="0 0 400 400" preserveAspectRatio="none">
              <defs>
                <pattern id="ar-slab" width="120" height="120" patternUnits="userSpaceOnUse">
                  <rect width="120" height="120" fill="#4A4B50" />
                  <rect x="2" y="2" width="116" height="116" fill="#5A5B60" />
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#ar-slab)" />
            </svg>
            <span className="ar-scan" />
          </div>
          <div className="ar-chip">Scanning floor</div>
        </div>
      </div>

      <div className="ar-card ar-card--swatches">
        <div className="ar-card__title">Pattern</div>
        <div className="ar-list">
          <span className="ar-sel" />
          {swatches.map((s, i) => (
            <div key={s} className="ar-item">
              <span className={`ar-sw ar-sw--${i}`} />
              {s}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export const scenes = {
  grantmatch: GrantMatchScene,
  cvjury: CVJuryScene,
  playano: PlayanoScene,
  sipp: SippScene,
  artile: ARTileScene,
} as const;

export type SceneId = keyof typeof scenes;
