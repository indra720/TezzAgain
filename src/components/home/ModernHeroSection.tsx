import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Zap,
  Wrench,
  ShieldCheck,
  ArrowRight,
  Play,
  MapPin,
  Clock,
  Bike,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { useVideoModal } from '../ui/VideoContext';
import { siteConfig } from '../../lib/config';

export const ModernHeroSection: React.FC = () => {
  const { openVideoModal } = useVideoModal();
  const navigate = useNavigate();
  const bgVideoRef = useRef<HTMLVideoElement>(null);

  // Floating Rental Filter State (DriveX style)
  const [activeTab, setActiveTab] = useState<'weekly' | 'monthly' | 'daily'>('weekly');
  const [selectedHub, setSelectedHub] = useState('Indore • Vijay Nagar Mega Hub');
  const [selectedPlan, setSelectedPlan] = useState('Weekly Pro (Unlimited Swaps)');
  const [selectedPurpose, setSelectedPurpose] = useState('Zomato / Swiggy Food Delivery');

  // Reliable Autoplay for Background Video
  useEffect(() => {
    if (bgVideoRef.current) {
      bgVideoRef.current.play().catch(() => {});
    }
  }, []);

  const handleSearchScooters = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/pricing');
  };

  return (
    <section className="relative min-h-[640px] sm:min-h-[700px] lg:min-h-[740px] bg-[#040C22] text-white pt-10 sm:pt-14 md:pt-18 pb-24 sm:pb-32 overflow-visible flex flex-col justify-between">
      {/* ======================================================== */}
      {/* 1. CINEMATIC FULL-WIDTH BACKGROUND VIDEO                 */}
      {/* ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <video
          ref={bgVideoRef}
          src={siteConfig.videos.heroBg.src}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/poster-1.jpg"
          className="w-full h-full object-cover opacity-60 scale-102"
        >
          <source src={siteConfig.videos.heroBg.src} type="video/mp4" />
        </video>

        {/* Ambient Radial Glowing Orbs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-royal/25 rounded-full blur-[170px]" />

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040C22]/80 via-[#06122E]/70 to-[#040C22]/95" />

        {/* High-Tech Digital Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* ======================================================== */}
      {/* 2. CENTERED CINEMATIC HERO CONTENT (Pure Clean Typography)*/}
      {/* ======================================================== */}
      <div className="container-custom relative z-10 w-full my-auto text-center max-w-4xl mx-auto space-y-6 sm:space-y-7">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/90 border border-royal/40 text-xs font-semibold shadow-inner backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-white font-bold tracking-wide uppercase text-[11px] sm:text-xs">
            Smart EV Rental Platform
          </span>
          <span className="text-blue-light font-medium">
            • {siteConfig.launchCity}
          </span>
        </div>

        {/* Main Headline (DriveX Bold Impact Typography) */}
        <div className="space-y-3.5">
          <h1 className="text-white tracking-tight leading-[1.08] font-heading font-black text-3xl sm:text-5xl md:text-6xl lg:text-[4rem]">
            Drive Your Journey,{' '}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-light via-sky-200 to-leaf">
              Pay Zero Petrol.
            </span>
          </h1>
          <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            India's commercial electric scooter rental platform built for delivery heroes and city commuters. Swap batteries in 2 minutes at city hubs and keep 100% of your earnings.
          </p>
        </div>

        {/* 3 DriveX-Style Horizontal Feature Badges in One Centered Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto pt-2 border-t border-white/10">
          <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm text-text-dark-muted py-1">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="font-bold text-white block leading-tight">Zero Fuel Expense</span>
              <span className="text-[11px] text-slate-400">Unlimited Hub Swaps</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm text-text-dark-muted py-1">
            <div className="w-8 h-8 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-light flex items-center justify-center shrink-0">
              <Wrench className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="font-bold text-white block leading-tight">Zero Maintenance</span>
              <span className="text-[11px] text-slate-400">Free Hub Servicing</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm text-text-dark-muted py-1">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="font-bold text-white block leading-tight">24/7 Road Helpline</span>
              <span className="text-[11px] text-slate-400">Instant SOS Backup</span>
            </div>
          </div>
        </div>

        {/* Action CTA Buttons */}
        <div className="flex items-center justify-center gap-3.5 flex-wrap pt-2">
          <Link
            to="/pricing"
            className="btn-primary !min-h-[46px] !px-7 text-sm font-bold shadow-xl shadow-royal/40"
          >
            <span>View Rental Plans</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={() =>
              openVideoModal({
                src: siteConfig.videos.heroBg.src,
                title: 'TezzEV Official Ride Experience & Scooter Tour',
                poster: '/images/poster-1.jpg',
              })
            }
            className="btn-secondary-dark !min-h-[46px] !px-6 text-sm font-bold border-white/30 hover:border-white cursor-pointer"
          >
            <Play className="w-4 h-4 text-leaf fill-leaf" />
            <span>Watch Video Tour</span>
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. DRIVEX-STYLE OVERLAPPING FLOATING RENTAL SEARCH WIDGET*/}
      {/* ======================================================== */}
      <div className="container-custom relative -mb-16 sm:-mb-24 z-30 pt-8">
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-200/90 text-navy-950 max-w-5xl mx-auto">
          {/* Top Tabs (DriveX "Rent a Car / One Way / Long Term") */}
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-4 overflow-x-auto no-scrollbar">
            {[
              { key: 'weekly', label: 'Weekly Pro (Delivery Shift)', icon: Bike },
              { key: 'monthly', label: 'Monthly Super (Fleet & Commute)', icon: Clock },
              { key: 'daily', label: 'Daily Rental (Trial Shift)', icon: Zap },
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-royal text-white shadow-md shadow-royal/30'
                      : 'text-slate-600 hover:text-navy-950 hover:bg-slate-100'
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* 4 Search Columns in One Row (DriveX Signature Search Bar) */}
          <form
            onSubmit={handleSearchScooters}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 items-end"
          >
            {/* Field 1: Pickup Hub */}
            <div className="space-y-1 text-left">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block flex items-center gap-1">
                <MapPin className="w-3 h-3 text-royal" />
                <span>Pickup City &amp; Hub</span>
              </label>
              <div className="relative">
                <select
                  value={selectedHub}
                  onChange={(e) => setSelectedHub(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold text-navy-950 bg-slate-50 hover:bg-white focus:bg-white focus:border-royal focus:ring-1 focus:ring-royal transition-all appearance-none cursor-pointer pr-8"
                >
                  <option value="Indore • Vijay Nagar Mega Hub">Indore • Vijay Nagar Mega Hub</option>
                  <option value="Indore • Palasia Square Express Hub">Indore • Palasia Square Express Hub</option>
                  <option value="Indore • Bhawarkua Student Hub">Indore • Bhawarkua Student Hub</option>
                  <option value="Bhopal • MP Nagar Zone-1 Hub">Bhopal • MP Nagar Zone-1 Hub</option>
                  <option value="Bhopal • New Market Express Hub">Bhopal • New Market Express Hub</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Field 2: Rental Plan Type */}
            <div className="space-y-1 text-left">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block flex items-center gap-1">
                <Clock className="w-3 h-3 text-royal" />
                <span>Rental Plan</span>
              </label>
              <div className="relative">
                <select
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold text-navy-950 bg-slate-50 hover:bg-white focus:bg-white focus:border-royal focus:ring-1 focus:ring-royal transition-all appearance-none cursor-pointer pr-8"
                >
                  <option value="Weekly Pro (Unlimited Swaps)">Weekly Pro (Unlimited Swaps)</option>
                  <option value="Monthly Super (Lowest Daily Rate)">Monthly Super (Lowest Daily Rate)</option>
                  <option value="Daily Flexible (Short Trial)">Daily Flexible (Short Trial)</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Field 3: Riding Purpose */}
            <div className="space-y-1 text-left">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block flex items-center gap-1">
                <Bike className="w-3 h-3 text-royal" />
                <span>Riding Purpose</span>
              </label>
              <div className="relative">
                <select
                  value={selectedPurpose}
                  onChange={(e) => setSelectedPurpose(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold text-navy-950 bg-slate-50 hover:bg-white focus:bg-white focus:border-royal focus:ring-1 focus:ring-royal transition-all appearance-none cursor-pointer pr-8"
                >
                  <option value="Zomato / Swiggy Food Delivery">Zomato / Swiggy Food Delivery</option>
                  <option value="Blinkit / Zepto Grocery Shifts">Blinkit / Zepto Grocery Shifts</option>
                  <option value="Personal Office Commute">Personal Office Commute</option>
                  <option value="B2B Commercial Fleet">B2B Commercial Fleet (Bulk)</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Field 4: Search Scooters CTA Button */}
            <div>
              <button
                type="submit"
                className="btn-primary w-full justify-center !min-h-[44px] text-xs sm:text-sm font-bold shadow-md shadow-royal/30 cursor-pointer active:scale-95 transition-transform"
              >
                <span>Search Scooters</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
