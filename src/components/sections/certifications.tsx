import React from 'react'
import { Card, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { certifications } from '@/lib/data'
import { ArrowUpRight } from 'lucide-react'

export default function Certifications() {
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <h2 className="font-headline text-4xl md:text-5xl font-bold">Certifications</h2>
      <div className="w-full max-w-2xl space-y-4">
        {certifications.map((cert) => (
          <Card
            key={cert.name}
            className="group w-full bg-card/50 border border-white/10 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.4)]"
          >
            <div className="flex justify-between items-center p-4">
              <CardTitle className="text-lg font-medium">{cert.name}</CardTitle>
              <Button asChild variant="ghost" size="sm">
                <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                  Verify <ArrowUpRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
