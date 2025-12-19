import React from "react";
import { FiPackage, FiShoppingCart, FiTruck, FiUsers, FiTool } from "react-icons/fi";

const services = [
  {
    icon: FiPackage,
    title: "EV Manufacturing",
    description: "State-of-the-art manufacturing facility producing premium electric two-wheelers with advanced quality control and precision engineering.",
    features: [
      "7+ premium EV models",
      "1000W-1200W motor range",
      "60/72V smart controllers",
      "Quality-assured production",
    ],
  },
  {
    icon: FiShoppingCart,
    title: "EV Sales",
    description: "Direct sales to customers with competitive pricing, flexible financing options, and comprehensive product support.",
    features: [
      "Individual customer sales",
      "Competitive pricing",
      "Product demonstrations",
      "Customer support",
    ],
  },
  {
    icon: FiTruck,
    title: "Dealer & Distribution Support",
    description: "Comprehensive dealer network support with attractive margins, marketing materials, and dedicated account management.",
    features: [
      "Dealer partnerships",
      "Attractive margins",
      "Marketing support",
      "Training programs",
    ],
  },
  {
    icon: FiUsers,
    title: "Bulk & Fleet Orders",
    description: "Specialized solutions for fleet operators, delivery services, and corporate clients with volume discounts and custom configurations.",
    features: [
      "Volume discounts",
      "Custom configurations",
      "Fleet management support",
      "Dedicated account manager",
    ],
  },
  {
    icon: FiTool,
    title: "Service & Support",
    description: "Reliable after-sales service network with trained technicians, genuine parts availability, and warranty support.",
    features: [
      "Authorized service centers",
      "Genuine parts",
      "Warranty support",
      "Quick turnaround",
    ],
  },
];

export default function ManufacturingServices() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Manufacturing & Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive EV solutions from manufacturing to after-sales support
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-dark to-primary rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Partner with Us?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a dealer, distributor, or fleet operator, we have the solutions 
            and support you need to succeed in the EV market.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+918077660863"
              className="bg-white text-primary-dark hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Call for Dealership
            </a>
            <a
              href="#contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-white/20"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

