import { ServiceFeature } from '@/types';

export const services: ServiceFeature[] = [
  {
    title: "Kitchen Supplies",
    description: "Professional-grade stainless steel kitchen equipment designed for commercial use",
    badges: ["Professional Grade", "Hygienic Design", "Durable Construction", "Easy Maintenance"],
    serviceFeatures: [
      {
        icon: "ChefHat",
        title: "Professional Tools",
        description: "Chef-grade equipment for commercial use"
      },
      {
        icon: "Shield",
        title: "Food Safe",
        description: "Hygienic materials and design"
      },
      {
        icon: "Wrench",
        title: "Durable Build",
        description: "Built to withstand daily use"
      },
      {
        icon: "Zap",
        title: "Efficient Design",
        description: "Optimized for kitchen workflow"
      }
    ],
    products: [
      {
        category: "Products",
        items: [
          {
            name: "Prep Tables",
            description: "Heavy-duty stainless steel prep tables",
            specs: "304 SS, adjustable shelving, food-grade surface"
          },
          {
            name: "Cutting Boards",
            description: "Professional cutting surfaces",
            specs: "HDPE material, non-slip base, various sizes"
          },
          {
            name: "Commercial Sinks",
            description: "Food-grade stainless steel sinks",
            specs: "304 SS, multiple compartments, easy cleaning"
          },
          {
            name: "Storage Racks",
            description: "Organized storage systems",
            specs: "Modular design, easy assembly, rust-resistant"
          },
          {
            name: "Work Stations",
            description: "Complete workstation setups",
            specs: "Integrated storage, tool holders, mobile options"
          },
          {
            name: "Kitchen Tools",
            description: "Professional kitchen utensils",
            specs: "Stainless steel construction, ergonomic design"
          },
          {
            name: "Food Containers",
            description: "Hygienic food storage solutions",
            specs: "Food-grade plastic, stackable, airtight seals"
          },
          {
            name: "Kitchen Accessories",
            description: "Essential kitchen equipment",
            specs: "Durable materials, commercial grade quality"
          }
        ]
      }
    ],
    photoGallery: [
      {
        id: 7,
        title: "Foot Operated Sink",
        image: "/images/services/kitchen/foot-operated-sink.png",
        description: "Stainless steel foot-operated sink for hygienic hand washing"
      },
      {
        id: 1,
        title: "Professional Prep Tables",
        image: "/images/services/kitchen/prep-tables.jpg",
        description: "Heavy-duty stainless steel prep tables with adjustable shelving"
      },
      {
        id: 2,
        title: "Commercial Sinks",
        image: "/images/services/kitchen/commercial-sinks.jpg",
        description: "Food-grade stainless steel sinks for commercial kitchens"
      },
      {
        id: 3,
        title: "Storage Solutions",
        image: "/images/services/kitchen/storage-solutions.jpg",
        description: "Organized storage systems and work stations"
      },
      {
        id: 4,
        title: "Kitchen Equipment",
        image: "/images/services/kitchen/kitchen-equipment.jpg",
        description: "Complete kitchen equipment and tools"
      },
      {
        id: 5,
        title: "Cutting Boards",
        image: "/images/services/kitchen/cutting-boards.jpg",
        description: "Professional cutting surfaces for food preparation"
      },
      {
        id: 6,
        title: "Work Stations",
        image: "/images/services/kitchen/work-stations.jpg",
        description: "Complete workstation setups with integrated storage"
      }
    ],
    cta: {
      title: "Ready to Equip Your Kitchen?",
      description: "Get professional kitchen supplies and tools to enhance your culinary operations. Contact us for bulk orders and custom solutions tailored to your kitchen needs.",
      primaryButton: "Get Quote",
      secondaryButton: "Call Now"
    },
    features: [
      "Heavy-duty prep tables with adjustable shelving",
      "Commercial-grade stainless steel sinks",
      "Storage solutions and work stations",
      "Custom kitchen equipment design",
      "Food-grade stainless steel construction",
      "Easy-to-clean surfaces and maintenance",
      "Corrosion-resistant materials",
      "Compliance with health and safety standards"
    ]
  },
  {
    title: "QSR Equipment",
    description: "Quick Service Restaurant equipment built for efficiency and high-volume operations",
    badges: ["Fast Service", "Energy Efficient", "Easy Maintenance", "Commercial Grade"],
    serviceFeatures: [
      {
        icon: "Clock",
        title: "Fast Service",
        description: "Optimized for quick turnaround times"
      },
      {
        icon: "Flame",
        title: "High Performance",
        description: "Maximum efficiency and output"
      },
      {
        icon: "Shield",
        title: "Durable Build",
        description: "Built to last in demanding environments"
      },
      {
        icon: "Settings",
        title: "Easy Operation",
        description: "User-friendly controls and maintenance"
      }
    ],
    products: [
      {
        category: "Products",
        items: [
          {
            name: "Grills & Griddles",
            description: "High-speed cooking equipment",
            specs: "Gas/electric, temperature control, easy cleaning"
          },
          {
            name: "Fryers",
            description: "Commercial deep fryers",
            specs: "Oil filtration, digital controls, safety features"
          },
          {
            name: "Display Cases",
            description: "Temperature-controlled food display units",
            specs: "304 SS, adjustable shelves, glass doors"
          },
          {
            name: "Beverage Stations",
            description: "Multi-function drink preparation systems",
            specs: "304 SS, multiple beverage options, easy cleaning"
          },
          {
            name: "Food Warmers",
            description: "Temperature-controlled food holding equipment",
            specs: "304 SS, adjustable temperature, digital controls"
          },
          {
            name: "Service Counters",
            description: "Efficient service counter setups for QSR operations",
            specs: "304 SS, multiple workstations, easy maintenance"
          },
          {
            name: "Order Stations",
            description: "Streamlined order processing systems",
            specs: "Digital displays, multiple payment options, easy interface"
          },
          {
            name: "QSR Accessories",
            description: "Essential QSR equipment accessories",
            specs: "Durable construction, easy maintenance, commercial grade"
          }
        ]
      }
    ],
    photoGallery: [
      {
        id: 1,
        title: "QSR Grills & Griddles",
        image: "/images/services/qsr/grills-griddles.jpg",
        description: "High-speed cooking equipment for quick service"
      },
      {
        id: 2,
        title: "Commercial Fryers",
        image: "/images/services/qsr/commercial-fryers.jpg",
        description: "Professional deep fryers with oil filtration"
      },
      {
        id: 3,
        title: "Display Cases",
        image: "/images/services/qsr/display-cases.jpg",
        description: "Temperature-controlled food display units"
      },
      {
        id: 4,
        title: "Beverage Stations",
        image: "/images/services/qsr/beverage-stations.jpg",
        description: "Multi-function drink preparation systems"
      },
      {
        id: 5,
        title: "Food Warmers",
        image: "/images/services/qsr/food-warmers.jpg",
        description: "Temperature-controlled food holding equipment"
      },
      {
        id: 6,
        title: "Service Counters",
        image: "/images/services/qsr/service-counters.jpg",
        description: "Efficient service counter setups for QSR operations"
      }
    ],
    cta: {
      title: "Ready to Optimize Your QSR Operations?",
      description: "Get expert consultation and custom solutions to maximize your restaurant's efficiency and profitability with our professional QSR equipment.",
      primaryButton: "Get Quote",
      secondaryButton: "Call Now"
    },
    features: [
      "High-speed food preparation equipment",
      "Efficient serving and display solutions",
      "Durable construction for heavy use",
      "Space-optimized designs",
      "Easy maintenance and cleaning",
      "Temperature control systems",
      "Modular and scalable solutions",
      "Energy-efficient operations"
    ]
  },
  {
    title: "Table Top Supplies",
    description: "Elegant serving solutions that enhance your restaurant's presentation",
    badges: ["SS-304 Stainless Steel", "Commercial Grade", "Anti-tarnish"],
    serviceFeatures: [
      {
        icon: "ChefHat",
        title: "Professional Grade",
        description: "Built to withstand commercial kitchen demands"
      },
      {
        icon: "Coffee",
        title: "Heat Resistant",
        description: "Perfect for hot beverages and food service"
      },
      {
        icon: "Wine",
        title: "Elegant Design",
        description: "Sophisticated appearance for fine dining"
      },
      {
        icon: "Soup",
        title: "Versatile Use",
        description: "Suitable for all types of food service"
      }
    ],
    products: [
      {
        category: "Products",
        items: [
          {
            name: "Chafing Dishes",
            description: "Professional food warmers",
            specs: "304 SS, fuel gel compatible, elegant finish"
          },
          {
            name: "Serving Trays",
            description: "Elegant presentation trays",
            specs: "Mirror finish, non-slip base, various sizes"
          },
          {
            name: "Food Warmers",
            description: "Temperature-controlled serving units",
            specs: "304 SS, adjustable temperature, digital controls"
          },
          {
            name: "Display Platters",
            description: "Beautiful food presentation platters",
            specs: "Mirror finish, various sizes, elegant design"
          },
          {
            name: "Buffet Equipment",
            description: "Complete buffet and catering equipment",
            specs: "304 SS, modular design, easy assembly"
          },
          {
            name: "Serving Utensils",
            description: "Professional serving utensils and accessories",
            specs: "Stainless steel construction, ergonomic design"
          },
          {
            name: "Tableware Sets",
            description: "Complete tableware solutions",
            specs: "Commercial grade, dishwasher safe, elegant finish"
          },
          {
            name: "Catering Equipment",
            description: "Professional catering and event equipment",
            specs: "Portable design, easy setup, durable construction"
          }
        ]
      }
    ],
    photoGallery: [
      {
        id: 1,
        title: "Chafing Dishes",
        image: "/images/services/tabletop/chafing-dishes.jpg",
        description: "Professional food warmers with elegant finish"
      },
      {
        id: 2,
        title: "Serving Trays",
        image: "/images/services/tabletop/serving-trays.jpg",
        description: "Mirror-finish presentation trays"
      },
      {
        id: 3,
        title: "Food Warmers",
        image: "/images/services/tabletop/food-warmers.jpg",
        description: "Temperature-controlled serving units"
      },
      {
        id: 4,
        title: "Display Platters",
        image: "/images/services/tabletop/display-platters.jpg",
        description: "Beautiful food presentation platters"
      },
      {
        id: 5,
        title: "Buffet Equipment",
        image: "/images/services/tabletop/buffet-equipment.jpg",
        description: "Complete buffet and catering equipment"
      },
      {
        id: 6,
        title: "Serving Utensils",
        image: "/images/services/tabletop/serving-utensils.jpg",
        description: "Professional serving utensils and accessories"
      }
    ],
    cta: {
      title: "Ready to Upgrade Your Table Top Supplies?",
      description: "Contact our team for custom quotes, bulk orders, and professional consultation to find the perfect tableware solutions for your establishment.",
      primaryButton: "Get Quote",
      secondaryButton: "Call Now"
    },
    features: [
      "Premium chafing dishes and warmers",
      "Elegant serving trays and platters",
      "Buffet and catering equipment",
      "Custom serving solutions",
      "Mirror-finish stainless steel",
      "Heat-resistant construction",
      "Professional presentation quality",
      "Easy storage and transport"
    ]
  }
]; 