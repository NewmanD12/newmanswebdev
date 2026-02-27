'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

// Reusable transition settings (match homepage)
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

export default function Pricing() {
  return (
    <main className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Page Header – Matches homepage hero style, mobile-friendly height */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#3f6a92]">
        <div className="absolute inset-0 bg-[#3f6a92] opacity-95" />
        <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl w-full py-12 sm:py-16 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...baseTransition, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-2xl tracking-tight"
          >
            Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...baseTransition, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-100 mb-6 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Affordable custom websites built from scratch for Southern West Virginia businesses.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, ...baseTransition }}
            className="text-lg sm:text-xl text-gray-100 mb-4"
          >
            Veteran-owned & operated — no templates, no hidden fees.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, ...baseTransition }}
            className="text-base sm:text-lg text-gray-100 opacity-90"
          >
            Free consultation included. 50% deposit to start, balance on completion.
          </motion.p>
        </div>
      </section>

      {/* Pricing Tiers – no-motion-mobile applied */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-16 sm:py-20 md:py-24 bg-white no-motion-mobile"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#3f6a92] mb-4 tracking-tight">
              Choose Your Package
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Custom websites tailored to your needs — fast, secure, mobile-friendly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Starter */}
            <motion.div
              variants={fadeUpVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 min-h-[420px] flex flex-col no-motion-mobile"
            >
              <div className="bg-[#3f6a92] text-white p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Starter</h3>
                <p className="text-3xl sm:text-4xl font-bold">$500–$1,000</p>
                <p className="text-sm mt-2 opacity-90">Quick launch for small budgets</p>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <ul className="space-y-3 sm:space-y-4 text-gray-700 text-left text-base mb-6 sm:mb-8 flex-grow">
                  <li>1–4 pages</li>
                  <li>Fully mobile-friendly design</li>
                  <li>Basic contact form</li>
                  <li>Simple SEO setup</li>
                  <li>1 round of revisions</li>
                </ul>
                <Link
                  href="/contact"
                  className="block text-center bg-[#3f6a92] text-white font-extrabold py-4 sm:py-5 rounded-xl hover:bg-[#2563eb] transition text-lg shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#2563eb]/50 mt-auto"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>

            {/* Growth – Most Popular */}
            <motion.div
              variants={fadeUpVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-[#3f6a92] relative transform md:scale-105 min-h-[420px] flex flex-col no-motion-mobile"
            >
              <div className="absolute top-0 right-0 bg-[#f97316] text-white px-4 sm:px-5 py-1 sm:py-2 text-xs sm:text-sm font-extrabold rounded-bl shadow-md">
                Most Popular
              </div>
              <div className="bg-[#3f6a92] text-white p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Growth</h3>
                <p className="text-3xl sm:text-4xl font-bold">$1,000–$2,500</p>
                <p className="text-sm mt-2 opacity-90">Complete small business solution</p>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <ul className="space-y-3 sm:space-y-4 text-gray-700 text-left text-base mb-6 sm:mb-8 flex-grow">
                  <li>5–10 pages</li>
                  <li>Custom design & features</li>
                  <li>Performance optimization</li>
                  <li>On-page SEO & local keywords</li>
                  <li>2 rounds of revisions</li>
                  <li>1 month free maintenance</li>
                </ul>
                <Link
                  href="/contact"
                  className="block text-center bg-[#3f6a92] text-white font-extrabold py-4 sm:py-5 rounded-xl hover:bg-[#2563eb] transition text-lg shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#2563eb]/50 mt-auto"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>

            {/* Premium */}
            <motion.div
              variants={fadeUpVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 min-h-[420px] flex flex-col no-motion-mobile"
            >
              <div className="bg-[#3f6a92] text-white p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Premium</h3>
                <p className="text-3xl sm:text-4xl font-bold">$2,500–$5,000+</p>
                <p className="text-sm mt-2 opacity-90">Advanced custom build</p>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <ul className="space-y-3 sm:space-y-4 text-gray-700 text-left text-base mb-6 sm:mb-8 flex-grow">
                  <li>10+ pages or complex needs</li>
                  <li>Full redesign from scratch</li>
                  <li>Advanced SEO & security</li>
                  <li>3–6 months support option</li>
                  <li>Unlimited revisions (within scope)</li>
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

          {/* Optional Maintenance Packages */}
          <div className="mt-20 sm:mt-24 no-motion-mobile">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3f6a92] text-center mb-8 sm:mb-12 tracking-tight">
              Optional Maintenance & Support
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
              Keep your site secure, fast, and up-to-date. Starting at just $50/month — first month free with any new website build!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              {/* Basic Care */}
              <motion.div
                variants={fadeUpVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
                className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 flex flex-col no-motion-mobile"
              >
                <h4 className="text-xl sm:text-2xl font-bold text-[#3f6a92] mb-4 sm:mb-6 text-center">Basic Care</h4>
                <p className="text-3xl text-[#3f6a92] sm:text-4xl font-bold text-center mb-2">$50/month</p>
                <p className="text-base sm:text-lg text-green-600 font-bold text-center mb-4 sm:mb-6">
                  or $480/year <span className="text-xs sm:text-sm font-normal text-gray-600">(20% discount – save $120)</span>
                </p>
                <ul className="space-y-3 sm:space-y-4 text-gray-700 text-left flex-grow">
                  <li>Monthly backups</li>
                  <li>Security monitoring & updates</li>
                  <li>Performance checks</li>
                  <li>Minor content updates (up to 2 hrs/mo)</li>
                </ul>
              </motion.div>

              {/* Standard Support */}
              <motion.div
                variants={fadeUpVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
                className="bg-[#3f6a92] text-white rounded-2xl shadow-2xl p-6 sm:p-8 relative transform md:scale-105 flex flex-col no-motion-mobile"
              >
                <div className="absolute top-0 right-0 bg-white text-[#3f6a92] px-4 sm:px-5 py-1 sm:py-2 text-xs sm:text-sm font-extrabold rounded-bl shadow-md">
                  Most Popular
                </div>
                <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Standard Support</h4>
                <p className="text-3xl sm:text-4xl font-bold text-center mb-2">$100/month</p>
                <p className="text-base sm:text-lg text-green-300 font-bold text-center mb-4 sm:mb-6">
                  or $900/year <span className="text-xs sm:text-sm font-normal opacity-90">(25% discount – save $300)</span>
                </p>
                <ul className="space-y-3 sm:space-y-4 text-white text-left flex-grow">
                  <li>Everything in Basic</li>
                  <li>Up to 4 hours of updates/edits per month</li>
                  <li>Priority email & phone support</li>
                </ul>
              </motion.div>

              {/* Premium Care */}
              <motion.div
                variants={fadeUpVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
                className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 flex flex-col no-motion-mobile"
              >
                <h4 className="text-xl sm:text-2xl font-bold text-[#3f6a92] mb-4 sm:mb-6 text-center">Premium Care</h4>
                <p className="text-3xl sm:text-4xl text-[#3f6a92] font-bold text-center mb-2">$150+/month</p>
                <p className="text-base sm:text-lg text-green-600 font-bold text-center mb-4 sm:mb-6">
                  or $1,260+/year <span className="text-xs sm:text-sm font-normal text-gray-600">(30% discount – save $540+)</span>
                </p>
                <ul className="space-y-3 sm:space-y-4 text-gray-700 text-left flex-grow">
                  <li>Everything in Standard</li>
                  <li>Unlimited small updates</li>
                  <li>Advanced security & monitoring</li>
                </ul>
              </motion.div>
            </div>

            <p className="mt-10 sm:mt-12 text-center text-gray-600 text-base sm:text-lg font-medium">
              No long-term contracts — cancel anytime.
            </p>
          </div>

          {/* Final CTA */}
          <div className="mt-16 sm:mt-24 text-center no-motion-mobile">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3f6a92] mb-6 sm:mb-8 tracking-tight">
              Ready to Get Started?
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-10 max-w-3xl mx-auto">
              Let's discuss your project and find the perfect package for your budget and goals.
            </p>
            <Link
              href="/contact"
              className="group relative overflow-hidden inline-block bg-white text-[#3f6a92] font-extrabold px-10 sm:px-12 py-5 sm:py-6 rounded-xl text-lg sm:text-xl shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(63,106,146,0.7)] transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#2563eb]"
            >
              <span className="relative z-10">Request Free Quote</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#3f6a92] via-[#2563eb] to-[#3f6a92] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Footer – Match homepage */}
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