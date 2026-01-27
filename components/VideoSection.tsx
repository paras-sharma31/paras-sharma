'use client';

import { motion } from 'framer-motion';

export default function VideoSection() {
    return (
        <section className="relative w-full h-[80vh] md:h-screen overflow-hidden bg-black">
            <video
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="https://cdn.prod.website-files.com/630534398d9471ade12fc55f%2F68222bff4288bb35ff4929b2_Spirit%20%28New%203D%20Music%20Visual%29-transcode.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

            <div className="relative z-10 w-full h-full flex flex-col justify-end p-8 md:p-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="border-l-2 border-white/50 pl-6 backdrop-blur-sm">
                        <h2 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-wider mb-2">
                            Visual Experience
                        </h2>
                        <p className="text-white/70 text-sm md:text-base font-mono">
                            Immersive digital landscapes
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
