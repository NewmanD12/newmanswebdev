import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#3f6a92]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3f6a92] via-[#4a75a0] to-[#3f6a92] opacity-95" />

        <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl w-full pb-16 sm:pb-20 md:pb-24">
          <div className="mb-8 md:mb-12">
            <Image
              src="/logo.svg"
              alt="Newman's Web Development LLC Logo"
              width={320}
              height={120}
              className="mx-auto max-w-[80%] md:max-w-[60%] drop-shadow-[0_15px_35px_rgba(0,0,0,0.75)]"
              priority
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Newman's Web Development LLC
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Custom Websites, Fast Performance & Local Expertise
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="bg-white text-[#3f6a92] hover:bg-gray-100 font-semibold px-10 py-5 rounded-lg text-lg md:text-xl shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get a Free Quote
            </Link>

            <Link
              href="/services"
              className="border-2 border-[#8C8B8A] text-white hover:bg-[#8C8B8A]/20 font-semibold px-10 py-5 rounded-lg text-lg md:text-xl transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>

          <div className="mt-12 text-gray-200 text-lg">
            <p>Serving Southern West Virginia • Modern, Secure & Mobile-Friendly Sites</p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hidden md:block">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3f6a92] mb-4">
              Services We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From small business sites to custom web applications — we build fast, beautiful, and affordable websites that help you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-[#3f6a92] to-[#4a75a0] flex items-center justify-center">
                <div className="text-white text-6xl">🌐</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#3f6a92] mb-3">Custom Website Design</h3>
                <p className="text-gray-600 mb-4">
                  Unique, modern designs tailored to your brand. Fully responsive and built for speed.
                </p>
                <Link href="/contact" className="text-[#3f6a92] font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-[#3f6a92] to-[#4a75a0] flex items-center justify-center">
                <div className="text-white text-6xl">⚡</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#3f6a92] mb-3">Performance & SEO</h3>
                <p className="text-gray-600 mb-4">
                  Lightning-fast sites that rank higher on Google and keep visitors engaged.
                </p>
                <Link href="/contact" className="text-[#3f6a92] font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-[#3f6a92] to-[#4a75a0] flex items-center justify-center">
                <div className="text-white text-6xl">🔧</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#3f6a92] mb-3">Website Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  Updates, backups, security monitoring — keep your site running smoothly.
                </p>
                <Link href="/contact" className="text-[#3f6a92] font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-[#3f6a92] to-[#4a75a0] flex items-center justify-center">
                <div className="text-white text-6xl">📱</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#3f6a92] mb-3">Landing Pages That Convert</h3>
                <p className="text-gray-600 mb-4">
                  High-converting pages for ads, leads, or promotions — built fast and tested.
                </p>
                <Link href="/contact" className="text-[#3f6a92] font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-[#3f6a92] to-[#4a75a0] flex items-center justify-center">
                <div className="text-white text-6xl">🛡️</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#3f6a92] mb-3">Fixes & Redesigns</h3>
                <p className="text-gray-600 mb-4">
                  Slow or outdated site? We’ll build you a fully new, modern website from scratch.
                </p>
                <Link href="/contact" className="text-[#3f6a92] font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3f6a92] mb-4">
              Choose Your Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Affordable custom websites for Southern West Virginia businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Tier */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-200">
              <div className="bg-[#3f6a92] text-white p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-4xl font-bold">$500–$1,000</p>
                <p className="text-sm mt-2 opacity-90">Perfect for getting online fast</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 text-gray-700">
                  <li>1–4 pages</li>
                  <li>Mobile-friendly design</li>
                  <li>Basic contact form</li>
                  <li>Simple SEO setup</li>
                  <li>1 round of revisions</li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 block bg-[#3f6a92] text-white text-center font-semibold py-4 rounded-lg hover:bg-[#366089] transition"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Growth Tier (Recommended) */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-[#3f6a92] relative">
              <div className="absolute top-0 right-0 bg-[#3f6a92] text-white px-4 py-1 text-sm font-bold">
                Most Popular
              </div>
              <div className="bg-[#3f6a92] text-white p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Growth</h3>
                <p className="text-4xl font-bold">$1,000–$2,500</p>
                <p className="text-sm mt-2 opacity-90">Full small business solution</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 text-gray-700">
                  <li>5–10 pages</li>
                  <li>Custom design & features</li>
                  <li>Performance optimization</li>
                  <li>On-page SEO & local keywords</li>
                  <li>2 rounds of revisions</li>
                  <li>1 month free maintenance</li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 block bg-[#3f6a92] text-white text-center font-semibold py-4 rounded-lg hover:bg-[#366089] transition"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Premium Tier */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-200">
              <div className="bg-[#3f6a92] text-white p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <p className="text-4xl font-bold">$2,500–$5,000+</p>
                <p className="text-sm mt-2 opacity-90">Advanced custom build</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 text-gray-700">
                  <li>10+ pages or complex needs</li>
                  <li>Full redesign from scratch</li>
                  <li>Advanced SEO & security</li>
                  <li>3–6 months support option</li>
                  <li>Unlimited revisions (within scope)</li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 block bg-[#3f6a92] text-white text-center font-semibold py-4 rounded-lg hover:bg-[#366089] transition"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-gray-600">
            <p className="text-lg">
              All packages include free initial consultation. 50% deposit to start, balance on completion.
            </p>
            <p className="mt-4 font-medium">
              Not sure which tier? Contact me — we'll find the right fit for your budget and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3f6a92] mb-4">
              Recent Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real websites we've built from scratch for local businesses in Southern West Virginia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/dentistHomePage.png"
                  alt="Stephanski Family Dentistry website homepage with dark mountain theme and family dentistry branding"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#3f6a92] mb-3">
                  Stephanski Family Dentistry
                </h3>
                <p className="text-gray-600 mb-4">
                  Custom dark/teal website for a family-owned dental practice in Prince, WV — cinematic mountain background, glassmorphism cards, Calendly booking integration, responsive navbar, and full multi-page structure.
                </p>
                <ul className="text-gray-600 mb-6 space-y-2 text-sm">
                  <li>✓ Fully responsive & mobile-first design</li>
                  <li>✓ Dark moody theme with WV mountains aesthetic</li>
                  <li>✓ Calendly embed with custom dark blending</li>
                  <li>✓ About, Services, Locations, Contact pages</li>
                </ul>
                <div className="flex flex-col items-center sm:flex-row gap-4">
                  <a
                    href="https://dentist-office-one.vercel.app" // ← your actual LIVE URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#3f6a92] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#366089] transition flex-1 text-center"
                  >
                    View Live Site →
                  </a>
                  <Link
                    href="/projects/stephanski-family-dentistry"
                    className="inline-block border-2 border-[#3f6a92] text-[#3f6a92] font-semibold px-6 py-3 rounded-lg hover:bg-[#3f6a92] hover:text-white transition flex-1 text-center"
                  >
                    View Project Breakdown →
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/gustards.png"
                  alt="Gustard's Bistro restaurant website homepage showing menu and local sourcing"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#3f6a92] mb-3">Gustard's Bistro</h3>
                <p className="text-gray-600 mb-4">
                  Upscale bistro in White Sulphur Springs — custom design featuring menu pages, gallery, local farmer highlights, and fast, mobile-friendly performance.
                </p>
                <ul className="text-gray-600 mb-6 space-y-2 text-sm">
                  <li>✓ Fully responsive & modern layout</li>
                  <li>✓ Menu & gallery integration</li>
                  <li>✓ Local WV focus & branding</li>
                  <li>✓ Optimized loading & SEO</li>
                </ul>
                <div className="flex flex-col items-center sm:flex-row gap-4">
                  <a
                    href="https://gustardsbistro.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#3f6a92] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#366089] transition flex-1 text-center"
                  >
                    View Live Site →
                  </a>
                  <Link
                    href="/projects/gustards"
                    className="inline-block border-2 border-[#3f6a92] text-[#3f6a92] font-semibold px-6 py-3 rounded-lg hover:bg-[#3f6a92] hover:text-white transition flex-1 text-center"
                  >
                    View Project Breakdown →
                  </Link>

                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden border-2 border-dashed border-gray-300">
              <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <p className="text-lg font-medium">More projects coming soon</p>
                  <p className="text-sm mt-1">Your business could be next!</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-500 mb-3">Your Project Here?</h3>
                <p className="text-gray-600 mb-6">
                  Let's create something great together.
                </p>
                <Link href="/contact" className="text-[#3f6a92] font-semibold hover:underline">
                  Get Started →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block bg-white border-2 border-[#3f6a92] text-[#3f6a92] font-semibold px-10 py-5 rounded-lg hover:bg-[#3f6a92] hover:text-white transition text-lg shadow-md"
            >
              Ready for Your Site?
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo first on mobile */}
            <div className="relative h-96 md:min-h-[500px] rounded-xl overflow-hidden shadow-xl order-1 md:order-2">
              <Image
                src="/dakota.png"
                alt="Dakota Newman - Veteran Owned Web Developer in Beaver, West Virginia"
                fill
                className="object-cover"
                priority={false}
              />
            </div>

            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-[#3f6a92] mb-4">
                Hi, I'm Dakota
              </h2>
              <p className="text-xl font-semibold text-[#3f6a92] mb-6">
                Veteran Owned & Operated
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm a Beaver, WV-based web developer helping local Southern West Virginia businesses get online with custom, fast-loading, and mobile-friendly websites. Everything I build is from scratch — no templates, no shortcuts — so your site actually represents your brand and brings in real results.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Whether it's a restaurant like Gustard's Bistro, a contractor, salon, professional service, or small business in Southern West Virginia, I focus on clean design, strong performance, good SEO, and easy updates so you can focus on what you do best.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Raised in WV since I was 6, I love helping local companies stand out in a digital world.
              </p>

              <Link
                href="/contact"
                className="inline-block bg-[#3f6a92] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#366089] transition text-lg shadow-md"
              >
                Let's Build Something Great
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}