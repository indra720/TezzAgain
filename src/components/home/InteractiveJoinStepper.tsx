import React, { useState, useRef, useEffect } from 'react';
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
  ChevronUp,
  ChevronDown,
  RotateCcw,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVideoModal } from '../ui/VideoContext';

interface StepItem {
  id: number;
  num: string;
  badge: string;
  title: string;
  desc: string;
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
    badge: 'Step 1 • 2 Mins',
    title: 'Complete Online KYC',
    desc: 'Paperless digital verification in just 2 minutes. Submit your Aadhaar card and Driving Licence to get started.',
    highlights: ['Zero physical paperwork', 'Instant digital verification', 'No credit card needed'],
    videoSrc: '/videos/tezz-video-3.mp4',
    poster: '/images/poster-3.jpg',
    linkText: 'Register in 2 Mins',
    linkUrl: '/register',
  },
  {
    id: 2,
    num: '02',
    badge: 'Step 2 • Plans',
    title: 'Choose Scooter & Plan',
    desc: 'Select from affordable Daily, Weekly or Monthly rental plans. All plans include unlimited battery swaps and free maintenance.',
    highlights: ['Unlimited battery swaps', 'Low refundable deposit', 'Change plans anytime'],
    videoSrc: '/videos/tezz-video-1.mp4',
    poster: '/images/poster-1.jpg',
    linkText: 'Explore Rental Plans',
    linkUrl: '/pricing',
  },
  {
    id: 3,
    num: '03',
    badge: 'Step 3 • Hub Pickup',
    title: 'Pick Up from Tezz Hub',
    desc: 'Visit your nearest TezzEV Hub in Indore or Bhopal. Collect your fully charged scooter, helmet, and vehicle keys in 5 minutes.',
    highlights: ['Vehicles fully sanitized & inspected', 'Keys & helmet provided', 'Pre-charged dual battery'],
    videoSrc: '/videos/tezz-video-2.mp4',
    poster: '/images/poster-4.jpg',
    linkText: 'Find Nearest Hub',
    linkUrl: '/contact',
  },
  {
    id: 4,
    num: '04',
    badge: 'Step 4 • Daily Cash',
    title: 'Start Earning & Ride TEZZ',
    desc: 'Login to Zomato, Swiggy, Zepto or Blinkit. Deliver orders all day with zero petrol cost and take home maximum daily profits.',
    highlights: ['Save ₹4,000+ on fuel every month', '24/7 Roadside breakdown support', '2-Minute quick battery swap'],
    videoSrc: '/videos/tezz-video-4.mp4',
    poster: '/images/poster-2.jpg',
    linkText: 'Join Launch Waitlist',
    linkUrl: '/waitlist',
  },
];

// Casino Slot Machine Reel Variants (Vertical roll with realistic spring momentum)
const reelVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? '100%' : '-100%',
    opacity: 0.65,
    scale: 0.95,
    filter: 'blur(3px)',
  }),
  center: {
    y: '0%',
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      y: { type: 'spring', stiffness: 220, damping: 26, mass: 0.8 },
      opacity: { duration: 0.22 },
      scale: { duration: 0.24 },
      filter: { duration: 0.2 },
    },
  },
  exit: (direction: number) => ({
    y: direction > 0 ? '-100%' : '100%',
    opacity: 0.4,
    scale: 0.95,
    filter: 'blur(3px)',
    transition: {
      y: { type: 'spring', stiffness: 220, damping: 26, mass: 0.8 },
      opacity: { duration: 0.2 },
      filter: { duration: 0.2 },
    },
  }),
};

