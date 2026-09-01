'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { projects as allProjects, techStack } from '@/lib/data'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Category = 'AI/ML' | 'Research';

/**
 * Tech is shown as words rather than glyphs. techStack already carries the
 * canonical spelling for each icon key ('FastApiIcon' -> 'FastAPI'), so reuse it
 * and fall back to de-suffixing the key for anything not listed there.
 */
const techLabel = (iconKey: string) =>
  techStack.find(t => t.icon === iconKey)?.name ?? iconKey.replace(/Icon$/, '');

const ProjectCard = ({ project }: { project: typeof allProjects[0] }) => {
  const projectImage = PlaceHolderImages.find(img => img.id === project.imageId);

  return (
    <div
      className={cn(
        'group/card w-80 shrink-0 py-6',
        'transition-all duration-300 ease-out',
        // Any card hovered shrinks and dims the whole row...
        'group-hover/row:scale-[0.94] group-hover/row:opacity-50',
        // ...and the one actually under the cursor overrides that and grows.
        // ! is needed because both rules land at the same specificity.
        'hover:!scale-[1.06] hover:!opacity-100 hover:z-20',
      )}
    >
      <Card
        className={cn(
          'flex h-full flex-col overflow-hidden bg-card/60 border border-white/10',
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
          <p className="text-sm short:text-xs text-muted-foreground line-clamp-2 group-hover/card:line-clamp-6 short:group-hover/card:line-clamp-4">
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
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('AI/ML')

  const filteredProjects = useMemo(() => {
    return allProjects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

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

      <div className="group/row w-full flex gap-6 -mx-4 px-4 overflow-x-auto no-scrollbar h-[clamp(23rem,56vh,28rem)] items-stretch">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  )
}
