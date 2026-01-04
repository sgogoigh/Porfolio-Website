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
    <div className="relative w-full h-full flex flex-col items-center justify-center pt-24 pb-20">
      <div className="flex-grow flex items-center w-full">
        <div className="grid md:grid-cols-5 gap-8 items-center w-full">
          <div className="md:col-span-3 flex flex-col items-center text-center">
            <h1 
              className={cn("font-serif text-6xl md:text-8xl font-bold tracking-tighter")}
            >
              Sunny Gogoi
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground font-manrope">
              Software Developer & AI Engineer
            </p>
          </div>
          <div className="md:col-span-2 relative flex items-center justify-center h-64 md:h-full">
            {profileImage && (
              <div className="relative group">
                <Image
                  src={profileImage.imageUrl}
                  alt={profileImage.description}
                  data-ai-hint={profileImage.imageHint}
                  width={256}
                  height={256}
                  className="rounded-full object-cover z-10 animate-jump-and-flip border-4 border-background shadow-2xl shadow-primary/20"
                />
                <div className="absolute inset-0 rounded-full overflow-hidden animate-glow-sweep border-4 border-transparent"></div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-6 mt-8">
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
