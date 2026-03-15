'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => (prev < 100 ? prev + 1 : 100));
        }, 20);
        const timer = setTimeout(() => setIsLoading(false), 3000);
        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="preloader"
                    className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center overflow-hidden"
                    exit={{ 
                        clipPath: 'circle(0% at 50% 50%)',
                        opacity: 0,
                        transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] }
                    }}
                >
                    {/* Atmospheric Glows */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px] animate-pulse" />

                    <div className="relative flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, letterSpacing: '2em' }}
                            animate={{ opacity: 1, letterSpacing: '0.8em' }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            className="text-white font-serif text-3xl md:text-5xl uppercase font-bold text-center mb-10"
                        >
                            <span className="title-shimmer italic">Welcoming</span> <br />
                            <span className="inline-block mt-4">NIDHIN & ANAGHA</span>
                        </motion.div>
                        
                        {/* Progress Bar */}
                        <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
                            <motion.div 
                                initial={{ x: '-100%' }}
                                animate={{ x: `${progress - 100}%` }}
                                className="absolute inset-0 bg-accent"
                            />
                        </div>
                        
                        <div className="mt-6 text-[10px] text-accent uppercase tracking-[0.5em]">
                            {progress}%
                        </div>
                    </div>

                    <div className="absolute bottom-20 flex flex-col items-center gap-4">
                        <div className="w-[1px] h-20 bg-gradient-to-t from-accent to-transparent opacity-40" />
                        <span className="text-[10px] text-white/20 uppercase tracking-[1em]">Beginning</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
