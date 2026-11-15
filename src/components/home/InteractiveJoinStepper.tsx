import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  Check,
  FileCheck,
  CalendarCheck,
  Building2,
  TrendingUp,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVideoModal } from '../ui/VideoContext';

interface StepItem {
  id: number;
  num: string;
  mobileShort: string;
  fullShort: string;
  badge: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  highlights: { title: string; subtitle: string }[];
  videoSrc: string;
  poster: string;
  linkText: string;
  linkUrl: string;
}

const stepsData: StepItem[] = [
  {
    id: 1,
    num: '01',
    mobileShort: 'KYC',
    fullShort: 'KYC Verify',
    badge: 'Step 1 • 2 Mins',
    title: 'Instant Online Paperless KYC',
    desc: 'Register on your phone in under 2 minutes. Submit your Aadhaar card and Driving Licence for instant digital verification without paperwork queues.',
    icon: FileCheck,
    highlights: [
      { title: 'Zero Paperwork', subtitle: '100% digital verification on your mobile' },
      { title: 'Instant Aadhaar OTP', subtitle: 'Approved within 15 minutes by our automated system' },
      { title: 'No Credit Score', subtitle: 'No credit card or CIBIL history needed to ride' },
    ],
    videoSrc: '/videos/tezz-video-3.mp4',
    poster: '/images/poster-3.jpg',
    linkText: 'Register in 2 Mins',
    linkUrl: '/register',
  },
  {
    id: 2,
    num: '02',
    mobileShort: 'Plan',
    fullShort: 'Select Plan',
    badge: 'Step 2 • Flexible Plans',
    title: 'Choose Scooter Model & Rental Plan',
    desc: 'Select from affordable Daily, Weekly or Monthly rental options. Every plan comes with dual swappable batteries, free hub maintenance, and roadside assistance.',
    icon: CalendarCheck,
    highlights: [
      { title: 'Unlimited Swaps', subtitle: 'Dual high-capacity swappable battery packs' },
      { title: '100% Free Maintenance', subtitle: 'Routine servicing & tyre wear covered for free' },
      { title: 'Refundable Deposit', subtitle: 'Transparent security deposit safely refunded' },
    ],
    videoSrc: '/videos/tezz-video-1.mp4',
    poster: '/images/poster-1.jpg',
    linkText: 'Explore Rental Plans',
    linkUrl: '/pricing',
  },
  {
    id: 3,
    num: '03',
    mobileShort: 'Hub',
    fullShort: 'Hub Handover',
    badge: 'Step 3 • 5-Min Handover',
    title: 'Collect Your TEZZ at Nearest City Hub',
    desc: 'Visit our nearest TezzEV Hub in Indore or Bhopal. Complete a quick vehicle walk-around, receive your helmet, keys, and 100% charged batteries in 5 minutes.',
    icon: Building2,
    highlights: [
      { title: 'Sanitized & Inspected', subtitle: 'Pre-checked dual suspension and cargo frame' },
      { title: 'Helmet & Accessories', subtitle: 'DOT-certified helmet and secure keys provided' },
      { title: 'Full Charge Ready', subtitle: 'Ride out immediately for full delivery shifts' },
    ],
    videoSrc: '/videos/tezz-video-2.mp4',
    poster: '/images/poster-4.jpg',
    linkText: 'Find Nearest Hub',
    linkUrl: '/contact',
  },
  {
    id: 4,
    num: '04',
    mobileShort: 'Earn',
    fullShort: 'Start Earning',
    badge: 'Step 4 • Zero Fuel Profit',
    title: 'Start Delivering & Take Home Pure Profit',
    desc: 'Log in to your favorite partner apps — Zomato, Swiggy, Zepto or Blinkit. Deliver orders all day with zero petrol cost and take home maximum earnings.',
    icon: TrendingUp,
    highlights: [
      { title: 'Save ₹6,000 / Month', subtitle: 'Zero petrol expense means pure take-home cash' },
      { title: 'All Platforms Ready', subtitle: 'Commercially certified for all Indian delivery apps' },
      { title: '24/7 Road Helpline', subtitle: 'Instant breakdown vehicle replacement on shift' },
    ],
    videoSrc: '/videos/tezz-video-4.mp4',
    poster: '/images/poster-2.jpg',
    linkText: 'Join Launch Waitlist',
    linkUrl: '/waitlist',
  },
];

