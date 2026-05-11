'use client';

import { useState, useRef, useEffect } from 'react';

const timelineItems = [
  {
    step: 'Assess it',
    heading: 'Site Assessment',
    description: "We begin with a thorough site assessment and feasibility study — understanding the project scope, structural requirements, and client vision to lay the foundation for precise execution planning.",
    posterUrl: 'https://images.pexels.com/photos/236722/pexels-photo-236722.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: '',
    highlights: [
      { label: 'Scope Analysis', value: 'Structural & spatial review' },
      { label: 'Feasibility', value: 'Budget & timeline mapping' },
      { label: 'Scale handled', value: '1,000 – 11,000+ sqm' },
    ],
  },
  {
    step: 'Plan it',
    heading: 'Execution Planning',
    description: 'Our experienced team develops a detailed execution plan — material selection, timeline mapping, vendor coordination, and quality benchmarks — ensuring every project is delivered on time and on spec.',
    posterUrl: 'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: '',
    highlights: [
      { label: 'Material partners', value: 'HunterDouglas · Saint Gobain · Armstrong' },
      { label: 'Coordination', value: 'Vendor & site scheduling' },
      { label: 'Quality benchmarks', value: 'Set before ground breaks' },
    ],
  },
  {
    step: 'Execute it',
    heading: 'Precision Execution',
    description: "With 28 years of leadership expertise and partnerships with HunterDouglas, Saint Gobain, and Armstrong, we execute ceiling, cladding, civil, and facade works with uncompromising quality at any scale.",
    posterUrl: 'https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: '',
    highlights: [
      { label: 'Expertise', value: '28 years of industry leadership' },
      { label: 'Sectors', value: 'Airports · Institutions · Hospitality' },
      { label: 'Capabilities', value: 'Ceiling · Cladding · Civil · Facade' },
    ],
  },
  {
    step: 'Deliver it',
    heading: 'Handover & Beyond',
    description: 'Every project concludes with a thorough quality inspection and formal handover — from KIIT University to Indira Gandhi International Airport, we deliver spaces that stand the test of time.',
    posterUrl: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: '',
    highlights: [
      { label: 'Projects delivered', value: '12+ landmark projects' },
      { label: 'Footprint', value: 'Pan-India execution' },
      { label: 'Post-handover', value: 'Quality assurance & support' },
    ],
  },
];

export default function TimelineSection() {
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

  const active = timelineItems?.[activeIndex];

  return (
    <section ref={sectionRef} className="bg-white py-20">
      <div className="px-8 lg:px-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left - 2x2 video/image grid */}
            <div className="grid grid-cols-2 gap-3">
              {timelineItems?.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`relative overflow-hidden transition-all duration-300 ${
                    activeIndex === i ? 'ring-2 ring-[#FDC41F]' : 'opacity-60 hover:opacity-90'
                  }`}
                  style={{ aspectRatio: '4/3' }}
                >
                  <img
                    src={item?.posterUrl}
                    alt={item?.heading}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#202A30]/30" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-white text-xs font-semibold">{item?.step}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right - Content */}
            <div className="flex flex-col">
              {/* Step indicator */}
              <div className="flex items-center gap-3 mb-8">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="6" fill="#FDC41F" />
                </svg>
                <div className="flex items-center gap-4 flex-wrap">
                  {timelineItems?.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`text-sm font-semibold transition-colors ${
                        activeIndex === i ? 'text-[#202A30]' : 'text-[#698996] hover:text-[#202A30]'
                      }`}
                    >
                      {item?.step}
                    </button>
                  ))}
                </div>
              </div>

              {/* Heading */}
              <h2
                className={`font-bold text-[#202A30] mb-6 transition-all duration-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
              >
                {active?.heading}
              </h2>

              {/* Description */}
              <p
                className={`text-[#698996] text-base leading-relaxed transition-all duration-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.1s' }}
              >
                {active?.description}
              </p>

              {/* Step highlights */}
              <div
                className={`mt-8 grid grid-cols-1 gap-0 border-t border-[#698996]/15 transition-all duration-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.2s' }}
              >
                {active?.highlights?.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start justify-between py-3 border-b border-[#698996]/15"
                  >
                    <span className="text-[#698996] text-xs uppercase tracking-widest font-medium">{h.label}</span>
                    <span className="text-[#202A30] text-xs font-semibold text-right ml-4">{h.value}</span>
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="mt-10 flex items-center gap-3">
                <span className="text-[#FDC41F] font-semibold text-sm">0{activeIndex + 1}</span>
                <div className="flex-1 h-px bg-[#698996]/20 relative overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-[#FDC41F] transition-all duration-500"
                    style={{ width: `${(activeIndex + 1) / timelineItems?.length * 100}%` }}
                  />
                </div>
                <span className="text-[#698996] text-sm">04</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
