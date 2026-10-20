import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, Shield, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { CLINIC_INFO, SERVICES, DOCTORS } from '../data/clinicData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceId: preselectedServiceId || 'cerec-crowns',
    doctor: 'any',
    isNewPatient: true,
    preferredTime: 'morning',
    preferredDate: '',
    insurance: 'Delta Dental',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    name: string;
    serviceName: string;
    doctorName: string;
    time: string;
  } | null>(null);

  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedServiceId }));
    }
  }, [preselectedServiceId]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Please provide a valid phone number';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Please provide a valid email address';
    if (!formData.preferredDate) errs.preferredDate = 'Please select a preferred date';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate reliable submission to clinic front desk
    setTimeout(() => {
      const selectedService = SERVICES.find((s) => s.id === formData.serviceId);
      const doctorName =
        formData.doctor === 'dr-melissa-nixon'
          ? 'Dr. Melissa Nixon'
          : formData.doctor === 'dr-charles-mccann'
          ? 'Dr. Charles McCann'
          : 'First Available (Dr. Nixon or Dr. McCann)';

      setSubmittedData({
        referenceId: `JAX-${Math.floor(100000 + Math.random() * 900000)}`,
        name: formData.name,
        serviceName: selectedService ? selectedService.title : 'Comprehensive Dental Consultation',
        doctorName,
        time: `${formData.preferredDate} (${formData.preferredTime})`
      });
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedData(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-amber-900/10 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-[#0B2545] text-white p-6 sm:p-7 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-widest mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Online Appointment Request</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Schedule Your Visit
          </h3>
          <p className="text-xs sm:text-sm text-white/80 font-light mt-1">
            Jacksonville Family Dentistry · 8101 Southside Blvd #8 · (904) 641-2655
          </p>
        </div>

        {/* Modal Body: Either Success Receipt or Interactive Form */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submittedData ? (
            /* Success State */
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                  Request Confirmed · Ref #{submittedData.referenceId}
                </span>
                <h4 className="text-2xl font-serif font-bold text-slate-900 mt-3">
                  Thank You, {submittedData.name}!
                </h4>
                <p className="text-sm text-slate-600 font-light mt-2 max-w-md mx-auto leading-relaxed">
                  Your appointment request for <span className="font-semibold text-slate-900">{submittedData.serviceName}</span> with <span className="font-semibold text-slate-900">{submittedData.doctorName}</span> has been logged with our patient coordinator.
                </p>
              </div>

              {/* Receipt Card */}
              <div className="bg-[#FAF8F3] rounded-2xl p-4 sm:p-5 text-left border border-amber-900/10 space-y-3 text-xs">
                <div className="flex justify-between border-b border-amber-900/10 pb-2">
                  <span className="text-slate-500">Requested Window:</span>
                  <span className="font-semibold text-slate-800">{submittedData.time}</span>
                </div>
                <div className="flex justify-between border-b border-amber-900/10 pb-2">
                  <span className="text-slate-500">Clinic Location:</span>
                  <span className="font-semibold text-slate-800">8101 Southside Blvd #8, Jacksonville, FL</span>
                </div>
                <div className="flex justify-between border-b border-amber-900/10 pb-2">
                  <span className="text-slate-500">Practice Phone:</span>
                  <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="font-semibold text-amber-900 underline">
                    {CLINIC_INFO.phone}
                  </a>
                </div>
                <div className="pt-1 text-[11px] text-slate-500 leading-normal">
                  Our front-desk team will reach out via call or text to finalize your exact appointment slot and review insurance benefits.
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full py-3 px-4 rounded-xl bg-[#0B2545] text-white font-semibold text-sm hover:bg-[#13315C] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Patient Status Segmented */}
              <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, isNewPatient: true })}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                    formData.isNewPatient ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  I am a New Patient
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, isNewPatient: false })}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                    !formData.isNewPatient ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  I am an Existing Patient
                </button>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Treatment / Service
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-800"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} ({s.duration})
                    </option>
                  ))}
                  <option value="general-consult">New Patient Exam, Cleaning & X-Rays</option>
                  <option value="emergency-pain">Dental Emergency / Severe Tooth Pain</option>
                </select>
              </div>

              {/* Preferred Doctor Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Preferred Clinician
                </label>
                <select
                  value={formData.doctor}
                  onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-800"
                >
                  <option value="any">First Available Doctor (Dr. Nixon or Dr. McCann)</option>
                  <option value="dr-melissa-nixon">Dr. Melissa Nixon, DMD (UF College of Dentistry)</option>
                  <option value="dr-charles-mccann">Dr. Charles McCann, DDS (Univ. of Maryland Dentistry)</option>
                </select>
              </div>

              {/* Contact Information Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-800"
                    />
                  </div>
                  {errors.name && <div className="text-[11px] text-red-600 mt-1">{errors.name}</div>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      placeholder="(904) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-800"
                    />
                  </div>
                  {errors.phone && <div className="text-[11px] text-red-600 mt-1">{errors.phone}</div>}
                </div>
              </div>

              {/* Email & Insurance Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-800"
                    />
                  </div>
                  {errors.email && <div className="text-[11px] text-red-600 mt-1">{errors.email}</div>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Dental Insurance
                  </label>
                  <div className="relative">
                    <Shield className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.insurance}
                      onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-800"
                    >
                      {CLINIC_INFO.insuranceAccepted.map((ins, i) => (
                        <option key={i} value={ins}>
                          {ins}
                        </option>
                      ))}
                      <option value="other-ppo">Other Dental PPO</option>
                      <option value="uninsured">Self-Pay / No Insurance</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Preferred Date & Time of Day */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-800"
                  />
                  {errors.preferredDate && <div className="text-[11px] text-red-600 mt-1">{errors.preferredDate}</div>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-800"
                  >
                    <option value="morning">Morning (7:00 AM – 11:30 AM)</option>
                    <option value="afternoon">Afternoon (12:00 PM – 4:00 PM)</option>
                    <option value="evening">Late Afternoon / Evening (Wed/Thu until 6:00 PM)</option>
                    <option value="saturday">Saturday Emergency Clinic (By Appointment)</option>
                  </select>
                </div>
              </div>

              {/* Additional Concerns */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Dental Concerns or Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g., Interested in same-day crowns, experiencing sensitive tooth, or mild dental anxiety..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-800"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#0B2545] text-white font-semibold text-sm hover:bg-[#13315C] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
                >
                  <Calendar className="w-4 h-4 text-amber-300" />
                  <span>{isSubmitting ? 'Submitting Request...' : 'Submit Appointment Request'}</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-500">
                Prefer to speak directly? Call our office at{' '}
                <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="text-amber-800 font-semibold underline">
                  (904) 641-2655
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
