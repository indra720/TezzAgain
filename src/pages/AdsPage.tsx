import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Film,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  Share2,
  ArrowRight,
  Tv,
  CheckCircle2,
  Megaphone,
  Eye,
  Flame,
  TrendingUp,
  Download,
  Bike,
  Zap,
  Rocket,
  Package,
  BatteryCharging,
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionDivider } from '../components/ui/SectionDivider';
import { useVideoModal } from '../components/ui/VideoContext';
import { siteConfig } from '../lib/config';
import { WhatsAppIcon } from '../components/ui/BrandIcons';
import { toast } from 'sonner';

interface AdCampaign {
  id: string;
  category: 'commercials' | 'delivery' | 'challenges' | 'tech';
  title: string;
  tagline: string;
  videoSrc: string;
  poster: string;
  duration: string;
  views: string;
  categoryLabel: string;
}

const adCampaigns: AdCampaign[] = [
  {
    id: 'ad-1',
    category: 'commercials',
    categoryLabel: 'Official TVC',
    title: 'TezzEV Official Launch Film',
    tagline: 'Petrol ka zamana khatam. Ab sheher chalega TEZZ!',
    videoSrc: '/videos/tezz-video-1.mp4',
    poster: '/images/poster-1.jpg',
    duration: '0:15',
    views: '54k views',
  },
  {
    id: 'ad-2',
    category: 'tech',
    categoryLabel: 'Speed Demo',
    title: 'Speed Ka Naya Code Unlock',
    tagline: 'High acceleration & instant torque for rush-hour city delivery.',
    videoSrc: '/videos/tezz-video-4.mp4',
    poster: '/images/poster-2.jpg',
    duration: '0:15',
    views: '42k views',
  },
  {
    id: 'ad-3',
    category: 'commercials',
    categoryLabel: 'App Guide',
    title: '2-Minute Paperless KYC App Ad',
    tagline: 'Download the app, register yourself, and ride anywhere.',
    videoSrc: '/videos/tezz-video-3.mp4',
    poster: '/images/poster-3.jpg',
    duration: '0:15',
    views: '38k views',
  },
  {
    id: 'ad-4',
    category: 'tech',
    categoryLabel: 'Commuter Pick',
    title: 'Smooth City Commute in Rush Hour',
    tagline: 'Glide through heavy traffic with dual suspension and zero vibrations.',
    videoSrc: '/videos/tezz-video-2.mp4',
    poster: '/images/poster-4.jpg',
    duration: '0:15',
    views: '29k views',
  },
  {
    id: 'ad-5',
    category: 'delivery',
    categoryLabel: 'Gig Rider Special',
    title: 'Delivery Partner Fuel Savings Story',
    tagline: 'How Zomato & Swiggy riders save ₹4,000+ extra cash every single month.',
    videoSrc: '/videos/tezz-video-4.mp4',
    poster: '/images/poster-2.jpg',
    duration: '0:15',
    views: '61k views',
  },
  {
    id: 'ad-6',
    category: 'challenges',
    categoryLabel: 'Hub Challenge',
    title: '2-Minute Quick Battery Swap Challenge',
    tagline: 'Watch a depleted battery swapped for 100% full charge in under 2 minutes.',
    videoSrc: '/videos/tezz-video-3.mp4',
    poster: '/images/poster-3.jpg',
    duration: '0:15',
    views: '47k views',
  },
  {
    id: 'ad-7',
    category: 'delivery',
    categoryLabel: 'Cargo Test',
    title: 'Heavy Cargo Delivery Box Test',
    tagline: 'Reinforced back rack carrying 3 heavy grocery delivery crates easily.',
    videoSrc: '/videos/tezz-video-2.mp4',
    poster: '/images/poster-4.jpg',
    duration: '0:15',
    views: '33k views',
  },
  {
    id: 'ad-8',
    category: 'tech',
    categoryLabel: 'Night Delivery',
    title: 'Dual LED Night Vision Showcase',
    tagline: 'Powerful automotive illumination engineered for night shift delivery.',
    videoSrc: '/videos/tezz-video-1.mp4',
    poster: '/images/poster-1.jpg',
    duration: '0:15',
    views: '26k views',
  },
];

