'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(useGSAP);

// Preloader total duration (see Preloader.tsx):
//   name slide-in:  0.25s duration + 0.05s × 16 chars ≈ 1.05s
//   delay:          1s
//   panels out:     0.6s duration + 0.08s × 9 stagger ≈ 1.32s
//   fade overlap:   ~0.2s
// Total ≈ 3.4s → fade rain in at 3.2s so it's ready right as preloader disappears
const PRELOADER_DURATION = 3.2;

const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Matrix rain canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const chars = '01アイウエオカキクケコABCDEF0123456789></>{}[]';
        const fontSize = 16;
        let cols = Math.floor(canvas.width / fontSize);
        let drops: number[] = Array(cols).fill(1);

        const draw = () => {
            if (!ctx || !canvas) return;

            cols = Math.floor(canvas.width / fontSize);
            if (drops.length !== cols) {
                drops = Array(cols).fill(1);
            }

            // Slightly stronger fade so old chars clear faster
            ctx.fillStyle = 'rgba(33, 33, 33, 0.08)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px monospace`;

            drops.forEach((y, i) => {
                const char = chars[Math.floor(Math.random() * chars.length)];

                // Head character: bright gold
                ctx.fillStyle = 'rgba(255, 210, 50, 0.3)';
                ctx.fillText(char, i * fontSize, y * fontSize);

                // Previous character (one step behind): dim it immediately
                // so the trail visually "lets go" of the last position
                ctx.fillStyle = 'rgba(33, 33, 33, 0.25)';
                ctx.fillRect(
                    i * fontSize,
                    (y - 1) * fontSize,
                    fontSize,
                    fontSize,
                );

                if (y * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            });
        };

        const interval = setInterval(draw, 50);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resize);
        };
    }, []);

    // Fade in after preloader finishes
    useGSAP(
        () => {
            gsap.fromTo(
                wrapperRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.8,
                    delay: PRELOADER_DURATION,
                    ease: 'power1.inOut',
                },
            );
        },
        { scope: wrapperRef },
    );

    return (
        <div
            ref={wrapperRef}
            className="fixed inset-0 z-[-1] pointer-events-none opacity-0"
        >
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    );
};

export default ParticleBackground;
