import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Stephanski Family Dentistry | Newman's Web Development",
  description: "Modern, patient-friendly website for Stephanski Family Dentistry in Prince, WV — online booking, service details, local trust-building design.",
};

export default function StephanskisProject() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-6xl">

        <section className="text-center py-16 md:py-24">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Stephanski Family Dentistry
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
            Welcoming dental practice in Prince, WV — a clean, calming site with easy online booking, clear services, and a local Southern WV feel patients trust right away.
          </p>
          <a
            href="https://dentist-office-one.vercel.app" // update when live
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block  bg-[#3f6a92] text-white px-10 py-5 rounded-xl font-semibold text-xl hover:bg-[#3f6a92] transition shadow-md"
          >
            See the Live Site →
          </a>
        </section>

        <section className="max-w-4xl mx-auto mb-20 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Designed for Real Families in Southern WV
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            New patients often hesitate to call during busy hours. This site lets them book anytime, see services explained simply, and feel the friendly, local vibe before they even walk in.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Features Patients Actually Use
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-6">🗓️</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Book Online 24/7</h3>
              <p className="text-gray-700">
                Integrated calendar — patients pick a time that works for them, no phone tag.
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-6">🦷</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Clear Service Pages</h3>
              <p className="text-gray-700">
                Friendly explanations of cleanings, whitening, emergencies — no confusing terms.
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-6">📍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Local & Trust-Building</h3>
              <p className="text-gray-700">
                WV mountain touches, team bios, and both office locations make it feel like home.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            See It in Action
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/dentistHomePage.png"
                alt="Stephanski Family Dentistry homepage"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
              <p className="text-center mt-4 text-gray-600 font-medium">Welcoming Homepage</p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/booking.png"
                alt="Stephanski Family Booking page"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
              <p className="text-center mt-4 text-gray-600 font-medium">Booking Page</p>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/services.png"
                alt="Stephanski Family Services page"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
              <p className="text-center mt-4 text-gray-600 font-medium">Services Page</p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/locations.png"
                alt="Stephanski Family Locations page"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
              <p className="text-center mt-4 text-gray-600 font-medium">Locations Page</p>
            </div>

          </div>
        </section>

        <section className="text-center py-20 bg-white rounded-3xl shadow-xl mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Want This for Your Local Business?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Restaurants, dental offices, contractors — I build the same simple, powerful system for businesses right here in Southern West Virginia.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#3f6a92] text-white px-12 py-6 rounded-xl font-bold text-xl hover:bg-[#3f6a92] transition shadow-lg"
          >
            Get Your Free Quote
          </Link>
        </section>
      </div>
    </main>
  );
}