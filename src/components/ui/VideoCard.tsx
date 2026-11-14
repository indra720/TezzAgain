import React from 'react';
import { Play } from 'lucide-react';
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
  
  // Every card has a valid active video (defaults to video 1 if unprovided)
  const activeSrc = src && src.trim().length > 0 ? src : '/videos/tezz-video-1.mp4';

  const handleClick = () => {
    openVideoModal({ src: activeSrc, title, poster });
  };

  // 1:1 aspect ratio perfectly matches square posters (1024x1024) with zero cropping
  const aspectClass =
    aspect === 'video'
      ? 'aspect-video'
      : 'aspect-square';

  return (
    <div
      onClick={handleClick}
      className={`group relative ${aspectClass} w-full rounded-2xl overflow-hidden cursor-pointer bg-navy-950 border border-navy-800 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-royal hover:shadow-xl ${className}`}
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
        {/* Ambient blurred fill: Matches poster colors and lighting perfectly so there are ZERO black bars */}
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover filter blur-2xl scale-110 opacity-70 brightness-75 pointer-events-none"
        />

        {/* 100% Uncropped Foreground Poster: Fits fully inside card with ZERO top/bottom/side text cutoff */}
        <img
          src={poster}
          alt={title}
          loading="lazy"
          className="relative z-10 w-full h-full object-contain p-1 transition-transform duration-300 group-hover:scale-[1.02]"
        />

        {/* Centered Round Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-royal hover:bg-blue flex items-center justify-center text-white shadow-xl shadow-black/50 transform transition-transform duration-200 group-hover:scale-110">
            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white translate-x-0.5" />
          </div>
        </div>

        {/* Sleek bottom title pill - Compact, doesn't obscure the poster text or graphics */}
        <div className="absolute bottom-2 inset-x-2 z-20 pointer-events-none">
          <div className="bg-navy-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-navy-700/60 flex items-center justify-between shadow-lg">
            <p className="text-white font-medium text-xs truncate max-w-[80%]">
              {title}
            </p>
            <span className="text-[10px] text-blue-light font-bold uppercase tracking-wider shrink-0">
              Watch
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
