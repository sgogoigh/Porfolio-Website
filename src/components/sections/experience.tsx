'use client'

import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { experience } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

type ExperienceItemProps = {
  item: typeof experience[0];
  isExpanded: boolean;
  onToggle: () => void;
};

const ExperienceItem = ({ item, isExpanded, onToggle }: ExperienceItemProps) => (
  <div className="group relative">
    {/* Steady glow: a plain opacity fade, no rotation and no duration swap. The
        previous version animated a tilt while cross-fading over different
        in/out durations, which read as jittery. */}
    <div
      aria-hidden
      className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary to-accent blur opacity-0 transition-opacity duration-300 group-hover:opacity-60"
    ></div>
    {/* Opaque, not bg-card/50: the timeline rule runs behind these cards and was
        showing through the translucent fill. */}
    <Card className="relative bg-card border-white/10 p-4 short:p-2.5 transition-colors duration-300 hover:border-primary/40">
      <p className="text-xs text-muted-foreground">{item.duration}</p>
      <h3 className="text-base md:text-lg short:text-sm font-bold font-headline mt-0.5">{item.company}</h3>
      <p className="text-sm short:text-xs text-primary font-semibold mt-0.5">{item.role}</p>

      {isExpanded && (
        <ul className="text-xs short:text-[11px] short:leading-snug text-foreground/85 mt-2 space-y-1.5 short:space-y-1 list-disc list-outside pl-4">
          {item.achievements.map((achievement, i) => (
            <li key={i}>{achievement}</li>
          ))}
        </ul>
      )}

      <Button
        variant="link"
        size="sm"
        className="p-0 mt-2 short:mt-1 h-auto text-xs"
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        {isExpanded ? 'Show Less' : 'Show More'}
        <ChevronDown className={cn('ml-1 h-3 w-3 transition-transform', isExpanded && 'rotate-180')} />
      </Button>
    </Card>
  </div>
)

export default function Experience() {
  // Accordion rather than independent toggles: three expanded cards cannot fit
  // one viewport, so opening one closes the others.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 short:gap-3 w-full">
      <h2 className="font-headline text-4xl md:text-5xl short:text-3xl font-bold text-center">Experience</h2>
      <div className="relative w-full max-w-3xl">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2"></div>
        {experience.map((item, index) => (
          <div
            key={item.company}
            className="relative flex items-center mb-6 short:mb-2.5 last:mb-0 w-full"
          >
            {/* The open card spans the axis, so its dot would land inside the card. */}
            <div
              className={cn(
                'hidden md:block absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-background border-2 border-primary rounded-full z-10',
                openIndex === index && 'md:hidden'
              )}
            ></div>
            <div className="block md:hidden absolute left-4 -translate-x-1/2 w-3.5 h-3.5 bg-background border-2 border-primary rounded-full z-10"></div>
            {/* The open card breaks out to the full timeline width. Half-width
                cards wrap the bullet list so heavily that an expanded one
                overflows a short viewport (~700px tall). */}
            <div
              className={cn(
                'pl-10 md:pl-0 transition-all duration-300',
                openIndex === index
                  ? 'w-full md:w-full md:mx-0'
                  : cn(
                      'w-full md:w-[calc(50%-1.5rem)]',
                      index % 2 === 0 ? 'md:mr-[calc(50%+1.5rem)]' : 'md:ml-[calc(50%+1.5rem)]'
                    )
              )}
            >
              <ExperienceItem
                item={item}
                isExpanded={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
