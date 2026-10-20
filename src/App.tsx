import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CerecHighlight } from './components/CerecHighlight';
import { SmileBeforeAfter } from './components/SmileBeforeAfter';
import { ServicesSection } from './components/ServicesSection';
import { TechnologySection } from './components/TechnologySection';
import { MeetDoctors } from './components/MeetDoctors';
import { InsuranceSection } from './components/InsuranceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { EmergencyBanner } from './components/EmergencyBanner';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from './data/clinicData';

export default function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const handleOpenAppointmentModal = (serviceId?: string) => {
    setPreselectedService(serviceId);
    setAppointmentModalOpen(true);
  };

  const handleCloseAppointmentModal = () => {
    setAppointmentModalOpen(false);
    setPreselectedService(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-slate-800 selection:bg-amber-100 selection:text-amber-900">
      {/* Top Navigation */}
      <Navbar onOpenAppointmentModal={handleOpenAppointmentModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

        {/* 2. Signature CEREC Same-Day Crowns & 3D Interactive Explorer */}
        <CerecHighlight onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* 3. Real Clinical Transformations (Before & After Slider) */}
        <SmileBeforeAfter />

        {/* 4. Comprehensive Dental Services & Treatment Drawers */}
        <ServicesSection onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* 5. Technology & Boutique Patient Comfort Experience */}
        <TechnologySection />

        {/* 6. Meet The Doctors (Dr. Melissa Nixon & Dr. Charles McCann) */}
        <MeetDoctors onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

        {/* 7. Insurance Checker & Flexible Financing */}
        <InsuranceSection />

        {/* 8. Verified Patient Reviews & Testimonials */}
        <TestimonialsSection />

        {/* 9. Emergency Dental Care & Urgent First-Aid */}
        <EmergencyBanner />

        {/* 10. Southside Jacksonville Location, Map & Hours */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

      {/* Interactive Appointment Request Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={handleCloseAppointmentModal}
        preselectedServiceId={preselectedService}
      />

      {/* Sticky Mobile Conversion Bar (Visible only on mobile devices) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-xs font-semibold"
          aria-label="Call clinic directly"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-600" />
          <span>Call Office</span>
        </a>
        <button
          type="button"
          onClick={() => handleOpenAppointmentModal()}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#0B2545] text-white text-xs font-semibold shadow-md active:bg-[#13315C]"
        >
          <Calendar className="w-3.5 h-3.5 text-amber-300" />
          <span>Book Visit</span>
        </button>
      </div>
    </div>
  );
}
