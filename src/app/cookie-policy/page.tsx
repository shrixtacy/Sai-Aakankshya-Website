import Navbar from '@/components/wallnut/Navbar';
import Footer from '@/components/wallnut/Footer';

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="bg-[#202A30] pt-32 pb-16 px-8 lg:px-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#FDC41F"><circle cx="6" cy="6" r="6" /></svg>
            <span className="text-white text-sm font-semibold">Legal</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <h1
            className="text-white font-bold"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', lineHeight: 0.95, letterSpacing: '-0.03em' }}
          >
            Cookie Policy
          </h1>
        </div>
      </section>
      <section className="py-20 px-8 lg:px-10">
        <div className="max-w-[800px] mx-auto">
          <div className="prose prose-lg max-w-none" style={{ color: '#202A30' }}>
            <p className="text-[#698996] text-sm mb-8">Last updated: January 2026</p>

            <h2 className="text-[#202A30] font-bold text-2xl mb-4">What Are Cookies</h2>
            <p className="text-[#698996] leading-relaxed mb-8">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the website owners.
            </p>

            <h2 className="text-[#202A30] font-bold text-2xl mb-4">How We Use Cookies</h2>
            <p className="text-[#698996] leading-relaxed mb-4">We use cookies for the following purposes:</p>
            <ul className="list-none space-y-2 mb-8">
              {[
                'Essential cookies: Required for the website to function properly',
                'Analytics cookies: Help us understand how visitors interact with our website',
                'Preference cookies: Remember your settings and preferences'
              ]?.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#698996]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FDC41F] flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-[#202A30] font-bold text-2xl mb-4">Managing Cookies</h2>
            <p className="text-[#698996] leading-relaxed mb-8">
              You can control and manage cookies in your browser settings. Please note that removing or blocking cookies may impact your user experience and parts of our website may no longer be fully accessible.
            </p>

            <h2 className="text-[#202A30] font-bold text-2xl mb-4">Contact Us</h2>
            <p className="text-[#698996] leading-relaxed">
              If you have questions about our use of cookies, please contact us at{' '}
              <a href="mailto:info@wallnut.pt" className="text-[#202A30] hover:text-[#FDC41F] transition-colors">info@wallnut.pt</a>.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
