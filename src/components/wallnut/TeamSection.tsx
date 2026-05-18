'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="team" className="bg-white py-16 lg:py-20">
      <div className="px-5 lg:px-10">
        <div className="max-w-[1440px] mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#FDC41F">
              <circle cx="6" cy="6" r="6" />
            </svg>
            <span className="text-[#202A30] text-sm font-semibold">Our leadership</span>
            <div
              className="h-px bg-[#698996]/30 transition-all duration-1000"
              style={{ flex: visible ? '1' : '0', opacity: visible ? 1 : 0 }}
            />
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-12">
            {/* Left - Heading + CTA */}
            <div className="flex flex-col justify-between gap-10">
              <h3
                className={`text-[#202A30] font-medium transition-all duration-1000 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.5rem)', lineHeight: 1.25, letterSpacing: '-0.02em' }}
              >
                Spearheaded by <span className="font-bold text-[#FDC41F]">Mr. Debasis Mohapatra</span>, whose <span className="font-bold">28 years of distinguished corporate leadership</span> have established SAI AAKANKSHYA ASSOCIATES as a premier powerhouse in elite infrastructure and monumental turnkey execution.
              </h3>

              {/* Founder details */}
              <div
                className={`border-t border-[#698996]/20 pt-6 transition-all duration-1000 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '0.2s' }}
              >
                <div className="flex flex-col gap-2">
                  <span className="text-[#FDC41F] text-xs font-semibold uppercase tracking-widest">Founder & Director</span>
                  <span className="text-[#202A30] font-bold text-lg">Mr. Debasis Mohapatra</span>
                  <span className="text-[#698996] text-sm">28 Years · Infrastructure & Execution · Bhubaneswar, Odisha</span>
                </div>
              </div>

              <Link
                href="/about"
                className={`inline-flex items-center gap-3 border border-[#202A30]/30 text-[#202A30] px-6 py-3 text-sm font-medium hover:border-[#202A30] transition-all duration-300 group w-fit ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '0.3s' }}
              >
                Get to know us
                <span className="group-hover:translate-x-1 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12H20M20 12L14 6M20 12L14 18" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Right - Founder portrait */}
            <div
              className={`relative overflow-hidden transition-all duration-1000 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '0.15s', minHeight: '380px' }}
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mr. Debasis Mohapatra — Founder & Director"
                className="w-full h-full object-cover"
              />
              {/* Name tag overlay */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-3 border-l-4 border-[#FDC41F]">
                <p className="text-[#202A30] font-bold text-sm">Mr. Debasis Mohapatra</p>
                <p className="text-[#698996] text-xs">Founder & Director</p>
              </div>
            </div>
          </div>

          {/* Bottom - Corporate interior image */}
          <div
            className={`relative overflow-hidden transition-all duration-1000 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '0.3s', height: 'clamp(280px, 35vw, 420px)' }}
          >
            <img
              src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Premium corporate interior execution by SAI AAKANKSHYA ASSOCIATES"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#202A30]/60 to-transparent" />
            <div className="absolute bottom-8 left-8 lg:left-10">
              <p className="text-white/80 text-sm mb-2">Premium execution across</p>
              <p className="text-white font-bold text-lg lg:text-xl">Airports · Institutions · Hospitality · Government</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
