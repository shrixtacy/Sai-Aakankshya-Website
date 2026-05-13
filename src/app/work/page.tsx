'use client';

import { useState } from 'react';
import Navbar from '@/components/wallnut/Navbar';
import Footer from '@/components/wallnut/Footer';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    name: 'Indira Gandhi International Airport',
    type: 'Airport Infrastructure',
    category: 'Government',
    year: '2022',
    location: 'New Delhi',
    scope: 'Linear & Baffle Ceiling + Wall Cladding',
    area: '5000+ sqm',
    image: '/assets/images/Delhi T1.jpeg',
    alt: 'Indira Gandhi International Airport T1 — ceiling and cladding execution.',
    description: 'Large-scale airport infrastructure execution involving linear ceilings, baffle ceiling systems, and premium wall cladding solutions designed for high-footfall modern aviation environments.',
  },
  {
    id: 2,
    name: 'Rajiv Gandhi International Airport',
    type: 'Airport Infrastructure',
    category: 'Government',
    year: '2021',
    location: 'Hyderabad',
    scope: 'Linear Ceiling',
    area: '11000 sqm',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.13 PM.jpeg',
    alt: 'Rajiv Gandhi International Airport Hyderabad — linear ceiling execution.',
    description: 'Executed extensive linear ceiling systems across airport infrastructure spaces with precision-focused architectural finishing.',
  },
  {
    id: 3,
    name: 'Kempegowda International Airport',
    type: 'Airport Infrastructure',
    category: 'Government',
    year: '2022',
    location: 'Bangalore',
    scope: 'Aluminium Tube Ceiling',
    area: 'Large-scale',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.14 PM.jpeg',
    alt: 'Kempegowda International Airport Bangalore — aluminium tube ceiling execution.',
    description: 'Modern aluminium tube ceiling execution designed for premium airport interior aesthetics and structural durability.',
  },
  {
    id: 4,
    name: 'Chaudhary Charan Singh International Airport',
    type: 'Airport Infrastructure',
    category: 'Government',
    year: '2023',
    location: 'Lucknow',
    scope: 'Baffle Ceiling',
    area: '2000 sqm',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.14 PM (1).jpeg',
    alt: 'CCS International Airport Lucknow — baffle ceiling execution.',
    description: 'Delivered advanced baffle ceiling systems for airport infrastructure with emphasis on acoustics, design uniformity, and large-scale execution quality.',
  },
  {
    id: 5,
    name: 'KIIT University',
    type: 'Educational Institution',
    category: 'Institutional',
    year: '2020',
    location: 'Bhubaneswar',
    scope: 'False Ceiling — 600×600 HDI Systems',
    area: '1000 sqm',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.16 PM.jpeg',
    alt: 'KIIT University Bhubaneswar — HDI false ceiling systems.',
    description: 'Executed high-quality HDI false ceiling systems for KIIT University, delivering clean architectural finishing and durable execution across educational infrastructure spaces.',
  },
  {
    id: 6,
    name: 'Coconut Peninsula Resort',
    type: 'Hospitality',
    category: 'Commercial',
    year: '2022',
    location: 'Tangi, Odisha',
    scope: 'Linear Metal & Gypsum Ceiling',
    area: '1200 sqm',
    image: '/assets/images/coconut peninsula resort.jpg',
    alt: 'Coconut Peninsula Resort Tangi Odisha — premium interior execution.',
    description: 'Delivered premium hospitality interior execution featuring gypsum ceiling systems, linear metal ceiling installations, and sophisticated resort interior finishing.',
  },
  {
    id: 7,
    name: 'Babasaheb Ambedkar Bus Terminal',
    type: 'Public Infrastructure',
    category: 'Government',
    year: '2023',
    location: 'India',
    scope: 'Baffle Ceiling',
    area: '3000 sqm',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.19 PM.jpeg',
    alt: 'Babasaheb Ambedkar Bus Terminal — large-scale baffle ceiling execution.',
    description: 'Executed high-scale public infrastructure ceiling systems enhancing passenger environment quality and architectural appeal.',
  },
  {
    id: 8,
    name: 'DN Regalia Mall',
    type: 'Commercial',
    category: 'Commercial',
    year: '2023',
    location: 'Bhubaneswar',
    scope: 'Aluminium Facade Work',
    area: '1000 sqm',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.20 PM.jpeg',
    alt: 'DN Regalia Mall Bhubaneswar — aluminium facade execution.',
    description: 'Modern aluminium facade execution for commercial infrastructure with emphasis on contemporary architectural identity.',
  },
  {
    id: 9,
    name: 'Nandankanan Zoological Park',
    type: 'Government Infrastructure',
    category: 'Government',
    year: '2023',
    location: 'Bhubaneswar',
    scope: 'Wall Cladding & Metal Ceiling',
    area: 'Large-scale',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.22 PM.jpeg',
    alt: 'Nandankanan Zoological Park Bhubaneswar — wall cladding and metal ceiling.',
    description: 'Specialized wall cladding and ceiling execution for public infrastructure spaces designed to ensure durability and modern visual appeal.',
  },
  {
    id: 10,
    name: 'Odisha Mining Corporation',
    type: 'Corporate Office',
    category: 'Commercial',
    year: '2022',
    location: 'Odisha',
    scope: 'Office & Interior Work',
    area: 'Corporate scale',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.17 PM.jpeg',
    alt: 'Odisha Mining Corporation — premium office interior execution.',
    description: 'Premium office and interior infrastructure execution focused on functional corporate environments and refined interior finishing.',
  },
  {
    id: 11,
    name: 'Mission Shakti Café, Anandvan',
    type: 'Public Hospitality',
    category: 'Commercial',
    year: '2023',
    location: 'Odisha',
    scope: 'Interior & Exterior Work',
    area: 'Full execution',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.16 PM.jpeg',
    alt: 'Mission Shakti Café Anandvan — complete interior and exterior execution.',
    description: 'Complete interior and exterior execution for a public hospitality initiative, blending functionality with welcoming architectural aesthetics.',
  },
  {
    id: 12,
    name: 'OPTCL / Tata Power / Power Grid',
    type: 'Power Sector',
    category: 'Government',
    year: '2021',
    location: 'Pan-India',
    scope: 'Civil Construction Works',
    area: 'Multiple sites',
    image: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.22 PM.jpeg',
    alt: 'Civil infrastructure — OPTCL, Tata Power, Power Grid.',
    description: 'Executed civil infrastructure projects for major power and utility organizations with focus on reliability, structural quality, and execution efficiency.',
  },
];

