import React, { useState } from 'react';
import {
  Zap,
  Wrench,
  BatteryCharging,
  Headphones,
  FileCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Play,
} from 'lucide-react';
import { VideoCard } from '../ui/VideoCard';
import { useVideoModal } from '../ui/VideoContext';
import { Link } from 'react-router-dom';

interface FeatureBenefit {
  id: string;
  icon: React.ElementType;
  title: string;
  badge: string;
  desc: string;
  highlight: string;
  videoSrc: string;
  poster: string;
}

const benefitsData: FeatureBenefit[] = [
  {
    id: 'petrol',
    icon: Zap,
    title: 'Zero Petrol Cost',
    badge: '100% Fuel Free',
    desc: 'Eliminate daily petrol spending completely. Keep 100% of your delivery earnings as pure profit.',
    highlight: 'Save ₹4,000 to ₹6,000+ every month',
    videoSrc: '/videos/tezz-video-4.mp4',
    poster: '/images/poster-2.jpg',
  },
  {
    id: 'maintenance',
    icon: Wrench,
    title: 'Free Hub Maintenance',
    badge: '100% Covered',
    desc: 'Routine servicing, brake pad replacements, motor checks, and tyre wear are covered for free at TezzEV Hubs.',
    highlight: 'Zero surprise repair bills',
    videoSrc: '/videos/tezz-video-1.mp4',
    poster: '/images/poster-1.jpg',
  },
  {
    id: 'swap',
    icon: BatteryCharging,
    title: '2-Minute Battery Swap',
    badge: 'Zero Waiting',
    desc: 'Never wait hours for charging. Simply ride into any city hub and swap for fully charged dual batteries in 2 minutes.',
    highlight: 'Unlimited swaps on weekly/monthly plans',
    videoSrc: '/videos/tezz-video-3.mp4',
    poster: '/images/poster-3.jpg',
  },
  {
    id: 'support',
    icon: Headphones,
    title: '24/7 Roadside Assistance',
    badge: 'Rider Helpline',
    desc: 'Puncture or vehicle snag on shift? Our mobile assistance team reaches your location with a replacement scooter.',
    highlight: 'Zero lost delivery shifts',
    videoSrc: '/videos/tezz-video-2.mp4',
    poster: '/images/poster-4.jpg',
  },
  {
    id: 'kyc',
    icon: FileCheck,
    title: 'Paperless 2-Min KYC',
    badge: 'Digital Approval',
    desc: 'No complicated paperwork or high credit scores needed. Simple Aadhaar and DL approval done completely online.',
    highlight: 'Pick up your vehicle same day',
    videoSrc: '/videos/tezz-video-3.mp4',
    poster: '/images/poster-3.jpg',
  },
];

export const WhyChooseHub: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('petrol');
  const { openVideoModal } = useVideoModal();

  const selectedBenefit = benefitsData.find((b) => b.id === selectedId) || benefitsData[0];

  return (
    <div className="w-full space-y-6">
      {/* Top Header */}
      <div className="text-center max-w-2xl mx-auto space-y-1.5">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-light">
          Rider First Benefits
        </span>
        <h2 className="text-white mt-1 mb-1">
          Why choose <span className="text-blue-light">TezzEV</span>
        </h2>
        <p className="text-text-dark-muted text-sm sm:text-base">
          Engineered specifically for Indian gig delivery riders to eliminate fuel costs and maximize daily earnings.
        </p>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-navy-900/60 p-5 sm:p-8 rounded-3xl border border-navy-800 shadow-2xl backdrop-blur-sm">
        {/* Left Side: Interactive Benefit Pills / Cards (7 cols) */}
        <div className="lg:col-span-7 space-y-3">
          <p className="text-xs text-blue-light font-bold uppercase tracking-wider mb-2">
            Tap any benefit to watch video proof:
          </p>

          <div className="space-y-2.5">
            {benefitsData.map((benefit) => {
              const isSelected = benefit.id === selectedId;
              const IconComp = benefit.icon;
              return (
                <div
                  key={benefit.id}
                  onClick={() => setSelectedId(benefit.id)}
                  className={`p-3.5 sm:p-4 rounded-2xl cursor-pointer border transition-all duration-200 flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-gradient-to-r from-navy-900 to-navy-950 border-royal shadow-lg shadow-royal/20 translate-x-1 sm:translate-x-2'
                      : 'bg-navy-950/60 border-navy-800/80 hover:bg-navy-900/50 hover:border-navy-700 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? 'bg-royal text-white shadow-md shadow-royal/40' : 'bg-navy-800 text-slate-300'
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4
                        className={`text-sm sm:text-base font-bold font-heading transition-colors ${
                          isSelected ? 'text-white' : 'text-slate-300'
                        }`}
                      >
                        {benefit.title}
                      </h4>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${
                          isSelected ? 'bg-royal/30 text-blue-light border border-royal/40' : 'bg-navy-800 text-slate-400'
                        }`}
                      >
                        {benefit.badge}
                      </span>
                    </div>

                    <p className="text-xs text-text-dark-muted line-clamp-2 mt-0.5 leading-relaxed">
                      {benefit.desc}
                    </p>

                    {isSelected && (
                      <div className="mt-2 pt-2 border-t border-navy-800/80 flex items-center justify-between text-xs text-leaf font-semibold">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{benefit.highlight}</span>
                        </div>
                        <span className="text-[11px] text-blue-light">Video ready 👉</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Feature Video Card (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4">
          <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-2 border-royal/40 bg-navy-950">
            <VideoCard
              src={selectedBenefit.videoSrc}
              title={`Demo: ${selectedBenefit.title}`}
              poster={selectedBenefit.poster}
              aspect="square"
            />
          </div>

          <div className="text-center space-y-1">
            <h4 className="font-heading font-bold text-white text-sm sm:text-base">
              {selectedBenefit.title} in Action
            </h4>
            <p className="text-xs text-slate-300 max-w-xs mx-auto">
              {selectedBenefit.desc}
            </p>
          </div>

          <Link to="/waitlist" className="btn-primary !min-h-[40px] !text-xs font-bold">
            <span>Join Launch Waitlist</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
