import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Zap,
  Leaf,
  Flag,
  MessageSquare,
  BatteryCharging,
  Wrench,
  CheckCircle2,
  Play,
  RotateCw,
  Navigation,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVideoModal } from '../ui/VideoContext';
import { VideoCard } from '../ui/VideoCard';

interface MetricPill {
  id: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  title: string;
  highlight: string;
  tag: string;
  desc: string;
  videoSrc: string;
  poster: string;
}

const metrics: MetricPill[] = [
  {
    id: 'deliveries',
    icon: MessageSquare,
    iconBg: 'bg-rose-50 border-rose-200',
    iconColor: 'text-rose-600',
    title: '50 Lakh+ Deliveries',
    highlight: 'Done with our EVs',
    tag: 'Zomato • Swiggy • Blinkit',
    desc: 'Powering high-frequency gig deliveries across Indore & Bhopal with zero breakdown disruptions.',
    videoSrc: '/videos/tezz-video-4.mp4',
    poster: '/images/poster-2.jpg',
  },
  {
    id: 'impact',
    icon: Flag,
    iconBg: 'bg-emerald-50 border-emerald-200',
    iconColor: 'text-emerald-600',
    title: '₹0 Petrol Expense',
    highlight: 'Save up to ₹6,000 / mo',
    tag: 'Daily Rider Impact',
    desc: 'Eliminate petrol bills completely. Delivery partners keep 100% of their trip fares as take-home profit.',
    videoSrc: '/videos/tezz-video-1.mp4',
    poster: '/images/poster-1.jpg',
  },
  {
    id: 'carbon',
    icon: Leaf,
    iconBg: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600',
    title: '150+ Tonnes CO₂ Cut',
    highlight: 'Green & Sustainable',
    tag: 'Clean City Air',
    desc: 'Every kilometer ridden on a TezzEV keeps toxic tailpipe smoke and fumes out of city streets.',
    videoSrc: '/videos/tezz-video-2.mp4',
    poster: '/images/poster-4.jpg',
  },
  {
    id: 'swap',
    icon: BatteryCharging,
    iconBg: 'bg-blue-50 border-blue-200',
    iconColor: 'text-royal',
    title: '2-Min Battery Swap',
    highlight: 'Instant Power at Hubs',
    tag: 'Zero Charging Delay',
    desc: 'Ride into any TezzEV Hub and exchange depleted batteries for 100% fully charged packs in 2 minutes.',
    videoSrc: '/videos/tezz-video-3.mp4',
    poster: '/images/poster-3.jpg',
  },
];

// Rider avatar circles along the orbit track
const riderAvatars = [
  { top: '16%', left: '38%', label: 'Indore Pilot' },
  { top: '42%', right: '22%', label: 'Bhopal Pilot' },
  { bottom: '12%', left: '46%', label: 'Zepto Rider' },
];

