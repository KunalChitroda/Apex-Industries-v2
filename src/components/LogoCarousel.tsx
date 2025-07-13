"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clientLogos } from "@/data/logos";

// Helper to extract src from logo.img component
const getLogoSrc = (logo: any) => {
  if (logo.name === "Mahalaxmi") return "/images/logos/client_logo/mahalaxmi.png";
  if (logo.name === "Subway") return "/images/logos/client_logo/subway.png";
  if (logo.name === "Belgian") return "/images/logos/client_logo/belgian.png";
  if (logo.name === "Prashant Corner") return "/images/logos/client_logo/prashant_corner.png";
  if (logo.name === "Joshi") return "/images/logos/client_logo/joshi.png";
  if (logo.name === "Murlidhar") return "/images/logos/client_logo/murlidhar.png";
  if (logo.name === "DMart") return "/images/logos/client_logo/dmart.png";
  if (logo.name === "Domino's") return "/images/logos/client_logo/dominos.png";
  return "";
};

// Convert clientLogos to the format expected by the new carousel
const clients = clientLogos.map(logo => ({
  name: logo.name,
  logo: getLogoSrc(logo)
}));

const chunkArray = (arr: typeof clients, size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const LogoCarousel: React.FC = () => {
  const [mobileApiReady, setMobileApiReady] = useState(false);
  const [desktopApiReady, setDesktopApiReady] = useState(false);
  const [isMobileHovered, setIsMobileHovered] = useState(false);
  const [isDesktopHovered, setIsDesktopHovered] = useState(false);
  const mobileCarouselApi = useRef<any>(null);
  const desktopCarouselApi = useRef<any>(null);

  // Set apiReady when carouselApi is set
  const handleSetMobileApi = (api: any) => {
    mobileCarouselApi.current = api;
    setMobileApiReady(true);
  };

  const handleSetDesktopApi = (api: any) => {
    desktopCarouselApi.current = api;
    setDesktopApiReady(true);
  };

  // Auto-scroll effect for mobile (2 seconds)
  useEffect(() => {
    if (!mobileApiReady || !mobileCarouselApi.current || isMobileHovered) return;
    const interval = setInterval(() => {
      mobileCarouselApi.current.scrollNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [mobileApiReady, isMobileHovered]);

  // Auto-scroll effect for desktop (2 seconds)
  useEffect(() => {
    if (!desktopApiReady || !desktopCarouselApi.current || isDesktopHovered) return;
    const interval = setInterval(() => {
      desktopCarouselApi.current.scrollNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [desktopApiReady, isDesktopHovered]);

  // 2 at a time for mobile
  const mobileChunks = chunkArray(clients, 2);
  // 4 at a time for desktop
  const desktopChunks = chunkArray(clients, 4);

  return (
    <section className="py-10 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
          Trusted by Industry Leaders
          </h2>
        </div>
        
        {/* Mobile Carousel */}
        <div className="block sm:hidden relative group">
          <Carousel 
            setApi={handleSetMobileApi} 
            opts={{ loop: true }}
            onMouseEnter={() => setIsMobileHovered(true)}
            onMouseLeave={() => setIsMobileHovered(false)}
            className="relative"
          >
            <CarouselContent>
              {mobileChunks.map((chunk, idx) => (
                <CarouselItem key={idx} className="flex gap-6 justify-center">
                  {chunk.map((client) => (
                    <div key={client.name} className="flex flex-col items-center justify-center w-1/2 group/item">
                      <div className="relative overflow-hidden rounded-lg p-6 bg-white/50 backdrop-blur-sm border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300 group-hover/item:scale-105 group-hover/item:bg-white/80 w-full h-36 flex flex-col items-center justify-center">
                        <img 
                          src={client.logo} 
                          alt={client.name + ' logo'} 
                          className="h-16 w-auto max-w-full object-contain transition-all duration-300 group-hover/item:scale-110 mb-2" 
                        />
                        <span className="text-sm text-gray-900 font-medium text-center truncate w-full">{client.name}</span>
                      </div>
                    </div>
                  ))}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/80 hover:bg-white border-gray-300 shadow-lg">
              <ChevronLeft className="h-4 w-4" />
            </CarouselPrevious>
            <CarouselNext className="right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/80 hover:bg-white border-gray-300 shadow-lg">
              <ChevronRight className="h-4 w-4" />
            </CarouselNext>
          </Carousel>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden sm:block relative group">
          <Carousel 
            setApi={handleSetDesktopApi} 
            opts={{ loop: true }}
            onMouseEnter={() => setIsDesktopHovered(true)}
            onMouseLeave={() => setIsDesktopHovered(false)}
            className="relative"
          >
            <CarouselContent>
              {desktopChunks.map((chunk, idx) => (
                <CarouselItem key={idx} className="flex gap-8 justify-center">
                  {chunk.map((client) => (
                    <div key={client.name} className="flex flex-col items-center justify-center w-1/4 group/item">
                      <div className="relative overflow-hidden rounded-lg p-6 bg-white/50 backdrop-blur-sm border border-gray-200/50 shadow-sm hover:shadow-lg transition-all duration-300 group-hover/item:scale-105 group-hover/item:bg-white/80 group-hover/item:-translate-y-1 w-full h-32 flex flex-col items-center justify-center">
                        <img 
                          src={client.logo} 
                          alt={client.name + ' logo'} 
                          className="h-16 w-auto max-w-full object-contain transition-all duration-300 group-hover/item:scale-110 mb-2" 
                        />
                        <span className="text-sm text-gray-900 font-medium text-center">{client.name}</span>
                      </div>
                    </div>
                  ))}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white border-gray-300 shadow-lg hover:shadow-xl">
              <ChevronLeft className="h-5 w-5" />
            </CarouselPrevious>
            <CarouselNext className="right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white border-gray-300 shadow-lg hover:shadow-xl">
              <ChevronRight className="h-5 w-5" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel; 