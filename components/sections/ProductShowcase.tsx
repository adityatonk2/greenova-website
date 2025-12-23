"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiZap, FiActivity, FiBatteryCharging, FiShield, FiCircle, FiX } from "react-icons/fi";
import { products } from "@/types/products";
import { FaWhatsapp } from "react-icons/fa";

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedMotors, setSelectedMotors] = useState<Record<string, string>>({});
  const [enlargedImage, setEnlargedImage] = useState<{ src: string; alt: string } | null>(null);

  const handleMotorChange = (productId: string, motor: string) => {
    setSelectedMotors((prev) => ({
      ...prev,
      [productId]: motor,
    }));
  };

  const handleImageClick = (imageSrc: string, productName: string) => {
    setEnlargedImage({ src: imageSrc, alt: productName });
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeEnlargedImage();
      }
    };

    if (enlargedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [enlargedImage]);

  return (
    <section id="products" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Available Models
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our range of high-performance electric scooters designed for every need
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {products.map((product) => {
            const selectedMotor = selectedMotors[product.id] || (product.motorOptions?.[0] || product.motor || "");
            const hasMotorOptions = product.motorOptions && product.motorOptions.length > 0;

            return (
              <div
                key={product.id}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/30 flex flex-col"
                onMouseEnter={() => setSelectedProduct(product.id)}
                onMouseLeave={() => setSelectedProduct(null)}
              >
                {/* Product Image */}
                <div 
                  className="relative h-40 bg-gradient-to-br from-primary/10 via-primary/5 to-gray-100 overflow-hidden cursor-pointer"
                  onClick={() => product.image && handleImageClick(product.image, product.name)}
                >
                  {product.image ? (
                    <>
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700">
                          Click to enlarge
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <FiZap className="w-16 h-16 text-primary/30 mx-auto mb-1" />
                        <div className="text-xs text-gray-400 font-medium">{product.model}</div>
                      </div>
                    </div>
                  )}
                  {selectedProduct === product.id && (
                    <div className="absolute inset-0 bg-primary/5 transition-opacity"></div>
                  )}
                </div>

                {/* Product Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  
                  {/* Motor Options Selector */}
                  {hasMotorOptions && (
                    <div className="mb-3">
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Motor (Optional)
                      </label>
                      <div className="grid grid-cols-4 gap-1.5">
                        {product.motorOptions!.map((motor) => (
                          <button
                            key={motor}
                            onClick={() => handleMotorChange(product.id, motor)}
                            className={`px-2 py-1.5 rounded text-xs font-medium transition-colors ${
                              selectedMotor === motor
                                ? "bg-primary text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {motor}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Specifications - Two Column Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                    {product.speed && (
                      <div className="flex items-center space-x-1.5">
                        <FiActivity className="w-4 h-4 text-primary flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-gray-700">Speed: </span>
                          <span className="text-gray-600">{product.speed}</span>
                        </div>
                      </div>
                    )}
                    {product.range && (
                      <div className="flex items-center space-x-1.5">
                        <FiActivity className="w-4 h-4 text-primary flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-gray-700">Range: </span>
                          <span className="text-gray-600">{product.range}</span>
                        </div>
                      </div>
                    )}
                    {product.batteryCapacity && (
                      <div className="flex items-center space-x-1.5">
                        <FiBatteryCharging className="w-4 h-4 text-primary flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-gray-700">Battery: </span>
                          <span className="text-gray-600 text-[10px]">{product.batteryCapacity}</span>
                        </div>
                      </div>
                    )}
                    {product.brakes && (
                      <div className="flex items-center space-x-1.5">
                        <FiShield className="w-4 h-4 text-primary flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-gray-700">Brake: </span>
                          <span className="text-gray-600 text-[10px]">{product.brakes}</span>
                        </div>
                      </div>
                    )}
                    {product.tyre && (
                      <div className="flex items-center space-x-1.5 col-span-2">
                        <FiCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-gray-700">Tyre: </span>
                          <span className="text-gray-600">{product.tyre}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Feature Descriptions */}
                  {(product.motorDescription || product.controllerDescription || product.rearMotorDescription || product.wheelDescription || product.modelDescription) && (
                    <div className="mb-3 space-y-1.5 border-t border-gray-200 pt-2.5 flex-1 max-h-32 overflow-y-auto">
                      {product.motorDescription && (
                        <div className="text-xs leading-tight">
                          <span className="font-semibold text-gray-700">Motor: </span>
                          <span className="text-gray-600">{product.motorDescription}</span>
                        </div>
                      )}
                      {product.controller && product.controllerDescription && (
                        <div className="text-xs leading-tight">
                          <span className="font-semibold text-gray-700">{product.controller}: </span>
                          <span className="text-gray-600">{product.controllerDescription}</span>
                        </div>
                      )}
                      {product.rearMotorDescription && (
                        <div className="text-xs leading-tight text-gray-600">
                          {product.rearMotorDescription}
                        </div>
                      )}
                      {product.wheels && product.wheelDescription && (
                        <div className="text-xs leading-tight">
                          <span className="font-semibold text-gray-700">{product.wheels}: </span>
                          <span className="text-gray-600">{product.wheelDescription}</span>
                        </div>
                      )}
                      {product.modelDescription && (
                        <div className="text-xs leading-tight bg-primary/5 p-2 rounded border-l-2 border-primary">
                          <span className="font-semibold text-gray-700">Perfect for {product.name}: </span>
                          <span className="text-gray-600">{product.modelDescription}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* WhatsApp CTA */}
                  <a
                    href={`https://wa.me/918077660863?text=Hi, I'm interested in ${product.name}${hasMotorOptions && selectedMotor ? ` with ${selectedMotor} motor` : ""}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block w-full bg-primary hover:bg-primary-dark text-white text-center py-2 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center space-x-2"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>Enquire Now</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Looking for dealer opportunities or bulk orders?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+918077660863"
              className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <span>Contact for Dealership</span>
            </a>
            <a
              href="/more-models"
              className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <span>More Models</span>
            </a>
          </div>
        </div>
      </div>

      {/* Image Enlargement Modal */}
      {enlargedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={closeEnlargedImage}
        >
          {/* Close Button */}
          <button
            onClick={closeEnlargedImage}
            className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-colors"
            aria-label="Close image"
          >
            <FiX className="w-6 h-6" />
          </button>

          {/* Enlarged Image */}
          <div
            className="relative max-w-7xl w-full h-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={enlargedImage.src}
                alt={enlargedImage.alt}
                fill
                className="object-contain p-8"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          {/* Product Name Overlay */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg">
            <p className="text-lg font-semibold">{enlargedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
