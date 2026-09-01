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
    // py leaves room for the hover lift+scale so the scroll container can't clip it.
    <div className="w-80 shrink-0 py-5">
      <Card
        className={cn(
          'group relative h-full overflow-hidden bg-card/50 border border-white/10',
          'transition-all duration-300 ease-out',
          'hover:scale-[1.05] hover:-translate-y-2 hover:z-20 hover:border-primary/60',
          'hover:shadow-[0_18px_50px_-12px_hsl(var(--primary)/0.45)]'
        )}
      >
        {projectImage && (
          <div className="absolute inset-x-0 top-0 h-36 overflow-hidden">
            <Image
              src={projectImage.imageUrl}
              alt={project.name}
              width={320}
              height={144}
              data-ai-hint={projectImage.imageHint}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          </div>
        )}

        {/* Slides up over the image on hover, which frees the height needed to
            show the description in full without resizing the card. */}
        <div
          className={cn(
            'absolute inset-x-0 bottom-0 top-[7.5rem] flex flex-col gap-3 p-4',
            'bg-card/90 backdrop-blur-sm transition-[top,background-color] duration-300 ease-out',
            'group-hover:top-0 group-hover:bg-card/95'
          )}
        >
          <h3 className="font-headline text-lg font-semibold leading-snug">{project.name}</h3>

          <p className="text-sm text-muted-foreground line-clamp-2 group-hover:line-clamp-none">
            {project.description}
          </p>

          {/* Tech words + link reveal with the panel. mt-auto pins them low. */}
          <div className="mt-auto flex flex-col gap-3 opacity-0 translate-y-2 transition-all duration-300 delay-75 group-hover:opacity-100 group-hover:translate-y-0">
            <div className="flex flex-wrap gap-1.5">
              {project.techIcons.map(iconKey => (
                <span
                  key={iconKey}
                  className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
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
    <div className="flex h-full flex-col items-center justify-center gap-6 w-full">
      <h2 className="font-headline text-4xl md:text-5xl font-bold">Projects</h2>

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

      <div className="w-full flex gap-6 -mx-4 px-4 overflow-x-auto no-scrollbar h-[clamp(22rem,50vh,27rem)] items-stretch">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  )
}
