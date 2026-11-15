import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  CreditCard,
  UserCheck,
  Building2,
  Camera,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { VideoCard } from '../components/ui/VideoCard';
import { SectionDivider } from '../components/ui/SectionDivider';
import { InteractiveJoinStepper } from '../components/home/InteractiveJoinStepper';
import { siteConfig } from '../lib/config';

export const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Register Online in 2 Minutes',
      desc: 'Fill your basic profile details, pick your city, and select a daily, weekly, or monthly plan. No paperwork queues.',
      video: siteConfig.videos.step1,
    },
    {
      num: '02',
      title: 'Get Verified Digitally',
      desc: 'Upload clear photos of your Driving Licence and Aadhaar card. Our digital system approves your profile fast.',
      video: siteConfig.videos.step2,
    },
    {
      num: '03',
      title: 'Pick Up Your TEZZ At Hub',
      desc: 'Visit our nearest city hub, show your verification SMS, complete vehicle handover inspection, and collect keys.',
      video: siteConfig.videos.step3,
    },
    {
      num: '04',
      title: 'Ride and Earn Every Day',
      desc: 'Log in to your favorite delivery partner apps (Zomato, Swiggy, Zepto). Save huge petrol money and grow daily profit.',
      video: siteConfig.videos.step4,
    },
  ];

  const documents = [
    { name: 'Driving Licence', detail: 'Valid 2-wheeler licence (Learner or Permanent)', icon: FileText },
    { name: 'Aadhaar Card', detail: 'Original 12-digit UID for identity confirmation', icon: UserCheck },
    { name: 'PAN Card', detail: 'Valid 10-character PAN for KYC records', icon: CreditCard },
    { name: 'Bank Details', detail: 'Passbook or canceled cheque for rental security refund', icon: Building2 },
    { name: 'Clear Selfie', detail: 'Live selfie photo matching your government ID', icon: Camera },
  ];

  const stepFaqs = [
    {
      q: 'Do I need a commercial driving licence?',
      a: 'No, a regular personal 2-wheeler driving licence (MCWG or MCWOG) is completely valid for renting a TezzEV.',
    },
    {
      q: 'How long does the verification take?',
      a: 'Digital document verification typically takes under 15 minutes during standard hub operating hours.',
    },
    {
      q: 'What if the scooter battery runs out while delivering?',
      a: 'Simply ride into the nearest TezzEV hub and swap for a 100% full battery in under 2 minutes for free.',
    },
    {
      q: 'Is there any security deposit required?',
      a: 'Yes, a small refundable security deposit of Rs [XXX] is held safely and refunded within 48 hours upon vehicle return.',
    },
  ];

  return (
    <div className="w-full">
      <PageHeader
        breadcrumbs={[{ label: 'How It Works' }]}
        title="Simple 4-Step Rental Process"
        highlightWord="Process"
        subtitle="From online signup to picking up your keys at the hub. Simple, transparent, and completely paperless."
      />

      {/* WAVE DIVIDER: Deep Navy to Sky-200 */}
      <SectionDivider type="navy-to-sky200" />

      {/* Section 1: Watch Full Process Video (Sky-200) - Split 2-Column Layout */}
      <section className="bg-sky-200 text-text-light section-pad">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text & Guidance */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-royal">
                Complete Walkthrough
              </span>
              <h2 className="text-navy-950">
                Watch full <span className="text-royal">process</span>
              </h2>
              <p className="text-slate-700 text-base leading-relaxed max-w-xl">
                A comprehensive step-by-step visual guide explaining online registration, Aadhaar verification, and how to pick up your keys and charged scooter at the nearest hub.
              </p>
              <div className="pt-1 flex flex-wrap gap-2.5">
                <span className="px-3 py-1.5 rounded-xl bg-[#F4F8FE] border border-[#D6E4FB] text-xs font-bold text-navy-950">
                  ⚡ 15-Minute Digital Approval
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-[#F4F8FE] border border-[#D6E4FB] text-xs font-bold text-navy-950">
                  🚀 Ready-To-Ride Delivery Scooter
                </span>
              </div>
              <div className="pt-2">
                <Link to="/register" className="btn-primary !min-h-[44px]">
                  <span>Start Quick Registration</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Video Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border border-slate-300">
                <VideoCard
                  src={siteConfig.videos.fullProcess.src}
                  title={siteConfig.videos.fullProcess.title}
                  poster={siteConfig.videos.fullProcess.poster}
                  aspect="vertical"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-200 to Deep Navy */}
      <SectionDivider type="sky200-to-navy" />

      {/* Section 2: Interactive Step-by-Step Video Guide (Deep Navy) */}
      <section className="bg-gradient-deep text-white section-pad">
        <div className="container-custom space-y-8">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-light">
              Step-by-Step Guide
            </span>
            <h2 className="text-white mt-1 mb-1.5">
              Every step has its own <span className="text-blue-light">video</span>
            </h2>
            <p className="text-text-dark-muted text-sm sm:text-base">
              Follow along with our interactive smartphone guide to get on the road smoothly without delays.
            </p>
          </div>

          <InteractiveJoinStepper />
        </div>
      </section>

      {/* WAVE DIVIDER: Deep Navy to Sky-100 */}
      <SectionDivider type="navy-to-sky100" />

      {/* Section 3: Documents You Need + Upload Video (Sky-100) */}
      <section className="bg-sky-100 text-text-light section-pad">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Documents List (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-royal">
                  KYC Checklist
                </span>
                <h2 className="text-navy-950 mt-1 mb-1.5">
                  Documents you <span className="text-royal">need</span>
                </h2>
                <p className="text-text-light-muted text-sm sm:text-base">
                  Keep these simple documents ready on your phone before starting registration.
                </p>
              </div>

              <div className="space-y-2.5">
                {documents.map((doc, dIdx) => {
                  const Icon = doc.icon;
                  return (
                    <div
                      key={dIdx}
                      className="tezz-card p-3.5 flex items-center gap-3.5 bg-white"
                    >
                      <div className="icon-tile !w-10 !h-10 !min-w-[40px]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-navy-950 font-heading">
                          {doc.name}
                        </h4>
                        <p className="text-xs text-text-light-muted">{doc.detail}</p>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-leaf shrink-0" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Video (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-2.5">
              <div className="w-full max-w-sm">
                <VideoCard
                  src={siteConfig.videos.documents.src}
                  title={siteConfig.videos.documents.title}
                  poster="/images/poster-3.jpg"
                  aspect="vertical"
                />
              </div>
              <p className="text-xs text-text-light-muted text-center italic">
                Watch our quick guide on taking glare-free photos of your documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-100 to Deep Navy */}
      <SectionDivider type="sky100-to-navy" />

      {/* Section 4: 4 FAQs (Deep Navy) */}
      <section className="bg-gradient-deep text-white section-pad">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-light">
              Clear Answers
            </span>
            <h2 className="text-white mt-1 mb-1.5">
              Frequently asked <span className="text-blue-light">questions</span>
            </h2>
            <p className="text-text-dark-muted text-sm sm:text-base">
              Quick answers to help you begin your rental journey with total confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {stepFaqs.map((faq, fIdx) => (
              <div key={fIdx} className="tezz-card p-5 bg-white text-navy-950">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-4 h-4 text-royal shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold font-heading text-navy-950 mb-1.5">
                      {faq.q}
                    </h4>
                    <p className="text-xs sm:text-sm text-text-light-muted leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link to="/faqs" className="btn-secondary-dark !min-h-[42px] !py-0 !px-6 text-sm">
              <span>View All 10 FAQs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Deep Navy to Sky-200 */}
      <SectionDivider type="navy-to-sky200" />

      {/* Section 5: CTA (Sky-200) */}
      <section className="bg-sky-200 text-text-light section-pad text-center">
        <div className="container-custom max-w-2xl mx-auto space-y-4">
          <h2 className="text-navy-950">
            Ready to ride with <span className="text-royal">TezzEV</span>?
          </h2>
          <p className="text-text-light-muted text-sm sm:text-base">
            Reserve your electric scooter now on the priority launch waitlist.
          </p>
          <div className="pt-1 flex items-center justify-center gap-3 flex-wrap">
            <Link to="/waitlist" className="btn-primary !min-h-[44px]">
              <span>Join Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/register" className="btn-secondary-light !min-h-[44px]">
              <span>Start Registration</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
