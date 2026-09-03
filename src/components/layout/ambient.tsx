/**
 * Slow-drifting colour fields parked in the left and right gutters.
 *
 * The body already carries four corner radials, but they are static, so on a
 * wide monitor the outer quarter of the screen never changes. These blobs sit
 * behind everything (including the particles) and drift on long, mismatched
 * periods, so the empty margins breathe instead of reading as flat backdrop.
 *
 * Purely decorative and non-interactive: aria-hidden, pointer-events-none, and
 * pinned with `fixed` so it costs no layout height in the one-viewport sections.
 */
export default function Ambient() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {/* Left gutter. Hung off-screen so only the soft inner edge shows. */}
      <div className="absolute -left-56 top-[15%] h-[36rem] w-[36rem] rounded-full bg-primary/[0.09] blur-[130px] animate-drift-a" />
      {/* Right gutter, larger and on a different period so the two never
          peak together. */}
      <div className="absolute -right-64 top-[32%] h-[42rem] w-[42rem] rounded-full bg-accent/[0.10] blur-[140px] animate-drift-b" />
      {/* A third, dimmer field low on the left to keep the drift from looking
          like two objects sliding in lockstep. */}
      <div className="absolute -left-40 -bottom-56 h-[30rem] w-[30rem] rounded-full bg-accent/[0.06] blur-[120px] animate-drift-c" />
    </div>
  );
}
