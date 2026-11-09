import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EligibilityModal from './components/EligibilityModal';
import ScholarshipModal from './components/ScholarshipModal';
import WhatsAppFloating from './components/WhatsAppFloating';

import HomePage from './pages/HomePage';
import MedicalHubPage from './pages/MedicalHubPage';
import WesternHubPage from './pages/WesternHubPage';
import ServicesPage from './pages/ServicesPage';
import ScholarshipsPage from './pages/ScholarshipsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [activeSubpage, setActiveSubpage] = useState(null);
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  const [isScholarshipOpen, setIsScholarshipOpen] = useState(false);

  // Sync hash routing so bookmarks and refresh work seamlessly
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) {
        setActivePage('home');
        setActiveSubpage(null);
        return;
      }

      if (hash.startsWith('medical-')) {
        setActivePage('medical');
        setActiveSubpage(hash.replace('medical-', ''));
      } else if (hash.startsWith('western-')) {
        setActivePage('western');
        setActiveSubpage(hash.replace('western-', ''));
      } else if (['home', 'medical', 'western', 'services', 'scholarships', 'about', 'contact'].includes(hash)) {
        setActivePage(hash);
        setActiveSubpage(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page, subpage = null) => {
    setActivePage(page);
    setActiveSubpage(subpage);
    if (subpage) {
      window.location.hash = `${page}-${subpage}`;
    } else {
      window.location.hash = page === 'home' ? '' : page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-red-500 selection:text-white">
      {/* Global Navigation Header */}
      <Navbar 
        activePage={activePage}
        setActivePage={handleNavigate}
        onOpenEligibility={() => setIsEligibilityOpen(true)}
      />

      {/* Main Dynamic View */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <HomePage 
            setActivePage={handleNavigate}
            onOpenEligibility={() => setIsEligibilityOpen(true)}
            onOpenScholarship={() => setIsScholarshipOpen(true)}
          />
        )}

        {activePage === 'medical' && (
          <MedicalHubPage 
            subpage={activeSubpage || 'bangladesh'}
            onOpenEligibility={() => setIsEligibilityOpen(true)}
            onOpenScholarship={() => setIsScholarshipOpen(true)}
          />
        )}

        {activePage === 'western' && (
          <WesternHubPage 
            subpage={activeSubpage || 'uk'}
            onOpenEligibility={() => setIsEligibilityOpen(true)}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage 
            onOpenEligibility={() => setIsEligibilityOpen(true)}
          />
        )}

        {activePage === 'scholarships' && (
          <ScholarshipsPage 
            onOpenScholarship={() => setIsScholarshipOpen(true)}
            onOpenEligibility={() => setIsEligibilityOpen(true)}
          />
        )}

        {activePage === 'about' && (
          <AboutPage 
            setActivePage={handleNavigate}
            onOpenEligibility={() => setIsEligibilityOpen(true)}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage 
            onOpenEligibility={() => setIsEligibilityOpen(true)}
          />
        )}
      </main>

      {/* Global Interactive Modals */}
      <EligibilityModal 
        isOpen={isEligibilityOpen}
        onClose={() => setIsEligibilityOpen(false)}
      />

      <ScholarshipModal 
        isOpen={isScholarshipOpen}
        onClose={() => setIsScholarshipOpen(false)}
      />

      {/* Floating Multi-Channel WhatsApp Concierge */}
      <WhatsAppFloating />

      {/* Global Corporate Footer */}
      <Footer 
        setActivePage={handleNavigate}
        onOpenEligibility={() => setIsEligibilityOpen(true)}
      />
    </div>
  );
}

