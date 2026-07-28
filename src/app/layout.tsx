import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClientProviders } from "./providers";
import "@/index.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Mulyam — India's Leading Fresh Produce Supply Chain for Quick Commerce",
  description: "Mulyam Agronomics is India's most trusted B2B fresh produce procurement partner for quick commerce, modern trade, and institutional buyers. Farm-to-store cold-chain logistics with under 2% wastage.",
  keywords: "Mulyam, fresh produce, agritech, quick commerce supply chain, B2B sourcing, cold-chain logistics, farm to store, I'mFresh, ImKisan, crop advisory, India agriculture",
  authors: [{ name: "Mulyam Agronomics Private Limited" }],
  metadataBase: new URL("https://mulyam.in/"),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    url: "https://mulyam.in/",
    title: "Mulyam — India's Leading Fresh Produce Supply Chain",
    description: "Tech-enabled B2B fresh produce procurement for quick commerce. 4,950+ MT monthly volume, 3,000+ farmer network, 25+ cities.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mulyam Agronomics",
      },
    ],
    siteName: "Mulyam Agronomics",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mulyam — India's Leading Fresh Produce Supply Chain",
    description: "Tech-enabled B2B fresh produce procurement for quick commerce. 4,950+ MT monthly volume, 3,000+ farmer network.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
        <meta name="theme-color" content="#004B8B" />
      </head>
      <body suppressHydrationWarning className="antialiased min-h-screen bg-[#F9F9F6] dark:bg-[#0C0F12] text-slate-800 dark:text-slate-100 transition-colors duration-300">
        <ClientProviders>
          <Navbar />
          <main suppressHydrationWarning>{children}</main>
          <Footer />
        </ClientProviders>
        <Script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
