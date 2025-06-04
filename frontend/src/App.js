import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';
import 'animate.css';
import HomePage from './pages/HomePage';
// AboutPage now integrated into HomePage
// ServicesPage removed as requested
import ContactPage from './pages/ContactPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import MembersPage from './pages/MembersPage';
import LatestNewsPage from './pages/LatestNewsPage';
import ArchivePage from './pages/ArchivePage';
import ForumulBrutarilorPage from './pages/ForumulBrutarilorPage';
import IbaGermaniaPage from './pages/IbaGermaniaPage';
import SpartachiadaPage from './pages/SpartachiadaPage';
import FotbalPage from './pages/FotbalPage';
import BasketballPage from './pages/BasketballPage';
import OdaFoodTechnologyPage from './pages/OdaFoodTechnologyPage';
import FormPage from './pages/FormPage';
import EventsPage from './pages/EventsPage';
import LabsPage from './pages/LabsPage';
import FundingPage from './pages/FundingPage';
import LegislationPage from './pages/LegislationPage';
import PartnersPage from './pages/PartnersPage'; // Added Partners page import

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reduce loading time for better user experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <LanguageProvider>
        <LoadingScreen />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <Router>
        <div className="app-container">
          <ScrollToTop />
          <Header />
          <div className="main-content">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                {/* Redirect to homepage with about section parameter */}
                <Route path="/despre-noi" element={<Navigate to="/?section=despre-noi" replace />} />
                {/* ServicesPage route removed as requested */}
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/noutati" element={<NewsPage />} />
                <Route path="/noutati/:id" element={<NewsDetailPage />} />
                <Route path="/membri" element={<MembersPage />} />
                <Route path="/ultimele-stiri" element={<LatestNewsPage />} />
                <Route path="/arhiva" element={<ArchivePage />} />
                <Route path="/arhiva/forumul-brutarilor" element={<ForumulBrutarilorPage />} />
                <Route path="/arhiva/iba-germania" element={<IbaGermaniaPage />} />
                <Route path="/arhiva/spartachiada" element={<SpartachiadaPage />} />
                <Route path="/arhiva/fotbal" element={<FotbalPage />} />
                <Route path="/arhiva/baschet" element={<BasketballPage />} />
                <Route path="/arhiva/oda-food-technology-2025" element={<OdaFoodTechnologyPage />} />
                <Route path="/formular-inscriere" element={<FormPage />} />
                <Route path="/evenimente" element={<EventsPage />} />
                <Route path="/laboratoare" element={<LabsPage />} />
                <Route path="/finantari-si-granturi" element={<FundingPage />} />
                <Route path="/legislatie" element={<LegislationPage />} />
                <Route path="/parteneri" element={<PartnersPage />} /> {/* Added Partners page route */}
              </Routes>
            </AnimatePresence>
          </div>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

// Loading Screen Component with translation support
const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="w-20 h-20 rounded-full border-4 border-gray-200 border-t-primary-500 animate-spin mx-auto mb-6"></div>
        <h2 className="text-xl font-semibold text-gray-700">Se încarcă...</h2>
      </div>
    </div>
  );
};

export default App;
