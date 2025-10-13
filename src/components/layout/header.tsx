'use client'

import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { sections } from '@/lib/data'
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

type HeaderProps = {
  activeSection: string;
  isScrolled: boolean;
};

const Header = React.forwardRef<HTMLElement, HeaderProps>(({ activeSection, isScrolled }, ref) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <header
      ref={ref}
      style={{'--header-height': '4rem'} as React.CSSProperties}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-2 bg-background/80 backdrop-blur-lg' : 'py-6'
      )}
    >
      <div className="container mx-auto flex justify-between md:justify-center items-center relative">
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-4 md:gap-8 rounded-full px-4 py-2 border border-transparent">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={cn(
                    'relative px-3 py-2 text-sm font-medium transition-colors duration-300',
                    'hover:text-primary',
                    activeSection === section.id ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  {section.title}
                  {activeSection === section.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-primary rounded-full shadow-[0_0_8px_2px_hsl(var(--primary)/0.7)]"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex-grow flex justify-end">
          {isClient && (
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] bg-background/90 backdrop-blur-lg">
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6 text-base font-medium mt-8">
                  {sections.map(section => (
                    <SheetClose key={section.id} asChild>
                      <a
                        href={`#${section.id}`}
                        onClick={() => setIsSheetOpen(false)}
                        className={cn(
                          "transition-colors hover:text-primary",
                          activeSection === section.id ? "text-primary" : "text-muted-foreground"
                        )}
                      >
                        {section.title}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
       {isScrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent">
             <div className="absolute -bottom-1 left-0 right-0 h-1 bg-primary blur-md opacity-30"></div>
          </div>
        )}
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
