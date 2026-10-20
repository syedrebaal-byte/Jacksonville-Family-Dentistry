import React, { useState } from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { PATIENT_REVIEWS } from '../data/clinicData';

export const TestimonialsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All Reviews' },
    { id: 'cerec', label: 'CEREC® Crowns' },
    { id: 'implant', label: 'Dental Implants' },
    { id: 'family', label: 'Family Care' },
    { id: 'cosmetic', label: 'Cosmetic & Veneers' },
  ];

  const filteredReviews = PATIENT_REVIEWS.filter((rev) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'cerec') return rev.service.toLowerCase().includes('cerec');
    if (activeFilter === 'implant') return rev.service.toLowerCase().includes('implant');
    if (activeFilter === 'family') return rev.service.toLowerCase().includes('family');
    if (activeFilter === 'cosmetic') return rev.service.toLowerCase().includes('cosmetic');
    return true;
  });

  return (
    <section className="py-20 md:py-28 bg-white border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-900 mb-3">
            <span>Verified Patient Experiences</span>
            <span aria-hidden="true">·</span>
            <span>Jacksonville, FL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight">
            Loved by Patients Across Southside Jacksonville
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Read real accounts of gentle care, transformative smile makeovers, and same-day restorations delivered with warmth and expertise.
          </p>

          {/* Aggregate Rating Scoreboard without tacky pills */}
          <div className="mt-6 inline-flex items-center gap-3 p-3 bg-[#FAF8F3] rounded-2xl border border-amber-900/10">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-900">5.0 Star Patient Rating</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-xs text-slate-500">Google Verified Reviews</span>
          </div>

          {/* Review Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#FAF9F5] rounded-xl border border-amber-900/10 max-w-xl mx-auto">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeFilter === f.id
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FAF9F5] rounded-3xl p-6 sm:p-8 border border-amber-900/10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-[11px] font-semibold text-emerald-800 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{rev.verifiedSource}</span>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="w-6 h-6 text-amber-800/20 absolute -top-2 -left-1" />
                  <p className="text-sm text-slate-700 leading-relaxed font-light pl-6 italic">
                    "{rev.comment}"
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-amber-900/10 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">{rev.author}</div>
                  <div className="text-slate-500 text-[11px]">{rev.date}</div>
                </div>
                <div className="text-amber-900 font-medium text-[11px]">
                  {rev.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
