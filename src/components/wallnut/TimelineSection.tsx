'use client';

import { useEffect, useRef, useState } from 'react';

const timelineItems = [
  {
    step: 'Assess it',
    heading: 'Site Assessment',
    description:
      'We begin with a thorough site assessment and feasibility study — understanding the project scope, structural requirements, and client vision to lay the foundation for precise execution planning.',
    posterUrl: '/assets/images/Delhi T1.jpeg',
    highlights: [
      { label: 'Scope Analysis', value: 'Structural & spatial review' },
      { label: 'Feasibility',    value: 'Budget & timeline mapping'  },
      { label: 'Scale handled',  value: '1,000 – 11,000+ sqm'        },
    ],
  },
  {
    step: 'Plan it',
    heading: 'Execution Planning',
    description:
      'Our experienced team develops a detailed execution plan — material selection, timeline mapping, vendor coordination, and quality benchmarks — ensuring every project is delivered on time and on spec.',
    posterUrl: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.14 PM.jpeg',
    highlights: [
      { label: 'Material partners',   value: 'HunterDouglas · Saint Gobain · Armstrong' },
      { label: 'Coordination',        value: 'Vendor & site scheduling'                 },
      { label: 'Quality benchmarks',  value: 'Set before ground breaks'                 },
    ],
  },
  {
    step: 'Execute it',
    heading: 'Precision Execution',
    description:
      'With 28 years of leadership expertise and partnerships with HunterDouglas, Saint Gobain, and Armstrong, we execute ceiling, cladding, civil, and facade works with uncompromising quality at any scale.',
    posterUrl: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.13 PM.jpeg',
    highlights: [
      { label: 'Expertise',     value: '28 years of industry leadership'      },
      { label: 'Sectors',       value: 'Airports · Institutions · Hospitality' },
      { label: 'Capabilities',  value: 'Ceiling · Cladding · Civil · Facade'  },
    ],
  },
  {
    step: 'Deliver it',
    heading: 'Handover & Beyond',
    description:
      'Every project concludes with a thorough quality inspection and formal handover — from KIIT University to Indira Gandhi International Airport, we deliver spaces that stand the test of time.',
    posterUrl: '/assets/images/WhatsApp Image 2026-05-11 at 10.01.20 PM.jpeg',
    highlights: [
      { label: 'Projects delivered', value: '12+ landmark projects'        },
      { label: 'Footprint',          value: 'Pan-India execution'           },
      { label: 'Post-handover',      value: 'Quality assurance & support'  },
    ],
  },
];

