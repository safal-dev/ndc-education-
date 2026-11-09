import React from 'react';
import { 
  Compass, FileCheck, ShieldCheck, Home, ArrowRight, 
  CheckCircle2, Clock, Sparkles, Building2, 
  Phone, UserCheck, Plane, Award
} from 'lucide-react';
import { servicesData } from '../data/services';

export default function ServicesPage({ onOpenEligibility }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-7 h-7 text-red-700" />;
      case 'FileCheck': return <FileCheck className="w-7 h-7 text-red-700" />;
      case 'ShieldCheck': return <ShieldCheck className="w-7 h-7 text-red-700" />;
      case 'Home': return <Home className="w-7 h-7 text-red-700" />;
      default: return <Sparkles className="w-7 h-7 text-red-700" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* =========================================================================
          SECTION 1: SERVICE VALUE PROPOSITION HERO (CLEAN LIGHT EDITORIAL)
          ========================================================================= */}
      <section className="bg-white text-slate-900 min-h-[90vh] flex items-center border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">

          <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-4">
            Full-Service Admissions Support • Profiling to Arrival
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
                An offer letter is the easy part. <span className="text-red-700">We handle everything after it, too.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
                From the first marksheet you bring into our Putalisadak office to the day you unlock your apartment door abroad, we stay on your paperwork, ministry clearances, and welfare at every step.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onOpenEligibility}
                  className="bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-xs transition-all flex items-center gap-2"
                >
                  <span>Initiate Academic Profiling</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:+9779851093227"
                  className="bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-red-700" />
                  <span>Talk to Admissions Desk</span>
                </a>
              </div>
            </div>

            {/* Process Snapshot Card (Clean Light Design, matches Medical/Western hub heroes) */}
            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="text-xs font-bold text-red-700 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>The 4 Phases, Start to Finish</span>
              </div>
              <div className="space-y-2 text-xs">
                {servicesData.map((srv) => (
                  <div key={srv.id} className="flex justify-between border-b border-slate-200 pb-2 last:border-b-0 last:pb-0">
                    <span className="text-slate-500">{srv.phase}: {srv.badge}</span>
                    <span className="font-bold text-slate-800">{srv.timeframe}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTIONS 2 - 5: THE 4-PHASE LOGISTICS ROADMAP
          ========================================================================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {servicesData.map((srv, idx) => (
            <div 
              key={srv.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 rounded-3xl border border-slate-200 bg-slate-50/70 shadow-xs"
            >
              
              {/* Left Column: Phase Details */}
              <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-extrabold text-red-700 uppercase tracking-widest">
                    {srv.phase}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    {srv.badge}
                  </span>
                  <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{srv.timeframe}</span>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {srv.title}
                </h2>

                <p className="text-sm font-semibold text-slate-700">
                  {srv.subtitle}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {srv.description}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Core Operational Deliverables:
                  </div>
                  {srv.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Clean White Execution Protocol Card */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="bg-white text-slate-900 p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-left">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {getIcon(srv.icon)}
                  </div>

                  <h3 className="font-extrabold text-lg text-slate-900">
                    {srv.phase}: Execution Protocol
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    Supervised directly by licensed documentation specialists and regional coordinators across Kathmandu and target foreign institutions.
                  </p>

                  <div className="pt-3 border-t border-slate-100 text-xs text-emerald-700 font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>100% MOEST & Embassy Compliant</span>
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* Amber Housing Network Feature Block (Clean Light Design) */}
      <section className="py-16 bg-slate-50 text-slate-900 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-800">
                  Verified Accommodation Partner
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Official Partnership with Amber Student Housing
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Finding clean, safe, and reasonably priced housing in London, Manchester, Sydney, or Melbourne from Kathmandu can be stressful. NDC Education’s tie-up with <strong>Amber</strong> allows students to view 3D virtual room tours, reserve apartments, and sign verified tenancy contracts before booking flights.
                </p>
              </div>

              <div className="lg:col-span-4 text-center sm:text-right">
                <button
                  onClick={onOpenEligibility}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-xs transition-colors"
                >
                  Inquire About Student Housing
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
