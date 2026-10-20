import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, CheckCircle2 } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  doctor: string;
  procedure: string;
  treatmentTime: string;
  beforeDescription: string;
  afterDescription: string;
  image: string;
}

const CASES: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Full Arch Ceramic Veneer Transformation',
    doctor: 'Dr. Melissa Nixon, DMD',
    procedure: 'Handcrafted Porcelain Veneers & Incisal Contouring',
    treatmentTime: '2 Appointments over 10 Days',
    beforeDescription: 'Uneven incisal wear, chipped central enamel, discoloration from historic fluorosis',
    afterDescription: 'Hand-sculpted porcelain veneers restoring natural facial proportions, lifelike luminescence, and harmonious bite balance',
    image: '/assets/images/smile-veneers.jpg'
  },
  {
    id: 'case-2',
    title: 'Single-Day Broken Molar CEREC® Restoration',
    doctor: 'Dr. Charles McCann, DDS',
    procedure: 'In-House CAD/CAM High-Strength Ceramic Crown',
    treatmentTime: 'Single 85-Minute Visit',
    beforeDescription: 'Fractured lingual cusp with old failing amalgam filling and recurrent margins',
    afterDescription: 'Diamond-milled anatomical all-ceramic crown, biocompatible bonding, zero sensitivity',
    image: '/assets/images/cerec-suite.jpg'
  }
];

export const SmileBeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(52); // Percentage 0 - 100
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const activeCase = CASES[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    handleMove(e.clientX);
  };

  return (
    <section id="results" className="py-20 md:py-28 bg-[#FAF8F3] border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-800 mb-3">
            <span>Clinical Artistry</span>
            <span aria-hidden="true">·</span>
            <span>Jacksonville Practice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight leading-tight">
            Real Transformations, Natural Aesthetic Results
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Every smile makeover is customized to individual facial symmetry, lip dynamics, and tooth biology. Drag the slider below to compare clinical transformations.
          </p>

          {/* Case Study Switcher */}
          <div className="mt-8 inline-flex p-1 bg-amber-950/5 rounded-xl border border-amber-900/10">
            {CASES.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveCaseIndex(idx)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                  activeCaseIndex === idx
                    ? 'bg-white text-slate-900 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tactile Split Comparison Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-amber-900/10 shadow-xl">
          {/* Visual Slider Column */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onMouseDown={() => (isDraggingRef.current = true)}
              onMouseUp={() => (isDraggingRef.current = false)}
              onMouseLeave={() => (isDraggingRef.current = false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-amber-900/10 shadow-inner bg-slate-900"
            >
              {/* After Image (Full background) */}
              <img
                src={activeCase.image}
                alt="After Dental Treatment Result"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />

              {/* Before Image (Clipped with inset filter to simulate pre-treatment tone/texture) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeCase.image}
                  alt="Before Treatment Baseline"
                  className="absolute inset-0 w-full h-full object-cover max-w-none filter brightness-90 saturate-75 contrast-95 sepia-[0.18]"
                  style={{
                    width: containerRef.current?.clientWidth || '100%',
                    height: containerRef.current?.clientHeight || '100%'
                  }}
                  loading="lazy"
                />
                {/* Before Label */}
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-md tracking-wider uppercase">
                  Before Treatment
                </div>
              </div>

              {/* After Label */}
              <div className="absolute top-4 right-4 bg-amber-900/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-md tracking-wider uppercase">
                After Transformation
              </div>

              {/* Split Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Center Handle Button */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-800 shadow-2xl flex items-center justify-center border-2 border-amber-800/20">
                  <ArrowLeftRight className="w-4 h-4 text-amber-900" />
                </div>
              </div>

              {/* Instruction banner */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white text-[11px] px-3 py-1 rounded-full pointer-events-none">
                Drag slider to compare Before & After
              </div>
            </div>
          </div>

          {/* Clinical Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
                {activeCase.doctor}
              </div>
              <h3 className="text-2xl font-serif text-slate-900">
                {activeCase.procedure}
              </h3>
              <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                <span>Treatment Duration: {activeCase.treatmentTime}</span>
                <span aria-hidden="true">·</span>
                <span>Jacksonville, FL Office</span>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Clinical Baseline (Before):
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeCase.beforeDescription}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/60">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
                  Completed Outcome (After):
                </div>
                <p className="text-sm text-slate-800 leading-relaxed">
                  {activeCase.afterDescription}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Custom shade graduation matching adjacent natural teeth</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Preserved optimal bite function and healthy gum architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Permanent medical porcelain with stain-resistant surface</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
