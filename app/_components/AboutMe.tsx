'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pt-20" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-10 slide-up-and-fade">
                    I believe frontend development is about more than building
                    interfaces—it&apos;s about creating intuitive, performant, and
                    accessible experiences that truly serve users.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    About me.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m Nhat Nam.
                        </p>
                    </div>

                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                I&apos;m a final-year Software Engineering student at
                                RMIT University and an aspiring frontend
                                developer currently seeking a full-time
                                opportunity to build impactful web applications.
                            </p>

                            <p className="mt-3 slide-up-and-fade">
                                I specialize in React, TypeScript, and modern
                                frontend tools to create responsive, scalable,
                                and high-performing user interfaces. Through
                                industry and academic projects, I&apos;ve developed
                                dashboards, analytics platforms, and
                                full-featured web applications while
                                collaborating with backend and AI engineers.
                            </p>

                            <p className="mt-3 slide-up-and-fade">
                                I&apos;m passionate about building clean,
                                maintainable code and delivering user
                                experiences that are intuitive, performant, and
                                meaningful.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
