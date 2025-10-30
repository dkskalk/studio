"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from './button';

interface CustomVideoPlayerProps {
  videoId: string;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerReady, setPlayerReady] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Load the IFrame Player API code asynchronously.
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // This function creates an <iframe> (and YouTube player) after the API code downloads.
    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId: videoId,
        playerVars: {
          'playsinline': 1,
          'controls': 0, // Hide all controls
          'rel': 0, // Do not show related videos
          'showinfo': 0, // Hide video title
          'modestbranding': 1, // Hide YouTube logo
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    };

    return () => {
      // Clean up the global function
      (window as any).onYouTubeIframeAPIReady = null;
    }
  }, [videoId]);

  const onPlayerReady = (event: any) => {
    setPlayerReady(true);
  };

  const onPlayerStateChange = (event: any) => {
    if (event.data === (window as any).YT.PlayerState.PLAYING) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (!isPlayerReady) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  return (
    <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-2xl border-4 border-background/50 bg-muted group">
        <div id="youtube-player" className="absolute inset-0 w-full h-full" />

        {/* Big Play/Pause button in the center */}
        {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity opacity-100 group-hover:opacity-100">
                <Button variant="ghost" size="icon" onClick={togglePlay} className="h-20 w-20 text-white hover:bg-white/20 hover:text-white">
                    <Play className="h-16 w-16 fill-white" />
                </Button>
            </div>
        )}
         {isPlaying && (
             <div 
                className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100"
                onClick={togglePlay}
            >
                <Button variant="ghost" size="icon" className="h-20 w-20 text-white bg-black/50 hover:bg-black/70 hover:text-white">
                    <Pause className="h-16 w-16 fill-white" />
                </Button>
            </div>
        )}
    </div>
  );
};

export default CustomVideoPlayer;
