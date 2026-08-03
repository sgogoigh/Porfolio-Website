'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { projects as allProjects } from '@/lib/data'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import * as Icons from '@/components/icons'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Category = 'AI/ML' | 'Research';

const TechIcon = ({ icon }: { icon: string }) => {
  const IconComponent = (Icons as any)[icon];
  if (!IconComponent) return null;
  return <IconComponent className="w-5 h-5" />;
};

const ProjectCard = ({ project }: { project: typeof allProjects[0] }) => {
  const projectImage = PlaceHolderImages.find(img => img.id === project.imageId);

  return (
    <div className="w-80 shrink-0">
      <Card className="group flex flex-col h-full bg-card/50 border border-white/10 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
        {projectImage && (
          <div className="aspect-video overflow-hidden">
            <Image
              src={projectImage.imageUrl}
              alt={project.name}
              width={320}
              height={180}
              data-ai-hint={projectImage.imageHint}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <CardHeader className='py-4'>
          <CardTitle className="text-lg">{project.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow py-0">
          <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center pt-4">
          <div className="flex gap-2">
            {project.techIcons.map((iconName, index) => (
              <div key={index} className="p-1.5 bg-transparent rounded-md" title={iconName.replace('Icon', '')}>
                <TechIcon icon={iconName} />
              </div>
            ))}
          </div>
          <Button asChild variant="link" className="p-0 h-auto text-primary">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Visit <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </CardFooter>
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
    <div className="flex flex-col items-center gap-8 w-full">
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
      
      <div className="w-full flex gap-6 pb-4 -mx-4 px-4 overflow-x-auto no-scrollbar">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  )
}
