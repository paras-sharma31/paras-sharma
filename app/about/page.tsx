'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

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

export default function AboutPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="bg-[#121212] min-h-screen text-white font-sans selection:bg-white/20">

            <header className="fixed top-0 left-0 right-0 p-6 z-50 flex justify-between items-center mix-blend-difference">
                <Link href="/" className="text-sm font-mono uppercase tracking-widest hover:opacity-70 transition-opacity">
                    Back
                </Link>
            </header>


            <div className="container mx-auto px-4 pt-32 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    <div className="lg:col-span-3 flex flex-col justify-between h-full space-y-12">
                        <div>
                            <h1 className="text-4xl font-bold mb-8">Hello.</h1>
                            <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
                                <p>
                                    I am a creative developer and designer based in India.
                                </p>
                                <p>
                                    I combine technical expertise with design sensibility to build immersive digital experiences. My work focuses on motion, interaction, and clean typography.
                                </p>
                            </div>
                        </div>

                        <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                            <p className="mb-2">Based in</p>
                            <p className="text-white">India</p>
                        </div>
                    </div>

                    <div className="lg:col-span-6 flex items-center justify-center min-h-[60vh] relative">
                        <div className="relative w-full aspect-[3/4] max-w-md mx-auto overflow-hidden bg-white/5 rounded-sm">
                            <AnimatePresence mode="popLayout">
                                <motion.img
                                    key={currentImageIndex}
                                    src={aboutImages[currentImageIndex]}
                                    alt="Portrait"
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1.2, ease: "circOut" }}
                                    className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="lg:col-span-3 space-y-16 text-sm">

                        <div>
                            <h3 className="text-gray-500 font-mono uppercase tracking-widest mb-6 text-xs">Experience</h3>
                            <ul className="space-y-4">
                                <li className="flex justify-between border-b border-white/10 pb-2">
                                    <span>Freelance</span>
                                    <span className="text-gray-500">Present</span>
                                </li>
                                <li className="flex justify-between border-b border-white/10 pb-2">
                                    <span>Creative Studio</span>
                                    <span className="text-gray-500">2023-2024</span>
                                </li>
                                <li className="flex justify-between border-b border-white/10 pb-2">
                                    <span>Tech Agency</span>
                                    <span className="text-gray-500">2021-2023</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-gray-500 font-mono uppercase tracking-widest mb-6 text-xs">Services</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>UI/UX Design</li>
                                <li>Web Development</li>
                                <li>Motion Graphics</li>
                                <li>Branding</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-gray-500 font-mono uppercase tracking-widest mb-6 text-xs">Connect</h3>
                            <ul className="space-y-2">
                                <li><a href="https://www.linkedin.com/in/paras-sharma-6b5908236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-white text-gray-400 transition-colors">LinkedIn ↗</a></li>
                                <li><a href="https://www.instagram.com/_paras_sharma?igsh=MTNhMnF0ejd2bjF5aw==" className="hover:text-white text-gray-400 transition-colors">Instagram ↗</a></li>
                                <li><a href="mailto:sharmaparas388@gmail.com" className="hover:text-white text-gray-400 transition-colors">Email ↗</a></li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
}
