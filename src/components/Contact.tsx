"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FORMSPREEE_CONFIG } from "@/config/formspree";

interface ContactProps {
  contactRef: React.RefObject<HTMLElement>;
}

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  projectDescription: string;
}

const Contact: React.FC<ContactProps> = ({ contactRef }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    city: '',
    service: '',
    projectDescription: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(FORMSPREEE_CONFIG.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          companyName: '',
          email: '',
          phone: '',
          city: '',
          service: '',
          projectDescription: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={contactRef} data-contact-section className="relative py-20 bg-gradient-to-br from-gray-50/80 via-white/60 to-red-50/40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">Get In <span className="text-red-600">Touch</span></h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Ready to discuss your stainless steel equipment needs?
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/70 backdrop-blur-xl border-white/30 shadow-2xl p-0 sm:p-4 md:p-4 lg:p-8 xl:p-8">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName" className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">Full Name<span className="text-red-500">*</span></Label>
                      <Input 
                        id="fullName" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your Full name" 
                        className="bg-white border border-gray-300 focus:border-red-400 transition-all duration-300" 
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="companyName" className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">Company Name<span className="text-red-500">*</span></Label>
                      <Input 
                        id="companyName" 
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Enter your Company name" 
                        className="bg-white border border-gray-300 focus:border-red-400 transition-all duration-300" 
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">Email Address<span className="text-red-500">*</span></Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@company.com" 
                      className="bg-white border border-gray-300 focus:border-red-400 transition-all duration-300" 
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">Phone Number<span className="text-red-500">*</span></Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      type="number"
                      minLength={10}
                      maxLength={10}
                      pattern="[0-9]*"
                      title="Please enter a valid phone number"
                      inputMode="numeric"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX" 
                      className="bg-white border border-gray-300 focus:border-red-400 transition-all duration-300" 
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="city" className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">City<span className="text-red-500">*</span></Label>
                    <Input 
                      id="city" 
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g. Mumbai" 
                      className="bg-white border border-gray-300 focus:border-red-400 transition-all duration-300" 
                      required
                    />
                  </div>
                  </div>                
                  <div>
                    <Label htmlFor="service" className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">Service Interest</Label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:border-red-400 focus:outline-none transition-all duration-300"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Kitchen Supplies">Kitchen Supplies</option>
                      <option value="QSR Equipment">QSR Equipment</option>
                      <option value="Table Top Supplies">Table Top Supplies</option>
                      <option value="Custom Solutions">Custom Solutions</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="projectDescription" className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">Project Description<span className="text-red-500">*</span></Label>
                    <Textarea 
                      id="projectDescription" 
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      placeholder="Describe your project requirements..." 
                      rows={4} 
                      className="bg-white border border-gray-300 focus:border-red-400 transition-all duration-300" 
                      required
                    />
                  </div>
                  {submitStatus === 'success' && (
                    <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm sm:text-base md:text-lg text-green-800">Message sent successfully! We'll get back to you soon.</span>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      <span className="text-sm sm:text-base md:text-lg text-red-800">Something went wrong. Please try again.</span>
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/30 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-2 text-gray-500">or</span>
                    </div>
                  </div>
                  
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => window.location.href = "tel:+918591704476"}
                    className="w-full border-gray-300 hover:border-red-400 hover:text-red-600 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Instead
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden shadow-xl border border-white/30">
              <iframe
                title="Apex Industries Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d395.93052315017275!2d72.87218565029718!3d19.249847904599893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0ec82de2033%3A0xc2d7349531eac522!2sApex%20Industries!5e0!3m2!1sen!2sin!4v1752260470917!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64"
              ></iframe>
            </div>
            <Card className="bg-white/60 backdrop-blur-xl border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 p-6 group">
              <CardContent className="p-6">
                <h4 className="text-base sm:text-lg md:text-xl font-medium text-foreground mb-4">What to Include</h4>
                <ul className="space-y-2 text-xs sm:text-sm md:text-base text-muted-foreground">
                  <li>• Project specifications and requirements</li>
                  <li>• Industry type and application details</li>
                  <li>• Timeline and delivery requirements</li>
                  <li>• Budget range and project scale</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;