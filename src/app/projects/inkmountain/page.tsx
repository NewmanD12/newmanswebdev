// app/projects/ink-of-the-mountains/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Ink of the Mountains Tattoo Studio | Newman's Web Development",
  description: "Premium dark/amber tattoo studio website in Beckley, WV — artist profiles, interactive gallery with before/after cover-ups, services, contact & map integration.",
};

export default function InkOfTheMountainsProject() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-6xl">
        {/* Hero */}
        <section className="text-center py-16 md:py-24">
          <h1 className="text-5xl md:text-6xl font-bold text-[#3f6a92] mb-6">
            Ink of the Mountains Tattoo Studio
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
            Premium dark/amber website for a custom tattoo & piercing studio in Beckley, WV — cinematic moody WV aesthetic, interactive artist profiles, before/after cover-up sliders, masonry gallery, services breakdown, and full contact + map integration.
          </p>
          <a
            href="https://tattoo-shop-psi.vercel.app" // ← replace with real live URL when deployed
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#3f6a92] text-white px-10 py-5 rounded-xl font-semibold text-xl hover:bg-[#366089] transition shadow-md"
          >
            See the Live Site →
          </a>
        </section>

        {/* Purpose / Story */}
        <section className="max-w-4xl mx-auto mb-20 text-center">
          <h2 className="text-4xl font-bold text-[#3f6a92] mb-8">
            Built for Real Artists in Southern WV
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Clients browse tattoo portfolios online before walking in. This site lets them filter by artist, explore massive galleries with interactive before/after sliders for cover-ups, and book consultations easily — all wrapped in a grounded, Appalachian mountain vibe that matches the studio's raw energy.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-[#3f6a92] mb-12">
            Features Clients Actually Use
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-6">🖼️</div>
              <h3 className="text-2xl font-semibold text-[#3f6a92] mb-4">Interactive Gallery</h3>
              <p className="text-gray-700">
                Filter by artist, masonry layout, lightbox viewer, and before/after sliders for cover-ups.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-6">👤</div>
              <h3 className="text-2xl font-semibold text-[#3f6a92] mb-4">Artist Profiles</h3>
              <p className="text-gray-700">
                Detailed bios, specialties, Instagram links, and dedicated sections for each artist/piercer.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-6">📩</div>
              <h3 className="text-2xl font-semibold text-[#3f6a92] mb-4">Easy Booking & Contact</h3>
              <p className="text-gray-700">
                Direct email booking with artist selection, embedded map, walk-in info — no friction.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-6">🌄</div>
              <h3 className="text-2xl font-semibold text-[#3f6a92] mb-4">WV Mountain Vibe</h3>
              <p className="text-gray-700">
                Dark grounded aesthetic with amber accents, New Rocker typography, and local Beckley energy.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-semibold text-[#3f6a92] mb-4">Fast & Responsive</h3>
              <p className="text-gray-700">
                Mobile-first, optimized loading, smooth animations — looks great on any device.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-6">🔍</div>
              <h3 className="text-2xl font-semibold text-[#3f6a92] mb-4">Local SEO Ready</h3>
              <p className="text-gray-700">
                Built with Southern WV keywords, fast performance, and clean structure for better Google visibility.
              </p>
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-[#3f6a92] mb-12">
            See It in Action
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/inkMountain.png" // ← Replace with real screenshot
                alt="Ink of the Mountains homepage"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
              <p className="text-center mt-4 text-gray-600 font-medium">Moody Homepage</p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/gallery.png"
                alt="Interactive gallery with artist filter"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
              <p className="text-center mt-4 text-gray-600 font-medium">Masonry Gallery</p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/artists.png"
                alt="Artists profiles page"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
              <p className="text-center mt-4 text-gray-600 font-medium">Artist Profiles</p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/tattooservices.png"
                alt="Services page"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
              <p className="text-center mt-4 text-gray-600 font-medium">Services Breakdown</p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/tattoocontact.png"
                alt="Contact page with map"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
              <p className="text-center mt-4 text-gray-600 font-medium">Contact & Map</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-20 bg-white rounded-3xl shadow-xl mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3f6a92] mb-6">
            Want This for Your Local Business?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Tattoo shops, restaurants, contractors, salons — I build the same powerful, custom websites for businesses right here in Southern West Virginia.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#3f6a92] text-white px-12 py-6 rounded-xl font-bold text-xl hover:bg-[#366089] transition shadow-lg"
          >
            Get Your Free Quote
          </Link>
        </section>
      </div>
    </main>
  );
}