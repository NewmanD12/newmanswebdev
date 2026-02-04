import Link from 'next/link';

export default function Pricing() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-[#3f6a92] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Affordable custom websites built from scratch for Southern West Virginia businesses. 
            Veteran-owned & operated — no templates, no hidden fees.
          </p>
          <p className="mt-6 text-lg opacity-90">
            Free consultation included with every project. 50% deposit to start, balance on completion.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Tier */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200">
              <div className="bg-[#3f6a92] text-white p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-4xl font-bold">$500–$1,000</p>
                <p className="text-sm mt-2 opacity-90">Quick launch for small budgets</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 text-gray-700 mb-8">
                  <li>1–4 pages</li>
                  <li>Fully mobile-friendly design</li>
                  <li>Basic contact form</li>
                  <li>Simple SEO setup</li>
                  <li>1 round of revisions</li>
                </ul>
                <Link
                  href="/contact"
                  className="block bg-[#3f6a92] text-white text-center font-semibold py-4 rounded-lg hover:bg-[#366089] transition"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Growth Tier (Recommended) */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-[#3f6a92] relative transform md:scale-105">
              <div className="absolute top-0 right-0 bg-[#3f6a92] text-white px-4 py-1 text-sm font-bold rounded-bl">
                Most Popular
              </div>
              <div className="bg-[#3f6a92] text-white p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Growth</h3>
                <p className="text-4xl font-bold">$1,000–$2,500</p>
                <p className="text-sm mt-2 opacity-90">Complete small business solution</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 text-gray-700 mb-8">
                  <li>5–10 pages</li>
                  <li>Custom design & features</li>
                  <li>Performance optimization</li>
                  <li>On-page SEO & local keywords</li>
                  <li>2 rounds of revisions</li>
                  <li>1 month free maintenance</li>
                </ul>
                <Link
                  href="/contact"
                  className="block bg-[#3f6a92] text-white text-center font-semibold py-4 rounded-lg hover:bg-[#366089] transition"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Premium Tier */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200">
              <div className="bg-[#3f6a92] text-white p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <p className="text-4xl font-bold">$2,500–$5,000+</p>
                <p className="text-sm mt-2 opacity-90">Advanced custom build</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 text-gray-700 mb-8">
                  <li>10+ pages or complex needs</li>
                  <li>Full redesign from scratch</li>
                  <li>Advanced SEO & security</li>
                  <li>3–6 months support option</li>
                  <li>Unlimited revisions (within scope)</li>
                </ul>
                <Link
                  href="/contact"
                  className="block bg-[#3f6a92] text-white text-center font-semibold py-4 rounded-lg hover:bg-[#366089] transition"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* Maintenance Packages */}
          <div className="mt-20">
            <h3 className="text-3xl md:text-4xl font-bold text-[#3f6a92] text-center mb-10">
              Optional Maintenance & Support
            </h3>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Keep your site secure, fast, and up-to-date. Most clients add a plan after launch — starting at just $50/month.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Care */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h4 className="text-xl font-bold text-[#3f6a92] mb-4 text-center">Basic Care</h4>
                <p className="text-3xl text-gray-500 font-bold text-center mb-2">$50/month</p>
                <p className="text-lg font-bold text-green-600 text-center mb-2">
                  or $480/year <span className="text-sm font-normal text-gray-600">(20% discount – save $120)</span>
                </p>
                <ul className="space-y-3 text-gray-700 mt-6">
                  <li>Monthly backups</li>
                  <li>Security monitoring & updates</li>
                  <li>Performance checks</li>
                  <li>Minor content updates (up to 1 hr/mo)</li>
                </ul>
              </div>

              {/* Standard Support */}
              <div className="bg-[#3f6a92] text-white p-8 rounded-xl shadow-2xl relative">
                <div className="absolute top-0 right-4 bg-white text-[#3f6a92] px-3 py-1 text-xs font-bold rounded-bl">
                  Most Popular
                </div>
                <h4 className="text-xl font-bold mb-4 text-center">Standard Support</h4>
                <p className="text-3xl font-bold text-center mb-2">$100/month</p>
                <p className="text-lg font-bold text-green-300 text-center mb-2">
                  or $900/year <span className="text-sm font-normal opacity-90">(25% discount – save $300)</span>
                </p>
                <ul className="space-y-3 mt-6">
                  <li>Everything in Basic</li>
                  <li>Up to 3 hours of updates/edits per month</li>
                  <li>Priority email & phone support</li>
                  <li>Quarterly performance report</li>
                </ul>
              </div>

              {/* Premium Care */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h4 className="text-xl font-bold text-[#3f6a92] mb-4 text-center">Premium Care</h4>
                <p className="text-3xl text-gray-500  font-bold text-center mb-2">$150+/month</p>
                <p className="text-lg font-bold text-green-600 text-center mb-2">
                  or $1,260+/year <span className="text-sm font-normal text-gray-600">(30% discount – save $540+)</span>
                </p>
                <ul className="space-y-3 text-gray-700 mt-6">
                  <li>Everything in Standard</li>
                  <li>Unlimited small updates</li>
                  <li>Monthly strategy calls</li>
                  <li>Advanced security & monitoring</li>
                </ul>
              </div>
            </div>

            <p className="mt-12 text-center text-gray-600 text-lg">
              No long-term contracts — cancel anytime. First month free with any new website build!
            </p>
          </div>

          {/* Final CTA */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-[#3f6a92] mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-gray-700 mb-8">
              Let's discuss your project and find the perfect package for your budget and goals.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#3f6a92] text-white font-semibold px-12 py-6 rounded-lg hover:bg-[#366089] transition text-xl shadow-lg"
            >
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}