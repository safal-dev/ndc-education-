import React, { useState } from 'react';
import {
  Globe, Briefcase, GraduationCap, CheckCircle2, ArrowRight,
  Clock, ShieldCheck, FileText, DollarSign, Calendar, Compass,
  Sparkles, CheckSquare, Layers, Award, Building, Phone,
  Code2, Cog, TrendingUp, HeartPulse
} from 'lucide-react';
import { westernDestinations } from '../data/colleges';

export default function WesternHubPage({ subpage = 'uk', onOpenEligibility }) {
  const [activeCountry, setActiveCountry] = useState(
    subpage === 'australia' ? 'Australia' : subpage === 'usa-canada' ? 'USA & Canada' : 'United Kingdom'
  );
  const [selectedStream, setSelectedStream] = useState('it');

  const destination = westernDestinations.find(d => d.country === activeCountry) || westernDestinations[0];

  const streams = [
    {
      id: 'it',
      name: 'IT, AI & Computer Science',
      Icon: Code2,
      description: 'Software Engineering, Cloud Architecture, Artificial Intelligence, Cybersecurity & Data Analytics.',
      avgStartingPay: '£38k (UK) / AUD $85k (Aus) / $88k (USA)',
      demandRank: 'Highest Global Demand'
    },
    {
      id: 'engineering',
      name: 'Engineering & STEM Disciplines',
      Icon: Cog,
      description: 'Civil Engineering, Mechanical Systems, Renewable Energy, Robotics, and Biomedical Tech.',
      avgStartingPay: '£35k (UK) / AUD $82k (Aus) / $84k (USA)',
      demandRank: 'STEM Extension Qualified'
    },
    {
      id: 'business',
      name: 'Business Administration & FinTech',
      Icon: TrendingUp,
      description: 'Global MBA, International Finance, Supply Chain Logistics, Marketing Analytics & Management.',
      avgStartingPay: '£40k (UK) / AUD $78k (Aus) / $82k (USA)',
      demandRank: 'Corporate Leadership'
    },
    {
      id: 'nursing',
      name: 'Nursing & Allied Healthcare',
      Icon: HeartPulse,
      description: 'BSc Nursing (NMC UK / AHPRA Australia Registered), Public Health, Pharmacy & Physiotherapy.',
      avgStartingPay: '£32k (UK) / AUD $79k (Aus) / $76k (USA)',
      demandRank: 'Direct PR Pathway in Australia/UK'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* =========================================================================
          SECTION 1: WESTERN TRACK HERO SECTION (CLEAN LIGHT DESIGN)
          ========================================================================= */}
      <section className="relative bg-white text-slate-900 min-h-[90vh] flex items-center border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full relative z-10">
          
          <p className="text-xs font-bold uppercase tracking-widest text-navy-700 mb-4">
            Global Migration & STEM Track • Post-Study Work Rights Guaranteed
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
                Study in the <span className="text-navy-700">{destination.country}</span>, Done Right the First Time.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
                {destination.tagline}. We match undergraduate and master's applicants with accredited universities, then carry them through financial documentation and visa interview prep.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onOpenEligibility}
                  className="bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-xs transition-all flex items-center gap-2"
                >
                  <span>Check Visa & Admission Eligibility</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="https://wa.me/9779851093227?text=Hello%20NDC%20Education,%20I%20am%20inquiring%20about%20studying%20in%20the%20West."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-colors flex items-center gap-2"
                >
                  <Briefcase className="w-4 h-4 text-navy-700" />
                  <span>Talk with Western Desk</span>
                </a>
              </div>
            </div>

            {/* Destination Highlight Quick Card */}
            <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-3xl">{destination.flag}</span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{destination.country} Overview</h3>
                  <span className="text-[11px] text-navy-700 font-medium">Official University Representative</span>
                </div>
              </div>

              <div className="space-y-2 text-xs pt-2 border-t border-slate-200">
                <div className="flex justify-between">
                  <span className="text-slate-500">Major Intakes:</span>
                  <span className="font-bold text-slate-900">{destination.intakes}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Post-Study Work:</span>
                  <span className="font-bold text-emerald-700">{destination.workRights.split('+')[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Average Annual Tuition:</span>
                  <span className="font-bold text-slate-900">{destination.averageTuition}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CORE ACADEMIC STREAMS OFFERED
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-navy-600 uppercase tracking-widest">
              High-ROI Specializations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Core Academic Streams with Guaranteed Work Rights
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              We guide students into degrees that align with international skill-shortage occupation lists for maximum post-study career success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {streams.map((stream) => (
              <div 
                key={stream.id}
                onClick={() => setSelectedStream(stream.id)}
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                  selectedStream === stream.id 
                    ? 'border-navy-600 bg-navy-50/40 shadow-md' 
                    : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                  selectedStream === stream.id ? 'bg-navy-600 text-white' : 'bg-white text-navy-700 border border-slate-200'
                }`}>
                  <stream.Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-1">{stream.name}</h3>
                <p className="text-xs font-bold text-navy-700 mb-2 uppercase tracking-wide">
                  {stream.demandRank}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {stream.description}
                </p>
                <div className="pt-3 border-t border-slate-200 text-[11px] font-semibold text-slate-700">
                  <span className="text-slate-500">Typical Starting Package: </span>
                  <span className="text-emerald-700 font-bold">{stream.avgStartingPay}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Universities List for Active Country */}
          <div className="mt-12 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="font-bold text-base text-slate-900">
                  Representative Universities in {destination.country}
                </h3>
                <p className="text-xs text-slate-500">
                  Processed directly with authorized institutional quotas & fast-track offer turnarounds.
                </p>
              </div>
              <button
                onClick={onOpenEligibility}
                className="bg-navy-600 hover:bg-navy-700 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg shadow transition-colors flex-shrink-0"
              >
                Apply to These Universities
              </button>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {destination.partnerUniversities.map((uni, idx) => (
                <span 
                  key={idx}
                  className="text-xs font-semibold bg-white text-slate-800 border border-slate-300 px-3 py-1.5 rounded-lg shadow-sm"
                >
                  {uni}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: STEP-BY-STEP VISA & ADMISSION TIMELINE
          ========================================================================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold text-navy-600 uppercase tracking-widest">
              Execution Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Step-by-Step Visa & Admission Lifecycle
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              From your initial profile evaluation to landing on foreign soil, here is how NDC navigates your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="w-8 h-8 rounded-full bg-navy-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </span>
              <h3 className="font-bold text-sm text-slate-900">Profile & Test Score Audit</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Evaluating +2 / Bachelor GPA, IELTS, PTE, or Duolingo scores. Matching courses with genuine career pathways.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="w-8 h-8 rounded-full bg-navy-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </span>
              <h3 className="font-bold text-sm text-slate-900">University Application & Offer</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Drafting SOPs, submitting academic transcripts, and securing unconditional offer letters within 7 to 14 days.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="w-8 h-8 rounded-full bg-navy-600 text-white flex items-center justify-center font-bold text-sm">
                03
              </span>
              <h3 className="font-bold text-sm text-slate-900">Financial Audit & CAS / I-20</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Combing through bank statements, sponsor tax returns, and land valuations to secure official CAS / I-20 clearance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="w-8 h-8 rounded-full bg-navy-600 text-white flex items-center justify-center font-bold text-sm">
                04
              </span>
              <h3 className="font-bold text-sm text-slate-900">Mock Visa Drills & Filing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Intensive 1-on-1 interview simulations at our Putalisadak office to ensure confident answers before the consular officer.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                05
              </span>
              <h3 className="font-bold text-sm text-emerald-800">Visa Grant & Amber Housing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Visa stamp collection, pre-departure briefings, forex card setup, and student accommodation booking via Amber.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FINANCIAL FILE PREPARATION GUIDANCE (CLEAN LIGHT DESIGN)
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 text-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-navy-700">
                  Parent Assurance
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Most Visa Refusals Come Down to Paperwork. We Catch It Before the Embassy Does.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Most Western student visa rejections trace back to misaligned sponsorship documents, unexplained cash deposits, or incomplete relationship certificates. Our compliance officers review every bank voucher before it's submitted.
                </p>

                <div className="space-y-2.5 pt-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>28-Day Holding Period Verification</strong> for UKVI compliance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>Genuine Student (GS) Financial Matrix</strong> for Australian Subclass 500</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>Source of Wealth & Income Tax Returns</strong> audit for US F-1 visas</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 text-center space-y-4 shadow-sm">
                <ShieldCheck className="w-12 h-12 text-navy-700 mx-auto" />
                <h4 className="text-base font-bold text-slate-900">Have Questions About Your Bank Balance?</h4>
                <p className="text-xs text-slate-600">
                  Book a private financial file audit at our Putalisadak central office or nearest regional branch.
                </p>
                <button
                  onClick={onOpenEligibility}
                  className="w-full bg-navy-700 hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-colors shadow-xs"
                >
                  Schedule Private Financial Consultation
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: GENERAL DESTINATIONS INQUIRY FORM
          ========================================================================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold text-navy-600 uppercase tracking-widest">
            Begin Your Application
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1 mb-8">
            Connect With Our Western Studies Counseling Team
          </h2>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-left">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.target);
                const message = `Hello NDC Education, I'd like to start my Western university application.\n\n` +
                  `Name: ${fd.get('name')}\n` +
                  `Phone: ${fd.get('phone')}\n` +
                  `Preferred Destination: ${fd.get('destination')}\n` +
                  `English Test Score: ${fd.get('englishScore') || '(not provided)'}`;
                window.open(`https://wa.me/9779851093227?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
                e.target.reset();
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Student Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Suman Sharma"
                    className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2.5 focus:border-navy-500 focus:ring-1 focus:ring-navy-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+977-98XXXXXXXX"
                    className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2.5 focus:border-navy-500 focus:ring-1 focus:ring-navy-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Destination
                  </label>
                  <select name="destination" className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2.5 focus:border-navy-500 focus:ring-1 focus:ring-navy-500 bg-white">
                    <option>United Kingdom (2-Yr Graduate Route)</option>
                    <option>Australia (Subclass 500)</option>
                    <option>United States (STEM OPT)</option>
                    <option>Canada (PGWP)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    English Test Score
                  </label>
                  <input
                    type="text"
                    name="englishScore"
                    placeholder="e.g. IELTS 6.5 / PTE 62 / Not Taken"
                    className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2.5 focus:border-navy-500 focus:ring-1 focus:ring-navy-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-xs transition-colors"
              >
                Send Profile via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}

