"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Eye } from 'lucide-react';

export default function FloatingCta() {
    const [isVisible, setIsVisible] = useState(false);
    const [viewers, setViewers] = useState(0);

    const showNotification = () => {
        // Generate a random number between 17 and 48
        const randomViewers = Math.floor(Math.random() * (48 - 17 + 1)) + 17;
        setViewers(randomViewers);
        setIsVisible(true);

        // Hide notification after 5 seconds
        setTimeout(() => {
            setIsVisible(false);
        }, 5000);
    };

    useEffect(() => {
        // Show notification for the first time after a short delay
        const initialTimeout = setTimeout(showNotification, 5000); 

        // Set interval to show notification every 30 seconds
        const interval = setInterval(showNotification, 30000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
         <div className={cn(
            "fixed bottom-4 left-4 z-50 transition-all duration-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        )}>
            <div className="bg-background/80 backdrop-blur-sm border border-foreground/20 rounded-lg px-4 py-3 text-sm flex items-center gap-3 shadow-lg animate-fade-in-up">
                <Eye className="h-5 w-5 text-accent animate-pulse" />
                <p><span className="font-bold">{viewers}</span> Mães com você nesse momento.</p>
            </div>
        </div>
    );
}
