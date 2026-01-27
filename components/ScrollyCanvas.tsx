import { useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Overlay from './Overlay';

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const frameCount = 75;

    useEffect(() => {
        const loadImages = async () => {
            const promises = Array.from({ length: frameCount }).map((_, i) => {
                return new Promise<HTMLImageElement>((resolve, reject) => {
                    const img = new Image();
                    const frameIndex = i.toString().padStart(4, '0');
                    img.src = `/sequence/${frameIndex}.webp`;
                    img.onload = () => resolve(img);
                    img.onerror = (e) => reject(e);
                });
            });

            try {
                const result = await Promise.all(promises);
                setImages(result);
                setIsLoaded(true);
            } catch (error) {
                console.error("Error loading images", error);
            }
        };

        loadImages();
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    useEffect(() => {
        if (!canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const render = () => {
            const progress = scrollYProgress.get();
            const frameIndex = Math.min(
                frameCount - 1,
                Math.floor(progress * (frameCount - 1))
            );

            const img = images[frameIndex];
            if (!img) return;

            // Object-fit: cover logic
            // We calculate drawing dimensions to cover the canvas
            const canvasRatio = canvas.width / canvas.height;
            const imgRatio = img.width / img.height;

            let drawWidth, drawHeight, offsetX, offsetY;

            if (imgRatio > canvasRatio) {
                drawHeight = canvas.height;
                drawWidth = img.width * (canvas.height / img.height);
                offsetX = (canvas.width - drawWidth) / 2;
                offsetY = 0;
            } else {
                drawWidth = canvas.width;
                drawHeight = img.height * (canvas.width / img.width);
                offsetX = 0;
                offsetY = (canvas.height - drawHeight) / 2;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render();
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        const unsubscribe = scrollYProgress.on('change', () => {
            requestAnimationFrame(render);
        });

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            unsubscribe();
        }
    }, [images, scrollYProgress]);

    // Safe to always render the container now to ensure useScroll ref is attached
    return (
        <div ref={containerRef} className="h-[500vh] relative bg-[#121212]">
            {!isLoaded && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212] text-white">
                    <div className="text-xl font-light tracking-widest animate-pulse">LOADING ASSETS...</div>
                </div>
            )}

            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas ref={canvasRef} className="block w-full h-full object-cover" />
                <Overlay scrollYProgress={scrollYProgress} />
            </div>
        </div>
    );
}
