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
    subCategory: 'Airports',
    year: '2022',
    location: 'New Delhi',
    scope: 'Linear & Baffle Ceiling + Wall Cladding',
    area: '5000+ sqm',
    image: 'https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Airport terminal interior with large-scale ceiling execution.',
    description: 'Large-scale airport infrastructure execution involving linear ceilings, baffle ceiling systems, and premium wall cladding solutions designed for high-footfall modern aviation environments.',
  },
  {
    id: 2,
    name: 'Rajiv Gandhi International Airport',
    type: 'Airport Infrastructure',
    category: 'Government',
    subCategory: 'Airports',
    year: '2021',
    location: 'Hyderabad',
    scope: 'Linear Ceiling',
    area: '11000 sqm',
    image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Airport with extensive linear ceiling systems.',
    description: 'Executed extensive linear ceiling systems across airport infrastructure spaces with precision-focused architectural finishing.',
  },
  {
    id: 3,
    name: 'Kempegowda International Airport',
    type: 'Airport Infrastructure',
    category: 'Government',
    subCategory: 'Airports',
    year: '2022',
    location: 'Bangalore',
    scope: 'Aluminium Tube Ceiling',
    area: 'Large-scale',
    image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Modern airport interior with aluminium tube ceiling execution.',
    description: 'Modern aluminium tube ceiling execution designed for premium airport interior aesthetics and structural durability.',
  },
  {
    id: 4,
    name: 'Chaudhary Charan Singh International Airport',
    type: 'Airport Infrastructure',
    category: 'Government',
    subCategory: 'Airports',
    year: '2023',
    location: 'Lucknow',
    scope: 'Baffle Ceiling',
    area: '2000 sqm',
    image: 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Airport with advanced baffle ceiling systems.',
    description: 'Delivered advanced baffle ceiling systems for airport infrastructure with emphasis on acoustics, design uniformity, and large-scale execution quality.',
  },
  {
    id: 5,
    name: 'KIIT University',
    type: 'Educational Institution',
    category: 'Institutional',
    subCategory: 'Educational',
    year: '2020',
    location: 'Bhubaneswar',
    scope: 'False Ceiling — 600x600 HDI Systems',
    area: '1000 sqm',
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'University building with HDI false ceiling systems.',
    description: 'Executed high-quality HDI false ceiling systems for KIIT University, delivering clean architectural finishing and durable execution across educational infrastructure spaces.',
  },
  {
    id: 6,
    name: 'Coconut Peninsula Resort',
    type: 'Hospitality',
    category: 'Commercial',
    subCategory: 'Hotels',
    year: '2022',
    location: 'Tangi, Odisha',
    scope: 'Full Interior Execution — Linear Metal & Gypsum Ceiling',
    area: '1200 sqm',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Resort with premium hospitality interior execution.',
    description: 'Delivered premium hospitality interior execution featuring gypsum ceiling systems, linear metal ceiling installations, and sophisticated resort interior finishing.',
  },
  {
    id: 7,
    name: 'Babasaheb Ambedkar Bus Terminal',
    type: 'Public Infrastructure',
    category: 'Government',
    subCategory: 'Public Infrastructure',
    year: '2023',
    location: 'India',
    scope: 'Baffle Ceiling',
    area: '3000 sqm',
    image: 'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Bus terminal with large-scale baffle ceiling execution.',
    description: 'Executed high-scale public infrastructure ceiling systems enhancing passenger environment quality and architectural appeal.',
  },
  {
    id: 8,
    name: 'DN Regalia Mall',
    type: 'Commercial',
    category: 'Commercial',
    subCategory: 'Corporate',
    year: '2023',
    location: 'Bhubaneswar',
    scope: 'Aluminium Facade Work',
    area: '1000 sqm',
    image: 'https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Mall with modern aluminium facade execution.',
    description: 'Modern aluminium facade execution for commercial infrastructure with emphasis on contemporary architectural identity.',
  },
  {
    id: 9,
    name: 'Nandankanan Zoological Park',
    type: 'Government',
    category: 'Government',
    subCategory: 'Public Infrastructure',
    year: '2023',
    location: 'Bhubaneswar',
    scope: 'Wall Cladding & Metal Ceiling',
    area: 'Large-scale',
    image: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Public park infrastructure with wall cladding and metal ceiling.',
    description: 'Specialized wall cladding and ceiling execution for public infrastructure spaces designed to ensure durability and modern visual appeal.',
  },
  {
    id: 10,
    name: 'Odisha Mining Corporation',
    type: 'Corporate Office',
    category: 'Commercial',
    subCategory: 'Corporate',
    year: '2022',
    location: 'Odisha',
    scope: 'Office & Interior Work',
    area: 'Corporate scale',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Corporate office with premium interior execution.',
    description: 'Premium office and interior infrastructure execution focused on functional corporate environments and refined interior finishing.',
  },
  {
    id: 11,
    name: 'Mission Shakti Café, Anandvan',
    type: 'Public Hospitality',
    category: 'Commercial',
    subCategory: 'Hotels',
    year: '2023',
    location: 'Odisha',
    scope: 'Interior & Exterior Work',
    area: 'Full execution',
    image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Café with complete interior and exterior execution.',
    description: 'Complete interior and exterior execution for a public hospitality initiative, blending functionality with welcoming architectural aesthetics.',
  },
  {
    id: 12,
    name: 'OPTCL / Tata Power / Power Grid',
    type: 'Power Sector',
    category: 'Government',
    subCategory: 'Civil Construction',
    year: '2021',
    location: 'Pan-India',
    scope: 'Civil Construction Works',
    area: 'Multiple sites',
    image: 'https://images.pexels.com/photos/236722/pexels-photo-236722.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Civil infrastructure projects for power sector organizations.',
    description: 'Executed civil infrastructure projects for major power and utility organizations with focus on reliability, structural quality, and execution efficiency.',
  },
];

