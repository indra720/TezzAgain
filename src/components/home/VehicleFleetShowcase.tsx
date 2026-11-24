import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BatteryCharging,
  Gauge,
  Package,
  Clock,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Heart,
  ChevronRight,
} from 'lucide-react';

interface ScooterModel {
  id: string;
  category: 'all' | 'city' | 'cargo' | 'enterprise';
  badge: string;
  isPopular?: boolean;
  name: string;
  tagline: string;
  image: string;
  range: string;
  speed: string;
  swapTime: string;
  payload: string;
  pricePerDay: string;
  pricePerWeek: string;
  features: string[];
}

const scooterFleet: ScooterModel[] = [
  {
    id: 'city-glide',
    category: 'city',
    badge: 'City Daily Commute',
    name: 'Tezz City Glide',
    tagline: 'Nimble, ultra-efficient scooter designed for fast city transit & light food deliveries.',
    image: '/images/scooter-city-clean.png',
    range: '100+ km',
    speed: '55 km/h',
    swapTime: '< 2 min',
    payload: '130 kg',
    pricePerDay: '₹199*',
    pricePerWeek: '₹1,299*',
    features: ['Agile lightweight frame', 'Smart digital instrument console', 'Free roadside puncture repair'],
  },
  {
    id: 'cargo-pro',
    category: 'cargo',
    badge: 'Most Popular for Gig Delivery',
    isPopular: true,
    name: 'Tezz Cargo Pro',
    tagline: 'Heavy-duty reinforced chassis built specifically for Zomato, Swiggy & Blinkit parcel loads.',
    image: '/images/scooter-side-clean.png',
    range: '120+ km',
    speed: '65 km/h',
    swapTime: '< 2 min',
    payload: '160 kg',
    pricePerDay: '₹249*',
    pricePerWeek: '₹1,499*',
    features: ['Reinforced heavy parcel rack', 'Dual rear shock absorbers', 'Rapid 120-sec battery swap dock'],
  },
  {
    id: 'fleet-super',
    category: 'enterprise',
    badge: 'Long-Shift Heavy Duty',
    name: 'Tezz Fleet Super',
    tagline: 'Commercial powerhouse built for 14-hour non-stop enterprise & logistics operations.',
    image: '/images/scooter-34-cutout.png',
    range: '140+ km',
    speed: '70 km/h',
    swapTime: '< 2 min',
    payload: '180 kg',
    pricePerDay: '₹299*',
    pricePerWeek: '₹1,799*',
    features: ['High-torque commercial motor', 'All-weather water-resistant body', 'Dedicated enterprise hub fast-track'],
  },
];

