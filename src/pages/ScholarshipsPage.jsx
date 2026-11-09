import React, { useState } from 'react';
import { 
  Award, Download, Clock, CheckCircle2, AlertCircle, 
  FileText, ArrowRight, ShieldCheck, HelpCircle, BookOpen, 
  Sparkles, Calendar, School, CheckSquare
} from 'lucide-react';
import { scholarshipsData } from '../data/scholarships';

export default function ScholarshipsPage({ onOpenScholarship, onOpenEligibility }) {
  const [selectedScheme, setSelectedScheme] = useState(scholarshipsData.activeRoster[0].id);

  // COMPEX Simulator States
  const [compexStream, setCompexStream] = useState('engineering');
  const [physicsMark, setPhysicsMark] = useState(72);
  const [chemMark, setChemMark] = useState(68);
  const [mathBioMark, setMathBioMark] = useState(75);
  const [englishMark, setEnglishMark] = useState(70);

  const compexAggregate = Math.round((Number(physicsMark) + Number(chemMark) + Number(mathBioMark)) / 3);
  const isCompexEligible = compexAggregate >= 60 && Number(englishMark) >= 50;
  const isHighMerit = compexAggregate >= 75;

  const activeScheme = scholarshipsData.activeRoster.find(s => s.id === selectedScheme) || scholarshipsData.activeRoster[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* =========================================================================
          SECTION 1: ACTIVE ROSTER HERO SECTION (CLEAN LIGHT DESIGN)
          ========================================================================= */}
      <section className="bg-white text-slate-900 min-h-[90vh] flex items-center border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-gold-800 mb-4">
              Real-Time Entrance & Scholarship Tracking
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
              COMPEX & MECEE <span className="text-gold-700">Resource Center</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mt-4">
              Authorized guidance for the <strong>Embassy of India COMPEX Scholarship Scheme</strong>, <strong>MECEE-BL examination cycles</strong>, and Bangladesh government <strong>SAARC quotas</strong>. Don't let bureaucratic paperwork errors forfeit your merit seat.
            </p>

            <div className="pt-6 flex flex-wrap justify-center gap-4">
              <button
                onClick={onOpenScholarship}
                className="bg-gold-600 hover:bg-gold-700 text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-xs transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Free 2026/27 Scholarship Toolkit</span>
              </button>

              <button
                onClick={onOpenEligibility}
                className="bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-colors flex items-center gap-2"
              >
                <Award className="w-4 h-4 text-gold-700" />
                <span>Verify Your Scholarship Marks</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Active Scheme Spotlight */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Scheme Switcher Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {scholarshipsData.activeRoster.map((roster) => (
              <div
                key={roster.id}
                onClick={() => setSelectedScheme(roster.id)}
                className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                  selectedScheme === roster.id
                    ? 'border-gold-600 bg-gold-50/50 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-gold-800 uppercase tracking-wider">
                    {roster.badge}
                  </span>
                  <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-600" />
                    <span>Tracking Active</span>
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{roster.title}</h3>
                <p className="text-xs text-slate-600 line-clamp-2">{roster.eligibilitySummary}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200">
            <div className="max-w-4xl mx-auto space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <span className="text-xs font-extrabold text-gold-700 uppercase tracking-widest">
                    Active Scheme Details
                  </span>
                  <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
                    {activeScheme.title}
                  </h2>
                </div>
                <div className="bg-gold-100 text-gold-900 px-3.5 py-1.5 rounded-lg text-xs font-bold self-start sm:self-auto">
                  {activeScheme.deadline}
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {activeScheme.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Courses Covered Under This Scheme:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeScheme.coveredCourses.map((c, idx) => (
                    <span 
                      key={idx}
                      className="text-xs font-semibold bg-white text-slate-800 border border-slate-300 px-3 py-1.5 rounded-lg shadow-sm"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-gold-50 border border-gold-200 rounded-xl text-xs text-gold-950 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-gold-900">
                  <ShieldCheck className="w-4 h-4 text-gold-700" />
                  <span>How NDC Education Assists Your Scholarship File:</span>
                </div>
                <p className="leading-relaxed text-slate-700">
                  {activeScheme.ndcSupport}
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: SCHOLARSHIP ELIGIBILITY CRITERIA ENGINE
          ========================================================================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-red-600 uppercase tracking-widest">
              Mark Thresholds & Paperwork
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Minimum Academic Cutoffs & Required Documents
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Review the strict threshold rules to confirm if you qualify for embassy scheme applications or self-financed NOC clearances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scholarshipsData.criteriaMatrix.map((crit, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-gold-700 bg-gold-50 px-2.5 py-1 rounded-md inline-block mb-2">
                    {crit.program.split('(')[0]}
                  </div>
                  <h3 className="font-bold text-base text-slate-900 mb-3">{crit.program}</h3>

                  <div className="space-y-3 text-xs text-slate-600">
                    <div>
                      <span className="font-bold text-slate-800 block">High School Science Criteria:</span>
                      <p className="mt-0.5">{crit.minPlus2}</p>
                    </div>

                    <div>
                      <span className="font-bold text-slate-800 block">SEE / 10th Criteria:</span>
                      <p className="mt-0.5">{crit.minSEE}</p>
                    </div>

                    <div>
                      <span className="font-bold text-slate-800 block">Examination Blueprint:</span>
                      <p className="mt-0.5">{crit.examPattern}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[11px] text-slate-500 font-bold block mb-1">Mandatory Filing Files:</span>
                  <p className="text-[11px] text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    {crit.mandatoryDocs}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive COMPEX Score & Merit Simulator */}
          <div className="mt-12 bg-gradient-to-br from-gold-50 via-white to-slate-50 border-2 border-gold-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gold-800 mb-1">
                  Embassy of India Merit Predictor
                </p>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Interactive COMPEX Scholarship Eligibility Simulator
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Enter your expected or achieved marks to simulate aggregate scores against Indian Embassy cutoff rules:
                </p>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center flex-shrink-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">PCB / PCM Aggregate</span>
                <span className={`text-2xl font-black ${isCompexEligible ? 'text-gold-600' : 'text-red-600'}`}>
                  {compexAggregate}%
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Target Course
                </label>
                <select
                  value={compexStream}
                  onChange={(e) => setCompexStream(e.target.value)}
                  className="w-full text-xs font-semibold bg-white border border-slate-300 rounded-xl px-2.5 py-2.5 focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                >
                  <option value="engineering">B.E. / B.Tech (PCM)</option>
                  <option value="pharmacy">B.Pharmacy (PCB/PCM)</option>
                  <option value="nursing">B.Sc Nursing (PCB)</option>
                  <option value="agriculture">B.Sc Agriculture (PCB)</option>
                </select>
                <span className="text-[10px] text-slate-500 mt-0.5 block">Embassy quota discipline</span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Physics (%)
                </label>
                <input 
                  type="number"
                  min="0"
                  max="100"
                  value={physicsMark}
                  onChange={(e) => setPhysicsMark(e.target.value)}
                  className="w-full text-xs font-semibold bg-white border border-slate-300 rounded-xl px-2.5 py-2.5 focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                />
                <span className="text-[10px] text-slate-500 mt-0.5 block">Theory + Practical</span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Chemistry (%)
                </label>
                <input 
                  type="number"
                  min="0"
                  max="100"
                  value={chemMark}
                  onChange={(e) => setChemMark(e.target.value)}
                  className="w-full text-xs font-semibold bg-white border border-slate-300 rounded-xl px-2.5 py-2.5 focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                />
                <span className="text-[10px] text-slate-500 mt-0.5 block">Theory + Practical</span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {compexStream === 'engineering' ? 'Maths (%)' : 'Biology (%)'}
                </label>
                <input 
                  type="number"
                  min="0"
                  max="100"
                  value={mathBioMark}
                  onChange={(e) => setMathBioMark(e.target.value)}
                  className="w-full text-xs font-semibold bg-white border border-slate-300 rounded-xl px-2.5 py-2.5 focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                />
                <span className="text-[10px] text-slate-500 mt-0.5 block">Core Science subject</span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  English (%)
                </label>
                <input 
                  type="number"
                  min="0"
                  max="100"
                  value={englishMark}
                  onChange={(e) => setEnglishMark(e.target.value)}
                  className="w-full text-xs font-semibold bg-white border border-slate-300 rounded-xl px-2.5 py-2.5 focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                />
                <span className="text-[10px] text-slate-500 mt-0.5 block">Mandatory Min: 50%</span>
              </div>
            </div>

            {/* Simulated Result Box */}
            <div className={`p-5 rounded-2xl border text-xs leading-relaxed flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
              isCompexEligible 
                ? 'bg-gold-50/80 border-gold-300 text-gold-950' 
                : 'bg-red-50/80 border-red-300 text-red-950'
            }`}>
              <div className="space-y-1">
                <div className="font-extrabold text-sm flex items-center gap-1.5">
                  {isCompexEligible ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="text-gold-900">
                        {isHighMerit ? '🌟 High-Merit Potential: Strong Contender for Premier NITs / Central Universities!' : '✅ Meets Mandatory COMPEX Threshold (Minimum 60% Aggregate)'}
                      </span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <span className="text-red-800">Below Mandatory Threshold (Requires 60% in Science Aggregate & 50% in English)</span>
                    </>
                  )}
                </div>
                <p className="text-[11px] text-slate-700">
                  {isHighMerit && 'Your estimated aggregate qualifies you to target top NITs (NIT Trichy, Surathkal, Warangal) under Embassy allocation. NDC provides mock CBT modules at Putalisadak.'}
                  {!isHighMerit && isCompexEligible && 'You fulfill the basic eligibility requirements. Strong performance in the embassy CBT exam is required to secure state-allotted scholarship quotas.'}
                  {!isCompexEligible && 'Students below 60% can consult NDC for direct subsidized regional and international university options without losing their academic year.'}
                </p>
              </div>

              <button
                onClick={onOpenScholarship}
                className="bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-xs transition-colors flex-shrink-0"
              >
                Claim Mock CBT Papers
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: APPLICATION ASSISTANCE PIPELINE
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600">
                Prevent Technical Disqualifications
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Over 35% of Scholarship Files Are Rejected Due to Incomplete Notarization.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The Indian Embassy and DGHS portals have zero tolerance for minor spelling mismatches, unnotarized translation certificates, or expired character documents. NDC Education’s document verification desk vets every single page before official submission.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Cross-verification of name and birthdate across Citizenship, Passport & Marksheets</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Authorized translation into English with legal notary authentication</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Physical application voucher submission and token verification</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-50 text-slate-900 p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gold-100 text-gold-900 rounded-xl font-bold">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Need Personal File Review?</h3>
                  <p className="text-xs text-slate-500">Bring your original certificates to our Putalisadak office.</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Our senior counselors evaluate your percentile and provide honest feedback on whether you should target the competitive COMPEX scholarship, government SAARC quota, or direct accredited medical seats.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenEligibility}
                  className="w-full bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-colors shadow-xs"
                >
                  Book In-Person Scholarship Evaluation
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: DEDICATED SCHOLARSHIP GUIDE DOWNLOAD LEAD MAGNET
          ========================================================================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

              <div className="md:col-span-7 space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-gold-800">
                  Instant Free PDF Download
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  Get the Complete 2026/2027 Entrance Preparation Toolkit
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Includes COMPEX CBT question patterns, previous year cutoff marks, MECEE-BL eligibility flowchart, and Bangladesh Medical Colleges fee guide.
                </p>
                <div className="pt-2">
                  <button
                    onClick={onOpenScholarship}
                    className="bg-gold-600 hover:bg-gold-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-xs transition-colors inline-flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Full Toolkit Now (Free)</span>
                  </button>
                </div>
              </div>

              <div className="md:col-span-5 bg-slate-50 text-slate-900 p-6 rounded-2xl border border-slate-200 space-y-3 text-xs">
                <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                  <CheckSquare className="w-4 h-4 text-emerald-600" />
                  <span>Instant Delivery via WhatsApp & Email:</span>
                </div>
                <ul className="space-y-1.5 text-slate-600">
                  <li>• Official COMPEX syllabus breakdown</li>
                  <li>• Sample computer-based mock questions</li>
                  <li>• MOEST NOC step-by-step tutorial</li>
                  <li>• List of all 500+ partner universities</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

