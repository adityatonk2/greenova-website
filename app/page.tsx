import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ProductShowcase from "@/components/sections/ProductShowcase";
import WhyChoose from "@/components/sections/WhyChoose";
import ManufacturingServices from "@/components/sections/ManufacturingServices";
import LocationSection from "@/components/sections/LocationSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Greenova EV Seller | Premium Electric Two-Wheeler Manufacturer & Dealer",
  description: "Buy premium electric two-wheelers from Greenova EV Seller. Leading manufacturer and dealer in Uttar Pradesh. 7+ EV scooter models with 1000W-1200W motors. Dealer support & fleet solutions available. Contact +91 80-77660863.",
  keywords: "Greenova EV Seller, buy EV scooter, electric two wheeler dealer, EV manufacturer UP, electric scooter online, Greenova dealer, EV fleet solutions",
  openGraph: {
    title: "Greenova EV Seller | Premium Electric Two-Wheeler Manufacturer & Dealer",
    description: "Buy premium electric two-wheelers from Greenova EV Seller. Leading manufacturer and dealer in Uttar Pradesh.",
    url: "https://greenova-website.vercel.app",
    siteName: "Greenova EV Seller",
    images: [
      {
        url: "https://greenova-website.vercel.app/greenova-logo.png",
        width: 1200,
        height: 630,
        alt: "Greenova EV Seller",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://greenova-website.vercel.app",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProductShowcase />
      <WhyChoose />
      <ManufacturingServices />
      <LocationSection />
      <ContactSection />
    </>
  );
}

