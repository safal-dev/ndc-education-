import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, 
  Search, CheckCircle2, Building2, User, ChevronDown, 
  ChevronUp, ArrowRight, ExternalLink, ShieldCheck
} from 'lucide-react';
import { regionalOffices } from '../data/offices';

export default function ContactPage({ onOpenEligibility }) {
  const [searchCity, setSearchCity] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [expandedOffice, setExpandedOffice] = useState('hq-ktm');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    consultationMode: 'In-Person at Putalisadak / Regional Office',
    preferredTime: 'Morning (10:30 AM - 12:30 PM)',
    gpaScore: '3.2 GPA / 72%',
    budgetEstimate: '$35,000 - $50,000 USD (Bangladesh Benchmark)',
    targetCourse: 'MBBS in Bangladesh',
    branchPreference: 'Kathmandu Central Headquarters',
    message: ''
  });

  const regions = ['All', 'Bagmati Province, Nepal', 'Koshi Province, Nepal', 'Gandaki Province, Nepal', 'Lumbini Province, Nepal', 'Madhesh Province, Nepal', 'Sudurpashchim Province, Nepal', 'India Regional Network'];

  const filteredOffices = regionalOffices.filter(office => {
    const matchesSearch = office.city.toLowerCase().includes(searchCity.toLowerCase()) || 
                          office.name.toLowerCase().includes(searchCity.toLowerCase()) ||
                          office.address.toLowerCase().includes(searchCity.toLowerCase());
    
    if (selectedRegion === 'All') return matchesSearch;
    if (selectedRegion === 'India Regional Network') return matchesSearch && office.id.startsWith('in-');
    return matchesSearch && office.region.includes(selectedRegion.split(' ')[0]);
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const message = `Hello NDC Education, I'd like to get in touch.\n\n` +
      `Name: ${contactForm.name}\n` +
      `Phone: ${contactForm.phone}\n` +
      `Email: ${contactForm.email}\n` +
      `Preferred Program: ${contactForm.targetCourse}\n` +
      `Nearest Office: ${contactForm.branchPreference}\n` +
      `Message: ${contactForm.message || '(none provided)'}`;
    window.open(`https://wa.me/9779851093227?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* Page Header (Clean Light Design) */}
      <section className="bg-white text-slate-900 pt-12 pb-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-widest text-red-700">
            20 Regional Geographies in Nepal & India
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight mt-4">
            Connect With Your Nearest <span className="text-red-700">NDC Office</span>.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mt-3">
            Visit our central Putalisadak headquarters or consult with senior counselors at our 20 regional nodes for in-person document scrutiny and admissions support.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: CENTRAL HEADQUARTERS MAP & DIRECT CHANNELS
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left 6 Columns: Central HQ Details */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-bold uppercase tracking-widest text-red-700">
                Kathmandu Central Headquarters
              </p>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Putalisadak, Kathmandu
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Located at the heart of Kathmandu's educational corridor, beside Laxmi Plaza and directly in front of the Traffic Police Bit (near Padmodaya Mode).
              </p>

              <div className="space-y-4 text-xs sm:text-sm">
                
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Physical Address:</strong>
                    <span className="text-slate-600">
                      Putalisadak, Beside Laxmi Plaza, Opposite Traffic Police Bit (Near Padmodaya Mode), Ward No. 28, Kathmandu 44600, Bagmati Province, Nepal
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <div>
                    <strong className="block text-slate-900">Direct Contact Numbers:</strong>
                    <span className="text-slate-600 font-semibold">+977-985-1093227 / +977-01-5340005</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <MessageCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <strong className="block text-slate-900">WhatsApp Hotline:</strong>
                    <a 
                      href="https://wa.me/9779851093227"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-bold hover:underline"
                    >
                      +977-985-1093227 (Instant Response)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <div>
                    <strong className="block text-slate-900">Official Inquiries:</strong>
                    <span className="text-slate-600">admission@ndceducation.com / info@ndceducation.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <Clock className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <div>
                    <strong className="block text-slate-900">Counseling Hours:</strong>
                    <span className="text-slate-600">Sunday – Friday: 9:30 AM – 6:00 PM | Saturday: Prior Appointment</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right 6 Columns: Map Embed */}
            <div className="lg:col-span-6">
              <div className="bg-slate-100 p-2 rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                  <iframe 
                    title="NDC Education Consultancy Putalisadak Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3789495392095!2d85.3188550756788!3d27.705574325571617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a79c944439%3A0xe54fb797379d9ea5!2sPutalisadak%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1710000000000!5m2!1sen!2snp" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>

                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md p-3 rounded-lg shadow border border-slate-200 text-xs text-slate-800">
                    <div className="font-bold text-slate-900">NDC Education Putalisadak HQ</div>
                    <div className="text-[11px] text-slate-500">Beside Laxmi Plaza / Infront of Traffic Bit</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: DYNAMIC REGIONAL OFFICE ACCORDION / FILTER
          ========================================================================= */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-red-600 uppercase tracking-widest">
              Regional Presence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Select Your City from Our 20 Regional Nodes
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Filter by province or search by your hometown to find direct phone numbers, addresses, and dedicated branch heads.
            </p>
          </div>

          {/* Search & Region Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                placeholder="Search by city (e.g. Biratnagar, Pokhara, Chitwan, Patna, New Delhi)..."
                className="w-full text-sm bg-white rounded-xl border border-slate-300 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
              />
            </div>

            <div className="flex-shrink-0">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full md:w-auto bg-white text-sm rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm font-medium"
              >
                {regions.map((r, idx) => (
                  <option key={idx} value={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Regional Offices Cards Grid / Accordion */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOffices.map((office) => {
              const isExpanded = expandedOffice === office.id;
              return (
                <div 
                  key={office.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-sm hover:shadow-md ${
                    office.isHeadquarters ? 'border-red-400 ring-2 ring-red-500/20' : 'border-slate-200'
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-red-600" />
                        <h3 className="font-extrabold text-base text-slate-900">{office.city}</h3>
                      </div>
                      {office.isHeadquarters && (
                        <span className="text-[10px] bg-red-600 text-white font-bold px-2 py-0.5 rounded uppercase">
                          Head Office
                        </span>
                      )}
                    </div>

                    <p className="text-xs font-semibold text-slate-500 mb-4">{office.name}</p>

                    <div className="space-y-2 text-xs text-slate-600 mb-4">
                      <div>
                        <span className="font-bold text-slate-800">Address: </span>
                        <span>{office.address}</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-800">Branch Lead: </span>
                        <span className="text-slate-700">{office.manager}</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-800">Hours: </span>
                        <span className="text-slate-500">{office.hours}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <a 
                        href={`tel:${office.phone}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-red-600"
                      >
                        <Phone className="w-3.5 h-3.5 text-red-500" />
                        <span>{office.phone}</span>
                      </a>

                      <a 
                        href={`https://wa.me/${office.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20NDC%20Education%20${encodeURIComponent(office.city)}%20desk.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-200 transition-colors"
                      >
                        <MessageCircle className="w-3 h-3 text-emerald-600" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: MASTER GENERAL INQUIRY FORM
          ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs font-extrabold text-red-600 uppercase tracking-widest">
              Direct Inquiry
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Send a Central Admissions Message
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Our central academic council at Putalisadak assigns each inquiry to the relevant country desk within 2 working hours.
            </p>
          </div>

          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Student / Parent Full Name
                    </label>
                    <input 
                      type="text" 
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      placeholder="e.g. Ramesh Karki"
                      className="w-full text-sm bg-white rounded-lg border border-slate-300 px-3 py-2.5 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      WhatsApp Contact Number
                    </label>
                    <input 
                      type="tel" 
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                      placeholder="+977-98XXXXXXXX"
                      className="w-full text-sm bg-white rounded-lg border border-slate-300 px-3 py-2.5 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      placeholder="name@example.com"
                      className="w-full text-sm bg-white rounded-lg border border-slate-300 px-3 py-2.5 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Preferred Program
                    </label>
                    <select 
                      value={contactForm.targetCourse}
                      onChange={(e) => setContactForm({...contactForm, targetCourse: e.target.value})}
                      className="w-full text-sm bg-white rounded-lg border border-slate-300 px-3 py-2.5 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    >
                      <option value="MBBS in Bangladesh">MBBS in Bangladesh (Primary)</option>
                      <option value="MBBS in Kazakhstan">MBBS in Kazakhstan (KazNMU)</option>
                      <option value="MBBS in Egypt / Philippines">MBBS in Egypt / Philippines</option>
                      <option value="United Kingdom Higher Education">UK Higher Education (2-Yr Post Study)</option>
                      <option value="Australia Higher Education">Australia Higher Education (Subclass 500)</option>
                      <option value="USA / Canada STEM">USA / Canada STEM Programs</option>
                      <option value="COMPEX / MECEE Resources">COMPEX / MECEE Scholarship Guidance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Nearest NDC Office For File Submission
                  </label>
                  <select 
                    value={contactForm.branchPreference}
                    onChange={(e) => setContactForm({...contactForm, branchPreference: e.target.value})}
                    className="w-full text-sm bg-white rounded-lg border border-slate-300 px-3 py-2.5 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  >
                    {regionalOffices.map((off) => (
                      <option key={off.id} value={off.name}>
                        {off.city} ({off.name})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Questions / Academic Background
                  </label>
                  <textarea 
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    placeholder="Provide details about your +2 GPA, MECEE/NEET marks, budget range, or specific university queries..."
                    className="w-full text-sm bg-white rounded-lg border border-slate-300 px-3 py-2.5 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow transition-colors flex items-center justify-center gap-2"
                >
                  <span>Send Inquiry via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Opened in WhatsApp
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{contactForm.name}</strong>. Your inquiry is ready to send in WhatsApp — just hit send and a counselor from <strong>{contactForm.branchPreference}</strong> will reach out to you at <strong>{contactForm.phone}</strong> shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="bg-red-700 hover:bg-red-800 text-white font-bold text-xs px-6 py-2.5 rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}

