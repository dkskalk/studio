
"use client";

import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const initialTime = 10 * 60; // 10 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time.toString();
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex justify-center items-center gap-4 my-4">
      <div className="text-center">
        <div className="text-4xl font-bold font-mono text-foreground bg-background/50 rounded-lg p-3">
          {formatTime(minutes)}
        </div>
        <div className="text-xs text-foreground/80 mt-1">Minutos</div>
      </div>
       <div className="text-4xl font-bold text-foreground">:</div>
      <div className="text-center">
        <div className="text-4xl font-bold font-mono text-foreground bg-background/50 rounded-lg p-3">
          {formatTime(seconds)}
        </div>
        <div className="text-xs text-foreground/80 mt-1">Segundos</div>
      </div>
    </div>
  );
};

export default Countdown;
