import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, ExternalLink } from 'lucide-react';
import { siteConfig } from '../../lib/config';
import { Link } from 'react-router-dom';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  link?: { label: string; url: string; isExternal?: boolean };
}

export const TezzChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Namaste! Main hoon Tezz, aapka digital assistant. Kaise madad karu aaj?',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickReplies = [
    { label: 'Work as a Rider', key: 'rider' },
    { label: 'Personal Rental', key: 'personal' },
    { label: 'Price', key: 'price' },
    { label: 'Join Waitlist', key: 'waitlist' },
    { label: 'Support', key: 'support' },
  ];

  const handleSelectQuickReply = (label: string, key: string) => {
    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: label };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      let botResponse: Message;

      switch (key) {
        case 'rider':
          botResponse = {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: 'Zomato, Swiggy, Zepto ya kisi bhi platform par delivery karein bina petrol kharch ke! Unlimited battery swaps aur free maintenance.',
            link: { label: 'Register as Rider', url: '/register' },
          };
          break;
        case 'personal':
          botResponse = {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: 'Daily office commute ya personal shopping ke liye TezzEV best hai. Zero noise, high range aur easy home charging.',
            link: { label: 'Explore Our Scooter', url: '/our-scooter' },
          };
          break;
        case 'price':
          botResponse = {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: 'Affordable daily (from ₹199*), weekly (from ₹1,299*) aur monthly (from ₹4,999*) plans launch ho rahe hain. Commercial gig delivery riders ke liye lowest rental rate!',
            link: { label: 'View Pricing Plans', url: '/pricing' },
          };
          break;
        case 'waitlist':
          botResponse = {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: 'Waitlist join karein aur pehle batch ki delivery scooters par priority payein!',
            link: { label: 'Join Launch Waitlist', url: '/waitlist' },
          };
          break;
        case 'support':
          botResponse = {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: `Hamari team se baat karne ke liye Call ya WhatsApp karein: ${siteConfig.supportPhone}`,
            link: { label: 'Chat on WhatsApp', url: siteConfig.whatsappLink, isExternal: true },
          };
          break;
        default:
          botResponse = {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: 'Shukriya! Kuch aur janna chahte hain?',
          };
      }

      setMessages((prev) => [...prev, botResponse]);
    }, 450);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const query = input.trim();
    setInput('');
    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      const lower = query.toLowerCase();
      let replyText =
        'TezzEV jald hi launch ho raha hai! Aap waitlist join karke priority access le sakte hain.';
      let replyLink: { label: string; url: string; isExternal?: boolean } | undefined = {
        label: 'Join Waitlist',
        url: '/waitlist',
      };

      if (lower.includes('price') || lower.includes('rent') || lower.includes('cost') || lower.includes('kitna')) {
        replyText =
          'Plans sirf ₹199/day* se shuru hote hain. Commercial riders ke liye weekly (₹1,299*) aur monthly (₹4,999*) high-mileage options available hain.';
        replyLink = { label: 'View Pricing & Savings', url: '/pricing' };
      } else if (lower.includes('battery') || lower.includes('swap') || lower.includes('range')) {
        replyText =
          'TezzEV hubs par 2-minute battery swap available rahega. Ek charge par lambi city range milti hai!';
        replyLink = { label: 'Check Scooter Specs', url: '/our-scooter' };
      } else if (lower.includes('phone') || lower.includes('contact') || lower.includes('call')) {
        replyText = `Direct call karein: ${siteConfig.supportPhone} ya WhatsApp par connect karein.`;
        replyLink = { label: 'WhatsApp Us', url: siteConfig.whatsappLink, isExternal: true };
      }

      const botReply: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: replyText,
        link: replyLink,
      };

      setMessages((prev) => [...prev, botReply]);
    }, 400);
  };

  return (
    <>
      {/* Mobile Backdrop Overlay when chat is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm sm:hidden z-[90]"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Chat Window Modal */}
      {isOpen && (
        <div
          className="fixed inset-x-3 top-4 bottom-4 sm:inset-auto sm:right-6 sm:bottom-20 sm:top-auto sm:w-[380px] sm:h-[520px] z-[95] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-navy-800 bg-white animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="TezzEV Assistant Chat"
        >
          {/* Header */}
          <div className="bg-navy-900 text-white p-3.5 sm:p-4 flex items-center justify-between shrink-0 border-b border-navy-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-royal flex items-center justify-center text-white shadow-sm shrink-0">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-sm text-white">Tezz Assistant</h4>
                <div className="flex items-center gap-1.5 text-xs text-leaf">
                  <span className="w-2 h-2 rounded-full bg-leaf"></span>
                  <span>Online • Launch Support</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-text-dark-muted hover:text-white hover:bg-navy-800 transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area - Fully Scrollable */}
          <div className="flex-1 min-h-0 p-4 overflow-y-auto space-y-3 bg-slate-50 text-xs sm:text-sm">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl ${
                    m.sender === 'user'
                      ? 'bg-royal text-white rounded-tr-none'
                      : 'bg-white text-navy-950 border border-slate-200 rounded-tl-none shadow-sm'
                  }`}
                >
                  <p className="leading-relaxed">{m.text}</p>
                  {m.link && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100">
                      {m.link.isExternal ? (
                        <a
                          href={m.link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-royal hover:underline"
                        >
                          <span>{m.link.label}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <Link
                          to={m.link.url}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-royal hover:underline"
                        >
                          <span>{m.link.label}</span>
                          <Sparkles className="w-3 h-3 text-leaf" />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Reply Pills */}
          <div className="px-3 py-2 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
            {quickReplies.map((qr) => (
              <button
                key={qr.key}
                onClick={() => handleSelectQuickReply(qr.label, qr.key)}
                className="whitespace-nowrap px-3 py-1 text-xs font-medium rounded-full bg-sky-100 text-royal hover:bg-sky-200 transition-colors border border-sky-200 shrink-0"
              >
                {qr.label}
              </button>
            ))}
          </div>

          {/* Typing Form */}
          <form
            onSubmit={handleSendCustom}
            className="p-2.5 sm:p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about TezzEV..."
              className="flex-1 text-xs sm:text-sm px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-royal text-navy-950 placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-xl bg-royal hover:bg-blue text-white flex items-center justify-center shrink-0 transition-colors shadow-sm"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Launcher Button */}
      <div className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-40 flex items-center gap-2">
        {!isOpen && (
          <div className="hidden sm:flex items-center px-3 py-1.5 rounded-full bg-navy-900 border border-navy-800 text-white text-xs font-medium shadow-md">
            <span className="w-2 h-2 rounded-full bg-leaf mr-1.5"></span>
            Hi, I'm Tezz
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-full bg-royal hover:bg-blue text-white shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 ${
            isOpen ? 'hidden sm:flex' : 'flex'
          }`}
          aria-label="Toggle TezzEV Chatbot"
        >
          {isOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />}
        </button>
      </div>
    </>
  );
};
