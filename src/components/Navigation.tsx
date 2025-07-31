"use client";

import React, { useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import Image from "next/image";

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-lg shadow-black/5 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setCurrentPage("home")}
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
              <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Apex Industries</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setCurrentPage("home")}
              className={`text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${
                currentPage === "home" 
                  ? "text-red-600 bg-red-50/70 px-3 py-1 rounded-lg backdrop-blur-sm" 
                  : "text-gray-700 hover:text-red-600 px-3 py-1 rounded-lg hover:bg-gray-50/70 backdrop-blur-sm"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage("about")}
              className={`text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${
                currentPage === "about" 
                  ? "text-red-600 bg-red-50/70 px-3 py-1 rounded-lg backdrop-blur-sm" 
                  : "text-gray-700 hover:text-red-600 px-3 py-1 rounded-lg hover:bg-gray-50/70 backdrop-blur-sm"
              }`}
            >
              About
            </button>
            <div className="relative group">
              <button className="text-xs sm:text-sm md:text-base font-medium text-gray-700 hover:text-red-600 transition-all duration-300 px-3 py-1 rounded-lg hover:bg-gray-50/70 backdrop-blur-sm">
                Services
              </button>
              <div className="absolute top-full left-0 mt-3 w-56 bg-white/90 backdrop-blur-xl rounded-xl shadow-xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-3">
                  <button
                    onClick={() => setCurrentPage("kitchen-supplies")}
                    className="block w-full text-left px-4 py-3 text-xs sm:text-sm md:text-base text-gray-700 hover:bg-gradient-to-r hover:from-red-50/50 hover:to-transparent hover:text-red-600 transition-all duration-200"
                  >
                    Kitchen Supplies
                  </button>
                  <button
                    onClick={() => setCurrentPage("qsr-equipment")}
                    className="block w-full text-left px-4 py-3 text-xs sm:text-sm md:text-base text-gray-700 hover:bg-gradient-to-r hover:from-red-50/50 hover:to-transparent hover:text-red-600 transition-all duration-200"
                  >
                    QSR Equipment
                  </button>
                  <button
                    onClick={() => setCurrentPage("tabletop-supplies")}
                    className="block w-full text-left px-4 py-3 text-xs sm:text-sm md:text-base text-gray-700 hover:bg-gradient-to-r hover:from-red-50/50 hover:to-transparent hover:text-red-600 transition-all duration-200"
                  >
                    Table Top Supplies
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-xs sm:text-sm md:text-base text-gray-600">
              <button
                onClick={() => {
                  if (currentPage !== "home") {
                    setCurrentPage("home");
                    // Wait for the page to render, then scroll to contact
                    setTimeout(() => {
                      const contactSection = document.querySelector('[data-contact-section]');
                      contactSection?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  } else {
                    const contactSection = document.querySelector('[data-contact-section]');
                    contactSection?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
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
              <button
                onClick={() => {
                  setCurrentPage("home");
                  setIsMenuOpen(false);
                }}
                className="text-left text-xs sm:text-sm md:text-base text-gray-700 hover:text-red-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setCurrentPage("about");
                  setIsMenuOpen(false);
                }}
                className="text-left text-xs sm:text-sm md:text-base text-gray-700 hover:text-red-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => {
                  setCurrentPage("kitchen-supplies");
                  setIsMenuOpen(false);
                }}
                className="text-left text-xs sm:text-sm md:text-base text-gray-700 hover:text-red-600 transition-colors"
              >
                Kitchen Supplies
              </button>
              <button
                onClick={() => {
                  setCurrentPage("qsr-equipment");
                  setIsMenuOpen(false);
                }}
                className="text-left text-xs sm:text-sm md:text-base text-gray-700 hover:text-red-600 transition-colors"
              >
                QSR Equipment
              </button>
              <button
                onClick={() => {
                  setCurrentPage("tabletop-supplies");
                  setIsMenuOpen(false);
                }}
                className="text-left text-xs sm:text-sm md:text-base text-gray-700 hover:text-red-600 transition-colors"
              >
                Table Top Supplies
              </button>
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    setCurrentPage("home");
                    setIsMenuOpen(false);
                    // Wait for the page to render, then scroll to contact
                    setTimeout(() => {
                      const contactSection = document.querySelector('[data-contact-section]');
                      contactSection?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }}
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