'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import Particles from '@/components/Particles';

export default function About() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Cinematic Depth Transitions
    const img1Y = useTransform(smoothScroll, [0, 1], [-50, 50]);
    const img2Y = useTransform(smoothScroll, [0, 1], [50, -50]);
    const textLayerY = useTransform(smoothScroll, [0, 1], [100, -100]);

    return (
        <section ref={sectionRef} className="py-64 bg-black relative overflow-hidden">
            <Particles />
            {/* LARGE BACKGROUND DECOR */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
                <h3 className="text-[30vw] font-serif font-black text-white italic -rotate-12 tracking-tighter">SOULS</h3>
            </div>
            
            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-center">
                    
                    {/* Balanced Double Photo Composition */}
                    <div className="relative group">
                        {/* Atmospheric Glow */}
                        <div className="absolute -inset-20 bg-accent/10 blur-[150px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        
                        <div className="relative grid grid-cols-12 gap-4">
                            {/* Main Background Image ( real_image1.png ) */}
                            <motion.div 
                                style={{ y: img1Y }}
                                className="col-start-1 col-span-9 aspect-[3/4] overflow-hidden rounded-sm shadow-2xl glass-panel relative z-10"
                            >
                                <Image
                                    src="/img/real_image1.png"
                                    alt="Nidhin & Anagha Portrait"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </motion.div>

                            {/* Floating Detail Image ( real_image.jpeg ) */}
                            <motion.div 
                                style={{ y: img2Y }}
                                className="col-start-6 col-end-13 top-1/4 absolute aspect-[3/4] overflow-hidden rounded-sm shadow-2xl border-4 border-black z-20"
                            >
                                <Image
                                    src="/img/real_image.jpeg"
                                    alt="Detail Shot"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-accent/10" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Sophisticated Editorial Content */}
                    <div className="relative space-y-16">
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-6"
                            >
                                <div className="w-12 h-[1px] bg-accent" />
                                <span className="text-accent uppercase tracking-[0.8em] text-[10px] font-bold">The Story</span>
                            </motion.div>
                            
                            <motion.h2 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="text-6xl md:text-9xl font-serif text-white leading-[0.85] tracking-tighter"
                            >
                                Two Souls <br />
                                <span className="shimmer-text italic font-light">One Lifetime</span>
                            </motion.h2>
                        </div>

                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-gray-400 text-2xl font-light leading-relaxed max-w-lg"
                        >
                            Our journey is a celebration of the destiny that brought us together—a union where laughter meets legacy and where two separate worlds create a new, beautiful universe in the heart of Makkiyad HOLY FACE auditorium.
                        </motion.p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-white/10">
                            <motion.div style={{ y: textLayerY }} className="space-y-4">
                                <h4 className="text-accent font-serif italic text-3xl">Legacy</h4>
                                <p className="text-gray-500 text-sm font-light leading-loose">Built on traditions that honor our past while stepping boldly into a future filled with wonder.</p>
                            </motion.div>
                            <motion.div style={{ y: textLayerY }} className="space-y-4">
                                <h4 className="text-accent font-serif italic text-3xl">Infinite</h4>
                                <p className="text-gray-500 text-sm font-light leading-loose">A promise to cherish every heartbeat and to build a home where love is the only language spoken.</p>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
