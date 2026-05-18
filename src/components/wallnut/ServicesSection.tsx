'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

const servicesList = [
  {
    number: '01',
    title: 'False Ceiling Systems',
    description: 'Gypsum ceiling systems, linear & baffle ceilings, metal and aluminium ceilings — executed at scale from 1000 sqm to 11000+ sqm for airports, institutions, and commercial spaces.',
    items: ['Gypsum Ceiling Systems', 'Linear & Baffle Ceilings', 'Metal & Aluminium Ceilings', 'HDI Ceiling Systems'],
  },
  {
    number: '02',
    title: 'Wall Cladding & Facade',
    description: 'Premium wall cladding and aluminium facade work for airports, malls, and large-scale commercial and institutional infrastructure projects across India.',
    items: ['Wall Cladding', 'Aluminium Facade Work', 'Aluminium Tube Ceiling', 'Architectural Cladding'],
  },
  {
    number: '03',
    title: 'Interior & Exterior Execution',
    description: 'Complete project execution from conceptualization to inauguration — covering hospitality, corporate, institutional, and government infrastructure projects.',
    items: ['Full Interior Execution', 'Exterior Finishing', 'Acoustic Hall Rooms', 'Resort & Hotel Interiors'],
  },
  {
    number: '04',
    title: 'Civil Construction',
    description: 'Structural civil works for power sector, government, and public infrastructure — executed for OPTCL, Tata Power, Power Grid Corporation, and more.',
    items: ['Civil Infrastructure Works', 'Structural Execution', 'Power Sector Projects', 'Government Infrastructure'],
  },
  {
    number: '05',
    title: 'Fire & Security Systems',
    description: 'Integrated fire protection and security system installation for commercial complexes, institutions, airports, and large-scale infrastructure projects.',
    items: ['Fire Protection Systems', 'Security System Integration', 'Safety Compliance', 'Infrastructure Safety'],
  },
  {
    number: '06',
    title: 'Smart Automation & Energy',
    description: 'Smart automation solutions and energy-efficient infrastructure systems designed to future-proof commercial, institutional, and government spaces.',
    items: ['Smart Automation Solutions', 'Energy-Efficient Systems', 'Building Automation', 'Sustainable Infrastructure'],
  },
];

export default function ServicesSection() {
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
    <section ref={sectionRef} id="services" className="bg-[#F5F4F0]">
      {/* Section header */}
      <div className="px-5 lg:px-10 pt-16 pb-0">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#FDC41F">
              <circle cx="6" cy="6" r="6" />
            </svg>
            <span className="text-[#202A30] text-sm font-semibold">Services</span>
            <div
              className="h-px bg-[#698996]/30 transition-all duration-1000"
              style={{ flex: visible ? '1' : '0', opacity: visible ? 1 : 0 }}
            />
          </div>
        </div>
      </div>

      {/* "From concept · to completion" banner */}
      <div className="relative w-full overflow-hidden bg-[#F5F4F0] mt-8" style={{ height: '55vh', minHeight: '380px' }}>
        <img
          src="https://cdn.prod.website-files.com/66c70111b2a812bad4379fb4/67810334eda13e5616286bbd_1.Main.avif"
          alt="Services background"
          className="w-full h-full object-cover"
          style={{ opacity: 0.45 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(245,244,240,0.6) 0%, rgba(245,244,240,0) 25%, rgba(245,244,240,0) 75%, rgba(245,244,240,0.6) 100%)' }} />
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div
            className="flex items-center gap-6 transition-all duration-1000"
            style={{
              transform: visible ? 'translateX(0)' : 'translateX(-60px)',
              opacity: visible ? 1 : 0,
            }}
          >
            <span
              className="font-bold text-[#202A30] whitespace-nowrap"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', lineHeight: 1, letterSpacing: '-0.03em' }}
            >
              From concept
            </span>
            <span
              className="font-bold"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', lineHeight: 1, color: '#FDC41F' }}
            >
              ·
            </span>
            <span
              className="font-bold text-[#202A30] whitespace-nowrap"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', lineHeight: 1, letterSpacing: '-0.03em' }}
            >
              to inauguration
            </span>
          </div>
        </div>
      </div>

      {/* Services grid */}
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {servicesList?.map((service, i) => (
              <div
                key={i}
                className={`p-6 lg:p-12 transition-all duration-1000 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  borderRight: i % 2 === 0 ? '1px solid rgba(105,137,150,0.2)' : 'none',
                  borderBottom: i < servicesList.length - 2 ? '1px solid rgba(105,137,150,0.2)' : 'none',
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div className="text-[#FDC41F] text-sm font-semibold mb-4">{service?.number}</div>
                <h3
                  className="text-[#202A30] font-bold mb-4"
                  style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', lineHeight: 1.2 }}
                >
                  {service?.title}
                </h3>
                <p className="text-[#698996] text-sm leading-relaxed mb-6">{service?.description}</p>
                <ul className="space-y-2">
                  {service?.items?.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-[#202A30]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FDC41F] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA strip */}
      <div className="bg-[#F5F4F0] px-5 lg:px-10 py-12">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p
            className="text-[#202A30] font-medium"
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
          >
            Ready to start your project?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#202A30] text-white font-semibold px-6 py-3 text-sm hover:bg-[#2D3A42] transition-colors group"
          >
            Get in touch
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12H20M20 12L14 6M20 12L14 18" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
