"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiZap, FiX } from "react-icons/fi";
import { products } from "@/types/products";

export default function About() {
  const [enlargedImage, setEnlargedImage] = useState<{ src: string; alt: string } | null>(null);

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
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
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

          {/* Who We Are */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
              Greenova is more than an EV brand — we are a manufacturing ecosystem focused on clean transportation. From assembly to quality control, every Greenova vehicle is built with precision, performance, and purpose. Our mission is to reduce carbon emissions while making electric mobility accessible to everyone.
            </p>
          </div>

          {/* What We Do */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
              What We Do
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed text-center max-w-3xl mx-auto">
              We specialize in the manufacturing and assembly of 2-wheeler electric vehicles, combining advanced technology with practical design.
            </p>
            <ul className="space-y-3 max-w-2xl mx-auto">
              <li className="flex items-start text-gray-700">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>High-efficiency electric scooters</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Robust motors and long-life batteries</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Cost-effective, low-maintenance mobility solutions</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Vehicles designed for Indian road conditions</span>
              </li>
            </ul>
          </div>

          {/* Vision */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
              Our Vision
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto mb-12">
              To become a leading EV manufacturing hub that accelerates India&apos;s transition to clean energy and sustainable transportation.
            </p>
          </div>
        </div>

        {/* Infinite Carousel - Full Width */}
        <div className="mb-16 overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="relative">
            <div className="flex animate-scroll-left gap-6">
              {/* First set of images */}
              {products.slice(0, 8).map((product) => (
                <div
                  key={`first-${product.id}`}
                  className="flex-shrink-0 w-64 h-48 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => handleImageClick(product.image || `/products/${product.id}.jpeg`, product.name)}
                >
                  <div className="relative w-full h-full bg-gradient-to-br from-primary/10 via-primary/5 to-gray-100">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 hover:scale-105 transition-transform duration-300"
                        sizes="256px"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FiZap className="w-16 h-16 text-primary/30" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {products.slice(0, 8).map((product) => (
                <div
                  key={`second-${product.id}`}
                  className="flex-shrink-0 w-64 h-48 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => handleImageClick(product.image || `/products/${product.id}.jpeg`, product.name)}
                >
                  <div className="relative w-full h-full bg-gradient-to-br from-primary/10 via-primary/5 to-gray-100">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 hover:scale-105 transition-transform duration-300"
                        sizes="256px"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FiZap className="w-16 h-16 text-primary/30" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">

          {/* Mission */}
          <div className="bg-gradient-to-r from-primary-dark to-primary rounded-2xl p-8 lg:p-12 text-white mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <ul className="space-y-3 max-w-2xl mx-auto">
              <li className="flex items-start text-white/90">
                <span className="mr-3 mt-1">•</span>
                <span>Promote electric mobility across urban and rural India</span>
              </li>
              <li className="flex items-start text-white/90">
                <span className="mr-3 mt-1">•</span>
                <span>Deliver high-quality 2-wheeler EVs at competitive prices</span>
              </li>
              <li className="flex items-start text-white/90">
                <span className="mr-3 mt-1">•</span>
                <span>Support a cleaner environment and energy independence</span>
              </li>
              <li className="flex items-start text-white/90">
                <span className="mr-3 mt-1">•</span>
                <span>Empower dealers, partners, and customers through innovation</span>
              </li>
            </ul>
          </div>

          {/* Driving the Future */}
          <div className="text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Driving the Future, Responsibly
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              At Greenova, every ride is a step towards a cleaner, smarter, and more sustainable future. We believe electric vehicles are not just an alternative — they are the future of transportation.
            </p>
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

          {/* Image Label Overlay */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg">
            <p className="text-lg font-semibold">{enlargedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}

