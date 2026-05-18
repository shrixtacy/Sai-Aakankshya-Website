'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CTASection() {
  const [isHolding, setIsHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const holdTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const ctaTexts = ["Let's build together", 'Hold to confirm', 'Almost there...', "Let's go!"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const startHold = () => {
    setIsHolding(true);
    setProgress(0);
    setTextIndex(1);
    let p = 0;
    holdTimerRef.current = setInterval(() => {
      p += 2;
      setProgress(p);
      if (p >= 50) setTextIndex(2);
      if (p >= 100) {
        setTextIndex(3);
        clearInterval(holdTimerRef.current!);
        setTimeout(() => {
          router.push('/contact');
        }, 600);
      }
    }, 40);
  };

  const endHold = () => {
    if (holdTimerRef.current) clearInterval(holdTimerRef.current);
    if (progress < 100) {
      setIsHolding(false);
      setProgress(0);
      setTextIndex(0);
    }
  };

  return (
    <section ref={sectionRef} className="bg-[#202A30] py-16 lg:py-20">
      <div className="px-5 lg:px-10">
        <div className="max-w-[1440px] mx-auto">
          {/* Heading */}
          <div className="mb-12">
            <h2
              className={`font-bold text-white transition-all duration-1000 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em', maxWidth: '900px' }}
            >
              Let&apos;s Build Exceptional Spaces Together
            </h2>
          </div>

          {/* Animated divider */}
          <div className="h-px bg-white/10 mb-8 overflow-hidden">
            <div
              className="h-full bg-[#FDC41F] transition-all duration-1000"
              style={{ width: visible ? '100%' : '0%' }}
            />
          </div>

          {/* Hold-to-book CTA */}
          <div
            className={`transition-all duration-1000 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <button
              onMouseDown={startHold}
              onMouseUp={endHold}
              onMouseLeave={endHold}
              onTouchStart={startHold}
              onTouchEnd={endHold}
              className="relative inline-flex items-center gap-6 bg-[#FDC41F] text-[#202A30] font-semibold px-8 py-4 text-base overflow-hidden select-none cursor-pointer w-full sm:w-auto"
              style={{ minWidth: '280px' }}
            >
              {/* Progress fill */}
              <div
                className="absolute inset-0 bg-[#202A30]/15 transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
              {/* Text */}
              <span className="relative z-10">{ctaTexts[textIndex]}</span>
              {/* Arrow */}
              <div className="relative z-10 ml-auto">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12H20M20 12L14 6M20 12L14 18" />
                </svg>
              </div>
            </button>
            <p className="text-white/30 text-xs mt-3">Click and hold to start your project inquiry</p>
          </div>
        </div>
      </div>
    </section>
  );
}
