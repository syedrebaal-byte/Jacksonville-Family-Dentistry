import React from 'react';
import { Award, GraduationCap, Heart, CheckCircle2, Calendar } from 'lucide-react';
import { DOCTORS } from '../data/clinicData';

interface MeetDoctorsProps {
  onOpenAppointmentModal: () => void;
}

export const MeetDoctors: React.FC<MeetDoctorsProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section id="doctors" className="py-20 md:py-28 bg-[#FAF8F3] border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-900 mb-3">
            <span>Leadership & Clinicians</span>
            <span aria-hidden="true">·</span>
            <span>Jacksonville Family Dentistry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight">
            Meet Your Trusted Jacksonville Dentists
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Dentistry is not just our profession—it is a lifelong craft founded on empathy, clinical mastery, and genuine relationships. Get to know Dr. Melissa Nixon and Dr. Charles McCann.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          {DOCTORS.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-amber-900/10 shadow-xl flex flex-col justify-between space-y-8"
            >
              <div className="space-y-6">
                {/* Doctor Header & Portrait */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="relative w-36 h-44 sm:w-44 sm:h-52 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-amber-900/10 bg-slate-100">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="text-center sm:text-left space-y-2">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800">
                      <GraduationCap className="w-4 h-4 text-amber-700" />
                      <span>{doctor.education}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                      {doctor.name}
                    </h3>
                    <div className="text-sm font-medium text-slate-600">
                      {doctor.title}
                    </div>
                    <div className="text-xs text-slate-500 font-light pt-1 leading-snug">
                      {doctor.credentials}
                    </div>
                  </div>
                </div>

                {/* Biography Prose */}
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  {doctor.bio}
                </p>

                {/* Clinical Focus Areas */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5">
                    Clinical Masteries:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specialties.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 rounded-lg bg-amber-50 border border-amber-900/10 text-xs font-medium text-amber-950"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Personal Touch / Fun Fact */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <Heart className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    "{doctor.funFact}"
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onOpenAppointmentModal}
                  className="w-full py-3 px-4 rounded-xl border border-slate-300 text-xs font-semibold text-slate-800 hover:bg-[#0B2545] hover:text-white hover:border-[#0B2545] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-amber-500" />
                  <span>Schedule Consultation with {doctor.name.split(' ')[1]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Practice Philosophy Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#0B2545] to-[#13315C] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-white/10">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mx-auto md:mx-0">
                <Award className="w-5 h-5 text-amber-300" />
              </div>
              <h4 className="font-serif font-bold text-lg text-white">Conservative Ethics</h4>
              <p className="text-xs text-white/80 leading-relaxed font-light">
                We will never sell or push unneeded treatments. If a tooth can be naturally preserved with preventive care, that remains our priority.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mx-auto md:mx-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-300" />
              </div>
              <h4 className="font-serif font-bold text-lg text-white">Patient Autonomy</h4>
              <p className="text-xs text-white/80 leading-relaxed font-light">
                We display high-resolution digital scans and explain every option openly so you remain in complete control of your dental care.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mx-auto md:mx-0">
                <Heart className="w-5 h-5 text-rose-300" />
              </div>
              <h4 className="font-serif font-bold text-lg text-white">Zero-Judgment Zone</h4>
              <p className="text-xs text-white/80 leading-relaxed font-light">
                Whether it has been 6 months or 10 years since your last dental visit, our team greets you with warm, compassionate understanding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
