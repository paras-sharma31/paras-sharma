'use client';

import { MotionValue, motion, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    return (
        <div className="absolute inset-0 z-10 w-full h-full pointer-events-none text-white mix-blend-difference">
            <div className="fixed top-0 left-0 w-full px-8 py-6 flex justify-between items-start text-xs md:text-sm font-medium uppercase tracking-wide z-50 mix-blend-difference">
                <div className="w-1/3">
                    <span className="block opacity-70">Paras Sharma</span>
                </div>

                <div className="w-1/3 text-center">
                    <span className="opacity-70">{time} IST</span>
                </div>

                <div className="w-1/3 flex flex-col items-end gap-1 pointer-events-auto">
                    <a href="#" className="hover:opacity-100 opacity-70 transition-opacity">Work</a>
                    <a href="/about" className="hover:opacity-100 opacity-70 transition-opacity">About</a>
                    <a href="#" className="hover:opacity-100 opacity-70 transition-opacity">Contact</a>
                </div>
            </div>

            <motion.div
                style={{ y, opacity }}
                className="sticky top-0 h-screen w-full flex flex-col items-center justify-center p-4"
            >
                <div className="relative">
                    <h1 className="text-[12vw] leading-[0.85] font-black uppercase text-center tracking-tighter">
                        Creative
                        <br />
                        Developer
                    </h1>

                    <div className="absolute -right-8 bottom-4 text-xs font-mono opacity-50 rotate-90 origin-left">
                        (SCROLL TO EXPLORE)
                    </div>
                </div>

                <div className="mt-8 flex justify-between w-full max-w-md text-xs font-mono uppercase opacity-60">
                    <span>Based in India</span>
                    <span>Available for Freelance</span>
                </div>
            </motion.div>
        </div>
    );
}
