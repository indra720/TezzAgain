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
    <section className="relative min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] bg-[#040C22] text-white pt-8 sm:pt-12 md:pt-14 pb-24 sm:pb-32 overflow-visible flex flex-col justify-between">
      {/* ======================================================== */}
      {/* 1. CINEMATIC BACKGROUND VIDEO (Smooth Full-Width Motion) */}
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
          className="w-full h-full object-cover opacity-65 scale-102"
        >
          <source src={siteConfig.videos.heroBg.src} type="video/mp4" />
        </video>

        {/* Directional Contrast Gradient Overlay (Ensures Left Text & Right Scooter Stand Out Like DriveX) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040C22]/98 via-[#06122E]/85 to-[#040C22]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040C22]/60 via-transparent to-[#040C22]/95" />

        {/* High-Tech Digital Grid Overlay */}
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
      {/* 2. HERO CONTENT CONTAINER (Z-Index 10)                  */}
      {/* ======================================================== */}
      <div className="container-custom relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ------------------------------------------------------ */}
          {/* LEFT: Clean, Bold, High-Impact Typography (DriveX Style)*/}
          {/* ------------------------------------------------------ */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-royal/40 text-xs font-semibold shadow-inner backdrop-blur-md">
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

            {/* Main Headline (DriveX & DriveEasy Geometric Typography) */}
            <div className="space-y-3">
              <h1 className="text-white tracking-tight leading-[1.08] font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                Drive Your Journey,{' '}
                <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-light via-sky-200 to-leaf">
                  Pay Zero Petrol.
                </span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                India's commercial electric scooter rental platform built for delivery heroes and commuters. Swap batteries in 2 minutes at city hubs and keep 100% of your earnings.
              </p>
            </div>

            {/* 3 DriveX-Style Horizontal Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 border-t border-navy-800/80">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-text-dark-muted">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-white block leading-tight">Zero Fuel Expense</span>
                  <span className="text-[11px] text-slate-400">Unlimited Hub Swaps</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-text-dark-muted">
                <div className="w-8 h-8 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-light flex items-center justify-center shrink-0">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-white block leading-tight">Zero Maintenance</span>
                  <span className="text-[11px] text-slate-400">Free Hub Servicing</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-text-dark-muted">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-white block leading-tight">24/7 Road Helpline</span>
                  <span className="text-[11px] text-slate-400">Instant SOS Backup</span>
                </div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex items-center gap-3.5 flex-wrap pt-2">
              <Link to="/pricing" className="btn-primary !min-h-[46px] !px-6 text-sm font-bold shadow-lg shadow-royal/40">
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
                className="btn-secondary-dark !min-h-[46px] !px-5 text-sm font-bold border-white/30 hover:border-white cursor-pointer"
              >
                <Play className="w-4 h-4 text-leaf fill-leaf" />
                <span>Watch Video Tour</span>
              </button>
            </div>
          </div>

          {/* ------------------------------------------------------ */}
          {/* RIGHT: ONLY TEZZEV SCOOTER POSTER (Matching DriveX Car)*/}
          {/* ------------------------------------------------------ */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative select-none">
            {/* Scenic Vehicle Stage */}
            <div className="relative w-full max-w-[540px] aspect-[4/3] flex items-center justify-center">
              {/* Radial Glowing Ground Reflection (DriveX Car Lighting) */}
              <div className="absolute inset-x-6 bottom-4 h-28 bg-radial from-royal/50 via-blue-600/20 to-transparent rounded-full blur-2xl pointer-events-none transform scale-y-50" />
              <div className="absolute bottom-6 w-3/4 h-8 bg-blue-500/30 rounded-full blur-xl pointer-events-none" />

              {/* Crisp High-Res Scooter Showcase Poster */}
              <div className="relative z-10 w-full flex items-center justify-center group">
                <img
                  src="/images/scooter-hero.png"
                  alt="TezzEV High Performance Electric Delivery Scooter"
                  className="w-full max-w-[460px] h-auto object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-103"
                />

                {/* Center Play Button Overlay on Scooter */}
                <button
                  onClick={() =>
                    openVideoModal({
                      src: siteConfig.videos.heroBg.src,
                      title: 'TezzEV Official Ride Experience',
                      poster: '/images/poster-1.jpg',
                    })
                  }
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-royal/90 hover:bg-royal text-white flex items-center justify-center shadow-2xl border-2 border-white/60 transition-transform duration-200 hover:scale-115 cursor-pointer z-30"
                  aria-label="Play Tour Video"
                >
                  <Play className="w-5 h-5 fill-current ml-0.5 text-white" />
                </button>

                {/* Top-Right Floating Spec Pill: Rapid Swap */}
                <div className="absolute -top-1 right-2 sm:right-4 z-20 px-3.5 py-2 rounded-2xl bg-navy-950/90 backdrop-blur-md border border-white/20 shadow-xl text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                    Rapid Swap
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-white">
                    2-Minute Battery Bay
                  </span>
                </div>

                {/* Bottom-Left Floating Spec Pill: Range */}
                <div className="absolute bottom-4 left-2 sm:left-4 z-20 px-3.5 py-2 rounded-2xl bg-navy-950/90 backdrop-blur-md border border-white/20 shadow-xl text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-light block">
                    Full Shift Range
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-white">
                    100+ km / Charge
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. DRIVEX-STYLE OVERLAPPING FLOATING RENTAL SEARCH WIDGET*/}
      {/* ======================================================== */}
      <div className="container-custom relative -mb-16 sm:-mb-24 z-30 pt-6">
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-200/90 text-navy-950">
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
          <form onSubmit={handleSearchScooters} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 items-end">
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
