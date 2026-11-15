import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Maximize2,
  Sparkles,
  Smartphone,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVideoModal } from '../ui/VideoContext';

interface StepItem {
  id: number;
  num: string;
  stepName: string;
  title: string;
  desc: string;
  floatingCardTitle: string;
  floatingCardSub: string;
  highlights: string[];
  videoSrc: string;
  poster: string;
  linkText: string;
  linkUrl: string;
}

const stepsData: StepItem[] = [
  {
    id: 1,
    num: '01',
    stepName: 'Complete Your KYC',
    title: 'Complete Your KYC',
    desc: 'Add your personal details like Aadhaar, PAN, and Bank details! Live digital verification in 2 minutes without paper forms.',
    floatingCardTitle: 'Paperless Digital KYC',
    floatingCardSub: 'Approved in 15 mins • No credit score needed',
    highlights: ['Zero physical paperwork', 'Instant Aadhaar OTP verification', 'No credit card required'],
    videoSrc: '/videos/tezz-video-3.mp4',
    poster: '/images/poster-3.jpg',
    linkText: 'Register in 2 Mins',
    linkUrl: '/register',
  },
  {
    id: 2,
    num: '02',
    stepName: 'Choose Your Scooter',
    title: 'Choose Your Scooter & Plan',
    desc: 'Select your preferred scooter model and choose from affordable Daily, Weekly or Monthly rental plans.',
    floatingCardTitle: 'Select Scooter & Plan',
    floatingCardSub: 'Swappable dual batteries • Low security deposit',
    highlights: ['Unlimited battery swaps included', 'Flexible daily & weekly extensions', 'Free hub maintenance'],
    videoSrc: '/videos/tezz-video-1.mp4',
    poster: '/images/poster-1.jpg',
    linkText: 'Explore Rental Plans',
    linkUrl: '/pricing',
  },
  {
    id: 3,
    num: '03',
    stepName: 'Pick Up from Tezz Hub',
    title: 'Pick Up from Tezz Hub',
    desc: 'Visit your nearest TezzEV Hub in Indore or Bhopal. Collect your fully charged scooter, helmet, and vehicle keys in 5 minutes.',
    floatingCardTitle: 'Instant Hub Handover',
    floatingCardSub: 'Sanitized scooter • Dual charged batteries • Helmet',
    highlights: ['Vehicles fully inspected & sanitized', 'Keys & helmet provided', 'Pre-charged dual battery'],
    videoSrc: '/videos/tezz-video-2.mp4',
    poster: '/images/poster-4.jpg',
    linkText: 'Find Nearest Hub',
    linkUrl: '/contact',
  },
  {
    id: 4,
    num: '04',
    stepName: 'Start Earning',
    title: 'Start Earning & Ride TEZZ',
    desc: 'Activate your client ID and begin deliveries on Zomato, Swiggy, Zepto or Blinkit to maximize daily take-home earnings.',
    floatingCardTitle: 'Last Mile Deliveries',
    floatingCardSub: 'Maximize your earnings by delivering more orders',
    highlights: ['Save ₹4,000 to ₹6,000 on petrol', '24/7 Roadside breakdown support', 'Zero vehicle depreciation'],
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

  // Render the Clean Smartphone Mockup
  const renderPhonePlayer = (maxWidthClass = 'max-w-[280px]') => (
    <div className={`relative w-full ${maxWidthClass} mx-auto select-none`}>
      {/* Smartphone Outer Titanium/Slate Frame */}
      <div className="relative rounded-[36px] p-2 bg-slate-900 border-4 border-slate-700/80 shadow-2xl">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800 mr-2" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
        </div>

        {/* Video Screen Area */}
        <div className="relative aspect-[9/16] w-full rounded-[28px] overflow-hidden bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.id}
              initial={{ opacity: 0.6, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0.4, y: -30 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
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

          {/* Top Brand Tag inside phone */}
          <div className="absolute top-9 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-sm border border-white/10">
              TEZZ App • Step {currentStep.num}
            </span>
            <span className="text-[10px] font-semibold text-white/90 bg-emerald-600/90 px-2 py-0.5 rounded-full">
              Live
            </span>
          </div>

          {/* Bottom Floating Card inside/over Phone (Just like Zypp) */}
          <div className="absolute bottom-3 left-3 right-3 z-20">
            <div className="p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-200 text-navy-950 text-left space-y-1">
              <span className="text-[10px] font-bold text-royal uppercase tracking-wider block">
                {currentStep.floatingCardTitle}
              </span>
              <p className="text-[11px] text-slate-600 font-medium leading-tight line-clamp-2">
                {currentStep.floatingCardSub}
              </p>
            </div>
          </div>

          {/* Subtle Controls overlay on hover */}
          <div className="absolute top-9 right-3 z-30 flex items-center gap-1.5">
            <button
              onClick={toggleMute}
              className="w-7 h-7 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-transform active:scale-90"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
            </button>
            <button
              onClick={() =>
                openVideoModal({
                  src: currentStep.videoSrc,
                  title: `TezzEV Step ${currentStep.num}: ${currentStep.title}`,
                  poster: currentStep.poster,
                })
              }
              className="w-7 h-7 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-transform active:scale-90"
              aria-label="Full screen video"
            >
              <Maximize2 className="w-3 h-3 text-royal" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full space-y-8">
      {/* 1. Header (Centered, clean white aesthetic directly like Zypp) */}
      <div className="text-center max-w-3xl mx-auto space-y-2 px-2">
        <h2 className="text-navy-950 font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight">
          How To Join <span className="text-royal">TezzEV</span>
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          From paperless KYC to collecting your sanitized scooter keys at the hub. Simple, transparent, and completely digital.
        </p>
      </div>

      {/* 2. Main Container (Crisp White Card with soft border) */}
      <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-12 border border-slate-200/90 shadow-xl">
        {/* Mobile View (Clean Tabs + Centered Phone + Details) */}
        <div className="block lg:hidden space-y-6">
          {/* 4 Clean Tabs */}
          <div className="grid grid-cols-4 gap-1.5 p-1 rounded-2xl bg-slate-100 border border-slate-200">
            {stepsData.map((step) => {
              const isActive = step.id === activeStep;
              return (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(step.id)}
                  className={`py-2 px-1 rounded-xl text-xs font-bold text-center transition-all ${
                    isActive
                      ? 'bg-royal text-white shadow-sm'
                      : 'text-slate-600 hover:text-navy-950'
                  }`}
                >
                  <span className="block text-[10px] opacity-80">{step.num}</span>
                  <span className="block truncate">{step.stepName.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Centered Phone Player */}
          <div className="flex justify-center">
            {renderPhonePlayer('max-w-[260px]')}
          </div>

          {/* Active Step Details */}
          <div className="bg-slate-50/80 p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-3 text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold text-xs flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <h3 className="text-base font-bold text-navy-950 font-heading">
                {currentStep.title}
              </h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {currentStep.desc}
            </p>

            <div className="space-y-1.5 text-xs text-slate-700 pt-1">
              {currentStep.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-200 flex items-center justify-between gap-3">
              <Link to={currentStep.linkUrl} className="btn-primary !min-h-[38px] !text-xs font-bold">
                <span>{currentStep.linkText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => handleStepClick(activeStep < 4 ? activeStep + 1 : 1)}
                className="text-xs font-bold text-royal hover:underline"
              >
                Next Step →
              </button>
            </div>
          </div>
        </div>

        {/* Desktop View: Split 2-Column with Zypp Vertical Stepper Line */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column (7 cols): Vertical Timeline Stepper */}
          <div className="lg:col-span-7 space-y-6 relative pl-4">
            {/* Continuous Vertical Connecting Line */}
            <div className="absolute left-[33px] top-6 bottom-6 w-[3px] bg-slate-200 rounded-full" />

            {stepsData.map((step) => {
              const isActive = step.id === activeStep;

              return (
                <div
                  key={step.id}
                  onClick={() => handleStepClick(step.id)}
                  className={`relative flex items-start gap-5 cursor-pointer p-4 rounded-2xl transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-50/50 -translate-x-1'
                      : 'hover:bg-slate-50/70'
                  }`}
                >
                  {/* Step Indicator Circle */}
                  <div
                    className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-all ${
                      isActive
                        ? 'bg-emerald-500 text-white ring-4 ring-emerald-100 shadow-md scale-110'
                        : 'bg-white border-2 border-slate-300 text-slate-400'
                    }`}
                  >
                    {isActive ? (
                      <Check className="w-4 h-4 stroke-[3]" />
                    ) : (
                      <span>{step.num}</span>
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 min-w-0 pt-0.5">
                    <div className="flex items-center gap-3">
                      <h3
                        className={`text-lg font-bold font-heading transition-colors ${
                          isActive ? 'text-navy-950 font-extrabold' : 'text-slate-400 hover:text-slate-600'
                        }`}
                      >
                        {step.title}
                      </h3>

                      {/* Zypp Hand-Drawn Doodle Arrow pointing towards phone when active */}
                      {isActive && (
                        <span className="hidden xl:inline-block text-royal animate-pulse">
                          <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                            <path
                              d="M2 14C12 4 28 6 36 12M36 12L28 8M36 12L30 18"
                              stroke="#1647E8"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      )}
                    </div>

                    <p
                      className={`text-xs sm:text-sm mt-1 leading-relaxed transition-colors ${
                        isActive ? 'text-slate-600' : 'text-slate-400'
                      }`}
                    >
                      {step.desc}
                    </p>

                    {/* Active Expanded Highlight Badges */}
                    {isActive && (
                      <div className="mt-3 pt-3 border-t border-blue-100 space-y-2 animate-fade-in">
                        <div className="flex flex-wrap gap-2 text-xs">
                          {step.highlights.map((h, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium shadow-2xs"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              {h}
                            </span>
                          ))}
                        </div>

                        <div className="pt-2 flex items-center gap-3">
                          <Link to={step.linkUrl} className="btn-primary !min-h-[38px] !text-xs font-bold !px-4">
                            <span>{step.linkText}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <span className="text-xs text-royal font-semibold">
                            👉 Watch video on smartphone mockup
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (5 cols): Clean Smartphone Mockup Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-3">
            {renderPhonePlayer('max-w-[280px] sm:max-w-[310px]')}
            <p className="text-xs text-slate-500 text-center font-medium">
              Click any step on the left to watch live handover &amp; app walkthrough
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
