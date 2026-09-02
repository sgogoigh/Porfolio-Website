'use client'

import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { projects as allProjects, techStack } from '@/lib/data'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const CARD_W = 320;   // w-80
const CARD_GAP = 24;  // gap-6
const ROW_PAD = 16;   // px-4 on the row, each side
/** Distance from one card's start edge to the next. */
const CARD_STEP = CARD_W + CARD_GAP;

/**
 * Widest row that holds a whole number of cards, and how many that is.
 *
 * Sizing the row to an exact multiple of the card pitch is what guarantees no
 * partially-cropped card is ever visible: combined with scroll-snap on the card
 * start edges, every reachable scroll position (including the last one) shows
 * only complete cards.
 */
const fitCards = (availableWidth: number) => {
  const usable = availableWidth - ROW_PAD * 2;
  const count = Math.max(1, Math.floor((usable + CARD_GAP) / CARD_STEP));
  return { count, width: count * CARD_W + (count - 1) * CARD_GAP + ROW_PAD * 2 };
};

/**
 * How much the hovered card grows. With two or more cards visible there is room
 * either side for it to take the middle; with only one there is nothing to grow
 * into, so it barely changes (anything larger is clipped by the row).
 */
const hoverScaleFor = (visibleCards: number) => (visibleCards >= 2 ? 1.18 : 1.06);
const DIMMED_SCALE = 0.9;

type Category = 'AI/ML' | 'Research';

/**
 * Tech is shown as words rather than glyphs. techStack already carries the
 * canonical spelling for each icon key ('FastApiIcon' -> 'FastAPI'), so reuse it
 * and fall back to de-suffixing the key for anything not listed there.
 */
const techLabel = (iconKey: string) =>
  techStack.find(t => t.icon === iconKey)?.name ?? iconKey.replace(/Icon$/, '');

const ScrollArrow = ({
  side,
  show,
  onClick,
}: {
  side: 'left' | 'right';
  show: boolean;
  onClick: () => void;
}) => {
  const Icon = side === 'left' ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === 'left' ? 'Scroll to previous projects' : 'Scroll to more projects'}
      // aria-hidden + tabIndex -1 while inert, so it leaves the tab order and the
      // accessibility tree instead of being an invisible clickable target.
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={cn(
        'absolute top-1/2 z-30 -translate-y-1/2 rounded-full p-2',
        'border border-white/15 bg-background/80 text-muted-foreground backdrop-blur-sm',
        'transition-all duration-300 hover:border-primary/60 hover:text-primary',
        'hover:shadow-[0_0_18px_-4px_hsl(var(--primary)/0.6)]',
        // Well clear of the row on md+, so an enlarged card does not run under
        // them. On mobile the row fills the viewport and there is nowhere to put
        // them but just inside its edges.
        side === 'left' ? 'left-1 md:-left-14' : 'right-1 md:-right-14',
        show ? 'opacity-100' : 'pointer-events-none opacity-0'
      )}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
};

type ProjectCardProps = {
  project: typeof allProjects[0];
  isHovered: boolean;
  anyHovered: boolean;
  hoverScale: number;
  onHover: (hovered: boolean) => void;
};

