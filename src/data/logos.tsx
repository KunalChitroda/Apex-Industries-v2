import React from 'react';
import Image from 'next/image';
import { Logo } from '@/types';

// Client Logo Components using actual images
export const ClientLogo1: React.FC = () => (
  <Image
    src="/images/logos/client_logo/mahalaxmi.png"
    alt="Mahalaxmi"
    width={150}
    height={60}
    className="object-contain"
  />
);

export const ClientLogo2: React.FC = () => (
  <Image
    src="/images/logos/client_logo/subway.png"
    alt="Subway"
    width={150}
    height={60}
    className="object-contain"
  />
);

export const ClientLogo3: React.FC = () => (
  <Image
    src="/images/logos/client_logo/belgian.png"
    alt="Belgian"
    width={150}
    height={60}
    className="object-contain"
  />
);

export const ClientLogo4: React.FC = () => (
  <Image
    src="/images/logos/client_logo/prashant_corner.png"
    alt="Prashant Corner"
    width={150}
    height={60}
    className="object-contain"
  />
);

export const ClientLogo5: React.FC = () => (
  <Image
    src="/images/logos/client_logo/joshi.png"
    alt="Joshi"
    width={150}
    height={60}
    className="object-contain"
  />
);

export const ClientLogo6: React.FC = () => (
  <Image
    src="/images/logos/client_logo/murlidhar.png"
    alt="Murlidhar"
    width={150}
    height={60}
    className="object-contain"
  />
);

export const ClientLogo7: React.FC = () => (
  <Image
    src="/images/logos/client_logo/dmart.png"
    alt="DMart"
    width={150}
    height={60}
    className="object-contain"
  />
);

export const ClientLogo8: React.FC = () => (
  <Image
    src="/images/logos/client_logo/dominos.png"
    alt="Domino's"
    width={150}
    height={60}
    className="object-contain"
  />
);

// Fallback SVG components (in case images are not available)
export const SampleLogo1: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 40" {...props}>
    <rect width="100" height="40" fill="#ff0000" rx="5" />
    <text x="50" y="25" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
      CLIENT 1
    </text>
  </svg>
);

export const SampleLogo2: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 40" {...props}>
    <rect width="100" height="40" fill="#0066cc" rx="5" />
    <text x="50" y="25" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
      CLIENT 2
    </text>
  </svg>
);

export const SampleLogo3: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 40" {...props}>
    <rect width="100" height="40" fill="#00aa44" rx="5" />
    <text x="50" y="25" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
      CLIENT 3
    </text>
  </svg>
);

export const SampleLogo4: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 40" {...props}>
    <rect width="100" height="40" fill="#ff6600" rx="5" />
    <text x="50" y="25" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
      CLIENT 4
    </text>
  </svg>
);

export const SampleLogo5: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 40" {...props}>
    <rect width="100" height="40" fill="#9900cc" rx="5" />
    <text x="50" y="25" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
      CLIENT 5
    </text>
  </svg>
);

export const SampleLogo6: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 40" {...props}>
    <rect width="100" height="40" fill="#cc9900" rx="5" />
    <text x="50" y="25" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
      CLIENT 6
    </text>
  </svg>
);

// Client logos array with actual client names
export const clientLogos: Logo[] = [
  { name: "Mahalaxmi", id: 1, img: ClientLogo1 },
  { name: "Subway", id: 2, img: ClientLogo2 },
  { name: "Belgian", id: 3, img: ClientLogo3 },
  { name: "Prashant Corner", id: 4, img: ClientLogo4 },
  { name: "Joshi", id: 5, img: ClientLogo5 },
  { name: "Murlidhar", id: 6, img: ClientLogo6 },
  { name: "DMart", id: 7, img: ClientLogo7 },
  { name: "Domino's", id: 8, img: ClientLogo8 },
];

// Fallback logos array (if you want to use SVGs instead)
export const fallbackClientLogos: Logo[] = [
  { name: "Client 1", id: 1, img: SampleLogo1 },
  { name: "Client 2", id: 2, img: SampleLogo2 },
  { name: "Client 3", id: 3, img: SampleLogo3 },
  { name: "Client 4", id: 4, img: SampleLogo4 },
  { name: "Client 5", id: 5, img: SampleLogo5 },
  { name: "Client 6", id: 6, img: SampleLogo6 },
]; 