const categories = ['All', 'Government', 'Commercial', 'Institutional'];

const stats = [
  { value: '12+', label: 'Projects Delivered' },
  { value: '11,000+', label: 'sqm Executed' },
  { value: '4', label: 'Airport Terminals' },
  { value: '2021', label: 'Est.' },
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <main style={{ minHeight: '100vh', background: '#F5F4F0', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ paddingTop: '9rem', paddingBottom: '4rem', paddingLeft: 'clamp(2rem,5vw,5rem)', paddingRight: 'clamp(2rem,5vw,5rem)', background: '#202A30' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

          {/* eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="#FDC41F" /></svg>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase' }}>
              Featured Projects
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.12)' }} />
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>
              {projects.length} Projects
            </span>
          </div>

          {/* headline */}
          <h1 style={{
            color: '#ffffff',
            fontSize: 'clamp(4rem, 10vw, 9.5rem)',
            fontWeight: 800,
            lineHeight: 0.92,
            letterSpacing: '-0.04em',
            marginBottom: '2rem',
          }}>
            Our<br />
            <span style={{ color: '#FDC41F' }}>Work</span>
          </h1>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: 1.7, maxWidth: '52ch' }}>
              12+ landmark projects across airports, institutions, hospitality, and government infrastructure — from 1,000 sqm to 11,000+ sqm across India.
            </p>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              background: '#FDC41F', color: '#202A30',
              padding: '0.9rem 2rem', fontSize: '0.8rem', fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              textDecoration: 'none', whiteSpace: 'nowrap',
            }}>
              Start a Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12H20M20 12L14 6M20 12L14 18" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────── */}
      <section style={{ borderTop: '1px solid rgba(105,137,150,0.2)', borderBottom: '1px solid rgba(105,137,150,0.2)', background: '#F5F4F0' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '2rem clamp(1.5rem,3vw,3rem)',
              borderRight: i < 3 ? '1px solid rgba(105,137,150,0.2)' : 'none',
              textAlign: 'center',
            }}>
              <div style={{ color: '#202A30', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ color: '#698996', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '0.4rem' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FILTER TABS ──────────────────────────────────────────── */}
      <section style={{ padding: '2.5rem clamp(2rem,5vw,5rem)', background: '#ffffff', borderBottom: '1px solid rgba(105,137,150,0.2)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.55rem 1.4rem',
                fontSize: '0.75rem', fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                border: activeCategory === cat ? 'none' : '1px solid rgba(105,137,150,0.3)',
                background: activeCategory === cat ? '#FDC41F' : 'transparent',
                color: activeCategory === cat ? '#202A30' : '#698996',
                cursor: 'pointer', transition: 'all 0.2s ease',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {cat}
              {cat !== 'All' && (
                <span style={{ marginLeft: '0.4rem', opacity: 0.6, fontSize: '0.65rem' }}>
                  ({projects.filter(p => p.category === cat).length})
                </span>
              )}
            </button>
          ))}
          <div style={{ flex: 1 }} />
          <span style={{ color: '#698996', fontSize: '0.7rem', letterSpacing: '0.1em' }}>
            {filtered.length} result{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </section>

      {/* ── PROJECT GRID ─────────────────────────────────────────── */}
      <section style={{ paddingBottom: '6rem', paddingLeft: 'clamp(2rem,5vw,5rem)', paddingRight: 'clamp(2rem,5vw,5rem)', background: '#ffffff' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 380px), 1fr))',
            gap: '1px',
            background: 'rgba(105,137,150,0.2)',
          }}>
            {filtered.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  background: '#ffffff',
                  cursor: 'pointer', position: 'relative', overflow: 'hidden',
                  transition: 'background 0.3s ease',
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/10' }}>
                  <img
                    src={project.image}
                    alt={project.alt}
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                      transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)',
                      transform: hoveredId === project.id ? 'scale(1.06)' : 'scale(1)',
                    }}
                  />
                  {/* base overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(32,42,48,0.8) 0%, rgba(32,42,48,0.05) 50%, transparent 100%)',
                  }} />
                  {/* hover overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(32,42,48,0.55)',
                    opacity: hoveredId === project.id ? 1 : 0,
                    transition: 'opacity 0.35s ease',
                    display: 'flex', flexDirection: 'column',
                    justifyContent: 'flex-end', padding: '1.5rem',
                  }}>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.78rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                      {project.description}
                    </p>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                      color: '#FDC41F', fontSize: '0.7rem', fontWeight: 700,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                    }}>
                      View Project
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12H20M20 12L14 6M20 12L14 18" />
                      </svg>
                    </span>
                  </div>
                  {/* year badge */}
                  <div style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    background: 'rgba(32,42,48,0.75)', backdropFilter: 'blur(8px)',
                    padding: '0.25rem 0.6rem',
                    color: 'rgba(255,255,255,0.7)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em',
                  }}>
                    {project.year}
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: '1.5rem 1.75rem 1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#FDC41F', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em' }}>
                      {String(project.id).padStart(2, '0')}
                    </span>
                    <span style={{
                      color: '#698996', fontSize: '0.6rem', fontWeight: 500,
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      border: '1px solid rgba(105,137,150,0.3)', padding: '0.2rem 0.55rem',
                    }}>
                      {project.category}
                    </span>
                  </div>
                  <h3 style={{
                    color: '#202A30', fontSize: 'clamp(1rem,1.4vw,1.15rem)',
                    fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.01em', marginBottom: '0.6rem',
                  }}>
                    {project.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#698996', fontSize: '0.72rem' }}>{project.location}</span>
                    <span style={{ color: 'rgba(105,137,150,0.4)', fontSize: '0.6rem' }}>·</span>
                    <span style={{ color: '#698996', fontSize: '0.72rem' }}>{project.area}</span>
                  </div>
                  <div style={{
                    borderTop: '1px solid rgba(105,137,150,0.15)', paddingTop: '0.75rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  }}>
                    <span style={{ color: 'rgba(105,137,150,0.6)', fontSize: '0.68rem', letterSpacing: '0.05em' }}>
                      {project.scope}
                    </span>
                    <div style={{
                      width: '1.8rem', height: '1.8rem',
                      border: `1px solid ${hoveredId === project.id ? '#FDC41F' : 'rgba(105,137,150,0.3)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: hoveredId === project.id ? '#FDC41F' : 'transparent',
                      transition: 'all 0.25s ease',
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                        stroke={hoveredId === project.id ? '#202A30' : '#698996'}
                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12H20M20 12L14 6M20 12L14 18" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────── */}
      <section style={{
        borderTop: '1px solid rgba(105,137,150,0.2)',
        padding: '5rem clamp(2rem,5vw,5rem)',
        background: '#202A30',
      }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <svg width="10" height="10" viewBox="0 0 12 12"><circle cx="6" cy="6" r="6" fill="#FDC41F" /></svg>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.4em', textTransform: 'uppercase' }}>
              Let's Build Together
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            <h2 style={{
              color: '#ffffff',
              fontSize: 'clamp(2rem, 5vw, 4.5rem)',
              fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', margin: 0,
            }}>
              Have a project<br />in mind?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '36ch', margin: 0 }}>
                From site assessment to final handover — we deliver premium infrastructure execution across India.
              </p>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                background: '#FDC41F', color: '#202A30',
                padding: '1rem 2.5rem', fontSize: '0.8rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
              }}>
                Get in Touch
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12H20M20 12L14 6M20 12L14 18" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
