import React from 'react';
import { Sparkles, Clock, Check, X, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { DentalModel3D } from './DentalModel3D';

interface CerecHighlightProps {
  onOpenAppointmentModal: (service?: string) => void;
}

export const CerecHighlight: React.FC<CerecHighlightProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section id="cerec" className="py-20 md:py-28 bg-[#FAF9F5] border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-900 mb-3">
            <span>Signature In-House Technology</span>
            <span aria-hidden="true">·</span>
            <span>Jacksonville Family Dentistry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight">
            Same-Day CEREC® Crowns. No Temporary. No Second Visit.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Using German-engineered CAD/CAM digital scanning and precision diamond milling, Dr. Nixon and Dr. McCann design, fabricate, and permanently bond your custom ceramic crown in a single visit—saving you time, anesthesia, and multiple appointments.
          </p>
        </div>

        {/* 2-Column: Left = Interactive 3D Model, Right = Process & Comparison */}
        <div id="interactive-3d" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: 3D Dental Model Explorer */}
          <div className="lg:col-span-6 space-y-4">
            <DentalModel3D />
            <div className="text-center text-xs text-slate-500">
              Interactive 3D model of CEREC® ceramic molar crown with natural enamel margins.
            </div>
          </div>

          {/* Right: Traditional vs CEREC Comparison Table & Steps */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-amber-900/10 shadow-lg space-y-6">
              <h3 className="text-xl font-serif text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-700" />
                <span>Why CEREC® Changes Everything</span>
              </h3>

              {/* Side-by-Side Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {/* Traditional Old Way */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="font-bold text-slate-500 uppercase tracking-wider text-[11px]">
                    Traditional Dental Crowns
                  </div>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Messy, gag-inducing silicone impression putty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Fragile temporary plastic crown for 2–3 weeks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Two separate appointments & double anesthesia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Off-site lab delays and potential fit discrepancies</span>
                    </li>
                  </ul>
                </div>

                {/* Our CEREC Way */}
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-3">
                  <div className="font-bold text-amber-900 uppercase tracking-wider text-[11px] flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-700" />
                    <span>Jax Family Dentistry CEREC®</span>
                  </div>
                  <ul className="space-y-2 text-slate-800">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Comfortable, instant 3D digital camera scan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Diamond-milled in our Southside clinic in ~15 mins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Single appointment—walk out with permanent crown</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>100% biocompatible, metal-free aesthetic porcelain</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* The 4-Step Journey */}
              <div className="pt-2 border-t border-slate-100">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Single-Visit Workflow (~90 Minutes Total)
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-2.5 rounded-lg bg-slate-50">
                    <div className="text-amber-800 font-serif font-bold text-base">01</div>
                    <div className="text-[11px] font-semibold text-slate-800 mt-0.5">3D Scan</div>
                    <div className="text-[10px] text-slate-500">Optical camera</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50">
                    <div className="text-amber-800 font-serif font-bold text-base">02</div>
                    <div className="text-[11px] font-semibold text-slate-800 mt-0.5">CAD Design</div>
                    <div className="text-[10px] text-slate-500">Custom bite match</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50">
                    <div className="text-amber-800 font-serif font-bold text-base">03</div>
                    <div className="text-[11px] font-semibold text-slate-800 mt-0.5">Mill & Fire</div>
                    <div className="text-[10px] text-slate-500">Diamond chamber</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50">
                    <div className="text-amber-800 font-serif font-bold text-base">04</div>
                    <div className="text-[11px] font-semibold text-slate-800 mt-0.5">Permanent Bond</div>
                    <div className="text-[10px] text-slate-500">Walk out complete</div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenAppointmentModal('cerec-crowns')}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#0B2545] text-white font-semibold text-sm hover:bg-[#13315C] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <Clock className="w-4 h-4 text-amber-300" />
                  <span>Reserve a Same-Day Crown Appointment</span>
                  <ArrowRight className="w-4 h-4 opacity-80" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
