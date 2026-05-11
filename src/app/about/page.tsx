import Navbar from '@/components/wallnut/Navbar';
import Footer from '@/components/wallnut/Footer';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { value: '2021', label: 'Founded' },
    { value: '28+', label: 'Years of expertise' },
    { value: '12+', label: 'Landmark projects' },
    { value: 'Pan-India', label: 'Project footprint' },
  ];

  const missions = [
    {
      number: '01',
      title: 'Industry-Leading Innovation',
      description: 'Continuously adopting technically advanced execution methods, sustainable materials, and smart infrastructure solutions to stay ahead of industry standards.',
    },
    {
      number: '02',
      title: 'Customized Sustainable Execution',
      description: 'Delivering tailored, energy-efficient, and environmentally responsible infrastructure solutions that meet the unique requirements of each client and project.',
    },
    {
      number: '03',
      title: 'Global Expansion & Partnerships',
      description: 'Strengthening strategic collaborations with globally recognized brands like HunterDouglas, Saint Gobain, Philips, Ramco, and Armstrong to expand capabilities and reach.',
    },
  ];

  const industries = [
    { title: 'Airports', description: 'Large-scale ceiling, cladding, and facade execution for major international airports across India.' },
    { title: 'Hospitality', description: 'Premium interior and exterior execution for resorts, hotels, and hospitality complexes.' },
    { title: 'Government', description: 'Infrastructure execution for government buildings, public facilities, and civic spaces.' },
    { title: 'Commercial', description: 'Ceiling systems, facade work, and interior execution for malls, corporate offices, and commercial complexes.' },
    { title: 'Institutional', description: 'Architectural finishing and ceiling execution for universities, educational institutions, and research facilities.' },
    { title: 'Power Sector', description: 'Civil construction and infrastructure works for OPTCL, Tata Power, Power Grid Corporation, and more.' },
    { title: 'Public Infrastructure', description: 'Ceiling and cladding execution for bus terminals, zoological parks, and public transport facilities.' },
  ];

  const values = [
    { title: 'Quality', description: 'Uncompromising standards at every stage of execution — from material selection to final handover.' },
    { title: 'Precision', description: 'Technically accurate execution across large-scale ceiling, cladding, and civil infrastructure projects.' },
    { title: 'Innovation', description: 'Adopting advanced systems and sustainable solutions to deliver future-ready infrastructure.' },
    { title: 'Trust', description: 'Building long-term relationships with clients, partners, and stakeholders through consistent delivery.' },
    { title: 'Sustainability', description: 'Energy-efficient and environmentally responsible execution practices across all project categories.' },
    { title: 'Long-term Relationships', description: 'Client satisfaction and enduring partnerships are at the core of everything we do.' },
  ];

  const partners = ['HunterDouglas', 'Ramco', 'Saint Gobain', 'Philips', 'Armstrong'];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Hero */}
      <section className="bg-[#202A30] pt-36 pb-20 px-8 lg:px-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#FDC41F"><circle cx="6" cy="6" r="6" /></svg>
            <span className="text-white text-sm font-semibold">About us</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <h1
            className="text-white font-bold mb-8"
            style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', lineHeight: 0.95, letterSpacing: '-0.03em' }}
          >
            Building India<br />better
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Since 2021, SAI AAKANKSHYA ASSOCIATES has been delivering premium interior, exterior, ceiling, cladding, and civil construction projects across India — led by 28 years of industry expertise.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#F5F4F0] py-0">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats?.map((stat, i) => (
              <div
                key={i}
                className="p-10 text-center"
                style={{
                  borderRight: i < 3 ? '1px solid rgba(105,137,150,0.2)' : 'none',
                  borderBottom: '1px solid rgba(105,137,150,0.2)'
                }}
              >
                <div
                  className="text-[#202A30] font-bold mb-2"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}
                >
                  {stat?.value}
                </div>
                <div className="text-[#698996] text-sm">{stat?.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-white py-20 px-8 lg:px-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#FDC41F"><circle cx="6" cy="6" r="6" /></svg>
            <span className="text-[#202A30] text-sm font-semibold">Our story</span>
            <div className="flex-1 h-px bg-[#698996]/30" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2
                className="text-[#202A30] font-medium"
                style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)', lineHeight: 1.35 }}
              >
                Founded in 2021 by{' '}
                <span className="font-bold">Mr. Debasis Mohapatra</span>
                {' '}— an industry professional with{' '}
                <span className="font-bold">28 years of corporate expertise</span>
                {' '}— SAI AAKANKSHYA ASSOCIATES was built on a vision to transform how infrastructure execution is delivered across India.
              </h2>
            </div>
            <div className="flex items-end justify-start lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-[#202A30]/30 text-[#202A30] px-6 py-3 text-sm font-medium hover:border-[#202A30] transition-all duration-200 group"
              >
                Work with us
                <span className="group-hover:translate-x-1 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12H20M20 12L14 6M20 12L14 18" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <p className="text-[#698996] text-base leading-relaxed">
              Headquartered in Bhubaneswar, Odisha, the company specializes in premium interior, exterior, architectural, and civil execution projects. From conceptualization to inauguration, SAI AAKANKSHYA ASSOCIATES handles complete project execution — serving sectors including universities, hotels, airports, commercial complexes, government infrastructure, public transport facilities, and corporate offices.
            </p>
            <p className="text-[#698996] text-base leading-relaxed">
              The company is particularly known for its large-scale ceiling and cladding execution capabilities, handling projects ranging from 1000 sqm to over 11000 sqm. With strategic collaborations with globally recognized brands including HunterDouglas, Saint Gobain, Philips, Ramco, and Armstrong, the company delivers technically advanced, sustainable, and high-quality infrastructure solutions across India.
            </p>
          </div>

          <div className="overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="SAI AAKANKSHYA ASSOCIATES large-scale infrastructure execution project."
              className="w-full object-cover"
              style={{ maxHeight: '580px', objectPosition: 'center' }}
            />
          </div>
        </div>
      </section>

      {/* Mission & Objectives */}
      <section className="bg-[#F5F4F0] py-20 px-8 lg:px-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#FDC41F"><circle cx="6" cy="6" r="6" /></svg>
            <span className="text-[#202A30] text-sm font-semibold">Mission & objectives</span>
            <div className="flex-1 h-px bg-[#698996]/30" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {missions?.map((m, i) => (
              <div
                key={i}
                className="p-10"
                style={{
                  borderRight: i < 2 ? '1px solid rgba(105,137,150,0.2)' : 'none',
                }}
              >
                <div className="text-[#FDC41F] text-sm font-semibold mb-4">{m.number}</div>
                <h3
                  className="text-[#202A30] font-bold mb-4"
                  style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', lineHeight: 1.3 }}
                >
                  {m.title}
                </h3>
                <p className="text-[#698996] text-sm leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-white py-20 px-8 lg:px-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#FDC41F"><circle cx="6" cy="6" r="6" /></svg>
            <span className="text-[#202A30] text-sm font-semibold">Industries we serve</span>
            <div className="flex-1 h-px bg-[#698996]/30" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {industries?.map((ind, i) => (
              <div
                key={i}
                className="p-8"
                style={{
                  borderRight: i % 2 === 0 ? '1px solid rgba(105,137,150,0.2)' : 'none',
                  borderBottom: i < industries.length - 2 ? '1px solid rgba(105,137,150,0.2)' : 'none',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FDC41F] flex-shrink-0" />
                  <h3 className="text-[#202A30] font-semibold text-base">{ind.title}</h3>
                </div>
                <p className="text-[#698996] text-sm leading-relaxed pl-4">{ind.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="bg-[#F5F4F0] py-20 px-8 lg:px-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#FDC41F"><circle cx="6" cy="6" r="6" /></svg>
            <span className="text-[#202A30] text-sm font-semibold">Strategic partnerships</span>
            <div className="flex-1 h-px bg-[#698996]/30" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2
                className="text-[#202A30] font-medium"
                style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)', lineHeight: 1.35 }}
              >
                We collaborate with{' '}
                <span className="font-bold">globally recognized brands</span>
                {' '}to deliver technically superior and premium-quality infrastructure execution across India.
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-[#698996] text-sm leading-relaxed">
                Our strategic partnerships with industry leaders ensure that every project benefits from the best materials, systems, and technical expertise available — from ceiling systems to facade solutions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5">
            {partners?.map((brand, i) => (
              <div
                key={i}
                className="p-8 text-center"
                style={{
                  borderRight: i < 4 ? '1px solid rgba(105,137,150,0.2)' : 'none',
                }}
              >
                <span
                  className="text-[#202A30] font-bold"
                  style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)', letterSpacing: '-0.01em' }}
                >
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="bg-white py-20 px-8 lg:px-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#FDC41F"><circle cx="6" cy="6" r="6" /></svg>
            <span className="text-[#202A30] text-sm font-semibold">Our values</span>
            <div className="flex-1 h-px bg-[#698996]/30" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {values?.map((val, i) => (
              <div
                key={i}
                className="p-8"
                style={{
                  borderRight: (i % 3 < 2) ? '1px solid rgba(105,137,150,0.2)' : 'none',
                  borderBottom: i < 3 ? '1px solid rgba(105,137,150,0.2)' : 'none',
                }}
              >
                <div className="text-[#FDC41F] text-sm font-semibold mb-3">0{i + 1}</div>
                <h3 className="text-[#202A30] font-bold text-lg mb-3">{val.title}</h3>
                <p className="text-[#698996] text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
