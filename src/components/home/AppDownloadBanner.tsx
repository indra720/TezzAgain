import React from 'react';
import { Smartphone, Zap, ShieldCheck, QrCode, ArrowRight, Star } from 'lucide-react';
import { GooglePlayIcon, AppleAppStoreIcon } from '../ui/BrandIcons';

export const AppDownloadBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 via-[#071740] to-navy-900 border border-blue-900/60 p-5 sm:p-10 lg:p-12 text-white shadow-2xl">
      {/* Background Radial Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-royal/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Column: Copy & Store Buttons */}
        <div className="lg:col-span-7 space-y-5 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-blue-light backdrop-blur-md">
            <Smartphone className="w-3.5 h-3.5 text-leaf" />
            <span>TezzEV Mobile App • Launching Soon</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight leading-tight">
              Manage Your Ride,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-light via-sky-200 to-leaf">
                Anytime &amp; Anywhere.
              </span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
              Track battery percentage in real-time, navigate to the nearest swapping hub in Indore &amp; Bhopal, recharge rental credits, and raise 15-minute roadside SOS — all in one tap.
            </p>
          </div>

          {/* 3 Quick App Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10">
              <div className="w-7 h-7 rounded-lg bg-royal text-white flex items-center justify-center shrink-0">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-white block">1-Tap Hub Swap</span>
                <span className="text-[10px] text-slate-400">Live dock queue</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10">
              <div className="w-7 h-7 rounded-lg bg-leaf text-navy-950 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-white block">Breakdown SOS</span>
                <span className="text-[10px] text-slate-400">15-min technician</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10">
              <div className="w-7 h-7 rounded-lg bg-amber-400 text-navy-950 flex items-center justify-center shrink-0">
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-white block">Rental Wallet</span>
                <span className="text-[10px] text-slate-400">Zero hidden fees</span>
              </div>
            </div>
          </div>

          {/* App Store Download Badges */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white backdrop-blur-md transition-all active:scale-95 shadow-lg group"
            >
              <GooglePlayIcon className="w-6 h-6 shrink-0" />
              <div className="text-left leading-tight">
                <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-medium">Get it on</span>
                <span className="text-xs sm:text-sm font-bold font-heading text-white group-hover:text-blue-light transition-colors">Google Play</span>
              </div>
            </a>

            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-slate-400 opacity-90 cursor-not-allowed">
              <AppleAppStoreIcon className="w-6 h-6 shrink-0 opacity-80" />
              <div className="text-left leading-tight">
                <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-medium">Coming soon on</span>
                <span className="text-xs sm:text-sm font-bold font-heading text-slate-300">App Store</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sleek Smartphone Mockup Showcase (DriveX Style) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[280px] sm:max-w-[310px]">
            {/* Phone Shadow / Glow */}
            <div className="absolute inset-0 bg-royal/30 rounded-[44px] filter blur-xl transform scale-95" />

            {/* Smartphone Outer Shell */}
            <div className="relative rounded-[40px] p-3 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border-2 border-slate-600/80 shadow-2xl">
              {/* Screen Bezel */}
              <div className="relative rounded-[32px] overflow-hidden bg-navy-950 border border-slate-800 p-4 space-y-4">
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[10px] text-slate-400 px-1 pt-1">
                  <span className="font-semibold text-white">9:41</span>
                  <div className="w-16 h-3 bg-black rounded-full mx-auto" />
                  <span className="font-semibold text-white">5G • 100%</span>
                </div>

                {/* In-App Header */}
                <div className="flex items-center justify-between pt-1 border-b border-white/10 pb-3">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">TezzEV Rider</span>
                    <span className="text-sm font-bold text-white font-heading">Ramesh Verma</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/40">
                    Active
                  </span>
                </div>

                {/* Battery Live Gauge Inside App */}
                <div className="p-3 rounded-2xl bg-gradient-to-r from-royal/30 to-blue-900/30 border border-royal/40 text-center space-y-1">
                  <span className="text-[10px] text-blue-light uppercase tracking-wider block font-bold">Assigned Scooter</span>
                  <div className="text-2xl font-black text-white font-heading">
                    88% <span className="text-xs text-leaf font-bold">~75 km</span>
                  </div>
                  <span className="text-[10px] text-slate-300 block">Plate: MP-09-EV-8842</span>
                </div>

                {/* Nearby Hub Card */}
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">Vijay Nagar Mega Hub</span>
                    <span className="text-[10px] text-leaf font-bold">Open 24/7</span>
                  </div>
                  <p className="text-[10px] text-slate-400">1.2 km away • 14 Ready Swaps</p>
                  <button className="w-full mt-1.5 py-1.5 rounded-xl bg-royal text-white text-[11px] font-bold text-center block">
                    Navigate to Hub
                  </button>
                </div>

                {/* SOS & Help Quick Tile */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-red-950/40 border border-red-500/30 text-white">
                  <span className="text-[11px] font-bold text-red-300">Breakdown SOS</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-red-600 text-white font-bold">
                    Emergency
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
