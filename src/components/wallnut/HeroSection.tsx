'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import WallnutLogo from './WallnutLogo';

const heroImages = [
  {
    src: 'https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Magnificent modern interior with soaring ceilings and premium architectural execution.',
  },
  {
    src: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Spectacular architectural interior showcasing world-class ceiling systems and design excellence.',
  },
  {
    src: '/assets/images/hero-bedroom.png',
    alt: 'Elegant bedroom interior with premium ceiling design and sophisticated architectural finishing.',
  },
];

export default function HeroSection() {
  const [activeImg, setActiveImg] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#202A30]"
      style={{ height: '100svh', minHeight: '600px' }}
    >
      {/* Background Images */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: activeImg === i ? 1 : 0 }}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#202A30]/40" />

      {/* Full height content */}
      <div className="relative z-10 h-full flex flex-col">

        {/* ROW 1 - Logo + Lang + Nav (top) */}
        <div className="flex-none border-b border-white/10">
          <div className="px-8 lg:px-10 py-6 flex items-center justify-between">
            {/* Logo + Lang */}
            <div className="flex flex-col gap-4">
              <Link href="/">
                <WallnutLogo color="white" className="h-7 w-auto" />
              </Link>

            </div>
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Work', href: '/work' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white/80 hover:text-white text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* ROW 2 - "High-end" left + "Residential and Signature Properties" right */}
        <div className="flex-1 border-b border-white/10 flex items-end">
          <div className="w-full px-8 lg:px-10 pb-6 flex items-end justify-between">
            <h1
              className="text-white font-bold leading-none"
              style={{ fontSize: 'clamp(4rem, 10vw, 10.5rem)', letterSpacing: '-0.03em', lineHeight: 0.9 }}
            >
              Premium
            </h1>
            <div className="text-right hidden lg:block">
              <p className="text-white/70 text-sm font-medium tracking-widest uppercase mb-2">Airports · Institutions · Hospitality</p>
            </div>
          </div>
        </div>

        {/* ROW 3 - "Professional and Adaptive Spaces" left + "Design + Build" right */}
        <div className="flex-1 border-b border-white/10 flex items-center">
          <div className="w-full px-8 lg:px-10 flex items-center justify-between">
            <p className="text-white/70 text-sm font-medium tracking-widest uppercase hidden lg:block">Ceiling · Cladding · Civil · Facade</p>
            <h2
              className="text-white font-bold text-right ml-auto"
              style={{ fontSize: 'clamp(2.5rem, 6.5vw, 6.5rem)', letterSpacing: '-0.02em', lineHeight: 1 }}
            >
              Execution + Build
            </h2>
          </div>
        </div>

        {/* ROW 4 - "Hospitality and Wellness" left + "for elevated living" right */}
        <div className="flex-1 flex items-center">
          <div className="w-full px-8 lg:px-10 flex items-center justify-between">
            <div className="hidden lg:block">
              <p className="text-white/70 text-sm font-medium tracking-widest uppercase">Commercial · Government · Infrastructure</p>
            </div>
            <h2
              className="text-white font-bold text-right ml-auto"
              style={{ fontSize: 'clamp(2.5rem, 6.5vw, 6.5rem)', letterSpacing: '-0.02em', lineHeight: 1 }}
            >
              across India
            </h2>
          </div>
        </div>

        {/* Mobile text */}
        <div className="lg:hidden px-8 pb-20">
          <h1
            className="text-white font-bold"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            Premium Execution + Build across India
          </h1>
        </div>

        {/* Bottom explore on desktop */}
        <div className="hidden lg:flex absolute bottom-8 left-10 items-center gap-2 z-20">
          <span className="text-white/60 text-sm">Explore</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
            <path d="M6 9L12 15L18 9" />
          </svg>
        </div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-8 right-10 z-20 flex items-center gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveImg(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeImg === i ? 'bg-white w-6' : 'bg-white/40 w-1.5'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
