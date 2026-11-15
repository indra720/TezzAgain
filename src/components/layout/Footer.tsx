import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { TezzLogo } from '../ui/TezzLogo';
import { siteConfig } from '../../lib/config';
import { WhatsAppIcon, PlayStoreIcon } from '../ui/BrandIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-navy-950 text-text-dark-muted border-t border-navy-900 pb-10 sm:pb-12 pt-14">
      <div className="container-custom">
        {/* Top Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-navy-900">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <TezzLogo variant="dark" size="lg" />
            <p className="text-sm text-text-dark-muted leading-relaxed max-w-sm mt-3">
              Reliable electric scooter rental for delivery riders and daily city commuters.
              Petrol ka zamana khatam. Ab sheher chalega TEZZ!
            </p>

            <div className="pt-2 space-y-2 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-leaf shrink-0" />
                <a href={`tel:${siteConfig.supportPhone}`} className="hover:text-white">
                  {siteConfig.supportPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-leaf font-medium"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-light shrink-0" />
                <a href={`mailto:${siteConfig.supportEmail}`} className="hover:text-white">
                  {siteConfig.supportEmail}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-navy-900 hover:bg-royal text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-navy-900 hover:bg-royal text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-navy-900 hover:bg-royal text-white flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-navy-900 hover:bg-royal text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-navy-900 hover:bg-royal text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white text-base font-heading font-semibold">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/our-scooter" className="hover:text-white transition-colors">
                  Our Scooter
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Rental Pricing
                </Link>
              </li>
              <li>
                <Link to="/ads" className="hover:text-white transition-colors">
                  Campaigns &amp; Ads
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Rider Updates &amp; Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: For Riders */}
          <div className="space-y-3">
            <h4 className="text-white text-base font-heading font-semibold">For Riders</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/waitlist" className="hover:text-white transition-colors">
                  Join Launch Waitlist
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-white transition-colors">
                  Rider Registration
                </Link>
              </li>
              <li>
                <Link to="/savings" className="hover:text-white transition-colors">
                  Savings Calculator
                </Link>
              </li>
              <li>
                <Link to="/guess-rent" className="hover:text-white transition-colors">
                  Daily Rent Guess Karo
                </Link>
              </li>
              <li>
                <Link to="/rider-dashboard" className="hover:text-white transition-colors">
                  Rider Dashboard Preview
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Mobile App Badges & Legal */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-heading font-semibold">TezzEV App</h4>
            <p className="text-xs text-text-dark-muted">
              Book rides, track battery swaps, and unlock your vehicle from your smartphone.
            </p>

            <div className="space-y-2.5">
              {/* Google Play Real Badge */}
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-navy-900 border border-navy-800 hover:border-royal transition-all hover:bg-navy-850 group"
                title="Download TezzEV on Google Play Store"
              >
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <PlayStoreIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-text-dark-muted">
                    Get It On
                  </div>
                  <div className="text-xs font-semibold text-white">Google Play Store</div>
                </div>
              </a>

              {/* App Store Disabled Badge */}
              <div
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-navy-900 border border-navy-800 opacity-75 select-none cursor-not-allowed"
                title="App releasing at launch"
              >
                <div className="w-6 h-6 flex items-center justify-center text-blue-light font-bold">
                  
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-text-dark-muted">
                    Coming Soon on
                  </div>
                  <div className="text-xs font-semibold text-white">App Store</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-leaf font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                100% Green Mobility Guarantee
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link to="/refund-policy" className="hover:text-white transition-colors">
              Refund Policy
            </Link>
            <span>•</span>
            <Link to="/cancellation-policy" className="hover:text-white transition-colors">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
