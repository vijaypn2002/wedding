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
        <section ref={sectionRef} className="py-64 bg-black relative flex items-center justify-center">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                style={{ scale, filter: blur }}
                className="container max-w-5xl mx-auto px-6 text-center space-y-16"
            >
                <div className="flex flex-col items-center gap-10">
                    <div className="w-16 h-[1px] bg-accent/30" />
                    
                    <h2 className="text-4xl md:text-7xl font-serif font-light italic text-white/90 leading-[1.3] tracking-tight">
                        "Loved you <span className="text-accent">yesterday</span>, love you still, <br className="hidden md:block" />
                        always have, always <span className="italic font-normal title-shimmer px-2">will</span>."
                    </h2>

                    <div className="flex flex-col items-center gap-6 pt-10">
                        <div className="flex items-center gap-6">
                            <div className="w-8 h-[1px] bg-white/10" />
                            <span className="text-accent text-xs font-bold uppercase tracking-[1em]">N <span className="italic font-light text-white/40">&</span> A</span>
                            <div className="w-8 h-[1px] bg-white/10" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
