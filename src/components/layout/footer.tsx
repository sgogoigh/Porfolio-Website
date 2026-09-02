import React from 'react'
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'
import { socialLinks } from '@/lib/data'
import { cn } from '@/lib/utils'

const iconMap = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
}

const SocialIcon = ({ as: Icon, href, label }: { as: React.ElementType, href: string, label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-2 rounded-full transition-all duration-300 text-muted-foreground hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_15px_1px_hsl(var(--primary)/0.5)]"
  >
    <Icon className="w-5 h-5" />
  </a>
)

export default function Footer() {
  const footerSocials = socialLinks.filter(link => link.id !== 'email' && link.id !== 'twitter');
  
  return (
    // No scroll-snap alignment: the footer is inside the last section now, not a
    // snap target of its own.
    <footer className="w-full shrink-0 bg-background py-4 border-t border-white/10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sunny Gogoi — Built with ❤️ using modern web technologies.
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map(link => {
            const IconComponent = iconMap[link.id as keyof typeof iconMap];
            return IconComponent ? <SocialIcon key={link.id} as={IconComponent} href={link.url} label={link.label} /> : null
          })}
        </div>
      </div>
    </footer>
  )
}
