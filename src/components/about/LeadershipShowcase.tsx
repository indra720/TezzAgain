import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface Leader {
  id: number;
  name: string;
  role: string;
  bio: string;
  highlight: string;
  photo: string;
  accentColor: string;
}

const leadersData: Leader[] = [
  {
    id: 1,
    name: 'Aarav Singhania',
    role: 'FOUNDER & CHIEF EXECUTIVE OFFICER (CEO)',
    bio: '11+ years of clean mobility leadership, Ex-Ola Electric & Hero CleanTech Strategist, IIT Delhi & IIM-A alumni.',
    highlight: 'Raised ₹14 Cr+ EV fleet capital and spearheaded commercial expansion across Indore & Bhopal.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=600&q=80',
    accentColor: '#10B981', // Emerald
  },
  {
    id: 2,
    name: 'Priya Mehta',
    role: 'CO-FOUNDER & CHIEF TECHNOLOGY OFFICER (CTO)',
    bio: '9+ years embedded systems & smart battery IoT, Ex-Ather Energy BMS Systems Lead, BITS Pilani & Stanford AI fellow.',
    highlight: 'Designed the proprietary 120-second automated swapping vault with cloud thermal telemetry.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=600&q=80',
    accentColor: '#1647E8', // Royal
  },
  {
    id: 3,
    name: 'Vikramaditya Chauhan',
    role: 'HEAD OF FLEET OPERATIONS (HEAD MANAGER)',
    bio: '12+ years logistics & supply chain management, Ex-Shadowfax & Delhivery City Director.',
    highlight: 'Overseeing 5 active hubs with a strict 99.4% vehicle shift uptime and 15-minute roadside SOS SLA.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&h=600&q=80',
    accentColor: '#10B981', // Emerald
  },
  {
    id: 4,
    name: 'Dr. Rohan Kulkarni',
    role: 'TECHNICAL MANAGER (BATTERY R&D)',
    bio: 'Ph.D. in Lithium Electrochemistry, IISc Bangalore Lithium Research Lab, 8+ years battery cell longevity.',
    highlight: 'Pioneered active phase-change thermal cooling calibrated specifically for 46°C Central India summers.',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&h=600&q=80',
    accentColor: '#1647E8', // Royal
  },
  {
    id: 5,
    name: 'Neha Sharma',
    role: 'HEAD OF RIDER COMMUNITY & ONBOARDING',
    bio: '8+ years gig workforce empowerment, Ex-Zomato Fleet Lead, Indore delivery operations.',
    highlight: 'Spearheaded paperless 2-minute digital KYC onboarding for over 3,000 delivery partners.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&h=600&q=80',
    accentColor: '#10B981', // Emerald
  },
  {
    id: 6,
    name: 'Suresh Verma',
    role: 'LEAD HUB INFRASTRUCTURE MANAGER',
    bio: '10+ years commercial electrical grid engineering, Ex-Tata Power commercial projects.',
    highlight: 'Engineered rapid multi-bay swap docks and 24/7 charging infrastructure across MP corridors.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&h=600&q=80',
    accentColor: '#1647E8', // Royal
  },
];

