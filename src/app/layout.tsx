import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL('https://newmanswebdev.com'),

  title: {
    // Use template for easier page-specific titles later
    template: "%s | Newman's Web Development – Beckley WV Web Developer",
    default: 'Web Developer Beckley WV | Custom Websites Beaver, Mt Hope, Oak Hill',
  },

  description:
    "Veteran-owned web developer in Southern West Virginia. Custom, fast, mobile-friendly websites for businesses in Beckley, Beaver, Mt Hope, Oak Hill & surrounding areas. Affordable design, SEO, hosting & maintenance. Free consultation – (304) 719-1117.",

  // Keywords still help some engines, but focus on title/desc first
  keywords: [
    "web developer Beckley WV",
    "website design Beaver WV",
    "web design Mt Hope WV",
    "web developer Oak Hill WV",
    "custom website Southern West Virginia",
    "veteran owned web developer WV",
    "local web design Raleigh County",
    "affordable website designer Fayette County",
    "web development Southern WV",
    "SEO services Beckley WV",
  ],

  openGraph: {
    title: "Web Developer in Beckley & Beaver WV – Veteran-Owned Custom Sites",
    description:
      "Local veteran-owned web development serving Beckley, Beaver, Mt Hope, Oak Hill and Southern WV. Fast, mobile-ready websites built for small businesses.",
    url: "https://newmanswebdev.com",
    siteName: "Newman's Web Development LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",  // Ensure this file exists in /public
        width: 1200,
        height: 630,
        alt: "Newman's Web Dev – Local WV Website Design",
      },
    ],
  },

  // Add Twitter/X cards for better social sharing (many still use these)
  twitter: {
    card: "summary_large_image",
    title: "Web Developer Beckley WV | Veteran-Owned Custom Websites",
    description:
      "Custom, SEO-optimized websites for Southern WV businesses. Free consultation – (304) 719-1117.",
    images: ["/og-image.png"],  // Same image works
  },

  // Canonical is good – keep it
  alternates: {
    canonical: "https://newmanswebdev.com",
  },

  // Add robots if needed (default is index/follow, but explicit is fine)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification placeholder – uncomment after GSC setup
  // verification: { google: "your-google-verification-code-here" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#3f6a92" />
        <link rel="preconnect" href="https://challenges.cloudflare.com" />
        {/* Cloudflare Turnstile script – keep if using CAPTCHA */}
        <script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        ></script>

        {/* Enhanced LocalBusiness schema – added more fields for better local signals */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Newman's Web Development LLC",
              description:
                "Veteran-owned web developer serving Southern West Virginia – custom websites, SEO, hosting, and maintenance for small businesses in Beckley, Beaver, Mt Hope, Oak Hill and surrounding areas.",
              url: "https://newmanswebdev.com",
              telephone: "(304) 719-1117",
              email: "info@newmanswebdev.com",  // Add your real email if public
              address: {
                "@type": "PostalAddress",
                addressLocality: "Beaver",
                addressRegion: "WV",
                postalCode: "25813",  // Add if accurate/public
                addressCountry: "US",
              },
              areaServed: [
                { "@type": "City", "name": "Beckley" },
                { "@type": "City", "name": "Beaver" },
                { "@type": "City", "name": "Mount Hope" },
                { "@type": "City", "name": "Oak Hill" },
                { "@type": "City", "name": "Parkersburg" },
                { "@type": "State", "name": "West Virginia" },
              ],
              priceRange: "$$",
              paymentAccepted: "Cash, Credit Cards, PayPal",
              foundingDate: "202X",  // Optional: year started
              sameAs: [
                "https://www.facebook.com/yourpage",  // Add real social links
                "https://x.com/Newguy17509",  // Your X handle
              ],
            }),
          }}
        />
      </head>
      <body className="bg-white antialiased">
        <Analytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}