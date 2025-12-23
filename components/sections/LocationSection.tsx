"use client";

import React from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function LocationSection() {
  return (
    <section id="location" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            EV Two-Wheeler Manufacturer in Uttar Pradesh
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Located in Chandrapal Kheri, UP - Serving customers, dealers, and fleet operators across India
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Visit Our Manufacturing Hub
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Greenova Manufacturing Hub is strategically located in Chandrapal Kheri, Uttar Pradesh, 
                making it easily accessible for dealers, distributors, and customers from across the region. 
                Our facility combines modern manufacturing capabilities with a customer-first approach.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We welcome visitors to tour our facility, see our manufacturing process, and experience 
                our premium EV models firsthand. Whether you&apos;re interested in purchasing, dealership 
                opportunities, or bulk orders, we&apos;re here to help.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <FiMapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Address</div>
                  <div className="text-gray-600">
                    Chandrapal Kheri,<br />
                    Uttar Pradesh, India
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <FiPhone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Phone</div>
                  <a
                    href="tel:+918077660863"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    +91 80-77660863
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <FiMail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Email</div>
                  <a
                    href="mailto:greenova95@gmail.com"
                    className="text-gray-600 hover:text-primary transition-colors break-all"
                  >
                    greenova95@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+918077660863"
                className="flex-1 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/918077660863"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors flex items-center justify-center space-x-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-96 border border-gray-200">
              <iframe
                src="https://www.google.com/maps?q=Chandrapal+Kheri,+Uttar+Pradesh,+India&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Greenova Manufacturing Hub Location - Chandrapal Kheri, Uttar Pradesh"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Chandrapal+Kheri+Uttar+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark font-medium inline-flex items-center space-x-2"
              >
                <FiMapPin className="w-5 h-5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            EV Scooters in UP | Electric Two Wheelers India
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            As a leading <strong>EV two-wheeler manufacturer in Uttar Pradesh</strong>, Greenova Manufacturing Hub 
            serves customers across UP and India. We specialize in manufacturing premium electric scooters 
            with advanced features like 1000W-1200W motors, 60/72V smart controllers, and superior build quality.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our <strong>EV manufacturing hub</strong> in Chandrapal Kheri produces multiple models including SL Model, 
            SI Model, BMW Model, OLA Model, Vespa 3, and more. We offer comprehensive dealer support, bulk orders 
            for fleet operators, and direct sales to customers. Contact us for dealership opportunities or to 
            experience our premium EV scooters.
          </p>
        </div>
      </div>
    </section>
  );
}

