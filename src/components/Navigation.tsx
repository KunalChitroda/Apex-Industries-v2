"use client";

import React, { useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import Image from "next/image";
import { useRouter, usePathname } from 'next/navigation';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navigateTo = (path: string) => {
    setIsMenuOpen(false);
    router.push(path);
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('[data-contact-section]');
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    setIsMenuOpen(false);
    if (pathname !== "/") {
      router.push("/#contact");
    } else {
      scrollToContact();
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-lg shadow-black/5 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => navigateTo("/")}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src="/images/logos/apex-logo.png"
                alt="Apex Industries Logo"
                width={40}
                height={40}
                className="bg-white"
                priority
              />
              <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Apex Industries
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ].map((item) => (
              <button
                key={item.path}
                onClick={() => navigateTo(item.path)}
                className={`text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${
                  pathname === item.path
                    ? "text-red-600 bg-red-50/70 px-3 py-1 rounded-lg backdrop-blur-sm"
                    : "text-gray-700 hover:text-red-600 px-3 py-1 rounded-lg hover:bg-gray-50/70 backdrop-blur-sm"
                }`}
              >
                {item.name}
              </button>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-xs sm:text-sm md:text-base font-medium text-gray-700 hover:text-red-600 transition-all duration-300 px-3 py-1 rounded-lg hover:bg-gray-50/70 backdrop-blur-sm">
                Services
              </button>
              <div className="absolute top-full left-0 mt-3 w-56 bg-white/90 backdrop-blur-xl rounded-xl shadow-xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-3">
                  {[
                    { name: "Kitchen Supplies", path: "/services/kitchen-supplies" },
                    { name: "QSR Equipment", path: "/services/qsr-equipment" },
                    { name: "Table Top Supplies", path: "/services/tabletop-supplies" },
                  ].map((item) => (
                    <button
                      key={item.path}
                      onClick={() => navigateTo(item.path)}
                      className="block w-full text-left px-4 py-3 text-xs sm:text-sm md:text-base text-gray-700 hover:bg-gradient-to-r hover:from-red-50/50 hover:to-transparent hover:text-red-600 transition-all duration-200"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <div className="flex items-center space-x-4 text-xs sm:text-sm md:text-base text-gray-600">
              <button
                onClick={handleContactClick}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all duration-300 font-medium"
              >
                <span>Contact</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Kitchen Supplies", path: "/services/kitchen-supplies" },
                { name: "QSR Equipment", path: "/services/qsr-equipment" },
                { name: "Table Top Supplies", path: "/services/tabletop-supplies" },
              ].map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigateTo(item.path)}
                  className="text-left text-xs sm:text-sm md:text-base text-gray-700 hover:text-red-600 transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={handleContactClick}
                  className="flex items-center space-x-2 text-xs sm:text-sm md:text-base text-gray-600 hover:text-red-600 transition-colors w-full text-left"
                >
                  <span>Contact</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
