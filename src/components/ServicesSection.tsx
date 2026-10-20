import React, { useState } from 'react';
import { ArrowRight, Clock, Sparkles, Check } from 'lucide-react';
import { SERVICES, DentalService } from '../data/clinicData';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onOpenAppointmentModal: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenAppointmentModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<DentalService | null>(null);

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'restorative', label: 'Restorative & CEREC®' },
    { id: 'cosmetic', label: 'Cosmetic & Veneers' },
    { id: 'preventive', label: 'Family & Hygiene' },
    { id: 'surgical', label: 'Implants & Surgery' },
    { id: 'specialty', label: 'Botox® & TMJ' },
  ];

  const filteredServices =
    selectedCategory === 'all'
      ? SERVICES
      : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-900 mb-3">
            <span>Comprehensive Clinical Care</span>
            <span aria-hidden="true">·</span>
            <span>All Ages & Needs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight">
            Advanced Dental Solutions for Lifelong Smiles
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            From routine preventive wellness to same-day CEREC® ceramic crowns and complex cosmetic smile transformations, Dr. Nixon and Dr. McCann provide comprehensive, honest dentistry in Southside Jacksonville.
          </p>

          {/* Interactive Filter Tabs (Functional segmented controls) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#FAF9F5] rounded-2xl border border-amber-900/10 max-w-2xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-white text-slate-900 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-[#FAF9F5] rounded-3xl overflow-hidden border border-amber-900/10 hover:border-amber-900/30 transition-all duration-300 hover:shadow-xl flex flex-col"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {service.highlightTag && (
                  <div className="absolute top-3 right-3 bg-[#0B2545]/90 backdrop-blur-sm text-amber-200 text-[10px] font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {service.highlightTag}
                  </div>
                )}

                <div className="absolute bottom-3 left-3 text-white text-xs flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-amber-300" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[11px] font-semibold tracking-wider uppercase text-amber-900/80 mb-1">
                    {service.category.toUpperCase()}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-amber-950 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 font-light leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Key Benefits Preview */}
                <div className="pt-2 border-t border-amber-900/10 space-y-1.5">
                  {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="truncate">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="pt-3 flex items-center justify-between gap-2 border-t border-amber-900/10">
                  <button
                    type="button"
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-semibold text-slate-700 hover:text-amber-900 transition-colors flex items-center gap-1 py-1"
                  >
                    <span>View Treatment & FAQs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenAppointmentModal(service.id)}
                    className="px-3.5 py-1.5 rounded-lg bg-[#0B2545] text-white text-xs font-semibold hover:bg-[#13315C] transition-colors shadow-xs"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Drawer / Modal */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onBookService={(sId) => onOpenAppointmentModal(sId)}
      />
    </section>
  );
};
