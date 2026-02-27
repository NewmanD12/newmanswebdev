'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import dakota from '../../../public/dakota.png';
import airForcePhoto from '../../../public/jets.jpg'
import firstHome from '../../../public/firstHome.jpg'

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

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Hero Header – Matches other pages */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#3f6a92]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3f6a92] via-[#2563eb] to-[#3f6a92] opacity-95" />
        <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl w-full py-12 sm:py-16 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...baseTransition, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-2xl tracking-tight"
          >
            About Dakota
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...baseTransition, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-100 mb-6 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Veteran • West Virginian • Your Local Web Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, ...baseTransition }}
            className="text-lg sm:text-xl text-gray-100 opacity-90"
          >
            From military service to building digital homes for Southern WV businesses — proud to call Raleigh County home.
          </motion.p>
        </div>
      </section>

      {/* Main Story Content */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-16 sm:py-20 md:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Text Column */}
            <motion.div variants={fadeUpVariants} className="order-2 md:order-1 space-y-12">

              {/* Early Years */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3f6a92] mb-6 tracking-tight">
                  Roots in West Virginia
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                  I was born in Virginia but moved to West Virginia just before turning 6. My family settled in Red Star, WV, where I attended school in Mt. Hope and later transferred to Mountain View Christian School. That's where I first met Krista, who would eventually become my wife. I graduated from Oak Hill High School in 2011.
                </p>
                {/* Photo Placeholder 1 */}
                {/* Suggested image: Childhood or scenic shot of Red Star / Mt. Hope area (rural WV hills, small town view, old school, or family photo if comfortable). Place here or right-aligned. */}
                {/* <div className="mt-6"><Image src={earlyYearsPhoto} alt="Growing up in Red Star, WV" width={600} height={400} className="rounded-2xl shadow-xl" /></div> */}
              </div>

              {/* Military Service */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3f6a92] mb-6 tracking-tight">
                  Service in the United States Air Force
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                  Right after high school, I enlisted in the United States Air Force and served for 6 years as an avionics technician on the F-15E Strike Eagle. I was stationed at RAF Lakenheath in England for 2 years, then transferred to Mountain Home AFB in Idaho. I deployed once in support of Operation Inherent Resolve. A back injury sustained before deployment led to my medical retirement in 2017.
                </p>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mt-4">
                  Those years taught me discipline, precision, and the importance of doing things right the first time — values I still carry into every website I build.
                </p>
                {/* Photo Placeholder 2 */}
                {/* Suggested image: You in uniform (if comfortable), F-15E in flight, base sign, or patch/insignia. Keep respectful. */}
                <div className="mt-6"><Image src={airForcePhoto} alt="Serving in the U.S. Air Force" width={600} height={400} className="rounded-2xl shadow-xl" /></div>
              </div>

              {/* Love & Marriage */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3f6a92] mb-6 tracking-tight">
                  Building a Life Together
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                  In 2014, during my transition from RAF Lakenheath to Mountain Home, Krista and I started dating. We got married shortly after my discharge from the Air Force. We lived in West Virginia while she finished college, then — in support of her career — we moved to Oregon in 2018.
                </p>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mt-4">
                  In Oregon, we bought our first house and welcomed our first dogs, Chiboe and Chubbs, who quickly became the heart of our home.
                </p>
                {/* Photo Placeholder 3 */}
                <div className="mt-6"><Image src={firstHome} alt="Our First Home" width={600} height={400} className="rounded-2xl shadow-xl" /></div>
              </div>

              {/* Coming Home */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3f6a92] mb-6 tracking-tight">
                  Coming Home to Raleigh County
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                  In 2022, we made the decision to return to our roots. We now live in Raleigh County, where we bought our second house and continue building our life surrounded by the mountains and people we love.
                </p>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mt-4">
                  West Virginia has always been home — and now I'm proud to help local businesses here thrive online through custom websites that are fast, secure, and truly theirs.
                </p>
                {/* Photo Placeholder 4 */}
                {/* Suggested image: Your current Raleigh County home (exterior, yard, or scenic view from property), or wide shot of Raleigh County landscape (hills, sunset, river). */}
                {/* <div className="mt-6"><Image src={raleighHomePhoto} alt="Our home in Raleigh County, WV" width={800} height={500} className="rounded-2xl shadow-xl" /></div> */}
              </div>

              {/* Closing CTA */}
              <div className="pt-8">
                <p className="text-xl sm:text-2xl text-gray-800 font-medium mb-8">
                  Whether you're a restaurant owner in Beckley, a contractor in Princeton, or a professional in Oak Hill, I'm here to help your business stand out online — with the same dedication I brought to service.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link
                    href="/contact"
                    className="inline-block bg-[#3f6a92] text-white font-extrabold px-10 py-5 rounded-xl hover:bg-[#2563eb] transition text-xl shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#2563eb]"
                  >
                    Let's Build Something Great
                  </Link>
                  <Link
                    href="/services"
                    className="inline-block bg-white border-2 border-[#3f6a92] text-[#3f6a92] font-extrabold px-10 py-5 rounded-xl hover:bg-[#3f6a92] hover:text-white transition text-xl shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#2563eb]/50"
                  >
                    View Services
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Photo Column – Optional large hero-style photo on right */}
            <motion.div
              variants={fadeUpVariants}
              className="relative h-96 md:min-h-[800px] rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2 sticky md:top-24"
            >
              {/* Main hero photo – you in a professional or casual WV setting */}
              <Image
                src={dakota}
                alt="Dakota Newman – Veteran-Owned Web Developer in Raleigh County, West Virginia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer – Exact match */}
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