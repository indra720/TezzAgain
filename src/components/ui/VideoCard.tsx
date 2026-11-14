import React from 'react';
import { Play, Sparkles } from 'lucide-react';
import { useVideoModal } from './VideoContext';
import { toast } from 'sonner';

interface VideoCardProps {
  src?: string;
  title: string;
  duration?: string; // Kept in interface for backward compatibility, but NOT shown
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
  aspect = 'vertical',
}) => {
  const { openVideoModal } = useVideoModal();
  
  // Every card has a valid active video (defaults to video 1 if unprovided)
  const activeSrc = src && src.trim().length > 0 ? src : '/videos/tezz-video-1.mp4';

  const handleClick = () => {
    openVideoModal({ src: activeSrc, title, poster });
  };

  // Vertical card aspect ratio for portrait/vertical videos
  const aspectClass =
    aspect === 'vertical'
      ? 'aspect-[4/5] sm:aspect-[3/4]'
      : aspect === 'square'
      ? 'aspect-square'
      : 'aspect-[4/5]';

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
      <div className="relative z-0 w-full h-full overflow-hidden">
        {/* Edge-to-edge full bleed video poster - No black borders or empty side gaps */}
        <img
          src={poster}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Subtle gradient overlay for contrast and depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/15 to-transparent pointer-events-none" />
      </div>

      {/* Centered Round Play Button */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="w-[52px] h-[52px] sm:w-14 sm:h-14 rounded-full bg-royal hover:bg-blue flex items-center justify-center text-white shadow-xl shadow-black/50 transform transition-transform duration-200 group-hover:scale-110">
          <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
        </div>
      </div>

      {/* Bottom Title Bar with smooth gradient */}
      <div className="absolute bottom-0 left-0 right-0 p-3.5 z-10 bg-gradient-to-t from-navy-950 via-navy-950/85 to-transparent">
        <p className="text-white font-semibold text-xs sm:text-sm line-clamp-2 group-hover:text-blue-light transition-colors leading-snug">
          {title}
        </p>
      </div>
    </div>
  );
};