export const LeadershipShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeLeader = leadersData[activeIndex];

  // Automatically changes every 5 seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % leadersData.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleSelectLeader = (index: number) => {
    setActiveIndex(index);
    // Reset timer on manual selection
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % leadersData.length);
      }, 5000);
    }
  };

  // Orbital Angles for 6 leaders around a semi-circle (Left-facing arc)
  const getOrbitPosition = (index: number, total: number) => {
    const angleRange = 170;
    const startAngle = -85;
    const step = angleRange / (total - 1);
    const angleDeg = startAngle + index * step;
    const angleRad = (angleDeg * Math.PI) / 180;

    const radius = 220; // pixels
    const x = -Math.cos(angleRad) * radius;
    const y = Math.sin(angleRad) * radius;

    return { x, y };
  };

  return (
    <div className="w-full bg-white text-navy-950 py-10 sm:py-16 select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>EXECUTIVE LEADERSHIP</span>
          </span>
          <h2 className="text-navy-950 font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl mt-2 tracking-tight">
            The Visionaries Behind <span className="text-royal">TezzEV</span>
          </h2>
        </div>

        {/* ======================================================== */}
        {/* MAIN STAGE: Left Details + Right Zypp Orbital Circle Arc  */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[440px]">
          {/* ------------------------------------------------------ */}
          {/* LEFT COLUMN: Leader Name, Role & Story (Zypp Style)   */}
          {/* ------------------------------------------------------ */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left order-2 lg:order-1">
            {/* Huge Bold Name with Dynamic Brand Color */}
            <div className="space-y-1">
              <h3
                key={activeLeader.name}
                className="font-heading font-black text-3xl sm:text-5xl md:text-6xl tracking-tight transition-all duration-300"
                style={{ color: activeLeader.accentColor }}
              >
                {activeLeader.name}
              </h3>
              <p className="text-xs sm:text-sm font-extrabold tracking-widest text-slate-500 uppercase font-sans">
                {activeLeader.role}
              </p>
            </div>

            {/* Bio Description */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
              {activeLeader.bio}
            </p>

            {/* Strategic Highlight Pill */}
            <div className="pt-1">
              <div className="inline-flex items-start gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-md">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 font-medium leading-snug">
                  {activeLeader.highlight}
                </p>
              </div>
            </div>

            {/* Minimalist Progress Indicator Dots */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2">
              {leadersData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectLeader(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex
                      ? 'w-7 bg-emerald-500 shadow-sm'
                      : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to leader ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ------------------------------------------------------ */}
          {/* RIGHT COLUMN: Zypp Orbital Arc Carousel Showcase      */}
          {/* ------------------------------------------------------ */}
          <div className="lg:col-span-6 flex items-center justify-center relative order-1 lg:order-2 py-6">
            {/* DESKTOP VIEW: Circular Arc with Orbiting Satellite Heads */}
            <div className="hidden sm:block relative w-[460px] h-[400px]">
              {/* Background Subtle Arc Track Line (Dashed) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 460 400"
                fill="none"
              >
                <path
                  d="M 120 40 A 220 220 0 0 0 120 360"
                  stroke="#E2E8F0"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
              </svg>

              {/* CENTER-RIGHT: Big Featured Circle with Active Leader Photo */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
                <div
                  className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden p-2 transition-all duration-500 shadow-2xl"
                  style={{
                    backgroundColor: activeLeader.accentColor,
                    boxShadow: `0 20px 45px -10px ${activeLeader.accentColor}55`,
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-white border-4 border-white">
                    <img
                      src={activeLeader.photo}
                      alt={activeLeader.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* SATELLITE CIRCLES: Orbiting along the Arc */}
              {leadersData.map((leader, idx) => {
                const isActive = idx === activeIndex;
                const pos = getOrbitPosition(idx, leadersData.length);
                const leftPos = 330 + pos.x - 30;
                const topPos = 200 + pos.y - 30;

                return (
                  <button
                    key={leader.name}
                    onClick={() => handleSelectLeader(idx)}
                    style={{ left: `${leftPos}px`, top: `${topPos}px` }}
                    className={`absolute z-30 w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden p-1 transition-all duration-300 cursor-pointer shadow-lg hover:scale-115 ${
                      isActive
                        ? 'ring-4 ring-emerald-500 scale-110 shadow-xl'
                        : 'border-2 border-white hover:border-emerald-400 opacity-80 hover:opacity-100'
                    }`}
                    aria-label={`View ${leader.name}`}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-100">
                      <img
                        src={leader.photo}
                        alt={leader.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* MOBILE VIEW (< 640px): Centered Big Circle + Clean Avatar Row */}
            <div className="sm:hidden flex flex-col items-center space-y-5 w-full">
              {/* Big Circle */}
              <div
                className="w-56 h-56 rounded-full overflow-hidden p-2 shadow-2xl transition-all duration-500"
                style={{
                  backgroundColor: activeLeader.accentColor,
                  boxShadow: `0 15px 35px -5px ${activeLeader.accentColor}55`,
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-white border-4 border-white">
                  <img
                    src={activeLeader.photo}
                    alt={activeLeader.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Avatar Switcher Row */}
              <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 px-1 max-w-full no-scrollbar">
                {leadersData.map((leader, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={leader.name}
                      onClick={() => handleSelectLeader(idx)}
                      className={`w-12 h-12 rounded-full overflow-hidden p-0.5 shrink-0 transition-all cursor-pointer ${
                        isActive
                          ? 'ring-3 ring-emerald-500 scale-110 shadow-md'
                          : 'opacity-70 hover:opacity-100 border border-slate-200'
                      }`}
                    >
                      <img
                        src={leader.photo}
                        alt={leader.name}
                        className="w-full h-full rounded-full object-cover object-top"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
