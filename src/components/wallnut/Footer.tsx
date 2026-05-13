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
    { href: '/contact', label: 'Contact' },
  ];

  const partners = ['HunterDouglas', 'Ramco', 'Saint Gobain', 'Philips', 'Armstrong'];

  return (
    <footer ref={footerRef} style={{ background: '#202A30', fontFamily: 'Inter, sans-serif', position: 'relative', overflow: 'hidden' }}>

      {/* ── decorative large background text ── */}
      <div style={{
        position: 'absolute', bottom: '4rem', left: '50%',
        transform: 'translateX(-50%)',
        fontSize: 'clamp(6rem, 18vw, 18rem)',
        fontWeight: 900, letterSpacing: '-0.04em',
        color: 'rgba(255,255,255,0.025)',
        whiteSpace: 'nowrap', pointerEvents: 'none',
        userSelect: 'none', lineHeight: 1,
      }}>
        SAI AAKANKSHYA
      </div>

      {/* ── gold top accent ── */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #FDC41F 0%, rgba(253,196,31,0.4) 50%, transparent 100%)' }} />

      {/* ══════════════════════════════════════════
          BIG CTA HEADLINE
      ══════════════════════════════════════════ */}
      <div style={{ padding: 'clamp(3rem,6vw,6rem) clamp(2rem,5vw,5rem) 0', position: 'relative' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginBottom: 'clamp(3rem,5vw,5rem)', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 'clamp(3rem,5vw,5rem)' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="#FDC41F" /></svg>
                <span style={{ color: 'rgba(253,196,31,0.8)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase' }}>
                  Let's Build Together
                </span>
              </div>
              <h2 style={{
                color: '#ffffff',
                fontSize: 'clamp(2.8rem, 6vw, 6rem)',
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                margin: 0,
              }}>
                Have a project<br />
                <span style={{ color: '#FDC41F' }}>in mind?</span>
              </h2>
            </div>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              background: '#FDC41F', color: '#202A30',
              padding: '1.1rem 2.5rem', fontSize: '0.85rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
              whiteSpace: 'nowrap', flexShrink: 0,
            }}>
              Get in Touch
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12H20M20 12L14 6M20 12L14 18" />
              </svg>
            </Link>
          </div>

          {/* ══════════════════════════════════════════
              MAIN FOOTER GRID
          ══════════════════════════════════════════ */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1px 2fr', gap: 0, marginBottom: 'clamp(3rem,5vw,5rem)' }}>

            {/* ── LEFT: Nav ── */}
            <div style={{ paddingRight: 'clamp(2rem,4vw,4rem)' }}>
              <p style={{ color: 'rgba(253,196,31,0.7)', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '2rem' }}>
                Pages
              </p>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                {navLinks.map((link, i) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      color: 'rgba(255,255,255,0.45)',
                      fontSize: 'clamp(1.6rem, 2.8vw, 2.6rem)',
                      fontWeight: 700,
                      lineHeight: 1.2,
                      textDecoration: 'none',
                      letterSpacing: '-0.02em',
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'translateY(0)' : 'translateY(16px)',
                      transitionProperty: 'opacity, transform, color',
                      transitionDuration: '0.55s',
                      transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
                      transitionDelay: `${i * 0.07}s`,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#FDC41F';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.45)';
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* ── VERTICAL DIVIDER ── */}
            <div style={{ background: 'rgba(255,255,255,0.08)' }} />

            {/* ── RIGHT: Contact + Company ── */}
            <div style={{ paddingLeft: 'clamp(2rem,4vw,4rem)', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0' }}>

              {/* Contact */}
              <div style={{ paddingRight: '2rem', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                <p style={{ color: 'rgba(253,196,31,0.7)', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '2rem' }}>
                  Contact
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <a href="tel:9040099001"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', fontWeight: 500, textDecoration: 'none', transitionProperty: 'color', transitionDuration: '0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}>
                    <span style={{ width: '28px', height: '28px', background: 'rgba(253,196,31,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FDC41F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                      </svg>
                    </span>
                    +91 9040099001
                  </a>
                  <a href="mailto:saiaakankshya.associates@gmail.com"
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none', lineHeight: 1.5, transitionProperty: 'color', transitionDuration: '0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}>
                    <span style={{ width: '28px', height: '28px', background: 'rgba(253,196,31,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FDC41F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                      </svg>
                    </span>
                    saiaakankshya.<br />associates@gmail.com
                  </a>
                </div>
              </div>

              {/* Office */}
              <div style={{ padding: '0 2rem', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                <p style={{ color: 'rgba(253,196,31,0.7)', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '2rem' }}>
                  Office
                </p>
                <a href="https://maps.google.com/?q=Rasulgarh,Bhubaneswar,Odisha" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', fontWeight: 500, textDecoration: 'none', lineHeight: 1.7, transitionProperty: 'color', transitionDuration: '0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}>
                  <span style={{ width: '28px', height: '28px', background: 'rgba(253,196,31,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FDC41F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span>Plot No 36, Nuasahi,<br />Rasulgarh, Bhubaneswar,<br />Odisha – 751010</span>
                </a>
              </div>

              {/* Company */}
              <div style={{ paddingLeft: '2rem' }}>
                <p style={{ color: 'rgba(253,196,31,0.7)', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '2rem' }}>
                  Company
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[
                    { label: 'GSTN', value: '21AEJFS7979B1ZT' },
                    { label: 'Founded', value: '2021' },
                    { label: 'Founder', value: 'Mr. Debasis Mohapatra' },
                  ].map((item, i) => (
                    <div key={i}>
                      <p style={{ color: 'rgba(255,255,255,0.22)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{item.label}</p>
                      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', fontWeight: 600, margin: 0 }}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ══════════════════════════════════════════
              PARTNERS STRIP
          ══════════════════════════════════════════ */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 'clamp(1.5rem,3vw,3rem)',
            flexWrap: 'wrap', padding: '1.5rem 0',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            marginBottom: '2rem',
          }}>
            <span style={{ color: 'rgba(253,196,31,0.6)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
              Strategic Partners
            </span>
            <div style={{ width: '1px', height: '1.2rem', background: 'rgba(255,255,255,0.12)', flexShrink: 0 }} />
            {partners.map((brand, i) => (
              <span key={i}
                style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.02em', cursor: 'default', transitionProperty: 'color', transitionDuration: '0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}>
                {brand}
              </span>
            ))}
          </div>

          {/* ══════════════════════════════════════════
              BOTTOM BAR
          ══════════════════════════════════════════ */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', paddingBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <WallnutLogo color="#FDC41F" className="h-6 w-auto" />
              <span style={{ color: 'rgba(255,255,255,0.18)', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                © SAI AAKANKSHYA ASSOCIATES 2024
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <Link href="/privacy-policy"
                style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.78rem', textDecoration: 'none', letterSpacing: '0.05em', transitionProperty: 'color', transitionDuration: '0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}>
                Privacy Policy
              </Link>
              <Link href="/cookie-policy"
                style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.78rem', textDecoration: 'none', letterSpacing: '0.05em', transitionProperty: 'color', transitionDuration: '0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}>
                Cookie Policy
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
