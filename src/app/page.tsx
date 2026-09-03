'use client'

import React, { useState, useEffect, useRef } from 'react'
import Header from '@/components/layout/header'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Experience from '@/components/sections/experience'
import Projects from '@/components/sections/projects'
import Certifications from '@/components/sections/certifications'
import Connect from '@/components/sections/connect'
import Footer from '@/components/layout/footer'
import { sections } from '@/lib/data'
import { cn } from '@/lib/utils'
import { SCROLL_CONTAINER_ID } from '@/lib/smooth-scroll'
import ParticlesComponent from '@/components/layout/particles'
import Ambient from '@/components/layout/ambient'
import GutterArt from '@/components/layout/gutter-art'

type SectionId = typeof sections[number]['id'];

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>('home')
  const [isScrolled, setIsScrolled] = useState(false)
  
  const sectionRefs = useRef<Record<SectionId, HTMLElement | null>>({
    home: null,
    about: null,
    experience: null,
    projects: null,
    certifications: null,
    connect: null,
  });

  const mainContainerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const animatedSections = useRef<Set<SectionId>>(new Set());

  useEffect(() => {
    const mainEl = mainContainerRef.current;

    const handleScroll = () => {
      if (mainEl) {
        setIsScrolled(mainEl.scrollTop > 50)
      }
    }
    
    mainEl?.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll();
    
    return () => {
      mainEl?.removeEventListener('scroll', handleScroll)
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id as SectionId;
          if (entry.isIntersecting) {
            setActiveSection(id);
            if (!animatedSections.current.has(id)) {
              entry.target.classList.add('section-visible')
              animatedSections.current.add(id);
            }
          }
        })
      },
      { root: mainContainerRef.current, rootMargin: `-${headerRef.current?.offsetHeight || 96}px 0px 0px 0px`, threshold: 0.5 }
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) {
        sectionRefs.current[section.id] = el
        observer.observe(el)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const sectionComponents: Record<SectionId, React.ReactNode> = {
    home: <Hero />,
    about: <About />,
    experience: <Experience />,
    projects: <Projects />,
    certifications: <Certifications />,
    connect: <Connect />,
  };


  return (
    <div className="flex flex-col h-screen">
      <Ambient />
      <GutterArt />
      <ParticlesComponent />
      <Header ref={headerRef} activeSection={activeSection} isScrolled={isScrolled} />
      <div
        ref={mainContainerRef}
        id={SCROLL_CONTAINER_ID}
        className="flex-grow overflow-y-auto no-scrollbar"
        style={{
          scrollSnapType: 'y mandatory',
          scrollPaddingTop: `var(--header-height)`,
        }}
      >
        <main>
          {sections.map(({ id }) => (
            <section
              id={id}
              key={id}
              className={cn(
                "h-screen flex flex-col justify-center section-hidden shrink-0",
                "pt-[var(--header-height)]",
                id === 'home' && 'section-visible',
              )}
            >
              {/* Every section is exactly one viewport tall. overflow-hidden is
                  the backstop for the sections whose content can grow - the
                  experience accordion, the projects row, the certifications
                  grid - which must never start their own scroll area.
                  Home is deliberately exempt. Its content is fixed and
                  measured to fit, whereas the clip was cutting 50px off the
                  portrait halo's blurred bloom at every width, which showed as
                  a hard vertical edge beside the image. */}
              <div className={cn(
                'w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 min-h-0 pb-4',
                id !== 'home' && 'overflow-hidden'
              )}>
                {sectionComponents[id]}
              </div>
              {/* The footer lives inside the last section rather than after it,
                  so it is already on screen when Connect snaps into view instead
                  of needing another scroll to reach. */}
              {id === 'connect' && <Footer />}
            </section>
          ))}
        </main>
      </div>
    </div>
  )
}
