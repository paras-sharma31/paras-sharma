export const projects = [
    {
        id: "01",
        title: "Pixel Art",
        category: "WebGL Experience",
        year: "2024",
        image: "/project/pixels.png",
        banner: "/project/pixels.png",
        description: "A comprehensive WebGL experience exploring the boundaries of pixel art and modern web rendering technologies. This project demonstrates high-performance graphics and interactive elements."
    },
    {
        id: "02",
        title: "Oldscool",
        category: "E-Commerce",
        year: "2025",
        image: "/project/oldscool.png",
        banner: "/project/oldscool.png",
        description: "A retro-themed e-commerce platform that combines nostalgic aesthetics with modern functionality. Features include a custom shopping cart, seamless checkout, and user authentication.",
        mobileImages: [
            "/project/old-1.png",
            "/project/old-2.png",
            "/project/old-3.png"
        ],
    },
    {
        id: "03",
        title: "TradeFluenza",
        category: "Web3 Platform",
        year: "2025",
        image: "/project/trade.png",
        banner: "/project/trade.png",
        description: "A decentralized trading platform built for the Web3 ecosystem. Connects influencers with traders in a transparent, blockchain-verified environment."
    },
    {
        id: "04",
        title: "Just Marketing Things",
        category: "WebRTC",
        year: "2025",
        image: "/project/jmt.png",
        banner: "/project/jmt.png",
        description: "Real-time communication platform utilizing WebRTC for seamless video and audio conferencing. Built with scalability and low latency in mind.",
        mobileImages: [
            "/project/jmt-1.png",
            "/project/jmt-2.png",
            "/project/jmt-3.png"
        ],
        video: "/project/jmt-video.mp4"
    }
];

export type Project = typeof projects[0] & { mobileImages?: string[], video?: string };
