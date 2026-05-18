'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    name: 'Indira Gandhi International Airport',
    type: 'Airport Infrastructure',
    year: '2022',
    location: 'New Delhi',
    image: '/assets/images/Delhi T1.jpeg',
  },
  {
    id: 2,
    name: 'Rajiv Gandhi International Airport',
    type: 'Airport Infrastructure',
    year: '2021',
    location: 'Hyderabad',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.13 PM.jpeg',
  },
  {
    id: 3,
    name: 'Kempegowda International Airport',
    type: 'Airport Infrastructure',
    year: '2022',
    location: 'Bangalore',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.14 PM.jpeg',
  },
  {
    id: 4,
    name: 'Coconut Peninsula Resort',
    type: 'Hospitality',
    year: '2022',
    location: 'Tangi, Odisha',
    image: '/assets/images/coconut peninsula resort.jpg',
  },
  {
    id: 5,
    name: 'Babasaheb Ambedkar Bus Terminal',
    type: 'Public Infrastructure',
    year: '2023',
    location: 'India',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.19 PM.jpeg',
  },
  {
    id: 6,
    name: 'DN Regalia Mall',
    type: 'Commercial',
    year: '2023',
    location: 'Bhubaneswar',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.20 PM.jpeg',
  },
];

export default function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const prev = () => setActiveIndex((i) => (i - 1 + projects?.length) % projects?.length);
  const next = () => setActiveIndex((i) => (i + 1) % projects?.length);

  return (
    <section ref={sectionRef} id="work" className="bg-[#202A30] py-16 lg:py-20">
      <div className="px-5 lg:px-10">
        <div className="max-w-[1440px] mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-10">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#FDC41F">
              <circle cx="6" cy="6" r="6" />
            </svg>
            <span className="text-white text-sm font-semibold">Featured projects</span>
            <div
              className="h-px bg-white/10 transition-all duration-1000"
              style={{ flex: visible ? '1' : '0', opacity: visible ? 1 : 0 }}
            />
          </div>

          {/* Main layout: image left, content right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left - Image */}
            <div
              className={`relative overflow-hidden transition-all duration-1000 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ aspectRatio: '4/3' }}
            >
              {projects?.map((project, i) => (
                <img
                  key={i}
                  src={project?.image}
                  alt={project?.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                  style={{ opacity: activeIndex === i ? 1 : 0 }}
                />
              ))}
            </div>

            {/* Right - Project list + controls */}
            <div className="flex flex-col">
              {/* Pagination dots */}
              <div className="flex items-center gap-2 mb-6">
                {projects?.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`rounded-full transition-all duration-300 ${
                      activeIndex === i ? 'bg-white w-6 h-1.5' : 'bg-white/30 w-1.5 h-1.5'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Project list */}
              <div className="mb-8">
                {projects?.map((project, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-full text-left py-4 border-b border-white/10 transition-all duration-200 ${
                      activeIndex === i ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`font-medium transition-colors text-sm ${
                          activeIndex === i ? 'text-white' : 'text-white/60'
                        }`}
                      >
                        {project?.name}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-white/40 flex-shrink-0">
                        <span className="hidden sm:inline">{project?.type}</span>
                        <span>{project?.year}</span>
                        <span className="hidden md:inline">{project?.location}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation + CTA */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={prev}
                    className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:border-white transition-colors"
                    aria-label="Previous slide"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 12L4 12M4 12L10 18M4 12L10 6" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:border-white transition-colors"
                    aria-label="Next slide"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12H20M20 12L14 6M20 12L14 18" />
                    </svg>
                  </button>
                </div>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-3 text-white/60 text-sm hover:text-white transition-colors group"
                >
                  See all projects
                  <span className="group-hover:translate-x-1 transition-transform">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12H20M20 12L14 6M20 12L14 18" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
