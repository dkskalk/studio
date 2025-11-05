"use client";

import { useState, useEffect } from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { ArrowUp, ShoppingCart } from 'lucide-react';

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

    return null;
}
