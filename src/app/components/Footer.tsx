import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#3f6a92] text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand & Tagline */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Newman's Web Development LLC</h3>
          <p className="text-gray-200 mb-4">
            Custom, fast, mobile-friendly websites built from scratch for Southern West Virginia businesses.
          </p>
          <p className="text-gray-300 font-medium">
            🇺🇸 Veteran Owned & Operated
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="hover:text-gray-200 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-200 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-200 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
          <ul className="space-y-3 text-gray-200">
            <li>
              <a href="mailto:dnewman@newmanswebdev.com" className="hover:text-gray-100 transition">
                dnewman@newmanswebdev.com
              </a>
            </li>
            <li>Beaver, West Virginia</li>
            <li>
              <a href="tel:+13047191117" className="hover:text-gray-100 transition">
                (304) 719-1117
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-300 text-sm border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Newman's Web Development LLC. All rights reserved.
      </div>
    </footer>
  );
}