import React from "react";
import { FiAward, FiSettings, FiUsers, FiDollarSign, FiTool, FiZap } from "react-icons/fi";

const features = [
  {
    icon: FiAward,
    title: "Premium EV Models",
    description: "7+ premium models with 1000W-1200W motors, advanced controllers, and superior build quality.",
  },
  {
    icon: FiSettings,
    title: "Manufacturing Expertise",
    description: "State-of-the-art manufacturing facility with quality control and precision engineering.",
  },
  {
    icon: FiUsers,
    title: "Dealer Support",
    description: "Comprehensive dealer and distributor support with competitive pricing and marketing assistance.",
  },
  {
    icon: FiDollarSign,
    title: "Affordable Pricing",
    description: "Competitive pricing without compromising on quality, making EVs accessible to everyone.",
  },
  {
    icon: FiTool,
    title: "After-Sales Service",
    description: "Reliable after-sales support and service network to keep your EV running smoothly.",
  },
  {
    icon: FiZap,
    title: "Sustainable Mobility",
    description: "100% electric, zero emissions, contributing to a cleaner and greener future.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Greenova?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by customers, dealers, and fleet operators across India
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-xl border-2 border-gray-100 hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 bg-gray-50 px-8 py-6 rounded-xl border border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">7+</div>
              <div className="text-sm text-gray-600">Premium Models</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-gray-600">Made in India</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

