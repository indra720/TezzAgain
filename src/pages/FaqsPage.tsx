import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, HelpCircle, ArrowRight, Phone, Sparkles } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionDivider } from '../components/ui/SectionDivider';
import { VideoCard } from '../components/ui/VideoCard';
import { siteConfig } from '../lib/config';

interface FAQ {
  id: number;
  category: 'rental' | 'battery' | 'docs' | 'maintenance';
  q: string;
  a: string;
}

export const FaqsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIds, setOpenIds] = useState<number[]>([1]);

  const faqs: FAQ[] = [
    {
      id: 1,
      category: 'rental',
      q: 'Who can rent a TezzEV scooter?',
      a: 'Any delivery partner (Zomato, Swiggy, Zepto, Blinkit) or daily commuter aged 18+ with a valid 2-wheeler driving licence and Aadhaar card can rent.',
    },
    {
      id: 2,
      category: 'rental',
      q: 'What is the minimum rental period?',
      a: 'We offer flexible Daily, Weekly, and Monthly plans. You can rent for as short as 1 day or keep it long-term with easy renewals.',
    },
    {
      id: 3,
      category: 'battery',
      q: 'How does the battery swap work?',
      a: 'When your battery drops below 20%, ride into any TezzEV hub. Our hub staff replaces it with a 100% charged battery in under 2 minutes.',
    },
    {
      id: 4,
      category: 'battery',
      q: 'Can I charge the scooter battery at home?',
      a: 'Yes, each scooter comes with a standard home/office charging adapter that plugs into any regular 15A wall socket.',
    },
    {
      id: 5,
      category: 'docs',
      q: 'What documents are required for registration?',
      a: 'You only need 4 things: Valid Driving Licence, Aadhaar Card, PAN Card, and your bank details for security deposit refund.',
    },
    {
      id: 6,
      category: 'docs',
      q: 'How long does document approval take?',
      a: 'Digital approval is completed within 15 minutes. Once approved, you receive an SMS confirmation to pick up your scooter.',
    },
    {
      id: 7,
      category: 'maintenance',
      q: 'What happens if the scooter punctures or breaks down?',
      a: 'Call our 24/7 Breakdown Helpline. Our mobile support team reaches your location to repair or swap your vehicle immediately at zero extra cost.',
    },
    {
      id: 8,
      category: 'maintenance',
      q: 'Do I have to pay for regular servicing or brake pads?',
      a: 'No. All periodic servicing, brake pad replacements, and tyre maintenance are 100% free at all TezzEV Hubs.',
    },
    {
      id: 9,
      category: 'rental',
      q: 'Is the security deposit refundable?',
      a: 'Yes, your security deposit is 100% refundable. When you return the vehicle in good condition, the amount is sent to your bank in 48 hours.',
    },
    {
      id: 10,
      category: 'battery',
      q: 'Are battery swaps free or paid?',
      a: 'Standard swaps at all TezzEV hubs are included with our Weekly Pro and Monthly Super plans with zero extra fees.',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'rental', label: 'Rental & Pricing' },
    { id: 'battery', label: 'Battery & Swapping' },
    { id: 'docs', label: 'Documents & Signup' },
    { id: 'maintenance', label: 'Maintenance & SOS' },
  ];

  const toggleAccordion = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery =
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="w-full">
      <PageHeader
        breadcrumbs={[{ label: 'FAQs' }]}
        title="Frequently Asked Questions"
        highlightWord="Questions"
        subtitle="Quick, clear answers to common questions about rentals, battery swapping, documents, and support."
      />

      {/* WAVE DIVIDER: Deep Navy to Sky-200 */}
      <SectionDivider type="navy-to-sky200" />

      {/* Section 1: Search & Filter Chips & Accordion (Sky-200) */}
      <section className="bg-sky-200 text-text-light section-pad">
        <div className="container-custom space-y-12">
          {/* Top 2-Column Split: Text Left, Video Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-leaf" /> Video FAQ Guide
              </span>
              <h2 className="text-navy-950">
                Watch Quick <span className="text-royal">Help Video</span>
              </h2>
              <p className="text-slate-700 text-base leading-relaxed max-w-xl">
                Watch our quick 2-minute visual walkthrough explaining how to register online, swap batteries at city hubs in 120 seconds, and claim your refundable security deposit.
              </p>
              <div className="pt-1 flex flex-wrap gap-2.5">
                <span className="px-3.5 py-1.5 rounded-xl bg-[#F4F8FE] border border-[#D6E4FB] text-xs font-bold text-navy-950">
                  ⚡ 2-Minute Hub Battery Swap
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-[#F4F8FE] border border-[#D6E4FB] text-xs font-bold text-navy-950">
                  📄 Simple 4 Document Approval
                </span>
              </div>
              <div className="pt-2">
                <a href="#faq-search" className="btn-primary !min-h-[44px]">
                  <span>Browse All FAQs Below</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Video Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border border-slate-300">
                <VideoCard
                  src={siteConfig.videos.faqs?.src || ''}
                  title="Rider FAQs & Onboarding Video Guide"
                  poster="/images/poster-3.jpg"
                  aspect="vertical"
                />
              </div>
            </div>
          </div>

          <div id="faq-search" className="max-w-4xl mx-auto pt-4">
            {/* Search Box */}
            <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g. battery swap, deposit, documents, repair)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-300 text-navy-950 placeholder:text-slate-400 shadow-sm text-sm sm:text-base focus:border-royal focus:outline-none"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-royal text-white shadow-md'
                    : 'bg-white text-navy-900 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion of 10 Short Q&As */}
          <div className="space-y-3.5">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openIds.includes(faq.id);
                return (
                  <div
                    key={faq.id}
                    className="tezz-card bg-white overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 select-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-sky-100 text-royal text-xs font-bold flex items-center justify-center shrink-0">
                          {faq.id}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold font-heading text-navy-950">
                          {faq.q}
                        </h4>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-royal shrink-0 transition-transform duration-200 ${
                          isOpen ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-text-light-muted leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 tezz-card p-8">
                <HelpCircle className="w-10 h-10 text-royal mx-auto mb-2" />
                <h4 className="font-bold text-navy-950">No matching questions found</h4>
                <p className="text-xs text-text-light-muted mt-1">
                  Try searching for another term or contact our support team.
                </p>
              </div>
            )}
          </div>
        </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-200 to Deep Navy */}
      <SectionDivider type="sky200-to-navy" />

      {/* Section 2: Still Have Questions (Deep Navy) */}
      <section className="bg-gradient-deep text-white section-pad text-center">
        <div className="container-custom max-w-2xl mx-auto space-y-6">
          <h2 className="text-white">
            Still have a <span className="text-blue-light">question</span>?
          </h2>
          <p className="text-text-dark-muted text-base">
            Our hub support team is available every day to assist you.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4 flex-wrap">
            <Link to="/contact" className="btn-primary">
              <span>Contact Support</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${siteConfig.supportPhone}`}
              className="btn-secondary-dark flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-leaf" />
              <span>{siteConfig.supportPhone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
