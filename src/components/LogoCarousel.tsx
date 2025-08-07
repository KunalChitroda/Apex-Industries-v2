"use client";

import React from "react";

// The logo data is now defined directly in the component
const clientLogos = [
  { name: "Mahalaxmi" },
  { name: "Subway" },
  { name: "Belgian" },
  { name: "Prashant Corner" },
  { name: "Joshi" },
  { name: "Murlidhar" },
  { name: "DMart" },
  { name: "Domino's" },
];

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

// Convert clientLogos to the format we need
const clients = clientLogos.map(logo => ({
  name: logo.name,
  logo: getLogoSrc(logo)
}));

const LogoCarousel: React.FC = () => {
  // Duplicate the clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-10 sm:py-16" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
            Trusted by Industry Leaders
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden group">
          {/* Gradient masks for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #FFFFFF, transparent)' }}></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #FFFFFF, transparent)' }}></div>
          
          {/* The scrolling track */}
          <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
            {duplicatedClients.map((client, index) => (
              <div 
                key={`${client.name}-${index}`}
                className="flex-shrink-0 p-4 sm:p-6"
                style={{ width: '350px' }} // Increased width for better logo visibility
              >
                <div className="relative overflow-hidden rounded-lg p-8 bg-white/50 backdrop-blur-sm border border-gray-200/50 shadow-sm hover:shadow-lg transition-all duration-300 group-hover/item:scale-105 group-hover/item:bg-white/80 group-hover/item:-translate-y-1 w-full h-48 flex flex-col items-center justify-center group/item">
                  <img 
                    src={client.logo} 
                    alt={client.name + ' logo'} 
                    className="h-20 w-auto max-w-full object-contain transition-all duration-300 group-hover/item:scale-110 mb-3" 
                  />
                  <span className="text-base text-gray-900 font-medium text-center truncate w-full">{client.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${350 * clients.length}px);
          }
        }
        
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: ${350 * duplicatedClients.length}px;
        }
        
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default LogoCarousel;