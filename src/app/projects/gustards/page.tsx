import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Gustard's Bistro | Newman's Web Development",
  description: "Custom, easy-to-update website for Gustard's Bistro in White Sulphur Springs, WV — menu management, photo uploads, daily specials, all built for local Southern WV businesses.",
};

export default function GustardsProject() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-6xl">

        {/* Hero – large, centered, bold like your headings */}
        <section className="text-center py-16 md:py-24">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Gustard's Bistro
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
            Upscale local spot in White Sulphur Springs — a beautiful custom site that highlights fresh menus, stunning photos, and daily specials, all easy for the owner to manage.
          </p>
          <a
            href="https://gustardsbistro.com" // update with real URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#3f6a92] text-white px-10 py-5 rounded-xl font-semibold text-xl hover:bg-[#3f6a92] transition shadow-md"
          >
            See the Live Site →
          </a>
        </section>

        {/* Client needs – warm, relatable tone */}
        <section className="max-w-4xl mx-auto mb-20 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Built for a Busy Restaurant Owner
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            No more waiting on developers to change a price or add tonight's special. 
            Gustard's needed a site that looks professional, loads fast on phones, and lets them handle updates themselves — while feeling 100% Southern West Virginia.
          </p>
        </section>

        {/* Features grid – glassmorphism cards, emoji icons */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What You Can Update Yourself – In Minutes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-6">📝</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Add / Edit Menu Items</h3>
              <p className="text-gray-700">
                New dish? Price change? Just log in, type it in, and it's live. No coding needed.
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-6">📸</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Upload Fresh Photos</h3>
              <p className="text-gray-700">
                Drag in new food shots or restaurant pics — they appear instantly in the gallery.
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-6">🌟</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Daily & Weekly Specials</h3>
              <p className="text-gray-700">
                Set specials to show only on certain days (Wine Wednesday, Friday specials) — automatic.
              </p>
            </div>
          </div>
        </section>

        {/* Screenshot gallery – placeholders ready for your images */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            See It in Action
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/gustards.png"
                alt="Gustard's Bistro homepage"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
              <p className="text-center mt-4 text-gray-600 font-medium">Main Homepage</p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/menu.png"
                alt="Gustard's Bistro homepage"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
              <p className="text-center mt-4 text-gray-600 font-medium">Menu</p>
            </div>


            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/special.png"
                alt="Gustard's Bistro homepage"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
              <p className="text-center mt-4 text-gray-600 font-medium">Specials Alert</p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/admin.png"
                alt="Gustard's Bistro homepage"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
              <p className="text-center mt-4 text-gray-600 font-medium">Admin Dashboard</p>
            </div>
          </div>
        </section>

        {/* CTA – green accent like success buttons */}
        <section className="text-center py-20 bg-white rounded-3xl shadow-xl mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Control Your Own Site?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            I build every local WV business site with this same easy backend — restaurants, dentists, contractors, you name it.
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