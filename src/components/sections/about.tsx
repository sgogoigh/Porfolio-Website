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
  const initialTechCount = 10;
  const displayedTech = isTechStackExpanded ? techStack : techStack.slice(0, initialTechCount);

  return (
    <div className="grid md:grid-cols-10 gap-12 md:gap-16 items-center">
      <div className="md:col-span-6 flex flex-col gap-8">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center">About Me</h2>
        <p className="text-muted-foreground text-center md:text-left">
          I&apos;m a passionate AI &amp; ML Engineer with a knack for building efficient, scalable solutions. I thrive on turning complex problems into elegant software and uncovering insights from data to drive decision-making.
        </p>

        <Card className="bg-card/50 border-white/10">
          <CardContent className="p-4">
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

        <div className="space-y-4">
          <h3 className="font-headline text-2xl font-semibold text-center md:text-left">Tech Stack</h3>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4">
            {displayedTech.map(tech => (
              <div key={tech.name} className="group [perspective:1000px]">
                <div className="relative h-16 w-16 rounded-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
             <div className="text-center">
                <Button variant="ghost" onClick={() => setIsTechStackExpanded(!isTechStackExpanded)}>
                {isTechStackExpanded ? 'Show Less' : 'Show More'}
                {isTechStackExpanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                </Button>
            </div>
          )}
        </div>
      </div>

      <div className="md:col-span-4 relative flex justify-center items-center">
        {profileImage && (
          <div className="relative w-56 h-56 md:w-64 md:h-64 group">
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
