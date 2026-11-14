import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Gift,
  ArrowRight,
  MessageCircle,
  Clock,
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionDivider } from '../components/ui/SectionDivider';
import { siteConfig } from '../lib/config';
import { toast } from 'sonner';

export const WaitlistPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: 'Indore',
    userType: 'Delivery Rider',
    preferredPlan: 'Weekly Pro',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [reservationId, setReservationId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.mobile.trim()) {
      toast.error('Please enter your full name and 10-digit mobile number.');
      return;
    }
    if (!/^\d{10}$/.test(formData.mobile.trim())) {
      toast.error('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `TEZZ-${Math.floor(1000 + Math.random() * 9000)}`;
      setReservationId(generatedId);
      setIsSuccess(true);
      toast.success('Successfully reserved your priority spot!', {
        description: `Your token ID is ${generatedId}. We will notify you via SMS.`,
      });
    }, 600);
  };

  const shareText = `I just joined the priority waitlist for TezzEV electric scooters in ${formData.city}! Token: ${reservationId}. Ab sheher chalega TEZZ!`;

  return (
    <div className="w-full">
      <PageHeader
        breadcrumbs={[{ label: 'Waitlist' }]}
        title="Join the Launch Waitlist"
        highlightWord="Waitlist"
        subtitle="Be first in line to rent a high-range TezzEV electric scooter. Zero payment required today."
      />

      {/* WAVE DIVIDER: Deep Navy to Sky-200 */}
      <SectionDivider type="navy-to-sky200" />

      {/* Section 1: Form Card & 3 Benefits (Sky-200) */}
      <section className="bg-sky-200 text-text-light section-pad">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
            {/* Left Form Card (7 cols) */}
            <div className="lg:col-span-7 tezz-card p-6 sm:p-10 bg-white border border-slate-200 shadow-2xl">
              {!isSuccess ? (
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-royal">
                        Free Reservation
                      </span>
                      <h3 className="text-2xl font-bold font-heading text-navy-950">
                        Reserve Your Scooter
                      </h3>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-leaf/20 text-leaf font-bold">
                      ● Batch 1 Open
                    </span>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-navy-950 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ramesh Patel"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-royal focus:outline-none text-navy-950"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy-950 mb-1.5">
                        Mobile Number (for SMS token) *
                      </label>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-royal focus:outline-none text-navy-950"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-navy-950 mb-1.5">
                          Select City *
                        </label>
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-royal focus:outline-none text-navy-950 bg-white"
                        >
                          <option value="Indore">Indore</option>
                          <option value="Bhopal">Bhopal</option>
                          <option value="Other MP City">Other MP City</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-navy-950 mb-1.5">
                          I am renting for
                        </label>
                        <select
                          value={formData.userType}
                          onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-royal focus:outline-none text-navy-950 bg-white"
                        >
                          <option value="Delivery Rider">Delivery Rider (Zomato/Swiggy)</option>
                          <option value="Personal Commute">Daily Office / Personal</option>
                          <option value="Courier Partner">Courier / Grocery Logistics</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy-950 mb-1.5">
                        Preferred Rental Plan
                      </label>
                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        {['Daily Rental', 'Weekly Pro', 'Monthly Super'].map((plan) => (
                          <button
                            type="button"
                            key={plan}
                            onClick={() => setFormData({ ...formData, preferredPlan: plan })}
                            className={`py-2 px-1 rounded-xl font-semibold border transition-all ${
                              formData.preferredPlan === plan
                                ? 'bg-royal text-white border-royal shadow-sm'
                                : 'bg-slate-50 text-navy-900 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {plan}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full justify-center !min-h-[48px]"
                      >
                        <Sparkles className="w-4 h-4 text-leaf" />
                        <span>{isSubmitting ? 'Securing Spot...' : 'Join Waitlist Free'}</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-text-light-muted text-center mt-2">
                      🔒 No payment details required. No obligations.
                    </p>
                  </form>
                </div>
              ) : (
                /* Success State */
                <div className="text-center space-y-6 py-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-royal">
                      Reservation Confirmed
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-navy-950 mt-1">
                      You are in, {formData.name}!
                    </h3>
                    <p className="text-sm text-text-light-muted mt-1 max-w-sm mx-auto">
                      Your priority reservation for <span className="font-semibold text-navy-950">{formData.city}</span> has been locked.
                    </p>
                  </div>

                  {/* Token Card */}
                  <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 max-w-xs mx-auto">
                    <div className="text-xs text-text-light-muted uppercase font-bold">
                      Your Priority Pass Token
                    </div>
                    <div className="text-3xl font-black font-heading text-royal mt-1">
                      {reservationId}
                    </div>
                    <div className="text-[11px] text-text-light-muted mt-1">
                      Registered Mobile: {formData.mobile}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3 pt-2">
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary w-full justify-center !bg-leaf !text-navy-950 hover:!bg-leaf/90"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Share on WhatsApp</span>
                    </a>

                    <Link to="/our-scooter" className="btn-secondary-light w-full justify-center">
                      <span>Explore Scooter Specs</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Right 3 Short Benefits (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-royal">
                  Waitlist Privileges
                </span>
                <h3 className="text-2xl font-bold font-heading text-navy-950 mt-1 mb-2">
                  Why join the waitlist early?
                </h3>
                <p className="text-xs sm:text-sm text-text-light-muted">
                  First fleet batch is strictly restricted to pre-registered riders in Indore &amp; Bhopal.
                </p>
              </div>

              {/* Benefit 1 */}
              <div className="tezz-card p-5 bg-white flex items-start gap-3.5">
                <div className="icon-tile !w-11 !h-11 !min-w-[44px]">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold font-heading text-navy-950">
                    Priority Vehicle Allocation
                  </h4>
                  <p className="text-xs text-text-light-muted mt-0.5 leading-relaxed">
                    First batch of fresh electric scooters will be allocated to waitlist token holders before general public walk-ins.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="tezz-card p-5 bg-white flex items-start gap-3.5">
                <div className="icon-tile !w-11 !h-11 !min-w-[44px]">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold font-heading text-navy-950">
                    Early-Bird Rate Protection
                  </h4>
                  <p className="text-xs text-text-light-muted mt-0.5 leading-relaxed">
                    Lock in our lowest foundational rental pricing for your initial 3 months of riding without price hikes.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="tezz-card p-5 bg-white flex items-start gap-3.5">
                <div className="icon-tile !w-11 !h-11 !min-w-[44px]">
                  <Gift className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold font-heading text-navy-950">
                    Free Helmet &amp; Mount Kit
                  </h4>
                  <p className="text-xs text-text-light-muted mt-0.5 leading-relaxed">
                    Receive a brand new ISI-marked delivery helmet and heavy-duty vibration-free mobile holder at pickup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-200 to Deep Navy */}
      <SectionDivider type="sky200-to-navy" />

      {/* Section 2: Launch City Details (Deep Navy) */}
      <section className="bg-gradient-deep text-white section-pad text-center">
        <div className="container-custom max-w-2xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-blue-light/30 text-xs font-semibold text-blue-light">
            <Clock className="w-3.5 h-3.5 text-leaf" />
            <span>Rollout Status</span>
          </span>
          <h2 className="text-white">
            Opening soon in <span className="text-blue-light">{siteConfig.launchCity}</span>
          </h2>
          <p className="text-text-dark-muted text-base">
            Keep your phone notifications active. We will message your token number 48 hours prior to hub opening.
          </p>
        </div>
      </section>
    </div>
  );
};
