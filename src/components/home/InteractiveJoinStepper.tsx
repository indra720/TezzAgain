import React, { useState, useRef, useEffect, useCallback } from 'react';
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

// Video slides up from bottom like Zypp / Casino slot reel
const slideFromBottomVariants = {
  enter: {
    y: '100%',
    opacity: 0.65,
    scale: 0.96,
  },
  center: {
    y: '0%',
    opacity: 1,
    scale: 1,
    transition: {
      y: { type: 'spring', stiffness: 220, damping: 25, mass: 0.8 },
      opacity: { duration: 0.22 },
      scale: { duration: 0.22 },
    },
  },
  exit: {
    y: '-100%',
    opacity: 0.45,
    scale: 0.96,
    transition: {
      y: { type: 'spring', stiffness: 220, damping: 25, mass: 0.8 },
      opacity: { duration: 0.2 },
    },
  },
};

export const InteractiveJoinStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const stepCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isProgrammaticScroll = useRef(false);
  const userInteractedTimeout = useRef<NodeJS.Timeout | null>(null);
  const isPausedByUser = useRef(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const { openVideoModal } = useVideoModal();

  const currentStep = stepsData.find((s) => s.id === activeStep) || stepsData[0];

  // Helper: scroll container to make target step visible
  const scrollContainerToStep = useCallback((stepId: number) => {
    const container = containerRef.current;
    const targetCard = stepCardRefs.current[stepId - 1];
    if (container && targetCard) {
      isProgrammaticScroll.current = true;
      const targetTop = targetCard.offsetTop - container.offsetTop - 12;
      container.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 500);
    }
  }, []);

  // Continuous Auto-Rotation Loop ("rotation again to again run hota rhe")
  useEffect(() => {
    const timer = setInterval(() => {
      if (isPausedByUser.current) return;

      setActiveStep((prev) => {
        const next = prev < stepsData.length ? prev + 1 : 1;
        scrollContainerToStep(next);
        return next;
      });
    }, 4200);

    return () => clearInterval(timer);
  }, [scrollContainerToStep]);

  // When user manually scrolls the steps container, activate the point nearest to viewport focus
  const handleScroll = () => {
    if (isProgrammaticScroll.current) return;
    const container = containerRef.current;
    if (!container) return;

    // Temporarily pause auto-rotation when user is scrolling manually
    isPausedByUser.current = true;
    if (userInteractedTimeout.current) clearTimeout(userInteractedTimeout.current);
    userInteractedTimeout.current = setTimeout(() => {
      isPausedByUser.current = false;
    }, 4000);

    const containerTop = container.getBoundingClientRect().top;
    const containerHeight = container.clientHeight;
    const focusY = containerTop + containerHeight * 0.35;

    let closestStep = activeStep;
    let minDistance = Infinity;

    stepCardRefs.current.forEach((el, index) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cardCenterY = rect.top + rect.height / 2;
      const dist = Math.abs(cardCenterY - focusY);
      if (dist < minDistance) {
        minDistance = dist;
        closestStep = index + 1;
      }
    });

    if (closestStep !== activeStep) {
      setActiveStep(closestStep);
    }
  };

  const handleStepClick = (stepId: number) => {
    isPausedByUser.current = true;
    if (userInteractedTimeout.current) clearTimeout(userInteractedTimeout.current);
    userInteractedTimeout.current = setTimeout(() => {
      isPausedByUser.current = false;
    }, 5000);

    setActiveStep(stepId);
    scrollContainerToStep(stepId);
  };

  // Autoplay video on step change
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
      {/* Main 2-Column Interactive Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-navy-900/60 p-4 sm:p-7 md:p-8 rounded-3xl border border-navy-800 shadow-2xl backdrop-blur-sm">
        {/* Left Side: Step-by-Step Progress Timeline with HIDDEN SCROLLBAR (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-3">
          <div className="flex items-center justify-between text-xs text-blue-light font-bold uppercase tracking-wider px-1">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-leaf" />
              Continuous Onboarding Reel
            </span>
            <span className="text-slate-400 text-[11px] font-medium lowercase">
              scroll or auto-cycles ({activeStep}/4)
            </span>
          </div>

          {/* SCROLLABLE STEPS CONTAINER WITH ZERO VISIBLE SCROLLBAR */}
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="relative max-h-[380px] sm:max-h-[460px] overflow-y-auto no-scrollbar scroll-smooth space-y-3.5 pr-1 py-1"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {stepsData.map((step, idx) => {
              const isActive = step.id === activeStep;
              return (
                <div
                  key={step.id}
                  ref={(el) => (stepCardRefs.current[idx] = el)}
                  onClick={() => handleStepClick(step.id)}
                  className={`relative cursor-pointer transition-all duration-300 rounded-2xl p-4 sm:p-5 border text-left ${
                    isActive
                      ? 'bg-gradient-to-r from-navy-900 to-navy-950/95 border-royal shadow-lg shadow-royal/20 translate-x-1 sm:translate-x-2'
                      : 'bg-navy-950/40 border-navy-800/80 hover:bg-navy-900/60 hover:border-navy-700 opacity-75 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    {/* Step Number Badge */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-all ${
                        isActive
                          ? 'bg-gradient-brand text-white shadow-md shadow-royal/40 scale-105 ring-2 ring-blue-light/50'
                          : 'bg-navy-800 text-slate-400 border border-navy-700'
                      }`}
                    >
                      {step.num}
                    </div>

                    {/* Step Content */}
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

                      <p className="text-xs sm:text-sm text-text-dark-muted leading-relaxed mb-2">
                        {step.desc}
                      </p>

                      {/* Active State Highlights & Link */}
                      {isActive && (
                        <div className="mt-2.5 pt-2.5 border-t border-navy-800/80 space-y-2 animate-fade-in">
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
                              👉 Live video streaming on the right
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

        {/* Right Side: Smartphone Device Frame with Bottom-Slide Video (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-3">
          <div className="relative w-full max-w-[270px] sm:max-w-[310px]">
            {/* Phone Outer Chassis (Metallic Navy & Royal Blue Trim) */}
            <div className="relative rounded-[40px] p-3 sm:p-3.5 bg-gradient-to-b from-navy-800 via-navy-950 to-navy-900 border-2 border-navy-700 shadow-2xl shadow-black/80">
              {/* Phone Speaker & Dynamic Island Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-navy-950 rounded-full z-30 flex items-center justify-center gap-2 border border-navy-800/80">
                <div className="w-2 h-2 rounded-full bg-navy-900" />
                <div className="w-8 h-1 rounded-full bg-navy-900" />
              </div>

              {/* Phone Screen Area (Aspect 9:16) with Bottom-Slide Overflow Container */}
              <div className="relative aspect-[9/16] w-full rounded-[30px] overflow-hidden bg-black border border-navy-900">
                {/* 3D Cylindrical Vignette Shadows (Top & Bottom Curve) */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/85 via-black/35 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/90 via-black/45 to-transparent z-20 pointer-events-none" />

                {/* Animated Bottom-Slide Video with Framer Motion AnimatePresence */}
                <AnimatePresence initial={false}>
                  <motion.div
                    key={currentStep.id}
                    variants={slideFromBottomVariants}
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
                      Step 0{currentStep.id}/04
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-blue-light bg-royal/80 px-2 py-0.5 rounded-md">
                    TezzEV
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

            {/* Bottom Ambient Shadow */}
            <div className="absolute -bottom-4 inset-x-6 h-6 bg-royal/20 blur-xl rounded-full pointer-events-none" />
          </div>

          <p className="text-xs text-text-dark-muted text-center px-4">
            Scroll points on left or let it auto-play • Video slides from bottom in sync
          </p>
        </div>
      </div>
    </div>
  );
};
