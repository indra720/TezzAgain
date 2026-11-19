import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  TrendingDown,
  Wrench,
  ShieldCheck,
  ArrowRight,
  Play,
  Sparkles,
  MapPin,
  CheckCircle2,
  Phone,
  Bike,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { useVideoModal } from '../ui/VideoContext';
import { siteConfig } from '../../lib/config';
import { toast } from 'sonner';

export const ModernHeroSection: React.FC = () => {
  const { openVideoModal } = useVideoModal();
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedCity, setSelectedCity] = useState<'Indore' | 'Bhopal'>('Indore');
  const [userRole, setUserRole] = useState<'delivery' | 'personal'>('delivery');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [heroView, setHeroView] = useState<'scooter' | 'video'>('scooter');
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  const handleQuickJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobileNumber.trim()) {
      toast.error('Please enter your 10-digit mobile number.');
      return;
    }
    if (!/^\d{10}$/.test(mobileNumber.trim())) {
      toast.error('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        `Priority spot reserved for ${mobileNumber} in ${selectedCity}! We will contact you for vehicle handover.`,
        { duration: 5000 }
      );
      setMobileNumber('');
    }, 800);
  };

  const toggleVideoSound = () => {
    if (!heroVideoRef.current) return;
    heroVideoRef.current.muted = !heroVideoRef.current.muted;
    setIsVideoMuted(heroVideoRef.current.muted);
  };

  return (
    <section className="relative bg-gradient-to-b from-[#040C22] via-[#06122E] to-[#0A1A46] text-white pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 overflow-hidden">
      {/* 1. Subtle High-Tech Background Motion & Light Cones */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Soft Radial Ambient Glow Centers */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-royal/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 translate-x-1/3 w-[550px] h-[550px] bg-blue-500/15 rounded-full blur-[160px]" />
        {/* Digital Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container-custom relative z-10 w-full space-y-8 sm:space-y-10">
        {/* ======================================================== */}
        {/* MAIN SPLIT STAGE: Left Copy + Right Interactive Showcase */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* -------------------------------------------------------- */}
          {/* LEFT COLUMN: Punchy Copy + 10-Sec Quick Onboarding Bar */}
          {/* -------------------------------------------------------- */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
            {/* Live Fleet Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-royal/40 text-xs font-semibold shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-white font-bold tracking-wide">
                First Fleet Batch Rolling Out
              </span>
              <span className="text-blue-light font-medium">
                • {siteConfig.launchCity}
              </span>
            </div>

            {/* Jaw-Dropping Bold Headline */}
            <div className="space-y-2">
              <h1 className="text-white tracking-tight leading-[1.08] font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                Zero Petrol.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-leaf">
                  Double Earning.
                </span>{' '}
                <br />
                Ab Sheher Chalega{' '}
                <span className="text-blue-light inline-block">TEZZ.</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl pt-1">
                India's high-performance electric scooter rental for delivery partners. Swap batteries in 2 minutes at city hubs, eliminate fuel bills completely, and take home 100% pure profit.
              </p>
            </div>

            {/* ------------------------------------------------------ */}
            {/* 10-SECOND INSTANT RIDER ONBOARDING KIOSK (In-Hero Form) */}
            {/* ------------------------------------------------------ */}
            <div className="p-4 sm:p-5 rounded-3xl bg-navy-900/80 backdrop-blur-xl border border-white/15 shadow-2xl space-y-3.5 max-w-xl">
              <div className="flex items-center justify-between gap-2 border-b border-navy-800 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-leaf"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Book Priority Launch Scooter
                  </span>
                </div>
                {/* City Radio Pills */}
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-navy-950/80 border border-navy-800 text-[11px] font-bold">
                  {(['Indore', 'Bhopal'] as const).map((city) => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => setSelectedCity(city)}
                      className={`px-2.5 py-0.5 rounded-lg transition-all cursor-pointer ${
                        selectedCity === city
                          ? 'bg-royal text-white shadow-xs'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Input Row */}
              <form onSubmit={handleQuickJoin} className="space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                  {/* Phone Input with +91 */}
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-xs sm:text-sm font-bold">
                      <span>+91</span>
                      <span className="ml-2 w-px h-4 bg-slate-700"></span>
                    </div>
                    <input
                      type="tel"
                      maxLength={10}
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      placeholder="Enter 10-digit Mobile No."
                      className="w-full pl-15 pr-3 py-3 rounded-2xl bg-navy-950/90 border border-slate-700 focus:border-royal focus:ring-2 focus:ring-royal/30 text-white placeholder-slate-500 text-sm font-semibold tracking-wide transition-all outline-hidden"
                    />
                  </div>

                  {/* Submit CTA Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary !min-h-[46px] sm:!min-h-[auto] justify-center px-5 text-xs sm:text-sm font-bold shadow-lg shadow-royal/40 whitespace-nowrap cursor-pointer active:scale-95 transition-transform"
                  >
                    <span>{isSubmitting ? 'Reserving...' : 'Get Priority Ride'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Purpose Pills & Trust Guarantee */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5 text-[11px] text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setUserRole('delivery')}
                      className={`px-2.5 py-1 rounded-lg border text-[11px] font-semibold transition-all ${
                        userRole === 'delivery'
                          ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300'
                          : 'border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      🛵 Delivery Partner (Zomato/Swiggy)
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserRole('personal')}
                      className={`px-2.5 py-1 rounded-lg border text-[11px] font-semibold transition-all ${
                        userRole === 'personal'
                          ? 'bg-blue-500/20 border-blue-400/50 text-blue-light'
                          : 'border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      🏢 Daily Office Commute
                    </button>
                  </div>

                  <span className="inline-flex items-center gap-1 text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>₹0 Deposit • Digital KYC</span>
                  </span>
                </div>
              </form>
            </div>

            {/* Approved Platform Badges */}
            <div className="pt-1 flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Ready for India's Top Apps:</span>
              {['Zomato', 'Swiggy', 'Blinkit', 'Zepto', 'BigBasket'].map((brand, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-navy-900/60 border border-navy-800 text-white font-bold text-[11px]"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* RIGHT COLUMN: 3D Scooter Stage with 3 Floating Glass Cards */}
          {/* -------------------------------------------------------- */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative select-none">
            {/* View Mode Toggle: 3D Stage vs Live Video */}
            <div className="mb-3 flex items-center p-1 rounded-2xl bg-navy-900/80 backdrop-blur-md border border-white/10 z-20">
              <button
                onClick={() => setHeroView('scooter')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  heroView === 'scooter'
                    ? 'bg-royal text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Bike className="w-3.5 h-3.5" />
                <span>3D Scooter Showcase</span>
              </button>
              <button
                onClick={() => setHeroView('video')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  heroView === 'video'
                    ? 'bg-royal text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Live Action Ride Video</span>
              </button>
            </div>

            {/* Stage Container */}
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              {/* Radial Glowing Stage Podium Floor */}
              <div className="absolute inset-x-8 bottom-6 h-28 bg-radial from-royal/50 via-blue-600/20 to-transparent rounded-full blur-2xl pointer-events-none transform scale-y-50" />
              <div className="absolute bottom-10 w-3/4 h-8 bg-blue-500/30 rounded-full blur-xl pointer-events-none" />

              {/* VIEW 1: Photorealistic Scooter Showcase */}
              {heroView === 'scooter' ? (
                <div className="relative z-10 w-full flex items-center justify-center group animate-fade-in">
                  {/* High-Resolution Cutout Scooter */}
                  <img
                    src="/images/scooter-hero.png"
                    alt="TezzEV High Performance Electric Delivery Scooter"
                    className="w-full max-w-[420px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(22,71,232,0.45)] transition-transform duration-500 group-hover:scale-103"
                  />

                  {/* Center Play Button Overlay to trigger full modal */}
                  <button
                    onClick={() =>
                      openVideoModal({
                        src: siteConfig.videos.heroBg.src,
                        title: 'TezzEV Official Ride Experience & Scooter Walkaround',
                        poster: '/images/poster-1.jpg',
                      })
                    }
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-royal/90 hover:bg-royal text-white flex items-center justify-center shadow-2xl border-2 border-white/60 transition-transform duration-200 hover:scale-115 cursor-pointer z-30"
                    aria-label="Play Scooter Tour Video"
                  >
                    <Play className="w-5 h-5 fill-current ml-0.5 text-white" />
                  </button>

                  {/* Floating Glass Badge 1: Top Right (2-Min Rapid Swap) */}
                  <div className="absolute -top-1 right-2 sm:right-4 z-20 p-2.5 sm:p-3 rounded-2xl bg-navy-950/85 backdrop-blur-md border border-white/20 shadow-xl max-w-[180px] sm:max-w-[200px] text-left transform hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-1.5 text-emerald-400 mb-0.5">
                      <Zap className="w-4 h-4 fill-emerald-400" />
                      <span className="text-xs font-black uppercase tracking-tight text-white">
                        2-Min Rapid Swap
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-slate-300 leading-snug">
                      Swap packs in 120s at Indore &amp; Bhopal hubs. Never wait for slow charging.
                    </p>
                  </div>

                  {/* Floating Glass Badge 2: Mid Left (₹8,500 Saved) */}
                  <div className="absolute top-1/3 -left-2 sm:-left-4 z-20 p-2.5 sm:p-3 rounded-2xl bg-navy-950/85 backdrop-blur-md border border-white/20 shadow-xl max-w-[170px] sm:max-w-[190px] text-left transform hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-1.5 text-sky-300 mb-0.5">
                      <TrendingDown className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-black uppercase tracking-tight text-white">
                        ₹8,500+ / Mo Saved
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-slate-300 leading-snug">
                      Zero petrol bills. Keep 100% of delivery earnings as take-home profit.
                    </p>
                  </div>

                  {/* Floating Glass Badge 3: Bottom Right (Free Maintenance) */}
                  <div className="absolute bottom-4 right-2 sm:right-6 z-20 p-2.5 sm:p-3 rounded-2xl bg-navy-950/85 backdrop-blur-md border border-white/20 shadow-xl max-w-[180px] sm:max-w-[200px] text-left transform hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-1.5 text-amber-300 mb-0.5">
                      <Wrench className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-black uppercase tracking-tight text-white">
                        Free Hub Care
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-slate-300 leading-snug">
                      Complete brake, tyre &amp; electrical service included at zero extra cost.
                    </p>
                  </div>
                </div>
              ) : (
                /* VIEW 2: Live Video Reel Stage */
                <div className="relative z-10 w-full max-w-[420px] aspect-[9/14] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black animate-fade-in group">
                  <video
                    ref={heroVideoRef}
                    src={siteConfig.videos.heroBg.src}
                    autoPlay
                    loop
                    muted={isVideoMuted}
                    playsInline
                    poster="/images/poster-1.jpg"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Sound Toggle */}
                  <button
                    onClick={toggleVideoSound}
                    className="absolute top-3.5 right-3.5 z-20 p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-black/90 transition-colors cursor-pointer"
                    aria-label="Toggle Sound"
                  >
                    {isVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                  </button>

                  {/* Bottom Caption inside Video */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 text-left text-white flex items-end justify-between">
                    <div>
                      <span className="text-xs font-bold block">TezzEV Scooter Live Shift</span>
                      <span className="text-[11px] text-slate-300">Recorded on Indore streets</span>
                    </div>
                    <button
                      onClick={() =>
                        openVideoModal({
                          src: siteConfig.videos.heroBg.src,
                          title: 'TezzEV Official Ride Experience',
                          poster: '/images/poster-1.jpg',
                        })
                      }
                      className="px-3 py-1.5 rounded-xl bg-royal text-white text-xs font-bold flex items-center gap-1 shadow-md hover:bg-blue-600 transition-colors"
                    >
                      <span>Fullscreen</span>
                      <Play className="w-3 h-3 fill-current" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* LIVE NETWORK TICKER BAR (Hero Bottom Energy Strip) */}
        {/* ======================================================== */}
        <div className="pt-2">
          <div className="p-3 sm:p-4 rounded-2xl bg-navy-900/60 backdrop-blur-md border border-navy-800 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-navy-800 text-center">
              <div className="flex flex-col items-center justify-center space-y-0.5">
                <span className="text-xs font-bold uppercase text-emerald-400 tracking-wider flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Indore Metro Hubs</span>
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-semibold">
                  Vijay Nagar • Palasia • Bhawarkua
                </span>
              </div>

              <div className="flex flex-col items-center justify-center space-y-0.5 pt-2 sm:pt-0">
                <span className="text-xs font-bold uppercase text-emerald-400 tracking-wider flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Bhopal Metro Hubs</span>
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-semibold">
                  MP Nagar Zone-1 • New Market
                </span>
              </div>

              <div className="flex flex-col items-center justify-center space-y-0.5 pt-2 sm:pt-0">
                <span className="text-xs font-bold uppercase text-blue-light tracking-wider flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-leaf" />
                  <span>Rapid Battery Swaps</span>
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-semibold">
                  Under 2 Mins • Unlimited Per Day
                </span>
              </div>

              <div className="flex flex-col items-center justify-center space-y-0.5 pt-2 sm:pt-0">
                <span className="text-xs font-bold uppercase text-blue-light tracking-wider flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-leaf" />
                  <span>Commercial Ready</span>
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-semibold">
                  RTO Approved • Dual Rear Shocks
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
