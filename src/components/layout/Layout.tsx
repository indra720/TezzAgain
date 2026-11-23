import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { VideoModal } from '../ui/VideoModal';
import { TezzChatbot } from '../ui/TezzChatbot';
import { MobileFloatingTabBar } from './MobileFloatingTabBar';
import { Toaster } from 'sonner';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-white selection:bg-royal selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 w-full flex flex-col pb-20 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileFloatingTabBar />
      <VideoModal />
      <TezzChatbot />
      <Toaster position="top-right" richColors closeButton />
    </div>
  );
};
