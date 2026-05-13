'use client';

import { useState } from 'react';
import Navbar from '@/components/wallnut/Navbar';
import Footer from '@/components/wallnut/Footer';

const FONT = 'Inter, sans-serif';
const GOLD = '#FDC41F';
const DARK = '#202A30';
const PAD  = 'clamp(2rem,5vw,5rem)';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '',
    phone: '', projectType: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [focused, setFocused]     = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputStyle = (name: string): React.CSSProperties => ({
    width: '100%', background: 'transparent',
    border: 'none', borderBottom: `1px solid ${focused === name ? GOLD : 'rgba(255,255,255,0.15)'}`,
    color: '#fff', fontSize: '1rem', fontFamily: FONT,
    padding: '0.85rem 0', outline: 'none',
    transitionProperty: 'border-color',
    transitionDuration: '0.25s',
  });

  const labelStyle: React.CSSProperties = {
    display: 'block', color: 'rgba(255,255,255,0.3)',
    fontSize: '0.62rem', fontWeight: 600,
    letterSpacing: '0.35em', textTransform: 'uppercase',
    marginBottom: '0.6rem', fontFamily: FONT,
  };

  return (
    <main style={{ minHeight: '100vh', background: DARK, fontFamily: FONT }}>
      <Navbar />

      {/* ══ HERO ══ */}
      <section style={{ paddingTop: '9rem', paddingBottom: '4rem', paddingLeft: PAD, paddingRight: PAD, position: 'relative', overflow: 'hidden' }}>
        {/* decorative rings */}
        <div style={{ position: 'absolute', top: '-10rem', right: '-10rem', width: '40rem', height: '40rem', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-5rem', right: '-5rem', width: '24rem', height: '24rem', borderRadius: '50%', border: '1px solid rgba(253,196,31,0.05)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill={GOLD} /></svg>
            <span style={{ color: 'rgba(253,196,31,0.85)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.42em', textTransform: 'uppercase' }}>
              Contact Us
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
          </div>

          <h1 style={{
            color: '#fff', fontSize: 'clamp(4rem, 10vw, 9.5rem)',
            fontWeight: 800, lineHeight: 0.92, letterSpacing: '-0.04em', marginBottom: '2rem',
          }}>
            Let&apos;s<br />
            <span style={{ color: GOLD }}>Connect</span>
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(1rem,1.5vw,1.1rem)', lineHeight: 1.75, maxWidth: '48ch' }}>
            Ready to start your infrastructure project? Get in touch and let&apos;s build exceptional spaces together.
          </p>
        </div>
      </section>

      {/* ══ MAIN CONTENT ══ */}
      <section style={{ paddingBottom: '6rem', paddingLeft: PAD, paddingRight: PAD }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1.4fr', gap: 0 }}>

            {/* ── LEFT: Info ── */}
            <div style={{ paddingRight: 'clamp(2rem,4vw,4rem)' }}>

              {/* Contact */}
              <div style={{ marginBottom: '3rem' }}>
                <p style={{ color: 'rgba(253,196,31,0.7)', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                  Get in Touch
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <a href="tel:9040099001" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', transitionProperty: 'color', transitionDuration: '0.2s', color: 'rgba(255,255,255,0.6)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>
                    <span style={{ width: '36px', height: '36px', background: 'rgba(253,196,31,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                      </svg>
                    </span>
                    <span style={{ fontSize: '1rem', fontWeight: 500 }}>+91 9040099001</span>
                  </a>
                  <a href="mailto:saiaakankshya.associates@gmail.com" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', textDecoration: 'none', transitionProperty: 'color', transitionDuration: '0.2s', color: 'rgba(255,255,255,0.6)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>
                    <span style={{ width: '36px', height: '36px', background: 'rgba(253,196,31,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                      </svg>
                    </span>
                    <span style={{ fontSize: '0.92rem', fontWeight: 500, lineHeight: 1.5 }}>saiaakankshya.associates<br />@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Office */}
              <div style={{ marginBottom: '3rem' }}>
                <p style={{ color: 'rgba(253,196,31,0.7)', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                  Our Office
                </p>
                <p style={{ color: '#fff', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Bhubaneswar</p>
                <a href="https://maps.google.com/?q=Rasulgarh,Bhubaneswar,Odisha" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', lineHeight: 1.8, textDecoration: 'none', display: 'block', transitionProperty: 'color', transitionDuration: '0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
                  Plot No 36, Nuasahi, Rasulgarh,<br />
                  Bhubaneswar, Odisha – 751010
                </a>
              </div>

              {/* Company details */}
              <div style={{ marginBottom: '3rem' }}>
                <p style={{ color: 'rgba(253,196,31,0.7)', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                  Company Details
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { label: 'GSTN', value: '21AEJFS7979B1ZT' },
                    { label: 'Founded', value: '2021' },
                    { label: 'Founder', value: 'Mr. Debasis Mohapatra' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                      <span style={{ color: 'rgba(255,255,255,0.22)', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', minWidth: '4.5rem' }}>{item.label}</span>
                      <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', fontWeight: 500 }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div>
                <p style={{ color: 'rgba(253,196,31,0.7)', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                  Location
                </p>
                <div style={{ overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.0!2d85.8245!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRasulgarh%2C+Bhubaneswar%2C+Odisha+751010!5e0!3m2!1sen!2sin!4v1"
                    width="100%" height="220"
                    style={{ border: 0, display: 'block', filter: 'grayscale(1) invert(0.85) contrast(0.9)' }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SAI AAKANKSHYA ASSOCIATES Office Location"
                  />
                </div>
              </div>
            </div>

            {/* ── VERTICAL DIVIDER ── */}
            <div style={{ background: 'rgba(255,255,255,0.08)' }} />

            {/* ── RIGHT: Form ── */}
            <div style={{ paddingLeft: 'clamp(2rem,4vw,4rem)' }}>
              {submitted ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: '100%', padding: '4rem 0' }}>
                  <div style={{ width: '56px', height: '56px', background: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={DARK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 style={{ color: '#fff', fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                    Inquiry Sent!
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1rem', lineHeight: 1.75 }}>
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <p style={{ color: 'rgba(253,196,31,0.7)', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '2.5rem' }}>
                    Send an Inquiry
                  </p>

                  {/* Name + Company */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}>
                    <div>
                      <label style={labelStyle}>Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required
                        placeholder="Your name"
                        style={{ ...inputStyle('name'), color: '#fff' }}
                        onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} />
                    </div>
                    <div>
                      <label style={labelStyle}>Company</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange}
                        placeholder="Your company"
                        style={{ ...inputStyle('company'), color: '#fff' }}
                        onFocus={() => setFocused('company')} onBlur={() => setFocused(null)} />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required
                        placeholder="your@email.com"
                        style={{ ...inputStyle('email'), color: '#fff' }}
                        onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        placeholder="+91 00000 00000"
                        style={{ ...inputStyle('phone'), color: '#fff' }}
                        onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)} />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div style={{ marginBottom: '2.5rem' }}>
                    <label style={labelStyle}>Project Type</label>
                    <select name="projectType" value={formData.projectType} onChange={handleChange}
                      style={{ ...inputStyle('projectType'), color: formData.projectType ? '#fff' : 'rgba(255,255,255,0.3)', cursor: 'pointer' }}
                      onFocus={() => setFocused('projectType')} onBlur={() => setFocused(null)}>
                      <option value="" style={{ background: DARK }}>Select project type</option>
                      <option value="false-ceiling" style={{ background: DARK }}>False Ceiling Systems</option>
                      <option value="wall-cladding" style={{ background: DARK }}>Wall Cladding & Facade</option>
                      <option value="interior-exterior" style={{ background: DARK }}>Interior & Exterior Execution</option>
                      <option value="civil" style={{ background: DARK }}>Civil Construction</option>
                      <option value="fire-security" style={{ background: DARK }}>Fire & Security Systems</option>
                      <option value="smart-automation" style={{ background: DARK }}>Smart Automation & Energy</option>
                      <option value="other" style={{ background: DARK }}>Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: '3rem' }}>
                    <label style={labelStyle}>Message *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                      placeholder="Tell us about your project — scope, location, timeline..."
                      style={{ ...inputStyle('message'), resize: 'none', lineHeight: 1.7, color: '#fff' }}
                      onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} />
                  </div>

                  {/* Submit */}
                  <button type="submit" disabled={loading}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                      background: GOLD, color: DARK,
                      padding: '1.1rem 2.8rem', fontSize: '0.85rem', fontWeight: 700,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                      opacity: loading ? 0.7 : 1, fontFamily: FONT,
                    }}>
                    {loading ? 'Sending...' : 'Send Inquiry'}
                    {!loading && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12H20M20 12L14 6M20 12L14 18" />
                      </svg>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
