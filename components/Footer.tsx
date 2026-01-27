'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer
            className="bg-black text-white pt-24 pb-12 px-4 md:px-8 border-t"
            style={{ borderColor: 'rgba(255, 255, 255, 0.35)' }}
        >
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 space-y-12 md:space-y-0">

                    <div className="max-w-2xl">
                        <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8">
                            Let&#39;s work <br />
                            <span className="text-gray-500">together</span>
                        </h2>
                        <a
                            href="mailto:sharmaparas388@gmail.com"
                            className="inline-block text-lg md:text-xl border border-white/20 rounded-full px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Get in touch
                        </a>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 md:gap-24 text-sm font-mono uppercase tracking-widest">
                        <div>
                            <h4 className="text-gray-500 mb-4">Sitemap</h4>
                            <ul className="space-y-2">
                                <li><Link href="/" className="hover:text-gray-400 transition-colors">Home</Link></li>
                                <li><Link href="/about" className="hover:text-gray-400 transition-colors">About</Link></li>
                                <li><a href="#" className="hover:text-gray-400 transition-colors">Work</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-gray-500 mb-4">Socials</h4>
                            <ul className="space-y-2">
                                <li><a href="https://www.linkedin.com/in/paras-sharma-6b5908236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">LinkedIn</a></li>
                                <li><a href="https://www.instagram.com/_paras_sharma?igsh=MTNhMnF0ejd2bjF5aw==" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Instagram</a></li>
                                <li><a href="mailto:sharmaparas388@gmail.com" className="hover:text-gray-400 transition-colors">Email</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-600 uppercase tracking-widest pt-8 border-t border-white/10">
                    <p>&copy; {new Date().getFullYear()} Paras Sharma. All rights reserved.</p>
                    <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span>Available for freelance</span>
                    </div>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="mt-4 md:mt-0 hover:text-white transition-colors"
                    >
                        Back to Top &uarr;
                    </button>
                </div>
            </div>
        </footer>
    );
}
