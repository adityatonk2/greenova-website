import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = "https://greenova-website.vercel.app"; // Update with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Greenova EV Seller | Premium Electric Two-Wheeler Manufacturer & Dealer in Uttar Pradesh",
    template: "%s | Greenova EV Seller",
  },
  description: "Greenova EV Seller - Leading electric two-wheeler manufacturer and dealer in Chandrapal Kheri, UP. Premium EV scooters (1000W-1200W), dealer support, fleet solutions. Buy EV scooters online. Contact +91 80-77660863 for dealership opportunities.",
  keywords: [
    "Greenova EV Seller",
    "EV scooters",
    "electric two wheelers",
    "EV manufacturer Uttar Pradesh",
    "electric scooter dealer",
    "EV seller India",
    "Greenova electric scooter",
    "EV fleet solutions",
    "Chandrapal Kheri EV",
    "electric scooter UP",
    "EV dealer network",
    "electric two wheeler manufacturer",
    "premium EV scooters",
    "1000W EV scooter",
    "1200W electric scooter",
    "EV dealership opportunities",
    "electric scooter wholesale",
    "EV distributor",
    "green mobility India",
    "sustainable transportation",
  ],
  authors: [{ name: "Greenova Manufacturing Hub", url: siteUrl }],
  creator: "Greenova Manufacturing Hub",
  publisher: "Greenova Manufacturing Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Greenova EV Seller",
    title: "Greenova EV Seller | Premium Electric Two-Wheeler Manufacturer & Dealer",
    description: "Leading electric two-wheeler manufacturer and dealer in Uttar Pradesh. Premium EV scooters with 1000W-1200W motors, dealer support, and fleet solutions. Buy EV scooters online.",
    images: [
      {
        url: `${siteUrl}/greenova-logo.png`,
        width: 1200,
        height: 630,
        alt: "Greenova EV Seller - Premium Electric Two-Wheeler Manufacturer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Greenova EV Seller | Premium Electric Two-Wheeler Manufacturer",
    description: "Leading EV manufacturer and dealer in Uttar Pradesh. Premium EV scooters with dealer support and fleet solutions.",
    images: [`${siteUrl}/greenova-logo.png`],
    creator: "@greenova", // Update with actual Twitter handle if available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Electric Vehicles",
  classification: "Electric Two-Wheeler Manufacturer & Dealer",
  manifest: "/manifest.json",
  icons: {
    icon: "/greenova-logo.png",
    apple: "/greenova-logo.png",
  },
  other: {
    "contact:phone_number": "+918077660863",
    "contact:email": "greenova95@gmail.com",
    "contact:address": "Chandrapal Kheri, Uttar Pradesh, India",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#059669" },
    { media: "(prefers-color-scheme: dark)", color: "#047857" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="canonical" href={siteUrl} />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Chandrapal Kheri" />
        <meta name="geo.position" content="27.5;80.5" />
        <meta name="ICBM" content="27.5, 80.5" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <link rel="icon" href="/greenova-logo.png" />
        <link rel="apple-touch-icon" href="/greenova-logo.png" />
      </head>
      <body className="antialiased">
        <StructuredData />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

