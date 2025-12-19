import React from "react";
import Image from "next/image";
import { FiAward, FiUsers, FiMapPin, FiZap } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About Greenova Manufacturing Hub
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leading the electric mobility revolution with premium manufacturing and customer-first approach
            </p>
          </div>

          {/* Group Video/Image Section */}
          <div className="mb-16 rounded-2xl overflow-hidden shadow-xl">
            <div className="relative w-full aspect-video">
              <Image
                src="/5.jpeg"
                alt="Greenova Manufacturing Hub Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Your Trusted EV Manufacturing Partner
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Greenova Manufacturing Hub is a premier electric two-wheeler manufacturer based in 
                Chandrapal Kheri, Uttar Pradesh. We specialize in designing and producing high-quality 
                EV scooters that combine cutting-edge technology with reliable performance.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our state-of-the-art manufacturing facility produces multiple premium models, each 
                engineered for durability, efficiency, and superior riding experience. We serve 
                individual customers, dealers, distributors, and fleet operators across India.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a commitment to sustainable mobility and Indian manufacturing excellence, 
                Greenova is powering the future of clean transportation.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/20">
                <FiAward className="w-8 h-8 text-primary mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">7+</div>
                <div className="text-sm text-gray-600">Premium Models</div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/20">
                <FiZap className="w-8 h-8 text-primary mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">1000W+</div>
                <div className="text-sm text-gray-600">Power Range</div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/20">
                <FiUsers className="w-8 h-8 text-primary mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                <div className="text-sm text-gray-600">Customer Focus</div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/20">
                <FiMapPin className="w-8 h-8 text-primary mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">UP</div>
                <div className="text-sm text-gray-600">Manufacturing Hub</div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-primary-dark to-primary rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed text-white/90">
              To accelerate India&apos;s transition to sustainable mobility by manufacturing 
              premium electric two-wheelers that deliver exceptional performance, reliability, 
              and value. We empower dealers and serve customers with integrity, innovation, 
              and unwavering commitment to quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