const ProjectCard = ({ project, isHovered, anyHovered, hoverScale, onHover }: ProjectCardProps) => {
  const projectImage = PlaceHolderImages.find(img => img.id === project.imageId);
  const slotRef = useRef<HTMLDivElement>(null);
  // Horizontal shift that brings this card to the middle of the row.
  const [centeringShift, setCenteringShift] = useState(0);

  const handleEnter = () => {
    const slot = slotRef.current;
    const row = slot?.parentElement;
    if (slot && row) {
      const box = slot.getBoundingClientRect();
      const bounds = row.getBoundingClientRect();
      setCenteringShift((bounds.left + bounds.width / 2) - (box.left + box.width / 2));
    }
    onHover(true);
  };

  // All transforms are inline rather than Tailwind utilities: the centering
  // shift is computed at runtime, and mixing it with Tailwind's variable-based
  // transform stack would fight over the same `transform` property.
  const transform = isHovered
    ? `translateX(${centeringShift}px) scale(${hoverScale})`
    : anyHovered
      ? `scale(${DIMMED_SCALE})`
      : undefined;

  return (
    // The slot owns the hover and never moves. Transforming it instead would
    // slide the card out from under the cursor, firing mouseleave, resetting it,
    // and oscillating - the shift for an edge card is wider than the card itself.
    // It also makes the shift measurable from a rect that is never transformed.
    <div
      ref={slotRef}
      onMouseEnter={handleEnter}
      onMouseLeave={() => onHover(false)}
      style={{ zIndex: isHovered ? 30 : undefined }}
      className="group/card w-80 shrink-0 py-10 snap-start"
    >
      <div
        style={{
          transform,
          opacity: anyHovered && !isHovered ? 0.45 : 1,
        }}
        className="h-full transition-[transform,opacity] duration-300 ease-out"
      >
      <Card
        className={cn(
          // Opaque, not bg-card/60: the page background bled through the card,
          // which washed out the text of the enlarged one.
          'flex h-full flex-col overflow-hidden bg-card border border-white/10',
          'transition-[border-color,box-shadow] duration-300',
          'group-hover/card:border-primary/60',
          'group-hover/card:shadow-[0_18px_50px_-12px_hsl(var(--primary)/0.45)]'
        )}
      >
        {projectImage && (
          <div className="h-32 short:h-24 shrink-0 overflow-hidden">
            <Image
              src={projectImage.imageUrl}
              alt={project.name}
              width={320}
              height={128}
              data-ai-hint={projectImage.imageHint}
              className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
            />
          </div>
        )}

        <div className="flex min-h-0 flex-1 flex-col gap-2 p-4 short:gap-1.5 short:p-3">
          <h3 className="font-headline text-sm md:text-base font-semibold leading-snug">
            {project.name}
          </h3>

          {/* Clamped to 6 on hover rather than unbounded: every description fits
              well inside 6 lines, so this shows them in full while still giving
              the card a hard height bound. */}
          <p className="text-sm short:text-xs text-muted-foreground transition-colors duration-300 group-hover/card:text-foreground/90 line-clamp-2 group-hover/card:line-clamp-6 short:group-hover/card:line-clamp-4">
            {project.description}
          </p>

          <div className="mt-auto flex flex-col gap-2 short:gap-1.5">
            <div className="flex flex-wrap gap-1.5">
              {project.techIcons.map(iconKey => (
                <span
                  key={iconKey}
                  className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs short:text-[10px] font-medium text-primary"
                >
                  {techLabel(iconKey)}
                </span>
              ))}
            </div>
            <Button asChild variant="link" className="h-auto self-start p-0 text-primary">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                Visit <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </Card>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('AI/ML')
  const rowRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [rowWidth, setRowWidth] = useState<number | undefined>(undefined);
  const [visibleCards, setVisibleCards] = useState(1);
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    return allProjects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  // Arrows appear only where scrolling is actually possible, so they stay hidden
  // when the row already fits.
  const syncArrows = useCallback(() => {
    const el = rowRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(max > 4 && el.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    el.addEventListener('scroll', syncArrows, { passive: true });
    return () => el.removeEventListener('scroll', syncArrows);
  }, [syncArrows]);

  // Re-fit the row to a whole number of cards whenever the space available for
  // it changes.
  useEffect(() => {
    const probe = measureRef.current;
    if (!probe) return;
    const refit = () => {
      const { width, count } = fitCards(probe.clientWidth);
      setRowWidth(width);
      setVisibleCards(count);
      syncArrows();
    };
    refit();
    const observer = new ResizeObserver(refit);
    observer.observe(probe);
    return () => observer.disconnect();
  }, [syncArrows]);

  // Arrow state depends on the row's width, which is set a render later.
  useEffect(syncArrows, [rowWidth, filteredProjects, syncArrows]);

  // Switching category replaces the cards, so return to the start and re-check.
  useEffect(() => {
    rowRef.current?.scrollTo({ left: 0 });
    syncArrows();
  }, [activeCategory, syncArrows]);

  const scrollByCard = (direction: 1 | -1) =>
    rowRef.current?.scrollBy({ left: direction * CARD_STEP, behavior: 'smooth' });

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 short:gap-3 w-full">
      <h2 className="font-headline text-4xl md:text-5xl short:text-3xl font-bold">Projects</h2>

      <div className="flex gap-2 p-1 rounded-full bg-input/50 border border-white/10">
        {(['AI/ML', 'Research'] as Category[]).map(category => (
          <Button
            key={category}
            variant="ghost"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full px-6 transition-colors",
              activeCategory === category ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'hover:bg-white/10'
            )}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Zero-height probe: reports the width available to the row without being
          affected by the width we then set on the row itself. */}
      <div ref={measureRef} className="h-0 w-full" aria-hidden />

      <div className="relative mx-auto w-full" style={{ maxWidth: rowWidth }}>
        <div
          ref={rowRef}
          className={cn(
            'group/row flex w-full gap-6 px-4 overflow-x-auto no-scrollbar items-stretch',
            // Capped at 30rem: the wrapper's py-10 plus this ceiling is what
            // keeps a card scaled to 1.18 inside the row instead of clipped.
            'h-[clamp(23rem,60vh,30rem)]',
            // Snap to card start edges; scroll-pl matches the row padding so a
            // snapped card sits just inside it rather than under it.
            'snap-x snap-mandatory scroll-pl-4'
          )}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              isHovered={hoveredName === project.name}
              anyHovered={hoveredName !== null}
              hoverScale={hoverScaleFor(visibleCards)}
              onHover={(hovered) =>
                setHoveredName((current) =>
                  hovered ? project.name : current === project.name ? null : current
                )
              }
            />
          ))}
        </div>

        <ScrollArrow side="left" show={canScrollLeft} onClick={() => scrollByCard(-1)} />
        <ScrollArrow side="right" show={canScrollRight} onClick={() => scrollByCard(1)} />
      </div>
    </div>
  )
}
