"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from './logo';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';

const navLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Benefícios', href: '#beneficios' },
  { name: 'Depoimentos', href: '#depoimentos' },
  { name: 'Garantia', href: '#garantia' },
  { name: 'Oferta', href: '#oferta' },
  { name: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
           <ThemeToggle />
           <a href="#cta-vitalicio">
            <Button className="hidden md:inline-flex bg-accent text-accent-foreground hover:bg-accent/90">Comprar Agora</Button>
           </a>
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                    <Logo />
                    <SheetTrigger asChild>
                       <Button variant="ghost" size="icon">
                          <X className="h-6 w-6" />
                          <span className="sr-only">Fechar menu</span>
                        </Button>
                    </SheetTrigger>
                  </div>
                  <nav className="flex flex-col gap-4 p-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                        onClick={() => setOpen(false)}
                      >
                        {link.name}
                      </a>
                    ))}
                    <a href="#cta-vitalicio" onClick={() => setOpen(false)}>
                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Comprar Agora</Button>
                    </a>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
