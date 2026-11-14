import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Wrench,
  Headphones,
  RefreshCw,
} from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import { VideoCard } from "../components/ui/VideoCard";
import { SectionDivider } from "../components/ui/SectionDivider";
import { siteConfig } from "../lib/config";

export const PricingPage: React.FC = () => {
  const comparisonData = [
    {
      feature: "Fuel / Energy Cost",
      tezz: "₹0 (Free Battery Swaps)",
      petrol: "₹300 - ₹450 / Day",
      other: "Paid charging points",
    },
    {
      feature: "Periodic Servicing",
      tezz: "100% Free at TezzEV Hubs",
      petrol: "₹1,500 - ₹2,500 / Month",
      other: "Rider pays minor parts",
    },
    {
      feature: "Tyre & Brake Maintenance",
      tezz: "Included in rent",
      petrol: "Paid by rider",
      other: "Limited coverage",
    },
    {
      feature: "Breakdown Scooter Replacement",
      tezz: "Instant at nearest hub",
      petrol: "No replacement (lost work)",
      other: "24 - 48 hour waiting",
    },
    {
      feature: "Security Deposit Refund",
      tezz: "Within 48 hours guaranteed",
      petrol: "N/A (Purchased/EMI)",
      other: "Up to 30 days delay",
    },
    {
      feature: "Heavy Delivery Cargo Rack",
      tezz: "Pre-fitted standard",
      petrol: "Extra ₹1,200 accessory",
      other: "Extra surcharge",
    },
  ];

  const pricingFaqs = [
    {
      q: "Are there any hidden costs above the rental price?",
      a: "None. Your rental fee covers the scooter, unlimited battery swaps at hubs, routine maintenance, and 24/7 breakdown assistance.",
    },
    {
      q: "When will the exact rental amount be announced?",
      a: "Exact numeric rates will be declared on official city launch day. You can lock in priority early-bird benefits on the waitlist today.",
    },
    {
      q: "How is the security deposit refunded?",
      a: "When you conclude your rental and return the scooter and keys at our hub, your deposit is wired to your bank within 48 hours.",
    },
    {
      q: "Can I switch from a Daily to a Weekly plan?",
      a: "Yes! You can easily upgrade or renew your rental tenure at any TezzEV Hub or through your Rider Dashboard.",
    },
  ];

  const whatsIncluded = [
    {
      title: "Zero Petrol Bills",
      desc: "Swap batteries without paying a single rupee for petrol.",
      icon: Zap,
    },
    {
      title: "Full Servicing & Tyres",
      desc: "Brake pads, motor oil, and tyre wear are repaired for free.",
      icon: Wrench,
    },
    {
      title: "Unlimited Hub Swaps",
      desc: "Swap anytime during operating hours in under 2 minutes.",
      icon: RefreshCw,
    },
    {
      title: "24/7 Road Helpline",
      desc: "Emergency breakdown assistance anywhere across city limits.",
      icon: Headphones,
    },
  ];

  return (
    <div className="w-full">
      <PageHeader
        breadcrumbs={[{ label: "Rental Pricing" }]}
        title="Simple Transparent Rental Pricing"
        highlightWord="Pricing"
        subtitle="Keep 100% of your delivery earnings. No fuel expenses, no repair bills, and no surprise deductions."
      />

      {/* WAVE DIVIDER: Deep Navy to Sky-200 */}
      <SectionDivider type="navy-to-sky200" />

      {/* Section 1: Explainer Video & 3 Plan Cards (Sky-200) */}
      <section className="bg-sky-200 text-text-light section-pad">
        <div className="container-custom space-y-12">
          {/* Top 2-Column Split: Text Left, Video Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-royal">
                Pricing Explainer
              </span>
              <h2 className="text-navy-950">
                How TezzEV rental <span className="text-royal">works</span>
              </h2>
              <p className="text-slate-700 text-base leading-relaxed max-w-xl">
                Choose flexible Daily, Weekly Pro, or Monthly Super plans. Every rental package comes with unlimited battery swaps at all TezzEV hubs and zero maintenance charges.
              </p>
              <div className="pt-1 flex flex-wrap gap-2.5">
                <span className="px-3.5 py-1.5 rounded-xl bg-[#F4F8FE] border border-[#D6E4FB] text-xs font-bold text-navy-950">
                  ⚡ 100% Free Hub Battery Swaps
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-[#F4F8FE] border border-[#D6E4FB] text-xs font-bold text-navy-950">
                  🛡️ 100% Refundable Security Deposit
                </span>
              </div>
              <div className="pt-2">
                <a href="#plans" className="btn-primary !min-h-[44px]">
                  <span>Explore Rental Plans Below</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Video Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border border-slate-300">
                <VideoCard
                  src={siteConfig.videos.pricing.src}
                  title={siteConfig.videos.pricing.title}
                  poster="/images/poster-2.jpg"
                  aspect="vertical"
                />
              </div>
            </div>
          </div>

          {/* 3 Plan Cards */}
          <div id="plans" className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {siteConfig.pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`tezz-card p-6 flex flex-col justify-between relative bg-white ${
                  plan.popular
                    ? "border-2 border-royal shadow-lg md:-translate-y-1"
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-royal text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-navy-950 font-heading">
                      {plan.name}
                    </h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-100 text-royal font-semibold">
                      {plan.badge}
                    </span>
                  </div>

                  <p className="text-xs text-text-light-muted mb-4">
                    {plan.description}
                  </p>

                  <div className="mb-4 pb-4 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-black text-navy-950 font-heading">
                        {plan.price}
                      </span>
                      <span className="text-xs text-text-light-muted">
                        /{plan.period}
                      </span>
                    </div>
                    <span className="text-[11px] text-text-light-muted mt-0.5 block">
                      *Official launch rent announced soon.
                    </span>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    {plan.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2 text-xs sm:text-sm"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-leaf shrink-0" />
                        <span className="text-text-light">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/waitlist"
                  className={
                    plan.popular
                      ? "btn-primary w-full justify-center !min-h-[42px]"
                      : "btn-secondary-light w-full justify-center !min-h-[42px]"
                  }
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-200 to Deep Navy */}
      <SectionDivider type="sky200-to-navy" />

      {/* Section 2: What's Included & Deposit Card (Deep Navy) */}
      <section className="bg-gradient-deep text-white section-pad">
        <div className="container-custom space-y-8">
          {/* What's Included */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-light">
                All-Inclusive Guarantee
              </span>
              <h2 className="text-white mt-1 mb-1.5">
                What is included in{" "}
                <span className="text-blue-light">your rent</span>
              </h2>
              <p className="text-text-dark-muted text-sm sm:text-base">
                Everything required to ride uninterrupted is covered under one
                flat plan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {whatsIncluded.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="tezz-card p-5 bg-white text-navy-950"
                  >
                    <div className="icon-tile mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold font-heading text-navy-950 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-text-light-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Refundable Deposit Card */}
          <div className="tezz-card-dark p-6 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-leaf/20 text-leaf text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{siteConfig.deposit.refundableText}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  Refundable Security Deposit: {siteConfig.deposit.amount}
                </h3>
                <p className="text-text-dark-muted text-xs">
                  {siteConfig.deposit.note}
                </p>
              </div>

              <Link
                to="/waitlist"
                className="btn-primary shrink-0 !min-h-[42px]"
              >
                <span>Join Priority List</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Deep Navy to Sky-100 */}
      <SectionDivider type="navy-to-sky100" />

      {/* Section 3: Comparison Table (Sky-100) */}
      <section className="bg-sky-100 text-text-light section-pad">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-royal">
              Market Comparison
            </span>
            <h2 className="text-navy-950 mt-1 mb-1.5">
              TezzEV vs Petrol vs{" "}
              <span className="text-royal">Other EV Rentals</span>
            </h2>
            <p className="text-text-light-muted text-sm sm:text-base">
              Why delivery riders in our launch cities are reserving TezzEV
              scooters.
            </p>
          </div>

          <div className="tezz-card overflow-hidden shadow-md bg-white border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-navy-950 text-white border-b border-navy-800">
                    <th className="py-3 px-5 font-heading font-semibold text-xs sm:text-sm">
                      Feature
                    </th>
                    <th className="py-3 px-5 font-heading font-bold text-xs sm:text-sm bg-royal text-white">
                      TezzEV Scooter
                    </th>
                    <th className="py-3 px-5 font-heading font-semibold text-xs sm:text-sm text-text-dark-muted">
                      Petrol Scooter
                    </th>
                    <th className="py-3 px-5 font-heading font-semibold text-xs sm:text-sm text-text-dark-muted">
                      Other EV Rental
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonData.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className={rIdx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                    >
                      <td className="py-3.5 px-5 font-semibold text-navy-950">
                        {row.feature}
                      </td>
                      <td className="py-3.5 px-5 font-bold text-royal bg-sky-100/40 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-leaf shrink-0" />
                        <span>{row.tezz}</span>
                      </td>
                      <td className="py-3.5 px-5 text-text-light-muted">
                        <span className="flex items-center gap-1.5 text-slate-700">
                          <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                          <span>{row.petrol}</span>
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-text-light-muted">
                        {row.other}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
              Pricing &amp; deposit{" "}
              <span className="text-blue-light">questions</span>
            </h2>
            <p className="text-text-dark-muted text-sm sm:text-base">
              Transparent terms without complicated legal fine print.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {pricingFaqs.map((faq, fIdx) => (
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
        </div>
      </section>

      {/* WAVE DIVIDER: Deep Navy to Sky-200 */}
      <SectionDivider type="navy-to-sky200" />

      {/* Section 5: CTA (Sky-200) */}
      <section className="bg-sky-200 text-text-light section-pad text-center">
        <div className="container-custom max-w-2xl mx-auto space-y-4">
          <h2 className="text-navy-950">
            Lock your early <span className="text-royal">pricing tier</span>{" "}
            today.
          </h2>
          <p className="text-text-light-muted text-sm sm:text-base">
            Join the waitlist to receive special promotional rental rates valid
            for your first 3 months.
          </p>
          <div className="pt-1 flex items-center justify-center gap-3 flex-wrap">
            <Link to="/waitlist" className="btn-primary !min-h-[44px]">
              <span>Join Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/savings" className="btn-secondary-light !min-h-[44px]">
              <span>Calculate Savings</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
