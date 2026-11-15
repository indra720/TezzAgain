import React, { useState, useEffect } from 'react';
import {
  Zap,
  Wrench,
  BatteryCharging,
  Headphones,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  RotateCw,
  Play,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { VideoCard } from '../ui/VideoCard';
import { Link } from 'react-router-dom';

interface FeatureBenefit {
  id: string;
  index: number;
  icon: React.ElementType;
  title: string;
  badge: string;
  stat: string;
  desc: string;
  highlight: string;
  color: string;
  videoSrc: string;
  poster: string;
}

const benefitsData: FeatureBenefit[] = [
  {
    id: 'petrol',
    index: 0,
    icon: Zap,
    title: 'Zero Petrol Cost',
    badge: '100% Fuel Free',
    stat: 'Save ₹6,000/mo',
    desc: 'Eliminate daily petrol spending completely. Keep 100% of your delivery earnings as pure profit.',
    highlight: 'Save ₹4,000 to ₹6,000+ every month',
    color: '#38BDF8', // Sky/cyan
    videoSrc: '/videos/tezz-video-4.mp4',
    poster: '/images/poster-2.jpg',
  },
  {
    id: 'maintenance',
    index: 1,
    icon: Wrench,
    title: 'Free Hub Maintenance',
    badge: '100% Covered',
    stat: '₹0 Repair Bills',
    desc: 'Routine servicing, brake pad replacements, motor checks, and tyre wear are covered for free at TezzEV Hubs.',
    highlight: 'Zero surprise repair bills',
    color: '#4ADE80', // Leaf green
    videoSrc: '/videos/tezz-video-1.mp4',
    poster: '/images/poster-1.jpg',
  },
  {
    id: 'swap',
    index: 2,
    icon: BatteryCharging,
    title: '2-Minute Battery Swap',
    badge: 'Zero Waiting',
    stat: 'Instant Swap',
    desc: 'Never wait hours for charging. Simply ride into any city hub and swap for fully charged dual batteries in 2 minutes.',
    highlight: 'Unlimited swaps on weekly & monthly plans',
    color: '#FACC15', // Amber gold
    videoSrc: '/videos/tezz-video-3.mp4',
    poster: '/images/poster-3.jpg',
  },
  {
    id: 'support',
    index: 3,
    icon: Headphones,
    title: '24/7 Roadside Assist',
    badge: 'Rider Helpline',
    stat: 'Always Backed',
    desc: 'Puncture or vehicle snag on shift? Our mobile assistance team reaches your location with a replacement scooter.',
    highlight: 'Zero lost delivery shifts',
    color: '#C084FC', // Purple
    videoSrc: '/videos/tezz-video-2.mp4',
    poster: '/images/poster-4.jpg',
  },
  {
    id: 'kyc',
    index: 4,
    icon: FileCheck,
    title: 'Paperless 2-Min KYC',
    badge: 'Digital Approval',
    stat: 'Instant Onboarding',
    desc: 'No complicated paperwork or high credit scores needed. Simple Aadhaar and DL approval done completely online.',
    highlight: 'Pick up your vehicle same day',
    color: '#2DD4BF', // Teal
    videoSrc: '/videos/tezz-video-3.mp4',
    poster: '/images/poster-3.jpg',
  },
];

export const WhyChooseHub: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAutoSpinning, setIsAutoSpinning] = useState<boolean>(false);

  const totalItems = benefitsData.length;
  const angleStep = 360 / totalItems; // 72 degrees

  // Auto spin timer (can be toggled or paused on hover)
  useEffect(() => {
    if (!isAutoSpinning) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalItems);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoSpinning, totalItems]);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const selectedBenefit = benefitsData[activeIndex];

  // Rotation angle: rotate so the active node spins facing the video on the right (0 deg)
  const currentRotation = -activeIndex * angleStep;

  return (
    <div className="w-full space-y-6">
      {/* Top Header */}
      <div className="text-center max-w-2xl mx-auto space-y-1.5">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-light flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-blue-light" />
          Rider First Benefits
        </span>
        <h2 className="text-white mt-1 mb-1">
          Why choose <span className="text-blue-light">TezzEV</span>
        </h2>
        <p className="text-text-dark-muted text-sm sm:text-base">
          Interactive orbital ecosystem — spin the circle or tap any benefit to watch the video proof in action.
        </p>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center bg-navy-900/60 p-5 sm:p-8 rounded-3xl border border-navy-800 shadow-2xl backdrop-blur-sm">
        {/* Left Side: Circular Orbital Wheel (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center space-y-5">
          {/* Wheel Instructions & Mobile Pills */}
          <div className="w-full flex items-center justify-between gap-2 px-1">
            <span className="text-xs text-blue-light font-bold uppercase tracking-wider flex items-center gap-1.5">
              <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
              Spin &amp; Choose Benefit
            </span>

            {/* Spin Controls */}
            <div className="flex items-center gap-1.5 bg-navy-950/80 p-1 rounded-xl border border-navy-800">
              <button
                onClick={goToPrev}
                className="w-7 h-7 rounded-lg bg-navy-800 hover:bg-royal text-white flex items-center justify-center transition-colors"
                aria-label="Previous Benefit"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={goToNext}
                className="w-7 h-7 rounded-lg bg-navy-800 hover:bg-royal text-white flex items-center justify-center transition-colors"
                aria-label="Next Benefit"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsAutoSpinning((v) => !v)}
                className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-colors ${
                  isAutoSpinning
                    ? 'bg-royal/30 text-blue-light border border-royal/40'
                    : 'bg-navy-900 text-slate-400 hover:text-white'
                }`}
              >
                {isAutoSpinning ? 'Auto: ON' : 'Auto: OFF'}
              </button>
            </div>
          </div>

          {/* CIRCULAR ORBITAL WHEEL CONTAINER */}
          <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] flex items-center justify-center select-none">
            {/* Outer Decorative Glow */}
            <div className="absolute inset-4 rounded-full bg-royal/10 blur-2xl pointer-events-none" />

            {/* Orbit Track 1 (Outer Dashed Ring) */}
            <div className="absolute inset-0 rounded-full border border-dashed border-blue-500/25 pointer-events-none" />

            {/* Orbit Track 2 (Middle Orbit Ring) */}
            <div className="absolute inset-8 sm:inset-10 rounded-full border border-blue-400/20 pointer-events-none" />

            {/* Orbit Track 3 (Inner Orbit Ring) */}
            <div className="absolute inset-16 sm:inset-20 rounded-full border border-dashed border-blue-400/15 pointer-events-none" />

            {/* Directional Beam towards Video Card on the Right (Active indicator) */}
            <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-royal to-transparent pointer-events-none" />

            {/* Center Core Circle (Zypp-style Meter / Hub) */}
            <div className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-gradient-to-b from-navy-900 via-navy-950 to-navy-900 border-2 border-royal/60 shadow-xl shadow-royal/20 flex flex-col items-center justify-center text-center p-2">
              {/* Circular Glowing Arc */}
              <div className="absolute -inset-1 rounded-full border-2 border-dashed border-blue-light/40 animate-spin-slow pointer-events-none" />

              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-royal/30 text-blue-light flex items-center justify-center mb-1">
                <Zap className="w-4 h-4 text-blue-light fill-blue-light/30" />
              </div>
              <span className="text-base sm:text-xl md:text-2xl font-black text-white font-heading leading-tight">
                100%
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-blue-light uppercase tracking-wider">
                Electric Fleet
              </span>
              <span className="text-[9px] sm:text-[10px] text-leaf font-semibold mt-0.5">
                Save ₹6k/mo
              </span>
            </div>

            {/* ROTATING ORBITAL PLANE WITH 5 NODES */}
            <motion.div
              animate={{ rotate: currentRotation }}
              transition={{ type: 'spring', stiffness: 55, damping: 15 }}
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              {benefitsData.map((benefit, i) => {
                const isActive = i === activeIndex;
                const IconComp = benefit.icon;
                const baseAngleDeg = i * angleStep;
                const rad = (baseAngleDeg * Math.PI) / 180;

                // 40% radius offset from center (fluid across all screen sizes)
                const xPercent = Math.cos(rad) * 40;
                const yPercent = Math.sin(rad) * 40;

                return (
                  <div
                    key={benefit.id}
                    style={{
                      left: `calc(50% + ${xPercent}%)`,
                      top: `calc(50% + ${yPercent}%)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className="absolute pointer-events-auto"
                  >
                    {/* Counter-rotate inner node so icons and text remain upright! */}
                    <motion.div
                      animate={{
                        rotate: -currentRotation,
                        scale: isActive ? 1.25 : 1,
                      }}
                      transition={{ type: 'spring', stiffness: 70, damping: 14 }}
                      onClick={() => setActiveIndex(i)}
                      className={`relative cursor-pointer transition-shadow rounded-2xl flex items-center justify-center ${
                        isActive
                          ? 'w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-royal via-blue to-navy-900 border-2 border-white ring-4 ring-royal/50 shadow-2xl shadow-royal/60 z-30'
                          : 'w-11 h-11 sm:w-13 sm:h-13 bg-navy-950/90 border border-navy-700/80 hover:border-royal/60 shadow-lg hover:scale-105 opacity-80 hover:opacity-100 z-20'
                      }`}
                      title={benefit.title}
                    >
                      <IconComp
                        className={`transition-colors ${
                          isActive
                            ? 'w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-md'
                            : 'w-5 h-5 text-slate-300'
                        }`}
                      />

                      {/* Active Label Badge Floating Beside Node */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -bottom-7 whitespace-nowrap px-2.5 py-0.5 rounded-full bg-navy-950/95 border border-royal text-[10px] font-bold text-white shadow-lg pointer-events-none z-40"
                        >
                          {benefit.title}
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Quick Direct Node Selector Pills (Mobile Friendly) */}
          <div className="w-full flex items-center justify-center gap-1.5 flex-wrap pt-2">
            {benefitsData.map((benefit, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={benefit.id}
                  onClick={() => setActiveIndex(i)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-royal text-white shadow-md shadow-royal/30 scale-105'
                      : 'bg-navy-950/80 text-slate-400 border border-navy-800 hover:text-white'
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: benefit.color }}
                  />
                  <span>{benefit.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Synchronized Jumping Video Card & Details (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4">
          <div className="w-full max-w-sm">
            {/* Animated Jumping Video Card Container */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedBenefit.id}
                initial={{ opacity: 0, scale: 0.88, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-royal/60 bg-navy-950 group"
              >
                {/* Active Corner Badge */}
                <div className="absolute top-3 left-3 z-30 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-navy-950/90 backdrop-blur-md border border-royal/40 text-[11px] font-bold text-blue-light shadow-md">
                    {selectedBenefit.badge}
                  </span>
                </div>

                <VideoCard
                  src={selectedBenefit.videoSrc}
                  title={`TezzEV: ${selectedBenefit.title}`}
                  poster={selectedBenefit.poster}
                  aspect="square"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Benefit Narrative Details */}
          <div className="text-center space-y-2 max-w-sm w-full">
            <div className="flex items-center justify-center gap-2">
              <h3 className="font-heading font-bold text-white text-base sm:text-lg">
                {selectedBenefit.title}
              </h3>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-leaf/20 text-leaf font-bold border border-leaf/30">
                {selectedBenefit.stat}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-text-dark-muted leading-relaxed">
              {selectedBenefit.desc}
            </p>

            <div className="pt-1 flex items-center justify-center gap-1.5 text-xs text-leaf font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-leaf shrink-0" />
              <span>{selectedBenefit.highlight}</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-3 pt-2">
            <Link
              to="/waitlist"
              className="btn-primary !min-h-[40px] !text-xs font-bold shadow-lg shadow-royal/30"
            >
              <span>Join Launch Waitlist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={goToNext}
              className="px-3.5 py-2 rounded-xl bg-navy-800 hover:bg-navy-700 text-blue-light text-xs font-bold flex items-center gap-1.5 transition-colors border border-navy-700"
            >
              <span>Next Point</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
