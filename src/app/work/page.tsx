'use client';

import { useState } from 'react';
import Navbar from '@/components/wallnut/Navbar';
import Footer from '@/components/wallnut/Footer';
import Link from 'next/link';
import { projects } from '@/data/projects';

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
              <Link
                href={`/work/${project.id}`}
                key={project.id}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div
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
              </Link>
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