const categories = ['All', 'Government', 'Commercial', 'Institutional'];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#202A30]">
      <Navbar />
      {/* Hero */}
      <section className="pt-36 pb-16 px-8 lg:px-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#FDC41F"><circle cx="6" cy="6" r="6" /></svg>
            <span className="text-white text-sm font-semibold">Featured projects</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <h1
            className="text-white font-bold mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', lineHeight: 0.95, letterSpacing: '-0.03em' }}>
            Our work
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            12+ landmark projects across airports, institutions, hospitality, and government infrastructure — from 1000 sqm to 11000+ sqm.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="px-8 lg:px-10 pb-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#FDC41F] text-[#202A30]'
                    : 'border border-white/20 text-white/60 hover:border-white/50 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="pb-20 px-8 lg:px-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {filtered?.map((project) => (
              <div key={project?.id} className="relative overflow-hidden group bg-[#202A30] cursor-pointer">
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={project?.image}
                    alt={project?.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#202A30]/20 group-hover:bg-[#202A30]/50 transition-colors duration-300" />
                  {/* Hover overlay content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white/80 text-xs leading-relaxed mb-3">{project?.description}</p>
                    <span className="inline-flex items-center gap-2 text-[#FDC41F] text-xs font-semibold">
                      View Case Study
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12H20M20 12L14 6M20 12L14 18" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-base mb-1">{project?.name}</h3>
                  <div className="flex items-center gap-2 text-xs text-white/40 mb-2 flex-wrap">
                    <span>{project?.type}</span>
                    <span>·</span>
                    <span>{project?.location}</span>
                    <span>·</span>
                    <span>{project?.area}</span>
                  </div>
                  <p className="text-white/50 text-xs">{project?.scope}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 lg:px-10 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <h2
            className="text-white font-bold"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Have a project in mind?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#FDC41F] text-[#202A30] font-semibold px-8 py-4 text-sm hover:bg-[#e6b01a] transition-colors group">
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
