"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";

const Footer: React.FC = () => {
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
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-blue-900/10"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <button
              onClick={() => navigateTo("home")}
              className="flex items-center space-x-3 mb-4 hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src="/images/logos/apex-logo.png"
                alt="Apex Industries Logo"
                width={40}
                height={40}
                priority
              />
              <span className="text-lg sm:text-xl md:text-2xl font-bold">Apex Industries</span>
            </button>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 leading-relaxed">
              Leading manufacturer of premium stainless steel equipment for the hospitality industry.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+918591704476" className="p-3 bg-white/10 backdrop-blur-sm rounded-lg text-gray-400 hover:text-white hover:bg-red-600/20 transition-all duration-300">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:apexindustries1993@yahoo.co.in" className="p-3 bg-white/10 backdrop-blur-sm rounded-lg text-gray-400 hover:text-white hover:bg-red-600/20 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="hidden md:block"></div>

          <div className="hidden md:flex flex-row gap-8 justify-end ml-auto">
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Quick Links</h3>
              <ul className="space-y-3">
                <li><button onClick={() => router.push("/")} className="text-sm sm:text-base md:text-lg text-gray-400 hover:text-red-400 transition-all duration-300 text-left">Home</button></li>
                <li><button onClick={() => router.push("/about")} className="text-sm sm:text-base md:text-lg text-gray-400 hover:text-red-400 transition-all duration-300 text-left">About</button></li>
                <li><button onClick={handleContactClick} className="text-sm sm:text-base md:text-lg text-gray-400 hover:text-red-400 transition-all duration-300 text-left">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Services</h3>
              <ul className="space-y-3">
                <li><button onClick={() => router.push("/services/kitchen-supplies")} className="text-sm sm:text-base md:text-lg text-gray-400 hover:text-red-400 transition-all duration-300 text-left">Kitchen Supplies</button></li>
                <li><button onClick={() => router.push("/services/qsr-equipment")} className="text-sm sm:text-base md:text-lg text-gray-400 hover:text-red-400 transition-all duration-300 text-left">QSR Equipment</button></li>
                <li><button onClick={() => router.push("/services/tabletop-supplies")} className="text-sm sm:text-base md:text-lg text-gray-400 hover:text-red-400 transition-all duration-300 text-left">Table Top Supplies</button></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800/50 mt-12 pt-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <p className="text-xs sm:text-sm md:text-base text-gray-400">&copy; 2024 Apex Industries. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
