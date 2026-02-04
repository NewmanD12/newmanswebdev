import Link from 'next/link';

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero-like Header for the Page */}
      <section className="bg-[#3f6a92] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Web Development Services
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Custom, fast, and mobile-friendly websites built from the ground up for businesses in Southern West Virginia and beyond.
          </p>
          <p className="mt-6 text-lg opacity-90">
            No templates, no shortcuts — we create modern sites that help you stand out and grow.
          </p>
        </div>
      </section>

      {/* Services Details Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service 1 - Custom Website Design */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-[#3f6a92] to-[#4a75a0] flex items-center justify-center">
                <div className="text-white text-7xl">🌐</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#3f6a92] mb-4">Custom Website Design</h3>
                <p className="text-gray-700 mb-6">
                  We craft unique, brand-aligned websites from scratch. Fully responsive, optimized for speed, and built to reflect your business personality — whether you're a local shop, contractor, or professional service in Charleston or the Kanawha Valley.
                </p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li>✓ Modern, clean layouts</li>
                  <li>✓ Mobile-first design</li>
                  <li>✓ Fast loading times</li>
                  <li>✓ Easy content updates</li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-block bg-[#3f6a92] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#366089] transition"
                >
                  Get Started →
                </Link>
              </div>
            </div>

            {/* Service 2 - Performance & SEO */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-[#3f6a92] to-[#4a75a0] flex items-center justify-center">
                <div className="text-white text-7xl">⚡</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#3f6a92] mb-4">Performance & SEO</h3>
                <p className="text-gray-700 mb-6">
                  Lightning-fast sites that rank well on Google. We optimize code, images, and structure so your business shows up when locals search for services in Southern WV.
                </p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li>✓ Core Web Vitals optimization</li>
                  <li>✓ On-page SEO best practices</li>
                  <li>✓ Mobile speed focus</li>
                  <li>✓ Local SEO setup</li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-block bg-[#3f6a92] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#366089] transition"
                >
                  Get Started →
                </Link>
              </div>
            </div>

            {/* Service 3 - Website Maintenance */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-[#3f6a92] to-[#4a75a0] flex items-center justify-center">
                <div className="text-white text-7xl">🔧</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#3f6a92] mb-4">Website Maintenance</h3>
                <p className="text-gray-700 mb-6">
                  Keep your site secure, fast, and up-to-date. We handle updates, backups, security monitoring, and small tweaks so you can focus on running your business.
                </p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li>✓ Regular backups</li>
                  <li>✓ Security scans & fixes</li>
                  <li>✓ Performance monitoring</li>
                  <li>✓ Content updates</li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-block bg-[#3f6a92] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#366089] transition"
                >
                  Get Started →
                </Link>
              </div>
            </div>

            {/* Service 4 - Landing Pages That Convert */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-[#3f6a92] to-[#4a75a0] flex items-center justify-center">
                <div className="text-white text-7xl">📱</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#3f6a92] mb-4">Landing Pages That Convert</h3>
                <p className="text-gray-700 mb-6">
                  High-impact pages built for specific goals — lead capture, promotions, or ad campaigns. Designed to turn visitors into customers quickly and effectively.
                </p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li>✓ Conversion-focused copy & design</li>
                  <li>✓ Fast-loading & mobile-ready</li>
                  <li>✓ Form & tracking integration</li>
                  <li>✓ A/B testing ready</li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-block bg-[#3f6a92] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#366089] transition"
                >
                  Get Started →
                </Link>
              </div>
            </div>

            {/* Service 5 - Fixes & Redesigns */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-[#3f6a92] to-[#4a75a0] flex items-center justify-center">
                <div className="text-white text-7xl">🛡️</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#3f6a92] mb-4">Fixes & Redesigns</h3>
                <p className="text-gray-700 mb-6">
                  Outdated or slow site holding you back? We’ll build a fully new, modern website from scratch — better performance, fresh look, and improved user experience.
                </p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li>✓ Full redesign from ground up</li>
                  <li>✓ Speed & security upgrades</li>
                  <li>✓ Modern mobile design</li>
                  <li>✓ SEO refresh</li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-block bg-[#3f6a92] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#366089] transition"
                >
                  Get Started →
                </Link>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3f6a92] mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Let's build a website that works as hard as you do. Contact me for a free consultation and quote — no pressure, just real talk.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white border-2 border-[#3f6a92] text-[#3f6a92] font-semibold px-10 py-5 rounded-lg hover:bg-[#3f6a92] hover:text-white transition duration-300 text-lg shadow-md"
            >
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}