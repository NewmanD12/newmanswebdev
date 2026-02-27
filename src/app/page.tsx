'use client'; // Required for client-side features in Next.js App Router
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import gustards from '../../public/gustards.png';
import inkMountain from '../../public/inkMountain.png';
import dentistHome from '../../public/dentistHomePage.png';
import dakota from '../../public/dakota.png';

// Reusable transition settings
const baseTransition = {
  duration: 0.8,
  ease: 'easeOut' as const,
};

// Fade-up variant
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
      {/* Hero – Enhanced with motion + trust badges */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#3f6a92]">
        <div className="absolute inset-0 bg-[#3f6a92]" />
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
            className="text-2xl sm:text-3xl md:text-4xl text-gray-100 mb-6 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Custom Websites, Blazing Fast Performance & Local Southern WV Expertise
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, ...baseTransition }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 mb-10 text-white text-base sm:text-lg font-medium"
          >
            <div className="bg-white/20 px-4 py-1 rounded-full backdrop-blur-sm">Veteran-Owned</div>
            <div className="bg-white/20 px-4 py-1 rounded-full backdrop-blur-sm">100% Custom – No Templates</div>
            <div className="bg-white/20 px-4 py-1 rounded-full backdrop-blur-sm">Southern WV Focused</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...baseTransition, delay: 0.9 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Link
              href="/contact"
              className="group relative overflow-hidden bg-white text-[#3f6a92] hover:text-white font-extrabold px-10 py-5 rounded-xl text-xl shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(63,106,146,0.7)] transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#2563eb]"
              aria-label="Get your free site audit and quote"
            >
              <span className="relative z-10">Get Your Free Site Audit + Quote</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#3f6a92] via-[#2563eb] to-[#3f6a92] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
            <Link
              href="/services"
              className="group relative overflow-hidden border-2 border-white/50 text-white hover:text-white font-extrabold px-10 py-5 rounded-xl text-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50"
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

      {/* Live Websites & Portfolio Examples */}
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
              Live Websites & Portfolio Examples
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Real results for local Southern WV businesses — hover to see more, click to visit.
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
                  src={gustards}
                  alt="Gustard's Bistro website screenshot"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold">Gustard's Bistro</h3>
                    <p className="text-base mt-1">Live client site – Upscale WV bistro with menu, gallery & local focus</p>
                  </div>
                </div>
              </div>
              {/* Badge: always visible on mobile, hover only on md+ */}
              <div className="absolute top-4 right-4 bg-[#22d3ee] text-black px-4 py-2 rounded-full text-sm font-bold shadow-md md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                Live Client Site
              </div>
              <a
                href="https://www.gustardsbistro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label="Visit Gustard's Bistro live website"
              />
            </motion.div>

            {/* Ink Mountain Tattoo - Example */}
            <motion.div
              variants={fadeUpVariants}
              className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] transition-all duration-500"
            >
              <div className="relative aspect-video">
                <Image
                  src={inkMountain}
                  alt="Ink Mountain Tattoo portfolio example"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold">Ink Mountain Tattoo</h3>
                    <p className="text-base mt-1">Portfolio example / concept – Moody tattoo studio design</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-[#f97316] text-white px-4 py-2 rounded-full text-sm font-bold shadow-md md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                Portfolio Example
              </div>
              <a
                href="https://tattoo-shop-psi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label="View Ink Mountain Tattoo portfolio example"
              />
            </motion.div>

            {/* Stephanski Family Dentistry - Example */}
            <motion.div
              variants={fadeUpVariants}
              className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] transition-all duration-500"
            >
              <div className="relative aspect-video">
                <Image
                  src={dentistHome}
                  alt="Stephanski Family Dentistry portfolio example"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold">Stephanski Family Dentistry</h3>
                    <p className="text-base mt-1">Portfolio example / concept – Family dental practice design</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-[#f97316] text-white px-4 py-2 rounded-full text-sm font-bold shadow-md md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                Portfolio Example
              </div>
              <a
                href="https://dentist-office-one.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label="View Stephanski Family Dentistry portfolio example"
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
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I help Southern West Virginia businesses get online with custom, fast-loading, mobile-friendly websites — built from scratch, no templates.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Focus: clean design, performance, local SEO, easy updates.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Raised right here in WV, proud to help local companies stand out.
              </p>

              {/* CTAs: primary + Learn More */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/contact"
                  className="inline-block bg-[#3f6a92] text-white font-extrabold px-10 py-5 rounded-xl hover:bg-[#2563eb] transition text-xl shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#2563eb]"
                >
                  Let's Build Something Great
                </Link>
                {/* <Link
                  href="/about"
                  className="inline-block bg-white border-2 border-[#3f6a92] text-[#3f6a92] font-extrabold px-10 py-5 rounded-xl hover:bg-[#3f6a92] hover:text-white transition text-xl shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#2563eb]/50"
                >
                  Learn More About Me
                </Link> */}
              </div>
            </motion.div>
            <motion.div
              variants={fadeUpVariants}
              className="relative h-96 md:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2"
            >
              <Image
                src={dakota}
                alt="Dakota Newman – Veteran-Owned Web Developer in Beaver, West Virginia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Simple Footer */}
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