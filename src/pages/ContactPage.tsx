import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle2,
  Navigation,
  ArrowRight,
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionDivider } from '../components/ui/SectionDivider';
import { VideoCard } from '../components/ui/VideoCard';
import { siteConfig } from '../lib/config';
import { toast } from 'sonner';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Rider Rental Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error('Please enter your full name and phone number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message received! Our team will call you shortly.', {
        description: `Thank you ${formData.name}. We will get back to you within 2 working hours.`,
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        category: 'Rider Rental Inquiry',
        message: '',
      });
    }, 600);
  };

  return (
    <div className="w-full">
      <PageHeader
        breadcrumbs={[{ label: 'Contact Us' }]}
        title="Get in Touch with TezzEV"
        highlightWord="Touch"
        subtitle="Have questions about launch dates, hub locations, or fleet partnerships? Reach out directly."
      />

      {/* WAVE DIVIDER: Deep Navy to Sky-200 */}
      <SectionDivider type="navy-to-sky200" />

      {/* Section 1: Top Hub Video Tour & 3 Contact Cards & Form (Sky-200) */}
      <section className="bg-sky-200 text-text-light section-pad">
        <div className="container-custom space-y-12">
          {/* Top 2-Column Split: Text Left, Video Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-royal">
                Flagship Hub Walkthrough
              </span>
              <h2 className="text-navy-950">
                Visit our <span className="text-royal">hub</span> in person
              </h2>
              <p className="text-slate-700 text-base leading-relaxed max-w-xl">
                Take a visual tour of our battery swap bay, certified maintenance workshop, and rider lounge. Located centrally near Transport Nagar Ring Road in Indore and MP Nagar Commercial Zone in Bhopal.
              </p>
              <div className="pt-1 flex flex-wrap gap-2.5">
                <span className="px-3.5 py-1.5 rounded-xl bg-[#F4F8FE] border border-[#D6E4FB] text-xs font-bold text-navy-950">
                  📍 Indore &amp; Bhopal Metro Hubs
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-[#F4F8FE] border border-[#D6E4FB] text-xs font-bold text-navy-950">
                  ⚡ 2-Minute Battery Swap Bay
                </span>
              </div>
              <div className="pt-2">
                <a href="#contact-form" className="btn-primary !min-h-[44px]">
                  <span>Send Direct Message Below</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Video Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border border-slate-300">
                <VideoCard
                  src={siteConfig.videos.contact?.src || ''}
                  title="How to Reach & Visit TezzEV Hub"
                  poster="/images/poster-1.jpg"
                  aspect="vertical"
                />
              </div>
            </div>
          </div>

          {/* 3 Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Phone & WhatsApp */}
            <div className="tezz-card p-6 flex flex-col justify-between">
              <div>
                <div className="icon-tile mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold font-heading text-navy-950 mb-1">
                  Call &amp; WhatsApp
                </h4>
                <p className="text-xs text-text-light-muted mb-3">
                  Speak directly to our onboarding team.
                </p>
                <div className="space-y-1">
                  <a
                    href={`tel:${siteConfig.supportPhone}`}
                    className="text-base font-bold text-royal hover:underline block"
                  >
                    {siteConfig.supportPhone}
                  </a>
                  <span className="text-xs text-leaf font-semibold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 8:00 AM – 9:00 PM Daily
                  </span>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200">
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-royal hover:underline"
                >
                  <MessageCircle className="w-4 h-4 text-leaf" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Card 2: Email Support */}
            <div className="tezz-card p-6 flex flex-col justify-between">
              <div>
                <div className="icon-tile mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold font-heading text-navy-950 mb-1">
                  Email Support
                </h4>
                <p className="text-xs text-text-light-muted mb-3">
                  For corporate, partnership, or fleet inquiries.
                </p>
                <div className="space-y-1">
                  <a
                    href={`mailto:${siteConfig.supportEmail}`}
                    className="text-base font-bold text-royal hover:underline block"
                  >
                    {siteConfig.supportEmail}
                  </a>
                  <span className="text-xs text-text-light-muted">
                    Response within 24 hours
                  </span>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200">
                <span className="text-xs font-semibold text-text-light-muted">
                  Official correspondence
                </span>
              </div>
            </div>

            {/* Card 3: Central Hub */}
            <div className="tezz-card p-6 flex flex-col justify-between">
              <div>
                <div className="icon-tile mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold font-heading text-navy-950 mb-1">
                  Main Launch Hub
                </h4>
                <p className="text-xs text-text-light-muted mb-2">
                  Indore Central Flagship Facility
                </p>
                <p className="text-xs text-navy-950 font-medium leading-relaxed">
                  {siteConfig.address}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-leaf font-bold">● Opening Soon</span>
                <span className="text-royal font-semibold">Indore Hub</span>
              </div>
            </div>
          </div>

          {/* Form + Map Placeholder Grid */}
          <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
            {/* Contact Form (7 cols) */}
            <div className="lg:col-span-7 tezz-card p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-950 mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-text-light-muted mb-6">
                Fill this quick form and our support team will contact you directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-navy-950 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Sunil Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-royal focus:outline-none text-navy-950 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy-950 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-royal focus:outline-none text-navy-950 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-navy-950 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sunil@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-royal focus:outline-none text-navy-950 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy-950 mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-royal focus:outline-none text-navy-950 bg-white"
                    >
                      <option value="Rider Rental Inquiry">Rider Rental Inquiry</option>
                      <option value="Personal Commute">Personal Commuter Rental</option>
                      <option value="Fleet / Bulk Rental">Fleet / Bulk Booking</option>
                      <option value="Hub Location Query">Hub Location Query</option>
                      <option value="General Support">General Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy-950 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your delivery requirements or query..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-royal focus:outline-none text-navy-950 bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full sm:w-auto"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>

            {/* Map Placeholder (5 cols) */}
            <div className="lg:col-span-5 tezz-card p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-navy-950 font-heading">Hub Network Map</h4>
                  <p className="text-xs text-text-light-muted">Indore &amp; Bhopal Hub Locations</p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-leaf/20 text-leaf font-bold">
                  Active Setup
                </span>
              </div>

              {/* Stylized Map Canvas */}
              <div className="relative aspect-square sm:aspect-video lg:aspect-[4/3] rounded-xl overflow-hidden bg-navy-950 border border-navy-800 p-4 flex flex-col justify-between">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#2D6BFF_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Road Grid graphics */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-3/4 h-3/4 border-2 border-dashed border-blue/20 rounded-full animate-spin [animation-duration:60s]" />
                </div>

                {/* Map Hub Marker 1: Indore */}
                <div className="relative z-10 p-3 rounded-xl bg-navy-900/90 border border-blue-light/30 backdrop-blur-sm max-w-[200px]">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-leaf"></span>
                    <span>Indore Central Hub</span>
                  </div>
                  <p className="text-[10px] text-text-dark-muted">
                    Ring Road Near Transport Nagar
                  </p>
                </div>

                {/* Map Hub Marker 2: Bhopal */}
                <div className="relative z-10 self-end p-3 rounded-xl bg-navy-900/90 border border-blue-light/30 backdrop-blur-sm max-w-[200px]">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-leaf"></span>
                    <span>Bhopal Metro Hub</span>
                  </div>
                  <p className="text-[10px] text-text-dark-muted">
                    MP Nagar Commercial Zone
                  </p>
                </div>

                {/* Bottom Directions Pill */}
                <div className="relative z-10 flex items-center justify-between text-xs text-white pt-2 border-t border-navy-800/80">
                  <span className="flex items-center gap-1 text-[11px] text-blue-light">
                    <Navigation className="w-3.5 h-3.5" /> GPS Coordinates Calibrated
                  </span>
                  <span className="text-[11px] text-leaf font-bold">2 Hubs Ready</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-sky-50 border border-sky-100 text-xs text-navy-950 space-y-1">
                <span className="font-bold flex items-center gap-1 text-royal">
                  <CheckCircle2 className="w-4 h-4 text-leaf" /> On-Site Facilities
                </span>
                <p className="text-text-light-muted">
                  Dedicated battery swap bay, certified technician workshop, customer lounge, and helmet sanitation station.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-200 to Deep Navy */}
      <SectionDivider type="sky200-to-navy" />

      {/* Section 2: Direct Helpline Banner (Deep Navy) */}
      <section className="bg-gradient-deep text-white section-pad text-center">
        <div className="container-custom max-w-2xl mx-auto space-y-6">
          <h2 className="text-white">
            Need urgent assistance on <span className="text-blue-light">onboarding</span>?
          </h2>
          <p className="text-text-dark-muted text-base">
            Call our rider onboarding helpline directly for immediate guidance.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4 flex-wrap">
            <a href={`tel:${siteConfig.supportPhone}`} className="btn-primary">
              <Phone className="w-4 h-4" />
              <span>Call {siteConfig.supportPhone}</span>
            </a>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary-dark"
            >
              <MessageCircle className="w-4 h-4 text-leaf" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
