import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ProductShowcase from "@/components/sections/ProductShowcase";
import WhyChoose from "@/components/sections/WhyChoose";
import ManufacturingServices from "@/components/sections/ManufacturingServices";
import LocationSection from "@/components/sections/LocationSection";
import ContactSection from "@/components/sections/ContactSection";

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

