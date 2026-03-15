'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const event = {
    time: "07:00 PM",
    title: "The Grand Reception",
    description: "An evening of laughter, dinner, and celebration. We cordially invite you to be part of our beginning as we unite in the heart of Makkiyad.",
    image: "/img/real_image1.png"
};

export default function Programs() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    const rotateX = useTransform(smoothScroll, [0.2, 0.5, 0.8], [40, 0, -40]);
    const z = useTransform(smoothScroll, [0.2, 0.5, 0.8], [-400, 0, -400]);
    const opacity = useTransform(smoothScroll, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);

    return (
        <section id="programs" ref={sectionRef} className="h-[150vh] bg-black perspective-hero relative overflow-hidden">
            <div className="sticky top-0 h-screen flex items-center justify-center">
                
                <motion.div 
                    style={{ 
                        rotateX,
                        z,
                        opacity
                    }}
                    className="container max-w-7xl mx-auto px-6 pt-24 md:pt-32 flex flex-col lg:flex-row items-center gap-20 lg:gap-40"
                >
                    {/* Image side with Precision Frame */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="absolute -inset-20 bg-accent/10 blur-[150px] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        
                        <div className="relative aspect-[16/10] lg:aspect-[4/5] overflow-hidden rounded-sm shadow-[0_80px_150px_-30px_rgba(0,0,0,1)] border border-white/5 glass-panel group light-sweep">
                            <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                className="object-cover object-top transition-transform duration-[5000ms] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 opacity-80" />
                        </div>

                        {/* Floating Label */}
                        <div className="absolute -top-10 -left-10 z-20">
                            <span className="text-[120px] font-serif font-black text-white/5 leading-none">01</span>
                        </div>
                    </div>

                    {/* Content side */}
                    <div className="w-full lg:w-1/2 space-y-12">
                        <motion.div className="flex flex-col gap-10">
                            <div className="inline-block px-12 py-5 glass-panel border border-accent/20 text-accent font-serif text-4xl italic w-fit shadow-2xl">
                                {event.time}
                            </div>
                            
                            <h2 className="text-6xl md:text-9xl font-serif font-black text-white tracking-tighter">
                                The <br />
                                <span className="title-shimmer italic font-light">Reception</span>
                            </h2>

                            <p className="text-gray-400 text-xl font-light leading-relaxed max-w-lg">
                                An evening of laughter, dinner, and celebration. We cordially invite you to be part of our beginning as we unite in the heart of Makkiyad HOLY FACE auditorium.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-white/10 relative">
                                <div className="absolute top-0 left-0 w-24 h-[1px] bg-accent" />
                                <div>
                                    <p className="text-accent uppercase tracking-[0.5em] text-[10px] font-black mb-3">Venue</p>
                                    <p className="font-serif text-white text-3xl italic tracking-tight">Makkiyad HOLY FACE auditorium · Wayanad</p>
                                </div>
                                <div>
                                    <p className="text-accent uppercase tracking-[0.5em] text-[10px] font-black mb-3">Event Date</p>
                                    <p className="font-serif text-white text-3xl italic tracking-tight">April 06 · 2026</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Background Narrative */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02] overflow-hidden">
                    <h2 className="text-[40vw] font-serif font-black text-white transform rotate-12">
                        DESTINY
                    </h2>
                </div>
            </div>
        </section>
    );
}
