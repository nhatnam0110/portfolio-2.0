'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Keep in sync with ParticleBackground.tsx — matches preloader total duration
const PRELOADER_DURATION = 3.2;

const Banner = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Fade in after preloader finishes
    useGSAP(
        () => {
            gsap.fromTo(
                containerRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.8,
                    delay: PRELOADER_DURATION,
                    ease: 'power1.inOut',
                },
            );
        },
        { scope: containerRef },
    );

    // scroll out animation
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            {/* Corner brackets */}
            <div className="absolute top-6 left-6 w-5 h-5 border-t border-l border-primary/60 z-10" />
            <div className="absolute top-6 right-6 w-5 h-5 border-t border-r border-primary/60 z-10" />
            <div className="absolute bottom-6 left-6 w-5 h-5 border-b border-l border-primary/60 z-10" />
            <div className="absolute bottom-6 right-6 w-5 h-5 border-b border-r border-primary/60 z-10" />

            {/* Scan line */}
            <div className="absolute left-0 right-0 h-px bg-primary/20 z-10 animate-scan" />

            <ArrowAnimation />

            <div
                className="container relative z-10 h-[100svh] min-h-[530px] max-md:pb-10 flex items-center opacity-0"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                    {/* Terminal tag */}
                    <div className="slide-up-and-fade mb-3 inline-block text-xs font-mono px-2 py-1 border border-primary/30 text-primary/70 bg-primary/5">
                        {'// FRONTEND_DEV.tsx'}
                    </div>

                    <p className="slide-up-and-fade text-sm font-mono text-muted-foreground mb-2 tracking-widest uppercase">
                        Le Tran Nhat Nam
                    </p>

                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">FRONTEND</span>
                        <br />
                        <span className="ml-4">DEVELOPER</span>
                    </h1>

                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground max-w-[420px]">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Nhat Nam
                        </span>
                        . A Frontend Developer intern with hands-on experience
                        building scalable React applications for real-world
                        industry problems.
                    </p>

                    <Button
                        as="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={GENERAL_INFO.upworkProfile}
                        variant="primary"
                        className="mt-9 banner-button slide-up-and-fade font-anton tracking-widest"
                    >
                        Hire Me
                    </Button>
                </div>
            </div>

            {/* Stats — absolute to section, below navbar z-[2] so menu covers them */}
            <div className="absolute bottom-[10%] right-[4%] z-[1] flex flex-col gap-8 text-right">
                <div className="slide-up-and-fade">
                    <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                        6
                    </h5>
                    <p className="text-muted-foreground font-mono text-xs tracking-widest">
                        MONTHS EXP
                    </p>
                </div>
                <div className="slide-up-and-fade">
                    <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                        4+
                    </h5>
                    <p className="text-muted-foreground font-mono text-xs tracking-widest">
                        PROJECTS
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Banner;
