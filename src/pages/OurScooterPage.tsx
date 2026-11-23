import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  BatteryCharging,
  Gauge,
  RefreshCw,
  Package,
  ShieldCheck,
  Palette,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Share2,
  Heart,
  RotateCcw,
  Clock,
  Zap,
  Check,
  ChevronRight,
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { VideoCard } from '../components/ui/VideoCard';
import { SectionDivider } from '../components/ui/SectionDivider';
import { useVideoModal } from '../components/ui/VideoContext';
import { siteConfig } from '../lib/config';

export const OurScooterPage: React.FC = () => {
  const navigate = useNavigate();
  const { openVideoModal } = useVideoModal();
  const [activeImage, setActiveImage] = useState('/images/scooter-clean-cutout.png');
  const [isFavorite, setIsFavorite] = useState(false);

  const iconMap: Record<string, React.ElementType> = {
    BatteryCharging,
    Gauge,
    RefreshCw,
    Package,
    ShieldCheck,
    Palette,
  };

  const scooterFeatures = [
    {
      title: 'Commercial Heavy Cargo Rack',
      desc: 'Tested to support oversized thermal food boxes and courier sacks safely without wobbling.',
    },
    {
      title: 'Tubeless Puncture-Resistant Tyres',
      desc: '12-inch durable all-weather tyres built to glide over potholes and speed breakers.',
    },
    {
      title: 'Fast 2-Minute Battery Swap',
      desc: 'Quick release locking mechanism lets you swap packs in under 120 seconds at any hub.',
    },
    {
      title: 'Digital High-Visibility Console',
      desc: 'Crisp readout of speed, battery percentage, odometer, and trip metrics under direct sunlight.',
    },
    {
      title: 'Dual Front Hydraulic Suspension',
      desc: 'Smooth ride absorbs road vibration, reducing rider fatigue over 8 to 10 hour work shifts.',
    },
    {
      title: 'Water & Dust Resistant Rating',
      desc: 'Engineered for monsoon downpours and dusty summer roads with sealed electronics.',
    },
  ];

  return (
    <div className="w-full">
      {/* ======================================================== */}
      {/* MOBILE NATIVE APP SCOOTER DETAIL VIEW (< 768px, Pinterest UX) */}
      {/* ======================================================== */}
      <div className="block md:hidden bg-[#F8FAFC] text-navy-950 pb-28 pt-20">
        {/* Top Navigation Row (Back, Share, Heart) */}
        <div className="px-4 flex items-center justify-between mb-3">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-navy-950 active:scale-90 transition-transform"
            aria-label="Back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: 'TezzEV Electric Scooter', url: window.location.href }).catch(() => {});
                }
              }}
              className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-700 active:scale-90 transition-transform"
              aria-label="Share"
            >
              <Share2 className="w-4 h-4 text-slate-700" />
            </button>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center active:scale-90 transition-transform"
              aria-label="Favorite"
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'text-royal fill-royal' : 'text-slate-700'}`} />
            </button>
          </div>
        </div>

        {/* Hero Header Typography */}
        <div className="px-4 space-y-1 mb-3">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
            TEZZEV 2025 FLEET EDITION
          </span>
          <h1 className="text-3xl font-black font-heading text-navy-950 tracking-tight">
            Tezz Cargo Pro
          </h1>
          <p className="text-xs text-slate-500 font-medium">
            High-Payload Commercial Electric Scooter
          </p>
        </div>

        {/* Large Hero Image Container with Curved Sky Gradient Background */}
        <div className="relative mx-4 rounded-3xl bg-gradient-to-b from-[#EAF2FF] via-[#E2EDFF] to-white border border-blue-100/70 p-4 min-h-[250px] flex items-center justify-center shadow-inner overflow-hidden mb-4">
          <img
            src={activeImage}
            alt="TezzEV Electric Scooter"
            className="max-h-52 max-w-full object-contain filter drop-shadow-xl transition-all duration-300"
          />

          {/* 360° Tour Pill Button */}
          <button
            onClick={() =>
              openVideoModal({
                src: siteConfig.videos.scooterTour.src,
                title: 'TezzEV Full 360° Vehicle Walkthrough',
                poster: '/images/poster-1.jpg',
              })
            }
            className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-full bg-[#06122E] text-white text-xs font-bold flex items-center gap-1.5 shadow-lg active:scale-95 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5 text-blue-light" />
            <span>360° View</span>
          </button>
        </div>

        {/* 4 Thumbnails Row */}
        <div className="px-4 grid grid-cols-4 gap-2.5 mb-5">
          {[
            { src: '/images/scooter-clean-cutout.png', label: 'Cutout' },
            { src: '/images/scooter-side.png', label: 'Side' },
            { src: '/images/scooter-hero.png', label: 'Hero' },
            { src: '/images/poster-1.jpg', label: 'Hub Demo', badge: '+3' },
          ].map((thumb, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(thumb.src)}
              className={`relative h-18 rounded-2xl p-1.5 bg-white border-2 flex items-center justify-center overflow-hidden transition-all shadow-xs ${
                activeImage === thumb.src ? 'border-royal shadow-md scale-102' : 'border-slate-100 hover:border-slate-300'
              }`}
            >
              <img src={thumb.src} alt={thumb.label} className="max-h-full max-w-full object-contain" />
              {thumb.badge && (
                <div className="absolute inset-0 bg-navy-950/60 flex items-center justify-center text-white text-xs font-extrabold backdrop-blur-[1px]">
                  {thumb.badge}
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Hub Support Info Card */}
        <div className="mx-4 p-4 rounded-2xl bg-white border border-slate-150 shadow-xs flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-royal flex items-center justify-center shrink-0 border border-blue-100">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-navy-950">TezzEV Hub Support</h4>
              <p className="text-[11px] text-slate-500 leading-tight">
                Free maintenance &amp; 2-min battery swaps at Indore &amp; Bhopal hubs.
              </p>
            </div>
          </div>
          <span className="shrink-0 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200 flex items-center gap-1">
            <Check className="w-3 h-3 text-emerald-600" />
            <span>Included</span>
          </span>
        </div>

        {/* Specifications 3x2 Grid */}
        <div className="px-4 space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black font-heading text-navy-950">
              Specifications
            </h3>
            <span className="text-xs font-bold text-royal">
              Commercial Spec
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            {/* Tile 1: Range */}
            <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-xs space-y-1">
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-royal flex items-center justify-center">
                <BatteryCharging className="w-4 h-4" />
              </div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Range</span>
              <span className="text-xs font-black text-navy-950 block">100+ km</span>
            </div>

            {/* Tile 2: Top Speed */}
            <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-xs space-y-1">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Gauge className="w-4 h-4" />
              </div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Top Speed</span>
              <span className="text-xs font-black text-navy-950 block">65 km/h</span>
            </div>

            {/* Tile 3: Swap Time */}
            <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-xs space-y-1">
              <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Swap Time</span>
              <span className="text-xs font-black text-navy-950 block">&lt; 2 min</span>
            </div>

            {/* Tile 4: Payload */}
            <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-xs space-y-1">
              <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <Package className="w-4 h-4" />
              </div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Payload</span>
              <span className="text-xs font-black text-navy-950 block">160 kg</span>
            </div>

            {/* Tile 5: Battery */}
            <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-xs space-y-1">
              <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Battery</span>
              <span className="text-xs font-black text-navy-950 block">2.5 kWh LFP</span>
            </div>

            {/* Tile 6: Brakes */}
            <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-xs space-y-1">
              <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Brakes</span>
              <span className="text-xs font-black text-navy-950 block">Dual CBS</span>
            </div>
          </div>
        </div>

        {/* Video Tour Reel Card */}
        <div className="px-4 mb-4">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white">
            <VideoCard
              src={siteConfig.videos.scooterTour.src}
              title="TezzEV Live 360° Walkthrough"
              poster="/images/poster-1.jpg"
              aspect="video"
            />
          </div>
        </div>

        {/* STICKY BOTTOM BOOKING BAR */}
        <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 px-5 py-3.5 flex items-center justify-between z-50 shadow-2xl">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Rental Price
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black font-heading text-navy-950">
                ₹199*
              </span>
              <span className="text-xs text-slate-500 font-semibold">/ day</span>
            </div>
          </div>

          <div className="h-8 w-px bg-slate-200 mx-2" />

          <Link
            to="/waitlist"
            className="flex-1 max-w-[220px] h-12 rounded-2xl bg-gradient-to-r from-royal to-blue hover:from-blue hover:to-royal text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-royal/35 active:scale-95 transition-transform"
          >
            <span>Pre-Book Scooter</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ======================================================== */}
      {/* DESKTOP VIEW (>= 768px, Intact DriveX Layout)            */}
      {/* ======================================================== */}
      <div className="hidden md:block">
      <PageHeader
        breadcrumbs={[{ label: 'Our Scooter' }]}
        title="Meet The TezzEV Electric Scooter"
        highlightWord="TezzEV"
        subtitle="Custom built for Indian delivery riders. High range, swappable power, and heavy luggage carrier."
      />

      {/* WAVE DIVIDER: Deep Navy to Sky-200 */}
      <SectionDivider type="navy-to-sky200" />

      {/* Section 1: Large Tour Video (Sky-200) - Split 2-Column Layout */}
      <section className="bg-sky-200 text-text-light section-pad">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: Text & Features */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-royal">
                Vehicle Showcase
              </span>
              <h2 className="text-navy-950">
                Full 360° Scooter <span className="text-royal">Tour</span>
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                Take a detailed visual walkthrough of the vehicle ergonomics, heavy-duty frame build, and swappable battery slot designed for Indian delivery conditions.
              </p>
              <div className="pt-2 grid grid-cols-2 gap-3 max-w-md">
                <div className="p-3 rounded-xl bg-[#F4F8FE] border border-[#D6E4FB] text-xs font-semibold text-navy-950 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-leaf"></span>
                  <span>Heavy Duty Carrier</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F4F8FE] border border-[#D6E4FB] text-xs font-semibold text-navy-950 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-leaf"></span>
                  <span>IP67 Water Protected</span>
                </div>
              </div>
              <div className="pt-2">
                <Link to="/waitlist" className="btn-primary !min-h-[44px]">
                  <span>Book Early Ride</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Vertical Video Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[340px] rounded-2xl overflow-hidden shadow-xl border border-slate-300">
                <VideoCard
                  src={siteConfig.videos.scooterTour.src}
                  title={siteConfig.videos.scooterTour.title}
                  poster="/images/poster-1.jpg"
                  aspect="vertical"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-200 to Deep Navy */}
      <SectionDivider type="sky200-to-navy" />

      {/* Section 2: 6 Technical Spec Cards + Royal Blue Chip (Deep Navy) */}
      <section className="bg-gradient-deep text-white section-pad">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-navy-700 text-xs font-semibold text-blue-light mb-2">
              <Sparkles className="w-3.5 h-3.5 text-leaf" />
              <span>Durable Finish</span>
              <span className="px-2 py-0.5 rounded-full bg-royal text-white font-bold ml-1">
                Royal Blue
              </span>
            </div>
            <h2 className="text-white mt-1 mb-1.5">
              Technical <span className="text-blue-light">specifications</span>
            </h2>
            <p className="text-text-dark-muted text-sm sm:text-base">
              Key performance numbers optimized for Indian delivery duty cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {siteConfig.specs.map((spec, idx) => {
              const Icon = iconMap[spec.icon] || BatteryCharging;
              return (
                <div key={idx} className="tezz-card p-5 flex flex-col justify-between">
                  <div>
                    <div className="icon-tile mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-xs uppercase font-bold tracking-wider text-text-light-muted mb-1">
                      {spec.label}
                    </div>
                    <div className="text-2xl font-black text-navy-950 font-heading mb-1 flex items-center gap-2">
                      <span>{spec.value}</span>
                      {spec.label === 'Colour Options' && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-royal text-white font-semibold">
                          Signature
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="pt-2.5 border-t border-slate-100 text-xs text-text-light-muted">
                    {spec.detail}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Deep Navy to Sky-100 */}
      <SectionDivider type="navy-to-sky100" />

      {/* Section 3: Feature Highlights Video Showcase (Sky-100) */}
      <section className="bg-sky-100 text-text-light section-pad">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-royal">
              Close-Up Highlights
            </span>
            <h2 className="text-navy-950 mt-1 mb-1.5">
              Explore key <span className="text-royal">features</span>
            </h2>
            <p className="text-text-light-muted text-sm sm:text-base">
              Watch separate short videos of headlights, battery swapping, console, and city ride.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <VideoCard
                src={siteConfig.videos.headlight.src}
                title={siteConfig.videos.headlight.title}
                poster="/images/poster-2.jpg"
                aspect="vertical"
              />
              <div className="px-1">
                <h4 className="font-bold text-sm text-navy-950 font-heading">
                  Dual LED Headlights
                </h4>
                <p className="text-xs text-text-light-muted mt-0.5">
                  High-beam night safety for delivery dark alleys.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <VideoCard
                src={siteConfig.videos.battery.src}
                title={siteConfig.videos.battery.title}
                poster="/images/poster-3.jpg"
                aspect="vertical"
              />
              <div className="px-1">
                <h4 className="font-bold text-sm text-navy-950 font-heading">
                  Battery Swap System
                </h4>
                <p className="text-xs text-text-light-muted mt-0.5">
                  Pop in, lock in 120 seconds, and ride away.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <VideoCard
                src={siteConfig.videos.display.src}
                title={siteConfig.videos.display.title}
                poster="/images/poster-4.jpg"
                aspect="vertical"
              />
              <div className="px-1">
                <h4 className="font-bold text-sm text-navy-950 font-heading">
                  Digital Instrument Display
                </h4>
                <p className="text-xs text-text-light-muted mt-0.5">
                  Clear percentage and speedometer readout.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <VideoCard
                src={siteConfig.videos.riding.src}
                title={siteConfig.videos.riding.title}
                poster="/images/poster-1.jpg"
                aspect="vertical"
              />
              <div className="px-1">
                <h4 className="font-bold text-sm text-navy-950 font-heading">
                  City Road Testing
                </h4>
                <p className="text-xs text-text-light-muted mt-0.5">
                  Handles Indian speed breakers smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-100 to Deep Navy */}
      <SectionDivider type="sky100-to-navy" />

      {/* Section 4: Feature List (Deep Navy) */}
      <section className="bg-gradient-deep text-white section-pad">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-light">
              Engineered for Delivery
            </span>
            <h2 className="text-white mt-1 mb-1.5">
              Built for 10-hour <span className="text-blue-light">workdays</span>
            </h2>
            <p className="text-text-dark-muted text-sm sm:text-base">
              Every curve and component is optimized for comfort and maximum utility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {scooterFeatures.map((feat, i) => (
              <div key={i} className="tezz-card p-5 bg-white text-navy-950">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-leaf shrink-0" />
                  <h4 className="text-sm sm:text-base font-bold font-heading text-navy-950">
                    {feat.title}
                  </h4>
                </div>
                <p className="text-xs text-text-light-muted leading-relaxed pl-6">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Deep Navy to Sky-200 */}
      <SectionDivider type="navy-to-sky200" />

      {/* Section 5: CTA (Sky-200) */}
      <section className="bg-sky-200 text-text-light section-pad text-center">
        <div className="container-custom max-w-2xl mx-auto space-y-4">
          <h2 className="text-navy-950">
            Want to test ride the <span className="text-royal">TezzEV</span> scooter?
          </h2>
          <p className="text-text-light-muted text-sm sm:text-base">
            Join the waitlist today. We invite early waitlisted riders for exclusive pre-launch test runs at our hubs.
          </p>
          <div className="pt-1 flex items-center justify-center gap-3 flex-wrap">
            <Link to="/waitlist" className="btn-primary !min-h-[44px]">
              <span>Join Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/pricing" className="btn-secondary-light !min-h-[44px]">
              <span>View Rental Plans</span>
            </Link>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};
