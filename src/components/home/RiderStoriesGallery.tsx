import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Play,
  ArrowRight,
  Sparkles,
  MapPin,
  TrendingDown,
  CheckCircle2,
  Building2,
  Bike,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { useVideoModal } from '../ui/VideoContext';

interface StoryItem {
  id: number;
  category: 'food' | 'grocery' | 'b2b';
  categoryLabel: string;
  name: string;
  city: string;
  partnerBrand: string;
  avatarText: string;
  avatarBg: string;
  statNumber: string;
  statLabel: string;
  statIcon: React.ElementType;
  quote: string;
  videoSrc: string;
  poster: string;
  verifiedBadge: string;
}

const storiesData: StoryItem[] = [
  {
    id: 1,
    category: 'food',
    categoryLabel: 'Food Delivery',
    name: 'Rahul Sharma',
    city: 'Indore (Vijay Nagar)',
    partnerBrand: 'Zomato Gold Partner',
    avatarText: 'RS',
    avatarBg: 'bg-rose-500',
    statNumber: '₹8,600',
    statLabel: 'Monthly Petrol Saved',
    statIcon: TrendingDown,
    quote: 'Pehle ₹300-350 daily petrol me jaate the. Ab TezzEV ke saath fuel expense zero hai aur daily pura profit ghar le jata hu!',
    videoSrc: '/videos/tezz-video-1.mp4',
    poster: '/images/poster-1.jpg',
    verifiedBadge: 'Verified Zomato Rider',
  },
  {
    id: 2,
    category: 'food',
    categoryLabel: 'Food Delivery',
    name: 'Vikas Solanki',
    city: 'Bhopal (MP Nagar)',
    partnerBrand: 'Swiggy Captain',
    avatarText: 'VS',
    avatarBg: 'bg-amber-500',
    statNumber: '140+',
    statLabel: 'Orders Delivered / Day',
    statIcon: Bike,
    quote: 'Peak dinner hours me charging ka jhanjhat nahi. MP Nagar hub par 2 minute me battery swap kiya aur turant next delivery par nikal gaya.',
    videoSrc: '/videos/tezz-video-2.mp4',
    poster: '/images/poster-2.jpg',
    verifiedBadge: 'Top Tier Swiggy Rider',
  },
  {
    id: 3,
    category: 'grocery',
    categoryLabel: 'Quick Commerce',
    name: 'Amit Patel',
    city: 'Indore (Palasia)',
    partnerBrand: 'Blinkit Dark Store Fleet',
    avatarText: 'AP',
    avatarBg: 'bg-emerald-600',
    statNumber: '₹0',
    statLabel: 'Maintenance & Service Cost',
    statIcon: ShieldCheck,
    quote: 'Heavy grocery crates ke saath bhi dual suspension super smooth chalta hai. Free hub servicing se gaadi hamesha fresh rehti hai.',
    videoSrc: '/videos/tezz-video-3.mp4',
    poster: '/images/poster-3.jpg',
    verifiedBadge: 'Dark Store Lead Rider',
  },
  {
    id: 4,
    category: 'b2b',
    categoryLabel: 'B2B Client Fleet',
    name: 'Apex Courier & Logistics',
    city: 'Indore & Bhopal Metro',
    partnerBrand: 'Fleet Client (8 Scooters)',
    avatarText: 'AL',
    avatarBg: 'bg-royal',
    statNumber: '42%',
    statLabel: 'Fleet Operating Cost Cut',
    statIcon: Building2,
    quote: 'Humne apne parcel delivery fleet ko TezzEV par shift kiya. Zero downtime aur unlimited battery swaps se hamara monthly logistics bill 42% kam ho gaya.',
    videoSrc: '/videos/tezz-video-4.mp4',
    poster: '/images/poster-4.jpg',
    verifiedBadge: 'Commercial Fleet Client',
  },
];

