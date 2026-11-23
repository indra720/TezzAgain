import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Gift,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Clock,
  User,
  Phone,
  Check,
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionDivider } from '../components/ui/SectionDivider';
import { siteConfig } from '../lib/config';
import { WhatsAppIcon } from '../components/ui/BrandIcons';
import { toast } from 'sonner';

export const WaitlistPage: React.FC = () => {
  const navigate = useNavigate();
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
      {/* ======================================================== */}
      {/* MOBILE NATIVE APP RIDER PRE-REGISTRATION (< 768px, UX)   */}
      {/* ======================================================== */}
      <div className="block md:hidden bg-[#F8FAFC] text-navy-950 pb-24 pt-20">
        {/* Top Navigation Row */}
        <div className="px-4 flex items-center justify-between mb-3">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-navy-950 active:scale-90 transition-transform"
            aria-label="Back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Priority Batch 1</span>
          </div>
        </div>

        {/* Hero Illustration & Typography (Screen 4 from Reference) */}
        <div className="px-4 space-y-1.5 mb-4">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
            TEZZEV RIDER PRE-REGISTRATION
          </span>
          <h1 className="text-3xl font-black font-heading text-navy-950 tracking-tight leading-tight">
            Let's Create Your <span className="text-royal">Account</span>
          </h1>
          <p className="text-xs text-slate-500 font-medium">
            Get started and hit the road with TezzEV. Zero advance payment.
          </p>
        </div>

        {/* Hero Scooter Banner */}
        <div className="mx-4 mb-4 rounded-3xl bg-gradient-to-r from-[#EAF2FF] via-[#E2EDFF] to-white border border-blue-100/70 p-4 flex items-center justify-between overflow-hidden shadow-xs">
          <div className="space-y-1 max-w-[60%]">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-royal block">
              Exclusive Benefit
            </span>
            <h4 className="text-sm font-black text-navy-950 font-heading leading-tight">
              Free Helmet &amp; Mobile Mount Kit
            </h4>
            <p className="text-[11px] text-slate-500 leading-tight">
              Given on pickup to first 500 waitlist riders.
            </p>
          </div>
          <div className="w-[40%] flex justify-end">
            <img
              src="/images/scooter-clean-cutout.png"
              alt="TezzEV Scooter"
              className="max-h-24 object-contain filter drop-shadow-md"
            />
          </div>
        </div>

        {/* Floating White Form Card */}
        <div className="mx-4 bg-white rounded-3xl p-5 shadow-[0_12px_36px_rgba(11,27,77,0.08)] border border-slate-100">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-navy-950">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="app-input w-full text-navy-950 placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-navy-950">
                  Mobile Number (for SMS token) *
                </label>
                <div className="relative">
                  <Phone className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="app-input w-full text-navy-950 placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* City & Category */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-navy-950">
                    City *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full h-12 rounded-2xl border border-slate-200 bg-white px-3 text-xs font-bold text-navy-950 shadow-xs focus:border-royal focus:outline-none"
                  >
                    <option value="Indore">Indore</option>
                    <option value="Bhopal">Bhopal</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-navy-950">
                    Renting For *
                  </label>
                  <select
                    value={formData.userType}
                    onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                    className="w-full h-12 rounded-2xl border border-slate-200 bg-white px-3 text-xs font-bold text-navy-950 shadow-xs focus:border-royal focus:outline-none"
                  >
                    <option value="Delivery Rider">Delivery Rider</option>
                    <option value="Personal Commute">Personal Commute</option>
                  </select>
                </div>
              </div>

              {/* Preferred Plan */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-navy-950">
                  Preferred Plan
                </label>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {[
                    { key: 'Daily Rental', label: 'Daily (₹199)' },
                    { key: 'Weekly Pro', label: 'Weekly Pro' },
                    { key: 'Monthly Super', label: 'Monthly' },
                  ].map((p) => (
                    <button
                      type="button"
                      key={p.key}
                      onClick={() => setFormData({ ...formData, preferredPlan: p.key })}
                      className={`py-2 px-1 rounded-xl text-xs font-bold border transition-all ${
                        formData.preferredPlan === p.key
                          ? 'bg-[#06122E] text-white border-[#06122E] shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Priority Bar Indicator (Matching Password Strength Bar in Reference) */}
              <div className="pt-1 space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-500">Priority Spot Status</span>
                  <span className="text-emerald-600 font-extrabold">Instant Reservation</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  <div className="h-1.5 rounded-full bg-royal" />
                  <div className="h-1.5 rounded-full bg-royal" />
                  <div className="h-1.5 rounded-full bg-royal" />
                  <div className="h-1.5 rounded-full bg-royal" />
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  required
                  defaultChecked
                  id="mobile-waitlist-terms"
                  className="mt-0.5 rounded border-slate-300 text-royal focus:ring-royal"
                />
                <label htmlFor="mobile-waitlist-terms" className="text-xs text-slate-500 leading-tight">
                  By continuing you agree to TezzEV's{' '}
                  <Link to="/terms" className="text-royal font-bold underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-royal font-bold underline">
                    Privacy Policy
                  </Link>.
                </label>
              </div>

              {/* Submit Button (Tall 56px with Arrow Chip) */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="app-btn-primary w-full group relative cursor-pointer"
              >
                <span>{isSubmitting ? 'Reserving...' : 'Reserve Priority Scooter'}</span>
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center ml-2 group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </button>

              {/* OR Divider & WhatsApp Support */}
              <div className="relative py-2 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <span className="relative bg-white px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  OR
                </span>
              </div>

              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-full h-12 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center gap-2 border border-emerald-200 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                <span>Chat with Hub Manager on WhatsApp</span>
              </a>
            </form>
          ) : (
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <Check className="w-8 h-8 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-xl font-black font-heading text-navy-950">
                  Priority Spot Confirmed!
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Your token ID is <span className="font-extrabold text-royal">{reservationId}</span>
                </p>
              </div>
              <div className="p-3 bg-sky-50 rounded-2xl border border-sky-100 text-xs text-navy-950 space-y-1 text-left">
                <p className="font-bold">Next Steps:</p>
                <p className="text-slate-600 text-[11px]">
                  1. Our team will verify your phone number via SMS.
                  <br />
                  2. You will be invited to our Indore / Bhopal mega hub for early test runs.
                </p>
              </div>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
                target="_blank"
                rel="noreferrer"
                className="app-btn-primary w-full"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Share Token on WhatsApp</span>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* ======================================================== */}
      {/* DESKTOP VIEW (>= 768px, Intact DriveX Layout)            */}
      {/* ======================================================== */}
      <div className="hidden md:block">
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

                    <p className="text-[11px] text-text-light-muted text-center mt-2 flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-leaf inline" />
                      <span>No payment details required. No obligations.</span>
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
                      className="btn-primary w-full justify-center !bg-[#25D366] !text-white hover:!bg-[#22bf5b] font-bold"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white" />
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
    </div>
  );
};
