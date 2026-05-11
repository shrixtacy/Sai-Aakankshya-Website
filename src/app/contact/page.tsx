'use client';

import { useState } from 'react';
import Navbar from '@/components/wallnut/Navbar';
import Footer from '@/components/wallnut/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="min-h-screen bg-[#202A30]">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 px-8 lg:px-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#FDC41F"><circle cx="6" cy="6" r="6" /></svg>
            <span className="text-white text-sm font-semibold">Contact</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <h1
            className="text-white font-bold mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', lineHeight: 0.95, letterSpacing: '-0.03em' }}
          >
            Let&apos;s Connect
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Ready to start your infrastructure project? Get in touch with our team and let&apos;s build exceptional spaces together.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="pb-20 px-8 lg:px-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left - Contact info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">Get in touch</h3>
                <div className="space-y-3">
                  <a href="tel:9040099001" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm group">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="text-[#FDC41F] flex-shrink-0">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                    </svg>
                    +91 9040099001
                  </a>
                  <a href="mailto:saiaakankshya.associates@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm group">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="text-[#FDC41F] flex-shrink-0">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    saiaakankshya.associates@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-6">Our office</h3>
                <div>
                  <p className="text-white text-sm font-semibold mb-2">Bhubaneswar</p>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Plot No 36, Nuasahi, Rasulgarh,<br />
                    Bhubaneswar, Odisha – 751010
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">Company details</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="text-white/40 text-xs w-16 flex-shrink-0 pt-0.5">GSTN</span>
                    <span className="text-white/60 text-sm">21AEJFS7979B1ZT</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-white/40 text-xs w-16 flex-shrink-0 pt-0.5">Founded</span>
                    <span className="text-white/60 text-sm">2021</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-white/40 text-xs w-16 flex-shrink-0 pt-0.5">Founder</span>
                    <span className="text-white/60 text-sm">Mr. Debasis Mohapatra</span>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div>
                <h3 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">Location</h3>
                <div className="overflow-hidden" style={{ height: '220px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.0!2d85.8245!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRasulgarh%2C+Bhubaneswar%2C+Odisha+751010!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="220"
                    style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(0.8)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SAI AAKANKSHYA ASSOCIATES Office Location"
                  />
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              {submitted ? (
                <div className="flex flex-col items-start justify-center h-full py-16">
                  <div className="w-12 h-12 bg-[#FDC41F] flex items-center justify-center mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#202A30" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-3">Inquiry sent!</h3>
                  <p className="text-white/60 text-sm">Thank you for reaching out. Our team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-white/40 text-xs font-semibold mb-3 uppercase tracking-widest">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-white/20 text-white text-sm py-3 focus:outline-none focus:border-[#FDC41F] transition-colors placeholder-white/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-white/40 text-xs font-semibold mb-3 uppercase tracking-widest">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 text-white text-sm py-3 focus:outline-none focus:border-[#FDC41F] transition-colors placeholder-white/20"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-white/40 text-xs font-semibold mb-3 uppercase tracking-widest">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-white/20 text-white text-sm py-3 focus:outline-none focus:border-[#FDC41F] transition-colors placeholder-white/20"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-white/40 text-xs font-semibold mb-3 uppercase tracking-widest">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 text-white text-sm py-3 focus:outline-none focus:border-[#FDC41F] transition-colors placeholder-white/20"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/40 text-xs font-semibold mb-3 uppercase tracking-widest">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full bg-[#202A30] border-b border-white/20 text-white text-sm py-3 focus:outline-none focus:border-[#FDC41F] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#202A30]">Select project type</option>
                      <option value="false-ceiling" className="bg-[#202A30]">False Ceiling Systems</option>
                      <option value="wall-cladding" className="bg-[#202A30]">Wall Cladding & Facade</option>
                      <option value="interior-exterior" className="bg-[#202A30]">Interior & Exterior Execution</option>
                      <option value="civil" className="bg-[#202A30]">Civil Construction</option>
                      <option value="fire-security" className="bg-[#202A30]">Fire & Security Systems</option>
                      <option value="smart-automation" className="bg-[#202A30]">Smart Automation & Energy</option>
                      <option value="other" className="bg-[#202A30]">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/40 text-xs font-semibold mb-3 uppercase tracking-widest">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-transparent border-b border-white/20 text-white text-sm py-3 focus:outline-none focus:border-[#FDC41F] transition-colors placeholder-white/20 resize-none"
                      placeholder="Tell us about your project — scope, location, timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-3 bg-[#FDC41F] text-[#202A30] font-semibold px-8 py-4 text-sm hover:bg-[#e6b01a] transition-colors disabled:opacity-70"
                  >
                    {loading ? 'Sending...' : 'Send inquiry'}
                    {!loading && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
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
