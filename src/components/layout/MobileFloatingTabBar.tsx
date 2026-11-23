import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, Bike, CalendarDays, User } from 'lucide-react';

interface TabItem {
  id: string;
  label: string;
  path: string;
  icon: React.ElementType;
  matchPaths?: string[];
}

export const MobileFloatingTabBar: React.FC = () => {
  const location = useLocation();

  // If user is on Scooter detail page, we hide the tab bar because of sticky "Pre-Book" bottom bar
  const isScooterDetailPage = location.pathname === '/our-scooter';
  if (isScooterDetailPage) {
    return null;
  }

  const tabs: TabItem[] = [
    {
      id: 'home',
      label: 'Home',
      path: '/',
      icon: Home,
      matchPaths: ['/'],
    },
    {
      id: 'scooter',
      label: 'Scooters',
      path: '/our-scooter',
      icon: Bike,
      matchPaths: ['/our-scooter'],
    },
    {
      id: 'plans',
      label: 'Plans',
      path: '/pricing',
      icon: CalendarDays,
      matchPaths: ['/pricing', '/savings'],
    },
    {
      id: 'profile',
      label: 'Join',
      path: '/waitlist',
      icon: User,
      matchPaths: ['/waitlist', '/register', '/rider-dashboard'],
    },
  ];

  return (
    <nav
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-4 inset-x-4 z-40 max-w-sm mx-auto h-[58px] rounded-full bg-white/92 backdrop-blur-xl border border-white/60 shadow-[0_12px_36px_rgba(6,18,46,0.18)] px-2.5 py-1.5 flex items-center justify-around transition-all duration-300"
    >
      {tabs.map((tab) => {
        const isActive = tab.matchPaths
          ? tab.matchPaths.some((p) =>
              p === '/' ? location.pathname === '/' : location.pathname.startsWith(p)
            )
          : location.pathname === tab.path;

        const Icon = tab.icon;

        if (isActive) {
          return (
            <Link
              key={tab.id}
              to={tab.path}
              className="bg-gradient-to-r from-royal to-blue text-white px-4 py-2 rounded-full flex items-center gap-1.5 text-xs font-bold shadow-md shadow-royal/30 transition-all duration-300 transform scale-102"
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </Link>
          );
        }

        return (
          <Link
            key={tab.id}
            to={tab.path}
            className="p-2.5 text-slate-500 hover:text-navy-950 transition-colors flex items-center justify-center rounded-full active:scale-95"
            aria-label={tab.label}
          >
            <Icon className="w-5 h-5 text-slate-500" />
          </Link>
        );
      })}
    </nav>
  );
};
