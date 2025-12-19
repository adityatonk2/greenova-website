"use client";

import { useState } from "react";
import Image from "next/image";
import { FiZap, FiSettings, FiCircle, FiShield } from "react-icons/fi";
import { products } from "@/types/products";
import { FaWhatsapp } from "react-icons/fa";

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <section id="products" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Premium EV Models
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our range of high-performance electric scooters designed for every need
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/30"
              onMouseEnter={() => setSelectedProduct(product.id)}
              onMouseLeave={() => setSelectedProduct(null)}
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary/10 via-primary/5 to-gray-100 overflow-hidden">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <FiZap className="w-20 h-20 text-primary/30 mx-auto mb-2" />
                      <div className="text-sm text-gray-400 font-medium">{product.model}</div>
                    </div>
                  </div>
                )}
                {/* Hover Overlay */}
                {selectedProduct === product.id && (
                  <div className="absolute inset-0 bg-primary/5 transition-opacity"></div>
                )}
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                
                {/* Key Specs */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-start space-x-2 text-sm text-gray-600">
                    <FiZap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{product.motor}</span>
                  </div>
                  <div className="flex items-start space-x-2 text-sm text-gray-600">
                    <FiSettings className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{product.controller}</span>
                  </div>
                  <div className="flex items-start space-x-2 text-sm text-gray-600">
                    <FiCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{product.wheels}</span>
                  </div>
                  {product.brakes && (
                    <div className="flex items-start space-x-2 text-sm text-gray-600">
                      <FiShield className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{product.brakes}</span>
                    </div>
                  )}
                </div>

                {/* Highlights */}
                <ul className="space-y-1 mb-6">
                  {product.highlights.slice(0, 2).map((highlight, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/918077660863?text=Hi, I'm interested in ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary hover:bg-primary-dark text-white text-center py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Enquire Now</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Looking for dealer opportunities or bulk orders?
          </p>
          <a
            href="tel:+918077660863"
            className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            <span>Contact for Dealership</span>
          </a>
        </div>
      </div>
    </section>
  );
}