export const InteractiveJoinStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [direction, setDirection] = useState<number>(1); // 1 = down/next, -1 = up/prev
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { openVideoModal } = useVideoModal();

  const currentStep = stepsData.find((s) => s.id === activeStep) || stepsData[0];

  const goToStep = (stepId: number) => {
    if (stepId === activeStep) return;
    setDirection(stepId > activeStep ? 1 : -1);
    setActiveStep(stepId);
  };

  const nextStep = () => {
    setDirection(1);
    setActiveStep((prev) => (prev < stepsData.length ? prev + 1 : 1));
  };

  const prevStep = () => {
    setDirection(-1);
    setActiveStep((prev) => (prev > 1 ? prev - 1 : stepsData.length));
  };

  // Autoplay new video when activeStep changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [activeStep]);

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

  const handleFullscreen = () => {
    openVideoModal({
      src: currentStep.videoSrc,
      title: `${currentStep.num}. ${currentStep.title}`,
      poster: currentStep.poster,
    });
  };

  return (
    <div className="w-full">
      {/* Mobile Step Switcher Pills (Visible on small screens) */}
      <div className="flex lg:hidden items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-4">
        {stepsData.map((step) => {
          const isActive = step.id === activeStep;
          return (
            <button
              key={step.id}
              onClick={() => goToStep(step.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                isActive
                  ? 'bg-royal text-white shadow-md shadow-royal/30'
                  : 'bg-navy-900 text-slate-300 border border-navy-800 hover:bg-navy-800'
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  isActive ? 'bg-white text-royal' : 'bg-navy-800 text-slate-400'
                }`}
              >
                {step.id}
              </span>
              <span>{step.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main 2-Column Interactive Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-navy-900/60 p-5 sm:p-8 rounded-3xl border border-navy-800 shadow-2xl backdrop-blur-sm">
        {/* Left Side: Step-by-Step Progress Timeline (7 cols) - ALL STEPS VISIBLE */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative">
            {/* Vertical connector line */}
            <div className="hidden sm:block absolute left-5 top-6 bottom-6 w-0.5 bg-gradient-to-b from-royal via-blue to-navy-800 pointer-events-none" />

            <div className="space-y-4">
              {stepsData.map((step) => {
                const isActive = step.id === activeStep;
                return (
                  <div
                    key={step.id}
                    onClick={() => goToStep(step.id)}
                    className={`relative cursor-pointer transition-all duration-300 rounded-2xl p-4 sm:p-5 border text-left ${
                      isActive
                        ? 'bg-gradient-to-r from-navy-900 to-navy-950/95 border-royal shadow-lg shadow-royal/20 translate-x-1 sm:translate-x-2'
                        : 'bg-navy-950/40 border-navy-800/80 hover:bg-navy-900/60 hover:border-navy-700 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      {/* Step Circle */}
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-all ${
                          isActive
                            ? 'bg-gradient-brand text-white shadow-md shadow-royal/40 scale-105 ring-2 ring-blue-light/50'
                            : 'bg-navy-800 text-slate-400 border border-navy-700'
                        }`}
                      >
                        {step.num}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h3
                            className={`font-heading font-bold text-base sm:text-lg transition-colors ${
                              isActive ? 'text-white' : 'text-slate-300'
                            }`}
                          >
                            {step.title}
                          </h3>
                          <span
                            className={`text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap ${
                              isActive
                                ? 'bg-royal/30 text-blue-light border border-royal/40'
                                : 'bg-navy-800 text-slate-400'
                            }`}
                          >
                            {step.badge}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-text-dark-muted leading-relaxed mb-2.5">
                          {step.desc}
                        </p>

                        {/* Active State Details: Highlights + Quick CTA */}
                        {isActive && (
                          <div className="mt-3 pt-3 border-t border-navy-800/80 space-y-2 animate-fade-in">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                              {step.highlights.map((h, i) => (
                                <div key={i} className="flex items-center gap-1.5">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-leaf shrink-0" />
                                  <span>{h}</span>
                                </div>
                              ))}
                            </div>

                            <div className="pt-2 flex items-center gap-3">
                              <Link
                                to={step.linkUrl}
                                className="btn-primary !min-h-[38px] !py-0 !px-4 !text-xs font-bold"
                              >
                                <span>{step.linkText}</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                              <span className="text-[11px] text-blue-light hidden sm:inline">
                                🎰 Video reels rolling on the right 👉
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Zypp-style Pointer Curved Arrow on Active Step (Desktop) */}
                    {isActive && (
                      <div className="hidden lg:block absolute -right-7 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-royal">
                        <svg
                          width="32"
                          height="26"
                          viewBox="0 0 32 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="animate-pulse"
                        >
                          <path
                            d="M2 13C11 13 20 7 30 13M30 13L22 6M30 13L22 20"
                            stroke="#2D6BFF"
                            strokeWidth="2.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Smartphone Device Frame Video Player (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-3">
          {/* Reel Slot Machine Controller Header */}
          <div className="w-full max-w-[280px] sm:max-w-[320px] flex items-center justify-between text-xs text-slate-300 px-2">
            <span className="font-bold text-blue-light flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
              <Sparkles className="w-3.5 h-3.5 text-leaf animate-pulse" />
              Slot Reel Spin
            </span>

            <div className="flex items-center gap-1">
              <button
                onClick={prevStep}
                className="w-7 h-7 rounded-lg bg-navy-800 hover:bg-royal text-white flex items-center justify-center transition-colors"
                title="Scroll Up"
                aria-label="Previous Step Reel"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
              <button
                onClick={nextStep}
                className="w-7 h-7 rounded-lg bg-navy-800 hover:bg-royal text-white flex items-center justify-center transition-colors"
                title="Scroll Down"
                aria-label="Next Step Reel"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
            {/* Phone Outer Chassis (Metallic Navy & Royal Blue Trim) */}
            <div className="relative rounded-[40px] p-3 sm:p-3.5 bg-gradient-to-b from-navy-800 via-navy-950 to-navy-900 border-2 border-navy-700 shadow-2xl shadow-black/80">
              {/* Phone Speaker & Dynamic Island Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-navy-950 rounded-full z-30 flex items-center justify-center gap-2 border border-navy-800/80">
                <div className="w-2 h-2 rounded-full bg-navy-900" />
                <div className="w-8 h-1 rounded-full bg-navy-900" />
              </div>

              {/* Phone Screen Area (Aspect 9:16) with VERTICAL SLOT REEL OVERFLOW CONTAINER */}
              <div className="relative aspect-[9/16] w-full rounded-[30px] overflow-hidden bg-black border border-navy-900">
                {/* 3D Casino Reel Cylindrical Shadow (Top & Bottom Curve) */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/90 via-black/40 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-20 pointer-events-none" />

                {/* Animated Vertical Slot Machine Reel with Framer Motion AnimatePresence */}
                <AnimatePresence custom={direction} initial={false}>
                  <motion.div
                    key={currentStep.id}
                    custom={direction}
                    variants={reelVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full"
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

                {/* Top Overlay Badge */}
                <div className="absolute top-6 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
                  <div className="px-2.5 py-1 rounded-full bg-navy-950/85 backdrop-blur-md border border-navy-700/60 flex items-center gap-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-leaf animate-pulse" />
                    <span className="text-[11px] font-bold text-white tracking-wide">
                      Reel 0{currentStep.id}/04
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-blue-light bg-royal/80 px-2 py-0.5 rounded-md">
                    Tezz Reel
                  </span>
                </div>

                {/* Floating Video Action Controls Inside Phone */}
                <div className="absolute bottom-3 left-3 right-3 z-30 space-y-2">
                  <div className="p-2.5 rounded-2xl bg-navy-950/85 backdrop-blur-md border border-navy-700/60 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={togglePlay}
                        className="w-8 h-8 rounded-xl bg-royal hover:bg-blue text-white flex items-center justify-center transition-transform active:scale-95 shadow-sm"
                        aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
                      >
                        {isPlaying ? (
                          <Pause className="w-4 h-4 fill-white" />
                        ) : (
                          <Play className="w-4 h-4 fill-white translate-x-0.5" />
                        )}
                      </button>

                      <button
                        onClick={toggleMute}
                        className="w-8 h-8 rounded-xl bg-navy-800 hover:bg-navy-700 text-white flex items-center justify-center transition-colors shadow-sm"
                        aria-label={isMuted ? 'Unmute Sound' : 'Mute Sound'}
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4 text-slate-300" />
                        ) : (
                          <Volume2 className="w-4 h-4 text-leaf" />
                        )}
                      </button>
                    </div>

                    <button
                      onClick={handleFullscreen}
                      className="px-2.5 py-1.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-blue-light text-xs font-semibold flex items-center gap-1 transition-colors"
                      aria-label="Open Fullscreen"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Expand</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Glow Shadow */}
            <div className="absolute -bottom-4 inset-x-6 h-6 bg-royal/20 blur-xl rounded-full pointer-events-none" />
          </div>

          {/* Quick Reel Next CTA */}
          <div className="flex items-center justify-center gap-2 pt-1">
            <button
              onClick={nextStep}
              className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-royal to-blue hover:from-blue hover:to-royal text-white text-xs font-bold flex items-center gap-2 shadow-md shadow-royal/30 transition-transform active:scale-95"
            >
              <span>Spin Next Step 🎰</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-text-dark-muted text-center">
            Tap step on left or spin to roll next video reel • Sound muted by default
          </p>
        </div>
      </div>
    </div>
  );
};
