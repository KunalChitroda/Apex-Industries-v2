"use client";

import React, { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useRouter, usePathname } from "next/navigation";
import ScrollToTop from "@/components/ScrollToTop";
import HomePage from "@/components/pages/HomePage";
import AboutPage from "@/components/pages/AboutPage";
import ServicePage from "@/components/pages/ServicePage";
import { services } from "@/data/services";

const ApexIndustriesWebsite: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const contactRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#contact") {
      const el = document.querySelector('[data-contact-section]');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [currentPage]);

  const scrollToContact = () => {
    if (currentPage !== "home") {
      setCurrentPage("home");
      // Wait for the page to render, then scroll to contact
      setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "kitchen-supplies":
        return (
          <ServicePage
            service={services[0]}
            scrollToContact={scrollToContact}
          />
        );
      case "qsr-equipment":
        return (
          <ServicePage
            service={services[1]}
            scrollToContact={scrollToContact}
          />
        );
      case "tabletop-supplies":
        return (
          <ServicePage
            service={services[2]}
            scrollToContact={scrollToContact}
          />
        );
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HomePage />
      <ScrollToTop showScrollTop={showScrollTop} scrollToTop={scrollToTop} />
    </div>
  );
};

export default ApexIndustriesWebsite; 