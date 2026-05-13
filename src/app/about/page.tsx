'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/wallnut/Navbar';
import Footer from '@/components/wallnut/Footer';
import Link from 'next/link';

/* ── viewport hook ── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ── palette — identical to home/services ── */
const DARK  = '#202A30';   // dark teal — hero, CTA, dark sections
const MID   = '#F5F4F0';   // off-white — alternating sections
const WHITE = '#ffffff';   // pure white sections
const GOLD  = '#FDC41F';   // accent
const BODY  = '#698996';   // muted body text
const DIM   = 'rgba(105,137,150,0.2)'; // borders/dividers
const FONT  = 'Inter, sans-serif';
const PAD   = 'clamp(2rem,5vw,5rem)';

/* ── data ── */
const stats = [
  { value: '2021',      label: 'Founded'           },
  { value: '28+',       label: 'Years of Expertise' },
  { value: '12+',       label: 'Landmark Projects'  },
  { value: 'Pan-India', label: 'Project Footprint'  },
];

const missions = [
  { number: '01', title: 'Industry-Leading Innovation',       description: 'Continuously adopting technically advanced execution methods, sustainable materials, and smart infrastructure solutions to stay ahead of industry standards.' },
  { number: '02', title: 'Customized Sustainable Execution',  description: 'Delivering tailored, energy-efficient, and environmentally responsible infrastructure solutions that meet the unique requirements of each client and project.' },
  { number: '03', title: 'Global Expansion & Partnerships',   description: 'Strengthening strategic collaborations with globally recognized brands like HunterDouglas, Saint Gobain, Philips, Ramco, and Armstrong to expand capabilities and reach.' },
];

const industries = [
  { title: 'Airports',              description: 'Large-scale ceiling, cladding, and facade execution for major international airports across India.' },
  { title: 'Hospitality',           description: 'Premium interior and exterior execution for resorts, hotels, and hospitality complexes.' },
  { title: 'Government',            description: 'Infrastructure execution for government buildings, public facilities, and civic spaces.' },
  { title: 'Commercial',            description: 'Ceiling systems, facade work, and interior execution for malls, corporate offices, and commercial complexes.' },
  { title: 'Institutional',         description: 'Architectural finishing and ceiling execution for universities, educational institutions, and research facilities.' },
  { title: 'Power Sector',          description: 'Civil construction and infrastructure works for OPTCL, Tata Power, Power Grid Corporation, and more.' },
  { title: 'Public Infrastructure', description: 'Ceiling and cladding execution for bus terminals, zoological parks, and public transport facilities.' },
];

const values = [
  { title: 'Quality',                 description: 'Uncompromising standards at every stage of execution — from material selection to final handover.' },
  { title: 'Precision',               description: 'Technically accurate execution across large-scale ceiling, cladding, and civil infrastructure projects.' },
  { title: 'Innovation',              description: 'Adopting advanced systems and sustainable solutions to deliver future-ready infrastructure.' },
  { title: 'Trust',                   description: 'Building long-term relationships with clients, partners, and stakeholders through consistent delivery.' },
  { title: 'Sustainability',          description: 'Energy-efficient and environmentally responsible execution practices across all project categories.' },
  { title: 'Long-term Relationships', description: 'Client satisfaction and enduring partnerships are at the core of everything we do.' },
];

const partners = ['HunterDouglas', 'Ramco', 'Saint Gobain', 'Philips', 'Armstrong'];

/* ── eyebrow — dark text on light bg, white text on dark bg ── */
function Eyebrow({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
      <svg width="10" height="10" viewBox="0 0 12 12"><circle cx="6" cy="6" r="6" fill={GOLD} /></svg>
      <span style={{
        color: light ? 'rgba(255,255,255,0.85)' : DARK,
        fontSize: '0.7rem', fontWeight: 600,
        letterSpacing: '0.35em', textTransform: 'uppercase', fontFamily: FONT,
      }}>
        {label}
      </span>
      <div style={{ flex: 1, height: '1px', background: light ? 'rgba(255,255,255,0.12)' : DIM }} />
    </div>
  );
}

