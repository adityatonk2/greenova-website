"use client";

import { FiArrowDown, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-primary-dark text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 border border-white/20 shadow-lg">
              <Image
                src="/greenova-logo.png"
                alt="Greenova Manufacturing Hub"
                width={300}
                height={100}
                className="h-20 w-auto object-contain rounded-xl"
                priority
              />
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-sm font-medium border border-primary/30">
              🌱 Eco Friendly
            </span>
            <span className="px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-sm font-medium border border-primary/30">
              🇮🇳 Made in India
            </span>
            <span className="px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-sm font-medium border border-primary/30">
              ⚡ Reliable Performance
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Greenova
            <span className="block text-primary-light mt-2">
              Step Into a Cleaner Future
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Greenova is a next-generation manufacturing hub dedicated to building reliable, affordable, and sustainable 2-wheeler electric vehicles. Driven by innovation and responsibility, we are shaping the future of mobility by delivering eco-friendly solutions designed for today&apos;s roads and tomorrow&apos;s world.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#products"
              className="group bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>View Models</span>
              <FiArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="tel:+918077660863"
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/20 flex items-center space-x-2"
            >
              <FiPhone className="w-5 h-5" />
              <span>Contact Showroom</span>
            </a>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a
              href="https://wa.me/918077660863"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-primary-light transition-colors"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>WhatsApp: +91 80-77660863</span>
            </a>
            <span className="hidden sm:inline text-gray-500">•</span>
            <a
              href="mailto:greenova95@gmail.com"
              className="text-gray-300 hover:text-primary-light transition-colors"
            >
              greenova95@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <FiArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
}

