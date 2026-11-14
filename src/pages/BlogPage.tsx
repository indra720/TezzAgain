import React, { useState } from 'react';
import {
  Search,
  Clock,
  ArrowRight,
  X,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { VideoCard } from '../components/ui/VideoCard';
import { VideoPlayer } from '../components/ui/VideoPlayer';
import { SectionDivider } from '../components/ui/SectionDivider';
import { siteConfig } from '../lib/config';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  video: { src: string; title: string; duration?: string; poster?: string };
  content: string[];
  takeaways: string[];
}

export const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 'blog-1',
      title: 'Why Delivery Riders Are Switching to Electric',
      category: 'Rider Earnings',
      date: 'Nov 2026',
      readTime: '3 min read',
      excerpt:
        'With petrol touching record rates, Indian food and parcel delivery workers are boosting monthly savings by moving to commercial EV rentals.',
      video: siteConfig.videos.blog1,
      content: [
        'For delivery partners working full-time on platforms like Zomato, Swiggy, and Blinkit, petrol has historically been the single largest expense, often eating away 35% of daily gross payouts.',
        'Electric scooter rentals turn that equation around. With zero fuel cost and battery swapping included in the flat rental plan, every extra order delivered translates directly into take-home profit.',
        'In addition, eliminating oil changes, engine tuning, and clutch wear saves an extra ₹1,500 every month on servicing.',
      ],
      takeaways: [
        'Save ₹8,000 to ₹12,000 every month compared to petrol.',
        'Zero queueing at crowded fuel stations during rush hours.',
        'All periodic servicing and brake pads covered at hubs.',
      ],
    },
    {
      id: 'blog-2',
      title: 'How Swappable Batteries Eliminate Charging Waiting',
      category: 'EV Technology',
      date: 'Nov 2026',
      readTime: '4 min read',
      excerpt:
        'Why plug-in charging cables do not work for gig delivery, and how modular 2-minute battery swaps keep riders on the road 24/7.',
      video: siteConfig.videos.blog2,
      content: [
        'Traditional electric vehicles require 3 to 5 hours plugged into a wall outlet. For a gig worker whose income depends on active delivery hours, downtime means direct financial loss.',
        'TezzEV solves this through automated battery swap stations across our hub network. A rider simply pulls up, unlocks the depleted battery pack, and inserts a 100% fresh pack.',
        'The entire operation takes less than 120 seconds—faster than filling petrol at a congested station.',
      ],
      takeaways: [
        'Instant swap in under 2 minutes.',
        'No dependence on home parking sockets.',
        'Battery health and degradation monitored continuously by hub staff.',
      ],
    },
    {
      id: 'blog-3',
      title: 'Daily Scooter Maintenance Checklist for Delivery Partners',
      category: 'Maintenance Tips',
      date: 'Nov 2026',
      readTime: '3 min read',
      excerpt:
        'Five quick morning checks to keep your rental electric scooter performing reliably in heavy Indian city traffic.',
      video: siteConfig.videos.blog3,
      content: [
        'While TezzEV covers all routine servicing, doing a quick 60-second visual inspection every morning ensures total peace of mind on the road.',
        'Check tyre pressure with a quick thumb press, ensure front and rear brake levers respond firmly, and verify that the high-beam headlights and indicator lamps are functioning.',
        'If you ever detect slight vibration or tyre puncture, simply ride into our hub or dial the 24/7 Helpline for immediate assistance.',
      ],
      takeaways: [
        'Inspect tyre pressure before morning shift starts.',
        'Check front disc brake fluid and lever tightness.',
        'Visit any TezzEV Hub for free tyre top-up and brake check.',
      ],
    },
  ];

  const categories = ['All', 'Rider Earnings', 'EV Technology', 'Maintenance Tips'];

  const filteredPosts = posts.filter((p) => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesQuery =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="w-full">
      <PageHeader
        breadcrumbs={[{ label: 'Blog & Updates' }]}
        title="Rider Guides &amp; EV Insights"
        highlightWord="Guides"
        subtitle="Practical tips, fuel savings breakdowns, and news from the TezzEV electric mobility team."
      />

      {/* WAVE DIVIDER: Deep Navy to Sky-200 */}
      <SectionDivider type="navy-to-sky200" />

      {/* Section 1: Search, Filter Chips, 3 Posts Grid (Sky-200) */}
      <section className="bg-sky-200 text-text-light section-pad">
        <div className="container-custom">
          {/* Search & Category Filter */}
          <div className="max-w-2xl mx-auto mb-8 space-y-3">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles and rider guides..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-navy-950 placeholder:text-slate-400 shadow-sm text-sm focus:border-royal focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-royal text-white shadow-sm'
                      : 'bg-white text-navy-900 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="tezz-card bg-white overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Video Thumbnail */}
                  <VideoCard
                    src={post.video.src}
                    title={post.video.title}
                    poster={post.video.poster}
                    aspect="vertical"
                  />

                  {/* Post Metadata & Excerpt */}
                  <div className="p-5">
                    <div className="flex items-center justify-between text-xs text-text-light-muted mb-2">
                      <span className="font-semibold text-royal px-2.5 py-0.5 rounded-full bg-sky-100">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-base font-bold font-heading text-navy-950 mb-1.5 line-clamp-2 hover:text-royal transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-xs text-text-light-muted leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-1 border-t border-slate-100">
                  <button
                    onClick={() => setActiveArticle(post)}
                    className="w-full btn-secondary-light !min-h-[40px] justify-center text-xs font-bold"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 text-royal" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/85 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveArticle(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl overflow-y-auto shadow-2xl p-5 sm:p-7 text-navy-950"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-royal">
                {activeArticle.category} • {activeArticle.readTime}
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-navy-950 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-navy-950 mb-3 leading-tight">
              {activeArticle.title}
            </h2>

            {/* Embedded Video */}
            <div className="mb-4 rounded-xl overflow-hidden aspect-video bg-navy-950 shadow-md">
              <VideoPlayer
                src={activeArticle.video.src || '/videos/tezz-video-1.mp4'}
                poster={activeArticle.video.poster}
                title={activeArticle.title}
                autoPlay={false}
                controls={true}
              />
            </div>

            {/* Paragraphs */}
            <div className="space-y-3 text-xs sm:text-sm text-text-light-muted leading-relaxed mb-4">
              {activeArticle.content.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>

            {/* Key Takeaways */}
            <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 mb-4">
              <h4 className="font-bold text-navy-950 font-heading text-xs sm:text-sm mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-royal" />
                <span>Key Takeaways for Riders</span>
              </h4>
              <div className="space-y-1.5">
                {activeArticle.takeaways.map((t, tIdx) => (
                  <div key={tIdx} className="flex items-center gap-2 text-xs text-navy-950">
                    <CheckCircle2 className="w-3.5 h-3.5 text-leaf shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-text-light-muted">
                Published by TezzEV Editorial Team
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="btn-primary !min-h-[38px] text-xs font-semibold"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WAVE DIVIDER: Sky-200 to Deep Navy */}
      <SectionDivider type="sky200-to-navy" />

      {/* Section 2: Newsletter / Updates (Deep Navy) */}
      <section className="bg-gradient-deep text-white section-pad text-center">
        <div className="container-custom max-w-2xl mx-auto space-y-3">
          <h2 className="text-white">
            Get early launch news in your <span className="text-blue-light">city</span>.
          </h2>
          <p className="text-text-dark-muted text-xs sm:text-sm">
            Join the waitlist to receive battery hub announcements and delivery earning insights.
          </p>
        </div>
      </section>
    </div>
  );
};
