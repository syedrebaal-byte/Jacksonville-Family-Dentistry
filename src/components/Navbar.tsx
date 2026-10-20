import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Menu, X, Calendar, ChevronRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenAppointmentModal: (preselectedService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointmentModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Same-Day CEREC®', href: '#cerec' },
    { label: '3D Explorer', href: '#interactive-3d' },
    { label: 'Meet the Doctors', href: '#doctors' },
    { label: 'Smile Gallery', href: '#results' },
    { label: 'Insurance & Costs', href: '#insurance' },
    { label: 'Location & Hours', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#0B2545] text-white/90 text-[11px] sm:text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              <span>{CLINIC_INFO.address.street}, Jacksonville, FL 32256</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>Mon–Tue 7am–4pm · Wed–Thu 10am–6pm · Fri 8am–1pm</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-amber-200/90 font-medium">Saturday Emergency Clinic by Appointment</span>
            <span aria-hidden="true" className="text-white/30">|</span>
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="flex items-center gap-1 font-semibold text-white hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-[#FAF9F5] border-b border-amber-950/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Clinicians */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-800 rounded-lg">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B2545] to-[#13315C] text-white flex items-center justify-center font-serif text-xl font-bold tracking-tight shadow-md border border-white/20 group-hover:scale-105 transition-transform">
              J
            </div>
            <div>
              <div className="font-serif text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-tight">
                Jacksonville Family Dentistry
              </div>
              <div className="text-[11px] text-slate-500 font-medium tracking-wide">
                Dr. Melissa Nixon · Dr. Charles McCann
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-amber-900 transition-colors focus:outline-none focus-visible:text-amber-900 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-amber-800 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-800 bg-white border border-slate-200 rounded-xl shadow-xs hover:bg-slate-50 hover:border-slate-300 transition-all"
              aria-label="Call clinic directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#0B2545]" />
              <span>(904) 641-2655</span>
            </a>
            <button
              type="button"
              onClick={() => onOpenAppointmentModal()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0B2545] hover:bg-[#13315C] active:bg-[#081b33] rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>Request Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="p-2 rounded-lg bg-amber-50 text-amber-900 border border-amber-200"
              aria-label="Call clinic directly"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-4">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointmentModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0B2545] text-white font-semibold text-sm shadow-md"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Book Appointment Online</span>
            </button>
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call (904) 641-2655</span>
            </a>
          </div>

          <div className="pt-2 text-center text-xs text-slate-500">
            8101 Southside Blvd #8, Jacksonville, FL 32256
          </div>
        </div>
      )}
    </header>
  );
};
