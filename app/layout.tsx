import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Greenova Manufacturing Hub | Premium EV Two-Wheeler Manufacturer in Uttar Pradesh",
  description: "Leading electric two-wheeler manufacturer in Chandrapal Kheri, UP. Premium EV scooters, dealer support, and fleet solutions. Contact +91 80-77660863 for dealership opportunities.",
  keywords: "EV scooters, electric two wheelers, EV manufacturer Uttar Pradesh, Greenova, electric scooter dealer, EV fleet solutions, Chandrapal Kheri",
  authors: [{ name: "Greenova Manufacturing Hub" }],
  openGraph: {
    title: "Greenova Manufacturing Hub | Premium EV Two-Wheeler Manufacturer",
    description: "Leading electric two-wheeler manufacturer in Uttar Pradesh. Premium EV scooters with 1000W-1200W motors, dealer support, and fleet solutions.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

