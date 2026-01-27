import React from 'react';
import Link from 'next/link';

interface Project {
    id: number;
    title: string;
    category: string;
    url: string;
    year: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Tigerhall',
        category: 'Social Learning',
        url: 'https://tigerhall.com/',
        year: '2024',
    },
    {
        id: 2,
        title: 'Old Scool Perfumes',
        category: 'E-commerce',
        url: 'https://oldscoolperfumes.com/',
        year: '2023',
    },
    {
        id: 3,
        title: 'Level 29',
        category: 'Gaming & Ent.',
        url: 'https://level29.games/',
        year: '2023',
    },
    {
        id: 4,
        title: 'Just Marketing Things',
        category: 'Agency',
        url: 'https://justmarketingthings.in/',
        year: '2022',
    },
];

const WebPreviews = () => {
    return (
        <section className="bg-black py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-white tracking-tighter">
                    Selected Work
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className="relative aspect-video bg-[#1a1a1a] rounded-lg overflow-hidden mb-6 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] to-[#111111] opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <span className="text-gray-400 text-sm font-mono">{project.year}</span>
                                        <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors duration-300">
                                            <svg
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="text-white group-hover:text-black transition-colors duration-300 transform rotate-45 group-hover:rotate-0"
                                            >
                                                <path d="M1 1H11V11M11 1L1 11" stroke="currentColor" strokeWidth="1.5" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-400 font-medium">{project.category}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WebPreviews;
