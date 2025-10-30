"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Declare the YouTube Player types
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

type CustomVideoPlayerProps = {
  videoId: string;
};

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [progress, setProgress] = useState(0);
  const playerRef = useRef<any>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const loadYouTubeAPI = () => {
      if (!window.YT) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        if (firstScriptTag && firstScriptTag.parentNode) {
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
      }
    };

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId: videoId,
        playerVars: {
          playsinline: 1,
          controls: 0,
          rel: 0,
          showinfo: 0,
          modestbranding: 1,
          autoplay: 0,
        },
        events: {
          onStateChange: onPlayerStateChange,
        },
      });
    };

    if (window.YT && window.YT.Player) {
        window.onYouTubeIframeAPIReady();
    } else {
        loadYouTubeAPI();
    }
    
    return () => {
        if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
        }
    };

  }, [videoId]);

  const onPlayerStateChange = (event: any) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true);
      setShowThumbnail(false);
      startProgressSimulation();
    } else if (event.data === window.YT.PlayerState.PAUSED) {
      setIsPlaying(false);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    } else if (event.data === window.YT.PlayerState.ENDED) {
        setIsPlaying(false);
        if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
        }
        setProgress(100);
    }
  };

  const startProgressSimulation = () => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    const duration = playerRef.current?.getDuration() || 0;
    if (duration === 0) return;

    progressIntervalRef.current = setInterval(() => {
        const currentTime = playerRef.current?.getCurrentTime() || 0;
        const twelveMinutesInSeconds = 12 * 60;
        
        let fakeProgress;
        if (currentTime < twelveMinutesInSeconds) {
            // First 12 minutes, progress goes from 0% to 80%
            fakeProgress = (currentTime / twelveMinutesInSeconds) * 80;
        } else {
            // After 12 minutes, progress slowly goes from 80% to 95%
            const remainingRealTime = duration - twelveMinutesInSeconds;
            const timeAfterTwelve = currentTime - twelveMinutesInSeconds;
            fakeProgress = 80 + (timeAfterTwelve / remainingRealTime) * 15;
        }

        setProgress(Math.min(fakeProgress, 95));

    }, 1000);
  };


  const togglePlay = () => {
    if (!playerRef.current) return;
    
    if (showThumbnail) {
        setShowThumbnail(false);
    }

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };


  return (
    <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-2xl border-4 border-background/50 bg-muted group">
        <div id="youtube-player" className={cn(showThumbnail ? 'hidden' : 'block', "w-full h-full")}></div>

        {showThumbnail && (
             <img 
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                alt="Video Thumbnail"
                className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                onClick={togglePlay}
            />
        )}

      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" onClick={togglePlay}>
        <Button variant="ghost" size="icon" className="w-20 h-20 text-white hover:bg-white/20">
          {isPlaying ? (
            <Pause className="w-12 h-12" />
          ) : (
            <Play className="w-12 h-12" />
          )}
        </Button>
      </div>
      
       <div className="absolute bottom-2 left-4 right-4">
        <Progress value={progress} className="h-2 bg-white/30" />
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
