import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { VideoProvider } from './components/ui/VideoContext';
import { Layout } from './components/layout/Layout';

// Page Imports
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { OurScooterPage } from './pages/OurScooterPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { PricingPage } from './pages/PricingPage';
import { SavingsPage } from './pages/SavingsPage';
import { FaqsPage } from './pages/FaqsPage';
import { ContactPage } from './pages/ContactPage';
import { WaitlistPage } from './pages/WaitlistPage';
import { RegisterPage } from './pages/RegisterPage';
import { RiderDashboardPage } from './pages/RiderDashboardPage';
import { GuessRentPage } from './pages/GuessRentPage';
import { BlogPage } from './pages/BlogPage';
import { LegalPage } from './pages/LegalPage';

export const App: React.FC = () => {
  return (
    <VideoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Core Pages */}
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="our-scooter" element={<OurScooterPage />} />
            <Route path="how-it-works" element={<HowItWorksPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="savings" element={<SavingsPage />} />
            <Route path="faqs" element={<FaqsPage />} />
            <Route path="contact" element={<ContactPage />} />

            {/* Rider & Interactive Pages */}
            <Route path="waitlist" element={<WaitlistPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="rider-dashboard" element={<RiderDashboardPage />} />
            <Route path="guess-rent" element={<GuessRentPage />} />
            <Route path="blog" element={<BlogPage />} />

            {/* Legal Policies with Sticky Table of Contents */}
            <Route path="privacy" element={<LegalPage type="privacy" />} />
            <Route path="terms" element={<LegalPage type="terms" />} />
            <Route path="refund-policy" element={<LegalPage type="refund" />} />
            <Route path="cancellation-policy" element={<LegalPage type="cancellation" />} />

            {/* Fallback 404 -> Home */}
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </VideoProvider>
  );
};

export default App;
