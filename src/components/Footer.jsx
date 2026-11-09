import React from 'react';
import { 
  Phone, Mail, MapPin, ShieldCheck, CheckCircle2, 
  ExternalLink, ArrowUpRight, MessageCircle, HeartHandshake
} from 'lucide-react';
import { regionalOffices } from '../data/offices';

export default function Footer({ setActivePage, onOpenEligibility }) {
  const scrollToTop = (page, subpage = null) => {
    setActivePage(page, subpage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 text-slate-700 pt-16 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Row - Clean, light cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 border-b border-slate-200">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
            <div className="p-2 bg-red-50 text-red-700 rounded-lg flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wide">MOEST Authorized</h4>
              <p className="text-xs text-slate-500 mt-0.5">Officially registered with the Ministry of Education, Science & Tech, Nepal.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
            <div className="p-2 bg-red-50 text-red-700 rounded-lg flex-shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wide">Licensing Alignment</h4>
              <p className="text-xs text-slate-500 mt-0.5">Strict compliance with NMC (Nepal), BMDC, and NMC India (NExT) regulations.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
            <div className="p-2 bg-red-50 text-red-700 rounded-lg flex-shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wide">500+ Partner Institutions</h4>
              <p className="text-xs text-slate-500 mt-0.5">Direct institutional representation across South Asia, Central Asia & Western nations.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
            <div className="p-2 bg-red-50 text-red-700 rounded-lg flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wide">20 Regional Offices</h4>
              <p className="text-xs text-slate-500 mt-0.5">Ground counseling presence spanning major education hubs in Nepal & India.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12">
          
          {/* Corporate Profile Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/ndc-education-logo.jpg" 
                alt="NDC Education Logo" 
                className="w-10 h-10 rounded-lg bg-white p-0.5 object-contain border border-slate-200"
              />
              <div>
                <h3 className="text-slate-950 font-extrabold text-base tracking-tight">
                  NDC EDUCATION <span className="text-red-700">CONSULTANCY</span>
                </h3>
                <p className="text-[10px] text-slate-500 font-bold tracking-wider uppercase">PVT. LTD. • KATHMANDU, NEPAL</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-md">
              Founded and led by <strong>Mr. Amrit Khanal</strong> (Managing Director) and <strong>Mr. Keshav Raj Tiwari</strong> (Co-Director), NDC Education is an authorized B2B2C educational intermediary bridging domestic students with accredited global seats. Specializing in regional medical education (MBBS in Bangladesh, Kazakhstan, Egypt) and top Western higher education pathways.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-700">
                <MapPin className="w-4 h-4 text-red-700 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Headquarters:</strong> Putalisadak (Beside Laxmi Plaza / Infront of Traffic Police Bit, Near Padmodaya Mode), Ward 28, Kathmandu, Nepal
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4 text-red-700 flex-shrink-0" />
                <span>+977-985-1093227 / +977-01-5340005</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="w-4 h-4 text-red-700 flex-shrink-0" />
                <span>admission@ndceducation.com / info@ndceducation.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links: Medical Abroad */}
          <div>
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-4 border-l-2 border-red-700 pl-2">
              Medical Abroad Hub
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => scrollToTop('medical', 'bangladesh')}
                  className="hover:text-red-700 transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-red-700" />
                  <span>MBBS in Bangladesh (Primary)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToTop('medical', 'kazakhstan')}
                  className="hover:text-red-700 transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-red-700" />
                  <span>MBBS in Kazakhstan (KazNMU)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToTop('medical', 'other')}
                  className="hover:text-red-700 transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-red-700" />
                  <span>MBBS in Egypt (Cairo University)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToTop('medical', 'other')}
                  className="hover:text-red-700 transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-red-700" />
                  <span>MD in Philippines (Perpetual Help)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToTop('medical', 'bangladesh')}
                  className="hover:text-red-700 transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-red-700" />
                  <span>NMC / BMDC Licensing Checklist</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToTop('medical', 'bangladesh')}
                  className="hover:text-red-700 transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-red-700" />
                  <span>Full Tuition & Fee Breakdown</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links: Western Study Hub */}
          <div>
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-4 border-l-2 border-slate-700 pl-2">
              Western Study Hub
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => scrollToTop('western', 'uk')}
                  className="hover:text-slate-900 transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  <span>Study in the United Kingdom</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToTop('western', 'australia')}
                  className="hover:text-slate-900 transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  <span>Study in Australia (Subclass 500)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToTop('western', 'usa-canada')}
                  className="hover:text-slate-900 transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  <span>Study in USA (STEM OPT)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToTop('western', 'usa-canada')}
                  className="hover:text-slate-900 transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  <span>Study in Canada (PGWP Pathway)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToTop('services')}
                  className="hover:text-slate-900 transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  <span>Financial File Compilation Guidance</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToTop('services')}
                  className="hover:text-slate-900 transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  <span>Amber Student Housing Partnership</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Institutional Trust & Quick Action */}
          <div>
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-4 border-l-2 border-gold-600 pl-2">
              Resources & Support
            </h4>
            <ul className="space-y-2 text-xs mb-6">
              <li>
                <button
                  onClick={() => scrollToTop('scholarships')}
                  className="hover:text-red-700 transition-colors flex items-center gap-1.5 text-gold-700 font-semibold"
                >
                  <ArrowUpRight className="w-3 h-3" />
                  <span>COMPEX Scholarship Resource</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToTop('scholarships')}
                  className="hover:text-red-700 transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  <span>MECEE-BL Examination Cycles</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToTop('services')}
                  className="hover:text-red-700 transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  <span>MOEST NOC & Apostille Filing</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToTop('about')}
                  className="hover:text-red-700 transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  <span>Director's Message & Accreditations</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToTop('contact')}
                  className="hover:text-red-700 transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  <span>Locate Nearest Regional Office</span>
                </button>
              </li>
            </ul>

            <button
              onClick={onOpenEligibility}
              className="w-full bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded-lg transition-colors text-center shadow-sm"
            >
              Check Admission Eligibility
            </button>
          </div>

        </div>

        {/* 20 Regional Offices Geo-Footer Bar */}
        <div className="py-6 border-t border-b border-slate-200 text-xs text-slate-600">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-3.5 h-3.5 text-red-700" />
            <span className="font-bold text-slate-800">Our 20 Regional Offices Network:</span>
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-600">
            {regionalOffices.map((office, idx) => (
              <span key={office.id} className="inline-flex items-center gap-1">
                <button 
                  onClick={() => scrollToTop('contact')}
                  className="hover:text-red-700 underline decoration-slate-300 hover:decoration-red-700 transition-colors"
                >
                  {office.city}
                </button>
                {idx < regionalOffices.length - 1 && <span className="text-slate-300">•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} NDC Education Consultancy Pvt. Ltd. Officially registered with Ministry of Education, Science and Technology (MOEST), Government of Nepal (Regd. #1284/071).
          </p>
          <div className="flex items-center space-x-6 text-slate-500">
            <span className="hover:text-slate-800 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-800 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-800 cursor-pointer">Regulatory Compliance</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
