import React, { useState } from 'react';
import { AlertCircle, Phone, Clock, ChevronDown, ChevronUp, ShieldAlert, HeartPulse } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const EmergencyBanner: React.FC = () => {
  const [showProtocols, setShowProtocols] = useState(false);

  const emergencyProtocols = [
    {
      title: "Knocked-Out Permanent Tooth",
      action: "Handle tooth ONLY by crown (never touch root). If clean, gently insert back into socket. Otherwise place in cold milk or saliva and call us immediately. Teeth replanted within 60 minutes have highest survival rate."
    },
    {
      title: "Severe Acute Toothache / Swelling",
      action: "Rinse mouth with warm salt water. Gently floss to remove trapped food debris. Do NOT place aspirin directly against the gum tissue. Call our emergency line for urgent antibiotic or palliative treatment."
    },
    {
      title: "Broken Tooth or Lost Dental Crown",
      action: "Save any tooth fragments or the dislodged crown. Avoid chewing on that side. With our same-day CEREC technology, we can often mill a replacement crown or repair the fracture on the same day."
    }
  ];

  return (
    <section className="bg-amber-50/70 border-y border-amber-900/10 py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-900/20 shadow-md flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold text-amber-900 uppercase tracking-widest">
              <HeartPulse className="w-4 h-4 text-red-600 animate-pulse" />
              <span>Urgent Dental Care in Jacksonville</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Experiencing Severe Tooth Pain or a Dental Emergency?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-light">
              We prioritize dental emergencies and offer scheduled Saturday emergency clinics. Don't wait through pain—call our Southside team immediately for prompt relief.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setShowProtocols(!showProtocols)}
              className="w-full sm:w-auto px-4 py-3 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Emergency First-Aid Tips</span>
              {showProtocols ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-red-700 hover:bg-red-800 text-white font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Emergency: (904) 641-2655</span>
            </a>
          </div>
        </div>

        {/* Expandable Emergency Protocols Drawer */}
        {showProtocols && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in duration-200">
            {emergencyProtocols.map((protocol, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-amber-900/10 shadow-xs space-y-2">
                <div className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-amber-700" />
                  <span>{protocol.title}</span>
                </div>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  {protocol.action}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
