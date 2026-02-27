'use client'; // Required for client-side features in Next.js App Router

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

// Reusable transition settings
const baseTransition = {
  duration: 0.8,
  ease: 'easeOut' as const,
};

// Fade-up variant (used for most elements)
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Stagger container for children
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

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero – Enhanced with motion */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#3f6a92]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3f6a92] via-[#2563eb] to-[#3f6a92] opacity-95" />
        <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl w-full pb-16 sm:pb-20 md:pb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="mb-8 md:mb-12"
          >
            <Image
              src="/logo.svg"
              alt="Newman's Web Development LLC Logo"
              width={320}
              height={120}
              className="mx-auto max-w-[80%] md:max-w-[60%] drop-shadow-[0_15px_35px_rgba(0,0,0,0.75)]"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...baseTransition, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6 drop-shadow-2xl tracking-tight"
          >
            Newman's Web Development LLC
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...baseTransition, delay: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Custom Websites, Blazing Fast Performance & Local Southern WV Expertise
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...baseTransition, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Link
              href="/contact"
              className="group relative overflow-hidden bg-white text-[#3f6a92] hover:text-white font-extrabold px-10 py-5 rounded-xl text-xl shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(63,106,146,0.7)] transform hover:scale-105"
            >
              <span className="relative z-10">Get a Free Quote</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#3f6a92] via-[#2563eb] to-[#3f6a92] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>

            <Link
              href="/services"
              className="group relative overflow-hidden border-2 border-white/50 text-white hover:text-white font-extrabold px-10 py-5 rounded-xl text-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:scale-105"
            >
              <span className="relative z-10">View Our Services</span>
              <span className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, ...baseTransition }}
            className="mt-12 text-gray-100 text-xl font-medium drop-shadow-md"
          >
            Serving Southern West Virginia • Modern, Secure & Mobile-Friendly Sites
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hidden md:block">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div variants={fadeUpVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#3f6a92] mb-4 tracking-tight">
              Services We Offer
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From small business sites to custom web apps — fast, beautiful, affordable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Custom Website Design */}
            <motion.div
              variants={fadeUpVariants}
              whileHover={{ scale: 1.06, transition: { duration: 0.4 } }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="h-56 bg-gradient-to-br from-[#3f6a92] to-[#2563eb] flex items-center justify-center">
                <div className="text-white text-8xl opacity-90">🌐</div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-[#3f6a92] mb-4">Custom Website Design</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Unique, modern designs tailored to your brand. Fully responsive & fast.
                </p>
                <Link href="/contact" className="text-[#f97316] font-bold hover:underline text-lg">
                  Learn More →
                </Link>
              </div>
            </motion.div>

            {/* Performance & SEO */}
            <motion.div
              variants={fadeUpVariants}
              whileHover={{ scale: 1.06, transition: { duration: 0.4 } }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="h-56 bg-gradient-to-br from-[#3f6a92] to-[#2563eb] flex items-center justify-center">
                <div className="text-white text-8xl opacity-90">⚡</div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-[#3f6a92] mb-4">Performance & SEO</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Lightning-fast sites that rank higher & keep visitors engaged.
                </p>
                <Link href="/contact" className="text-[#f97316] font-bold hover:underline text-lg">
                  Learn More →
                </Link>
              </div>
            </motion.div>

            {/* Website Maintenance */}
            <motion.div
              variants={fadeUpVariants}
              whileHover={{ scale: 1.06, transition: { duration: 0.4 } }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="h-56 bg-gradient-to-br from-[#3f6a92] to-[#2563eb] flex items-center justify-center">
                <div className="text-white text-8xl opacity-90">🔧</div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-[#3f6a92] mb-4">Website Maintenance</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Updates, backups, security — keep your site running smoothly.
                </p>
                <Link href="/contact" className="text-[#f97316] font-bold hover:underline text-lg">
                  Learn More →
                </Link>
              </div>
            </motion.div>

            {/* Landing Pages That Convert */}
            <motion.div
              variants={fadeUpVariants}
              whileHover={{ scale: 1.06, transition: { duration: 0.4 } }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="h-56 bg-gradient-to-br from-[#3f6a92] to-[#2563eb] flex items-center justify-center">
                <div className="text-white text-8xl opacity-90">📱</div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-[#3f6a92] mb-4">Landing Pages That Convert</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  High-converting pages for ads, leads, promotions — built fast.
                </p>
                <Link href="/contact" className="text-[#f97316] font-bold hover:underline text-lg">
                  Learn More →
                </Link>
              </div>
            </motion.div>

            {/* Fixes & Redesigns */}
            <motion.div
              variants={fadeUpVariants}
              whileHover={{ scale: 1.06, transition: { duration: 0.4 } }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="h-56 bg-gradient-to-br from-[#3f6a92] to-[#2563eb] flex items-center justify-center">
                <div className="text-white text-8xl opacity-90">🛡️</div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-[#3f6a92] mb-4">Fixes & Redesigns</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Outdated or slow site? We rebuild modern from scratch.
                </p>
                <Link href="/contact" className="text-[#f97316] font-bold hover:underline text-lg">
                  Learn More →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Packages Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUpVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#3f6a92] mb-4 tracking-tight">
              Choose Your Package
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Affordable custom websites for Southern West Virginia businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <motion.div
              variants={fadeUpVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-200"
            >
              <div className="bg-[#3f6a92] text-white p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-4xl font-bold">$500–$1,000</p>
                <p className="text-sm mt-2 opacity-90">Perfect for getting online fast</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 text-gray-700 text-left text-base">
                  <li>1–4 pages</li>
                  <li>Mobile-friendly design</li>
                  <li>Basic contact form</li>
                  <li>Simple SEO setup</li>
                  <li>1 round of revisions</li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 block bg-[#3f6a92] text-white text-center font-bold py-4 rounded-xl hover:bg-[#2563eb] transition text-lg"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>

            {/* Growth - Most Popular */}
            <motion.div
              variants={fadeUpVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-[#3f6a92] relative"
            >
              <div className="absolute top-0 right-0 bg-[#f97316] text-white px-5 py-2 text-sm font-extrabold rounded-bl-lg shadow-md">
                Most Popular
              </div>
              <div className="bg-[#3f6a92] text-white p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Growth</h3>
                <p className="text-4xl font-bold">$1,000–$2,500</p>
                <p className="text-sm mt-2 opacity-90">Full small business solution</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 text-gray-700 text-left text-base">
                  <li>5–10 pages</li>
                  <li>Custom design & features</li>
                  <li>Performance optimization</li>
                  <li>On-page SEO & local keywords</li>
                  <li>2 rounds of revisions</li>
                  <li>1 month free maintenance</li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 block bg-[#3f6a92] text-white text-center font-bold py-4 rounded-xl hover:bg-[#2563eb] transition text-lg"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>

            {/* Premium */}
            <motion.div
              variants={fadeUpVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-200"
            >
              <div className="bg-[#3f6a92] text-white p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <p className="text-4xl font-bold">$2,500–$5,000+</p>
                <p className="text-sm mt-2 opacity-90">Advanced custom build</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 text-gray-700 text-left text-base">
                  <li>10+ pages or complex needs</li>
                  <li>Full redesign from scratch</li>
                  <li>Advanced SEO & security</li>
                  <li>3–6 months support option</li>
                  <li>Unlimited revisions (within scope)</li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 block bg-[#3f6a92] text-white text-center font-bold py-4 rounded-xl hover:bg-[#2563eb] transition text-lg"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUpVariants} className="mt-12 text-center text-gray-700">
            <p className="text-lg">
              All packages include free initial consultation. 50% deposit to start, balance on completion.
            </p>
            <p className="mt-4 font-medium">
              Not sure? Contact me — we'll match the right fit for your budget & goals.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Live Websites Showcase */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="py-24 bg-gradient-to-b from-white to-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUpVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#3f6a92] mb-4 tracking-tight">
              Live Websites & Examples We've Built
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Real results for local Southern WV businesses — hover to see more, click to visit live.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Gustard's Bistro - Live */}
            <motion.div
              variants={fadeUpVariants}
              className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] transition-all duration-500"
            >
              <div className="relative aspect-video">
                <Image
                  src="/gustards.png"
                  alt="Gustard's Bistro"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold">Gustard's Bistro</h3>
                    <p className="text-base mt-1">Live site – Upscale WV bistro with menu, gallery & local focus</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-[#22d3ee] text-black px-4 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition duration-300 shadow-md">
                Live Site
              </div>
              <a
                href="https://gustardsbistro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
              />
            </motion.div>

            {/* Ink Mountain Tattoo - Example */}
            <motion.div
              variants={fadeUpVariants}
              className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] transition-all duration-500"
            >
              <div className="relative aspect-video">
                <Image
                  src="/inkMountain.png"
                  alt="Ink Mountain Tattoo"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold">Ink Mountain Tattoo</h3>
                    <p className="text-base mt-1">Example/demo – Moody tattoo studio with interactive gallery</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-[#f97316] text-white px-4 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition duration-300 shadow-md">
                Example Site
              </div>
              <a
                href="https://tattoo-shop-psi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
              />
            </motion.div>

            {/* Stephanski Family Dentistry - Example */}
            <motion.div
              variants={fadeUpVariants}
              className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] transition-all duration-500"
            >
              <div className="relative aspect-video">
                <Image
                  src="/dentistHomePage.png"
                  alt="Stephanski Family Dentistry"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold">Stephanski Family Dentistry</h3>
                    <p className="text-base mt-1">Example/demo – Family dental practice with Calendly integration</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-[#f97316] text-white px-4 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition duration-300 shadow-md">
                Example Site
              </div>
              <a
                href="https://dentist-office-one.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
              />
            </motion.div>

            {/* Placeholder */}
            <motion.div
              variants={fadeUpVariants}
              className="bg-gray-100 rounded-2xl shadow-xl overflow-hidden border-2 border-dashed border-gray-300 flex flex-col justify-center items-center text-center p-12 min-h-[300px]"
            >
              <h3 className="text-2xl font-bold text-gray-500 mb-4">Your Business Here?</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Let's build your live site next.
              </p>
              <Link
                href="/contact"
                className="bg-[#3f6a92] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#2563eb] transition"
              >
                Get Started →
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUpVariants} className="order-2 md:order-1">
              <h2 className="text-5xl md:text-6xl font-extrabold text-[#3f6a92] mb-4 tracking-tight">
                Hi, I'm Dakota
              </h2>
              <p className="text-2xl font-bold text-[#3f6a92] mb-6">
                Veteran Owned & Operated
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Beaver, WV-based web developer helping Southern West Virginia businesses get online with custom, fast-loading, mobile-friendly websites. Built from scratch — no templates.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Restaurants like Gustard's Bistro, professionals, contractors — I focus on clean design, performance, SEO, and easy updates.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Raised in WV, proud to help local companies stand out.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#3f6a92] text-white font-extrabold px-10 py-5 rounded-xl hover:bg-[#2563eb] transition text-xl shadow-xl transform hover:scale-105"
              >
                Let's Build Something Great
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              className="relative h-96 md:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2"
            >
              <Image
                src="/dakota.png"
                alt="Dakota Newman - Veteran Owned Web Developer in Beaver, West Virginia"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}