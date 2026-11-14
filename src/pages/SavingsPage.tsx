import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingDown,
  Fuel,
  Zap,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { VideoCard } from '../components/ui/VideoCard';
import { SectionDivider } from '../components/ui/SectionDivider';
import { siteConfig } from '../lib/config';

export const SavingsPage: React.FC = () => {
  const [kmPerDay, setKmPerDay] = useState<number>(90);
  const [petrolPrice, setPetrolPrice] = useState<number>(106);

  const petrolLitersPerDay = kmPerDay / 35;
  const petrolCostDaily = petrolLitersPerDay * petrolPrice;
  const petrolMonthlyFuel = Math.round(petrolCostDaily * 30);
  const petrolMonthlyMaintenance = 1200;
  const totalPetrolMonthly = petrolMonthlyFuel + petrolMonthlyMaintenance;

  const estimatedTezzMonthly = 3900;
  const monthlySavings = Math.max(0, totalPetrolMonthly - estimatedTezzMonthly);
  const yearlySavings = monthlySavings * 12;

  return (
    <div className="w-full">
      <PageHeader
        breadcrumbs={[{ label: 'Savings Calculator' }]}
        title="Rider Fuel Savings Calculator"
        highlightWord="Savings"
        subtitle="See how much more cash you take home every month by switching from costly petrol to TezzEV."
      />

      {/* WAVE DIVIDER: Deep Navy to Sky-200 */}
      <SectionDivider type="navy-to-sky200" />

      {/* Section 1: Explainer Video & Interactive Calculator (Sky-200) */}
      <section className="bg-sky-200 text-text-light section-pad">
        <div className="container-custom space-y-12">
          {/* Top 2-Column Split: Text Left, Video Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-royal">
                Petrol vs Electric
              </span>
              <h2 className="text-navy-950">
                How delivery riders <span className="text-royal">save</span>
              </h2>
              <p className="text-slate-700 text-base leading-relaxed max-w-xl">
                Rising fuel costs eat away your daily delivery profit. Switching to a commercial TezzEV electric scooter with swappable batteries eliminates 100% of your petrol expenses.
              </p>
              <div className="pt-1 flex flex-wrap gap-2.5">
                <span className="px-3.5 py-1.5 rounded-xl bg-[#F4F8FE] border border-[#D6E4FB] text-xs font-bold text-navy-950">
                  💰 ₹8,000 – ₹12,000 Monthly Savings
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-[#F4F8FE] border border-[#D6E4FB] text-xs font-bold text-navy-950">
                  🔧 Zero Maintenance Bills
                </span>
              </div>
              <div className="pt-2">
                <a href="#calculator" className="btn-primary !min-h-[44px]">
                  <span>Calculate Your Savings Below</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Video Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border border-slate-300">
                <VideoCard
                  src={siteConfig.videos.savings.src}
                  title={siteConfig.videos.savings.title}
                  poster="/images/poster-2.jpg"
                  aspect="vertical"
                />
              </div>
            </div>
          </div>

          {/* Calculator Card */}
          <div id="calculator" className="tezz-card p-5 sm:p-8 max-w-4xl mx-auto shadow-xl">
            <div className="text-center max-w-xl mx-auto mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-royal">
                Interactive Simulation
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-950 mt-1">
                Customize Your Daily Route
              </h3>
              <p className="text-xs sm:text-sm text-text-light-muted mt-0.5">
                Adjust your daily riding kilometers and local petrol price.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 pb-6 border-b border-slate-100">
              {/* Slider 1: KM Per Day */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-navy-950">
                    Daily Riding Distance:
                  </label>
                  <span className="px-2.5 py-0.5 rounded-lg bg-royal text-white font-bold text-xs sm:text-sm">
                    {kmPerDay} km / day
                  </span>
                </div>
                <input
                  type="range"
                  min={30}
                  max={200}
                  step={5}
                  value={kmPerDay}
                  onChange={(e) => setKmPerDay(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-royal"
                />
                <div className="flex justify-between text-[11px] text-text-light-muted">
                  <span>30 km (Part-time)</span>
                  <span>90 km (Standard)</span>
                  <span>200 km (High shift)</span>
                </div>
              </div>

              {/* Slider 2: Petrol Price */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-navy-950">
                    Current Petrol Price:
                  </label>
                  <span className="px-2.5 py-0.5 rounded-lg bg-navy-900 text-white font-bold text-xs sm:text-sm">
                    ₹{petrolPrice} / Litre
                  </span>
                </div>
                <input
                  type="range"
                  min={95}
                  max={120}
                  step={1}
                  value={petrolPrice}
                  onChange={(e) => setPetrolPrice(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-navy-900"
                />
                <div className="flex justify-between text-[11px] text-text-light-muted">
                  <span>₹95/L</span>
                  <span>₹106/L (MP Avg)</span>
                  <span>₹120/L</span>
                </div>
              </div>
            </div>

            {/* Petrol vs TezzEV Monthly Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {/* Card 1: Petrol Scooter */}
              <div className="p-5 rounded-xl bg-red-50/70 border border-red-200/60 text-navy-950">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-red-900 font-heading">
                    <Fuel className="w-4 h-4 text-red-600" />
                    <span>Petrol Scooter</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-red-200 text-red-800 font-semibold">
                    Current Expense
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-red-700 font-heading mb-2">
                  ₹{totalPetrolMonthly.toLocaleString('en-IN')}{' '}
                  <span className="text-xs font-normal text-text-light-muted">/ month</span>
                </div>
                <div className="space-y-1 text-xs text-text-light-muted border-t border-red-200/50 pt-2">
                  <div className="flex justify-between">
                    <span>Monthly Fuel ({Math.round(petrolLitersPerDay * 30)} L):</span>
                    <span className="font-semibold text-navy-950">
                      ₹{petrolMonthlyFuel.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service &amp; Engine Oil:</span>
                    <span className="font-semibold text-navy-950">
                      ₹{petrolMonthlyMaintenance.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: TezzEV Electric Scooter */}
              <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-200/80 text-navy-950">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-navy-950 font-heading">
                    <Zap className="w-4 h-4 text-royal" />
                    <span>TezzEV Rental</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-royal text-white font-semibold">
                    All-Inclusive
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-royal font-heading mb-2">
                  ₹{estimatedTezzMonthly.toLocaleString('en-IN')}{' '}
                  <span className="text-xs font-normal text-text-light-muted">/ month</span>
                </div>
                <div className="space-y-1 text-xs text-text-light-muted border-t border-blue-200/50 pt-2">
                  <div className="flex justify-between">
                    <span>Petrol Cost:</span>
                    <span className="font-bold text-leaf">₹0 (Zero)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Maintenance &amp; Battery Swaps:</span>
                    <span className="font-bold text-leaf">100% Free at Hubs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Green Callout: "You save Rs X / month" */}
            <div className="p-5 rounded-xl bg-emerald-50 border border-leaf text-navy-950 text-center">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-0.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Net Extra Earnings In Your Pocket</span>
              </div>
              <div className="text-2xl sm:text-4xl font-black text-emerald-600 font-heading my-0.5">
                You save ₹{monthlySavings.toLocaleString('en-IN')} / month
              </div>
              <p className="text-xs sm:text-sm font-semibold text-emerald-800">
                That is an extra ₹{yearlySavings.toLocaleString('en-IN')} saved every single year!
              </p>
              <div className="mt-3 pt-2 border-t border-emerald-200/60 text-[11px] text-text-light-muted flex items-center justify-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Based on placeholder rent. Final price at launch.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-200 to Deep Navy */}
      <SectionDivider type="sky200-to-navy" />

      {/* Section 2: Why Electric Beats Petrol (Deep Navy) */}
      <section className="bg-gradient-deep text-white section-pad">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-light">
              No More Daily Losses
            </span>
            <h2 className="text-white mt-1 mb-1.5">
              How fuel eats your <span className="text-blue-light">delivery profit</span>
            </h2>
            <p className="text-text-dark-muted text-sm sm:text-base">
              Riding 90 km a day on petrol means spending nearly 35% to 40% of your daily income on fuel alone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="tezz-card p-5 bg-white text-navy-950">
              <h4 className="font-bold text-sm sm:text-base font-heading text-navy-950 mb-1.5">
                No Fuel Station Queues
              </h4>
              <p className="text-xs text-text-light-muted leading-relaxed">
                Save 25 to 40 minutes spent waiting in fuel lines during peak delivery rush hours.
              </p>
            </div>

            <div className="tezz-card p-5 bg-white text-navy-950">
              <h4 className="font-bold text-sm sm:text-base font-heading text-navy-950 mb-1.5">
                Predictable Daily Cost
              </h4>
              <p className="text-xs text-text-light-muted leading-relaxed">
                Fixed rental means no shock expenses when crude oil prices spike overnight.
              </p>
            </div>

            <div className="tezz-card p-5 bg-white text-navy-950">
              <h4 className="font-bold text-sm sm:text-base font-heading text-navy-950 mb-1.5">
                Higher Order Acceptance
              </h4>
              <p className="text-xs text-text-light-muted leading-relaxed">
                Accept long-distance high-paying deliveries without worrying about return fuel cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Deep Navy to Sky-100 */}
      <SectionDivider type="navy-to-sky100" />

      {/* Section 3: CTA (Sky-100) */}
      <section className="bg-sky-100 text-text-light section-pad text-center">
        <div className="container-custom max-w-2xl mx-auto space-y-4">
          <h2 className="text-navy-950">
            Start saving your <span className="text-royal">hard-earned money</span>.
          </h2>
          <p className="text-text-light-muted text-sm sm:text-base">
            Reserve your TezzEV electric scooter today on the priority waitlist.
          </p>
          <div className="pt-1 flex items-center justify-center gap-3 flex-wrap">
            <Link to="/waitlist" className="btn-primary !min-h-[44px]">
              <span>Join Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/guess-rent" className="btn-secondary-light !min-h-[44px]">
              <span>Guess Daily Rent</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
