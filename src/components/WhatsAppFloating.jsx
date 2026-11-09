import React, { useState } from 'react';
import { MessageCircle, X, Stethoscope, Globe, PhoneCall } from 'lucide-react';

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Popup Menu */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <span className="w-2.5 h-2.5 bg-emerald-300 rounded-full absolute -top-0.5 -right-0.5 ring-2 ring-emerald-600 animate-pulse"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">NDC Direct Concierge</h4>
                <p className="text-[11px] text-emerald-100">Live with Senior Advisors</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-emerald-100 hover:text-white p-1 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3 bg-slate-50 text-xs text-slate-600 border-b border-slate-100">
            Select your preferred consultation desk for instantaneous response:
          </div>

          <div className="p-2 space-y-1.5">
            {/* Medical Abroad Track Route */}
            <a
              href="https://wa.me/9779851093227?text=Hello%20NDC%20Education,%20I%20am%20inquiring%20about%20Medical%20Admissions%20(MBBS%20in%20Bangladesh/Kazakhstan)."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-emerald-50 transition-colors group"
            >
              <div className="p-2 bg-red-100 text-red-600 rounded-lg group-hover:scale-105 transition-transform">
                <Stethoscope className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800 group-hover:text-emerald-700">
                  Medical Abroad Desk
                </div>
                <p className="text-[11px] text-slate-500">
                  Bangladesh, Kazakhstan, Egypt (MBBS / BDS admissions)
                </p>
              </div>
            </a>

            {/* Western Study Track Route */}
            <a
              href="https://wa.me/9779851093227?text=Hello%20NDC%20Education,%20I%20am%20inquiring%20about%20Western%20Study%20(UK/Australia/USA)."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-emerald-50 transition-colors group"
            >
              <div className="p-2 bg-navy-100 text-navy-700 rounded-lg group-hover:scale-105 transition-transform">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800 group-hover:text-emerald-700">
                  Western Study Desk
                </div>
                <p className="text-[11px] text-slate-500">
                  UK, Australia, USA, Canada admissions & visa files
                </p>
              </div>
            </a>

            {/* Direct Putalisadak Call Option */}
            <a
              href="tel:+9779851093227"
              className="flex items-center gap-2 p-2 text-xs font-semibold text-slate-700 hover:text-slate-900 justify-center border-t border-slate-100 mt-1"
            >
              <PhoneCall className="w-3.5 h-3.5 text-red-600" />
              <span>Call Head Office: +977-985-1093227</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Toggle Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6" />
          <span className="w-2.5 h-2.5 bg-emerald-300 rounded-full absolute -top-1 -right-1 ring-2 ring-emerald-600 animate-ping"></span>
        </div>
        <span className="text-xs font-bold tracking-wide uppercase pr-1">
          {isOpen ? 'Close' : 'Chat on WhatsApp'}
        </span>
      </button>
    </div>
  );
}

