"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Factory, Users, Award, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { teamMembers } from "@/data/team";
import { testimonials } from "@/data/testimonials";

const AboutPage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6">About <span className="text-red-600">Apex Industries</span></h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering excellence in stainless steel manufacturing for over three decades
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 text-justify">
                Founded in 1993, Apex Industries began as a small workshop with a vision to revolutionize 
                the stainless steel equipment industry. Our founder, Dilip Chitroda, recognized the growing 
                need for high-quality, durable kitchen equipment in India's expanding hospitality sector.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 text-justify">
                From humble beginnings, we have grown into one of the region's most trusted manufacturers, 
                serving restaurants, hotels, and food service establishments with innovative solutions that 
                combine traditional craftsmanship with modern technology.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 text-justify">
                Today, our state-of-the-art manufacturing facility produces premium stainless steel equipment 
                that meets international quality standards while remaining accessible to businesses of all sizes.
              </p>
              <div className="grid grid-cols-2 gap-6 my-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-light text-primary mb-2">30+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-light text-primary mb-2">200+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Products Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-light text-primary mb-2">10+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-light text-primary mb-2">100%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Quality Assured</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                <img src="/images/hero/factory-front.png" alt="About Image" style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%', borderRadius: '10px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              The passionate professionals behind our success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-3 text-xs sm:text-sm md:text-base">{member.role}</p>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Trusted by businesses across the hospitality industry
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Card className="p-8">
                <CardContent>
                  <div className="flex items-center mb-4">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                      <Users className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">{testimonials[currentTestimonial].name}</div>
                      <div className="text-gray-600 text-xs sm:text-sm md:text-base">{testimonials[currentTestimonial].company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="flex justify-center mt-8 space-x-4">
                <Button variant="outline" size="sm" onClick={prevTestimonial}>
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={nextTestimonial}>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Unit */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-6">Our Manufacturing Unit</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 text-justify">
                Our state-of-the-art facility spans 3000 square feet and is equipped with the latest 
                technology for precision manufacturing and quality control.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center text-xs sm:text-sm md:text-base">
                  <Award className="w-5 h-5 text-red-600 mr-3" />
                  Advanced CNC Machinery
                </li>
                <li className="flex items-center text-xs sm:text-sm md:text-base">
                  <Award className="w-5 h-5 text-red-600 mr-3" />
                  In-house Quality Testing
                </li>
                <li className="flex items-center text-xs sm:text-sm md:text-base">
                  <Award className="w-5 h-5 text-red-600 mr-3" />
                  Skilled Workforce
                </li>
                <li className="flex items-center text-xs sm:text-sm md:text-base">
                  <Award className="w-5 h-5 text-red-600 mr-3" />
                  Monthly Production Capacity: 100+ Units
                </li>
                <li className="flex items-center text-xs sm:text-sm md:text-base">
                  <Award className="w-5 h-5 text-red-600 mr-3" />
                  Eco-friendly Manufacturing Processes
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                <img src="/images/hero/machine.png" alt="About Image" style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%', borderRadius: '10px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 