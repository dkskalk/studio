"use client";

import React, { useState, useEffect } from 'react';

interface SpecialOfferCountdownProps {
  duration: number; // Duration in seconds
  onExpire: () => void;
}

const SpecialOfferCountdown: React.FC<SpecialOfferCountdownProps> = ({ duration, onExpire }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onExpire();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onExpire]);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time.toString();
  };
  
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex justify-center items-center gap-2 my-2">
      <div className="text-center">
        <div className="text-4xl font-bold font-mono text-destructive bg-destructive/10 rounded-lg p-2">
          {formatTime(minutes)}
        </div>
      </div>
      <div className="text-4xl font-bold text-destructive">:</div>
      <div className="text-center">
        <div className="text-4xl font-bold font-mono text-destructive bg-destructive/10 rounded-lg p-2">
          {formatTime(seconds)}
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferCountdown;
