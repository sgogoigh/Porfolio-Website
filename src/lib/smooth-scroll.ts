export const SCROLL_CONTAINER_ID = 'scroll-container';

/** Slow start, accelerate, slow finish. */
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

let activeFrame: number | null = null;

/**
 * Eases the page's scroll container to a section.
 *
 * The page does not scroll the document - an inner div does - so the CSS
 * `scroll-behavior: smooth` on <html> never applied to it and anchor jumps were
 * instant. Animating scrollTop ourselves also lets us control the curve.
 *
 * That container uses `scroll-snap-type: y mandatory`, which competes with a
 * scripted scroll and can yank it to a snap point mid-flight, so snapping is
 * suspended for the duration and restored at the end.
 */
export function smoothScrollToSection(id: string, duration = 900) {
  const container = document.getElementById(SCROLL_CONTAINER_ID);
  const target = document.getElementById(id);
  if (!container || !target) return;

  if (activeFrame !== null) cancelAnimationFrame(activeFrame);

  const start = container.scrollTop;
  // Section tops are not offsetTop-addressable here (the container is not their
  // offsetParent), so derive the delta from viewport rects instead.
  const delta =
    target.getBoundingClientRect().top - container.getBoundingClientRect().top;
  if (Math.abs(delta) < 1) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion || duration <= 0) {
    container.scrollTop = start + delta;
    return;
  }

  const previousSnap = container.style.scrollSnapType;
  container.style.scrollSnapType = 'none';

  const startTime = performance.now();

  const step = (now: number) => {
    const elapsed = now - startTime;
    const t = Math.min(1, elapsed / duration);
    container.scrollTop = start + delta * easeInOutCubic(t);

    if (t < 1) {
      activeFrame = requestAnimationFrame(step);
      return;
    }

    activeFrame = null;
    // Land exactly on target before snapping is re-armed, so restoring it
    // cannot nudge the final position.
    container.scrollTop = start + delta;
    container.style.scrollSnapType = previousSnap;
  };

  activeFrame = requestAnimationFrame(step);
}
