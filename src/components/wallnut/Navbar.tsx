'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import WallnutLogo from './WallnutLogo';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome) {
      setPastHero(true);
      return;
    }
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setPastHero(window.scrollY > heroHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const isVisible = pastHero || menuOpen;

  return (
    <>
      {/* Fixed Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isVisible
            ? 'translate-y-0 opacity-100' :'-translate-y-full opacity-0 pointer-events-none'
        } ${menuOpen ? 'bg-transparent' : 'bg-[#202A30]'}`}
        style={{ padding: '1rem 1.25rem' }}
      >
        <div className="flex items-center justify-between max-w-[1440px] mx-auto gap-3">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <WallnutLogo color="white" className="h-6 w-auto" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className={`text-base font-medium transition-colors duration-200 ${
                  pathname === link?.href ? 'text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                {link?.label}
              </Link>
            ))}

          </div>

          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-3 text-white"
            aria-label="Toggle menu"
          >
            <span className="text-sm font-medium">{menuOpen ? 'Close' : 'Menu'}</span>
            <div className="flex flex-col gap-1.5 w-6">
              <span
                className={`block h-px bg-white transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-px bg-white transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-0.5' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu button — only on home, only when at top (before hero scroll) */}
      {isHome && (
        <>
          {/* Mobile logo — top left, visible only before hero scroll */}
          <Link
            href="/"
            className={`fixed top-4 left-5 z-50 lg:hidden transition-all duration-500 ${
              pastHero || menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <img
              src="/assets/images/saia.png"
              alt="SAI AAKANKSHYA ASSOCIATES"
              style={{ width: '2.2rem', height: '2.2rem', objectFit: 'contain' }}
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`fixed top-4 right-5 z-50 flex items-center gap-3 text-white lg:hidden transition-all duration-500 ${
              pastHero || menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            aria-label="Toggle menu"
          >
            <span className="text-sm font-medium">Menu</span>
            <div className="flex flex-col gap-1.5 w-6">
              <span className="block h-px bg-white" />
              <span className="block h-px bg-white" />
            </div>
          </button>
        </>
      )}

      {/* Full Page Menu Overlay — slides in from RIGHT */}
      <div
        className={`fixed inset-0 z-40 bg-[#202A30] transition-transform duration-700 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full">
          {/* Left Column - Contact Info */}
          <div className="hidden lg:flex flex-col justify-between w-80 border-r border-white/10 p-12 pt-28">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="#FDC41F" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="6" fill="#FDC41F" />
                </svg>
                <span className="text-white text-sm font-semibold">Contact us</span>
              </div>
              <div className="h-px bg-white/10 mb-8" />
              <div className="space-y-2 mb-8">
                <a href="tel:9040099001" className="block text-white/60 text-sm hover:text-white transition-colors">+91 9040099001</a>
                <a href="mailto:saiaakankshya.associates@gmail.com" className="block text-white/60 text-sm hover:text-white transition-colors">saiaakankshya.associates@gmail.com</a>
              </div>
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-white text-sm mb-1">Bhubaneswar</p>
                  <p className="text-white/60 text-sm">Plot No 36, Nuasahi, Rasulgarh,<br />Bhubaneswar, Odisha – 751010</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/wallnut.official/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.8922 0C0.863587 0 0 0.863587 0 11.8922V12.1078C0 23.1364 0.863587 24 11.8922 24H12.1078C23.1364 24 24 23.1364 24 12.1078V12C24 0.8712 23.1288 0 12 0H11.8922ZM9.6 2.4H14.4C21.0774 2.4 21.6 2.9226 21.6 9.6V14.4C21.6 21.0774 21.0774 21.6 14.4 21.6H9.6C2.9226 21.6 2.4 21.0774 2.4 14.4V9.6C2.4 2.9226 2.9226 2.4 9.6 2.4ZM17.9965 4.8C17.3335 4.8018 16.7982 5.34052 16.8 6.00352C16.8018 6.66652 17.3405 7.2018 18.0035 7.2C18.6665 7.1982 19.2018 6.65948 19.2 5.99648C19.1982 5.33348 18.6595 4.7982 17.9965 4.8ZM11.9859 6C8.67274 6.0078 5.9922 8.70086 6 12.0141C6.0078 15.3273 8.70086 18.0078 12.0141 18C15.3273 17.9922 18.0078 15.2991 18 11.9859C17.9922 8.67274 15.2991 5.9922 11.9859 6ZM11.9918 8.4C13.9796 8.3952 15.5952 10.004 15.6 11.9918C15.6042 13.9796 13.996 15.5952 12.0082 15.6C10.0204 15.6048 8.4048 13.9966 8.4 12.0082C8.3952 10.0204 10.004 8.4048 11.9918 8.4Z" /></svg>
                </a>
                <a href="https://www.facebook.com/wallnut.pt/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12C0 18.016 4.432 22.984 10.206 23.852V15.18H7.237V12.026H10.206V9.927C10.206 6.452 11.899 4.927 14.787 4.927C16.17 4.927 16.902 5.03 17.248 5.076V7.829H15.278C14.052 7.829 13.624 8.992 13.624 10.302V12.026H17.217L16.73 15.18H13.624V23.877C19.481 23.083 24 18.075 24 12C24 5.373 18.627 0 12 0Z" /></svg>
                </a>
                <a href="https://pt.linkedin.com/company/wallnut-pt" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21.1429 0H2.85714C1.28 0 0 1.28 0 2.85714V21.1429C0 22.72 1.28 24 2.85714 24H21.1429C22.72 24 24 22.72 24 21.1429V2.85714C24 1.28 22.72 0 21.1429 0ZM7.42857 9.14286V20H4V9.14286H7.42857ZM4 5.98286C4 5.18286 4.68571 4.57143 5.71429 4.57143C6.74286 4.57143 7.38857 5.18286 7.42857 5.98286C7.42857 6.78286 6.78857 7.42857 5.71429 7.42857C4.68571 7.42857 4 6.78286 4 5.98286ZM20 20H16.5714C16.5714 20 16.5714 14.7086 16.5714 14.2857C16.5714 13.1429 16 12 14.5714 11.9771H14.5257C13.1429 11.9771 12.5714 13.1543 12.5714 14.2857C12.5714 14.8057 12.5714 20 12.5714 20H9.14286V9.14286H12.5714V10.6057C12.5714 10.6057 13.6743 9.14286 15.8914 9.14286C18.16 9.14286 20 10.7029 20 13.8629V20Z" /></svg>
                </a>
              </div>
            </div>
            <div className="text-white/40 text-xs">Copyright © SAI AAKANKSHYA ASSOCIATES 2024</div>
          </div>

          {/* Right Column - Nav Links */}
          <div className="flex flex-col justify-center items-center flex-1 px-6 lg:px-12 py-24">
            <nav className="space-y-1 mb-12 text-center w-full">
              {navLinks?.map((link, i) => (
                <Link
                  key={link?.href}
                  href={link?.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-white/80 hover:text-white"
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                    fontWeight: 600,
                    lineHeight: 1.1,
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? 'translateX(0)' : 'translateX(40px)',
                    transitionProperty: 'opacity, transform, color',
                    transitionDuration: '0.5s',
                    transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
                    transitionDelay: `${i * 0.06}s`,
                  }}
                >
                  {link?.label}
                </Link>
              ))}
            </nav>
            <div className="h-px bg-white/10 mb-8 w-full" />
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-3 bg-[#FDC41F] text-[#202A30] font-semibold px-6 py-3 text-sm hover:bg-[#e6b01a]"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(40px)',
                transitionProperty: 'opacity, transform',
                transitionDuration: '0.5s',
                transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
                transitionDelay: '0.35s',
              }}
            >
              Request a quote
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12H20M20 12L14 6M20 12L14 18" />
              </svg>
            </Link>

            {/* Mobile-only contact info */}
            <div className="lg:hidden mt-8 text-center space-y-2">
              <a href="tel:9040099001" className="block text-white/50 text-sm">+91 9040099001</a>
              <a href="mailto:saiaakankshya.associates@gmail.com" className="block text-white/50 text-xs">saiaakankshya.associates@gmail.com</a>
              <p className="text-white/25 text-xs mt-4">© SAI AAKANKSHYA ASSOCIATES 2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
