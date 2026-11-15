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
  Smartphone,
  Flame,
  CheckCircle2,
  Megaphone,
  MessageCircle,
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { VideoCard } from '../components/ui/VideoCard';
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
}

const adCampaigns: AdCampaign[] = [
  {
    id: 'ad-1',
    category: 'commercials',
    title: 'TezzEV Official Launch Film',
    tagline: 'Petrol ka zamana khatam. Ab sheher chalega TEZZ!',
    videoSrc: '/videos/tezz-video-1.mp4',
    poster: '/images/poster-1.jpg',
    duration: '0:15',
    views: 'Official Launch',
  },
  {
    id: 'ad-2',
    category: 'tech',
    title: 'Speed Ka Naya Code Unlock',
    tagline: 'High acceleration and instant electric torque for fast city delivery.',
    videoSrc: '/videos/tezz-video-4.mp4',
    poster: '/images/poster-2.jpg',
    duration: '0:15',
    views: 'Trending',
  },
  {
    id: 'ad-3',
    category: 'commercials',
    title: '2-Minute Paperless KYC App Ad',
    tagline: 'Download the app, register yourself, and ride anywhere.',
    videoSrc: '/videos/tezz-video-3.mp4',
    poster: '/images/poster-3.jpg',
    duration: '0:15',
    views: 'Rider Guide',
  },
  {
    id: 'ad-4',
    category: 'tech',
    title: 'Smooth City Commute in Rush Hour',
    tagline: 'Effortlessly glide through heavy city traffic with zero engine vibrations.',
    videoSrc: '/videos/tezz-video-2.mp4',
    poster: '/images/poster-4.jpg',
    duration: '0:15',
    views: 'Commuter Pick',
  },
  {
    id: 'ad-5',
    category: 'delivery',
    title: 'Gig Delivery Partner Fuel Savings Story',
    tagline: 'How Zomato & Swiggy riders save ₹4,000+ extra cash every single month.',
    videoSrc: '/videos/tezz-video-4.mp4',
    poster: '/images/poster-2.jpg',
    duration: '0:15',
    views: 'Gig Special',
  },
  {
    id: 'ad-6',
    category: 'challenges',
    title: '2-Minute Quick Battery Swap Challenge',
    tagline: 'Watch how quickly a depleted battery is swapped for 100% full charge.',
    videoSrc: '/videos/tezz-video-3.mp4',
    poster: '/images/poster-3.jpg',
    duration: '0:15',
    views: 'Hub Demo',
  },
  {
    id: 'ad-7',
    category: 'delivery',
    title: 'Heavy Cargo Delivery Box Test',
    tagline: 'Reinforced back rack carrying 3 heavy grocery delivery crates easily.',
    videoSrc: '/videos/tezz-video-2.mp4',
    poster: '/images/poster-4.jpg',
    duration: '0:15',
    views: 'Durability',
  },
  {
    id: 'ad-8',
    category: 'tech',
    title: 'Dual LED Night Vision Showcase',
    tagline: 'Powerful automotive illumination engineered for night shift delivery.',
    videoSrc: '/videos/tezz-video-1.mp4',
    poster: '/images/poster-1.jpg',
    duration: '0:15',
    views: 'Night Test',
  },
];

