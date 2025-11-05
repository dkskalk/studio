'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem('cookie_consent');
    if (consent === null) {
      // If no choice has been made, show the banner
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setIsVisible(false);
  };
  
  if (!isVisible) {
    return null;
  }

  return (
    <div className={cn(
        "fixed bottom-0 left-0 right-0 z-50 transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
    )}>
        <div className="bg-background/80 backdrop-blur-sm border-t border-border shadow-lg p-4">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-foreground/80 text-center sm:text-left">
                    Usamos cookies para garantir que você obtenha a melhor experiência em nosso site. Ao continuar, você concorda com nossa{' '}
                    <Link href="/politica-de-privacidade" className="underline hover:text-foreground">
                        Política de Privacidade
                    </Link>.
                </p>
                <div className="flex gap-2 flex-shrink-0">
                    <Button variant="outline" size="sm" onClick={handleDecline}>
                        Recusar
                    </Button>
                    <Button variant="default" size="sm" onClick={handleAccept} className="bg-accent text-accent-foreground hover:bg-accent/90">
                        Aceitar
                    </Button>
                </div>
            </div>
        </div>
    </div>
  );
}
