import React from 'react';
import { X } from 'lucide-react';
import { useVideoModal } from './VideoContext';
import { VideoPlayer } from './VideoPlayer';

export const VideoModal: React.FC = () => {
  const { activeVideo, closeVideoModal } = useVideoModal();

  if (!activeVideo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-md animate-fade-in"
      onClick={closeVideoModal}
      role="dialog"
      aria-modal="true"
      aria-label={activeVideo.title}
    >
      <div
        className="relative w-full max-w-sm sm:max-w-md bg-navy-900 border border-navy-800 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with title and close button */}
        <div className="flex items-center justify-between px-4 py-3 bg-navy-950 border-b border-navy-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-leaf"></span>
            <h3 className="text-xs sm:text-sm font-semibold text-white truncate max-w-[240px]">
              {activeVideo.title}
            </h3>
          </div>
          <button
            onClick={closeVideoModal}
            className="p-1 rounded-lg text-text-dark-muted hover:text-white hover:bg-navy-800 transition-colors"
            aria-label="Close video modal"
          >
            <X className="w-5 h-5" />
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
  );
};
