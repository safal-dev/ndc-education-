import React, { useState, useEffect } from 'react';
import {
  ChevronDown, Menu, X, ArrowRight
} from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onOpenEligibility }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [medicalDropdownOpen, setMedicalDropdownOpen] = useState(false);
  const [westernDropdownOpen, setWesternDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page, subpage = null) => {
    setActivePage(page, subpage);
    setMobileMenuOpen(false);
    setMedicalDropdownOpen(false);
    setWesternDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 w-full bg-white transition-all duration-200 ${
      isScrolled ? 'shadow-sm border-b border-slate-200' : 'border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand Identity - Clean Institutional Editorial */}
          <div 
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
          >
            <img 
              src="/ndc-education-logo.jpg" 
              alt="NDC Education Logo" 
              className="w-10 h-10 object-contain rounded-md border border-slate-200 p-0.5 bg-white shadow-xs"
            />
            <span className="font-extrabold text-base tracking-tight text-slate-900 leading-none">
              NDC <span className="text-red-700">EDUCATION</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">

            {/* About Us */}
            <button
              onClick={() => navigateTo('about')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-colors ${
                activePage === 'about'
                  ? 'text-red-700 bg-red-50 font-bold'
                  : 'text-slate-700 hover:text-red-700 hover:bg-slate-50'
              }`}
            >
              About Us
            </button>

            {/* Services */}
            <button
              onClick={() => navigateTo('services')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-colors ${
                activePage === 'services'
                  ? 'text-red-700 bg-red-50 font-bold'
                  : 'text-slate-700 hover:text-red-700 hover:bg-slate-50'
              }`}
            >
              Our Services
            </button>

            {/* Medical Abroad Hub Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setMedicalDropdownOpen(true)}
              onMouseLeave={() => setMedicalDropdownOpen(false)}
            >
              <button
                onClick={() => setMedicalDropdownOpen((open) => !open)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide inline-flex items-center gap-1 transition-colors ${
                  activePage === 'medical'
                    ? 'text-red-700 bg-red-50 font-bold'
                    : 'text-slate-700 hover:text-red-700 hover:bg-slate-50'
                }`}
              >
                <span>Medical Abroad</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {medicalDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-lg border border-slate-200 py-2 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <button 
                    onClick={() => navigateTo('medical', 'bangladesh')}
                    className="w-full text-left px-4 py-2.5 hover:bg-red-50/70 transition-colors"
                  >
                    <div className="font-bold text-xs text-slate-900">
                      MBBS in Bangladesh
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Dhaka University affiliates • High pass rates</p>
                  </button>
                  <button
                    onClick={() => navigateTo('medical', 'kazakhstan')}
                    className="w-full text-left px-4 py-2.5 hover:bg-red-50/70 transition-colors border-t border-slate-100"
                  >
                    <div className="font-bold text-xs text-slate-900">
                      MBBS in Kazakhstan
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">KazNMU Almaty • English Medium</p>
                  </button>
                  <button
                    onClick={() => navigateTo('medical', 'other')}
                    className="w-full text-left px-4 py-2.5 hover:bg-red-50/70 transition-colors border-t border-slate-100"
                  >
                    <div className="font-bold text-xs text-slate-900">Other Medical Hubs</div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Egypt (Cairo), Philippines & China</p>
                  </button>
                </div>
              )}
            </div>

            {/* Western Study Hub Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setWesternDropdownOpen(true)}
              onMouseLeave={() => setWesternDropdownOpen(false)}
            >
              <button
                onClick={() => setWesternDropdownOpen((open) => !open)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide inline-flex items-center gap-1 transition-colors ${
                  activePage === 'western'
                    ? 'text-red-700 bg-red-50 font-bold'
                    : 'text-slate-700 hover:text-red-700 hover:bg-slate-50'
                }`}
              >
                <span>Western Study</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {westernDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-lg border border-slate-200 py-2 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <button 
                    onClick={() => navigateTo('western', 'uk')}
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-50 transition-colors"
                  >
                    <div className="font-bold text-xs text-slate-900">Study in the UK</div>
                    <p className="text-[11px] text-slate-500 mt-0.5">2-Year Graduate Route • Russell Group</p>
                  </button>
                  <button
                    onClick={() => navigateTo('western', 'australia')}
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-50 transition-colors border-t border-slate-100"
                  >
                    <div className="font-bold text-xs text-slate-900">Study in Australia</div>
                    <p className="text-[11px] text-slate-500 mt-0.5">Subclass 500 • Post-study work visas</p>
                  </button>
                  <button
                    onClick={() => navigateTo('western', 'usa-canada')}
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-50 transition-colors border-t border-slate-100"
                  >
                    <div className="font-bold text-xs text-slate-900">USA & Canada</div>
                    <p className="text-[11px] text-slate-500 mt-0.5">3-Yr STEM OPT & Canadian PGWP</p>
                  </button>
                </div>
              )}
            </div>

            {/* Scholarships */}
            <button
              onClick={() => navigateTo('scholarships')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-colors ${
                activePage === 'scholarships'
                  ? 'text-red-700 bg-red-50 font-bold'
                  : 'text-slate-700 hover:text-red-700 hover:bg-slate-50'
              }`}
            >
              Scholarships
            </button>

            {/* Contact */}
            <button 
              onClick={() => navigateTo('contact')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-colors ${
                activePage === 'contact' 
                  ? 'text-red-700 bg-red-50 font-bold' 
                  : 'text-slate-700 hover:text-red-700 hover:bg-slate-50'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action Elements */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenEligibility}
              className="bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-lg shadow-xs hover:shadow transition-all flex items-center gap-1.5"
            >
              <span>Check Eligibility</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenEligibility}
              className="bg-red-700 text-white text-xs font-bold px-3 py-1.5 rounded-md"
            >
              Eligibility
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2">
            <div className="pt-0 space-y-1">
              <button
                onClick={() => navigateTo('about')}
                className="w-full text-left px-3 py-1.5 rounded-md font-bold text-xs uppercase tracking-wider text-slate-800 hover:bg-slate-50"
              >
                About Us
              </button>
              <button
                onClick={() => navigateTo('services')}
                className="w-full text-left px-3 py-1.5 rounded-md font-bold text-xs uppercase tracking-wider text-slate-800 hover:bg-slate-50"
              >
                Our Services
              </button>
            </div>

            <div className="border-t border-slate-100 pt-2">
              <span className="px-3 text-[10px] font-bold text-red-700 uppercase tracking-wider block">
                Medical Abroad
              </span>
              <button
                onClick={() => navigateTo('medical', 'bangladesh')}
                className="w-full text-left px-5 py-1.5 text-xs text-slate-700 hover:text-red-700"
              >
                MBBS in Bangladesh
              </button>
              <button
                onClick={() => navigateTo('medical', 'kazakhstan')}
                className="w-full text-left px-5 py-1.5 text-xs text-slate-700 hover:text-red-700"
              >
                MBBS in Kazakhstan
              </button>
              <button
                onClick={() => navigateTo('medical', 'other')}
                className="w-full text-left px-5 py-1.5 text-xs text-slate-700 hover:text-red-700"
              >
                Other Medical Hubs (Egypt / Philippines / China)
              </button>
            </div>

            <div className="border-t border-slate-100 pt-2">
              <span className="px-3 text-[10px] font-bold text-navy-700 uppercase tracking-wider block">
                Western Study
              </span>
              <button
                onClick={() => navigateTo('western', 'uk')}
                className="w-full text-left px-5 py-1.5 text-xs text-slate-700 hover:text-navy-700"
              >
                Study in the UK
              </button>
              <button
                onClick={() => navigateTo('western', 'australia')}
                className="w-full text-left px-5 py-1.5 text-xs text-slate-700 hover:text-navy-700"
              >
                Study in Australia
              </button>
              <button
                onClick={() => navigateTo('western', 'usa-canada')}
                className="w-full text-left px-5 py-1.5 text-xs text-slate-700 hover:text-navy-700"
              >
                Study in USA / Canada
              </button>
            </div>

            <div className="border-t border-slate-100 pt-2 space-y-1">
              <button
                onClick={() => navigateTo('scholarships')}
                className="w-full text-left px-3 py-1.5 rounded-md font-bold text-xs uppercase tracking-wider text-slate-800 hover:bg-slate-50"
              >
                Scholarships
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className="w-full text-left px-3 py-1.5 rounded-md font-bold text-xs uppercase tracking-wider text-slate-800 hover:bg-slate-50"
              >
                Contact
              </button>
            </div>

            <div className="pt-3">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenEligibility(); }}
                className="w-full bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded-lg text-center"
              >
                Check Admission Eligibility Now
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
