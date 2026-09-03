import React from 'react'
import { Card, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { certifications } from '@/lib/data'
import { ArrowUpRight, BadgeCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Certifications() {
  const hasOddCount = certifications.length % 2 === 1;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 w-full">
      <h2 className="font-headline text-4xl md:text-5xl font-bold">Certifications</h2>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
        {certifications.map((cert, index) => {
          // A lone trailing card spans both columns and centres itself at one
          // column's width, so an odd count doesn't leave a lopsided gap.
          const isCentredRemainder = hasOddCount && index === certifications.length - 1;

          return (
            <Card
              key={cert.name}
              className={cn(
                'group flex items-center gap-3 bg-card/50 border border-white/10 p-4',
                'transition-all duration-300 hover:border-primary/50 hover:-translate-y-0.5',
                'hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.4)]',
                isCentredRemainder && 'md:col-span-2 md:mx-auto md:w-[calc(50%-0.5rem)]'
              )}
            >
              <BadgeCheck className="h-5 w-5 shrink-0 text-primary/70 transition-colors group-hover:text-primary" />
              <CardTitle className="flex-1 text-sm font-medium leading-snug md:text-base">
                {cert.name}
              </CardTitle>
              <Button asChild variant="ghost" size="sm" className="shrink-0 px-2 text-primary">
                <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                  <span className="sr-only md:not-sr-only">Verify</span>
                  <ArrowUpRight className="h-4 w-4 md:ml-1" />
                </a>
              </Button>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
