import React from 'react';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Navbar from '@/components/wallnut/Navbar';
import Footer from '@/components/wallnut/Footer';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    id: String(p.id),
  }));
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === Number(resolvedParams.id));

  if (!project) {
    notFound();
  }

  // Find next project for bottom navigation
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main style={{ minHeight: '100vh', background: '#F5F4F0', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      {/* ── HERO HEADER ──────────────────────────────────────────── */}
      <section style={{ paddingTop: '9rem', paddingBottom: '5rem', paddingLeft: 'clamp(2rem,5vw,5rem)', paddingRight: 'clamp(2rem,5vw,5rem)', background: '#202A30' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

          {/* Breadcrumb / Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            <Link href="/work" style={{ color: '#FDC41F', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}>
              ← Back to All Work
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>/</span>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              {project.category} · {project.type}
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            color: '#ffffff',
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
            maxWidth: '1200px',
          }}>
            {project.name}
          </h1>

          {/* Metadata strip */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#FDC41F', fontWeight: 700 }}>Location:</span> {project.location}
            </div>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#FDC41F', fontWeight: 700 }}>Year:</span> {project.year}
            </div>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#FDC41F', fontWeight: 700 }}>Scope:</span> {project.scope}
            </div>
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE ───────────────────────────────────────────── */}
      <section style={{ background: '#202A30', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', paddingLeft: 'clamp(2rem,5vw,5rem)', paddingRight: 'clamp(2rem,5vw,5rem)' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', borderRadius: '4px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
            <img
              src={project.image}
              alt={project.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ── QUICK FACTS BAR ──────────────────────────────────────── */}
      <section style={{ borderTop: '1px solid rgba(105,137,150,0.2)', borderBottom: '1px solid rgba(105,137,150,0.2)', background: '#ffffff' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          <div style={{ padding: '2.5rem clamp(2rem,4vw,3rem)', borderRight: '1px solid rgba(105,137,150,0.15)' }}>
            <span style={{ display: 'block', color: '#698996', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Client</span>
            <span style={{ display: 'block', color: '#202A30', fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.3 }}>{project.client}</span>
          </div>
          <div style={{ padding: '2.5rem clamp(2rem,4vw,3rem)', borderRight: '1px solid rgba(105,137,150,0.15)' }}>
            <span style={{ display: 'block', color: '#698996', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Architect</span>
            <span style={{ display: 'block', color: '#202A30', fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.3 }}>{project.architect}</span>
          </div>
          <div style={{ padding: '2.5rem clamp(2rem,4vw,3rem)', borderRight: '1px solid rgba(105,137,150,0.15)' }}>
            <span style={{ display: 'block', color: '#698996', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Execution Area</span>
            <span style={{ display: 'block', color: '#202A30', fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.3 }}>{project.area}</span>
          </div>
          <div style={{ padding: '2.5rem clamp(2rem,4vw,3rem)' }}>
            <span style={{ display: 'block', color: '#698996', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Project Duration</span>
            <span style={{ display: 'block', color: '#202A30', fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.3 }}>{project.duration}</span>
          </div>
        </div>
      </section>

      {/* ── PROJECT OVERVIEW ─────────────────────────────────────── */}
      <section style={{ padding: '6rem clamp(2rem,5vw,5rem)', background: '#F5F4F0' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr lg:1fr', gap: '4rem lg:8rem', alignItems: 'start' }}>
            
            {/* Left Column: Description */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <svg width="10" height="10" viewBox="0 0 12 12"><circle cx="6" cy="6" r="6" fill="#FDC41F" /></svg>
                <span style={{ color: '#202A30', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  Project Overview
                </span>
              </div>
              <h2 style={{ color: '#202A30', fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.02em', marginBottom: '2rem' }}>
                Delivering monumental engineering precision at scale.
              </h2>
              <p style={{ color: '#698996', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '2rem' }}>
                {project.description}
              </p>
              <div style={{ borderLeft: '3px solid #FDC41F', paddingLeft: '1.5rem', marginTop: '2.5rem' }}>
                <p style={{ color: '#202A30', fontStyle: 'italic', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                  &quot;Every phase of execution was meticulously planned to meet international aviation, institutional, and corporate benchmarks, ensuring absolute structural integrity and flawless aesthetic delivery.&quot;
                </p>
              </div>
            </div>

            {/* Right Column: Execution Details */}
            <div style={{ background: '#ffffff', padding: '3.5rem', borderRadius: '4px', border: '1px solid rgba(105,137,150,0.15)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <h3 style={{ color: '#202A30', fontSize: '1.3rem', fontWeight: 700, marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '2px solid #FDC41F' }}>
                Technical Execution Scope
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FDC41F', marginTop: '0.45rem', flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block', color: '#202A30', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Primary Structural Grid</strong>
                    <span style={{ color: '#698996', fontSize: '0.85rem', lineHeight: 1.5 }}>Heavy-duty galvanized suspension framing and precision laser-aligned primary carriers.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FDC41F', marginTop: '0.45rem', flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block', color: '#202A30', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Architectural Finishes</strong>
                    <span style={{ color: '#698996', fontSize: '0.85rem', lineHeight: 1.5 }}>{project.scope} executed to exacting tolerance standards.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FDC41F', marginTop: '0.45rem', flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block', color: '#202A30', fontSize: '0.95rem', marginBottom: '0.2rem' }}>MEP & Lighting Integration</strong>
                    <span style={{ color: '#698996', fontSize: '0.85rem', lineHeight: 1.5 }}>Flawless co-ordination with mechanical diffusers, fire safety sprinklers, and linear LED luminaires.</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── CHALLENGES & SOLUTIONS ───────────────────────────────── */}
      <section style={{ padding: '6rem clamp(2rem,5vw,5rem)', background: '#ffffff', borderTop: '1px solid rgba(105,137,150,0.15)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <span style={{ color: '#FDC41F', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
              Overcoming Complexity
            </span>
            <h2 style={{ color: '#202A30', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.02em', margin: 0 }}>
              Site Challenges & Engineering Solutions
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {project.challenges.map((challenge, idx) => (
              <div key={idx} style={{ background: '#F5F4F0', padding: '3rem', borderRadius: '4px', borderTop: '4px solid #202A30', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <span style={{ color: '#202A30', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Challenge 0{idx + 1}</span>
                    <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(253,196,31,0.3)', color: '#202A30', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700 }}>!</span>
                  </div>
                  <p style={{ color: '#202A30', fontSize: '1rem', fontWeight: 600, lineHeight: 1.6, marginBottom: '2.5rem' }}>
                    {challenge}
                  </p>
                </div>
                <div style={{ borderTop: '1px solid rgba(105,137,150,0.2)', paddingTop: '1.5rem' }}>
                  <span style={{ color: '#FDC41F', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Executed Solution</span>
                  <p style={{ color: '#698996', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                    {project.solutions[idx] || 'Deployed precision engineering protocols and specialized taskforces to ensure flawless execution delivery.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT GALLERY ──────────────────────────────────────── */}
      <section style={{ padding: '6rem clamp(2rem,5vw,5rem)', background: '#F5F4F0', borderTop: '1px solid rgba(105,137,150,0.15)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 style={{ color: '#202A30', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em', margin: 0 }}>
              Execution Gallery
            </h2>
            <span style={{ color: '#698996', fontSize: '0.85rem' }}>Hover to inspect architectural finishes</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
            {project.gallery.map((imgUrl, i) => (
              <div key={i} style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', borderRadius: '4px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                <img
                  src={imgUrl}
                  alt={`${project.name} gallery image ${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                />
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', background: 'rgba(32,42,48,0.85)', backdropFilter: 'blur(4px)', padding: '0.4rem 1rem', borderRadius: '2px', color: '#ffffff', fontSize: '0.75rem', fontWeight: 600 }}>
                  View 0{i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEXT PROJECT NAVIGATION ──────────────────────────────── */}
      <section style={{ padding: '5rem clamp(2rem,5vw,5rem)', background: '#ffffff', borderTop: '1px solid rgba(105,137,150,0.15)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <span style={{ color: '#698996', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
              Next Project
            </span>
            <h3 style={{ color: '#202A30', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, margin: 0 }}>
              {nextProject.name}
            </h3>
            <span style={{ color: '#FDC41F', fontSize: '0.85rem', fontWeight: 600, display: 'block', marginTop: '0.4rem' }}>
              {nextProject.category} · {nextProject.type}
            </span>
          </div>

          <Link href={`/work/${nextProject.id}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            background: '#202A30', color: '#ffffff',
            padding: '1rem 2.5rem', fontSize: '0.8rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
            borderRadius: '2px', transition: 'background 0.2s ease',
          }}>
            Explore Case Study
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12H20M20 12L14 6M20 12L14 18" />
            </svg>
          </Link>
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
              Let&apos;s Build Together
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
