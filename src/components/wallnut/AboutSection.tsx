'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

const constructionZones = [
  {
    number: '01',
    title: 'Ceiling &\nCladding Systems',
    description: 'Precision-executed false ceiling systems, linear & baffle ceilings, gypsum, metal, and aluminium ceilings — from 1000 sqm to 11000+ sqm across airports, institutions, and commercial spaces.',
    image: 'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Large-scale ceiling execution with linear and baffle ceiling systems in an airport terminal.',
  },
  {
    number: '02',
    title: 'Interior & Exterior\nExecution',
    description: 'Complete interior and exterior project execution from conceptualization to inauguration — covering hospitality, corporate, institutional, and government infrastructure projects across India.',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Premium interior execution for commercial and hospitality infrastructure projects.',
  },
  {
    number: '03',
    title: 'Civil &\nInfrastructure Works',
    description: 'Comprehensive civil construction, aluminium facade work, fire & security systems, and smart automation solutions for power sector, public transport, and large-scale infrastructure projects.',
    image: 'https://images.pexels.com/photos/236722/pexels-photo-236722.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Civil infrastructure and construction execution for power and government sector projects.',
  },
];

export default function AboutSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    <section ref={sectionRef} id="about" className="bg-white">
      {/* Section header */}
      <div className="px-5 lg:px-10 pt-16 pb-0">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4 mb-0">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#FDC41F">
              <circle cx="6" cy="6" r="6" />
            </svg>
            <span className="text-[#202A30] text-sm font-semibold">Our execution zones</span>
            <div
              className="h-px bg-[#698996]/30 transition-all duration-1000"
              style={{ flex: visible ? '1' : '0', opacity: visible ? 1 : 0 }}
            />
          </div>
        </div>
      </div>

      {/* Main content grid */}
      <div className="px-5 lg:px-10 pt-12 pb-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            {/* Left - Heading */}
            <div>
              <h3
                className={`text-[#202A30] font-medium transition-all duration-1000 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.6rem)', lineHeight: 1.25, letterSpacing: '-0.02em' }}
              >
                Pioneering master-grade infrastructure execution across India. We merge <span className="font-bold text-[#FDC41F]">uncompromising technical precision</span> with architectural elegance, delivering monumental ceiling, cladding, civil, and turnkey interior solutions for the nation&apos;s most prestigious landmarks.
              </h3>
            </div>

            {/* Right - Logo + CTA */}
            <div
              className={`flex flex-col items-center justify-center gap-6 rounded-sm transition-all duration-1000 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: '0.2s',
                background: 'linear-gradient(135deg, #F5F4F0 0%, #eceae4 100%)',
                padding: 'clamp(2rem, 4vw, 3.5rem)',
                minHeight: '280px',
              }}
            >
              {/* Logo */}
              <img
                src="/assets/images/saia.png"
                alt="SAI AAKANKSHYA ASSOCIATES — Premium Infrastructure Execution"
                className="w-full object-contain"
                style={{ height: 'clamp(120px, 16vw, 180px)' }}
              />

              {/* Company name under logo */}
              <div className="text-center">
                <p className="text-[#202A30] font-bold text-sm tracking-widest uppercase">SAI AAKANKSHYA ASSOCIATES</p>
                <p className="text-[#698996] text-xs mt-1 tracking-wide">Est. 2021 · Bhubaneswar, India</p>
              </div>

              {/* Divider */}
              <div className="w-12 h-px bg-[#FDC41F]" />

              {/* CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-[#202A30]/30 text-[#202A30] px-6 py-3 text-sm font-medium hover:border-[#202A30] hover:bg-[#202A30] hover:text-white transition-all duration-300 group"
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
        </div>
      </div>

      {/* Three columns */}
      <div className="border-t border-[#698996]/20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {constructionZones?.map((zone, i) => (
              <div
                key={i}
                className="relative overflow-hidden cursor-pointer group"
                style={{
                  borderRight: i < 2 ? '1px solid rgba(105,137,150,0.2)' : 'none',
                  borderBottom: 'none',
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hover image */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ opacity: hoveredIndex === i ? 1 : 0 }}
                >
                  <img
                    src={zone?.image}
                    alt={zone?.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#202A30]/60" />
                </div>

                {/* Content */}
                <div
                  className="relative z-10 px-8 lg:px-10 py-10 transition-colors duration-500"
                  style={{ color: hoveredIndex === i ? 'white' : '#202A30' }}
                >
                  <div
                    className={`text-sm font-semibold mb-4 transition-all duration-700 ${
                      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ color: '#FDC41F', transitionDelay: `${i * 0.15}s` }}
                  >
                    {zone?.number}
                  </div>
                  <h3
                    className={`font-semibold mb-4 transition-all duration-700 ${
                      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', lineHeight: 1.3, transitionDelay: `${i * 0.15 + 0.1}s`, whiteSpace: 'pre-line' }}
                  >
                    {zone?.title}
                  </h3>

                  {/* Mobile image */}
                  <div className="md:hidden mb-4 overflow-hidden">
                    <img src={zone?.image} alt={zone?.alt} className="w-full h-48 object-cover" />
                  </div>

                  <p
                    className={`text-sm leading-relaxed transition-all duration-700 ${
                      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{
                      color: hoveredIndex === i ? 'rgba(255,255,255,0.8)' : '#698996',
                      transitionDelay: `${i * 0.15 + 0.2}s`
                    }}
                  >
                    {zone?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
