'use client';

import { motion } from 'framer-motion';

const services = [
    { id: '01', title: 'UI/UX' },
    { id: '02', title: 'Branding' },
    { id: '03', title: 'Development' },
    { id: '04', title: 'Web' },
    { id: '05', title: 'Motion' },
    { id: '06', title: 'About Me' },
];

const aboutImages = [
    '/about-me/6F63F4B6-3BCF-467B-B4AF-4DB8D19B4272.jpeg',
    '/about-me/WhatsApp Image 2026-01-27 at 22.10.51.jpeg',
    '/about-me/WhatsApp Image 2026-01-27 at 22.10.52-2.jpeg',
    '/about-me/WhatsApp Image 2026-01-27 at 22.10.52.jpeg',
    '/about-me/WhatsApp Image 2026-01-27 at 22.10.53-2.jpeg',
    '/about-me/WhatsApp Image 2026-01-27 at 22.10.53-3.jpeg',
    '/about-me/WhatsApp Image 2026-01-27 at 22.10.53.jpeg',
    '/about-me/WhatsApp Image 2026-01-27 at 22.11.44.jpeg',
    '/about-me/WhatsApp Image 2026-01-27 at 22.12.00.jpeg',
    '/about-me/WhatsApp Image 2026-01-27 at 22.12.16.jpeg',
    '/about-me/WhatsApp Image 2026-01-27 at 22.12.35.jpeg',
    '/about-me/WhatsApp Image 2026-01-27 at 22.13.23.jpeg',
    '/about-me/WhatsApp Image 2026-01-27 at 22.14.49.jpeg'
];

import { useState, useRef } from 'react';
import Link from 'next/link';

export default function KeyServices() {
    const [activeService, setActiveService] = useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (id: string) => {
        setActiveService(id);
        if (id === '06') {
            if (intervalRef.current) clearInterval(intervalRef.current);
            intervalRef.current = setInterval(() => {
                setCurrentImageIndex(prev => (prev + 1) % aboutImages.length);
            }, 200);
        }
    };

    const handleMouseLeave = () => {
        setActiveService(null);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setCurrentImageIndex(0);
    };

    return (
        <section className="bg-black text-white py-24 px-4 md:px-0">
            <div className="container mx-auto px-4 mb-16">
                <h2 className="text-sm md:text-base text-gray-400 font-mono mb-2 uppercase tracking-widest">
                    Expertise
                </h2>
                <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
                    This is what I focus on
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
                {services.map((service, index) => {
                    const isAboutMe = service.id === '06';

                    const CardContent = (
                        <div className="h-full flex flex-col justify-between">
                            <div className={`w-4 h-4 rounded-full border transition-colors duration-300 ${isAboutMe && activeService === '06' ? 'border-white bg-white' : 'border-white/30 group-hover:bg-white'}`} />

                            <div className="relative z-10">
                                <span className={`block text-xs font-mono mb-2 transition-colors duration-300 ${isAboutMe && activeService === '06' ? 'text-white' : 'text-gray-500'}`}>{service.id}</span>
                                <h4 className={`text-5xl md:text-7xl font-bold uppercase tracking-tighter stroke-text transition-colors duration-300 ${isAboutMe && activeService === '06' ? 'text-white' : 'text-transparent group-hover:text-white'}`}
                                    style={{ WebkitTextStroke: isAboutMe && activeService === '06' ? 'none' : '1px rgba(255,255,255,0.5)' }}>
                                    {service.title}
                                </h4>
                            </div>

                            {isAboutMe && (
                                <div
                                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-200 pointer-events-none ${activeService === '06' ? 'opacity-100' : 'opacity-0'}`}
                                    style={{
                                        backgroundImage: `url('${aboutImages[currentImageIndex]}')`,
                                        filter: 'brightness(0.7)'
                                    }}
                                />
                            )}

                            {!isAboutMe && (
                                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
                            )}
                        </div>
                    );

                    const Wrapper = isAboutMe ? Link : motion.div;
                    const wrapperProps = isAboutMe ? {
                        href: '/about',
                        className: "group relative h-[300px] md:h-[400px] border-b border-r border-white/10 p-6 block hover:z-10",
                        onMouseEnter: () => handleMouseEnter(service.id),
                        onMouseLeave: handleMouseLeave
                    } : {
                        key: service.id,
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: true },
                        transition: { duration: 0.5, delay: index * 0.1 },
                        className: "group relative h-[300px] md:h-[400px] border-b border-r border-white/10 p-6 flex flex-col justify-between hover:bg-white/5 transition-colors duration-300 md:last:border-r-0",
                        onMouseEnter: () => handleMouseEnter(service.id),
                        onMouseLeave: handleMouseLeave
                    };

                    return (
                        <Wrapper
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            {...wrapperProps as any}
                            key={service.id}
                        >
                            {CardContent}
                        </Wrapper>
                    );
                })}
            </div>
        </section>
    );
}
