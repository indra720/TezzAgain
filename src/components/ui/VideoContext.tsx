import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ActiveVideo {
  src: string;
  title: string;
  poster?: string;
}

interface VideoContextType {
  activeVideo: ActiveVideo | null;
  openVideoModal: (video: ActiveVideo) => void;
  closeVideoModal: () => void;
}

const VideoContext = createContext<VideoContextType>({
  activeVideo: null,
  openVideoModal: () => {},
  closeVideoModal: () => {},
});

export const useVideoModal = () => useContext(VideoContext);

export const VideoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeVideo, setActiveVideo] = useState<ActiveVideo | null>(null);

  const openVideoModal = (video: ActiveVideo) => {
    setActiveVideo(video);
  };

  const closeVideoModal = () => {
    setActiveVideo(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeVideo) {
        closeVideoModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeVideo]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeVideo]);

  return (
    <VideoContext.Provider value={{ activeVideo, openVideoModal, closeVideoModal }}>
      {children}
    </VideoContext.Provider>
  );
};
