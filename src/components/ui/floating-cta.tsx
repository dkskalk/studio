"use client";

import { useState, useEffect } from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { ArrowUp } from 'lucide-react';

export default function FloatingCta() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button if user has scrolled past the hero section (e.g., 800px)
            if (window.scrollY > 800) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className={cn(
            "fixed bottom-4 right-4 z-50 transition-opacity duration-300",
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        )}>
            <a href="#oferta">
                <Button 
                    size="lg" 
                    className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-2xl rounded-full h-16 animate-pulse"
                >
                    <ArrowUp className="mr-2 h-5 w-5 animate-bounce" />
                    QUERO MINHA VAGA AGORA!
                </Button>
            </a>
        </div>
    );
}
