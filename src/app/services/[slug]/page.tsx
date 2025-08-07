"use client";
// app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { ServiceFeature } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
    Factory,
    Award,
    ChefHat,
    Shield,
    Wrench,
    Zap,
    Clock,
    Flame,
    Settings,
    Coffee,
    Wine,
    Soup,
    Phone,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import React, { useState, useEffect } from "react";

interface Props {
    params: { slug: string };
}

export default function ServicePage({ params }: Props) {
    const service: ServiceFeature | undefined = services.find(
        (item) => item.slug === params.slug
    );

    if (!service) return notFound();

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const photosPerPageDesktop = 4;
    const photosPerPageMobile = 1; // 1 row × 1 col
    const photosPerPage = isMobile ? photosPerPageMobile : photosPerPageDesktop;
    const totalPages = Math.ceil(service.photoGallery.length / photosPerPage);
    const showCarousel = service.photoGallery.length > photosPerPage;

    // Products display configuration
    const productsPerPageDesktop = 12; // 3 rows × 4 cols
    const productsPerPageMobile = 6; // 3 rows × 2 cols
    const productsPerPage = isMobile ? productsPerPageMobile : productsPerPageDesktop;

    const totalProducts = service.products.reduce((total, category) => total + category.items.length, 0);
    const totalProductPages = Math.ceil(totalProducts / productsPerPage);
    const showProductCarousel = totalProducts > productsPerPage;

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const getIcon = (iconName: string) => {
        const icons: { [key: string]: React.ComponentType<any> } = {
            ChefHat,
            Shield,
            Wrench,
            Zap,
            Clock,
            Flame,
            Settings,
            Coffee,
            Wine,
            Soup
        };
        return icons[iconName] || Factory;
    };

    const nextPhotos = () => {
        setCurrentPhotoIndex((prev) => (prev + 1) % totalPages);
    };

    const prevPhotos = () => {
        setCurrentPhotoIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const getCurrentPhotos = () => {
        const startIndex = currentPhotoIndex * photosPerPage;
        return service.photoGallery.slice(startIndex, startIndex + photosPerPage);
    };

    const nextProducts = () => {
        setCurrentProductIndex((prev) => (prev + 1) % totalProductPages);
    };

    const prevProducts = () => {
        setCurrentProductIndex((prev) => (prev - 1 + totalProductPages) % totalProductPages);
    };

    const getAllProducts = () => {
        return service.products.flatMap(category => category.items);
    };

    const getCurrentProducts = () => {
        const startIndex = currentProductIndex * productsPerPage;
        return getAllProducts().slice(startIndex, startIndex + productsPerPage);
    };

    return (
        <div className="pt-16">            

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-red-50 to-white py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6">{service.title}</h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{service.description}</p>
                    </div>
                    <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-2 mt-8">
                        {service.badges.map((badge, index) => (
                            <Badge key={index} variant="secondary" className="text-xs sm:text-sm text-center flex items-center justify-center">
                                {badge}
                            </Badge>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {service.serviceFeatures.map((feature, index) => {
                            const IconComponent = getIcon(feature.icon);
                            return (
                                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                                    <CardContent className="p-6">
                                        <IconComponent className="w-8 h-8 text-red-600 mx-auto mb-3" />
                                        <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                        <p className="text-xs sm:text-sm text-gray-600">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Our Products
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore our comprehensive range of premium quality products
                        </p>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {getCurrentProducts().map((item, itemIndex) => (
                                <Card key={itemIndex} className="group hover:shadow-lg transition-all duration-300">
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-sm sm:text-base text-gray-900 group-hover:text-red-600 transition-colors">
                                            {item.name}
                                        </CardTitle>
                                        <CardDescription className="text-xs sm:text-sm text-gray-600">
                                            {item.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <div className="space-y-2">
                                            <Badge variant="outline" className="text-xs">
                                                Specifications
                                            </Badge>
                                            <p className="text-xs text-gray-600">
                                                {item.specs}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Product Carousel Navigation */}
                        {showProductCarousel && (
                            <>
                                <Button
                                    onClick={prevProducts}
                                    variant="outline"
                                    size="sm"
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-gray-300 shadow-lg hover:shadow-xl z-10"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </Button>
                                <Button
                                    onClick={nextProducts}
                                    variant="outline"
                                    size="sm"
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-gray-300 shadow-lg hover:shadow-xl z-10"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </Button>

                                {/* Product Page Indicators */}
                                <div className="flex justify-center mt-8 space-x-2">
                                    {Array.from({ length: totalProductPages }, (_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentProductIndex(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentProductIndex
                                                    ? 'bg-red-600 scale-110'
                                                    : 'bg-gray-300 hover:bg-gray-400'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Photo Gallery Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Our {service.title} Gallery
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore our premium quality products and see the craftsmanship in action
                        </p>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {getCurrentPhotos().map((photo) => (
                                <Card key={photo.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                                    <div className="aspect-square overflow-hidden">
                                        <img
                                            src={photo.image}
                                            alt={photo.title}
                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 bg-slate-50"
                                        />
                                    </div>
                                    <CardContent className="p-4">
                                        <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                                            {photo.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-600">
                                            {photo.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Carousel Navigation */}
                        {showCarousel && (
                            <>
                                <Button
                                    onClick={prevPhotos}
                                    variant="outline"
                                    size="sm"
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-gray-300 shadow-lg hover:shadow-xl z-10"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </Button>
                                <Button
                                    onClick={nextPhotos}
                                    variant="outline"
                                    size="sm"
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-gray-300 shadow-lg hover:shadow-xl z-10"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </Button>

                                {/* Page Indicators */}
                                <div className="flex justify-center mt-8 space-x-2">
                                    {Array.from({ length: totalPages }, (_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentPhotoIndex(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentPhotoIndex
                                                    ? 'bg-red-600 scale-110'
                                                    : 'bg-gray-300 hover:bg-gray-400'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <Card className="bg-red-50/50 border-red-200/50">
                            <CardContent className="p-8">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">
                                    {service.cta.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
                                    {service.cta.description}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button
                                        onClick={() => window.location.href = "/#contact"}
                                        className="bg-red-600 hover:bg-red-700 text-sm sm:text-base"
                                    >
                                        {service.cta.primaryButton}
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={() => window.location.href = "tel:+918591704476"}
                                        className="text-sm sm:text-base"
                                    >
                                        <Phone className="w-4 h-4 mr-2" />
                                        {service.cta.secondaryButton}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

        </div>
    );
}
