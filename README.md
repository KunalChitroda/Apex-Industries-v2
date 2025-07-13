# Apex Industries Website

A modern, responsive website for Apex Industries - a leading manufacturer of premium stainless steel kitchen equipment, QSR solutions, and table top supplies.

## 🚀 Features

- **Modern Design**: Beautiful, responsive design with smooth animations
- **Component-Based Architecture**: Modular React components for easy maintenance
- **TypeScript**: Full TypeScript support for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Smooth animations and transitions
- **Next.js 14**: Latest Next.js with App Router
- **Mobile-First**: Fully responsive design for all devices

## 📁 Project Structure

```
apex-industries-web/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and Tailwind imports
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Main page component
│   ├── components/
│   │   ├── ui/                  # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   └── label.tsx
│   │   ├── pages/               # Page components
│   │   │   ├── HomePage.tsx
│   │   │   ├── AboutPage.tsx
│   │   │   └── ServicePage.tsx
│   │   ├── Navigation.tsx       # Navigation component
│   │   ├── Footer.tsx           # Footer component
│   │   ├── Contact.tsx          # Contact form component
│   │   ├── LogoCarousel.tsx     # Animated logo carousel
│   │   └── ScrollToTop.tsx      # Scroll to top button
│   ├── data/                    # Static data
│   │   ├── logos.tsx            # Logo components and data
│   │   ├── testimonials.ts      # Customer testimonials
│   │   ├── team.ts              # Team member data
│   │   └── services.ts          # Service information
│   ├── lib/
│   │   └── utils.ts             # Utility functions
│   └── types/
│       └── index.ts             # TypeScript type definitions
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
└── README.md                    # Project documentation
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Radix UI** - Accessible UI primitives
- **Class Variance Authority** - Component variant management

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd apex-industries-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Component Architecture

### Core Components

1. **Navigation** - Responsive navigation with mobile menu
2. **HomePage** - Landing page with hero, services, and client carousel
3. **AboutPage** - Company story, team, and testimonials
4. **ServicePage** - Individual service details
5. **Contact** - Contact form and company information
6. **Footer** - Site footer with links and certifications
7. **LogoCarousel** - Animated client logo display
8. **ScrollToTop** - Smooth scroll to top functionality

### UI Components

- **Button** - Versatile button component with variants
- **Card** - Content container with header, content, and footer
- **Badge** - Status and label indicators
- **Input** - Form input fields
- **Textarea** - Multi-line text input
- **Label** - Form labels

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions

### Animations
- Smooth page transitions
- Scroll-triggered animations
- Interactive hover effects
- Logo carousel with staggered animations

### Performance
- Component memoization
- Optimized images and assets
- Efficient state management
- Lazy loading where appropriate

## 🎨 Design System

### Colors
- **Primary**: Red gradient (#dc2626 to #b91c1c)
- **Secondary**: Gray scale (#1f2937 to #374151)
- **Background**: White and light grays
- **Accent**: Blue and green for variety

### Typography
- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable fonts
- **UI**: Consistent font weights and sizes

### Spacing
- Consistent spacing scale
- Responsive padding and margins
- Grid-based layouts

## 📱 Pages

1. **Home** - Company overview and services
2. **About** - Company history, team, and testimonials
3. **Kitchen Supplies** - Professional kitchen equipment
4. **QSR Equipment** - Quick service restaurant solutions
5. **Table Top Supplies** - Serving and presentation equipment

## 🔧 Customization

### Adding New Services
1. Update `src/data/services.ts`
2. Add new service route in `src/app/page.tsx`
3. Create service-specific content

### Modifying Content
- Update data files in `src/data/`
- Modify component content directly
- Update contact information in components

### Styling Changes
- Modify Tailwind classes in components
- Update `tailwind.config.js` for custom styles
- Add custom CSS in `src/app/globals.css`

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with zero configuration

### Other Platforms
1. Build the project: `npm run build`
2. Start production server: `npm run start`
3. Deploy the `.next` folder to your hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

For questions or support, please contact:
- Email: info@apexindustries.com
- Phone: +91 98765 43210

---

Built with ❤️ for Apex Industries 