export const AdsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [heroMuted, setHeroMuted] = useState<boolean>(true);
  const [heroPlaying, setHeroPlaying] = useState<boolean>(true);
  const [fleetSize, setFleetSize] = useState<number>(100);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const { openVideoModal } = useVideoModal();

  const filteredCampaigns =
    activeCategory === 'all'
      ? adCampaigns
      : adCampaigns.filter((ad) => ad.category === activeCategory);

  const toggleHeroPlay = () => {
    if (!heroVideoRef.current) return;
    if (heroVideoRef.current.paused) {
      heroVideoRef.current.play();
      setHeroPlaying(true);
    } else {
      heroVideoRef.current.pause();
      setHeroPlaying(false);
    }
  };

  const toggleHeroMute = () => {
    if (!heroVideoRef.current) return;
    heroVideoRef.current.muted = !heroVideoRef.current.muted;
    setHeroMuted(heroVideoRef.current.muted);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'TezzEV Video Campaigns',
        text: 'Check out the official TezzEV electric scooter ads and launch reels!',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Campaign link copied to clipboard!');
    }
  };

  // Monthly impressions estimate formula: ~25,000 views per scooter/month in prime city sectors
  const monthlyImpressions = (fleetSize * 25000).toLocaleString();

  return (
    <div className="w-full">
      {/* 1. Page Header */}
      <PageHeader
        breadcrumbs={[{ label: 'Campaigns & Ads' }]}
        title="Official Ad Films & Campaign Reels"
        highlightWord="Campaign"
        subtitle="Petrol ka zamana khatam. Ab sheher chalega TEZZ! Watch our commercial films, speed demonstrations, and rider stories."
      />

      {/* WAVE DIVIDER: Deep Navy to Sky-100 */}
      <SectionDivider type="navy-to-sky100" />

      {/* 2. Cinema Spotlight Theater (Sky-100) */}
      <section className="bg-sky-100 text-navy-950 section-pad">
        <div className="container-custom space-y-6 sm:space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-royal uppercase tracking-wider">
              <Film className="w-3.5 h-3.5 text-royal" />
              <span>Premiere Showcase</span>
            </span>
            <h2 className="text-navy-950 font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl">
              The Official <span className="text-royal">TezzEV Launch TVC</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base">
              Created for India's hardest working delivery riders. Zero fuel cost, 2-minute battery swap, and pure electric power.
            </p>
          </div>

          {/* Cinematic Curved Theater Frame */}
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200/90 bg-black">
            <div className="relative aspect-video sm:aspect-[16/9] w-full flex items-center justify-center bg-black">
              <video
                ref={heroVideoRef}
                src="/videos/tezz-video-1.mp4"
                poster="/images/poster-1.jpg"
                autoPlay
                loop
                muted={heroMuted}
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35 pointer-events-none" />

              {/* Top Bar inside player */}
              <div className="absolute top-3.5 sm:top-5 left-3.5 sm:left-5 right-3.5 sm:right-5 flex items-center justify-between z-20">
                <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-bold flex items-center gap-2 shadow-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>TezzEV Official TVC • 2026</span>
                </div>

                <button
                  onClick={handleShare}
                  className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md hover:bg-black/80 text-white text-xs font-medium flex items-center gap-1.5 transition-colors border border-white/20 shadow-md"
                  aria-label="Share Campaign"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </button>
              </div>

              {/* Bottom Player Overlay Bar */}
              <div className="absolute bottom-3.5 sm:bottom-5 left-3.5 sm:left-5 right-3.5 sm:right-5 flex items-center justify-between z-20">
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={toggleHeroPlay}
                    className="w-10 h-10 rounded-xl bg-royal hover:bg-blue text-white flex items-center justify-center transition-all shadow-lg active:scale-95"
                    aria-label={heroPlaying ? 'Pause video' : 'Play video'}
                  >
                    {heroPlaying ? (
                      <Pause className="w-4 h-4 fill-white" />
                    ) : (
                      <Play className="w-4 h-4 fill-white translate-x-0.5" />
                    )}
                  </button>

                  <button
                    onClick={toggleHeroMute}
                    className="w-10 h-10 rounded-xl bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors border border-white/20 shadow-lg"
                    aria-label={heroMuted ? 'Unmute sound' : 'Mute sound'}
                  >
                    {heroMuted ? (
                      <VolumeX className="w-4 h-4 text-slate-300" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-emerald-400" />
                    )}
                  </button>

                  <span className="text-xs font-semibold text-white hidden sm:inline ml-1">
                    {heroMuted ? 'Muted' : 'Sound ON'}
                  </span>
                </div>

                <button
                  onClick={() =>
                    openVideoModal({
                      src: '/videos/tezz-video-1.mp4',
                      title: 'TezzEV Official Launch TVC',
                      poster: '/images/poster-1.jpg',
                    })
                  }
                  className="px-3.5 py-2 rounded-xl bg-black/70 hover:bg-black text-white text-xs font-semibold flex items-center gap-1.5 border border-white/20 shadow-lg transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-royal" />
                  <span>Full Screen</span>
                </button>
              </div>
            </div>

            {/* Bottom Details Bar */}
            <div className="p-4 sm:p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-100">
              <div className="space-y-0.5">
                <h3 className="font-heading font-extrabold text-navy-950 text-base sm:text-lg">
                  Speed Ka Naya Code: Official Commercial
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Launching soon in Indore &amp; Bhopal. Join the waitlist for priority batch allotment.
                </p>
              </div>

              <Link to="/waitlist" className="btn-primary !min-h-[42px] !py-0 !px-5 shrink-0 text-xs sm:text-sm font-bold">
                <span>Join Launch Waitlist</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-100 to White */}
      <SectionDivider type="sky100-to-white" />

      {/* 3. Viral Reels Studio Gallery (Pure White Clean Background) */}
      <section className="bg-white text-navy-950 section-pad">
        <div className="container-custom space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-emerald-600" />
              <span>Trending Reels</span>
            </span>
            <h2 className="text-navy-950 font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl">
              Vertical Reels &amp; <span className="text-royal">Stories</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base">
              Short, high-energy 15-second video clips engineered for mobile screens showing speed, swap demos, and rider earnings.
            </p>
          </div>

          {/* Filter Pills with Vector Icons (No Emojis) */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {[
              { id: 'all', label: 'All Reels (8)', icon: Flame },
              { id: 'commercials', label: 'TV Commercials', icon: Tv },
              { id: 'delivery', label: 'Rider Stories', icon: Bike },
              { id: 'challenges', label: 'Hub Challenges', icon: Zap },
              { id: 'tech', label: 'Speed & Tech', icon: Rocket },
            ].map((cat) => {
              const IconComp = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                    activeCategory === cat.id
                      ? 'bg-royal text-white shadow-md shadow-royal/20 scale-102'
                      : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* 9:16 Vertical Video Reels Grid (Instagram/TikTok Style Clean Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredCampaigns.map((ad) => (
              <div
                key={ad.id}
                onClick={() =>
                  openVideoModal({
                    src: ad.videoSrc,
                    title: ad.title,
                    poster: ad.poster,
                  })
                }
                className="group relative cursor-pointer rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* 9:16 Aspect Vertical Reel Box */}
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
                  <img
                    src={ad.poster}
                    alt={ad.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-black/50" />

                  {/* Top Stats Pill */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20">
                      {ad.categoryLabel}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-600/90 text-white">
                      {ad.views}
                    </span>
                  </div>

                  {/* Center Play Button Overlay on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-14 h-14 rounded-full bg-royal/90 group-hover:bg-royal text-white flex items-center justify-center shadow-xl group-hover:scale-115 transition-all">
                      <Play className="w-6 h-6 fill-white translate-x-0.5" />
                    </div>
                  </div>

                  {/* Bottom Text Scrim Info */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 text-white space-y-1 text-left">
                    <h4 className="font-heading font-extrabold text-sm sm:text-base leading-tight group-hover:text-blue-light transition-colors line-clamp-2">
                      {ad.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                      {ad.tagline}
                    </p>
                    <div className="pt-1.5 flex items-center justify-between text-[10px] text-emerald-400 font-bold border-t border-white/10">
                      <span className="flex items-center gap-1">
                        <Play className="w-2.5 h-2.5 fill-current" />
                        <span>Tap to play reel</span>
                      </span>
                      <span className="text-slate-300">{ad.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: White to Sky-100 */}
      <SectionDivider type="white-to-sky100" />

      {/* 4. NEW: B2B Brand Advertising & Impressions Calculator (Sky-100) */}
      <section className="bg-sky-100 text-navy-950 section-pad">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-9 md:p-11 border border-slate-200/90 shadow-xl space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-royal uppercase tracking-wider">
                <Megaphone className="w-3.5 h-3.5 text-royal" />
                <span>B2B Brand Advertising</span>
              </span>
              <h2 className="text-navy-950 font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl">
                Turn Every Street Into Your <span className="text-royal">Billboard</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                Reach lakhs of active urban consumers every day with high-visibility branded wraps on our commercial EV fleet.
              </p>
            </div>

            {/* 3 Advertising Channels with Vector Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-royal flex items-center justify-center font-bold text-sm">
                  <Package className="w-5 h-5 text-royal" />
                </div>
                <h4 className="font-heading font-bold text-navy-950 text-base">
                  Delivery Box Wraps
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Prime eye-level visibility at red lights and commercial hubs across 3 sides of delivery boxes.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
                  <Bike className="w-5 h-5 text-emerald-600" />
                </div>
                <h4 className="font-heading font-bold text-navy-950 text-base">
                  Scooter Body Decals
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Front apron and side panel branding moving 12 hours a day through heavy city traffic.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm">
                  <BatteryCharging className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="font-heading font-bold text-navy-950 text-base">
                  Hub Digital Screens
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  100% captive audience during 2-minute battery swaps with riders and neighborhood visitors.
                </p>
              </div>
            </div>

            {/* Interactive Impressions Calculator */}
            <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/70 border border-blue-200 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-royal">
                  Reach Calculator
                </span>
                <h4 className="font-heading font-bold text-navy-950 text-base sm:text-lg">
                  Select Fleet Sponsorship Size:
                </h4>
                <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                  {[25, 50, 100, 500].map((size) => (
                    <button
                      key={size}
                      onClick={() => setFleetSize(size)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        fleetSize === size
                          ? 'bg-royal text-white shadow-sm'
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {size} Scooters
                    </button>
                  ))}
                </div>
              </div>

              {/* Impressions Stat Callout */}
              <div className="text-center md:text-right shrink-0">
                <span className="text-xs text-slate-500 font-semibold block">
                  Estimated Monthly City Impressions:
                </span>
                <span className="text-2xl sm:text-3xl font-black text-royal font-heading block mt-0.5">
                  {monthlyImpressions}+
                </span>
                <span className="text-[11px] text-emerald-700 font-bold flex items-center justify-center md:justify-end gap-1 mt-0.5">
                  <Zap className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Hyper-Local MP Reach</span>
                </span>
              </div>
            </div>

            {/* Media Kit CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`${siteConfig.whatsappLink}%20and%20fleet%20advertising%20inquiry`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !min-h-[44px] w-full sm:w-auto justify-center"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Inquire for Brand Sponsorship</span>
              </a>

              <Link
                to="/contact"
                className="btn-secondary-light !min-h-[44px] w-full sm:w-auto justify-center text-xs sm:text-sm font-bold"
              >
                <span>Contact Media Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-100 to Deep Navy */}
      <SectionDivider type="sky100-to-navy" />

      {/* 5. Final Call to Action (Deep Navy Grounding) */}
      <section className="bg-gradient-deep text-white section-pad text-center">
        <div className="container-custom max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-light">
            Be Part of The Revolution
          </span>
          <h2 className="text-white text-2xl sm:text-3xl font-heading font-bold">
            Ready to ride with <span className="text-blue-light">zero petrol cost</span>?
          </h2>
          <p className="text-text-dark-muted text-sm sm:text-base">
            Reserve your electric scooter now. Early waitlist members get priority vehicle allotment on launch day.
          </p>
          <div className="pt-2 flex items-center justify-center gap-3">
            <Link to="/waitlist" className="btn-primary">
              <span>Join Launch Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/how-it-works" className="btn-secondary-dark">
              <span>How It Works</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
