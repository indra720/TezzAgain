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
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-royal uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5 text-royal" />
          <span>EV VS PETROL COMPARISON</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-navy-950">
          Still Unsure About EV? <span className="text-royal">Let's Clarify!</span>
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Renting an EV is like putting direct cash in your bank. Compare the hard numbers and see how much more you take home.
        </p>
      </div>

      {/* Main Clean Comparison Canvas */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 md:p-9 border border-slate-200/90 shadow-xl text-navy-950">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (7 cols): Comparison Pillars + Live Calculator */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Comparison Bars Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-royal">
                    Direct Comparison
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-navy-950">
                    TezzEV vs ICE Petrol Bikes
                  </h3>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-3 text-xs font-semibold">
                  <div className="flex items-center gap-1.5 text-royal">
                    <span className="w-3 h-3 rounded-md bg-royal inline-block" />
                    <span>TezzEV</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-amber-700">
                    <span className="w-3 h-3 rounded-md bg-amber-500 inline-block" />
                    <span>ICE Petrol</span>
                  </div>
                </div>
              </div>

              {/* 4 Pillars Comparison Grid */}
              <div className="bg-slate-50/80 p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-3.5">
                {/* Bar 1: Maintenance */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-navy-950">Maintenance &amp; Servicing</span>
                    <span className="text-slate-500">Monthly</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-6 rounded-lg bg-blue-50 border border-blue-200 flex items-center px-2 text-royal font-bold text-xs">
                      ₹0 (Free Hub Service)
                    </div>
                    <div className="h-6 rounded-lg bg-amber-50 border border-amber-200 flex items-center px-2 text-amber-700 font-bold text-xs">
                      ₹{iceMaintenance} / mo
                    </div>
                  </div>
                </div>

                {/* Bar 2: Fuel Expense */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-navy-950">Fuel / Petrol Expense</span>
                    <span className="text-emerald-700 font-bold">100% Free on EV</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-6 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center px-2 text-emerald-700 font-bold text-xs">
                      ₹0 (Zero Fuel)
                    </div>
                    <div className="h-6 rounded-lg bg-amber-50 border border-amber-200 flex items-center px-2 text-amber-700 font-bold text-xs">
                      ₹{monthlyFuelCost.toLocaleString()} / mo
                    </div>
                  </div>
                </div>

                {/* Bar 3: Net Rental vs EMI */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-navy-950">Monthly Rental vs EMI</span>
                    <span className="text-slate-500">All-Inclusive</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-6 rounded-lg bg-blue-50 border border-blue-200 flex items-center px-2 text-royal font-bold text-xs">
                      ₹{tezzRental.toLocaleString()} (All-Inclusive)
                    </div>
                    <div className="h-6 rounded-lg bg-amber-50 border border-amber-200 flex items-center px-2 text-amber-700 font-bold text-xs">
                      ₹{iceEmi.toLocaleString()} (Loan Only)
                    </div>
                  </div>
                </div>

                {/* Bar 4: Down Payment / Security Deposit */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-navy-950">Upfront Initial Cost</span>
                    <span className="text-royal text-[11px] font-semibold">100% Refundable Deposit</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-6 rounded-lg bg-blue-50 border border-blue-200 flex items-center px-2 text-royal font-bold text-xs">
                      ₹{tezzInitialDeposit.toLocaleString()} (Refundable)
                    </div>
                    <div className="h-6 rounded-lg bg-amber-50 border border-amber-200 flex items-center px-2 text-amber-700 font-bold text-xs">
                      ₹{iceInitialPayment.toLocaleString()} (Down Payment)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Live Earnings Calculator Slider */}
            <div className="bg-slate-50/80 p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-royal">
                    Earnings Simulator
                  </span>
                  <div className="text-xs sm:text-sm font-semibold text-slate-700">
                    Daily Earnings Target:
                  </div>
                </div>
                <span className="text-base sm:text-lg font-bold text-white font-heading bg-royal px-3 py-1 rounded-xl shadow-sm">
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
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-royal"
                aria-label="Daily earnings slider"
              />

              <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                <span>₹500 (Part-time)</span>
                <span>₹1,000 (Standard)</span>
                <span>₹2,500 (Super Pro)</span>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-700 border-t border-slate-200">
                <span>Working Days / Month:</span>
                <div className="flex items-center gap-1.5">
                  {[24, 26, 30].map((days) => (
                    <button
                      key={days}
                      onClick={() => setWorkingDays(days)}
                      className={`px-2.5 py-0.5 rounded-lg text-xs font-semibold transition-colors ${
                        workingDays === days
                          ? 'bg-royal text-white shadow-sm'
                          : 'bg-white text-slate-600 border border-slate-200 hover:text-navy-950'
                      }`}
                    >
                      {days} Days
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Net Extra Savings Highlight Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-200 shadow-md flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-emerald-800 font-bold uppercase tracking-wider">
                  You Will Save Extra With TezzEV
                </p>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-heading mt-0.5">
                  ₹{netMonthlySavings.toLocaleString()}{' '}
                  <span className="text-sm font-medium text-emerald-800">/ month</span>
                </div>
                <p className="text-[11px] text-emerald-800 mt-1">
                  💡 Zero petrol bills + 100% free hub maintenance = Pure take-home profit.
                </p>
              </div>

              <div className="hidden sm:flex flex-col items-center justify-center px-4 py-2 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-800 shrink-0 text-center">
                <Sparkles className="w-5 h-5 mb-0.5 text-emerald-600" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Huge Savings</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 flex-wrap">
              <Link to="/waitlist" className="btn-primary">
                <span>Join Launch Waitlist</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/savings" className="btn-secondary-light !text-xs sm:!text-sm">
                <span>Detailed Route Simulator</span>
              </Link>
            </div>
          </div>

          {/* Right Column (5 cols): Pure Video Card Display */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4">
            <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
              <VideoCard
                src="/videos/tezz-video-4.mp4"
                title="Delivery Rider Fuel Savings Proof"
                poster="/images/poster-2.jpg"
                aspect="square"
              />
            </div>

            <div className="text-center space-y-1.5 max-w-sm px-2">
              <h4 className="font-heading font-bold text-navy-950 text-base">
                Delivery Rider Fuel Savings Proof
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Watch a real commercial delivery rider calculate daily petrol expenses vs zero-fuel TezzEV earnings.
              </p>
              <div className="pt-1 flex items-center justify-center gap-2 text-[11px] text-emerald-700 font-semibold">
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
