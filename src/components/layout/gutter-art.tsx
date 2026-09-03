/**
 * Decorative graphics for the left and right margins.
 *
 * On a wide monitor the content column (max-w-7xl) leaves roughly a fifth of
 * the screen empty on each side, and the body's corner radials are static, so
 * that area never changes. This fills it with abstract line work rather than
 * anything informational: nothing here is a link, a label or a logo, so it
 * duplicates neither the header nav nor the hero and footer socials.
 *
 * Three layers per side, back to front:
 *   1. concentric arcs centred off-screen, rotating very slowly
 *   2. flowing "silk" curves stroked with a primary -> accent gradient
 *   3. a handful of soft nodes sitting on the curves
 *
 * Implementation notes:
 *   - `fixed`, so it adds no height to the one-viewport sections.
 *   - masked to transparent at the inner edge, so the art fades out well before
 *     it reaches the content column and can never compete with text.
 *   - the viewBox is stretched to the gutter, so every stroke carries
 *     vector-effect="non-scaling-stroke" to stay a true hairline.
 *   - hidden below the `gutter` breakpoint, where there is no margin to fill.
 */

const CURVES = [
  // Long sweeping verticals. Deliberately not parallel: each has a different
  // bulge so they read as flow lines rather than as a comb.
  'M 210 -40 C 60 180, 330 380, 150 620 S 320 860, 190 1080',
  'M 330 -40 C 170 200, 400 400, 250 640 S 420 880, 300 1080',
  'M 90 -40 C -30 220, 220 420, 40 660 S 200 900, 70 1080',
  'M 270 -40 C 120 240, 360 460, 200 700 S 370 920, 240 1080',
  'M 150 -40 C 20 160, 270 340, 100 580 S 260 820, 130 1080',
];

/**
 * Nodes are placed as HTML rather than inside the SVG on purpose: the SVG is
 * stretched to the gutter with preserveAspectRatio="none", which turns a
 * <circle> into an ellipse and smears its radial gradient into a blotch. A
 * rounded div stays perfectly circular whatever the gutter's proportions.
 * Positions are percentages down/across the gutter, loosely on the curves.
 */
const NODES = [
  { left: '34%', top: '57%', size: 10 },
  { left: '9%', top: '63%', size: 7 },
  { left: '52%', top: '23%', size: 6 },
];

/** One side's artwork. `side` only picks the gradient direction and the mask. */
function Art({ side }: { side: 'left' | 'right' }) {
  const id = `gutter-${side}`;
  return (
    <svg
      viewBox="0 0 400 1040"
      preserveAspectRatio="none"
      className="h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id={`${id}-stroke`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          <stop offset="25%" stopColor="hsl(var(--primary))" stopOpacity="0.55" />
          <stop offset="60%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${id}-arc`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.12" />
        </linearGradient>
      </defs>

      {/* Arcs, centred off the outer edge so only their inner sweep is on
          screen. The rotation is slow enough to be felt rather than watched. */}
      <g
        className="animate-arc-spin"
        style={{ transformOrigin: side === 'left' ? '-40px 520px' : '440px 520px' }}
      >
        {[300, 420, 540, 660].map((r, i) => (
          <circle
            key={r}
            cx={side === 'left' ? -40 : 440}
            cy={520}
            r={r}
            fill="none"
            stroke={`url(#${id}-arc)`}
            strokeWidth={1}
            strokeDasharray={i % 2 ? '2 26' : '90 220'}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </g>

      {/* Flow lines. Each group drifts on its own long period, so the set
          breathes instead of sliding as one block. */}
      {CURVES.map((d, i) => (
        <g key={d} className={['animate-silk-a', 'animate-silk-b', 'animate-silk-c'][i % 3]}>
          <path
            d={d}
            fill="none"
            stroke={`url(#${id}-stroke)`}
            strokeWidth={i === 0 ? 1.6 : 1}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      ))}

    </svg>
  );
}

/**
 * Nodes on the flow lines: a crisp hairline ring with a lit centre, echoing
 * the timeline dots in the Experience section so the vocabulary matches.
 */
function Nodes() {
  return (
    <>
      {NODES.map((n, i) => (
        <span
          key={n.left + n.top}
          className={i % 2 ? 'animate-ring-pulse' : 'animate-ring-pulse-alt'}
          style={{ position: 'absolute', left: n.left, top: n.top }}
        >
          <span
            className="block rounded-full border border-primary/40 bg-primary/20 shadow-[0_0_12px_2px_hsl(var(--primary)/0.35)]"
            style={{ width: n.size, height: n.size }}
          />
        </span>
      ))}
    </>
  );
}

export default function GutterArt() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-[15] hidden gutter:block">
      {/* The boxes are deliberately wider than the bare gutter so the curves
          have room to dissolve gradually (see .gutter-fade). The tail passing
          behind content is fine - it is translucent hairline work at a few
          percent alpha by that point, and it sits below everything - whereas
          clipping the box to the gutter left the lines visibly cut off beside
          the portrait. The right copy is flipped, which mirrors its mask too,
          so the fade still runs outer-to-inner. */}
      <div className="gutter-fade absolute inset-y-0 left-0 w-[30vw] max-w-[520px] opacity-70">
        <Art side="left" />
        <Nodes />
      </div>
      <div className="gutter-fade absolute inset-y-0 right-0 w-[30vw] max-w-[520px] scale-x-[-1] opacity-70">
        <Art side="right" />
        <Nodes />
      </div>
    </div>
  );
}
