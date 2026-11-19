import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Clock,
  Zap,
  Wrench,
  Coffee,
  CheckCircle2,
  Play,
  ArrowRight,
  Sparkles,
  Phone,
  MessageCircle,
  Building2,
  Navigation,
} from 'lucide-react';
import { useVideoModal } from '../ui/VideoContext';
import { siteConfig } from '../../lib/config';

interface HubDetail {
  id: string;
  name: string;
  city: 'indore' | 'bhopal';
  shortArea: string;
  badge: string;
  landmark: string;
  timing: string;
  highlights: { icon: React.ElementType; title: string; desc: string }[];
  videoSrc: string;
  poster: string;
  videoTitle: string;
  whatsappMessage: string;
}

const hubsData: Record<'indore' | 'bhopal', HubDetail[]> = {
  indore: [
    {
      id: 'indore-vijay-nagar',
      name: 'Vijay Nagar Mega Hub',
      city: 'indore',
      shortArea: 'Scheme 54 / AB Road',
      badge: 'Primary Fleet Hub',
      landmark: 'Near Scheme 54, Behind C21 Mall, Main AB Road, Indore, MP 452010',
      timing: '6:30 AM – 11:30 PM (Open 7 Days)',
      highlights: [
        {
          icon: Zap,
          title: '2-Minute Rapid Battery Swap',
          desc: 'Automated swap wall with 250+ fully charged smart lithium packs ready at all hours.',
        },
        {
          icon: Wrench,
          title: 'Certified On-Site Mechanic Bay',
          desc: 'Instant brake checks, tyre inspection, and minor servicing included 100% free of charge.',
        },
        {
          icon: Coffee,
          title: 'Rider Lounge & Clean Cold Water',
          desc: 'Air-cooled shaded rest zone for delivery riders between peak lunch and dinner shifts.',
        },
        {
          icon: Navigation,
          title: 'Multi-Port Mobile Fast Charger',
          desc: 'High-speed charging bays so delivery partners never run out of phone battery on shift.',
        },
      ],
      videoSrc: '/videos/tezz-video-2.mp4',
      poster: '/images/poster-2.jpg',
      videoTitle: 'Vijay Nagar Mega Hub — Rapid Battery Swap Tour',
      whatsappMessage: 'Hi TezzEV! I want to visit Vijay Nagar Mega Hub in Indore for scooter pickup.',
    },
    {
      id: 'indore-palasia',
      name: 'Palasia Square Express Hub',
      city: 'indore',
      shortArea: 'Old Palasia / Industry House',
      badge: '24/7 SOS Rescue Base',
      landmark: 'Near Industry House Junction, Old Palasia Main Commercial Road, Indore, MP 452001',
      timing: '7:00 AM – 11:00 PM (Daily)',
      highlights: [
        {
          icon: Zap,
          title: 'Express 4-Bay Battery Swap Vault',
          desc: 'Drive in, scan QR code, drop depleted pack, lock charged battery, and ride out in 120 seconds.',
        },
        {
          icon: Wrench,
          title: '24/7 Roadside SOS Breakdown Hub',
          desc: 'Rapid support scooter and technician dispatch unit for emergency punctures or on-shift issues.',
        },
        {
          icon: Coffee,
          title: 'Sanitized Helmets & Delivery Straps',
          desc: 'Spare commercial-grade delivery bags, phone holders, and certified helmets available.',
        },
        {
          icon: Navigation,
          title: 'Central Logistics Connectivity',
          desc: 'Situated minutes away from major cloud kitchens and dark store hubs across central Indore.',
        },
      ],
      videoSrc: '/videos/tezz-video-3.mp4',
      poster: '/images/poster-3.jpg',
      videoTitle: 'Palasia Express Hub — 24/7 Rider Support & Swap Bay',
      whatsappMessage: 'Hi TezzEV! I want to visit Palasia Square Hub in Indore.',
    },
    {
      id: 'indore-bhawarkua',
      name: 'Bhawarkua High-Speed Hub',
      city: 'indore',
      shortArea: 'Bhawarkua / IT Park Zone',
      badge: 'High-Volume Delivery Zone',
      landmark: 'Near IT Park Road, Bhawarkua Main Circle, South Indore, MP 452001',
      timing: '7:00 AM – 11:00 PM (Daily)',
      highlights: [
        {
          icon: Zap,
          title: 'High-Frequency Fast Swap Bay',
          desc: 'Engineered specifically for heavy student commute routes and south Indore delivery clusters.',
        },
        {
          icon: Wrench,
          title: 'Paperless Digital KYC Kiosk',
          desc: 'Submit Aadhaar and DL on the spot. Walk out riding your TezzEV scooter in 15 minutes.',
        },
        {
          icon: Coffee,
          title: 'Free Tyre Pressure & Air Top-up',
          desc: 'Automated nitrogen air refill station to maintain maximum tyre life and battery mileage.',
        },
        {
          icon: Navigation,
          title: 'Test Ride Arena Available',
          desc: 'Take a complimentary spin and experience the pickup and comfortable dual rear suspension.',
        },
      ],
      videoSrc: '/videos/tezz-video-1.mp4',
      poster: '/images/poster-1.jpg',
      videoTitle: 'Bhawarkua Hub — Rapid KYC & Delivery Fleet Handover',
      whatsappMessage: 'Hi TezzEV! I want to book a scooter test ride at Bhawarkua Hub in Indore.',
    },
  ],
  bhopal: [
    {
      id: 'bhopal-mp-nagar',
      name: 'MP Nagar Central Hub',
      city: 'bhopal',
      shortArea: 'Zone-1 / Chetak Bridge',
      badge: 'Bhopal Flagship Hub',
      landmark: 'Zone-1, Opposite City Centre Complex, Near Chetak Bridge, Bhopal, MP 462011',
      timing: '7:00 AM – 11:00 PM (Daily)',
      highlights: [
        {
          icon: Zap,
          title: 'Central Automated Battery Swap Dock',
          desc: 'Over 200 high-capacity batteries charging continuously with smart temperature management.',
        },
        {
          icon: Wrench,
          title: 'Master Fleet Diagnostic & Service Bay',
          desc: 'Full-time master technician for scheduled 30-day vehicle safety inspections and preventative care.',
        },
        {
          icon: Coffee,
          title: 'Commercial Onboarding & Training Desk',
          desc: 'Dedicated assistance for Zomato, Swiggy, and Blinkit onboarding and fleet bulk inquiries.',
        },
        {
          icon: Navigation,
          title: 'Metro Connectivity Advantage',
          desc: 'Direct access to MP Nagar business district and major Bhopal delivery demand corridors.',
        },
      ],
      videoSrc: '/videos/tezz-video-4.mp4',
      poster: '/images/poster-4.jpg',
      videoTitle: 'MP Nagar Central Hub — Complete Fleet Walkthrough',
      whatsappMessage: 'Hi TezzEV! I want to visit MP Nagar Central Hub in Bhopal for scooter pickup.',
    },
    {
      id: 'bhopal-new-market',
      name: 'New Market Express Station',
      city: 'bhopal',
      shortArea: 'TT Nagar / Apex Bank',
      badge: 'Express Swapping Station',
      landmark: 'TT Nagar Commercial Area, Near Apex Bank Circle, Bhopal, MP 462003',
      timing: '7:30 AM – 10:30 PM (Daily)',
      highlights: [
        {
          icon: Zap,
          title: 'Rapid 120-Second Swap Station',
          desc: 'Designed for fast mid-shift battery exchanges without breaking delivery momentum.',
        },
        {
          icon: Wrench,
          title: 'Quick Brake & Electrical Inspection',
          desc: '5-minute routine safety checkup by certified TezzEV field technicians.',
        },
        {
          icon: Coffee,
          title: 'Clean Water & Shaded Rider Rest Zone',
          desc: 'Free chilled water dispenser and comfortable waiting area for partner captains.',
        },
        {
          icon: Navigation,
          title: 'Priority Swiggy & Zomato Bay',
          desc: 'Dedicated fast-track counter for high-frequency gig delivery riders.',
        },
      ],
      videoSrc: '/videos/tezz-video-2.mp4',
      poster: '/images/poster-2.jpg',
      videoTitle: 'New Market Hub — Express Battery Swapping Demo',
      whatsappMessage: 'Hi TezzEV! I want to visit New Market Express Hub in Bhopal.',
    },
  ],
};

