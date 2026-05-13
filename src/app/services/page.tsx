'use client';

import { useState } from 'react';
import Navbar from '@/components/wallnut/Navbar';
import Footer from '@/components/wallnut/Footer';
import Link from 'next/link';

const FONT = 'Inter, sans-serif';
const GOLD = '#FDC41F';
const DARK = '#202A30';
const PAD  = 'clamp(2rem,5vw,5rem)';

const services = [
  {
    number: '01',
    title: 'False Ceiling Systems',
    description: 'Precision-executed ceiling systems across airports, institutions, and commercial spaces — from gypsum and HDI systems to linear, baffle, metal, and aluminium ceilings at any scale.',
    items: ['Gypsum Ceiling Systems', 'Linear & Baffle Ceilings', 'Metal & Aluminium Ceilings', 'HDI Ceiling Systems (600×600)'],
  },
  {
    number: '02',
    title: 'Wall Cladding & Aluminium Facade',
    description: 'Premium wall cladding and aluminium facade execution for airports, malls, and large-scale commercial and institutional infrastructure projects across India.',
    items: ['Wall Cladding', 'Aluminium Facade Work', 'Aluminium Tube Ceiling', 'Architectural Cladding Systems'],
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

export default function ServicesPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <main style={{ minHeight: '100vh', background: '#F5F4F0', fontFamily: FONT }}>
      <Navbar />

      {/* ══ HERO ══ */}
      <section style={{
        paddingTop: '9rem', paddingBottom: '5rem',
        paddingLeft: PAD, paddingRight: PAD,
        background: DARK, position: 'relative', overflow: 'hidden',
      }}>
        {/* decorative rings */}
        <div style={{ position: 'absolute', top: '-8rem', right: '-8rem', width: '36rem', height: '36rem', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-3rem', right: '-3rem', width: '20rem', height: '20rem', borderRadius: '50%', border: '1px solid rgba(253,196,31,0.05)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative' }}>
          {/* eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill={GOLD} /></svg>
            <span style={{ color: 'rgba(253,196,31,0.85)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.42em', textTransform: 'uppercase' }}>
              Our Services
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.68rem', letterSpacing: '0.1em' }}>
              {services.length} Services
            </span>
          </div>

          {/* headline */}
          <h1 style={{
            color: '#fff',
            fontSize: 'clamp(4rem, 10vw, 9.5rem)',
            fontWeight: 800, lineHeight: 0.92,
            letterSpacing: '-0.04em', marginBottom: '2.5rem',
          }}>
            From Concept<br />
            <span style={{ color: GOLD }}>to Inauguration</span>
          </h1>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(1rem,1.5vw,1.1rem)', lineHeight: 1.75, maxWidth: '52ch' }}>
              End-to-end infrastructure execution — from precision ceiling systems and wall cladding to civil construction and smart automation — delivered across India.
            </p>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              background: GOLD, color: DARK,
              padding: '1rem 2.2rem', fontSize: '0.82rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0,
            }}>
              Start a Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12H20M20 12L14 6M20 12L14 18" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ STATS BAR ══ */}
      <section style={{ borderTop: '1px solid rgba(105,137,150,0.2)', borderBottom: '1px solid rgba(105,137,150,0.2)', background: '#F5F4F0' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {[
            { value: '6', label: 'Service Categories' },
            { value: '12+', label: 'Projects Delivered' },
            { value: '28+', label: 'Years Expertise' },
            { value: 'Pan-India', label: 'Execution Reach' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '2rem clamp(1.5rem,3vw,3rem)',
              borderRight: i < 3 ? '1px solid rgba(105,137,150,0.2)' : 'none',
              textAlign: 'center',
            }}>
              <div style={{ color: DARK, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ color: '#698996', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '0.4rem' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SERVICES GRID ══ */}
      <section style={{ paddingBottom: '6rem', paddingLeft: PAD, paddingRight: PAD, paddingTop: '0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1px',
            background: 'rgba(105,137,150,0.2)',
          }}>
            {services.map((service, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: hovered === i ? '#F5F4F0' : '#ffffff',
                  padding: 'clamp(2rem,4vw,3.5rem)',
                  transition: 'background 0.3s ease',
                  cursor: 'default',
                  borderLeft: hovered === i ? `3px solid ${GOLD}` : '3px solid transparent',
                  position: 'relative',
                }}
              >
                {/* number */}
                <div style={{
                  color: GOLD,
                  fontSize: '0.68rem', fontWeight: 700,
                  letterSpacing: '0.2em', marginBottom: '1.5rem',
                }}>
                  {service.number}
                </div>

                {/* title */}
                <h2 style={{
                  color: DARK,
                  fontSize: 'clamp(1.2rem, 1.8vw, 1.6rem)',
                  fontWeight: 700, lineHeight: 1.2,
                  letterSpacing: '-0.02em', marginBottom: '1rem',
                }}>
                  {service.title}
                </h2>

                {/* description */}
                <p style={{
                  color: '#698996',
                  fontSize: '0.92rem', lineHeight: 1.75,
                  marginBottom: '1.75rem',
                }}>
                  {service.description}
                </p>

                {/* items */}
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {service.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{
                        width: '5px', height: '5px', borderRadius: '50%',
                        background: GOLD, flexShrink: 0,
                      }} />
                      <span style={{ color: DARK, fontSize: '0.88rem', fontWeight: 500 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* hover arrow */}
                <div style={{
                  position: 'absolute', top: 'clamp(2rem,4vw,3.5rem)', right: 'clamp(2rem,4vw,3.5rem)',
                  width: '2rem', height: '2rem',
                  border: `1px solid ${hovered === i ? GOLD : 'rgba(105,137,150,0.3)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: hovered === i ? GOLD : 'transparent',
                  transition: 'all 0.3s ease',
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                    stroke={hovered === i ? DARK : '#698996'}
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12H20M20 12L14 6M20 12L14 18" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section style={{
        padding: `5rem ${PAD}`,
        background: DARK,
        borderTop: '1px solid rgba(105,137,150,0.2)',
      }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill={GOLD} /></svg>
              <span style={{ color: 'rgba(253,196,31,0.7)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase' }}>
                Let's Build Together
              </span>
            </div>
            <h2 style={{
              color: '#fff',
              fontSize: 'clamp(2rem, 5vw, 4.5rem)',
              fontWeight: 800, lineHeight: 1.05,
              letterSpacing: '-0.03em', margin: 0,
            }}>
              Ready to start<br />your project?
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.9rem', lineHeight: 1.75, maxWidth: '36ch', margin: 0 }}>
              From site assessment to final handover — we deliver premium infrastructure execution across India.
            </p>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              background: GOLD, color: DARK,
              padding: '1.1rem 2.8rem', fontSize: '0.85rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
            }}>
              Get in Touch
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12H20M20 12L14 6M20 12L14 18" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