export const InteractiveJoinStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const { openVideoModal } = useVideoModal();

  const currentStep = stepsData.find((s) => s.id === activeStep) || stepsData[0];
  const StepIcon = currentStep.icon;

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="w-full space-y-6 sm:space-y-8">
      {/* 1. Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2.5 px-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Paperless Onboarding</span>
        </span>
        <h2 className="text-navy-950 font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight">
          Start In <span className="text-royal">4 Easy Steps</span>
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          From paperless KYC to collecting your sanitized scooter keys at the hub. Simple, transparent, and completely digital.
        </p>

        {/* 2. Top Interactive Step Progression Bar (Mobile collision 100% prevented) */}
        <div className="pt-2">
          <div className="grid grid-cols-4 gap-1.5 sm:gap-3 max-w-2xl mx-auto p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
            {stepsData.map((step) => {
              const isActive = step.id === activeStep;
              const isPassed = step.id < activeStep;
              return (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(step.id)}
                  className={`py-2 px-1 sm:px-2.5 rounded-xl text-xs font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 overflow-hidden ${
                    isActive
                      ? 'bg-royal text-white shadow-md shadow-royal/30 scale-102'
                      : isPassed
                      ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                      : 'text-slate-600 hover:text-navy-950 hover:bg-white/70'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold shrink-0 ${
                      isActive
                        ? 'bg-white text-royal'
                        : isPassed
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {isPassed ? <Check className="w-3 h-3 stroke-[3]" /> : step.id}
                  </span>
                  {/* Clean short label on mobile (3-4 chars) prevents any text overlap */}
                  <span className="sm:hidden text-[11px] font-extrabold truncate">
                    {step.mobileShort}
                  </span>
                  {/* Full label on tablet & desktop */}
                  <span className="hidden sm:inline text-xs font-bold truncate">
                    {step.fullShort}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Main Stage Container (Crisp White Card with Soft Shadows) */}
      <div className="bg-white rounded-3xl p-4 sm:p-7 md:p-9 lg:p-11 border border-slate-200/90 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Column: Feature Details & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left order-2 lg:order-1">
            {/* Step Badge */}
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-royal text-xs font-bold uppercase tracking-wider">
                {currentStep.badge}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Step {currentStep.num} of 04
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-royal text-white flex items-center justify-center shrink-0 shadow-md">
                  <StepIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="font-heading font-extrabold text-base sm:text-xl md:text-2xl text-navy-950">
                  {currentStep.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed pt-1">
                {currentStep.desc}
              </p>
            </div>

            {/* 3 Feature Highlights (Clean White Card Tiles) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
              {currentStep.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-1"
                >
                  <div className="flex items-center gap-1.5 text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-xs font-bold text-navy-950">{h.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    {h.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Bar & Stepper Controls (With generous bottom space on mobile to prevent chatbot overlap) */}
            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-3 sm:pb-0">
              <Link
                to={currentStep.linkUrl}
                className="btn-primary !min-h-[42px] sm:!min-h-[44px] justify-center text-xs sm:text-sm font-bold"
              >
                <span>{currentStep.linkText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Prev / Next Buttons (50-50 width on mobile for balanced layout) */}
              <div className="flex items-center justify-between sm:justify-end gap-2.5">
                <button
                  onClick={() => handleStepClick(activeStep > 1 ? activeStep - 1 : 4)}
                  className="flex-1 sm:flex-none justify-center px-3.5 py-2 sm:py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
                  aria-label="Previous step"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={() => handleStepClick(activeStep < 4 ? activeStep + 1 : 1)}
                  className="flex-1 sm:flex-none justify-center px-4 py-2 sm:py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-royal text-xs font-bold flex items-center gap-1.5 transition-colors border border-blue-200 shadow-2xs"
                  aria-label="Next step"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Photorealistic Smartphone Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-3 order-1 lg:order-2">
            <div className="relative w-full max-w-[260px] sm:max-w-[290px] select-none">
              {/* Outer Phone Shell */}
              <div className="relative rounded-[36px] sm:rounded-[40px] p-2 sm:p-2.5 bg-slate-900 border-4 border-slate-700 shadow-2xl">
                {/* Dynamic Island Pill */}
                <div className="absolute top-3.5 sm:top-4 left-1/2 -translate-x-1/2 w-20 sm:w-22 h-3.5 sm:h-4 bg-black rounded-full z-30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-800 mr-2" />
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>

                {/* Video Reel Screen Area (Proper Aspect Ratio, NEVER Cut Off) */}
                <div className="relative aspect-[9/16] w-full rounded-[28px] sm:rounded-[30px] overflow-hidden bg-black">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep.id}
                      initial={{ opacity: 0.5, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0.5, y: -20 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                      className="w-full h-full"
                    >
                      <video
                        ref={videoRef}
                        src={currentStep.videoSrc}
                        poster={currentStep.poster}
                        autoPlay
                        loop
                        muted={isMuted}
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Gradient Scrim for readable badges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

                  {/* Top Bar inside Phone */}
                  <div className="absolute top-8 sm:top-9 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-center justify-between z-20 pointer-events-none">
                    <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20">
                      TezzEV App • Step {currentStep.num}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-white bg-emerald-600 px-2 py-0.5 rounded-full shadow-sm">
                      Active
                    </span>
                  </div>

                  {/* Controls Overlay on hover/tap */}
                  <div className="absolute top-8 sm:top-9 right-2.5 sm:right-3 z-30 flex items-center gap-1.5">
                    <button
                      onClick={toggleMute}
                      className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-transform active:scale-90"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> : <Volume2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />}
                    </button>
                    <button
                      onClick={() =>
                        openVideoModal({
                          src: currentStep.videoSrc,
                          title: `TezzEV Step ${currentStep.num}: ${currentStep.title}`,
                          poster: currentStep.poster,
                        })
                      }
                      className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-transform active:scale-90"
                      aria-label="Full screen video"
                    >
                      <Maximize2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-royal" />
                    </button>
                  </div>

                  {/* Bottom Floating Glass Card inside Phone */}
                  <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 z-20">
                    <div className="p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-200 text-navy-950 text-left space-y-0.5 sm:space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] sm:text-[10px] font-bold text-royal uppercase tracking-wider">
                          {currentStep.fullShort} Demo
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-slate-700 font-semibold leading-tight line-clamp-1">
                        {currentStep.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[10px] sm:text-[11px] text-slate-500 text-center font-medium">
              Click tabs above or buttons on the left to watch each step
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
