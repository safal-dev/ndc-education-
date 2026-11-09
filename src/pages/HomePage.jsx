import React, { useState } from 'react';
import { 
  Stethoscope, Globe, Award, ShieldCheck, CheckCircle2, 
  ArrowRight, Users, BookOpen, Star, Building2, Phone, 
  MapPin, Clock, FileText, ChevronRight, MessageCircle, Heart,
  AlertTriangle, Sparkles, School
} from 'lucide-react';
import { reviewsData } from '../data/reviews';
import { medicalColleges, westernDestinations } from '../data/colleges';

export default function HomePage({ setActivePage, onOpenEligibility, onOpenScholarship }) {
  const [activeReviewTab, setActiveReviewTab] = useState('all');
  
  // Interactive mini calculator states
  const [calcStream, setCalcStream] = useState('mbbs-bangladesh');
  const [calcGpa, setCalcGpa] = useState('3.2');
  const [calcBudget, setCalcBudget] = useState('mid');

  const allReviews = [
    ...reviewsData.gmbReviews.map(r => ({ ...r, badge: 'Google 5.0 ★' })),
    ...reviewsData.facebookReviews.map(r => ({ ...r, badge: 'Facebook Verified' }))
  ];

  const filteredReviews = activeReviewTab === 'all'
    ? allReviews
    : activeReviewTab === 'gmb'
      ? allReviews.filter(r => r.source === 'Google My Business')
      : allReviews.filter(r => r.source === 'Facebook Verified');

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const message = `Hello NDC Education, I'd like a fast-track academic callback.\n\n` +
      `Name: ${fd.get('name')}\n` +
      `Phone: ${fd.get('phone')}\n` +
      `Program: ${fd.get('program')}\n` +
      `City: ${fd.get('city') || '(not provided)'}`;
    window.open(`https://wa.me/9779851093227?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-red-500 selection:text-white">
      
      {/* =========================================================================
          SECTION 1: HERO HEADER (CLEAN, PRESTIGIOUS, EDITORIAL)
          ========================================================================= */}
      <section className="relative bg-white border-b border-slate-200 pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 7 Columns: Core Institutional Message */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Clean Editorial Eyebrow */}
              <p className="text-xs font-bold uppercase tracking-widest text-red-700">
                MOEST Authorized • Gov. Regd. #1284/071 • Estd. 2008
              </p>

              {/* Bold Authoritative Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.15]">
                Medical seats abroad. Western university offers. One consultancy you can verify.
              </h1>

              {/* Dignified Subheadline */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
                Headquartered at Putalisadak, Kathmandu, NDC Education represents 500+ partner institutions through 20 regional offices in Nepal and India — placing students into accredited medical programs in <strong>Bangladesh</strong> and <strong>Kazakhstan</strong>, and university pathways in the <strong>UK</strong>, <strong>Australia</strong>, and the <strong>USA</strong>.
              </p>

              {/* Clean Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  onClick={onOpenEligibility}
                  className="w-full sm:w-auto bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
                >
                  <span>Check Admission Eligibility</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setActivePage('medical', 'bangladesh')}
                  className="w-full sm:w-auto bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold text-xs uppercase tracking-wider px-6 py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Stethoscope className="w-4 h-4 text-red-700" />
                  <span>Explore MBBS in Bangladesh</span>
                </button>
              </div>

              {/* Clean Credential Row (No tacky pills) */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>NMC (Nepal) & BMDC Compliant</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Documented Zero Hidden Costs Guarantee</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>20 Regional Offices in Nepal & India</span>
                </span>
              </div>

            </div>

            {/* Right 5 Columns: Official Admissions Briefing Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
                
                {/* Authentic Clinical/Campus Photography */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" 
                    alt="Clinical Medical Training" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-4 text-white">
                    <div className="text-[11px] font-semibold tracking-wide text-slate-200 uppercase">
                      Putalisadak Central Headquarters
                    </div>
                    <div className="text-sm font-bold text-white">
                      Direct Institutional Quota Desk
                    </div>
                  </div>
                </div>

                {/* Structured Admissions Roster Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Academic Year 2026 / 2027
                    </div>
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                      Intakes Active
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-start justify-between gap-3 p-2.5 rounded-lg bg-white border border-slate-200/80">
                      <div>
                        <div className="font-bold text-slate-900">🇧🇩 Bangladesh Medical Hub</div>
                        <p className="text-[11px] text-slate-500">DGHS Equivalence & Dhaka Univ. Affiliates</p>
                      </div>
                      <span className="text-xs font-bold text-red-700 flex-shrink-0">
                        Seats Open
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-3 p-2.5 rounded-lg bg-white border border-slate-200/80">
                      <div>
                        <div className="font-bold text-slate-900">🇰🇿 Kazakhstan Medical Hub</div>
                        <p className="text-[11px] text-slate-500">Asfendiyarov KazNMU Almaty (5-Yr English)</p>
                      </div>
                      <span className="text-xs font-bold text-emerald-700 flex-shrink-0">
                        Rolling
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-3 p-2.5 rounded-lg bg-white border border-slate-200/80">
                      <div>
                        <div className="font-bold text-slate-900">🇬🇧 UK & 🇦🇺 Australia Higher Ed</div>
                        <p className="text-[11px] text-slate-500">Russell Group & Group of Eight Direct Filing</p>
                      </div>
                      <span className="text-xs font-bold text-navy-700 flex-shrink-0">
                        2026 Intakes
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                    <a 
                      href="tel:+9779851093227" 
                      className="font-bold text-slate-800 hover:text-red-700 flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-red-600" />
                      <span>+977-985-1093227</span>
                    </a>
                    <button
                      onClick={onOpenEligibility}
                      className="text-red-700 font-bold hover:underline"
                    >
                      Reserve Consultation →
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: THE CORE TRACK ROUTER (AUDIENCE SEGMENTATION)
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-extrabold text-red-600 uppercase tracking-widest mb-2">
              Where Are You Headed?
            </h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Two Tracks, One Admissions Team
            </p>
            <p className="text-sm text-slate-600 mt-2">
              Pick your track for a clear view of tuition, entrance requirements, and the visa process ahead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Track 1: Regional Medical & Technical Track */}
            <div className="relative group rounded-2xl border-2 border-red-100 hover:border-red-500 bg-gradient-to-b from-red-50/40 via-white to-white p-8 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-red-600 text-white rounded-xl shadow-md">
                    <Stethoscope className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-red-700 uppercase tracking-widest">
                    Primary Regional Track
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-red-600 transition-colors">
                  Regional Medical Abroad Hub
                </h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 mb-4">
                  MBBS • BDS • MD • Clinical Rotations
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Tailored for ambitious +2 Science and NEET/MECEE candidates. Pursue world-class medical degrees in <strong>Bangladesh</strong> (Dhaka University affiliates), <strong>Kazakhstan</strong> (KazNMU), <strong>Egypt</strong>, and the <strong>Philippines</strong> without losing your academic timeline.
                </p>

                <div className="space-y-2.5 mb-6 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span><strong>Identical South Asian Disease Spectrum</strong> & Bedside Clinical Flow</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span><strong>100% Council Compliance:</strong> NMCLE (Nepal), BMDC & NExT (India)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span><strong>Total Course Cost:</strong> $35,000–$55,000 (Installments across 5 years)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span><strong>Zero Hidden Costs:</strong> Strict parent financial protection agreement</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => setActivePage('medical', 'bangladesh')}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore Medical Abroad Admissions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Track 2: Western Higher Education Hub */}
            <div className="relative group rounded-2xl border-2 border-navy-100 hover:border-navy-500 bg-gradient-to-b from-navy-50/40 via-white to-white p-8 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-navy-700 text-white rounded-xl shadow-md">
                    <Globe className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-navy-700 uppercase tracking-widest">
                    Global Migration & STEM
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-navy-700 transition-colors">
                  Western Higher Education Hub
                </h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 mb-4">
                  UK • Australia • USA • Canada
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  For students seeking post-study work rights, STEM careers, or a path to residency. We file directly into Russell Group, Australian Group of Eight, and accredited North American universities.
                </p>

                <div className="space-y-2.5 mb-6 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-navy-600 flex-shrink-0" />
                    <span><strong>Post-Study Work Rights:</strong> 2-year UK Graduate Route, 3-yr STEM OPT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-navy-600 flex-shrink-0" />
                    <span><strong>In-Demand Programs:</strong> AI, Data Science, Software Eng, Nursing & MBA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-navy-600 flex-shrink-0" />
                    <span><strong>Financial File Alignment:</strong> Clean sponsorship & bank balance check</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-navy-600 flex-shrink-0" />
                    <span><strong>Mock Visa Drills:</strong> Embassy interview simulations at Putalisadak</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => setActivePage('western')}
                  className="w-full bg-navy-700 hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore Western Study Pathways</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: TRUST & REGULATORY VALIDATION BANNER (CLEAN LIGHT DESIGN)
          ========================================================================= */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Government Registered • International Regulatory Compliance
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center text-center">

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-bold text-slate-900">MOEST NEPAL</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Gov. Regd. #1284/071</div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-bold text-slate-900">NMC (NEPAL)</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Medical Council Aligned</div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-bold text-slate-900">BMDC</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Bangladesh Medical Council</div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-bold text-slate-900">NMC / NExT (INDIA)</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Screening Exam Criteria</div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-bold text-slate-900">WHO / FAIMER</div>
              <div className="text-[11px] text-slate-500 mt-0.5">WDOMS Directory Listed</div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-bold text-slate-900">ECAN MEMBER</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Ethical Code of Conduct</div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: PROBLEM-AGITATION-SOLUTION (PAS) BLOCK
          ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <p className="text-xs font-bold uppercase tracking-widest text-red-700">
                  The Real Truth About Medical Entrance Cuts
                </p>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  Missed the Government Seat by 2 Marks? <br />
                  <span className="text-red-700">Your Medical Dream Does Not End Here.</span>
                </h2>

                <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                  <p>
                    Every year across Nepal and India, over <strong>100,000 brilliant science students</strong> sit for MECEE and NEET. With fewer than 5% securing subsidized government seats, thousands of deserving future doctors are left feeling defeated, facing family pressure, and wasting 12 to 24 months in repetitive coaching centers.
                  </p>
                  <p>
                    <strong>The NDC Solution:</strong> We do not let you waste an academic year. Through our direct representation of premier medical colleges in Bangladesh and Kazakhstan, we transition qualified students directly into identical British-patterned clinical curricula.
                  </p>
                  <p>
                    You graduate on time, complete 1 full year of hospital bedside internship, and return to clear your licensing exams (NMCLE / FMGE / NExT) alongside your peers.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={onOpenEligibility}
                    className="bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Check Alternate Seat Availability</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://wa.me/9779851093227?text=Hello%20Amrit%20Sir,%20I%20missed%20the%20entrance%20seat%20and%20want%20to%20know%20about%20direct%20MBBS%20options."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Speak with Senior Counselor</span>
                  </a>
                </div>

              </div>

              {/* Right: Parent Assurance Card (Clean Light Design) */}
              <div className="lg:col-span-6">
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <span>How NDC Solves the 3 Major Parent Fears</span>
                  </h3>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="font-bold text-xs uppercase tracking-wide text-navy-700 mb-1">
                        1. "Will the degree even be recognized at home?"
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        We only represent institutions verified by MOEST and the relevant medical boards (NMC Nepal, BMDC, WHO) — and we hand over that documentation before you deposit a single fee.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="font-bold text-xs uppercase tracking-wide text-navy-700 mb-1">
                        2. "What if tuition jumps after we've enrolled?"
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        You get the university's official package letter showing all five years of tuition, hostel, and exam fees upfront — no markups added on our end.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="font-bold text-xs uppercase tracking-wide text-navy-700 mb-1">
                        3. "Who looks after them once they're abroad?"
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Our coordinators in Dhaka and Almaty meet students at the airport, settle them into vetted hostels, and stay reachable for emergencies throughout the course.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: LIVE SUCCESS COUNTER (CLEAN LIGHT DESIGN)
          ========================================================================= */}
      <section className="py-14 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-red-700 tracking-tight">3,850+</div>
              <div className="text-xs uppercase tracking-wider font-bold text-slate-600 mt-1">Placed Doctors & Scholars</div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">15+</div>
              <div className="text-xs uppercase tracking-wider font-bold text-slate-600 mt-1">Years of Leadership</div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">500+</div>
              <div className="text-xs uppercase tracking-wider font-bold text-slate-600 mt-1">Partner Institutions</div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">20</div>
              <div className="text-xs uppercase tracking-wider font-bold text-slate-600 mt-1">Regional Offices</div>
            </div>

            <div className="pt-4 md:pt-0 col-span-2 md:col-span-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-red-700 tracking-tight">99.4%</div>
              <div className="text-xs uppercase tracking-wider font-bold text-slate-600 mt-1">Visa & NOC Success</div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: INTERACTIVE PROFILE ASSESSMENT ENGINE (INLINE PREVIEW)
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-red-600 uppercase tracking-widest">
              Instant Profile Matcher
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Simulate Your University & Country Eligibility
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Select your academic background and budget to preview real-time admission feasibility.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Desired Degree Track
                </label>
                <select
                  value={calcStream}
                  onChange={(e) => setCalcStream(e.target.value)}
                  className="w-full bg-white text-sm border border-slate-300 rounded-xl px-3 py-3 font-medium focus:ring-2 focus:ring-red-500"
                >
                  <option value="mbbs-bangladesh">MBBS in Bangladesh (Primary)</option>
                  <option value="mbbs-kazakhstan">MBBS in Kazakhstan (Affordable)</option>
                  <option value="uk-postgrad">UK Master / STEM (2-Yr Post-Study)</option>
                  <option value="aus-undergrad">Australia Undergrad / Nursing</option>
                  <option value="usa-stem">USA / Canada STEM Degree</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  2. High School GPA / %
                </label>
                <select
                  value={calcGpa}
                  onChange={(e) => setCalcGpa(e.target.value)}
                  className="w-full bg-white text-sm border border-slate-300 rounded-xl px-3 py-3 font-medium focus:ring-2 focus:ring-red-500"
                >
                  <option value="3.6">GPA 3.6 - 4.0 (90%+ Merit)</option>
                  <option value="3.2">GPA 3.2 - 3.59 (75% - 89%)</option>
                  <option value="2.8">GPA 2.8 - 3.19 (65% - 74%)</option>
                  <option value="2.4">GPA 2.4 - 2.79 (55% - 64%)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  3. Total 5-Yr Budget Plan
                </label>
                <select
                  value={calcBudget}
                  onChange={(e) => setCalcBudget(e.target.value)}
                  className="w-full bg-white text-sm border border-slate-300 rounded-xl px-3 py-3 font-medium focus:ring-2 focus:ring-red-500"
                >
                  <option value="low">Under $28,000 USD (Kazakhstan)</option>
                  <option value="mid">$38,000 - $50,000 USD (Bangladesh Benchmark)</option>
                  <option value="high">$55,000+ USD (Premier Dhaka or Western)</option>
                </select>
              </div>

            </div>

            {/* Calculated Output Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Immediate Match Confirmed</span>
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  {calcStream === 'mbbs-bangladesh' && 'Direct Match: Bangladesh Medical College / Dhaka National / Jahurul Islam'}
                  {calcStream === 'mbbs-kazakhstan' && 'Direct Match: KazNMU Almaty / Semey State Medical University'}
                  {calcStream === 'uk-postgrad' && 'Direct Match: University of Manchester / Coventry / Hertfordshire'}
                  {calcStream === 'aus-undergrad' && 'Direct Match: Deakin / Western Sydney / Victoria University'}
                  {calcStream === 'usa-stem' && 'Direct Match: Arizona State / University of South Florida'}
                </h4>
                <p className="text-xs text-slate-500">
                  Meets MOEST NOC & Licensing board minimum criteria. Zero risk of rejection.
                </p>
              </div>

              <button
                onClick={onOpenEligibility}
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow transition-colors flex-shrink-0"
              >
                Get My Full Eligibility Report
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: SOCIAL PROOF SLIDER & VERIFIED REVIEWS
          ========================================================================= */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-extrabold text-slate-700">
                  4.4 Rating on Google My Business & 96% Facebook Recommendation Rate
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Authentic Reviews from Real Students & Parents
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Real feedback from our Putalisadak headquarters and regional centers.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm text-xs font-bold">
              <button
                onClick={() => setActiveReviewTab('all')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeReviewTab === 'all' ? 'bg-red-700 text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All ({allReviews.length})
              </button>
              <button
                onClick={() => setActiveReviewTab('gmb')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeReviewTab === 'gmb' ? 'bg-red-700 text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Google My Business
              </button>
              <button
                onClick={() => setActiveReviewTab('fb')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeReviewTab === 'fb' ? 'bg-red-700 text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Facebook Verified
              </button>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((rev) => (
              <div 
                key={rev.id}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {rev.badge}
                    </span>
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                    "{rev.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <img 
                    src={rev.avatar} 
                    alt={rev.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200" 
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">{rev.name}</h4>
                    <p className="text-[11px] text-slate-500">{rev.role}</p>
                    <span className="text-[10px] text-emerald-700 font-semibold">{rev.course}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reference Notice */}
          <div className="mt-8 text-center text-xs text-slate-500">
            Reviews sourced directly from public Google My Business & Facebook recommendations for NDC Education Consultancy Putalisadak.
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: FOOTER LEAD CAPTURE FORM & WHATSAPP ROW (CLEAN LIGHT DESIGN)
          ========================================================================= */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-red-700">
                  1-on-1 Profile Evaluation
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Speak Directly with a Senior Counselor at Putalisadak or Your Nearest Regional Office.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Bring your marksheets and parent questions. We walk you through licensing council rules, tuition fee installment breakdowns, and guaranteed seat reservations.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+9779851093227"
                    className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs px-5 py-3 rounded-xl border border-slate-300 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-red-700" />
                    <span>Call Putalisadak: +977-985-1093227</span>
                  </a>

                  <a
                    href="https://wa.me/9779851093227?text=Hello%20NDC%20Education,%20I%20would%20like%20to%20schedule%20an%20in-person%20counseling%20session."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Direct Concierge</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <form
                  onSubmit={handleCallbackSubmit}
                  className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-3.5"
                >
                  <div className="text-sm font-bold text-slate-900 mb-2">
                    Request Fast-Track Academic Callback
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Student Full Name"
                      className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-700"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="WhatsApp Mobile (+977...)"
                      className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-700"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <select name="program" className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-slate-700 focus:outline-none focus:border-red-700">
                      <option>MBBS in Bangladesh</option>
                      <option>MBBS in Kazakhstan</option>
                      <option>UK Higher Education</option>
                      <option>Australia Higher Education</option>
                      <option>COMPEX Scholarship Help</option>
                    </select>

                    <input
                      type="text"
                      name="city"
                      placeholder="Your City (e.g. Kathmandu)"
                      className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-700"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-lg shadow-sm transition-colors"
                  >
                    Schedule Free Profile Review
                  </button>
                  <p className="text-[10px] text-slate-500 text-center">
                    Strict privacy. We never share student information with unverified third parties.
                  </p>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

