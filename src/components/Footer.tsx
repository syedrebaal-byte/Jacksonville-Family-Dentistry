import React from 'react';
import { Phone, Mail, MapPin, Calendar, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FooterProps {
  onOpenAppointmentModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointmentModal }) => {
  return (
    <footer className="bg-[#0B2545] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Clinic Brand & Doctors */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-amber-700 text-white flex items-center justify-center font-serif text-xl font-bold shadow-md">
                J
              </div>
              <div>
                <div className="font-serif text-xl font-bold text-white tracking-tight leading-tight">
                  Jacksonville Family Dentistry
                </div>
                <div className="text-xs text-amber-200/90 font-medium tracking-wide">
                  Dr. Melissa Nixon · Dr. Charles McCann
                </div>
              </div>
            </div>

            <p className="text-xs text-white/70 font-light leading-relaxed max-w-sm">
              Providing premier restorative, cosmetic, and family oral health care to Southside Jacksonville, Baymeadows, and surrounding communities with state-of-the-art CEREC® technology and heartfelt compassion.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenAppointmentModal}
                className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Request Your Appointment Online</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Practice Navigation
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#cerec" className="hover:text-white transition-colors">Same-Day CEREC® Crowns</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Dental Services & Treatments</a>
              </li>
              <li>
                <a href="#interactive-3d" className="hover:text-white transition-colors">3D Dental Anatomy Explorer</a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-white transition-colors">Meet Dr. Nixon & Dr. McCann</a>
              </li>
              <li>
                <a href="#results" className="hover:text-white transition-colors">Before & After Smile Gallery</a>
              </li>
              <li>
                <a href="#insurance" className="hover:text-white transition-colors">Insurance & Financing</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Location, Map & Hours</a>
              </li>
            </ul>
          </div>

          {/* Treatments Offered */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Clinical Treatments
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>CEREC® Single-Visit Porcelain Crowns</li>
              <li>Handcrafted Cosmetic Veneers</li>
              <li>Dental Implants & Restorations</li>
              <li>Invisalign® Clear Orthodontics</li>
              <li>Gentle Ultrasonic Cleanings & Fluoride</li>
              <li>Tooth-Colored Composite Fillings</li>
              <li>Root Canal Therapy & Extractions</li>
              <li>Botox® for TMJ & Facial Relaxation</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Contact & Hours
            </h4>
            <div className="space-y-3 text-xs text-white/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>8101 Southside Blvd #8<br />Jacksonville, FL 32256</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="hover:text-amber-300 font-semibold transition-colors">
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-300 shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-amber-300 transition-colors truncate">
                  {CLINIC_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1 text-[11px] text-white/60">
                <Clock className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                <span>Mon–Tue: 7am–4pm<br />Wed–Thu: 10am–6pm<br />Fri: 8am–1pm · Sat: By Appt</span>
              </div>
            </div>
          </div>
        </div>

        {/* Medical & Legal Disclaimer */}
        <div className="pt-8 border-t border-white/10 text-[11px] text-white/60 space-y-2 leading-relaxed">
          <p>
            <span className="font-semibold text-white/80">Clinical Medical Disclaimer:</span> The information provided on this website is for educational and informational purposes only and is not intended as medical advice or a substitute for a professional dental consultation and examination. Individual clinical results and treatment suitability vary.
          </p>
          <p>
            <span className="font-semibold text-white/80">Accessibility Commitment:</span> Jacksonville Family Dentistry is dedicated to providing an accessible, inclusive digital and in-person experience for all patients, adhering to ADA and WCAG guidelines.
          </p>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-2">
          <div>
            © {new Date().getFullYear()} Jacksonville Family Dentistry (jaxfamilydentistry.com). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Southside Jacksonville, FL</span>
            <span aria-hidden="true">·</span>
            <span>Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span>Terms of Care</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
