'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowDown, Download, Github } from 'lucide-react'
import { socialLinks } from '@/lib/data'
import { Mail, Linkedin, Twitter } from 'lucide-react'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { cn } from '@/lib/utils'

const iconMap = {
  email: Mail,
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
}

const SocialIcon = ({ as: Icon, href, label }: { as: React.ElementType, href: string, label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-3 rounded-full transition-all duration-300 text-muted-foreground hover:text-primary hover:bg-primary/10"
  >
    <Icon className="w-5 h-5" />
  </a>
)

export default function Hero() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-picture');
  const heroSocials = socialLinks.filter(link => ['email', 'linkedin', 'twitter', 'github'].includes(link.id));

  return (
    // pb clears the absolutely-positioned scroll arrow below, which the socials
    // and resume button used to sit on top of. The arrow itself is unchanged.
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-8 pt-8 pb-8 md:pb-24">
      <div className="flex min-h-0 flex-grow items-center w-full">
        <div className="grid md:grid-cols-5 gap-8 items-center w-full">
          <div className="md:col-span-3 flex flex-col items-center text-center">
            <h1
              className={cn("font-serif text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter")}
            >
              Sunny Gogoi
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground font-manrope">
              Software Developer &amp; AI Engineer
            </p>
          </div>
          <div className="md:col-span-2 relative flex items-center justify-center h-64 md:h-full">
            {profileImage && (
              // perspective gives the flip real depth instead of a flat squash.
              <div className="relative flex items-center justify-center [perspective:1200px]">
                {/* Static halo — stays put while the portrait hops, so the glow
                    reads as light in the room rather than part of the avatar. */}
                <div
                  aria-hidden
                  className="absolute h-56 w-56 md:h-64 md:w-64 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 blur-3xl animate-ring-pulse"
                />
                {/* Frame + photo flip together as one unit. backface-visibility
                    hides the composite through the back half of the turn, so the
                    portrait disappears edge-on rather than showing mirrored. */}
                <div className="relative animate-coin-toss [backface-visibility:hidden]">
                  <div className="rounded-full p-[3px] bg-gradient-to-br from-primary via-accent to-primary shadow-[0_0_45px_-8px_hsl(var(--primary)/0.7)]">
                    <Image
                      src={profileImage.imageUrl}
                      alt={profileImage.description}
                      data-ai-hint={profileImage.imageHint}
                      width={256}
                      height={256}
                      className="h-52 w-52 md:h-60 md:w-60 rounded-full object-cover aspect-square border-[3px] border-background"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex shrink-0 flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          {heroSocials.map(link => {
            const IconComponent = iconMap[link.id as keyof typeof iconMap];
            return IconComponent ? <SocialIcon key={link.id} as={IconComponent} href={link.url} label={link.label} /> : null
          })}
        </div>
        
        <Button asChild>
          <a href="https://drive.google.com/file/d/1r_AAg1DcNYFeDMLvcFQ9hdAF699NlXqV/view?usp=drive_link" download="Sunny_Gogoi_Resume.pdf">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </a>
        </Button>
      </div>

      <div className="absolute bottom-2 hidden md:block">
        <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary animate-bounce">
          <a href="#about">
            <ArrowDown className="w-6 h-6" />
            <span className="sr-only">Scroll to About section</span>
          </a>
        </Button>
      </div>
    </div>
  )
}
