'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

// Reusable transition settings (consistent with homepage/pricing)
const baseTransition = {
  duration: 0.8,
  ease: 'easeOut' as const,
};

// Fade-up variant
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Stagger container
const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      ...baseTransition,
    },
  },
};

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Hero-like Header – Matches homepage/pricing style */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#3f6a92]">
        <div className="absolute inset-0 bg-[#3f6a92]" />
        <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl w-full py-12 sm:py-16 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...baseTransition, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-2xl tracking-tight"
          >
            Our Web Development Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...baseTransition, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-100 mb-6 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Custom, fast, and mobile-friendly websites built from the ground up for businesses in Southern West Virginia.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, ...baseTransition }}
            className="text-lg sm:text-xl text-gray-100 opacity-90"
          >
            No templates, no shortcuts — modern sites that help you stand out and grow.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-16 sm:py-20 md:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUpVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#3f6a92] mb-4 tracking-tight">
              What We Build
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Tailored solutions for local businesses — restaurants, contractors, professionals and more.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {/* Custom Website Design */}
            <motion.div
              variants={fadeUpVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col min-h-[420px]"
            >
              <div className="h-48 sm:h-56 bg-gradient-to-br from-[#3f6a92] to-[#2563eb] flex items-center justify-center">
                <div className="text-white text-6xl sm:text-7xl opacity-90">🌐</div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-[#3f6a92] mb-4">Custom Website Design</h3>
                <p className="text-gray-700 mb-6 text-base sm:text-lg flex-grow">
                  Unique, brand-aligned websites from scratch. Fully responsive, fast, and built to reflect your business — perfect for local shops, contractors, or services in Southern WV.
                </p>
                <ul className="text-gray-600 mb-6 space-y-2 text-sm sm:text-base">
                  <li>✓ Modern, clean layouts</li>
                  <li>✓ Mobile-first design</li>
                  <li>✓ Fast loading times</li>
                  <li>✓ Easy content updates</li>
                </ul>
                <Link
                  href="/contact"
                  className="block text-center bg-[#3f6a92] text-white font-extrabold py-4 sm:py-5 rounded-xl hover:bg-[#2563eb] transition text-lg shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#2563eb]/50 mt-auto"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>

            {/* Performance & SEO */}
            <motion.div
              variants={fadeUpVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col min-h-[420px]"
            >
              <div className="h-48 sm:h-56 bg-gradient-to-br from-[#3f6a92] to-[#2563eb] flex items-center justify-center">
                <div className="text-white text-6xl sm:text-7xl opacity-90">⚡</div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-[#3f6a92] mb-4">Performance & SEO</h3>
                <p className="text-gray-700 mb-6 text-base sm:text-lg flex-grow">
                  Lightning-fast sites that rank higher on Google. Optimized code, images, and structure to help your business appear in local Southern WV searches.
                </p>
                <ul className="text-gray-600 mb-6 space-y-2 text-sm sm:text-base">
                  <li>✓ Core Web Vitals optimization</li>
                  <li>✓ On-page & local SEO</li>
                  <li>✓ Mobile speed focus</li>
                  <li>✓ Better search visibility</li>
                </ul>
                <Link
                  href="/contact"
                  className="block text-center bg-[#3f6a92] text-white font-extrabold py-4 sm:py-5 rounded-xl hover:bg-[#2563eb] transition text-lg shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#2563eb]/50 mt-auto"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>

            {/* Website Maintenance */}
            <motion.div
              variants={fadeUpVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col min-h-[420px]"
            >
              <div className="h-48 sm:h-56 bg-gradient-to-br from-[#3f6a92] to-[#2563eb] flex items-center justify-center">
                <div className="text-white text-6xl sm:text-7xl opacity-90">🔧</div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-[#3f6a92] mb-4">Website Maintenance</h3>
                <p className="text-gray-700 mb-6 text-base sm:text-lg flex-grow">
                  Keep your site secure, fast, and current. We handle updates, backups, security, and tweaks so you can focus on your business.
                </p>
                <ul className="text-gray-600 mb-6 space-y-2 text-sm sm:text-base">
                  <li>✓ Regular backups</li>
                  <li>✓ Security monitoring & fixes</li>
                  <li>✓ Performance checks</li>
                  <li>✓ Small content updates</li>
                </ul>
                <Link
                  href="/contact"
                  className="block text-center bg-[#3f6a92] text-white font-extrabold py-4 sm:py-5 rounded-xl hover:bg-[#2563eb] transition text-lg shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#2563eb]/50 mt-auto"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>

            {/* Landing Pages That Convert */}
            <motion.div
              variants={fadeUpVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col min-h-[420px]"
            >
              <div className="h-48 sm:h-56 bg-gradient-to-br from-[#3f6a92] to-[#2563eb] flex items-center justify-center">
                <div className="text-white text-6xl sm:text-7xl opacity-90">📱</div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-[#3f6a92] mb-4">Landing Pages That Convert</h3>
                <p className="text-gray-700 mb-6 text-base sm:text-lg flex-grow">
                  High-impact pages for leads, promotions, or ads. Designed to turn visitors into customers quickly and effectively.
                </p>
                <ul className="text-gray-600 mb-6 space-y-2 text-sm sm:text-base">
                  <li>✓ Conversion-focused design</li>
                  <li>✓ Fast-loading & mobile-ready</li>
                  <li>✓ Form & tracking integration</li>
                  <li>✓ A/B testing ready</li>
                </ul>
                <Link
                  href="/contact"
                  className="block text-center bg-[#3f6a92] text-white font-extrabold py-4 sm:py-5 rounded-xl hover:bg-[#2563eb] transition text-lg shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#2563eb]/50 mt-auto"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>

            {/* Fixes & Redesigns */}
            <motion.div
              variants={fadeUpVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col min-h-[420px]"
            >
              <div className="h-48 sm:h-56 bg-gradient-to-br from-[#3f6a92] to-[#2563eb] flex items-center justify-center">
                <div className="text-white text-6xl sm:text-7xl opacity-90">🛡️</div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-[#3f6a92] mb-4">Fixes & Redesigns</h3>
                <p className="text-gray-700 mb-6 text-base sm:text-lg flex-grow">
                  Outdated or slow site? We rebuild modern from scratch — better speed, fresh look, improved experience.
                </p>
                <ul className="text-gray-600 mb-6 space-y-2 text-sm sm:text-base">
                  <li>✓ Full redesign from ground up</li>
                  <li>✓ Speed & security upgrades</li>
                  <li>✓ Modern mobile design</li>
                  <li>✓ SEO refresh</li>
                </ul>
                <Link
                  href="/contact"
                  className="block text-center bg-[#3f6a92] text-white font-extrabold py-4 sm:py-5 rounded-xl hover:bg-[#2563eb] transition text-lg shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#2563eb]/50 mt-auto"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Final CTA */}
          <motion.div variants={fadeUpVariants} className="mt-16 sm:mt-24 text-center">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3f6a92] mb-6 sm:mb-8 tracking-tight">
              Ready to Get Started?
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-10 max-w-3xl mx-auto">
              Let's build a website that works as hard as you do. Free consultation — no pressure, just real talk.
            </p>
            <Link
              href="/contact"
              className="group relative overflow-hidden inline-block bg-white text-[#3f6a92] font-extrabold px-10 sm:px-12 py-5 sm:py-6 rounded-xl text-lg sm:text-xl shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(63,106,146,0.7)] transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#2563eb]"
            >
              <span className="relative z-10">Request Free Quote</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#3f6a92] via-[#2563eb] to-[#3f6a92] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer – Match other pages */}
      <footer className="bg-[#3f6a92] text-white py-8 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-lg font-medium">
            © 2026 Newman's Web Development LLC – Veteran-Owned in Beaver, WV
          </p>
          <p className="mt-2 text-sm opacity-90">
            Serving Beckley, Mt. Hope, Princeton, Oak Hill, Hinton & all of Southern West Virginia
          </p>
        </div>
      </footer>
    </main>
  );
}