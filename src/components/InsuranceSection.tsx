import React, { useState } from 'react';
import { ShieldCheck, Search, CheckCircle2, CreditCard, DollarSign, HelpCircle, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const InsuranceSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInsurances = CLINIC_INFO.insuranceAccepted.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <section id="insurance" className="py-20 md:py-28 bg-[#FAF8F3] border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-900 mb-3">
            <span>Financial Transparency</span>
            <span aria-hidden="true">·</span>
            <span>Jacksonville Family Dentistry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight">
            Stress-Free Insurance & Flexible Financing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Quality healthcare should be predictable and transparent. We work with all major dental PPO insurance plans and provide detailed cost estimates before any treatment begins.
          </p>
        </div>

        {/* 2-Column: Insurance Checker & Financing Options */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive PPO Insurance Checker */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-amber-900/10 shadow-xl space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                  Accepted PPO Dental Plans
                </h3>
              </div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                In-Network & Verified
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              We bill and coordinate directly with your carrier to maximize your annual benefits. Type your insurance company name below to check acceptance:
            </p>

            {/* Insurance Search Bar */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search your insurance (e.g., Delta Dental, Cigna, MetLife, Aetna)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-800 focus:bg-white transition-all"
              />
            </div>

            {/* Insurance List Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-60 overflow-y-auto pr-1">
              {filteredInsurances.length > 0 ? (
                filteredInsurances.map((ins, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF9F5] border border-amber-900/10 text-xs font-medium text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="truncate">{ins}</span>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-6 text-xs text-slate-500 bg-slate-50 rounded-xl">
                  Don't see your specific plan listed? We accept almost all PPOs! Call us at{' '}
                  <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="text-amber-800 font-semibold underline">
                    {CLINIC_INFO.phone}
                  </a>{' '}
                  and our billing coordinator will verify your benefits in minutes.
                </div>
              )}
            </div>

            {/* Insurance Assurance Notice */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 space-y-1.5">
              <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-amber-800" />
                <span>Our Direct Billing Promise:</span>
              </div>
              <p className="leading-relaxed">
                We handle the paperwork, submit clinical narratives and digital x-rays, and track claims on your behalf so you receive the full benefits you're entitled to.
              </p>
            </div>
          </div>

          {/* Right Column: Financing & Out-of-Pocket Transparency */}
          <div className="lg:col-span-5 space-y-6">
            {/* CareCredit & Sunbit Financing Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-900/10 shadow-lg space-y-5">
              <div className="flex items-center gap-2 text-amber-900">
                <CreditCard className="w-5 h-5 text-amber-800" />
                <h4 className="font-serif font-bold text-lg text-slate-900">
                  Flexible Monthly Payment Plans
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Don't let budget delays stand in the way of vital dental care. We partner with reputable medical lenders to offer low and 0% promotional APR financing for restorative and cosmetic procedures.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-900/10">
                  <div className="font-bold text-xs text-amber-950">CareCredit® Healthcare Financing</div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    0% interest for 6, 12, or 24 months on qualifying treatments over $200.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-900/10">
                  <div className="font-bold text-xs text-blue-950">Sunbit Patient Financing</div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Fast 30-second digital application with 85%+ approval rate and no hard credit pull to view terms.
                  </div>
                </div>
              </div>

              <div className="pt-2 text-center">
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-800 hover:text-amber-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Questions about financing? Call our front desk at (904) 641-2655</span>
                </a>
              </div>
            </div>

            {/* No Insurance? New Patient Dental Wellness */}
            <div className="bg-gradient-to-br from-[#0B2545] to-[#13315C] text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-3">
              <div className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                No Dental Insurance?
              </div>
              <h4 className="text-xl font-serif font-bold text-white">
                Affordable Direct-Pay Care
              </h4>
              <p className="text-xs text-white/80 leading-relaxed font-light">
                We believe dental care should be accessible to all. We provide discounted bundled fees for new patient examinations, digital x-rays, and comprehensive cleanings for uninsured patients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
