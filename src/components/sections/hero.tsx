'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowDown, Download, Github } from 'lucide-react'
import { socialLinks } from '@/lib/data'
import { Mail, Linkedin, Twitter } from 'lucide-react'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { cn } from '@/lib/utils'
import { smoothScrollToSection } from '@/lib/smooth-scroll'

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
    // Extra top padding: --header-height is 4rem, but at the top of the page the
    // header is ~90px tall (py-6), so the section's own padding does not clear
    // it and the portrait's halo was being cut off at the apex of the toss.
    // pb clears the absolutely-positioned scroll arrow below.
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-6 pt-16 md:pt-28 short:pt-16 pb-8 md:pb-20">
      {/* No flex-grow: without it the row and the socials below stay together as
          one centred group, instead of the row being pushed up and the socials
          stranded at the bottom of the section. */}
      <div className="flex min-h-0 items-center justify-center w-full">
        {/* A centred flex pair rather than a 3/2 grid: the grid centred the name
            inside its own columns, which left the name-plus-portrait unit
            off-centre on the page and pushed the two apart. */}
        {/* The gap has to clear the glow, not just the portrait: the halo box is
            wider than the photo and blur-3xl spreads it ~100px further still, so
            a 32px gap left it washing over the text. */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 lg:gap-32">
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h1
              className={cn(
                // A brush script, so no negative tracking (the strokes are meant
                // to run together). Its ink runs 1.29em above and 0.18em below
                // the baseline, well outside a default line box, so the leading
                // is set per size via the text-{size}/{leading} syntax: a bare
                // `leading-*` loses to the line-height that the responsive
                // text-* utilities set.
                'font-eagle font-normal tracking-normal whitespace-nowrap',
                'text-6xl/[1.3] sm:text-7xl/[1.3] lg:text-8xl/[1.3] xl:text-[7rem]/[1.3]',
                'short:text-5xl/[1.3] sm:short:text-6xl/[1.3] lg:short:text-7xl/[1.3] xl:short:text-7xl/[1.3]'
              )}
            >
              Sunny Gogoi
            </h1>
            {/* self-stretch makes the caption as wide as the name above it, so
                text-center centres it under the name rather than inheriting the
                block's right alignment. */}
            {/* mt clears the script's descenders, which reach ~0.18em below the
                baseline and were cutting through this line. */}
            <p className="mt-12 short:mt-8 self-stretch text-center text-lg md:text-xl text-muted-foreground font-manrope">
              AI &amp; ML Engineer
            </p>
          </div>
          <div className="relative flex shrink-0 items-center justify-center">
            {profileImage && (
              // perspective gives the flip real depth instead of a flat squash.
              <div className="relative flex items-center justify-center [perspective:1200px]">
                {/* Static halo — stays put while the portrait flies, so the glow
                    reads as light in the room rather than part of the avatar.
                    Two layers: a wide soft bloom plus a tighter, brighter core. */}
                <div
                  aria-hidden
                  className="absolute h-72 w-72 md:h-80 md:w-80 short:h-56 short:w-56 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 blur-3xl animate-ring-pulse"
                />
                <div
                  aria-hidden
                  className="absolute h-56 w-56 md:h-64 md:w-64 short:h-44 short:w-44 rounded-full bg-primary/40 blur-2xl animate-ring-pulse-alt"
                />
                {/* Frame + photo flip together as one unit. backface-visibility
                    hides the composite through the back half of the turn, so the
                    portrait disappears edge-on rather than showing mirrored. */}
                <div className="relative animate-coin-toss [backface-visibility:hidden] [--toss-lift:120px] short:[--toss-lift:40px]">
                  <div className="rounded-full p-[3px] bg-gradient-to-br from-primary via-accent to-primary shadow-[0_0_80px_-4px_hsl(var(--primary)/0.9),0_0_140px_-20px_hsl(var(--accent)/0.7)]">
                    <Image
                      src={profileImage.imageUrl}
                      alt={profileImage.description}
                      data-ai-hint={profileImage.imageHint}
                      width={256}
                      height={256}
                      className="h-52 w-52 md:h-60 md:w-60 short:h-40 short:w-40 rounded-full object-cover aspect-square border-[3px] border-background"
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
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollToSection('about');
            }}
          >
            <ArrowDown className="w-6 h-6" />
            <span className="sr-only">Scroll to About section</span>
          </a>
        </Button>
      </div>
    </div>
  )
}
