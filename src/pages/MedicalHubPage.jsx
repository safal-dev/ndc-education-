import React, { useState } from 'react';
import { 
  Stethoscope, ShieldCheck, CheckCircle2, AlertCircle, 
  Download, Building2, Clock, DollarSign, BookOpen, ChevronDown, 
  ChevronUp, ArrowRight, Hospital, Bed, Award, Users, Phone,
  FileCheck, ExternalLink, HelpCircle, MapPin
} from 'lucide-react';
import { medicalColleges } from '../data/colleges';

export default function MedicalHubPage({ subpage = 'bangladesh', onOpenEligibility, onOpenScholarship }) {
  const [selectedCountry, setSelectedCountry] = useState(
    subpage === 'kazakhstan' ? 'Kazakhstan' : subpage === 'other' ? 'Other' : 'Bangladesh'
  );
  const [openFaq, setOpenFaq] = useState(0);

  // DGHS Equivalence Calculator States
  const [seeGpa, setSeeGpa] = useState('3.6');
  const [plus2Gpa, setPlus2Gpa] = useState('3.4');
  const [bioGpa, setBioGpa] = useState('3.5');
  const [gapYear, setGapYear] = useState('0');

  const totalGpa = (parseFloat(seeGpa || 0) + parseFloat(plus2Gpa || 0)).toFixed(2);
  const isPrivateEligible = parseFloat(totalGpa) >= 7.0 && parseFloat(bioGpa || 0) >= 3.5 && parseInt(gapYear) <= 1;
  const isSaarcEligible = parseFloat(totalGpa) >= 8.0 && parseFloat(bioGpa || 0) >= 3.5 && parseInt(gapYear) === 0;

  // Filter colleges based on tab
  const displayedColleges = selectedCountry === 'Bangladesh'
    ? medicalColleges.filter(c => c.country === 'Bangladesh')
    : selectedCountry === 'Kazakhstan'
      ? medicalColleges.filter(c => c.country === 'Kazakhstan')
      : medicalColleges.filter(c => c.country !== 'Bangladesh' && c.country !== 'Kazakhstan');

  const faqs = [
    {
      q: "Will a degree from Bangladesh or Kazakhstan allow me to practice medicine in Nepal & India?",
      a: "Yes, 100%. All partner medical colleges represented by NDC Education are accredited by their national medical boards (BMDC Bangladesh, Ministry of Health Kazakhstan), listed in the World Directory of Medical Schools (WDOMS/WHO/FAIMER), and recognized by the Nepal Medical Council (NMC) and National Medical Commission of India (NMC/NExT). Upon graduation and completing their 1-year rotatory clinical internship, students are fully eligible to sit for the NMCLE (Nepal) and NExT / FMGE (India) licensing exams."
    },
    {
      q: "What are the minimum eligibility marks required for MBBS in Bangladesh (DGHS Equivalence)?",
      a: "For Nepalese students: SEE and +2 Science combined GPA must be at least 8.0, with an individual minimum GPA of 3.5 in Biology (or 60%+ aggregate in PCB). For Indian students: Must qualify the NEET-UG examination cutoff of the admission year. Candidates must not have more than 1 gap year between +2 graduation and admission."
    },
    {
      q: "What is the total fee structure and payment timeline? Are there any hidden fees?",
      a: "Tuition in Bangladesh averages between $38,000 and $52,000 USD for the entire 5-year course, payable in structured installments across 5 years. In Kazakhstan, total course fees range between $22,000 and $28,000 USD. NDC Education guarantees zero hidden costs: the university admission offer letter specifies total tuition, on-campus hostel, and session charges upfront."
    },
    {
      q: "Why is Bangladesh the top destination for Nepalese and Indian medical aspirants?",
      a: "Three pivotal reasons: 1) Clinical disease patterns are identical to Nepal and northern India (tropical pathology, infectious medicine, maternal health), giving students actual hands-on patient exposure; 2) The curriculum follows the British GMC standard, yielding the highest passing percentage in the Nepal Medical Council licensing examination; 3) Proximity and cultural similarity make travel economical and parental visits easy."
    },
    {
      q: "Does NDC Education assist with hostel allocation, food, and student welfare abroad?",
      a: "Yes. All our partner colleges have guaranteed residential hostels for international students with separate blocks for female students and strict security. Indian and Nepalese food mess is provided on campus. NDC Education assigns a full-time regional coordinator in Dhaka and Almaty to assist with campus registration, local SIM cards, medical check-ups, and 24/7 emergency liaison."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* =========================================================================
          SECTION 1: DESTINATION HERO SECTION (CLEAN LIGHT DESIGN)
          ========================================================================= */}
      <section className="relative bg-white text-slate-900 min-h-[90vh] flex items-center border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          
          {/* Breadcrumb & Subtitle */}
          <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-4">
            Specialized Medical Admissions Hub • Intake 2026 / 2027
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
                Pursue an Accredited <span className="text-red-700">MBBS Abroad</span> Without Wasting an Academic Year.
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
                Direct authorized placement into premier medical institutions across <strong>Bangladesh</strong>, <strong>Kazakhstan</strong>, and <strong>Egypt</strong>. Fully compliant with Nepal Medical Council (NMCLE) and National Medical Commission (NExT) regulations.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onOpenEligibility}
                  className="bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-sm transition-all flex items-center gap-2"
                >
                  <span>Check Medical Seat Eligibility</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenScholarship}
                  className="bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-red-700" />
                  <span>Download 2026/27 Fee Structure</span>
                </button>
              </div>
            </div>

            {/* Quick Summary Card (Clean Light Design) */}
            <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="text-xs font-bold text-red-700 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>Current Admission Deadline Status</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Bangladesh DGHS Equivalence:</span>
                  <span className="font-bold text-emerald-700">Seats Open Now</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Kazakhstan Fall Intake:</span>
                  <span className="font-bold text-slate-800">Rolling Processing</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Curriculum Language:</span>
                  <span className="font-bold text-slate-800">100% English Medium</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Internship Policy:</span>
                  <span className="font-bold text-slate-800">1 Year Bedside Included</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: THE STRATEGIC & CURRICULUM ADVANTAGE
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-red-600 uppercase tracking-widest">
              Strategic Clinical Edge
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Why Regional Medical Education Outperforms Distant Western Programs
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              A medicine degree is only as good as its bedside clinical experience — here's why regional medical hubs tend to deliver more of it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold mb-4">
                <Hospital className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-1">
                Identical Pathology & Disease Patterns
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bangladesh and regional hospitals treat the exact same infectious, tropical, metabolic, and maternal cases prevalent in Nepal and India. Students master hands-on diagnostics rather than simulated dummy models.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-1">
                Highest NMCLE & FMGE Pass Rates
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Year after year, graduates of Dhaka University medical colleges achieve the highest pass percentage in the Nepal Medical Council Licensing Examination (NMCLE) and Indian screening exams.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold mb-4">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-1">
                Cost-Effective Tuition ($35k - $55k Total)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A comparable Western medical degree runs $200,000–$350,000. Regional hubs offer the same WHO-accredited medical degree for a fraction of that, spread across flexible 5-year installments.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-1">
                100% English Medium & British Curriculum
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Textbooks, lectures, clinical vivas, and ward rounds are conducted entirely in English using standardized international medical literature (Guyton, Robbins, Bailey & Love, Davidson).
              </p>
            </div>

          </div>

          {/* Interactive DGHS Equivalence Calculator for Bangladesh */}
          {selectedCountry === 'Bangladesh' && (
            <div className="mt-12 bg-gradient-to-br from-red-50 via-white to-slate-50 border-2 border-red-200 rounded-3xl p-6 sm:p-10 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-1">
                    Official DGHS Bangladesh Protocol
                  </p>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Interactive DGHS Equivalence Point Calculator
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    The Government of Bangladesh Directorate General of Health Services (DGHS) mandates strict combined GPA criteria. Check your score instantly:
                  </p>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center flex-shrink-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Calculated Total GPA</span>
                  <span className={`text-2xl font-black ${parseFloat(totalGpa) >= 7.0 ? 'text-emerald-600' : 'text-red-600'}`}>
                    {totalGpa} / 10.0
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    SEE / 10th Board GPA
                  </label>
                  <input 
                    type="number"
                    step="0.05"
                    min="2.0"
                    max="4.0"
                    value={seeGpa}
                    onChange={(e) => setSeeGpa(e.target.value)}
                    className="w-full text-sm font-semibold bg-white border border-slate-300 rounded-xl px-3 py-2.5 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Minimum 3.0 recommended</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    +2 / 12th Science GPA
                  </label>
                  <input 
                    type="number"
                    step="0.05"
                    min="2.0"
                    max="4.0"
                    value={plus2Gpa}
                    onChange={(e) => setPlus2Gpa(e.target.value)}
                    className="w-full text-sm font-semibold bg-white border border-slate-300 rounded-xl px-3 py-2.5 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Physics, Chemistry, Biology</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    +2 Biology Individual GPA
                  </label>
                  <input 
                    type="number"
                    step="0.05"
                    min="2.0"
                    max="4.0"
                    value={bioGpa}
                    onChange={(e) => setBioGpa(e.target.value)}
                    className="w-full text-sm font-semibold bg-white border border-slate-300 rounded-xl px-3 py-2.5 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Mandatory Min: 3.5 (60%+)</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Academic Year Gap
                  </label>
                  <select
                    value={gapYear}
                    onChange={(e) => setGapYear(e.target.value)}
                    className="w-full text-sm font-semibold bg-white border border-slate-300 rounded-xl px-3 py-2.5 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  >
                    <option value="0">Fresh Batch (Zero Gap)</option>
                    <option value="1">1 Year Gap (Allowed by DGHS)</option>
                    <option value="2">2+ Years Gap (Requires Alternative)</option>
                  </select>
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Max 1 gap year permitted</span>
                </div>
              </div>

              {/* Real-time Eligibility Status Box */}
              <div className={`p-5 rounded-2xl border text-xs leading-relaxed flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                isPrivateEligible 
                  ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950' 
                  : 'bg-amber-50/80 border-amber-300 text-amber-950'
              }`}>
                <div className="space-y-1">
                  <div className="font-extrabold text-sm flex items-center gap-1.5">
                    {isPrivateEligible ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-800">100% Eligible for DGHS Equivalence & Bangladesh Medical Admission!</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4 text-amber-600" />
                        <span className="text-amber-800">Criteria Review Needed for Bangladesh (Requires Total GPA ≥ 7.0 & Bio ≥ 3.5)</span>
                      </>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-700">
                    {isSaarcEligible && '🌟 Outstanding Merit! Your Combined GPA qualifies you to contest for the prestigious Bangladesh Government SAARC Full-Tuition Quota.'}
                    {!isSaarcEligible && isPrivateEligible && '✅ You meet all DGHS criteria for direct institutional booking at Bangladesh Medical College, Dhaka National, Jahurul Islam & Kumudini.'}
                    {!isPrivateEligible && parseInt(gapYear) > 1 && '⚠️ DGHS permits maximum 1 academic gap year. For 2+ year gap students, our Kazakhstan (KazNMU Almaty) or Egypt tracks offer 100% accepted alternatives.'}
                  </p>
                </div>

                <button
                  onClick={onOpenEligibility}
                  className="bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-xs transition-colors flex-shrink-0"
                >
                  File My DGHS Equivalence
                </button>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: FEATURED PARTNER UNIVERSITIES GRID
          ========================================================================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-extrabold text-red-600 uppercase tracking-widest">
                Direct Institutional Representation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Featured Partner Medical Institutions ({selectedCountry})
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Institutions formally represented by NDC Education with verified hospital affiliations and on-ground student care.
              </p>
            </div>

            <button
              onClick={onOpenEligibility}
              className="bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-xs transition-colors flex items-center gap-2 self-start md:self-auto"
            >
              <span>Verify My College Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Destination Selector Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-6 mb-10">
            <button
              onClick={() => setSelectedCountry('Bangladesh')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                selectedCountry === 'Bangladesh'
                  ? 'bg-red-700 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>MBBS in Bangladesh</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded ${selectedCountry === 'Bangladesh' ? 'bg-red-800 text-red-100' : 'bg-slate-100 text-slate-500'}`}>Primary Focus</span>
            </button>

            <button
              onClick={() => setSelectedCountry('Kazakhstan')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                selectedCountry === 'Kazakhstan'
                  ? 'bg-red-700 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>MBBS in Kazakhstan</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded ${selectedCountry === 'Kazakhstan' ? 'bg-red-800 text-red-100' : 'bg-slate-100 text-slate-500'}`}>Affordable</span>
            </button>

            <button
              onClick={() => setSelectedCountry('Other')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                selectedCountry === 'Other'
                  ? 'bg-red-700 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>Egypt, Philippines & China</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedColleges.map((college) => (
              <div 
                key={college.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* College Header Image with Badge */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img 
                      src={college.image} 
                      alt={college.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute top-3 left-3 bg-red-700/95 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                      <span>{college.flag}</span>
                      <span>{college.city}</span>
                    </div>

                    <div className="absolute bottom-3 right-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded shadow">
                      Est. {college.established}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-extrabold text-lg text-slate-900 leading-snug group-hover:text-red-600 transition-colors">
                        {college.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {college.affiliation}
                      </p>
                    </div>

                    {/* Key Metrics Pill Row */}
                    <div className="grid grid-cols-2 gap-2 text-xs py-2 border-y border-slate-100">
                      <div className="flex items-center gap-1.5 text-slate-700">
                        <Bed className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span className="font-semibold truncate">{college.hospitalBeds}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-700">
                        <Clock className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span className="font-semibold">{college.duration.split('+')[0]}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5 text-xs text-slate-600">
                      {college.highlights.slice(0, 3).map((hl, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Accreditations tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {college.accreditations.map((acc, idx) => (
                        <span 
                          key={idx}
                          className="text-[10px] bg-slate-100 text-slate-700 font-semibold px-2 py-0.5 rounded border border-slate-200"
                        >
                          {acc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with Fee & CTA */}
                <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Estimated Total Fee</span>
                      <div className="text-sm font-extrabold text-red-600">{college.totalFeeUSD}</div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-700">
                      Flexible Installments
                    </span>
                  </div>

                  <button
                    onClick={onOpenEligibility}
                    className="w-full bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-colors text-center shadow-xs"
                  >
                    Reserve Seat / Inquire
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: TOTAL TRANSPARENCY FEE & COST BREAKDOWN
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest">
              Financial Integrity Guarantee
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Transparent Fee Breakdown • Zero Hidden Charges
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Parents fear unexpected demands for development funds or sudden tuition increases. At NDC Education, all tuition schedules are documented in your official university admission contract.
            </p>
          </div>

          <div className="overflow-x-auto bg-slate-50 border border-slate-200 rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-800 border-b border-slate-200 text-xs uppercase tracking-wider font-bold">
                  <th className="py-4 px-4 font-bold">Institution & Country</th>
                  <th className="py-4 px-4 font-bold">1st Year Booking & Tuition</th>
                  <th className="py-4 px-4 font-bold">Years 2 to 5 Installments</th>
                  <th className="py-4 px-4 font-bold">Hostel & Food Setup</th>
                  <th className="py-4 px-4 font-bold">Official Package Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                <tr className="hover:bg-slate-100 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-bold text-slate-900">Bangladesh Medical College (BMC)</div>
                    <div className="text-xs text-slate-500">Dhaka, Bangladesh 🇧🇩</div>
                  </td>
                  <td className="py-4 px-4">$18,000 USD (Includes admission & 1st yr tuition)</td>
                  <td className="py-4 px-4">$8,000 USD / Year (Divided semi-annually)</td>
                  <td className="py-4 px-4">On-campus hostel included / approx $100/mo food</td>
                  <td className="py-4 px-4 font-extrabold text-red-600">$48,000 - $52,000 USD</td>
                </tr>

                <tr className="hover:bg-slate-100 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-bold text-slate-900">Dhaka National Medical College (DNMC)</div>
                    <div className="text-xs text-slate-500">Old Dhaka, Bangladesh 🇧🇩</div>
                  </td>
                  <td className="py-4 px-4">$17,000 USD (Admission + 1st yr)</td>
                  <td className="py-4 px-4">$7,500 USD / Year</td>
                  <td className="py-4 px-4">International student hostel included</td>
                  <td className="py-4 px-4 font-extrabold text-red-600">$46,000 - $49,000 USD</td>
                </tr>

                <tr className="hover:bg-slate-100 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-bold text-slate-900">Jahurul Islam Medical College (JIMC)</div>
                    <div className="text-xs text-slate-500">Bajitpur, Bangladesh 🇧🇩</div>
                  </td>
                  <td className="py-4 px-4">$15,000 USD (Initial booking + 1st yr)</td>
                  <td className="py-4 px-4">$6,500 - $7,000 USD / Year</td>
                  <td className="py-4 px-4">52-Acre campus dorms with dining hall</td>
                  <td className="py-4 px-4 font-extrabold text-red-600">$40,000 - $43,000 USD</td>
                </tr>

                <tr className="hover:bg-slate-100 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-bold text-slate-900">Kumudini Women's Medical College</div>
                    <div className="text-xs text-slate-500">Mirzapur, Bangladesh 🇧🇩</div>
                  </td>
                  <td className="py-4 px-4">$16,000 USD (Booking + 1st yr)</td>
                  <td className="py-4 px-4">$6,800 USD / Year</td>
                  <td className="py-4 px-4">Gated, high-security female hostel campus</td>
                  <td className="py-4 px-4 font-extrabold text-red-600">$42,000 - $45,000 USD</td>
                </tr>

                <tr className="hover:bg-slate-100 transition-colors bg-emerald-50/50">
                  <td className="py-4 px-4">
                    <div className="font-bold text-slate-900">Asfendiyarov Kazakh National (KazNMU)</div>
                    <div className="text-xs text-slate-500">Almaty, Kazakhstan 🇰🇿</div>
                  </td>
                  <td className="py-4 px-4">$5,200 USD (Annual Tuition)</td>
                  <td className="py-4 px-4">$4,800 - $5,200 USD / Year</td>
                  <td className="py-4 px-4">University dorms approx $600 - $800 / year</td>
                  <td className="py-4 px-4 font-extrabold text-emerald-700">$25,000 - $28,000 USD</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>All payments are remitted via authorized banking channels / Letter of Credit (LC) directly to the university's bank account.</span>
            </div>
            <button
              onClick={onOpenScholarship}
              className="text-red-600 font-bold hover:underline flex items-center gap-1 flex-shrink-0"
            >
              <span>Download Official Payment Schedule PDF</span>
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: MEDICAL COUNCIL LICENSING COMPLIANCE CHECKLIST (CLEAN LIGHT DESIGN)
          ========================================================================= */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-red-700">
              Regulatory Compliance Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              The 5-Step Path From Foreign Degree to Licensed Practice at Home
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Our compliance protocol is built around the recognition requirements of the Nepal Medical Council (NMC) and India's National Medical Commission (NMC/NExT), start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
            
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3 relative">
              <div className="w-8 h-8 rounded-full bg-red-700 text-white flex items-center justify-center font-extrabold text-sm">
                1
              </div>
              <h3 className="font-bold text-sm text-slate-900">MEC / MOEST Eligibility</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Prior to departure, NDC Education files your Ministry of Education (MOEST) NOC and Medical Education Commission (MEC) Eligibility Certificate.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3 relative">
              <div className="w-8 h-8 rounded-full bg-red-700 text-white flex items-center justify-center font-extrabold text-sm">
                2
              </div>
              <h3 className="font-bold text-sm text-slate-900">Host Country Equivalence</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We submit your marksheets to the Directorate General of Health Services (DGHS) in Bangladesh or the Ministry in Kazakhstan for official equivalency.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3 relative">
              <div className="w-8 h-8 rounded-full bg-red-700 text-white flex items-center justify-center font-extrabold text-sm">
                3
              </div>
              <h3 className="font-bold text-sm text-slate-900">WDOMS / WHO Registry</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Your university is verified in the World Directory of Medical Schools (WDOMS) under FAIMER and ECFMG, enabling global residency (USMLE/PLAB) pathways.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3 relative">
              <div className="w-8 h-8 rounded-full bg-red-700 text-white flex items-center justify-center font-extrabold text-sm">
                4
              </div>
              <h3 className="font-bold text-sm text-slate-900">12-Month Bedside Internship</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Both NMC Nepal and NMC India mandate 12 months of physical, in-hospital rotatory internship. All our partner hospitals integrate this fully into the graduation track.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3 relative sm:col-span-2 md:col-span-1">
              <div className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center font-extrabold text-sm">
                5
              </div>
              <h3 className="font-bold text-sm text-emerald-800">NMCLE / NExT Exam</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You return home with attested transcripts, sit for the licensing examination, and receive your permanent registration number to practice as a licensed doctor.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CONTEXTUAL MEDICAL TRACK FAQ & FINAL CTA
          ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-extrabold text-red-600 uppercase tracking-widest">
              Answers for Students & Parents
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Frequently Asked Medical Questions
            </h2>
          </div>

          <div className="space-y-4 mb-16">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full text-left p-5 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-4 font-bold text-sm text-slate-900 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-red-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="p-5 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Reserve Medical Seat Consultation Box */}
          <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-8 sm:p-10 rounded-3xl shadow-xl text-center space-y-4">
            <h3 className="text-2xl font-extrabold tracking-tight">
              Ready to Reserve Your Medical Seat for 2026/2027?
            </h3>
            <p className="text-xs sm:text-sm text-red-100 max-w-xl mx-auto leading-relaxed">
              Medical seats in top institutions like Bangladesh Medical College and KazNMU have strict institutional quota limits. Speak with our Senior Medical Advisory Team today.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenEligibility}
                className="w-full sm:w-auto bg-white text-red-700 hover:bg-red-50 font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl shadow transition-colors"
              >
                Book 1-on-1 Medical Counseling
              </button>
              <a
                href="https://wa.me/9779851093227?text=Hello%20NDC%20Education,%20I%20would%20like%20to%20reserve%20a%20seat%20for%20MBBS%20in%20Bangladesh."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-red-900 hover:bg-red-950 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl transition-colors inline-flex items-center justify-center gap-2 border border-red-700 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Hotline</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

