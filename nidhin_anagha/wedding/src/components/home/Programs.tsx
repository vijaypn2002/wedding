'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const event = {
    time: "07:00 PM",
    title: "The Grand Reception",
    description: "An evening of laughter, dinner, and celebration. We cordially invite you to be part of our beginning as we unite in the heart of Makkiyad.",
    image: "/img/NidhinAnagha Portrait4.jpeg"
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
        <section id="programs" ref={sectionRef} className="min-h-screen md:h-[150vh] bg-black perspective-hero relative overflow-hidden py-24 md:py-0">
            <div className="md:sticky md:top-0 md:h-screen flex items-center justify-center">
                
                <motion.div 
                    style={{ 
                        rotateX: typeof window !== 'undefined' && window.innerWidth > 768 ? rotateX : 0,
                        z: typeof window !== 'undefined' && window.innerWidth > 768 ? z : 0,
                        opacity
                    }}
                    className="container max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-40"
                >
                    {/* Image side with Precision Frame */}
                    <div className="w-full lg:w-1/2 relative group order-2 lg:order-1">
                        <div className="absolute -inset-10 md:-inset-20 bg-accent/10 blur-[80px] md:blur-[150px] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        
                        <div className="relative aspect-[16/10] lg:aspect-[4/5] overflow-hidden rounded-sm shadow-[0_40px_80px_-20px_rgba(0,0,0,1)] md:shadow-[0_80px_150px_-30px_rgba(0,0,0,1)] border border-white/5 glass-panel group light-sweep">
                            <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                className="object-cover object-top transition-transform duration-[5000ms] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 opacity-80" />
                        </div>
                    </div>

                    {/* Content Side with Editorial Layout */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full lg:w-1/2 space-y-8 md:space-y-12 order-1 lg:order-2"
                    >
                        <div className="space-y-4 md:space-y-8">
                            <div className="text-accent text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] flex items-center gap-4">
                                <span className="w-8 md:w-12 h-[1px] bg-accent/40" />
                                {event.time}
                            </div>
                            
                            <h2 className="text-5xl md:text-7xl lg:text-9xl font-serif font-black text-white leading-[0.9] tracking-tighter">
                                The <br />
                                <span className="title-shimmer italic font-light">Reception</span>
                            </h2>

                            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                                {event.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-8 md:pt-16 border-t border-white/10 relative">
                                <div className="absolute top-0 left-0 w-16 md:w-24 h-[1px] bg-accent" />
                                <div>
                                    <p className="text-accent uppercase tracking-[0.4em] md:tracking-[0.5em] text-[8px] md:text-[10px] font-black mb-2 md:mb-3">Venue</p>
                                    <p className="font-serif text-white text-xl md:text-2xl lg:text-3xl italic tracking-tight">Makkiyad HOLY FACE <br className="hidden md:block" /> auditorium · Wayanad</p>
                                </div>
                                <div>
                                    <p className="text-accent uppercase tracking-[0.4em] md:tracking-[0.5em] text-[8px] md:text-[10px] font-black mb-2 md:mb-3">Event Date</p>
                                    <p className="font-serif text-white text-xl md:text-2xl lg:text-3xl italic tracking-tight">April 06 · 2026</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        {/* Background Narrative */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02] overflow-hidden">
                    <h2 className="text-[40vw] font-serif font-black text-white transform rotate-12">
                        DESTINY
                    </h2>
                </div>
        </section>
    );
}
