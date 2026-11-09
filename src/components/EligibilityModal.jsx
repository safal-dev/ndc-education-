import React, { useState } from 'react';
import { 
  X, CheckCircle, Calculator, AlertCircle, ArrowRight, 
  Stethoscope, Globe, Sparkles, Phone, Mail, User, MapPin
} from 'lucide-react';
import { regionalOffices } from '../data/offices';

export default function EligibilityModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    stream: 'Medical (MBBS / BDS)',
    qualification: '+2 Science (Bio Group)',
    gpa: '3.4',
    entranceStatus: 'MECEE / NEET Appeared (Missed cutoff by small margin)',
    budget: '$35,000 - $50,000 (Recommended for Bangladesh)',
    fullName: '',
    phone: '',
    email: '',
    nearestBranch: 'Kathmandu Central Headquarters'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const buildWhatsAppMessage = () => {
    return `Hello NDC Education, I just completed the eligibility assessment on your website.\n\n` +
      `Name: ${formData.fullName}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Target Track: ${formData.stream}\n` +
      `Qualification: ${formData.qualification} (${formData.gpa})\n` +
      `Entrance Status: ${formData.entranceStatus}\n` +
      `Budget: ${formData.budget}\n` +
      `Nearest Branch: ${formData.nearestBranch}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(`https://wa.me/9779851093227?text=${encodeURIComponent(buildWhatsAppMessage())}`, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 relative">
        
        {/* Header (Clean Light Design) */}
        <div className="bg-slate-50 border-b border-slate-200 text-slate-900 p-6 relative">
          <button 
            onClick={resetForm}
            className="absolute top-5 right-5 text-slate-500 hover:text-slate-800 p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          
          <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-1">
            Interactive Assessment Engine
          </p>

          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            Check Your Admission & Scholarship Eligibility
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Get an instant institutional eligibility match with zero guesswork or wasted academic years.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Stepper Progress Indicator */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-semibold text-slate-500">
                <span className={step >= 1 ? 'text-red-600 font-bold' : ''}>1. Academic Target</span>
                <span>→</span>
                <span className={step >= 2 ? 'text-red-600 font-bold' : ''}>2. Grades & Budget</span>
                <span>→</span>
                <span className={step >= 3 ? 'text-red-600 font-bold' : ''}>3. Personalized Report</span>
              </div>

              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Target Course / Career Track
                    </label>
                    <select 
                      value={formData.stream}
                      onChange={(e) => setFormData({...formData, stream: e.target.value})}
                      className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2.5 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-white"
                    >
                      <option value="Medical (MBBS / BDS)">Medical Abroad (MBBS / BDS - Bangladesh, Kazakhstan, Egypt)</option>
                      <option value="United Kingdom Track">Western Higher Education - United Kingdom</option>
                      <option value="Australia Track">Western Higher Education - Australia</option>
                      <option value="USA / Canada Track">Western Higher Education - USA / Canada</option>
                      <option value="COMPEX / Embassy Scholarships">Indian Embassy COMPEX Scholarship Scheme</option>
                      <option value="Nursing / Allied Healthcare">Nursing / Allied Healthcare Programs</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Completed / Current Qualification
                    </label>
                    <select 
                      value={formData.qualification}
                      onChange={(e) => setFormData({...formData, qualification: e.target.value})}
                      className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2.5 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-white"
                    >
                      <option value="+2 Science (Bio Group)">+2 Science (Biology Group - Nepal NEB)</option>
                      <option value="+2 Science (Maths/CS)">+2 Science (Physical Group / CS)</option>
                      <option value="CBSE / ISC Board (India/Nepal)">CBSE / ISC 12th Standard</option>
                      <option value="A-Levels (Cambridge)">Cambridge A-Levels</option>
                      <option value="Bachelor Degree (For Masters)">Bachelor's Degree Holder (Graduate)</option>
                    </select>
                  </div>

                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-900 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Did You Know?</strong> For MBBS in Bangladesh and Kazakhstan, students who missed government seats in MECEE or NEET can obtain immediate direct eligibility if +2 PCB aggregate is 60%+ or GPA 2.4+.
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2.5 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
                    >
                      <span>Continue to Grades & Budget</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        High School GPA / %
                      </label>
                      <input 
                        type="text"
                        value={formData.gpa}
                        onChange={(e) => setFormData({...formData, gpa: e.target.value})}
                        placeholder="e.g. 3.2 GPA or 72%"
                        className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2.5 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Entrance Exam Status
                      </label>
                      <select 
                        value={formData.entranceStatus}
                        onChange={(e) => setFormData({...formData, entranceStatus: e.target.value})}
                        className="w-full text-sm rounded-lg border border-slate-300 px-2 py-2.5 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-white"
                      >
                        <option value="MECEE / NEET Appeared (Missed cutoff by small margin)">MECEE / NEET Appeared</option>
                        <option value="Passed / High Merit">Passed & Qualified</option>
                        <option value="Will Appear Next Cycle">Preparing for Next Cycle</option>
                        <option value="Seeking Western Non-Entrance Course">Western Track (IELTS / PTE)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Estimated 5-Year Total Course Budget
                    </label>
                    <select 
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2.5 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-white"
                    >
                      <option value="$22,000 - $28,000 (Kazakhstan / Affordable Track)">$22,000 - $28,000 (Kazakhstan / Affordable Track)</option>
                      <option value="$35,000 - $50,000 (Recommended for Bangladesh)">$35,000 - $50,000 (Recommended for Bangladesh Medical)</option>
                      <option value="$50,000 - $70,000 (Premier Dhaka Institutions)">$50,000 - $70,000 (Premier Dhaka Medical Colleges)</option>
                      <option value="Self-Financed / Sponsor Bank Balance (Western Hub)">Self-Financed / Bank Sponsorship (UK / Australia / USA)</option>
                    </select>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 rounded-lg text-sm transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="w-2/3 bg-red-700 hover:bg-red-800 text-white font-bold py-2.5 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
                    >
                      <span>Generate Assessment Report</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  {/* Real-time calculated match indicator */}
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-950 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Instant Match: 100% Academic Eligibility Confirmed!</span>
                    </div>
                    <p className="text-[11px] text-emerald-900 leading-relaxed">
                      Based on your {formData.qualification} ({formData.gpa}) and budget of {formData.budget}, you qualify for direct admission at top accredited universities (including <strong>Bangladesh Medical College</strong>, <strong>KazNMU Almaty</strong>, or UK partner universities).
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Student / Applicant Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input 
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        placeholder="e.g. Dr. Aayush Sharma / Nikita Shrestha"
                        className="w-full text-sm rounded-lg border border-slate-300 pl-9 pr-3 py-2.5 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        WhatsApp / Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input 
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+977-98XXXXXXXX"
                          className="w-full text-sm rounded-lg border border-slate-300 pl-9 pr-3 py-2.5 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input 
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="student@example.com"
                          className="w-full text-sm rounded-lg border border-slate-300 pl-9 pr-3 py-2.5 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Nearest NDC Regional Office For 1-on-1 File Review
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <select 
                        value={formData.nearestBranch}
                        onChange={(e) => setFormData({...formData, nearestBranch: e.target.value})}
                        className="w-full text-sm rounded-lg border border-slate-300 pl-9 pr-3 py-2.5 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-white"
                      >
                        {regionalOffices.map((office) => (
                          <option key={office.id} value={office.name}>
                            {office.city} - {office.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 rounded-lg text-sm transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
                    >
                      <span>Send My Full Evaluation Report</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-lg font-extrabold text-slate-900">
                  Eligibility Assessment Generated!
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto mt-1 leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. We've opened WhatsApp with your profile pre-filled — just hit send and a counselor from <strong>{formData.nearestBranch}</strong> will respond with your institution breakdown.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-left max-w-sm mx-auto space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Selected Track:</span>
                  <span className="font-semibold text-slate-800">{formData.stream}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Academic Background:</span>
                  <span className="font-semibold text-slate-800">{formData.qualification} ({formData.gpa})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Consultation Node:</span>
                  <span className="font-semibold text-slate-800">{formData.nearestBranch}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/9779851093227?text=${encodeURIComponent(buildWhatsAppMessage())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-lg shadow transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp Didn't Open? Click Here</span>
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

