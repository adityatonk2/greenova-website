"use client";

import { useState } from "react";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/greenova-logo.png"
              alt="Greenova Manufacturing Hub"
              width={240}
              height={80}
              className="h-16 md:h-20 w-auto object-contain"
              priority
            />
            <div className="hidden sm:block text-sm text-gray-600 font-medium">
              Manufacturing Hub
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#products"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Models
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="#location"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Location
            </Link>
            <a
              href="tel:+918077660863"
              className="flex items-center space-x-2 bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-colors font-medium"
            >
              <FiPhone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-6 space-y-4">
            <Link
              href="#products"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-primary transition-colors font-medium py-2"
            >
              Models
            </Link>
            <Link
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-primary transition-colors font-medium py-2"
            >
              About
            </Link>
            <Link
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-primary transition-colors font-medium py-2"
            >
              Services
            </Link>
            <Link
              href="#location"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-primary transition-colors font-medium py-2"
            >
              Location
            </Link>
            <a
              href="tel:+918077660863"
              className="flex items-center justify-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium w-full"
            >
              <FiPhone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

