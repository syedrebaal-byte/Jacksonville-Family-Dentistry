import React from 'react';
import { Calendar, Phone, ShieldCheck, Sparkles, Clock, Check, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenAppointmentModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-[#FAF9F5]">
      {/* Subtle architectural ambient background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline, Doctors, CTAs & Value Props */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quiet unboxed kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-900/90">
              <span>Southside Jacksonville, Florida</span>
              <span aria-hidden="true">·</span>
              <span>Drs. Nixon & McCann</span>
              <span aria-hidden="true">·</span>
              <span>Premier Family & Restorative Care</span>
            </div>

            {/* Dominant Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 tracking-tight leading-[1.12]">
              Exceptional Dentistry, Crafted with Warmth & Precision.
            </h1>

            {/* Clear Patient-Centric Prose */}
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
              Welcome to <span className="font-medium text-slate-900">Jacksonville Family Dentistry</span>, where cutting-edge technology meets genuine, anxiety-free patient care. Led by <span className="text-slate-900 font-medium">Dr. Melissa Nixon</span> (University of Florida) and <span className="text-slate-900 font-medium">Dr. Charles McCann</span> (University of Maryland), we specialize in same-day CEREC® crowns, cosmetic smile makeovers, dental implants, and comfortable family dentistry.
            </p>

            {/* Prominent Conversion Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenAppointmentModal}
                className="px-6 py-3.5 rounded-xl bg-[#0B2545] text-white font-semibold text-sm shadow-md hover:bg-[#13315C] active:scale-[0.99] transition-all flex items-center gap-2 group cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-300 group-hover:rotate-6 transition-transform" />
                <span>Request Your Appointment</span>
                <ArrowRight className="w-4 h-4 ml-1 opacity-70 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="px-5 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-sm hover:bg-slate-50 hover:border-slate-400 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>(904) 641-2655</span>
              </a>
            </div>

            {/* Verified Clinical Trust Pillars */}
            <div className="pt-6 border-t border-slate-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3 h-3 text-amber-800" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">CEREC® Same-Day</div>
                    <div className="text-[11px] text-slate-500">Permanent crowns in 90 mins</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-3 h-3 text-blue-800" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">All PPOs Welcome</div>
                    <div className="text-[11px] text-slate-500">Maximized insurance benefits</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-800" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">No Sticky Trays</div>
                    <div className="text-[11px] text-slate-500">100% digital 3D scanning</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-3 h-3 text-purple-800" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Emergency Care</div>
                    <div className="text-[11px] text-slate-500">Saturday clinic scheduled</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Visual Anchor Card with Genuine Clinic Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image: Clinic Lounge & Architecture */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/3] img-zoom-container">
                <img
                  src="/assets/images/hero-clinic.jpg"
                  alt="Jacksonville Family Dentistry Modern Patient Suite"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs uppercase tracking-wider font-semibold text-amber-300">
                    Boutique Dental Suite
                  </div>
                  <div className="text-sm font-medium text-white/95 mt-0.5">
                    8101 Southside Blvd #8, Jacksonville, FL
                  </div>
                </div>
              </div>

              {/* Floating Doctor Inset Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-amber-900/10 shadow-xl max-w-[240px] flex items-center gap-3">
                <img
                  src="/assets/images/dr-melissa-nixon.jpg"
                  alt="Dr. Melissa Nixon, DMD"
                  className="w-12 h-12 rounded-xl object-cover border border-amber-800/20 shadow-xs"
                />
                <div>
                  <div className="text-xs font-bold text-slate-900">Dr. Melissa Nixon</div>
                  <div className="text-[10px] text-slate-500 leading-tight">Univ. of Florida College of Dentistry</div>
                  <div className="text-[10px] font-semibold text-emerald-700 mt-1">Accepting New Patients</div>
                </div>
              </div>

              {/* Floating Technology Callout */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl py-2 px-3.5 border border-amber-900/10 shadow-lg text-right">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-amber-900">In-House CAD/CAM</div>
                <div className="text-xs font-bold text-slate-900">Same-Day CEREC® Crowns</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
