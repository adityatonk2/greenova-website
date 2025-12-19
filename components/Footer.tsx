import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Image
              src="/greenova-logo.png"
              alt="Greenova Manufacturing Hub"
              width={200}
              height={70}
              className="h-14 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-400 mb-4">
              Manufacturing Hub
            </p>
            <p className="text-sm text-gray-400">
              Powering the future of two-wheeler electric mobility in India.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Models</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#products" className="hover:text-primary-light transition-colors">
                  DI Model
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-primary-light transition-colors">
                  SI Model
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-primary-light transition-colors">
                  BMW Model
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-primary-light transition-colors">
                  OLA Model
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-primary-light transition-colors">
                  Vespa 3
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="hover:text-primary-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary-light transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#location" className="hover:text-primary-light transition-colors">
                  Location
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 text-primary-light mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Chandrapal Kheri,<br />
                  Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-primary-light flex-shrink-0" />
                <a
                  href="tel:+918077660863"
                  className="hover:text-primary-light transition-colors"
                >
                  +91 80-77660863
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-primary-light flex-shrink-0" />
                <a
                  href="mailto:greenova95@gmail.com"
                  className="hover:text-primary-light transition-colors break-all"
                >
                  greenova95@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 pt-2">
                <a
                  href="https://wa.me/918077660863"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Greenova Manufacturing Hub. All rights reserved.
          </p>
          <p className="mt-2">
            Made in India 🇮🇳 | Eco-Friendly Mobility
          </p>
        </div>
      </div>
    </footer>
  );
}

