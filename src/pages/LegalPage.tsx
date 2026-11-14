import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionDivider } from '../components/ui/SectionDivider';
import { siteConfig } from '../lib/config';

interface LegalSection {
  id: string;
  title: string;
  content: string[];
}

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'refund' | 'cancellation';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const configs = {
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'How TezzEV protects, processes, and respects your personal and identity data.',
      breadcrumbs: [{ label: 'Privacy Policy' }],
      sections: [
        {
          id: 'info-collection',
          title: '1. Information We Collect',
          content: [
            'We collect identity information strictly necessary to provide electric scooter rental services, including your full legal name, contact telephone number, government-issued Driving Licence, and Aadhaar/PAN details for verification.',
            'Telemetry and vehicle GPS coordinates are collected during active rentals solely for breakdown roadside assistance, hub route navigation, and anti-theft asset security.',
          ],
        },
        {
          id: 'data-usage',
          title: '2. How We Use Your Data',
          content: [
            'Your documents are used to verify commercial eligibility and issue third-party rider personal accident insurance.',
            'We will never sell, rent, or trade your personal contact details to third-party marketing brokers.',
          ],
        },
        {
          id: 'security',
          title: '3. Data Security & Storage',
          content: [
            'All digital records are encrypted in transit and at rest using modern banking-standard cryptographic protocols.',
            'Access to KYC documents is strictly restricted to authorized onboarding verification officers.',
          ],
        },
        {
          id: 'contact-officer',
          title: '4. Grievance Officer',
          content: [
            `If you have questions regarding your data privacy, contact our Grievance Officer at ${siteConfig.supportEmail} or write to ${siteConfig.address}.`,
          ],
        },
      ],
    },
    terms: {
      title: 'Terms of Service',
      subtitle: 'Guidelines, rider responsibilities, and rental terms for using TezzEV electric vehicles.',
      breadcrumbs: [{ label: 'Terms of Service' }],
      sections: [
        {
          id: 'eligibility',
          title: '1. Rider Eligibility',
          content: [
            'The renter must be at least 18 years of age and hold a valid, active Indian two-wheeler Driving Licence.',
            'The scooter may only be operated by the registered rider verified during hub onboarding.',
          ],
        },
        {
          id: 'usage-rules',
          title: '2. Permitted Commercial & Personal Use',
          content: [
            'TezzEV scooters may be used for personal commuting, food delivery, grocery logistics, courier transport, and bike-taxi operations.',
            'Illegal modifications, speed limiter tampering, or sub-leasing the vehicle to third parties is strictly prohibited.',
          ],
        },
        {
          id: 'maintenance-sos',
          title: '3. Maintenance & Breakdown Support',
          content: [
            'All regular scheduled servicing and brake replacements are covered at no additional cost at TezzEV Hubs.',
            'Riders must report mechanical snags or punctures promptly through the helpline or Rider Dashboard.',
          ],
        },
        {
          id: 'liability',
          title: '4. Traffic Compliance & Fines',
          content: [
            'Riders are strictly responsible for adhering to traffic signals, wearing helmets, and paying any fines incurred due to traffic rule violations.',
          ],
        },
      ],
    },
    refund: {
      title: 'Refund Policy',
      subtitle: 'Clear, transparent rules regarding security deposit refunds and rental fee settlements.',
      breadcrumbs: [{ label: 'Refund Policy' }],
      sections: [
        {
          id: 'deposit-refund',
          title: '1. Security Deposit Refund',
          content: [
            `A security deposit of ${siteConfig.deposit.amount} is collected prior to initial vehicle handover.`,
            'Upon returning the electric scooter, battery pack, and keys at an authorized TezzEV hub, the inspection checklist is verified immediately.',
            'The 100% refundable deposit is transferred to your registered bank account via NEFT/UPI within 48 business hours.',
          ],
        },
        {
          id: 'deductions',
          title: '2. Circumstances for Deductions',
          content: [
            'Deductions from the security deposit occur only if there is intentional physical vandalism, lost charger, or unpaid pending rental tenure.',
            'Normal wear-and-tear (e.g. tyre tread wear, brake pad usage, minor surface scuffs) is never deducted from your deposit.',
          ],
        },
        {
          id: 'disputes',
          title: '3. Dispute Resolution',
          content: [
            `In case of any discrepancy in refund calculations, riders can raise a ticket with our hub manager or call ${siteConfig.supportPhone}.`,
          ],
        },
      ],
    },
    cancellation: {
      title: 'Cancellation Policy',
      subtitle: 'Flexible cancellation and rental tenure termination terms for delivery partners.',
      breadcrumbs: [{ label: 'Cancellation Policy' }],
      sections: [
        {
          id: 'waitlist-cancellation',
          title: '1. Launch Waitlist Cancellation',
          content: [
            'Joining the launch waitlist is completely free and requires zero advance payment. You may cancel your reservation token anytime with zero cancellation penalty.',
          ],
        },
        {
          id: 'active-rental',
          title: '2. Active Rental Plan Cancellation',
          content: [
            'Daily rentals can be concluded at the end of any 24-hour cycle by returning the vehicle to the hub.',
            'Weekly Pro and Monthly Super plans can be concluded early by providing a 24-hour advance intimation to your hub manager.',
          ],
        },
        {
          id: 'handover-procedure',
          title: '3. Vehicle Handover Protocol',
          content: [
            'Bring the vehicle, original keys, and charger to the nearest TezzEV hub during operating hours (8:00 AM – 9:00 PM).',
            'Our technician will sign off on the return receipt, and your checkout confirmation SMS will be triggered immediately.',
          ],
        },
      ],
    },
  };

  const current = configs[type];

  return (
    <div className="w-full">
      <PageHeader
        breadcrumbs={current.breadcrumbs}
        title={current.title}
        highlightWord={current.title.split(' ')[0]}
        subtitle={current.subtitle}
      />

      {/* WAVE DIVIDER: Deep Navy to Sky-200 */}
      <SectionDivider type="navy-to-sky200" />

      {/* Main Content with Sticky TOC (Sky-200) */}
      <section className="bg-sky-200 text-text-light section-pad">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Sticky Table of Contents (4 cols) */}
            <div className="lg:col-span-4 sticky top-24 tezz-card p-5 bg-white border border-slate-200">
              <h4 className="font-bold text-navy-950 font-heading mb-2.5 pb-2 border-b border-slate-100 text-sm">
                Table of Contents
              </h4>
              <nav className="space-y-1.5">
                {current.sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block text-xs text-text-light-muted hover:text-royal transition-colors py-1"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-text-light-muted">
                Last updated: November 2026
              </div>
            </div>

            {/* Document Content (8 cols) */}
            <div className="lg:col-span-8 space-y-6 tezz-card p-5 sm:p-8 bg-white border border-slate-200 shadow-md">
              {current.sections.map((sec) => (
                <div key={sec.id} id={sec.id} className="scroll-mt-28 space-y-2">
                  <h3 className="text-lg font-bold font-heading text-navy-950 pb-1.5 border-b border-slate-100">
                    {sec.title}
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-text-light-muted leading-relaxed">
                    {sec.content.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-200 to Deep Navy */}
      <SectionDivider type="sky200-to-navy" />

      {/* Bottom Section (Deep Navy) */}
      <section className="bg-gradient-deep text-white section-pad text-center">
        <div className="container-custom max-w-xl mx-auto space-y-3">
          <h3 className="text-lg font-bold font-heading text-white">
            Have Questions About Policies?
          </h3>
          <p className="text-xs text-text-dark-muted">
            Our support helpline is available 7 days a week from 8:00 AM to 9:00 PM.
          </p>
          <div className="pt-1">
            <a
              href={`tel:${siteConfig.supportPhone}`}
              className="btn-secondary-dark !min-h-[40px] !text-xs sm:!text-sm"
            >
              Call {siteConfig.supportPhone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
