import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, ExternalLink, CheckCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 md:py-28 bg-white border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-900 mb-3">
            <span>Convenient Southside Access</span>
            <span aria-hidden="true">·</span>
            <span>Jacksonville, FL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight">
            Visit Our Southside Jacksonville Practice
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Conveniently located at the intersection of Old Baymeadows Road and Southside Boulevard, with dedicated storefront parking and easy access from I-95 and I-295.
          </p>
        </div>

        {/* 2-Column: Left = Hours & Contact, Right = Map & Directions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Office Hours & Direct Contact */}
          <div className="lg:col-span-5 bg-[#FAF8F3] rounded-3xl p-6 sm:p-8 lg:p-10 border border-amber-900/10 shadow-lg flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Address card */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-amber-800" />
                  <span>Physical Address</span>
                </div>
                <div className="text-lg font-serif font-bold text-slate-900">
                  {CLINIC_INFO.name}
                </div>
                <div className="text-sm text-slate-600 leading-relaxed font-light">
                  {CLINIC_INFO.address.street}
                  <br />
                  {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.zip}
                </div>
                <div className="text-xs text-slate-500 pt-1">
                  Located at {CLINIC_INFO.address.landmark}
                </div>
              </div>

              {/* Hours Table */}
              <div className="space-y-3 pt-3 border-t border-amber-900/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                    <Clock className="w-4 h-4 text-slate-700" />
                    <span>Office Hours</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                    Jacksonville EST
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  {CLINIC_INFO.hours.map((h, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-1.5 border-b border-amber-900/5 last:border-0"
                    >
                      <span className="text-slate-600 font-medium">{h.days}</span>
                      <span className="text-slate-900 font-semibold">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone & Email Links */}
              <div className="space-y-2 pt-3 border-t border-amber-900/10 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Telephone:</span>
                  <a
                    href={`tel:${CLINIC_INFO.phoneRaw}`}
                    className="font-bold text-[#0B2545] hover:text-amber-800 transition-colors flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{CLINIC_INFO.phone}</span>
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Email Inquiries:</span>
                  <a
                    href={`mailto:${CLINIC_INFO.email}`}
                    className="font-medium text-slate-800 hover:text-amber-800 transition-colors flex items-center gap-1"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                    <span>{CLINIC_INFO.email}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Parking & Accessibility */}
            <div className="p-4 rounded-2xl bg-white border border-amber-900/10 text-xs text-slate-600 space-y-1">
              <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Patient Convenience</span>
              </div>
              <p className="font-light leading-relaxed">
                Step-free ADA accessible entrance with dedicated storefront parking directly outside suite #8.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Map & Directions Card */}
          <div className="lg:col-span-7 bg-[#FAF9F5] rounded-3xl p-6 sm:p-8 border border-amber-900/10 shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                    Interactive Location Map
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Southside Jacksonville, Florida (Zip 32256)
                  </p>
                </div>
                <a
                  href={CLINIC_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-all shadow-2xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-blue-600" />
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>

              {/* Styled Map Container */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-amber-900/10 shadow-md bg-slate-100">
                {/* Embedded Responsive Google Map for 8101 Southside Blvd #8 */}
                <iframe
                  title="Jacksonville Family Dentistry Location Map"
                  src="https://maps.google.com/maps?q=8101+Southside+Blvd+%238,+Jacksonville,+FL+32256&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Neighborhood Landmarks & Driving Guide */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2">
              <div className="p-3 rounded-xl bg-white border border-amber-900/10">
                <div className="font-bold text-slate-800">From Baymeadows:</div>
                <div className="text-slate-500 font-light mt-0.5">Take Old Baymeadows Rd east straight to Southside Blvd.</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-amber-900/10">
                <div className="font-bold text-slate-800">From Deerwood / St Johns:</div>
                <div className="text-slate-500 font-light mt-0.5">Just 8 minutes north via Southside Blvd.</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-amber-900/10">
                <div className="font-bold text-slate-800">From Downtown Jax:</div>
                <div className="text-slate-500 font-light mt-0.5">I-95 South to Baymeadows Rd, east to Southside.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