export const VehicleFleetShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'city' | 'cargo' | 'enterprise'>('all');

  const filteredFleet =
    activeFilter === 'all'
      ? scooterFleet
      : scooterFleet.filter((m) => m.category === activeFilter);

  return (
    <div className="w-full space-y-10 sm:space-y-12">
      {/* 1. Header with Title & DriveX-Style Category Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 border-b border-slate-200/80 pb-6">
        <div className="space-y-1.5 text-left max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-royal tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-royal" />
            <span>Commercial EV Fleet</span>
          </div>
          <h2 className="text-navy-950 font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight">
            Choose Your <span className="text-royal">Ride</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Find the perfect high-efficiency commercial electric scooter calibrated for your daily delivery shifts.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar shrink-0">
          {[
            { key: 'all', label: 'All Fleet Models' },
            { key: 'city', label: 'City Glide' },
            { key: 'cargo', label: 'Cargo Delivery' },
            { key: 'enterprise', label: 'Commercial Super' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key as any)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === tab.key
                  ? 'bg-royal text-white shadow-md shadow-royal/20 scale-102'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <Link
            to="/our-scooter"
            className="hidden lg:inline-flex items-center gap-1 text-xs font-bold text-royal hover:text-blue-700 ml-2"
          >
            <span>View All Specs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2A. MOBILE SNAP CAROUSEL (< 768px, Pinterest Mobile UX)   */}
      {/* ======================================================== */}
      <div className="block md:hidden space-y-3">
        {/* Available Scooters Heading + View All Link */}
        <div className="flex items-center justify-between px-1">
          <h3 className="text-xl font-heading font-black text-navy-950 tracking-tight">
            Available Scooters
          </h3>
          <Link
            to="/our-scooter"
            className="text-xs font-bold text-royal hover:underline flex items-center gap-1"
          >
            <span>View all</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Filter Chips (Recommended, Low to High, Plan Type) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shrink-0 transition-all ${
              activeFilter === 'all'
                ? 'bg-[#06122E] text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-700'
            }`}
          >
            <Sparkles className="w-3 h-3 text-leaf" />
            <span>Recommended</span>
          </button>
          <button
            onClick={() => setActiveFilter('city')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all ${
              activeFilter === 'city'
                ? 'bg-[#06122E] text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-700'
            }`}
          >
            City Glide (₹199)
          </button>
          <button
            onClick={() => setActiveFilter('cargo')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all ${
              activeFilter === 'cargo'
                ? 'bg-[#06122E] text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-700'
            }`}
          >
            Cargo Pro (Gig)
          </button>
          <button
            onClick={() => setActiveFilter('enterprise')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all ${
              activeFilter === 'enterprise'
                ? 'bg-[#06122E] text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-700'
            }`}
          >
            Heavy Fleet
          </button>
        </div>

        {/* Horizontal Snap Scroll Row (Card width 80vw, next card peeking) */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 pb-2">
          {filteredFleet.map((scooter) => (
            <div
              key={scooter.id}
              className="w-[82vw] shrink-0 snap-center bg-white rounded-3xl p-4 shadow-[0_10px_28px_rgba(11,27,77,0.08)] border border-slate-150 flex flex-col justify-between"
            >
              {/* Card Header: Badge & Heart Icon */}
              <div className="flex items-center justify-between mb-1">
                {scooter.isPopular ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-royal border border-blue-200 text-[10px] font-extrabold uppercase tracking-wider">
                    <Zap className="w-3 h-3 text-royal fill-royal" />
                    <span>Popular</span>
                  </span>
                ) : (
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    {scooter.badge}
                  </span>
                )}
                <button
                  type="button"
                  aria-label="Add to favorites"
                  className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-royal active:scale-90 transition-all"
                >
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              {/* Scooter Cutout Large Image */}
              <div className="w-full h-40 bg-gradient-to-b from-slate-50/60 to-blue-50/30 rounded-2xl p-2 flex items-center justify-center my-1.5">
                <img
                  src={scooter.image}
                  alt={scooter.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-md"
                  loading="lazy"
                />
              </div>

              {/* Title & Short Tagline */}
              <div className="mb-3">
                <h4 className="text-lg font-black font-heading text-navy-950">
                  {scooter.name}
                </h4>
                <p className="text-xs text-slate-500 truncate mt-0.5">
                  {scooter.tagline}
                </p>
              </div>

              {/* 3 Quick Specs Tiles (Range, Speed, Swap) */}
              <div className="grid grid-cols-3 gap-2 py-2.5 px-1 bg-slate-50 rounded-2xl border border-slate-100 mb-3 text-center">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">
                    Range
                  </span>
                  <span className="text-xs font-bold text-navy-950">{scooter.range}</span>
                </div>
                <div className="border-x border-slate-200">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">
                    Speed
                  </span>
                  <span className="text-xs font-bold text-navy-950">{scooter.speed}</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">
                    Swap
                  </span>
                  <span className="text-xs font-bold text-navy-950">{scooter.swapTime}</span>
                </div>
              </div>

              {/* Price & Circular Action Arrow Button */}
              <div className="flex items-center justify-between pt-1">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Starting At
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-black font-heading text-navy-950">
                      {scooter.pricePerDay}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">/ day</span>
                  </div>
                </div>

                <Link
                  to="/our-scooter"
                  aria-label={`View ${scooter.name} details`}
                  className="w-11 h-11 rounded-full bg-gradient-to-r from-royal to-blue hover:from-blue hover:to-royal text-white flex items-center justify-center shadow-lg shadow-royal/35 active:scale-95 transition-transform"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2B. DESKTOP SCOOTER CARDS GRID (>= 768px, DriveX Intact)  */}
      {/* ======================================================== */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filteredFleet.map((scooter) => (
          <div
            key={scooter.id}
            className={`group bg-white rounded-3xl p-4 sm:p-6 border transition-all duration-300 flex flex-col justify-between relative shadow-sm hover:shadow-xl ${
              scooter.isPopular
                ? 'border-2 border-royal shadow-md'
                : 'border-slate-200 hover:border-royal/40'
            }`}
          >
            {scooter.isPopular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-royal text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm z-10 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 fill-current text-emerald-300" />
                <span>Rider Choice</span>
              </div>
            )}

            <div>
              {/* Badge & Model */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                  {scooter.badge}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                  Zero Petrol
                </span>
              </div>

              <h3 className="text-xl font-black font-heading text-navy-950 mb-1 group-hover:text-royal transition-colors">
                {scooter.name}
              </h3>
              <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                {scooter.tagline}
              </p>

              {/* Scooter Cutout Image */}
              <div className="w-full h-44 sm:h-48 bg-gradient-to-b from-slate-50 to-blue-50/40 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden mb-5 border border-slate-100">
                <img
                  src={scooter.image}
                  alt={scooter.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-106 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Specs Pills (DriveX 4-Spec Grid) */}
              <div className="grid grid-cols-2 gap-2.5 mb-5">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-150 flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-royal flex items-center justify-center shrink-0">
                    <BatteryCharging className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block leading-tight">Range</span>
                    <span className="text-xs font-bold text-navy-950">{scooter.range}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-150 flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Gauge className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block leading-tight">Top Speed</span>
                    <span className="text-xs font-bold text-navy-950">{scooter.speed}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-150 flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block leading-tight">Swap Time</span>
                    <span className="text-xs font-bold text-navy-950">{scooter.swapTime}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-150 flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                    <Package className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block leading-tight">Payload</span>
                    <span className="text-xs font-bold text-navy-950">{scooter.payload}</span>
                  </div>
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="space-y-1.5 mb-5 pb-5 border-b border-slate-100">
                {scooter.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-leaf shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price & Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between sm:block">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Rental Rate</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-black text-navy-950 font-heading">
                    {scooter.pricePerDay}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">/ day</span>
                </div>
              </div>

              <Link
                to="/waitlist"
                className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 w-full sm:w-auto text-center ${
                  scooter.isPopular
                    ? 'bg-royal hover:bg-blue-700 text-white shadow-royal/25'
                    : 'bg-navy-950 hover:bg-royal text-white'
                }`}
              >
                <span>Reserve Scooter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 3. DriveX-Style Twin High-Impact Promotion Banners */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 pt-2">
        {/* Banner 1: Early Launch Offer */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-royal p-5 sm:p-8 text-white shadow-xl flex flex-col justify-between border border-blue-900/60">
          <div className="absolute top-0 right-0 w-64 h-64 bg-royal/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Launch Week Special</span>
            </span>
            <h3 className="text-xl sm:text-3xl font-black font-heading text-white">
              Get ₹500 Free Swap Credits
            </h3>
            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed max-w-md">
              Register on the launch waitlist today to receive ₹500 complimentary battery swap credits preloaded into your Tezz wallet for your first weekly rental.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              to="/waitlist"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-navy-950 font-extrabold text-xs sm:text-sm shadow-lg transition-all active:scale-95 w-full sm:w-auto text-center"
            >
              <span>Claim Launch Credit</span>
              <ArrowRight className="w-4 h-4 text-navy-950" />
            </Link>
            <span className="text-xs text-blue-200 font-medium text-center sm:text-left">
              Limited to first 500 riders
            </span>
          </div>
        </div>

        {/* Banner 2: Monthly Commercial Savings */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-navy-950 to-slate-950 p-5 sm:p-8 text-white shadow-xl flex flex-col justify-between border border-slate-800">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              <span>Full-Time Gig Delivery Pro</span>
            </span>
            <h3 className="text-xl sm:text-3xl font-black font-heading text-white">
              Save Up To ₹10,000 / Month
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              Cut out petrol expenses completely. TezzEV monthly subscriptions include unlimited battery swaps, zero maintenance costs, and 15-minute breakdown replacement.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              to="/savings"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-navy-950 font-extrabold text-xs sm:text-sm shadow-lg transition-all active:scale-95 w-full sm:w-auto text-center"
            >
              <span>Calculate Your Savings</span>
              <ArrowRight className="w-4 h-4 text-navy-950" />
            </Link>
            <span className="text-xs text-slate-300 font-medium text-center sm:text-left">
              Zomato, Swiggy &amp; Blinkit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
