'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('2026-04-06T19:00:00'); // 7:00 PM Reception

        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timeUnits = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Min', value: timeLeft.minutes },
        { label: 'Sec', value: timeLeft.seconds }
    ];

    return (
        <section className="py-40 bg-black relative overflow-hidden">
            {/* STICKY TEXT BACKGROUND */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                <h3 className="text-[25vw] font-serif font-black text-white italic">WAITING</h3>
            </div>

            <div className="container max-w-5xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center gap-20">
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center space-y-4"
                    >
                        <span className="text-accent text-[11px] font-bold uppercase tracking-[0.8em]">Counting Down To</span>
                        <h2 className="text-6xl md:text-8xl font-serif text-white tracking-tighter">
                            The <span className="shimmer-text italic font-light">Big Day</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 w-full">
                        {timeUnits.map((unit, index) => (
                            <motion.div
                                key={unit.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className="group relative flex flex-col items-center justify-center p-10 md:p-14 glass-panel border border-white/10 rounded-sm"
                            >
                                {/* Active Hover Glow */}
                                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[20px]" />
                                
                                <span className="text-5xl md:text-8xl font-serif font-bold text-white mb-4 tracking-tighter relative z-10">
                                    {unit.value.toString().padStart(2, '0')}
                                </span>
                                <span className="text-accent text-[10px] uppercase tracking-[0.6em] font-black relative z-10">
                                    {unit.label}
                                </span>

                                {/* Corner Decor */}
                                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Timeline Line Decor */}
                    <div className="flex flex-col items-center gap-8">
                        <div className="w-[1px] h-32 bg-gradient-to-b from-accent to-transparent" />
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-white/30 text-[9px] uppercase tracking-[1em] font-light"
                        >
                            Journey Begins April 2026
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}
