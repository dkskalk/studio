'use client';

import React, { useEffect, useState, memo } from 'react';
import { cn } from '@/lib/utils';

interface Particle {
  id: number;
  style: React.CSSProperties;
}

const ConfettiParticle = memo(({ style }: { style: React.CSSProperties }) => (
  <i style={style} className="absolute w-2 h-4" />
));
ConfettiParticle.displayName = 'ConfettiParticle';

const createParticle = (id: number): Particle => {
  const colors = ['#fde047', '#f97316', '#ec4899', '#8b5cf6', '#3b82f6', '#22c55e'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const size = Math.random() * 0.5 + 0.75;
  const animationDelay = `${Math.random() * 2}s`;
  const duration = `${Math.random() * 3 + 4}s`;

  return {
    id,
    style: {
      '--x-start': `${Math.random() * 100 - 50}vw`,
      '--y-end': `${Math.random() * 200 + 100}vh`,
      '--rotation-start': `${Math.random() * 360}deg`,
      '--rotation-end': `${Math.random() * 1080 + 360}deg`,
      '--scale': size,
      backgroundColor: color,
      animationName: 'confetti-fall',
      animationDuration: duration,
      animationTimingFunction: 'ease-out',
      animationIterationCount: '1',
      animationDelay,
      animationFillMode: 'forwards',
      transform: `translateX(var(--x-start)) translateY(-10vh) rotate(var(--rotation-start)) scale(var(--scale))`,
    },
  };
};

export default function Confetti({ fire, onComplete }: { fire: boolean, onComplete: () => void }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (fire) {
      const newParticles = Array.from({ length: 150 }, (_, i) => createParticle(Date.now() + i));
      setParticles(newParticles);
      
      // Cleanup particles after animation
      const timer = setTimeout(() => {
        setParticles([]);
        if (onComplete) {
            onComplete();
        }
      }, 7000); // Longest animation is ~7s

      return () => clearTimeout(timer);
    }
  }, [fire, onComplete]);

  if (!fire) return null;

  return (
    <div className="fixed top-0 left-1/2 w-0 h-0 z-[100]">
      {particles.map((particle) => (
        <ConfettiParticle key={particle.id} style={particle.style} />
      ))}
    </div>
  );
}
