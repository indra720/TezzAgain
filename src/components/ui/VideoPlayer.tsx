import React, { useRef, useEffect } from 'react';

// Global reference for single video playback
let currentlyPlayingVideo: HTMLVideoElement | null = null;

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  title,
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
  className = '',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Pause when scrolled out of view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && !video.paused) {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Single video playing at a time (pause previous active video when a new one starts)
  const handlePlay = () => {
    if (currentlyPlayingVideo && currentlyPlayingVideo !== videoRef.current) {
      currentlyPlayingVideo.pause();
    }
    currentlyPlayingVideo = videoRef.current;
  };

  // Check if YouTube URL
  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be');
  const getYouTubeEmbedUrl = (url: string) => {
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=${autoPlay ? 1 : 0}&mute=${muted ? 1 : 0}`;
    }
    const match = url.match(/[?&]v=([^&]+)/);
    const id = match ? match[1] : '';
    return `https://www.youtube.com/embed/${id}?autoplay=${autoPlay ? 1 : 0}&mute=${muted ? 1 : 0}`;
  };

  if (isYouTube) {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-navy-950 ${className}`}>
        <iframe
          src={getYouTubeEmbedUrl(src)}
          title={title || 'TezzEV Video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        />
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      preload="metadata"
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline
      controls={controls}
      onPlay={handlePlay}
      aria-label={title || 'TezzEV Video Player'}
      className={`w-full h-full bg-navy-950 ${className ? className : 'object-contain'}`}
    />
  );
};
