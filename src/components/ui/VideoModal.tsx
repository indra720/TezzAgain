import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useVideoModal } from './VideoContext';
import { VideoPlayer } from './VideoPlayer';

export const VideoModal: React.FC = () => {
  const { activeVideo, closeVideoModal } = useVideoModal();

  // Close on Escape key and lock background scroll
  useEffect(() => {
    if (!activeVideo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeVideoModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeVideo, closeVideoModal]);

  if (!activeVideo) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 bg-navy-950/90 backdrop-blur-md animate-fade-in"
      onClick={closeVideoModal}
      role="dialog"
      aria-modal="true"
      aria-label={activeVideo.title}
    >
      <div
        className="relative w-full max-w-sm sm:max-w-md bg-navy-900 border border-navy-800 rounded-3xl overflow-visible shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating High-Contrast Close Button at Top-Right */}
        <button
          onClick={closeVideoModal}
          className="absolute -top-3.5 -right-3.5 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-slate-100 text-navy-950 shadow-2xl flex items-center justify-center z-50 border-2 border-navy-800 transition-transform hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Close video player"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-navy-950 font-bold" />
        </button>

        <div className="overflow-hidden rounded-3xl">
          {/* Top Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-navy-950 border-b border-navy-800">
            <div className="flex items-center gap-2 min-w-0 pr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-leaf animate-pulse shrink-0"></span>
              <h3 className="text-xs sm:text-sm font-semibold text-white truncate">
                {activeVideo.title}
              </h3>
            </div>
            <button
              onClick={closeVideoModal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-navy-800 hover:bg-royal text-white text-xs font-bold border border-navy-700 transition-colors shadow-sm shrink-0"
              aria-label="Close video"
            >
              <X className="w-3.5 h-3.5 text-white" />
              <span>Close</span>
            </button>
          </div>

          {/* Vertical/Portrait Video Container */}
          <div className="relative aspect-[9/16] max-h-[75vh] w-full bg-black flex items-center justify-center">
            <VideoPlayer
              src={activeVideo.src}
              poster={activeVideo.poster}
              title={activeVideo.title}
              autoPlay={true}
              controls={true}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
