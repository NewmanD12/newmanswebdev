import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Newman's Web Development LLC | Veteran-Owned Web Developer in WV",
  description: "Custom, fast, mobile-friendly websites built from scratch for Southern West Virginia businesses. Veteran owned & operated. Serving Beaver, Charleston, and beyond.",
  keywords: ["web developer Beaver WV", "custom website West Virginia", "veteran owned web design", "fast website Beaver WV"],
  openGraph: {
    title: "Newman's Web Development LLC",
    description: "Veteran-owned custom web development for local WV businesses",
    url: "https://newmanswebdev.com",
    siteName: "Newman's Web Development",
    locale: "en_US",
    type: "website",
  },
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