import React, { useRef, useEffect } from 'react';
import { Play, Volume2 } from 'lucide-react';
import { useVideoModal } from './VideoContext';

interface VideoCardProps {
  src?: string;
  title: string;
  duration?: string; // Kept in interface for backward compatibility
  poster?: string;
  className?: string;
  priority?: boolean;
  aspect?: 'vertical' | 'square' | 'video';
}

export const VideoCard: React.FC<VideoCardProps> = ({
  src,
  title,
  poster = '/images/poster-1.jpg',
  className = '',
  aspect = 'square',
}) => {
  const { openVideoModal } = useVideoModal();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Every card has a valid active video (defaults to video 1 if unprovided)
  const activeSrc = src && src.trim().length > 0 ? src : '/videos/tezz-video-1.mp4';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Strict browser autoplay compliance: muted must be explicitly set on DOM element
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playVideo = () => {
      video.muted = true;
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {
          // Autoplay fallback: ready on first tap or intersection
        });
      }
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener('loadeddata', playVideo, { once: true });
      video.addEventListener('canplay', playVideo, { once: true });
    }

    return () => {
      video.removeEventListener('loadeddata', playVideo);
      video.removeEventListener('canplay', playVideo);
    };
  }, [activeSrc]);

  const handleClick = () => {
    openVideoModal({ src: activeSrc, title, poster });
  };

  // Modern aspect ratio mapping
  const aspectClass =
    aspect === 'video'
      ? 'aspect-video'
      : aspect === 'vertical'
      ? 'aspect-[9/14]'
      : 'aspect-square';

  return (
    <div
      onClick={handleClick}
      className={`group relative ${aspectClass} w-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer bg-navy-950 border border-navy-800/80 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-royal hover:shadow-2xl ${className}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`Watch: ${title}`}
    >
      <div className="relative z-0 w-full h-full overflow-hidden flex items-center justify-center bg-navy-950">
        {/* Ambient blurred fill */}
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover filter blur-2xl scale-110 opacity-70 brightness-75 pointer-events-none"
        />

        {/* Live AutoPlaying Looping Muted Video */}
        <video
          ref={videoRef}
          src={activeSrc}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
        >
          <source src={activeSrc} type="video/mp4" />
        </video>

        {/* Contrast Gradient Overlay */}
        <div className="absolute inset-0 z-15 bg-gradient-to-t from-black/85 via-black/15 to-black/35 pointer-events-none transition-opacity duration-300 group-hover:opacity-85" />

        {/* Top Badges: Live AutoPlay Indicator */}
        <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-center justify-between z-20 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-tight">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>LIVE REEL</span>
          </span>
          <span className="w-6 h-6 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90">
            <Volume2 className="w-3 h-3 text-white" />
          </span>
        </div>

        {/* Centered Play Button (prominent on hover) */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-royal/90 group-hover:bg-royal text-white flex items-center justify-center shadow-xl shadow-black/60 transform transition-all duration-300 group-hover:scale-115 border-2 border-white/40 backdrop-blur-xs">
            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white translate-x-0.5" />
          </div>
        </div>

        {/* Sleek bottom title pill */}
        <div className="absolute bottom-2.5 inset-x-2.5 z-20 pointer-events-none">
          <div className="bg-navy-950/90 backdrop-blur-md px-3 py-2 rounded-xl border border-navy-700/60 flex items-center justify-between shadow-lg">
            <p className="text-white font-bold text-xs truncate max-w-[75%] font-heading">
              {title}
            </p>
            <span className="text-[10px] text-blue-light font-extrabold uppercase tracking-wider shrink-0 bg-royal/40 px-2 py-0.5 rounded-md border border-royal/40">
              Tap Sound
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