export default function TimelineSection() {
  const outerRef   = useRef<HTMLDivElement>(null);
  const stickyRef  = useRef<HTMLDivElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);
  const spacerRef  = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeRef = useRef(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let killed = false;
    const triggers: any[] = [];

    const boot = async () => {
      const { gsap }          = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      if (killed) return;

      const outer  = outerRef.current;
      const track  = trackRef.current;
      const spacer = spacerRef.current;
      if (!outer || !track || !spacer) return;

      // Each slide = half the viewport width (track is 50% wide)
      // We need to scroll (n-1) full slide widths
      // The left panel is 50vw, so each image slide = 50vw
      // But we translate the full track, so totalSlide = (n-1) * 50vw
      const slideWidth = window.innerWidth * 0.5;
      const totalSlide = (timelineItems.length - 1) * slideWidth;

      // Set spacer to give the outer div enough height
      spacer.style.height = `${totalSlide}px`;

      // Scrub the track horizontally as user scrolls
      const tween = gsap.to(track, {
        x    : -totalSlide,
        ease : 'none',
        scrollTrigger: {
          trigger   : outer,
          start     : 'top top',
          end       : () => `+=${totalSlide}`,
          scrub     : 1.2,
          invalidateOnRefresh: true,
          onUpdate  : (self) => {
            const idx = Math.round(self.progress * (timelineItems.length - 1));
            if (idx !== activeRef.current) {
              activeRef.current = idx;
              setActiveIndex(idx);
            }
          },
        },
      });
      triggers.push(tween.scrollTrigger);

      ScrollTrigger.refresh();
    };

    boot();
    return () => {
      killed = true;
      triggers.forEach(t => t?.kill());
    };
  }, []);

  const active = timelineItems[activeIndex];

  return (
    <div
      ref={outerRef}
      style={{ position: 'relative', background: '#fff' }}
    >
      {/* ── Mobile fallback (hidden on lg+) ─────────────────────── */}
      <div className="lg:hidden bg-white">
        {timelineItems.map((item, i) => (
          <div key={i} style={{ borderBottom: '1px solid rgba(105,137,150,0.12)' }}>
            <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
              <img src={item.posterUrl} alt={item.heading} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(32,42,48,0.4)' }} />
              <span style={{
                position: 'absolute', bottom: '1rem', left: '1rem',
                background: '#FDC41F', color: '#202A30',
                fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', padding: '0.3rem 0.75rem',
              }}>{item.step}</span>
            </div>
            <div style={{ padding: '1.5rem 1.25rem 2rem' }}>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#202A30', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '0.75rem', fontFamily: 'Inter, sans-serif' }}>
                {item.heading}
              </h2>
              <p style={{ fontSize: '0.875rem', color: '#698996', lineHeight: 1.7, fontFamily: 'Inter, sans-serif', marginBottom: '1.25rem' }}>
                {item.description}
              </p>
              <div style={{ borderTop: '1px solid rgba(105,137,150,0.15)' }}>
                {item.highlights.map((h, j) => (
                  <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0', borderBottom: '1px solid rgba(105,137,150,0.1)' }}>
                    <span style={{ fontSize: '0.6rem', color: '#698996', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Inter, sans-serif' }}>{h.label}</span>
                    <span style={{ fontSize: '0.72rem', color: '#202A30', fontWeight: 600, fontFamily: 'Inter, sans-serif', textAlign: 'right', maxWidth: '55%' }}>{h.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Desktop sticky scroll (hidden on mobile) ─────────────── */}
      <div className="hidden lg:block">
      {/* ── Sticky panel ─────────────────────────────────────────── */}
      <div
        ref={stickyRef}
        style={{
          position : 'sticky',
          top      : 0,
          width    : '100%',
          height   : '100vh',
          overflow : 'hidden',
          display  : 'flex',
        }}
      >
        {/* ════════════════════════════════════════════════════════
            LEFT — horizontal image track (slides scroll left)
        ════════════════════════════════════════════════════════ */}
        <div style={{ position: 'relative', width: '50%', height: '100%', overflow: 'hidden' }}>
          <div
            ref={trackRef}
            style={{
              display   : 'flex',
              width     : `${timelineItems.length * 100}%`,
              height    : '100%',
              willChange: 'transform',
            }}
          >
            {timelineItems.map((item, i) => (
              <div
                key={i}
                style={{
                  position : 'relative',
                  width    : `${100 / timelineItems.length}%`,
                  height   : '100%',
                  flexShrink: 0,
                }}
              >
                <img
                  src={item.posterUrl}
                  alt={item.heading}
                  style={{
                    width         : '100%',
                    height        : '100%',
                    objectFit     : 'cover',
                    objectPosition: 'center',
                    display       : 'block',
                  }}
                />
                {/* dark overlay */}
                <div style={{
                  position  : 'absolute',
                  inset     : 0,
                  background: 'rgba(32,42,48,0.35)',
                  transition: 'background 0.4s ease',
                }} />
                {/* step label */}
                <div style={{
                  position  : 'absolute',
                  bottom    : '2rem',
                  left      : '2rem',
                  zIndex    : 2,
                }}>
                  <span style={{
                    fontSize     : '0.7rem',
                    fontWeight   : 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontFamily   : 'Inter, sans-serif',
                    background   : activeIndex === i ? '#FDC41F' : 'rgba(32,42,48,0.6)',
                    color        : activeIndex === i ? '#202A30' : '#fff',
                    padding      : '0.3rem 0.75rem',
                    transition   : 'all 0.4s ease',
                  }}>
                    {item.step}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* slide progress dots */}
          <div style={{
            position      : 'absolute',
            bottom        : '2rem',
            right         : '2rem',
            display       : 'flex',
            gap           : '0.4rem',
            zIndex        : 5,
          }}>
            {timelineItems.map((_, i) => (
              <div key={i} style={{
                width     : activeIndex === i ? '1.5rem' : '0.4rem',
                height    : '0.25rem',
                background: activeIndex === i ? '#FDC41F' : 'rgba(255,255,255,0.4)',
                borderRadius: '2px',
                transition: 'all 0.4s ease',
              }} />
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════
            RIGHT — sticky content panel
        ════════════════════════════════════════════════════════ */}
        <div style={{
          width         : '50%',
          height        : '100%',
          display       : 'flex',
          flexDirection : 'column',
          justifyContent: 'center',
          padding       : 'clamp(2rem, 5vw, 5rem) clamp(2rem, 4vw, 4rem)',
          background    : '#fff',
          borderLeft    : '1px solid rgba(105,137,150,0.12)',
        }}>

          {/* ── Step tabs ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            <svg width="10" height="10" viewBox="0 0 12 12">
              <circle cx="6" cy="6" r="6" fill="#FDC41F" />
            </svg>
            {timelineItems.map((item, i) => (
              <span
                key={i}
                style={{
                  fontSize     : '0.8rem',
                  fontWeight   : activeIndex === i ? 700 : 500,
                  color        : activeIndex === i ? '#202A30' : '#698996',
                  letterSpacing: '0.01em',
                  fontFamily   : 'Inter, sans-serif',
                  transition   : 'all 0.35s ease',
                  cursor       : 'default',
                  paddingBottom: activeIndex === i ? '2px' : '0',
                  borderBottom : activeIndex === i ? '2px solid #FDC41F' : '2px solid transparent',
                }}
              >
                {item.step}
              </span>
            ))}
          </div>

          {/* ── Heading ── */}
          <h2
            key={`h-${activeIndex}`}
            style={{
              fontSize     : 'clamp(2rem, 4vw, 3.8rem)',
              fontWeight   : 700,
              color        : '#202A30',
              lineHeight   : 1.1,
              letterSpacing: '-0.02em',
              marginBottom : '1.25rem',
              fontFamily   : 'Inter, sans-serif',
              animation    : 'fadeSlideUp 0.45s cubic-bezier(0.22,1,0.36,1) both',
            }}
          >
            {active.heading}
          </h2>

          {/* ── Description ── */}
          <p
            key={`d-${activeIndex}`}
            style={{
              fontSize  : '0.9rem',
              color     : '#698996',
              lineHeight: 1.75,
              maxWidth  : '38ch',
              fontFamily: 'Inter, sans-serif',
              animation : 'fadeSlideUp 0.45s 0.06s cubic-bezier(0.22,1,0.36,1) both',
            }}
          >
            {active.description}
          </p>

          {/* ── Highlights table ── */}
          <div
            key={`hl-${activeIndex}`}
            style={{
              marginTop : '2rem',
              borderTop : '1px solid rgba(105,137,150,0.15)',
              animation : 'fadeSlideUp 0.45s 0.12s cubic-bezier(0.22,1,0.36,1) both',
            }}
          >
            {active.highlights.map((h, i) => (
              <div key={i} style={{
                display       : 'flex',
                justifyContent: 'space-between',
                alignItems    : 'center',
                padding       : '0.75rem 0',
                borderBottom  : '1px solid rgba(105,137,150,0.12)',
              }}>
                <span style={{
                  fontSize     : '0.65rem',
                  color        : '#698996',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  fontFamily   : 'Inter, sans-serif',
                  fontWeight   : 500,
                }}>
                  {h.label}
                </span>
                <span style={{
                  fontSize  : '0.72rem',
                  color     : '#202A30',
                  fontWeight: 600,
                  fontFamily: 'Inter, sans-serif',
                  textAlign : 'right',
                  maxWidth  : '55%',
                }}>
                  {h.value}
                </span>
              </div>
            ))}
          </div>

          {/* ── Progress bar ── */}
          <div style={{
            marginTop  : '2.5rem',
            display    : 'flex',
            alignItems : 'center',
            gap        : '0.75rem',
          }}>
            <span style={{ color: '#FDC41F', fontWeight: 700, fontSize: '0.8rem', fontFamily: 'Inter, sans-serif', minWidth: '1.5rem' }}>
              0{activeIndex + 1}
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(105,137,150,0.2)', position: 'relative', overflow: 'hidden' }}>
              <div style={{
                position  : 'absolute',
                inset     : '0 auto 0 0',
                background: '#FDC41F',
                width     : `${((activeIndex + 1) / timelineItems.length) * 100}%`,
                transition: 'width 0.5s cubic-bezier(0.22,1,0.36,1)',
              }} />
            </div>
            <span style={{ color: '#698996', fontSize: '0.8rem', fontFamily: 'Inter, sans-serif' }}>04</span>
          </div>
        </div>
      </div>

      {/* spacer — must match the ScrollTrigger end distance exactly */}
      <div id="timeline-spacer" ref={spacerRef} style={{ height: `${(timelineItems.length - 1) * 100}vh` }} />

      {/* ── keyframes ── */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
      </div>{/* end desktop wrapper */}
    </div>
  );
}