export const AdsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [heroMuted, setHeroMuted] = useState<boolean>(true);
  const [heroPlaying, setHeroPlaying] = useState<boolean>(true);
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

  return (
    <div className="w-full">
      {/* Page Header */}
      <PageHeader
        breadcrumbs={[{ label: 'Campaigns & Ads' }]}
        title="Official Ad Videos & Campaign Reels"
        highlightWord="Campaign"
        subtitle="Petrol ka zamana khatam. Ab sheher chalega TEZZ! Watch our commercial films, speed demonstrations, and rider stories."
      />

      {/* WAVE DIVIDER: Deep Navy to Sky-200 */}
      <SectionDivider type="navy-to-sky200" />

      {/* Section 1: Hero Featured Commercial Film (Sky-200) */}
      <section className="bg-sky-200 text-text-light section-pad">
        <div className="container-custom space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-royal">
              Brand Commercial
            </span>
            <h2 className="text-navy-950">
              The Official <span className="text-royal">TezzEV Launch Film</span>
            </h2>
            <p className="text-slate-700 text-sm sm:text-base">
              Created for India's hardest working delivery riders. Zero fuel cost, 2-minute battery swap, and pure electric power.
            </p>
          </div>

          {/* Featured Video Player Box */}
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-royal/30 bg-navy-950">
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

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40 pointer-events-none" />

              {/* Top Bar inside player */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                <div className="px-3 py-1.5 rounded-full bg-navy-950/80 backdrop-blur-md border border-navy-700/60 text-white text-xs font-bold flex items-center gap-2 shadow-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-leaf animate-pulse" />
                  <span>TezzEV Official TVC • 2026</span>
                </div>

                <button
                  onClick={handleShare}
                  className="px-3 py-1.5 rounded-full bg-navy-900/80 backdrop-blur-md hover:bg-navy-800 text-white text-xs font-medium flex items-center gap-1.5 transition-colors border border-navy-700/60 shadow-md"
                  aria-label="Share Campaign"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </button>
              </div>

              {/* Bottom Player Overlay Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20">
                <div className="flex items-center gap-2.5">
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
                    className="w-10 h-10 rounded-xl bg-navy-900/90 hover:bg-navy-800 text-white flex items-center justify-center transition-colors border border-navy-700/60 shadow-lg"
                    aria-label={heroMuted ? 'Unmute sound' : 'Mute sound'}
                  >
                    {heroMuted ? (
                      <VolumeX className="w-4 h-4 text-slate-300" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-leaf" />
                    )}
                  </button>

                  <span className="text-xs font-medium text-slate-200 hidden sm:inline ml-1">
                    {heroMuted ? 'Tap speaker icon for full sound' : 'Sound ON'}
                  </span>
                </div>

                <button
                  onClick={() =>
                    openVideoModal({
                      src: '/videos/tezz-video-1.mp4',
                      title: 'TezzEV Official Launch Film',
                      poster: '/images/poster-1.jpg',
                    })
                  }
                  className="px-3.5 py-2 rounded-xl bg-navy-900/90 hover:bg-navy-800 text-white text-xs font-semibold flex items-center gap-1.5 border border-navy-700/60 shadow-lg transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-blue-light" />
                  <span>Full Screen</span>
                </button>
              </div>
            </div>

            {/* Subtext info under hero video */}
            <div className="p-4 sm:p-6 bg-navy-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-navy-800">
              <div>
                <h3 className="font-heading font-bold text-white text-lg sm:text-xl">
                  Speed Ka Naya Code: Official Commercial
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                  Launching soon in Indore & Bhopal. Join the waitlist for early rider batch access.
                </p>
              </div>

              <Link to="/waitlist" className="btn-primary !min-h-[42px] !py-0 !px-5 shrink-0">
                <span>Join Launch Waitlist</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-200 to Deep Navy */}
      <SectionDivider type="sky200-to-navy" />

      {/* Section 2: Campaign Reels Gallery (Deep Navy Gradient) */}
      <section className="bg-gradient-deep text-white section-pad">
        <div className="container-custom space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-light">
              Video Gallery
            </span>
            <h2 className="text-white">
              All Commercials &amp; <span className="text-blue-light">Reels</span>
            </h2>
            <p className="text-text-dark-muted text-sm sm:text-base">
              Short, high-energy vertical video clips showing real-world speed, battery swaps, and delivery partner benefits.
            </p>
          </div>

          {/* Filter Category Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {[
              { id: 'all', label: 'All Ad Videos' },
              { id: 'commercials', label: 'Commercial Ads' },
              { id: 'delivery', label: 'Delivery Partner Specials' },
              { id: 'challenges', label: '10-Sec Challenges' },
              { id: 'tech', label: 'Scooter Tech & Speed' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-royal text-white shadow-lg shadow-royal/30 scale-102'
                    : 'bg-navy-900 text-slate-300 border border-navy-800 hover:bg-navy-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 9:16 Vertical Video Reels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCampaigns.map((ad) => (
              <div
                key={ad.id}
                className="bg-navy-900/60 rounded-2xl p-3 sm:p-4 border border-navy-800 shadow-xl flex flex-col justify-between hover:border-royal transition-all duration-200 group"
              >
                <div className="mb-3">
                  <VideoCard
                    src={ad.videoSrc}
                    title={ad.title}
                    poster={ad.poster}
                    aspect="square"
                  />
                </div>

                <div className="space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-blue-light font-semibold mb-1">
                      <span className="uppercase tracking-wider">{ad.views}</span>
                      <span className="text-slate-400">{ad.duration}</span>
                    </div>

                    <h4 className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-blue-light transition-colors line-clamp-1">
                      {ad.title}
                    </h4>

                    <p className="text-xs text-text-dark-muted line-clamp-2 mt-1 leading-relaxed">
                      {ad.tagline}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-navy-800/80 flex items-center justify-between text-xs">
                    <button
                      onClick={() =>
                        openVideoModal({
                          src: ad.videoSrc,
                          title: ad.title,
                          poster: ad.poster,
                        })
                      }
                      className="text-royal font-bold hover:text-blue-light flex items-center gap-1 transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Watch Reel</span>
                    </button>

                    <span className="text-[10px] text-slate-400 font-medium">TezzEV Original</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Deep Navy to Sky-100 */}
      <SectionDivider type="navy-to-sky100" />

      {/* Section 3: B2B Brand Advertising / Partner Inquiries (Sky-100) */}
      <section className="bg-sky-100 text-text-light section-pad">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#D6E4FB] shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-royal text-xs font-bold">
                  <Megaphone className="w-3.5 h-3.5" />
                  <span>B2B FLEET BRANDING</span>
                </div>

                <h2 className="text-navy-950 font-bold text-2xl sm:text-3xl font-heading">
                  Advertise Your Brand on <span className="text-royal">TezzEV Fleet</span>
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Put your brand message on thousands of delivery scooters moving across high-traffic city roads 12 hours a day. High impressions, hyper-local city targeting.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 font-medium pt-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-leaf shrink-0" />
                    <span>Delivery Box Rear &amp; Side Wraps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-leaf shrink-0" />
                    <span>Scooter Body Decal Advertising</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-leaf shrink-0" />
                    <span>Tezz Hub Screen Video Promos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-leaf shrink-0" />
                    <span>Verified Rider Community Reach</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3 flex-wrap">
                  <a
                    href={`${siteConfig.whatsappLink}%20and%20fleet%20advertising%20inquiry`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary !min-h-[44px]"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                    <span>Inquire for Brand Advertising</span>
                  </a>

                  <Link to="/contact" className="btn-secondary-light !min-h-[44px] !text-xs sm:!text-sm">
                    <span>Contact Media Team</span>
                  </Link>
                </div>
              </div>

              {/* Visual Card Right */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-[240px] rounded-2xl p-4 bg-navy-950 text-white text-center space-y-3 shadow-xl border border-navy-800">
                  <div className="w-12 h-12 rounded-2xl bg-royal text-white flex items-center justify-center mx-auto shadow-md">
                    <Tv className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-white">
                    10M+ Monthly City Impressions
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    High street visibility across prime commercial and residential sectors in MP.
                  </p>
                  <span className="inline-block text-[10px] font-bold text-blue-light uppercase tracking-wider bg-navy-900 px-2.5 py-1 rounded-full">
                    Launching Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-100 to Deep Navy */}
      <SectionDivider type="sky100-to-navy" />

      {/* Section 4: Final Call to Action (Deep Navy) */}
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
