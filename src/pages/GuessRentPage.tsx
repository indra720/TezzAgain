import React, { useState } from 'react';
import {
  Sparkles,
  Instagram,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { VideoCard } from '../components/ui/VideoCard';
import { SectionDivider } from '../components/ui/SectionDivider';
import { siteConfig } from '../lib/config';

export const GuessRentPage: React.FC = () => {
  const [guessValue, setGuessValue] = useState<number>(149);
  const [isLocked, setIsLocked] = useState<boolean>(false);

  const handleLockGuess = () => {
    setIsLocked(true);
  };

  const shareText = `I just guessed the TezzEV daily rent at ₹${guessValue}/day! Speed ka naya code unlock ho raha hai. Ab sheher chalega TEZZ!`;

  return (
    <div className="w-full">
      <PageHeader
        breadcrumbs={[{ label: 'Daily Rent Guess' }]}
        title="Daily Rent Guess Karo"
        highlightWord="Guess"
        subtitle="Speed ka naya code unlock ho raha hai. What do you think the daily rental price of TezzEV will be?"
      />

      {/* WAVE DIVIDER: Deep Navy to Sky-200 */}
      <SectionDivider type="navy-to-sky200" />

      {/* Section 1: Teaser Video & Slider Guess Box (Sky-200) */}
      <section className="bg-sky-200 text-text-light section-pad">
        <div className="container-custom">
          {/* Teaser Video */}
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-royal">
              Teaser Video
            </span>
            <h2 className="text-navy-950 mt-1 mb-2">
              Something TEZZ is <span className="text-royal">coming</span>
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-2xl mt-6 max-w-sm mx-auto">
              <VideoCard
                src={siteConfig.videos.guessRent.src}
                title={siteConfig.videos.guessRent.title}
                poster="/images/poster-2.jpg"
                aspect="vertical"
              />
            </div>
          </div>

          {/* Interactive Guess Card */}
          <div className="tezz-card p-6 sm:p-10 max-w-2xl mx-auto bg-white border border-slate-200 shadow-2xl">
            <div className="text-center space-y-2 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-royal font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-royal" /> Launch Event
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
                Choose Your Daily Rental Guess
              </h3>
              <p className="text-xs sm:text-sm text-text-light-muted">
                Drag the slider to your predicted per-day rental price for the TezzEV scooter.
              </p>
            </div>

            {/* Slider */}
            <div className="space-y-6 mb-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-black font-heading text-royal">
                  ₹{guessValue}{' '}
                  <span className="text-sm font-semibold text-text-light-muted">/ day</span>
                </div>
                <span className="text-xs text-text-light-muted block mt-1">
                  (Estimated daily electric scooter rental)
                </span>
              </div>

              <input
                type="range"
                min={79}
                max={299}
                step={5}
                disabled={isLocked}
                value={guessValue}
                onChange={(e) => setGuessValue(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-royal"
              />

              <div className="flex justify-between text-xs text-text-light-muted font-medium">
                <span>₹79 / day</span>
                <span>₹189 / day</span>
                <span>₹299 / day</span>
              </div>
            </div>

            {/* Action or Success State */}
            {!isLocked ? (
              <div className="text-center">
                <button
                  onClick={handleLockGuess}
                  className="btn-primary w-full justify-center !min-h-[50px] !text-base"
                >
                  <Lock className="w-4 h-4" />
                  <span>Lock my guess</span>
                </button>
              </div>
            ) : (
              <div className="space-y-6 animate-fade-in">
                {/* Success Message Banner */}
                <div className="p-5 rounded-2xl bg-emerald-50 border border-leaf text-navy-950 text-center">
                  <div className="flex items-center justify-center gap-2 text-leaf font-bold text-base mb-1">
                    <CheckCircle2 className="w-5 h-5 text-leaf" />
                    <span>Guess Locked at ₹{guessValue} / day!</span>
                  </div>
                  <h4 className="text-xl font-bold font-heading text-navy-950 mt-1">
                    Great guess! Stay tuned, TEZZ is coming.
                  </h4>
                  <p className="text-xs text-text-light-muted mt-1">
                    Official rental rates will be revealed at the city launch event.
                  </p>
                </div>

                {/* DM Instagram + WhatsApp Buttons */}
                <div className="space-y-3">
                  <p className="text-xs text-center font-bold text-text-light uppercase tracking-wider">
                    Share your guess with the community:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={siteConfig.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-sm shadow-md transition-transform hover:-translate-y-0.5"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>DM on Instagram</span>
                    </a>
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-leaf text-navy-950 font-bold text-sm shadow-md transition-transform hover:-translate-y-0.5"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Share on WhatsApp</span>
                    </a>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <button
                    onClick={() => setIsLocked(false)}
                    className="text-xs text-royal hover:underline font-semibold"
                  >
                    Change my guess
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-200 to Deep Navy */}
      <SectionDivider type="sky200-to-navy" />

      {/* Section 2: Official Poster Showcase (Deep Navy) */}
      <section className="bg-gradient-deep text-white section-pad">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-4xl mx-auto">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-light">
                Official Teaser Poster
              </span>
              <h2 className="text-white">
                Speed ka naya code <span className="text-blue-light">unlock</span> ho raha hai
              </h2>
              <p className="text-text-dark-muted text-sm sm:text-base leading-relaxed">
                Petrol ka zamana khatam. Ab sheher chalega TEZZ! Be among the first to witness our modern electric fleet.
              </p>
              <div className="pt-2">
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Follow @tezzev_official</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl border-2 border-royal/40">
                <img
                  src="/images/poster-2.jpg"
                  alt="TezzEV Speed ka Naya Code Unlock Poster"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
