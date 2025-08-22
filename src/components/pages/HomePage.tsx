'use client';

import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import LogoCarousel from '@/components/LogoCarousel';
import Contact from '@/components/Contact';

const HomePage: React.FC = () => {
  const router = useRouter();
  const contactRef = useRef<HTMLElement>(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateTo = (section: string) => {
    router.push(`/${section}`);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero/bg-image.png)' }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl" />
        <div className="container mx-auto px-8 relative z-10 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Apex Industries
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Leading manufacturer of premium stainless steel kitchen equipment, QSR solutions, and table top supplies. Serving the hospitality industry with unmatched quality and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/30 transform hover:scale-105 transition-all duration-300 text-base sm:text-lg md:text-xl lg:text-2xl py-3 sm:py-4 md:py-6 h-12 sm:h-14 md:h-14"
                onClick={scrollToContact}
              >
                Get Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 h-12 sm:h-14 md:h-14"
                onClick={() => navigateTo('about')}
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
              Our <span className="text-red-600">Services</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive stainless steel solutions for the modern hospitality industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                title: 'Kitchen Supplies',
                description:
                  'Professional-grade kitchen equipment including prep tables, sinks, storage solutions, and cooking equipment.',
                section: 'services/kitchen-supplies',
              },
              {
                title: 'QSR Equipment',
                description:
                  'Quick Service Restaurant equipment designed for efficiency, durability, and high-volume operations.',
                section: 'services/qsr-equipment',
              },
              {
                title: 'Table Top Supplies',
                description:
                  'Elegant serving solutions including chafing dishes, serving trays, and presentation equipment.',
                section: 'services/tabletop-supplies',
              },
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                viewport={{ once: true }}
              >
                <Card
                  className="bg-white/60 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group hover:scale-105 h-full flex flex-col"
                  onClick={() => navigateTo(service.section)}
                >
                  <CardHeader className="relative">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/20 to-transparent rounded-bl-3xl"></div>
                    <CardTitle className="text-red-600 relative z-10 text-lg sm:text-xl md:text-2xl">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-gray-600 mb-4 text-sm sm:text-base md:text-lg">
                      {service.description}
                    </p>
                    <div className="mt-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:bg-red-50 group-hover:border-red-200 group-hover:text-red-600 transition-all duration-300 text-xs sm:text-sm md:text-base"
                      >
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white" data-section="about">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              About <span className="text-red-600">Apex Industries</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6">
              Established in 1993, driven by trust, and defined by stainless steel craftsmanship.
            </p>
            <h3 className="text-base sm:text-lg md:text-xl font-light text-foreground mb-6">What We Do,</h3>
            <div className="space-y-4 text-muted-foreground text-xs sm:text-sm md:text-base text-justify">
              <p>
                At Apex Industries, we’re redefining the stainless steel experience. With precision craftsmanship and a commitment to excellence, we provide end-to-end stainless steel products tailored for the food service and hospitality industries.
              </p>
              <p>
                From premium tabletop supplies to robust QSR equipment, our offerings are built to last, perform, and impress. Our in-house team brings years of expertise in custom fabrication, ensuring every product is made to match your exact specifications.
              </p>
              <p>
                We don’t just deliver equipment, we deliver trust. With a strong focus on quality assurance and technical support, we ensure your operations run smoothly long after installation.
              </p>
            </div>
            <Button
              onClick={() => navigateTo('about')}
              className="mt-6 bg-red-600 hover:bg-red-700 text-xs sm:text-sm md:text-base"
            >
              Learn Our Story
            </Button>
          </div>
          <div className="relative">
            <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
              <Users className="w-32 h-32 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <LogoCarousel />

      {/* Contact Section */}
      <Contact contactRef={contactRef} data-section="contact" />
    </div>
  );
};

export default HomePage;
