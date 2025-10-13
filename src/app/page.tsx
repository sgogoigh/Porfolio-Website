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
import ParticlesComponent from '@/components/layout/particles'

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
      sections.forEach((section) => {
        const el = sectionRefs.current[section.id]
        if (el) {
          observer.unobserve(el)
        }
      })
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
      <ParticlesComponent />
      <Header ref={headerRef} activeSection={activeSection} isScrolled={isScrolled} />
      <div 
        ref={mainContainerRef}
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
              <div className={cn(
                "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full",
                ['about', 'experience', 'projects', 'connect'].includes(id) ? "overflow-y-auto no-scrollbar" : ""
              )}>
                {sectionComponents[id]}
              </div>
            </section>
          ))}
          <Footer />
        </main>
      </div>
    </div>
  )
}
