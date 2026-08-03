'use client'

import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { experience } from '@/lib/data'
import { Button } from '@/components/ui/button'

const ExperienceItem = ({ item }: { item: typeof experience[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <Card className="relative bg-card/50 border-white/10 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
        <p className="text-sm text-muted-foreground">{item.duration}</p>
        <h3 className="text-xl font-bold font-headline mt-1">{item.company}</h3>
        <p className="text-primary font-semibold mt-1">{item.role}</p>
        
        {isExpanded && (
            <ul className="text-sm text-muted-foreground mt-3 space-y-2 list-disc list-outside pl-4 transition-all duration-300">
                {item.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
            </ul>
        )}

        <Button variant="link" size="sm" className="p-0 mt-3 h-auto text-xs opacity-75" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Show Less' : 'Show More'}
        </Button>
      </Card>
    </div>
  )
}

export default function Experience() {
  return (
    <div className="flex flex-col items-center gap-12 w-full">
      <h2 className="font-headline text-4xl md:text-5xl font-bold text-center">Experience</h2>
      <div className="relative w-full max-w-3xl">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2"></div>
        {experience.map((item, index) => (
          <div
            key={item.company}
            className={`relative flex items-center mb-12 w-full`}
          >
             <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full z-10"></div>
             <div className="block md:hidden absolute left-4 -translate-x-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full z-10"></div>
            <div
              className={`w-full md:w-[calc(50%-1.5rem)] ${
                index % 2 === 0 ? 'md:mr-[calc(50%+1.5rem)]' : 'md:ml-[calc(50%+1.5rem)]'
              } pl-10 md:pl-0`}
            >
              <ExperienceItem item={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
