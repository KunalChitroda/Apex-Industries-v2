# 📸 Image Management Guide

## 📁 Folder Structure

```
public/
├── images/
│   ├── logos/           # Company logos and client logos
│   │   ├── apex-logo.png
│   │   ├── client-1.png
│   │   ├── client-2.png
│   │   └── ...
│   ├── team/            # Team member photos
│   │   ├── rajesh-kumar.jpg
│   │   ├── priya-sharma.jpg
│   │   └── ...
│   ├── hero/            # Hero section images
│   │   ├── hero-bg.jpg
│   │   └── factory.jpg
│   └── services/        # Service-related images
│       ├── kitchen-supplies.jpg
│       ├── qsr-equipment.jpg
│       └── tabletop-supplies.jpg
└── favicon.ico          # Website favicon
```

## 🖼️ Image Upload Instructions

### 1. **Company Logo**
- **Location**: `public/images/logos/apex-logo.png`
- **Recommended size**: 200x80px (SVG preferred for scalability)
- **Format**: PNG, SVG, or WebP
- **Usage**: Navigation bar and footer

### 2. **Client Logos**
- **Location**: `public/images/logos/client-1.png`, `client-2.png`, etc.
- **Recommended size**: 150x60px
- **Format**: PNG with transparent background
- **Usage**: Client carousel section

### 3. **Team Photos**
- **Location**: `public/images/team/rajesh-kumar.jpg`, etc.
- **Recommended size**: 400x400px (square)
- **Format**: JPG or WebP
- **Usage**: About page team section

### 4. **Hero Images**
- **Location**: `public/images/hero/`
- **Recommended size**: 1920x1080px
- **Format**: JPG or WebP
- **Usage**: Background images for hero sections

### 5. **Service Images**
- **Location**: `public/images/services/`
- **Recommended size**: 800x600px
- **Format**: JPG or WebP
- **Usage**: Service pages and cards

## 🔧 How to Use Images in Code

### Using Next.js Image Component (Recommended)

```tsx
import Image from 'next/image';

// Company logo
<Image
  src="/images/logos/apex-logo.png"
  alt="Apex Industries Logo"
  width={200}
  height={80}
  priority
/>

// Team member photo
<Image
  src="/images/team/rajesh-kumar.jpg"
  alt="Rajesh Kumar - Founder & CEO"
  width={400}
  height={400}
  className="rounded-full"
/>

// Client logo
<Image
  src="/images/logos/client-1.png"
  alt="Client 1"
  width={150}
  height={60}
/>
```

### Using Regular HTML img Tag

```tsx
// For simple images
<img 
  src="/images/logos/apex-logo.png" 
  alt="Apex Industries Logo"
  className="w-32 h-12"
/>
```

## 📝 Updating Image References

### 1. **Update Logo Components**

Replace the current SVG logos in `src/data/logos.tsx`:

```tsx
// Before (current SVG)
export const SampleLogo1: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 40" {...props}>
    // SVG content
  </svg>
);

// After (using actual logo)
import Image from 'next/image';

export const ClientLogo1: React.FC = () => (
  <Image
    src="/images/logos/client-1.png"
    alt="Client 1"
    width={150}
    height={60}
    className="object-contain"
  />
);
```

### 2. **Update Team Data**

In `src/data/team.ts`:

```tsx
export const teamMembers: TeamMember[] = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    image: "/images/team/rajesh-kumar.jpg", // Updated path
    description: "20+ years experience in stainless steel manufacturing"
  },
  // ... other team members
];
```

### 3. **Update Navigation Logo**

In `src/components/Navigation.tsx`:

```tsx
// Replace the current div with logo
<div className="flex items-center space-x-3">
  <Image
    src="/images/logos/apex-logo.png"
    alt="Apex Industries"
    width={40}
    height={40}
    className="rounded-xl"
  />
  <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
    Apex Industries
  </span>
</div>
```

## 🎨 Image Optimization Tips

### 1. **File Formats**
- **Logos**: Use SVG for scalability, PNG for transparency
- **Photos**: Use WebP for better compression, JPG as fallback
- **Icons**: Use SVG or PNG

### 2. **Sizing**
- **Hero images**: 1920x1080px (16:9 ratio)
- **Team photos**: 400x400px (square)
- **Logos**: Maintain aspect ratio, max 200px width
- **Service images**: 800x600px (4:3 ratio)

### 3. **Compression**
- Use tools like TinyPNG, ImageOptim, or Squoosh
- Aim for file sizes under 200KB for photos
- Under 50KB for logos

### 4. **Naming Convention**
- Use kebab-case: `apex-logo.png`, `rajesh-kumar.jpg`
- Include dimensions if needed: `hero-bg-1920x1080.jpg`
- Use descriptive names

## 🚀 Quick Start Steps

1. **Upload your company logo** to `public/images/logos/apex-logo.png`
2. **Upload client logos** to `public/images/logos/client-*.png`
3. **Upload team photos** to `public/images/team/`
4. **Update the code** to reference your actual images
5. **Test the website** to ensure images load correctly

## 📱 Responsive Images

For responsive images, use Next.js Image component with responsive classes:

```tsx
<Image
  src="/images/hero/factory.jpg"
  alt="Apex Industries Factory"
  width={1920}
  height={1080}
  className="w-full h-auto object-cover"
  priority
/>
```

## 🔍 Troubleshooting

### Common Issues:
1. **Images not loading**: Check file paths start with `/`
2. **Wrong size**: Use Next.js Image component with proper width/height
3. **Poor quality**: Use higher resolution images
4. **Slow loading**: Optimize image sizes and use WebP format

### Best Practices:
- Always include `alt` text for accessibility
- Use `priority` prop for above-the-fold images
- Optimize images before uploading
- Test on different screen sizes 