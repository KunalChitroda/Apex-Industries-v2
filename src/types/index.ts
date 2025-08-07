export interface Logo {
  name: string;
  id: number;
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  rating: number;
  text: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface ServiceFeature {
  slug: string;
  title: string;
  description: string;
  features: string[];
  badges: string[];
  serviceFeatures: ServiceFeatureItem[];
  products: ProductCategory[];
  photoGallery: PhotoGalleryItem[];
  cta: CTASection;
}

export interface ServiceFeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProductCategory {
  category: string;
  items: ProductItem[];
}

export interface ProductItem {
  name: string;
  description: string;
  specs: string;
}

export interface CTASection {
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
}

export interface PhotoGalleryItem {
  id: number;
  title: string;
  image: string;
  description: string;
} 