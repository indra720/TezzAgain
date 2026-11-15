import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Fuel,
  Zap,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { VideoCard } from '../ui/VideoCard';

export const EvVsPetrolComparison: React.FC = () => {
  const [dailyEarnings, setDailyEarnings] = useState<number>(1000);
  const [workingDays, setWorkingDays] = useState<number>(26);

  // Approximate fuel and maintenance formulas based on delivery daily route
  // Average rider covering 80-100km per day on a ₹1000 daily earning run
  const estimatedDailyKm = Math.round((dailyEarnings / 1000) * 85);
  const petrolLitersPerDay = estimatedDailyKm / 35; // 35 kmpl average in city traffic
  const petrolCostDaily = petrolLitersPerDay * 106; // ₹106 avg petrol price in MP
  const monthlyFuelCost = Math.round(petrolCostDaily * workingDays);

  const iceMaintenance = 1000; // Monthly engine oil, brakes, servicing
  const tezzMaintenance = 0; // 100% Free at TezzEV Hubs

  const iceEmi = 3200; // Monthly bike EMI / depreciation
  const tezzRental = 4900; // All-inclusive commercial EV rental (estimate)

  const iceInitialPayment = 20000; // Upfront down payment & registration
  const tezzInitialDeposit = 2100; // 100% Refundable deposit

  // Net monthly savings calculation
  const totalIceMonthly = monthlyFuelCost + iceMaintenance + iceEmi;
  const totalTezzMonthly = tezzRental + tezzMaintenance;
  const netMonthlySavings = Math.max(2500, totalIceMonthly - totalTezzMonthly);

  return (
    <div className="w-full space-y-6">
      {/* Top Header Card */}
      <div className="text-center max-w-3xl mx-auto space-y-2 px-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-navy-700 text-xs font-bold text-blue-light">
          <Zap className="w-3.5 h-3.5 text-leaf" />
          <span>EV VS PETROL COMPARISON</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white">
          Still Unsure About EV? <span className="text-blue-light">Let's Clarify!</span>
        </h2>
        <p className="text-text-dark-muted text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Renting an EV is like putting direct cash in your bank. Compare the hard numbers and see how much more you take home.
        </p>
      </div>

      {/* Main Comparison Canvas */}
      <div className="bg-navy-900/70 rounded-3xl p-4 sm:p-7 md:p-8 border border-navy-800 shadow-2xl backdrop-blur-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (7 cols): Comparison Pillars + Live Calculator */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Comparison Bars Section (Moved Above Left Content as Requested) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-light">
                    Direct Comparison
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                    TezzEV vs ICE Petrol Bikes
                  </h3>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-3 text-xs font-semibold">
                  <div className="flex items-center gap-1.5 text-white">
                    <span className="w-3 h-3 rounded-md bg-royal inline-block" />
                    <span>TezzEV</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-amber-300">
                    <span className="w-3 h-3 rounded-md bg-amber-400 inline-block" />
                    <span>ICE Petrol</span>
                  </div>
                </div>
              </div>

              {/* 4 Pillars Comparison Grid */}
              <div className="bg-navy-950/80 p-4 sm:p-5 rounded-2xl border border-navy-800 space-y-3.5">
                {/* Bar 1: Maintenance */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-white">Maintenance &amp; Servicing</span>
                    <span className="text-slate-400">Monthly</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-6 rounded-lg bg-royal/30 border border-royal flex items-center px-2 text-white font-bold text-xs">
                      ₹0 (Free Hub Service)
                    </div>
                    <div className="h-6 rounded-lg bg-amber-400/20 border border-amber-400 flex items-center px-2 text-amber-300 font-bold text-xs">
                      ₹{iceMaintenance} / mo
                    </div>
                  </div>
                </div>

                {/* Bar 2: Fuel Expense */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-white">Fuel / Petrol Expense</span>
                    <span className="text-leaf font-bold">100% Free on EV</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-6 rounded-lg bg-leaf/20 border border-leaf flex items-center px-2 text-leaf font-bold text-xs">
                      ₹0 (Zero Fuel)
                    </div>
                    <div className="h-6 rounded-lg bg-amber-400/20 border border-amber-400 flex items-center px-2 text-amber-300 font-bold text-xs">
                      ₹{monthlyFuelCost.toLocaleString()} / mo
                    </div>
                  </div>
                </div>

                {/* Bar 3: Net Rental vs EMI */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-white">Monthly Rental vs EMI</span>
                    <span className="text-slate-400">All-Inclusive</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-6 rounded-lg bg-royal/30 border border-royal flex items-center px-2 text-blue-light font-bold text-xs">
                      ₹{tezzRental.toLocaleString()} (All-Inclusive)
                    </div>
                    <div className="h-6 rounded-lg bg-amber-400/20 border border-amber-400 flex items-center px-2 text-amber-300 font-bold text-xs">
                      ₹{iceEmi.toLocaleString()} (Loan Only)
                    </div>
                  </div>
                </div>

                {/* Bar 4: Down Payment / Security Deposit */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-white">Upfront Initial Cost</span>
                    <span className="text-blue-light text-[11px]">100% Refundable Deposit</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-6 rounded-lg bg-royal/30 border border-royal flex items-center px-2 text-white font-bold text-xs">
                      ₹{tezzInitialDeposit.toLocaleString()} (Refundable)
                    </div>
                    <div className="h-6 rounded-lg bg-amber-400/20 border border-amber-400 flex items-center px-2 text-amber-300 font-bold text-xs">
                      ₹{iceInitialPayment.toLocaleString()} (Down Payment)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Live Earnings Calculator Slider */}
            <div className="bg-navy-950/80 p-4 sm:p-5 rounded-2xl border border-navy-800 space-y-3 shadow-inner">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-light">
                    Earnings Simulator
                  </span>
                  <div className="text-xs sm:text-sm font-semibold text-slate-300">
                    Daily Earnings Target:
                  </div>
                </div>
                <span className="text-base sm:text-lg font-bold text-leaf font-heading bg-navy-900 px-3 py-1 rounded-xl border border-navy-700">
                  ₹{dailyEarnings.toLocaleString()} / day
                </span>
              </div>

              <input
                type="range"
                min={500}
                max={2500}
                step={100}
                value={dailyEarnings}
                onChange={(e) => setDailyEarnings(Number(e.target.value))}
                className="w-full h-3 bg-navy-800 rounded-lg appearance-none cursor-pointer accent-royal"
                aria-label="Daily earnings slider"
              />

              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>₹500 (Part-time)</span>
                <span>₹1,000 (Standard)</span>
                <span>₹2,500 (Super Pro)</span>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-300 border-t border-navy-800/80">
                <span>Working Days / Month:</span>
                <div className="flex items-center gap-1.5">
                  {[24, 26, 30].map((days) => (
                    <button
                      key={days}
                      onClick={() => setWorkingDays(days)}
                      className={`px-2.5 py-0.5 rounded-lg text-xs font-semibold transition-colors ${
                        workingDays === days
                          ? 'bg-royal text-white'
                          : 'bg-navy-900 text-slate-400 hover:text-white'
                      }`}
                    >
                      {days} Days
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Net Extra Savings Highlight Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-royal/20 via-navy-900 to-navy-950 border border-royal/50 shadow-xl flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-blue-light font-semibold uppercase tracking-wider">
                  You Will Save Extra With TezzEV
                </p>
                <div className="text-2xl sm:text-3xl font-extrabold text-leaf font-heading mt-0.5">
                  ₹{netMonthlySavings.toLocaleString()}{' '}
                  <span className="text-sm font-medium text-slate-300">/ month</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-1">
                  💡 Zero petrol bills + 100% free hub maintenance = Pure take-home profit.
                </p>
              </div>

              <div className="hidden sm:flex flex-col items-center justify-center px-4 py-2 rounded-xl bg-leaf/20 border border-leaf/40 text-leaf shrink-0 text-center">
                <Sparkles className="w-5 h-5 mb-0.5" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Huge Savings</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 flex-wrap">
              <Link to="/waitlist" className="btn-primary">
                <span>Join Launch Waitlist</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/savings" className="btn-secondary-dark !text-xs sm:!text-sm">
                <span>Detailed Route Simulator</span>
              </Link>
            </div>
          </div>

          {/* Right Column (5 cols): Pure Video Card Display */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4">
            <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-2 border-royal/50 bg-navy-950">
              <VideoCard
                src="/videos/tezz-video-4.mp4"
                title="Delivery Rider Fuel Savings Proof"
                poster="/images/poster-2.jpg"
                aspect="square"
              />
            </div>

            <div className="text-center space-y-1.5 max-w-sm px-2">
              <h4 className="font-heading font-bold text-white text-base">
                Delivery Rider Fuel Savings Proof
              </h4>
              <p className="text-xs text-text-dark-muted leading-relaxed">
                Watch a real commercial delivery rider calculate daily petrol expenses vs zero-fuel TezzEV earnings.
              </p>
              <div className="pt-1 flex items-center justify-center gap-2 text-[11px] text-leaf font-semibold">
                <span>100% Fuel Free</span>
                <span>•</span>
                <span>Zero Servicing Cost</span>
                <span>•</span>
                <span>Dual Battery Swap</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
