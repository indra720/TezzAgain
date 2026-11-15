import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Zap,
  Leaf,
  Users,
  MapPin,
  ArrowRight,
  Target,
  Eye,
  CheckCircle2,
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { VideoCard } from '../components/ui/VideoCard';
import { SectionDivider } from '../components/ui/SectionDivider';
import { siteConfig } from '../lib/config';

export const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Affordable',
      desc: 'Transparent rental pricing designed so every gig rider takes home higher earnings every day.',
      icon: Zap,
    },
    {
      title: 'Reliable',
      desc: 'Tested for tough city conditions with instant 24/7 on-road breakdown help and vehicle swaps.',
      icon: ShieldCheck,
    },
    {
      title: 'Clean',
      desc: '100% electric zero-tailpipe emission mobility protecting our city air for the next generation.',
      icon: Leaf,
    },
    {
      title: 'Rider-First',
      desc: 'Simple paperless signup, friendly hub mechanics, and flexible rental payment options.',
      icon: Users,
    },
  ];

  const team = [
    { name: '[TBD]', role: 'Founder & Operations Lead', bio: 'Passionate about clean urban mobility and driver empowerment.' },
    { name: '[TBD]', role: 'Fleet & Hub Manager', bio: 'Ensuring zero downtime for delivery vehicles and battery swaps.' },
    { name: '[TBD]', role: 'Head of Rider Community', bio: 'Supporting gig partners with seamless onboarding and helpline care.' },
  ];

  return (
    <div className="w-full">
      <PageHeader
        breadcrumbs={[{ label: 'About Us' }]}
        title="About TezzEV Mobility"
        highlightWord="TezzEV"
        subtitle="Empowering delivery riders and city commuters with affordable, green electric scooter rentals."
      />

      {/* WAVE DIVIDER: Deep Navy to Sky-200 */}
      <SectionDivider type="navy-to-sky200" />

      {/* Section 1: Story & Video (Sky-200) */}
      <section className="bg-sky-200 text-text-light section-pad">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Story Text */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-royal">
                  Our Journey
                </span>
                <h2 className="text-navy-950 mt-1 mb-2">
                  Petrol ka zamana khatam. Ab <span className="text-royal">TEZZ!</span>
                </h2>
              </div>
              <p className="text-text-light-muted text-sm sm:text-base leading-relaxed">
                Rising fuel prices and costly vehicle maintenance were eating away the hard-earned daily profits of delivery riders across Indian cities.
              </p>
              <p className="text-text-light-muted text-sm sm:text-base leading-relaxed">
                TezzEV was founded to change this reality. We provide high-range, commercial electric scooters on flexible rent with zero petrol expense and free hub servicing.
              </p>
              <div className="pt-1">
                <Link to="/how-it-works" className="btn-primary !min-h-[42px]">
                  <span>See How It Works</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Story Video */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[340px]">
                <VideoCard
                  src={siteConfig.videos.about.src}
                  title={siteConfig.videos.about.title}
                  poster="/images/poster-1.jpg"
                  aspect="vertical"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-200 to Deep Navy */}
      <SectionDivider type="sky200-to-navy" />

      {/* Section 2: Mission & Vision (Deep Navy) */}
      <section className="bg-gradient-deep text-white section-pad">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="tezz-card-dark p-6 shadow-md">
              <div className="icon-tile mb-3">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-2 text-white">Our Mission</h3>
              <p className="text-text-dark-muted text-xs sm:text-sm leading-relaxed">
                To double the daily take-home earnings of gig workers by eliminating fuel costs and providing worry-free, fully maintained electric vehicles.
              </p>
            </div>

            <div className="tezz-card-dark p-6 shadow-md">
              <div className="icon-tile mb-3">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-2 text-white">Our Vision</h3>
              <p className="text-text-dark-muted text-xs sm:text-sm leading-relaxed">
                To build India&apos;s most accessible and reliable urban electric mobility ecosystem, transforming delivery logistics into 100% green transit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Deep Navy to Sky-100 */}
      <SectionDivider type="navy-to-sky100" />

      {/* Section 3: Our 4 Values (Sky-100) */}
      <section className="bg-sky-100 text-text-light section-pad">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-royal">
              Core Principles
            </span>
            <h2 className="text-navy-950 mt-1 mb-1.5">
              Values that guide <span className="text-royal">TezzEV</span>
            </h2>
            <p className="text-text-light-muted text-sm sm:text-base">
              Built on empathy, environmental responsibility, and rock-solid reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="tezz-card p-5 flex flex-col justify-between">
                  <div>
                    <div className="icon-tile mb-3">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-navy-950 font-heading mb-1.5">
                      {v.title}
                    </h3>
                    <p className="text-xs text-text-light-muted leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-100 text-xs font-semibold text-royal flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-leaf" /> Core standard
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-100 to Deep Navy */}
      <SectionDivider type="sky100-to-navy" />

      {/* Section 4: Where We Launch & Team Placeholders (Deep Navy) */}
      <section className="bg-gradient-deep text-white section-pad">
        <div className="container-custom space-y-10">
          {/* Where we launch */}
          <div className="tezz-card-dark p-6 sm:p-7">
            <div className="flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="space-y-1.5 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-navy-950 border border-navy-700 text-blue-light text-xs font-bold">
                  <MapPin className="w-3.5 h-3.5 text-leaf" />
                  <span>Phase 1 Rollout</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  Launching Soon In <span className="text-blue-light">{siteConfig.launchCity}</span>
                </h3>
                <p className="text-text-dark-muted text-xs sm:text-sm max-w-xl">
                  Initial hubs are opening at key transport corridors and delivery clusters with complete battery swapping infrastructure.
                </p>
              </div>

              <Link to="/waitlist" className="btn-primary shrink-0 !min-h-[42px]">
                <span>Reserve in {siteConfig.launchCity.split(' ')[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Team Placeholders */}
          <div>
            <div className="text-center max-w-xl mx-auto mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-light">
                Leadership
              </span>
              <h2 className="text-white mt-1 mb-1.5">
                Meet the <span className="text-blue-light">Founding Team</span>
              </h2>
              <p className="text-text-dark-muted text-xs sm:text-sm">
                Engineers, operations experts, and logistics veterans committed to clean mobility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {team.map((m, idx) => (
                <div key={idx} className="tezz-card p-5 bg-white text-navy-950">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center font-heading font-black text-lg mb-3">
                    EV
                  </div>
                  <h4 className="text-base font-bold font-heading text-navy-950">{m.name}</h4>
                  <div className="text-xs font-semibold text-royal mb-1">{m.role}</div>
                  <p className="text-xs text-text-light-muted leading-relaxed">{m.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Deep Navy to Sky-200 */}
      <SectionDivider type="navy-to-sky200" />

      {/* Section 5: CTA (Sky-200) */}
      <section className="bg-sky-200 text-text-light section-pad text-center">
        <div className="container-custom max-w-2xl mx-auto space-y-4">
          <h2 className="text-navy-950">
            Be part of the <span className="text-royal">clean mobility</span> revolution.
          </h2>
          <p className="text-text-light-muted text-sm sm:text-base">
            Join the waitlist now and experience smart electric rides designed for your daily freedom.
          </p>
          <div className="pt-1 flex items-center justify-center gap-3 flex-wrap">
            <Link to="/waitlist" className="btn-primary !min-h-[44px]">
              <span>Join Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-secondary-light !min-h-[44px]">
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
