import Navbar from '@/components/wallnut/Navbar';
import HeroSection from '@/components/wallnut/HeroSection';
import AboutSection from '@/components/wallnut/AboutSection';
import ScrollVideoSection from '@/components/wallnut/ScrollVideoSection';
import ServicesSection from '@/components/wallnut/ServicesSection';
import PortfolioSection from '@/components/wallnut/PortfolioSection';
import TimelineSection from '@/components/wallnut/TimelineSection';
import TeamSection from '@/components/wallnut/TeamSection';
import CTASection from '@/components/wallnut/CTASection';
import Footer from '@/components/wallnut/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Navbar - fixed overlay, shows after hero */}
      <Navbar />

      {/* Hero Section - Full viewport height, includes its own nav */}
      <HeroSection />

      {/* About / Construction Zones Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio / Nailed Projects Section */}
      <PortfolioSection />

      {/* Timeline / Process Section */}
      <TimelineSection />

      {/* Scroll Video Section — FROM CONCEPT TO COMPLETION */}
      <ScrollVideoSection />

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
