'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import WallnutLogo from './WallnutLogo';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (footerRef?.current) observer?.observe(footerRef?.current);
    return () => observer?.disconnect();
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <footer ref={footerRef} className="bg-[#202A30] pt-16 pb-8">
      <div className="px-8 lg:px-10">
        <div className="max-w-[1440px] mx-auto">

          {/* Main footer content: nav | divider | contact */}
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1px_1fr] gap-0 mb-0">
            {/* Nav links */}
            <div className="pr-12 lg:pr-16 pb-12 lg:pb-0">
              <nav className="space-y-0">
                {navLinks?.map((link, i) => (
                  <Link
                    key={link?.href}
                    href={link?.href}
                    className={`block text-white/60 hover:text-white transition-all duration-500 ${
                      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{
                      fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                      fontWeight: 600,
                      lineHeight: 1.25,
                      transitionDelay: `${i * 0.1}s`
                    }}
                  >
                    {link?.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Vertical divider */}
            <div className="hidden lg:block bg-white/10" />

            {/* Contact info */}
            <div className="lg:pl-16 pb-12 lg:pb-0">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">

                {/* Col 1: Contact */}
                <div className="sm:pr-8 sm:border-r border-white/10 pb-8 sm:pb-0">
                  <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">Contact</p>
                  <div className="space-y-3">
                    <a href="tel:9040099001" className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors group">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="text-[#FDC41F] flex-shrink-0">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                      </svg>
                      +91 9040099001
                    </a>
                    <a href="mailto:saiaakankshya.associates@gmail.com" className="flex items-start gap-2 text-white/70 hover:text-white text-sm transition-colors group">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="text-[#FDC41F] flex-shrink-0 mt-0.5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span className="break-all">saiaakankshya.associates@gmail.com</span>
                    </a>
                  </div>
                </div>

                {/* Col 2: Address */}
                <div className="sm:px-8 sm:border-r border-white/10 py-8 sm:py-0">
                  <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">Office</p>
                  <div className="flex items-start gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="text-[#FDC41F] flex-shrink-0 mt-0.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                    <a href="https://maps.google.com/?q=Rasulgarh,Bhubaneswar,Odisha" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white text-sm leading-relaxed transition-colors">
                      Plot No 36, Nuasahi,<br />
                      Rasulgarh, Bhubaneswar,<br />
                      Odisha – 751010
                    </a>
                  </div>
                </div>

                {/* Col 3: Company info */}
                <div className="sm:pl-8 pt-8 sm:pt-0">
                  <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">Company</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-white/30 text-xs mb-0.5">GSTN</p>
                      <p className="text-white/70 text-sm font-medium">21AEJFS7979B1ZT</p>
                    </div>
                    <div>
                      <p className="text-white/30 text-xs mb-0.5">Founded</p>
                      <p className="text-white/70 text-sm font-medium">2021</p>
                    </div>
                    <div>
                      <p className="text-white/30 text-xs mb-0.5">Founder</p>
                      <p className="text-white/70 text-sm font-medium">Mr. Debasis Mohapatra</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 my-8" />

          {/* Bottom bar */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Logo + copyright */}
            <div className="flex items-center gap-4">
              <WallnutLogo color="#FDC41F" className="h-6 w-auto" />
              <span className="text-white/30 text-xs">Copyright © SAI AAKANKSHYA ASSOCIATES 2024</span>
            </div>

            {/* Policy links + Made by */}
            {/* Policy links */}
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="text-white/30 text-xs hover:text-white/60 transition-colors">Privacy Policy</Link>
              <Link href="/cookie-policy" className="text-white/30 text-xs hover:text-white/60 transition-colors">Cookie Policy</Link>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 my-8" />

          {/* Strategic partner brands */}
          <div className="flex flex-wrap items-center gap-8">
            <span className="text-white/30 text-xs font-semibold uppercase tracking-widest">Strategic Partners</span>
            {['HunterDouglas', 'Ramco', 'Saint Gobain', 'Philips', 'Armstrong'].map((brand, i) => (
              <span key={i} className="text-white/50 text-sm font-semibold hover:text-white/80 transition-colors tracking-wide">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
