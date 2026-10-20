import React from 'react';
import { X, Calendar, CheckCircle2, HelpCircle, Clock, ArrowRight } from 'lucide-react';
import { DentalService } from '../data/clinicData';

interface ServiceDetailModalProps {
  service: DentalService | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-amber-900/10 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header Media */}
        <div className="relative h-48 sm:h-56 w-full bg-slate-900">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors focus:outline-none"
            aria-label="Close service details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on media */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-300">
              <span>{service.category.toUpperCase()}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {service.duration}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Detailed Prose */}
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
            {service.fullDescription}
          </p>

          {/* Clinical Benefits */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Key Clinical Advantages
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What Patients Can Expect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              What to Expect During Your Visit
            </h4>
            <ol className="space-y-2 text-xs text-slate-600 list-decimal list-inside pl-1">
              {service.whatToExpect.map((step, idx) => (
                <li key={idx} className="leading-relaxed">
                  <span className="text-slate-800">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* FAQs */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="pt-2 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-amber-800" />
                <span>Frequently Asked Questions</span>
              </h4>
              <div className="space-y-3">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-900/10">
                    <div className="font-semibold text-xs text-slate-900">
                      {faq.question}
                    </div>
                    <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between gap-4">
          <div className="text-xs text-slate-500 hidden sm:block">
            PPO Insurance accepted · Zero-interest financing available
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookService(service.id);
              }}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-[#0B2545] text-white text-xs font-semibold hover:bg-[#13315C] transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>Book This Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
