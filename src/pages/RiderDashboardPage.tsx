import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  User,
  Wallet,
  Zap,
  BatteryCharging,
  AlertTriangle,
  Flame,
  Wrench,
  Send,
  CheckCircle2,
  Phone,
  ShieldAlert,
  X,
  Clock,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionDivider } from '../components/ui/SectionDivider';
import { siteConfig } from '../lib/config';
import { toast } from 'sonner';

export const RiderDashboardPage: React.FC = () => {
  const [showSosDialog, setShowSosDialog] = useState(false);
  const [sosReason, setSosReason] = useState('Tyre Puncture');
  const [suggestion, setSuggestion] = useState('');

  const handleTriggerSos = () => {
    setShowSosDialog(false);
    toast.error('🚨 Breakdown SOS Activated!', {
      description: `Mobile support van dispatched for ${sosReason}. Our helpline (+91 98765 43210) is contacting you right now.`,
      duration: 8000,
    });
  };

  const handleSuggestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestion.trim()) return;
    toast.success('Thank you for your suggestion!', {
      description: 'Our fleet management team reviews rider feedback every week.',
    });
    setSuggestion('');
  };

  return (
    <div className="w-full">
      <PageHeader
        breadcrumbs={[{ label: 'Rider Dashboard' }]}
        title="Rider Command Dashboard"
        highlightWord="Dashboard"
        subtitle="Manage your electric scooter, track battery swap history, monitor wallet balance, and trigger emergency SOS."
      />

      {/* WAVE DIVIDER: Deep Navy to Sky-200 */}
      <SectionDivider type="navy-to-sky200" />

      {/* Main Dashboard Preview Section (Sky-200) */}
      <section className="bg-sky-200 text-text-light section-pad">
        <div className="container-custom">
          {/* Preview Mode Pill */}
          <div className="mb-6 flex items-center justify-between bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-brand animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold text-navy-950 font-heading">
                Interactive Dashboard Preview
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-sky-100 text-royal font-semibold">
                Demo Profile
              </span>
            </div>
            <span className="text-xs text-text-light-muted">
              Live for verified riders on launch
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left 8 Cols */}
            <div className="lg:col-span-8 space-y-6">
              {/* Profile & Vehicle Overview Card */}
              <div className="tezz-card p-6 bg-white border border-slate-200 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-brand text-white flex items-center justify-center font-bold text-xl font-heading shadow-md">
                      RV
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold font-heading text-navy-950">
                          Ramesh Verma
                        </h3>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-leaf/20 text-leaf font-bold">
                          Active Rider
                        </span>
                      </div>
                      <p className="text-xs text-text-light-muted mt-0.5">
                        Rider ID: <span className="font-mono font-bold text-navy-950">TEZZ-8821</span> • Hub: {siteConfig.launchCity.split(' ')[0]} Central
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowSosDialog(true)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 animate-pulse"
                    >
                      <AlertTriangle className="w-4 h-4" />
                      <span>Raise Breakdown SOS</span>
                    </button>
                  </div>
                </div>

                {/* Assigned Vehicle Snapshot */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs text-text-light-muted mb-1 flex items-center justify-between">
                      <span>Assigned Vehicle</span>
                      <Zap className="w-4 h-4 text-royal" />
                    </div>
                    <div className="text-base font-bold font-heading text-navy-950">
                      TezzEV Pro Commercial
                    </div>
                    <span className="text-xs font-mono text-text-light-muted">
                      Plate: MP-09-EV-[TBD]
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs text-text-light-muted mb-1 flex items-center justify-between">
                      <span>Battery Charge</span>
                      <BatteryCharging className="w-4 h-4 text-leaf" />
                    </div>
                    <div className="text-2xl font-black font-heading text-navy-950">
                      88% <span className="text-xs font-normal text-leaf font-sans font-bold">Healthy</span>
                    </div>
                    <span className="text-xs text-text-light-muted">
                      Estimated range: ~75 km
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs text-text-light-muted mb-1 flex items-center justify-between">
                      <span>Next Free Service</span>
                      <Wrench className="w-4 h-4 text-blue" />
                    </div>
                    <div className="text-2xl font-black font-heading text-navy-950">
                      18 Days
                    </div>
                    <span className="text-xs text-text-light-muted">
                      Routine hub inspection
                    </span>
                  </div>
                </div>
              </div>

              {/* Wallet & Rental Status Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Wallet Card */}
                <div className="tezz-card p-6 bg-white border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="icon-tile !w-10 !h-10 !min-w-[40px]">
                        <Wallet className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-navy-950 font-heading">Rental Wallet</h4>
                    </div>
                    <span className="text-xs font-semibold text-royal">Auto-Renew ON</span>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-baseline justify-between border-b border-slate-100 pb-2">
                      <span className="text-xs text-text-light-muted">Rental Credits:</span>
                      <span className="text-xl font-black text-navy-950 font-heading">
                        Rs [XXX]
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between border-b border-slate-100 pb-2">
                      <span className="text-xs text-text-light-muted">Security Deposit:</span>
                      <span className="text-xs font-bold text-leaf">
                        {siteConfig.deposit.amount} (Safe Held)
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-text-light-muted">Current Plan:</span>
                      <span className="text-xs font-semibold text-navy-950">
                        Weekly Pro (Ends in 5 days)
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => toast.info('Rental wallet reload will unlock at hub launch.')}
                    className="btn-secondary-light w-full justify-center !min-h-[40px] text-xs font-bold"
                  >
                    Add Credits (Demo)
                  </button>
                </div>

                {/* Green Streak Card */}
                <div className="tezz-card p-6 bg-white border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="icon-tile !w-10 !h-10 !min-w-[40px] !bg-leaf">
                        <Flame className="w-5 h-5 text-navy-950" />
                      </div>
                      <h4 className="font-bold text-navy-950 font-heading">Rider Streak</h4>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-leaf/20 text-leaf font-bold">
                      14-Day Streak
                    </span>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-baseline justify-between border-b border-slate-100 pb-2">
                      <span className="text-xs text-text-light-muted">Total KM Ridden:</span>
                      <span className="text-lg font-bold text-navy-950 font-heading">
                        [TBD] km
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between border-b border-slate-100 pb-2">
                      <span className="text-xs text-text-light-muted">Petrol Saved:</span>
                      <span className="text-xs font-bold text-leaf font-mono">
                        ~₹4,200 saved
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-text-light-muted">Carbon Prevented:</span>
                      <span className="text-xs font-semibold text-navy-950">
                        [TBD] kg CO2
                      </span>
                    </div>
                  </div>

                  <div className="text-[11px] text-text-light-muted italic text-center">
                    Keep your daily streak going to unlock bonus rental perks.
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Quick Actions & Suggestion Box */}
            <div className="lg:col-span-4 space-y-6">
              {/* Battery Swapping History */}
              <div className="tezz-card p-6 bg-white border border-slate-200">
                <h4 className="font-bold text-navy-950 font-heading mb-3 flex items-center justify-between">
                  <span>Recent Hub Swaps</span>
                  <Clock className="w-4 h-4 text-royal" />
                </h4>
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between font-bold text-navy-950">
                      <span>Indore Central Hub</span>
                      <span className="text-leaf">Free Swap</span>
                    </div>
                    <div className="text-text-light-muted mt-0.5 flex justify-between">
                      <span>Today, 08:30 AM</span>
                      <span>100% Charged</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between font-bold text-navy-950">
                      <span>Bhawarkua Hub</span>
                      <span className="text-leaf">Free Swap</span>
                    </div>
                    <div className="text-text-light-muted mt-0.5 flex justify-between">
                      <span>Yesterday, 06:15 PM</span>
                      <span>100% Charged</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Suggestion Box */}
              <div className="tezz-card p-6 bg-white border border-slate-200">
                <h4 className="font-bold text-navy-950 font-heading mb-1">
                  Rider Suggestion Box
                </h4>
                <p className="text-xs text-text-light-muted mb-4">
                  Want a new battery swap hub in your delivery area? Tell us!
                </p>

                <form onSubmit={handleSuggestionSubmit} className="space-y-3">
                  <textarea
                    rows={3}
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    placeholder="e.g. Please add a swap station near Vijay Nagar..."
                    className="w-full p-3 rounded-xl border border-slate-300 text-xs text-navy-950 focus:border-royal focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center !min-h-[40px] text-xs font-bold"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Suggestion</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation SOS Modal Dialog */}
      {showSosDialog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowSosDialog(false)}
        >
          <div
            className="w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl border-2 border-red-500"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-red-600 font-bold font-heading">
                <ShieldAlert className="w-6 h-6" />
                <span>Confirm Breakdown SOS</span>
              </div>
              <button
                onClick={() => setShowSosDialog(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-navy-950"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-4">
              <p className="text-xs sm:text-sm text-text-light leading-relaxed">
                Are you sure you want to trigger emergency SOS? A mobile breakdown van will be dispatched to your GPS location immediately.
              </p>

              <div>
                <label className="block text-xs font-semibold text-navy-950 mb-1.5">
                  Select Issue Type
                </label>
                <select
                  value={sosReason}
                  onChange={(e) => setSosReason(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-navy-950 bg-white"
                >
                  <option value="Tyre Puncture">Tyre Puncture / Air Loss</option>
                  <option value="Battery Drained">Sudden Battery Drain</option>
                  <option value="Brake / Cable Issue">Brake / Accelerator Issue</option>
                  <option value="Minor Collision">Minor Road Collision</option>
                  <option value="Other Breakdown">Other Breakdown</option>
                </select>
              </div>

              <div className="p-3 rounded-xl bg-red-50 text-[11px] text-red-800 flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-600 shrink-0" />
                <span>Our emergency response operator will call you in under 60 seconds.</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowSosDialog(false)}
                className="btn-secondary-light !min-h-[40px] text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleTriggerSos}
                className="btn-primary !min-h-[40px] !bg-red-600 hover:!bg-red-700 text-xs font-bold"
              >
                Confirm &amp; Dispatch Van
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WAVE DIVIDER: Sky-200 to Deep Navy */}
      <SectionDivider type="sky200-to-navy" />

      {/* Section 2: Not a Registered Rider Yet? (Deep Navy) */}
      <section className="bg-gradient-deep text-white section-pad text-center">
        <div className="container-custom max-w-2xl mx-auto space-y-6">
          <h2 className="text-white">
            Want your own <span className="text-blue-light">TezzEV Scooter</span>?
          </h2>
          <p className="text-text-dark-muted text-base">
            Complete your paperless registration today to be verified before city launch.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4 flex-wrap">
            <Link to="/register" className="btn-primary">
              <span>Register as Rider</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/waitlist" className="btn-secondary-dark">
              <span>Join Waitlist</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
