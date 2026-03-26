'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import Particles from '@/components/Particles';

export default function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // 2026 "Editorial Perspective" Transitions
    const photoScale = useTransform(smoothScroll, [0, 1], [1, 1.15]);
    const photoRotate = useTransform(smoothScroll, [0, 1], [0, 5]);
    const textX = useTransform(smoothScroll, [0, 1], [0, -100]);
    const detailY = useTransform(smoothScroll, [0, 0.5], [0, 50]);
    const opacity = useTransform(smoothScroll, [0.8, 1], [1, 0]);

    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 15;
            const y = (e.clientY / window.innerHeight - 0.5) * 15;
            setMouse({ x, y });
        };
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    return (
        <section ref={sectionRef} className="relative h-[110vh] bg-black overflow-hidden perspective-hero">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center p-6 md:p-12 pt-32 md:pt-40">
                
                {/* 1. CINEMATIC BACKGROUND GLOW */}
                <div className="absolute inset-0 z-0">
                    <Particles />
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] animate-pulse" />
                </div>

                {/* 2. THE MAIN COMPOSITION (Split Editorial) */}
                <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24 relative z-10 px-4">
                    
                    {/* LEFT SIDE: Typography Stack */}
                    <motion.div 
                        style={{ x: typeof window !== 'undefined' && window.innerWidth > 768 ? textX : 0, opacity }}
                        className="flex flex-col items-center md:items-start text-center md:text-left gap-8 md:gap-10 w-full md:w-1/2"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-4"
                        >
                            <span className="text-accent text-[9px] md:text-[10px] font-bold tracking-[0.6em] md:tracking-[0.8em] uppercase">Private Invitation</span>
                            <div className="w-16 md:w-24 h-[1px] bg-accent/30 mx-auto md:mx-0" />
                        </motion.div>

                        <div className="space-y-0">
                            {/* Nidhin - Cinematic Reveal */}
                            <motion.h1 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="text-5xl md:text-7xl lg:text-[110px] font-serif font-black text-white leading-[0.9] tracking-tighter"
                            >
                                Nidhin
                            </motion.h1>

                            <motion.div 
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                                className="flex items-center justify-center md:justify-start gap-8 -my-2 md:-my-4"
                            >
                                <span className="text-accent text-4xl md:text-6xl lg:text-7xl font-serif italic font-light">&</span>
                            </motion.div>

                            {/* Anagha - Cinematic Reveal */}
                            <motion.h1 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                className="text-5xl md:text-7xl lg:text-[110px] font-serif font-black text-white leading-[0.9] tracking-tighter"
                            >
                                Anagha
                            </motion.h1>
                        </div>

                        <motion.div 
                            style={{ y: typeof window !== 'undefined' && window.innerWidth > 768 ? detailY : 0 }}
                            className="space-y-4 pt-4 md:pt-8"
                        >
                            <p className="text-white font-serif italic text-2xl md:text-3xl lg:text-4xl tracking-tight">
                                Monday · April 06
                            </p>
                            <div className="flex flex-col gap-1">
                                <p className="text-accent text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] shimmer-text">
                                    Makkiyad HOLY FACE auditorium · Wayanad
                                </p>
                                <p className="text-white/20 text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em]">Reception starts 07:00 PM</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT SIDE: The 3D Floating Portrait */}
                    <motion.div 
                        style={{ 
                            scale: photoScale,
                            rotateZ: photoRotate,
                            rotateX: typeof window !== 'undefined' && window.innerWidth > 768 ? -mouse.y : 0,
                            rotateY: typeof window !== 'undefined' && window.innerWidth > 768 ? mouse.x : 0,
                        }}
                        className="relative w-full max-w-[320px] md:max-w-[480px] aspect-[4/5] z-20 group mt-8 md:mt-0"
                    >
                        {/* High-End Glass Frame */}
                        <div className="absolute -inset-10 bg-accent/5 rounded-sm blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        
                        <div className="relative w-full h-full glass-panel p-2 rounded-sm shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] md:shadow-[0_100px_200px_-50px_rgba(0,0,0,1)] border border-white/5 overflow-hidden light-sweep">
                            <div className="relative w-full h-full overflow-hidden rounded-sm">
                                <Image
                                    src="/img/NidhinAnagha Portrait2.jpeg"
                                    alt="Nidhin & Anagha Portrait"
                                    fill
                                    className="object-cover object-top transition-transform duration-[5s] group-hover:scale-110"
                                    priority
                                />
                                {/* Soft Editorial Vignette */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                            </div>
                            
                            {/* Floating Corner Decor */}
                            <div className="absolute top-4 right-4 md:top-8 md:right-8 w-8 h-8 md:w-12 md:h-12 border-t border-r border-accent/20 md:border-accent/30 opacity-40" />
                            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-8 h-8 md:w-12 md:h-12 border-b border-l border-accent/20 md:border-accent/30 opacity-40" />
                        </div>

                        {/* Button Integrated into Layout */}
                        <div className="absolute -bottom-16 md:-right-20 md:bottom-20 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 z-30 pointer-events-auto w-max">
                            <Link href="#programs">
                                <button className="group relative px-10 md:px-16 py-5 md:py-7 overflow-hidden border border-white/10 hover:border-accent transition-all duration-700 bg-black/60 backdrop-blur-3xl rounded-sm">
                                    <span className="relative z-10 text-white group-hover:text-black text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] transition-colors duration-500">
                                        Open Invitation
                                    </span>
                                    <div className="absolute inset-0 bg-accent translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-[0.7, 0, 0.3, 1]" />
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                </div>

                {/* 3. BACKGROUND TEXTURE (EPHEMERAL) */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.015] md:opacity-[0.02] select-none pointer-events-none rotate-90 md:rotate-0">
                    <h2 className="text-[40vw] md:text-[25vw] font-serif font-black text-white tracking-tighter shimmer-text">
                        UNION
                    </h2>
                </div>

                {/* SCROLL DECOR - Relocated to Center-Bottom to prevent overlap */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-40">
                    <span className="text-[8px] uppercase tracking-[0.8em] text-accent/60 font-black">Scroll</span>
                    <motion.div 
                        animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" 
                    />
                </div>
            </div>

            {/* Cinematic Film Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-soft-texture z-50 screen-blend" />
        </section>
    );
}
