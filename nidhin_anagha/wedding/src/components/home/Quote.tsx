'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Quote() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const blur = useTransform(scrollYProgress, [0, 0.5, 1], ["blur(10px)", "blur(0px)", "blur(10px)"]);

    return (
        <section ref={sectionRef} className="py-32 md:py-64 bg-black relative flex items-center justify-center overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-full md:w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-full md:w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />

            <motion.div
                style={{ 
                    scale: typeof window !== 'undefined' && window.innerWidth > 768 ? scale : 1, 
                    filter: typeof window !== 'undefined' && window.innerWidth > 768 ? blur : "none" 
                }}
                className="container max-w-5xl mx-auto px-6 text-center space-y-12 md:space-y-16"
            >
                <div className="flex flex-col items-center gap-8 md:gap-10">
                    <div className="w-12 md:w-16 h-[1px] bg-accent/30" />
                    
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-light italic text-white/90 leading-[1.3] tracking-tight px-4 md:px-0">
                        "Loved you <span className="text-accent">yesterday</span>, love you still, <br />
                        always have, <br className="md:hidden" /> always <span className="italic font-normal title-shimmer px-2">will</span>."
                    </h2>

                    <div className="flex flex-col items-center gap-6 pt-6 md:pt-10">
                        <div className="flex items-center gap-4 md:gap-6">
                            <div className="w-6 md:w-8 h-[1px] bg-white/10" />
                            <span className="text-accent text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] md:tracking-[1em]">N <span className="italic font-light text-white/40">&</span> A</span>
                            <div className="w-6 md:w-8 h-[1px] bg-white/10" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
