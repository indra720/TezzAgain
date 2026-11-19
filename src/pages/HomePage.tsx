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
import { InteractiveJoinStepper } from '../components/home/InteractiveJoinStepper';
import { EvVsPetrolComparison } from '../components/home/EvVsPetrolComparison';
import { WhyChooseHub } from '../components/home/WhyChooseHub';
import { CityHubExplorer } from '../components/home/CityHubExplorer';
import { RiderStoriesGallery } from '../components/home/RiderStoriesGallery';
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
        <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-xl">
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

      {/* WAVE DIVIDER: Deep Navy to Sky-100 */}
      <SectionDivider type="navy-to-sky100" className="mt-4" />

      {/* ======================================================== */}
      {/* 3. WATCH TEZZEV IN ACTION (Sky-100) - VERTICAL VIDEO CARDS */}
      {/* ======================================================== */}
      <section className="bg-sky-100 text-navy-950 section-pad">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-royal">
              Video Gallery
            </span>
            <h2 className="text-navy-950 mt-1 mb-1.5 font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl">
              Watch TezzEV in <span className="text-royal">action</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
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
              poster="/images/poster-4.jpg"
              aspect="vertical"
            />
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-100 to White */}
      <SectionDivider type="sky100-to-white" />

      {/* ======================================================== */}
      {/* 4. WHY CHOOSE TEZZEV (Pure White Zypp Orbit Theme) */}
      {/* ======================================================== */}
      <section className="bg-white text-navy-950 section-pad">
        <div className="container-custom">
          <WhyChooseHub />
        </div>
      </section>

      {/* WAVE DIVIDER: White to Sky-100 */}
      <SectionDivider type="white-to-sky100" />

      {/* ======================================================== */}
      {/* 5. MEET THE SCOOTER (Sky-100) */}
      {/* ======================================================== */}
      <section className="bg-sky-100 text-navy-950 section-pad">
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
                <h2 className="text-navy-950 mt-1 mb-2 font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl">
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

      {/* WAVE DIVIDER: Sky-100 to White */}
      <SectionDivider type="sky100-to-white" />

      {/* ======================================================== */}
      {/* 6. START IN 4 EASY STEPS (Pure White Zypp Stepper) */}
      {/* ======================================================== */}
      <section className="bg-white text-navy-950 section-pad">
        <div className="container-custom">
          <InteractiveJoinStepper />

          <div className="text-center mt-6">
            <Link to="/how-it-works" className="btn-secondary-light !min-h-[42px] !py-0 !px-6 text-sm font-semibold">
              <span>View Detailed Process &amp; FAQs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: White to Sky-100 */}
      <SectionDivider type="white-to-sky100" />

      {/* ======================================================== */}
      {/* 7. SIMPLE PRICING (Sky-100) */}
      {/* ======================================================== */}
      <section className="bg-sky-100 text-navy-950 section-pad">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-royal">
              Transparent Plans
            </span>
            <h2 className="text-navy-950 mt-1 mb-1.5 font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl">
              Simple rental <span className="text-royal">pricing</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              No hidden fees. Affordable plans with free maintenance and hub swaps included.
            </p>
          </div>

          {/* 3 Placeholder Plan Cards (Single card on mobile, 3 cards on MD & LG screens) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-stretch mb-8">
            {siteConfig.pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl p-4 sm:p-5 md:p-3.5 lg:p-6 border border-slate-200 shadow-md flex flex-col justify-between relative ${
                  plan.popular ? 'border-2 border-royal shadow-lg md:-translate-y-1' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-royal text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-sm whitespace-nowrap z-10">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2 gap-1.5">
                    <h3 className="text-base sm:text-lg md:text-base lg:text-lg font-bold text-navy-950 font-heading">
                      {plan.name}
                    </h3>
                    {!plan.popular && (
                      <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-blue-50 text-royal font-semibold border border-blue-100 shrink-0">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs md:text-[11px] lg:text-xs text-slate-600 mb-3 sm:mb-4 line-clamp-2">
                    {plan.description}
                  </p>

                  <div className="mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-black text-navy-950 font-heading">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-500">/{plan.period}</span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 block">
                      *Exact launch rate revealed on city launch.
                    </span>
                  </div>

                  <div className="space-y-2 md:space-y-1.5 lg:space-y-2.5 mb-5 sm:mb-6">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 sm:gap-2 text-xs md:text-[11px] lg:text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-leaf shrink-0 mt-0.5" />
                        <span className="text-navy-950 font-medium leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/waitlist"
                  className={plan.popular ? 'btn-primary w-full justify-center !min-h-[40px] text-xs sm:text-sm font-bold' : 'btn-secondary-light w-full justify-center !min-h-[40px] text-xs sm:text-sm font-bold'}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* 8. SEE HOW MUCH YOU SAVE TEASER - Modern Royal Gradient (Airy & Premium) */}
          <div className="w-full bg-gradient-to-r from-royal to-blue-700 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-5 text-white">
            <div className="space-y-1.5 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-1 backdrop-blur-sm">
                <TrendingDown className="w-3.5 h-3.5 text-emerald-300" />
                <span>Save Up To ₹10,000 / Month</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                See How Much You Save Every Month
              </h3>
              <p className="text-sm text-blue-100 max-w-lg">
                Calculate your exact fuel savings based on your daily riding distance.
              </p>
            </div>

            <Link
              to="/savings"
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-royal font-bold text-sm shadow-md transition-all shrink-0 flex items-center gap-2 active:scale-95"
            >
              <span>Open Savings Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-100 to White */}
      <SectionDivider type="sky100-to-white" />

      {/* ======================================================== */}
      {/* 8. EV VS PETROL COMPARISON & SAVINGS (Pure White Theme) */}
      {/* ======================================================== */}
      <section className="bg-white text-navy-950 section-pad">
        <div className="container-custom">
          <EvVsPetrolComparison />
        </div>
      </section>

      {/* WAVE DIVIDER: White to Sky-100 */}
      <SectionDivider type="white-to-sky100" />

      {/* ======================================================== */}
      {/* 9. EXPLORE TEZZEV CITY HUBS (Interactive MP Network) */}
      {/* ======================================================== */}
      <section className="bg-sky-100 text-navy-950 section-pad">
        <div className="container-custom">
          <CityHubExplorer />
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-100 to White */}
      <SectionDivider type="sky100-to-white" />

      {/* ======================================================== */}
      {/* 10. REAL RIDER & CLIENT STORIES (Tezz Champions Wall) */}
      {/* ======================================================== */}
      <section className="bg-white text-navy-950 section-pad">
        <div className="container-custom">
          <RiderStoriesGallery />
        </div>
      </section>

      {/* WAVE DIVIDER: White to Sky-100 */}
      <SectionDivider type="white-to-sky100" />

      {/* ======================================================== */}
      {/* 11. RIDE FOR ANY PLATFORM & DAILY RENT GUESS BANNER (Sky-100) */}
      {/* ======================================================== */}
      <section className="bg-sky-100 text-navy-950 section-pad">
        <div className="container-custom space-y-10">
          {/* 9. Ride for any platform */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-royal">
                Multi-Platform Compatibility
              </span>
              <h2 className="text-navy-950 mt-1 mb-1 font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl">
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

          {/* 10. Daily Rent Guess Karo Banner - Crisp White Card (No Heavy Black Theme) */}
          <div className="w-full bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/90 shadow-xl text-navy-950">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-royal">
                  <Sparkles className="w-3.5 h-3.5 text-royal" />
                  <span>Launch Event Contest</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
                  Daily Rent <span className="text-royal">Guess Karo</span>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
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
                    className="btn-secondary-light !min-h-[42px] !text-xs sm:!text-sm"
                  >
                    DM on Instagram
                  </a>
                </div>
              </div>

              {/* Vertical Poster 2 Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[280px] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
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
