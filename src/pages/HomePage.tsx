import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Play,
  ArrowRight,
  Wrench,
  Headphones,
  Zap,
  BatteryCharging,
  FileCheck,
  Users,
  CheckCircle2,
  Clock,
  Sparkles,
  TrendingDown,
} from 'lucide-react';
import { siteConfig } from '../lib/config';
import { VideoCard } from '../components/ui/VideoCard';
import { useVideoModal } from '../components/ui/VideoContext';
import { SectionDivider } from '../components/ui/SectionDivider';
import { toast } from 'sonner';

export const HomePage: React.FC = () => {
  const { openVideoModal } = useVideoModal();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Autoplay background video reliably
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  // Quick Waitlist Form State (Overlapping Hero)
  const [waitlistData, setWaitlistData] = useState({
    name: '',
    mobile: '',
    city: 'Indore',
    userType: 'Rider',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleHeroWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistData.name || !waitlistData.mobile) {
      toast.error('Please enter your name and 10-digit mobile number.');
      return;
    }
    if (!/^\d{10}$/.test(waitlistData.mobile.trim())) {
      toast.error('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Congratulations! You are on the priority waitlist.', {
        description: `We will SMS you on ${waitlistData.mobile} as soon as TezzEV unlocks in ${waitlistData.city}.`,
      });
      setWaitlistData({ name: '', mobile: '', city: 'Indore', userType: 'Rider' });
    }, 600);
  };

  // Launch Countdown State
  const [timeLeft, setTimeLeft] = useState({
    days: 31,
    hours: 8,
    minutes: 42,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* ======================================================== */}
      {/* 1. HERO SECTION (Full Background Video Showcase) */}
      {/* ======================================================== */}
      <section className="relative min-h-[580px] sm:min-h-[640px] bg-navy-950 text-white pt-12 pb-24 md:pt-16 md:pb-28 overflow-hidden flex items-center">
        {/* Full Hero Background Video - Highly visible with clear motion */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            ref={videoRef}
            src={siteConfig.videos.heroBg.src}
            autoPlay
            loop
            muted
            playsInline
            poster="/images/poster-1.jpg"
            className="w-full h-full object-cover opacity-90"
          >
            <source src={siteConfig.videos.heroBg.src} type="video/mp4" />
          </video>
          {/* Directional contrast gradient: Solid dark on left for text legibility, transparent on right for full video visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/98 via-navy-950/80 to-navy-950/20" />
        </div>

        <div className="container-custom relative z-10 w-full">
          <div className="max-w-2xl space-y-5 text-left">
            {/* Pill: Launching Soon */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-900/90 border border-navy-700 text-xs sm:text-sm font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-leaf" />
              <span className="text-white font-semibold tracking-wide">Launching Soon</span>
              <span className="text-text-dark-muted">• {siteConfig.launchCity}</span>
            </div>

            {/* H1 Headings: Max 7 words, Key word in #7FB0FF */}
            <h1 className="text-white tracking-tight leading-[1.12]">
              Go Green. Go Far. Ride <span className="text-blue-light">TEZZ.</span>
            </h1>

            {/* Simple Voice Subtext: 2 short lines */}
            <p className="text-slate-200 text-base sm:text-lg sm:leading-relaxed max-w-xl">
              Petrol ka zamana khatam. Ab sheher chalega TEZZ! High range electric scooter rental for delivery riders and daily commuters.
            </p>

            {/* Buttons: Primary & Secondary */}
            <div className="flex items-center gap-3.5 flex-wrap pt-1">
              <Link to="/waitlist" className="btn-primary">
                <span>Join Waitlist</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() =>
                  openVideoModal({
                    src: siteConfig.videos.heroBg.src,
                    title: 'TezzEV Official Ride Experience',
                    poster: '/images/poster-1.jpg',
                  })
                }
                className="btn-secondary-dark"
              >
                <Play className="w-4 h-4 text-leaf fill-leaf" />
                <span>Watch Video</span>
              </button>
            </div>

            {/* Trust Row */}
            <div className="pt-3 border-t border-navy-800/80 grid grid-cols-3 gap-3 max-w-lg">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-text-dark-muted">
                <Zap className="w-4 h-4 text-leaf shrink-0" />
                <span className="font-semibold text-white">Zero petrol cost</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-text-dark-muted">
                <Wrench className="w-4 h-4 text-blue-light shrink-0" />
                <span className="font-semibold text-white">Free maintenance</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-text-dark-muted">
                <Headphones className="w-4 h-4 text-leaf shrink-0" />
                <span className="font-semibold text-white">24/7 help</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. WAITLIST CARD OVERLAPPING HERO BOTTOM */}
      {/* ======================================================== */}
      <div className="container-custom relative -mt-10 sm:-mt-12 z-20">
        <div className="bg-[#F4F8FE] rounded-2xl p-5 sm:p-7 border border-[#D6E4FB] shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-100">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-royal">
                Early Bird Advantage
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-navy-950 font-heading">
                Be First To Ride In <span className="text-royal">{siteConfig.launchCity}</span>
              </h2>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xs">
              No advance payment needed. Reserve your preferred vehicle before official rollout.
            </p>
          </div>

          <form
            onSubmit={handleHeroWaitlistSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end"
          >
            <div>
              <label className="block text-xs font-semibold text-navy-950 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={waitlistData.name}
                onChange={(e) => setWaitlistData({ ...waitlistData, name: e.target.value })}
                placeholder="Ramesh Kumar"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:border-royal focus:ring-1 focus:ring-royal text-navy-950"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-navy-950 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                required
                maxLength={10}
                value={waitlistData.mobile}
                onChange={(e) => setWaitlistData({ ...waitlistData, mobile: e.target.value })}
                placeholder="98765 43210"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:border-royal focus:ring-1 focus:ring-royal text-navy-950"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-navy-950 mb-1">
                City / Location
              </label>
              <select
                value={waitlistData.city}
                onChange={(e) => setWaitlistData({ ...waitlistData, city: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:border-royal focus:ring-1 focus:ring-royal text-navy-950 bg-white"
              >
                <option value="Indore">Indore</option>
                <option value="Bhopal">Bhopal</option>
                <option value="Other MP City">Other MP City</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-navy-950 mb-1">
                I am looking to
              </label>
              <select
                value={waitlistData.userType}
                onChange={(e) => setWaitlistData({ ...waitlistData, userType: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:border-royal focus:ring-1 focus:ring-royal text-navy-950 bg-white"
              >
                <option value="Rider">Deliver with Zomato/Swiggy</option>
                <option value="Personal">Personal / Office Commute</option>
                <option value="Fleet">Small Fleet / Business</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center !min-h-[42px]"
              >
                <span>{isSubmitting ? 'Reserving...' : 'Join Waitlist'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* WAVE DIVIDER: Deep Navy to Sky-200 */}
      <SectionDivider type="navy-to-sky200" className="mt-4" />

      {/* ======================================================== */}
      {/* 3. WATCH TEZZEV IN ACTION (Sky-200) - VERTICAL VIDEO CARDS */}
      {/* ======================================================== */}
      <section className="bg-sky-200 text-text-light section-pad">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-royal">
              Video Gallery
            </span>
            <h2 className="text-navy-950 mt-1 mb-1.5">
              Watch TezzEV in <span className="text-royal">action</span>
            </h2>
            <p className="text-slate-700 text-sm sm:text-base">
              Vertical video reels showing city performance, battery swap, and delivery cargo setup.
            </p>
          </div>

          {/* 4 Vertical Video Cards - Perfectly Fits Vertical Videos/Posters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <VideoCard
              src={siteConfig.videos.homeMain.src}
              title="TezzEV Launching Soon"
              poster="/images/poster-2.jpg"
              aspect="vertical"
            />
            <VideoCard
              src={siteConfig.videos.homeClip1.src}
              title="Smooth City Commute"
              poster="/images/poster-1.jpg"
              aspect="vertical"
            />
            <VideoCard
              src={siteConfig.videos.homeClip2.src}
              title="Quick Battery Swap Demo"
              poster="/images/poster-3.jpg"
              aspect="vertical"
            />
            <VideoCard
              src={siteConfig.videos.homeClip3.src}
              title="Delivery Cargo Capacity"
              poster="/images/concept-banner.jpg"
              aspect="vertical"
            />
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-200 to Deep Navy */}
      <SectionDivider type="sky200-to-navy" />

      {/* ======================================================== */}
      {/* 4. WHY CHOOSE TEZZEV (Deep Navy Gradient) */}
      {/* ======================================================== */}
      <section className="bg-gradient-deep text-white section-pad">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-light">
              Rider First Benefits
            </span>
            <h2 className="text-white mt-1 mb-1.5">
              Why choose <span className="text-blue-light">TezzEV</span>
            </h2>
            <p className="text-text-dark-muted text-sm sm:text-base">
              Engineered specifically for Indian gig delivery riders to maximize take-home income.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-[#F4F8FE] rounded-2xl p-5 border border-[#D6E4FB] shadow-md flex flex-col justify-between">
              <div>
                <div className="icon-tile mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy-950 font-heading mb-1.5">
                  Zero Petrol Cost
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Save ₹8,000 to ₹12,000 every month on high fuel prices. Pure electric profit.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 mt-3 text-xs font-semibold text-royal flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-leaf" /> No fuel station queue
              </div>
            </div>

            <div className="bg-[#F4F8FE] rounded-2xl p-5 border border-[#D6E4FB] shadow-md flex flex-col justify-between">
              <div>
                <div className="icon-tile mb-3">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy-950 font-heading mb-1.5">
                  Free Maintenance
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Regular servicing, brake pad checks, and tyre wear are fully covered by TezzEV.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 mt-3 text-xs font-semibold text-royal flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-leaf" /> 100% Free at our hubs
              </div>
            </div>

            <div className="bg-[#F4F8FE] rounded-2xl p-5 border border-[#D6E4FB] shadow-md flex flex-col justify-between">
              <div>
                <div className="icon-tile mb-3">
                  <BatteryCharging className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy-950 font-heading mb-1.5">
                  Fast Battery Swap
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Swap depleted batteries in under 2 minutes at our network of city hubs.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 mt-3 text-xs font-semibold text-royal flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-leaf" /> Zero waiting time
              </div>
            </div>

            <div className="bg-[#F4F8FE] rounded-2xl p-5 border border-[#D6E4FB] shadow-md flex flex-col justify-between">
              <div>
                <div className="icon-tile mb-3">
                  <Headphones className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy-950 font-heading mb-1.5">
                  24/7 Breakdown Help
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Puncture or vehicle snag on shift? Our mobile support team reaches you quickly.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 mt-3 text-xs font-semibold text-royal flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-leaf" /> Free replacement vehicle
              </div>
            </div>

            <div className="bg-[#F4F8FE] rounded-2xl p-5 border border-[#D6E4FB] shadow-md flex flex-col justify-between">
              <div>
                <div className="icon-tile mb-3">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy-950 font-heading mb-1.5">
                  Easy Paperless Signup
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Register in 2 minutes with simple digital documents. Get verified without hassle.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 mt-3 text-xs font-semibold text-royal flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-leaf" /> Quick digital approval
              </div>
            </div>

            <div className="bg-[#F4F8FE] rounded-2xl p-5 border border-[#D6E4FB] shadow-md flex flex-col justify-between">
              <div>
                <div className="icon-tile mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy-950 font-heading mb-1.5">
                  Refer and Earn
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Introduce fellow riders to TezzEV and earn rental credits on every verified friend.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 mt-3 text-xs font-semibold text-royal flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-leaf" /> Community benefits
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Deep Navy to Sky-100 */}
      <SectionDivider type="navy-to-sky100" />

      {/* ======================================================== */}
      {/* 5. MEET THE SCOOTER (Sky-100) */}
      {/* ======================================================== */}
      <section className="bg-sky-100 text-text-light section-pad">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            {/* Left: Vertical Video Card */}
            <div className="lg:col-span-5 max-w-sm mx-auto w-full">
              <VideoCard
                src={siteConfig.videos.scooterTour.src}
                title="Complete TezzEV Scooter 360 Tour"
                poster="/images/poster-1.jpg"
                aspect="vertical"
              />
            </div>

            {/* Right: 3 Bullets + Button */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-royal">
                  High Performance EV
                </span>
                <h2 className="text-navy-950 mt-1 mb-2">
                  Meet the <span className="text-royal">scooter</span>
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Crafted for rough Indian road conditions with strong dual suspension and spacious cargo footboard.
                </p>
              </div>

              {/* 3 Bullets */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-royal text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-navy-950 font-heading">
                      Heavy-Duty Cargo Carrier
                    </h4>
                    <p className="text-xs text-slate-600">
                      Reinforced back rack easily holds large delivery bags for Zomato, Swiggy, and Blinkit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-royal text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-navy-950 font-heading">
                      Long Single Charge Range
                    </h4>
                    <p className="text-xs text-slate-600">
                      Ride uninterrupted throughout your shifts without fear of battery draining midway.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-royal text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-navy-950 font-heading">
                      Bright Dual LED Headlamps
                    </h4>
                    <p className="text-xs text-slate-600">
                      Clear illumination for safe night food delivery and late evening commutes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-1">
                <Link to="/our-scooter" className="btn-primary">
                  <span>Explore All Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-100 to Deep Navy */}
      <SectionDivider type="sky100-to-navy" />

      {/* ======================================================== */}
      {/* 6. START IN 4 EASY STEPS (Deep Navy) - VERTICAL VIDEO CARDS */}
      {/* ======================================================== */}
      <section className="bg-gradient-deep text-white section-pad">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-light">
              Simple Onboarding
            </span>
            <h2 className="text-white mt-1 mb-1.5">
              Start in 4 <span className="text-blue-light">easy steps</span>
            </h2>
            <p className="text-text-dark-muted text-sm sm:text-base">
              No complicated paperwork. Pick up your electric scooter and start earning in hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Step 1 */}
            <div className="bg-[#F4F8FE] rounded-2xl p-4 border border-[#D6E4FB] shadow-md flex flex-col justify-between text-navy-950">
              <div className="mb-3">
                <VideoCard
                  src={siteConfig.videos.step1.src}
                  title="Step 1: Register Online"
                  poster="/images/poster-3.jpg"
                  aspect="vertical"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-6 h-6 rounded-full bg-royal text-white font-bold text-xs flex items-center justify-center">
                    1
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-navy-950 font-heading">
                    Register Online
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fill simple contact details and choose your rental plan in 2 minutes.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#F4F8FE] rounded-2xl p-4 border border-[#D6E4FB] shadow-md flex flex-col justify-between text-navy-950">
              <div className="mb-3">
                <VideoCard
                  src={siteConfig.videos.step2.src}
                  title="Step 2: Get Verified"
                  poster="/images/poster-1.jpg"
                  aspect="vertical"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-6 h-6 rounded-full bg-royal text-white font-bold text-xs flex items-center justify-center">
                    2
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-navy-950 font-heading">
                    Get Verified
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Quick Aadhaar &amp; Driving Licence check done smoothly digitally.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#F4F8FE] rounded-2xl p-4 border border-[#D6E4FB] shadow-md flex flex-col justify-between text-navy-950">
              <div className="mb-3">
                <VideoCard
                  src={siteConfig.videos.step3.src}
                  title="Step 3: Pick Up Scooter"
                  poster="/images/concept-banner.jpg"
                  aspect="vertical"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-6 h-6 rounded-full bg-royal text-white font-bold text-xs flex items-center justify-center">
                    3
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-navy-950 font-heading">
                    Pick Up Scooter
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Visit the nearest TezzEV Hub and collect your charged vehicle with keys.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-[#F4F8FE] rounded-2xl p-4 border border-[#D6E4FB] shadow-md flex flex-col justify-between text-navy-950">
              <div className="mb-3">
                <VideoCard
                  src={siteConfig.videos.step4.src}
                  title="Step 4: Ride and Earn"
                  poster="/images/poster-2.jpg"
                  aspect="vertical"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-6 h-6 rounded-full bg-royal text-white font-bold text-xs flex items-center justify-center">
                    4
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-navy-950 font-heading">
                    Ride and Earn
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Start deliveries on your preferred delivery apps and save daily petrol cash.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <Link to="/how-it-works" className="btn-secondary-dark !min-h-[42px] !py-0 !px-6 text-sm">
              <span>View Detailed Process &amp; FAQs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Deep Navy to Sky-200 */}
      <SectionDivider type="navy-to-sky200" />

      {/* ======================================================== */}
      {/* 7. SIMPLE PRICING (Sky-200) */}
      {/* ======================================================== */}
      <section className="bg-sky-200 text-text-light section-pad">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-royal">
              Transparent Plans
            </span>
            <h2 className="text-navy-950 mt-1 mb-1.5">
              Simple rental <span className="text-royal">pricing</span>
            </h2>
            <p className="text-slate-700 text-sm sm:text-base">
              No hidden fees. Affordable plans with free maintenance and hub swaps included.
            </p>
          </div>

          {/* 3 Placeholder Plan Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-8">
            {siteConfig.pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-[#F4F8FE] rounded-2xl p-6 border border-[#D6E4FB] shadow-md flex flex-col justify-between relative ${
                  plan.popular ? 'border-2 border-royal shadow-lg md:-translate-y-1' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-royal text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-navy-950 font-heading">
                      {plan.name}
                    </h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-100 text-royal font-semibold">
                      {plan.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mb-4">{plan.description}</p>

                  <div className="mb-4 pb-4 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-black text-navy-950 font-heading">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-500">/{plan.period}</span>
                    </div>
                    <span className="text-[11px] text-slate-500 mt-0.5 block">
                      *Exact launch rate revealed on city launch.
                    </span>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-leaf shrink-0" />
                        <span className="text-navy-950 font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/waitlist"
                  className={plan.popular ? 'btn-primary w-full justify-center !min-h-[42px]' : 'btn-secondary-light w-full justify-center !min-h-[42px]'}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* 8. SEE HOW MUCH YOU SAVE TEASER - Fixed Solid Navy Contrast, 100% Readable */}
          <div className="w-full bg-navy-950 rounded-2xl p-6 sm:p-8 border border-navy-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-5 text-white">
            <div className="space-y-1.5 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal/40 text-blue-light text-xs font-semibold mb-1">
                <TrendingDown className="w-3.5 h-3.5 text-leaf" />
                <span>Save Up To ₹10,000 / Month</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                See How Much You Save Every Month
              </h3>
              <p className="text-sm text-slate-300 max-w-lg">
                Calculate your exact fuel savings based on your daily riding distance.
              </p>
            </div>

            <Link
              to="/savings"
              className="btn-primary !min-h-[44px] shrink-0 font-bold"
            >
              <span>Open Savings Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-200 to Deep Navy */}
      <SectionDivider type="sky200-to-navy" />

      {/* ======================================================== */}
      {/* 9. RIDE FOR ANY PLATFORM & 10. DAILY RENT GUESS BANNER (Sky-100) */}
      {/* ======================================================== */}
      <section className="bg-sky-100 text-text-light section-pad">
        <div className="container-custom space-y-10">
          {/* 9. Ride for any platform */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-royal">
                Multi-Platform Compatibility
              </span>
              <h2 className="text-navy-950 mt-1 mb-1">
                Ride for any <span className="text-royal">platform</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                TezzEV scooters are commercially compliant for all leading Indian delivery &amp; mobility apps.
              </p>
            </div>

            {/* Text Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-4xl mx-auto">
              {siteConfig.platforms.map((platform, idx) => (
                <div
                  key={idx}
                  className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-navy-950 font-bold text-sm shadow-sm hover:border-royal transition-all select-none"
                >
                  {platform}
                </div>
              ))}
            </div>
          </div>

          {/* 10. Daily Rent Guess Karo Banner - Solid Navy Background, 100% Readable */}
          <div className="w-full bg-navy-950 rounded-2xl p-6 sm:p-8 border border-navy-800 shadow-xl text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal/40 border border-blue-light/30 text-xs font-semibold text-blue-light">
                  <Sparkles className="w-3.5 h-3.5 text-leaf" />
                  <span>Launch Event Contest</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                  Daily Rent <span className="text-blue-light">Guess Karo</span>
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                  Speed ka naya code unlock ho raha hai! Guess the per-day rental price and join the buzz before launch day.
                </p>
                <div className="pt-2 flex items-center gap-3 flex-wrap">
                  <Link to="/guess-rent" className="btn-primary !min-h-[42px]">
                    <span>Guess The Rent Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary-dark !min-h-[42px] !text-xs sm:!text-sm"
                  >
                    DM on Instagram
                  </a>
                </div>
              </div>

              {/* Vertical Poster 2 Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[280px] rounded-2xl overflow-hidden shadow-2xl border border-navy-800">
                  <img
                    src="/images/poster-2.jpg"
                    alt="Daily Rent Guess Karo Banner"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-100 to Deep Navy */}
      <SectionDivider type="sky100-to-navy" />

      {/* ======================================================== */}
      {/* 11. FINAL CTA (Deep Navy Gradient) */}
      {/* ======================================================== */}
      <section className="bg-gradient-deep text-white section-pad text-center">
        <div className="container-custom max-w-3xl mx-auto space-y-5">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-900 border border-navy-700 text-xs font-semibold text-blue-light">
              <Clock className="w-3.5 h-3.5 text-leaf" />
              <span>Launch Countdown</span>
            </span>
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-heading font-bold">
              Something <span className="text-blue-light">TEZZ</span> is coming to your city.
            </h2>
            <p className="text-text-dark-muted text-xs sm:text-sm max-w-xl mx-auto">
              Get priority notification the moment vehicle bookings open. Limited units in the first fleet batch.
            </p>
          </div>

          {/* Countdown Boxes */}
          <div className="grid grid-cols-4 gap-2.5 sm:gap-3 max-w-md mx-auto">
            <div className="p-3 rounded-xl bg-navy-900 border border-navy-800 text-center shadow-md">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-heading block">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase text-text-dark-muted font-medium mt-0.5 block">
                Days
              </span>
            </div>
            <div className="p-3 rounded-xl bg-navy-900 border border-navy-800 text-center shadow-md">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-heading block">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase text-text-dark-muted font-medium mt-0.5 block">
                Hours
              </span>
            </div>
            <div className="p-3 rounded-xl bg-navy-900 border border-navy-800 text-center shadow-md">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-heading block">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase text-text-dark-muted font-medium mt-0.5 block">
                Mins
              </span>
            </div>
            <div className="p-3 rounded-xl bg-navy-900 border border-navy-800 text-center shadow-md">
              <span className="text-2xl sm:text-3xl font-extrabold text-leaf font-heading block">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase text-text-dark-muted font-medium mt-0.5 block">
                Secs
              </span>
            </div>
          </div>

          {/* Final CTA Buttons */}
          <div className="flex items-center justify-center gap-3 flex-wrap pt-1">
            <Link to="/waitlist" className="btn-primary !min-h-[44px]">
              <span>Join Waitlist Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/how-it-works" className="btn-secondary-dark !min-h-[44px]">
              <span>How It Works</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