export const WhyChooseHub: React.FC = () => {
  const [activeMetricId, setActiveMetricId] = useState<string>('impact');
  const [viewMode, setViewMode] = useState<'orbit' | 'video'>('orbit');
  const { openVideoModal } = useVideoModal();

  const activeMetric = metrics.find((m) => m.id === activeMetricId) || metrics[0];

  // Auto-cycle through metrics gently every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMetricId((prev) => {
        const currentIndex = metrics.findIndex((m) => m.id === prev);
        const nextIndex = (currentIndex + 1) % metrics.length;
        return metrics[nextIndex].id;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full space-y-6 sm:space-y-8 pt-2 sm:pt-4">
      {/* 1. Header (Centered, clean white aesthetic directly like Zypp) */}
      <div className="text-center max-w-3xl mx-auto space-y-3 px-2">
        <h2 className="text-navy-950 font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight">
          Why Will You Choose <span className="text-royal">TezzEV</span>
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          TezzEV is Madhya Pradesh's leading EV Rental platform, offering electric scooters on rent that reduce pollution, save fuel costs, and boost your daily earnings. Every ride you take helps make India cleaner, greener, and more sustainable.
        </p>

        {/* View Switcher Toggle Pill with proper spacing & Vector Icons (No Emojis) */}
        <div className="pt-1">
          <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-slate-100 border border-slate-200 shadow-inner">
            <button
              onClick={() => setViewMode('orbit')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === 'orbit'
                  ? 'bg-white text-navy-950 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-navy-950'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-royal" />
              <span>Orbit Infographic</span>
            </button>
            <button
              onClick={() => setViewMode('video')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === 'video'
                  ? 'bg-royal text-white shadow-sm'
                  : 'text-slate-600 hover:text-navy-950'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Watch Video Reels</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Container (Crisp White, Shadow-xl, Border-slate-200) */}
      <div className="bg-white rounded-3xl p-4 sm:p-8 md:p-12 border border-slate-200/90 shadow-xl">
        {viewMode === 'orbit' ? (
          /* ============================================================== */
          /* ZYPP-STYLE CIRCULAR ORBIT VIEW (Desktop & Mobile Responsive)   */
          /* ============================================================== */
          <div className="space-y-6 sm:space-y-8">
            {/* Desktop / Tablet: Centered Orbit Stage */}
            <div className="hidden md:block relative w-full max-w-4xl mx-auto h-[480px]">
              {/* Outer Dashed Orbit Circle */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto w-[460px] h-[460px] rounded-full border-2 border-dashed border-slate-200 pointer-events-none" />

              {/* Inner Dashed Orbit Circle */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto w-[320px] h-[320px] rounded-full border border-dashed border-slate-200/80 pointer-events-none" />

              {/* CENTER CIRCLE: Zypp Bold Active Riders Circular Progress Arc */}
              <div className="absolute inset-0 m-auto w-52 h-52 rounded-full flex flex-col items-center justify-center text-center z-10 pointer-events-none">
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 160 160">
                  <circle
                    cx="80"
                    cy="80"
                    r="68"
                    stroke="#E2E8F0"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="68"
                    stroke="#00D084"
                    strokeWidth="11"
                    strokeDasharray="427"
                    strokeDashoffset="110"
                    strokeLinecap="round"
                    fill="none"
                    className="transition-all duration-700"
                  />
                </svg>

                <div className="relative z-10 space-y-0.5">
                  <span className="text-3xl lg:text-4xl font-black text-navy-950 font-heading tracking-tight block">
                    20k+
                  </span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Active Riders
                  </span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 inline-block mt-1">
                    Madhya Pradesh
                  </span>
                </div>
              </div>

              {/* Floating Rider Avatars on Orbit */}
              {riderAvatars.map((avatar, idx) => (
                <div
                  key={idx}
                  style={{
                    top: avatar.top,
                    left: avatar.left,
                    right: avatar.right,
                    bottom: avatar.bottom,
                  }}
                  className="absolute z-20 hidden md:flex items-center gap-1.5 p-1 rounded-full bg-white shadow-md border border-slate-200 animate-pulse pointer-events-none"
                >
                  <div className="w-8 h-8 rounded-full bg-royal text-white font-bold text-xs flex items-center justify-center shadow-sm">
                    <Navigation className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              ))}

              {/* 4 Floating Cards Positioned Around Center Circle (Like Zypp) */}
              {/* Card 1: Top-Right (Impact) */}
              <div
                onClick={() => setActiveMetricId('impact')}
                className={`absolute top-4 right-4 lg:right-10 z-30 cursor-pointer p-4 rounded-2xl bg-white border transition-all duration-200 max-w-[260px] ${
                  activeMetricId === 'impact'
                    ? 'border-2 border-emerald-500 shadow-xl scale-105'
                    : 'border-slate-200 hover:border-slate-300 shadow-md hover:scale-102'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-600">
                    <Flag className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-950 leading-snug">
                      ₹0 Petrol Expense
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">
                      Save ₹6,000 / mo
                    </p>
                    <span className="text-[10px] text-emerald-700 font-bold mt-1 inline-block">
                      Daily Rider Impact
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Left (Deliveries) */}
              <div
                onClick={() => setActiveMetricId('deliveries')}
                className={`absolute top-1/2 -translate-y-1/2 left-2 lg:left-6 z-30 cursor-pointer p-4 rounded-2xl bg-white border transition-all duration-200 max-w-[260px] ${
                  activeMetricId === 'deliveries'
                    ? 'border-2 border-rose-500 shadow-xl scale-105'
                    : 'border-slate-200 hover:border-slate-300 shadow-md hover:scale-102'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 text-rose-600">
                    <MessageSquare className="w-4 h-4 fill-rose-600 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-950 leading-snug">
                      50 Lakh+ Deliveries
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">
                      Done with our EVs
                    </p>
                    <span className="text-[10px] text-slate-400 font-semibold mt-1 inline-block">
                      Nov 2026
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3: Bottom-Right (Carbon) */}
              <div
                onClick={() => setActiveMetricId('carbon')}
                className={`absolute bottom-6 right-6 lg:right-12 z-30 cursor-pointer p-4 rounded-2xl bg-white border transition-all duration-200 max-w-[260px] ${
                  activeMetricId === 'carbon'
                    ? 'border-2 border-amber-500 shadow-xl scale-105'
                    : 'border-slate-200 hover:border-slate-300 shadow-md hover:scale-102'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 text-amber-600">
                    <Leaf className="w-4 h-4 fill-amber-600 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-950 leading-snug">
                      150+ Tonnes CO₂ Cut
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">
                      Cleaner City Air
                    </p>
                    <span className="text-[10px] text-amber-700 font-bold mt-1 inline-block">
                      Certified Impact
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 4: Bottom-Left (Battery Swap) */}
              <div
                onClick={() => setActiveMetricId('swap')}
                className={`absolute bottom-4 left-10 lg:left-16 z-30 cursor-pointer p-4 rounded-2xl bg-white border transition-all duration-200 max-w-[260px] ${
                  activeMetricId === 'swap'
                    ? 'border-2 border-royal shadow-xl scale-105'
                    : 'border-slate-200 hover:border-slate-300 shadow-md hover:scale-102'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 text-royal">
                    <BatteryCharging className="w-4 h-4 text-royal" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-950 leading-snug">
                      2-Min Battery Swap
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">
                      Zero Waiting at Hubs
                    </p>
                    <span className="text-[10px] text-royal font-bold mt-1 inline-block">
                      Instant Power
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile View: Clean Centered Stack (No Overlap) */}
            <div className="block md:hidden space-y-4">
              {/* Center Circle on Mobile */}
              <div className="relative w-40 h-40 mx-auto rounded-full flex flex-col items-center justify-center text-center">
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 160 160">
                  <circle cx="80" cy="80" r="68" stroke="#E2E8F0" strokeWidth="10" fill="none" />
                  <circle
                    cx="80" cy="80" r="68"
                    stroke="#00D084"
                    strokeWidth="11"
                    strokeDasharray="427"
                    strokeDashoffset="110"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <div className="relative z-10 space-y-0.5">
                  <span className="text-2xl font-black text-navy-950 font-heading">
                    20k+
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide block">
                    Active Riders
                  </span>
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 inline-block">
                    MP Fleet
                  </span>
                </div>
              </div>

              {/* 4 Cards Grid on Mobile */}
              <div className="grid grid-cols-1 gap-2.5">
                {metrics.map((m) => {
                  const Icon = m.icon;
                  const isActive = m.id === activeMetricId;
                  return (
                    <div
                      key={m.id}
                      onClick={() => setActiveMetricId(m.id)}
                      className={`p-3.5 rounded-2xl border transition-all flex items-start gap-3 cursor-pointer ${
                        isActive
                          ? 'bg-blue-50/70 border-2 border-royal shadow-md'
                          : 'bg-white border-slate-200 shadow-2xs hover:bg-slate-50'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-xl ${m.iconBg} flex items-center justify-center shrink-0 ${m.iconColor}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className="text-xs font-bold text-navy-950 truncate">
                            {m.title}
                          </h4>
                          <span className="text-[10px] text-slate-400 font-semibold shrink-0">
                            {m.tag.split('•')[0]}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 font-medium">
                          {m.highlight}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Active Details & Video Action Callout */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left bg-slate-50/70 p-4 sm:p-5 rounded-2xl border border-slate-200">
              <div className="space-y-1">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-xs font-bold text-royal uppercase tracking-wider">
                    Featured Benefit:
                  </span>
                  <h4 className="font-heading font-bold text-navy-950 text-sm sm:text-base">
                    {activeMetric.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                  {activeMetric.desc}
                </p>
              </div>

              <div className="flex items-center justify-center gap-2.5 shrink-0 flex-wrap">
                <button
                  onClick={() =>
                    openVideoModal({
                      src: activeMetric.videoSrc,
                      title: `TezzEV: ${activeMetric.title}`,
                      poster: activeMetric.poster,
                    })
                  }
                  className="px-4 py-2.5 rounded-xl bg-royal hover:bg-blue text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md transition-all active:scale-95"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Watch Video Reel</span>
                </button>

                <Link
                  to="/waitlist"
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-navy-950 border border-slate-200 text-xs sm:text-sm font-bold shadow-2xs transition-colors"
                >
                  Join Waitlist
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* ============================================================== */
          /* VIDEO REELS VIEW (Direct Side-by-Side Video Showcase)          */
          /* ============================================================== */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 4 Benefit Tiles */}
            <div className="lg:col-span-7 space-y-3">
              <div className="space-y-2.5">
                {metrics.map((m) => {
                  const Icon = m.icon;
                  const isActive = m.id === activeMetricId;
                  return (
                    <div
                      key={m.id}
                      onClick={() => setActiveMetricId(m.id)}
                      className={`p-3.5 sm:p-4 rounded-2xl cursor-pointer border transition-all flex items-start gap-3.5 ${
                        isActive
                          ? 'bg-blue-50/70 border-2 border-royal shadow-md'
                          : 'bg-slate-50/70 border-slate-200/80 hover:bg-white'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-xl ${m.iconBg} flex items-center justify-center shrink-0 ${m.iconColor}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-1">
                          <h4 className="text-xs sm:text-sm md:text-base font-bold text-navy-950">
                            {m.title}
                          </h4>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white text-slate-600 border border-slate-200 shrink-0 self-start sm:self-auto">
                            {m.tag}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Video Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-3">
              <div className="w-full max-w-sm">
                <VideoCard
                  src={activeMetric.videoSrc}
                  title={`TezzEV: ${activeMetric.title}`}
                  poster={activeMetric.poster}
                  aspect="square"
                />
              </div>
              <p className="text-xs text-slate-500 text-center font-medium">
                Click any benefit on the left to swap the video reel
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
