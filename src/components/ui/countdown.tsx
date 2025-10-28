"use client";

import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const calculateTimeLeft = () => {
    // This creates a countdown that resets every 24 hours for the user.
    const now = new Date();
    const expiry = new Date(now);
    expiry.setHours(24, 0, 0, 0); // Next midnight
    const difference = expiry.getTime() - now.getTime();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
        timeLeft = { hours: 0, minutes: 0, seconds: 0 }
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<{hours?: number, minutes?: number, seconds?: number}>({});

  useEffect(() => {
    // Set initial time to avoid hydration mismatch
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number | undefined) => {
    if (time === undefined) return '00';
    return time < 10 ? `0${time}` : time.toString();
  };

  return (
    <div className="flex justify-center items-center gap-4 my-4">
      <div className="text-center">
        <div className="text-4xl font-bold font-headline text-primary-foreground bg-background/20 rounded-lg p-3">
          {formatTime(timeLeft.hours)}
        </div>
        <div className="text-xs text-primary-foreground/80 mt-1">Horas</div>
      </div>
      <div className="text-4xl font-bold text-primary-foreground">:</div>
      <div className="text-center">
        <div className="text-4xl font-bold font-headline text-primary-foreground bg-background/20 rounded-lg p-3">
          {formatTime(timeLeft.minutes)}
        </div>
        <div className="text-xs text-primary-foreground/80 mt-1">Minutos</div>
      </div>
       <div className="text-4xl font-bold text-primary-foreground">:</div>
      <div className="text-center">
        <div className="text-4xl font-bold font-headline text-primary-foreground bg-background/20 rounded-lg p-3">
          {formatTime(timeLeft.seconds)}
        </div>
        <div className="text-xs text-primary-foreground/80 mt-1">Segundos</div>
      </div>
    </div>
  );
};

export default Countdown;