/* ── fade-up animation wrapper ── */
function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.65s ${delay}s cubic-bezier(0.22,1,0.36,1), transform 0.65s ${delay}s cubic-bezier(0.22,1,0.36,1)`,
    }}>
      {children}
    </div>
  );
}

export default function AboutPage() {
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
  const [hoveredValue,    setHoveredValue]    = useState<number | null>(null);
  const [hoveredPartner,  setHoveredPartner]  = useState<number | null>(null);

  return (
    <main style={{ minHeight: '100vh', background: WHITE, fontFamily: FONT }}>
      <Navbar />

      {/* ══ HERO — dark teal, same as services hero ══ */}
      <section style={{
        paddingTop: '9rem', paddingBottom: '5rem',
        paddingLeft: PAD, paddingRight: PAD,
        background: DARK,
        position: 'relative', overflow: 'hidden',
      }}>
        {/* subtle decorative rings */}
        <div style={{ position: 'absolute', top: '-6rem', right: '-6rem', width: '32rem', height: '32rem', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-2rem', right: '-2rem', width: '18rem', height: '18rem', borderRadius: '50%', border: '1px solid rgba(253,196,31,0.07)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative' }}>
          <Eyebrow label="About Us" light />

          <h1 style={{
            color: WHITE,
            fontSize: 'clamp(3.5rem, 10vw, 9.5rem)',
            fontWeight: 800,
            lineHeight: 0.92,
            letterSpacing: '-0.04em',
            marginBottom: '2.5rem',
          }}>
            Building India<br />
            <span style={{ color: GOLD }}>Better</span>
          </h1>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end' }}>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(1rem,1.5vw,1.1rem)', lineHeight: 1.75 }}>
              Since 2021, SAI AAKANKSHYA ASSOCIATES has been delivering premium interior, exterior, ceiling, cladding, and civil construction projects across India — led by 28 years of industry expertise.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                background: GOLD, color: DARK,
                padding: '1rem 2.2rem', fontSize: '0.78rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
              }}>
                Work With Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12H20M20 12L14 6M20 12L14 18" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS BAR — off-white, same as services body ══ */}
      <section style={{ background: MID, borderBottom: `1px solid ${DIM}` }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {stats.map((s, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div style={{
                padding: '2.5rem clamp(1.5rem,3vw,3rem)',
                borderRight: i < 3 ? `1px solid ${DIM}` : 'none',
                textAlign: 'center',
              }}>
                <div style={{ color: DARK, fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ color: BODY, fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: '0.5rem' }}>
                  {s.label}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ══ COMPANY STORY — white ══ */}
      <section style={{ padding: `5rem ${PAD}`, background: WHITE }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <Eyebrow label="Our Story" />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', marginBottom: '4rem', alignItems: 'start' }}>
            <FadeUp>
              <h2 style={{
                color: DARK,
                fontSize: 'clamp(1.6rem,2.8vw,2.6rem)',
                fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.02em',
              }}>
                Founded in 2021 by{' '}
                <span style={{ fontWeight: 800 }}>Mr. Debasis Mohapatra</span>
                {' '}— an industry professional with{' '}
                <span style={{ fontWeight: 800 }}>28 years of corporate expertise</span>
                {' '}— SAI AAKANKSHYA ASSOCIATES was built on a vision to transform how infrastructure execution is delivered across India.
              </h2>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p style={{ color: BODY, fontSize: '0.95rem', lineHeight: 1.8 }}>
                  Headquartered in Bhubaneswar, Odisha, the company specializes in premium interior, exterior, architectural, and civil execution projects. From conceptualization to inauguration, SAI AAKANKSHYA ASSOCIATES handles complete project execution — serving sectors including universities, hotels, airports, commercial complexes, government infrastructure, public transport facilities, and corporate offices.
                </p>
                <p style={{ color: BODY, fontSize: '0.95rem', lineHeight: 1.8 }}>
                  The company is particularly known for its large-scale ceiling and cladding execution capabilities, handling projects ranging from 1,000 sqm to over 11,000 sqm. With strategic collaborations with globally recognized brands including HunterDouglas, Saint Gobain, Philips, Ramco, and Armstrong, the company delivers technically advanced, sustainable, and high-quality infrastructure solutions across India.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* full-width image */}
          <FadeUp delay={0.1}>
            <div style={{ overflow: 'hidden', position: 'relative' }}>
              <img
                src="/assets/images/Delhi T1.jpeg"
                alt="SAI AAKANKSHYA ASSOCIATES — large-scale infrastructure execution."
                style={{ width: '100%', height: 'clamp(280px,40vw,560px)', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(32,42,48,0.65) 0%, transparent 55%)' }} />
              <div style={{ position: 'absolute', bottom: '2rem', left: '2.5rem' }}>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                  Featured Project
                </p>
                <p style={{ color: WHITE, fontSize: '1rem', fontWeight: 700, letterSpacing: '-0.01em' }}>
                  Indira Gandhi International Airport, New Delhi
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ MISSION & OBJECTIVES — off-white ══ */}
      <section style={{ padding: `5rem ${PAD}`, background: MID, borderTop: `1px solid ${DIM}` }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <Eyebrow label="Mission & Objectives" />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: DIM }}>
            {missions.map((m, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div style={{ background: MID, padding: 'clamp(2rem,4vw,3.5rem)', height: '100%' }}>
                  <div style={{ color: GOLD, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '1.5rem' }}>
                    {m.number}
                  </div>
                  <h3 style={{ color: DARK, fontSize: 'clamp(1.1rem,1.6vw,1.4rem)', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.01em', marginBottom: '1rem' }}>
                    {m.title}
                  </h3>
                  <p style={{ color: BODY, fontSize: '0.88rem', lineHeight: 1.75 }}>
                    {m.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES WE SERVE — white ══ */}
      <section style={{ padding: `5rem ${PAD}`, background: WHITE, borderTop: `1px solid ${DIM}` }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '5rem', alignItems: 'start' }}>

            {/* sticky left */}
            <FadeUp>
              <div style={{ position: 'sticky', top: '6rem' }}>
                <Eyebrow label="Industries We Serve" />
                <h2 style={{ color: DARK, fontSize: 'clamp(2rem,3.5vw,3.2rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
                  Sectors we<br />
                  <span style={{ color: GOLD }}>execute in</span>
                </h2>
                <p style={{ color: BODY, fontSize: '0.88rem', lineHeight: 1.75, maxWidth: '28ch' }}>
                  From airports to zoological parks — we deliver precision execution across every infrastructure category.
                </p>
              </div>
            </FadeUp>

            {/* right list */}
            <div>
              {industries.map((ind, i) => (
                <FadeUp key={i} delay={i * 0.06}>
                  <div
                    onMouseEnter={() => setHoveredIndustry(i)}
                    onMouseLeave={() => setHoveredIndustry(null)}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: '1.5rem',
                      padding: '1.75rem 0',
                      borderBottom: `1px solid ${DIM}`,
                      cursor: 'default', transition: 'all 0.25s ease',
                    }}
                  >
                    <span style={{
                      color: hoveredIndustry === i ? GOLD : 'rgba(105,137,150,0.5)',
                      fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em',
                      minWidth: '2rem', paddingTop: '0.2rem', transition: 'color 0.25s ease',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        color: hoveredIndustry === i ? DARK : '#3a4a52',
                        fontSize: 'clamp(1rem,1.4vw,1.2rem)', fontWeight: 700,
                        letterSpacing: '-0.01em', marginBottom: '0.4rem',
                        transition: 'color 0.25s ease',
                      }}>
                        {ind.title}
                      </h3>
                      <p style={{ color: BODY, fontSize: '0.83rem', lineHeight: 1.7 }}>
                        {ind.description}
                      </p>
                    </div>
                    <div style={{
                      width: '2rem', height: '2rem', flexShrink: 0,
                      border: `1px solid ${hoveredIndustry === i ? GOLD : DIM}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: hoveredIndustry === i ? GOLD : 'transparent',
                      transition: 'all 0.25s ease',
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                        stroke={hoveredIndustry === i ? DARK : BODY}
                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12H20M20 12L14 6M20 12L14 18" />
                      </svg>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ STRATEGIC PARTNERSHIPS — off-white ══ */}
      <section style={{ padding: `5rem ${PAD}`, background: MID, borderTop: `1px solid ${DIM}` }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <Eyebrow label="Strategic Partnerships" />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', marginBottom: '4rem', alignItems: 'end' }}>
            <FadeUp>
              <h2 style={{ color: DARK, fontSize: 'clamp(1.8rem,3vw,3rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.03em' }}>
                We collaborate with{' '}
                <span style={{ color: GOLD }}>globally recognized brands</span>
                {' '}to deliver technically superior infrastructure execution.
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p style={{ color: BODY, fontSize: '0.92rem', lineHeight: 1.8 }}>
                Our strategic partnerships with industry leaders ensure that every project benefits from the best materials, systems, and technical expertise available — from ceiling systems to facade solutions.
              </p>
            </FadeUp>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '1px', background: DIM }}>
            {partners.map((brand, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div
                  onMouseEnter={() => setHoveredPartner(i)}
                  onMouseLeave={() => setHoveredPartner(null)}
                  style={{
                    background: hoveredPartner === i ? WHITE : MID,
                    padding: '2.5rem 1.5rem', textAlign: 'center',
                    transition: 'background 0.3s ease', cursor: 'default',
                  }}
                >
                  <span style={{
                    color: hoveredPartner === i ? DARK : BODY,
                    fontSize: 'clamp(0.85rem,1.1vw,1rem)', fontWeight: 700,
                    letterSpacing: '-0.01em', transition: 'color 0.3s ease',
                  }}>
                    {brand}
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COMPANY VALUES — white ══ */}
      <section style={{ padding: `5rem ${PAD}`, background: WHITE, borderTop: `1px solid ${DIM}` }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <Eyebrow label="Our Values" />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: DIM }}>
            {values.map((val, i) => (
              <FadeUp key={i} delay={(i % 3) * 0.08}>
                <div
                  onMouseEnter={() => setHoveredValue(i)}
                  onMouseLeave={() => setHoveredValue(null)}
                  style={{
                    background: hoveredValue === i ? MID : WHITE,
                    padding: 'clamp(2rem,3.5vw,3rem)', height: '100%',
                    transition: 'background 0.3s ease', cursor: 'default',
                    borderLeft: hoveredValue === i ? `3px solid ${GOLD}` : '3px solid transparent',
                  }}
                >
                  <div style={{ color: GOLD, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '1.25rem' }}>
                    0{i + 1}
                  </div>
                  <h3 style={{ color: DARK, fontSize: 'clamp(1.1rem,1.5vw,1.35rem)', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                    {val.title}
                  </h3>
                  <p style={{ color: BODY, fontSize: '0.85rem', lineHeight: 1.75 }}>
                    {val.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA — dark teal, same as services CTA ══ */}
      <section style={{ padding: `5rem ${PAD}`, background: DARK, borderTop: `1px solid ${DIM}` }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <FadeUp>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '3rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <svg width="10" height="10" viewBox="0 0 12 12"><circle cx="6" cy="6" r="6" fill={GOLD} /></svg>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.4em', textTransform: 'uppercase' }}>
                    Let's Build Together
                  </span>
                </div>
                <h2 style={{
                  color: WHITE,
                  fontSize: 'clamp(2rem,5vw,4rem)',
                  fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', margin: 0,
                }}>
                  Ready to start<br />your project?
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', lineHeight: 1.75, maxWidth: '34ch', margin: 0 }}>
                  From site assessment to final handover — we deliver premium infrastructure execution across India.
                </p>
                <Link href="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                  background: GOLD, color: DARK,
                  padding: '1rem 2.5rem', fontSize: '0.78rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
                }}>
                  Get in Touch
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12H20M20 12L14 6M20 12L14 18" /></svg>
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}
