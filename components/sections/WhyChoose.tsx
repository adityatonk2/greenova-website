import React from "react";
import { FiZap, FiSettings, FiDollarSign, FiTool, FiMapPin } from "react-icons/fi";

const features = [
  {
    icon: FiZap,
    title: "Clean & Sustainable Mobility",
    description: "Zero emissions for a greener tomorrow.",
  },
  {
    icon: FiSettings,
    title: "Strong Manufacturing Capabilities",
    description: "In-house assembly with strict quality standards.",
  },
  {
    icon: FiDollarSign,
    title: "Affordable & Practical",
    description: "Designed to reduce running costs and dependency on fuel.",
  },
  {
    icon: FiTool,
    title: "Reliable Performance",
    description: "Built for durability, safety, and everyday use.",
  },
  {
    icon: FiMapPin,
    title: "Made for India",
    description: "Tailored for Indian consumers, climate, and infrastructure.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Greenova
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
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

