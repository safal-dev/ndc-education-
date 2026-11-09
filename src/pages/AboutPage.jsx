import React from 'react';
import { 
  ShieldCheck, Award, Building2, MapPin, Phone, 
  Mail, CheckCircle2, UserCheck, Users, Globe, ExternalLink, ArrowRight
} from 'lucide-react';
import { regionalOffices } from '../data/offices';

export default function AboutPage({ onOpenEligibility, setActivePage }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* =========================================================================
          SECTION 1: LEADERSHIP STATEMENT & CORPORATE VISION (CLEAN LIGHT DESIGN)
          ========================================================================= */}
      <section className="bg-white text-slate-900 pt-12 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-bold uppercase tracking-widest text-red-700">
                Leadership & Corporate Integrity
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
                "We Measure Our Success in Licensed Doctors and Fulfilled Careers, Not Just Visas."
              </h1>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  When I founded <strong>NDC Education Consultancy Pvt. Ltd.</strong> in Putalisadak over 15 years ago, the abroad education market was clouded by ambiguity. Students were sold unrealistic promises, sent to unaccredited colleges, or abandoned the moment they touched foreign soil.
                </p>
                <p>
                  We built NDC on an uncompromising bedrock of regulatory legitimacy. Every medical college we represent in Bangladesh or Kazakhstan must have verified bedside teaching hospitals, BMDC/WHO listings, and curriculum alignment with the Nepal Medical Council (NMCLE) and National Medical Commission (NExT).
                </p>
                <p>
                  As parents, you invest your life savings into your child's higher education. Our team of 80+ academic advisors across 20 regional centers honors that trust by providing transparent fee contracts, zero hidden costs, and continuous post-arrival student welfare.
                </p>
              </div>

              {/* Founder Signature Block */}
              <div className="pt-4 border-t border-slate-200 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-red-50 border-2 border-red-700 overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <span className="text-lg font-extrabold text-red-700">AK</span>
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">Mr. Amrit Khanal</h3>
                  <p className="text-xs text-red-700 font-bold">Founder & Managing Director</p>
                  <p className="text-[11px] text-slate-500">Co-Director: Mr. Keshav Raj Tiwari</p>
                </div>
              </div>

            </div>

            {/* Corporate Profile Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <img 
                    src="/ndc-education-logo.jpg" 
                    alt="NDC Logo" 
                    className="w-12 h-12 rounded-lg bg-white p-1 border border-slate-200 object-contain shadow-xs"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">NDC Education Consultancy</h3>
                    <p className="text-xs text-slate-500">Authorized Educational Intermediary</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs border-y border-slate-200 py-4">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Headquarters:</span>
                    <span className="font-semibold text-slate-900 text-right">Putalisadak, Kathmandu, Nepal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Government Authorization:</span>
                    <span className="font-bold text-emerald-700">Ministry of Education (MOEST #1284/071)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Represented Institutions:</span>
                    <span className="font-semibold text-slate-900">500+ Partner Universities</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Recruitment Network:</span>
                    <span className="font-semibold text-slate-900">20 Regional Offices (Nepal & India)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Primary Specialization:</span>
                    <span className="font-bold text-red-700">Regional Medical (MBBS/MD) & Western STEM</span>
                  </div>
                </div>

                <button
                  onClick={onOpenEligibility}
                  className="w-full bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-colors text-center shadow-xs"
                >
                  Schedule Consultation with Leadership
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: LEGAL REGISTRATIONS & ACCREDITATIONS CATALOG
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-red-700 uppercase tracking-widest">
              Regulatory Compliance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Registered, Licensed & Strictly Audited
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Every document processed by NDC meets statutory regulations set by the Ministry of Education, Science & Technology and global diplomatic embassies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-red-700 uppercase tracking-wider">
                  Statutory Reg. #1284/071
                </span>
                <ShieldCheck className="w-5 h-5 text-red-700" />
              </div>
              <h3 className="font-bold text-base text-slate-900">
                Ministry of Education, Science & Tech (MOEST)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fully authorized government educational agency permitted to recruit and guide students into international higher education programs.
              </p>
              <div className="text-[11px] font-semibold text-slate-500 pt-2 border-t border-slate-200">
                Verification: Office of the Ministry, Singha Durbar, Kathmandu
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-navy-700 uppercase tracking-wider">
                  Industry Association
                </span>
                <Award className="w-5 h-5 text-navy-700" />
              </div>
              <h3 className="font-bold text-base text-slate-900">
                ECAN (Educational Consultancies Association of Nepal)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Active certified member bound by ethical counseling standards, transparent fee schedules, and student dispute protection bylaws.
              </p>
              <div className="text-[11px] font-semibold text-slate-500 pt-2 border-t border-slate-200">
                Adherence: Zero Misrepresentation Policy
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gold-700 uppercase tracking-wider">
                  Student Housing Partner
                </span>
                <ShieldCheck className="w-5 h-5 text-gold-700" />
              </div>
              <h3 className="font-bold text-base text-slate-900">
                Amber Student Housing Global Partner
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Authorized tie-up providing verified student accommodation channels across the UK, Australia, USA, and Canada.
              </p>
              <div className="text-[11px] font-semibold text-slate-500 pt-2 border-t border-slate-200">
                Coverage: Over 100,000+ Verified Rooms
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THE 20-OFFICE INFRASTRUCTURE NETWORK
          ========================================================================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-red-700 uppercase tracking-widest">
              Where to Find Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Extensive 20-Office Footprint Across Nepal and India
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Unlike single-room agencies, NDC maintains full-time regional recruitment and documentation centers in 14 major cities in Nepal and 6 strategic hubs in India.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {regionalOffices.map((office) => (
              <div 
                key={office.id}
                className={`p-4 rounded-xl border transition-all ${
                  office.isHeadquarters 
                    ? 'bg-red-50/60 border-red-300 ring-1 ring-red-400 shadow-xs col-span-2 sm:col-span-1' 
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-900">{office.city}</span>
                  {office.isHeadquarters && (
                    <span className="text-xs font-bold text-red-700 uppercase">
                      HQ
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 mb-2 truncate">{office.region}</p>
                <div className="text-xs text-slate-700 font-semibold">{office.phone}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => setActivePage('contact')}
              className="bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-xs transition-colors inline-flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-white" />
              <span>View Full Addresses & Counselor Directory</span>
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: DIRECT CORPORATE / INSTITUTIONAL CONTACT CALL (CLEAN LIGHT DESIGN)
          ========================================================================= */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-red-700">
            Institutional Relations & University Partners
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Partner With NDC Education Consultancy
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Are you an international university representative or hospital dean seeking high-caliber, rigorously vetted students from Nepal and India? Our corporate B2B relations desk handles institutional MoUs, recruitment expos, and faculty exchange programs.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:admission@ndceducation.com?subject=Institutional%20Partnership%20Inquiry%20-%20NDC%20Education"
              className="bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-xs transition-colors inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Director Amrit Khanal (admission@ndceducation.com)</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
