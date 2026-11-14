import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { TezzLogo } from '../ui/TezzLogo';
import { siteConfig } from '../../lib/config';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Our Scooter', path: '/our-scooter' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Savings', path: '/savings' },
    { label: 'FAQs', path: '/faqs' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* 100% Solid Opaque Sticky Header - Content is ALWAYS 100% readable on scroll across ALL sections */}
      <header
        className="sticky top-0 z-[100] w-full bg-[#06122E] border-b border-navy-800 shadow-2xl"
        style={{ backgroundColor: '#06122E' }}
      >
        {/* 1. Thin Navy-950 Top Strip */}
        <div
          className="bg-[#06122E] border-b border-navy-900 text-xs py-1.5 sm:py-2 text-text-dark-muted"
          style={{ backgroundColor: '#06122E' }}
        >
          <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-8 lg:px-12 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-leaf shrink-0"></span>
              {/* Desktop Full Status */}
              <span className="hidden sm:inline font-medium text-white/90 whitespace-nowrap">
                {siteConfig.status} in {siteConfig.launchCity}.
              </span>
              {/* Mobile Compact Status */}
              <span className="sm:hidden font-medium text-white/90 text-[11px] truncate">
                Launching Soon • MP
              </span>
              <Link
                to="/waitlist"
                className="hidden md:inline-flex items-center gap-1 text-blue-light hover:underline font-semibold ml-1.5 whitespace-nowrap"
              >
                Join waitlist <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Support Phone - Always on ONE single line with whitespace-nowrap */}
            <a
              href={`tel:${siteConfig.supportPhone}`}
              className="shrink-0 whitespace-nowrap inline-flex items-center gap-1 sm:gap-1.5 text-text-dark-muted hover:text-white transition-colors py-0.5"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-leaf shrink-0" />
              <span className="font-bold text-white text-[11px] sm:text-xs tracking-tight whitespace-nowrap">
                {siteConfig.supportPhone}
              </span>
            </a>
          </div>
        </div>

        {/* 2. Main Navigation Bar (Solid 100% Opaque Navy-950) */}
        <div className="bg-[#06122E] w-full" style={{ backgroundColor: '#06122E' }}>
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 h-18 sm:h-20 flex items-center justify-between">
            {/* Brand Logo */}
            <TezzLogo variant="dark" size="md" />

            {/* Desktop Navigation Links - Always crisp white text on solid dark navy */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-7">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={`relative text-[14px] xl:text-[15px] font-semibold transition-colors py-2 ${
                      isActive ? 'text-white' : 'text-slate-200 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-blue-light rounded-full" />
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* Right Desktop CTA Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/rider-dashboard"
                className="btn-secondary-dark !min-h-[42px] !py-0 !px-4 xl:!px-5 !text-sm border-white/70 hover:border-white"
              >
                Rider Login
              </Link>
              <Link
                to="/waitlist"
                className="btn-primary !min-h-[42px] !py-0 !px-4 xl:!px-5 !text-sm"
              >
                <span>Join Waitlist</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/waitlist"
                className="btn-primary !min-h-[38px] !py-0 !px-3 sm:!px-4 !text-xs sm:!text-sm"
              >
                <span>Waitlist</span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-navy-800 text-white hover:bg-navy-700 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-in Drawer */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 top-[116px] z-50 bg-navy-950/80 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="w-full max-w-sm ml-auto h-full bg-navy-950 border-l border-navy-800 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-4">
                <div className="pb-3 border-b border-navy-800 flex items-center justify-between">
                  <span className="text-xs uppercase font-semibold text-blue-light tracking-wider">
                    Navigation Menu
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-leaf/20 text-leaf font-semibold">
                    Launching Soon
                  </span>
                </div>
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                          isActive
                            ? 'bg-royal text-white'
                            : 'text-slate-300 hover:bg-navy-800 hover:text-white'
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && <span className="w-2 h-2 rounded-full bg-white"></span>}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="pt-6 border-t border-navy-800 space-y-3">
                <Link
                  to="/rider-dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-secondary-dark w-full justify-center"
                >
                  Rider Login
                </Link>
                <Link
                  to="/waitlist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  <span>Join Waitlist</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="pt-2 text-center text-xs text-text-dark-muted">
                  Support: {siteConfig.supportPhone}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 3. Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-navy-950 border-t border-navy-800 p-3 sm:hidden shadow-2xl flex items-center gap-2.5">
        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-leaf hover:bg-leaf/90 text-navy-950 font-bold text-sm shadow-md transition-all active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
        <Link
          to="/waitlist"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-brand text-white font-bold text-sm shadow-sm transition-all active:scale-95"
        >
          <Sparkles className="w-4 h-4 text-leaf" />
          <span>Join Waitlist</span>
        </Link>
      </div>
    </>
  );
};
