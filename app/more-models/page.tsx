"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiX } from "react-icons/fi";

export default function MoreModels() {
  const [enlargedImage, setEnlargedImage] = useState<{ src: string; alt: string } | null>(null);

  // Generate array of image numbers (1-21)
  const imageNumbers = Array.from({ length: 21 }, (_, i) => i + 1);

  const handleImageClick = (imageSrc: string, imageAlt: string) => {
    setEnlargedImage({ src: imageSrc, alt: imageAlt });
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
    <section className="py-20 lg:py-28 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            More Models
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our extended range of premium electric two-wheeler models
          </p>
        </div>

        {/* Images Grid - PDF Slideshow Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {imageNumbers.map((num) => (
            <div
              key={num}
              className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => handleImageClick(`/more-product-listing/${num}.jpg`, `Greenova EV Model Range - Page ${num}`)}
            >
              <div className="relative w-full aspect-[4/3] bg-gray-100">
                <Image
                  src={`/more-product-listing/${num}.jpg`}
                  alt={`Greenova EV Model Range - Page ${num}`}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700">
                    Click to enlarge
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Products */}
        <div className="text-center">
          <a
            href="/#products"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark font-semibold transition-colors"
          >
            <span>← Back to Main Models</span>
          </a>
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

