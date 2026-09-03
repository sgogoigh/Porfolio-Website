'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { education, techStack } from '@/lib/data'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import * as Icons from '@/components/icons'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp } from 'lucide-react'

const TechIcon = ({ icon }: { icon: string }) => {
  const IconComponent = (Icons as any)[icon];
  if (!IconComponent) return null;
  return <IconComponent className="w-6 h-6" />;
};

export default function About() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-picture');
  const [isTechStackExpanded, setIsTechStackExpanded] = useState(false);
  const initialTechCount = 12;
  const displayedTech = isTechStackExpanded ? techStack : techStack.slice(0, initialTechCount);

  return (
    <div className="grid h-full md:grid-cols-10 gap-6 md:gap-12 short:gap-4 items-center content-center">
      <div className="md:col-span-6 flex flex-col gap-5 short:gap-2.5">
        <h2 className="font-headline text-4xl md:text-5xl short:text-3xl font-bold text-center">About Me</h2>
        <p className="text-sm md:text-base short:text-xs text-muted-foreground text-center md:text-left">
          I&apos;m a passionate AI &amp; ML Engineer with a knack for building efficient, scalable solutions. I thrive on turning complex problems into elegant software and uncovering insights from data to drive decision-making.
        </p>

        <Card className="bg-card/50 border-white/10">
          <CardContent className="p-4 short:p-2.5">
            <div className="flex justify-between items-center">
              <p className="font-semibold">{education.college}</p>
              <p className="text-sm text-muted-foreground">{education.gradYear}</p>
            </div>
            <div className="flex justify-between items-center mt-1">
              <p className="text-sm text-muted-foreground">{education.degree}</p>
              <p className="text-sm font-mono">{education.cgpa}</p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-3 short:space-y-1.5">
          <h3 className="font-headline text-xl md:text-2xl short:text-base font-semibold text-center md:text-left">Tech Stack</h3>
          {/* flex-wrap packs the tiles tightly; an equal-fraction grid left big
              gaps between them at this container width. */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 short:gap-2">
            {displayedTech.map(tech => (
              <div key={tech.name} className="group [perspective:1000px]">
                <div className="relative h-14 w-14 short:h-11 short:w-11 rounded-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 flex items-center justify-center bg-card/30 rounded-lg border border-white/10 [backface-visibility:hidden]">
                    <TechIcon icon={tech.icon} />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-card/30 rounded-lg border border-primary/50 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <p className="text-xs text-center font-semibold text-primary break-words px-1">{tech.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {techStack.length > initialTechCount && (
             <div className="text-center md:text-left">
                <Button variant="ghost" size="sm" onClick={() => setIsTechStackExpanded(!isTechStackExpanded)}>
                {isTechStackExpanded ? 'Show Less' : `Show ${techStack.length - initialTechCount} More`}
                {isTechStackExpanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                </Button>
            </div>
          )}
        </div>
      </div>

      <div className="hidden md:col-span-4 relative md:flex justify-center items-center">
        {profileImage && (
          <div className="relative w-48 h-48 lg:w-60 lg:h-60 group">
             <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <Image
              src={profileImage.imageUrl}
              alt={profileImage.description}
              data-ai-hint={profileImage.imageHint}
              fill
              className="rounded-full object-cover z-10 relative border-4 border-background"
            />
          </div>
        )}
      </div>
    </div>
  )
}
