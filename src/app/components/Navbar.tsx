'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#3f6a92] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-bold tracking-tight">
          Newman's Web Dev
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-gray-200 transition">
            Home
          </Link>
          <Link href="/services" className="hover:text-gray-200 transition">
            Services
          </Link>
          <Link href="/pricing" className="hover:text-gray-200 transition">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-gray-200 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#366089] py-6">
          <div className="flex flex-col items-center space-y-6">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-gray-200 transition"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-gray-200 transition"
            >
              Services
            </Link>
            <Link
              href="/pricing"
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-gray-200 transition"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-gray-200 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}