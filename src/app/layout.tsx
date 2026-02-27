import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Web Developer Beckley WV | Custom Websites Beaver, Mt Hope, Oak Hill",
  description:
    "Veteran-owned web developer in Southern West Virginia. Custom, fast, mobile-friendly websites for businesses in Beckley, Beaver, Mt Hope, Oak Hill & surrounding areas. Affordable design, SEO & hosting. Free consultation – (304) 719-1117.",
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
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Newman's Web Dev – Local WV Website Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veteran-Owned Web Developer Beckley WV | Beaver, Mt Hope, Oak Hill",
    description: "Custom websites & SEO for Southern West Virginia businesses.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://newmanswebdev.com",
  },
  // Optional: add once you verify Google Search Console
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Newman's Web Development LLC",
              description:
                "Veteran-owned web developer serving Southern West Virginia – custom websites, SEO, and hosting for small businesses in Beckley, Beaver, Mt Hope, Oak Hill and surrounding areas.",
              url: "https://newmanswebdev.com",
              telephone: "(304) 719-1117",
              areaServed: [
                { "@type": "City", "name": "Beckley" },
                { "@type": "City", "name": "Beaver" },
                { "@type": "City", "name": "Mount Hope" },
                { "@type": "City", "name": "Oak Hill" },
                { "@type": "State", "name": "West Virginia" },
              ],
              priceRange: "$$",
              paymentAccepted: "Cash, Credit Cards",
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