export interface VideoItem {
  src: string;
  title: string;
  duration?: string;
  poster?: string;
}

export const siteConfig = {
  name: "TezzEV",
  tagline: "Go Green Go Far",
  status: "Launching Soon",
  launchDate: "2026-12-15T00:00:00",
  launchCity: "Indore & Bhopal",
  supportPhone: "+91 98765 43210",
  supportEmail: "support@tezzev.com",
  whatsappNumber: "919876543210",
  whatsappLink: "https://wa.me/919876543210?text=Hi%20TezzEV%20Team%2C%20I%20am%20interested%20in%20scooter%20rental",
  address: "TezzEV Hub, Ring Road, Near Transport Nagar, Indore, MP 452001",
  
  socials: {
    instagram: "https://instagram.com/tezzev_official",
    facebook: "https://facebook.com/tezzev",
    twitter: "https://x.com/tezzev",
    youtube: "https://youtube.com/@tezzev",
    linkedin: "https://linkedin.com/company/tezzev",
  },

  deposit: {
    amount: "Rs [XXX]",
    refundableText: "100% Refundable Security Deposit",
    note: "Zero hidden charges. Returned within 48 hours of scooter return.",
  },

  pricingPlans: [
    {
      id: "daily",
      name: "Daily Rental",
      badge: "Flexible",
      price: "Rs [XXX]",
      period: "per day",
      description: "Best for short-term trials and part-time delivery shifts.",
      features: [
        "Zero petrol expense",
        "Free standard battery swap",
        "Routine maintenance included",
        "24/7 Roadside breakdown support",
        "Flexible daily renewal",
      ],
      popular: false,
    },
    {
      id: "weekly",
      name: "Weekly Pro",
      badge: "Most Popular",
      price: "Rs [XXX]",
      period: "per week",
      description: "Designed for full-time gig delivery riders maximizing daily savings.",
      features: [
        "Unlimited battery swaps at hubs",
        "Free complete maintenance & tyre care",
        "Fast priority hub service",
        "Instant breakdown scooter replacement",
        "Commercial helmet provided",
      ],
      popular: true,
    },
    {
      id: "monthly",
      name: "Monthly Super",
      badge: "Best Value",
      price: "Rs [XXX]",
      period: "per month",
      description: "Lowest daily rate for long-term daily commuters and delivery partners.",
      features: [
        "Lowest per-day rental cost",
        "Dedicated account support",
        "Free full service every 30 days",
        "Zero downtime vehicle swap guarantee",
        "Smart mobile charger & heavy carrier included",
      ],
      popular: false,
    },
  ],

  specs: [
    { label: "Riding Range", value: "[TBD] km", detail: "Per single full charge", icon: "BatteryCharging" },
    { label: "Top Speed", value: "[TBD] km/h", detail: "City optimized speed", icon: "Gauge" },
    { label: "Battery Swap", value: "< 2 Minutes", detail: "At any TezzEV Hub", icon: "RefreshCw" },
    { label: "Load Capacity", value: "[TBD] kg", detail: "Heavy carrier for delivery bags", icon: "Package" },
    { label: "Braking System", value: "Disc / Drum", detail: "Responsive emergency braking", icon: "ShieldCheck" },
    { label: "Colour Options", value: "Royal Blue", detail: "Premium durable metallic finish", icon: "Palette" },
  ],

  platforms: [
    "Zomato",
    "Swiggy",
    "Blinkit",
    "Zepto",
    "Rapido",
    "Uber",
    "Shadowfax",
    "Porter"
  ],

  videos: {
    heroBg: {
      src: "/videos/tezz-video-1.mp4",
      title: "TezzEV Ride Experience",
      duration: "0:15",
      poster: "/images/poster-1.jpg",
    },
    homeMain: {
      src: "/videos/tezz-video-1.mp4",
      title: "TezzEV Launching Soon",
      duration: "0:15",
      poster: "/images/poster-2.jpg",
    },
    homeClip1: {
      src: "/videos/tezz-video-2.mp4",
      title: "Smooth City Commute",
      duration: "0:18",
      poster: "/images/poster-1.jpg",
    },
    homeClip2: {
      src: "/videos/tezz-video-3.mp4",
      title: "Quick Battery Swap Demonstration",
      duration: "0:15",
      poster: "/images/poster-3.jpg",
    },
    homeClip3: {
      src: "/videos/tezz-video-4.mp4",
      title: "Delivery Rider Cargo Capacity",
      duration: "0:20",
      poster: "/images/concept-banner.jpg",
    },
    scooterTour: {
      src: "/videos/tezz-video-4.mp4",
      title: "Complete TezzEV Scooter 360 Tour",
      duration: "0:20",
      poster: "/images/poster-1.jpg",
    },
    headlight: {
      src: "/videos/tezz-video-1.mp4",
      title: "Bright Dual LED Headlights",
      duration: "0:15",
      poster: "/images/poster-2.jpg",
    },
    battery: {
      src: "/videos/tezz-video-2.mp4",
      title: "Smart Swappable Battery Pack",
      duration: "0:18",
      poster: "/images/poster-3.jpg",
    },
    display: {
      src: "/videos/tezz-video-3.mp4",
      title: "High-Visibility Digital Console",
      duration: "0:15",
      poster: "/images/concept-banner.jpg",
    },
    riding: {
      src: "/videos/tezz-video-4.mp4",
      title: "Real Road City Performance",
      duration: "0:20",
      poster: "/images/poster-1.jpg",
    },
    step1: {
      src: "/videos/tezz-video-1.mp4",
      title: "Step 1: 2-Minute Paperless Registration",
      duration: "0:15",
      poster: "/images/poster-3.jpg",
    },
    step2: {
      src: "/videos/tezz-video-2.mp4",
      title: "Step 2: Instant Document Verification",
      duration: "0:18",
      poster: "/images/poster-1.jpg",
    },
    step3: {
      src: "/videos/tezz-video-3.mp4",
      title: "Step 3: Hub Pickup & Scooter Handover",
      duration: "0:15",
      poster: "/images/concept-banner.jpg",
    },
    step4: {
      src: "/videos/tezz-video-4.mp4",
      title: "Step 4: Ride & Start Daily Earnings",
      duration: "0:20",
      poster: "/images/poster-2.jpg",
    },
    fullProcess: {
      src: "/videos/tezz-video-3.mp4",
      title: "Full How It Works Walkthrough",
      duration: "0:15",
      poster: "/images/poster-2.jpg",
    },
    documents: {
      src: "/videos/tezz-video-2.mp4",
      title: "How to Upload Valid Documents",
      duration: "0:18",
      poster: "/images/poster-3.jpg",
    },
    about: {
      src: "/videos/tezz-video-3.mp4",
      title: "Our Mission & Green Story",
      duration: "0:15",
      poster: "/images/poster-1.jpg",
    },
    pricing: {
      src: "/videos/tezz-video-3.mp4",
      title: "Transparent Pricing Explained",
      duration: "0:15",
      poster: "/images/concept-banner.jpg",
    },
    savings: {
      src: "/videos/tezz-video-4.mp4",
      title: "How Delivery Riders Save Petrol Money",
      duration: "0:20",
      poster: "/images/poster-2.jpg",
    },
    guessRent: {
      src: "/videos/tezz-video-4.mp4",
      title: "Daily Rent Guess Contest",
      duration: "0:20",
      poster: "/images/poster-2.jpg",
    },
    blog1: {
      src: "/videos/tezz-video-1.mp4",
      title: "Why Delivery Riders Are Switching to Electric",
      duration: "0:15",
      poster: "/images/poster-1.jpg",
    },
    blog2: {
      src: "/videos/tezz-video-2.mp4",
      title: "How Swappable Batteries Eliminate Charging Waiting",
      duration: "0:18",
      poster: "/images/poster-3.jpg",
    },
    blog3: {
      src: "/videos/tezz-video-3.mp4",
      title: "Daily Scooter Maintenance Checklist for Long Life",
      duration: "0:15",
      poster: "/images/concept-banner.jpg",
    },
    contact: {
      src: "/videos/tezz-video-2.mp4",
      title: "How to Visit Our Indore & Bhopal Hubs",
      duration: "0:18",
      poster: "/images/poster-1.jpg",
    },
    faqs: {
      src: "/videos/tezz-video-1.mp4",
      title: "Rider FAQs & Onboarding Guide",
      duration: "0:15",
      poster: "/images/poster-3.jpg",
    },
  }
};
