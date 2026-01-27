'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import type { MouseEvent } from 'react';

const projects = [
    {
        id: "01",
        title: "Pixel Art",
        category: "WebGL Experience",
        year: "2024",
        image: "/project/pixels.png",
    },
    {
        id: "02",
        title: "Oldscool",
        category: "E-Commerce",
        year: "2025",
        image: "/project/oldscool.png",
    },
    {
        id: "03",
        title: "TradeFluenza",
        category: "Web3 Platform",
        year: "2025",
        image: "/project/trade.png",
    },
    {
        id: "04",
        title: "Just Marketing Things",
        category: "WebRTC",
        year: "2025",
        image: "/project/jmt.png",
    }
];


function ProjectCard({ project, index }: { project: any, index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    function handleMouseMove({ clientX, clientY }: MouseEvent) {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const xPos = clientX - rect.left - 64; // center the 128px circle
        const yPos = clientY - rect.top - 64;

        x.set(xPos);
        y.set(yPos);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group cursor-none ${index % 2 === 1 ? 'md:mt-32' : ''}`}
        >
            <div
                ref={ref}
                onMouseMove={handleMouseMove}
                className="aspect-[4/5] w-full overflow-hidden bg-white/5 relative mb-6"
            >
                <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                <motion.div
                    style={{ x: mouseX, y: mouseY }}
                    className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-difference"
                >
                    <span className="text-black font-bold uppercase text-xs tracking-widest text-center">View<br />Project</span>
                </motion.div>
            </div>

            <div className="flex justify-between items-start border-t border-white/20 pt-4">
                <div>
                    <span className="block text-xs font-mono text-gray-500 mb-1">{project.id} // {project.category}</span>
                    <h3 className="text-2xl md:text-4xl font-bold uppercase text-white group-hover:text-gray-300 transition-colors">
                        {project.title}
                    </h3>
                </div>
                <span className="text-xs font-mono text-gray-500 pt-1">{project.year}</span>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section className="relative z-10 bg-black pt-32 pb-40 px-4 md:px-8">
            <div className="flex items-end justify-between mb-24 border-b border-white/20 pb-4">
                <h2 className="text-4xl md:text-8xl font-bold uppercase tracking-tighter text-white">
                    Featured <span className="block md:inline text-gray-500">Work</span>
                </h2>
                <span className="text-xl md:text-2xl font-mono text-white/60 mb-2">(04)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}
