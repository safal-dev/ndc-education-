import React, { useState } from 'react';
import { X, Download, CheckCircle, FileText, Sparkles, BookOpen } from 'lucide-react';

export default function ScholarshipModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    scholarshipInterest: 'COMPEX Scholarship (Embassy of India)'
  });
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e) => {
    e.preventDefault();
    const message = `Hello NDC Education, I would like to receive the Entrance & Scholarship Preparation Toolkit.\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Interested Scheme: ${formData.scholarshipInterest}`;
    window.open(`https://wa.me/9779851093227?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setDownloaded(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full border border-slate-200 relative overflow-hidden">
        
        {/* Banner */}
        <div className="bg-slate-50 border-b border-slate-200 text-slate-900 p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <p className="text-xs font-bold uppercase tracking-widest text-gold-800 mb-1">
            Free Verified Resource Pack
          </p>

          <h3 className="text-xl font-extrabold tracking-tight text-slate-900">
            Download 2026/2027 Entrance & Scholarship Toolkit
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Complete COMPEX past year papers, MECEE eligibility checklist & Bangladesh SAARC quota guidelines.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {!downloaded ? (
            <form onSubmit={handleDownload} className="space-y-4">
              <div className="space-y-2 text-xs text-slate-600 bg-gold-50/70 p-3 rounded-lg border border-gold-200">
                <div className="font-bold text-gold-900 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-gold-700" />
                  <span>Toolkit Includes:</span>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-700">
                  <li>Indian Embassy COMPEX exam format, syllabus & sample CBT questions</li>
                  <li>MEC Eligibility Certificate & MOEST NOC filing roadmap</li>
                  <li>Bangladesh Medical Colleges transparent fee schedule breakdown</li>
                </ul>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Target Program
                </label>
                <select 
                  value={formData.scholarshipInterest}
                  onChange={(e) => setFormData({...formData, scholarshipInterest: e.target.value})}
                  className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 bg-white"
                >
                  <option value="COMPEX Scholarship (Embassy of India)">COMPEX Scholarship (Indian Embassy)</option>
                  <option value="MECEE-BL / Medical Entrance Resource">MECEE-BL / Medical Education Commission</option>
                  <option value="Bangladesh SAARC Quota Guidelines">Bangladesh Government SAARC Medical Quota</option>
                  <option value="Western University Merit Scholarships">Western University Merit Grants (UK/Australia)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Full Name
                </label>
                <input 
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g. Suman Nepal"
                  className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2 focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    WhatsApp Number
                  </label>
                  <input 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+977-98XXXXXXXX"
                    className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2 focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="student@example.com"
                    className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2 focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                    required
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gold-600 hover:bg-gold-700 text-white font-bold py-2.5 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors shadow"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Free Preparation Toolkit (PDF)</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-150">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  Request Sent to WhatsApp!
                </h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto mt-1">
                  We've opened WhatsApp with your request for the <strong>{formData.scholarshipInterest}</strong> toolkit pre-filled — just hit send and our desk will deliver it directly.
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="bg-red-700 hover:bg-red-800 text-white text-xs font-bold px-6 py-2 rounded-lg transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