export const RiderStoriesGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'food' | 'grocery' | 'b2b'>('all');
  const { openVideoModal } = useVideoModal();

  const filteredStories =
    activeCategory === 'all'
      ? storiesData
      : storiesData.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full space-y-6 sm:space-y-8">
      {/* 1. Header with Badges & Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/80 pb-5">
        <div className="space-y-2 text-left max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-royal tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-royal" />
            <span>Real Rider &amp; Client Stories</span>
          </span>
          <h2 className="text-navy-950 font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight">
            Real Riders. Real Savings. <span className="text-royal">Real Stories.</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Discover how gig delivery partners and commercial fleet managers in Indore &amp; Bhopal maximize daily take-home earnings with TezzEV.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar shrink-0">
          {[
            { key: 'all', label: 'All Stories' },
            { key: 'food', label: 'Food Delivery' },
            { key: 'grocery', label: 'Quick Commerce' },
            { key: 'b2b', label: 'Fleet Clients' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveCategory(tab.key as any)}
              className={`px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === tab.key
                  ? 'bg-royal text-white shadow-md shadow-royal/25'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Responsive 4-Column Video Story Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
        {filteredStories.map((story) => {
          const StatIcon = story.statIcon;
          return (
            <div
              key={story.id}
              className="group bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
            >
              {/* Top: Video Reel Container */}
              <div
                onClick={() =>
                  openVideoModal({
                    src: story.videoSrc,
                    title: `${story.name} — ${story.partnerBrand}`,
                    poster: story.poster,
                  })
                }
                className="relative aspect-[9/13] w-full bg-black cursor-pointer overflow-hidden select-none"
              >
                {/* Poster Image */}
                <img
                  src={story.poster}
                  alt={story.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient Contrast Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 pointer-events-none" />

                {/* Top Badge: Verified Tag */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none z-10">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-tight inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{story.verifiedBadge}</span>
                  </span>
                  <span className="w-6 h-6 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  </span>
                </div>

                {/* Centered Play Reel Action Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-13 h-13 rounded-full bg-royal/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-blue-600 transition-all backdrop-blur-sm border-2 border-white/40">
                    <Play className="w-5 h-5 fill-current ml-0.5 text-white" />
                  </div>
                </div>

                {/* Bottom Overlay Inside Reel: Big Stat Callout */}
                <div className="absolute bottom-3 left-3 right-3 z-10 text-white pointer-events-none">
                  <div className="p-2.5 rounded-2xl bg-navy-950/85 backdrop-blur-md border border-white/15 space-y-0.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-emerald-400">
                        <StatIcon className="w-3.5 h-3.5 shrink-0" />
                        <span className="text-base font-black font-heading text-white tracking-tight">
                          {story.statNumber}
                        </span>
                      </div>
                      <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full">
                        Benefit
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 font-medium truncate">
                      {story.statLabel}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom: Rider Profile & Authentic Hindi Quote */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-white space-y-3">
                <div className="space-y-2">
                  {/* Name + City */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-full ${story.avatarBg} text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs`}
                      >
                        {story.avatarText}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-navy-950 truncate font-heading">
                          {story.name}
                        </h4>
                        <div className="flex items-center gap-1 text-[11px] text-slate-500 truncate">
                          <MapPin className="w-3 h-3 text-royal shrink-0" />
                          <span className="truncate">{story.city}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rider Quote */}
                  <p className="text-xs text-slate-600 leading-relaxed italic line-clamp-3 pt-1">
                    "{story.quote}"
                  </p>
                </div>

                {/* Brand Pill & Watch Reel Link */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-royal truncate">
                    {story.partnerBrand}
                  </span>
                  <button
                    onClick={() =>
                      openVideoModal({
                        src: story.videoSrc,
                        title: `${story.name} — ${story.partnerBrand}`,
                        poster: story.poster,
                      })
                    }
                    className="text-xs font-bold text-slate-700 hover:text-royal inline-flex items-center gap-1 shrink-0 transition-colors cursor-pointer"
                  >
                    <span>Watch</span>
                    <Play className="w-3 h-3 fill-current text-royal" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Bottom Banner: Call for more rider stories & Link to Ads Page */}
      <div className="rounded-2xl p-4 sm:p-5 bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-royal/10 text-royal flex items-center justify-center shrink-0">
            <Bike className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-navy-950">
              Want to share your TezzEV earning story or join as a delivery rider?
            </h4>
            <p className="text-xs text-slate-600">
              Over 200+ delivery partners pre-registered for our first fleet roll-out in MP.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            to="/ads"
            className="btn-secondary-light !min-h-[38px] !py-0 !px-4 text-xs font-bold"
          >
            <span>Watch All Video Ads</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/waitlist"
            className="btn-primary !min-h-[38px] !py-0 !px-4 text-xs font-bold"
          >
            <span>Join Rider Fleet</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
