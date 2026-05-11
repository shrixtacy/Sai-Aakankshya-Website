import Navbar from '@/components/wallnut/Navbar';
import Footer from '@/components/wallnut/Footer';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      number: '01',
      title: 'False Ceiling Systems',
      description: 'Precision-executed ceiling systems across airports, institutions, and commercial spaces — from gypsum and HDI systems to linear, baffle, metal, and aluminium ceilings at any scale.',
      items: ['Gypsum Ceiling Systems', 'Linear & Baffle Ceilings', 'Metal & Aluminium Ceilings', 'HDI Ceiling Systems (600x600)']
    },
    {
      number: '02',
      title: 'Wall Cladding & Aluminium Facade',
      description: 'Premium wall cladding and aluminium facade execution for airports, malls, and large-scale commercial and institutional infrastructure projects across India.',
      items: ['Wall Cladding', 'Aluminium Facade Work', 'Aluminium Tube Ceiling', 'Architectural Cladding Systems']
    },
    {
      number: '03',
      title: 'Interior & Exterior Execution',
      description: 'Complete project execution from conceptualization to inauguration — covering hospitality, corporate, institutional, and government infrastructure projects.',
      items: ['Full Interior Execution', 'Exterior Finishing', 'Acoustic Hall Rooms', 'Resort & Hotel Interiors']
    },
    {
      number: '04',
      title: 'Civil Construction',
      description: 'Structural civil works for power sector, government, and public infrastructure — executed for OPTCL, Tata Power, Power Grid Corporation, and more.',
      items: ['Civil Infrastructure Works', 'Structural Execution', 'Power Sector Projects', 'Government Infrastructure']
    },
    {
      number: '05',
      title: 'Fire & Security Systems',
      description: 'Integrated fire protection and security system installation for commercial complexes, institutions, airports, and large-scale infrastructure projects.',
      items: ['Fire Protection Systems', 'Security System Integration', 'Safety Compliance', 'Infrastructure Safety']
    },
    {
      number: '06',
      title: 'Smart Automation & Energy',
      description: 'Smart automation solutions and energy-efficient infrastructure systems designed to future-proof commercial, institutional, and government spaces.',
      items: ['Smart Automation Solutions', 'Energy-Efficient Systems', 'Building Automation', 'Sustainable Infrastructure']
    }
  ];

  return (
    <main className="min-h-screen bg-[#F5F4F0]">
      <Navbar />
      {/* Hero */}
      <section className="bg-[#202A30] pt-36 pb-20 px-8 lg:px-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#FDC41F"><circle cx="6" cy="6" r="6" /></svg>
            <span className="text-white text-sm font-semibold">Services</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <h1
            className="text-white font-bold"
            style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', lineHeight: 0.95, letterSpacing: '-0.03em' }}
          >
            From concept<br />to inauguration
          </h1>
        </div>
      </section>
      {/* Services list */}
      <section className="bg-white py-0 px-0">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {services?.map((service, i) => (
              <div
                key={i}
                className="p-10 lg:p-12"
                style={{
                  borderRight: i % 2 === 0 ? '1px solid rgba(105,137,150,0.2)' : 'none',
                  borderBottom: i < services.length - 2 ? '1px solid rgba(105,137,150,0.2)' : 'none'
                }}
              >
                <div className="text-[#FDC41F] text-sm font-semibold mb-4">{service?.number}</div>
                <h2
                  className="text-[#202A30] font-bold mb-4"
                  style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', lineHeight: 1.2 }}
                >
                  {service?.title}
                </h2>
                <p className="text-[#698996] text-sm leading-relaxed mb-6">{service?.description}</p>
                <ul className="space-y-2">
                  {service?.items?.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-[#202A30]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FDC41F] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-[#202A30] py-20 px-8 lg:px-10">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <h2
            className="text-white font-bold"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
          >
            Ready to start your project?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#FDC41F] text-[#202A30] font-semibold px-8 py-4 text-sm hover:bg-[#e6b01a] transition-colors group"
          >
            Get in touch
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12H20M20 12L14 6M20 12L14 18" />
              </svg>
            </span>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
