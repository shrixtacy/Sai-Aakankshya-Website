'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import WallnutLogo from './WallnutLogo';

const heroImages = [
  {
    src: '/assets/images/Delhi T1.jpeg',
    alt: 'Indira Gandhi International Airport T1 — premium ceiling and cladding execution.',
    label: 'Airport Infrastructure',
    location: 'New Delhi, India',
  },
  {
    src: '/assets/images/coconut peninsula resort.jpg',
    alt: 'Coconut Peninsula Resort — premium hospitality interior execution.',
    label: 'Hospitality Interior',
    location: 'Tangi, Odisha',
  },
  {
    src: '/assets/images/hero-bedroom.png',
    alt: 'Premium interior design with sophisticated ceiling execution.',
    label: 'Premium Interior',
    location: 'Bhubaneswar, India',
  },
];

const INTERVAL = 5000;

export default function HeroSection() {
  const [activeImg, setActiveImg]   = useState(0);
  const [progress, setProgress]     = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startProgress = () => {
    setProgress(0);
    if (progressRef.current) clearInterval(progressRef.current);
    progressRef.current = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(progressRef.current!); return 100; }
        return p + (100 / (INTERVAL / 50));
      });
    }, 50);
  };

  useEffect(() => {
    startProgress();
    intervalRef.current = setInterval(() => {
      setActiveImg(prev => (prev + 1) % heroImages.length);
      startProgress();
    }, INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, []);

  const goTo = (i: number) => {
    setActiveImg(i);
    if (intervalRef.current) clearInterval(intervalRef.current);
    startProgress();
    intervalRef.current = setInterval(() => {
      setActiveImg(prev => (prev + 1) % heroImages.length);
      startProgress();
    }, INTERVAL);
  };

  const active = heroImages[activeImg];

  return (
    <section
      id="home"
      style={{
        position: 'relative', width: '100%', overflow: 'hidden',
        background: '#202A30', height: '100svh', minHeight: '600px',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* ── Background images ── */}
      {heroImages.map((img, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          opacity: activeImg === i ? 1 : 0,
          transition: 'opacity 1.2s cubic-bezier(0.4,0,0.2,1)',
        }}>
          <img src={img.src} alt={img.alt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        </div>
      ))}

      {/* ── Cinematic overlay — gradient from bottom-left ── */}
      <div style={{
        position: 'absolute', inset: 0,
        background: [
          'linear-gradient(to top,    rgba(32,42,48,0.92) 0%,  rgba(32,42,48,0.3) 40%, transparent 70%)',
          'linear-gradient(to right,  rgba(32,42,48,0.6) 0%,   transparent 60%)',
        ].join(', '),
      }} />
      {/* subtle vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.35) 100%)',
      }} />

      {/* ── Full-height content ── */}
      <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column' }}>

        {/* ── ROW 1: Navbar — desktop only ── */}
        <div className="hidden lg:block" style={{ flexShrink: 0, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ padding: '1.5rem clamp(2rem,2.5vw,2.5rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href="/">
              <WallnutLogo color="white" className="h-7 w-auto" />
            </Link>
            <nav style={{ display: 'none' }} className="lg-nav">
              {/* handled by Navbar component */}
            </nav>
            {/* desktop nav */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Work', href: '/work' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map(item => (
                <Link key={item.label} href={item.href}
                  style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none', letterSpacing: '0.02em' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* ── DESKTOP rows (lg+) ── */}
        <div className="hidden lg:flex" style={{ flex: 1, flexDirection: 'column' }}>
          {/* ROW 2: Premium */}
          <div style={{ flex: 1, borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'flex-end' }}>
            <div style={{ width: '100%', padding: '0 clamp(2rem,2.5vw,2.5rem) 1.5rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <h1 style={{ color: '#fff', fontWeight: 800, lineHeight: 0.88, fontSize: 'clamp(4rem, 10vw, 10.5rem)', letterSpacing: '-0.04em', margin: 0 }}>
                Premium
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.35em', textTransform: 'uppercase' }}>
                Airports · Institutions · Hospitality
              </p>
            </div>
          </div>
          {/* ROW 3: Execution + Build */}
          <div style={{ flex: 1, borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '100%', padding: '0 clamp(2rem,2.5vw,2.5rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.35em', textTransform: 'uppercase' }}>
                Ceiling · Cladding · Civil · Facade
              </p>
              <h2 style={{ color: '#fff', fontWeight: 800, lineHeight: 1, fontSize: 'clamp(2.5rem, 6.5vw, 6.5rem)', letterSpacing: '-0.03em', margin: '0 0 0 auto', textAlign: 'right' }}>
                Execution + Build
              </h2>
            </div>
          </div>
          {/* ROW 4: across India */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '100%', padding: '0 clamp(2rem,2.5vw,2.5rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.35em', textTransform: 'uppercase' }}>
                Commercial · Government · Infrastructure
              </p>
              <h2 style={{ color: '#FDC41F', fontWeight: 800, lineHeight: 1, fontSize: 'clamp(2.5rem, 6.5vw, 6.5rem)', letterSpacing: '-0.03em', margin: '0 0 0 auto', textAlign: 'right' }}>
                across India
              </h2>
            </div>
          </div>
        </div>

        {/* ── MOBILE headline (below lg) ── */}
        <div
          className="flex lg:hidden flex-col justify-end"
          style={{ flex: 1, padding: '0 1.5rem 8.5rem' }}
        >
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Ceiling · Cladding · Civil · Facade
          </p>
          <h1 style={{ color: '#fff', fontWeight: 800, fontSize: 'clamp(2.6rem, 11vw, 4.5rem)', letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0 }}>
            Premium<br />Execution<br />+ Build{' '}
            <span style={{ color: '#FDC41F' }}>across India</span>
          </h1>
        </div>

      </div>

      {/* ── Est. 2021 badge — desktop only, sits above Execution + Build row ── */}
      <div className="hidden lg:flex" style={{
        position: 'absolute', top: 'clamp(5.5rem, 12vw, 9rem)', right: 'clamp(2rem,2.5vw,2.5rem)',
        zIndex: 20, flexDirection: 'column', alignItems: 'center',
      }}>
        <div style={{
          border: '1px solid rgba(255,255,255,0.15)',
          padding: '0.75rem 1rem',
          textAlign: 'center',
          backdropFilter: 'blur(8px)',
          background: 'rgba(32,42,48,0.4)',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.55rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Est.</p>
          <p style={{ color: '#FDC41F', fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-0.02em', margin: 0 }}>2021</p>
        </div>
      </div>

      {/* ── BOTTOM LEFT: Slide controls + Explore + Image info — desktop only ── */}
      <div className="hidden lg:flex flex-col items-start" style={{
        position: 'absolute', bottom: '2.5rem', left: 'clamp(2rem,2.5vw,2.5rem)',
        zIndex: 20, gap: '1.25rem',
      }}>
        {/* 1. Counter + Progress bars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 700 }}>
              {String(activeImg + 1).padStart(2, '0')}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.7rem' }}>/</span>
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem' }}>
              {String(heroImages.length).padStart(2, '0')}
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'flex-start' }}>
            {heroImages.map((_, i) => (
              <button key={i} onClick={() => goTo(i)}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                aria-label={`Go to slide ${i + 1}`}
              >
                <div style={{
                  height: '2px',
                  width: activeImg === i ? '3rem' : '1rem',
                  background: 'rgba(255,255,255,0.2)',
                  position: 'relative', overflow: 'hidden',
                  transition: 'width 0.4s cubic-bezier(0.22,1,0.36,1)',
                }}>
                  {activeImg === i && (
                    <div style={{
                      position: 'absolute', inset: '0 auto 0 0',
                      background: '#FDC41F',
                      width: `${progress}%`,
                      transition: 'width 0.05s linear',
                    }} />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Scroll to explore */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}>Scroll to explore</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9L12 15L18 9" />
          </svg>
        </div>

        {/* 3. Bottom line: Active image info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '1.5rem', height: '1px', background: '#FDC41F' }} />
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            {active.label}
          </span>
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.65rem' }}>—</span>
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.65rem', letterSpacing: '0.08em' }}>
            {active.location}
          </span>
        </div>
      </div>

      {/* ── MOBILE: Slide controls + Explore + Image info bottom-left ── */}
      <div className="flex lg:hidden flex-col" style={{
        position: 'absolute', bottom: '2rem', left: '1.5rem',
        zIndex: 20, gap: '1rem',
      }}>
        {/* 1. Counter + Progress bars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 700 }}>
              {String(activeImg + 1).padStart(2, '0')}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.65rem' }}>/</span>
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem' }}>
              {String(heroImages.length).padStart(2, '0')}
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', alignItems: 'flex-start' }}>
            {heroImages.map((_, i) => (
              <button key={i} onClick={() => goTo(i)}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                aria-label={`Go to slide ${i + 1}`}
              >
                <div style={{
                  height: '2px',
                  width: activeImg === i ? '2.5rem' : '0.75rem',
                  background: 'rgba(255,255,255,0.2)',
                  position: 'relative', overflow: 'hidden',
                  transition: 'width 0.4s cubic-bezier(0.22,1,0.36,1)',
                }}>
                  {activeImg === i && (
                    <div style={{
                      position: 'absolute', inset: '0 auto 0 0',
                      background: '#FDC41F',
                      width: `${progress}%`,
                      transition: 'width 0.05s linear',
                    }} />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Tap to explore */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}>Tap to explore</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9L12 15L18 9" />
          </svg>
        </div>

        {/* 3. Bottom line: Active image info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '1rem', height: '1px', background: '#FDC41F' }} />
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            {active.label}
          </span>
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.6rem' }}>—</span>
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.6rem', letterSpacing: '0.08em' }}>
            {active.location}
          </span>
        </div>
      </div>
    </section>
  );
}
