import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
    const project = projects.find((p) => p.id === params.id);

    if (!project) {
        notFound();
    }

    const currentIndex = projects.findIndex((p) => p.id === params.id);
    const nextProject = projects[(currentIndex + 1) % projects.length];

    return (
        <main className="bg-black min-h-screen text-white">
            <div className="fixed top-0 left-0 right-0 z-50 p-6 md:p-10 flex justify-between items-start mix-blend-difference pointer-events-none">
                <Link href="/" className="pointer-events-auto group flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                    <ArrowLeft className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" />
                    <span className="uppercase text-sm tracking-widest hidden md:block">Back to Works</span>
                </Link>
                <div className="text-right hidden md:block">
                    <span className="text-sm font-mono text-white/60 block">Project ({project.id})</span>
                    <span className="text-sm font-mono text-white/60 block">{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
            </div>

            <article>
                <header className="relative w-full h-screen flex flex-col justify-center px-4 md:px-12">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={'/project/banner.png'}
                            alt={project.title}
                            fill
                            className="object-cover opacity-60 md:opacity-100"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
                    </div>

                    <div className="relative z-10 max-w-[90vw]">
                        <h1 className="text-6xl md:text-[8vw] leading-[0.9] font-bold uppercase tracking-tighter text-white mb-6 md:mb-12 break-words">
                            {project.title}
                        </h1>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-sm md:text-lg font-mono text-gray-300 md:items-center">
                            <span className="uppercase tracking-widest">{project.category}</span>
                            <span className="hidden md:inline w-px h-4 bg-white/40" />
                            <span>{project.year}</span>
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-4 md:left-12 z-10 flex flex-col gap-2 animate-bounce opacity-50">
                        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                        <div className="w-px h-12 bg-white mx-auto"></div>
                    </div>
                </header>

                <section className="relative z-20 bg-black px-4 md:px-12 py-24 md:py-32">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                            {/* Left Column: Context */}
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-12">
                                        The<br />Challenge
                                    </h2>
                                    <div className="space-y-8 text-lg font-light text-gray-300 leading-relaxed">
                                        <p>
                                            {project.description}
                                        </p>
                                        <p>
                                            In a digital ladscape saturated with noise, the primary objective was to create a signal—a platform that stands out through clarity and intent. We focused on stripping away the unessential to reveal the core utility.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-16 md:mt-0 grid grid-cols-2 gap-8 border-t border-white/20 pt-8 font-mono text-sm">
                                    <div>
                                        <h4 className="uppercase tracking-widest text-gray-500 mb-2">Role</h4>
                                        <p>Art Direction, UI/UX, Dev</p>
                                    </div>
                                    <div>
                                        <h4 className="uppercase tracking-widest text-gray-500 mb-2">Year</h4>
                                        <p>{project.year}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative pt-12 md:pt-24">
                                <div className="relative z-10">
                                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-12">
                                        The<br />Solution
                                    </h2>
                                    <p className="text-lg font-light text-gray-300 leading-relaxed mb-12">
                                        We approached the solution with a "less is more" philosophy. By leveraging WebGL and modern CSS techniques, we created an interface that feels fluid and responsive. The result is an experience that honors the user's time and attention.
                                    </p>
                                </div>
                                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-white/5">
                                    <Image
                                        src={project.image}
                                        alt="Detail view"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-pulse" />
                                    <div className="absolute bottom-4 left-4 font-mono text-xs text-white/50">FIG. 01 — INTERFACE</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {project.mobileImages && project.mobileImages.length > 0 && (
                    <section className="relative z-20 bg-zinc-950 px-4 md:px-12 py-32 border-t border-white/10">
                        <div className="max-w-7xl mx-auto mb-20 text-center">
                            <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter mb-6">Mobile Experience</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">Seamlessly adapted for smaller screens without compromising on features or fluidity.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-6xl mx-auto">
                            {project.mobileImages.map((img, idx) => (
                                <div
                                    key={idx}
                                    className={`relative aspect-[9/19] w-full bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-white/5 transform transition-transform hover:-translate-y-4 duration-500 ${idx === 1 ? 'md:-mt-12 md:mb-12' : ''}`}
                                >
                                    <Image
                                        src={img}
                                        alt={`Mobile screen ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {project.video && (
                    <section className="relative z-20 bg-black px-4 md:px-12 py-32 border-t border-white/10">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-12 text-center md:text-left">
                                Immersion
                            </h2>
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-900 border border-white/10 shadow-2xl">
                                <video
                                    src={project.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </section>
                )}

                <section className="relative z-20 bg-black px-4 md:px-12 py-32 md:py-48 border-t border-white/10">
                    <div className="max-w-4xl mx-auto text-center mb-32 md:mb-48">
                        <div className="w-px h-24 bg-gradient-to-b from-transparent to-white mx-auto mb-8"></div>
                        <h2 className="text-2xl md:text-4xl font-light leading-snug text-white/80">
                            "This project represents a milestone in balancing aesthetic precision with technical performance. It pushes the boundaries of what is expected from a standard web experience."
                        </h2>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="text-xs font-mono text-gray-500 mb-8 uppercase tracking-widest">Next Project</span>
                        <Link
                            href={`/project/${nextProject.id}`}
                            className="group block w-full max-w-5xl"
                        >
                            <h2 className="text-5xl md:text-[10vw] leading-none font-bold uppercase tracking-tighter mb-12 group-hover:text-gray-400 transition-colors duration-300">
                                {nextProject.title}
                            </h2>
                            <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                                <Image
                                    src={nextProject.banner || nextProject.image}
                                    alt={nextProject.title}
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-500"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                                        VIEW
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
            </article>
        </main>
    );
}
