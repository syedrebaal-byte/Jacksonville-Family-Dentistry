import React from 'react';
import { Cpu, Eye, Radio, Sparkles, Smile, ShieldAlert, Check } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const technologies = [
    {
      icon: Cpu,
      title: "CEREC® CAD/CAM 3D Milling",
      description: "German-engineered in-office milling system crafting customized high-strength ceramic crowns and inlays in approximately 15 minutes."
    },
    {
      icon: Eye,
      title: "Intraoral 3D Optical Scanners",
      description: "Eliminates gag-inducing, sticky silicone impression putty. Takes thousands of high-definition digital frames per second for precise fitting."
    },
    {
      icon: Radio,
      title: "Ultra-Low Radiation Digital X-Rays",
      description: "Emits up to 90% less radiation than legacy film radiographs while providing instant, high-contrast imagery on large chairside monitors."
    },
    {
      icon: Sparkles,
      title: "Gentle Periodontal Soft-Tissue Lasers",
      description: "Targeted laser energy seals gum pockets, removes harmful bacteria, and contours gumlines with minimal bleeding and rapid healing."
    }
  ];

  const comfortAmenities = [
    "Warm, plush fleece blankets & ergonomic neck pillows",
    "Bose® noise-canceling headphones with music or podcast selection",
    "Overhead chairside screens for streaming your favorite shows",
    "Buffered local anesthesia for virtually painless injections",
    "Heated lavender scented towels post-treatment",
    "Private, quiet consultation suites for comprehensive discussions"
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Technology Overview */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-900 mb-3">
                <span>Modern Clinical Equipment</span>
                <span aria-hidden="true">·</span>
                <span>Southside Suite</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight leading-tight">
                State-of-the-Art Technology Meets Boutique Comfort
              </h2>
              <p className="mt-4 text-base text-slate-600 font-light leading-relaxed">
                We continuously invest in leading-edge dental diagnostic and restorative technologies so that your treatments are faster, remarkably gentle, and built to endure for decades.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {technologies.map((tech, idx) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#FAF9F5] border border-amber-900/10 hover:border-amber-900/30 transition-all space-y-2.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-base text-slate-900">
                      {tech.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Anxiety-Free Comfort Menu & Imagery */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#FAF8F3] rounded-3xl p-6 sm:p-8 border border-amber-900/10 shadow-lg space-y-6">
              <div className="flex items-center gap-2.5">
                <Smile className="w-6 h-6 text-amber-800" />
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Our Patient Comfort Menu
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Dental anxiety is real, and we take your comfort seriously. Before your appointment begins, simply tell our team how you’d like to customize your visit:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {comfortAmenities.map((amenity, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200/70 shadow-2xs">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>

              {/* Serene operatory image thumbnail */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-amber-900/10 shadow-sm mt-4">
                <img
                  src="/assets/images/cerec-suite.jpg"
                  alt="Jacksonville Family Dentistry Serene Treatment Operatory"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 text-white text-xs font-medium">
                  Operatories with expansive natural light & botanical views
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
