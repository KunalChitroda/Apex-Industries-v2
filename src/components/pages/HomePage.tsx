"use client";

import React from "react";
import { motion } from "framer-motion";
import { Factory, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LogoCarousel from "@/components/LogoCarousel";
import Contact from "@/components/Contact";

interface HomePageProps {
  setCurrentPage: (page: string) => void;
  scrollToContact: () => void;
  contactRef: React.RefObject<HTMLElement>;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage, scrollToContact, contactRef }) => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-red-50/30 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-red-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Badge variant="outline" className="mb-6 bg-white/60 backdrop-blur-sm border-red-200/50 shadow-lg">
                <span className="text-red-600 animate-pulse text-base sm:text-lg md:text-xl">●</span>
                <span className="ml-2 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent font-medium text-base sm:text-lg md:text-xl">Premium Stainless Steel Manufacturing</span>
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Apex Industries</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Leading manufacturer of premium stainless steel kitchen equipment, QSR solutions, and table top supplies.
                Serving the hospitality industry with unmatched quality and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/30 transform hover:scale-105 transition-all duration-300"
                  onClick={scrollToContact}
                >
                  Get Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 bg-white/60 backdrop-blur-sm hover:bg-gray-50/80 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => setCurrentPage("about")}
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="relative bg-gradient-to-br from-white/60 to-gray-100/60 backdrop-blur-sm rounded-2xl aspect-square flex items-center justify-center shadow-2xl border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-2xl"></div>
                <Factory className="w-32 h-32 text-gray-400 relative z-10" />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-lg shadow-red-500/30"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg shadow-blue-500/30"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">Our <span className="text-red-600">Services</span></h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive stainless steel solutions for the modern hospitality industry
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/60 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group hover:scale-105 h-full flex flex-col" onClick={() => setCurrentPage("kitchen-supplies")}>
                <CardHeader className="relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/20 to-transparent rounded-bl-3xl"></div>
                  <CardTitle className="text-red-600 relative z-10 text-lg sm:text-xl md:text-2xl">Kitchen Supplies</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 mb-4 text-sm sm:text-base md:text-lg">
                    Professional-grade kitchen equipment including prep tables, sinks, storage solutions, and cooking equipment.
                  </p>
                  <div className="mt-auto">
                    <Button variant="outline" size="sm" className="group-hover:bg-red-50 group-hover:border-red-200 group-hover:text-red-600 transition-all duration-300 text-xs sm:text-sm md:text-base">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/60 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group hover:scale-105 h-full flex flex-col" onClick={() => setCurrentPage("qsr-equipment")}>
                <CardHeader className="relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-3xl"></div>
                  <CardTitle className="text-red-600 relative z-10 text-lg sm:text-xl md:text-2xl">QSR Equipment</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 mb-4 text-sm sm:text-base md:text-lg">
                    Quick Service Restaurant equipment designed for efficiency, durability, and high-volume operations.
                  </p>
                  <div className="mt-auto">
                    <Button variant="outline" size="sm" className="group-hover:bg-red-50 group-hover:border-red-200 group-hover:text-red-600 transition-all duration-300 text-xs sm:text-sm md:text-base">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/60 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group hover:scale-105 h-full flex flex-col" onClick={() => setCurrentPage("tabletop-supplies")}>
                <CardHeader className="relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/20 to-transparent rounded-bl-3xl"></div>
                  <CardTitle className="text-red-600 relative z-10 text-lg sm:text-xl md:text-2xl">Table Top Supplies</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 mb-4 text-sm sm:text-base md:text-lg">
                    Elegant serving solutions including chafing dishes, serving trays, and presentation equipment.
                  </p>
                  <div className="mt-auto">
                    <Button variant="outline" size="sm" className="group-hover:bg-red-50 group-hover:border-red-200 group-hover:text-red-600 transition-all duration-300 text-xs sm:text-sm md:text-base">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">About <span className="text-red-600">Apex Industries</span></h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6">Established in 1993, driven by trust, and defined by stainless steel craftsmanship.</p>
              <h3 className="text-base sm:text-lg md:text-xl font-light text-foreground mb-6">
                What We Do,
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-xs sm:text-sm md:text-base text-justify">
                  At Apex Industries, we’re redefining the stainless steel experience. With precision craftsmanship and a commitment to excellence, we provide end-to-end stainless steel products tailored for the food service and hospitality industries.
                </p>
                <p className="text-xs sm:text-sm md:text-base text-justify">
                  From premium tabletop supplies to robust QSR equipment, our offerings are built to last, perform, and impress. Our in-house team brings years of expertise in custom fabrication, ensuring every product is made to match your exact specifications.
                </p>
                <p className="text-xs sm:text-sm md:text-base text-justify">
                  We don’t just deliver equipment, we deliver trust. With a strong focus on quality assurance and technical support, we ensure your operations run smoothly long after installation.
                </p>
              </div>
              <Button onClick={() => setCurrentPage("about")} className="mt-6 bg-red-600 hover:bg-red-700 text-xs sm:text-sm md:text-base">
                Learn Our Story
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                <Users className="w-32 h-32 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Client Carousel */}
      <LogoCarousel />

      <Contact contactRef={contactRef} />
    </div>
  );
};

export default HomePage; 