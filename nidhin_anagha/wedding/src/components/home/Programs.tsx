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
        <section
            id="programs"
            ref={sectionRef}
            className="min-h-screen md:h-[150vh] bg-black perspective-hero relative overflow-hidden py-16 sm:py-20 md:py-0"
        >
            <div className="md:sticky md:top-0 md:h-screen flex items-center justify-center">
                <motion.div
                    style={{
                        rotateX: typeof window !== 'undefined' && window.innerWidth > 768 ? rotateX : 0,
                        z: typeof window !== 'undefined' && window.innerWidth > 768 ? z : 0,
                        opacity
                    }}
                    className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-24"
                >
                    {/* Image side */}
                    <div className="w-full lg:w-1/2 relative group order-2 lg:order-1">
                        <div className="absolute -inset-4 sm:-inset-6 md:-inset-12 lg:-inset-20 bg-accent/10 blur-[50px] sm:blur-[70px] md:blur-[120px] lg:blur-[150px] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                        <div className="relative w-full max-w-[520px] mx-auto aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/10] lg:aspect-[4/5] overflow-hidden rounded-sm shadow-[0_24px_50px_-18px_rgba(0,0,0,1)] sm:shadow-[0_30px_60px_-20px_rgba(0,0,0,1)] md:shadow-[0_60px_120px_-30px_rgba(0,0,0,1)] border border-white/5 glass-panel group light-sweep">
                            <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                                className="object-cover object-center sm:object-top transition-transform duration-[5000ms] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 opacity-80" />
                        </div>
                    </div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full lg:w-1/2 space-y-6 sm:space-y-8 md:space-y-12 order-1 lg:order-2 text-left"
                    >
                        <div className="space-y-4 sm:space-y-6 md:space-y-8">
                            <div className="text-accent text-[9px] sm:text-[10px] md:text-[12px] font-black uppercase tracking-[0.28em] sm:tracking-[0.4em] md:tracking-[0.6em] flex items-center gap-3 sm:gap-4">
                                <span className="w-6 sm:w-8 md:w-12 h-[1px] bg-accent/40" />
                                {event.time}
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-9xl font-serif font-black text-white leading-[0.95] tracking-tighter">
                                The <br />
                                <span className="title-shimmer italic font-light">Reception</span>
                            </h2>

                            <p className="text-gray-400 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-lg">
                                {event.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 pt-6 sm:pt-8 md:pt-16 border-t border-white/10 relative">
                                <div className="absolute top-0 left-0 w-12 sm:w-16 md:w-24 h-[1px] bg-accent" />

                                <div>
                                    <p className="text-accent uppercase tracking-[0.28em] sm:tracking-[0.4em] md:tracking-[0.5em] text-[8px] sm:text-[9px] md:text-[10px] font-black mb-2 md:mb-3">
                                        Venue
                                    </p>
                                    <p className="font-serif text-white text-lg sm:text-xl md:text-2xl lg:text-3xl italic tracking-tight leading-snug">
                                        Makkiyad HOLY FACE <br className="hidden md:block" /> auditorium · Wayanad
                                    </p>
                                </div>

                                <div>
                                    <p className="text-accent uppercase tracking-[0.28em] sm:tracking-[0.4em] md:tracking-[0.5em] text-[8px] sm:text-[9px] md:text-[10px] font-black mb-2 md:mb-3">
                                        Event Date
                                    </p>
                                    <p className="font-serif text-white text-lg sm:text-xl md:text-2xl lg:text-3xl italic tracking-tight leading-snug">
                                        April 06 · 2026
                                    </p>
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