export const CityHubExplorer: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<'indore' | 'bhopal'>('indore');
  const [activeHubId, setActiveHubId] = useState<string>('indore-vijay-nagar');
  const { openVideoModal } = useVideoModal();

  const cityHubs = hubsData[selectedCity];
  const activeHub =
    cityHubs.find((h) => h.id === activeHubId) || cityHubs[0];

  const handleCityChange = (city: 'indore' | 'bhopal') => {
    setSelectedCity(city);
    setActiveHubId(hubsData[city][0].id);
  };

  const whatsappHref = `https://wa.me/91${siteConfig.supportPhone.replace(/\D/g, '')}?text=${encodeURIComponent(
    activeHub.whatsappMessage
  )}`;

  return (
    <div className="w-full space-y-6 sm:space-y-8">
      {/* 1. Header with City Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/80 pb-5">
        <div className="space-y-2 text-left max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>MP Rapid Battery Swap Network</span>
          </span>
          <h2 className="text-navy-950 font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight">
            Explore TezzEV <span className="text-royal">City Hubs</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Strategically located across major delivery hotspots in Indore &amp; Bhopal. Swap your depleted battery for a 100% charged pack in under 2 minutes.
          </p>
        </div>

        {/* City Switcher Buttons */}
        <div className="flex items-center p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shrink-0 gap-1.5">
          <button
            onClick={() => handleCityChange('indore')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              selectedCity === 'indore'
                ? 'bg-royal text-white shadow-md shadow-royal/30'
                : 'text-slate-600 hover:text-navy-950 hover:bg-white/80'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Indore Metro (3 Hubs)</span>
          </button>

          <button
            onClick={() => handleCityChange('bhopal')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              selectedCity === 'bhopal'
                ? 'bg-royal text-white shadow-md shadow-royal/30'
                : 'text-slate-600 hover:text-navy-950 hover:bg-white/80'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Bhopal Metro (2 Hubs)</span>
          </button>
        </div>
      </div>

      {/* 2. Main Interactive Hub Tour Stage */}
      <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-200/90 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Hub Selector Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">
                Select City Hub Location
              </span>
              <span className="text-xs font-bold text-royal">
                {cityHubs.length} Active Hubs
              </span>
            </div>

            <div className="space-y-2.5">
              {cityHubs.map((hub) => {
                const isActive = hub.id === activeHub.id;
                return (
                  <div
                    key={hub.id}
                    onClick={() => setActiveHubId(hub.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col space-y-2 text-left ${
                      isActive
                        ? 'bg-blue-50/70 border-royal shadow-md ring-2 ring-royal/20'
                        : 'bg-slate-50/80 hover:bg-slate-100/90 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                            isActive
                              ? 'bg-royal text-white'
                              : 'bg-white border border-slate-200 text-slate-600'
                          }`}
                        >
                          <Building2 className="w-3.5 h-3.5" />
                        </div>
                        <h4 className="text-sm font-bold text-navy-950 truncate font-heading">
                          {hub.name}
                        </h4>
                      </div>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                          isActive
                            ? 'bg-royal text-white'
                            : 'bg-slate-200/70 text-slate-600'
                        }`}
                      >
                        {hub.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                      <MapPin className="w-3.5 h-3.5 text-royal shrink-0" />
                      <span className="truncate">{hub.shortArea}</span>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-slate-200/60 text-[11px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-leaf" />
                        <span>{hub.timing}</span>
                      </span>
                      <span
                        className={`font-bold ${
                          isActive ? 'text-royal' : 'text-slate-500'
                        }`}
                      >
                        {isActive ? 'Viewing Now →' : 'Tap to View'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Support Callout Box */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Hub Assistance Helpline</span>
                  <span className="font-bold text-navy-950">{siteConfig.supportPhone}</span>
                </div>
              </div>
              <a
                href={`tel:${siteConfig.supportPhone}`}
                className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-navy-950 font-bold hover:bg-slate-100 transition-colors shrink-0"
              >
                Call Hub
              </a>
            </div>
          </div>

          {/* Right Column: Selected Hub Details, Facilities & Video Reel (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50/70 rounded-2xl p-4 sm:p-6 border border-slate-200 flex flex-col justify-between space-y-5 text-left">
            {/* Hub Header & Full Address */}
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                    {activeHub.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {selectedCity === 'indore' ? 'Indore Division' : 'Bhopal Division'}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-leaf"></span>
                  <span>Open Now</span>
                </div>
              </div>

              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-navy-950">
                {activeHub.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex items-start gap-1.5">
                <MapPin className="w-4 h-4 text-royal shrink-0 mt-0.5" />
                <span>{activeHub.landmark}</span>
              </p>
            </div>

            {/* Video Showcase Card: How Battery Swap Works At This Hub */}
            <div
              onClick={() =>
                openVideoModal({
                  src: activeHub.videoSrc,
                  title: activeHub.videoTitle,
                  poster: activeHub.poster,
                })
              }
              className="relative aspect-video w-full rounded-2xl overflow-hidden cursor-pointer shadow-md border border-slate-200 group bg-black select-none"
            >
              <img
                src={activeHub.poster}
                alt={activeHub.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30" />

              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="w-13 h-13 rounded-full bg-royal text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-blue-600 transition-all border-2 border-white/50">
                  <Play className="w-5 h-5 fill-current ml-0.5 text-white" />
                </div>
              </div>

              {/* Bottom Caption Inside Video */}
              <div className="absolute bottom-3 left-3 right-3 z-10 text-white pointer-events-none flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold block drop-shadow-md">
                    Watch 2-Min Battery Swap Demo
                  </span>
                  <span className="text-[11px] text-slate-300 drop-shadow-sm">
                    Recorded live at {activeHub.name}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white border border-white/20">
                  Tap To Play Video
                </span>
              </div>
            </div>

            {/* 4 Hub Key Facilities Grid */}
            <div className="space-y-2">
              <span className="text-xs uppercase font-extrabold text-slate-500 tracking-wider block">
                Hub Facilities &amp; Amenities
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeHub.highlights.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-slate-200/90 flex items-start gap-2.5 shadow-2xs"
                    >
                      <div className="w-6 h-6 rounded-md bg-royal/10 text-royal flex items-center justify-center shrink-0 mt-0.5">
                        <ItemIcon className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5">
                        <h5 className="text-xs font-bold text-navy-950 leading-tight">
                          {item.title}
                        </h5>
                        <p className="text-[11px] text-slate-500 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hub Action Row: WhatsApp & Booking */}
            <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Get Hub Location on WhatsApp</span>
              </a>

              <Link
                to="/waitlist"
                className="btn-primary !min-h-[42px] justify-center text-xs sm:text-sm font-bold"
              >
                <span>Book Pickup At This Hub</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
