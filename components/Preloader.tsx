'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const name = 'LE TRAN NHAT NAM';

const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const q = gsap.utils.selector(preloaderRef);

            const tl = gsap.timeline({
                defaults: { ease: 'power1.inOut' },
            });

            tl.to(q('.name-text span'), {
                y: 0,
                stagger: 0.05,
                duration: 0.25,
            })
                .to(q('.preloader-item'), {
                    delay: 1,
                    y: '100%',
                    duration: 0.6,
                    stagger: 0.08,
                })
                .to(q('.name-text span'), { autoAlpha: 0 }, '<0.4')
                .to(preloaderRef.current, { autoAlpha: 0 }, '<');
        },
        { scope: preloaderRef },
    );

    return (
        <div ref={preloaderRef} className="fixed inset-0 z-[6] flex">
            {Array.from({ length: 10 }).map((_, i) => (
                <div
                    key={i}
                    className="preloader-item h-full w-[10%] bg-black"
                />
            ))}

            <p className="name-text flex text-[20vw] lg:text-[200px] font-anton absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden">
                {name.split('').map((char, i) => (
                    <span
                        key={i}
                        className={`inline-block translate-y-full ${char === ' ' ? 'mx-10' : ''}`}
                    >
                        {char}
                    </span>
                ))}
            </p>
        </div>
    );
};

export default Preloader;
